
import { getUserData } from '@decentraland/Identity'
import { hideDenyUI, showDenyUI } from './denyUI'
import { getPortableExperiencesLoaded } from '@decentraland/PortableExperiences'

export let isWearingPE: boolean = false
export let hasWornPE: boolean = false

export function checkPortableExperiences() {
	getPortableExperiencesLoaded()
		.then((data) => {
			log('PORTABLE EXPERIENCES: ', data.portableExperiences)
			if (data.portableExperiences && data.portableExperiences.length > 0) {
				isWearingPE = true
				hasWornPE = true
				showDenyUI()
			} else {
				isWearingPE = false
			}
		})
		.catch((error) => log(error))
}


// check when entering scene
getUserData()
	.then((myPlayer) => {
		onEnterSceneObservable.add(async (player) => {
			log('player entered scene: ', player.userId)
			if (player.userId === myPlayer?.userId) {
				log('I entered the scene!')
				await checkPortableExperiences()

				if (!isWearingPE) {
					hasWornPE = false
				}

				if (hasWornPE || isWearingPE) {
					showDenyUI()
				}
			}
		})

		onLeaveSceneObservable.add((player) => {
			log('player left scene: ', player.userId)
			if (player.userId === myPlayer?.userId) {
				log('I left the scene!')
				hideDenyUI()
			}
		})
	})
	.catch((error) => log(error))
