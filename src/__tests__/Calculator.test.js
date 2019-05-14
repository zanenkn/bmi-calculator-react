import React from 'react'
import { mount, shallow } from 'enzyme'
import Calculator from '../Components/Calculator'

describe('<Calculator />', () => {
  it('shows metric as the standard method', () => {
    const component = mount(<Calculator />);
    const weightInput = <input placeholder="kg" name="weight" type="text" value=""></input>;
    const heightInput = <input placeholder="cm" name="height" type="text" value=""></input>;
    expect(component.contains(weightInput)).toEqual(true);
    expect(component.contains(heightInput)).toEqual(true);
  })
  
})
