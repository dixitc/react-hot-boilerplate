import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers/reducers.js'



let store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
