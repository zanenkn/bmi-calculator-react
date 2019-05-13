import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value}) } />
        </>

        <>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value}) } />
        </>
      </>
    );
  } 
  
}

export default App;
