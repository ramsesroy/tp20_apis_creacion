const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const cors = require('cors');

 
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiGenresRoutes = require('./routes/api/genresRoutes');
const apiMoviesRoutes = require('./routes/api/moviesRoutes');
 


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use(methodOverride('_method'));
app.use(function(req, res, next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next();
});
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/api', apiGenresRoutes);
app.use('/api/movies', apiMoviesRoutes);

 
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));