const axios = require('axios');

const API = 'http://localhost:5000';


it('metodo GET listagem de alunos', async () => {
    const response = await axios.get(API + '/api/alunos');

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.status).toBe(200);
});
