import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: []
  }
  
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all") ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({
          events, locations: extractLocations(events)
        });
      }
    });
  }

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((response) => {
  //     if(this.mounted) {
  //       this.setState({
  //         events: response.events,
  //         locations: response.locations
  //       });
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if(this.mounted) {
  //       this.setState({
  //         events: Response.events,
  //         // locations: extractLocations(events)
  //       });
  //     }
  //   });
  // }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
