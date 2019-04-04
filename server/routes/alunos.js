const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const getMongoDB = require('../db');


// GET Lista
router.get('/', (req, res) => {
    getMongoDB(async (db) => {
        const alunos = await db.collection('alunos').find().toArray();
        res.send(alunos);
    });
});

// GET
router.get('/:id', (req, res) => {

    const id = req.params.id;

    getMongoDB(async (db) => {
        const aluno = await db.collection('alunos').findOne({_id: new ObjectID(id)});
        res.send(aluno);
    });
});

// POST
router.post('/', (req, res) => {
    getMongoDB(async (db) => {
        await db.collection('alunos').insert(req.body);
        res.status(201).end();
    });
});

// PUT
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const aluno = req.body;

    getMongoDB(async (db) => {
        await db.collection('alunos').updateOne({_id: new ObjectID(id)}, {$set: aluno});
        res.status(200).end();
    });
});



module.exports = router;
