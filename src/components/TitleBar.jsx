// Dependencies.
import BasicsTools from "../vendors/basics_tools.js";
import React, {PureComponent} from "react";
import "../styles/titlebar.css";

// Creating the title bar class.
export default class TitleBar extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            text: "Portefeuille",
            visible: true
        };
    }

    // Shows/Hides the title bar.
    visibility = (visible, text = undefined, force = false, duration = 200, delay = 0) => {
        // Checks visibility and force value.
        if (visible !== this.state.visible || force) {
            // Animates the titlebar.
            BasicsTools.apply_css_animation ({
                name: "translate", direction: (visible ? "normal" : "reverse"), finish: () => {
                    if (!BasicsTools.is_empty (text)) this.setState ({text: String (text).trim ()});
                }, duration: duration, delay: delay, ref: document.querySelector ("div.titlebar")
            }, {transform: (visible ? "translateY(0)" : "translateY(-140%)")});
            this.setState ({visible: visible});
        }
    }

    // Called when this component is injected into the il est conçu.
    componentDidMount = () => {
        // Shows the title bar with a default title value text.
        this.visibility (this.state.visible, this.state.text, true);
        // Animates the passed title whether this is defined.
        BasicsTools.animate_text (document.querySelector ("div.title-zone > label#title"), this.state.text, 35, 400);
    }

    // Called when this component state has been changed.
    componentDidUpdate = () => {
        // Getting title label reference.
        let label_title = document.querySelector ("div.title-zone > label#title");
        // Animates the passed title whether this is defined.
        if (this.state.visible) BasicsTools.animate_text (label_title, this.state.text, 35, 100);
        // Otherwise.
        else BasicsTools.animate_text (label_title, this.state.text, 20, 100, -1, true);
    }

    // Makes the component render.
    render = () => <div className = "titlebar">
        <div className = "settings-zone" title = "Montre-moi les paramètres.">
            <svg width = "15px" height = "10px" viewBox = "0 0 15 9" id = "settings-icon">
                <path fillRule = "evenodd" clipRule = "evenodd" d = "M0 9H15V7.5H0V9ZM0 5.25H15V3.75H0V5.25ZM0 0V1.5H15V0H0Z"/>
            </svg>
        </div><div className = "title-zone"><label id = "title"></label></div>
    </div>;
}
