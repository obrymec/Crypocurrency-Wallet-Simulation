// Dependencies.
import React, {PureComponent} from "react";
import "../styles/activities.css";

// Creating the activities class.
export default class Activities extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            amount: 10.25
        };
    }

    // Makes the component render.
    render = () => <div className = "activities">
        <br/><br/><div className = "aheader">
            <div className = "wallet-container">
                <div className = "wicon">
                    <svg height = "24px" viewBox = "0 0 48 48" width = "24px" id = "option-icon" fill = "#050541">
                        <path d = "M0 0h48v48h-48z" fill = "none"/>
                        <path d = {`M42 36v2c0 2.21-1.79 4-4 4h-28c-2.21 0-4-1.79-4-4v-28c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 
                        4v2h-18c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h18zm-18-4h20v-16h-20v16zm8-5c-1.66 0-3-1.34-3-3s1.34-3 
                        3-3 3 1.34 3 3-1.34 3-3 3z`}/>
                    </svg>
                </div>
                <div className = "wdata">
                    <div className = "data-title"><label>Tous les portefeuilles</label></div>
                    <div className = "wamount"><label>{this.state.amount} {window.CURRENCY}</label></div>
                </div>
                <div className = "dropdown-icon">
                    <svg width = "12px" height = "8px" viewBox = "0 0 12 8" fill = "none">
                        <path d = "M1 1.5L6 6.5L11 1.5" stroke = "#fff" strokeWidth = '2' strokeLinecap = "round" strokeLinejoin = "round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>;
}
