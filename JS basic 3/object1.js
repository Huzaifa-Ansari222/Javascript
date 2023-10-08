//symbol
const mySym=Symbol("key");
const user={//key : value
            //name treated as string: 
            [mySym]:"my key1",
            name:"huzaifa ",
            "full name": "md huzaifa asnari",
            age: 23,
            email:"huzaifa656@gmail.com",
            isLogin: false,
            lastLoginDays:["mon","tues"]
}
//console.log(user.email);//not good ways to acess object
// console.log(user["email"]);
// // console.log(user.full name);//cant acess by . nottationn 
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.email="hi@gmail.com"//over write
// console.log(user["email"]);
// //freeze
// Object.freeze(user);//lock vlaue to stop ovrwrite
// user.email="hello@gmail.com"//overwrite not work
// console.log(user);

// user.greeting =function(){
//     console.log("hello user");
// }

//get property from object using this
user.greeting2 =function(){
    console.log(`hello ${this["full name"]}`);
    console.log(`hello ${this.name}`);//get property from object

};//get property from object
// console.log(user.greeting());
console.log(user.greeting2());



