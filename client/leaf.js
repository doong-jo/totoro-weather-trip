class Leaf{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.totoro_leaf = new Array();

        const setLeafParts = [ 'leafSmallBody', 'leafbody', 'leafShadow', 'leafTail' ];

        drawFromJson = new DrawFromJson();

        drawFromJson.loadDataFromJson('leaf.json', this.totoro_leaf, setLeafParts);
    }

    draw(){
        drawFromJson.draw(this.totoro_leaf, this.x, this.y, this.scale);
    }
}
