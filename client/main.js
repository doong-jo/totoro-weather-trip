const CON = new CONST();
const KEYINFO = new KEY();

let sky, hill;
let dandalion;
let info;

let wheather, rain, snow, cloud;
let drawFromJson;
let totoro;
let small_totoro;
let leaf;
let custom_date, custom_city;

const datGuiParams = {
    displayMode: true,
    debugMode: true,
    windMode: true,
    rainMode: false,
    snowMode: false,
    leafMode: false,
};


function setup() {
    createCanvas(CON.DIMEN.width, CON.DIMEN.height);

    var gui = new dat.GUI();
    gui.add(datGuiParams, "displayMode").listen();
    gui.add(datGuiParams, "debugMode");
    gui.add(datGuiParams, "windMode").listen();
    gui.add(datGuiParams, "snowMode").listen();
    gui.add(datGuiParams, "rainMode").listen();
    gui.add(datGuiParams, "leafMode").listen();
    gui.close();

    setTimeout(()=> { datGuiParams.displayMode = false; }, CON.TIME.sec  * 3);

    kinect = new Kinect();
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
    custom_city = new CustomCity();
    // serial = new Serial();

    kinect.initkinectron(this.getGesture);
    sky.init(0.6);
    cloud.init();
    hill.init(0, 0);
    totoro.init(CON.DIMEN.totoro_x, CON.DIMEN.totoro_y, CON.DIMEN.totoro_scale);
    small_totoro.init(CON.DIMEN.small_totoro_x, CON.DIMEN.small_totoro_y, CON.DIMEN.small_totoro_scale);
    leaf.init(CON.DIMEN.leaf_x, CON.DIMEN.leaf_y, CON.DIMEN.leaf_scale);
    wheather.init();
    rain.init();
    snow.init();
    dandalion.init(CON.DIMEN.width + 50, CON.DIMEN.height - 20);
    info.init();
    custom_date.init();
    custom_city.init();

    sky.calculateByTimeToSky(custom_date.getHours());
    wheather.loadWeatherData(custom_city.getCity(), setWheaterData);

    info.setCityText(custom_city.getCity());
    info.setDateText(custom_date.getDate());

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
        if( custom_date.getDatePivot() == 0 ) {
            info.setDateText(custom_date.getDate());
        }
    }, CON.TIME.sec);

    setInterval(() => {
        if( custom_date.getDatePivot() == 0 ) {
            wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
            sky.calculateByTimeToSky(custom_date.getHours());
        }
    },  CON.TIME.min);
}

function draw() {
   sky.draw();
   cloud.draw();
   hill.draw();
   totoro.draw();
   small_totoro.draw();
   if( datGuiParams.leafMode ) { leaf.draw(); }
   dandalion.draw();
   info.draw();

   this.skyDraw();
}

function skyDraw() {
    if( datGuiParams.snowMode ) { snow.draw(); }
    if( datGuiParams.rainMode ) { rain.draw(); }
}

// TODO: for test. have to remove.
function keyPressed() {
  if (keyCode === ENTER || keyCode === RETURN) {
      let fs = fullscreen();
      fullscreen(!fs);
  } else if (keyCode == LEFT_ARROW) {
      this.prevDate();
  } else if (keyCode == RIGHT_ARROW) {
      this.nextDate();
  } else if (keyCode == UP_ARROW) {
      this.nextCity();
  } else if (keyCode == DOWN_ARROW) {
      this.prevCity();
  }
}

function mouseClicked() {
    dandalion.blow(50);
}

function setWheaterData(data) {
    print('weather data', data);

    const datePivot = custom_date.getDatePivot();
    cloud.setCloudData(data[datePivot].clouds.all, data[datePivot].wind.speed);
    dandalion.blow(data[datePivot].wind.speed * 5);

    const weatherMain = data[datePivot].weather[0].main;

    if( weatherMain === "Rain" ) {
        datGuiParams.rainMode = true;
        datGuiParams.leafMode = true;
    }  else if( weatherMain === "Snow" ) {
        datGuiParams.snowMode = true;
        datGuiParams.leafMode = true;
    } else {
        datGuiParams.leafMode = false;
        datGuiParams.rainMode = false;
        datGuiParams.snowMode = false;
    }
}

function prevDate() {
    if( !info.getDateAnimTrig() ) {
        custom_date.prevDate();
        info.startDateAnim();
        info.setDateText(custom_date.getDate());

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function nextDate() {
    if( !info.getDateAnimTrig() ) {
        custom_date.nextDate();
        info.startDateAnim();
        info.setDateText(custom_date.getDate());

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function prevCity() {
    if( !info.getCityAnimTrig() ) {
        const cityName = custom_city.prevCity();
        custom_date.setLocale(cityName);
        if( custom_date.getDatePivot() != 0 ) {
            custom_date.setNextDaysHour();
        }

        info.startCityAnim();
        info.setCityText(cityName);

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function nextCity() {
    if( !info.getCityAnimTrig() ) {
        const cityName = custom_city.nextCity();
        custom_date.setLocale(cityName);
        if( custom_date.getDatePivot() != 0 ) {
            custom_date.setNextDaysHour();
        }

        info.startCityAnim();
        info.setCityText(cityName);

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function getGesture(dir) {
    switch(dir) {
        case CON.GESTURE.left: break;
        case CON.GESTURE.right: break;
        case CON.GESTURE.timestone: break;
        default: break;
    }

    console.log('getGesture Test', dir);
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
