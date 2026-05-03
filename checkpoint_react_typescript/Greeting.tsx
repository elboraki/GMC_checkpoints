import React from 'react';

/*
 * Step 1: Define a TypeScript interface for the component's props
 * - This allows us to type-check the `name` prop and catch errors at compile time
 */
interface GreetingProps {
  name: string;
}

/*
 * Step 2: Convert the functional component to TypeScript
 * - Add the type annotation `GreetingProps` to the destructured props
 * - This ensures `name` is always a string when the component is used
 */
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
