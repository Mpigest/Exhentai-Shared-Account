// ==UserScript==
// @name           Exhentai公共账号
// @description    替换Exhentai的cookie，自动登录
// @version        1.4.7
// @author         福尔魔猪
// @icon           https://exhentai.org/favicon.ico
// @match          *://*.exhentai.org/*
// @match          *://exhentai.org/
// @license        MIT
// @namespace      https://greasyfork.org/users/1072365
// @compatible     firefox
// @compatible     edge
// @compatible     chrome
// ==/UserScript==
(function(){
    'use strict';
    var expireDate = 新建 日期();
    expireDate.setFullYear(expireDate.getFullYear() + 100);

    if (location.host == 'exhentai.org' && document.cookie。分屏(';')。length < 3) {
        //背景
        var img = document.createElement("img");
        img.src = "https://github.com/MagicPigZHN/Exhentai-Shared-Account/blob/master/picture/background.jpg?raw=true";
        img.style。position = "fixed";
        img.style。top = "0";
        img.style。left = "0";
        img.style。width = "100%";
        img.style。height = "100%";
        img.style。objectFit = "cover";
        document.内容。appendChild(img);

        //UI窗口
        var dialog = document.createElement("div");
        dialog.style。position = "fixed";
        dialog.style。top = "50%";
        dialog.style。left = "50%";
        dialog.style。transform = "translate(-50%, -50%)";
        dialog.style。background = "rgba(255, 192, 203, 0.5)";
        dialog.style。padding = "20px";
        dialog.style。borderRadius = "5px";
        dialog.style。boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.5)";
        dialog.innerHTML = "<p style='font-size: 35px; text-align: center; font-family: \"仿宋\", sans-serif; font-weight: bold; color: #9370DB;'>请选择公共账号：</p>";

        //按钮1
        var button1 = document.createElement("button");
        button1.style。backgroundColor = "#ffd4fd";
        button1.style。margin = "10px";
        button1.style。padding = "5px 10px";
        button1.style。borderRadius = "5px";
        button1.style。border = "none";
        button1.style。cursor = "pointer";
        button1.style。fontFamily = "仿宋";
        button1.style。color = "#d058ea";
        button1.style。fontWeight = "bold";
        button1.style。fontSize = "20px";
        button1.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
        button1.style。backgroundImage = "linear-gradient(to bottom, #ffd4fd, #ffb2e8)";
        button1.innerHTML = "账号1";

        button1.onmousedown = function() {
            button1.style。boxShadow = "none";
            button1.style。transform = "translateY(2px)";
        };

        button1.onmouseup = function() {
            button1.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button1.style。transform = "none";
        };

        button1.onmouseleave = function() {
            button1.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button1.style。transform = "none";
        };

        button1.onclick = function() {
            setCookie("1");
        };

        dialog.appendChild(button1);

        //按钮2
        var button2 = document.createElement("button");
        button2.style。backgroundColor = "#ffd4fd";
        button2.style。margin = "10px";
        button2.style。padding = "5px 10px";
        button2.style。borderRadius = "5px";
        button2.style。border = "none";
        button2.style。cursor = "pointer";
        button2.style。fontFamily = "仿宋";
        button2.style。fontWeight = "bold";
        button2.style。color = "#d058ea";
        button2.style。fontSize = "20px";
        button2.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
        button2.style。backgroundImage = "linear-gradient(to bottom, #ffd4fd, #ffb2e8)";
        button2.innerHTML = "账号2";

        button2.onmousedown = function() {
            button2.style。boxShadow = "none";
            button2.style。transform = "translateY(2px)";
        };

        button2.onmouseup = function() {
            button2.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button2.style。transform = "none";
        };

        button2.onmouseleave = function() {
            button2.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button2.style。transform = "none";
        };

        button2.onclick = function() {
            setCookie("2");
        };

        dialog.appendChild(button2);

        //按钮3
        var button3 = document.createElement("button");
        button3.style。backgroundColor = "#ffd4fd";
        button3.style。margin = "10px";
        button3.style。padding = "5px 10px";
        button3.style。borderRadius = "5px";
        button3.style。border = "none";
        button3.style。cursor = "pointer";
        button3.style。fontFamily = "仿宋";
        button3.style。color = "#d058ea";
        button3.style。fontWeight = "bold";
        button3.style。fontSize = "20px";
        button3.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
        button3.style。backgroundImage = "linear-gradient(to bottom, #ffd4fd, #ffb2e8)";
        button3.innerHTML = "账号3";

        button3.onmousedown = function() {
            button3.style。boxShadow = "none";
            button3.style。transform = "translateY(2px)";
        };

        button3.onmouseup = function() {
            button3.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button3.style。transform = "none";
        };

        button3.onmouseleave = function() {
            button3.style。boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            button3.style。transform = "none";
        };

        button3.onclick = function() {
            setCookie("3");
        };

        dialog.appendChild(button3);

        document.内容。appendChild(dialog);

        //按钮--->cookie替换
        function setCookie(帐户) {
            if (account == "1") {
                document.cookie = "ipb_member_id=7013610; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=1ff72e5df8f1949f2b48b49748432eca; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=298743a95; expires=" + expireDate.toUTCString();
                document.cookie = "sk=jk48ce848x8ot0t4btceztyx5t3u; expires=" + expireDate.toUTCString();
                window.位置。reload();
            } else if (account == "2") {
                document.cookie = "ipb_member_id=5191636; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=544b6a81f07d356f3753032183d1fdfb; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=3fef094b8; expires=" + expireDate.toUTCString();
                document.cookie = "sk=9cqnaiva7o3feybrrs2qk8feawhn; expires=" + expireDate.toUTCString();
                window.位置。reload();
            } else if (account == "3") {
                document.cookie = "ipb_member_id=7317440; expires=" + expireDate.toUTCString();
                document.cookie = "ipb_pass_hash=dbba714316273efe9198992d40a20172; expires=" + expireDate.toUTCString();
                document.cookie = "igneous=a471a8815; expires=" + expireDate.toUTCString();
                document.cookie = "sk=l4j3radd014zrmdxr2lxpn1mwhwx; expires=" + expireDate.toUTCString();
                window.位置。reload();
            } else {
                alert("无效的账号选择！");
            }
        }
    } else if (location.host == 'exhentai.org' && document.cookie。分屏(';')。length >= 3){
        // 点击图标更换账号
        var icon = document.createElement('img');
        icon.src = 'https://github.com/MagicPigZHN/Exhentai-Shared-Account/blob/master/picture/icon.jpg?raw=true';
        icon.style。position = 'fixed';
        icon.style。bottom = '50px';
        icon.style。right = '5px';
        icon.style。width = '40px';
        icon.style。height = '40px';
        icon.style。borderRadius = '50%';
        icon.style。cursor = 'pointer';
        icon.style。zIndex = '9999';
        icon.style。border = '2px solid #dd95ed';
        icon.style。transition = 'transform 0.3s ease-in-out';
        document.内容。appendChild(icon);

        var isDragging = false;
        var startX = 0;
        var startY = 0;
        var initialLeft = 0;
        var initialTop = 0;

        icon.addEventListener('mousedown', startDrag);

        function startDrag(事件) {
            event.preventDefault();

            startX = event.clientX;
            startY = event.clientY;
            initialLeft = icon.offsetLeft;
            initialTop = icon.offsetTop;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        }

        function drag(事件) {
            var newLeft = initialLeft + (event.clientX - startX);
            var newTop = initialTop + (event.clientY - startY);

            // 限制图标在页面内移动范围
            var maxX = window.innerWidth - icon.offsetWidth;
            var maxY = window.innerHeight - icon.offsetHeight;
            newLeft = Math.max(0, Math.min(newLeft, maxX));
            newTop = Math.max(0, Math.min(newTop, maxY));

            icon.style。left = newLeft + 'px';
            icon.style。top = newTop + 'px';

            isDragging = true;
        }

        function stopDrag(事件) {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);

            if (!isDragging) {
                CLCCookies();
            }

            isDragging = false;
        }

        // 阻止点击事件触发清除 cookie 操作
        icon.addEventListener('click', function (事件) {
            if (isDragging) {
                event.preventDefault();
            }
            isDragging = false;
        });

        icon.addEventListener('mouseover', function () {
            icon.标题 = '更换账号';
        });

        function CLCCookies() {
            var cookies = document.cookie。分屏(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf('=');
                var 名字 = eqPos > -1 ? cookie.substr(0, eqPos)。trim() : cookie.trim();
                document.cookie = name + '=;expires=Thu, 01 May 2001 00:00:00 GMT;path=/';
            }
            window.位置。reload();
        }
    }
})();
