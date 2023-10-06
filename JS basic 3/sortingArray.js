//sorting by deafault its in assccending order
let arz=[2,1,4,5,8,7,0,2,-1,'j','a'];
arz.sort();
console.log(arz);  //(11) [-1, 0, 1, 2, 2, 4, 5, 7, 8, 'a', 'j']

arz.reverse();
console.log(arz);//sorted in descending


//sort array object using callbackfunc/pedicate fucntiion
// let Array=[
//     {no:1,name:'huz'},
//     {no:2,name:'hanj'}
// ];//hw 


//filter method
let marks=[1,2,3,-1,-2,-3];
let value =marks.filter(value=> value>=0);
console.log(value);