const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const { title, owner} = request.query;

    console.log(title)
    
    return response.json([
        'Luan',
        'Mateus Vital'
    ]);
});

// Métodos POST, PUT/Path e Delete não são acessiveis via browser

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body)

    return response.json([
        'Otero',
        'Jô'
    ]);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params)
    return response.json([
        'Araos',
        'Cantillo'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Araos',
        'Cantillo'
    ]);
});

app.listen(3333 , () => {
    console.log('Back-end started');
});