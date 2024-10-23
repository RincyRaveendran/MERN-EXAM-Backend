const mongoose =require('mongoose')

const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('mongoDb connected');
    
}).catch((err)=>{
    console.log(`connection error due to ${err}`);
    
})