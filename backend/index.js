import express from 'express'
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import router from './routes/bookRoute.js';
import cors from 'cors'
const app = express();

//option 1: allows all origin with default of Cors(*)
// app.use(cors())

//option 2: Allws custom Origins and only clients with these origins can access the server
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))
//middleware for parsing request body
app.use(express.json())
app.use('/books', router);


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("connected to DB succesfully!")
        app.listen(PORT, (() => {
            console.log(`Server started succesfully at port${PORT}`)
        }))
    })
    .catch((error) => {
        console.log(error)
    })


