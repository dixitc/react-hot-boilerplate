
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './App';
import reducer from './reducers/reducers.js';
import doSomething from './actions/actions'

let initState = {
	memory : {
		id:1,
		title:"init"
	},
	inputvalue:""
}

let store = createStore(reducer,{},window.devToolsExtension ? window.devToolsExtension() : undefined);
const rootEl = document.getElementById('root');



//store.dispatch(doSomething("hahaha"))


render( < Provider store = {store}>
	<App />
	</Provider>, rootEl);
