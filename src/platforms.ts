export function addPlatforms() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene.addComponentOrReplace(transform)

  const bermudaGrass = new Entity('bermudaGrass')
  engine.addEntity(bermudaGrass)
  bermudaGrass.setParent(_scene)
  const gltfShape = new GLTFShape('models/FloorBaseGrass_01.glb')
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  bermudaGrass.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  bermudaGrass.addComponentOrReplace(transform2)

  const dirtGrass = new Entity('dirtGrass')
  engine.addEntity(dirtGrass)
  dirtGrass.setParent(_scene)
  const transform3 = new Transform({
    position: new Vector3(8.5, 4, 11.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass.addComponentOrReplace(transform3)
  const gltfShape2 = new GLTFShape('models/dirt_grass.glb')
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  dirtGrass.addComponentOrReplace(gltfShape2)

  const dirtGrass3 = new Entity('dirtGrass3')
  engine.addEntity(dirtGrass3)
  dirtGrass3.setParent(_scene)
  const transform4 = new Transform({
    position: new Vector3(3.5, 0, 3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass3.addComponentOrReplace(transform4)
  dirtGrass3.addComponentOrReplace(gltfShape2)

  const dirtGrass4 = new Entity('dirtGrass4')
  engine.addEntity(dirtGrass4)
  dirtGrass4.setParent(_scene)
  const transform5 = new Transform({
    position: new Vector3(2.5, 1, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass4.addComponentOrReplace(transform5)
  dirtGrass4.addComponentOrReplace(gltfShape2)

  const dirtGrass5 = new Entity('dirtGrass5')
  engine.addEntity(dirtGrass5)
  dirtGrass5.setParent(_scene)
  const transform6 = new Transform({
    position: new Vector3(2.5, 2, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass5.addComponentOrReplace(transform6)
  dirtGrass5.addComponentOrReplace(gltfShape2)

  const dirtGrass6 = new Entity('dirtGrass6')
  engine.addEntity(dirtGrass6)
  dirtGrass6.setParent(_scene)
  const transform7 = new Transform({
    position: new Vector3(4.5, 3, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass6.addComponentOrReplace(transform7)
  dirtGrass6.addComponentOrReplace(gltfShape2)

  const dirtGrass7 = new Entity('dirtGrass7')
  engine.addEntity(dirtGrass7)
  dirtGrass7.setParent(_scene)
  const transform8 = new Transform({
    position: new Vector3(7.5, 3.5, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirtGrass7.addComponentOrReplace(transform8)
  dirtGrass7.addComponentOrReplace(gltfShape2)

  const solidYellow = new Entity('solidYellow')
  engine.addEntity(solidYellow)
  solidYellow.setParent(_scene)
  const transform9 = new Transform({
    position: new Vector3(6.5, 0, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(5, 5, 5)
  })
  solidYellow.addComponentOrReplace(transform9)
  const gltfShape3 = new GLTFShape('models/solid_yellow.glb')
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  solidYellow.addComponentOrReplace(gltfShape3)
}
