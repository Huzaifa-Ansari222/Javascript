let a={value:10};//a=10
let b=a; 

a.value++;

console.log(a.value);
console.log(b.value);



let aa=10;
function inc(aa)//a is diff here 
{
    aa=1;
    aa++;//
    console.log(aa);//2
}
inc(aa);// 2
console.log(aa);//10


//ref
let z={value:10};

function inc(z){
    
    z.value;
    console.log(z);
}
inc (z);
console.log(z);

