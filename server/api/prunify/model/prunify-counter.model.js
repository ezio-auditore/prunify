const mongoose = require('mongoose');

const _counterSchema ={
  _id :{type : String , required :true},
  seq : {type : Number , default : 0}
}

module.exports = mongoose.Schema(_counterSchema);
