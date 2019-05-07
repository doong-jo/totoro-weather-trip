const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=b012e5164a3dda77eac5a1fa7fff2f10';
const units= '&units=metric';
// const city = ['Seoul', 'London'];
//var city = 'London';

let weatherData;

function loadWeatherData(city, disOfDay) {
    weatherData = null;

    var url  = api + city + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    print(data);
    weatherData = data;
}

function getWeatherData() {
    return weatherData;
}
