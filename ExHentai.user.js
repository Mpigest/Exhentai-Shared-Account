// ==UserScript==
// @name           Exhentai公共账号
// @description    替换Exhentai的cookie，自动登录
// @version        1.4.1
// @author         福尔魔猪
// @icon           https://exhentai.org/favicon.ico
// @match          *://*.exhentai.org/*
// @match          *://exhentai.org/
// @license        MIT
// @namespace      https://github.com/MagicPigZHN/Exhentai-Shared-Account
// @compatible firefox
// @compatible chrome
// @compatible edge
// ==/UserScript==
(function(){
    'use strict';
    var expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 100);
 
    if (location.host == 'exhentai.org' && document.cookie.split(';').length < 3) {
        var img = document.createElement("img");
        img.src = "https://c4.kemono.party/data/b3/78/b378113d5d01c9f15aa40622d30035a784613c8d16d80d023e37fb477747d310.jpg?f=001560d6-17f0-4df8-98e7-244d8601dfbd.jpg";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        document.body.appendChild(img);
 
        var dialog = document.createElement("div");
        dialog.style.position = "fixed";
        dialog.style.top = "50%";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, -50%)";
        dialog.style.background = "rgba(255, 192, 203, 0.5)";
        dialog.style.padding = "20px";
        dialog.style.borderRadius = "5px";
        dialog.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.5)";
        dialog.innerHTML = "<p style='font-size: 24px; text-align: center;'>请选择公共账号：</p>";
 
        var button1 = document.createElement("button");
        button1.style.backgroundColor = "#ffd4fd";
        button1.style.margin = "10px";
        button1.innerHTML = "账号1";
        button1.onclick = function() {
            setCookie("1");
        };
        dialog.appendChild(button1);
 
        var button2 = document.createElement("button");
        button2.style.backgroundColor = "#ffd4fd";
        button2.style.margin = "10px";
        button2.innerHTML = "账号2";
        button2.onclick = function() {
            setCookie("2");
        };
        dialog.appendChild(button2);
 
        var button3 = document.createElement("button");
        button3.style.backgroundColor = "#ffd4fd";
        button3.style.margin = "10px";
        button3.innerHTML = "账号3";
        button3.onclick = function() {
            setCookie("3");
        };
        dialog.appendChild(button3);
 
        document.body.appendChild(dialog);
 
        function setCookie(account) {
            if (account == "1") {
                document.cookie = "ipb_member_id=7013610; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=1ff72e5df8f1949f2b48b49748432eca; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=298743a95; expires=" + expireDate.toUTCString();
                window.location = window.location.href;
            } else if (account == "2") {
                document.cookie = "ipb_member_id=5191636; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=544b6a81f07d356f3753032183d1fdfb; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=3fef094b8; expires=" + expireDate.toUTCString();
                window.location = window.location.href;
            } else if (account == "3") {
                document.cookie = "ipb_member_id=7013610; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=1ff72e5df8f1949f2b48b49748432eca; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=298743a95; expires=" + expireDate.toUTCString();
                window.location = window.location.href;
            } else {
                alert("无效的账号选择！");
            }
        }
    }
})();
 