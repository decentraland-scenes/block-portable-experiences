import { getPortableExperiencesLoaded } from '@decentraland/PortableExperiences'

export let isWearingPE: boolean = false
export let hasWornPE: boolean = false

function checkPortableExperiences() {
  getPortableExperiencesLoaded().then((portableExperiences) => {
    log(portableExperiences)
    if (
      portableExperiences.portableExperiences &&
      portableExperiences.portableExperiences.length > 0
    ) {
      isWearingPE = true
      hasWornPE = true
      showDenyUI()
    } else {
      isWearingPE = false
    }
  })
}

// check when first loading
checkPortableExperiences()

// check when changing avatar
onProfileChanged.add((profileData) => {
  log('Own profile data is ', profileData)
  checkPortableExperiences()
})

import { getUserData } from '@decentraland/Identity'

// check when entering and leaving scene
getUserData().then((myPlayer) => {
  onEnterSceneObservable.add(async (player) => {
    log('player entered scene: ', player.userId)
    if (player.userId === myPlayer?.userId) {
      log('I entered the scene!')
      await checkPortableExperiences()

      if (!isWearingPE) {
        hasWornPE = false
      }
    }
  })

  onLeaveSceneObservable.add((player) => {
    log('player left scene: ', player.userId)
    if (player.userId === myPlayer?.userId) {
      log('I left the scene!')
    }
  })
})

export function showDenyUI() {
  log('CANT PLAY')
}
