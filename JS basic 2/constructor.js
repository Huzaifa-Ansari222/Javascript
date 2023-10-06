function Rectangle(len,bre){
    this.length=len;//this. show current obj work
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}

// object creation using constuction
let rectangleObject=new Rectangle(1,2);
rectangleObject;//1,2
