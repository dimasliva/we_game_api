const express = require('express');
const userRouter = require('./routes/user.router')
const itemRouter = require('./routes/item.router')

const PORT = 8080
const app = express()

const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}


app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json())
app.use('/api', userRouter);
app.use('/api', itemRouter);

app.listen(PORT, () => console.log('http://localhost:8080/'))