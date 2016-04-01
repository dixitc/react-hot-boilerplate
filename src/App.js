import React, { Component } from 'react';
import SmartMessage from './components/components';
import AppBar from 'material-ui/lib/app-bar';



export default class App extends Component {
  render() {

    return (
		<div>
		<AppBar
  title="Cherry react"
  iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
      <h1 style={{color:'blue'}} >Cherry react</h1>
	  <SmartMessage />
	  </div>
    );
  }
}
