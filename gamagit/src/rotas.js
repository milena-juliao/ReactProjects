import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';//Switch é o container que armazena nossas rotas. Route é a rota que vou seguir. BrowserRouter é o container principal do react-router-dom.

import Repositorios from './pages/repositorios';
import Home from './pages/home';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositorios' component={Repositorios}/>
            </Switch>
        </BrowserRouter>
    )
}
//exact garante que quando tiver só a /, o usuário será direcionado para a página home e não para a repositórios que também começa em /.