import React, { Component } from 'react'
import DisplayResult from './Components/displayResult';
import { Grid, Form } from 'semantic-ui-react'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      method: "metric"
    };
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>

          <h1>BMI Calculator</h1>
          <button onClick={() => this.setState({ method: "metric" })}>metric</button>
          <button onClick={() => this.setState({ method: "imperial" })}>imperial</button>

          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Weight'
                placeholder={this.state.method === 'metric' ? 'kilos' : 'lbs'}
                name='weight'
                value={this.state.weight} 
                onChange={ (e) => this.setState({ weight: e.target.value}) }
              />

              <Form.Input
                fluid
                label='Height'
                placeholder={this.state.method === 'metric' ? 'cm' : 'inches'}
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

        </Grid.Column>
      </Grid>
    )
  }
}

export default App
