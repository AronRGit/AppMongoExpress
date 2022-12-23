const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const clientesrouter = require('./routers/clientes')

const app = express();
//middleware
app.use(express.json());
app.use('/api',clientesrouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});
//mongoDB connection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('connected to MongoDB Atlas'))
.catch((error)=>console.error(error));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
