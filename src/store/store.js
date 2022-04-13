import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/MainReducer';

function ConfigStore(initState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, initState, composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default (ConfigStore);
