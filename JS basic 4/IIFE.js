//Immediatelty invoked functionn expresssion (IIFE)
//use to avoid golbal variable pollution

// ()()
// function name(parameter){
//     console.log("hi");
// }name();

//named IIFE
(function name(parameter){
    console.log("hii");
})();// add semi colon to end

//noname IIFE arrow IIFE
((parameter)=>{
    console.log(`hi ${parameter}`);
})('argurent here')
