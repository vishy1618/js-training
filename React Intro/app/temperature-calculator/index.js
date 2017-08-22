// @flow

import React from "react";
import ReactDOM from "react-dom";

import {tryConvert, toCelsius, toFahrenheit} from "./converter";
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

  handleCelsiusChange = (temperature: string) => {
    this.setState({temperature, scale: 'c'});
  }

  handleFahrenheitChange = (temperature: string) => {
    this.setState({temperature, scale: 'f'});
  }

  render() {
    const {scale, temperature} = this.state;
    let celsius, fahrenheit;

    if (scale === 'f') {
      fahrenheit  = temperature;
      celsius     = tryConvert(temperature, toCelsius);
    } else {
      celsius     = temperature;
      fahrenheit  = tryConvert(temperature, toFahrenheit);
    }

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
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