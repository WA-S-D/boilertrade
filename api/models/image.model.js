var mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
var imageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Image = new mongoose.model('Image', imageSchema);
  
module.exports = Image;
