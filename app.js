const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectToDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    app.listen(5000, () => console.log('app running on port 5000'));
  }
  catch (err) {
    console.log(err)
  }
}

start();
