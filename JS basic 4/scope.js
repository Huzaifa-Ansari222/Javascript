//scope
if(true){
    let a=5;
}
// console.log(a);//undefined

if(true){
    var a=5;
}
console.log(a);//5 acess here inside and outside the fucntionn 
//if not denied insdie the fuunctionn means access globally
function a(){
    const ab=5;//acess till brace
}
function b(){
    const ab=2;//acess till brace
}

//globally
const z=4;// globallly acess
function tt(){
    const z=3;// local acess both difrent no error
}