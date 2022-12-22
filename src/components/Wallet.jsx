// Dependencies.
import BitcoinCashLogo from "../images/bitcoin_cash.png";
import BasicsTools from "../vendors/basics_tools.js";
import CryptoCurrency from "./CryptoCurrency.jsx";
import LitecoinLogo from "../images/litecoin.png";
//import DogecoinLogo from "../images/dogecoin.png";
import EtherumLogo from "../images/ethereum.svg";
import BitcoinLogo from "../images/bitcoin.png";
import React, {PureComponent} from "react";
import "../styles/wallet.css";
import $ from "jquery";

// Creating the wallet class.
export default class Wallet extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            amount_sum: 0.00,
            cryptos: [
                {
                    icon: <img src = {BitcoinLogo} width = "30px" height = "30px" alt = ''/>,
                    gcolor: "#F7931A",
                    name: "Bitcoin",
                    percent: 15.21,
                    unit: "BTC",
                    api: ''
                },
                {
                    icon: <img src = {EtherumLogo} width = "30px" height = "30px" alt = ''/>,
                    gcolor: "#627EEA",
                    name: "Ethereum",
                    percent: 5.19,
                    unit: "ETH",
                    api: ''
                },
                {
                    icon: <img src = {LitecoinLogo} width = "30px" height = "30px" alt = ''/>,
                    gcolor: "#3C5A9A",
                    name: "Litecoin",
                    percent: 26.33,
                    unit: "LIT",
                    api: ''
                },
                {
                    icon: <img src = {BitcoinCashLogo} width = "30px" height = "30px" alt = ''/>,
                    name: "Bitcoin Cash",
                    gcolor: "#0AC18E",
                    percent: 19.09,
                    unit: "BCH",
                    api: ''
                },
                /*{
                    icon: <img src = {DogecoinLogo} width = "30px" height = "30px" alt = ''/>,
                    gcolor: "#C3A830",
                    name: "Dogecoin",
                    percent: 8.11,
                    unit: "DOG",
                    api: ''
                }*/
            ]
        };
    }

    // Called when all crypto currency have been ready.
    _on_all_cryptos_currency_ready = () => {}

    // Called when a crypto currency has been destroyed.
    _on_crypto_currency_destroyed = () => {}

    // Called when a crypto currency is ready.
    _on_crypto_currency_ready = () => {}

    // Changes amount sum.
    set_amount_sum = (new_value) => {
        // Apply basic css effect.
        $ ("div.total-hider").css ("height", "25px").css ("position", "relative").css ("margin-top", "-25px");
        // Checks the passed value.
        if (!BasicsTools.is_empty (new_value)) {
            // Hides hider and updates amount sum state.
            $ ("div.total-hider").css ("background-image", "none");
            this.setState ({amount_sum: new_value});
        // Ortherwise.
        } else $ ("div.total-hider").css ("background-image", "linear-gradient(white, 25%, rgb(238, 234, 234), white)");
    }

    // Called when a crypto currency data have been changed.
    _on_crypto_currency_data_changed = crypto_data => {
        // Updates the current crypto currency circular graph.
        $ ("svg#graph-statistics > circle#" + crypto_data.id).data ("data-percent", crypto_data.percent)
            .css ("stroke", String (this.state.cryptos[crypto_data.id].gcolor)).data ("data-amount", crypto_data.amount)
            .css ("stroke-dashoffset", (window.SURFACE - (crypto_data.percent / 100) * window.SURFACE));
        // Initializes total amount and total percent worth.
        let total_amount = 0.00, total_percent = 0.00, graphs = $ ("div.graph-data svg#graph-statistics").children ();
        // Gets all graphs children to apply a specified rotation angle.
        graphs.each ((index, graph) => {
            // Calculates the total percentage from the current circular graph.
            total_percent += (index === 0) ? 0.0 : $ (graphs[(index - 1)]).data ("data-percent");
            // Updates the circular graph rotation angle think his transform.
            $ (graph).css ("transform", ("rotate(" + ((total_percent * 360) / 100) + "deg)"));
            // Adds all found crypto currency amount on the current circular graph.
            total_amount += (!BasicsTools.is_empty ($ (graph).data ("data-amount")) ? $ (graph).data ("data-amount") : 0);
        });
        // Updates the total amount on app view.
        this.set_amount_sum (total_amount);
    }

    // Called when the state value has been changed.
    componentDidUpdate = () => {
        // Contains the shadow size.
        let size = ((this.state.amount_sum * 10) / 1000000000000);
        // Updates amount css effect.
        $ ("div.total-amount > label").css ("text-shadow", ("0 0 " + ((size < 10) ? size : 10) + "px #050541"));
    }

    // Called when this component is injected into the DOM.
    componentDidMount = () => {
        // Shows circular graph and global amount sum.
        window.DELAY = 300; BasicsTools.apply_css_animation (
            {ref: document.querySelector ("div.wheader"), name: "wheader", duration: 300}, {transform: "translateY(0)"}
        );
        // Updates amount sum.
        this.set_amount_sum (null);
    }

    // Makes the component render.
    render = () => <div className = "wallet">
        <br/><br/><br/><br/>
        <div className = "wheader">
            <div className = "text-data">
                <div className = "title-zone"><label><strong>Solde actuel</strong></label></div>
                <div className = "total-amount">
                    <label>{BasicsTools.parse_float (this.state.amount_sum, 2)} {window.CURRENCY}</label><div className = "total-hider"></div>
                </div>
            </div>
            <div className = "graph-data">
                <svg id = "graph-statistics" width = "70px" height = "70px">{
                    this.state.cryptos.map ((crypto, index) => <circle r = "28px" strokeDasharray = {window.SURFACE}
                    id = {index} cx = "35px" key = {(crypto.name + '-' + index)} cy = "35px"></circle>)}
                </svg>
            </div>
        </div>
        <div className = "cryptos-data">{this.state.cryptos.map ((crypto, index) => <CryptoCurrency
            api = {crypto.api} id = {index} key = {(crypto.name + '-' + index)} percent = {crypto.percent} icon = {crypto.icon}
            changed = {this._on_crypto_currency_data_changed} ready = {this._on_crypto_currency_ready}
            unit = {crypto.unit} name = {crypto.name} allready = {this._on_all_cryptos_currency_ready}
            destroyed = {this._on_crypto_currency_destroyed} size = {this.state.cryptos.length}/>)}
        </div>
        <br/><br/><br/><br/>
    </div>;
}
