const express = require('express');
const app = express();

const PORT = 3000;

//static files (import css file)
app.use(express.static('public'));

app.get('/', (re, res) => {
    res.send('Hello World!')});

app.listen(PORT, ()=> console.log(`App is listenng to port ${PORT}`));