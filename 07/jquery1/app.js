

var onLoad = function() {
	// var container = $('div.container');
	var rectangle = $('div.rectangle')
	var container = $('div.container')
	var counter = 0;
	

	// $(container).hide(500);
	// container.hide();
	$('a').click(function(event){
		counter++;
		event.preventDefault();	

		$(this).text("you clicked me " + counter + " times")
	})

	// $('div.rectangle').click(function(event){
	// 	event.preventDefault();
		// $(this).text("You Clicked Me!")
	// var body = $('div.body');

	$(rectangle).click(function() { 
	    $(rectangle).css("background-color", "red");

	$(#button).dblclick(function() {
	    $('body').css("background-color", "yellow");
	})
	});

	// })
}

$(onLoad)




// $('a').click(function(event){
// 	event.preventDefault();	
	// alert('You	clicked	the	link!');	

