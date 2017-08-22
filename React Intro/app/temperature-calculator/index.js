// @flow

import React from "react";
import ReactDOM from "react-dom";

class TemperatureCalculator extends React.Component {
  state: {
    temperature: string,
  }

  constructor(props: Object) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = ({target}: {target: HTMLInputElement}) => {
    this.setState({temperature: target.value});
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <div>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

function BoilingVerdict({celsius}) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default TemperatureCalculator;