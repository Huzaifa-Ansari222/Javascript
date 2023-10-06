//Removing element in array /object

let  nums=[1,2,3,4,5,6];
//remove start
nums.pop();
console.log(nums);//5remove [1, 2, 3, 4,5]
//remove start
nums.shift();
console.log(nums);//1 remove[2, 3, 4,5]
//remove middle
nums.splice(1,1);//[1, 2, 3, 4]===from index1 and remove 1 elemtnt
console.log(nums);//


//empty an arrray
num1=[1,23,4];
let mynum=num1;
// num1=[];//empty but have prblm
num1.length=0;//good way 
//num1.splice(0,num1.length)
console.log(num1);//[] empty
console.log(mynum);//value show means address copy means havent empty array properly
