const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  staffId: {
    type: String, // Assuming staff ID can be alphanumeric
    required: true,
    unique: true // Ensures each staff has a unique ID
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] // Email validation
  },
  role: {
    type: String,
    enum: ['Admin', 'Staff'],   // Only allows specific roles
    required: true
  },
  gender: {
    type: String
  },
  photo: {
    type: String,
    default: ""
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] // Ensures it's a 10-digit number
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;