const CONSTANT = new CONST();

var input, button

let timebackground;
let totoro;
let hill;
let dandalion;
let wheather;
let rain;
let snow;
let serial;
let info;
let cloud;
let tempp;

let cur_city;

function setup() {
  createCanvas(960, 520);

  cur_city = CONSTANT.ARRAY.city[0];

  timebackground = new timeBackground(0.6);
  timebackground.init();
  timebackground.calculateByTimeToSky(CONSTANT.VALUE.city_offset[cur_city]);
  setInterval(function() {
    timebackground.calculateByTimeToSky(CONSTANT.VALUE.city_offset[cur_city]);
  }, 60000);

  tempp = new Temp();

  hill = new Hill(0, 0);

  totoro = new Totoro(CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_scale);

  dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
  dandalion.init();
  dandalion.getBranchColor(CONSTANT.VALUE.city_offset[cur_city]);
  setInterval(function() {
    dandalion.getBranchColor(CONSTANT.VALUE.city_offset[cur_city]);
  }, 60000);

  wheather = new Weather();
  wheather.init();

  rain = new Rain();
  rain.init();

  snow = new Snow();

  cloud = new Cloud();
  cloud.init();

  // serial = new Serial();
  // serial.init();
  // serial.setMainSerialEventCallback(serialDataCallback);

  wheather.loadWeatherData('Seoul', 0, setWheaterData);

  info = new Info();
  info.init({
    'x': 20,
    'y': CONSTANT.DIMEN.height - 60
  }, {
    'x': CONSTANT.DIMEN.width - 150,
    'y': -10
  });

  // TODO: set city, time
  info.setCityText(cur_city);
  info.setDateText('JUN May 30 23:49');

  setInterval(timebackground.calculateByTimeToSky(CONSTANT.VALUE.city_offset[cur_city]), 10000);
  setInterval(dandalion.getBranchColor(CONSTANT.VALUE.city_offset[cur_city]), 10000);
}

function setWheaterData(data) {
  print(data);

  cloud.setCloudData(data[0].clouds.all, data[0].wind.speed);

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
  cur_city = CONSTANT.ARRAY.city[city];
  info.setCityText(cur_city);
}

function blowDandalion(wind) {
  // dandalion.blow(wind);
}

var IsSnow = false;
var IsRain = false;

function draw() {

  //background(255);
  timebackground.drawSky();
  timebackground.timeByTint();

  cloud.drawCloud();

  hill.drawHill();

  dandalion.Dandaliondraw();

  tempp.tempByTint();
  totoro.drawTotoro();
  // blueTotoro.position(520, 120);

  if (dandalion.getRainMode()) {
    rain.draw();
    //blueTotoro.attribute('src', 'assets/blueTotoro_rain.gif');
    //blueTotoro = createImg('assets/blueTotoro_rain.gif');
  }

  if (dandalion.getSnowMode()) {
    snow.draw();
    //blueTotoro.attribute('src', 'assets/blueTotoro_snow.gif');
  }




  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
