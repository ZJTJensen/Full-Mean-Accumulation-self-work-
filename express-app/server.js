const express = require("express");
const app = express();
const mongoose= require('mongoose');
const path = require('path');
app.use(express.static(__dirname + '/angular-app/dist'));

const PORT = 5000;



const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


app.set('views', path.resolve(__dirname,'./client/views'));
app.set('view engine', 'ejs');
app.use(parser.urlencoded({extended: true}));




require('./server/config/mongoose.js')

var routes_setter= require('./server/config/routes.js');
routes_setter(app);



app.listen(PORT, () =>{
    console.log(`Listing to port:${PORT}`);
});