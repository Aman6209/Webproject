const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT ||  1003;
//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../Templates/views");
const Partials_path = path.join(__dirname,"../Templates/Partials")

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(Partials_path);

app.use(express.static(static_path));
app.get("", (req,res)=>{
    res.render("index") 
} ) 
app.get("/About", (req,res)=>{
    res.render('about')
} ) 
app.get("/Weather", (req,res)=>{ 
    res.render('weather')
} )
app.get("/contactUs", (req,res)=>{
    res.send("Phone-6209583627 \n Email-amankumaransh6209@gmail.com")
} )
app.get("*", (req,res)=>{
    res.render('404error',{
        errorMsg:'Opps! Page Not found'
    })
} )
app.listen (port,() =>{
    console.log(`listening to port at ${port}`)
} )