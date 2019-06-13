class Temp{
  constructor(){
    this.temp;
  }

  init(temp){
    this.temp = temp - 273;
  }

  tempByTint(){

    if(this.temp <= 15){
      tint(204, 0, 0, 255);
    } else if(this.temp > 15 && this.temp <= 25 ){
      tint(255, 0, 0, 255);
    }else if(this.temp > 25){
      tint(0, 0, 204, 255);
    }
  }
}
