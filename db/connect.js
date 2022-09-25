const mongoose= require('mongoose')
let url ='mongodb+srv://imran321:yaamaalik4321@daahqaad.q4t4cyt.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(()=>{
    console.log('connnected')
})
.catch(er=>{
  console.log(er.message)
})



module.exports= mongoose