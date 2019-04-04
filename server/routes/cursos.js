const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const getMongoDB = require('../db');


// GET Lista
router.get('/', (req, res) => {
    getMongoDB(async (db) => {
        const cursos = await db.collection('cursos').find().toArray();
        res.send(cursos);
    });
});

// GET
router.get('/:id', (req, res) => {

    const id = req.params.id;

    getMongoDB(async (db) => {
        const curso = await db.collection('cursos').findOne({_id: new ObjectID(id)});
        res.send(curso);
    });
});

// POST
router.post('/', (req, res) => {
    getMongoDB(async (db) => {
        await db.collection('cursos').insert(req.body);
        res.status(201).end();
    });
});

// PUT
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const curso = req.body;

    getMongoDB(async (db) => {
        await db.collection('cursos').updateOne({_id: new ObjectID(id)}, {$set: curso});
        res.status(200).end();
    });
});

module.exports = router;
