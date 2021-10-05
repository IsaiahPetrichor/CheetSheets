/*
The action.payload property is used to hold additional data that the reducer might need to carry out a given action. The name payload is simply a convention and its value can be anything!
The spread syntax (...) and array methods such as .map(), .slice(), and .filter() can be used to immutably update the state of a complex app.
Reducer composition is a design pattern for managing a Redux store with multiple slices.
The root reducer delegates actions to slice reducers that are responsible for updating only their assigned slice of the store’s state. The root reducer then reassembles the slices into a new state object.
combineReducers() is a method provided by the redux library that accepts a collection of reducer functions and returns a rootReducer that implements the reducer composition pattern.
In a Redux application, slice reducers are often written in separate files. This pattern is known as Redux Ducks.
*/
