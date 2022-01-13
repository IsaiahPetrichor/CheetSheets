/* 
--- Creating a React local server ---
 npx create-react-app <directory>

--- Starting React server ---
npm start
*/

{
	// Basic import syntax
	import React from 'react';
	import ReactDOM from 'react-dom';

	// Stateful React Component
	class MyComponentClass extends React.Component {
		constructor(props) {
			this.props = props;
			this.state = {};
		}

		// components can have methods of all sorts
		eatFood() {
			return 'manch cranch';
		}

		render() {
			return <MyComponent eatFood={this.eatFood} />;
		}
	}

	// stateless functional component
	function MyComponent(props) {
		return <h1>I like to {props.eatFood()}</h1>;
	}

	// rendering in React
	// the two properties are: a JSX element and the html element to render it to.
	ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
}

// Props!

/*
Passing a prop by giving an attribute to a component instance
Accessing a passed-in prop via this.props.prop-name
Displaying a prop
Using a prop to make decisions about what to display
Defining an event handler in a component class
Passing an event handler as a prop
Receiving a prop event handler and attaching it to an event listener
Naming event handlers and event handler attributes according to convention
this.props.children
getDefaultProps
*/

{
	/*
	Most web developers, at some point, need to call an API endpoint to retrieve data. 
	If you're working with React, it's important to know where to perform this action.

	The best practice with React is to place API calls or any calls to your server in the 
	lifecycle method componentDidMount(). This method is called after a component is mounted 
	to the DOM. Any calls to setState() here will trigger a re-rendering of your component. 
	When you call an API in this method, and set your state with the data that the API returns, 
	it will automatically trigger an update once you receive the data.

	The componentDidMount() method is also the best place to attach any event listeners you 
	need to add for specific functionality. React provides a synthetic event system which wraps 
	the native event system present in browsers. This means that the synthetic event system 
	behaves exactly the same regardless of the user's browser - even if the native events may 
	behave differently between different browsers.

	You've already been using some of these synthetic event handlers such as onClick(). React's 
	synthetic event system is great to use for most interactions you'll manage on DOM elements. 
	However, if you want to attach an event handler to the document or window objects, you have to 
	do this directly.
	*/
}
