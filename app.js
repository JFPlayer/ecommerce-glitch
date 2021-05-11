const express = require('express');
const cors = require('cors');
const app = express();

const productsRoutes = require('./routes/api/products.routes');
const filesRoutes = require('./routes/api/files.routes');
const categoriesRoutes = require('./routes/api/categories.routes');
const subcategoriesRoutes = require('./routes/api/subCategory.routes');

app.use(cors())
app.use(express.json())

app.use('/api/products', productsRoutes)
app.use('/api/files', filesRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/subcategories', subcategoriesRoutes)


module.exports = app;