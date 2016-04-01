
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './App';
import doSomething from './actions/actions'
import { testReducer , inputReducer } from './reducers/reducers';
import SmartMessage from './components/components';
import createLogger from 'redux-logger';

let initState = {
	memory : {
		id:1,
		title:"init"
	},
	isFetching : true,
	inputvalue:""
}


const logger = createLogger();

const reducer = combineReducers({
	memory:testReducer,
	inputvalue:inputReducer,
	routing: routerReducer
})

let store = createStore(reducer,
	{},
	window.devToolsExtension ? window.devToolsExtension() : undefined,
	applyMiddleware(thunk , logger)
);

const rootEl = document.getElementById('root');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)



//store.dispatch(doSomething("hahaha"))


render( < Provider store = {store}>
	{ /* Tell the Router to use our enhanced history */ }
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="foo" component={SmartMessage}/>
          <Route path="bar" component={SmartMessage}/>
        </Route>
      </Router>
	</Provider>, rootEl);
