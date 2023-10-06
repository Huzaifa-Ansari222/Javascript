//join using .join
let arrr=[10,2,30,300];
let joined=arrr.join('/');//add anything here 10/2/30/300
console.log(joined);

// split /make array
let messagee='this is my message'
let parts=messagee.split(' ');//split by space
console.log(parts);//(index 4) ['this', 'is', 'my', 'message']

// join ['this', 'is', 'my', 'message']
let joined1=parts.join('_'); 
console.log(joined1);//this_is_my_message