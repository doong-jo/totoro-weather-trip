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

    this.loadCloudsFromJSON('cloud.json');

  }

  loadCloudsFromJSON(jsonFile) {
    const self = this;

    $.getJSON(jsonFile, function(json) {
        console.log("success");

        const setCloud = [ self.cloud1, self.cloud2, self.cloud3, self.cloud4 ];
        const getCloud = [ [json.cloud1, json.cloud1_01, json.cloud1_02],
                           [json.cloud2, json.cloud2_01, json.cloud2_02],
                           [json.cloud3, json.cloud3_01, json.cloud3_02, json.cloud3_03, json.cloud3_04],
                           [json.cloud4, json.cloud4_01, json.cloud4_02, json.cloud4_03, json.cloud4_04]
                         ];

        for(var i = 0; i < setCloud.length; i++){
          for(var j = 0; j < getCloud[i].length; j++){
            setCloud[i].push(getCloud[i][j]);
          }
        }

      });
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

  drawCloudArray(x, y, cloud, size){

    for(var i = 0; i < cloud.length; i++){
        fill(cloud[i].color);
        this.drawImgCloudPart(x, y, cloud[i].points, size);
      }
  }

  drawImgCloudPart(x, y, cloud, size) {
    noStroke();
    beginShape();
    for (var a = 0; a < cloud.length; a++) {

      curveVertex(x + cloud[a].x * size - 50, y + cloud[a].y * size - 50);
    }
    endShape(CLOSE);
  }

  drawImgCloud(x, y, cloudArr, size, num) {
    if(num == 0) this.drawCloudArray(x/2, y, cloudArr, size);
    else this.drawCloudArray(x, y, cloudArr, size);
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
