var sequence = [1, 2]
var nextNumber = 0;
var i = 1;

console.log(sequence[0])




//var nextNumber = sequence[0] + sequence[1]
//sequence.push(nextNumber)

// do {
// 	nextNumber = sequence[i] + sequence[i - 1];
// 	// console.log("number is:", nextNumber)
// 	sequence.push(nextNumber);
// 	i++
// }	while(i < 40);
	

// var lastNumber = sequence[0] + sequence[1]
var nextNumber2 = 0
sequence = [1, 2]
i = 1
while(nextNumber2 < 30) {
	nextNumber2 = sequence[i] + sequence[i - 1];

	console.log("The value of i is", i)
	console.log("The equation is", sequence[i], " + ", sequence[i-1], " = ", nextNumber2)
	
	console.log("The fibinacci number is:", nextNumber2)
	console.log("The Fibinacci array is", sequence)
	console.log(" ")

	sequence.push(nextNumber2);
	i++
}
console.log(nextNumber)
console.log(nextNumber2)


//}	while(sequence < 4000000) {
//		console.log(sequence);

//}

//console.log(sequence);