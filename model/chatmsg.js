var mongoose = require('mongoose');
// schema creation

var chatSchema = mongoose.Schema({
               name :{
               	  type: String,
               	  required: true
               },
               message: {
               	  type: String,
               	  required: true
               },
               create_date: {
               	  type: Date,
               	  default: Date.now
               }
});
//compile our schema in to model
var messages = module.exports =  mongoose.model('messages', chatSchema);

// get chat message
module.exports =  {
     getChatMesage : function(callback,limit) {
        messages.find(callback).limit(limit);
    }	
}

