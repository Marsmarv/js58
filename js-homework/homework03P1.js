// Problem 1
	var numberList = [ 1, 5, 2, 20, 7, 90, 3 ]


function bigNumberFinder(numberList) {
	var numLength = numberList.length;
	var biggestNumberSoFar = 0
	for (var i = 0; i < numLength; i++) {
		
		currentNumVal = numberList[i]

		if (currentNumVal > biggestNumberSoFar) {
			// we need change the biggest to the current number
			biggestNumberSoFar = currentNumVal
		}
	var theBiggestNumber = biggestNumberSoFar
	}
	return theBiggestNumber
}
var result = bigNumberFinder(numberList)
console.log(result)



//2

function inArray(value, array) {
	var isInArray = false
	for (var i = 0; i < array.length; i++) {
		if (array[i] == value) {
			isInArray = true
		}
	}
	return isInArray
}


var myNumber = 3

var result1 = inArray(myNumber, numberList)
console.log(result1)

// 3

function oddPosition(oddNumb) {
	for (var i = 0; i < oddNumb.length; i++)
		if (oddNumb[i] % 2 != 0) {
			console.log("is odd " + oddNumb[i])
		} 
}
var result2 = oddPosition(numberList)
console.log(result2)

// 4


function sumOfAll() {
	var nextNumb = 0
	var i = 1

	while (nextNumb < 1000) {
		nextNumb += numberList[i] + numberList[i - 1];

		console.log(nextNumb)

		numberList.push(nextNumb);
		i++
	}
}
console.log(sumOfAll(nextNumb))



// var lastLetter = word.length - 1;
// var reversedWord = lastLetter


// var word = ''
// function Pano(word) {
	
// 	if (i = 0; i < word.length; i++)
// 		if (word[i] == reversedWord[i] -= 1)

// 	}








// remember that odd numbers are defined by oddNumb % 2 == 0

//The reason why this works is because:
//I created a function 'bigNumberFinder' with parameters numberList
// the variable numLength is equal to the length of the number list
// create a var biggestNumSoFar and = 0
// made a for loop 
// create a variable to take into account the current number and = that to numberlist[i]
// i is equaled to 0 which would be the first number in the array numberlist
// if current numval is greater than biggestnumber so far
// biggestNumberSoFar = cureet bum val











// function panMaker(word) {
// 	var pano = ''
// 	wordLength = word.length;
// 	for (var i = 0; i < wordLength; i++){
// 		console.log('this is a reverse letter ' + word[wordLength - i - 1])

// 		pano += word[wordLength - i - 1]
// 	}
// 	return pano
// }

// function panoChecker(word) {
// 	var reversedWord = panMaker(word)
// 	if (word == reversedWord) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }

// // console.log('my reversedWord is ' + panMaker('dog'))
// console.log('Is this a pano, True or False? ' + panoChecker('racecar'))






