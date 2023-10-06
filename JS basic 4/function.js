// function
//; use or not use on u

//run();hosting func call topp of declartion
function run(){//function declaration
    console.log('running function');
}
run();//function call

  
//Named function assignment
// stand();//hosting not work
let stand=function walk(){
    console.log('walking');
};
//anonymous function/noname function
let stand1=function/*NoName*/(){ 
    console.log('walkingNOname');
};
stand();//hoisting not possible
stand1();//hoisting not possible

let jump=stand;
jump();//walking


function sum(a,b){
    return a+b;
}
console.log(sum(1,2));//3
console.log(sum(1));//NaN
console.log(sum());//NAN
console.log(sum(1,2,2,3,55,));//3



//console.log(sum(1,2,2,3,55,)); check where this args goes
function sub(aa,bb){//pass 2no.
    console.log(arguments);//all data comein arg as oject with maped /key:value
    return aa-bb;
}
let ans=sub(1,2,3,4,5,6);//pass 6no.


//dynamic /2parameter many args
function sums(){//pass 2no.
    let total=0;
    for(let value of arguments)
    total=total+value;//1+2+3+4+5+6
    return total;
}
let ans1=sums(1,2,3,4,5,6);
console.log(ans1);//21