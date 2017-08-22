// @flow

import React from "react";
import ReactDOM from "react-dom";

import TemperatureInput from "./temperature-input";

type Scale = 'c' | 'f';

class TemperatureCalculator extends React.Component {
  state: {
    temperature: string,
    scale: Scale
  }

  constructor(props: Object) {
    super(props);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelciusChange = (temperature: string) => {
    this.setState({temperature, scale: 'c'});
  }

  handleFahrenheitChange = (temperature: string) => {
    this.setState({temperature, scale: 'f'});
  }

  render() {
    const {scale, temperature} = this.state;

    return (
      <div>
        <legend>Enter temperature in Celsius:</legend>
        <TemperatureInput scale="c" onTemperatureChange={this.handleCelciusChange} />
        <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} />

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