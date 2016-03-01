import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// TODO: Figure out how to include UI Pack in consistent ES6 manner
require('velocity-animate');
require('velocity-animate/velocity.ui');

export default class SlideAchievement extends Component {
  componentDidMount() {
    this.animateIn();
  }
  componentDidUpdate(prevProps, prevState) {
    this.animateIn();
  }
  componentWillUpdate(nextProps, nextState) {
    const { shine, title, type } = this.refs;
    // TODO: See if cleaner stop call is possible
    Velocity(shine, 'stop');
    Velocity(title, 'stop');
    Velocity(type, 'stop');
  }
  animateIn() {
    const { shine, title, type } = this.refs;
    const sequence = [{
      e: type, p: { backgroundColor: this.props.color, translateY: 75 }, o: { duration: 0, easing: 'ease', sequenceQueue: false }
    },{
      e: type, p: { opacity: [1, 1], scale: [1.5, 0] }, o: { duration: 400, easing: 'ease' }
    },{
      // offsetWidth works but getBoundingClientRect returns 0 on componentDidMount
      e: shine, p: { translateX: [this.refs.type.offsetWidth + 40, 0] }, o: { duration: 550, easing: 'ease' }
    },{
      e: type, p: { scale: 1 }, o: { delay: 100, duration: 500, easing: 'ease', sequenceQueue: false }
    },{
      e: type, p: { translateY: 0 }, o: { duration: 500, easing: 'ease' }
    },{
      e: title, p: { opacity: 1, scale: [1, 0.9] }, o: { delay: 500, duration: 500, easing: 'ease', sequenceQueue: false }
    }];
    // Clear all previous animation styling (from previous achievement)
    shine.style = '';
    title.style = '';
    type.style = '';
    Velocity.RunSequence(sequence);
  }
  render() {
    const { type, value, color } = this.props;
    return (
      <div className="achievement">
        <div className="type" ref="type">
          <span className="label">{type}</span>
          <div className="shine" ref="shine"></div>
        </div>
        <h1 ref="title">{value}</h1>
      </div>
    );
  }
}
