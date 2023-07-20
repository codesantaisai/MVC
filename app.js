const express = require('express')
const app = express();
const {engine} = require('express-handlebars')
const {loginPage}=require('./controller/userController')

// app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', engine({extname:"hbs",defaultLayout:false}))
app.set('view engine', 'hbs')


app.get('/',(req,res)=>{
    res.render("loginPage")

})

app.listen(3000,()=>{
    console.log("running on 3000");
});
