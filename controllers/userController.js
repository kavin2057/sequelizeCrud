const { User} = require('../models/index');

exports.createUser = async(req,res)=>{
    try{
        const{name , email} = req.body;

        const newUser =  await User.create({name, email})
        res.status(201).json(newUser)

    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

exports.getAllUsers = async(req,res)=>{
    try{
        const users = await User.findAll()
        res.status(200).json(users)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

exports.getUserById = async(req,res)=>{
    try{
        const {id} = req.params
        const user = await User.findByPk(id)
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json(user)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

exports.updateUser = async(req,res)=>{
    try{
        const {id} = req.params
        const {name , email} = req.body

        const user = await User.findByPk(id)

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        await user.update({name, email})

        res.status(200).json(user)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        const {id} = req.params

        const user = await User.findByPk(id)

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        await user.destroy()
        res.status(204).json({message: "User deleted"})

    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}