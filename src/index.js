import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class passwordArea extends Component {
  state = {
    value: "",
    start: "",
  }
  render() {
    const {
      value,
      id,
    } = this.props

    return (
      <textarea
      ></textarea>
    )
  }
}
PreviewTestData.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
PreviewTestData.defaultProps = {
  value: "",
  id: "passwordTextarea",
};
