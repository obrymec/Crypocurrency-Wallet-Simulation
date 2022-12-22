// Dependencies.
import BitcoinCashLogo from "../images/bitcoin_cash.png";
import LitecoinLogo from "../images/litecoin.png";
import DogecoinLogo from "../images/dogecoin.png";
import EtherumLogo from "../images/ethereum.svg";
import BitcoinLogo from "../images/bitcoin.png";
import EventsManager from "./EventsManager.jsx";
import DropdownRow from "./DropdownRow.jsx";
import React, {PureComponent} from "react";
import "../styles/dropdown_menu.css";
import $ from "jquery";

// Creating the activities class.
export default class DropdownMenu extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            cryptos: [
                {
                    icon: BitcoinCashLogo,
                    name: "Bitcoin Cash",
                    balance: 0.14624896,
                    unit: "BCH"
                },
                {
                    balance: 0.25691473,
                    icon: BitcoinLogo,
                    name: "Bitcoin",
                    unit: "BTC"
                },
                {
                    balance: 0.92149235,
                    icon: LitecoinLogo,
                    name: "Litecoin",
                    unit: "LIT"
                },
                {
                    balance: 0.14624896,
                    icon: EtherumLogo,
                    name: "Ethereum",
                    unit: "ETH"
                },
                {
                    balance: 0.25691473,
                    icon: DogecoinLogo,
                    name: "Dogecoin",
                    unit: "DOG"
                }
            ]
        };
    }

    // Apply responsive page to all target web page.
    responsive_view = () => $ ("div.dropdown-rows").css ("max-height", ((window.outerHeight / 2) + "px"));

    // Called when the state value has been changed.
    componentDidUpdate = () => {}

    // Called when this component is injected into the DOM.
    componentDidMount = () => {
        // Apply responsive view.
        this.responsive_view ();
        window.DELAY = 0.0;
    }

    // Makes the component render.
    render = () => <div className = "dropdown-menu">
        <div className = "dropdown-rows">{this.state.cryptos.map ((crypto, index) =>
            <DropdownRow id = {index} key = {index} name = {crypto.name} balance = {crypto.balance} unit = {crypto.unit} icon = {crypto.icon}/>
        )}</div>
        <EventsManager event = "resize" callback = {this.responsive_view} reference = {window}/>
    </div>;
}
