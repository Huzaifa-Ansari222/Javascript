//step by step method 1
// const promiseOne=new Promise(function(resolve,reject){//resolve connect to then
// //async task
//     setTimeout(function(){
//     console.log('promise task done');
//     resolve();
//     },2000); //return to callback function
// });
// promiseOne.then(function(){//here come in callback
//     console.log('promise consume');
// });
// console.log('hi');