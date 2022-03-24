const canvas = new UICanvas()

const denyTexture = new Texture('images/no-sign.png')

const denyImage = new UIImage(canvas, denyTexture)
denyImage.hAlign = 'center'
denyImage.vAlign = 'center'
denyImage.positionX = 0
denyImage.positionY = 0
denyImage.width = 256
denyImage.height = 256
denyImage.sourceLeft = 0
denyImage.sourceTop = 0
denyImage.sourceWidth = 512
denyImage.sourceHeight = 512
denyImage.isPointerBlocker = false
denyImage.visible = false

const denyCaption = new UIText(canvas)
denyCaption.hAlign = 'center'
denyCaption.vAlign = 'center'
denyCaption.hTextAlign = 'center'
denyCaption.positionX = 0
denyCaption.positionY = -170
denyCaption.fontSize = 20
denyCaption.isPointerBlocker = false
denyCaption.visible = false
denyCaption.value =
  'This scene does not allow smart wearables.\nTake them off, then step out and back in.'

export function showDenyUI() {
  denyImage.visible = true
  denyCaption.visible = true
}

export function hideDenyUI() {
  denyImage.visible = false
  denyCaption.visible = false
}
