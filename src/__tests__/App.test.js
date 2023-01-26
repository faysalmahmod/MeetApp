import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

//this scope uses shallow rendering for quicker unit testing
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })

  test('render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })

  test('render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })

  test('render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
});

// this scope uses full rendering for integration testing
describe('App integration', () => {
  let AppWrapper, AppEventsState, AppLocationsState;
  beforeEach(() => {
    AppWrapper = mount(<App />);
    AppEventsState = AppWrapper.state('events');
    AppLocationsState = AppWrapper.state('locations');
  })

  afterEach(() => {
    AppWrapper.unmount();
  })

  test('App passes "events" state as a prop to EventList ', () => {
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  })

  test('App passes "locations" state as a prop to CitySearch ', () => {
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  })

  test('get list of events matching the city selected by the user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
  });

});