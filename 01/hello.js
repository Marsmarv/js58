var x = 'Hello ';

console.log(x + 'Marvin');
console.log(x + 'Jack');

var age = 65;

if(age >= 21){
	console.log("You may legally have a drink")
}
	if(age < 25) {
	 console.log("You probably want Jaeger")
	}
		if(age >= 25 && age < 60) {
		 console.log("You want an old fashioned")
		}
			if(age >= 60) {
	 		 console.log("You want to drink Brandy")
			}

var counter = 1
while(counter < 10) {
	console.log("woohoo " + counter)
	
	if(counter % 3 == 0) {
		break
	}
	counter++
}
