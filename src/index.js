import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';


import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';



const createStoreWithMiddleWare= applyMiddleware(ReduxThunk,ReduxLogger)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)} >
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
