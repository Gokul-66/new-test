// server.js
const app = require('./app'); // Import the app from app.js
require('dotenv').config();   

const PORT = process.env.PORT || 3000;

// Use the imported app instance
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});   