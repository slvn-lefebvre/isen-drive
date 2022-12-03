const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const path = require('path');

// middleware setup: PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// middleware setup: STATIC
app.use(express.static(path.join(__dirname, "public")));

// middleware setup: MORGAN
app.use(morgan('tiny'));



// Route setup Index
const indexRouter = require(path.join(__dirname, 'routes', 'index.js'));
app.use("/", indexRouter);

const categorieRouter = require(path.join(__dirname, 'routes', 'categories.js'));
app.use('/categories', categorieRouter);

const productRouter = require(path.join(__dirname, 'routes', 'products.js'));
app.use('/products', productRouter);


// Routes Setup : Error handling
app.use( (err, req, res, next) => {
    res.status(500).send(err.stack);
});

app.use( (req, res, next) => {
    res.status(404).send('Page not found!');
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


