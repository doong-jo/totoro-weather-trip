const CONSTANT = new CONST();

var input, button;
var totoroBody;
var totoroFace;

let timebackground;
let dandalion;
let wheather;
let rain;
let snow;
let serial;

function preload() {
  totoroBody = loadImage('assets/Totoro_body.png');
  totoroFace = loadImage('assets/Totoro_body_02.png');
}

function setup() {
    createCanvas(960,520);

    timebackground = new timeBackground(0.8);
    timebackground.init();

    dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
    dandalion.init();

    wheather = new Weather();
    wheather.init();

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

  timebackground.drawSky(CONSTANT.DIMEN.Seoul, CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);

  dandalion.Dandaliondraw();

  image(totoroFace, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  image(totoroBody, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);


    // rain.draw();
    // snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
