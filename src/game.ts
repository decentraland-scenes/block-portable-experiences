import Chest from './chest'
import { addPlatforms } from './platforms'

addPlatforms()

const treasureChest = new Chest({
  position: new Vector3(6.5, 5, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
