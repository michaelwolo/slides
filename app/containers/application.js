import React from 'react';
import { Provider } from 'react-redux';
import ToggleSlide from './ToggleSlide';

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <ToggleSlide />
      </Provider>
    )
  }
}
