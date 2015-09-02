// ==UserScript==
// @name         VG: no videos
// @description  I dont care for surprise-video-playbacks at work
// @version      0.2
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
        removeElement(findArticle(link));
    });
       
    function findArticle(el) {
        var parent = el.parentNode;
        while (parent && parent !== document) {
            if (parent.classList.contains('article-extract')) {
                return parent;
            }
            parent = parent.parentNode;
        }
    }
    
    function removeElement(el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    
}());
