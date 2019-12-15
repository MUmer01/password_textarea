# password_textarea

> This package is for creating multiline password filed (Password Textarea).

[![NPM](https://img.shields.io/npm/v/password_textarea.svg)](https://www.npmjs.com/package/password_textarea) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save password_textarea
```

## Usage

```jsx
import React, { Component } from 'react'

import PasswordArea from 'password_textarea'

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
