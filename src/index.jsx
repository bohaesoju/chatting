import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from "./reducers";

import App from './app/App.jsx';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
import './styles/normalize.scss';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>hello</div>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);