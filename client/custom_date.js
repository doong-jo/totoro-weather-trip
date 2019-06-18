class CustomDate {
    constructor(props) {
        this.jsDate = new Date();
        this.curDate = null;
        this.pivot = 0;
    }

    init() {
        this.curDate = this.getDateFormat(this.jsDate);
    }

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

    nextDate() {
        if( this.pivot < 5) {
            this.jsDate.setDate(this.jsDate.getDate() + 1);
            this.setNextDaysHour();
            this.pivot += 1;
        }

        return this.curDate;
    }

    prevDate() {
        if( this.pivot > 0 ) {
            this.jsDate.setDate(this.jsDate.getDate() - 1);
            this.pivot -= 1;
            if( this.pivot != 0 ) {
                this.setNextDaysHour();
            } else {
                this.jsDate = new Date();
                this.curDate = this.getDateFormat(this.jsDate);
            }
        } else if ( this.pivot == 0 ) {
            this.jsDate = new Date();
            this.curDate = this.getDateFormat(this.jsDate);
        }

        return this.curDate;
    }

    getWorldTime(tzOffset) { // 24시간제
        var now = new Date();
        var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
        now.setTime(tz);

        this.jsDate = now;
    }

    setLocale(city) {
        this.getWorldTime(CON.TIME.city_offset[city]);
        // Input : cityName
        // Process : Set date
        // Output :
    }
}
