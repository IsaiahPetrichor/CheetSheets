/*
The action.payload property is used to hold additional data that the reducer might need to carry out a given action. The name payload is simply a convention and its value can be anything!

The spread syntax (...) and array methods such as .map(), .slice(), and .filter() can be used to immutably update the state of a complex app.

Reducer composition is a design pattern for managing a Redux store with multiple slices.

The root reducer delegates actions to slice reducers that are responsible for updating only their assigned slice of the store’s state. The root reducer then reassembles the slices into a new state object.

combineReducers() is a method provided by the redux library that accepts a collection of reducer functions and returns a rootReducer that implements the reducer composition pattern.

In a Redux application, slice reducers are often written in separate files. This pattern is known as Redux Ducks.
*/

// example redux state
const state = {
	prop1: [
		// each property is called a slice
		{
			id: 0,
			name: 'olo',
			done: false,
		},
		{
			id: 1,
			name: 'boop',
			done: true,
		},
	],
	prop2: 'schleem',
};

// each slice gets a reducer, usually in its own file.

// REDUX Toolkit
// npm install @reduxjs/toolkit

// you can import createSlice from the toolkit
import { createSlice } from '@reduxjs/toolkit';
// createSlice takes an Object as a parameter
const options = {
	name: 'favoriteRecipes',
	initialState: [],
	reducers: {
		addRecipe: (state, action) => {
			return [...state, action.payload];
		},
		removeRecipe: (state, action) => {
			return state.filter((recipe) => recipe.id !== action.payload.id);
		},
	},
};

export const favoriteRecipesSlice = createSlice(options);
