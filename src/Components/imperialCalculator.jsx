import React, { Component } from 'react';
import DisplayResult from './displayResult';
import { Form } from 'semantic-ui-react'


class ImperialCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'imperial'
    }
  }

  render() {
    return (
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Weight'
                placeholder='lbs' 
                name='weight'
                value={this.state.weight} 
                onChange={ (e) => this.setState({ weight: e.target.value}) }
              />

              <Form.Input
                fluid
                label='Height'
                placeholder='in'
                name='height' 
                value={this.state.height} 
                onChange={ (e) => this.setState({ height: e.target.value}) }
              />
              
            </Form.Group>

            <DisplayResult 
              weight={this.state.weight}
              height={this.state.height}
              method={this.state.method}
            />
          </Form>
    );
  }  
}

export default ImperialCalculator
