//add remove property in object
function Rectangle(len,bre){
    this.length=len;//this. show current obj work
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}

// object creation using constuction
let rectangleObjectt=new Rectangle(1,2);//cal and obj create  ///same 
// rectangleObjectt;//1,2
rectangleObjectt.color='yellow';
console.log(rectangleObjectt);//add yellow

rectangleObjectt.color2='red';
console.log(rectangleObjectt);//add yellow and red
delete rectangleObjectt.color2;
console.log(rectangleObjectt);//delete red

let Rectangle1 = new Function(
    'len','bre',
`this.length=len;
this.breadth=bre;
this.draw=function(){
console.log('drawing');
}`
);//same
//obj creating using Rectangle1
