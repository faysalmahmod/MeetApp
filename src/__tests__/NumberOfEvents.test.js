import React, { Component } from 'react';
import { shallow } from 'enzyme';
// COMPONTENTS //////////
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />', () => {

  let NumberOfEventsWrapper, noeInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    noeInput = NumberOfEventsWrapper.find('input.noe-input');
  });

  test('<NumberOfEvents /> and noe-input are both rendered', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });

  test('noe-input is 32 (number type) by default', () => {
    expect(noeInput.prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('noe')).toBe(32);
  })

  test('noe-input is changed, state and value are reflected correctly', () => {
    expect(NumberOfEventsWrapper.state('noe')).toBe(32);
    noeInput.simulate('change', { target: { value: 15 } });
    expect(NumberOfEventsWrapper.state('noe')).toBe(15);
  })
}) 