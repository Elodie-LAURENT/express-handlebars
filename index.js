const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

const PORT = 3000;

app.set('view engine', 'hbs');

app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'mirror_index',
    partialsDir: __dirname + '/views/partials'
}));


//static files (import css file)
app.use(express.static('public'));

//write an api function
similutedAPI = () => {
    return [
        {
            name: 'Top Gun',
            colors: 'even'},

        {
            name: 'Top Gun II',
            colors: 'odd'},

        {
            name: 'Cinderella',
            colors: 'even'},

        {
            name: 'The Professional',
            colors: 'odd'},

        {
            name: 'Scary Movie II',
            colors: 'even'},
    ]
};


app.get('/', (re, res) => {
    // res.send('Hello World!')});
    res.render('main', {layout: 'index', suggestedMovies: similutedAPI()});
    //res.render('main');
}); 

app.listen(PORT, ()=> console.log(`App is listening to port ${PORT}`));