// Dependencies.
import BasicsTools from "../vendors/basics_tools.js";
import EventsManager from "./EventsManager.jsx";
import React, {PureComponent} from "react";
import "../styles/crypto_currency.css";
import $ from "jquery";

// Creating the menu bar class.
export default class CryptoCurrency extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.load_counter = null;
        this.load_count = 1;
        this.state = {
            balance: 0.00000000,
            amount: 0.00,
            worth: 0.00,
            gain: 0.00,
            icon: '',
            hour: 0
        };
    }

    // Generates some data for a crypto currency.
    generate_data = () => ({
        amount: (Math.random () * 10000000000.00), gain: (Math.random () * 100.00), balance: (Math.random () * 10.00000000),
        worth: (Math.random () * (100000.00 - 1.00) + 1.00), hour: parseInt (Math.random () * (48 - 1) + 1),
        percent: (Math.random () * (30.00 - 1.00) + 1.00)
    });

    // Initializes a crypto currency proccess.
    init = () => {
        // Checks the user network.
        if (window.navigator.onLine) {
            // Calls crypto currency ready method for initialization.
            this.props.ready (this.get_crypto_currency_data ({id: this.props.id}));
            // Loads data from server every 3s times.
            this.load_data_from_api (0, 1);
            window.setTimeout (() => this.load_data_from_api (1000), 3000);
        // Stops data fetch interval.
        } else if (!BasicsTools.is_empty (this.load_counter)) window.clearInterval (this.load_counter);
    }

    // Returns all data about a crypto currency.
    get_crypto_currency_data = (props) => {
        // Creates a virtual state for potentials changements.
        let virtual_state = {...this.state};
        // Checks the passed properties.
        if (!BasicsTools.is_empty (props)) {
            // Adds all passed property to the future state to be returned.
            for (let prop of Object.keys (props)) virtual_state[prop] = props[prop];
            return virtual_state;
        // Otherwise.
        } else return virtual_state;
    }

    // Changes crypto currency icon path.
    set_icon = (new_value, animate = false) => {
        // Getting image zone id.
        let img_id = ("div#img-zone-" + this.props.id), is_ok = !BasicsTools.is_empty (new_value);
        // Checks the passed value.
        if (is_ok) {
            // Updates the crypto currency icon state.
            this.setState ({icon: String (new_value)});
            // Should us animate this icon on the app view.
            if (animate) BasicsTools.apply_css_animation ({ref: document.querySelector (img_id), name: "rotation", duration: 400});
        }
        // Hides/Shows image section in app view.
        this.element_visibility (img_id, is_ok);
    }

    // Changes crypto currency name.
    set_name = (new_value, animate = false) => {
        // Getting image zone id.
        let name_id = ("div#name-zone-" + this.props.id), is_ok = !BasicsTools.is_empty (new_value);
        // Checks the passed value.
        if (is_ok) {
            // Getting the crypto currency label reference.
            let lb_ref = document.querySelector (name_id + " label");
            // Checks label value html and text value.
            if (BasicsTools.is_empty ($ (lb_ref).html ()) && BasicsTools.is_empty ($ (lb_ref).text ())) {
                // Should us animate this value on the app view.
                if (animate) BasicsTools.animate_text (lb_ref, new_value, 50, 0, -1);
                // Otherwise.
                else $ (lb_ref).text (new_value);
            }
        }
        // Hides/Shows name section in app view.
        this.element_visibility (name_id, is_ok);
    }

    // Changes crypto currency worth on the market.
    set_worth = (new_value, animate = false) => {
        // Getting worth zone id.
        let worth_id = ("div#worth-zone-" + this.props.id), is_ok = !BasicsTools.is_empty (new_value);
        // Checks the passed value.
        if (is_ok) {
            // Should us animate this value on the app view.
            if (animate) BasicsTools.text_counter ({
                step: value => this.setState ({worth: value}), finish: value => this.setState ({worth: value}),
                oval: this.state.worth, nval: new_value, interval: 25,
            // Otherwise.
            }); else this.setState ({worth: parseFloat (new_value)});
        }
        // Hides/Shows worth section in app view.
        this.element_visibility (worth_id, is_ok);
    }

    // Changes crypto currency balance.
    set_balance = (new_value, animate = false) => {
        // Getting balance zone id.
        let balance_id = ("div#balance-zone-" + this.props.id), is_ok = !BasicsTools.is_empty (new_value);
        // Checks the passed value.
        if (is_ok) {
            // Should us animate this value on the app view.
            if (animate) BasicsTools.text_counter ({
                step: value => this.setState ({balance: value}), finish: value => this.setState ({balance: value}),
                oval: this.state.balance, nval: new_value, interval: 35
            // Otherwise.
            }); else this.setState ({balance: parseFloat (new_value)});
        }
        // Hides/Shows balance section in app view.
        this.element_visibility (balance_id, is_ok);
    }

    // Changes crypto currency amount.
    set_amount = (new_value, animate = false) => {
        // Getting amount zone id.
        let amount_id = ("div#amount-zone-" + this.props.id), is_ok = !BasicsTools.is_empty (new_value);
        // Checks the passed value.
        if (is_ok) {
            // Should us animate this value on the app view.
            if (animate) BasicsTools.text_counter ({
                oval: this.state.amount, nval: new_value, interval: 50, blink: true, ref: document.querySelector (amount_id + " label"),
                step: value => this.setState ({amount: value}), finish: value => this.setState ({amount: value}),
            // Otherwise.
            }); else this.setState ({amount: parseFloat (new_value)});
        }
        // Hides/Shows amount section on the app view.
        this.element_visibility (amount_id, is_ok);
    }

    // Changes value of crypto currency percent property.
    set_percent = (new_value, animate = false) => {
        // Checks the passed value.
        if (!BasicsTools.is_empty (new_value)) {
            // Getting graph id.
            let graph_id = ("svg#graph-statistics > circle#" + this.props.id);
            new_value = parseFloat (new_value);
            // Animates the target crypto currency percentage data.
            if (animate) $ (graph_id).css ("left", (this.state.percent + "px")).stop (true, true).animate (
                {left: new_value}, {
                    duration: 300, step: frame => {
                        // Updates percentage property to the current frame value.
                        this.props.changed (this.get_crypto_currency_data ({id: this.props.id, percent: frame}));
                    }
            // Updates percentage property with no animation.
            }); else this.props.changed (this.get_crypto_currency_data ({id: this.props.id, percent: new_value}));
        }
    }

    // Changes crypto currency gain and hour.
    set_gain_hour = (gain, hour, animate = false) => {
        // Checks whether entries are correct.
        let is_ok = !BasicsTools.is_empty (gain) && !BasicsTools.is_empty (hour), benefice_id = ("div#benefice-zone-" + this.props.id);
        // Checks the passed data.
        if (is_ok) {
            // Should us animate this value on the app view.
            if (animate) BasicsTools.text_counter ({
                step: value => this.setState ({gain: value}), finish: value => this.setState ({gain: value}),
                oval: this.state.gain, nval: gain, interval: 45
            // Otherwise.
            }); else this.setState ({gain: parseFloat (gain)});
            this.setState ({hour: parseInt (hour)});
        }
        // Changes crypto currency hour and gain visibility.
        this.element_visibility (benefice_id, is_ok);
    }

    // Creates a responsive for any text variation.
    responsive_text = () => {
        // Calculates the label size.
        let lsize = BasicsTools.responsive_amount (BasicsTools.parse_float (this.state.amount), 15), amount_id = ("div#amount-zone-" + this.props.id + " label");
        // Checks changements.
        if (lsize !== BasicsTools.get_css_value ($ (amount_id).css ("font-size"))) {
            // Animates the new label font size.
            $ (amount_id).stop (true, true).animate ({fontSize: (lsize + "px")}, "fast");
        }
        // Getting crypto refresh hour id.
        let hour_id = ("div#benefice-zone-" + this.props.id + " label#hour");
        // Checks browser window width.
        if (window.outerWidth < 330) $ (hour_id).text (this.state.hour + 'h');
        // Otherwise.
        else $ (hour_id).text (this.state.hour + " heures");
        // Calculates the label size.
        let rsize = BasicsTools.responsive_amount (BasicsTools.parse_float (this.state.worth), 15), worth_id = ("div#worth-zone-" + this.props.id + " label");
        // Checks changements.
        if (rsize !== BasicsTools.get_css_value ($ (worth_id).css ("font-size"))) {
            // Animates the new label font size.
            $ (worth_id).stop (true, true).animate ({fontSize: (rsize + "px")}, "fast");
        }
    }

    // Shows/hides crypto currency section.
    visibility = (visible = true, animate = false, duration = 400.0, delay = 0.0, finished = null) => {
        // Waiting for user delay.
        setTimeout (() => {
            // Generates a crypto currency id.
            let crypto_id = ("div#crypto-currency-" + this.props.id);
            // We should show data.
            if (visible) {
                // Display with an animation.
                if (animate) $ (crypto_id).animate ({opacity: 1}, duration, () => {
                    // Runs the given callback whether it exist.
                    if (!BasicsTools.is_empty (finished)) finished ();
                // Otherwise.
                }); else {$ (crypto_id).css ("opacity", 1);
                if (!BasicsTools.is_empty (finished)) finished ();}
            } else {
                // Hides with an animation.
                if (animate) $ (crypto_id).animate ({opacity: 0}, duration, () => {
                    // Runs the given callback whether it exist.
                    if (!BasicsTools.is_empty (finished)) finished ();
                // Otherwise.
                }); else {$ (crypto_id).css ("opacity", 0);
                if (!BasicsTools.is_empty (finished)) finished ();}
            };
        }, ((delay > 0.0 && visible) ? delay : 0.0));
    }

    // Controls visibility of a crypto currency's section.
    element_visibility = (id, visible) => {
        // Gets hider id.
        let hider_id = (" div#hider-" + this.props.id);
        // Checks visibility.
        if (visible) {
            // For crypto currency icon.
            if (id.includes ("img-zone")) $ (id).css ("background-color", "white").css ("background-image", "none");
            // Otherwise.
            else {
                $ (id + hider_id).css ("visibility", "hidden").css ("background-image", "none").css ("margin-top", 0).css ("height", 0);
                if (id.includes ("name-zone")) $ (id + " div.hider").css ("padding", 0).css ("width", 0).css ("height", "21px").css ("margin-top", "-21px");
                $ (id + " label").css ("visibility", "visible");
            }
        } else {
            // For crypto currency icon.
            if (id.includes ("img-zone")) $ (id).css ("background-color", "none")
                .css ("background-image", "radial-gradient(white, 25%, rgb(238, 234, 234), white)");
            // Otherwise.
            else {
                $ (id + hider_id).css ("visibility", "visible").css ("height", "15px").css ("margin-top", "-15px")
                    .css ("background-image", "linear-gradient(white, 25%, rgb(238, 234, 234), white)");
                if (id.includes ("name-zone")) $ (id + " div.hider").css ("padding", "5px 0 5px 0").css ("width", "85px").css ("margin-top", 0);
                $ (id + " label").css ("visibility", "hidden");
            }
        }
    }

    // Loads a crypto currency data from the target API server.
    load_data_from_api = (interval, count = -1) => {
        // Checks the count value.
        if (count !== 0) {
            // Waiting for the given interval.
            this.load_counter = window.setInterval (() => {
                // Checks network.
                if (window.navigator.onLine) {
                    // Getting the server data.
                    let sdata = this.generate_data ();
                    // Icon and crypto name initialization.
                    this.set_icon (this.props.icon, true);
                    this.set_name (this.props.name, true);
                    // Amount and worth initialization.
                    this.set_amount (sdata.amount, true);
                    this.set_worth (sdata.worth, true);
                    // Balance, benefice and hour initialization.
                    this.set_balance (sdata.balance, true);
                    this.set_gain_hour (sdata.gain, sdata.hour, true);
                    // Pourcentage initialization and apply responsive text to all variable value.
                    this.set_percent (sdata.percent, true);
                    this.responsive_text ();
                    // Stops data fetch interval.
                    window.clearInterval (this.load_counter);
                    // A fetch data limit has been specified.
                    if (count > 0) {
                        // Checks the current load count.
                        if (this.load_count < count) {
                            this.load_count++;
                            this.load_data_from_api (interval, count);
                        // Otherwise.
                        } else this.load_count = 1;
                    // Inifinite data fetch.
                    } else this.load_data_from_api (interval, count);
                // Stops data fetch interval.
                } else window.clearInterval (this.load_counter);
            }, interval);
        }
    }

    // Called when the state value has been changed.
    componentDidUpdate = props => {
        // Apply text responsive effect and returns the current crypto currency data state.
        this.responsive_text ();
        this.props.changed (this.get_crypto_currency_data ({id: props.id}));
    }

    // Called before destroying component.
    componentWillUnmount = () => {
        // Hides the crypto currency and kill all running background processs.
        this.visibility (false, true, 200.0);
        // Destroys all running process in background.
        if (!BasicsTools.is_empty (this.load_counter)) window.clearInterval (this.load_counter);
        // Thrown "destroyed" event.
        this.props.destroyed (this.get_crypto_currency_data ({id: this.props.id}));
    }

    // Called when this component is injected into the DOM.
    componentDidMount = () => {
        // Hiding icon, crypto name, amount and worth.
        this.set_icon (null);
        this.set_name (null);
        this.set_amount (null);
        this.set_worth (null);
        // Balance, benefice and hour initialization.
        this.set_balance (null);
        this.set_gain_hour (null, null);
        this.set_percent (null);
        // Should us show data ? And waiting for crypto show duration before to show another crypto. 
        this.visibility (true, true, 200.0, window.DELAY, () => this.init ());
        window.DELAY += 200.0;
        // All Cryptos have been shown successufuly.
        if (this.props.id === (this.props.size - 1)) {
            this.props.allready ();
            window.DELAY = 0.0;
        }
    }

    // Makes the component render.
    render = () => <div className = "crypto-currency" id = {("crypto-currency-" + this.props.id)}>
        <div className = "header">
            <div className = "img-zone" id = {("img-zone-" + this.props.id)}>{this.props.icon}</div>
            <div className = "name-zone" id = {("name-zone-" + this.props.id)}>
                <label></label><div className = "hider" id = {("hider-" + this.props.id)}></div>
            </div>
        </div><br/>
        <div className = "body">
            <div className = "left-data">
                <div className = "amount-zone" id = {("amount-zone-" + this.props.id)}>
                    <label>{BasicsTools.parse_float (this.state.amount, 2)} {window.CURRENCY}</label>
                    <div className = "hider" id = {("hider-" + this.props.id)}></div>
                </div>
                <div className = "balance-zone" id = {("balance-zone-" + this.props.id)}>
                    <label>{BasicsTools.parse_float (this.state.balance, 8)} {this.props.unit}</label>
                    <div className = "hider" id = {("hider-" + this.props.id)}></div>
                </div>
            </div>
            <div className = "right-data">
                <div className = "worth-zone" id = {("worth-zone-" + this.props.id)}>
                    <label>{BasicsTools.parse_float (this.state.worth, 2)} {window.CURRENCY}</label>
                    <div className = "hider" id = {("hider-" + this.props.id)}></div>
                </div>
                <div className = "benefice-zone" id = {("benefice-zone-" + this.props.id)}>
                    <label id = "gain">{BasicsTools.parse_float (this.state.gain, 2)} %</label>
                    <label id = "hour">{this.state.hour} heures</label>
                    <div className = "hider" id = {("hider-" + this.props.id)}></div>
                </div>
            </div>
        </div>
        <EventsManager event = "resize" callback = {this.responsive_text} reference = {window}/>
        <EventsManager event = "online" callback = {() => window.location.reload ()} reference = {window}/>
        <EventsManager event = "offline" callback = {this.init} reference = {window}/>
    </div>;
}
