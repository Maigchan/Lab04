const express = require('express');
const app = express();
const port = 5000
app.set('view engine', 'ejs');

app.get('/clientes', (req, res) => {
    const clientes = [
    { id: 1, nombre: 'Gian' },
    { id: 2, nombre: 'Brunela' },
    { id: 3, nombre: 'Henry' }
    ];
    res.render('clientes', { clientes });
});

app.get('/productos', (req, res) => {
    const productos = [
    { id: 1, nombre: 'Fresa' },
    { id: 2, nombre: 'Sandía' },
    { id: 3, nombre: 'Manzana' }
    ];
    res.render('productos', { productos });
});

app.listen(port)
console.log(`Server on port ${port}`)
