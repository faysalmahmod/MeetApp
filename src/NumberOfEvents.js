import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { noe: 32 }

  handleInputChanged = (event, props) => {
    let inputValue = event.target.value;
    if (inputValue < 0) inputValue = 0;
    this.props.updateEvents(null, inputValue);
    this.setState({ noe: inputValue });
    console.log(this.props);
  }

  render() {
    const { noe } = this.state;
    return (
      <div className="NumberOfEvents">
        <h3># of Events:</h3>
        <input
          className="noe-input"
          type="number"
          value={noe}
          onChange={event => {
            this.handleInputChanged(event);
          }}
        >
        </input>
      </div>
    )
  }
}

export default NumberOfEvents;