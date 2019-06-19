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
	
	moveCity(dir, index) {
		if( dir == CON.CODE.NEXT_CITY ) {
			this.pivot = this.pivot < CON.ARRAY.city.length - 1 ? this.pivot + 1 : this.pivot;
			console.log('next city', this.pivot);
		} else if( dir == CON.CODE.PREV_CITY ) {
			this.pivot = this.pivot > 0 ? this.pivot - 1 : this.pivot;
		} else if( dir == CON.CODE.INDEX_CITY ) {
			this.pivot = index;
		}
		
		return CON.ARRAY.city[this.pivot];
	}

    changeCity(cityIndex) {
        this.pivot = cityIndex;

        return CON.ARRAY.city[this.pivot];
    }
}
