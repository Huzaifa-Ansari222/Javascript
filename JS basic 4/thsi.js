const user={
    username:"huzafia",
    age:23,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to our webpage`)
        console.log(this)
    }
};
// user.welcomeMessage()//huzaifa
// user.username="hanjala"
// user.welcomeMessage()//hanjala

// console.log(this)//empty object in terminal not in console log window  
function chai(){
    let username="huzaifa"
    console.log(this.username)//not work in function fornow work in object
}
chai()//undefined not work this

const coffee = function () {
    let username='huzz'
    console.log(this.username)
}
coffee()//undefined not work this



const coffees =  ()   => {
    let username='huzz'
    console.log(this.username)
}
coffees()


//basic arrow funcfiton

const fun = (a,b)=>{
    return a+b;
}
// console.log(fun(2,3));

//implisit return
// const fun2 = (a,b)=> a+b; 
const fun2 = (a,b)=> (a+b); 
const fun3 = ()=> ({username:'xyz'}); 


console.log(fun3());
