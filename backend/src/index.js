const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'Json brabo'});
})

app.listen(3333)