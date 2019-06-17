class TempBubble{
    constructor() { }
    init(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        drawFromJson = new DrawJSON();

        this.bubble = new Array();

        const getbubble = ['bubble'];

        drawFromJson.loadDataFromJson('bubble.json', this.bubble, getbubble);
    }

    setTempData(temp_max, temp_min) {

      this.temp_max = temp_max - 273.15;
      this.temp_min = temp_min - 273.15;

    }

    draw(){
        
        drawFromJson.draw(this.bubble, this.x, this.y, this.scale);

        fill(0);
        textSize(15);
        text('최대 기온 : ' + int(this.temp_max) + '에서', this.x-40, this.y - 100);
        text('최소 기온 : ' + int(this.temp_min) + '입니다!', this.x-35, this.y - 80)

    }

}
