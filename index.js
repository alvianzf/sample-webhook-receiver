const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3001


// middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(cors('*'));

// Routes

app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {

    res.status(404).json({
      success: false, 
      status: 404, 
      path: req.originalUrl, 
      message: `Endpoint not available!`
    });
    
});
  
// error handler
app.use(function(err, req, res, next) {

  console.log(err)
  // render the error response
  res.json({err});   

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});