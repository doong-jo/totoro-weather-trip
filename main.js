var input, button;

var dandalion;

function setup() {
    createCanvas(960,520);

    input = select('#city');
    loadWeatherData(input.value(), 0);

    dandalion = new Dandalion(960, 520);
    dandalion.init();
}

function draw() {

    dandalion.Dandaliondraw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
