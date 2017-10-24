const mongoose = require('mongoose');

const _urlSchema = {
   _id :{type :Number,index :true},
  long_url : {type:String,required: true},
   created_at : {type :Date,default:Date.now()}
};

module.exports = mongoose.Schema(_urlSchema);
