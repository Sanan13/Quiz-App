require('dotenv').config();
const express = require('express');
var cors = require('cors')
const app = express();
const connectDB = require('./db/connect')
app.use(express.json());
app.use(cors())

const authRouter = require('./routes/auth')
const authenticationMiddleware = require('./middleware/authentication')
app.use('/auth', authRouter)
app.get('/',(req,res)=>{
    res.send("Helllo")
})

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
