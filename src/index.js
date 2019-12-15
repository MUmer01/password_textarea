import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text,
      color,
    } = this.props

    return (
      <div style={{ color }}>
        Example Component: {text}
      </div>
    )
  }
}
