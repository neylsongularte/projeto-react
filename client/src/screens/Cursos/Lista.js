import React from 'react';
import CursosLista from '../../components/Cursos/Lista/Lista'



function ScreenCursosLista(props) {
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <h1>Cursos</h1>
                <CursosLista />
            </div>
        </div>
    </div>
}

export default ScreenCursosLista;
