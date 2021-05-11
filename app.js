const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const productsRoutes = require('./routes/api/products.routes');
const filesRoutes = require('./routes/api/files.routes');
const categoriesRoutes = require('./routes/api/categories.routes');
const subcategoriesRoutes = require('./routes/api/subCategory.routes');
const authRoutes = require('./routes/api/auth.routes');

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/files', filesRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/subcategories', subcategoriesRoutes)
app.use('/api/auth', authRoutes)


module.exports = app;