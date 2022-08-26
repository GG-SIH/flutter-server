const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// app.use(express.static('/public'));
const path = require('path')
let cors = require('cors')
app.use(cors())

console.log(__dirname);
console.log(path.join(__dirname,"/public"));
const staticPath = path.join(__dirname,"/public")

app.use(express.static(staticPath))

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.use(express.json())
var requestAmbulance = false;
var userConfirmation = false;


app.get('/requestAmbulance',(req,res)=>{
    res.send(requestAmbulance);
})

app.post('/confirmAmbulance',(req,res)=>{
    requestAmbulance = true;
    res.send(requestAmbulance);
})

app.post('/confirmUser',(req,res)=>{
    userConfirmation = true;
    res.send(userConfirmation);
})

app.get('/userConfirmation',(req,res)=>{
    res.send(userConfirmation);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})