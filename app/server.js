const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('¡Hola desde Skaffold en Kubernetes!'));
app.listen(port, () => console.log(`App escuchando en http://localhost:${port}`));

