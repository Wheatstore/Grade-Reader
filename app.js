const express = require("express")
const mongoose = require("mongoose")
const app =  express()
const cookieParser =  require("cookie-parser")
const User = require("./user")

app.set("view engine", "ejs")
app.use(cookieParser())

mongoose.connect("mongodb+srv://wheatstore:SkyWalker1025@test.tpprf3j.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log("CONNECTED TO DATABASE")
})

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/login.html")
})

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/register.html")
    
})

app.listen(3000, ()=>{
    console.log("[SERVER IS UP] port 3000...")
})