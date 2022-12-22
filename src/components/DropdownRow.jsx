// Dependencies.
import BasicsTools from "../vendors/basics_tools.js";
import React, {PureComponent} from "react";
import "../styles/dropdown_row.css";
import $ from "jquery";

// Creating the activities class.
export default class DropdownRow extends PureComponent {
    // Hides/Shows the currency crypto row.
    visibility = (visible, animate = false, duration = 200, delay = 0.0) => {
        // Waiting for the user delay.
        window.setTimeout (() => {
            // Contains the row id.
            let row_id = ("div#crypto-row" + this.props.id);
            // Should us make an animation ?
            if (animate) $ (row_id).stop (true, true).animate ({opacity: (visible ? 1 : 0)}, duration);
            // Otherwise.
            else $ (row_id).css ("opacity", (visible ? 1 : 0));
        }, delay);
    }

    // Called when this component is injected into the DOM.
    componentDidMount = () => {
        // Shows the currency crypto row whether it fully loaded.
        this.visibility (true, true, 300, window.DELAY);
        window.DELAY += 150;
    }

    // Makes the component render.
    render = () => <div className = "crypto-row" id = {("crypto-row" + this.props.id)}>
        <div className = "row-icon"><img width = "35px" height = "35px" src = {this.props.icon}/></div>
        <div className = "row-data">
            <div className = "row-name"><label>{this.props.name}</label></div>
            <div className = "row-balance"><label>{BasicsTools.parse_float (this.props.balance, 8)} {this.props.unit}</label></div>
        </div>
    </div>;
}
