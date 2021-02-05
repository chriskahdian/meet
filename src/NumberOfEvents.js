import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  submitNumber = (event) => {
    const value = event.target.value;
    if (value > 32 || value < 1 || value === '') {
      this.setState({
        infoText: '1 - 32',
        warningText: '',
        numberOfEvents: value,
      });
    } else if (isNaN(value)) {
      this.setState({
        infoText: 'Enter number',
        numberOfEvents: value,
        warningText: '',
      });
    } 
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          className="numberInput"
          value={this.state.numberOfEvents}
          onChange={this.submitNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
