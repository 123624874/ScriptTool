// ==UserScript==
// @name         百度翻译简洁模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fanyi.baidu.com/?aldtype=16047
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==


function waitForElementToLoad() {
    var wsx = document.querySelector('.simple-dict-f');
        if(wsx){
            var aa = document.querySelector('.simple-dict-f')
    var bb = document.querySelectorAll('div')[0].remove();
    var cc = document.querySelector('body');
    cc.appendChild(aa)
        }else{setTimeout(waitForElementToLoad,1)}
    };
    waitForElementToLoad();