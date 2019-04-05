import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MatriculasLista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            matriculas: []
        };

        this.buscarMatriculas= this.buscarMatriculas.bind(this);
    }

    componentDidMount() {
        this.buscarMatriculas();
    }

    async buscarMatriculas() {
        axios.get('/api/matriculas')
        .then((response) => {
            this.setState({
                matriculas: response.data
            });
        });
    }

    render() {

        const matriculas = this.state.matriculas;

        return (
            <div>
                <Link to="/matriculas/create/" className="btn btn-primary">Cadastrar</Link>

                <table className={'table table-bordered mt-3'}>
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Aluno</th>
                            <th>Cursos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {matriculas.length > 0 ?
                            matriculas.map((matricula) => {
                                return (
                                    <tr key={matricula._id}>
                                        <td>
                                            <Link to={`/matriculas/${matricula._id}`} className="btn btn-primary btn-sm">Visualizar</Link>
                                        </td>
                                        <td>{matricula.aluno.nome}</td>
                                        <td>
                                            <ul>
                                                {matricula.cursos.map((curso) => {
                                                    return (
                                                        <li key={curso._id}>{curso.titulo}</li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        <td>
                                            <Link to={`/matriculas/${matricula._id}/edit`} className="btn btn-primary btn-sm">Editar</Link>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            (<tr className="text-center"><td colSpan="10">Nenhum registro cadastrado</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MatriculasLista;
