// Installation
const express = require('express');
const app = express();
const path = require('path');

// Server configuration
app.listen(3000, ()=> console.log('Online'));

// Static resources
app.use(express.static(path.resolve(__dirname, '../public')));

// ejs configuration (template engine)
app.set('view engine', 'ejs');
app.set('views', './src/views');

// routers
const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// routes
app.use('/', mainRouter);
app.use('/user', userRouter);

// error message
app.use((req, res, next)=>{
    res.status(404).render('error404');
});