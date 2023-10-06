// console.log('Acessing function inside the object');
// let rect={
//     length:6,
//     breadth:7,

//     draw: function (){
//         console.log('drawing rectangle');
//     }
// };


//factory function /creation of obj  
function creatingRectangle() { //call it and get object many time
    return rect={//obj
        length: 1,
        breadth:2,
    
        draw: function (){
            console.log('drawing rectangle');
        }
    };//obj end
    // return rect;
}

let rectObj=creatingRectangle();//making obj 
// rectObj1;
// creatingRectangle();
// rect.length;
// rect.breadth;
// rect.draw();

//end factory function

//paramter
function creatingRectangle1(lengthh,breadthh) { //call it and get object many time
    return rect={//obj
        length:lengthh,
        breadth:breadthh,
    
        draw: function (){
            console.log('drawing rectangle');
        }
    };//obj end
    // return rect;
}
let rectObj1=creatingRectangle1(6,6);//making obj  and pass parameter
let rectObj2=creatingRectangle1(16,16);//making obj  and pass parameter

rectObj1;//6,6
rectObj2;//16,16


