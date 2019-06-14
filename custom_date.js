class CustomDate {
    constructor(props) {
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
        return this.curDate;
    }

    nextDate() {
        if( this.pivot < 5) {
            this.curDate.setDate(this.curDate.getDate() + 1);

            getDateFormat(this.curDate);
            this.pivot++;
        }

        return this.curDate;
    }

    prevDate() {
        if( this.pivot > 0 ) {
            this.curDate.setDate(this.curDate.getDate() - 1);

            getDateFormat(this.curDate);
            this.pivot--;
        }

        return this.curDate;
    }
}
