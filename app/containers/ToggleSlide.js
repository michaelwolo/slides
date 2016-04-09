import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { back, next } from '../actions/actions';
import Slide from '../components/Slide';

class ToggleSlide extends Component {
  componentDidMount() {
    // Focus to enable keyboard events on element
    // Keyboard handlers are "scoped" to node to allow child components to override keyboard handlers
    findDOMNode(this).focus();
  }
  toggleSlide = (e) => {
    if (e.keyCode === 37 || e.keyCode === 40) {
      this.props.back();
    } else if (e.keyCode === 39 || e.keyCode === 38) {
      this.props.next();
    }
  }
  render() {
    return (
      <div
        className="keyhandler"
        tabIndex="1"
        onKeyDown={this.toggleSlide}
        onBlur={(e) => e.target.focus()}>
        <Slide slide={this.props.current} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    current: state.slides.get(state.current)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    next: next,
    back: back
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSlide);
