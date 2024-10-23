const mongoose= require('mongoose')


const detailSchema = new mongoose.Schema({
    Category:{
        required:true,
        type:String
    },
    Description:{
        required:true,
        type:String
    },
    Amount:{
        required:true,
        type:String
    },
    Date:{
        required:true,
        type:String
    },
    Subcategory:{
        required:true,
        type:String
    }

})

const details = mongoose.model("details",detailSchema)
module.exports = details