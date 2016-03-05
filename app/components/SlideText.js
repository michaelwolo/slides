import React, { Component } from 'react';

export default class SlideText extends Component {
  render() {
    const { text, subtext } = this.props;
    return (
      <div className="text">
        <h1>{text}</h1>
        <h2>{subtext}</h2>
      </div>
    );
  }
}
