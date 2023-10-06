//getter and setter
// getter > access properties
// setter > change /update

let person={
    fname:'huzaifa',
    lname:'ansari',
    get fullName(){
        return `${person.fname}   ${person.lname}`;
    },
    set fullName(value){//value for set value
        // if(typeof value !== String){//try catch part
        //     throw new Error("you havnt enter string");
        // }
    let partss=value.split(' '); 
    this.fname=partss[0];
    this.lname=partss[1];
    }
};

// function fullName(){//only read not update
//     return `${person.fname}    ${person.lname}`;
// }


//acess getter n setter 
person.fullName='hanjala ansari'; //pass value 0,1 


// erro try catch 
// try{
//     person.fullName=true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);