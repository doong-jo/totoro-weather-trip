class CONST {
    constructor(props) {
        this.API = {
            'weather' : 'http://api.openweathermap.org/data/2.5/forecast?q=',
        };

        this.TIME = {
            'min' : 60000,
            'sec' : 1000,
        };

        this.DIMEN = {
            'width' : 960,
            'height' : 520,
            'totoro_x' : 550,
            'totoro_y' : 180,
            'totoro_scale' : 0.9,
            'cloudSize' : 25,
        };

        this.ARRAY = {
            'city' : [ 'Seoul', 'NewYork', 'Toronto', 'Tokyo', 'Beijing' ],
            'day' : [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            'month' : [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ],
        };

        this.COLOR = {
            'rain' : "#557DB0",
            'white' : "#FFFFFF",
            'totoroBody' : "#666666",
            'totoroStomach' : "#F4F4D0",
            'totoroHeadLeaf' : "#75AB49",
            'hillDarkGreen' : "#AAD371",
            'hillGreen' : "#CBED50",
            'hillBrightGreen' : "#F0ED5F",
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
            },
        };

        this.VALUE = {
            'acceleration' : 0.098,
            'rain_num' : 100,
            'city_offset' : {
                'Seoul' : +9,
                'NewYork': -5,
                'Toronto' : -5,
                'Tokyo' : +9,
                'Beijing' : +8
            },
            'kinect_swipe_min_dis' : 0.1,
            'kinect_time_min_x_dis' : 0.001,
            'kinect_time_min_y_dis' : 0.002,
            'kinect_time_delay' : 2000,
        }

        this.GESTURE = {
            'left' : 0,
            'right' : 1,
            'timestone' : 2,
        }

        this.SERIAL = {
            'port' : '/dev/serial0',
            'baudrate' : {'baudrate': 115200},
        }
    };
}
