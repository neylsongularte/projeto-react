import React, {Component} from 'react'
import axios from 'axios'
import DataFormatada from '../../ui/DataFormatada'


export default class MatriculasVisualizar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            matricula: null
        };

        this.buscarMatricula = this.buscarMatricula.bind(this);
    }

    componentDidMount () {
        this.buscarMatricula(this.props.id);
    }

    buscarMatricula (id) {
        axios.get('/api/matriculas/' + id)
        .then((response) => {
            this.setState({
                matricula: response.data
            });
        });
    }

    render() {
        const matricula = this.state.matricula;

        if(matricula) {
            return (
                <div>
                    <dl>
                        <dt>Aluno:</dt>
                        <dd>{matricula.aluno.nome} ({matricula.aluno.email})</dd>

                        <dt>Cursos:</dt>
                        <dd>
                            <ul>
                                {matricula.cursos.map((curso) => {
                                    return <li>{curso.titulo}</li>
                                })}
                            </ul>
                        </dd>
                    </dl>
                </div>
            );
        }

        return null;
    }
}
