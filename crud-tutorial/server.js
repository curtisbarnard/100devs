import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
app.listen(port, function () {
  console.log(`Node is doing its thang on port ${port}`);
});

app.get('/', (request, response) => {
  // response.send("What's up!");
  response.sendFile(__dirname + '/index.html');
});
