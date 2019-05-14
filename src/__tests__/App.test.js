import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';
import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1>BMI Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });
})
