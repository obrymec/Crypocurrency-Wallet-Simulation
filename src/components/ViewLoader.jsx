// Dependencies.
import React, {PureComponent} from "react";
import "../styles/view_loader.css";

// Creating view loader class.
export default class ViewLoader extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {};
    }

    // Makes the component render.
    render = () => <div className = "view-loader"></div>;
}
