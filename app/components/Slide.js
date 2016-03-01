import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Velocity from 'velocity-animate';

export default class Slide extends Component {
  render() {
    const { component, data } = this.props.slide;
    return (
      <div className="container">
        {React.createElement(component, data)}
      </div>
    );
  }
}
