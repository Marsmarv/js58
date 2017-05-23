var sequence = [1, 2]
var nextNumber = 0;
var i = 1;


//var nextNumber = sequence[0] + sequence[1]
//sequence.push(nextNumber)

do {
	nextNumber = sequence[i] + sequence[i - 1];
	console.log("number is:", nextNumber)
	sequence.push(nextNumber);
	i++
}	while(nextNumber < 4000000);
	

var lastNumber = sequence[0] + sequence[1]
while(lastNumber < 4000000) {
	nextNumber = sequence[i] + sequence[i - 1];
	console.log("number is:", nextNumber)
	sequence.push(nextNumber);
}


//}	while(sequence < 4000000) {
//		console.log(sequence);

//}

//console.log(sequence);