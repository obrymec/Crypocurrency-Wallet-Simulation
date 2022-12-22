// Dependencies.
import BasicsTools from "../vendors/basics_tools.js";
import EventsManager from "./EventsManager.jsx";
import React, {PureComponent} from "react";
import "../styles/message_box.css";
import $ from "jquery";

// Creating message box class.
export default class MessageBox extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            text: "Network error ! Check your network and retry again.",
            title: "Internet error",
            type: 2,
            options: [
                {
                    click: () => this.visibility (false, true),
                    title: "Annuler",
                    text: "OK"
                }
            ]
        };
    }

    // Changes the message box text content.
    set_text = message => this.setState ({text: String (message).trimLeft ().trimRight ()});

    // Changes the message box title text.
    set_title = text => this.setState ({title: String (text).trimLeft ().trimRight ()});

    // Overrides message box options definition.
    override_options = new_options => this.setState ({options: new_options});

    // Apply responsive design to the message box structure.
    responsive_box = () => {
        // Checks the browser window width value for potentials tests.
        let is_biger = (window.outerWidth >= 381);
        // Assigns svg width and height with the current window width.
        $ ("div.msg-icon svg").css ("width", ((is_biger ? 35 : 24) + "px")).css ("height", ((is_biger ? 35 : 24) + "px"));
        // Assigns a box width with the current window width.
        $ ("div.msg-global-container").css ("width", ((is_biger ? 350 : 270) + "px"));
    }

    // Hides/Shows the message box.
    visibility = (visible, animate = false) => {
        // Getting the message box container.
        let container = $ ("div.msg-global-container"), msg_options_container = $ ("div.msg-options"), options = msg_options_container.children ();
        // Gets all options.
        msg_options_container.css ("display", ((options.length > 0) ? "flex" : "none"));
        // Is it visible ?
        if (visible) {
            // Is it animate ?
            if (animate) $ ("div.message-box").css ("display", "flex").animate ({opacity: 1}, 150, () => {
                // Getting the container height css value and apply filter effect to all elements in background.
                let height = BasicsTools.get_css_value (container.css ("height"));
                $ ("div.msg-blur-effect").css ("backdrop-filter", "blur(2px)");
                // Clears the container width to zero.
                container.css ("display", "block").css ("height", 0).css ("transition-duration", "0.2s");
                // Waiting for background animation.
                window.setTimeout (() => {
                    // Checks the browser window width value for potentials tests and setting the container opacity and his width.
                    let is_biger = (window.outerWidth >= 381);
                    container.css ("opacity", 1).css ("width", ((is_biger ? 350 : 270) + "px"));
                    // Waiting for box resizing.
                    window.setTimeout (() => {
                        // Getting the label title reference and animates the title text to the given value.
                        let title = document.querySelector ("div.msg-title label");
                        BasicsTools.animate_text (title, this.state.title, 25, 150, -1);
                        // Getting the svg size with the given browser window size and sets the current container height.
                        let ssize = (is_biger ? 35 : 24);
                        container.css ("height", (is_biger ? (height + 5) : (height + 18) + "px"));
                        // Auto adjustement for any message box content.
                        window.setTimeout (() => container.css ("height", "auto"), 150);
                        window.DELAY = 0.0;
                        // Animates the svg icon with his scale.
                        $ ("div.msg-icon svg").css ("transition-duration", "0.3s").animate ({opacity: 1, width: ssize, height: ssize}, 150, () => {
                            // Getting the message text reference.
                            let message_text = document.querySelector ("div.msg-text label");
                            // Animates the message text to the given text.
                            BasicsTools.animate_text (message_text, this.state.text, 20, 150, 1, false, () => {
                                // Some options have been specified ?
                                if (options.length > 0) {
                                    // Shows options container and animates each provided option by the message box.
                                    msg_options_container.css ("border-top-width", "1px");
                                    $ (options).each ((_, button) => {
                                        // Waiting for each option animation.
                                        window.setTimeout (() => $ (button).css ("visibility", "visible").animate ({opacity: 1}, 150), window.DELAY);
                                        // Creates a new delay for the next option.
                                        window.DELAY += 150;
                                    });
                                }
                            });
                        });
                    }, 250);
                }, 150);
            // Otherwise.
            }); else {
                // Updates message box title and text content.
                $ ("div.msg-title label").text (this.state.title);
                $ ("div.msg-text label").text (this.state.text);
                // Some options have been specified ?
                if (msg_options_container.css ("display") === "flex") {
                    // Shows all availables message box options.
                    $ (options).each ((_, button) => $ (button).css ("visibility", "visible").css ("opacity", 1));
                    // Shows options container.
                    msg_options_container.css ("border-top-width", "1px");
                }
                // Shows the global container.
                container.css ("display", "block").css ("opacity", 1).css ("transition-duration", 0);
                // Apply filter effect to all elements in background.
                $ ("div.msg-blur-effect").css ("backdrop-filter", "blur(2px)");
                this.responsive_box ();
                // Shows the message svg icon.
                $ ("div.msg-icon svg").css ("opacity", 1).css ("transition-duration", 0);
                // Shows the message box container.
                $ ("div.message-box").css ("display", "flex").css ("opacity", 1);
            }
        // Otherwise.
        } else {
            // Resets the svg icon data for next messages.
            $ ("div.msg-icon svg").css ("height", "48px").css ("width", "48px").css ("opacity", 0).css ("transition-duration", 0);
            // Hides options container and his border top.
            msg_options_container.css ("display", "none").css ("border-top-width", 0);
            // Clears all availables options and the text content.
            this.override_options ([]);
            $ ("div.msg-text label").text ('').html ('');
            // Is it animate ?
            if (animate) {
                // Resets the global container height to the initial value.
                container.css ("transition-duration", "0.1s").animate ({height: 25}, 100, () => {
                    // Resets the global container width and his opacity to the initial value.
                    window.setTimeout (() => container.animate ({width: 0, opacity: 0}, 100, () => window.setTimeout (() => {
                        // Hides the message box by reseting his opacity.
                        $ ("div.message-box").animate ({opacity: 0}, 150, function () {
                            // Clears the message box title text and hide it.
                            $ ("div.msg-title label").text ('').html (''); $ (this).css ("display", "none");
                            // Hides the global container and sets his height css property to "auto".
                            container.css ("opacity", 0).css ("display", "none").css ("height", "auto");
                            // Disables blur effect to all elements in background.
                            $ ("div.msg-blur-effect").css ("backdrop-filter", "none");
                        });
                    }, 150)), 150);
                });
            // Otherwise.
            } else {
                // Hides the global container and sets his height css property to "auto".
                container.css ("transition-duration", 0).css ("opacity", 0).css ("display", "none").css ("height", "auto").css ("width", 0);
                // Clears the message box title text and hide it.
                $ ("div.msg-title label").text ('').html (''); $ ("div.message-box").css ("display", "none").css ("opacity", 0);
                // Disables blur effect to all elements in background.
                $ ("div.msg-blur-effect").css ("backdrop-filter", "none");
            }
        }
    }

    // Called when this component is ready.
    componentDidMount = () => {
        // Waiting a few seconds.
        window.setTimeout (() => {
            this.override_options ([{title: "Annuler", text: "OK", click: () => this.visibility (false, true)}]);
            this.visibility (true, true);
        }, 5000);
    }

    // Makes the component render.
    render = () => <div className = "message-box"><div className = "msg-blur-effect"></div>
        <div className = "msg-global-container">
            <div className = "msg-title" align = "center"><label></label></div>
            <div className = "msg-body">
                <div className = "msg-icon">
                    <svg enableBackground = "new 0 0 48 48" height = "48px" viewBox = "0 0 48 48" width = "48px">
                        <g><path d = {`M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z 
                        M24,44 C12.954,44,4,35.046,4,24S12.954,4,24,4s20,8.954,20,20S35.046,44,24,44z`} fill = "#4B4B4B"/>
                        <g><circle cx = "24" cy = "33" fill = "#4B4B4B" r = '2'/><rect fill = "#4B4B4B" height = "15.031"
                        width = "3.997" x = "22.001" y = "12.969"/></g></g>
                    </svg>
                </div>
                <div className = "msg-text"><label></label></div>
            </div>
            <div className = "msg-options">{this.state.options.map ((btn, idx) => <button key = {idx}
                title = {(btn.hasOwnProperty ("title") ? String (btn.title).trimLeft ().trimRight () : '')}
                onClick = {((btn.hasOwnProperty ("click") && typeof btn.click === "function") ? btn.click : () => {})}>
                {(btn.hasOwnProperty ("text") ? String (btn.text).trimLeft ().trimRight () : '')}</button>)}
            </div>
        </div>
        <EventsManager reference = {window} callback = {this.responsive_box} event = "resize"/>
    </div>;
}
