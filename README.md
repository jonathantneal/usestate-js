# usestate-js [<img src="https://jonneal.dev/js-logo.svg" alt="" width="90" height="90" align="right">][usestate-js]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[usestate-js] is a 276 byte zero-dependency module that recreates
[React `useState`] in vanilla JavaScript.

You can read about [how I wrote it] or [try it now] on CodePen.

```html
<script src="https://unpkg.com/usestate-js"></script>
<body><script>
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  document.body.innerHTML = `
    <div>
      <p>You clicked ${count} times</p>
      <button>
        Click me
      </button>
    </div>
  `;

  document.body.querySelector('button').onclick = () => setCount(count + 1);
}

connect(Example)();
</script></body>
```

## Usage with Web Components

```html
<script src="https://unpkg.com/usestate-js"></script>
<script>
class CounterExample extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({ mode: 'open' });

    // connect and run render()
    this.render = connect(this.render);
    this.render();
  }

  render () {
    const [count, setCount] = useState(0);

    // update the component innerhtml
    this.shadowRoot.innerHTML = `
      <p>You clicked ${count} times</p>
      <button>Click me</button>
    `;

    // bind the setter to the button
    this.shadowRoot.lastElementChild.onclick = () => setCount(count + 1);
  }
}

customElements.define('counter-example', CounterExample);
</script>
<body>
  <counter-example></counter-example>
  <counter-example></counter-example>
</body>
```

## Usage with Node

Add [usestate-js] to your project:

```bash
npm install usestate-js
```

Import [usestate-js] to `connect` functions with `useState`:

```js
import { connect, useState } from 'usestate-js';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  document.body.innerHTML = `
    <div>
      <p>You clicked ${count} times</p>
      <button>
        Click me
      </button>
    </div>
  `;

  document.body.querySelector('button').onclick = () => setCount(count + 1);
}

connect(Example)();
```

[cli-img]: https://img.shields.io/travis/jonathantneal/usestate-js.svg
[cli-url]: https://travis-ci.org/jonathantneal/usestate-js
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/usestate-js.svg
[npm-url]: https://www.npmjs.com/package/usestate-js

[usestate-js]: https://github.com/jonathantneal/usestate-js

[how I wrote it]: https://codepen.io/jonneal/post/writing-usestate
[React `useState`]: https://reactjs.org/docs/hooks-state.html
[try it now]: https://codepen.io/jonneal/pen/YMBqYV
