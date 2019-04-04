import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class CursosLista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cursos: []
        };

        this.buscarCursos= this.buscarCursos.bind(this);
    }

    componentDidMount() {
        this.buscarCursos();
    }

    async buscarCursos() {
        const response = await fetch('/api/cursos');

        response.json().then(cursos => {
            this.setState({
                cursos: cursos
            });
        });
    }

    render() {

        const cursos = this.state.cursos;

        return (
            <div>
                <Link to="/cursos/create/" className="btn btn-primary">Cadastrar</Link>

                <table className={'table table-bordered mt-3'}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.length > 0 ?
                            cursos.map((curso) => {
                                return (
                                    <tr key={curso._id}>
                                        <td>{curso.titulo}</td>
                                        <td>{curso.descricao}</td>
                                        <td>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            (<tr className="text-center"><td colSpan="3">Nenhum registro cadastrado</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CursosLista;
