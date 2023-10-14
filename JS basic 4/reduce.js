//use in shopping mosty

//Reduce method
const array=[2,4,6]
//way1
const initialValue=0;
const mySum=array.reduce(
(accumulator,currentValue)=>accumulator+currentValue,
initialValue
);
console.log("way 1 ans "+mySum)
// way 2
const mysum=array.reduce ( function(accumulator,currentValue) {
    return accumulator+currentValue; 
},0)//innital val pass 1st time as a accumulator

console.log("way 2 ans "+mysum)//12