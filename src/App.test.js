// Dependencies.
import {render, screen} from "@testing-library/react";
import App from "./components/App.jsx";

// Makes a test.
test ("renders learn react link", () => {
	// Gets application section reference.
	render (<App/>);
	// Expects learn react text.
	expect (screen.getByText (/learn react/i)).toBeInTheDocument ();
});
