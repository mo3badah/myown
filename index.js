import express, {json} from 'express'
const app = express()
const PORT = 3000
// get json file and preview
import data from './data/mock.json'


// Get Post Put Delete Methods
// first GET method
app.get('/', (req,res)=>{
    res.send('this is a GET request from the path /')
})
// first POST method
app.post('/create', (req,res)=>{
    res.send('this is a POST request from the path /create')
})
// first PUT method
app.put('/edit', (req,res)=>{
    res.send('this is a PUT request from the path /edit')
})
// first DELETE method
app.delete('/remove', (req,res)=>{
    res.send('this is a get request DELETE the path /remove')
})

// GET all items
app.get('/items', (req,res)=>{
    res.json(data)
})
// GET specific item
app.get('/item/:id', (req,res)=>{
    res.json(data[req.params.id-1])
})

// establish the server
app.listen(PORT,()=>{
    console.log(`Your server is running on port : ${PORT}`)
    // console.log(data)
})
