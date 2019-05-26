class cloud{
  constructor(){
    this.cloudAmount;
    this.windSpeed;
    this.deltaX = 0;

    this.cloud_01 = loadImage('assets/cloud_01.png');
    this.cloud_02 = loadImage('assets/cloud_02.png');
    this.cloud_03 = loadImage('assets/cloud_03.png');
    this.cloud_04 = loadImage('assets/cloud_04.png');
    this.cloud_05 = loadImage('assets/cloud_05.png');
    this.cloud_06 = loadImage('assets/cloud_06.png');
    this.cloud_07 = loadImage('assets/cloud_07.png');
    this.cloud_08 = loadImage('assets/cloud_08.png');
    this.cloud_09 = loadImage('assets/cloud_09.png');
    this.cloud_10 = loadImage('assets/cloud_10.png');

    this.cloudname = [
      this.cloud_01,
      this.cloud_02,
      this.cloud_03,
      this.cloud_04,
      this.cloud_05,
      this.cloud_06,
      this.cloud_07,
      this.cloud_08,
      this.cloud_09,
      this.cloud_10,
    ];
  }

  init(clouds, windSpeed){
    this.cloudAmount = clouds;
    this.windSpeed = windSpeed / 10.0;

    this.clouds = new Array();

    for(let i = 0; i < 10*this.cloudAmount; i++){
      this.clouds.push({value:this.cloudname[i % 10], x:random(0, 960), y:random(0, 250)})
    }

  }

  drawCloud(){

    if(this.windSpeed) this.deltaX += this.windSpeed;

      for(let i = 0; i < this.cloudAmount; i++){

        image(this.clouds[i].value, this.clouds[i].x += this.windSpeed, this.clouds[i].y);

        if (this.clouds[i].x > CONSTANT.DIMEN.width){
        this.clouds[i].x = -200;
      }
    }
    tint(255, 255);
  }
}
