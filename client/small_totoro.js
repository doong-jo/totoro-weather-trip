class SmallTotoro{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.small_totoro = new Array();

        const setSmallTotoroParts = [ 'smalltotoroStomach', 'smalltotoroArm', 'smalltotoroTail', 'smalltotoroBody',
        'smalltotoroLeftEye', 'smalltotoroRightEye', 'smalltotoroLeftChest', 'smalltotoroMiddleChest', 'smalltotoroRightChest' ];

        drawFromJson = new DrawJSON();

        drawFromJson.loadDataFromJson('small_totoro.json', this.small_totoro, setSmallTotoroParts);
    }

    draw(){
        drawFromJson.draw(this.small_totoro, this.x, this.y, this.scale);

        //Nose
        fill(0, 0, 0);
        ellipse(this.x + 336 * this.scale, this.y + 239 * this.scale, 12 * this.scale, 5 * this.scale);
        //LeftEye
        ellipse(this.x + 304 * this.scale, this.y + 225 * this.scale, 6 * this.scale, 10 * this.scale)
        //RightEye
        ellipse(this.x + 393 * this.scale, this.y + 225 * this.scale, 9 * this.scale, 12 * this.scale)

    }
}
