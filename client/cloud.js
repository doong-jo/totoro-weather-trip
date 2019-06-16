class Cloud {
  constructor() {
    this.deltaX = 0;
  }

  init() {
    this.cloudAmount = 0;
    this.windSpeed = 0;

    this.clouds = new Array();

    this.cloud1 = new Array();
    this.cloud2 = new Array();
    this.cloud3 = new Array();
    this.cloud4 = new Array();

    const setCloud = [ this.cloud1, this.cloud2, this.cloud3, this.cloud4 ];
    const getCloud = [ ['cloud1', 'cloud1_01', 'cloud1_02'],
                       ['cloud2', 'cloud2_01', 'cloud2_02'],
                       ['cloud3', 'cloud3_01', 'cloud3_02', 'cloud3_03', 'cloud3_04'],
                       ['cloud4', 'cloud4_01', 'cloud4_02', 'cloud4_03', 'cloud4_04']
                     ];

    drawFromJson = new DrawJSON();

     for(var i = 0; i < setCloud.length; i++){
         drawFromJson.loadDataFromJson('cloud.json', setCloud[i], getCloud[i]);
    }
  }

  setCloudData(clouds, windSpeed) {

    this.cloudAmount = clouds / 5;
    this.windSpeed = windSpeed / 10;

    for (var i = 0; i < this.cloudAmount; i++) {

      var scale;
      if((i + 1) % 4 == 0) scale = 0.7;
      else scale = random(0.5, 2);

      this.clouds.push({
        xpos: random(0, CON.DIMEN.width),
        ypos: random(0, CON.DIMEN.random_cloud_height),
        cloudScale: scale
      });
    }

  }

  drawImgCloud(x, y, cloudArr, size, num) {
    if(num == 0) drawFromJson.draw(cloudArr, x/2 - 50, y - 50, size);
    else drawFromJson.draw(cloudArr, x - 50, y - 50, size);
  }

  draw() {

    if (this.windSpeed) this.deltaX = this.windSpeed;

    if (this.cloudAmount > 0) {

      const cloudArr = [this.cloud1, this.cloud2, this.cloud3, this.cloud4];

      for (let i = 0; i < this.cloudAmount; i++) {

        this.drawImgCloud(this.clouds[i].xpos, this.clouds[i].ypos, cloudArr[(i + 1) % 4], this.clouds[i].cloudScale, (i + 1) % 4);

        this.clouds[i].xpos += this.deltaX;

        if (this.clouds[i].xpos/2 + 70 * 0.7 - 50 > CON.DIMEN.width && (i + 1) % 4 == 0) {
          this.clouds[i].xpos = -360;
        } else if (this.clouds[i].xpos + 50 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 1) {
          this.clouds[i].xpos = -110 * this.clouds[i].cloudScale;
        } else if (this.clouds[i].xpos + 51 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 2) {
          this.clouds[i].xpos = -180 * this.clouds[i].cloudScale;
        } else if (this.clouds[i].xpos + 49 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 3) {
          this.clouds[i].xpos = -120 * this.clouds[i].cloudScale;
        }
      }
    }
  }
}
