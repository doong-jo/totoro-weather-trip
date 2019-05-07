var input, button;

function setup() {
    createCanvas(400,200);

    input = select('#city');
    loadWeatherData(input.value(), 0);
}

function draw() {
    background(0);
    var data = getWeatherData() ;
    if( data ){
        ellipse(100,100, data.main.temp, data.main.temp);
        ellipse(300,100, data.main.humidity, data.main.humidity);
    }
}
