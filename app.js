const express = require("express")
const mongoose = require("mongoose")
const app =  express()
const cookieParser =  require("cookie-parser")
const User = require("./user")
const session = require("express-session")

app.set("view engine", "ejs")
app.use(cookieParser())

var cookies = []

mongoose.connect("mongodb+srv://wheatstore:SkyWalker1025@test.tpprf3j.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log("CONNECTED TO DATABASE")
})

app.get("/", (req, res)=>{
    if (req.cookie.sessionId in cookies){
        res.redirect("/")
    }
    else{
        res.redirect("/login")
    }


})

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/login.html")
})
app.post("/login", (req, res)=>{

})

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/register.html")
    
}) 

app.post("/register", async (req, res)=>{
    check = await User.find({username: req.body.name})
    
    if (length(check) > 0){
        res.redirect("/register")
    }

    else{
        sessionId = crypto.randomUUID()
        const user = new User({username: req.body.name, password: req.body.password, date: current.toLocaleDateString()})
        await user.save.then((
            console.log("User saved succesfully")
        ))
        
        //add session id to the list of cookies
        cookies.push(sessionId)
        //the session of the username is in the username that the user has signed up with
        req.session.username = req.body.name
        res 
            .cookie("sessionId", sessionId, {
                secure: true,
                httpOnly: true,
                sameSite: "none"
            })

        

    }
    





})

app.listen(3000, ()=>{
    console.log("[SERVER IS UP] port 3000...")
})