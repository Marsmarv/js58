

//if(myNumber < 1000) {

//}

// //for(var i = 0; i < 10; i++) {
// //	if (i % 3 === 0)
// //}

// //console.log(i);


var sum = 0;

for(var i = 0; i < 1000; i++) {
	if(i % 5 == 0 || i % 3 == 0) {
//		console.log("the sum is currently: ", sum);
//		console.log("the sum is currently: ", i)
	//  while console logging "sum" & "i"
		sum += i;
        // sum = sum + i
	}
}

console.log("the sum is: ", sum);
//

var sum2 = 0;
var n = 0;
while(n < 1000) {
	if(n % 5 == 0 || n % 3 == 0) {
		sum2 += n
	}
	n++;
}

console.log("the sum2 is: ", sum2);

// function that checks if number is divisable by 3 and 5 
function validSum(word) {
	if(word % 5 == 0 || word % 3 == 0) {
		return word;
	} else {
		return 0;
	}
}

var sum3 = 0

for(var i = 0; i < 1000; i++) {
	sum3 += validSum(i)
}
console.log("the sum3 is: ", sum3);