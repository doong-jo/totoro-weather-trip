class Info {
    constructor(props) {
        this.cityTextView = createElement('h4', 'cityTextView');
        this.dateTextView = createElement('h4', 'dateTextView');

        this.cityTextView.style('color', "#FFFFFF");
        this.dateTextView.style('color', "#FFFFFF");
    }

    init() {

    }

    setPosition(cityPos, datePos) {
        this.cityTextView.position(cityPos.x, cityPos.y);
        this.dateTextView.position(datePos.x, datePos.y);
    }

    setCityText(cityText) {
        this.cityTextView.html(cityText);
    }

    setDateText(dateText) {
        this.dateTextView.html(dateText);
    }
}
