
class Kinect {
    constructor(props) {
        this.kinectron = null;
        this.liveData = true;
        this.swipeRightToLeftHand = false;
        this.swipeLeftToRightHand = false;
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

      if (elbows.rightElbow.depthY > hands.rightHand.depthY) {
        //HANDS UP STATE
        if (elbows.rightElbow.depthX < hands.rightHand.depthX) {
          //HANDS UP AND RIGHT STATE
          this.swipeRightToLeftHand = true;     //손이 오른쪽에서 왼쪽으로 가기전의 준비
          if(this.swipeLeftToRightHand){        //손이 왼쪽에서 오른쪽으로 왔다면?
            console.log("LEFT to RIGHT HAND SWIPE!!");
            this.swipeLeftToRightHand = false;  //한번 왔으니 다시 false
          }
        }else {
          this.swipeLeftToRightHand = true;     //손이 왼쪽에 있고 이제 오른쪽으로 갈 준비를 마쳤다.
          if(this.swipeRightToLeftHand){        //손이 오른쪽에서 왼쪽으로 왔다면?
            console.log("RIGHT to LEFT HAND SWIPE!!!");
            this.swipeRightToLeftHand = false;
          }
        }
      }else {                                   //손이 팔꿈치보다 아래에있다면
        this.swipeRightToLeftHand = false;
        this.swipeLeftToRightHand = false;
      }


      console.log("Thumb X: " + thumb.rightThumb.depthX);
      console.log("Hand X: " + hands.rightHand.depthX);
      console.log("fingerTip X: " + finger_tip.right.depthX);

      if(elbows.rightElbow.depthY > hands.rightHand.depthY){


      }

//왼손 상태
      // if (elbows.leftElbow.depthY > hands.leftHand.depthY) {
      //   if (elbows.leftElbow.depthX < hands.leftHand.depthX) {
      //     this.swipeLeftHand = true;
      //   }else {
      //     if(this.swipeLeftHand){
      //       console.log("LEFT HAND SWIPE!!!");
      //       this.swipeLeftHand = false;
      //     }
      //   }
      // }else {
      //   this.swipeLeftHand = false;
      // }
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
}
