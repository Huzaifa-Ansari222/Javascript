//step by step method 1
const promiseOne=new Promise(function(resolve,reject){//resolve connect to then
//async task
    setTimeout(function(){
    console.log('promise task 1 done');
    resolve();
    },2000); //return to callback function
});
promiseOne.then(function(){//here come in callback
    console.log('promise 1 consume');
});
console.log('hi');

//way 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asyn 2 taks done');
        resolve()
    },1000)

}).then(function(){
    console.log('asyn 2 consume ');
});

console.log('hi2');



//pass para on resolve as obj
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'huzaifa',email:'huzz@gmail.com'})
    },4000)
})
promiseThree.then(function(Username){
    console.log(Username);
})