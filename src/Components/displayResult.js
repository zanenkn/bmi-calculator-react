import React, { Component } from 'react';

class DisplayResult extends Component {
  calculate() {
    let weight= this.props.weight;
    let height= this.props.height;
  }

  render() {
    return (
      <div id="response">
      </div>
    )
  }
}

export default DisplayResult

