const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send('serever is running on port');
});
app.listen(port => {
  console.log('listening on port', `${port}`);
});
