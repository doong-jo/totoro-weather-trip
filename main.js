var input, button;

function setup() {
    createCanvas(400,200);

    input = select('#city');
    loadWeatherData(input.value(), 0);
}

function draw() {
    
}
