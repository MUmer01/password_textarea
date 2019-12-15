# multiline_password

> This package is for creating multiline password filed (Password Textarea).

[![NPM](https://img.shields.io/npm/v/multiline_password.svg)](https://www.npmjs.com/package/multiline_password) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save multiline_password
```

## Usage

```jsx
import React, { Component } from 'react'

import PasswordArea from 'multiline_password'

class Example extends Component {
  state = {
    value: 'test',
  }
  render() {
    return (
      <PasswordArea 
        id={"passwordTextarea"} //Optional
        value={this.state.value} //Optional
        onChange={(v) => { this.setState({ value: v }) }} //Required -> onChange function which return new value.
      />
    )
  }
}

```

## License

MIT © [https://github.com/MUmer01](https://github.com/https://github.com/MUmer01)
