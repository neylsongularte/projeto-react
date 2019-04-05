import React from 'react'
import { Link } from 'react-router-dom'
import MatriculasVisualizar from '../../components/Matriculas/Visualizar/Visualizar'


function ScreenMatriculasLista(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/matriculas" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1>Visualizar matrícula</h1>
                    <hr/>

                    <MatriculasVisualizar id={props.match.params.id} />
                </div>
            </div>
        </div>
    );
}

export default ScreenMatriculasLista;
