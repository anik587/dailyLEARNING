const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3001;

const publicDirectoryPath = path.join(__dirname, '../src/public');
const cssDirectoryPath = path.join(__dirname, '../src/css');
const viewsPath = path.join(__dirname, './template/views');
const partialsPath = path.join(__dirname, './template/partials');



app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

const staticDirectory =  express.static(publicDirectoryPath);
const cssDirectory =  express.static(cssDirectoryPath);

app.use(staticDirectory);
app.use('/css/',cssDirectory);



app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'Anik'
    })
});

app.get('/about', (req, res)=>{


    res.render('about',{
        name: 'About',
        age: 29
    })

});

app.get('/home', (req, res)=>{

    res.render('index',{
        name: 'Home',
        age: 29
    })

});

app.get('*', (req, res)=>{
    res.render('404', {
        name: 'Page Not Found'
    })
});



app.listen(PORT, ()=>{
    console.log('listening on port ' + PORT);
});