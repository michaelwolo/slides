import React, { Component } from 'react';

export default class SlideText extends Component {
  render() {
    const { text } = this.props;
    return (
      <h1 className="text">{text}</h1>
    );
  }
}
