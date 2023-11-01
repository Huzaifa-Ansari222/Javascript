async function getAllUsers(){
    try{
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await respone.json()
        console.log(data);
    }catch (error){
        console.log("E:",error);
    }
}
// and can be donen by .then
fetch('https://api.github.com/users/Huzaifa-Ansari222')
.then((respone)=>{
    return respone.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(data);
})