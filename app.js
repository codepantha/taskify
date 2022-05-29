require('./db/connect');
const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);
app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.listen(5000, () => console.log('app running on port 5000'));