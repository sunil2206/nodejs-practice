var bodyParser=require('body-parser');
var data=[{item:'learn coding'},{item:'view news'},{item:'play outdoor games'}];
module.exports=function(app){

var urlEncodedParser=bodyParser.urlencoded({extended:false});


app.get('/todo',function(req,res){
    res.render('todo',{todos:data});
});

app.post('/todo',urlEncodedParser,function(req,res){
    data.push(req.body);
    res.render('todo',{todos:data});
});
app.delete('/todo',function(req,res){
    
});

};