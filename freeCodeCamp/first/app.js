//DOM manipulation


//GetElementByID()
const title= document.getElementById('main-heading');
console.log(title);


//GetElementByCLassName()
console.log("by class name");
const listtItems=document.getElementsByClassName('list-items');
console.log(listtItems);//return object

//GetElementByTagName()
console.log("by class Tag name");
const tagName= document.getElementsByTagName('li');
console.log(tagName);

//querySelector()
//select first given selector item from multiple item
console.log("query selector");
const containerr= document.querySelector('div');
console.log(containerr); 


//querySelectorAll()
console.log("query selector all");

const container= document.querySelectorAll('div');//tags
console.log(container); 
