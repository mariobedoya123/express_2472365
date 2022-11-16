require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT

app.use(express.static('public'))

//Motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

app.get('/', (req, res) => {
    // res.send('Hola Mundo')
    res.render('registrarPedido', {
        nombre: 'Registrar pedido'
    })
})

app.get('/registrarPedido', (req, res) => {
    res.sendFile(__dirname + '/public/views/registrarPedido.html')
})

app.get('/contacto', (req, res) => {
    res.send('Contacto')
})

// app.get('*', (req, res) => {
//     //res.send('Página no encontrada')
//     res.sendFile(__dirname + '/public/views/404.html');
// })

app.get('*', (req, res) => {
    //res.send('Página no encontrada')
    res.send('404');
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})
