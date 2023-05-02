import Chest from './chest'
import { checkPortableExperiences } from './peTracking'
import { addPlatforms } from './platforms'

addPlatforms()

const treasureChest = new Chest({
	position: new Vector3(6.5, 5, 7.5),
	rotation: new Quaternion(0, 0, 0, 1),
	scale: new Vector3(1, 1, 1)
})

// check when first loading
checkPortableExperiences()

// check when changing avatar
onProfileChanged.add((profileData) => {
	log('Own profile data is ', profileData)
	checkPortableExperiences()
})