import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previous, next } from '../actions/actions';

class Slide extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.previous()}>-</button>
        <div>{this.props.slide}</div>
        <button onClick={() => this.props.next()}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    slide: state.slides.get(state.indexes.get('current'))
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    next: next,
    previous: previous
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
