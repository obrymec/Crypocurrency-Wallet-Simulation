// Dependencies.
import BasicsTools from "../vendors/basics_tools.js";
import React, {PureComponent} from "react";
import "../styles/menubar.css";
import $ from "jquery";

// Creating the menubar class.
export default class MenuBar extends PureComponent {
    // Creating component constructor.
    constructor (props) {
        // Targets the parent constuctor.
        super (props);
        // Initializes component state and attributes.
        this.state = {
            visible: true,
            option: 2
        };
    }

    // Selects an option from the menubar.
    select = (option, force = false) => {
        // Menubar is actived and the current selected option is deferent of the old active option.
        if (force || (option !== this.state.option && this.state.visible)) {
            // Checks the selected option.
            if (option <= 0) {
                // Home option style.
                $ ("div.home-option").children ()[0].children[0].children[0].style.fill = "#0000E9";
                $ ("div.home-option").children ()[0].children[0].children[1].style.fill = "#0000E9";
                $ ("div.home-option").children ()[1].children[0].style.color = "#0000E9";
                $ ("div.home-option").children ()[1].children[0].style.fontWeight = "bold";
                // Exchange option style.
                $ ("div.exchange-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.fontWeight = "normal";
                // Activities option style.
                $ ("div.activities-option").children ()[0].children[0].children[0].style.stroke = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.fontWeight = "normal";
                // Settings option style.
                $ ("div.settings-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.fontWeight = "normal";
            // For exchange option.
            } else if (option === 1) {
                // Home option style.
                $ ("div.home-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.fontWeight = "normal";
                // Exchange option style.
                $ ("div.exchange-option").children ()[0].children[0].children[0].style.fill = "#0000E9";
                $ ("div.exchange-option").children ()[1].children[0].style.color = "#0000E9";
                $ ("div.exchange-option").children ()[1].children[0].style.fontWeight = "bold";
                // Activities option style.
                $ ("div.activities-option").children ()[0].children[0].children[0].style.stroke = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.fontWeight = "normal";
                // Settings option style.
                $ ("div.settings-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.fontWeight = "normal";
            // For wallet option.
            } else if (option === 2) {
                // Home option style.
                $ ("div.home-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.fontWeight = "normal";
                // Exchange option style.
                $ ("div.exchange-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.fontWeight = "normal";
                // Activities option style.
                $ ("div.activities-option").children ()[0].children[0].children[0].style.stroke = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.fontWeight = "normal";
                // Settings option style.
                $ ("div.settings-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.fontWeight = "normal";
            // For activities option.
            } else if (option === 3) {
                // Home option style.
                $ ("div.home-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.fontWeight = "normal";
                // Exchange option style.
                $ ("div.exchange-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.fontWeight = "normal";
                // Activities option style.
                $ ("div.activities-option").children ()[0].children[0].children[0].style.stroke = "#0000E9";
                $ ("div.activities-option").children ()[1].children[0].style.color = "#0000E9";
                $ ("div.activities-option").children ()[1].children[0].style.fontWeight = "bold";
                // Settings option style.
                $ ("div.settings-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.settings-option").children ()[1].children[0].style.fontWeight = "normal";
            // For settings option.
            } else {
                // Home option style.
                $ ("div.home-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[0].children[0].children[1].style.fill = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.home-option").children ()[1].children[0].style.fontWeight = "normal";
                // Exchange option style.
                $ ("div.exchange-option").children ()[0].children[0].children[0].style.fill = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.exchange-option").children ()[1].children[0].style.fontWeight = "normal";
                // Activities option style.
                $ ("div.activities-option").children ()[0].children[0].children[0].style.stroke = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.color = "#8D8D8D";
                $ ("div.activities-option").children ()[1].children[0].style.fontWeight = "normal";
                // Settings option style.
                $ ("div.settings-option").children ()[0].children[0].children[0].style.fill = "#0000E9";
                $ ("div.settings-option").children ()[0].children[0].children[1].style.fill = "#0000E9";
                $ ("div.settings-option").children ()[1].children[0].style.color = "#0000E9";
                $ ("div.settings-option").children ()[1].children[0].style.fontWeight = "bold";
            }
            // Updates the menu bar active option property and hide it with the app titlebar.
            this.setState ({option: option});
            this.visibility (false);
            this.props.hide_titlebar ();
        }
    }

    // Apply a left/right swipe effect to menubar.
    swipe = (invert = false) => {
        // The menubar is it actived ?
        if (this.state.visible) {
            // Contains the current option index.
            let option = this.state.option; option += (!invert ? (option < 4) ? 1 : 0 : ((option > 0) ? -1 : 0));
            // Updates the menubar active option property.
            this.setState ({option: option});
            // Selects the target menubar option.
            this.select (option);
        }
    }

    // Shows/Hides menubar.
    visibility = (visible, force = false) => {
        // Checks the passed visibility.
        if (visible !== this.state.visible || force) {
            // Menubar must be activied.
            if (visible) {
                // Getting wallet option reference.
                let wallet_option = document.querySelector ("div.wallet-option");
                // Animates the menubar container.
                BasicsTools.apply_css_animation ({name: "translate_up", duration: 200, finish: () => {
                    // Animates wallet option.
                    BasicsTools.apply_css_animation ({name: "scaleout", duration: 200, finish: () => {
                        // Infinite wallet option animation.
                        BasicsTools.apply_css_animation ({name: "bloom", delay: 5, duration: 3,
                        iteration: -1, easing: "ease-out", ref: wallet_option, unit: 's'});
                        // Animates exchange option.
                        BasicsTools.apply_css_animation ({name: "fadeout", duration: 65, finish: () => {
                            // Animates home option.
                            BasicsTools.apply_css_animation ({name: "fadeout", duration: 65, 
                            ref: document.querySelector ("div.home-option")}, {opacity: 1});
                        }, ref: document.querySelector ("div.exchange-option")}, {opacity: 1});
                        // Animates activities option.
                        BasicsTools.apply_css_animation ({name: "fadeout", duration: 65, finish: () => {
                            // Animates settings option.
                            BasicsTools.apply_css_animation ({name: "fadeout", duration: 65,
                            ref: document.querySelector ("div.settings-option")}, {opacity: 1});
                        }, ref: document.querySelector ("div.activities-option")}, {opacity: 1});
                    }, ref: wallet_option}, {transform: "scale(1)"});
                }, ref: document.querySelector ("div.menubar")}, {transform: "translateY(0)"});
            // Otherwise.
            } else {
                // Animates home option.
                BasicsTools.apply_css_animation ({name: "fadein", duration: 75, finish: () => {
                    // Animates exchange option.
                    BasicsTools.apply_css_animation ({name: "fadein", duration: 75,
                    ref: document.querySelector ("div.exchange-option")}, {opacity: 0});
                }, ref: document.querySelector ("div.home-option")}, {opacity: 0});
                // Animates settings option.
                BasicsTools.apply_css_animation ({name: "fadein", duration: 75, finish: () => {
                    // Animates activities option.
                    BasicsTools.apply_css_animation ({name: "fadein", duration: 75, finish: () => {
                        // Animates wallet option.
                        BasicsTools.apply_css_animation ({name: "scalein", duration: 200, finish: () => {
                            // Animates menubar container.
                            BasicsTools.apply_css_animation ({name: "translate_up", duration: 200, direction: "reverse",
                            ref: document.querySelector ("div.menubar")}, {transform: "translateY(140%)"});
                        }, ref: document.querySelector ("div.wallet-option")}, {transform: "scale(0)"});
                    }, ref: document.querySelector ("div.activities-option")}, {opacity: 0});
                }, ref: document.querySelector ("div.settings-option")}, {opacity: 0});
            }
            // Updates visibility state.
            this.setState ({visible: visible});
        }
    }

    // Called when this component is injected into the DOM.
    componentDidMount = () => {
        this.visibility (this.state.visible, true);
        this.select (this.state.option, false);
    }

    // Makes the component render.
    render = () => <div className = "menubar">
        <div className = "home-option menu-option" onClick = {() => this.select (0)}>
            <div className = "icon-zone" align = "center">
                <svg width = "22px" height = "22px" viewBox = "0 0 16 16" id = "option-icon">
                    <path d = {`M2.08374 9.49532V15.5066C2.08374 15.6575 2.20624 15.7803 2.35749 
                    15.7803H8.80905V10.3372H11.8397V15.7803H13.6425C13.7941 15.7803 13.9162 15.6575 13.9162 15.5066V9.49532L8.00343 
                    3.60782L2.08374 9.49532ZM6.89499 12.8731H4.1603V10.3375H6.89499V12.8731Z`} fill = "#8D8D8D"/>
                    <path d = {`M15.1147 7.33376L8.00032 0.219696L4.64407 3.57563V2.09876C4.64407 1.75376 4.36407 1.47376 4.01907 
                    1.47376C3.67407 1.47376 3.39407 1.75376 3.39407 2.09876V4.82563L0.885631 7.33376C0.580319 7.63907 0.580319 
                    8.13376 0.885631 8.43876C1.03813 8.59126 1.23813 8.66751 1.43813 8.66751C1.63813 8.66751 1.83782 8.59126 
                    1.99063 8.43907L8.00063 2.4297L14.01 8.43876C14.3153 8.74407 14.8097 8.74407 15.1147 8.43876C15.4197 
                    8.13345 15.4197 7.63876 15.1147 7.33376Z`} fill = "#8D8D8D"/>
                </svg>
            </div><div className = "text-zone" align = "center"><label id = "option-text">Accueil</label></div>
        </div>
        <div className = "exchange-option menu-option" onClick = {() => this.select (1)}>
            <div className = "icon-zone" align = "center">
                <svg width = "22px" height = "22px" viewBox = "0 0 14 18" id = "option-icon">
                    <path fillRule = "evenodd" clipRule = "evenodd" d = {`M5.75 15.875H7.625V16.5819C7.625 17.0431 7.87875 
                    17.4669 8.285 17.6844C8.69188 17.9019 9.185 17.8781 9.56813 17.6225L13.4419 15.04C13.7894 14.8081 
                    13.9981 14.4181 13.9981 14C13.9981 13.5819 13.7894 13.1919 13.4419 12.96L9.56813 10.3775C9.185 10.1219 
                    8.69188 10.0981 8.285 10.3156C7.87875 10.5331 7.625 10.9569 7.625 11.4175V12.125H5.75C4.72875 12.125 
                    3.875 11.2713 3.875 10.25C3.875 9.90501 3.595 9.625 3.25 9.625H0.750001C0.405001 9.625 0.125001 9.90501 
                    0.125001 10.25C0.125001 13.3144 2.68563 15.875 5.75 15.875ZM8.25 2.12501H6.375V1.41813C6.375 0.95688 
                    6.12125 0.53313 5.71438 0.31563C5.30813 0.0981304 4.815 0.12188 4.43125 0.377505L0.558126 2.96001C0.210001 
                    3.19188 0.00125122 3.58188 0.00125122 4.00001C0.00125122 4.41813 0.210001 4.80813 0.558126 5.04001L4.43125 
                    7.6225C4.815 7.87813 5.30813 7.90188 5.71438 7.68438C6.12125 7.46688 6.375 7.04313 6.375 6.58251V5.87501H8.25C9.27125 
                    5.87501 10.125 6.72875 10.125 7.75001C10.125 8.09501 10.405 8.375 10.75 8.375H13.25C13.5944 8.375 
                    13.875 8.09501 13.875 7.75001C13.875 4.68563 11.3138 2.12501 8.25 2.12501Z`} fill = "#8D8D8D"/>
                </svg>
            </div><div className = "text-zone" align = "center"><label id = "option-text">Échanges</label></div>
        </div>
        <div className = "wallet-option menu-option" onClick = {() => this.select (2)}>
            <div className = "icon-zone" align = "center">
                <svg height = "24px" viewBox = "0 0 48 48" width = "24px" id = "option-icon" fill = "#FFF">
                    <path d = "M0 0h48v48h-48z" fill = "none"/>
                    <path d = {`M42 36v2c0 2.21-1.79 4-4 4h-28c-2.21 0-4-1.79-4-4v-28c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 
                    4v2h-18c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h18zm-18-4h20v-16h-20v16zm8-5c-1.66 0-3-1.34-3-3s1.34-3 
                    3-3 3 1.34 3 3-1.34 3-3 3z`}/>
                </svg>
            </div>
        </div>
        <div className = "activities-option menu-option" onClick = {() => this.select (3)}>
            <div className = "icon-zone" align = "center">
                <svg width = "22px" height = "22px" viewBox = "0 0 20 18" id = "option-icon" fill = "none">
                    <path d = "M18.3333 9H15L12.5 16.5L7.50001 1.5L5.00001 9H1.66667" stroke = "#8D8D8D"
                        strokeWidth = '2' strokeLinecap = "round" strokeLinejoin = "round"/>
                </svg>
            </div><div className = "text-zone" align = "center"><label id = "option-text">Activités</label></div>
        </div>
        <div className = "settings-option menu-option" onClick = {() => this.select (4)}>
            <div className = "icon-zone" align = "center">
                <svg width = "22px" height = "22px" viewBox = "0 0 20 20" id = "option-icon">
                    <path d = {`M18.8156 7.36145L16.936 7.16248C16.9278 7.14233 16.9192 7.12219 16.911 7.10205L18.0997 5.63232C18.3005 
                    5.38391 18.2816 5.02319 18.0554 4.79736L15.2026 1.94458C14.9759 1.71753 14.6161 1.69922 14.3677 1.90064L12.898 
                    3.08899C12.8778 3.08045 12.858 3.07251 12.8378 3.06397L12.6389 1.18409C12.605 0.866087 12.337 0.625 12.0172 
                    0.625H7.98279C7.66296 0.625 7.39502 0.866088 7.36114 1.18408L7.16217 3.06396C7.14202 3.0719 7.12219 3.08044 
                    7.10205 3.08899L5.63232 1.90064C5.38361 1.69922 5.02381 1.71753 4.79736 1.94458L1.94458 4.79736C1.71844 
                    5.02319 1.69952 5.38391 1.90033 5.63232L3.08899 7.10205C3.08076 7.12219 3.07221 7.14233 3.06397 7.16248L1.18439 
                    7.36145C0.866394 7.39502 0.625 7.66296 0.625 7.98279V12.0172C0.625 12.337 0.866394 12.605 1.18439 12.6385L3.06396 
                    12.8375C3.0722 12.8577 3.08075 12.8778 3.08899 12.898L1.90032 14.3677C1.69952 14.6161 1.71844 14.9768 1.94458 
                    15.2026L4.79736 18.0554C5.02379 18.2819 5.3836 18.3002 5.63232 18.0994L7.10204 16.911C7.12219 16.9195 
                    7.14202 16.9281 7.16216 16.936L7.36114 18.8159C7.39502 19.1339 7.66296 19.375 7.98279 19.375H12.0172C12.337 
                    19.375 12.605 19.1339 12.6389 18.8159L12.8378 16.936C12.858 16.9275 12.8778 16.9196 12.898 16.911L14.3677 
                    18.0994C14.6161 18.3002 14.9759 18.2819 15.2026 18.0554L18.0554 15.2026C18.2816 14.9768 18.3005 14.6161 
                    18.0997 14.3677L16.911 12.898C16.9192 12.8778 16.9278 12.8577 16.936 12.8375L18.8156 12.6386C19.1336 
                    12.605 19.375 12.337 19.375 12.0172V7.98279C19.375 7.66296 19.1336 7.39502 18.8156 7.36145ZM18.125 11.4551L16.4227 
                    11.6351C16.1819 11.6602 15.9778 11.8225 15.8981 12.0508C15.82 12.2754 15.7263 12.5 15.6204 12.7185C15.5148 
                    12.9364 15.5447 13.1958 15.6967 13.3844L16.774 14.7162L14.7165 16.7737L13.3844 15.697C13.1958 15.5438 12.9364 
                    15.5151 12.7188 15.6207C12.4969 15.7282 12.2726 15.8209 12.0523 15.8972C11.8234 15.9766 11.6608 16.181 11.6351 
                    16.4221L11.4548 18.125H8.54523L8.36487 16.4221C8.33924 16.181 8.17658 15.9766 7.9477 15.8972C7.72614 15.8209 
                    7.50214 15.7275 7.2815 15.6207C7.06391 15.5151 6.80451 15.5438 6.61561 15.697L5.28351 16.7737L3.22601 14.7162L4.30328 
                    13.3844C4.45526 13.1958 4.48517 12.9364 4.37958 12.7185C4.27368 12.5 4.17999 12.2754 4.10187 12.0508C4.02222 
                    11.8225 3.81806 11.6602 3.57727 11.6351L1.875 11.4551V8.54492L3.57727 8.36487C3.81805 8.33984 4.02221 8.17749 
                    4.10187 7.94922C4.17999 7.72461 4.27368 7.5 4.37958 7.28149C4.48517 7.0636 4.45526 6.8042 4.30329 6.6156L3.22601 
                    5.28381L5.28351 3.22632L6.6156 4.30298C6.80451 4.45618 7.06391 4.48548 7.28149 4.37928C7.50214 4.27246 7.72614 
                    4.17908 7.94769 4.10279C8.17657 4.02344 8.33923 3.81897 8.36487 3.57789L8.54523 1.875H11.4548L11.6351 3.57788C11.6608 
                    3.81897 11.8234 4.02344 12.0523 4.10278C12.2726 4.17907 12.4969 4.27185 12.7188 4.37927C12.9364 4.48547 13.1958 
                    4.45617 13.3844 4.30297L14.7165 3.22631L16.774 5.28381L15.6967 6.61559C15.5447 6.80419 15.5148 7.06359 15.6204 
                    7.28149C15.7263 7.49999 15.82 7.7246 15.8981 7.94921C15.9778 8.17748 16.1819 8.33984 16.4227 8.36486L18.125 
                    8.54492V11.4551Z`} fill = "#8D8D8D"/>
                    <path d = {`M10 4.8938C7.18445 4.8938 4.8941 7.18445 4.8941 10C4.8941 12.8155 7.18445 15.1062 10 15.1062C12.8155 
                    15.1062 15.1059 12.8155 15.1059 10C15.1059 7.18445 12.8155 4.8938 10 4.8938ZM10 13.8562C7.87384 13.8562 6.1441 
                    12.1265 6.1441 10C6.1441 7.87354 7.87384 6.1438 10 6.1438C12.1262 6.1438 13.8559 7.87354 13.8559 10C13.8559 12.1265 
                    12.1262 13.8562 10 13.8562Z`} fill = "#8D8D8D"/>
                </svg>
            </div><div className = "text-zone" align = "center"><label id = "option-text">Paramètres</label></div>
        </div>
    </div>;
}
