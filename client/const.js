class CONST {
    constructor(props) {
        this.API = {
            'weather' : 'https://api.openweathermap.org/data/2.5/forecast?q=',
        };

        this.TIME = {
            'min' : 60000,
            'sec' : 1000,
            'textEffectDelay' : 1500,
        };

        this.DIMEN = {
            'width' : 960,
            'height' : 520,
            'random_cloud_height' : 150,
            'totoro_x' : 520,
            'totoro_y' : 165,
            'totoro_scale' : 0.9,
            'small_totoro_x' : 720,
            'small_totoro_y' : 260,
            'small_totoro_scale': 0.3,
            'leaf_x': 370,
            'leaf_y': 60,
            'leaf_scale': 1,
            'cloudSize' : 25,
            'dandalion_center_radius' : 20,
            'dandalion_stem_weight' : 5,
        };

        this.ARRAY = {
            'city' : [ 'Seoul', 'NewYork', 'Toronto', 'Tokyo', 'Beijing' ],
            'day' : [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            'month' : [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ],
        };

        this.COLOR = {
            'rain' : "#557DB0",
            'white' : "#FFFFFF",
            'dandalion_stem' : '#426110',
            'dandalion_center' : '#5C4438',
            'dandalion' : 245,
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
        }

        this.SERIAL = {
            'port' : '/dev/serial0',
            'baudrate' : {'baudrate': 115200},
        }
    };
}
