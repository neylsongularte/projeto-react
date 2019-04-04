import React, {Component} from 'react'
import axios from 'axios'
import DataFormatada from '../../ui/DataFormatada'


export default class AlunosVisualizar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            aluno: null
        };

        this.buscarAluno = this.buscarAluno.bind(this);
    }

    componentDidMount () {
        this.buscarAluno(this.props.id);
    }

    buscarAluno (id) {
        axios.get('/api/alunos/' + id)
        .then((response) => {
            this.setState({
                aluno: response.data
            });
        });
    }

    render() {
        const aluno = this.state.aluno;

        if(aluno) {
            return (
                <div>
                    <dl>
                        <dt>Nome:</dt>
                        <dd>{aluno.nome}</dd>

                        <dt>E-mail:</dt>
                        <dd>{aluno.email}</dd>

                        <dt>Data de Nascimento:</dt>
                        <dd>
                            {aluno.data_de_nascimento ? <DataFormatada data={aluno.data_de_nascimento} /> : '-'}
                        </dd>
                    </dl>
                </div>
            );
        }

        return null;
    }
}
