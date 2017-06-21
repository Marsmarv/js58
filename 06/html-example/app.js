window.onload = function() {
	var elem = document.getElementById("pig")
	console.log(elem);
// console.log("Hello World");
	var elem2 = document.createElement("marquee")
	elem.appendChild(elem2);

	var text = document.createTextNode("Tail")
	elem2.appendChild(text);

	var btn = document.getElementById("my-button");
	btn.onclick = function(event) {
		var newElem = document.createElement("img");
		newElem.src = "http://placekitten.com/200/" + parseInt(Math.random() * 1000)

		elem.appendChild(newElem);
	}
	
	var form = document.getElementById("my-form")
	form.onsubmit = function(e) {
		event.preventDefault();
		alert("you submitted the form");
	}

	
}
