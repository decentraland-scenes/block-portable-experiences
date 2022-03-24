import { hasWornPE, isWearingPE } from './peTracking'

export default class Chest extends Entity {
  openClip = new AudioClip('sounds/open.mp3')
  closeClip = new AudioClip('sounds/close.mp3')
  denyClip = new AudioClip('sounds/navigationBackward.mp3')
  open: boolean = false

  constructor(transform: TranformConstructorArgs) {
    super()
    engine.addEntity(this)
    this.addComponent(new Transform(transform))

    const animator = new Animator()
    const closeClip = new AnimationState('close', { looping: false })
    const openClip = new AnimationState('open', { looping: false })
    animator.addClip(closeClip)
    animator.addClip(openClip)
    this.addComponent(animator)

    this.addComponent(new GLTFShape('models/Chest_Pirates.glb'))

    this.addComponent(
      new OnPointerDown(
        () => {
          if (isWearingPE || hasWornPE) {
            log('CANT OPEN, CHEATER')
            const source = new AudioSource(this.denyClip)
            this.addComponentOrReplace(source)
            source.playing = true
            return
          }
          this.toggle(true)
        },
        {
          button: ActionButton.POINTER,
          hoverText: 'Open',
          distance: 6
        }
      )
    )
  }

  toggle(value?: boolean) {
    if (value && this.open === value) return

    //sound
    const source = new AudioSource(value ? this.openClip : this.closeClip)
    this.addComponentOrReplace(source)
    source.playing = true

    //animation
    const animator = this.getComponent(Animator)
    const openClip = animator.getClip('open')
    const closeClip = animator.getClip('close')
    openClip.stop()
    closeClip.stop()
    const clip = value ? openClip : closeClip
    clip.play()

    this.open = value
  }
}
