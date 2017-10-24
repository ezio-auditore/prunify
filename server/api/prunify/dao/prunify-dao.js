
let mongoose = require('mongoose');
let Promise = require('bluebird');
const urlSchema = require('../model/prunify-url.model');
const counterSchema = require('../model/prunify-counter.model');
const _ = require('lodash');
urlSchema.pre('save',function(next){
  var doc = this;
  counter.findByIdAndUpdate({_id : 'url_count'},{$inc: {seq :1}},function(error,counter){
    if(error)
      return next(error);
    doc._id = counter.seq;
    doc.created_at = new Date();
    next();
  })
});

urlSchema.statics.saveUrl = (urlObject) => {

  return new Promise((resolve , reject ) => {
    if(!_.isObject(urlObject)){
      return reject(new TypeError("Url Object is not valid"));
    }

    console.log(urlObject)
    let _url = new Url(urlObject);
    _url.save((err,saved) => {
      err?reject(err)
        :resolve(saved);
    });
  });
}

var Url = mongoose.model('Url',urlSchema);
var counter =  mongoose.model('Counter',counterSchema);
module.exports = Url;
