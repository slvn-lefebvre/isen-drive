const express = require('express');
const router = express.Router();
const path = require('path');
const Category = require(path.join(__dirname, '..', 'model', 'Category.js'));
const Product = require(path.join(__dirname, '..', 'model', 'Product.js'));

router.get('/new', (req, res) => {
    res.render('categoryForm', { title: "Créer un rayon"});
});


router.get('/', (req, res) => {
    res.render('categories', { title: "Rayons", categories: Category.getAll()});
});

router.get('/:id', (req, res) => {
    let category = Category.getById(req.params.id);
    res.render('category', { title: `Produits du rayon ${category.name}`, products: Product.getByCategory(category._id)});
});

module.exports = router;