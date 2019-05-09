const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const apiKey = '&APPID=45ffb063f1238f824be465807f3f1935';
const cityNames = ['Seoul', 'London', 'Beijing', 'Tokyo', 'Washington'];

let weatherData;
let weatherDic = {};

function loadWeatherData(city, disOfDay) {
    weatherData = null;

    var url  = api + city + apiKey;
    loadJSON(url, gotData);
}

function gotData(data) {
    // print(data);
    weatherData = data;
    assembleData(weatherData);
}

function assembleData() {
    // print(weatherData);
    let weatherList = weatherData.list;

    let beforeDate = "";
    for(var i=0; i<weatherList.length; i++) {
        const date = weatherList[i].dt_txt.split(" ")[0];

        if( beforeDate !== date ) {
            weatherDic[date] = weatherList[i];
        } beforeDate = date;
    }

    print(weatherDic);
    // weatherData = data;
}

function getWeatherData() {
    return weatherData;
}
