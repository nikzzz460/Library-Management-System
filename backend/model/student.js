const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentCNum: {
    type: String,
    required: true,
    unique: true ,  // Ensures each student has a unique ID
    min: 9,
    max: 12
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate email addresses
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] // Email validation
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] // Validates that the phone number is exactly 10 digits
  },
  address: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    require: true,
    min: 6
},
age: {
    type: Number
},
dob: {
    type: String
},
  branch: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: [1, 'Year must be at least 1'],
    max: [4, 'Year must be at most 4'] // Assuming 4 years for a typical degree
  },
  joinDate: {
    type: Date,
    required: true
  },
  activeTransactions: [{
    type: mongoose.Types.ObjectId,
    ref: "BookTransaction"
}],
prevTransactions: [{
    type: mongoose.Types.ObjectId,
    ref: "BookTransaction"
}],
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;