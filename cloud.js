class Cloud {
  constructor() {
    this.deltaX = 0;
  }

  init() {
    this.cloudAmount = 20;
    this.windSpeed = 5;

    this.clouds = new Array();
    for (let i = 0; i < this.cloudAmount; i++) {
      this.clouds.push({
        xpos: random(0, 900),
        ypos: random(0, 150),
        cloudScale: random(0.5, 2)
      });
    }

    this.cloud1 = new Array();
    this.cloud1_01 = new Array();
    this.cloud1_02 = new Array();

    this.cloud2 = new Array();
    this.cloud2_01 = new Array();
    this.cloud2_02 = new Array();

    this.cloud3 = new Array();
    this.cloud3_01 = new Array();
    this.cloud3_02 = new Array();
    this.cloud3_03 = new Array();
    this.cloud3_04 = new Array();

    this.cloud4 = new Array();
    this.cloud4_01 = new Array();
    this.cloud4_02 = new Array();
    this.cloud4_03 = new Array();
    this.cloud4_04 = new Array();

    this.loadCloudsFromJSON('cloudArray.json');

  }

  getCloudArrayFromJson(getCloud, setCloud){
    for(var i = 0; i < getCloud.length; i++){
      setCloud.push({"x":getCloud[i].x, "y":getCloud[i].y});
    }
  }

  loadCloudsFromJSON(jsonFile) {
    const self = this;

    $.getJSON(jsonFile,  function(json) {
          console.log( "success" );

          self.getCloudArrayFromJson(json.cloud1, self.cloud1);
          self.getCloudArrayFromJson(json.cloud1_01, self.cloud1_01);
          self.getCloudArrayFromJson(json.cloud1_02, self.cloud1_02);

          self.getCloudArrayFromJson(json.cloud2, self.cloud2);
          self.getCloudArrayFromJson(json.cloud2_01, self.cloud2_01);
          self.getCloudArrayFromJson(json.cloud2_02, self.cloud2_02);

          self.getCloudArrayFromJson(json.cloud3, self.cloud3);
          self.getCloudArrayFromJson(json.cloud3_01, self.cloud3_01);
          self.getCloudArrayFromJson(json.cloud3_02, self.cloud3_02);
          self.getCloudArrayFromJson(json.cloud3_03, self.cloud3_03);
          self.getCloudArrayFromJson(json.cloud3_04, self.cloud3_04);

          self.getCloudArrayFromJson(json.cloud4, self.cloud4);
          self.getCloudArrayFromJson(json.cloud4_01, self.cloud4_01);
          self.getCloudArrayFromJson(json.cloud4_02, self.cloud4_02);
          self.getCloudArrayFromJson(json.cloud4_03, self.cloud4_03);
          self.getCloudArrayFromJson(json.cloud4_04, self.cloud4_04);

    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
  }

  setCloudData(clouds, windSpeed){

    if(clouds > this.cloudAmount){
      for(var i = this. cloudAmount; i < clouds; i++){
        this.clouds.push({
          xpos: random(0, 900),
          ypos: random(0, 150),
          cloudScale: random(0.5, 2)
        });
      }
    }else{
      for(var i = clouds; i < this.cloudAmount; i++){
        this.clouds.splice(clouds, 1);
      }
    }

    this.cloudAmount = clouds / 5;
    this.windSpeed = windSpeed / 10.0;
  }

  drawImgCloud1(x, y, size) {
    fill(250, 250, 250);
    this.drawImgCloudPart(x / 2, y, this.cloud1, size);
    fill(211, 229, 249);
    this.drawImgCloudPart(x / 2, y, this.cloud1_01, size);
    fill(173, 206, 247);
    this.drawImgCloudPart(x / 2, y, this.cloud1_02, size);
  }

  drawImgCloud2(x, y, size) {
    fill(250, 250, 250);
    this.drawImgCloudPart(x, y, this.cloud2, size);
    fill(173, 206, 247);
    this.drawImgCloudPart(x, y, this.cloud2_02, size);
    fill(211, 229, 249);
    this.drawImgCloudPart(x, y, this.cloud2_01, size);
  }

  drawImgCloud3(x, y, size) {
    fill(250, 250, 250);
    this.drawImgCloudPart(x, y, this.cloud3, size);
    fill(193, 226, 257);
    this.drawImgCloudPart(x, y, this.cloud3_01, size);
    this.drawImgCloudPart(x, y, this.cloud3_02, size);
    this.drawImgCloudPart(x, y, this.cloud3_03, size);
    fill(239, 246, 252);
    this.drawImgCloudPart(x, y, this.cloud3_04, size);
  }

  drawImgCloud4(x, y, size) {

    fill(250, 250, 250);
    this.drawImgCloudPart(x, y, this.cloud4, size);

    fill(193, 226, 257);
    this.drawImgCloudPart(x, y, this.cloud4_01, size);
    this.drawImgCloudPart(x, y, this.cloud4_02, size);
    this.drawImgCloudPart(x, y, this.cloud4_03, size);

    fill(239, 246, 252);
    this.drawImgCloudPart(x, y, this.cloud4_04, size);
  }



  drawImgCloudPart(x, y, cloud, size) {
    noStroke();
    beginShape();
    for (var a = 0; a < cloud.length; a++) {

      curveVertex(x + cloud[a].x * size - 50, y + cloud[a].y * size - 50);
    }
    endShape(CLOSE);
  }

  draw() {

    if (this.windSpeed) this.deltaX = this.windSpeed;

    for (let i = 0; i < this.cloudAmount; i++) {

      switch ((i + 1) % 4) {
        case 0:
          this.drawImgCloud1(this.clouds[i].xpos, this.clouds[i].ypos, 0.7);
          break;
        case 1:
          this.drawImgCloud2(this.clouds[i].xpos, this.clouds[i].ypos, this.clouds[i].cloudScale);
          break;
        case 2:
          this.drawImgCloud3(this.clouds[i].xpos, this.clouds[i].ypos, this.clouds[i].cloudScale);
          break;
        case 3:
          this.drawImgCloud4(this.clouds[i].xpos, this.clouds[i].ypos, this.clouds[i].cloudScale);
          break;

        default:
          break;
      }
      this.clouds[i].xpos += this.deltaX;

      if (this.clouds[i].xpos / 2 + 70 * 0.7 - 50 > CON.DIMEN.width && (i + 1) % 4 == 0) {
        this.clouds[i].xpos = -360;
      }else if (this.clouds[i].xpos + 50 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 1) {
        this.clouds[i].xpos = -110 * this.clouds[i].cloudScale;
      } else if (this.clouds[i].xpos + 51 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 2) {
        this.clouds[i].xpos = -180 * this.clouds[i].cloudScale;
      } else if (this.clouds[i].xpos + 49 * this.clouds[i].cloudScale - 50 > CON.DIMEN.width && (i + 1) % 4 == 3) {
        this.clouds[i].xpos = -120 * this.clouds[i].cloudScale;
      }
    }
  }
}
