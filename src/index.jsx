// Dependencies.
import reportWebVitals from "./reportWebVitals.js";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import React from "react";

// Gets application root reference.
ReactDOM.createRoot (document.getElementById ("root")).render (<React.StrictMode><App/></React.StrictMode>);
// Reports web vitals.
reportWebVitals ();
