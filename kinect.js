
class Kinect {
    constructor(props) {
        this.kinectron = null;
        this.liveData = true;
        this.swipeRightToLeftHand = false;
        this.swipeLeftToRightHand = false;
        this.swipeLeftHand = false;
    }

    initkinectron() {
      if( this.liveData ) {
          // define and create an instance of this.kinectron
          this.kinectron = new Kinectron();

          // connect with application over peer
          this.kinectron.makeConnection();

          // request all tracked bodies and pass data to your callback
          this.kinectron.startTrackedBodies(this.bodyTracked);
      }
    }

    bodyTracked(body) {

      let hands = [];
      let elbows = [];
      let thumb = [];
      let finger_tip = [];
//       kinectron.HANDTIPLEFT  = 21;
// kinectron.THUMBLEFT = 22;
// kinectron.HANDTIPRIGHT = 23;
// kinectron.THUMBRIGHT = 24;

      // get all the joints off the tracked body and do something with them
      for(let jointType in body.joints) {
        let joint = body.joints[jointType];

        if(jointType == 22){
          thumb.leftThumb = joint;
        }

        if(jointType == 24){
          thumb.rightThumb = joint;
        }

        if(jointType == 21){
          finger_tip.left = joint;
        }

        if (jointType == 23) {
          finger_tip.right = joint;
        }

        //find leftElbow
        if(jointType == 5){
          elbows.leftElbow = joint;
        }

        //find rightElbow
        if(jointType == 9){
          elbows.rightElbow = joint;
        }

        // get the hands off the tracked body and do somethign with them

        // find right hand
        if (jointType == 11) {
          hands.rightHand = joint;
        }

        // find left hand
        if (jointType == 7) {
          hands.leftHand = joint;
        }
      }

      // //console.log(thumb.leftThumb.depthX);
      // console.log("RIGHT Thumb: " + thumb.rightThumb.depthX);
      // console.log("RIGHT FINGER TIP: " + finger_tip.right.depthX);


      if (elbows.rightElbow.depthY > hands.rightHand.depthY) {
        //HANDS UP STATE
        if (elbows.rightElbow.depthX < hands.rightHand.depthX) {
          //HANDS UP AND RIGHT STATE
          this.swipeRightToLeftHand = true;
          if(this.swipeLeftToRightHand){
            console.log("LEFT to RIGHT HAND SWIPE!!");
            this.swipeLeftToRightHand = false;
          }
        }else {
          this.swipeLeftToRightHand = true;
          if(this.swipeRightToLeftHand){
            console.log("RIGHT to LEFT HAND SWIPE!!!");
            this.swipeRightToLeftHand = false;
          }
        }
      }else {
        this.swipeRightToLeftHand = false;
        this.swipeLeftToRightHand = false;
      }

      if (elbows.leftElbow.depthY > hands.leftHand.depthY) {
        if (elbows.leftElbow.depthX < hands.leftHand.depthX) {
          this.swipeLeftHand = true;
        }else {
          if(this.swipeLeftHand){
            console.log("LEFT HAND SWIPE!!!");
            this.swipeLeftHand = false;
          }
        }
      }else {
        this.swipeLeftHand = false;
      }

    }


    // make handstate more readable
    translateHandState(handState) {
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
    drawHands(hands) {

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
    updateHandState(handState, hand) {

      switch (handState) {
        case 'closed':
          this.drawHand(hand, 1, 255);
          break;

        case 'open':
          this.drawHand(hand, 0, 255);
          break;

        case 'lasso':
          this.drawHand(hand, 0, 255);
          break;

          // create new state for clapping
        case 'clapping':
          this.drawHand(hand, 1, 'red');
      }
    }

    // draw the hands based on their state
    drawHand(hand, handState, color) {

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

    gotRightHand(hand){
      console.log(hand.depthX)
    }
}
