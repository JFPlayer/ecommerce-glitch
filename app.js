const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const productsRoutes = require('./routes/api/products.routes');
const filesRoutes = require('./routes/api/files.routes');
const categoriesRoutes = require('./routes/api/categories.routes');
const subcategoriesRoutes = require('./routes/api/subcategory.routes')
const authRoutes = require('./routes/api/auth.routes');
const adsRoutes = require('./routes/api/ads.routes');
const usersRoutes = require('./routes/api/users.routes');

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/files', filesRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/ads', adsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/subcategories', subcategoriesRoutes)

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

module.exports = app;