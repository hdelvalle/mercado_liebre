const express = require('express');
const path = require('path');

const app = express();

// const publicPath = path.resolve(__dirname, './public');
// app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.listen(port, () => console.log(`Server running in port ${port}`));
// app.listen(3030, () => {
//     console.log("Servidor corriendo en puerto 3030")
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ofertas.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});