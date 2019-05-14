import React, { Component } from 'react'
import Calculator from './Components/Calculator'
import { Tab, Grid } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Metric', render: () => <Tab.Pane attached={false}>
    <Calculator
      method="metric"
    />
    </Tab.Pane>
  },
  { menuItem: 'Imperial', render: () => <Tab.Pane attached={false}>
    <Calculator
      method="imperial"
    />
    </Tab.Pane>
  },
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
