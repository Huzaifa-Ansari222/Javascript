//mapping array with string
let roll=[1,2,3,4,5];
let valuee=roll.map(valuee=> 'student roll:'+valuee);
console.log(valuee);


//mapping with object in array
let items=[1,2,-1,-2];
// let filtered=items.filter(function (filtered){
// return filtered>=0; 
// });
// console.log(filtered);//1,2
// //mapping 1,2 with object
// let maped=filtered.map(function (maped){
// return {value:maped};//objed maped vlaue:1 vlaue:2
// });
// console.log(maped);

//chaining
let itemsss=[1,2,-1,-2];
    let maped=itemsss
        .filter(filtered =>filtered >=0)
        .map(numz =>({value: numz}));//(must)
    console.log(maped);