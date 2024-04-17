const express = require('express')

const app = express()
const puerto = 3000

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world Jenkins and Kubernetes')
})

app.listen(puerto, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en el puerto:', 3000);
});
