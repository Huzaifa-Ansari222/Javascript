//searching in array
//-1 not present
//if present give index()

let num=[10,2,3,543,4];
console.log(num.indexOf(543));//at 3 index  


//no. exist or  not
// way1

if (num.indexOf(377)!=-1){
    console.log('present');
}
else{
    console.log('absent');
}

//way2
console.log(num.includes(4));//if present give true else false

//way3 advance
console.log(num.indexOf(543,2)); // 4 to find    from index 2 to num.length
//if present give index adress else -1


 