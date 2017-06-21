var cat = {breed: "Persian", name: "Penny", color: "Brownish"}
var dog = {breed: "Husky", name: "Ditto", color: "White"}
var monkey = {breed: "Chimp", name: "Squiggle", color: "Brown"}

function proclaimAnimal(animal) {
	console.log("The animal by the name of "
		+ animal.name + " is the color " 
		+ animal.color + " and is the breed " 
		+ animal.breed)
}

proclaimAnimal(cat)
proclaimAnimal(dog)
proclaimAnimal(monkey)

// console.log(cat.breed, dog.name, monkey.color)


// console.log(cat['name'])
// console.log(dog['color'])
// console.log(monkey['breed'])
