function addLanguage(langName){//langName parameter
    const list=document.createElement('li');//li tag created
    list.innerHTML=`${langName}`//content of li add where langName:python
    const toPush=document.querySelector('.language')//grab ul className
    toPush.appendChild(list);//insert inside ul .... list=<li>python</li> 
}
addLanguage("python");//pass args in function 
addLanguage("java");