class CONST {
    constructor(props) {
        this.DIMEN = {
            'width' : 960,
            'height' : 520,
            'totoro_x' : 500,
            'totoro_y' : 160,
            'totoro_width' : 250,
            'totoro_heigth' : 350,
            'Seoul' : +9,
            'NewYock' : -5,
            'Toronto' : -5,
            'Tokyo' : +9,
            'Beijing' : +8
        };

        this.COLOR = {
            'rain' : "#557DB0",
            'dark_indigo' : {
              'r':0,
              'g':0,
              'b':51
            },
            'bright_purple' : {
              'r':102,
              'g':0,
              'b':102
            },
            'bright_blue' : {
              'r':5,
              'g':255,
              'b':180
            },
            'white' : {
              'r':255,
              'g':255,
              'b':255
            },
            'blue' : {
              'r':51,
              'g':0,
              'b':255
            },
            'bright_yellow' : {
              'r':255,
              'g':255,
              'b':204
            },
            'dark_purple' : {
              'r':51,
              'g':0,
              'b':51
            },
            'dark_orange' : {
              'r':153,
              'g':0,
              'b':0
            },
            'black' : {
              'r' : 0,
              'g' : 0,
              'b' : 0
            },
            'bright_indigo' : {
              'r' : 51,
              'g' : 0,
              'b' : 102
            }
        };

        this.VALUE = {
            'acceleration' : 0.098,
            'rain_num' : 100,
        }

        this.SERIAL = {
            'port' : '/dev/serial0',
            'baudrate' : {'baudrate': 115200},
        }
    };
}
