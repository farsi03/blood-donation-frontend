const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require("./connection")
const doModel=require("./models/donor")
const reqModel=require("./models/request")
const signModel=require("./models/signup")
const cors=require("cors")
const bycrypt=require("bcrypt")

app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello world")})

app.post("/sign",async(req,res)=>{
    try{
        const{name,email,phoneno,password,confirmPassword} = req.body
        if(!name || !email || !phoneno || !password || !confirmPassword){
            return res.status(400).send({status:"error",message:"All fields are required"})
        }
        if(password!==confirmPassword){
            return res.send({status:"error",message:"Passwords don't match"})
        }
        const existingUser=await signModel.findOne({email})
        if(existingUser){
            return res.send({status:"error",message:"Email already in use"})
        }
        const hashedPassword=await bycrypt.hash(password,10)
        const newUser=new signModel({
            name,
            email,
            phoneno,
            password:hashedPassword
        })
        await newUser.save()
        return res.status(201).send({status:"success",message:"User registered successfully"})
    }
    catch(err){
        console.error(err)
        res.status(500).send({status:"error",message:"server error"})
    }
})
    app.post("/login",async(req,res)=>{
        try{
        const{email,password}=req.body
        if(!email || !password){
            return res.send({status:"error",message:"All fields are required"}) 
        }
            const user=await signModel.findOne({email})
            if(!user){
                return res.send({status:"error",message:"User not found"})
            }
            const match=await bycrypt.compare(password,user.password)
            if(match){
                return res.send({status:"success",role:user.role})
            }   
            else{
                return res.send({status:"error",message:"Invalid credentials"})
            }
        }       
        catch(err){
            console.log(err)
            res.send("Internal server error")
        }
    })

    app.post("/addrequest",async(req,res)=>{
        try{
            await new reqModel(req.body).save()
            res.send({status:"success",message:"request submitted successfully"})
        }
        catch(err){
            console.log(err)
            return res.status(500).send({status:"error",message:"server error"})
        }
    })
    app.post("/adddonor",async(req,res)=>{
        try{
            await new doModel(req.body).save()      
            res.status(201).send({status:"success",message:"donor added successfully"})
        }
        catch(err){
            console.log(err)
        }
    })

    app.get("/getdonors",async(req,res)=>{
        try{
            const donor=await doModel.find()
            res.send(donor)
        }
        catch(err){
            console.log(err)
        }   
    })

    app.get("/getrequests",async(req,res)=>{
        try{
            const requests=await reqModel.find()    
            res.json(requests)
        }
        catch(err){
            console.log(err)
        }
    })

    app.put("/updatedonor/:id",async(req,res)=>{
        try{
            await doModel.findByIdAndUpdate(req.params.id,req.body)
            res.send("donor data updated")
        }
        catch(err){
            console.log(err)
        }
    })
    app.delete("/deletedonor/:id",async(req,res)=>{
        try{
            await doModel.findByIdAndDelete(req.params.id)
            res.send("donor data deleted")
        }
        catch(err){
            console.log(err)
        }
    })

        app.get("/approvereq/:id",async(req,res)=>{
        try{
            const request=await reqModel.findByIdAndUpdate(req.params.id,{status:"approved"})
            res.send("request approved")
        }
        catch(err){
            console.log(err)
        }})

        app.get("/rejectreq/:id",async(req,res)=>{
            try{
                const request=await reqModel.findByIdAndUpdate(req.params.id,{status:"rejected"})
                res.send("request rejected")
            }
            catch(err){
                console.log(err)
            }
        })
app.listen(3000,()=>{
    console.log("Server is running")})