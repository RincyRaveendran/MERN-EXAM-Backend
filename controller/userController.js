const users = require("../Model/userModel");

exports.registerController = async(req,res)=>{
    const {username,email,password}=req.body
    console.log(username,email,password);


    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json('Acccount already exist')
        }
        else{
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json('registered successfully')
        }
    }catch(error){
        res.status(401).json(error)
    }
    

    
    
}