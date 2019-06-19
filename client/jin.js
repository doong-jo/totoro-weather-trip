class Jin {
    constructor() {}

    init(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.eyeClose = false;

        this.jin = new Array();
        this.gwang = new Array();

        const setJinParts = ['hand_left','hand_right','skirt','body_base','cloth_bottom_left','cloth_left_top','cloth_right_top','cloth_left_hand','cloth_right_hand','cloth_belt','neck','head_base','ear_right','ear_left','jinhair','jinhairleft','jinhairright','flower_left','flower_top','flower_right','mouse'
        ];
        const gwang = ['gwangMark_01','gwangMark_02','gwangMark_03']

    drawFromJson = new DrawJSON();

    drawFromJson.loadDataFromJson('jin.json', this.jin, setJinParts);
    drawFromJson.loadDataFromJson('jin.json', this.gwang, gwang);

    setInterval(() => {
        this.eyeClose =  true;
        setTimeout(()=> {
            this.eyeClose =  false;
        }, 100);
    }, 3500);
}

    draw() {
        drawFromJson.draw(this.jin, this.x, this.y, this.scale);

        fill('#000000');

        if( this.eyeClose ) {
            ellipse(this.x + 90 * this.scale, this.y + 140 * this.scale, 3);
            ellipse(this.x + 48 * this.scale, this.y + 135 * this.scale, 3);

        } else {
            ellipse(this.x + 90 * this.scale, this.y + 140 * this.scale,7 * this.scale,20 * this.scale);
            ellipse(this.x + 48 * this.scale, this.y + 135 * this.scale,7 * this.scale,20 * this.scale);

        }

        fill('#3C2994')
        ellipse(this.x + 95 * this.scale, this.y + 237 * this.scale, 20 * this.scale,20 * this.scale);
        drawFromJson.draw(this.gwang,this.x,this.y,this.scale);

    }
}
