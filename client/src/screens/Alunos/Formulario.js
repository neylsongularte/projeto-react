import React from 'react';
import { Link } from 'react-router-dom'
import AlunosFormulario from '../../components/Alunos/Formulario/Formulario'


function ScreenAlunosFormulario(props) {

    const id = props.match.params.id;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/alunos" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1 className="mb-2">{id ? 'Editar' : 'Cadastrar' } Aluno</h1>

                    <AlunosFormulario id={id} onAlunoCadastradoOuAtualizado={() => props.history.push('/alunos')} />
                </div>
            </div>
        </div>
    )

}

export default ScreenAlunosFormulario;
