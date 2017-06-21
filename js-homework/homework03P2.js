// Problem 2

function inArray(value, array) {
	var isInArray = false
	for (var i = 0; i < array.length; i++) {
		if (array[i] == value) {
			isInArray = true
		}
	}
	return isInArray
}


var myNumber = 4
var myArray = [1, 2, 4]

var result = inArray(myNumber, myArray)
console.log(result)