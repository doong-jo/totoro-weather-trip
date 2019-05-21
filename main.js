const CONSTANT = new CONST();

var input, button;

let dandalion;
let wheather;
let rain;
let snow;
let serial;

function setup() {
    createCanvas(960,520);

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
    /*
        send : "country_value/sound_value"

        country_value : 1 ~ 5 (divide angle)
        sound_value : is_wind ? 0 ~ 100 : -1
    */
    print('main serial data callback receive : ', data);
    // wind, country
    // changeCountry(city)
    // blowDandalion(wind)

}

function changeCountry(city) {
    wheather.loadWeatherData(city, 0, setWheaterData);
}

function blowDandalion(wind) {
    dandalion.blow(wind);
    // dandalion.blow(wind);
}

function resetDandalion() {
    dandalion.reset();
}

function draw() {
    dandalion.Dandaliondraw();
    blowDandalion(0.2);
    // rain.draw();
    // snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
