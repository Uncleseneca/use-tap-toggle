# use-tap-toggle

> A hook which fixes tap handling on mobile phones

[![NPM](https://img.shields.io/npm/v/use-tap-toggle.svg)](https://www.npmjs.com/package/use-tap-toggle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## The problem

Controls in mobile web browsers sometimes behave inconsistently. This library allows you

- to reliably display a custom style on a tapped element
- taps result in persistent active state if UI blocks (page transition)

Also you can watch [this talk](https://www.youtube.com/watch?v=W6_KxNvRxr4) by awesome Alex Holachek with live demos to have a discriptive explanation

## Live demo with use-tap-toggle

https://codesandbox.io/s/use-tap-toggle-demo-kcobj

## Install

```bash
npm install --save use-tap-toggle
```

## Usage

```jsx
import React from 'react'

import useTapToggle from 'use-tap-toggle'

const App = () => {
  // call this hook in the root app component
  useTapToggle()
  return <div>This is the root of your app</div>
}
```

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const LinkWithFixedTap = (props) => (
  <Link
    {...props}
    className={styles.link}
    // pass data-attribute to a component which should have tap behaviour fixed
    data-tap
  />
)
```

```scss
.link {
  &:active,
  &:hover {
    color: blue;
    text-decoration: none;
  }

  // add css rule for active state
  &[data-tap='active'] {
    background-color: red;
    transition: background-color 0ms 70ms;
  }
}
```

## License

MIT © [Uncleseneca](https://github.com/Uncleseneca)

## Acnowledgements

This library is heavily inspired by [this talk](https://www.youtube.com/watch?v=W6_KxNvRxr4) by awesome Alex Holachek
