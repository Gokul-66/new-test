const mongoose = require('mongoose');
require('dotenv').config();   

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';
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