import React, { Component } from 'react'
import MetricCalculator from './Components/metricCalculator'
import { Tab, Grid } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Metric', render: () => <Tab.Pane attached={false}><MetricCalculator/></Tab.Pane> },
  { menuItem: 'Imperial', render: () => <Tab.Pane attached={false}>Imperial Calculator placeholder</Tab.Pane> },
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
