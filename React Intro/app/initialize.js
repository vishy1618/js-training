import React from "react";
import ReactDOM from "react-dom";

import HelloMessage from "hello-message";
import TodoApp from "todo-app";
import TemperatureCalculator from "temperature-calculator";

const mountNode = document.getElementById("root");

//ReactDOM.render(<HelloMessage name="John" />, mountNode);
//ReactDOM.render(<TodoApp />, mountNode);
ReactDOM.render(<TemperatureCalculator />, mountNode);