const express = require('express');
const router = express.Router();
const path = require('path');
const Category = require(path.join(__dirname, '..', 'model', 'Category.js'));
const Product = require(path.join(__dirname, '..', 'model', 'Product.js'));

router.get('/new', (req, res) => {
    cats = Category.getAll();
    console.log(cats);
    res.render('productForm', { title: "Créer un Produit", categories :  cats  });
});


// router.get('/', (req, res) => {
//     res.render('categories', { title: "Rayons", categories: Category.getAll()});
// });


router.get('/:id', (req, res) => {
    let product = Product.getById(req.params.id);
    let category = Category.getById(product.categoryId)
    res.render('product', { title: product.name, product: product , category: category });
});

module.exports = router;