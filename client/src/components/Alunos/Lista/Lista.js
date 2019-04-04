import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DataFormatada from '../../ui/DataFormatada'

class AlunosLista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alunos: []
        };

        this.buscarAlunos= this.buscarAlunos.bind(this);
    }

    componentDidMount() {
        this.buscarAlunos();
    }

    async buscarAlunos() {
        axios.get('/api/alunos')
        .then((response) => {
            this.setState({
                alunos: response.data
            });
        });
    }

    render() {

        const alunos = this.state.alunos;

        return (
            <div>
                <Link to="/alunos/create/" className="btn btn-primary">Cadastrar</Link>

                <table className={'table table-bordered mt-3'}>
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Data de Nascimento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.length > 0 ?
                            alunos.map((aluno) => {
                                return (
                                    <tr key={aluno._id}>
                                        <td>
                                            <Link to={`/alunos/${aluno._id}`} className="btn btn-primary btn-sm">Visualizar</Link>
                                        </td>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.email}</td>
                                        <td>
                                            {aluno.data_de_nascimento ? <DataFormatada data={aluno.data_de_nascimento} /> : '-'}
                                        </td>
                                        <td>
                                            <Link to={`/alunos/${aluno._id}/edit`} className="btn btn-primary btn-sm">Editar</Link>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            (<tr className="text-center"><td colSpan="5">Nenhum registro cadastrado</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AlunosLista;
