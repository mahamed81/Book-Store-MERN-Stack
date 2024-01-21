import express from 'express'
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
//import router from './routes/bookRoute.js'
import { Book } from './models/bookModel.js';
const app = express();
//middleware for parsing request body
app.use(express.json())
const router = express.Router()


app.get('/', (req, res)=>{
   
    try {
        console.log("my name is Mahamed")
        return res.status(123).send("Welcome to MERN Stack Project!")
    } catch (error) {
        return res.status(400).send("Not working")
    }
})

//app.get('/books', router )

app.get('/books', async (req, res) => {
    console.log("Are you there?")
    try {
        const books = await Book.find({});
        console.log(books)
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        res.status(400).send({ message: error.message })

    }

})
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


