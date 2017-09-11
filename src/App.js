import React, { Component } from 'react';
import style from './App.css';
import CounterApp from './components/CounterApp'

class App extends Component {
  render() {
    return (
      <div className={style.base}>
        <CounterApp />
      </div>
    );
  }
}

export default App;
