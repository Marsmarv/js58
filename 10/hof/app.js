var launch = function() {
	console.log("launched!");
}

var launchTwo = function() {
	console.log("launched a different rocket!");
}
// executes the function
// launch();


// Higher order function bcause inside it we pass a function
function rocketLaunch(launchFn) {
	for(var i = 10; i > 0; i--) {
		console.log(i,"...")
	}
	// telling the function that whats going to be passed is a function
	// if its not a function it comes back as an error
	launchFn();
}

rocketLaunch(launch)
rocketLaunch(launchTwo)

setTimeout(function() {
	rocketLaunch(launch);
}, 5000)

// JQuery might look something like this
function on(eventType, calllbackFn) {
	if(eventType == 'click') {
		calllbackFn();
	}
}
