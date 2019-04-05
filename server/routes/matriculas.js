const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const getMongoDB = require('../db');


async function buscarRelacionamentosDaMatricula(db, matricula) {
    // busca o aluno
    matricula.aluno = await db.collection('alunos').findOne({_id: new ObjectID(matricula.aluno_id)});

    // busca os cursos
    const objectIds = matricula.cursos_ids.map((id) => new ObjectID(id));
    matricula.cursos = await db.collection('cursos').find({_id: {$in: objectIds}}).toArray();
}

// GET Lista
router.get('/', (req, res) => {
    getMongoDB(async (db) => {
        const matriculas = await db.collection('matriculas').find().toArray();

        for (var i = 0; i < matriculas.length; i++) {
            await buscarRelacionamentosDaMatricula(db, matriculas[i]);
        }

        res.send(matriculas);
    });
});

// GET
router.get('/:id', (req, res) => {

    const id = req.params.id;

    getMongoDB(async (db) => {
        const matricula = await db.collection('matriculas').findOne({_id: new ObjectID(id)});
        await buscarRelacionamentosDaMatricula(db, matricula);
        res.send(matricula);
    });
});

// POST
router.post('/', (req, res) => {
    getMongoDB(async (db) => {
        await db.collection('matriculas').insert(req.body);
        res.status(201).end();
    });
});

// PUT
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const matricula = req.body;

    getMongoDB(async (db) => {
        await db.collection('matriculas').updateOne({_id: new ObjectID(id)}, {$set: matricula});
        res.status(200).end();
    });
});


module.exports = router;
