// ==UserScript==
// @name         翻译助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @exclude      https://fanyi.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

// 翻译插件整合
// 为窗口添加div
var doc = document.querySelector('body');
var bbb = document.createElement('div');
var ccc = 'width:200px;height:60px;backgroundcolor:red;position:fixed;top:0;left:0;';
bbb.style.cssText = ccc;
doc.appendChild(bbb);
// 为窗口添加输入框
var ddd = document.createElement('input');
// var InputCss = 'display:block;color:red;backgroundcolor:#5f9ea08c;margin:auto;'
ddd.type = 'text';
ddd.style.display = 'block';
ddd.style.color = 'red';
ddd.style.backgroundColor = '#5f9ea08c';
ddd.style.margin = 'auto';
// ddd.style.cssText = InputCss;
bbb.appendChild(ddd);
// 添加按钮
var eee = document.createElement('input')
eee.type = 'submit';
// var SuCss = 'display:block;margin:auto:backgroundcolor:#5f9ea08c'
eee.style.display = 'block';
// eee.style.width = '30px';
eee.style.margin = 'auto';
eee.style.backgroundColor = '#5f9ea08c';
// eee.style.cssText = SuCss;
bbb.appendChild(eee);

// 添加点击按钮事件
eee.addEventListener('click',function(){
    var aa = window.location.href;
var bb = aa.split('//')
console.log(bb[1])
console.log(ddd.value)
var cc = ddd.value
    // 判断是单词还是句子
    if(cc.indexOf(' ' == -1)){
      var url = `fanyi.baidu.com/?aldtype=16047#en/zh/${cc}`
aa = aa.replace(bb[1],url);
const windowFeatures = 'width=250,height=250'
window.open(aa,'_blank',windowFeatures);
    }else if(cc.indexOf(' ' != -1)){
        cc.replace(' ','%20')
   var urls = `fanyi.baidu.com/?aldtype=16047#en/zh/${cc}`;
   aa = aa.replace(bb[1],urls);
  const windowFeatures = 'width=250,height=250'
  window.open(aa,'_blank',windowFeatures);


    }
})