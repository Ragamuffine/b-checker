
function get_user_agent() {
    if ( navigator && navigator.userAgent ) {
	try {
	    return navigator.userAgent;
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_width() {
    if ( screen && screen.width ) {
	try {
	    return String (screen.width);
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_height() {
    if ( screen && screen.height ) {
	try {
	    return String (screen.height);
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_singular_language() {
    if ( navigator && navigator.language ) {
	try {
	    return navigator.language;
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_plural_language() {
    if ( navigator && navigator.languages ) {
	try {
	    return navigator.languages.join (',');
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_browser_language() {
    if ( navigator && navigator.browserlanguage ) {
	try {
	    return navigator.browserLanguage;
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_timezone() {
    if ( Date ) {
	try {
	    return String (new Date().getTimezoneOffset());
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function layout_to_string (layout) {
    var iter = layout.keys();
    var keyop = iter.next();
    var l = [];
    while (!keyop.done) {
	l.push (keyop.value);
	keyop = iter.next();
    }
    l = l.sort();
    return l.map (function (key) { return key + '=' + layout.get (key); }).join (', ');
}

function pack_json (json) {
    var input = json.split ("\n");
    var output = [];
    for ( var i = 0; i < input.length; ) {
	if ( input[i] == '{' || input[i] == '}' ) {
	    output.push (input[i]);
	    i++;
	}
	else {
	    var s = input[i];
	    i++;
	    if ( input[i] != '}' ) {
		s = s + input[i];
		i++;
		if ( input[i] != '}' ) {
		    s = s + input[i];
		    i++;
		    if ( input[i] != '}' ) {
			s = s + input[i];
			i++;
			if ( input[i] != '}' ) {
			    s = s + input[i];
			    i++;
			}
		    }
		}
	    }
	    output.push (s);
	}
    }
    return output.join ('\n');
}

var keyboard_us_mac = {
    "KeyE": "e", "KeyD": "d", "KeyU": "u", "Minus": "-", "KeyH": "h",
    "KeyZ": "z", "Equal": "=", "KeyP": "p", "Semicolon": ";", "BracketRight": "]",
    "Slash": "/", "BracketLeft": "[", "KeyL": "l", "Digit8": "8", "KeyW": "w",
    "KeyS": "s", "Digit5": "5", "Digit9": "9", "KeyO": "o", "Period": ".",
    "Digit6": "6", "KeyV": "v", "Digit3": "3", "Backquote": "`", "KeyG": "g",
    "KeyJ": "j", "KeyQ": "q", "Digit1": "1", "KeyT": "t", "KeyY": "y",
    "Quote": "'", "IntlBackslash": "§", "Backslash": "\\", "KeyK": "k", "KeyF": "f",
    "KeyI": "i", "KeyR": "r", "KeyX": "x", "KeyA": "a", "Digit2": "2",
    "Digit7": "7", "KeyM": "m", "Digit4": "4", "Digit0": "0", "KeyN": "n",
    "KeyB": "b", "KeyC": "c", "Comma": ",", "size": 48
};

var keyboard_us_win = {
    "KeyE": "e", "KeyD": "d", "KeyU": "u", "Minus": "-", "KeyH": "h",
    "KeyZ": "z", "Equal": "=", "KeyP": "p", "Semicolon": ";", "BracketRight": "]",
    "Slash": "/", "BracketLeft": "[", "KeyL": "l", "Digit8": "8", "KeyW": "w",
    "KeyS": "s", "Digit5": "5", "Digit9": "9", "KeyO": "o", "Period": ".",
    "Digit6": "6", "KeyV": "v", "Digit3": "3", "Backquote": "`", "KeyG": "g",
    "KeyJ": "j", "KeyQ": "q", "Digit1": "1", "KeyT": "t", "KeyY": "y",
    "Quote": "'", "IntlBackslash": "\\", "Backslash": "\\", "KeyK": "k", "KeyF": "f",
    "KeyI": "i", "KeyR": "r", "KeyX": "x", "KeyA": "a", "Digit2": "2",
    "Digit7": "7", "KeyM": "m", "Digit4": "4", "Digit0": "0", "KeyN": "n",
    "KeyB": "b", "KeyC": "c", "Comma": ",", "size": 48
};

var keyboard_jp_win = {
    "KeyE": "e", "KeyD": "d", "KeyU": "u", "Minus": "-", "KeyH": "h",
    "KeyZ": "z", "Equal": "=", "KeyP": "p", "Semicolon": ";", "BracketRight": "]",
    "Slash": "/", "BracketLeft": "[", "KeyL": "l", "Digit8": "8", "KeyW": "w",
    "KeyS": "s", "Digit5": "5", "Digit9": "9", "KeyO": "o", "Period": ".",
    "Digit6": "6", "KeyV": "v", "Digit3": "3", "Backquote": "半角/全角", "KeyG": "g",
    "KeyJ": "j", "KeyQ": "q", "Digit1": "1", "KeyT": "t", "KeyY": "y",
    "Quote": "'", "IntlBackslash": "\\", "Backslash": "\\", "KeyK": "k", "KeyF": "f",
    "KeyI": "i", "KeyR": "r", "KeyX": "x", "KeyA": "a", "Digit2": "2",
    "Digit7": "7", "KeyM": "m", "Digit4": "4", "Digit0": "0", "KeyN": "n",
    "KeyB": "b", "KeyC": "c", "Comma": ",", "size": 48
};

function is_object_subsuming( o1, o2 ) {
    for ( var key in o1 ) {
	if ( Object.prototype.hasOwnProperty.call( o1, key ) ) {
	    if ( o1[key] != o2[key] )
		return false;
	}
    }
    return true;
}

function is_object_equal( o1, o2 ) {
    return is_object_subsuming( o1, o2 ) && is_object_subsuming( o2, o1 );
}

function layout_to_object (layout) {
    var iter = layout.keys();
    var keyop = iter.next();
    var o = {};
    var size = 0;
    while (!keyop.done) {
	o[keyop.value] = layout.get (keyop.value);
	size = size + 1;
	keyop = iter.next();
    }
    o["size"] = size;
    if ( is_object_equal( o, keyboard_us_win ) || is_object_equal( o, keyboard_us_mac ) ) {
	console.log (o);
	return "US";
    }
    else if ( is_object_equal( o, keyboard_jp_win ) ) {
	console.log (o);
	return "JP";
    }
    else
	return pack_json (JSON.stringify( o, null, 4 ));
}

function get_layout (callback) {
    if ( navigator && navigator.keyboard && navigator.keyboard.getLayoutMap ) {
	try {
	    navigator.keyboard.getLayoutMap()
		.then (function (layout) { callback (layout_to_object (layout)); })
		.catch (function (error) {
		    var o = { error: exn.toString() };
		    callback (JSON.stringify (o));
		});
	}
	catch (exn) {
	    var o = { error: exn.toString() };
	    callback (JSON.stringify (o));
	}
    }
    else {
	callback ("undefined");
    }
}

function get_cookie() {
    if ( navigator ) {
	try {
	    return String (navigator.cookieEnabled);
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_plugin() {
    if ( navigator && navigator.plugins && !isNaN (navigator.plugins.length) && navigator.plugins.length > 0 ) {
	try {
	    var l = [];
	    for ( var i = 0; i < Math.min( navigator.plugins.length, 16 ); i++ ) {
		if ( navigator.plugins[i].name ) {
		    l.push (String (navigator.plugins[i].name));
		}
	    }
	    return l.join (',');
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_oscpu() {
    if ( navigator && navigator.oscpu ) {
	try {
	    return String (navigator.oscpu);
	}
	catch (exn) {
	    return "(error:" + exn.toString() + ")";
	}
    }
    else {
	return "undefined";
    }
}

function get_platform() {
    if ( navigator ) {
	if ( navigator.userAgentData && navigator.userAgentData.platform ) {
	    try {
		var platform = String (navigator.userAgentData.platform);
		if ( navigator.userAgentData.mobile == true ) {
		    platform = platform + " mobile";
		}
		return platform;
	    }
	    catch (exn) {
		return "(error:" + exn.toString() + ")";
	    }
	}
	else if ( navigator.platform ) {
	    try {
		return String (navigator.platform);
	    }
	    catch (exn) {
		return "(error:" + exn.toString() + ")";
	    }
	}
	else {
	    return "undefined";
	}
    }
    else {
	return "undefined";
    }
}

function get_battery (callback) {
    if ( navigator && navigator.getBattery ) {
	try {
	    navigator.getBattery()
		.then (function (battery) { callback (String (battery.level)); })
		.catch (function (error) { callback ("(error:" + error.toString() + ")"); });
	}
	catch (exn) {
	    callback ("(error:" + exn.toString() + ")");
	}
    }
    else {
	callback ("undefined");
    }
}

function get_webdriver() {
    if ( navigator ) {
	if ( navigator.webdriver === true ) {
	    return "true";
	}
	else if ( navigator.webdriver === false ) {
	    return "false";
	}
	else {
	    return "undefined";
	}
    }
    else {
	return "undefined";
    }
}

function init() {
    var dom = document.getElementById ('user-agent');
    dom.innerText = get_user_agent();
    dom = document.getElementById ('width');
    dom.innerText = get_width();
    dom = document.getElementById ('height');
    dom.innerText = get_height();
    dom = document.getElementById ("singular_language");
    dom.innerText = get_singular_language();
    dom = document.getElementById ("plural_language");
    dom.innerText = get_plural_language();
    dom = document.getElementById ("browser_language");
    dom.innerText = get_browser_language();
    dom = document.getElementById ("timezone");
    dom.innerText = get_timezone();
    get_layout (function (layout) {
	var dom = document.getElementById ("keyboard");
	dom.innerText = layout;
    });
    dom = document.getElementById ("cookie");
    dom.innerText = get_cookie();
    dom = document.getElementById ("plugin");
    dom.innerText = get_plugin();
    dom = document.getElementById ("oscpu");
    dom.innerText = get_oscpu();
    dom = document.getElementById ("platform");
    dom.innerText = get_platform();
    get_battery (function (battery) {
	var dom = document.getElementById ("battery");
	dom.innerText = battery;
    });
    dom = document.getElementById ("webdriver");
    dom.innerText = get_webdriver();
}

document.addEventListener( "DOMContentLoaded", function (event) {
    init();
} );
