import React, { Component } from 'react';

/*
 * Step 1: Define a TypeScript interface for the component's state
 * - This tells TypeScript what shape the state object has
 * - `count` is typed as `number` to prevent invalid state updates
 */
interface CounterState {
  count: number;
}

/*
 * Step 2: Define a TypeScript interface for the component's props
 * - Even if there are no props, it's good practice to define an empty interface
 * - This makes the component more explicit and easier to extend later
 */
interface CounterProps {}

/*
 * Step 3: Convert the class component to TypeScript
 * - Add generic type parameters <CounterProps, CounterState> to the Component class
 * - This gives TypeScript full knowledge of both props and state types
 * - The state initialization and setState calls are now type-checked
 */
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
