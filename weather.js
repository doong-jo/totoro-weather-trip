let self;

class Weather {
    constructor(props) {
        self = this;
        this.api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        this.apiKey = '&APPID=45ffb063f1238f824be465807f3f1935';
        this.cityNames = ['Seoul', 'NewYock', 'Beijing', 'Tokyo', 'Toronto'];
    }

    init() {
        this.weatherData = {};
        this.weatherDic = {};
        this.returnDataCallback = () => {};
    }

    loadWeatherData(city, disOfDay, callback) {
        this.returnDataCallback = callback;

        var url  = this.api + city + this.apiKey;
        loadJSON(url, this.gotData);
    }

    gotData(data) {

        self.assembleData(data);
        self.returnDataCallback(self.weatherDic);
    }

    assembleData(data) {
        // print(weatherData);
        let weatherList = data.list;

        let beforeDate = "";
        for(var i=0; i<weatherList.length; i++) {
            const date = weatherList[i].dt_txt.split(" ")[0];

            if( beforeDate !== date ) {
                this.weatherDic[Object.keys(this.weatherDic).length] = weatherList[i];
            } beforeDate = date;
        }

        // print(weatherDic);
    }

    drawRaining(volume) {

    }

    drawSnowing(volume) {

    }

}

// function getWeatherData() {
//     return weatherData;
// }
//
// function getWeatherData(i) {
//     if( i > 5 ) { return null; }
//
//     return weatherDic[i];
// }
