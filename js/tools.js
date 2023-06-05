const usingRAF = (function () {
    let rafId, lastTime = 0;
    return function (fn, obj, delay = 0, stopTime) {
        if (typeof fn != 'function' || typeof obj != 'object' || typeof obj.stop != 'boolean') {
            // throw ('missing parameter');
            return;
        }
        rafId = window.requestAnimationFrame(passValue);
        return passValue;
        function passValue(timestamp) {
            if (stopTime && stopTime <= timestamp) {
                obj.stop = true
            }
            if (!obj.stop) {
                if (timestamp - delay >= lastTime) {
                    lastTime = timestamp;
                    fn.call(null, timestamp);
                }
                rafId = window.requestAnimationFrame(passValue);
            } else {
                window.cancelAnimationFrame(rafId);
            }
        }
    }
}());
// 单例模式
function getSingle(func) {
    var result;
    return function () {
      if (!result) {
        result = func.apply(this, arguments);
      }
      return result;
    }
  }
function Curry(fn, length) {
    var len = length || fn.length;
    return function (...args) {
        if (args.length < len) {
            return Curry.call(this, FixedParamsCurry.apply(this, [fn, ...args]), len - args.length);
        } else {
            return fn.apply(this, args);
        }
    }
    function FixedParamsCurry(fn, ..._args) {
        return function (...args) {
            return fn.apply(this, [..._args, ...args]);
        }
    }
}
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        getStyle = function (elem, prop) {
            return window.getComputedStyle(elem, null)[prop];
        }
    } else {
        getStyle = function (elem, prop) {
            return elem.currentStyle[prop];
        }
    }
    return getStyle(elem, prop);
}
function dynamicProp(obj, json, callBack) {
    // clearInterval(obj.timer);
    obj && obj.timer && (obj.timer.stop = true);
    var iSpeed, iCur;
    // obj.timer = setInterval(timer, 30);
    obj.timer = { stop: false };
    usingRAF(timer, obj.timer)
    function timer() {
        var bStop = true;
        for (var attr in json) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(obj, 'opacity')) * 100;
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            iSpeed = (json[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
            if (json[attr] != iCur) {
                bStop = false;
            }
        }
        if (bStop) {
            // clearInterval(obj.timer);
            obj.timer.stop = true;
            typeof callBack == 'function' ? callBack() : '';
        }
    }
}
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        document.onmousemove = function (e) {
            var event = e || window.event;
            elem.style.left = event.clientX - disX + 'px';
            elem.style.top = event.clientY - disY + 'px';
        };
        addEvent(document, 'mouseup', function () {
            document.onmousemove = null;
        });
    });
}

function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        addEvent = function (elem, type, handle) {
            elem.addEventListener(type, handle, false);
        }
    } else if (elem.attachEvent) {
        addEvent = function (elem, type, handle) {
            elem.attachEvent('on' + type, function () {
                handle.call(elem);
            });
        }
    } else {
        addEvent = function (elem, type, handle) {
            elem['on' + type] = handle;
        }
    }
    addEvent(elem, type, handle);
}

export const tools = {
    usingRAF,
    SINGLE: getSingle,
    CURRY: Curry,
    getStyle,
    dynamicProp,
    drag
};