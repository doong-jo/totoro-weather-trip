let kinnectSelf;

class Kinect {
    constructor(props) {
        this.kinectron = null;

        this.liveData = true;
        this.swipeRightToLeftHand = false;
        this.swipeLeftToRightHand = false;
        this.timeStoneState = false;
    }

    initkinectron() {
      if( this.liveData ) {
          // define and create an instance of this.kinectron
          this.kinectron = new Kinectron();

          // connect with application over peer
          this.kinectron.makeConnection();

          // request all tracked bodies and pass data to your callback
          kinnectSelf = this;
          this.kinectron.startTrackedBodies(this.bodyTracked);
      }
    }

    bodyTracked(body) {
      const self = kinnectSelf;

      let hands = [];
      let elbows = [];
      let thumb = [];
      let finger_tip = [];


      // get all the joints off the tracked body and do something with them
      for(let jointType in body.joints) {
        let joint = body.joints[jointType];

        if(jointType == self.kinectron.THUMBRIGHT){
          thumb.rightThumb = joint;
        }

        if (jointType == self.kinectron.HANDTIPRIGHT) {
          finger_tip.right = joint;
        }

        //find rightElbow
        if(jointType == self.kinectron.ELBOWRIGHT){
          elbows.rightElbow = joint;
        }

        // get the hands off the tracked body and do somethign with them

        // find right hand
        if (jointType == self.kinectron.HANDRIGHT) {
          hands.rightHand = joint;
        }
      }

      self.checkSwipeState(hands.rightHand, elbows.rightElbow);
      self.checkTimeStoneState(elbows.rightElbow, hands.rightHand, thumb.rightThumb, finger_tip.right)
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

    initState() {
      this.swipeRightToLeftHand = false;
      this.swipeLeftToRightHand = false;
      this.timeStoneState = false;
    }

    checkSwipeState(hand, elbow){

        let mDistance = elbow.depthX - hand.depthX;
        //console.log(mDistance);
        if (elbow.depthY > hand.depthY) {
          //HANDS UP STATE
          if (elbow.depthX < hand.depthX) {
            //HANDS UP AND RIGHT STATE
            this.swipeRightToLeftHand = true;     //손이 오른쪽에서 왼쪽으로 가기전의 준비
            if(this.swipeLeftToRightHand){        //손이 왼쪽에서 오른쪽으로 왔다면?
              if(mDistance < -0.1){
                console.log("LEFT to RIGHT HAND SWIPE!!");
                this.initState();
              }
            }
          }else {
            this.swipeLeftToRightHand = true;     //손이 왼쪽에 있고 이제 오른쪽으로 갈 준비를 마쳤다.
            if(this.swipeRightToLeftHand){        //손이 오른쪽에서 왼쪽으로 왔다면?
              if(mDistance > 0.1){
                console.log("RIGHT to LEFT HAND SWIPE!!!");
                this.initState();
              }
            }
          }
        }else {                                   //손이 팔꿈치보다 아래에있다면
          this.initState();
        }
    }

    checkTimeStoneState(elbow, hand, thumb, finger_tip){
      if(elbow.depthY > hand.depthY){
        if(thumb.depthX < hand.depthX && finger_tip.depthY < hand.depthY)
        {
          this.timeStoneState = true;
        }else if(thumb.depthX > hand.depthX && finger_tip.depthY > hand.depthY){
          if(this.timeStoneState){
            console.log("Doromamu CHECK")
            this.initState();
          }
        }
      }else {
        this.initState();
      }

    }
}
