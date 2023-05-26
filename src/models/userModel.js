const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { defaultImagePath } = require('../secret');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLength: [3, 'The length of user name can be minimum 3 chearacter'],
        maxLength: [31, 'The length of user name can be minimum 31 chearacter'],
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v){
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
           },
           message:'Please enter a valid Email'
        },
    },
     password: {
        type: String,
        required: [true, 'User password is required'],
        minLength: [6, 'The length of user name can be minimum 6 chearacter'],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
        type: String,
        default: defaultImagePath,
    },
    address: {
        type: String,
        required:[true,'User address is required']
    },
    address: {
        type: String,
        required:[true,'User phone number is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default : false
    },
},
    { timestamps: true }
);
const User = model('Users', userSchema);
module.exports = User;