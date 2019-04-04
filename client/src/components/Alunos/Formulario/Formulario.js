import React, {Component} from 'react';
import axios from 'axios';
import update from 'immutability-helper';


export default class AlunosFormulario extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aluno: {
                nome: '',
                email: '',
                data_de_nascimento: ''
            }
        };

        this.atualizouCampo = this.atualizouCampo.bind(this);
        this.submit = this.submit.bind(this);
        this.buscarAluno = this.buscarAluno.bind(this);
    }

    componentDidMount() {
        if(this.props.id) {
            this.buscarAluno(this.props.id);
        }
    }

    buscarAluno(id) {
        axios.get('/api/alunos/' + id)
        .then((response) => {
            delete response.data._id;

            this.setState({
                aluno: response.data
            });
        });
    }

    atualizouCampo (e) {
        const {name, value} = e.target;

        this.setState((state, props) => {
            return update(state, {
                aluno: {
                    [name]: {$set: value}
                }
            });
        });
    }


    submit(e) {
        e.preventDefault();

        const aluno = this.state.aluno;

        if(!aluno.nome) {
            alert('Preencha o campo "Título"!');
            return;
        }

        if(!aluno.email) {
            alert('Preencha o campo "E-mail"!');
            return;
        }

        if(this.props.id) {
            // atualiza
            axios
            .put('/api/alunos/' + this.props.id, this.state.aluno)
            .then(() => {
                alert('Aluno atualizado com sucesso!');
                this.props.onAlunoCadastradoOuAtualizado();
            });

        } else {
            // cadastra
            axios
            .post('/api/alunos', this.state.aluno)
            .then(() => {
                alert('Aluno cadastrado com sucesso!');
                this.props.onAlunoCadastradoOuAtualizado();
            });
        }
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome *</label>
                    <input
                        id="nome"
                        className="form-control"
                        value={this.state.aluno.nome}
                        onChange={this.atualizouCampo}
                        name="nome" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={this.state.aluno.email}
                        onChange={this.atualizouCampo}
                        name="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="data_de_nascimento">Data de Nascimento</label>
                    <input
                        type="date"
                        pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                        id="data_de_nascimento"
                        className="form-control"
                        value={this.state.aluno.data_de_nascimento}
                        onChange={this.atualizouCampo}
                        name="data_de_nascimento" />
                </div>

                <div className="text-center">
                    <input type="submit" value={this.props.id ? 'Atualizar' : 'Enviar'} className="btn btn-primary btn-lg" />
                </div>
            </form>
        );
    }
}
