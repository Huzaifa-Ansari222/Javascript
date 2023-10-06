//create a div
const makeDiv=document.createElement('div');
console.log(makeDiv);

makeDiv.className="parent-div";//add class name
makeDiv.id="parent-id";//add id name
makeDiv.setAttribute("title","createdByJs");//add attr
makeDiv.style.backgroundColor="blue";
makeDiv.style.padding="30px";

// two ways to fill textcontent 
//innertext
//createTextNode 

//const divText =makeDiv.innerText=("i am created by js");//by inner text
// console.log(divText);

// using createTextNode
const divText=document.createTextNode("create by js using createTextNode");//creating text
makeDiv.appendChild(divText);//inserting text in div
document.body.appendChild(makeDiv);//inserting makeDiv in body
