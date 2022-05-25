import express from 'express';
const app = express();

const port = 8000;
app.listen(port, function () {
  console.log(`Node is doing its thang on port ${port}`);
});
