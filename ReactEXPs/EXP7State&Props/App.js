import './App.css';
import React from 'react';
import render from '@testing-library/react';
import first from './first';
import { useState } from 'react';
import Newclass from './newclass';

export default class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
        value: 'Test'
    };
}

onChange= e =>{
  this.setState({ value: e.target.value});
}

onSubmit = e => {
  const { value } = this.state;
  e.preventDefault();
  console.log(value);
}
render()
{
  const {value} = this.state;
return(
<div className="App">
<div>This is the value getting from input field.</div>
<form onSubmit={this.onSubmit}>
<input name="Test" onChange={this.onChange} value={value}  /> 
              </form>
</div>
);
}
}
