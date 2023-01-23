import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />)
  });

  test('<Event /> is rendered', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('<Event /> summary (h2) is rendered correctly', () => {
    const summary = EventWrapper.find('h2.summary');
    const summaryString = event.summary;
    expect(summary).toBeDefined();
    expect(summary.text()).toBe(summaryString);
  });

  test('<Event /> start time is rendered correctly', () => {
    const eventStart = EventWrapper.find('p.start');
    const dateString = event.start.dateTime;
    expect(eventStart).toBeDefined();
    expect(eventStart.text()).toBe(dateString);
  });

  test('<Event /> location is rendered correctly', () => {
    const eventLocation = EventWrapper.find('p.location');
    const locationString = event.location;
    expect(eventLocation).toBeDefined();
    expect(eventLocation.text()).toBe(`Location: ${locationString}`);
  });

  test('<Event /> details is initially collapsed, children hidden, details-button text is "show details"', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    expect(EventWrapper.state('collapsed')).toBe(true);
    expect(detailsButton).toBeDefined();
    expect(detailsButton.text()).toBe('show details');
    expect(EventWrapper.find('h3.about')).toHaveLength(0);
    expect(EventWrapper.find('a.link')).toHaveLength(0);
    expect(EventWrapper.find('p.description')).toHaveLength(0);
  });

  test('<Event /> details is expanded (collapsed=false) on click', () => {
    const detailsButton = EventWrapper.find('button.details-button');
    detailsButton.simulate('click');
    expect(EventWrapper.find('h3.about')).toHaveLength(1);
    expect(EventWrapper.find('a.link')).toHaveLength(1);
    expect(EventWrapper.find('p.description')).toHaveLength(1);
    expect(EventWrapper.state('collapsed')).toBe(false);
  })
});