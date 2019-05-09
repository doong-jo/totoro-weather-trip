var input, button;

let dandalion;
let wheather;
let rain;
let snow;

function setup() {
    createCanvas(960,520);

    const CONSTANT = new CONST();
    dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
    dandalion.init();

    wheather = new Weather();
    wheather.init();

    rain = new Rain();
    rain.init();

    snow = new Snow();

    input = select('#city');
    wheather.loadWeatherData(input.value(), 0, setWheaterData);
}

function setWheaterData(data) {
    wheather = data;
    print(wheather);
}

function draw() {
    dandalion.Dandaliondraw();
    // rain.draw();
    snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
