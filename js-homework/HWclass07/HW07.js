$(function() {

	var $input = $('#go-input')
	var $button = $('.go-btn')

	$button.on('click', function(e){
		e.preventDefault()
	 	  var x = $input.val();

		for(var i = 0 ; i < x; i++) {
			if (i % 3 == 0) {
				console.log("Fizz")
			} if (i % 5 == 0) {
				console.log("Buzz")
			} if (i % 5 == 0 && i % 3 == 0) {
				console.log("FizzBuzz")
			}
			else {console.log(i)}
		}
	})
})





?????