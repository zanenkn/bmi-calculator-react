import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';
import DisplayResult from '../Components/displayResult';
import Calculator from '../Components/Calculator'
import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1>BMI Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = mount(<Calculator />);
    const weightInput = <input placeholder='kg'/>;
    const heightInput = <input placeholder='cm'/>;
    expect(component.contains(weightInput)).toEqual(true);
    expect(component.contains(heightInput)).toEqual(true);

  })
})
