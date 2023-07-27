const express = require('express')
const app = express();
const {engine} = require('express-handlebars')
const {loginPage ,dashBoard} =require('./controller/userController')
const path = require('path')

// app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', engine({extname:"hbs",defaultLayout:false}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', loginPage);
app.post('/dashboard',dashBoard)

app.listen(3000,()=>{
    console.log("running on 3000");
});
