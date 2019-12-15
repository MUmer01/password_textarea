import React, { Component } from 'react'
import PropTypes from 'prop-types'

const separator = '×';//Join/Split char -->×<-- (its not normal x its a special char)
const generateAsterik = (value) => {
  let temp = [];
  const splitVal = value.split(separator);
  splitVal.forEach(val => {
    let stars = "";
    for (let i = 0; i < val.length; i++) {
      stars = stars + '*';
    }
    temp.push(stars);
  });
  return temp.join('\n');
}
export default class PasswordArea extends Component {
  state = {
    value: "",
    stars: "",
  }
  componentWillMount() {
    this.updatedValues(this.props.value);
  }
  componentWillReceiveProps(nextProps) {
    this.updatedValues(nextProps.value);
  }
  updatedValues = (value, onCompelete = () => { }) => {
    this.setState({
      value: value.replace(/[\n]{1}/g, separator).replace(/[\r]{1}/g, ''),
      stars: generateAsterik(value.replace(/[\n]{1}/g, separator).replace(/[\r]{1}/g, ''))
    }, onCompelete);
  }
  handleEditPassword = (e, type = 'normal') => {
    let positionS = e.target.selectionStart;
    let positionE = e.target.selectionEnd;
    const unicode = e.keyCode ? e.keyCode : e.charCode;
    let char = '';
    if (type === 'paste') {
      char = e.clipboardData.getData('text/plain');
      char = char.replace(/[\n]{1}/g, separator).replace(/[\r]{1}/g, '');
    } else if (type === 'cut') {
      char = '';
    } else if (type === 'del') {
      char = '';
      if (positionE === positionS) {
        if (unicode == 46) { // Delete Key
          positionE++;
        } else if (unicode == 8) { // Backspace Key
          positionS--;
        }
      }
    } else {
      char = unicode === 13 ? separator : String.fromCharCode(unicode);
    }
    this.updatePasswordText(positionS, positionE, char);
  }
  updatePasswordText = (positionS, positionE, char) => {
    let tempVal = this.state.value;
    console.log({ positionS, positionE })
    console.log({ tempVal })
    tempVal = tempVal.substr(0, positionS) + char + tempVal.substr(positionE)
    console.log({ tempVal })
    let value = tempVal.replace(RegExp(separator, 'g'), '\n');
    console.log({ value })
    this.props.onChange(value);
    this.updatedValues(value, () => {
      this.setCaretPosition(positionS + char.length);
    });
  }
  setCaretPosition = (caretPos) => {
    var elem = document.getElementById(this.props.id);
    setTimeout(() => {
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        }
        else {
          if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
          }
          else
            elem.focus();
        }
      }
    }, 0);
  }
  render() {
    const {
      stars
    } = this.state
    return (
      <textarea
        {...this.props}
        value={stars}
        onKeyPress={(e) => {
          console.log('onKeyPress');
          this.handleEditPassword(e);
        }}
        onKeyDown={(e) => {
          console.log('onKeyDown');
          const unicode = e.keyCode ? e.keyCode : e.charCode;
          if ((unicode == 8 || unicode == 46)) this.handleEditPassword(e, 'del');
        }}
        onPaste={(e) => {
          console.log('onPaste');
          this.handleEditPassword(e, 'paste');
        }}
        onCut={(e) => {
          console.log('onCut');
          this.handleEditPassword(e, 'cut');
        }}
        onChange={() => { }}
      />
    )
  }
}
PasswordArea.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
PasswordArea.defaultProps = {
  value: "",
  id: "passwordTextarea",
};
