const express = require('express');
const port = process.env.PORT || 5000;

const cursosRouter = require('./routes/cursos');
const alunosRouter = require('./routes/alunos');
const matriculasRouter = require('./routes/matriculas');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('../client/build'));

app.use('/api/cursos', cursosRouter);
app.use('/api/alunos', alunosRouter);
app.use('/api/matriculas', matriculasRouter);

app.listen(port, () => console.log(`Server iniciado na porta ${port}`));
