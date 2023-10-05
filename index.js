const express = require('express');
const userRouter = require('./routes/user.router')
const PORT = 8080
const app = express()

app.use(express.json())
app.use('/api', userRouter);
app.listen(PORT, () => console.log('start serve'))