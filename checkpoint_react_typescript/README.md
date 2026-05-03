# Checkpoint: Building React Apps with TypeScript

## What Was Done

Converted two React components from JavaScript to TypeScript with detailed comments explaining each step.

## Files

- `Greeting.tsx` — Functional component with typed props
- `Counter.tsx` — Class component with typed props and state

## Steps Taken

### Greeting (Functional Component)
1. Defined a `GreetingProps` interface with `name: string`
2. Added type annotation to the destructured props parameter

### Counter (Class Component)
1. Defined a `CounterState` interface with `count: number`
2. Defined a `CounterProps` interface (empty, for extensibility)
3. Added generic type parameters `<CounterProps, CounterState>` to `Component`
4. Typed the `state` property with `CounterState`
