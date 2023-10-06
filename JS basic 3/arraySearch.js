//make array of object
let courses =[
    {no:1,nam:'huz'},//1st elemnt
    {no:2,nam:'ans'}//2nd element
];
// console.log(courses);
//console.log(courses.indexOf({no:1,nam:'huz'}));//-1
//different address for objec type


//searching using callback functionn in object
 let anss =courses.find(function(anss){
return anss.nam=='huz';//if huzz present return huzz
 })


//with arrrow method 1parameter 1 return type enchance technicque
//let anss=courses.find(ans => anss.nam ==='huz');

console.log(anss);//{no: 1, nam: 'huz'} Prototype: Object
