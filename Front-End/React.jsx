/* 
--- Creating a React local server ---
 npx create-react-app <directory>

--- Starting React server ---
npm start
*/

// Basic import syntax
import React from "react";
import ReactDOM from "react-dom";

// How to create a basic React component, Old React
/* class MyComponentClass extends React.Component {
	render() {
		return <h1>Hello world</h1>;
	}
} */

// Basic component, new React
function MyComponentClass() {
	return <h1>Hello world</h1>;
}

// rendering in React
// the two properties are: a JSX element and the html element to render it to.
ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

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

// SEE REACT FOLDER IN REACTCHEATSHEETS!!!
