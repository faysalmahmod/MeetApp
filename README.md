# Treffen App

----------
Faisal Mahmood 2023
Created as part of the Career Foundry Full-Stack Development curriculum


----------
## Nutshell:

Treffen is an app that will show upcoming events by city so a user will never miss out on a concert, or teaching seminar, or lame t-shirt giveaway in a city near them.


## Access
The live app - which you can find at https://faysalmahmod.github.io/MeetApp/ - is currently in "testing" and hasn't been verified by Google, so just get in touch if you'd like access and I can add you as a tester. It uses Google OAuth2 for authentication, so you do need a Google account.

As a progressive web app, it can be installed natively on any device.

## Run locally
This app was created with Create React App.

To run this app, install all dependencies - e.g. with npm install - then run the app with npm run start.



----------
## Key Features:

1.) Filter events by city. 
2.)  Show/hide event details. 
3.) Specify number of events. 
4.) Use the app when offline. 
5.) Add an app shortcut to the home screen. 
6.) View a chart showing the number of upcoming events by city. 


----------
# Feature Scenarios:

### FEATURE 1: FILTER EVENTS BY CITY
- `Scenario 1`: When user hasn’t searched for a city, show upcoming events from all cities.
--- Given: the user hasn't searched for any city
--- When: the user opens the app
--- Then: display all events from all cities

- `Scenario 2`: User should see a list of suggestions when they search for a city.
--- Given: the main page is open
--- When: the user starts typing in the city search bar
--- Then: suggestion results populate (from search bar input)

- `Scenario 3`: User can select a city from the suggested list.
--- Given: there are suggestions visible
--- When: the user clicks on a city
--- Then: the selected city's event page opens

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
- `Scenario 1`: An event element is collapsed by default
--- Given: an event element is visible.
--- When: the event element hasn’t been clicked yet
--- Then: the event element is collapsed.

- `Scenario 2`: User can expand an event to see its details
--- Given: an event element is visible.
--- When: the event element is clicked.
--- Then: the event element is expanded.

- `Scenario 3`: User can collapse an event to hide its details.
--- Given: The event element is expanded.
--- When: the user clicks it.
--- Then: the element is collapsed.

### FEATURE 3: SPECIFY NUMBER OF EVENTS
- `Scenario 1`: When user hasn’t specified a number, 32 is the default number
--- Given: “number of events” is visible
--- When: the user hasn’t specified a number
--- Then: the number is 32

- `Scenario 2`: User can change the number of events they want to see
--- Given: “number of events” is visible
--- When: the user specifies a number (integer)
--- Then: the number becomes the user’s input number.

### FEATURE 4: USE THE APP WHEN OFFLINE
- `Scenario 1`: Show cached data when there’s no internet connection
--- Given: there is cached data
--- When: there is no internet connection
--- Then: the cached data still displays

- `Scenario 2`: Show error when user changes the settings (city, time range)
--- Given: The user changes the city or time range
--- When: There are no events that meet those criteria
--- Then: An error message displays “No Results” or similar

### FEATURE 5: DATA VISUALIZATION
- `Scenario 1`: Show a chart with the number of upcoming events in each city
--- Given: A user is viewing a city
--- When: the user clicks on “data visualization” or similar
--- Then: a page with graphs of event information/metrics is displayed


----------
## User Stories:

As a [user],
I should be able to: [show/hide an event’s details]
So that: I can focus on the specific information I want to see without being distracted by information I’m not currently concerned with.

As a [user],
I should be able to: [specify the number of events to view]
So that: I don’t get lost in an ocean of events on one page, OR have to click “next page” every two seconds.

As a [user],
I should be able to: [use the app offline]
So that: I can use the app seamlessly, despite network hiccups.

As a [user],
I should be able to: [visualize all of the data for a particular city]
So that: I can get a bird’s eye view of the events for my city and make plans with my personal calendar in mind.
