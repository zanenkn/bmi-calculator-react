import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import { Form, Grid } from 'semantic-ui-react'


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
      <Grid centered columns={2}>
        <Grid.Column>
          <h1>BMI Calculator</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Weight'
                placeholder='kg' 
                name='weight'
                value={this.state.weight} 
                onChange={ (e) => this.setState({ weight: e.target.value}) }
              />

              <Form.Input
                fluid
                label='Height'
                placeholder='cm'
                name='height' 
                value={this.state.height} 
                onChange={ (e) => this.setState({ height: e.target.value}) }
              />
            </Form.Group>

            <DisplayResult 
              weight={this.state.weight}
              height={this.state.height}
            />

          </Form>
        </Grid.Column>
      </Grid>
      
    );
  }  
}

export default App;
