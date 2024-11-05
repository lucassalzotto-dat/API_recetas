const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Array en memoria para almacenar las recetas
let recetas = [];
let idCounter = 1;

// Endpoint POST /recetas: Agregar una nueva receta
app.post('/recetas', (req, res) => {
    const { nombre, ingredientes, instrucciones } = req.body;
    
    if (!nombre || !ingredientes || !instrucciones) {
        return res.status(400).json({ message: 'Todos los campos (nombre, ingredientes, instrucciones) son requeridos.' });
    }

    // Crear la nueva receta con un ID único
    const nuevaReceta = {
        id: idCounter++,
        nombre,
        ingredientes,
        instrucciones
    };

    // Agregar la receta al array en memoria
    recetas.push(nuevaReceta);

    res.status(201).json(nuevaReceta);
});

// Endpoint GET /recetas: Obtener todas las recetas
app.get('/recetas', (req, res) => {
    res.json(recetas);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor API de recetas en funcionamiento en http://localhost:${port}`);
});
