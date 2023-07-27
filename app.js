const express = require('express')
const app = express();
const {engine} = require('express-handlebars')
const path = require('path')
const userRoutes = require('./routes/user')

// app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', engine({extname:"hbs",defaultLayout:false}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())

app.use(userRoutes);

app.listen(3000,()=>{
    console.log("running on 3000");
});
