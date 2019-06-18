class Info {
    constructor(props) {
        this.cityTv = {
            'trigger' : false,
            'pos' : { 'x': 90, 'y': CON.DIMEN.height - 45 },
            'size' : 45,
            'sizeAdd' : 5,
            'color' : '#FFFFFF',
            'startPos' : { 'x': 90, 'y': CON.DIMEN.height - 45 },

            'posAnimMove' : { 'x': 0, 'y': 0},
            'posAnimDest' : { 'x': 0, 'y': 0},
            'moveAmount' : 0,
            'moveAmountOrigin' : 0,
            'pivotMillis' : -99999,
        };

        this.dateTv = {
            'trigger' : false,
            'pos' : { 'x': CON.DIMEN.width - 120, 'y': 40 },
            'size' : 25,
            'sizeAdd' : 5,
            'color' : '#FFFFFF',
            'startPos' : { 'x': CON.DIMEN.width - 120, 'y': 40 },

            'posAnimMove' : { 'x': 0, 'y': 0},
            'posAnimDest' : { 'x': 0, 'y': 0},
            'moveAmount' : 0,
            'moveAmountOrigin' : 0,
            'pivotMillis' : -99999,
        };
    }

    init() {
        // this.cityTv.view.style('color', this.cityTv.color);
        // this.dateTv.view.style('color', this.dateTv.color);
        textAlign(CENTER, CENTER);
    }

    draw() {
        fill(255);

        if( this.cityTv.trigger ) {
            this.positioning(this.cityTv);
        } else if( this.dateTv.trigger ) {
            this.positioning(this.dateTv);
        }

        textSize(this.cityTv.size);
        text(this.cityTv.text, this.cityTv.pos.x, this.cityTv.pos.y);

        textSize(this.dateTv.size);
        text(this.dateTv.text, this.dateTv.pos.x, this.dateTv.pos.y);
    }

    prePositioning(object, isStart) {
        const st = { 'x': object.startPos.x, 'y':  object.startPos.y};
        const dt = { 'x': CON.DIMEN.width/2 + 50, 'y': CON.DIMEN.height/2 };
        const subX = abs(dt.x - st.x);
        const subY = abs(dt.y - st.y);
        const speed = 0.02;

        const dis = sqrt(pow(subX, 2) + pow(subY, 2));

        object.posAnimMove.x = subX / (dis * speed);
        object.posAnimMove.x = dt.x - st.x  >= 0 ? object.posAnimMove.x : -object.posAnimMove.x;
        object.posAnimMove.y = subY / (dis * speed);
        object.posAnimMove.y = dt.y - st.y  >= 0 ? object.posAnimMove.y : -object.posAnimMove.y;

        if( !isStart ) {
            object.posAnimMove.x = -object.posAnimMove.x;
            object.posAnimMove.y = -object.posAnimMove.y;
            object.sizeAdd = -object.sizeAdd;
            object.posAnimDest = st;
        } else {
            object.posAnimDest = dt;
        }

        object.moveAmount = object.moveAmountOrigin = subX;
    }

    positioning(object) {
        if( millis() - object.pivotMillis  < CON.TIME.textEffectDelay ) {
            return;
        }

        if( object.pos.x == object.posAnimDest.x &&
            object.pos.y == object.posAnimDest.y ) {
                object.trigger = false;
                return; }

        object.pos = {
            'x': object.pos.x + object.posAnimMove.x,
            'y': object.pos.y + object.posAnimMove.y,
        };
        object.moveAmount -= abs(object.posAnimMove.x);

        // scale
        object.size += object.sizeAdd;

        if( object.moveAmount <= 0 ) {
            object.pos = { 'x': object.posAnimDest.x, 'y': object.posAnimDest.y };
            this.prePositioning(object, false);
            object.pivotMillis = millis();
            // object.view.position(this.posAnimDest.x, this.posAnimDest.y);
            return;
        }
    }

    startCityAnim() {
        if( !this.cityTv.trigger ) {
            this.cityTv.trigger = true;
            this.prePositioning(this.cityTv, true);
        }
    }

    startDateAnim() {
        if( !this.dateTv.trigger ) {
            this.dateTv.trigger = true;
            this.prePositioning(this.dateTv, true);
        }
    }

    getCityAnimTrig() {
        return this.cityTv.trigger;
    }

    getDateAnimTrig() {
        return this.dateTv.trigger;
    }

    setCityText(cityText) {
        this.cityTv.text = cityText;
    }

    setDateText(dateText) {
        this.dateTv.text = dateText;
        // this.dateTv.view.html(dateText);
    }
}
