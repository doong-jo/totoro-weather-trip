class CustomDate {
    constructor(props) {
        this.jsDate = new Date();
        this.curDate = null;
        this.pivot = 0;
    }

    init() {
        this.curDate = this.getDateFormat(new Date());
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
        this.jsDate.getHours();
    }

    nextDate() {
        if( this.pivot < 5) {
            this.jsDate.setDate(this.jsDate.getDate() + 1);

            this.curDate = this.getDateFormat(this.jsDate);
            this.pivot++;
        }

        return this.curDate;
    }

    prevDate() {
        if( this.pivot > 0 ) {
            this.jsDate.setDate(this.jsDate.getDate() - 1);

            this.curDate = this.getDateFormat(this.jsDate);
            this.pivot--;
        }

        return this.curDate;
    }
}
