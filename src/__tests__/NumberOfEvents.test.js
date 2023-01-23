import React, { Component } from 'react';
import { shallow } from 'enzyme';
// COMPONTENTS //////////
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />', () => {
  
  let NumberOfEventsWrapper, noeInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    noeInput = NumberOfEventsWrapper.find('input.noe-input');
  });

  test('<NumberOfEvents /> and noe-input are both rendered', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });
  
  test('noe-input is 10 (number type) by default', () => {
    expect(NumberOfEventsWrapper.find('input.noe-input').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('noe')).toBe(10);
  })
  
  test('noe-input is changed and the value is reflected correctly', () => {
    expect(NumberOfEventsWrapper.state('noe')).toBe(10);
    NumberOfEventsWrapper.find('input.noe-input')
    .simulate('change', {
      target: { value: 15 }
    });
    expect(NumberOfEventsWrapper.state('noe')).toBe(15);
  })
})