import React, {Component} from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import AsyncSelect from 'react-select/lib/Async';


export default class MatriculasFormulario extends Component {

    constructor(props) {
        super(props);

        this.state = {
            matricula: {
                aluno_id: '',
                cursos_ids: []
            },
            valueSelectAluno: null,
            valueSelectCursos: null
        };

        this.atualizouCampoAluno = this.atualizouCampoAluno.bind(this);
        this.atualizouCampoCurso = this.atualizouCampoCurso.bind(this);
        this.submit = this.submit.bind(this);
        this.buscarMatricula = this.buscarMatricula.bind(this);
        this.buscarAlunos = this.buscarAlunos.bind(this);
        this.buscarCursos = this.buscarCursos.bind(this);
        this.gerarObjetoDoSelectDeAluno = this.gerarObjetoDoSelectDeAluno.bind(this);
        this.gerarObjetoDoSelectDeCurso = this.gerarObjetoDoSelectDeCurso.bind(this);
    }

    componentDidMount() {
        if(this.props.id) {
            this.buscarMatricula(this.props.id);
        }
    }

    gerarObjetoDoSelectDeAluno(aluno) {
        return {value: aluno._id, label: `${aluno.nome} (${aluno.email})`}
    }

    gerarObjetoDoSelectDeCurso(curso) {
        return {value: curso._id, label: curso.titulo}
    }

    async buscarCursos(inputValue, callback) {
        const response = await axios.get('/api/cursos', {params: {q: inputValue}})
        const cursos = response.data.map(this.gerarObjetoDoSelectDeCurso)
        callback(cursos);
    }

    async buscarAlunos(inputValue, callback) {
        const response = await axios.get('/api/alunos', {params: {q: inputValue}})
        const alunos = response.data.map(this.gerarObjetoDoSelectDeAluno)
        callback(alunos);
    }

    buscarMatricula(id) {
        // preenche a matrícula e o select
        axios.get('/api/matriculas/' + id)
        .then((response) => {
            const matricula = response.data;
            const aluno = matricula.aluno;
            const cursos = matricula.cursos;

            this.setState({
                matricula: {
                    aluno_id: matricula.aluno_id,
                    cursos_ids: matricula.cursos_ids
                },
                valueSelectAluno: this.gerarObjetoDoSelectDeAluno(aluno),
                valueSelectCursos: cursos.map(this.gerarObjetoDoSelectDeCurso)
            });
        });
    }

    atualizouCampoAluno (opcaoSelecionada) {

        this.setState((state, props) => {
            return update(state, {
                matricula: {
                    aluno_id: {$set: opcaoSelecionada.value}
                },
                valueSelectAluno: {$set: opcaoSelecionada}
            });
        });
    }

    atualizouCampoCurso(opcoesSelecionadas) {

        this.setState((state, props) => {
            return update(state, {
                matricula: {
                    cursos_ids: {$set: opcoesSelecionadas.map((opcao) => opcao.value)}
                },
                valueSelectCursos: {$set: opcoesSelecionadas}
            });
        });
    }


    submit(e) {
        e.preventDefault();

        const matricula = this.state.matricula;

        if(!matricula.aluno_id) {
            alert('Selecione um aluno!');
            return;
        }

        if(matricula.cursos_ids.length < 1) {
            alert('Selecione um curso!');
            return;
        }


        if(this.props.id) {
            // atualiza
            axios
            .put('/api/matriculas/' + this.props.id, this.state.matricula)
            .then(() => {
                alert('Matricula atualizada com sucesso!');
                this.props.onMatriculaCadastradaOuAtualizada();
            });

        } else {
            // cadastra
            axios
            .post('/api/matriculas', this.state.matricula)
            .then(() => {
                alert('Matricula cadastrada com sucesso!');
                this.props.onMatriculaCadastradaOuAtualizada();
            });
        }
    }

    render () {
        return (
            <form onSubmit={this.submit}>

                <div className="form-group">
                    <label htmlFor="aluno">Aluno</label>
                    <AsyncSelect
                        inputId="aluno"
                        loadOptions={this.buscarAlunos}
                        value={this.state.valueSelectAluno}
                        onChange={this.atualizouCampoAluno}
                        placeholder="Digite o nome ou o email do aluno"
                        loadingMessage={(inputValue) => { return 'aguarde...' }}
                        noOptionsMessage={(inputValue) => { return 'Nada encontrado' }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="curso">Curso</label>
                    <AsyncSelect
                        inputId="curso"
                        isMulti
                        value={this.state.valueSelectCursos}
                        loadOptions={this.buscarCursos}
                        onChange={this.atualizouCampoCurso}
                        placeholder="Digite o nome do curso"
                        loadingMessage={(inputValue) => { return 'aguarde...' }}
                        noOptionsMessage={(inputValue) => { return 'Nada encontrado' }}
                    />
                </div>

                <div className="text-center">
                    <input type="submit" value={this.props.id ? 'Atualizar' : 'Enviar'} className="btn btn-primary btn-lg" />
                </div>
            </form>
        );
    }
}
