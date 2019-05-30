const CONSTANT = new CONST();

var input, button;
var totoroBody;
var totoroFace;

let timebackground;
let dandalion;
let wheather;
let cloudd;
let tempp;
let rain;
let snow;
let serial;

var img_hill;

function preload() {
  totoroBody = loadImage('assets/Totoro_body.png');
  totoroFace = loadImage('assets/Totoro_body_02.png');
  blueTotoro = createImg('assets/blueTotoro.gif');
  img_hill = loadImage('assets/background.png');
  //Gif image
  //gif_createImg = createImg("assets/normal.gif");
}

function setup() {
    createCanvas(960,520);

    timebackground = new timeBackground(0.8);
    timebackground.init();
    timebackground.calculateByTimeToSky(CONSTANT.DIMEN.Seoul);
    setInterval(function(){
      timebackground.calculateByTimeToSky(CONSTANT.DIMEN.Seoul);
    }, 60000);

    dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
    dandalion.init();
    dandalion.getBranchColor(CONSTANT.DIMEN.Seoul);
    setInterval(function(){
      dandalion.getBranchColor(CONSTANT.DIMEN.Seoul);
    }, 60000);

    wheather = new Weather();
    wheather.init();

    cloudd = new cloud();

    tempp = new Temp();

    rain = new Rain();
    rain.init();

    snow = new Snow();

    serial = new Serial();
    serial.init();
    serial.setMainSerialEventCallback(serialDataCallback);

    input = select('#city');
    wheather.loadWeatherData(input.value(), 0, setWheaterData);

}

function setWheaterData(data) {
    print(data);

    cloudd.init(data[0].clouds.all, data[0].wind.speed);

    tempp.init(data[0].main.temp);
}

function serialDataCallback(data) {
    print('main serial data callback receive : ', data);
    // wind, country
    // changeCountry(city)
    // blowDandalion(wind)

}

function changeCountry(city) {
    wheather.loadWeatherData(city, 0, setWheaterData);
}

function blowDandalion(wind) {
    // dandalion.blow(wind);
}


function draw() {

  timebackground.drawSky();

  timebackground.timeByCloudTint();
  cloudd.drawCloud();

  timebackground.timeByTint();

  image(img_hill, 0, 205, 960, 315);

  dandalion.Dandaliondraw();


  image(totoroFace, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tempp.tempByTint();
  image(totoroBody, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tint(255);
  blueTotoro.position(520, 150);

    // rain.draw();
    // snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
