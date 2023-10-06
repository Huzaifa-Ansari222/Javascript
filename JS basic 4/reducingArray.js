let arr5=[1,2,3,4];
let totall=0;
for(let value of arr5){//use for of iterable on array /or it give object//00123
    totall+=value;
}

console.log(totall);//10 on for of //00123 for in

//reduce method
let totall1=arr5.reduce((accumlator,currentValue)=>accumlator+currentValue,0);//remove 0 is ok //accu starrt with initial value
console.log("reduce way asnwer")
console.log(totall1);