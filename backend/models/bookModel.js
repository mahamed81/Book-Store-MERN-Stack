import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {

        title: {
            type: String,
            require: true,
        },
     
        author: {
            type: String,
            require: true,
        },
        year: {
            type: Number,
            require: true,
        },
       
    },
    {
        timestamps: true,
    }
)
export const Book = mongoose.model('Book', BookSchema)

// const book1 = new Book({
//     title: "Me and My Business",
//     author: "Mahamed Ahmed",
//     pushlishYear: "2024"
// })

// book1.save().then(() => console.log("It is done!"))