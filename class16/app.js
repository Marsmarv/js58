// replace this entire code block with the config found in the firebase dashboard
// for your created database
var config = {
  apiKey: "AIzaSyDLQc4vHZj4T9w0piK85MXFyDC6yL5qhi4",
  authDomain: "sneaker-bot-project.firebaseapp.com",
  databaseURL: "https://sneaker-bot-project.firebaseio.com",
  projectId: "sneaker-bot-project",
  storageBucket: "sneaker-bot-project.appspot.com",
  messagingSenderId: "463063086191"
};
firebase.initializeApp(config);

// Get a reference to the database service
		var database = firebase.database();

// database.ref("/hello-world").set({ hello: "world" })
	// just adds to fire base
$(function() {
	$('#add-button').on('click', function() {
		var value = $('#new-item').val()
			// grab ref to the todo items key in firebase
			// and then create a new item that we set data on
		var item = database.ref("/todo-items").push();
		item.set( {value: value } )
	})
			// grab a ref to the todo items key and
	database.ref("/todo-items").on('value', function(snapshot) {
		var list = $('#list-items')
		list.empty();
		console.log(snapshot.val());

		snapshot.forEach(function(listItem) {
			var item = listItem.val().value;
		 list.append('<li data-id="' + listItem.key +'">' + item + ' <a href="#" class="remove">Remove</a></li>');		
		})
	})

// add an event listener
	$('#list-items').on('click', 'li a', function(){
		var itemId = $(this).parent().data('id')
		console.log(itemId)
		database.ref("/todo-items/" + itemId).remove()
	})
})
