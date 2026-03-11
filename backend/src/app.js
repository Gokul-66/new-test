

const cors = require('cors');

const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.get('/', (req, res) => {
    res.send('Hello from app.js!');
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/users', require('./routes/users'));
app.use('/api/orders', require('./routes/order'));


// Export the app instance
module.exports = app;




