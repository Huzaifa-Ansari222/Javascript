const apnaArray=[1,2,3,4,5,6,7]
const myArray=apnaArray.map((any)=>{
    return any+10
})
//console.log(myArray)

//chaining ; add 1+method
const myArray1=apnaArray//any =1
            .map((any)=>any*10)//1=>1*10
            .map((any)=>any+10)//10=>10+10
            .filter((any)=>any>10)//20=>20>10

console.log(myArray1)