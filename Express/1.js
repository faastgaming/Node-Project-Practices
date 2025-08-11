const express = require('express');
const app = express();

app.use((req, res) => res.end('hello World'))

app.listen(3000 , () => console.log('server is running ...'))

