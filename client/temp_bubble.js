class TempBubble{
    constructor() { }
    init(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        drawFromJson = new DrawJSON();

        this.bubble = new Array();
        this.realStart = true;
        this.bStart = true;
        this.bEnd = false;

        const getbubble = ['bubble'];

        drawFromJson.loadDataFromJson('bubble.json', this.bubble, getbubble);
        this.goyang = loadFont('Goyang.otf');

        this.bubbleColor =  color(250, 250, 250, 0);
        this.textColor = color(0, 0, 0, 0);
        this.bubbleAlpha = alpha(this.bubbleColor);
    }

    setTempData(temp_max, temp_min) {

      if(this.realStart == true){
        this.before_temp_max = temp_max - 273.15;
        this.before_temp_min = temp_min - 273.15;
        this.realStart = false;
      }

      this.temp_max = temp_max - 273.15;
      this.temp_min = temp_min - 273.15;

      if(alpha(this.bubbleColor) >= CON.VALUE.bubble_alpha_max){
          this.bStart = false;
          this.bEnd = true;
      }
    }

    draw(){

        drawFromJson.draw(this.bubble, this.x, this.y, this.scale, this.bubbleColor, this.textColor);

         if(this.bStart == true && alpha(this.bubbleColor) <= CON.VALUE.bubble_alpha_max){

             if(alpha(this.bubbleColor) >= CON.VALUE.bubble_alpha_max){
                 this.before_temp_max = this.temp_max;
                 this.before_temp_min = this.temp_min;
             }

             this.bubbleColor.setAlpha(this.bubbleAlpha += CON.VALUE.bubble_alpha_speed);
             this.textColor.setAlpha(this.bubbleAlpha);

         }else if(this.bEnd == true && alpha(this.bubbleColor) >= CON.VALUE.bubble_alpha_speed){
             this.bubbleColor.setAlpha(this.bubbleAlpha -= CON.VALUE.bubble_alpha_speed);
             this.textColor.setAlpha(this.bubbleAlpha);

             if(alpha(this.bubbleColor) <= 0) {
                 this.bStart = true;
                 this.bEnd = false;
             }

             if(alpha(this.bubbleColor) <= 0){
             this.before_temp_max = this.temp_max;
             this.before_temp_min = this.temp_min;
            }
         }

         fill(this.textColor);
         textSize(17);
         textFont(this.goyang);
         text(int(this.before_temp_min) + ' ℃' + ' / ' + int(this.before_temp_max) + " ℃" , this.x + 80, this.y+ 65);
    }

}
