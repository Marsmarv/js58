$(function() {
	var loading = $('#loading-marquee')
	loading.hide();

	var scaryCat = $('#scary-cat')
	scaryCat.hide();

	$('#get-weather').on('click', function(event) {
		loading.show();
		event.preventDefault();

		var long = $('#longitude').val();
		var lati = $('#latitude').val();

		
		"https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lati"
		var baseURL = "https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43"
		var weatherURL = baseURL + "/" + long + "," + lati

		$.get(weatherURL, function(response) {
			loading.hide();

			console.log(response);
			var temp = response.currently.temperature;
			$('#current-temp').html(temp);

			var humidity = response.currently.humidity;
			$('#current-humidity').html((humidity * 100) + "%");
			

			var windSpeed = response.currently.windSpeed;
			$('#current-windSpeed').html(windSpeed);
		})
	})

	

	$('#risk-it').on('click', function() {
		scaryCat.show();
		

	})

})