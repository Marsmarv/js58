// defining objects
var monkey = function (name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;
}


// define methods
monkey.prototype.eatSomething = function(food) {
	// this.foodsEaten = this.foodsEaten + ", " + food
	console.log(this.name + " accidently ate a " + food + ' and that is not part of his normal ' + this.foodsEaten + ' diet.')
}

monkey.prototype.introduce = function() {
	console.log('My name is ' + this.name)
	console.log('I am a ' + this.species)
	// console.log(this.name + " has eaten " + this.foodsEaten)
}


// create an instance of the object
var monkey1 = new monkey('Peter', 'Chimp', 'banana');

// call a method on that instance
monkey1.introduce()
monkey1.eatSomething('carrot')
	// monkey1.introduce();
// => "Peter ate a banana"
// console.log('the monkey is named ' + monkey1.name 
	// + ' his species is ' + monkey1.species 
	// + ' the food he eats is ')

// var monkey2 = new monkey('Josh', 'baboon', 'banana');
// console.log('the monkey is named ' + monkey2.name 
	// + ' his species is ' + monkey2.species 
	// + ' the food he eats is ')

// var monkey3 = new monkey('Spencer', 'arangatang', 'Kiwi');
// console.log('the monkey is named ' + monkey3.name 
	// + ' his species is ' + monkey3.species 
	// + ' the food he eats is ')




//  coding directly from prof.
