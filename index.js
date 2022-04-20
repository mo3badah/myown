import express from 'express'
const app = express()
const PORT = 3000






// establish the server
app.listen(PORT,()=>{
    console.log(`Your server is running on port : ${PORT}`)
})
