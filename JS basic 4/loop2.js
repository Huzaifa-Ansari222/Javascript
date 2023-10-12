//for each
const coding =['js','cpp','java','rby']

//on browser consolye prototypes.....
// coding.forEach( function (val) {//callbakc function have no name
//     console.log(val)
// } )

//we can use arrow function
//coding.forEach((anyname)=>{
   // console.log(anyname)
//})


//pass by function  name
function printMe(anyname){
    console.log(anyname)
}
coding.forEach(printMe)