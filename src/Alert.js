import React, { Component } from 'react';


class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    let text = this.props.text;
    if(!text) return { display: 'none' };
    else      return { color: this.color };
  }

  render() {
    return (
      <div className="Alert" style={this.getStyle()}>
        {this.props.text}
      </div>
    );
  }
}

// children of Alert
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

export { InfoAlert, ErrorAlert };