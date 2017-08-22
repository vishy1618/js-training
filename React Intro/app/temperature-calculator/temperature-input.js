// @flow

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  handleChange = ({target}: {target: HTMLInputElement}) => {
    this.props.onTemperatureChange(target.value);
  }

  render() {
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input onChange={this.handleChange} />
      </fieldset>
    );
  }
}
TemperatureInput.propTypes = {
  scale: PropTypes.string
}

export default TemperatureInput;