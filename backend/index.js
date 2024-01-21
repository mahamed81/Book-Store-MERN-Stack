import express from 'express'
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import router from './routes/bookRoute.js';
const app = express();
//const router = express.Router()

//middleware for parsing request body
app.use(express.json())
app.use('/books', router);

// app.get('/', (req, res)=>{

//     return res.status(123).send("Welcome to MERN Stack Project!")

// })
//route for getting all the books
// router.get('/', async (req, res) => {
//     console.log("Are you there?")
//     try {
//         const books = await Book.find({});
//         console.log(books)
//         return res.status(200).json({
//             count: books.length,
//             data: books
//         })
//     } catch (error) {
//         res.status(400).send({ message: error.message })

//     }

// })

// //routes for creating a new book
// app.post('/', async (req, res) => {
//     const { title, author, year } = req.body
//        const old = await  Book.up.findOne({title: req.body.title})
//     try {
//         if (old != null || !req.body.title || !req.body.author || !req.body.year) {
//             return res.status(201).send({ message: "Please send the correct book info" })
//         }
//         const newBook = {
//             title: req.body.title,
//             author: req.body.author,
//             year: req.body.year
//         }
//         Book.create(newBook).
//             then((book) => {
//                 return res.status(200).send(book)

//             })
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message })
//     }

// })

// //route for getting a books
// app.get('/:id', async (req, res) => {

//     try {
//         const books = await Book.findById(req.params.id);
//         return res.status(200).json(books)
//     } catch (error) {
//         res.status(400).send({ message: error.message })

//     }

// })

// //route for Deleting all the books
// app.delete('/', async (req, res) => {
//     try {
//         const books = await Book.deleteMany({})
//         res.status(200).json(books)
//     } catch (error) {
//         res.status(400).send({ message: error.message })
//     }
// })

// //route for Deleting a book
// app.delete('/:id', async (req, res) => {
//     try {
//         const book = await Book.findByIdAndDelete(req.params.id);
//         if(!book){
//             return res.status(404).json({message: 'Book not found!'})
//         }
//         return res.status(200).send({message: 'Sucessfully deleted!'})
//     } catch (error) {
//         res.status(400).send({ message: error.message })

//     }
// })

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


