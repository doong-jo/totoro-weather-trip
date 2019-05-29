const CONSTANT = new CONST();

var input, button;
var totoroBody;
var totoroFace;

let timebackground;
let dandalion;
let wheather;
let rain;
let snow;
let serial;

// set to true if using live kinectron data
let liveData = true;

// declare kinectron
let kinectron = null;


var img_hill;

function preload() {
  totoroBody = loadImage('assets/Totoro_body.png');
  totoroFace = loadImage('assets/Totoro_body_02.png');
  img_hill = loadImage('assets/background.png');
}

function setup() {
    createCanvas(960,520);


    if (liveData) initKinectron();

    timebackground = new timeBackground(0.8);
    timebackground.init();
    setInterval(timebackground.calculateByTimeToSky(CONSTANT.DIMEN.Seoul), 10000);


    dandalion = new Dandalion(CONSTANT.DIMEN.width, CONSTANT.DIMEN.height);
    dandalion.init();
    setInterval(dandalion.getBranchColor(CONSTANT.DIMEN.Seoul), 10000);

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
    print('main serial data callback receive : ', data);
    // wind, country
    // changeCountry(city)
    // blowDandalion(wind)

}

function changeCountry(city) {
    wheather.loadWeatherData(city, 0, setWheaterData);
}

function blowDandalion(wind) {
    // dandalion.blow(wind);
}

function draw() {

  tint(255);
  background(0);
  timebackground.drawSky();

  timebackground.timeByTint(CONSTANT.DIMEN.Seoul);

  image(img_hill, 0, 370, 960, 150);

  dandalion.Dandaliondraw();


  image(totoroFace, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tint(255, 0, 0, 255);
  image(totoroBody, CONSTANT.DIMEN.totoro_x, CONSTANT.DIMEN.totoro_y, CONSTANT.DIMEN.totoro_width, CONSTANT.DIMEN.totoro_heigth);
  tint(255, 255);


    // rain.draw();
    // snow.draw();

  /*background(0);
  var data = getWeatherData() ;
  if( data ){
      ellipse(100,100, data.main.temp, data.main.temp);
      ellipse(300,100, data.main.humidity, data.main.humidity);
  }*/
}
function initKinectron() {
  // define and create an instance of kinectron
  kinectron = new Kinectron();

  // connect with application over peer
  kinectron.makeConnection();

  // request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);
  kinectron.startTrackedJoint(kinectron.HANDRIGHT, gotRightHand);

}




function bodyTracked(body) {
  background(0, 20);

  let hands = [];

  // get all the joints off the tracked body and do something with them
  for(let jointType in body.joints) {
    joint = body.joints[jointType];


    //drawJoint(joint);

    // get the hands off the tracked body and do somethign with them

    // find right hand
    if (jointType == 11) {
      hands.rightHand = joint;
      hands.rightHandState = translateHandState(body.rightHandState);
    }

    // find left hand
    if (jointType == 7) {
      hands.leftHand = joint;
      hands.leftHandState = translateHandState(body.leftHandState);
    }

  }

    //drawHands(hands);

}


// draw skeleton
function drawJoint(joint) {
  fill(100);

  // kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * width, joint.depthY * height, 15, 15);

  fill(200);

  // kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * width, joint.depthY * height, 3, 3);
}

// make handstate more readable
function translateHandState(handState) {
  switch (handState) {
    case 0:
      return 'unknown';

    case 1:
      return 'notTracked';

    case 2:
      return 'open';

    case 3:
      return 'closed';

    case 4:
      return 'lasso';
  }
}


// draw hands
function drawHands(hands) {

  // check if hands are touching
  if ((Math.abs(hands.leftHand.depthX - hands.rightHand.depthX) < 0.01) && (Math.abs(hands.leftHand.depthY - hands.rightHand.depthY) < 0.01)) {
    hands.leftHandState = 'clapping';
    hands.rightHandState = 'clapping';
  }

  // draw hand states
  updateHandState(hands.leftHandState, hands.leftHand);
  updateHandState(hands.rightHandState, hands.rightHand);
}

// find out state of hands
function updateHandState(handState, hand) {

  switch (handState) {
    case 'closed':
      drawHand(hand, 1, 255);
      break;

    case 'open':
      drawHand(hand, 0, 255);
      break;

    case 'lasso':
      drawHand(hand, 0, 255);
      break;

      // create new state for clapping
    case 'clapping':
      drawHand(hand, 1, 'red');
  }
}

// draw the hands based on their state
function drawHand(hand, handState, color) {

  if (handState === 1) {
    state = 'ascending';
  }

  if (handState === 0) {
    state = 'descending';
  }

  if (state == 'ascending') {
    diameter = lerp(diameter, target, lerpAmt);
    hueValue = lerp(hueValue, dark, lerpAmt);
  }

  if (state == 'descending') {
    diameter = lerp(diameter, start, lerpAmt);
    hueValue = lerp(hueValue, light, lerpAmt);
  }

  fill(color);

  // Kinect location needs to be normalized to canvas size
  ellipse(hand.depthX * width, hand.depthY * height, diameter, diameter);
}

function gotRightHand(hand){
  console.log(hand)
}
