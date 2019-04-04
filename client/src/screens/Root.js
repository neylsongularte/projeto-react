import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import ScreenCursosLista from './Cursos/Lista';
import ScreenCursosFormulario from './Cursos/Formulario';


function Index() {
  return <h2 className="text-center mt-5">Bem Vindo Sr. Jubilut!</h2>;
}

function AppRouter() {
  return (
    <Router>
        <div>
            <nav className="text-center">
                <img src={logo} alt="" style={{width: '100px'}}/>
                <h3>Painel Administrativo</h3>

                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/cursos" className="btn btn-primary">Cursos</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/cursos" exact component={ScreenCursosLista} />
            <Route path="/cursos/create" component={ScreenCursosFormulario} />
        </div>
    </Router>
  );
}

export default AppRouter;
