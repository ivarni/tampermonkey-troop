// ==UserScript==
// @name         VG: no videos
// @description  Links to videos are annoying and stupid and not always obvious
// @version      0.1
// @match        *://www.vg.no/*
// @grant        none
// @downloadUrl  https://github.com/ivarni/tampermonkey-troop/raw/master/vg-novideos/vgNovideos.user.js
// ==/UserScript==

(function() {

    var links = Array.prototype.filter.call(document.querySelectorAll('a'), function(node) {
        return (node.getAttribute('href') || '').match(/(.+direkte\.vg.?)|(.+vgtv\..?)/) !== null;
    });

    links.forEach(function(link) {
        link.style.textDecoration = 'line-through';
    });

}());
