const products = require('./data/products');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

app.post('/api/inquiry', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    res.status(201).json({ status:  'Inquiry submitted successfully' });
});

app.post('/api/cart/checkout', (req, res) => {
    const {items,total} = req.body;
    if(!Array.isArray(items) || typeof total !== 'number'){
        return res.status(400).json({error: 'Invalid request body'});
    }
    res.json({confirmation: `TXN-${Date.now()}`,itemCount: items.length, total,});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)});