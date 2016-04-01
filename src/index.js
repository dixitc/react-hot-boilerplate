
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers/reducers.js';
import doSomething from './actions/actions'


let store = createStore(reducer);
const rootEl = document.getElementById('root');

console.log(store.getState());

//store.dispatch(doSomething("hahaha"))


render( < Provider store = {store}>
	<App />
	</Provider>, rootEl);
