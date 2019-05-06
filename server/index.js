const express = require('express')

const {notFound , errorHandler} = require('./errorConfig')

const app = express()

app.use(express.json())


app.get('/', (req,res,next) =>{
    res.json({
        message:"zhm-forum API"
    })
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening on port ${PORT}`))