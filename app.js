const express = require('express')
const app = express();
const {engine} = require('express-handlebars')
const {loginPage ,dashBoard, loginProcess} =require('./controller/userController')
const path = require('path')

// app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', engine({extname:"hbs",defaultLayout:false}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())

app.get('/', loginPage);
app.get('/dashboard',dashBoard)
app.post('/login',loginProcess)

app.listen(3000,()=>{
    console.log("running on 3000");
});
