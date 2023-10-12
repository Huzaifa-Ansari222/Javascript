//array inside object

const myCoding=[
    {
        langName:'javascript',
        langFile:'js'
    },
    {
        langName:'java',
        langFile:'java'
    },
    {
        langName:'pythn',
        langFile:'py'
    }
]
myCoding.forEach((items)=>{
    console.log(items.langName)
    console.log(items.langFile)
})