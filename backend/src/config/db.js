const mongoose = require('mongoose');
require('dotenv').config();   

const url = process.env.MONGODB_URI || 'mongodb+srv://ride_user:rideUser123User@cluster0.s2vjsrm.mongodb.net/e-commerce?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;   