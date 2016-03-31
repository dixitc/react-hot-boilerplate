import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers/reducers.js';
import doSomething from './actions/actions.js';


let store = createStore(reducer);


console.log(store.getState());

store.dispatch(doSomething("text"));

console.log(store.getState());

ReactDom.render(   <Provider store={store}>   <App/>
	</Provider>, document.getElementById('root'));
