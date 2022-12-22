// Creating basics tools class.
export default class BasicsTools {
    // Animates label text infos content.
    static animate_text (parent, text, interval, delay = 0, dir = 1, invert = false, finished = null) {
        // The given text is not empty.
        if (!this.is_empty (parent) && !this.is_empty (String (text).trimLeft ().trimRight ())) {
            // Contains the passed delay and removes the preview characters.
            let timeout = delay; parent.innerHTML = ''; parent.innerText = '';
            // Draws each character from the text.
            for (let j = (dir > 0 ? 0 : (text.length - 1)); (dir > 0 ? j < text.length : j >= 0); j += dir) {
                // Generates a label tag for each given character.
                let lb = document.createElement ("label"); lb.innerText = text[j]; lb.style.opacity = (!invert ? 0 : 1);
                lb.style.animation = (interval + "ms fadeout " + timeout + "ms forwards");
                lb.style.animationDirection = (!invert ? "normal" : "reverse");
                (dir > 0 ? parent.appendChild (lb) : parent.prepend (lb)); timeout += interval;
            // Animation is over.
            } if (!this.is_empty (finished)) setTimeout (() => finished (), (delay + (interval * text.length)));
        }
    }

    // Checks whether a variable is not undefined and null.
    static is_empty (attr) {return attr === undefined || attr === null || String (attr).trim ().length === 0;}

    // Creates or changes a cookie.
    static set_cookie (cname, cvalue, exdays) {
        // Creating a new date and converts the given expires date into day format.
        const date = new Date (); date.setTime (date.getTime () + (exdays * 24 * 60 * 60 * 1000));
        // Calculates the UTC date format.
        let expires = ("expires=" + date.toUTCString ());
        // Updates the target cookie.
        document.cookie = (cname + '=' + cvalue + ';' + expires + ";path=/");
    }

    // Returns the target cookie value.
    static get_cookie (cname) {
        // Separates elements.
        let name = (cname + '='); let ca = document.cookie.split (';');
        // Searches the target cookie.
        for (let i = 0; i < ca.length; i++) {
            // Searches the cookie value.
            let c = ca[i]; while (c.charAt (0) === ' ') c = c.substring (1);
            // A value has been found.
            if (c.indexOf (name) === 0) return c.substring (name.length, c.length);
        // Returns a undefined value.
        } return undefined;
    }

    // Returns a font size value with all removed gap.
    static responsive_amount (text, label_font_size, gap = 0.5) {
        // Checks entries.
        if (text !== null && text !== undefined && window.outerWidth < 423) {
            // Returns the final.
            return (Number (label_font_size) - (text.length * Number (gap)));
        // Returns the final value.
        } else return Number (label_font_size);
    }

    // Returns the passed integer as money format.
    static get_better_display (int, sep = ' ') {
        // Checks the donated value.
        if (!this.is_empty (int)) {
            // Converts the current value into integer format. Then into String format.
            int = String (parseInt (int)); if (int.length <= 3) return int;
            // Otherwise.
            else {
                // Contains the final result.
                let num = String (''); let limit = 0;
                // Groups all characters to get a money number representation.
                for (let j = (int.length - 1); j >= 0; j--) {
                    // Adds this character to global number.
                    num = ((limit < 2) ? (num.length === 0 ? int[j] : (int[j] + num)) : (sep + int[j] + num));
                    // Checks and calculates the characters limit.
                    limit = ((limit < 2) ? (limit + 1) : 0);
                // Returns the final result as a formatted money string format.
                } return num;
            }
        }
    }

    // Parses a float to get better result.
    static parse_float (value, comma = 2, separator = '.') {
        // Checks the passed value.
        if (!this.is_empty (value)) {
            // Converting the current value into string format.
            value = String ((value <= 10000000.0) ? value : parseInt (value));
            // Have us a separator ?
            if (value.includes (separator)) {
                // Splits the given float.
                let data = value.split (separator);
                // Returns the final value.
                return (this.get_better_display (data[0]) + separator + data[1].slice (0, comma));
            // Returns the final value.
            } else return this.get_better_display (value);
        }
    }

    // Returns the parsed css value of an element.
    static get_css_value (value, initial = null) {
        // Returns the final value.
        return Number (((value !== undefined && value !== null) ? value : (initial + "px")).split ('p')[0]);
    }

    // Checks value range.
    static is_range (value, min, max) {return (value >= min && value <= max);}

