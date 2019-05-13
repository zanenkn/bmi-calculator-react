import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }

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

        <DisplayResult 
          weight={this.state.weight}
          height={this.state.height}
        />

      </>
    );
  } 
  
}

export default App;
