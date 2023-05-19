const express= require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const port = 5000;

app.use(morgan('dev'));
app.use(bodyParser.json()); //middleware useing json in froject 
app.use(bodyParser.urlencoded({ extended: true })); //handle from data 

const isLoggedIn = (req, res, next) => {
  const login = true;
  // const login = false;
  login ? (req.body.id = 101, next()) : res.status(401).json({ message: 'Please login first' });

}

app.get('/', (req, res) => {
    res.send('Well Come to Server')
})
app.get('/api/user', isLoggedIn, (req, res) => {
  console.log(req.body.id);
  res.status(200).send({
     message:"user profile is returned"
   })
}) 
// client side error
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
  next();
 })
// server side error
app.use((err, req, res, next) => {
   console.log(err.stack);
   res.status(500).json({message:"Something brocken"})
 })
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })