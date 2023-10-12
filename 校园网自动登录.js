// ==UserScript==
// @name         校园网自动链接
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://172.16.2.2/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=2.2
// @grant        none
// ==/UserScript==

function waitForElementToLoad() {
    // 判断元素是否存在，如果存在直接执行，如果不存在则延迟100毫秒
var wsx = document.querySelector('[placeholder = "工号/学号/账号"]');
    if(wsx){
        // 填写账号
        var ac = document.querySelector('[placeholder = "工号/学号/账号"]');
ac.value = '这里填写你的账号';
        //填写密码
var co = document.querySelector('[placeholder = "密码"]');
co.value = '这里填写你的密码';
        //选择运营商（联通）
document.querySelector('[value="3"]').click();
        //进行登录
document.querySelector('[value = "登录"]').click();
    }else{setTimeout(waitForElementToLoad,100)}
};
waitForElementToLoad();