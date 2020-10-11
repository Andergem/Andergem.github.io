import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/Notfound';
function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/Badges" component={Badges}></Route>
                <Route exact path="/Badges/new" component={BadgeNew}></Route>
                <Route component={NotFound} />
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App;