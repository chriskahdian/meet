// EXAMPLE
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import EventGenre from './EventGenre';
import { getEvents } from './api';
import './nprogress.css';
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

class App extends Component {
  state = {
    events: [],
    currentLocation: 'all',
    locations: [],
    numberOfEvents: 32,
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
        });
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((response) => {
      if (this.mounted) {
        this.setState({
          events: response.events,
          locations: response.locations,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const data = this.getData().sort((a, b) => (a.city > b.city ? 1 : -1));

    return (
      <div className="App">
        <CitySearch
          updateEvents={this.updateEvents}
          locations={this.state.locations}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <div className="data-vis-wrapper">
          {/* <ResponsiveContainer height={400}>
            <EventGenre events={this.state.events} />
          </ResponsiveContainer>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis
                type="number"
                dataKey="number"
                name="Number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer> */}
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;


// MINE
// import React, { Component } from 'react';
// import './App.css';
// import EventList from './EventList';
// import CitySearch from './CitySearch';
// import NumberOfEvents from './NumberOfEvents';
// import { getEvents } from './api';
// import "./nprogress.css";

// class App extends Component {

// // EXAMPLE
// state = {
//   events: [],
//   currentLocation: 'all',
//   locations: [],
//   numberOfEvents: 32,
// };

// // MINE
//   // state = {
//   //   events: [],
//   //   locations: []
//   // }

// // EXAMPLE
//   updateEvents = (location, eventCount) => {
//     const { currentLocation, numberOfEvents } = this.state;
//     if (location) {
//       getEvents().then((response) => {
//         const locationEvents =
//           location === 'all'
//             ? response.events
//             : response.events.filter(
//               (event) => event.location === location
//             );
//         const events = locationEvents.slice(0, numberOfEvents);
//         return this.setState({
//           events: events,
//           currentLocation: location,
//           locations: response.locations,
//         });
//       });
//     } else {
//       getEvents().then((response) => {
//         const locationEvents =
//           currentLocation === 'all'
//             ? response.events
//             : response.events.filter(
//                 (event) => event.location === currentLocation
//               );
//         const events = locationEvents.slice(0, eventCount);
//         return this.setState({
//           events: events,
//           numberOfEvents: eventCount,
//           locations: response.locations,
//         });
//       });
//     }
//   };

// // MINE (ORIGINAL)
//   // updateEvents = (location) => {
//   //   getEvents().then((response) => {
//   //     const locationEvents = (location === "all")
//   //       ? response.events
//   //       : response.events.filter((event) => event.location === location);
//   //     this.setState({
//   //       events: locationEvents
//   //     });
//   //   });
//   // }



//   componentDidMount() {
//     this.mounted = true;
//     getEvents().then((response) => {
//       if(this.mounted) {
//         this.setState({
//           events: response.events,
//           locations: response.locations
//         });
//       }
//     });
//   }

//   componentWillUnmount(){
//     this.mounted = false;
//   }

//   render() {
//     return (
//       <div className="App">
//         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
//         <NumberOfEvents events={this.state.events} updateEvents={this.updateEvents} />
//         <EventList events={this.state.events} />
//       </div>
//     );
//   }
// }

// export default App;
