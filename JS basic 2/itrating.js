// iterating in object using for-in 
//key and value
let rectangle={
    len:2,
    bre:4,
};
for(let key in rectangle){//for-in
    console.log(key,rectangle[key]);//acesss key and value
}


// iterable  in array/map using for-of
for(key of rectangle){
    console.log(key,rectangle[key]);//acesss key and value
    //not iterabal
}


