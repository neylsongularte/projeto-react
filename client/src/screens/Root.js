import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../assets/logo.svg';
import ScreenCursosLista from './Cursos/Lista';
import ScreenCursosFormulario from './Cursos/Formulario';
import ScreenCursosVisualizar from './Cursos/Visualizar';


function Index() {
  return <h2 className="text-center mt-5">Bem Vindo Sr. Jubilut!</h2>;
}

function AppRouter() {
  return (
    <Router>
        <div>
            <nav className="text-center">
                <img src={logo} className="logo" alt="" />

                <h3>Painel Administrativo</h3>

                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/" className="btn btn-primary">Início</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/cursos" className="btn btn-primary">Cursos</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cursos/" exact component={ScreenCursosLista} />
                <Route path="/cursos/create" exact component={ScreenCursosFormulario} />
                <Route path="/cursos/:id" component={ScreenCursosVisualizar} />
                <Route path="/cursos/:id/edit" component={ScreenCursosFormulario} />
            </Switch>
        </div>
    </Router>
  );
}

export default AppRouter;
