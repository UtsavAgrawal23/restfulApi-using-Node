var mongoose = require('mongoose');
// schema creation

var genreSchema = mongoose.Schema({
               name :{
               	  type: String,
               	  required: true
               },
               create_date: {
                  type: Date,
                  default: Date.now
               }
});
//compile our schema in to model
var genres = module.exports =  mongoose.model('genres', genreSchema);


module.exports =  {
    // get genres
    getGenres : function(callback,limit) {
        genres.find(callback).limit(limit);
    },
    // Add genres
    addGenres : function(genre,callback) {
        genres.create(genre,callback);
    }



}

