let self;

class Weather {
    constructor(props) {
        self = this;
        this.api = CON.API.weather;
        this.apiKey = KEYINFO.weather;
        this.cityNames = CON.ARRAY.city;
    }

    init() {
        this.weatherData = {};
        this.weatherDic = {};
        this.returnDataCallback = () => {};
    }

    loadWeatherData(city, callback) {
        this.returnDataCallback = callback;

        var url  = this.api + city + this.apiKey;
        loadJSON(url, this.gotData);
    }

    gotData(data) {
        self.assembleData(data);
        self.returnDataCallback(self.weatherDic);
    }

    assembleData(data) {
        let weatherList = data.list;
        this.weatherDic = {};

        let beforeDate = "";
        for(var i=0; i<weatherList.length; i++) {
            let startDate = weatherList[i].dt_txt.split(" ")[0];
            let date = startDate;
            let temp_max = -1;
            let temp_min = 999;
            let j = 0;

            while(startDate == date && i != weatherList.length - 1) {
                temp_max = temp_max < weatherList[i].main.temp_max ? weatherList[i].main.temp_max : temp_max;
                temp_min = temp_min > weatherList[i].main.temp_min ? weatherList[i].main.temp_min : temp_min;

                i++;
                j++;
                date = weatherList[i].dt_txt.split(" ")[0];
            }

            weatherList[i].main.temp_max = temp_max;
            weatherList[i].main.temp_min = temp_min;
            this.weatherDic[Object.keys(this.weatherDic).length] = weatherList[i];
        }
    }
}
