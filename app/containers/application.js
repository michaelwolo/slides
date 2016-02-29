import React from 'react'
import { Provider } from 'react-redux'
import Slide from '../containers/slide'

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <div>
          <Slide />
        </div>
      </Provider>
    )
  }
}
