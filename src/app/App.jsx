import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { Header, NotFound } from '../components';
import { ListPage, ViewPage } from '../pages';

const App = () => {
    return (
        <div className="wrap">
            <Header />
            <Switch>
                <Route exact path='/' component={ ListPage } />
                <Route exact path='/viewpage' component={ ViewPage } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    );
};

export default App;
