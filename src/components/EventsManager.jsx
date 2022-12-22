// Dependencies.
import React, {Fragment} from "react";

// Creating a definition of events manager.
export default function EventsManager (props) {
    // Adds the target event to the target element.
    React.useEffect (() => props.reference.addEventListener (props.event, () => {
        // One or many parameters have/has been donated.
        if (props.params !== null && props.params !== undefined) props.callback (props.params);
        // Otherwise.
        else props.callback ();
    }));
    
    // Returns an empty view.
    return <Fragment></Fragment>
}
