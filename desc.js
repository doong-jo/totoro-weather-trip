class Desc {
    constructor(props) {
        this.cityName = "Seoul";
        this.cityElement = {};

        this.timeData = "GMT+9 17:23";
        this.timeElement = {};
    }

    init() {
        this.cityElement = createElement('h2', this.cityName);
        this.timeElement = createElement('h2', this.timeData);
    }

    setCityName(val) {
        this.cityName = val;
    }

    draw() {

    }
}
