import React, { Component } from 'react';
import message from './components/components.js';

export default class App extends Component {
  render() {
    return (
		<div>
      <h1 style={{color:'pink'}} >Hello there homie, world 	<p>Howdy , hows it going mate ?</p> </h1>
	  {this.props.children}
	  </div>
    );
  }
}
