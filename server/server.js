const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

// configurações
const url = 'mongodb://localhost:27017';
const dbName = 'biologiaTotal';
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(express.static('../client/build'));

async function getMongoDB(callback) {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);

    await callback(db);

    client.close();
}

// GET Cursos
app.get('/api/cursos', async (req, res) => {
    getMongoDB(async (db) => {
        cursos = await db.collection('cursos').find().toArray();
        res.send(cursos);
    });
});

// GET Curso
app.get('/api/cursos/:id', async (req, res) => {

    const id = req.params.id;

    getMongoDB(async (db) => {
        curso = await db.collection('cursos').findOne({_id: new ObjectID(id)});
        res.send(curso);
    });
});

// POST Cursos
app.post('/api/cursos', async (req, res) => {
    getMongoDB(async (db) => {
        await db.collection('cursos').insert(req.body);
        res.status(201).end();
    });
});

// PUT Cursos
app.put('/api/cursos/:id', async (req, res) => {
    const id = req.params.id;
    const curso = req.body;

    getMongoDB(async (db) => {
        await db.collection('cursos').updateOne({_id: new ObjectID(id)}, {$set: curso});
        res.status(200).end();
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
