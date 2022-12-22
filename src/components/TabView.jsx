// Dependencies.
//import DropdownMenu from "./DropdownMenu.jsx";
import React, {PureComponent} from "react";
//import Activities from "./Activities.jsx";
//import MessageBox from "./MessageBox.jsx";
import Wallet from "./Wallet.jsx";
import "../styles/tab_view.css";

// Creating the menu bar class.
export default class TabView extends PureComponent {
    // Makes the component render.
    render = () => <div className = "tab-view">
        {/* <DropdownMenu/> */}
        {/* <Activities/> */}
        {/* <MessageBox/> */}
        <Wallet/>
    </div>;
}
