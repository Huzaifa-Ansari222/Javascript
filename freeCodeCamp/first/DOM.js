//DOM manipulation

// change css style
const tit= document.querySelector('#main-heading');
tit.style.color="red";
console.log(tit);



//loop

const listItem= document.querySelectorAll('.list-items');

for(var i=0 ; i<listItem.length ; i++){
listItem[i].style.color='black';
}
console.log(listItem);
