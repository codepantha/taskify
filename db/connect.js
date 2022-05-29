const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://codepantha:taskMan123@cluster0.sfht9.mongodb.net/task-manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(err));
