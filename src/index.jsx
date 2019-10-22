import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from "./reducers";

import App from './app/App';
// import createSagaMiddleWare from 'redux-saga';
// import rootSaga from './sagas';
import './styles/normalize.scss';

// const sagaMiddleWare = createSagaMiddleWare();
//
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
//
// sagaMiddleWare.run(rootSaga);

// const rootElement = document.getElementById('root');

// ReactDOM.render(<App />, document.getElementById("root"));
