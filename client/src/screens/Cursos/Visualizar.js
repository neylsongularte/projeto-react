import React from 'react'
import { Link } from 'react-router-dom'
import CursosVisualizar from '../../components/Cursos/Visualizar/Visualizar'


function ScreenCursosLista(props) {
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <Link to="/cursos" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                <h1>Visualizar curso</h1>
                <hr/>

                <CursosVisualizar id={props.match.params.id} />
            </div>
        </div>
    </div>
}

export default ScreenCursosLista;
