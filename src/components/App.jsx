// Dependencies.
import TitleBar from "./TitleBar.jsx";
import MenuBar from "./MenuBar.jsx";
import TabView from "./TabView.jsx";
import "../styles/app.css";
import React from "react";

// Creating the app root class.
export default class App extends React.Component {
	// Creating component constructor.
	constructor (props) {
		// Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
		this.titlebar = React.createRef ();
		this.menubar = React.createRef ();
		window.SURFACE = (56 * Math.PI);
		window.CURRENCY = "$US";
		window.DELAY = 0.0;
	}

	// Hides the app static titlebar.
	hide_titlebar = () => this.titlebar.current.visibility (false, null, false, 200, 200);

  	// Gives page render from jsx language.
  	render = () => <div className = "money-app">
		<TitleBar ref = {this.titlebar}/>
		<MenuBar ref = {this.menubar} hide_titlebar = {this.hide_titlebar}/>
		<TabView/>
	</div>;
}
