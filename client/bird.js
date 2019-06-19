class Bird{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;
        // this.dance = false;
        // this.danceY = -5;

        this.bird = new Array();

        const setBirdParts = [ "bird_head", "bird_mouth", "brid_wing", "brid_stomache",
                                "brid_tail_1", "brid_tail_2", "brid_foot_1", "brid_foot_2" ];

        drawFromJson = new DrawJSON();

        drawFromJson.loadDataFromJson('bird.json', this.bird, setBirdParts);
        // setInterval(() => {
        //     this.danceY = -5;
        //     setTimeout(()=> {
        //         this.danceY = 0;
        //     }, 100);
        // }, 800);
    }

    draw(){
        drawFromJson.draw(this.bird, this.x, this.y, this.scale);

        //Eye
        fill(0);
        ellipse(this.x + 380 * this.scale, this.y + 80 * this.scale, 20 * this.scale, 20 * this.scale);
        fill(255);
        ellipse(this.x + 380 * this.scale, this.y + 80 * this.scale, 18 * this.scale, 18 * this.scale);
    }
}
