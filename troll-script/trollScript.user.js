// ==UserScript==
// @name         Hello world
// @version      0.1
// @match        *://localhost:*/*
// @grant        none
// @downloadUrl  https://github.com/ivarni/tampermonkey-troop/raw/master/troll-script/trollScript.user.js
// ==/UserScript==

(function() {

    var imageSrcFirst = 'https://github.com/ivarni/tampermonkey-troop/raw/master/troll-script/twins1.png';
    var imageSrcSecond = 'https://github.com/ivarni/tampermonkey-troop/raw/master/troll-script/twins2.png';

    var imageWrapper = document.createElement('div');
    imageWrapper.style.width = '100%';
    imageWrapper.style.height = '100%';
    imageWrapper.style.zIndex = '9001'; //OVER 9000
    imageWrapper.style.position = 'fixed';
    imageWrapper.style.top = '0';
    imageWrapper.style.left = '0';

    var image = document.createElement('img');
    image.setAttribute('src', imageSrcFirst);
    image.style.width = '100%';
    image.style.height = '100%';

    hide();
    imageWrapper.appendChild(image);
    document.body.appendChild(imageWrapper);

    function swap() {

        image.getAttribute('src') === imageSrcFirst ? second() : first();


        function first() {
            image.setAttribute('src', imageSrcFirst);
        }

        function second() {
            image.setAttribute('src', imageSrcSecond);
        }

    }

    function show() {
        imageWrapper.style.visibility = 'visible';
    }

    function hide() {
        imageWrapper.style.visibility = 'hidden';
    }

    function speak() {
        if (!window.speechSynthesis) return;
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10];
        msg.voiceURI = 'native';
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
        msg.text = 'come play with us danny';
        msg.lang = 'en-US';
        speechSynthesis.speak(msg);
    }

    //make sure images are cached in browser
    swap();
    setTimeout(swap, 5000);

    setInterval(function() {

        setTimeout(show, 1000);
        setTimeout(speak, 1000);
        setTimeout(hide, 1250);

        setTimeout(show, 2000);
        setTimeout(hide, 2250);
        setTimeout(show, 2500);
        setTimeout(hide, 3000);

        setTimeout(swap, 3500);
        setTimeout(speak, 4000);
        setTimeout(show, 5000);
        setTimeout(hide, 5450);

    }, 30000);


}());
