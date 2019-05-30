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
let info;

let cur_city;

var img_hill;

function preload() {
  totoroBody = loadImage('assets/Totoro_body.png');
  totoroFace = loadImage('assets/Totoro_body_02.png');
  img_hill = loadImage('assets/background.png');
}

function setup() {
    createCanvas(960,520);

    cur_city = CONSTANT.ARRAY.city[0];

    timebackground = new timeBackground(0.8);
    timebackground.init();

    dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
    dandalion.init();

    wheather = new Weather();
    wheather.init();

    rain = new Rain();
    rain.init();

    snow = new Snow();

    // serial = new Serial();
    // serial.init();
    // serial.setMainSerialEventCallback(serialDataCallback);

    wheather.loadWeatherData('Seoul', 0, setWheaterData);

    info = new Info();
    info.init(
        {'x': 20, 'y': CONSTANT.DIMEN.height - 60},
        {'x': CONSTANT.DIMEN.width - 150, 'y': -10}
    );

    // TODO: set city, time
    info.setCityText(cur_city);
    info.setDateText('JUN May 30 23:49');

    setInterval(timebackground.calculateByTimeToSky(CONSTANT.DIMEN.Seoul), 10000);
    setInterval(dandalion.getBranchColor(CONSTANT.VALUE.city_offset[cur_city]), 10000);
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
    cur_city = CONSTANT.ARRAY.city[city];
    info.setCityText(cur_city);
}

function blowDandalion(wind) {
    // dandalion.blow(wind);
}

function draw() {

  tint(255);
  background(0);

  timebackground.drawSky();
  timebackground.timeByTint(CONSTANT.VALUE.city_offset[cur_city]);

  image(img_hill, 0, 370, 960, 150);

  dandalion.Dandaliondraw();

  image(totoroFace, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tint(255, 0, 0, 255);
  image(totoroBody, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tint(255, 255);


    // rain.draw();
    // snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
