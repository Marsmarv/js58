var request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if(request.readyState === XMLHttpRequest.DONE)
	var parsedJSON = JSON.parse(request.responseText)
	console.log(parsedJSON)
	var elem = document.getElementById('body')
	elem.innerHTML = parsedJSON.currently.temperature
	// other way of doing it
	// var currentTemp = parsedJSON.currently.temperature
	// document.getElementById('body').innerHTML 
}

request.open('GET', 'https://js58-proxy.herokuapp.com/forecast/4bb2f86685d31dc91dfa7a0297d1af92/40.783060,-73.971249')
request.send()



//  2

var url = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/32.72,-40.00';

$.get(url, function(r) {
  $('body').html(r.currently.temperature);
})