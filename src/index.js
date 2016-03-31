
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers/reducers.js';



let store = createStore(reducer);
const rootEl = document.getElementById('root');



render( < Provider store = {store}>
	<App /> 
	</Provider>, rootEl);
