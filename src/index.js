import React, { Component } from 'react'
import PropTypes from 'prop-types'

const separator = '×';
export default class passwordArea extends Component {
  state = {
    value: "",
    start: "",
  }
  generateAsterik = (value) => {
    let temp = [];
    const splitVal = value.split(separator);
    splitVal.forEach(val => {
      let stars = "";
      for (let i = 0; i < val.length; i++) {
        stars = stars + '*';
      }
      temp.push(stars);
    });
    return temp.join(separator);
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
