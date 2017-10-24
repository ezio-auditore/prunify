const mongoose = require('mongoose');

const _urlSchema = {
   _id :{type :Number,index :true},
  long_url : {type:String,required: true},
   created_at : Date
};

module.exports = mongoose.Schema(_urlSchema);
