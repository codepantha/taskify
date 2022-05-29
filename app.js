const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectToDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);
app.get('/hello', (req, res) => {
  res.send('Hello')
})

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
