const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.send('Nodezão brabo');
})

app.listen(3333)