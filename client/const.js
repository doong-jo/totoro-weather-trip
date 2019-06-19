class CONST {
    constructor(props) {
        this.API = {
            'weather' : 'https://api.openweathermap.org/data/2.5/forecast?q=',
        };

        this.TIME = {
            'min' : 60000,
            'sec' : 1000,
            'textEffectDelay' : 1500,
            'city_offset' : {
                'New York': -5,
                'Tokyo' : +9,
                'Seoul' : +9,
                'Beijing' : +8,
                'Toronto' : -5,
            },
        };

        this.STRING = {
            'gwangjingu' : "광진구",
        };

        this.DIMEN = {
            'width' : 960,
            'height' : 520,
            'random_cloud_y_area' : 150,
        };

        this.SCALE = {
            'totoro_scale' : 0.9,
            'small_totoro_scale': 0.3,
        };

        this.POS = {
            'totoro_x' : 520,
            'totoro_y' : 165,

            'small_totoro_x' : 720,
            'small_totoro_y' : 260,

            'leaf_x': 370,
            'leaf_y': 60,
        };

        this.ARRAY = {
            'city' : [ 'Seoul', 'New York', 'Toronto', 'Tokyo', 'Beijing' ],
            'day' : [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            'month' : [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ],
        };

        this.COLOR = {
            'rain' : "#EBF4FA",
            'white' : "#FFFFFF",
            'dandalion_stem' : '#426110',
            'dandalion_center' : '#5C4438',
            'dandalion' : 245,
            'totoroHeadLeaf' : "#75AB49",
            'hillDarkGreen' : "#AAD371",
            'hillGreen' : "#CBED50",
            'hillBrightGreen' : "#F0ED5F",
            'bright_blue' : { 'r':44, 'g':151, 'b':216 },

            'white' : { 'r':255, 'g':255, 'b':255 },
            'black' : { 'r' : 0, 'g' : 0, 'b' : 0 },
            'dark_black' : { 'r': 56, 'b': 56, 'g': 56, },
            'bright_indigo' : { 'r' : 51, 'g' : 0, 'b' : 102 },
            'dark_indigo' : { 'r':0, 'g':0, 'b':51 },
            'bright_purple' : { 'r':102, 'g':0, 'b':102 },
            'blue' : { 'r':4, 'g':105, 'b':198, },
            'dark_blue' : { 'r': 18, 'g': 71, 'b': 145, },
            'bright_yellow' : { 'r':252, 'g':252, 'b':208 },
            'dark_purple' : { 'r':51, 'g':0, 'b':51 },
            'dark_orange' : { 'r':153, 'g':0, 'b':0 },
        };

        this.VALUE = {
            'acceleration' : 0.098,
            'rain_num' : 100,

            'kinect_swipe_min_dis' : 0.01,
            'kinect_time_min_x_dis' : 0.001,
            'kinect_time_min_y_dis' : 0.002,
            'kinect_time_delay' : 2000,

            'leaf_scale': 1,
            'bubble_alpha_speed' : 20,
            'bubble_alpha_max' : 250,
            'dandalion_center_radius' : 20,
            'dandalion_stem_weight' : 5,

            'cloud_saturation' : 200,
        };

        this.GESTURE = {
            'left' : 0,
            'right' : 1,
            'timestone' : 2,
        };

        this.SERIAL = {
            'port' : '/dev/serial0',
            'baudrate' : {'baudrate': 115200},
        }
    };
}
