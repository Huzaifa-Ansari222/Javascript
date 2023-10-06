//cloning using key
let src={
    file:10,
    douc:20,
    img:40
};
let dest={};

//iteration using key
for(let key in src){
    dest[key]=src[key];
}
console.log('iteration func');
console.log(dest);//copeid f10,d20,i40

let src1={vid:99};
//cloning using assign method
let dest1=Object.assign({},src,src1);
console.log('assign func');
console.log(dest1);//copeid f10,d20,i40,v99
src.file++;//chnge in src doesnt affect in dest copied object 
console.log(dest1);



//cloning using spread funtion
let dest3={...src};
console.log('spread func');
console.log(dest3);
 