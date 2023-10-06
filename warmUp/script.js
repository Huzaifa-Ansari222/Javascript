var rect=document.querySelector('#center');
rect.addEventListener('mousemove',function(mouselocation){
    var rectanglelocation=rect.getBoundingClientRect();
   var insiderect = mouselocation.clientX - rectanglelocation.left;
   if(insiderect < rectanglelocation.width/2){
    console.log('left');
   }
   else{
    console.log('right');
   }
});