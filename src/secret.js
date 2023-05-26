require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/EcommerceMernDb";
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/image/users/userDefault.png"
module.exports = { serverPort, mongodbUrl, defaultImagePath };