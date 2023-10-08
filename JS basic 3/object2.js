//single ton /constructor

//const Userr= new Object();//using singleton /same
const User={};//non signleton / same
User.id=32847320;
User.name="huzaifa";
User.email="huzaifaasnari656@gmail.com";
// console.log(User)

// object inside object insdie object nested obj

const regularUser={
    email:"huzaif#gml",
    name:{
        fullname:{
            firstname:"huzaifa",
            lastname:"ansari"
        }
    }
}
// console.log(regularUser.name);
// console.log(regularUser.name.fullname);
// console.log(regularUser.name.fullname.firstname);



// combine objects using assign
const obj1={n:1,m:2};
const obj2={n1:1,m1:2};
// const obj3={obj1,obj2};//worng ways
// const obj3=Object.assign(obj1,obj2);//work but 


//assign object way
// const obj3=Object.assign({},obj1,obj2);//good way//all goes in empty {} obj

//speard operartor way
const obj3={...obj1,...obj2};
// console.log(obj3);


//object inside array
const myUser=[
    {//index 0
        userName:"huzzz0",
        password:"hahahaha"
    },
    {//index 1
        userName:"huzzz1",
        password:"hahahaha"
    },
    {//index 2
        userName:"huzzz2",
        password:"hahahaha"
    },
    {//index 3
        userName:"huzzz3",
        password:"hahahaha"
    }, 
    {//index 4
        userName:"huzzz4",
        password:"hahahaha"
    },
];
// console.log(myUser[0].userName,myUser[0].password)


console.log("user data:")
console.log(User);

console.log("user values:")
console.log(Object.values(User));

console.log("user keys:")
console.log(Object.keys(User));

// console.log(Object.entries(User));//make property as array

console.log(User.hasOwnProperty('name'));





