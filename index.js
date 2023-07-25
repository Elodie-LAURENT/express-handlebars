const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

const PORT = 3000;

app.set('view engine', 'hbs');

app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'mirror_index',
}));


//static files (import css file)
app.use(express.static('public'));

app.get('/', (re, res) => {
    // res.send('Hello World!')});
    // res.render('main', {layout: 'index'});
    res.render('main');
}); 

app.listen(PORT, ()=> console.log(`App is listening to port ${PORT}`));