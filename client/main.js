const CON = new CONST();
const KEYINFO = new KEY();

let sky, hill;
let dandalion;
let info;

let wheather, rain, snow, cloud;
let drawFromJson;

let totoro;
let small_totoro;
let bird;
let gwang;
let jin;
let leaf;
let bubble;
let custom_date, custom_city;
let song;

const datGuiParams = {
    displayMode: true,
    debugMode: false,
    windMode: true,
    rainMode: false,
    snowMode: false,
    gwangjinguMode: false,
	bgmMode: false,
};

function preload() {
	song = loadSound("./totoro.mp3");
	song.setLoop(true);
}

function setup() {
    createCanvas(CON.DIMEN.width, CON.DIMEN.height);

    var gui = new dat.GUI();
    gui.add(datGuiParams, "displayMode").listen();
    gui.add(datGuiParams, "debugMode");
    gui.add(datGuiParams, "windMode").listen();
    gui.add(datGuiParams, "snowMode").listen();
    gui.add(datGuiParams, "rainMode").listen();
	const bgmModeEvent = gui.add(datGuiParams, "bgmMode").listen();
	bgmModeEvent.onChange((value) => {
		if( value ) { song.play(); }
		else { song.pause(); }
	});
    gui.add(datGuiParams, "gwangjinguMode").listen();

    gui.close();

    setTimeout(()=> { datGuiParams.displayMode = false; }, CON.TIME.sec * 3);

    kinect = new Kinect();
    sky = new Sky();
    hill = new Hill();
    totoro = new Totoro();
    small_totoro = new SmallTotoro();
    gwang = new Gwang();
    jin = new Jin();
    bird = new Bird();
    bubble = new TempBubble();
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
    hill.init(0, 20);
    totoro.init(CON.POS.totoro_x, CON.POS.totoro_y, CON.SCALE.totoro_scale);
    gwang.init(CON.POS.gwang_x, CON.POS.gwang_y, CON.SCALE.gwang_scale);
    jin.init(CON.POS.gwang_x + 150, CON.POS.gwang_y, CON.SCALE.gwang_scale);

    small_totoro.init(CON.POS.small_totoro_x, CON.POS.small_totoro_y, CON.SCALE.small_totoro_scale);
    bird.init(CON.POS.small_totoro_x + 50, CON.POS.small_totoro_y + 60, 0.2);

    bubble.init(CON.POS.bubble_x, CON.POS.bubble_y, CON.SCALE.bubble_scale);

    leaf.init(CON.POS.leaf_x, CON.POS.leaf_y, CON.VALUE.leaf_scale);
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
    cloud.draw(datGuiParams.rainMode || datGuiParams.snowMode ||
			   (18 <= custom_date.getHours() || custom_date.getHours() < 5)  );
    hill.draw();

    if( datGuiParams.gwangjinguMode ) {
        bird.draw();
        jin.draw();
        gwang.draw();
    } else {
        small_totoro.draw();
        totoro.draw();
    }

    if( !datGuiParams.gwangjinguMode &&
        (datGuiParams.snowMode || datGuiParams.rainMode) ) { leaf.draw(); }
    dandalion.draw();
    bubble.draw();
    info.draw();

    this.skyDraw();
}

function skyDraw() {
    if( datGuiParams.snowMode ) { snow.draw(); }
    if( datGuiParams.rainMode ) { rain.draw(); }
}

function mousePressed() {
    if (mouseButton === CENTER) { console.log('blow 10'); dandalion.blow(10); }
}

function keyPressed() {
    if (keyCode === ENTER || keyCode === RETURN) {
        let fs = fullscreen();
        fullscreen(!fs);
    } else if (keyCode == LEFT_ARROW) {
        this.changeDate(CON.CODE.PREV_DAY);
    } else if (keyCode == RIGHT_ARROW) {
        this.changeDate(CON.CODE.NEXT_DAY);
    } else if (keyCode == UP_ARROW) {
        this.changeCity(CON.CODE.NEXT_CITY);
    } else if (keyCode == DOWN_ARROW) {
        this.changeCity(CON.CODE.PREV_CITY);
    }
}

function setWheaterData(data) {
    // print('weather data', data);

    const datePivot = custom_date.getDatePivot();
    cloud.setCloudData(data[datePivot].clouds.all, data[datePivot].wind.speed);
    dandalion.blow(data[datePivot].wind.speed * 5);

    const weatherMain = data[datePivot].weather[0].main;

    if( weatherMain === "Rain" ) {
        datGuiParams.rainMode = true;
        rain.setAmount(data[datePivot].rain['3h']);
    }  else if( weatherMain === "Snow" ) {
        datGuiParams.snowMode = true;
        snow.setAmount(data[datePivot].snow['3h']);
    } else {
        datGuiParams.rainMode = false;
        datGuiParams.snowMode = false;
    }

    bubble.setTempData(data[datePivot].main.temp_max, data[datePivot].main.temp_min);
}

function changeDate(dir) {
	if( !info.getDateAnimTrig() ) {
        custom_date.update(custom_city.getCity(), dir);
        info.startDateAnim();
        info.setDateText(custom_date.getDate());

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function changeCity(dir, index) {
	if( !info.getCityAnimTrig() && !datGuiParams.gwangjinguMode ) {
        const cityName = custom_city.moveCity(dir, index);
		console.log('cityName', cityName);
        custom_date.update(cityName, CON.CODE.CUR_DAY);

		info.setDateText(custom_date.getDate());
		info.setCityText(cityName);

        info.startCityAnim();

        wheather.loadWeatherData(custom_city.getCity(), setWheaterData);
        sky.calculateByTimeToSky(custom_date.getHours());
    }
}

function getGesture(dir) {
    switch(dir) {
        case CON.GESTURE.left: changeDate(CON.CODE.PREV_DAY); break;
        case CON.GESTURE.right: changeDate(CON.CODE.NEXT_DAY); break;
        case CON.GESTURE.timestone: dandalion.refresh(1); break;
        default: break;
    }

    // console.log('getGesture Test', dir);
}
socket.on('wind', (value)=> {
	  // console.log('get socket wind value', value);
      dandalion.blow(value);
});

socket.on('resist', (value)=> {
    // console.log('get socekt resist value', value);
	this.changeCity(CON.CODE.INDEX_CITY, value);
});
