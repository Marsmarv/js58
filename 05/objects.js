var Person = function(aName, age) {
	// console.log("Person created!")
	this.name = aName
	this.age = age
	// this.gender = "gender"

}

Person.prototype.canDrive = function() {
	// console.log("canDrive was called!!")
	if(this.age >= 16) {
		return true;
	}	else {
		return false;
	}
}

var Robert = new Person("Robert", 6)
console.log("The person is: ", Robert.name)
console.log("The person's age is: ", Robert.age)
// console.log("The person's gender is: ", Robert.gender)
console.log("Can they drive?", Robert.canDrive())