// filter itreaction on array 
const score=[2,23,4,43,34]

const myScore=score.filter( (score)=>score>20)
 console.log(myScore)


const myScore1=score.filter( (score)=>{
    score>20
})
 console.log(myScore1)//empty arry


 const myScore2=score.filter( (score)=>{
    return score>20
})
 console.log(myScore2)//empty arry

