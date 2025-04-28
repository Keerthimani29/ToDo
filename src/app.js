const express = require('express');
const todoRouter = require('./routes/todo');
require('./db/mongo'); // Import the MongoDB connection
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/todo', todoRouter);
app.listen(PORT, () => {
  console.log(`Server is running in port:`, PORT);  
})