import React from 'react';
import { Link } from 'react-router-dom'
import MatriculasFormulario from '../../components/Matriculas/Formulario/Formulario'


function ScreenMatriculasFormulario(props) {

    const id = props.match.params.id;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/matriculas" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1 className="mb-2">{id ? 'Editar' : 'Cadastrar' } Matrícula</h1>

                    <MatriculasFormulario id={id} onMatriculaCadastradaOuAtualizada={() => props.history.push('/matriculas')} />
                </div>
            </div>
        </div>
    )

}

export default ScreenMatriculasFormulario;
