class CustomCity {
    constructor(props) {
        this.pivot = 2;
    }

    init() {

    }

    getCity() {
        return CON.ARRAY.city[this.pivot];
    }

    getCityOffset(hour) {
        return hour + CON.TIME.city_offset[
            CON.ARRAY.city[this.pivot]
        ];
    }

    nextCity() {
        if( this.pivot < CON.ARRAY.city.length - 1 ) {
            this.pivot += 1;
        }

        return CON.ARRAY.city[this.pivot];
    }

    prevCity() {
        if( this.pivot > 0 ) {
            this.pivot -= 1;
        }

        return CON.ARRAY.city[this.pivot];
    }

    changeCity(cityIndex) {
        this.pivot = cityIndex;

        return CON.ARRAY.city[this.pivot];
    }

    setLocale(city) {

    }
}
