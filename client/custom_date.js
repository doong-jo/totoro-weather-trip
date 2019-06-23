class CustomDate {
    constructor(props) {
		this.curOffset = CON.TIME.city_offset['Seoul'];
        this.jsDate = this.getWorldTime(this.curOffset);
        this.curDate = this.getDateFormat(this.jsDate);
        this.pivot = 0;
    }

    init() { }

    getDateFormat(date) {
        const day = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const makeTwoDigit = (num) => {
            return num >= 10 ? num : '0' + num;
        };

        const result =
        '' + day[date.getDay()] +
        ' ' + makeTwoDigit(date.getMonth() + 1) +
        '-' + makeTwoDigit(date.getDate()) +
        ' ' + makeTwoDigit(date.getHours()) +
        ':' + makeTwoDigit(date.getMinutes());
        return result;
    }

    getDate() {
        this.curDate = this.getDateFormat(this.jsDate);

        return this.curDate;
    }

    getHours() {
        return this.jsDate.getHours();
    }

    getDatePivot() {
        return this.pivot;
    }

    setNextDaysHour() {
        this.jsDate.setHours(15);
        this.jsDate.setMinutes(0);
        this.jsDate.setSeconds(0);
        this.curDate = this.getDateFormat(this.jsDate);
    }

    getWorldTime(tzOffset) { // 24시간제
        var now = new Date();
        var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
        now.setTime(tz);

        return now;
    }
	
	update(city, dir) {
		if( this.pivot >= 4 && dir === CON.CODE.NEXT_DAY ) { return; }
		if( this.pivot <= 0 && dir === CON.CODE.PREV_DAY ) { return; }
		
		this.setLocale(city);
		
		if( this.pivot != 0 ) {
            this.setNextDaysHour();
        }
		
		if( dir === CON.CODE.NEXT_DAY ) {
			if( this.pivot < 4) {
				this.jsDate.setDate(this.jsDate.getDate() + 1);
				this.setNextDaysHour();
				this.curDate = this.getDateFormat(this.jsDate);
				this.pivot += 1;
			}
		} else if( dir == CON.CODE.PREV_DAY ) {
			if( this.pivot > 0 ) {
				this.jsDate.setDate(this.jsDate.getDate() - 1);
				this.pivot -= 1;
				if( this.pivot != 0 ) {
					this.setNextDaysHour();
				} else {
					this.jsDate = this.getWorldTime(this.curOffset);
					this.curDate = this.getDateFormat(this.jsDate);
				}
			} else if ( this.pivot == 0 ) {
				this.jsDate = this.getWorldTime(this.curOffset);
				this.curDate = this.getDateFormat(this.jsDate);
			}
		}
		
		return this.curDate;
	}

    setLocale(city) {
		if( this.curOffset != CON.TIME.city_offset[city] ) {
			this.curOffset = CON.TIME.city_offset[city];
			this.jsDate = this.getWorldTime(CON.TIME.city_offset[city]);
			this.jsDate.setDate(this.jsDate.getDate() + this.pivot);
			if( this.pivot !=0 ) {
				this.setNextDaysHour();
			}
			this.curDate = this.getDateFormat(this.jsDate);	
		}
    }
}
