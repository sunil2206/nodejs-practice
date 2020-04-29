var express=require('express');
var todocontroller=require('./controllers/todoController');

var app=express();
//set up view engine file
app.set('view engine','ejs');

//miidleware to send the static files
app.use(express.static('./public'));

//setting up controllers
todocontroller(app);

//making server listen a port
app.listen(300);

console.log('you are listening to port 300');