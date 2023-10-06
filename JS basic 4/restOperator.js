function sumo(nummm,val,...args){//input many args 
    console.log(args);//stored here as array

}
//nummm=1,args=2,rest goes in args
sumo(1,2,3,34,5,6);//goes as array
//print 3,34,5,6

//default parameter
function intrest(p,r=6,y=10){//r default parameter/use when no args send by u
    return p*r*y/100;
}
console.log(intrest(1000,8,2));//remove any arg give NaN  