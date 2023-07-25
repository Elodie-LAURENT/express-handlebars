const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

const PORT = 3000;

app.set('view engine', 'handlebars');

app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
}));


//static files (import css file)
app.use(express.static('public'));

app.get('/', (re, res) => {
    // res.send('Hello World!')});
   res.render('main', {layout: 'index'})
}); 

app.listen(PORT, ()=> console.log(`App is listening to port ${PORT}`));