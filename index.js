var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Chat = require('./model/chatmsg');
var Books = require('./model/books');
var Genres = require('./model/genres');
// create db connection..
mongoose.connect('mongodb://localhost/bookstore'); // bookstore is a db name..
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.get('/',function(req, res){
   res.send("Hello from server..");
});

app.get('/api/books',function(req, res){
   Books.getBooks(function(err,books){
         if(err) {
         	throw err;
         }
         res.json(books);      

   },2);
});

app.post('/api/books',function(req, res){
	var book = req.body;
	console.log(book);
   Books.addBooks(book,function(err,book){
         if(err) {
         	throw err;
         }
         res.json(book);      

   });
});

app.get('/api/books/:_id',function(req, res){
   Books.getBookbyId(req.params._id, function(err,book){
         if(err) {
         	throw err;
         }
         res.json(book);      

   });
});

app.get('/api/genres',function(req, res){
   Genres.getGenres(function(err,genres){
         if(err) {
         	throw err;
         }
        res.json(genres);      

   });
});
app.post('/api/genres',function(req, res){
   
   var genre = req.body;
   Genres.addGenres(genre,function(err,genre){
         if(err) {
         	throw err;
         }
        res.json(genre);      

   });
});

app.listen(3000, function(err, succ){
   if(err) {
   	  throw err;
   }
   console.log("running on port 3000");
});
