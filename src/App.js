import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <button onClick={this.handleIncrement} style={{ marginRight: 20 }}>Click to increment by 1</button>
        <button onClick={this.handleDecrement}>Click to decrease by 1</button>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

export default App;