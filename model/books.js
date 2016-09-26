var mongoose = require('mongoose');
// schema creation

var bookSchema = mongoose.Schema({
               title :{
               	  type: String,
               	  required: true
               },
               genre: {
               	  type: String,
               	  required: true
               },
               description: {
                  type: String,
                  required: true
               },
               author: {
                  type: String,
                  required: true
               },
               publisher: {
                  type: String,
                  required: true
               },
               pages: {
                  type: String,
                  required: true
               }
});
//compile our schema in to model
var books = module.exports =  mongoose.model('books', bookSchema); // books is a collection name in mongodb

// get books
module.exports =  {
     getBooks : function(callback,limit) {
        books.find(callback).limit(limit);
    },
    getBookbyId: function(id, callback) {
        books.findById(id, callback);
    },

    addBooks : function(book,callback) {
        books.create(book,callback);
    }	
}

