const express = require("express")
const app = express()

app.get("/doggy", (req, res)=>{
    res.send("DoggyHorse!!!!!!")
})

app.listen(3000)