    // Runs css animation to an tag element.
    static apply_css_animation (data, css = {}) {
        // Getting animation iteration count.
        data.iteration = (!this.is_empty (data.iteration) ? parseInt (data.iteration) : 1);
        // Check the donated animation iteration.
        if (data.iteration !== 0) {
            // Getting animation time unit.
            data.unit = (!this.is_empty (data.unit) ? String (data.unit).trim () : "ms");
            // Getting animation delay.
            data.delay = (!this.is_empty (data.delay) ? parseFloat (data.delay) : 0.0);
            // Waiting for the user delay.
            window.setTimeout (() => {
                // Getting animation name.
                data.name = (!this.is_empty (data.name) ? String (data.name).trim () : null);
                // Getting animation duration.
                data.duration = (!this.is_empty (data.duration) ? parseFloat (data.duration) : 0.0);
                // Getting animation timing function.
                data.easing = (!this.is_empty (data.easing) ? String (data.easing).trim () : "ease-in-out");
                // Getting animation fill mode.
                data.fillmode = (!this.is_empty (data.fillmode) ? String (data.fillmode).trim () : "forwards");
                // Getting animation direction.
                data.direction = (!this.is_empty (data.direction) ? String (data.direction).trim () : "normal");
                // Getting animation play state.
                data.state = (!this.is_empty (data.state) ? String (data.state).trim () : "running");
                // Checks the tag element reference.
                if (!this.is_empty (data.ref) && data.name !== null) {
                    // Clears css animation data before running any new css animation.
                    this.clear_css_animation_data (data.ref);
                    // Apply the configured css animation.
                    data.ref.style.animationName = data.name; data.ref.style.animationDuration = (data.duration + data.unit);
                    data.ref.style.animationDirection = data.direction; data.ref.style.animationPlayState = data.state;
                    data.ref.style.animationFillMode = data.fillmode; data.ref.style.animationTimingFunction = data.easing;
                    data.ref.style.animationIterationCount = ((data.iteration < 0) ? "infinite" : data.iteration);
                    if (data.iteration < 0) data.ref.style.animationDelay = (data.delay + data.unit);
                    // Waiting for animation running.
                    if (data.iteration > 0 && data.state === "running") {
                        // Calculates the corresponding factor with the given unit.
                        let animation_factor = ((data.unit === 's') ? 1000 : 1);
                        // Waiting for animation duration.
                        window.setTimeout (() => {
                            // The current animation is it running ?
                            if (data.state === "running") {
                                // Clears css animation data.
                                this.clear_css_animation_data (data.ref);
                                // Updates element css property(ies) with the passed css data.
                                for (let property of Object.keys (css)) data.ref.style[property] = css[property];
                                // Calls a callback when animation is over.
                                if (!this.is_empty (data.finish)) data.finish ();
                            }
                        }, (data.duration * data.iteration * animation_factor));
                    }
                }
            }, ((data.iteration > 0) ? ((data.unit === 's') ? (data.delay * 1000) : data.delay) : 0.0));
        }
    }

    // Animates a text with counter method.
    static text_counter (data) {
        // Getting the old value.
        data.oval = (!this.is_empty (data.oval) ? Number (data.oval) : 0.0);
        // Getting the new value.
        data.nval = (!this.is_empty (data.nval) ? Number (data.nval) : 0.0);
        // Getting the count interval.
        data.interval = (!this.is_empty (data.interval) ? Number (data.interval) : 1000);
        // Getting the count frequence.
        data.frequence = (!this.is_empty (data.frequence) ? parseInt (data.frequence) : 10);
        // Do you want to add blink effect ?
        data.blink = (!this.is_empty (data.blink) ? Boolean (data.blink) : false);
        // Getting the blink count.
        data.blink_count = (!this.is_empty (data.blink_count) ? parseInt (data.blink_count) : 6);
        // Checks text reference value.
        if (data.oval !== data.nval) {
            // Converting the given value into an integer.
            let ov = parseInt (data.oval); let nv = parseInt (data.nval);
            // The intergers part are the same.
            if (ov === nv) {
                // The text counting process is over.
                if (!this.is_empty (data.finish)) data.finish (data.nval);
                // Runs the passed effect whether his exists.
                if (data.blink) this.apply_css_animation ({name: "text_blink", duration: 100,
                    ref: data.ref, iteration: data.blink_count, direction: "alternate"
                });
            } else {
                // Calculates the count step.
                let step = parseInt ((nv - ov) / data.frequence); let x = ((ov < nv) ? (ov + step) : (ov - step));
                // Calls "start" method for starting counting process.
                if (!this.is_empty (data.start)) data.start (x);
                // Starts the counter process.
                let counter = window.setInterval (() => {
                    // Calls the passed callback whether his exists.
                    x += step; if (!this.is_empty (data.step)) data.step (x);
                    // The target value is now here.
                    if (this.is_range (x, nv, (nv + 20)) || this.is_range (x, (nv - 20), nv)) {
                        // The text counting process is now over.
                        if (!this.is_empty (data.finish)) data.finish (data.nval);
                        // Runs the passed effect whether his exists.
                        if (data.blink) this.apply_css_animation ({name: "text_blink", duration: 100,
                            ref: data.ref, iteration: data.blink_count, direction: "alternate"
                        // Stops the counter proccess.
                        }); window.clearInterval (counter);
                    }
                }, data.interval);
            }
        }
    }

    // Deletes all target property(ies) from the given object.
    static destroy_props (props, object) {
        // Checks the passed values.
        if (!this.is_empty (props) && !this.is_empty (object)) {
            // Removes the given props from the passsed object.
            props.forEach (prop => {if (object.hasOwnProperty (prop)) delete object[prop]}); return {...object};
        // Otherwise.
        } else return undefined;
    }

    // Clears all css animation data from a tag element.
    static clear_css_animation_data (element) {
        // Checks the passed element reference.
        if (!this.is_empty (element)) {
            // Clears all css animation data from the passed tag element.
            element.style.animationName = "none"; element.style.animationDuration = "none";
            element.style.animationFillMode = "none"; element.style.animationDirection = "none";
            element.style.animationPlayState = "none"; element.style.animationIterationCount = "none";
            element.style.animationTimingFunction = "none"; element.style.animation = "none";
            element.style.animationDelay = "none";
        }
    }
}
