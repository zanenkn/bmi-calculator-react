import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MetricCalculator from './Components/metricCalculator'


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
          
            <MetricCalculator />
          
        </Grid.Column>
      </Grid>
      
    );
  }  
}

export default App;
