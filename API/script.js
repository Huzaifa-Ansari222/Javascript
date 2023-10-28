const requestUrl="https://api.github.com/users/Huzaifa-Ansari222";
const xhr=new XMLHttpRequest();//make object 

xhr.open('GET',requestUrl);//requsting the url req  ...it have 2 parameter 'have many mehtod'

xhr.onreadystatechange=function(){//continous track chnge
console.log(xhr.readyState);//to check state of API
if(xhr.readyState===4){
    // const data=console(this.responseText);//give any name here
    const data=JSON.parse(this.responseText);//make it JSON  ..parse convert string -> JSON
    console.log(typeof data);//mostly come in string
    console.log(data.login);
    console.log(data.name);
    console.log(data.id);
    console.log(data.ndoe_id);
    console.log(data.url);
    console.log(data.html_url);
    console.log(data.reqos_url);
    console.log(data.blog);
    console.log(data.bio);
    console.log(data.twitter_username);
    console.log(data.public_repos);
    console.log(data.avatar_url);
    }
}

xhr.send()//now req it called
