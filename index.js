require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('./connection')

const exServer = express()
exServer.use(cors())

exServer.use(express.json())
exServer.use(router)


const PORT = 4000 || process.env.PORT
exServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

exServer.get('/get',(req,res)=>{
    res.send('get request received')
})

