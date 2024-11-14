import mongoose from "mongoose";

const BookCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
        required: true
    },
    subcategories: [{
        subcategoryName: {
            type: String,
            required: true,
            enum: ["CS", "IT", "EnTC", "Mech", "Instru"] // Restricting to specific departments
        },
        books: [{
            bookId: {
                type: String, // Alphanumeric book ID
                required: true,
                unique: true
            },
            bookName: {
                type: String,
                required: true
            },
            bookAuthor: {
                type: String,
                required: true
            }
        }]
    }]
}, {
    timestamps: true
});

export default mongoose.model("BookCategory", BookCategorySchema);