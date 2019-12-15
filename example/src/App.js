import React, { Component } from 'react'

import PasswordArea from 'multiline_password'

export default class App extends Component {
  state = {
    value: `123
234

567`,
  }
  render() {
    console.log({ vvvvv: this.state.value });
    return (
      <div>
        <PasswordArea rows={10} value={this.state.value} onChange={(v) => { this.setState({ value: v }) }} />
      </div>
    )
  }
}
