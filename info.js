class Info {
    constructor(props) {
        this.cityTv = {
            'pos' : {'x': 0, 'y': 0},
            'size' : 18,
            'color' : '#FFFFFF',
        };

        this.dateTv = {
            'pos' : {'x': 0, 'y': 0},
            'size' : 18,
            'color' : '#FFFFFF',
        };

        this.cityScaleAnimTrig = false;
        this.dateScaleAnimTrig = false;

        this.posAnimMove = { 'x': 0, 'y': 0 };
        this.posAnimDest = { 'x': 0, 'y': 0 };
        this.moveAmount = 0;
    }

    init() {
        // this.cityTv.view.style('color', this.cityTv.color);
        // this.dateTv.view.style('color', this.dateTv.color);
        textAlign(CENTER, CENTER);
    }

    draw() {
        if( this.cityScaleAnimTrig ) {
            this.positioning(this.cityTv);

            text(this.cityTv.text, this.cityTv.pos.x, this.cityTv.pos.y);
        } else if( this.dateScaleAnimTrig ) {
            this.positioning(this.dateTv);

            text(this.dateTv.text, this.dateTv.pos.x, this.dateTv.pos.y);
        }
    }

    prePositioning(object) {
        const st = { 'x': object.pos.x, 'y':  object.pos.y};
        const dt = { 'x': CON.DIMEN.width/2, 'y': CON.DIMEN.height/2 };
        const subX = abs(dt.x - st.x);
        const subY = abs(dt.y - st.y);
        const speed = 0.02;

        this.posAnimDest = dt;

        const dis = sqrt(pow(subX, 2) + pow(subY, 2));

        this.posAnimMove.x = subX / (dis * speed);
        this.posAnimMove.x = dt.x - st.x  >= 0 ? this.posAnimMove.x : -this.posAnimMove.x;
        this.posAnimMove.y = subY / (dis * speed);
        this.posAnimMove.y = dt.y - st.y  >= 0 ? this.posAnimMove.y : -this.posAnimMove.y;

        this.moveAmount = subX;
    }

    positioning(object) {
        if( this.moveAmount <= 0 ) { return; }

        object.pos = {
            'x': object.pos.x + this.posAnimMove.x,
            'y': object.pos.y + this.posAnimMove.y,
        };
        this.moveAmount -= abs(this.posAnimMove.x);

        // scale
        textSize(this.cityTv.size += 10);

        if( this.moveAmount <= 0 ) {
            object.pos = { 'x': this.posAnimDest.x, 'y': this.posAnimDest.y };
            // object.view.position(this.posAnimDest.x, this.posAnimDest.y);
            return;
        }
    }

    startCityAnim() {
        this.cityScaleAnimTrig = true;
        this.prePositioning(this.cityTv);
    }

    startDateAnim() {
        this.dateScaleAnimTrig = true;
        this.prePositioning(this.dateTv);
    }

    setPosition(cityPos, datePos) {
        this.cityTv.pos = cityPos;
        // this.cityTv.view.position(this.cityTv.pos.x, this.cityTv.pos.y);

        this.dateTv.pos = datePos;
        // this.dateTv.view.position(this.dateTv.pos.x, this.dateTv.pos.y);
    }

    setCityText(cityText) {
        this.cityTv.text = cityText;
    }

    setDateText(dateText) {
        this.dateTv.text = dateText;
        // this.dateTv.view.html(dateText);
    }
}
