require('dotenv').config();

const express = require('express')
const passport = require('passport')



const auth = require('./auth/index')

const {notFound , errorHandler} = require('./errorConfig/index')

const app = express()

app.use(express.json())
app.use(passport.initialize())



app.get('/', (req,res,next) =>{
    res.json({
        message:"zhm-forum API"
    })
})



//google auth router
app.use('/auth', auth)

//errro handler
app.use(notFound)
app.use(errorHandler)

//port
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening on port ${PORT}`))
