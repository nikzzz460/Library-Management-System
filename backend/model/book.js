const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: {
    type: Number, // Changed to Number for numeric book IDs
    required: true,
    unique: true // Ensures each book has a unique ID
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true // Ensures no duplicate ISBNs
  },
  publishedDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity cannot be less than 0'] // Validation to ensure non-negative quantity
  },
  shelfLocation: {
    type: String,
    required: true
  },
  bookRate: {
    type: Number,
    required: true,
    min: [0, 'Amount cannot be less than 0'] 
},
    timestamps:true
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;