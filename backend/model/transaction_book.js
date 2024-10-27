const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionId: {
    type: Number, // Assuming transaction IDs are alphanumeric
    required: true,
    unique: true // Ensures each transaction has a unique ID
  },
  bookId: {
    type: Number, 
    required: true,
    ref: 'Book' // Assuming there is a Book model for referencing
  },
  studentCNum: {
    type: String, // Assuming member IDs are alphanumeric or numeric
    required: true,
    ref: 'student' // Assuming there is a Member model for referencing
  },
  issueDate: {
    type: Date,
    required: true,
    default: Date.now // Automatically sets issue date to current date if not provided
  },
  returnDate: {
    type: Date,
    default: null // Optional; could be null if the book has not been returned yet
  },
  status: {
    type: String,
    enum: ['Issued', 'Returned'], // Allows only 'Issued' or 'Returned' values
    required: true,
    default: 'Issued' // Default status is 'Issued'
  }
 },
 {
    timestamps:true
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;