import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

/**
 * O react router dom, para fazer as rotas rec  ebe tbm um JSX, veja que precisamos do
 * switch envelopando essas duas rotas, isso acontece, pois o react-router-dom olha se
 * o url que o usuário digitou, contem uma dessas rotas e monta os componentes em 
 * sequência.
 * Colocamos o switch para que ele selecione uma dessas rotas e usamos o parametro 
 * exact para que não caia sempre na rota raiz nesse switch.
 */
function Routes(){
    return (
        <Switch>
            <Route path = '/' exact component = {Feed} />
            <Route path = '/new' component = {New} />
        </Switch>
    );
}

export default Routes