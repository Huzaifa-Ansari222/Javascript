
//for of
const arr=[1,2,3,4,55,6];
for (const i of arr) {
    //console.log(i);
    
}
const greetings="hello world";
for (const greet of greetings) {
   // console.log(`hi ${greet}`)
}
const meeting=[{hi:'hii'},{am:'aam'},{name:'huz'}];
for (const meet of meeting) {    
  //  console.log(meet)
}

//map 

const mapwa= new Map()
mapwa.set('In','india')
mapwa.set('usa','united state of america')
// console.log(mapwa)

//map using for of
// for (const key of mapwa) {
//     console.log(key)//get array
    
// }
for (const [key,value] of mapwa) {
    //console.log(key,':::',value)//get key and value
    
}

//iterate in object using forIn
//for of not work
const myObject={
    game1:'nfs',
    game2:'gtav',
    game3:'gtaiv'
}
for (const key in myObject) {
 //   console.log(`${key} i like ${myObject[key]}`)
}

//for in array
const arrr=['js','java','ruby','css','hmtl','pythn'];
for (const key in arrr) {
    console.log(`${key} list is ${arrr[key]}`)
}
