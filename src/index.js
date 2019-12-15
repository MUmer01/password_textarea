import React, { Component } from 'react'
import PropTypes from 'prop-types'

const separator = '×';
export default class passwordArea extends Component {
  state = {
    value: "",
    start: "",
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value.replace(/[\n]{1}/g, separator).replace(/[\r]{1}/g, ''),
      start: this.generateAsterik(nextProps.value.replace(/[\n]{1}/g, separator).replace(/[\r]{1}/g, ''))
    });
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
      id,
    } = this.props
    const {
      start
    } = this.state

    return (
      <textarea
        id={id}
      >{start}</textarea>
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
