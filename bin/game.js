
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const checkeredRug = new Entity('checkeredRug')
engine.addEntity(checkeredRug)
checkeredRug.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 7.499998092651367)
})
checkeredRug.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("8ccdbe7a-cddf-4920-bc11-245ebeb90200/Carpet_02/Carpet_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
checkeredRug.addComponentOrReplace(gltfShape2)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundedStarlightRug.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape3)

const constellationRug = new Entity('constellationRug')
engine.addEntity(constellationRug)
constellationRug.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
constellationRug.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("d46670bf-a528-4680-84a6-39ca83a3caca/Carpet_01/Carpet_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
constellationRug.addComponentOrReplace(gltfShape4)

const windowZigzag = new Entity('windowZigzag')
engine.addEntity(windowZigzag)
windowZigzag.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 0.4999990463256836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.999999523162842, 1.5, 1.000000238418579)
})
windowZigzag.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("141ed339-876d-44c8-a7fa-c0adfe474f9c/ZigzagWindow.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
windowZigzag.addComponentOrReplace(gltfShape5)
