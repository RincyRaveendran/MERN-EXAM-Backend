const details = require('../Model/detailsModel')

exports.addDetailsController = async(req,res)=>{
    const{Category,Description,Amount,Date,Subcategory}=req.body
    console.log((req.body));

    try{
        const existingDetails = await details.findOne({Description})
        if(existingDetails){
            res.status(406).json('details already exist')
        }
        else{
            const newDetails = new details({
                Category,
                Description,
                Amount,
                Date,
                Subcategory
            })
            await newDetails.save()
            res.status(200).json('details added successfully')
        }
    }catch(error){
        res.status(401).json(error)
    }
}

exports.getAllDetailsController = async(req,res)=>{

    try{

        const searchkey= req.query.search
        console.log(searchkey);

        const query={
            Category:{
                $regex:searchkey, $options:'i'
            }
        }
        
        const allDetails = await details.find(query)
        res.status(200).json(allDetails)
    }catch(error){
        res.status(401).json(error)
    }
}