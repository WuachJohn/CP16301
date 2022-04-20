var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const mongoose = require('mongoose');
require('./components/users/model');
require('./components/categories/model');
require('./components/products/model');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var apiRouter = require('./routes/api');
var categoriesRouter = require('./routes/categories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mykey',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}))


mongoose.connect('mongodb+srv://admin:admin@cluster0.zlrph.mongodb.net/DatabaseSever?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// mongoose.connect('mongodb+srv://admin:123@cluster0.ahl7w.mongodb.net/Spring202216301?retryWrites=true&w=majority', {  
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
.then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
.catch(err => console.log('>>>>>>>>> DB Error: ', err));


app.use('/', indexRouter);
app.use('/san-pham', productsRouter);
app.use('/api', apiRouter);
app.use('/danh-muc', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
