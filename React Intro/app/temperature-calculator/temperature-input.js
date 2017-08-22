// @flow

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  state: {
    temperature: string
  }

  constructor(props: Object) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = ({target}: {target: HTMLInputElement}) => {
    this.setState({temperature: target.value});
  }

  render() {
    const scale = this.props.scale;
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
TemperatureInput.propTypes = {
  scale: PropTypes.string
}

export default TemperatureInput;