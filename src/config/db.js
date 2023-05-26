const mongoose = require('mongoose');
const { mongodbUrl } = require('../secret');
const connectDB = async (options={}) => {
    try {
        await mongoose.connect(mongodbUrl, options);
        console.log('Connection to db connected successfully');
        mongoose.connection.on('error', () => {
            console.log('DB Connection error: ', error);
        })
    } catch (error) {
        console.log('Could not to DB : ', error.toString());
    };
};
module.exports = connectDB;