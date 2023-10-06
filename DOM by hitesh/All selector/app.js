titles=document.getElementById('titlewa');
console.log(titles);

var titlesId=titles.getAttribute('id');
console.log(titlesId);


//inner text inner html textcontent
var titlesText=titles.innerText;
console.log(titlesText);

var titlesContent=titles.textContent;
console.log(titlesContent);

var titlesHtml=titles.innerHTML;
console.log(titlesHtml);

//same with elemntbyclassname



//queryselector //grab first child
var querySelect=document.querySelector('h2');
console.log(querySelect);


var hold = document.querySelector('ul');//grab tag
var green =hold.querySelector('li');
// green.style.backgroundColor="green";



//querySelectorAll
var holdAll=document.querySelectorAll('li');
console.log(holdAll);


//forEach in queryselector all 
holdAll.forEach(function (name){
    name.style.backgroundColor='blue'

})



//select by class name html  and convert it on array then apply foreeach
var toMakeArray=document.getElementsByClassName('list');
var array=Array.from(toMakeArray);
console.log(array);//prototype become html to array
//now apply for each to apply propety for alll element
array.forEach(function(namez){
    namez.style.color='orange';
})