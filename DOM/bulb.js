var buttonOn=document.getElementById('myBulb');
var flag=0;
function onBtn(){
    if(flag==0){
buttonOn.style.backgroundColor='yellow';
buttonOn.style.boxShadow='0px 0px 500px #ddf522'
flag=1;
}
else{
    buttonOn.style.backgroundColor='rgb(215, 245, 255)';
buttonOn.style.boxShadow='0px 0px 500px #000000'
    flag=0
}
}

buttonOn.addEventListener('click',onBtn);