import { Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id='id' class='class'>
  <div>abcd</div>
  <div></div>
  <div></div>
</MyComponent>, document.body)
