// Installation
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// Server configuration
app.listen(3000, ()=> console.log('Online'));
app.use(methodOverride('_method'));

// Static resources
app.use(express.static(path.resolve(__dirname, '../public')));

// ejs configuration (template engine)
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

// routers
const mainRouter = require('./routes/mainRoutes');
const groupRouter = require('./routes/groupRoutes');
const UserRouter = require('./routes/UserRoutes');

// routes
app.use('/', mainRouter);
app.use('/group', groupRouter);
// test
app.use('/user', UserRouter)

// error message
app.use((req, res, next)=>{
    res.status(404).render('error404');
});