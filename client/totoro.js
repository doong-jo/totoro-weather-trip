class Totoro {
    constructor() {}

    init(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.totoro = new Array();

        const setTotoroParts = ['totoro_body', 'totoro_left_ear', 'totoro_right_ear', 'totoro_head_leaf', 'totoro_leaf_head',
            'totoro_left_Beard_01', 'totoro_left_Beard_02', 'totoro_left_Beard_03', 'totoro_right_Beard_01', 'totoro_right_Beard_02',
            'totoro_right_Beard_03', 'totoro_nose', 'totoro_stomach', 'totoro_stomach_shape', 'totoro_stomach_shape_01', 'totoro_stomach_shape_02',
            'totoro_stomach_shape_03', 'totoro_stomach_shape_04', 'totoro_stomach_shape_05', 'totoro_stomach_shape_06'
        ];

        drawFromJson = new DrawJSON();

        drawFromJson.loadDataFromJson('totoro.json', this.totoro, setTotoroParts);
    }

    draw() {
        drawFromJson.draw(this.totoro, this.x, this.y, this.scale);
        this.drawTotoroEye();
    }

    drawTotoroEye() {
        //totoro_left_eyes
        noStroke();
        fill(255);
        ellipse(this.x + 94, this.y + 100, 23, 23);
        fill(0);
        ellipse(this.x + 94, this.y + 100, 13, 13);
        fill(255);
        ellipse(this.x + 89, this.y + 96, 3, 3);

        //totoro_right_eyes
        noStroke();
        fill(255);
        ellipse(this.x + 172, this.y + 100, 23, 23);
        fill(0);
        ellipse(this.x + 172, this.y + 100, 13, 13);
        fill(255);
        ellipse(this.x + 168, this.y + 96, 3, 3);
    }
}
