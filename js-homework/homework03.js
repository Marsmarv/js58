function bigNumberFinder(numberList) {
	// this function takes 1 aurgument that we are calling numbList
	var numLength = numberList.length;
	var biggestNumberSoFar = 0
	for (var i = 0; i < numLength; i++) {
		// we are going through each number in the numbList array
		
		currentNumVal = numberList[i]

		if (currentNumVal > biggestNumberSoFar) {
			// we need change the biggest to the current number
			biggestNumberSoFar = currentNumVal
		}
	}
	var theBiggestNumber = biggestNumberSoFar
	//the biggest number so far became the biggest number because we all done now

	return theBiggestNumber
	// we are returning the value of biggestNumberSoFar when we are done
}

var testNumberList = [1, 5, 2, 20, 7, 90, 3 ];
var testNumberList2 = [1, 2];
var testNumberList3 = [1, 5, 2, 20, 7, 90, 3, 80, 12, 61, 89, 499, 27, 1, 3737, 2983, 29734 ];

var result = bigNumberFinder(testNumberList)
console.log(result)

// remember that odd numbers are defined by oddNumb % 2 == 0































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

