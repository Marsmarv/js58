

//if(myNumber < 10) {

//}

// //for(var i = 0; i < 10; i++) {
// //	if (i % 3 === 0)
// //}

// //console.log(i);


var sum = 0;

for(var i = 0; i < 1000; i++) {
	if(i % 5 == 0 || i % 3 == 0) {
		sum += i;
	}
}

console.log("the sum is: ", sum);
//

var sum2 = 0;
var n = 0;
while(n < 1000) {
	if(n % 5 == 0 || n % 3 == 0) {
		sum2 += validSum(n)
	}
	n++;
}

console.log("the sum2 is: ", sum2);
//

function validSum(number) {
	if(number % 5 == 0 || number % 3 == 0) {
		return number;
	} else {
		return 0;
	}
}

console.log("the sum3 is: ", sum2);