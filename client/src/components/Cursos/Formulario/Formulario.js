import React, {Component} from 'react';
import axios from 'axios';
import update from 'immutability-helper';


export default class CursosFormulario extends Component {

    constructor(props) {
        super(props);

        this.state = {
            curso: {
                titulo: '',
                descricao: ''
            }
        };

        this.atualizouCampo = this.atualizouCampo.bind(this);
        this.submit = this.submit.bind(this);
        this.buscarCurso = this.buscarCurso.bind(this);
    }

    componentDidMount() {
        if(this.props.id) {
            this.buscarCurso(this.props.id);
        }
    }

    buscarCurso(id) {
        axios.get('/api/cursos/' + id)
        .then((response) => {
            delete response.data._id;

            this.setState({
                curso: response.data
            });
        });
    }

    atualizouCampo (e) {
        const {name, value} = e.target;

        this.setState((state, props) => {
            return update(state, {
                curso: {
                    [name]: {$set: value}
                }
            });
        });
    }


    submit(e) {
        e.preventDefault();

        const curso = this.state.curso;

        if(!curso.titulo) {
            alert('Preencha o campo "Título"!');
            return;
        }

        if(this.props.id) {
            // atualiza
            axios
            .put('/api/cursos/' + this.props.id, this.state.curso)
            .then(() => {
                alert('Curso atualizado com sucesso!');
                this.props.onCursoCadastradoOuAtualizado();
            });

        } else {
            // cadastra
            axios
            .post('/api/cursos', this.state.curso)
            .then(() => {
                alert('Curso cadastrado com sucesso!');
                this.props.onCursoCadastradoOuAtualizado();
            });
        }
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título *</label>
                    <input
                        id="titulo"
                        className="form-control"
                        value={this.state.curso.titulo}
                        onChange={this.atualizouCampo}
                        name="titulo" />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        id="descricao"
                        className="form-control"
                        value={this.state.curso.descricao}
                        onChange={this.atualizouCampo}
                        name="descricao" />
                </div>

                <div className="text-center">
                    <input type="submit" value={this.props.id ? 'Atualizar' : 'Enviar'} className="btn btn-primary btn-lg" />
                </div>
            </form>
        );
    }
}
