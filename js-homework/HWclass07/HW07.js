$(function() {
	console.log('123')

	var $input = $('#go-input')
	var $button = $('.go-btn')

	$button.on('click', function(e){
		e.preventDefault()
	 	  var x = $input.val();
	  console.log(x)

		for(var i = 0 ; i < x; i++) {
			if (i % 3 == 0) {
				console.log("Fizz")
			} else if (i % 5 == 0) {
				console.log("Buzz")
			} else {console.log(i)}
		}
	
	})
})

