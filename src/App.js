import React, { Component } from 'react';
import Header from './header'
import Listtodo from './listtodo'
import './App.css';
class App extends Component {
  constructor(props)
  {
      super(props)
      this.state=({
          text:""
      })
  }

 
  render() {
    
    return (
      <div className="App">
      <h2>List To Do</h2>
      <Header/>
      <Listtodo />
      </div>
      
    );
  }
}

export default App;
