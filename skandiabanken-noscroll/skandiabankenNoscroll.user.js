// ==UserScript==
// @name         Disable Skandiabankens annoying scrolling
// @version      0.1
// @match        https://secure.skandiabanken.no/*
// @grant        none
// @downloadUrl  https://github.com/ivarni/tampermonkey-troop/raw/master/skandiabanken-noscroll/skandiabankenNoScroll.user.js
// ==/UserScript==

window.scrollTo = function() {};
