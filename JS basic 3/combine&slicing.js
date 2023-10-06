//combing 2 arr using concat method
let arr1=[1,2,3];
let arr2=[4,5,6];
let merge=arr1.concat(arr2);
console.log(merge);//[1,2,3,4,5,6]

let sliced=merge.slice(2,4);
//sliced=merge.slice(2);2index to till print all
//sliced=merge.slice(); orignal arr print normal/full slicing
console.log(sliced);//after slicing [3, 4]

//2way to combine array spread method
let ar1=[11,2];
let ar2=[3,44];
let merge1=[...ar1,'a',...ar2,'b'];//combine and addd also
console.log(merge1);

//copy
let another=[...merge1];
console.log(another);