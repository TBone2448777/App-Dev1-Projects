/* Put your scripts in this file. */
/* Remember:
   1. Once the page is loaded, wire up your button so
      it can process the zip code entered.   
   2. The handler for the button click will need
      to make an AJAX call to retrieve the data from
      OpenWeatherMap.com.
*/
// Add event listener for button clicked
window.addEventListener("load", ()=>{
	document.getElementById("getWeatherButton").addEventListener("click", updateAJAX);
});

// Call the AJAX function with content in the zip code box
function updateAJAX(){
	zipI = document.getElementById("zip").value;
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", rrh);
	xhr.responseType = "json";
	xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?zip=${zipI},US&units=imperial&appid=c3f0e4bbbf9a9946485e160bcd8ff53b`);
	xhr.send();
}

// Call this function when the AJAX request is returned
function rrh(){
	console.log(this);
	if (this.status == 200){
		// If successful update content to match the request's results
		weather = this.response;
		document.getElementById("errMsg").innerHTML = "";
		document.getElementById("city").innerHTML = weather.name;
		document.getElementById("temp").innerHTML = "Temp: " + weather.main.temp + "&deg;";
		document.getElementById("feelLike").innerHTML = "Feels like: " + weather.main.feels_like + "&deg;";
		document.getElementById("tempMax").innerHTML = weather.main.temp_max + "&deg; - ";
		document.getElementById("tempMin").innerHTML = weather.main.temp_min + "&deg;";
		document.getElementById("humidity").innerHTML = weather.main.humidity + "%";
		document.getElementById("wind").innerHTML = weather.wind.speed + "mph";
		document.getElementById("weather").innerHTML = weather.weather[0].main;
		document.getElementById("weatherDesc").innerHTML = weather.weather[0].description;
	} else{
		// Clear the website's content and set error message
		document.getElementById("errMsg").innerHTML = "ERROR. Submit proper Zip Code.";
		document.getElementById("city").innerHTML = "City";
		document.getElementById("temp").innerHTML = "Temp:";
		document.getElementById("feelLike").innerHTML = "";
		document.getElementById("tempMax").innerHTML = "";
		document.getElementById("tempMin").innerHTML = "";
		document.getElementById("humidity").innerHTML = "";
		document.getElementById("wind").innerHTML = "";
		document.getElementById("weather").innerHTML = "";
		document.getElementById("weatherDesc").innerHTML = "";
	}
}