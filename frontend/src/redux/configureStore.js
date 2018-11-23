import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reactotron from 'ReactotronConfig';
import { i18nState } from 'redux-i18n';
import user from 'redux/modules/user';
import photos from 'redux/modules/photos';

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if(env === 'development'){
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    user,
    photos,
    router: connectRouter(history),
    i18nState
});

let store;

if(env === 'development'){
    store = initialState => 
        Reactotron.createStore(
            reducer, 
            composeWithDevTools(applyMiddleware(...middlewares))
        );
}else {
    store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

// let store = initialState =>
//   createStore(
//     connectRouter(history)(reducer),
//     compose(applyMiddleware(...middlewares))
// );

export { history };

export default store();