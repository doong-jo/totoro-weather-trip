const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const apiKey = '&APPID=45ffb063f1238f824be465807f3f1935';
const cityNames = ['Seoul', 'London', 'Beijing', 'Tokyo', 'Washington'];

let weatherData;

function loadWeatherData(city, disOfDay) {
    weatherData = null;

    var url  = api + city + apiKey;
    loadJSON(url, gotData);
}

function gotData(data) {
    print(data);
    weatherData = data;

}

function makeThreeDaysWheather() {

}

function getWeatherData() {
    return weatherData;
}
