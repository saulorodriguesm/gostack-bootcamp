const express = require('express');

const app = express();

app.get('/methods', (request, response) => {
    return response.json([
        'Luan',
        'Mateus Vital'
    ]);
})

// Métodos POST, PUT/Path e Delete não são acessiveis via browser

app.post('/methods', (request, response) => {
    return response.json([
        'Otero',
        'Jô'
    ]);
})

app.put('/methods/:id', (request, response) => {
    return response.json([
        'Araos',
        'Cantillo'
    ]);
})

app.delete('/methods/:id', (request, response) => {
    return response.json([
        'Araos',
        'Cantillo'
    ]);
})

app.listen(3333 , () => {
    console.log('Back-end started');
});