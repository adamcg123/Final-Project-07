const express = require('express')
const mongoose  = require('mongoose')
<<<<<<< HEAD:app.js
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./server/config/keys')
=======
const app = express()

const PORT = process.env.PORT || 3001
const {MONGOURI} = require('./config/keys')
>>>>>>> 11366499d1df9ce69db35829a32940bab7c155da:server.js


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/public'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client/public/index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("server is running on port ${PORT}!")
})

