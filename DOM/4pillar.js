//catch the element tags using js
var element=document.querySelector("h1");
console.log(element);

//change in html tag CONTENT using js
// var element=document.querySelector("h1");
//element.innerHTML='4 Pillar of DOM'


//change in css using js
// var element=document.querySelector("h1");
element.style.color="xyzColor";




//event Listner using js 
//var element=document.querySelector("h1");
element.addEventListener('click',function()
{
console.log('i have clicked on h1 tag');
});



//more 

element.addEventListener('click',myfan);
function myfan(){
    element.style.color='#ffbfbf';
    element.style.backgroundColor='black';
    element.innerHTML='4 Pillars of DOM';
}

// make ol tag style on click
var listStyle=document.querySelector('ol');
function mylist(){
    listStyle.style.backgroundColor='black';
    listStyle.style.color='#ffbfbf'
}
listStyle.addEventListener('click',mylist);

//body style
var bodyChange=document.querySelector('body');
function mybody(){
    bodyChange.style.backgroundColor='black';
    bodyChange.style.color='white';
}
bodyChange.addEventListener('click',mybody);