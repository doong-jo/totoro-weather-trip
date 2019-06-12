const CON = new CONST();
const KEYINFO = new KEY();

var input, button;

let sky, hill;
let dandalion;
let info;

let wheather, rain, snow, cloud;
let totoro;
let serial;

// TODO : track user ip and find country
let cur_city = CON.ARRAY.city[0];

function setup() {
    createCanvas(CON.DIMEN.width, CON.DIMEN.height);

    sky = new Sky(0.6);
    hill = new Hill(0, 0);
    totoro = new Totoro(CON.DIMEN.totoro_x, CON.DIMEN.totoro_y, CON.DIMEN.totoro_scale);
    dandalion = new Dandalion(CON.DIMEN.width, CON.DIMEN.height);
    wheather = new Weather();
    rain = new Rain();
    snow = new Snow();
    cloud = new Cloud();
    info = new Info();
    // serial = new Serial();

    sky.init();
    wheather.init();
    rain.init();
    dandalion.init();
    info.init();
    // serial.init();

    sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]);
    dandalion.getBranchColor(CON.VALUE.city_offset[cur_city]);
    wheather.loadWeatherData(cur_city, 0, setWheaterData);
    info.setPosition(
        {'x': 20, 'y': CON.DIMEN.height - 60},
        {'x': CON.DIMEN.width - 150, 'y': -10}
    );
    info.setCityText(cur_city);
    info.setDateText('JUN May 30 23:49');
    // serial.setMainSerialEventCallback(serialDataCallback);

    setInterval(sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]), 10000);
    setInterval(dandalion.getBranchColor(CON.VALUE.city_offset[cur_city]), 10000);
    setInterval(function(){
      sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]);
    }, 60000);
    setInterval(function() {
      dandalion.getBranchColor(CON.VALUE.city_offset[cur_city]);
    }, 60000);
}

function setWheaterData(data) {
    print(data);

    cloud.init(data[0].clouds.all, data[0].wind.speed);
}

function serialDataCallback(data) {
    print('main serial data callback receive : ', data);
    // wind, country
    // changeCountry(city)
    // blowDandalion(wind)
}

function changeCountry(city) {
    wheather.loadWeatherData(city, 0, setWheaterData);
    cur_city = CON.ARRAY.city[city];
    info.setCityText(cur_city);
}

function blowDandalion(wind) {

}

function draw() {
  //background(255);
  sky.drawSky();
  sky.timeByTint();
  cloud.drawCloud();
  hill.drawHill();
  dandalion.Dandaliondraw();
  totoro.drawTotoro();
}
