import React, { Component } from 'react'
import MetricCalculator from './Components/metricCalculator'
import ImperialCalculator from './Components/imperialCalculator'
import { Tab, Grid } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Metric', render: () => <Tab.Pane attached={false}><MetricCalculator/></Tab.Pane> },
  { menuItem: 'Imperial', render: () => <Tab.Pane attached={false}><ImperialCalculator/></Tab.Pane> },
]

const App = () => (
  <Grid centered columns={2}>
    <Grid.Column>

      <h1>BMI Calculator</h1>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

    </Grid.Column>
  </Grid>
)

export default App
