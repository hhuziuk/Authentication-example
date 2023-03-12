const mongoose = require('mongoose')
const express = require('express')
const router = require('./router.js')

const app = express()
const port = process.env.PORT || 3001
const db = "mongodb+srv://ebanushka:sukablyat1488@cluster0.plkiuve.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json())
app.use('/', router)

async function appStart(){
    try{
        await mongoose.connect(db);
        app.listen(port, () => {
            console.log(`programm is running ${port}`)
        })
    } catch(e) {
        console.log(e)
    }

}

appStart();
