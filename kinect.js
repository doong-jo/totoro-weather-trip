
class Kinect {
    constructor(props) {
        this.kinectron = null;
        this.liveData = true;
    }

    initkinectron() {
      if( this.liveData ) {
          // define and create an instance of this.kinectron
          this.kinectron = new this.kinectron();

          // connect with application over peer
          this.kinectron.makeConnection();

          // request all tracked bodies and pass data to your callback
          this.kinectron.startTrackedBodies(this.bodyTracked);
          this.kinectron.startTrackedJoint(this.kinectron.HANDRIGHT, this.gotRightHand);
      }
    }

    bodyTracked(body) {
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
    drawJoint(joint) {
      fill(100);

      // kinect location data needs to be normalized to canvas size
      ellipse(joint.depthX * width, joint.depthY * height, 15, 15);

      fill(200);

      // kinect location data needs to be normalized to canvas size
      ellipse(joint.depthX * width, joint.depthY * height, 3, 3);
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
      console.log(hand)
    }
}
