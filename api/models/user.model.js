const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const userSchema  = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;