class Gwang{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.gwang = new Array();
        this.gwangMark = new Array();

        const setGwangParts = ['gwangBaseBody', 'gwangLeftArm', 'gwangRightArm', 'gwangLeftKnee','gwangRightKnee', 'gwangLeftFoot', 'gwangRightFoot', 'gwangLeftBottom',
    'gwangRightBottom',  'gwangDownLeftPants', 'gwangDownRightPants', 'gwangUpPants', 'gwangBelt', 'gwangLeftEars', 'gwangLeftShoulder', 'gwangTop', 'gwangSwordBody',
    'gwangRightHand', 'gwangRightShoulder', 'gwangFace', 'gwangInNeck', 'gwangNeck', 'gwangPonyTail', 'gwangHair', 'gwangUpHead', 'gwangRightEars', 'gwangRightHorn',
    'gwangLeftHorn', 'gwangSwardNeck', 'gwangLeftHair', 'gwangRightHair', 'gwangHead', 'gwangHairTop', 'gwangSwordHead', 'gwangSwordBelt', 'gwangHandle', 'gwangMouth',
    'gwangNeck_01', 'gwangNeck_02', 'gwangNeck_03', 'gwangPattern_01', 'gwangPattern_02', 'gwangPattern_03', 'gwangPattern_04', 'gwangPattern_05', 'gwangPattern_06',
    'gwangPattern_07', 'gwangPattern_08', 'gwangPattern_09', 'gwangPattern_10', 'gwangPattern_11', 'gwangPattern_12', 'gwangPattern_13', 'gwangPattern_14','gwangPattern_15',
    'gwangPattern_16', 'gwangPattern_17', 'gwangPattern_18', 'gwangPattern_19'];

        const setGwangMart = ['gwangMark_01', 'gwangMark_02', 'gwangMark_03'];

        drawFromJson = new DrawJSON();

        drawFromJson.loadDataFromJson('gwang.json', this.gwang, setGwangParts);
        drawFromJson.loadDataFromJson('gwang.json', this.gwangMark, setGwangMart);
    }

    draw(){
        drawFromJson.draw(this.gwang, this.x, this.y, this.scale);

        fill(0);
        ellipse(this.x + 92 * this.scale, this.y + 136 * this.scale, 4 * this.scale, 17 * this.scale);
        ellipse(this.x +130 * this.scale, this.y + 137 * this.scale, 4 * this.scale, 17 * this.scale);

        fill('#FAC6A1');
        noStroke();
        ellipse(this.x + 152 * this.scale, this.y + 154 * this.scale, 22 * this.scale, 15* this.scale);
        ellipse(this.x + 82 * this.scale, this.y + 154 * this.scale, 22 * this.scale, 15* this.scale);

        fill('#3B2881');
        stroke(0);
        ellipse(this.x + 104 * this.scale, this.y + 224 * this.scale, 45* this.scale, 40* this.scale);

        drawFromJson.draw(this.gwangMark, this.x, this.y, this.scale);

    }
}
