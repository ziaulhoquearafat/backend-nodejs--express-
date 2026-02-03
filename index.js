const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Back to the code');
})

const users = [
    {id:1, name:'Sabana', gmail:'Sabana@gmail.com'},
    {id:2, name:'Sabila Noor', gmail:'Sabilanoor@gmail.com'},
    {id:3, name:'Sabnoor', gmail:'Sabnoor@gmail.com'}
]

app.get('/users', (req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('post method hit')
})

app.listen(port, ()=>{
    console.log(`Serve is running on port ${port}`)
})

