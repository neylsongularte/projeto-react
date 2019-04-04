import React, {Component} from 'react'
import axios from 'axios'


export default class CursosVisualizar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            curso: null
        };

        this.buscarCurso = this.buscarCurso.bind(this);
    }

    componentDidMount () {
        this.buscarCurso(this.props.id);
    }

    buscarCurso (id) {
        axios.get('/api/cursos/' + id)
        .then((response) => {
            this.setState({
                curso: response.data
            });
        });
    }

    render() {
        const curso = this.state.curso;

        if(curso) {
            return (
                <div>
                    <dl>
                        <dt>Titulo:</dt>
                        <dd>{curso.titulo}</dd>

                        <dt>Descrição:</dt>
                        <dd>{curso.descricao}</dd>
                    </dl>
                </div>
            );
        }

        return null;
    }
}
