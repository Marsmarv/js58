// window.onload = function() {

// $(function()
// var container = $('div.container')
// console.log(container)	
// }
// );

// another solution
// var onload = function() {
	// console.log("loaded")
	// var container = $('div.container')
// console.log(container)
// }
// $(onload)

var onLoad = function() {
	console.log("loaded");
	var container = $('div.container');
	
	var helloText = $('<strong></strong>');
	helloText.text('Look at all those chickens')
	helloText.appendTo(container)

	$('div.container h1').text('my new text')
	console.log($('div.container h1').text())
}

$(onLoad);