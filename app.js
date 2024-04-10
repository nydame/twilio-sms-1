const express = require('express');
const app = express();
const port = 5050;
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.info(`Keep ${process.env.SUPER_SECRET_KEY} a secret!`);
});
