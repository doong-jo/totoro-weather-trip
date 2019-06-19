class Serial {
    constructor(props) {
        this.serial = {};
        this.inData = 0;
        this.mainSerialCb = null;
    }

    init() {
        this.serial = new p5.SerialPort();
        this.serial.on('list', this.printList);
        this.serial.on('connected', this.serverConnected);
        this.serial.on('open', this.portOpen);
        this.serial.on('data', this.serialEvent);
        this.serial.on('error', this.serialError);
        this.serial.on('close', this.portClose);

        this.serial.list();
        this.serial.open(CONSTANT.SERIAL.port, CONSTANT.SERIAL.baudrate, onOpen);

        function onOpen() {
            print('opened the serial port!');
        }
    }

    setMainSerialEventCallback(callback) {
        this.mainSerialCb = callback;
    }

    printList(portList) {
        for (var i = 0; i < portList.length; i++) {
            print(i + " " + portList[i]);
        }
    }

    serverConnected() {
        print('connected to server.');
    }

    portOpen() {
        print('the serial port opened.')
    }

    serialEvent() {
        inData = Number(this.serial.read());
        if( this.mainSerialCb == null ) { print('main serial callback is required.'); }
        else {
            this.mainSerialCb(inData);
        }
    }

    serialError(err) {
        print('Something went wrong with the serial port. ' + err);
    }

    portClose() {
        print('The serial port closed.');
    }
}
