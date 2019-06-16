const CON = new CONST();
const KEYINFO = new KEY();

let sky, hill;
let dandalion;
let info;

let wheather, rain, snow, cloud;
let totoro;
let small_totoro;
let leaf;
let custom_date;
let serial;

let cur_day = 0;
let cur_city = CON.ARRAY.city[0];

const datGuiParams = {
    displayMode: true,
    debugMode: true,
    windMode: true,
    rainMode: false,
    snowMode: false,
};


function setup() {
    createCanvas(CON.DIMEN.width, CON.DIMEN.height);

    var gui = new dat.GUI();
    gui.add(datGuiParams, "displayMode").listen();
    gui.add(datGuiParams, "debugMode");
    gui.add(datGuiParams, "windMode").listen();
    gui.add(datGuiParams, "snowMode").listen();
    gui.add(datGuiParams, "rainMode").listen();

    setTimeout(()=> { datGuiParams.displayMode = false; }, CON.TIME.sec  * 3);

    sky = new Sky();
    hill = new Hill();
    totoro = new Totoro();
    small_totoro = new SmallTotoro();
    leaf =  new Leaf();
    dandalion = new Dandalion();
    wheather = new Weather();
    rain = new Rain();
    snow = new Snow();
    cloud = new Cloud();
    info = new Info();
    custom_date = new CustomDate();
    // serial = new Serial();

    sky.init(0.6);
    cloud.init();
    hill.init(0, 0);
    totoro.init(CON.DIMEN.totoro_x, CON.DIMEN.totoro_y, CON.DIMEN.totoro_scale);
    small_totoro.init(CON.DIMEN.small_totoro_x, CON.DIMEN.small_totoro_y, CON.DIMEN.small_totoro_scale);
    leaf.init(CON.DIMEN.leaf_x, CON.DIMEN.leaf_y, CON.DIMEN.leaf_scale);
    wheather.init();
    rain.init();
    snow.init();
    dandalion.init(CON.DIMEN.width, CON.DIMEN.height);
    info.init();
    custom_date.init();
    // serial.init();

    sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]);
    wheather.loadWeatherData(cur_city, 0, setWheaterData);

    info.setCityText(cur_city);
    info.setDateText(custom_date.getDate());

    // serial.setMainSerialEventCallback(serialData);

    intervalSetup();

    /* Adjust brightness of objects */
    // setInterval(sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]), CON.TIME.sec * 10);
    // setInterval(dandalion.getBranchColor(CON.VALUE.city_offset[cur_city]), CON.TIME.sec * 10);
    // setInterval(() => {
    //   sky.calculateByTimeToSky(CON.VALUE.city_offset[cur_city]);
    // }, CON.TIME.min);
    // setInterval(() => {
    //   dandalion.getBranchColor(CON.VALUE.city_offset[cur_city]);
    // }, CON.TIME.min);
}

function intervalSetup() {
    // update date
    setInterval(() => {
        info.setDateText(custom_date.getDate());
    }, CON.TIME.sec);

    setInterval(() => {
        wheather.loadWeatherData(cur_city, 0, setWheaterData);
    },  CON.TIME.min);
}

function draw() {
   sky.draw();
   cloud.draw();
   hill.draw();
   totoro.draw();
   small_totoro.draw();
   leaf.draw();
   dandalion.draw();
   info.draw();

   this.guiAdjust();
}

function guiAdjust() {
    if( datGuiParams.snowMode ) { snow.draw(); }
    if( datGuiParams.rainMode ) { rain.draw(); }
}

function mouseClicked() {
   // dandalion.blow(50);
}

function setWheaterData(data) {
    print(data);

    cloud.setCloudData(data[cur_day].clouds.all, data[cur_day].wind.speed);
    dandalion.blow(data[cur_day].wind.speed * 5);
}

// socket.on('wind', (value)=> {
// 	console.log('get socket wind value', value);
//     dandalion.blow(value);
// });
//
// socket.on('resist', (value)=> {
// 	console.log('get socekt resist value', value);
//     cur_city = CON.ARRAY.city[value];
//     info.setCityText(cur_city);
//     info.startCityAnim();
// });
