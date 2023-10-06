//creation
let arr=[1,2,3];
console.log(arr);


//add element at starting index
arr.unshift(0);
console.log(arr);//0,1,2,3

//add element at middle of index somewhere
arr.splice(2,0,'H','u','z','Z');
console.log(arr);// [0, 1, 'H', 'u', 'z', 'Z', 2, 3]

//add element at end 
arr.push(88);
console.log(arr);//[0, 1, 'H', 'u', 'z', 'Z', 2, 3, 88]

 

