import React from 'react';
import CursosFormulario from '../../components/Cursos/Formulario/Formulario'
import { Link } from 'react-router-dom'


function ScreenCursosFormulario (props) {

    const id = props.match.params.id;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/cursos" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1 className="mb-2">{id ? 'Editar' : 'Cadastrar' } Curso</h1>

                    <CursosFormulario id={id} onCursoCadastradoOuAtualizado={() => props.history.push('/cursos')} />
                </div>
            </div>
        </div>
    )
}


export default ScreenCursosFormulario;
