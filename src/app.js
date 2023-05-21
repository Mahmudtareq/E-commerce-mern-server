const express = require('express');
const app = express();
const morgan = require('morgan');
const createError = require('http-errors');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const xssClean = require('xss-clean');
const userRouter = require('./routers/userRouter');

const limiteRate = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests from this IP. Please try again later."
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(xssClean());
app.use(limiteRate);



app.use('/api/users',userRouter);
app.get('/test', (req, res) => {
  res.send('Welcome to the server');
});

app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
