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
            const date = weatherList[i].dt_txt.split(" ")[0];

            if( beforeDate !== date ) {
                this.weatherDic[Object.keys(this.weatherDic).length] = weatherList[i];
            } beforeDate = date;
        }
    }
}
