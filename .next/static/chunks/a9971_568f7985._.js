(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/OwnGigs/agency/node_modules/mux-embed/dist/mux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ed
]);
var Yr = Object.create;
var ft = Object.defineProperty;
var Xr = Object.getOwnPropertyDescriptor;
var $r = Object.getOwnPropertyNames;
var Zr = Object.getPrototypeOf, ea = Object.prototype.hasOwnProperty;
var pt = function(r, e) {
    return function() {
        return r && (e = r(r = 0)), e;
    };
};
var B = function(r, e) {
    return function() {
        return e || r((e = {
            exports: {}
        }).exports, e), e.exports;
    };
};
var ta = function(r, e, t, i) {
    if (e && typeof e == "object" || typeof e == "function") for(var a = $r(e), n = 0, o = a.length, s; n < o; n++)s = a[n], !ea.call(r, s) && s !== t && ft(r, s, {
        get: (function(u) {
            return e[u];
        }).bind(null, s),
        enumerable: !(i = Xr(e, s)) || i.enumerable
    });
    return r;
};
var V = function(r, e, t) {
    return t = r != null ? Yr(Zr(r)) : {}, ta(e || !r || !r.__esModule ? ft(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r);
};
var J = B(function(ji, yt) {
    var xe;
    typeof window != "undefined" ? xe = window : ("TURBOPACK compile-time truthy", 1) ? xe = /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
    yt.exports = xe;
});
function U(r, e) {
    return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](r) : U(r, e);
}
var te = pt(function() {
    te();
});
function Ne(r) {
    "@swc/helpers - typeof";
    return r && typeof Symbol != "undefined" && r.constructor === Symbol ? "symbol" : typeof r;
}
var Je = pt(function() {});
var Ye = B(function(Ts, cr) {
    var lr = Array.prototype.slice;
    cr.exports = Pa;
    function Pa(r, e) {
        for(("length" in r) || (r = [
            r
        ]), r = lr.call(r); r.length;){
            var t = r.shift(), i = e(t);
            if (i) return i;
            t.childNodes && t.childNodes.length && (r = lr.call(t.childNodes).concat(r));
        }
    }
});
var fr = B(function(Es, _r) {
    te();
    _r.exports = me;
    function me(r, e) {
        if (!U(this, me)) return new me(r, e);
        this.data = r, this.nodeValue = r, this.length = r.length, this.ownerDocument = e || null;
    }
    me.prototype.nodeType = 8;
    me.prototype.nodeName = "#comment";
    me.prototype.toString = function() {
        return "[object Comment]";
    };
});
var vr = B(function(xs, pr) {
    te();
    pr.exports = ae;
    function ae(r, e) {
        if (!U(this, ae)) return new ae(r);
        this.data = r || "", this.length = this.data.length, this.ownerDocument = e || null;
    }
    ae.prototype.type = "DOMTextNode";
    ae.prototype.nodeType = 3;
    ae.prototype.nodeName = "#text";
    ae.prototype.toString = function() {
        return this.data;
    };
    ae.prototype.replaceData = function(e, t, i) {
        var a = this.data, n = a.substring(0, e), o = a.substring(e + t, a.length);
        this.data = n + i + o, this.length = this.data.length;
    };
});
var Xe = B(function(Ds, mr) {
    mr.exports = Ia;
    function Ia(r) {
        var e = this, t = r.type;
        r.target || (r.target = e), e.listeners || (e.listeners = {});
        var i = e.listeners[t];
        if (i) return i.forEach(function(a) {
            r.currentTarget = e, typeof a == "function" ? a(r) : a.handleEvent(r);
        });
        e.parentNode && e.parentNode.dispatchEvent(r);
    }
});
var $e = B(function(Ss, hr) {
    hr.exports = Na;
    function Na(r, e) {
        var t = this;
        t.listeners || (t.listeners = {}), t.listeners[r] || (t.listeners[r] = []), t.listeners[r].indexOf(e) === -1 && t.listeners[r].push(e);
    }
});
var Ze = B(function(Rs, yr) {
    yr.exports = La;
    function La(r, e) {
        var t = this;
        if (t.listeners && t.listeners[r]) {
            var i = t.listeners[r], a = i.indexOf(e);
            a !== -1 && i.splice(a, 1);
        }
    }
});
var wr = B(function(As, Tr) {
    Je();
    Tr.exports = gr;
    var Ca = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ];
    function gr(r) {
        switch(r.nodeType){
            case 3:
                return et(r.data);
            case 8:
                return "<!--" + r.data + "-->";
            default:
                return Ma(r);
        }
    }
    function Ma(r) {
        var e = [], t = r.tagName;
        return r.namespaceURI === "http://www.w3.org/1999/xhtml" && (t = t.toLowerCase()), e.push("<" + t + Fa(r) + Ua(r)), Ca.indexOf(t) > -1 ? e.push(" />") : (e.push(">"), r.childNodes.length ? e.push.apply(e, r.childNodes.map(gr)) : r.textContent || r.innerText ? e.push(et(r.textContent || r.innerText)) : r.innerHTML && e.push(r.innerHTML), e.push("</" + t + ">")), e.join("");
    }
    function Ha(r, e) {
        var t = Ne(r[e]);
        return e === "style" && Object.keys(r.style).length > 0 ? !0 : r.hasOwnProperty(e) && (t === "string" || t === "boolean" || t === "number") && e !== "nodeName" && e !== "className" && e !== "tagName" && e !== "textContent" && e !== "innerText" && e !== "namespaceURI" && e !== "innerHTML";
    }
    function Ba(r) {
        if (typeof r == "string") return r;
        var e = "";
        return Object.keys(r).forEach(function(t) {
            var i = r[t];
            t = t.replace(/[A-Z]/g, function(a) {
                return "-" + a.toLowerCase();
            }), e += t + ":" + i + ";";
        }), e;
    }
    function Ua(r) {
        var e = r.dataset, t = [];
        for(var i in e)t.push({
            name: "data-" + i,
            value: e[i]
        });
        return t.length ? br(t) : "";
    }
    function br(r) {
        var e = [];
        return r.forEach(function(t) {
            var i = t.name, a = t.value;
            i === "style" && (a = Ba(a)), e.push(i + '="' + Va(a) + '"');
        }), e.length ? " " + e.join(" ") : "";
    }
    function Fa(r) {
        var e = [];
        for(var t in r)Ha(r, t) && e.push({
            name: t,
            value: r[t]
        });
        for(var i in r._attributes)for(var a in r._attributes[i]){
            var n = r._attributes[i][a], o = (n.prefix ? n.prefix + ":" : "") + a;
            e.push({
                name: o,
                value: n.value
            });
        }
        return r.className && e.push({
            name: "class",
            value: r.className
        }), e.length ? br(e) : "";
    }
    function et(r) {
        var e = "";
        return typeof r == "string" ? e = r : r && (e = r.toString()), e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function Va(r) {
        return et(r).replace(/"/g, "&quot;");
    }
});
var rt = B(function(Ps, kr) {
    te();
    var tt = Ye(), Wa = Xe(), ja = $e(), Ga = Ze(), Ja = wr(), Er = "http://www.w3.org/1999/xhtml";
    kr.exports = I;
    function I(r, e, t) {
        if (!U(this, I)) return new I(r);
        var i = t === void 0 ? Er : t || null;
        this.tagName = i === Er ? String(r).toUpperCase() : r, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = e || null, this.namespaceURI = i, this._attributes = {}, this.tagName === "INPUT" && (this.type = "text");
    }
    I.prototype.type = "DOMElement";
    I.prototype.nodeType = 1;
    I.prototype.appendChild = function(e) {
        return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), e.parentNode = this, e;
    };
    I.prototype.replaceChild = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = this.childNodes.indexOf(t);
        return t.parentNode = null, this.childNodes[i] = e, e.parentNode = this, t;
    };
    I.prototype.removeChild = function(e) {
        var t = this.childNodes.indexOf(e);
        return this.childNodes.splice(t, 1), e.parentNode = null, e;
    };
    I.prototype.insertBefore = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = t == null ? -1 : this.childNodes.indexOf(t);
        return i > -1 ? this.childNodes.splice(i, 0, e) : this.childNodes.push(e), e.parentNode = this, e;
    };
    I.prototype.setAttributeNS = function(e, t, i) {
        var a = null, n = t, o = t.indexOf(":");
        if (o > -1 && (a = t.substr(0, o), n = t.substr(o + 1)), this.tagName === "INPUT" && t === "type") this.type = i;
        else {
            var s = this._attributes[e] || (this._attributes[e] = {});
            s[n] = {
                value: i,
                prefix: a
            };
        }
    };
    I.prototype.getAttributeNS = function(e, t) {
        var i = this._attributes[e], a = i && i[t] && i[t].value;
        return this.tagName === "INPUT" && t === "type" ? this.type : typeof a != "string" ? null : a;
    };
    I.prototype.removeAttributeNS = function(e, t) {
        var i = this._attributes[e];
        i && delete i[t];
    };
    I.prototype.hasAttributeNS = function(e, t) {
        var i = this._attributes[e];
        return !!i && t in i;
    };
    I.prototype.setAttribute = function(e, t) {
        return this.setAttributeNS(null, e, t);
    };
    I.prototype.getAttribute = function(e) {
        return this.getAttributeNS(null, e);
    };
    I.prototype.removeAttribute = function(e) {
        return this.removeAttributeNS(null, e);
    };
    I.prototype.hasAttribute = function(e) {
        return this.hasAttributeNS(null, e);
    };
    I.prototype.removeEventListener = Ga;
    I.prototype.addEventListener = ja;
    I.prototype.dispatchEvent = Wa;
    I.prototype.focus = function() {};
    I.prototype.toString = function() {
        return Ja(this);
    };
    I.prototype.getElementsByClassName = function(e) {
        var t = e.split(" "), i = [];
        return tt(this, function(a) {
            if (a.nodeType === 1) {
                var n = a.className || "", o = n.split(" ");
                t.every(function(s) {
                    return o.indexOf(s) !== -1;
                }) && i.push(a);
            }
        }), i;
    };
    I.prototype.getElementsByTagName = function(e) {
        e = e.toLowerCase();
        var t = [];
        return tt(this.childNodes, function(i) {
            i.nodeType === 1 && (e === "*" || i.tagName.toLowerCase() === e) && t.push(i);
        }), t;
    };
    I.prototype.contains = function(e) {
        return tt(this, function(t) {
            return e === t;
        }) || !1;
    };
});
var Dr = B(function(Ns, xr) {
    te();
    var at = rt();
    xr.exports = K;
    function K(r) {
        if (!U(this, K)) return new K;
        this.childNodes = [], this.parentNode = null, this.ownerDocument = r || null;
    }
    K.prototype.type = "DocumentFragment";
    K.prototype.nodeType = 11;
    K.prototype.nodeName = "#document-fragment";
    K.prototype.appendChild = at.prototype.appendChild;
    K.prototype.replaceChild = at.prototype.replaceChild;
    K.prototype.removeChild = at.prototype.removeChild;
    K.prototype.toString = function() {
        return this.childNodes.map(function(e) {
            return String(e);
        }).join("");
    };
});
var Rr = B(function(Ls, Sr) {
    Sr.exports = it;
    function it(r) {}
    it.prototype.initEvent = function(e, t, i) {
        this.type = e, this.bubbles = t, this.cancelable = i;
    };
    it.prototype.preventDefault = function() {};
});
var Ar = B(function(Ms, qr) {
    te();
    var Qa = Ye(), za = fr(), Ka = vr(), Re = rt(), Ya = Dr(), Xa = Rr(), $a = Xe(), Za = $e(), ei = Ze();
    qr.exports = Be;
    function Be() {
        if (!U(this, Be)) return new Be;
        this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [
            this.documentElement
        ], this.nodeType = 9;
    }
    var j = Be.prototype;
    j.createTextNode = function(e) {
        return new Ka(e, this);
    };
    j.createElementNS = function(e, t) {
        var i = e === null ? null : String(e);
        return new Re(t, this, i);
    };
    j.createElement = function(e) {
        return new Re(e, this);
    };
    j.createDocumentFragment = function() {
        return new Ya(this);
    };
    j.createEvent = function(e) {
        return new Xa(e);
    };
    j.createComment = function(e) {
        return new za(e, this);
    };
    j.getElementById = function(e) {
        e = String(e);
        var t = Qa(this.childNodes, function(i) {
            if (String(i.id) === e) return i;
        });
        return t || null;
    };
    j.getElementsByClassName = Re.prototype.getElementsByClassName;
    j.getElementsByTagName = Re.prototype.getElementsByTagName;
    j.contains = Re.prototype.contains;
    j.removeEventListener = ei;
    j.addEventListener = Za;
    j.dispatchEvent = $a;
});
var Pr = B(function(Hs, Or) {
    var ti = Ar();
    Or.exports = new ti;
});
var nt = B(function(Bs, Nr) {
    var Ir = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", ri = Pr(), qe;
    typeof document != "undefined" ? qe = document : (qe = Ir["__GLOBAL_DOCUMENT_CACHE@4"], qe || (qe = Ir["__GLOBAL_DOCUMENT_CACHE@4"] = ri));
    Nr.exports = qe;
});
function vt(r) {
    if (Array.isArray(r)) return r;
}
function mt(r, e) {
    var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
        var i = [], a = !0, n = !1, o, s;
        try {
            for(t = t.call(r); !(a = (o = t.next()).done) && (i.push(o.value), !(e && i.length === e)); a = !0);
        } catch (u) {
            n = !0, s = u;
        } finally{
            try {
                !a && t.return != null && t.return();
            } finally{
                if (n) throw s;
            }
        }
        return i;
    }
}
function ht() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ke(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for(var t = 0, i = new Array(e); t < e; t++)i[t] = r[t];
    return i;
}
function Ae(r, e) {
    if (r) {
        if (typeof r == "string") return ke(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(t);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ke(r, e);
    }
}
function H(r, e) {
    return vt(r) || mt(r, e) || Ae(r, e) || ht();
}
var be = V(J());
var Ge = V(J());
var gt = V(J()), ra = {
    now: function() {
        var r = gt.default.performance, e = r && r.timing, t = e && e.navigationStart, i = typeof t == "number" && typeof r.now == "function" ? t + r.now() : Date.now();
        return Math.round(i);
    }
}, A = ra;
var ee = function() {
    var e, t, i;
    if (typeof ((e = Ge.default.crypto) === null || e === void 0 ? void 0 : e.getRandomValues) == "function") {
        i = new Uint8Array(32), Ge.default.crypto.getRandomValues(i);
        for(var a = 0; a < 32; a++)i[a] = i[a] % 16;
    } else {
        i = [];
        for(var n = 0; n < 32; n++)i[n] = Math.random() * 16 | 0;
    }
    var o = 0;
    t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(p) {
        var b = p === "x" ? i[o] : i[o] & 3 | 8;
        return o++, b.toString(16);
    });
    var s = A.now(), u = s == null ? void 0 : s.toString(16).substring(3);
    return u ? t.substring(0, 28) + u : t;
}, Oe = function() {
    return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
};
var Q = function(e) {
    if (e && typeof e.nodeName != "undefined") return e.muxId || (e.muxId = Oe()), e.muxId;
    var t;
    try {
        t = document.querySelector(e);
    } catch (i) {}
    return t && !t.muxId && (t.muxId = e), (t == null ? void 0 : t.muxId) || e;
}, se = function(e) {
    var t;
    e && typeof e.nodeName != "undefined" ? (t = e, e = Q(t)) : t = document.querySelector(e);
    var i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
    return [
        t,
        e,
        i
    ];
};
function bt(r) {
    if (Array.isArray(r)) return ke(r);
}
function Tt(r) {
    if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function wt() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function W(r) {
    return bt(r) || Tt(r) || Ae(r) || wt();
}
var Y = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    SILENT: 5
}, Et = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, t, i, a, n, o, s = r ? [
        console,
        r
    ] : [
        console
    ], u = (t = console.trace).bind.apply(t, W(s)), p = (i = console.info).bind.apply(i, W(s)), b = (a = console.debug).bind.apply(a, W(s)), k = (n = console.warn).bind.apply(n, W(s)), y = (o = console.error).bind.apply(o, W(s)), c = e;
    return {
        trace: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.TRACE)) return u.apply(void 0, W(x));
        },
        debug: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.DEBUG)) return b.apply(void 0, W(x));
        },
        info: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.INFO)) return p.apply(void 0, W(x));
        },
        warn: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.WARN)) return k.apply(void 0, W(x));
        },
        error: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.ERROR)) return y.apply(void 0, W(x));
        },
        get level () {
            return c;
        },
        set level (v){
            v !== this.level && (c = v != null ? v : e);
        }
    };
};
var q = Et("[mux]");
var Pe = V(J());
function ce() {
    var r = Pe.default.doNotTrack || Pe.default.navigator && Pe.default.navigator.doNotTrack;
    return r === "1";
}
function g(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
}
te();
function D(r, e) {
    if (!U(r, e)) throw new TypeError("Cannot call a class as a function");
}
function kt(r, e) {
    for(var t = 0; t < e.length; t++){
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
}
function L(r, e, t) {
    return e && kt(r.prototype, e), t && kt(r, t), r;
}
function l(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}
function X(r) {
    return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, X(r);
}
function xt(r, e) {
    for(; !Object.prototype.hasOwnProperty.call(r, e) && (r = X(r), r !== null););
    return r;
}
function De(r, e, t) {
    return typeof Reflect != "undefined" && Reflect.get ? De = Reflect.get : De = function(a, n, o) {
        var s = xt(a, n);
        if (s) {
            var u = Object.getOwnPropertyDescriptor(s, n);
            return u.get ? u.get.call(o || a) : u.value;
        }
    }, De(r, e, t || r);
}
function Ie(r, e) {
    return Ie = Object.setPrototypeOf || function(i, a) {
        return i.__proto__ = a, i;
    }, Ie(r, e);
}
function Dt(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    r.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: r,
            writable: !0,
            configurable: !0
        }
    }), e && Ie(r, e);
}
function St() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch (r) {
        return !1;
    }
}
Je();
function Rt(r, e) {
    return e && (Ne(e) === "object" || typeof e == "function") ? e : g(r);
}
function qt(r) {
    var e = St();
    return function() {
        var i = X(r), a;
        if (e) {
            var n = X(this).constructor;
            a = Reflect.construct(i, arguments, n);
        } else a = i.apply(this, arguments);
        return Rt(this, a);
    };
}
var F = function(r) {
    return re(r)[0];
};
var re = function(r) {
    if (typeof r != "string" || r === "") return [
        "localhost"
    ];
    var e = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, t = r.match(e) || [], i = t[4], a;
    return i && (a = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [
        i,
        a
    ];
};
var Le = V(J()), aa = {
    exists: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e !== void 0;
    },
    domContentLoadedEventEnd: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e && e.domContentLoadedEventEnd;
    },
    navigationStart: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e && e.navigationStart;
    }
}, _e = aa;
function O(r, e, t) {
    t = t === void 0 ? 1 : t, r[e] = r[e] || 0, r[e] += t;
}
function ue(r) {
    for(var e = 1; e < arguments.length; e++){
        var t = arguments[e] != null ? arguments[e] : {}, i = Object.keys(t);
        typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable;
        }))), i.forEach(function(a) {
            l(r, a, t[a]);
        });
    }
    return r;
}
function ia(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(r);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(r, a).enumerable;
        })), t.push.apply(t, i);
    }
    return t;
}
function fe(r, e) {
    return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ia(Object(e)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    }), r;
}
var na = [
    "x-cdn",
    "content-type"
], At = [
    "x-request-id",
    "cf-ray",
    "x-amz-cf-id",
    "x-akamai-request-id"
], oa = na.concat(At);
function pe(r) {
    r = r || "";
    var e = {}, t = r.trim().split(/[\r\n]+/);
    return t.forEach(function(i) {
        if (i) {
            var a = i.split(": "), n = a.shift();
            n && (oa.indexOf(n.toLowerCase()) >= 0 || n.toLowerCase().indexOf("x-litix-") === 0) && (e[n] = a.join(": "));
        }
    }), e;
}
function de(r) {
    if (r) {
        var e = At.find(function(t) {
            return r[t] !== void 0;
        });
        return e ? r[e] : void 0;
    }
}
var sa = function(r) {
    var e = {};
    for(var t in r){
        var i = r[t], a = i["DATA-ID"].search("io.litix.data.");
        if (a !== -1) {
            var n = i["DATA-ID"].replace("io.litix.data.", "");
            e[n] = i.VALUE;
        }
    }
    return e;
}, Ce = sa;
var Me = function(r) {
    if (!r) return {};
    var e = _e.navigationStart(), t = r.loading, i = t ? t.start : r.trequest, a = t ? t.first : r.tfirst, n = t ? t.end : r.tload;
    return {
        bytesLoaded: r.total,
        requestStart: Math.round(e + i),
        responseStart: Math.round(e + a),
        responseEnd: Math.round(e + n)
    };
}, Se = function(r) {
    if (!(!r || typeof r.getAllResponseHeaders != "function")) return pe(r.getAllResponseHeaders());
}, Ot = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : void 0, n = r.log, o = r.utils.secondsToMs, s = function(m) {
        var f = parseInt(a.version), _;
        return f === 1 && m.programDateTime !== null && (_ = m.programDateTime), f === 0 && m.pdt !== null && (_ = m.pdt), _;
    };
    if (!_e.exists()) {
        n.warn("performance timing not supported. Not tracking HLS.js.");
        return;
    }
    var u = function(m, f) {
        return r.emit(e, m, f);
    }, p = function(m, f) {
        var _ = f.levels, d = f.audioTracks, h = f.url, w = f.stats, E = f.networkDetails, S = f.sessionData, N = {}, M = {};
        _.forEach(function(G, oe) {
            N[oe] = {
                width: G.width,
                height: G.height,
                bitrate: G.bitrate,
                attrs: G.attrs
            };
        }), d.forEach(function(G, oe) {
            M[oe] = {
                name: G.name,
                language: G.lang,
                bitrate: G.bitrate
            };
        });
        var P = Me(w), R = P.bytesLoaded, Z = P.requestStart, Te = P.responseStart, we = P.responseEnd;
        u("requestcompleted", fe(ue({}, Ce(S)), {
            request_event_type: m,
            request_bytes_loaded: R,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_type: "manifest",
            request_hostname: F(h),
            request_response_headers: Se(E),
            request_rendition_lists: {
                media: N,
                audio: M,
                video: {}
            }
        }));
    };
    t.on(a.Events.MANIFEST_LOADED, p);
    var b = function(m, f) {
        var _ = f.details, d = f.level, h = f.networkDetails, w = f.stats, E = Me(w), S = E.bytesLoaded, N = E.requestStart, M = E.responseStart, P = E.responseEnd, R = _.fragments[_.fragments.length - 1], Z = s(R) + o(R.duration);
        u("requestcompleted", {
            request_event_type: m,
            request_bytes_loaded: S,
            request_start: N,
            request_response_start: M,
            request_response_end: P,
            request_current_level: d,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: Se(h),
            video_holdback: _.holdBack && o(_.holdBack),
            video_part_holdback: _.partHoldBack && o(_.partHoldBack),
            video_part_target_duration: _.partTarget && o(_.partTarget),
            video_target_duration: _.targetduration && o(_.targetduration),
            video_source_is_live: _.live,
            player_manifest_newest_program_time: isNaN(Z) ? void 0 : Z
        });
    };
    t.on(a.Events.LEVEL_LOADED, b);
    var k = function(m, f) {
        var _ = f.details, d = f.networkDetails, h = f.stats, w = Me(h), E = w.bytesLoaded, S = w.requestStart, N = w.responseStart, M = w.responseEnd;
        u("requestcompleted", {
            request_event_type: m,
            request_bytes_loaded: E,
            request_start: S,
            request_response_start: N,
            request_response_end: M,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: Se(d)
        });
    };
    t.on(a.Events.AUDIO_TRACK_LOADED, k);
    var y = function(m, f) {
        var _ = f.stats, d = f.networkDetails, h = f.frag;
        _ = _ || h.stats;
        var w = Me(_), E = w.bytesLoaded, S = w.requestStart, N = w.responseStart, M = w.responseEnd, P = d ? Se(d) : void 0, R = {
            request_event_type: m,
            request_bytes_loaded: E,
            request_start: S,
            request_response_start: N,
            request_response_end: M,
            request_hostname: d ? F(d.responseURL) : void 0,
            request_id: P ? de(P) : void 0,
            request_response_headers: P,
            request_media_duration: h.duration,
            request_url: d == null ? void 0 : d.responseURL
        };
        h.type === "main" ? (R.request_type = "media", R.request_current_level = h.level, R.request_video_width = (t.levels[h.level] || {}).width, R.request_video_height = (t.levels[h.level] || {}).height, R.request_labeled_bitrate = (t.levels[h.level] || {}).bitrate) : R.request_type = h.type, u("requestcompleted", R);
    };
    t.on(a.Events.FRAG_LOADED, y);
    var c = function(m, f) {
        var _ = f.frag, d = _.start, h = s(_), w = {
            currentFragmentPDT: h,
            currentFragmentStart: o(d)
        };
        u("fragmentchange", w);
    };
    t.on(a.Events.FRAG_CHANGED, c);
    var v1 = function(m, f) {
        var _ = f.type, d = f.details, h = f.response, w = f.fatal, E = f.frag, S = f.networkDetails, N = (E == null ? void 0 : E.url) || f.url || "", M = S ? Se(S) : void 0;
        if ((d === a.ErrorDetails.MANIFEST_LOAD_ERROR || d === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT || d === a.ErrorDetails.LEVEL_LOAD_ERROR || d === a.ErrorDetails.LEVEL_LOAD_TIMEOUT || d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT) && u("requestfailed", {
            request_error: d,
            request_url: N,
            request_hostname: F(N),
            request_id: M ? de(M) : void 0,
            request_type: d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest",
            request_error_code: h == null ? void 0 : h.code,
            request_error_text: h == null ? void 0 : h.text
        }), w) {
            var P, R = "".concat(N ? "url: ".concat(N, "\n") : "") + "".concat(h && (h.code || h.text) ? "response: ".concat(h.code, ", ").concat(h.text, "\n") : "") + "".concat(f.reason ? "failure reason: ".concat(f.reason, "\n") : "") + "".concat(f.level ? "level: ".concat(f.level, "\n") : "") + "".concat(f.parent ? "parent stream controller: ".concat(f.parent, "\n") : "") + "".concat(f.buffer ? "buffer length: ".concat(f.buffer, "\n") : "") + "".concat(f.error ? "error: ".concat(f.error, "\n") : "") + "".concat(f.event ? "event: ".concat(f.event, "\n") : "") + "".concat(f.err ? "error message: ".concat((P = f.err) === null || P === void 0 ? void 0 : P.message, "\n") : "");
            u("error", {
                player_error_code: _,
                player_error_message: d,
                player_error_context: R
            });
        }
    };
    t.on(a.Events.ERROR, v1);
    var T = function(m, f) {
        var _ = f.frag, d = _ && _._url || "";
        u("requestcanceled", {
            request_event_type: m,
            request_url: d,
            request_type: "media",
            request_hostname: F(d)
        });
    };
    t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T);
    var x = function(m, f) {
        var _ = f.level, d = t.levels[_];
        if (d && d.attrs && d.attrs.BANDWIDTH) {
            var h = d.attrs.BANDWIDTH, w, E = parseFloat(d.attrs["FRAME-RATE"]);
            isNaN(E) || (w = E), h ? u("renditionchange", {
                video_source_fps: w,
                video_source_bitrate: h,
                video_source_width: d.width,
                video_source_height: d.height,
                video_source_rendition_name: d.name,
                video_source_codec: d == null ? void 0 : d.videoCodec
            }) : n.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
        }
    };
    t.on(a.Events.LEVEL_SWITCHED, x), t._stopMuxMonitor = function() {
        t.off(a.Events.MANIFEST_LOADED, p), t.off(a.Events.LEVEL_LOADED, b), t.off(a.Events.AUDIO_TRACK_LOADED, k), t.off(a.Events.FRAG_LOADED, y), t.off(a.Events.FRAG_CHANGED, c), t.off(a.Events.ERROR, v1), t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T), t.off(a.Events.LEVEL_SWITCHED, x), t.off(a.Events.DESTROYING, t._stopMuxMonitor), delete t._stopMuxMonitor;
    }, t.on(a.Events.DESTROYING, t._stopMuxMonitor);
}, Pt = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var It = function(r, e) {
    if (!r || !r.requestEndDate) return {};
    var t = F(r.url), i = r.url, a = r.bytesLoaded, n = new Date(r.requestStartDate).getTime(), o = new Date(r.firstByteDate).getTime(), s = new Date(r.requestEndDate).getTime(), u = isNaN(r.duration) ? 0 : r.duration, p = typeof e.getMetricsFor == "function" ? e.getMetricsFor(r.mediaType).HttpList : e.getDashMetrics().getHttpRequests(r.mediaType), b;
    p.length > 0 && (b = pe(p[p.length - 1]._responseHeaders || ""));
    var k = b ? de(b) : void 0;
    return {
        requestStart: n,
        requestResponseStart: o,
        requestResponseEnd: s,
        requestBytesLoaded: a,
        requestResponseHeaders: b,
        requestMediaDuration: u,
        requestHostname: t,
        requestUrl: i,
        requestId: k
    };
}, ua = function(r, e) {
    var t = e.getQualityFor(r), i = e.getCurrentTrackFor(r).bitrateList;
    return i ? {
        currentLevel: t,
        renditionWidth: i[t].width || null,
        renditionHeight: i[t].height || null,
        renditionBitrate: i[t].bandwidth
    } : {};
}, da = function(r) {
    var e;
    return (e = r.match(/.*codecs\*?="(.*)"/)) === null || e === void 0 ? void 0 : e[1];
}, la = function(e) {
    try {
        var t, i, a = (i = e.getVersion) === null || i === void 0 || (t = i.call(e)) === null || t === void 0 ? void 0 : t.split(".").map(function(n) {
            return parseInt(n);
        })[0];
        return a;
    } catch (n) {
        return !1;
    }
}, Nt = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r.log;
    if (!t || !t.on) {
        a.warn("Invalid dash.js player reference. Monitoring blocked.");
        return;
    }
    var n = la(t), o = function(_, d) {
        return r.emit(e, _, d);
    }, s = function(_) {
        var d = _.type, h = _.data, w = (h || {}).url;
        o("requestcompleted", {
            request_event_type: d,
            request_start: 0,
            request_response_start: 0,
            request_response_end: 0,
            request_bytes_loaded: -1,
            request_type: "manifest",
            request_hostname: F(w),
            request_url: w
        });
    };
    t.on("manifestLoaded", s);
    var u = {}, p = function(_) {
        if (typeof _.getRequests != "function") return null;
        var d = _.getRequests({
            state: "executed"
        });
        return d.length === 0 ? null : d[d.length - 1];
    }, b = function(_) {
        var d = _.type, h = _.fragmentModel, w = _.chunk, E = p(h);
        k({
            type: d,
            request: E,
            chunk: w
        });
    }, k = function(_) {
        var d = _.type, h = _.chunk, w = _.request, E = (h || {}).mediaInfo, S = E || {}, N = S.type, M = S.bitrateList;
        M = M || [];
        var P = {};
        M.forEach(function(Ee, z) {
            P[z] = {}, P[z].width = Ee.width, P[z].height = Ee.height, P[z].bitrate = Ee.bandwidth, P[z].attrs = {};
        }), N === "video" ? u.video = P : N === "audio" ? u.audio = P : u.media = P;
        var R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, G = R.requestResponseHeaders, oe = R.requestMediaDuration, Ve = R.requestHostname, We = R.requestUrl, je = R.requestId;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: -1,
            request_type: N + "_init",
            request_response_headers: G,
            request_hostname: Ve,
            request_id: je,
            request_url: We,
            request_media_duration: oe,
            request_rendition_lists: u
        });
    };
    n >= 4 ? t.on("initFragmentLoaded", k) : t.on("initFragmentLoaded", b);
    var y = function(_) {
        var d = _.type, h = _.fragmentModel, w = _.chunk, E = p(h);
        c({
            type: d,
            request: E,
            chunk: w
        });
    }, c = function(_) {
        var d = _.type, h = _.chunk, w = _.request, E = h || {}, S = E.mediaInfo, N = E.start, M = S || {}, P = M.type, R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, G = R.requestBytesLoaded, oe = R.requestResponseHeaders, Ve = R.requestMediaDuration, We = R.requestHostname, je = R.requestUrl, Ee = R.requestId, z = ua(P, t), Jr = z.currentLevel, Qr = z.renditionWidth, zr = z.renditionHeight, Kr = z.renditionBitrate;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: G,
            request_type: P,
            request_response_headers: oe,
            request_hostname: We,
            request_id: Ee,
            request_url: je,
            request_media_start_time: N,
            request_media_duration: Ve,
            request_current_level: Jr,
            request_labeled_bitrate: Kr,
            request_video_width: Qr,
            request_video_height: zr
        });
    };
    n >= 4 ? t.on("mediaFragmentLoaded", c) : t.on("mediaFragmentLoaded", y);
    var v1 = {
        video: void 0,
        audio: void 0,
        totalBitrate: void 0
    }, T = function() {
        if (v1.video && typeof v1.video.bitrate == "number") {
            if (!(v1.video.width && v1.video.height)) {
                a.warn("have bitrate info for video but missing width/height");
                return;
            }
            var _ = v1.video.bitrate;
            if (v1.audio && typeof v1.audio.bitrate == "number" && (_ += v1.audio.bitrate), _ !== v1.totalBitrate) return v1.totalBitrate = _, {
                video_source_bitrate: _,
                video_source_height: v1.video.height,
                video_source_width: v1.video.width,
                video_source_codec: da(v1.video.codec)
            };
        }
    }, x = function(_, d, h) {
        if (typeof _.newQuality != "number") {
            a.warn("missing evt.newQuality in qualityChangeRendered event", _);
            return;
        }
        var w = _.mediaType;
        if (w === "audio" || w === "video") {
            var E = t.getBitrateInfoListFor(w).find(function(N) {
                var M = N.qualityIndex;
                return M === _.newQuality;
            });
            if (!(E && typeof E.bitrate == "number")) {
                a.warn("missing bitrate info for ".concat(w));
                return;
            }
            v1[w] = fe(ue({}, E), {
                codec: t.getCurrentTrackFor(w).codec
            });
            var S = T();
            S && o("renditionchange", S);
        }
    };
    t.on("qualityChangeRendered", x);
    var m = function(_) {
        var d = _.request, h = _.mediaType;
        d = d || {}, o("requestcanceled", {
            request_event_type: d.type + "_" + d.action,
            request_url: d.url,
            request_type: h,
            request_hostname: F(d.url)
        });
    };
    t.on("fragmentLoadingAbandoned", m);
    var f = function(_) {
        var d = _.error, h, w, E = (d == null || (h = d.data) === null || h === void 0 ? void 0 : h.request) || {}, S = (d == null || (w = d.data) === null || w === void 0 ? void 0 : w.response) || {};
        (d == null ? void 0 : d.code) === 27 && o("requestfailed", {
            request_error: E.type + "_" + E.action,
            request_url: E.url,
            request_hostname: F(E.url),
            request_type: E.mediaType,
            request_error_code: S.status,
            request_error_text: S.statusText
        });
        var N = "".concat(E != null && E.url ? "url: ".concat(E.url, "\n") : "") + "".concat(S != null && S.status || S != null && S.statusText ? "response: ".concat(S == null ? void 0 : S.status, ", ").concat(S == null ? void 0 : S.statusText, "\n") : "");
        o("error", {
            player_error_code: d == null ? void 0 : d.code,
            player_error_message: d == null ? void 0 : d.message,
            player_error_context: N
        });
    };
    t.on("error", f), t._stopMuxMonitor = function() {
        t.off("manifestLoaded", s), t.off("initFragmentLoaded", k), t.off("mediaFragmentLoaded", c), t.off("qualityChangeRendered", x), t.off("error", f), t.off("fragmentLoadingAbandoned", m), delete t._stopMuxMonitor;
    };
}, Lt = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var Ct = 0, ca = function() {
    "use strict";
    function r() {
        D(this, r), l(this, "_listeners", void 0);
    }
    return L(r, [
        {
            key: "on",
            value: function(t, i, a) {
                return i._eventEmitterGuid = i._eventEmitterGuid || ++Ct, this._listeners = this._listeners || {}, this._listeners[t] = this._listeners[t] || [], a && (i = i.bind(a)), this._listeners[t].push(i), i;
            }
        },
        {
            key: "off",
            value: function(t, i) {
                var a = this._listeners && this._listeners[t];
                a && a.forEach(function(n, o) {
                    n._eventEmitterGuid === i._eventEmitterGuid && a.splice(o, 1);
                });
            }
        },
        {
            key: "one",
            value: function(t, i, a) {
                var n = this;
                i._eventEmitterGuid = i._eventEmitterGuid || ++Ct;
                var o = function() {
                    n.off(t, o), i.apply(a || this, arguments);
                };
                o._eventEmitterGuid = i._eventEmitterGuid, this.on(t, o);
            }
        },
        {
            key: "emit",
            value: function(t, i) {
                var a = this;
                if (this._listeners) {
                    i = i || {};
                    var n = this._listeners["before*"] || [], o = this._listeners[t] || [], s = this._listeners["after" + t] || [], u = function(p, b) {
                        p = p.slice(), p.forEach(function(k) {
                            k.call(a, {
                                type: t
                            }, b);
                        });
                    };
                    u(n, i), u(o, i), u(s, i);
                }
            }
        }
    ]), r;
}(), Mt = ca;
var He = V(J()), _a = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_playbackHeartbeatInterval", void 0), l(this, "_playheadShouldBeProgressing", void 0), l(this, "pm", void 0), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, e.on("playing", function() {
            t._playheadShouldBeProgressing = !0;
        }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
            e.data.player_is_paused ? t._stopPlaybackHeartbeatInterval() : t._startPlaybackHeartbeatInterval();
        }), e.on("timeupdate", function() {
            t._playbackHeartbeatInterval !== null && e.emit("playbackheartbeat");
        }), e.on("devicesleep", function(i, a) {
            t._playbackHeartbeatInterval !== null && (He.default.clearInterval(t._playbackHeartbeatInterval), e.emit("playbackheartbeatend", {
                viewer_time: a.viewer_time
            }), t._playbackHeartbeatInterval = null);
        });
    }
    return L(r, [
        {
            key: "_startPlaybackHeartbeatInterval",
            value: function() {
                var t = this;
                this._playbackHeartbeatInterval === null && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = He.default.setInterval(function() {
                    t.pm.emit("playbackheartbeat");
                }, this.pm.playbackHeartbeatTime));
            }
        },
        {
            key: "_stopPlaybackHeartbeatInterval",
            value: function() {
                this._playheadShouldBeProgressing = !1, this._playbackHeartbeatInterval !== null && (He.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
            }
        }
    ]), r;
}(), Ht = _a;
var fa = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "viewErrored", void 0), e.on("viewinit", function() {
        t.viewErrored = !1;
    }), e.on("error", function(i, a) {
        try {
            var n = e.errorTranslator({
                player_error_code: a.player_error_code,
                player_error_message: a.player_error_message,
                player_error_context: a.player_error_context,
                player_error_severity: a.player_error_severity,
                player_error_business_exception: a.player_error_business_exception
            });
            n && (e.data.player_error_code = n.player_error_code || a.player_error_code, e.data.player_error_message = n.player_error_message || a.player_error_message, e.data.player_error_context = n.player_error_context || a.player_error_context, e.data.player_error_severity = n.player_error_severity || a.player_error_severity, e.data.player_error_business_exception = n.player_error_business_exception || a.player_error_business_exception, t.viewErrored = !0);
        } catch (o) {
            e.mux.log.warn("Exception in error translator callback.", o), t.viewErrored = !0;
        }
    }), e.on("aftererror", function() {
        var i, a, n, o, s;
        (i = e.data) === null || i === void 0 || delete i.player_error_code, (a = e.data) === null || a === void 0 || delete a.player_error_message, (n = e.data) === null || n === void 0 || delete n.player_error_context, (o = e.data) === null || o === void 0 || delete o.player_error_severity, (s = e.data) === null || s === void 0 || delete s.player_error_business_exception;
    });
}, Bt = fa;
var pa = function() {
    "use strict";
    function r(e) {
        D(this, r), l(this, "_watchTimeTrackerLastCheckedTime", void 0), l(this, "pm", void 0), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
    }
    return L(r, [
        {
            key: "_updateWatchTime",
            value: function(t, i) {
                var a = i.viewer_time;
                this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = a), O(this.pm.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a;
            }
        },
        {
            key: "_clearWatchTimeState",
            value: function(t, i) {
                this._updateWatchTime(t, i), this._watchTimeTrackerLastCheckedTime = null;
            }
        }
    ]), r;
}(), Ut = pa;
var va = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_playbackTimeTrackerLastPlayheadPosition", void 0), l(this, "_lastTime", void 0), l(this, "_isAdPlaying", void 0), l(this, "_callbackUpdatePlaybackTime", void 0), l(this, "pm", void 0), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = A.now(), this._isAdPlaying = !1, this._callbackUpdatePlaybackTime = null;
        var i = this._startPlaybackTimeTracking.bind(this);
        e.on("playing", i), e.on("adplaying", i), e.on("seeked", i);
        var a = this._stopPlaybackTimeTracking.bind(this);
        e.on("playbackheartbeatend", a), e.on("seeking", a), e.on("adplaying", function() {
            t._isAdPlaying = !0;
        }), e.on("adended", function() {
            t._isAdPlaying = !1;
        }), e.on("adpause", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakstart", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakend", function() {
            t._isAdPlaying = !1;
        }), e.on("adplay", function() {
            t._isAdPlaying = !1;
        }), e.on("viewinit", function() {
            t._playbackTimeTrackerLastPlayheadPosition = -1, t._lastTime = A.now(), t._isAdPlaying = !1, t._callbackUpdatePlaybackTime = null;
        });
    }
    return L(r, [
        {
            key: "_startPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime === null && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
            }
        },
        {
            key: "_stopPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1);
            }
        },
        {
            key: "_updatePlaybackTime",
            value: function() {
                var t = this.pm.data.player_playhead_time, i = A.now(), a = -1;
                this._playbackTimeTrackerLastPlayheadPosition >= 0 && t > this._playbackTimeTrackerLastPlayheadPosition ? a = t - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (a = i - this._lastTime), a > 0 && a <= 1e3 && O(this.pm.data, "view_content_playback_time", a), this._playbackTimeTrackerLastPlayheadPosition = t, this._lastTime = i;
            }
        }
    ]), r;
}(), Ft = va;
var ma = function() {
    "use strict";
    function r(e) {
        D(this, r), l(this, "pm", void 0), this.pm = e;
        var t = this._updatePlayheadTime.bind(this);
        e.on("playbackheartbeat", t), e.on("playbackheartbeatend", t), e.on("timeupdate", t), e.on("destroy", function() {
            e.off("timeupdate", t);
        });
    }
    return L(r, [
        {
            key: "_updateMaxPlayheadPosition",
            value: function() {
                this.pm.data.view_max_playhead_position = typeof this.pm.data.view_max_playhead_position == "undefined" ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
            }
        },
        {
            key: "_updatePlayheadTime",
            value: function(t, i) {
                var a = this, n = function() {
                    a.pm.currentFragmentPDT && a.pm.currentFragmentStart && (a.pm.data.player_program_time = a.pm.currentFragmentPDT + a.pm.data.player_playhead_time - a.pm.currentFragmentStart);
                };
                if (i && i.player_playhead_time) this.pm.data.player_playhead_time = i.player_playhead_time, n(), this._updateMaxPlayheadPosition();
                else if (this.pm.getPlayheadTime) {
                    var o = this.pm.getPlayheadTime();
                    typeof o != "undefined" && (this.pm.data.player_playhead_time = o, n(), this._updateMaxPlayheadPosition());
                }
            }
        }
    ]), r;
}(), Vt = ma;
var Wt = 5 * 60 * 1e3, ha = function r(e) {
    "use strict";
    if (D(this, r), !e.disableRebufferTracking) {
        var t, i = function(n, o) {
            a(o), t = void 0;
        }, a = function(n) {
            if (t) {
                var o = n.viewer_time - t;
                O(e.data, "view_rebuffer_duration", o), t = n.viewer_time, e.data.view_rebuffer_duration > Wt && (e.emit("viewend"), e.send("viewend"), e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Wt, "ms, future events will be ignored unless a programchange or videochange occurs.")));
            }
            e.data.view_watch_time >= 0 && e.data.view_rebuffer_count > 0 && (e.data.view_rebuffer_frequency = e.data.view_rebuffer_count / e.data.view_watch_time, e.data.view_rebuffer_percentage = e.data.view_rebuffer_duration / e.data.view_watch_time);
        };
        e.on("playbackheartbeat", function(n, o) {
            return a(o);
        }), e.on("rebufferstart", function(n, o) {
            t || (O(e.data, "view_rebuffer_count", 1), t = o.viewer_time, e.one("rebufferend", i));
        }), e.on("viewinit", function() {
            t = void 0, e.off("rebufferend", i);
        });
    }
}, jt = ha;
var ya = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_lastCheckedTime", void 0), l(this, "_lastPlayheadTime", void 0), l(this, "_lastPlayheadTimeUpdatedTime", void 0), l(this, "_rebuffering", void 0), l(this, "pm", void 0), this.pm = e, !(e.disableRebufferTracking || e.disablePlayheadRebufferTracking) && (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
            t._cleanupRebufferTracker(null, {
                viewer_time: A.now()
            });
        }));
    }
    return L(r, [
        {
            key: "_checkIfRebuffering",
            value: function(t, i) {
                if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) {
                    this._cleanupRebufferTracker(t, i);
                    return;
                }
                if (this._lastCheckedTime === null) {
                    this._prepareRebufferTrackerState(i.viewer_time);
                    return;
                }
                if (this._lastPlayheadTime !== this.pm.data.player_playhead_time) {
                    this._cleanupRebufferTracker(t, i, !0);
                    return;
                }
                var a = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                typeof this.pm.sustainedRebufferThreshold == "number" && a >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                    viewer_time: this._lastPlayheadTimeUpdatedTime
                }))), this._lastCheckedTime = i.viewer_time;
            }
        },
        {
            key: "_clearRebufferTrackerState",
            value: function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
            }
        },
        {
            key: "_prepareRebufferTrackerState",
            value: function(t) {
                this._lastCheckedTime = t, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = t;
            }
        },
        {
            key: "_cleanupRebufferTracker",
            value: function(t, i) {
                var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                    viewer_time: i.viewer_time
                });
                else {
                    if (this._lastCheckedTime === null) return;
                    var n = this.pm.data.player_playhead_time - this._lastPlayheadTime, o = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    typeof this.pm.minimumRebufferDuration == "number" && n > 0 && o - n > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime
                    }), this.pm.emit("rebufferend", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime + o - n
                    }));
                }
                a ? this._prepareRebufferTrackerState(i.viewer_time) : this._clearRebufferTrackerState();
            }
        }
    ]), r;
}(), Gt = ya;
var ga = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "NAVIGATION_START", void 0), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            var i = e.data, a = i.view_id;
            if (!i.view_program_changed) {
                var n = function(o, s) {
                    var u = s.viewer_time;
                    o.type === "playing" && typeof e.data.view_time_to_first_frame == "undefined" ? t.calculateTimeToFirstFrame(u || A.now(), a) : o.type === "adplaying" && (typeof e.data.view_time_to_first_frame == "undefined" || t._inPrerollPosition()) && t.calculateTimeToFirstFrame(u || A.now(), a);
                };
                e.one("playing", n), e.one("adplaying", n), e.one("viewend", function() {
                    e.off("playing", n), e.off("adplaying", n);
                });
            }
        });
    }
    return L(r, [
        {
            key: "_inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "calculateTimeToFirstFrame",
            value: function(t, i) {
                i === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                    viewer_time: t
                }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START));
            }
        }
    ]), r;
}(), Jt = ga;
var ba = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "_lastPlayerHeight", void 0), l(this, "_lastPlayerWidth", void 0), l(this, "_lastPlayheadPosition", void 0), l(this, "_lastSourceHeight", void 0), l(this, "_lastSourceWidth", void 0), e.on("viewinit", function() {
        t._lastPlayheadPosition = -1;
    });
    var i = [
        "pause",
        "rebufferstart",
        "seeking",
        "error",
        "adbreakstart",
        "hb",
        "renditionchange",
        "orientationchange",
        "viewend"
    ], a = [
        "playing",
        "hb",
        "renditionchange",
        "orientationchange"
    ];
    i.forEach(function(n) {
        e.on(n, function() {
            if (t._lastPlayheadPosition >= 0 && e.data.player_playhead_time >= 0 && t._lastPlayerWidth >= 0 && t._lastSourceWidth > 0 && t._lastPlayerHeight >= 0 && t._lastSourceHeight > 0) {
                var o = e.data.player_playhead_time - t._lastPlayheadPosition;
                if (o < 0) {
                    t._lastPlayheadPosition = -1;
                    return;
                }
                var s = Math.min(t._lastPlayerWidth / t._lastSourceWidth, t._lastPlayerHeight / t._lastSourceHeight), u = Math.max(0, s - 1), p = Math.max(0, 1 - s);
                e.data.view_max_upscale_percentage = Math.max(e.data.view_max_upscale_percentage || 0, u), e.data.view_max_downscale_percentage = Math.max(e.data.view_max_downscale_percentage || 0, p), O(e.data, "view_total_content_playback_time", o), O(e.data, "view_total_upscaling", u * o), O(e.data, "view_total_downscaling", p * o);
            }
            t._lastPlayheadPosition = -1;
        });
    }), a.forEach(function(n) {
        e.on(n, function() {
            t._lastPlayheadPosition = e.data.player_playhead_time, t._lastPlayerWidth = e.data.player_width, t._lastPlayerHeight = e.data.player_height, t._lastSourceWidth = e.data.video_source_width, t._lastSourceHeight = e.data.video_source_height;
        });
    });
}, Qt = ba;
var Ta = 2e3, wa = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "isSeeking", void 0), this.isSeeking = !1;
    var i = -1, a = function() {
        var n = A.now(), o = (e.data.viewer_time || n) - (i || n);
        O(e.data, "view_seek_duration", o), e.data.view_max_seek_time = Math.max(e.data.view_max_seek_time || 0, o), t.isSeeking = !1, i = -1;
    };
    e.on("seeking", function(n, o) {
        if (Object.assign(e.data, o), t.isSeeking && o.viewer_time - i <= Ta) {
            i = o.viewer_time;
            return;
        }
        t.isSeeking && a(), t.isSeeking = !0, i = o.viewer_time, O(e.data, "view_seek_count", 1), e.send("seeking");
    }), e.on("seeked", function() {
        a();
    }), e.on("viewend", function() {
        t.isSeeking && (a(), e.send("seeked")), t.isSeeking = !1, i = -1;
    });
}, zt = wa;
var Kt = function(e, t) {
    e.push(t), e.sort(function(i, a) {
        return i.viewer_time - a.viewer_time;
    });
}, Ea = [
    "adbreakstart",
    "adrequest",
    "adresponse",
    "adplay",
    "adplaying",
    "adpause",
    "adended",
    "adbreakend",
    "aderror",
    "adclicked",
    "adskipped"
], ka = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_adHasPlayed", void 0), l(this, "_adRequests", void 0), l(this, "_adResponses", void 0), l(this, "_currentAdRequestNumber", void 0), l(this, "_currentAdResponseNumber", void 0), l(this, "_prerollPlayTime", void 0), l(this, "_wouldBeNewAdPlay", void 0), l(this, "isAdBreak", void 0), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            t.isAdBreak = !1, t._currentAdRequestNumber = 0, t._currentAdResponseNumber = 0, t._adRequests = [], t._adResponses = [], t._adHasPlayed = !1, t._wouldBeNewAdPlay = !0, t._prerollPlayTime = void 0;
        }), Ea.forEach(function(a) {
            return e.on(a, t._updateAdData.bind(t));
        });
        var i = function() {
            t.isAdBreak = !1;
        };
        e.on("adbreakstart", function() {
            t.isAdBreak = !0;
        }), e.on("play", i), e.on("playing", i), e.on("viewend", i), e.on("adrequest", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdRequestNumber++
            }, n), Kt(t._adRequests, n), O(e.data, "view_ad_request_count"), t.inPrerollPosition() && (e.data.view_preroll_requested = !0, t._adHasPlayed || O(e.data, "view_preroll_request_count"));
        }), e.on("adresponse", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdResponseNumber++
            }, n), Kt(t._adResponses, n);
            var o = t.findAdRequest(n.ad_request_id);
            o && O(e.data, "view_ad_request_time", Math.max(0, n.viewer_time - o.viewer_time));
        }), e.on("adplay", function(a, n) {
            t._adHasPlayed = !0, t._wouldBeNewAdPlay && (t._wouldBeNewAdPlay = !1, O(e.data, "view_ad_played_count")), t.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = !0, t._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, n.viewer_time - t._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, n.viewer_time - e.data.view_start)), t._prerollPlayTime = n.viewer_time);
        }), e.on("adplaying", function(a, n) {
            t.inPrerollPosition() && typeof e.data.view_preroll_load_time == "undefined" && typeof t._prerollPlayTime != "undefined" && (e.data.view_preroll_load_time = n.viewer_time - t._prerollPlayTime, e.data.view_startup_preroll_load_time = n.viewer_time - t._prerollPlayTime);
        }), e.on("adclicked", function(a, n) {
            t._wouldBeNewAdPlay || O(e.data, "view_ad_clicked_count");
        }), e.on("adskipped", function(a, n) {
            t._wouldBeNewAdPlay || O(e.data, "view_ad_skipped_count");
        }), e.on("adended", function() {
            t._wouldBeNewAdPlay = !0;
        }), e.on("aderror", function() {
            t._wouldBeNewAdPlay = !0;
        });
    }
    return L(r, [
        {
            key: "inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "findAdRequest",
            value: function(t) {
                for(var i = 0; i < this._adRequests.length; i++)if (this._adRequests[i].ad_request_id === t) return this._adRequests[i];
            }
        },
        {
            key: "_updateAdData",
            value: function(t, i) {
                if (this.inPrerollPosition()) {
                    if (!this.pm.data.view_preroll_ad_tag_hostname && i.ad_tag_url) {
                        var a = H(re(i.ad_tag_url), 2), n = a[0], o = a[1];
                        this.pm.data.view_preroll_ad_tag_domain = o, this.pm.data.view_preroll_ad_tag_hostname = n;
                    }
                    if (!this.pm.data.view_preroll_ad_asset_hostname && i.ad_asset_url) {
                        var s = H(re(i.ad_asset_url), 2), u = s[0], p = s[1];
                        this.pm.data.view_preroll_ad_asset_domain = p, this.pm.data.view_preroll_ad_asset_hostname = u;
                    }
                }
                this.pm.data.ad_asset_url = i == null ? void 0 : i.ad_asset_url, this.pm.data.ad_tag_url = i == null ? void 0 : i.ad_tag_url, this.pm.data.ad_creative_id = i == null ? void 0 : i.ad_creative_id, this.pm.data.ad_id = i == null ? void 0 : i.ad_id, this.pm.data.ad_universal_id = i == null ? void 0 : i.ad_universal_id;
            }
        }
    ]), r;
}(), Yt = ka;
var Qe = V(J());
var xa = function r(e) {
    "use strict";
    D(this, r);
    var t, i, a = function() {
        e.disableRebufferTracking || (O(e.data, "view_waiting_rebuffer_count", 1), t = A.now(), i = Qe.default.setInterval(function() {
            if (t) {
                var p = A.now();
                O(e.data, "view_waiting_rebuffer_duration", p - t), t = p;
            }
        }, 250));
    }, n = function() {
        e.disableRebufferTracking || t && (O(e.data, "view_waiting_rebuffer_duration", A.now() - t), t = !1, Qe.default.clearInterval(i));
    }, o = !1, s = function() {
        o = !0;
    }, u = function() {
        o = !1, n();
    };
    e.on("waiting", function() {
        o && a();
    }), e.on("playing", function() {
        n(), s();
    }), e.on("pause", u), e.on("seeking", u);
}, Xt = xa;
var Da = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "lastWallClockTime", void 0);
    var i = function() {
        t.lastWallClockTime = A.now(), e.on("before*", a);
    }, a = function(n) {
        var o = A.now(), s = t.lastWallClockTime;
        t.lastWallClockTime = o, o - s > 3e4 && (e.emit("devicesleep", {
            viewer_time: s
        }), Object.assign(e.data, {
            viewer_time: s
        }), e.send("devicesleep"), e.emit("devicewake", {
            viewer_time: o
        }), Object.assign(e.data, {
            viewer_time: o
        }), e.send("devicewake"));
    };
    e.one("playbackheartbeat", i), e.on("playbackheartbeatend", function() {
        e.off("before*", a), e.one("playbackheartbeat", i);
    });
}, $t = Da;
var Ue = V(J());
var ze = function(r) {
    return r();
}(function() {
    var r = function() {
        for(var i = 0, a = {}; i < arguments.length; i++){
            var n = arguments[i];
            for(var o in n)a[o] = n[o];
        }
        return a;
    };
    function e(t) {
        function i(a, n, o) {
            var s;
            if (typeof document != "undefined") {
                if (arguments.length > 1) {
                    if (o = r({
                        path: "/"
                    }, i.defaults, o), typeof o.expires == "number") {
                        var u = new Date;
                        u.setMilliseconds(u.getMilliseconds() + o.expires * 864e5), o.expires = u;
                    }
                    try {
                        s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s);
                    } catch (T) {}
                    return t.write ? n = t.write(n, a) : n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), a = encodeURIComponent(String(a)), a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), a = a.replace(/[\(\)]/g, escape), document.cookie = [
                        a,
                        "=",
                        n,
                        o.expires ? "; expires=" + o.expires.toUTCString() : "",
                        o.path ? "; path=" + o.path : "",
                        o.domain ? "; domain=" + o.domain : "",
                        o.secure ? "; secure" : ""
                    ].join("");
                }
                a || (s = {});
                for(var p = document.cookie ? document.cookie.split("; ") : [], b = /(%[0-9A-Z]{2})+/g, k = 0; k < p.length; k++){
                    var y = p[k].split("="), c = y.slice(1).join("=");
                    c.charAt(0) === '"' && (c = c.slice(1, -1));
                    try {
                        var v1 = y[0].replace(b, decodeURIComponent);
                        if (c = t.read ? t.read(c, v1) : t(c, v1) || c.replace(b, decodeURIComponent), this.json) try {
                            c = JSON.parse(c);
                        } catch (T) {}
                        if (a === v1) {
                            s = c;
                            break;
                        }
                        a || (s[v1] = c);
                    } catch (T) {}
                }
                return s;
            }
        }
        return i.set = i, i.get = function(a) {
            return i.call(i, a);
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments));
        }, i.defaults = {}, i.remove = function(a, n) {
            i(a, "", r(n, {
                expires: -1
            }));
        }, i.withConverter = e, i;
    }
    return e(function() {});
});
var Zt = "muxData", Sa = function(r) {
    return Object.entries(r).map(function(e) {
        var t = H(e, 2), i = t[0], a = t[1];
        return "".concat(i, "=").concat(a);
    }).join("&");
}, Ra = function(r) {
    return r.split("&").reduce(function(e, t) {
        var i = H(t.split("="), 2), a = i[0], n = i[1], o = +n, s = n && o == n ? o : n;
        return e[a] = s, e;
    }, {});
}, er = function() {
    var e;
    try {
        e = Ra(ze.get(Zt) || "");
    } catch (t) {
        e = {};
    }
    return e;
}, tr = function(e) {
    try {
        ze.set(Zt, Sa(e), {
            expires: 365
        });
    } catch (t) {}
}, rr = function() {
    var e = er();
    return e.mux_viewer_id = e.mux_viewer_id || ee(), e.msn = e.msn || Math.random(), tr(e), {
        mux_viewer_id: e.mux_viewer_id,
        mux_sample_number: e.msn
    };
}, ar = function() {
    var e = er(), t = A.now();
    return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = ee(), e.sst = t), e.sex = t + 25 * 60 * 1e3, tr(e), {
        session_id: e.sid,
        session_start: e.sst,
        session_expires: e.sex
    };
};
function Ke(r, e) {
    var t = e.beaconCollectionDomain, i = e.beaconDomain;
    if (t) return "https://" + t;
    r = r || "inferred";
    var a = i || "litix.io";
    return r.match(/^[a-z0-9]+$/) ? "https://" + r + "." + a : "https://img.litix.io/a.gif";
}
var ir = V(J()), nr = function() {
    var e;
    switch(or()){
        case "cellular":
            e = "cellular";
            break;
        case "ethernet":
            e = "wired";
            break;
        case "wifi":
            e = "wifi";
            break;
        case void 0:
            break;
        default:
            e = "other";
    }
    return e;
}, or = function() {
    var e = ir.default.navigator, t = e && (e.connection || e.mozConnection || e.webkitConnection);
    return t && t.type;
};
nr.getConnectionFromAPI = or;
var sr = nr;
var qa = {
    a: "env",
    b: "beacon",
    c: "custom",
    d: "ad",
    e: "event",
    f: "experiment",
    i: "internal",
    m: "mux",
    n: "response",
    p: "player",
    q: "request",
    r: "retry",
    s: "session",
    t: "timestamp",
    u: "viewer",
    v: "video",
    w: "page",
    x: "view",
    y: "sub"
}, Aa = dr(qa), Oa = {
    ad: "ad",
    af: "affiliate",
    ag: "aggregate",
    ap: "api",
    al: "application",
    ao: "audio",
    ar: "architecture",
    as: "asset",
    au: "autoplay",
    av: "average",
    bi: "bitrate",
    bn: "brand",
    br: "break",
    bw: "browser",
    by: "bytes",
    bz: "business",
    ca: "cached",
    cb: "cancel",
    cc: "codec",
    cd: "code",
    cg: "category",
    ch: "changed",
    ci: "client",
    ck: "clicked",
    cl: "canceled",
    cn: "config",
    co: "count",
    ce: "counter",
    cp: "complete",
    cq: "creator",
    cr: "creative",
    cs: "captions",
    ct: "content",
    cu: "current",
    cx: "connection",
    cz: "context",
    dg: "downscaling",
    dm: "domain",
    dn: "cdn",
    do: "downscale",
    dr: "drm",
    dp: "dropped",
    du: "duration",
    dv: "device",
    dy: "dynamic",
    eb: "enabled",
    ec: "encoding",
    ed: "edge",
    en: "end",
    eg: "engine",
    em: "embed",
    er: "error",
    ep: "experiments",
    es: "errorcode",
    et: "errortext",
    ee: "event",
    ev: "events",
    ex: "expires",
    ez: "exception",
    fa: "failed",
    fi: "first",
    fm: "family",
    ft: "format",
    fp: "fps",
    fq: "frequency",
    fr: "frame",
    fs: "fullscreen",
    ha: "has",
    hb: "holdback",
    he: "headers",
    ho: "host",
    hn: "hostname",
    ht: "height",
    id: "id",
    ii: "init",
    in: "instance",
    ip: "ip",
    is: "is",
    ke: "key",
    la: "language",
    lb: "labeled",
    le: "level",
    li: "live",
    ld: "loaded",
    lo: "load",
    ls: "lists",
    lt: "latency",
    ma: "max",
    md: "media",
    me: "message",
    mf: "manifest",
    mi: "mime",
    ml: "midroll",
    mm: "min",
    mn: "manufacturer",
    mo: "model",
    mx: "mux",
    ne: "newest",
    nm: "name",
    no: "number",
    on: "on",
    or: "origin",
    os: "os",
    pa: "paused",
    pb: "playback",
    pd: "producer",
    pe: "percentage",
    pf: "played",
    pg: "program",
    ph: "playhead",
    pi: "plugin",
    pl: "preroll",
    pn: "playing",
    po: "poster",
    pp: "pip",
    pr: "preload",
    ps: "position",
    pt: "part",
    py: "property",
    px: "pop",
    pz: "plan",
    ra: "rate",
    rd: "requested",
    re: "rebuffer",
    rf: "rendition",
    rg: "range",
    rm: "remote",
    ro: "ratio",
    rp: "response",
    rq: "request",
    rs: "requests",
    sa: "sample",
    sd: "skipped",
    se: "session",
    sh: "shift",
    sk: "seek",
    sm: "stream",
    so: "source",
    sq: "sequence",
    sr: "series",
    ss: "status",
    st: "start",
    su: "startup",
    sv: "server",
    sw: "software",
    sy: "severity",
    ta: "tag",
    tc: "tech",
    te: "text",
    tg: "target",
    th: "throughput",
    ti: "time",
    tl: "total",
    to: "to",
    tt: "title",
    ty: "type",
    ug: "upscaling",
    un: "universal",
    up: "upscale",
    ur: "url",
    us: "user",
    va: "variant",
    vd: "viewed",
    vi: "video",
    ve: "version",
    vw: "view",
    vr: "viewer",
    wd: "width",
    wa: "watch",
    wt: "waiting"
}, ur = dr(Oa);
function dr(r) {
    var e = {};
    for(var t in r)r.hasOwnProperty(t) && (e[r[t]] = t);
    return e;
}
function ve(r) {
    var e = {}, t = {};
    return Object.keys(r).forEach(function(i) {
        var a = !1;
        if (r.hasOwnProperty(i) && r[i] !== void 0) {
            var n = i.split("_"), o = n[0], s = Aa[o];
            s || (q.info("Data key word `" + n[0] + "` not expected in " + i), s = o + "_"), n.splice(1).forEach(function(u) {
                u === "url" && (a = !0), ur[u] ? s += ur[u] : Number.isInteger(Number(u)) ? s += u : (q.info("Data key word `" + u + "` not expected in " + i), s += "_" + u + "_");
            }), a ? t[s] = r[i] : e[s] = r[i];
        }
    }), Object.assign(e, t);
}
var ie = V(J()), Lr = V(nt());
var ai = {
    maxBeaconSize: 300,
    maxQueueLength: 3600,
    baseTimeBetweenBeacons: 1e4,
    maxPayloadKBSize: 500
}, ii = 56 * 1024, ni = [
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
], oi = "https://img.litix.io", $ = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this._beaconUrl = e || oi, this._eventQueue = [], this._postInFlight = !1, this._resendAfterPost = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = Object.assign({}, ai, t);
};
$.prototype.queueEvent = function(r, e) {
    var t = Object.assign({}, e);
    return this._eventQueue.length <= this._options.maxQueueLength || r === "eventrateexceeded" ? (this._eventQueue.push(t), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : !1;
};
$.prototype.flushEvents = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (r && this._eventQueue.length === 1) {
        this._eventQueue.pop();
        return;
    }
    this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending();
};
$.prototype.destroy = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    this.destroyed = !0, r ? this._clearBeaconQueue() : this.flushEvents(), ie.default.clearTimeout(this._sendTimeout);
};
$.prototype._clearBeaconQueue = function() {
    var r = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, e = this._eventQueue.slice(r);
    r > 0 && Object.assign(e[e.length - 1], ve({
        mux_view_message: "event queue truncated"
    }));
    var t = this._createPayload(e);
    Cr(this._beaconUrl, t, !0, function() {});
};
$.prototype._sendBeaconQueue = function() {
    var r = this;
    if (this._postInFlight) {
        this._resendAfterPost = !0;
        return;
    }
    var e = this._eventQueue.slice(0, this._options.maxBeaconSize);
    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
    var t = this._createPayload(e), i = A.now();
    Cr(this._beaconUrl, t, !1, function(a, n) {
        n ? (r._eventQueue = e.concat(r._eventQueue), r._failureCount += 1, q.info("Error sending beacon: " + n)) : r._failureCount = 0, r._roundTripTime = A.now() - i, r._postInFlight = !1, r._resendAfterPost && (r._resendAfterPost = !1, r._eventQueue.length > 0 && r._sendBeaconQueue());
    });
};
$.prototype._getNextBeaconTime = function() {
    if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
    var r = Math.pow(2, this._failureCount - 1);
    return r = r * Math.random(), (1 + r) * this._options.baseTimeBetweenBeacons;
};
$.prototype._startBeaconSending = function() {
    var r = this;
    ie.default.clearTimeout(this._sendTimeout), !this.destroyed && (this._sendTimeout = ie.default.setTimeout(function() {
        r._eventQueue.length && r._sendBeaconQueue(), r._startBeaconSending();
    }, this._getNextBeaconTime()));
};
$.prototype._createPayload = function(r) {
    var e = this, t = {
        transmission_timestamp: Math.round(A.now())
    };
    this._roundTripTime && (t.rtt_ms = Math.round(this._roundTripTime));
    var i, a, n, o = function() {
        i = JSON.stringify({
            metadata: t,
            events: a || r
        }), n = i.length / 1024;
    }, s = function() {
        return n <= e._options.maxPayloadKBSize;
    };
    return o(), s() || (q.info("Payload size is too big (" + n + " kb). Removing unnecessary events."), a = r.filter(function(u) {
        return ni.indexOf(u.e) === -1;
    }), o()), s() || (q.info("Payload size still too big (" + n + " kb). Cropping fields.."), a.forEach(function(u) {
        for(var p in u){
            var b = u[p], k = 50 * 1024;
            typeof b == "string" && b.length > k && (u[p] = b.substring(0, k));
        }
    }), o()), i;
};
var si = typeof Lr.default.exitPictureInPicture == "function" ? function(r) {
    return r.length <= ii;
} : function(r) {
    return !1;
}, Cr = function(r, e, t, i) {
    if (t && navigator && navigator.sendBeacon && navigator.sendBeacon(r, e)) {
        i();
        return;
    }
    if (ie.default.fetch) {
        ie.default.fetch(r, {
            method: "POST",
            body: e,
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: si(e)
        }).then(function(n) {
            return i(null, n.ok ? null : "Error");
        }).catch(function(n) {
            return i(null, n);
        });
        return;
    }
    if (ie.default.XMLHttpRequest) {
        var a = new ie.default.XMLHttpRequest;
        a.onreadystatechange = function() {
            if (a.readyState === 4) return i(null, a.status !== 200 ? "error" : void 0);
        }, a.open("POST", r), a.setRequestHeader("Content-Type", "text/plain"), a.send(e);
        return;
    }
    i();
}, Mr = $;
var ui = [
    "env_key",
    "view_id",
    "view_sequence_number",
    "player_sequence_number",
    "beacon_domain",
    "player_playhead_time",
    "viewer_time",
    "mux_api_version",
    "event",
    "video_id",
    "player_instance_id",
    "player_error_code",
    "player_error_message",
    "player_error_context",
    "player_error_severity",
    "player_error_business_exception"
], di = [
    "adplay",
    "adplaying",
    "adpause",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "adended",
    "adresponse",
    "adrequest"
], li = [
    "ad_id",
    "ad_creative_id",
    "ad_universal_id"
], ci = [
    "viewstart",
    "error",
    "ended",
    "viewend"
], _i = 10 * 60 * 1e3, Hr = function() {
    "use strict";
    function r(e, t) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        D(this, r);
        var a, n, o, s, u, p, b, k, y, c, v1, T;
        l(this, "mux", void 0), l(this, "envKey", void 0), l(this, "options", void 0), l(this, "eventQueue", void 0), l(this, "sampleRate", void 0), l(this, "disableCookies", void 0), l(this, "respectDoNotTrack", void 0), l(this, "previousBeaconData", void 0), l(this, "lastEventTime", void 0), l(this, "rateLimited", void 0), l(this, "pageLevelData", void 0), l(this, "viewerData", void 0), this.mux = e, this.envKey = t, this.options = i, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.eventQueue = new Mr(Ke(this.envKey, this.options));
        var x;
        this.sampleRate = (x = this.options.sampleRate) !== null && x !== void 0 ? x : 1;
        var m;
        this.disableCookies = (m = this.options.disableCookies) !== null && m !== void 0 ? m : !1;
        var f;
        this.respectDoNotTrack = (f = this.options.respectDoNotTrack) !== null && f !== void 0 ? f : !1, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
            mux_api_version: this.mux.API_VERSION,
            mux_embed: this.mux.NAME,
            mux_embed_version: this.mux.VERSION,
            viewer_application_name: (a = this.options.platform) === null || a === void 0 ? void 0 : a.name,
            viewer_application_version: (n = this.options.platform) === null || n === void 0 ? void 0 : n.version,
            viewer_application_engine: (o = this.options.platform) === null || o === void 0 ? void 0 : o.layout,
            viewer_device_name: (s = this.options.platform) === null || s === void 0 ? void 0 : s.product,
            viewer_device_category: "",
            viewer_device_manufacturer: (u = this.options.platform) === null || u === void 0 ? void 0 : u.manufacturer,
            viewer_os_family: (b = this.options.platform) === null || b === void 0 || (p = b.os) === null || p === void 0 ? void 0 : p.family,
            viewer_os_architecture: (y = this.options.platform) === null || y === void 0 || (k = y.os) === null || k === void 0 ? void 0 : k.architecture,
            viewer_os_version: (v1 = this.options.platform) === null || v1 === void 0 || (c = v1.os) === null || c === void 0 ? void 0 : c.version,
            viewer_connection_type: sr(),
            page_url: Ue.default === null || Ue.default === void 0 || (T = Ue.default.location) === null || T === void 0 ? void 0 : T.href
        }, this.viewerData = this.disableCookies ? {} : rr();
    }
    return L(r, [
        {
            key: "send",
            value: function(t, i) {
                if (!(!t || !(i != null && i.view_id))) {
                    if (this.respectDoNotTrack && ce()) return q.info("Not sending `" + t + "` because Do Not Track is enabled");
                    if (!i || typeof i != "object") return q.error("A data object was expected in send() but was not provided");
                    var a = this.disableCookies ? {} : ar(), n = fe(ue({}, this.pageLevelData, i, a, this.viewerData), {
                        event: t,
                        env_key: this.envKey
                    });
                    n.user_id && (n.viewer_user_id = n.user_id, delete n.user_id);
                    var o, s = ((o = n.mux_sample_number) !== null && o !== void 0 ? o : 0) >= this.sampleRate, u = this._deduplicateBeaconData(t, n), p = ve(u);
                    if (this.lastEventTime = this.mux.utils.now(), s) return q.info("Not sending event due to sample rate restriction", t, n, p);
                    if (this.envKey || q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", t, n, p), !this.rateLimited) {
                        if (q.info("Sending event", t, n, p), this.rateLimited = !this.eventQueue.queueEvent(t, p), this.mux.WINDOW_UNLOADING && t === "viewend") this.eventQueue.destroy(!0);
                        else if (this.mux.WINDOW_HIDDEN && t === "hb" ? this.eventQueue.flushEvents(!0) : ci.indexOf(t) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return n.event = "eventrateexceeded", p = ve(n), this.eventQueue.queueEvent(n.event, p), q.error("Beaconing disabled due to rate limit.");
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function() {
                this.eventQueue.destroy(!1);
            }
        },
        {
            key: "_deduplicateBeaconData",
            value: function(t, i) {
                var a = this, n = {}, o = i.view_id;
                if (o === "-1" || t === "viewstart" || t === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= _i) n = ue({}, i), o && (this.previousBeaconData = n), o && t === "viewend" && (this.previousBeaconData = null);
                else {
                    var s = t.indexOf("request") === 0;
                    Object.entries(i).forEach(function(u) {
                        var p = H(u, 2), b = p[0], k = p[1];
                        a.previousBeaconData && (k !== a.previousBeaconData[b] || ui.indexOf(b) > -1 || a.objectHasChanged(s, b, k, a.previousBeaconData[b]) || a.eventRequiresKey(t, b)) && (n[b] = k, a.previousBeaconData[b] = k);
                    });
                }
                return n;
            }
        },
        {
            key: "objectHasChanged",
            value: function(t, i, a, n) {
                return !t || i.indexOf("request_") !== 0 ? !1 : i === "request_response_headers" || typeof a != "object" || typeof n != "object" ? !0 : Object.keys(a || {}).length !== Object.keys(n || {}).length;
            }
        },
        {
            key: "eventRequiresKey",
            value: function(t, i) {
                return !!(t === "renditionchange" && i.indexOf("video_source_") === 0 || li.includes(i) && di.includes(t));
            }
        }
    ]), r;
}();
var fi = function r(e) {
    "use strict";
    D(this, r);
    var t = 0, i = 0, a = 0, n = 0, o = 0, s = 0, u = 0, p = function(y, c) {
        var v1 = c.request_start, T = c.request_response_start, x = c.request_response_end, m = c.request_bytes_loaded;
        n++;
        var f, _;
        if (T ? (f = T - (v1 != null ? v1 : 0), _ = (x != null ? x : 0) - T) : _ = (x != null ? x : 0) - (v1 != null ? v1 : 0), _ > 0 && m && m > 0) {
            var d = m / _ * 8e3;
            o++, i += m, a += _, e.data.view_min_request_throughput = Math.min(e.data.view_min_request_throughput || 1 / 0, d), e.data.view_average_request_throughput = i / a * 8e3, e.data.view_request_count = n, f > 0 && (t += f, e.data.view_max_request_latency = Math.max(e.data.view_max_request_latency || 0, f), e.data.view_average_request_latency = t / o);
        }
    }, b = function(y, c) {
        n++, s++, e.data.view_request_count = n, e.data.view_request_failed_count = s;
    }, k = function(y, c) {
        n++, u++, e.data.view_request_count = n, e.data.view_request_canceled_count = u;
    };
    e.on("requestcompleted", p), e.on("requestfailed", b), e.on("requestcanceled", k);
}, Br = fi;
var pi = 60 * 60 * 1e3, vi = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "_lastEventTime", void 0), e.on("before*", function(i, a) {
        var n = a.viewer_time, o = A.now(), s = t._lastEventTime;
        if (t._lastEventTime = o, s && o - s > pi) {
            var u = Object.keys(e.data).reduce(function(b, k) {
                return k.indexOf("video_") === 0 ? Object.assign(b, l({}, k, e.data[k])) : b;
            }, {});
            e.mux.log.info("Received event after at least an hour inactivity, creating a new view");
            var p = e.playbackHeartbeat._playheadShouldBeProgressing;
            e._resetView(Object.assign({
                viewer_time: n
            }, u)), e.playbackHeartbeat._playheadShouldBeProgressing = p, e.playbackHeartbeat._playheadShouldBeProgressing && i.type !== "play" && i.type !== "adbreakstart" && (e.emit("play", {
                viewer_time: n
            }), i.type !== "playing" && e.emit("playing", {
                viewer_time: n
            }));
        }
    });
}, Ur = vi;
var mi = [
    "viewstart",
    "ended",
    "loadstart",
    "pause",
    "play",
    "playing",
    "ratechange",
    "waiting",
    "adplay",
    "adpause",
    "adended",
    "aderror",
    "adplaying",
    "adrequest",
    "adresponse",
    "adbreakstart",
    "adbreakend",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "rebufferstart",
    "rebufferend",
    "seeked",
    "error",
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled",
    "renditionchange"
], hi = new Set([
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
]), yi = function(r) {
    "use strict";
    Dt(t, r);
    var e = qt(t);
    function t(i, a, n) {
        D(this, t);
        var o;
        o = e.call(this), l(g(o), "DOM_CONTENT_LOADED_EVENT_END", void 0), l(g(o), "NAVIGATION_START", void 0), l(g(o), "_destroyed", void 0), l(g(o), "_heartBeatTimeout", void 0), l(g(o), "adTracker", void 0), l(g(o), "dashjs", void 0), l(g(o), "data", void 0), l(g(o), "disablePlayheadRebufferTracking", void 0), l(g(o), "disableRebufferTracking", void 0), l(g(o), "errorTracker", void 0), l(g(o), "errorTranslator", void 0), l(g(o), "emitTranslator", void 0), l(g(o), "getAdData", void 0), l(g(o), "getPlayheadTime", void 0), l(g(o), "getStateData", void 0), l(g(o), "stateDataTranslator", void 0), l(g(o), "hlsjs", void 0), l(g(o), "id", void 0), l(g(o), "longResumeTracker", void 0), l(g(o), "minimumRebufferDuration", void 0), l(g(o), "mux", void 0), l(g(o), "playbackEventDispatcher", void 0), l(g(o), "playbackHeartbeat", void 0), l(g(o), "playbackHeartbeatTime", void 0), l(g(o), "playheadTime", void 0), l(g(o), "seekingTracker", void 0), l(g(o), "sustainedRebufferThreshold", void 0), l(g(o), "watchTimeTracker", void 0), l(g(o), "currentFragmentPDT", void 0), l(g(o), "currentFragmentStart", void 0), o.DOM_CONTENT_LOADED_EVENT_END = _e.domContentLoadedEventEnd(), o.NAVIGATION_START = _e.navigationStart();
        var s = {
            debug: !1,
            minimumRebufferDuration: 250,
            sustainedRebufferThreshold: 1e3,
            playbackHeartbeatTime: 25,
            beaconDomain: "litix.io",
            sampleRate: 1,
            disableCookies: !1,
            respectDoNotTrack: !1,
            disableRebufferTracking: !1,
            disablePlayheadRebufferTracking: !1,
            errorTranslator: function(y) {
                return y;
            },
            emitTranslator: function() {
                for(var y = arguments.length, c = new Array(y), v1 = 0; v1 < y; v1++)c[v1] = arguments[v1];
                return c;
            },
            stateDataTranslator: function(y) {
                return y;
            }
        };
        o.mux = i, o.id = a, n != null && n.beaconDomain && o.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), n = Object.assign(s, n), n.data = n.data || {}, n.data.property_key && (n.data.env_key = n.data.property_key, delete n.data.property_key), q.level = n.debug ? Y.DEBUG : Y.WARN, o.getPlayheadTime = n.getPlayheadTime, o.getStateData = n.getStateData || function() {
            return {};
        }, o.getAdData = n.getAdData || function() {}, o.minimumRebufferDuration = n.minimumRebufferDuration, o.sustainedRebufferThreshold = n.sustainedRebufferThreshold, o.playbackHeartbeatTime = n.playbackHeartbeatTime, o.disableRebufferTracking = n.disableRebufferTracking, o.disableRebufferTracking && o.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o.disablePlayheadRebufferTracking = n.disablePlayheadRebufferTracking, o.errorTranslator = n.errorTranslator, o.emitTranslator = n.emitTranslator, o.stateDataTranslator = n.stateDataTranslator, o.playbackEventDispatcher = new Hr(i, n.data.env_key, n), o.data = {
            player_instance_id: ee(),
            mux_sample_rate: n.sampleRate,
            beacon_domain: n.beaconCollectionDomain || n.beaconDomain
        }, o.data.view_sequence_number = 1, o.data.player_sequence_number = 1;
        var u = (function() {
            typeof this.data.view_start == "undefined" && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
        }).bind(g(o));
        if (o.on("viewinit", function(y, c) {
            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, c), this._initializeViewData(), this.one("play", u), this.one("adbreakstart", u);
        }), o.on("videochange", function(y, c) {
            this._resetView(c);
        }), o.on("programchange", function(y, c) {
            this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), this._resetView(Object.assign(c, {
                view_program_changed: !0
            })), u(), this.emit("play"), this.emit("playing");
        }), o.on("fragmentchange", function(y, c) {
            this.currentFragmentPDT = c.currentFragmentPDT, this.currentFragmentStart = c.currentFragmentStart;
        }), o.on("destroy", o.destroy), typeof window != "undefined" && typeof window.addEventListener == "function" && typeof window.removeEventListener == "function") {
            var p = function() {
                var y = typeof o.data.view_start != "undefined";
                o.mux.WINDOW_HIDDEN = document.visibilityState === "hidden", y && o.mux.WINDOW_HIDDEN && (o.data.player_is_paused || o.emit("hb"));
            };
            window.addEventListener("visibilitychange", p, !1);
            var b = function(y) {
                y.persisted || o.destroy();
            };
            window.addEventListener("pagehide", b, !1), o.on("destroy", function() {
                window.removeEventListener("visibilitychange", p), window.removeEventListener("pagehide", b);
            });
        }
        o.on("playerready", function(y, c) {
            Object.assign(this.data, c);
        }), mi.forEach(function(y) {
            o.on(y, function(c, v1) {
                y.indexOf("ad") !== 0 && this._updateStateData(), Object.assign(this.data, v1), this._sanitizeData();
            }), o.on("after" + y, function() {
                (y !== "error" || this.errorTracker.viewErrored) && this.send(y);
            });
        }), o.on("viewend", function(y, c) {
            Object.assign(o.data, c);
        });
        var k = function(c) {
            var v1 = this.mux.utils.now();
            this.data.player_init_time && (this.data.player_startup_time = v1 - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
        };
        return o.one("playerready", k), o.longResumeTracker = new Ur(g(o)), o.errorTracker = new Bt(g(o)), new $t(g(o)), o.seekingTracker = new zt(g(o)), o.playheadTime = new Vt(g(o)), o.playbackHeartbeat = new Ht(g(o)), new Qt(g(o)), o.watchTimeTracker = new Ut(g(o)), new Ft(g(o)), o.adTracker = new Yt(g(o)), new Gt(g(o)), new jt(g(o)), new Jt(g(o)), new Xt(g(o)), new Br(g(o)), n.hlsjs && o.addHLSJS(n), n.dashjs && o.addDashJS(n), o.emit("viewinit", n.data), o;
    }
    return L(t, [
        {
            key: "emit",
            value: function(a, n) {
                var o, s = Object.assign({
                    viewer_time: this.mux.utils.now()
                }, n), u = [
                    a,
                    s
                ];
                if (this.emitTranslator) try {
                    u = this.emitTranslator(a, s);
                } catch (p) {
                    this.mux.log.warn("Exception in emit translator callback.", p);
                }
                u != null && u.length && (o = De(X(t.prototype), "emit", this)).call.apply(o, [
                    this
                ].concat(W(u)));
            }
        },
        {
            key: "destroy",
            value: function() {
                this._destroyed || (this._destroyed = !0, typeof this.data.view_start != "undefined" && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
            }
        },
        {
            key: "send",
            value: function(a) {
                if (this.data.view_id) {
                    var n = Object.assign({}, this.data), o = [
                        "player_program_time",
                        "player_manifest_newest_program_time",
                        "player_live_edge_program_time",
                        "player_program_time",
                        "video_holdback",
                        "video_part_holdback",
                        "video_target_duration",
                        "video_part_target_duration"
                    ];
                    if (n.video_source_is_live === void 0 && (n.player_source_duration === 1 / 0 || n.video_source_duration === 1 / 0 ? n.video_source_is_live = !0 : (n.player_source_duration > 0 || n.video_source_duration > 0) && (n.video_source_is_live = !1)), n.video_source_is_live || o.forEach(function(b) {
                        n[b] = void 0;
                    }), n.video_source_url = n.video_source_url || n.player_source_url, n.video_source_url) {
                        var s = H(re(n.video_source_url), 2), u = s[0], p = s[1];
                        n.video_source_domain = p, n.video_source_hostname = u;
                    }
                    delete n.ad_request_id, this.playbackEventDispatcher.send(a, n), this.data.view_sequence_number++, this.data.player_sequence_number++, hi.has(a) || this._restartHeartBeat(), a === "viewend" && delete this.data.view_id;
                }
            }
        },
        {
            key: "_resetView",
            value: function(a) {
                this.emit("viewend"), this.send("viewend"), this.emit("viewinit", a);
            }
        },
        {
            key: "_updateStateData",
            value: function() {
                var a = this.getStateData();
                if (typeof this.stateDataTranslator == "function") try {
                    a = this.stateDataTranslator(a);
                } catch (n) {
                    this.mux.log.warn("Exception in stateDataTranslator translator callback.", n);
                }
                Object.assign(this.data, a), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
            }
        },
        {
            key: "_sanitizeData",
            value: function() {
                var a = this, n = [
                    "player_width",
                    "player_height",
                    "video_source_width",
                    "video_source_height",
                    "player_playhead_time",
                    "video_source_bitrate"
                ];
                n.forEach(function(s) {
                    var u = parseInt(a.data[s], 10);
                    a.data[s] = isNaN(u) ? void 0 : u;
                });
                var o = [
                    "player_source_url",
                    "video_source_url"
                ];
                o.forEach(function(s) {
                    if (a.data[s]) {
                        var u = a.data[s].toLowerCase();
                        (u.indexOf("data:") === 0 || u.indexOf("blob:") === 0) && (a.data[s] = "MSE style URL");
                    }
                });
            }
        },
        {
            key: "_resetVideoData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("video_") === 0 && delete a.data[n];
                });
            }
        },
        {
            key: "_resetViewData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("view_") === 0 && delete a.data[n];
                }), this.data.view_sequence_number = 1;
            }
        },
        {
            key: "_resetErrorData",
            value: function() {
                delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
            }
        },
        {
            key: "_initializeViewData",
            value: function() {
                var a = this, n = this.data.view_id = ee(), o = function() {
                    n === a.data.view_id && O(a.data, "player_view_count", 1);
                };
                this.data.player_is_paused ? this.one("play", o) : o();
            }
        },
        {
            key: "_restartHeartBeat",
            value: function() {
                var a = this;
                window.clearTimeout(this._heartBeatTimeout), this._heartBeatTimeout = window.setTimeout(function() {
                    a.data.player_is_paused || a.emit("hb");
                }, 1e4);
            }
        },
        {
            key: "addHLSJS",
            value: function(a) {
                if (!a.hlsjs) {
                    this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                    return;
                }
                if (this.hlsjs) {
                    this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");
                    return;
                }
                this.hlsjs = a.hlsjs, Ot(this.mux, this.id, a.hlsjs, {}, a.Hls || window.Hls);
            }
        },
        {
            key: "removeHLSJS",
            value: function() {
                this.hlsjs && (Pt(this.hlsjs), this.hlsjs = void 0);
            }
        },
        {
            key: "addDashJS",
            value: function(a) {
                if (!a.dashjs) {
                    this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    return;
                }
                if (this.dashjs) {
                    this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");
                    return;
                }
                this.dashjs = a.dashjs, Nt(this.mux, this.id, a.dashjs);
            }
        },
        {
            key: "removeDashJS",
            value: function() {
                this.dashjs && (Lt(this.dashjs), this.dashjs = void 0);
            }
        }
    ]), t;
}(Mt), Fr = yi;
var he = V(nt());
function ot() {
    return he.default && !!(he.default.fullscreenElement || he.default.webkitFullscreenElement || he.default.mozFullScreenElement || he.default.msFullscreenElement);
}
var gi = [
    "loadstart",
    "pause",
    "play",
    "playing",
    "seeking",
    "seeked",
    "timeupdate",
    "ratechange",
    "stalled",
    "waiting",
    "error",
    "ended"
], bi = {
    1: "MEDIA_ERR_ABORTED",
    2: "MEDIA_ERR_NETWORK",
    3: "MEDIA_ERR_DECODE",
    4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
};
function st(r, e, t) {
    var i = H(se(e), 3), a = i[0], n = i[1], o = i[2], s = r.log, u = r.utils.getComputedStyle, p = r.utils.secondsToMs, b = {
        automaticErrorTracking: !0
    };
    if (a) {
        if (o !== "video" && o !== "audio") return s.error("The element of `" + n + "` was not a media element.");
    } else return s.error("No element was found with the `" + n + "` query selector.");
    a.mux && (a.mux.destroy(), delete a.mux, s.warn("Already monitoring this video element, replacing existing event listeners"));
    var k = {
        getPlayheadTime: function() {
            return p(a.currentTime);
        },
        getStateData: function() {
            var v1, T, x, m = ((v1 = (T = this).getPlayheadTime) === null || v1 === void 0 ? void 0 : v1.call(T)) || p(a.currentTime), f = this.hlsjs && this.hlsjs.url, _ = this.dashjs && typeof this.dashjs.getSource == "function" && this.dashjs.getSource(), d = {
                player_is_paused: a.paused,
                player_width: parseInt(u(a, "width")),
                player_height: parseInt(u(a, "height")),
                player_autoplay_on: a.autoplay,
                player_preload_on: a.preload,
                player_language_code: a.lang,
                player_is_fullscreen: ot(),
                video_poster_url: a.poster,
                video_source_url: f || _ || a.currentSrc,
                video_source_duration: p(a.duration),
                video_source_height: a.videoHeight,
                video_source_width: a.videoWidth,
                view_dropped_frame_count: a == null || (x = a.getVideoPlaybackQuality) === null || x === void 0 ? void 0 : x.call(a).droppedVideoFrames
            };
            if (a.getStartDate && m > 0) {
                var h = a.getStartDate();
                if (h && typeof h.getTime == "function" && h.getTime()) {
                    var w = h.getTime();
                    if (d.player_program_time = w + m, a.seekable.length > 0) {
                        var E = w + a.seekable.end(a.seekable.length - 1);
                        d.player_live_edge_program_time = E;
                    }
                }
            }
            return d;
        }
    };
    t = Object.assign(b, t, k), t.data = Object.assign({
        player_software: "HTML5 Video Element",
        player_mux_plugin_name: "VideoElementMonitor",
        player_mux_plugin_version: r.VERSION
    }, t.data), a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(c, v1) {
        r.emit(n, c, v1);
    }, a.mux.updateData = function(c) {
        a.mux.emit("hb", c);
    };
    var y = function() {
        s.error("The monitor for this video element has already been destroyed.");
    };
    a.mux.destroy = function() {
        Object.keys(a.mux.listeners).forEach(function(c) {
            a.removeEventListener(c, a.mux.listeners[c], !1);
        }), delete a.mux.listeners, a.mux.destroy = y, a.mux.swapElement = y, a.mux.emit = y, a.mux.addHLSJS = y, a.mux.addDashJS = y, a.mux.removeHLSJS = y, a.mux.removeDashJS = y, a.mux.updateData = y, a.mux.setEmitTranslator = y, a.mux.setStateDataTranslator = y, a.mux.setGetPlayheadTime = y, a.mux.deleted = !0, r.emit(n, "destroy");
    }, a.mux.swapElement = function(c) {
        var v1 = H(se(c), 3), T = v1[0], x = v1[1], m = v1[2];
        if (T) {
            if (m !== "video" && m !== "audio") return r.log.error("The element of `" + x + "` was not a media element.");
        } else return r.log.error("No element was found with the `" + x + "` query selector.");
        T.muxId = a.muxId, delete a.muxId, T.mux = T.mux || {}, T.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(T.mux.listeners).forEach(function(f) {
            a.removeEventListener(f, T.mux.listeners[f], !1), T.addEventListener(f, T.mux.listeners[f], !1);
        }), T.mux.swapElement = a.mux.swapElement, T.mux.destroy = a.mux.destroy, delete a.mux, a = T;
    }, a.mux.addHLSJS = function(c) {
        r.addHLSJS(n, c);
    }, a.mux.addDashJS = function(c) {
        r.addDashJS(n, c);
    }, a.mux.removeHLSJS = function() {
        r.removeHLSJS(n);
    }, a.mux.removeDashJS = function() {
        r.removeDashJS(n);
    }, a.mux.setEmitTranslator = function(c) {
        r.setEmitTranslator(n, c);
    }, a.mux.setStateDataTranslator = function(c) {
        r.setStateDataTranslator(n, c);
    }, a.mux.setGetPlayheadTime = function(c) {
        c || (c = t.getPlayheadTime), r.setGetPlayheadTime(n, c);
    }, r.init(n, t), r.emit(n, "playerready"), a.paused || (r.emit(n, "play"), a.readyState > 2 && r.emit(n, "playing")), a.mux.listeners = {}, gi.forEach(function(c) {
        c === "error" && !t.automaticErrorTracking || (a.mux.listeners[c] = function() {
            var v1 = {};
            if (c === "error") {
                if (!a.error || a.error.code === 1) return;
                v1.player_error_code = a.error.code, v1.player_error_message = bi[a.error.code] || a.error.message;
            }
            r.emit(n, c, v1);
        }, a.addEventListener(c, a.mux.listeners[c], !1));
    });
}
function ut(r, e, t, i) {
    var a = i;
    if (r && typeof r[e] == "function") try {
        a = r[e].apply(r, t);
    } catch (n) {
        q.info("safeCall error", n);
    }
    return a;
}
var ge = V(J()), ye;
ge.default && ge.default.WeakMap && (ye = new WeakMap);
function dt(r, e) {
    if (!r || !e || !ge.default || typeof ge.default.getComputedStyle != "function") return "";
    var t;
    return ye && ye.has(r) && (t = ye.get(r)), t || (t = ge.default.getComputedStyle(r, null), ye && ye.set(r, t)), t.getPropertyValue(e);
}
function lt(r) {
    return Math.floor(r * 1e3);
}
var le = {
    TARGET_DURATION: "#EXT-X-TARGETDURATION",
    PART_INF: "#EXT-X-PART-INF",
    SERVER_CONTROL: "#EXT-X-SERVER-CONTROL",
    INF: "#EXTINF",
    PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME",
    VERSION: "#EXT-X-VERSION",
    SESSION_DATA: "#EXT-X-SESSION-DATA"
}, Fe = function(e) {
    return this.buffer = "", this.manifest = {
        segments: [],
        serverControl: {},
        sessionData: {}
    }, this.currentUri = {}, this.process(e), this.manifest;
};
Fe.prototype.process = function(r) {
    var e;
    for(this.buffer += r, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1);
};
Fe.prototype.processLine = function(r) {
    var e = r.indexOf(":"), t = ki(r, e), i = t[0], a = t.length === 2 ? _t(t[1]) : void 0;
    if (i[0] !== "#") this.currentUri.uri = i, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
    else switch(i){
        case le.TARGET_DURATION:
            {
                if (!isFinite(a) || a < 0) return;
                this.manifest.targetDuration = a, this.setHoldBack();
                break;
            }
        case le.PART_INF:
            {
                ct(this.manifest, t), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                break;
            }
        case le.SERVER_CONTROL:
            {
                ct(this.manifest, t), this.setHoldBack();
                break;
            }
        case le.INF:
            {
                a === 0 ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                break;
            }
        case le.PROGRAM_DATE_TIME:
            {
                var n = a, o = new Date(n);
                this.manifest.dateTimeString || (this.manifest.dateTimeString = n, this.manifest.dateTimeObject = o), this.currentUri.dateTimeString = n, this.currentUri.dateTimeObject = o;
                break;
            }
        case le.VERSION:
            {
                ct(this.manifest, t);
                break;
            }
        case le.SESSION_DATA:
            {
                var s = xi(t[1]), u = Ce(s);
                Object.assign(this.manifest.sessionData, u);
            }
    }
};
Fe.prototype.setHoldBack = function() {
    var r = this.manifest, e = r.serverControl, t = r.targetDuration, i = r.partTargetDuration;
    if (e) {
        var a = "holdBack", n = "partHoldBack", o = t && t * 3, s = i && i * 2;
        t && !e.hasOwnProperty(a) && (e[a] = o), o && e[a] < o && (e[a] = o), i && !e.hasOwnProperty(n) && (e[n] = i * 3), i && e[n] < s && (e[n] = s);
    }
};
var ct = function(r, e) {
    var t = Vr(e[0].replace("#EXT-X-", "")), i;
    Ei(e[1]) ? (i = {}, i = Object.assign(wi(e[1]), i)) : i = _t(e[1]), r[t] = i;
}, Vr = function(r) {
    return r.toLowerCase().replace(/-(\w)/g, function(e) {
        return e[1].toUpperCase();
    });
}, _t = function(r) {
    if (r.toLowerCase() === "yes" || r.toLowerCase() === "no") return r.toLowerCase() === "yes";
    var e = r.indexOf(":") !== -1 ? r : parseFloat(r);
    return isNaN(e) ? r : e;
}, Ti = function(r) {
    var e = {}, t = r.split("=");
    if (t.length > 1) {
        var i = Vr(t[0]);
        e[i] = _t(t[1]);
    }
    return e;
}, wi = function(r) {
    for(var e = r.split(","), t = {}, i = 0; e.length > i; i++){
        var a = e[i], n = Ti(a);
        t = Object.assign(n, t);
    }
    return t;
}, Ei = function(r) {
    return r.indexOf("=") > -1;
}, ki = function(r, e) {
    return e === -1 ? [
        r
    ] : [
        r.substring(0, e),
        r.substring(e + 1)
    ];
}, xi = function(r) {
    var e = {};
    if (r) {
        var t = r.search(","), i = r.slice(0, t), a = r.slice(t + 1), n = [
            i,
            a
        ];
        return n.forEach(function(o, s) {
            for(var u = o.replace(/['"]+/g, "").split("="), p = 0; p < u.length; p++)u[p] === "DATA-ID" && (e["DATA-ID"] = u[1 - p]), u[p] === "VALUE" && (e.VALUE = u[1 - p]);
        }), {
            data: e
        };
    }
}, Wr = Fe;
var Di = {
    safeCall: ut,
    safeIncrement: O,
    getComputedStyle: dt,
    secondsToMs: lt,
    assign: Object.assign,
    headersStringToObject: pe,
    cdnHeadersToRequestId: de,
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Wr,
    generateShortID: Oe,
    generateUUID: ee,
    now: A.now,
    findMediaElement: se
}, jr = Di;
var Si = {
    PLAYER_READY: "playerready",
    VIEW_INIT: "viewinit",
    VIDEO_CHANGE: "videochange",
    PLAY: "play",
    PAUSE: "pause",
    PLAYING: "playing",
    TIME_UPDATE: "timeupdate",
    SEEKING: "seeking",
    SEEKED: "seeked",
    REBUFFER_START: "rebufferstart",
    REBUFFER_END: "rebufferend",
    ERROR: "error",
    ENDED: "ended",
    RENDITION_CHANGE: "renditionchange",
    ORIENTATION_CHANGE: "orientationchange",
    AD_REQUEST: "adrequest",
    AD_RESPONSE: "adresponse",
    AD_BREAK_START: "adbreakstart",
    AD_PLAY: "adplay",
    AD_PLAYING: "adplaying",
    AD_PAUSE: "adpause",
    AD_FIRST_QUARTILE: "adfirstquartile",
    AD_MID_POINT: "admidpoint",
    AD_THIRD_QUARTILE: "adthirdquartile",
    AD_ENDED: "adended",
    AD_BREAK_END: "adbreakend",
    AD_ERROR: "aderror",
    REQUEST_COMPLETED: "requestcompleted",
    REQUEST_FAILED: "requestfailed",
    REQUEST_CANCELLED: "requestcanceled",
    HEARTBEAT: "hb",
    DESTROY: "destroy"
}, Gr = Si;
var Ri = "mux-embed", qi = "5.9.0", Ai = "2.1", C = {}, ne = function(e) {
    var t = arguments;
    typeof e == "string" ? ne.hasOwnProperty(e) ? be.default.setTimeout(function() {
        t = Array.prototype.splice.call(t, 1), ne[e].apply(null, t);
    }, 0) : q.warn("`" + e + "` is an unknown task") : typeof e == "function" ? be.default.setTimeout(function() {
        e(ne);
    }, 0) : q.warn("`" + e + "` is invalid.");
}, Oi = {
    loaded: A.now(),
    NAME: Ri,
    VERSION: qi,
    API_VERSION: Ai,
    PLAYER_TRACKED: !1,
    monitor: function(e, t) {
        return st(ne, e, t);
    },
    destroyMonitor: function(e) {
        var t = H(se(e), 1), i = t[0];
        i && i.mux && typeof i.mux.destroy == "function" ? i.mux.destroy() : q.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
    },
    addHLSJS: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].addHLSJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    addDashJS: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].addDashJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    removeHLSJS: function(e) {
        var t = Q(e);
        C[t] ? C[t].removeHLSJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    removeDashJS: function(e) {
        var t = Q(e);
        C[t] ? C[t].removeDashJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    init: function(e, t) {
        ce() && t && t.respectDoNotTrack && q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
        var i = Q(e);
        C[i] = new Fr(ne, i, t);
    },
    emit: function(e, t, i) {
        var a = Q(e);
        C[a] ? (C[a].emit(t, i), t === "destroy" && delete C[a]) : q.error("A monitor for `" + a + "` has not been initialized.");
    },
    updateData: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].emit("hb", t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setEmitTranslator: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].emitTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setStateDataTranslator: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].stateDataTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setGetPlayheadTime: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].getPlayheadTime = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    checkDoNotTrack: ce,
    log: q,
    utils: jr,
    events: Gr,
    WINDOW_HIDDEN: !1,
    WINDOW_UNLOADING: !1
};
Object.assign(ne, Oi);
typeof be.default != "undefined" && typeof be.default.addEventListener == "function" && be.default.addEventListener("pagehide", function(r) {
    r.persisted || (ne.WINDOW_UNLOADING = !0);
}, !1);
var Ed = ne;
;
 /*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/ }),
"[project]/Desktop/OwnGigs/agency/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoplayTypes",
    ()=>K,
    "CmcdTypeValues",
    ()=>jt,
    "CmcdTypes",
    ()=>S,
    "ExtensionMimeTypeMap",
    ()=>A,
    "Hls",
    ()=>g,
    "MaxResolution",
    ()=>Gt,
    "MediaError",
    ()=>f,
    "MimeTypeShorthandMap",
    ()=>W,
    "MinResolution",
    ()=>Xt,
    "MuxErrorCategory",
    ()=>C,
    "MuxErrorCode",
    ()=>D,
    "MuxJWTAud",
    ()=>se,
    "PlaybackTypes",
    ()=>X,
    "RenditionOrder",
    ()=>zt,
    "StreamTypes",
    ()=>_,
    "addChapters",
    ()=>Le,
    "addCuePoints",
    ()=>Pe,
    "addTextTrack",
    ()=>ne,
    "allMediaTypes",
    ()=>qt,
    "errorCategoryToTokenNameOrPrefix",
    ()=>V,
    "fetchAndDispatchMuxMetadata",
    ()=>de,
    "generatePlayerInitTime",
    ()=>Wr,
    "generateUUID",
    ()=>_t,
    "getActiveChapter",
    ()=>Ne,
    "getActiveCuePoint",
    ()=>_e,
    "getAppCertificate",
    ()=>Ut,
    "getChapters",
    ()=>ct,
    "getCuePoints",
    ()=>it,
    "getCurrentPdt",
    ()=>dt,
    "getDRMConfig",
    ()=>Ot,
    "getEnded",
    ()=>At,
    "getError",
    ()=>ht,
    "getLicenseKey",
    ()=>Ht,
    "getLiveEdgeStart",
    ()=>Br,
    "getMediaPlaylistFromMultivariantPlaylist",
    ()=>Tt,
    "getMetadata",
    ()=>Fr,
    "getMultivariantPlaylistSessionData",
    ()=>yt,
    "getSeekable",
    ()=>Be,
    "getStartDate",
    ()=>ut,
    "getStreamInfoFromHlsjsLevelDetails",
    ()=>Rt,
    "getStreamInfoFromPlaylist",
    ()=>gt,
    "getStreamInfoFromSrcAndType",
    ()=>Mt,
    "getStreamType",
    ()=>we,
    "getStreamTypeConfig",
    ()=>wt,
    "getTargetLiveWindow",
    ()=>$r,
    "getTextTrack",
    ()=>w,
    "i18n",
    ()=>x,
    "initialize",
    ()=>jr,
    "isKeyOf",
    ()=>O,
    "isMuxVideoSrc",
    ()=>Xe,
    "isPseudoEnded",
    ()=>Nt,
    "isStuckOnLastFragment",
    ()=>Je,
    "loadMedia",
    ()=>Wt,
    "muxMediaState",
    ()=>P,
    "parseJwt",
    ()=>ee,
    "parseTagAttributes",
    ()=>Et,
    "removeTextTrack",
    ()=>st,
    "setupChapters",
    ()=>Ae,
    "setupCuePoints",
    ()=>ke,
    "setupHls",
    ()=>St,
    "setupMux",
    ()=>Kt,
    "setupNativeFairplayDRM",
    ()=>Vt,
    "shorthandKeys",
    ()=>Jt,
    "teardown",
    ()=>It,
    "toAppCertURL",
    ()=>Ge,
    "toDRMTypeFromKeySystem",
    ()=>ft,
    "toLicenseKeyURL",
    ()=>q,
    "toMuxVideoURL",
    ()=>Yr,
    "toPlaybackIdFromSrc",
    ()=>$e,
    "toPlaybackIdParts",
    ()=>F,
    "updateStreamInfoFromHlsjsLevelDetails",
    ()=>Dt,
    "updateStreamInfoFromSrc",
    ()=>xt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/mux-embed/dist/mux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript)");
;
;
var g = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
var C = {
    VIDEO: "video",
    THUMBNAIL: "thumbnail",
    STORYBOARD: "storyboard",
    DRM: "drm"
}, D = {
    NOT_AN_ERROR: 0,
    NETWORK_OFFLINE: 2000002,
    NETWORK_UNKNOWN_ERROR: 2e6,
    NETWORK_NO_STATUS: 2000001,
    NETWORK_INVALID_URL: 24e5,
    NETWORK_NOT_FOUND: 2404e3,
    NETWORK_NOT_READY: 2412e3,
    NETWORK_GENERIC_SERVER_FAIL: 25e5,
    NETWORK_TOKEN_MISSING: 2403201,
    NETWORK_TOKEN_MALFORMED: 2412202,
    NETWORK_TOKEN_EXPIRED: 2403210,
    NETWORK_TOKEN_AUD_MISSING: 2403221,
    NETWORK_TOKEN_AUD_MISMATCH: 2403222,
    NETWORK_TOKEN_SUB_MISMATCH: 2403232,
    ENCRYPTED_ERROR: 5e6,
    ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001,
    ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002,
    ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003,
    ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004,
    ENCRYPTED_CDM_ERROR: 5000005,
    ENCRYPTED_OUTPUT_RESTRICTED: 5000006,
    ENCRYPTED_MISSING_TOKEN: 5000002
}, V = (e)=>e === C.VIDEO ? "playback" : e, L = class L extends Error {
    constructor(t, r = L.MEDIA_ERR_CUSTOM, n, o){
        var a;
        super(t), this.name = "MediaError", this.code = r, this.context = o, this.fatal = n != null ? n : r >= L.MEDIA_ERR_NETWORK && r <= L.MEDIA_ERR_ENCRYPTED, this.message || (this.message = (a = L.defaultMessages[this.code]) != null ? a : "");
    }
};
L.MEDIA_ERR_ABORTED = 1, L.MEDIA_ERR_NETWORK = 2, L.MEDIA_ERR_DECODE = 3, L.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, L.MEDIA_ERR_ENCRYPTED = 5, L.MEDIA_ERR_CUSTOM = 100, L.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail.",
    3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
    4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
    5: "The media is encrypted and there are no keys to decrypt it."
};
var f = L;
var et = (e)=>e == null, O = (e, t)=>et(t) ? !1 : e in t, K = {
    ANY: "any",
    MUTED: "muted"
}, _ = {
    ON_DEMAND: "on-demand",
    LIVE: "live",
    UNKNOWN: "unknown"
}, X = {
    MSE: "mse",
    NATIVE: "native"
}, S = {
    HEADER: "header",
    QUERY: "query",
    NONE: "none"
}, jt = Object.values(S), A = {
    M3U8: "application/vnd.apple.mpegurl",
    MP4: "video/mp4"
}, W = {
    HLS: A.M3U8
}, Jt = Object.keys(W), qt = [
    ...Object.values(A),
    "hls",
    "HLS"
], Gt = {
    upTo720p: "720p",
    upTo1080p: "1080p",
    upTo1440p: "1440p",
    upTo2160p: "2160p"
}, Xt = {
    noLessThan480p: "480p",
    noLessThan540p: "540p",
    noLessThan720p: "720p",
    noLessThan1080p: "1080p",
    noLessThan1440p: "1440p",
    noLessThan2160p: "2160p"
}, zt = {
    DESCENDING: "desc"
};
var tt = "en", Y = {
    code: tt
};
var v = function(e, t, r, n) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : e;
    o.addEventListener(t, r, n), e.addEventListener("teardown", ()=>{
        o.removeEventListener(t, r);
    }, {
        once: !0
    });
};
function fe(e, t, r) {
    t && r > t && (r = t);
    for(let n = 0; n < e.length; n++)if (e.start(n) <= r && e.end(n) >= r) return !0;
    return !1;
}
var F = (e)=>{
    let t = e.indexOf("?");
    if (t < 0) return [
        e
    ];
    let r = e.slice(0, t), n = e.slice(t);
    return [
        r,
        n
    ];
}, U = (e)=>{
    let { type: t } = e;
    if (t) {
        let r = t.toUpperCase();
        return O(r, W) ? W[r] : t;
    }
    return rt(e);
}, Q = (e)=>e === "VOD" ? _.ON_DEMAND : _.LIVE, Z = (e)=>e === "EVENT" ? Number.POSITIVE_INFINITY : e === "VOD" ? Number.NaN : 0, rt = (e)=>{
    let { src: t } = e;
    if (!t) return "";
    let r = "";
    try {
        r = new URL(t).pathname;
    } catch (e) {
        console.error("invalid url");
    }
    let n = r.lastIndexOf(".");
    if (n < 0) return ot(e) ? A.M3U8 : "";
    let a = r.slice(n + 1).toUpperCase();
    return O(a, A) ? A[a] : "";
}, nt = "mux.com", ot = (param)=>{
    let { src: e, customDomain: t = nt } = param;
    let r;
    try {
        r = new URL("".concat(e));
    } catch (e) {
        return !1;
    }
    let n = r.protocol === "https:", o = r.hostname === "stream.".concat(t).toLowerCase(), a = r.pathname.split("/"), i = a.length === 2, c = !(a != null && a[1].includes("."));
    return n && o && i && c;
}, ee = (e)=>{
    let t = (e != null ? e : "").split(".")[1];
    if (t) try {
        let r = t.replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(atob(r).split("").map(function(o) {
            return "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(n);
    } catch (e) {
        return;
    }
}, Te = function(param) {
    let { exp: e } = param, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Date.now();
    return !e || e * 1e3 < t;
}, ye = (param, t)=>{
    let { sub: e } = param;
    return e !== t;
}, me = (param, t)=>{
    let { aud: e } = param;
    return !e;
}, Ee = (param, t)=>{
    let { aud: e } = param;
    return e !== t;
}, ge = "en";
function x(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    var o, a;
    let r = t && (a = (o = Y) == null ? void 0 : o[e]) != null ? a : e, n = t ? Y.code : ge;
    return new z(r, n);
}
var z = class {
    format(t) {
        return this.message.replace(/\{(\w+)\}/g, (r, n)=>{
            var o;
            return (o = t[n]) != null ? o : "";
        });
    }
    toString() {
        return this.message;
    }
    constructor(t, r = ((n)=>(n = Y) != null ? n : ge)()){
        this.message = t, this.locale = r;
    }
};
var at = Object.values(K), Me = (e)=>typeof e == "boolean" || typeof e == "string" && at.includes(e), xe = (e, t, r)=>{
    let { autoplay: n } = e, o = !1, a = !1, i = Me(n) ? n : !!n, c = ()=>{
        o || v(t, "playing", ()=>{
            o = !0;
        }, {
            once: !0
        });
    };
    if (c(), v(t, "loadstart", ()=>{
        o = !1, c(), te(t, i);
    }, {
        once: !0
    }), v(t, "loadstart", ()=>{
        r || (e.streamType && e.streamType !== _.UNKNOWN ? a = e.streamType === _.LIVE : a = !Number.isFinite(t.duration)), te(t, i);
    }, {
        once: !0
    }), r && r.once(g.Events.LEVEL_LOADED, (u, s)=>{
        var p;
        e.streamType && e.streamType !== _.UNKNOWN ? a = e.streamType === _.LIVE : a = (p = s.details.live) != null ? p : !1;
    }), !i) {
        let u = ()=>{
            !a || Number.isFinite(e.startTime) || (r != null && r.liveSyncPosition ? t.currentTime = r.liveSyncPosition : Number.isFinite(t.seekable.end(0)) && (t.currentTime = t.seekable.end(0)));
        };
        r && v(t, "play", ()=>{
            t.preload === "metadata" ? r.once(g.Events.LEVEL_UPDATED, u) : u();
        }, {
            once: !0
        });
    }
    return (u)=>{
        o || (i = Me(u) ? u : !!u, te(t, i));
    };
}, te = (e, t)=>{
    if (!t) return;
    let r = e.muted, n = ()=>e.muted = r;
    switch(t){
        case K.ANY:
            e.play().catch(()=>{
                e.muted = !0, e.play().catch(n);
            });
            break;
        case K.MUTED:
            e.muted = !0, e.play().catch(n);
            break;
        default:
            e.play().catch(()=>{});
            break;
    }
};
var Re = (param, r, n)=>{
    let { preload: e, src: t } = param;
    let o = (p)=>{
        p != null && [
            "",
            "none",
            "metadata",
            "auto"
        ].includes(p) ? r.setAttribute("preload", p) : r.removeAttribute("preload");
    };
    if (!n) return o(e), o;
    let a = !1, i = !1, c = n.config.maxBufferLength, d = n.config.maxBufferSize, u = (p)=>{
        o(p);
        let l = p != null ? p : r.preload;
        i || l === "none" || (l === "metadata" ? (n.config.maxBufferLength = 1, n.config.maxBufferSize = 1) : (n.config.maxBufferLength = c, n.config.maxBufferSize = d), s());
    }, s = ()=>{
        !a && t && (a = !0, n.loadSource(t));
    };
    return v(r, "play", ()=>{
        i = !0, n.config.maxBufferLength = c, n.config.maxBufferSize = d, s();
    }, {
        once: !0
    }), u(e), u;
};
function De(e, t) {
    var c;
    if (!("videoTracks" in e)) return;
    let r = new WeakMap;
    t.on(g.Events.MANIFEST_PARSED, function(d, u) {
        i();
        let s = e.addVideoTrack("main");
        s.selected = !0;
        for (let [p, l] of u.levels.entries()){
            let T = s.addRendition(l.url[0], l.width, l.height, l.videoCodec, l.bitrate);
            r.set(l, "".concat(p)), T.id = "".concat(p);
        }
    }), t.on(g.Events.AUDIO_TRACKS_UPDATED, function(d, u) {
        a();
        for (let s of u.audioTracks){
            let p = s.default ? "main" : "alternative", l = e.addAudioTrack(p, s.name, s.lang);
            l.id = "".concat(s.id), s.default && (l.enabled = !0);
        }
    }), e.audioTracks.addEventListener("change", ()=>{
        var s;
        let d = +((s = [
            ...e.audioTracks
        ].find((p)=>p.enabled)) == null ? void 0 : s.id), u = t.audioTracks.map((p)=>p.id);
        d != t.audioTrack && u.includes(d) && (t.audioTrack = d);
    }), t.on(g.Events.LEVELS_UPDATED, function(d, u) {
        var l;
        let s = e.videoTracks[(l = e.videoTracks.selectedIndex) != null ? l : 0];
        if (!s) return;
        let p = u.levels.map((T)=>r.get(T));
        for (let T of e.videoRenditions)T.id && !p.includes(T.id) && s.removeRendition(T);
    });
    let n = (d)=>{
        let u = d.target.selectedIndex;
        u != t.nextLevel && (t.nextLevel = u);
    };
    (c = e.videoRenditions) == null || c.addEventListener("change", n);
    let o = ()=>{
        for (let d of e.videoTracks)e.removeVideoTrack(d);
    }, a = ()=>{
        for (let d of e.audioTracks)e.removeAudioTrack(d);
    }, i = ()=>{
        o(), a();
    };
    t.once(g.Events.DESTROYING, i);
}
var re = (e)=>"time" in e ? e.time : e.startTime;
function be(e, t) {
    t.on(g.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (o, param)=>{
        let { tracks: a } = param;
        a.forEach((i)=>{
            var s, p;
            let c = (s = i.subtitleTrack) != null ? s : i.closedCaptions, d = t.subtitleTracks.findIndex((param)=>{
                let { lang: l, name: T, type: m } = param;
                return l == (c == null ? void 0 : c.lang) && T === i.label && m.toLowerCase() === i.kind;
            }), u = ((p = i._id) != null ? p : i.default) ? "default" : "".concat(i.kind).concat(d);
            ne(e, i.kind, i.label, c == null ? void 0 : c.lang, u, i.default);
        });
    });
    let r = ()=>{
        if (!t.subtitleTracks.length) return;
        let o = Array.from(e.textTracks).find((c)=>c.id && c.mode === "showing" && [
                "subtitles",
                "captions"
            ].includes(c.kind));
        if (!o) return;
        let a = t.subtitleTracks[t.subtitleTrack], i = a ? a.default ? "default" : "".concat(t.subtitleTracks[t.subtitleTrack].type.toLowerCase()).concat(t.subtitleTrack) : void 0;
        if (t.subtitleTrack < 0 || (o == null ? void 0 : o.id) !== i) {
            let c = t.subtitleTracks.findIndex((param)=>{
                let { lang: d, name: u, type: s, default: p } = param;
                return o.id === "default" && p || d == o.language && u === o.label && s.toLowerCase() === o.kind;
            });
            t.subtitleTrack = c;
        }
        (o == null ? void 0 : o.id) === i && o.cues && Array.from(o.cues).forEach((c)=>{
            o.addCue(c);
        });
    };
    e.textTracks.addEventListener("change", r), t.on(g.Events.CUES_PARSED, (o, param)=>{
        let { track: a, cues: i } = param;
        let c = e.textTracks.getTrackById(a);
        if (!c) return;
        let d = c.mode === "disabled";
        d && (c.mode = "hidden"), i.forEach((u)=>{
            var s;
            (s = c.cues) != null && s.getCueById(u.id) || c.addCue(u);
        }), d && (c.mode = "disabled");
    }), t.once(g.Events.DESTROYING, ()=>{
        e.textTracks.removeEventListener("change", r), e.querySelectorAll("track[data-removeondestroy]").forEach((a)=>{
            a.remove();
        });
    });
    let n = ()=>{
        Array.from(e.textTracks).forEach((o)=>{
            var a, i;
            if (![
                "subtitles",
                "caption"
            ].includes(o.kind) && (o.label === "thumbnails" || o.kind === "chapters")) {
                if (!((a = o.cues) != null && a.length)) {
                    let c = "track";
                    o.kind && (c += '[kind="'.concat(o.kind, '"]')), o.label && (c += '[label="'.concat(o.label, '"]'));
                    let d = e.querySelector(c), u = (i = d == null ? void 0 : d.getAttribute("src")) != null ? i : "";
                    d == null || d.removeAttribute("src"), setTimeout(()=>{
                        d == null || d.setAttribute("src", u);
                    }, 0);
                }
                o.mode !== "hidden" && (o.mode = "hidden");
            }
        });
    };
    t.once(g.Events.MANIFEST_LOADED, n), t.once(g.Events.MEDIA_ATTACHED, n);
}
function ne(e, t, r, n, o, a) {
    let i = document.createElement("track");
    return i.kind = t, i.label = r, n && (i.srclang = n), o && (i.id = o), a && (i.default = !0), i.track.mode = [
        "subtitles",
        "captions"
    ].includes(t) ? "disabled" : "hidden", i.setAttribute("data-removeondestroy", ""), e.append(i), i.track;
}
function st(e, t) {
    let r = Array.prototype.find.call(e.querySelectorAll("track"), (n)=>n.track === t);
    r == null || r.remove();
}
function w(e, t, r) {
    var n;
    return (n = Array.from(e.querySelectorAll("track")).find((o)=>o.track.label === t && o.track.kind === r)) == null ? void 0 : n.track;
}
async function Ce(e, t, r, n) {
    let o = w(e, r, n);
    return o || (o = ne(e, n, r), o.mode = "hidden", await new Promise((a)=>setTimeout(()=>a(void 0), 0))), o.mode !== "hidden" && (o.mode = "hidden"), [
        ...t
    ].sort((a, i)=>re(i) - re(a)).forEach((a)=>{
        var d, u;
        let i = a.value, c = re(a);
        if ("endTime" in a && a.endTime != null) o == null || o.addCue(new VTTCue(c, a.endTime, n === "chapters" ? i : JSON.stringify(i != null ? i : null)));
        else {
            let s = Array.prototype.findIndex.call(o == null ? void 0 : o.cues, (m)=>m.startTime >= c), p = (d = o == null ? void 0 : o.cues) == null ? void 0 : d[s], l = p ? p.startTime : Number.isFinite(e.duration) ? e.duration : Number.MAX_SAFE_INTEGER, T = (u = o == null ? void 0 : o.cues) == null ? void 0 : u[s - 1];
            T && (T.endTime = c), o == null || o.addCue(new VTTCue(c, l, n === "chapters" ? i : JSON.stringify(i != null ? i : null)));
        }
    }), e.textTracks.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), o;
}
var oe = "cuepoints", ve = Object.freeze({
    label: oe
});
async function Pe(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ve;
    return Ce(e, t, r.label, "metadata");
}
var $ = (e)=>({
        time: e.startTime,
        value: JSON.parse(e.text)
    });
function it(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        label: oe
    };
    let r = w(e, t.label, "metadata");
    return r != null && r.cues ? Array.from(r.cues, (n)=>$(n)) : [];
}
function _e(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        label: oe
    };
    var a, i;
    let r = w(e, t.label, "metadata");
    if (!((a = r == null ? void 0 : r.activeCues) != null && a.length)) return;
    if (r.activeCues.length === 1) return $(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((i = r.activeCues) != null ? i : [], (param)=>{
        let { startTime: c, endTime: d } = param;
        return c <= n && d > n;
    });
    return $(o || r.activeCues[0]);
}
async function ke(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ve;
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await Pe(e, [], t);
            v(e, "cuechange", ()=>{
                let o = _e(e);
                if (o) {
                    let a = new CustomEvent("cuepointchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(a);
                }
            }, {}, n), r(n);
        });
    });
}
var ae = "chapters", he = Object.freeze({
    label: ae
}), B = (e)=>({
        startTime: e.startTime,
        endTime: e.endTime,
        value: e.text
    });
async function Le(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : he;
    return Ce(e, t, r.label, "chapters");
}
function ct(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        label: ae
    };
    var n;
    let r = w(e, t.label, "chapters");
    return (n = r == null ? void 0 : r.cues) != null && n.length ? Array.from(r.cues, (o)=>B(o)) : [];
}
function Ne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        label: ae
    };
    var a, i;
    let r = w(e, t.label, "chapters");
    if (!((a = r == null ? void 0 : r.activeCues) != null && a.length)) return;
    if (r.activeCues.length === 1) return B(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((i = r.activeCues) != null ? i : [], (param)=>{
        let { startTime: c, endTime: d } = param;
        return c <= n && d > n;
    });
    return B(o || r.activeCues[0]);
}
async function Ae(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : he;
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await Le(e, [], t);
            v(e, "cuechange", ()=>{
                let o = Ne(e);
                if (o) {
                    let a = new CustomEvent("chapterchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(a);
                }
            }, {}, n), r(n);
        });
    });
}
function ut(e, t) {
    if (t) {
        let r = t.playingDate;
        if (r != null) return new Date(r.getTime() - e.currentTime * 1e3);
    }
    return typeof e.getStartDate == "function" ? e.getStartDate() : new Date(NaN);
}
function dt(e, t) {
    if (t && t.playingDate) return t.playingDate;
    if (typeof e.getStartDate == "function") {
        let r = e.getStartDate();
        return new Date(r.getTime() + e.currentTime * 1e3);
    }
    return new Date(NaN);
}
var se = {
    VIDEO: "v",
    THUMBNAIL: "t",
    STORYBOARD: "s",
    DRM: "d"
}, lt = (e)=>{
    if (e === C.VIDEO) return se.VIDEO;
    if (e === C.DRM) return se.DRM;
}, pt = (e, t)=>{
    var o, a;
    let r = V(e), n = "".concat(r, "Token");
    return (o = t.tokens) != null && o[r] ? (a = t.tokens) == null ? void 0 : a[r] : O(n, t) ? t[n] : void 0;
}, H = function(e, t, r, n) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !((i)=>(i = globalThis.navigator) == null ? void 0 : i.onLine)();
    var M, h;
    if (a) {
        let E = x("Your device appears to be offline", o), b = void 0, y = f.MEDIA_ERR_NETWORK, k = new f(E, y, !1, b);
        return k.errorCategory = t, k.muxCode = D.NETWORK_OFFLINE, k.data = e, k;
    }
    let c = "status" in e ? e.status : e.code, d = Date.now(), u = f.MEDIA_ERR_NETWORK;
    if (c === 200) return;
    let s = V(t), p = pt(t, r), l = lt(t), [T] = F((M = r.playbackId) != null ? M : "");
    if (!c || !T) return;
    let m = ee(p);
    if (p && !m) {
        let E = x("The {tokenNamePrefix}-token provided is invalid or malformed.", o).format({
            tokenNamePrefix: s
        }), b = x("Compact JWT string: {token}", o).format({
            token: p
        }), y = new f(E, u, !0, b);
        return y.errorCategory = t, y.muxCode = D.NETWORK_TOKEN_MALFORMED, y.data = e, y;
    }
    if (c >= 500) {
        let E = new f("", u, n != null ? n : !0);
        return E.errorCategory = t, E.muxCode = D.NETWORK_UNKNOWN_ERROR, E;
    }
    if (c === 403) if (m) {
        if (Te(m, d)) {
            let E = {
                timeStyle: "medium",
                dateStyle: "medium"
            }, b = x("The video\u2019s secured {tokenNamePrefix}-token has expired.", o).format({
                tokenNamePrefix: s
            }), y = x("Expired at: {expiredDate}. Current time: {currentDate}.", o).format({
                expiredDate: new Intl.DateTimeFormat("en", E).format((h = m.exp) != null ? h : 0 * 1e3),
                currentDate: new Intl.DateTimeFormat("en", E).format(d)
            }), k = new f(b, u, !0, y);
            return k.errorCategory = t, k.muxCode = D.NETWORK_TOKEN_EXPIRED, k.data = e, k;
        }
        if (ye(m, T)) {
            let E = x("The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", o).format({
                tokenNamePrefix: s
            }), b = x("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}", o).format({
                tokenNamePrefix: s,
                playbackId: T,
                tokenPlaybackId: m.sub
            }), y = new f(E, u, !0, b);
            return y.errorCategory = t, y.muxCode = D.NETWORK_TOKEN_SUB_MISMATCH, y.data = e, y;
        }
        if (me(m, l)) {
            let E = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: s
            }), b = x("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: s,
                expectedAud: l
            }), y = new f(E, u, !0, b);
            return y.errorCategory = t, y.muxCode = D.NETWORK_TOKEN_AUD_MISSING, y.data = e, y;
        }
        if (Ee(m, l)) {
            let E = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: s
            }), b = x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: s,
                expectedAud: l,
                aud: m.aud
            }), y = new f(E, u, !0, b);
            return y.errorCategory = t, y.muxCode = D.NETWORK_TOKEN_AUD_MISMATCH, y.data = e, y;
        }
    } else {
        let E = x("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.", o).format({
            tokenNamePrefix: s,
            category: t
        }), b = x("Specified playback ID: {playbackId}", o).format({
            playbackId: T
        }), y = new f(E, u, n != null ? n : !0, b);
        return y.errorCategory = t, y.muxCode = D.NETWORK_TOKEN_MISSING, y.data = e, y;
    }
    if (c === 412) {
        let E = x("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.", o), b = x("Specified playback ID: {playbackId}", o).format({
            playbackId: T
        }), y = new f(E, u, n != null ? n : !0, b);
        return y.errorCategory = t, y.muxCode = D.NETWORK_NOT_READY, y.streamType = r.streamType === _.LIVE ? "live" : r.streamType === _.ON_DEMAND ? "on-demand" : "unknown", y.data = e, y;
    }
    if (c === 404) {
        let E = x("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.", o), b = x("Specified playback ID: {playbackId}", o).format({
            playbackId: T
        }), y = new f(E, u, n != null ? n : !0, b);
        return y.errorCategory = t, y.muxCode = D.NETWORK_NOT_FOUND, y.data = e, y;
    }
    if (c === 400) {
        let E = x("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."), b = x("Specified playback ID: {playbackId}", o).format({
            playbackId: T
        }), y = new f(E, u, n != null ? n : !0, b);
        return y.errorCategory = t, y.muxCode = D.NETWORK_INVALID_URL, y.data = e, y;
    }
    let R = new f("", u, n != null ? n : !0);
    return R.errorCategory = t, R.muxCode = D.NETWORK_UNKNOWN_ERROR, R.data = e, R;
};
var Ie = g.DefaultConfig.capLevelController, j = class j extends Ie {
    get levels() {
        var t;
        return (t = this.hls.levels) != null ? t : [];
    }
    getValidLevels(t) {
        return this.levels.filter((r, n)=>this.isLevelAllowed(r) && n <= t);
    }
    getMaxLevel(t) {
        let r = super.getMaxLevel(t), n = this.getValidLevels(t);
        if (!n[r]) return r;
        let o = Math.min(n[r].width, n[r].height), a = j.minMaxResolution;
        return o >= a ? r : Ie.getMaxLevelByMediaSize(n, a * (16 / 9), a);
    }
    constructor(t){
        super(t);
    }
};
j.minMaxResolution = 720;
var ie = j, Se = ie;
var J = {
    FAIRPLAY: "fairplay",
    PLAYREADY: "playready",
    WIDEVINE: "widevine"
}, ft = (e)=>{
    if (e.includes("fps")) return J.FAIRPLAY;
    if (e.includes("playready")) return J.PLAYREADY;
    if (e.includes("widevine")) return J.WIDEVINE;
}, Tt = (e)=>{
    let t = e.split("\n").find((r, n, o)=>n && o[n - 1].startsWith("#EXT-X-STREAM-INF"));
    return fetch(t).then((r)=>r.status !== 200 ? Promise.reject(r) : r.text());
}, yt = (e)=>{
    let t = e.split("\n").filter((n)=>n.startsWith("#EXT-X-SESSION-DATA"));
    if (!t.length) return {};
    let r = {};
    for (let n of t){
        let o = Et(n), a = o["DATA-ID"];
        a && (r[a] = {
            ...o
        });
    }
    return {
        sessionData: r
    };
}, mt = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;
function Et(e) {
    let t = [
        ...e.matchAll(mt)
    ];
    return Object.fromEntries(t.map((param)=>{
        let [, r, n] = param;
        return [
            r,
            n
        ];
    }));
}
var gt = (e)=>{
    var c, d, u;
    let t = e.split("\n"), n = (d = ((c = t.find((s)=>s.startsWith("#EXT-X-PLAYLIST-TYPE"))) != null ? c : "").split(":")[1]) == null ? void 0 : d.trim(), o = Q(n), a = Z(n), i;
    if (o === _.LIVE) {
        let s = t.find((l)=>l.startsWith("#EXT-X-PART-INF"));
        if (!!s) i = +s.split(":")[1].split("=")[1] * 2;
        else {
            let l = t.find((R)=>R.startsWith("#EXT-X-TARGETDURATION")), T = (u = l == null ? void 0 : l.split(":")) == null ? void 0 : u[1];
            i = +(T != null ? T : 6) * 3;
        }
    }
    return {
        streamType: o,
        targetLiveWindow: a,
        liveEdgeStartOffset: i
    };
}, Mt = async (e, t)=>{
    if (t === A.MP4) return {
        streamType: _.ON_DEMAND,
        targetLiveWindow: Number.NaN,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
    if (t === A.M3U8) {
        let r = await fetch(e);
        if (!r.ok) return Promise.reject(r);
        let n = await r.text(), o = await Tt(n);
        return {
            ...yt(n),
            ...gt(o)
        };
    }
    return console.error("Media type ".concat(t, " is an unrecognized or unsupported type for src ").concat(e, ".")), {
        streamType: void 0,
        targetLiveWindow: void 0,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
}, xt = async function(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : U({
        src: e
    });
    var d, u, s, p;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: a, sessionData: i } = await Mt(e, r), c = i == null ? void 0 : i["com.apple.hls.chapters"];
    (c != null && c.URI || c != null && c.VALUE.toLocaleLowerCase().startsWith("http")) && de((d = c.URI) != null ? d : c.VALUE, t), ((u = P.get(t)) != null ? u : {}).liveEdgeStartOffset = a, ((s = P.get(t)) != null ? s : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((p = P.get(t)) != null ? p : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, de = async (e, t)=>{
    var r, n;
    try {
        let o = await fetch(e);
        if (!o.ok) throw new Error("Failed to fetch Mux metadata: ".concat(o.status, " ").concat(o.statusText));
        let a = await o.json(), i = {};
        if (!((r = a == null ? void 0 : a[0]) != null && r.metadata)) return;
        for (let d of a[0].metadata)d.key && d.value && (i[d.key] = d.value);
        ((n = P.get(t)) != null ? n : {}).metadata = i;
        let c = new CustomEvent("muxmetadata");
        t.dispatchEvent(c);
    } catch (o) {
        console.error(o);
    }
}, Rt = (e)=>{
    var i;
    let t = e.type, r = Q(t), n = Z(t), o, a = !!((i = e.partList) != null && i.length);
    return r === _.LIVE && (o = a ? e.partTarget * 2 : e.targetduration * 3), {
        streamType: r,
        targetLiveWindow: n,
        liveEdgeStartOffset: o,
        lowLatency: a
    };
}, Dt = (e, t, r)=>{
    var c, d, u, s, p, l, T, m;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: a, lowLatency: i } = Rt(e);
    if (n === _.LIVE) {
        i ? (r.config.backBufferLength = (c = r.userConfig.backBufferLength) != null ? c : 4, r.config.maxFragLookUpTolerance = (d = r.userConfig.maxFragLookUpTolerance) != null ? d : .001, r.config.abrBandWidthUpFactor = (u = r.userConfig.abrBandWidthUpFactor) != null ? u : r.config.abrBandWidthFactor) : r.config.backBufferLength = (s = r.userConfig.backBufferLength) != null ? s : 8;
        let R = Object.freeze({
            get length () {
                return t.seekable.length;
            },
            start (M) {
                return t.seekable.start(M);
            },
            end (M) {
                var h;
                return M > this.length || M < 0 || Number.isFinite(t.duration) ? t.seekable.end(M) : (h = r.liveSyncPosition) != null ? h : t.seekable.end(M);
            }
        });
        ((p = P.get(t)) != null ? p : {}).seekable = R;
    }
    ((l = P.get(t)) != null ? l : {}).liveEdgeStartOffset = a, ((T = P.get(t)) != null ? T : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((m = P.get(t)) != null ? m : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, Oe, Ue, bt = (Ue = (Oe = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Oe.userAgent) != null ? Ue : "", He, Ve, Ke, Ct = (Ke = (Ve = (He = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : He.userAgentData) == null ? void 0 : Ve.platform) != null ? Ke : "", vt = bt.toLowerCase().includes("android") || [
    "x11",
    "android"
].some((e)=>Ct.toLowerCase().includes(e)), P = new WeakMap, I = "mux.com", We, Ye, Fe = (Ye = (We = g).isSupported) == null ? void 0 : Ye.call(We), Pt = vt, Wr = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].utils.now(), _t = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].utils.generateUUID, Yr = function() {
    let { playbackId: e, customDomain: t = I, maxResolution: r, minResolution: n, renditionOrder: o, programStartTime: a, programEndTime: i, assetStartTime: c, assetEndTime: d, playbackToken: u, tokens: { playback: s = u } = {}, extraSourceParams: p = {} } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!e) return;
    let [l, T = ""] = F(e), m = new URL("https://stream.".concat(t, "/").concat(l, ".m3u8").concat(T));
    return s || m.searchParams.has("token") ? (m.searchParams.forEach((R, M)=>{
        M != "token" && m.searchParams.delete(M);
    }), s && m.searchParams.set("token", s)) : (r && m.searchParams.set("max_resolution", r), n && (m.searchParams.set("min_resolution", n), r && +r.slice(0, -1) < +n.slice(0, -1) && console.error("minResolution must be <= maxResolution", "minResolution", n, "maxResolution", r)), o && m.searchParams.set("rendition_order", o), a && m.searchParams.set("program_start_time", "".concat(a)), i && m.searchParams.set("program_end_time", "".concat(i)), c && m.searchParams.set("asset_start_time", "".concat(c)), d && m.searchParams.set("asset_end_time", "".concat(d)), Object.entries(p).forEach((param)=>{
        let [R, M] = param;
        M != null && m.searchParams.set(R, M);
    })), m.toString();
}, G = (e)=>{
    if (!e) return;
    let [t] = e.split("?");
    return t || void 0;
}, $e = (e)=>{
    if (!e || !e.startsWith("https://stream.")) return;
    let [t] = new URL(e).pathname.slice(1).split(/\.m3u8|\//);
    return t || void 0;
}, kt = (e)=>{
    var t, r, n;
    return (t = e == null ? void 0 : e.metadata) != null && t.video_id ? e.metadata.video_id : Xe(e) && (n = (r = G(e.playbackId)) != null ? r : $e(e.src)) != null ? n : e.src;
}, ht = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.error;
}, Fr = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.metadata;
}, we = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.streamType) != null ? r : _.UNKNOWN;
}, $r = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.targetLiveWindow) != null ? r : Number.NaN;
}, Be = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.seekable) != null ? r : e.seekable;
}, Br = (e)=>{
    var n;
    let t = (n = P.get(e)) == null ? void 0 : n.liveEdgeStartOffset;
    if (typeof t != "number") return Number.NaN;
    let r = Be(e);
    return r.length ? r.end(r.length - 1) - t : Number.NaN;
}, le = .034, Lt = function(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : le;
    return Math.abs(e - t) <= r;
}, je = function(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : le;
    return e > t || Lt(e, t, r);
}, Nt = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : le;
    return e.paused && je(e.currentTime, e.duration, t);
}, Je = (e, t)=>{
    var u, s, p;
    if (!t || !e.buffered.length) return;
    if (e.readyState > 2) return !1;
    let r = t.currentLevel >= 0 ? (s = (u = t.levels) == null ? void 0 : u[t.currentLevel]) == null ? void 0 : s.details : (p = t.levels.find((l)=>!!l.details)) == null ? void 0 : p.details;
    if (!r || r.live) return;
    let { fragments: n } = r;
    if (!(n != null && n.length)) return;
    if (e.currentTime < e.duration - (r.targetduration + .5)) return !1;
    let o = n[n.length - 1];
    if (e.currentTime <= o.start) return !1;
    let a = o.start + o.duration / 2, i = e.buffered.start(e.buffered.length - 1), c = e.buffered.end(e.buffered.length - 1);
    return a > i && a < c;
}, At = (e, t)=>e.ended || e.loop ? e.ended : t && Je(e, t) ? !0 : Nt(e), jr = (e, t, r)=>{
    It(t, r, e);
    let { metadata: n = {} } = e, { view_session_id: o = _t() } = n, a = kt(e);
    n.view_session_id = o, n.video_id = a, e.metadata = n;
    let i = (s)=>{
        var p;
        (p = t.mux) == null || p.emit("hb", {
            view_drm_type: s
        });
    };
    e.drmTypeCb = i, P.set(t, {
        retryCount: 0
    });
    let c = St(e, t), d = Re(e, t, c);
    e != null && e.muxDataKeepSession && t != null && t.mux && !t.mux.deleted ? c && t.mux.addHLSJS({
        hlsjs: c,
        Hls: c ? g : void 0
    }) : Kt(e, t, c), Wt(e, t, c), ke(t), Ae(t);
    let u = xe(e, t, c);
    return {
        engine: c,
        setAutoplay: u,
        setPreload: d
    };
}, It = (e, t, r)=>{
    let n = t == null ? void 0 : t.engine;
    e != null && e.mux && !e.mux.deleted && (r != null && r.muxDataKeepSession ? n && e.mux.removeHLSJS() : (e.mux.destroy(), delete e.mux)), n && (n.detachMedia(), n.destroy()), e && (e.hasAttribute("src") && (e.removeAttribute("src"), e.load()), e.removeEventListener("error", Qe), e.removeEventListener("error", ce), e.removeEventListener("durationchange", ze), P.delete(e), e.dispatchEvent(new Event("teardown")));
};
function qe(e, t) {
    var u;
    let r = U(e);
    if (!(r === A.M3U8)) return !0;
    let o = !r || ((u = t.canPlayType(r)) != null ? u : !0), { preferPlayback: a } = e, i = a === X.MSE, c = a === X.NATIVE;
    return o && (c || !(Fe && (i || Pt)));
}
var St = (e, t)=>{
    let { debug: r, streamType: n, startTime: o = -1, metadata: a, preferCmcd: i, _hlsConfig: c = {} } = e, u = U(e) === A.M3U8, s = qe(e, t);
    if (u && !s && Fe) {
        let p = {
            backBufferLength: 30,
            renderTextTracksNatively: !1,
            liveDurationInfinity: !0,
            capLevelToPlayerSize: !0,
            capLevelOnFPSDrop: !0
        }, l = wt(n), T = Ot(e), m = [
            S.QUERY,
            S.HEADER
        ].includes(i) ? {
            useHeaders: i === S.HEADER,
            sessionId: a == null ? void 0 : a.view_session_id,
            contentId: a == null ? void 0 : a.video_id
        } : void 0, R = new g({
            debug: r,
            startPosition: o,
            cmcd: m,
            xhrSetup: (M, h)=>{
                var y, k;
                if (i && i !== S.QUERY) return;
                let E = new URL(h);
                if (!E.searchParams.has("CMCD")) return;
                let b = ((k = (y = E.searchParams.get("CMCD")) == null ? void 0 : y.split(",")) != null ? k : []).filter((pe)=>pe.startsWith("sid") || pe.startsWith("cid")).join(",");
                E.searchParams.set("CMCD", b), M.open("GET", E);
            },
            capLevelController: Se,
            ...p,
            ...l,
            ...T,
            ...c
        });
        return R.on(g.Events.MANIFEST_PARSED, async function(M, h) {
            var b, y;
            let E = (b = h.sessionData) == null ? void 0 : b["com.apple.hls.chapters"];
            (E != null && E.URI || E != null && E.VALUE.toLocaleLowerCase().startsWith("http")) && de((y = E == null ? void 0 : E.URI) != null ? y : E == null ? void 0 : E.VALUE, t);
        }), R;
    }
}, wt = (e)=>e === _.LIVE ? {
        backBufferLength: 8
    } : {}, Ot = (e)=>{
    let { tokens: { drm: t } = {}, playbackId: r, drmTypeCb: n } = e, o = G(r);
    return !t || !o ? {} : {
        emeEnabled: !0,
        drmSystems: {
            "com.apple.fps": {
                licenseUrl: q(e, "fairplay"),
                serverCertificateUrl: Ge(e, "fairplay")
            },
            "com.widevine.alpha": {
                licenseUrl: q(e, "widevine")
            },
            "com.microsoft.playready": {
                licenseUrl: q(e, "playready")
            }
        },
        requestMediaKeySystemAccessFunc: (a, i)=>(a === "com.widevine.alpha" && (i = [
                ...i.map((c)=>{
                    var u;
                    let d = (u = c.videoCapabilities) == null ? void 0 : u.map((s)=>({
                            ...s,
                            robustness: "HW_SECURE_ALL"
                        }));
                    return {
                        ...c,
                        videoCapabilities: d
                    };
                }),
                ...i
            ]), navigator.requestMediaKeySystemAccess(a, i).then((c)=>{
                let d = ft(a);
                return n == null || n(d), c;
            }))
    };
}, Ut = async (e)=>{
    let t = await fetch(e);
    return t.status !== 200 ? Promise.reject(t) : await t.arrayBuffer();
}, Ht = async (e, t)=>{
    let r = await fetch(t, {
        method: "POST",
        headers: {
            "Content-type": "application/octet-stream"
        },
        body: e
    });
    if (r.status !== 200) return Promise.reject(r);
    let n = await r.arrayBuffer();
    return new Uint8Array(n);
}, Vt = (e, t)=>{
    v(t, "encrypted", async (n)=>{
        try {
            let o = n.initDataType;
            if (o !== "skd") {
                console.error('Received unexpected initialization data type "'.concat(o, '"'));
                return;
            }
            if (!t.mediaKeys) {
                let u = await navigator.requestMediaKeySystemAccess("com.apple.fps", [
                    {
                        initDataTypes: [
                            o
                        ],
                        videoCapabilities: [
                            {
                                contentType: "application/vnd.apple.mpegurl",
                                robustness: ""
                            }
                        ],
                        distinctiveIdentifier: "not-allowed",
                        persistentState: "not-allowed",
                        sessionTypes: [
                            "temporary"
                        ]
                    }
                ]).then((p)=>{
                    var l;
                    return (l = e.drmTypeCb) == null || l.call(e, J.FAIRPLAY), p;
                }).catch(()=>{
                    let p = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), l = new f(p, f.MEDIA_ERR_ENCRYPTED, !0);
                    l.errorCategory = C.DRM, l.muxCode = D.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM, N(t, l);
                });
                if (!u) return;
                let s = await u.createMediaKeys();
                try {
                    let p = await Ut(Ge(e, "fairplay")).catch((l)=>{
                        if (l instanceof Response) {
                            let T = H(l, C.DRM, e);
                            return console.error("mediaError", T == null ? void 0 : T.message, T == null ? void 0 : T.context), T ? Promise.reject(T) : Promise.reject(new Error("Unexpected error in app cert request"));
                        }
                        return Promise.reject(l);
                    });
                    await s.setServerCertificate(p).catch(()=>{
                        let l = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), T = new f(l, f.MEDIA_ERR_ENCRYPTED, !0);
                        return T.errorCategory = C.DRM, T.muxCode = D.ENCRYPTED_UPDATE_SERVER_CERT_FAILED, Promise.reject(T);
                    });
                } catch (p) {
                    N(t, p);
                    return;
                }
                await t.setMediaKeys(s);
            }
            let a = n.initData;
            if (a == null) {
                console.error("Could not start encrypted playback due to missing initData in ".concat(n.type, " event"));
                return;
            }
            let i = t.mediaKeys.createSession();
            i.addEventListener("keystatuseschange", ()=>{
                i.keyStatuses.forEach((u)=>{
                    let s;
                    if (u === "internal-error") {
                        let p = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
                        s = new f(p, f.MEDIA_ERR_ENCRYPTED, !0), s.errorCategory = C.DRM, s.muxCode = D.ENCRYPTED_CDM_ERROR;
                    } else if (u === "output-restricted" || u === "output-downscaled") {
                        let p = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
                        s = new f(p, f.MEDIA_ERR_ENCRYPTED, !1), s.errorCategory = C.DRM, s.muxCode = D.ENCRYPTED_OUTPUT_RESTRICTED;
                    }
                    s && N(t, s);
                });
            });
            let c = await Promise.all([
                i.generateRequest(o, a).catch(()=>{
                    let u = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), s = new f(u, f.MEDIA_ERR_ENCRYPTED, !0);
                    s.errorCategory = C.DRM, s.muxCode = D.ENCRYPTED_GENERATE_REQUEST_FAILED, N(t, s);
                }),
                new Promise((u)=>{
                    i.addEventListener("message", (s)=>{
                        u(s.message);
                    }, {
                        once: !0
                    });
                })
            ]).then((param)=>{
                let [, u] = param;
                return u;
            }), d = await Ht(c, q(e, "fairplay")).catch((u)=>{
                if (u instanceof Response) {
                    let s = H(u, C.DRM, e);
                    return console.error("mediaError", s == null ? void 0 : s.message, s == null ? void 0 : s.context), s ? Promise.reject(s) : Promise.reject(new Error("Unexpected error in license key request"));
                }
                return Promise.reject(u);
            });
            await i.update(d).catch(()=>{
                let u = x("Failed to update DRM license. This may be an issue with the player or your protected content."), s = new f(u, f.MEDIA_ERR_ENCRYPTED, !0);
                return s.errorCategory = C.DRM, s.muxCode = D.ENCRYPTED_UPDATE_LICENSE_FAILED, Promise.reject(s);
            });
        } catch (o) {
            N(t, o);
            return;
        }
    });
}, q = (param, n)=>{
    let { playbackId: e, tokens: { drm: t } = {}, customDomain: r = I } = param;
    let o = G(e);
    return "https://license.".concat(r.toLocaleLowerCase().endsWith(I) ? r : I, "/license/").concat(n, "/").concat(o, "?token=").concat(t);
}, Ge = (param, n)=>{
    let { playbackId: e, tokens: { drm: t } = {}, customDomain: r = I } = param;
    let o = G(e);
    return "https://license.".concat(r.toLocaleLowerCase().endsWith(I) ? r : I, "/appcert/").concat(n, "/").concat(o, "?token=").concat(t);
}, Xe = (param)=>{
    let { playbackId: e, src: t, customDomain: r } = param;
    if (e) return !0;
    if (typeof t != "string") return !1;
    let n = window == null ? void 0 : window.location.href, o = new URL(t, n).hostname.toLocaleLowerCase();
    return o.includes(I) || !!r && o.includes(r.toLocaleLowerCase());
}, Kt = (e, t, r)=>{
    var d;
    let { envKey: n, disableTracking: o, muxDataSDK: a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], muxDataSDKOptions: i = {} } = e, c = Xe(e);
    if (!o && (n || c)) {
        let { playerInitTime: u, playerSoftwareName: s, playerSoftwareVersion: p, beaconCollectionDomain: l, debug: T, disableCookies: m } = e, R = {
            ...e.metadata,
            video_title: ((d = e == null ? void 0 : e.metadata) == null ? void 0 : d.video_title) || void 0
        }, M = (h)=>typeof h.player_error_code == "string" ? !1 : typeof e.errorTranslator == "function" ? e.errorTranslator(h) : h;
        a.monitor(t, {
            debug: T,
            beaconCollectionDomain: l,
            hlsjs: r,
            Hls: r ? g : void 0,
            automaticErrorTracking: !1,
            errorTranslator: M,
            disableCookies: m,
            ...i,
            data: {
                ...n ? {
                    env_key: n
                } : {},
                player_software_name: s,
                player_software: s,
                player_software_version: p,
                player_init_time: u,
                ...R
            }
        });
    }
}, Wt = (e, t, r)=>{
    var s, p;
    let n = qe(e, t), { src: o, customDomain: a = I } = e, i = ()=>{
        t.ended || !At(t, r) || (Je(t, r) ? t.currentTime = t.buffered.end(t.buffered.length - 1) : t.dispatchEvent(new Event("ended")));
    }, c, d, u = ()=>{
        let l = Be(t), T, m;
        l.length > 0 && (T = l.start(0), m = l.end(0)), (d !== m || c !== T) && t.dispatchEvent(new CustomEvent("seekablechange", {
            composed: !0
        })), c = T, d = m;
    };
    if (v(t, "durationchange", u), t && n) {
        let l = U(e);
        if (typeof o == "string") {
            if (o.endsWith(".mp4") && o.includes(a)) {
                let R = $e(o), M = new URL("https://stream.".concat(a, "/").concat(R, "/metadata.json"));
                de(M.toString(), t);
            }
            let T = ()=>{
                if (we(t) !== _.LIVE || Number.isFinite(t.duration)) return;
                let R = setInterval(u, 1e3);
                t.addEventListener("teardown", ()=>{
                    clearInterval(R);
                }, {
                    once: !0
                }), v(t, "durationchange", ()=>{
                    Number.isFinite(t.duration) && clearInterval(R);
                });
            }, m = async ()=>xt(o, t, l).then(T).catch((R)=>{
                    if (R instanceof Response) {
                        let M = H(R, C.VIDEO, e);
                        if (M) {
                            N(t, M);
                            return;
                        }
                    } else R instanceof Error;
                });
            if (t.preload === "none") {
                let R = ()=>{
                    m(), t.removeEventListener("loadedmetadata", M);
                }, M = ()=>{
                    m(), t.removeEventListener("play", R);
                };
                v(t, "play", R, {
                    once: !0
                }), v(t, "loadedmetadata", M, {
                    once: !0
                });
            } else m();
            (s = e.tokens) != null && s.drm ? Vt(e, t) : v(t, "encrypted", ()=>{
                let R = x("Attempting to play DRM-protected content without providing a DRM token."), M = new f(R, f.MEDIA_ERR_ENCRYPTED, !0);
                M.errorCategory = C.DRM, M.muxCode = D.ENCRYPTED_MISSING_TOKEN, N(t, M);
            }, {
                once: !0
            }), t.setAttribute("src", o), e.startTime && (((p = P.get(t)) != null ? p : {}).startTime = e.startTime, t.addEventListener("durationchange", ze, {
                once: !0
            }));
        } else t.removeAttribute("src");
        t.addEventListener("error", Qe), t.addEventListener("error", ce), t.addEventListener("emptied", ()=>{
            t.querySelectorAll("track[data-removeondestroy]").forEach((m)=>{
                m.remove();
            });
        }, {
            once: !0
        }), v(t, "pause", i), v(t, "seeked", i), v(t, "play", ()=>{
            t.ended || je(t.currentTime, t.duration) && (t.currentTime = t.seekable.length ? t.seekable.start(0) : 0);
        });
    } else r && o ? (r.once(g.Events.LEVEL_LOADED, (l, T)=>{
        Dt(T.details, t, r), u(), we(t) === _.LIVE && !Number.isFinite(t.duration) && (r.on(g.Events.LEVEL_UPDATED, u), v(t, "durationchange", ()=>{
            Number.isFinite(t.duration) && r.off(g.Events.LEVELS_UPDATED, u);
        }));
    }), r.on(g.Events.ERROR, (l, T)=>{
        var R, M;
        let m = Yt(T, e);
        if (m.muxCode === D.NETWORK_NOT_READY) {
            let E = (R = P.get(t)) != null ? R : {}, b = (M = E.retryCount) != null ? M : 0;
            if (b < 6) {
                let y = b === 0 ? 5e3 : 6e4, k = new f("Retrying in ".concat(y / 1e3, " seconds..."), m.code, m.fatal);
                Object.assign(k, m), N(t, k), setTimeout(()=>{
                    E.retryCount = b + 1, T.details === "manifestLoadError" && T.url && r.loadSource(T.url);
                }, y);
                return;
            } else {
                E.retryCount = 0;
                let y = new f('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', m.code, m.fatal);
                Object.assign(y, m), N(t, y);
                return;
            }
        }
        N(t, m);
    }), r.on(g.Events.MANIFEST_LOADED, ()=>{
        let l = P.get(t);
        l && l.error && (l.error = null, l.retryCount = 0, t.dispatchEvent(new Event("emptied")), t.dispatchEvent(new Event("loadstart")));
    }), t.addEventListener("error", ce), v(t, "waiting", i), De(e, r), be(t, r), r.attachMedia(t)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
};
function ze(e) {
    var n;
    let t = e.target, r = (n = P.get(t)) == null ? void 0 : n.startTime;
    if (r && fe(t.seekable, t.duration, r)) {
        let o = t.preload === "auto";
        o && (t.preload = "none"), t.currentTime = r, o && (t.preload = "auto");
    }
}
async function Qe(e) {
    if (!e.isTrusted) return;
    e.stopImmediatePropagation();
    let t = e.target;
    if (!(t != null && t.error)) return;
    let { message: r, code: n } = t.error, o = new f(r, n);
    if (t.src && n === f.MEDIA_ERR_SRC_NOT_SUPPORTED && t.readyState === HTMLMediaElement.HAVE_NOTHING) {
        setTimeout(()=>{
            var i;
            let a = (i = ht(t)) != null ? i : t.error;
            (a == null ? void 0 : a.code) === f.MEDIA_ERR_SRC_NOT_SUPPORTED && N(t, o);
        }, 500);
        return;
    }
    if (t.src && (n !== f.MEDIA_ERR_DECODE || n !== void 0)) try {
        let { status: a } = await fetch(t.src);
        o.data = {
            response: {
                code: a
            }
        };
    } catch (e) {}
    N(t, o);
}
function N(e, t) {
    var r;
    t.fatal && (((r = P.get(e)) != null ? r : {}).error = t, e.dispatchEvent(new CustomEvent("error", {
        detail: t
    })));
}
function ce(e) {
    var n, o;
    if (!(e instanceof CustomEvent) || !(e.detail instanceof f)) return;
    let t = e.target, r = e.detail;
    !r || !r.fatal || (((n = P.get(t)) != null ? n : {}).error = r, (o = t.mux) == null || o.emit("error", {
        player_error_code: r.code,
        player_error_message: r.message,
        player_error_context: r.context
    }));
}
var Yt = (e, t)=>{
    var c, d, u;
    console.error("getErrorFromHlsErrorData()", e);
    let r = {
        [g.ErrorTypes.NETWORK_ERROR]: f.MEDIA_ERR_NETWORK,
        [g.ErrorTypes.MEDIA_ERROR]: f.MEDIA_ERR_DECODE,
        [g.ErrorTypes.KEY_SYSTEM_ERROR]: f.MEDIA_ERR_ENCRYPTED
    }, n = (s)=>[
            g.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
            g.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED
        ].includes(s.details) ? f.MEDIA_ERR_NETWORK : r[s.type], o = (s)=>{
        if (s.type === g.ErrorTypes.KEY_SYSTEM_ERROR) return C.DRM;
        if (s.type === g.ErrorTypes.NETWORK_ERROR) return C.VIDEO;
    }, a, i = n(e);
    if (i === f.MEDIA_ERR_NETWORK && e.response) {
        let s = (c = o(e)) != null ? c : C.VIDEO;
        a = (d = H(e.response, s, t, e.fatal)) != null ? d : new f("", i, e.fatal);
    } else if (i === f.MEDIA_ERR_ENCRYPTED) if (e.details === g.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE) {
        let s = x("Attempting to play DRM-protected content without providing a DRM token.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_MISSING_TOKEN;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_NO_ACCESS) {
        let s = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_NO_SESSION) {
        let s = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, !0), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_GENERATE_REQUEST_FAILED;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED) {
        let s = x("Failed to update DRM license. This may be an issue with the player or your protected content.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_UPDATE_LICENSE_FAILED;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED) {
        let s = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_UPDATE_SERVER_CERT_FAILED;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR) {
        let s = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_CDM_ERROR;
    } else if (e.details === g.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED) {
        let s = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
        a = new f(s, f.MEDIA_ERR_ENCRYPTED, !1), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_OUTPUT_RESTRICTED;
    } else a = new f(e.error.message, f.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = D.ENCRYPTED_ERROR;
    else a = new f("", i, e.fatal);
    return a.context || (a.context = "".concat(e.url ? "url: ".concat(e.url, "\n") : "").concat(e.response && (e.response.code || e.response.text) ? "response: ".concat(e.response.code, ", ").concat(e.response.text, "\n") : "").concat(e.reason ? "failure reason: ".concat(e.reason, "\n") : "").concat(e.level ? "level: ".concat(e.level, "\n") : "").concat(e.parent ? "parent stream controller: ".concat(e.parent, "\n") : "").concat(e.buffer ? "buffer length: ".concat(e.buffer, "\n") : "").concat(e.error ? "error: ".concat(e.error, "\n") : "").concat(e.event ? "event: ".concat(e.event, "\n") : "").concat(e.err ? "error message: ".concat((u = e.err) == null ? void 0 : u.message, "\n") : "")), a.data = e, a;
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_get
]);
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_method_init(obj, privateSet) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateSet);
    privateSet.add(obj);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_access.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_check_private_static_access
]);
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_check_private_static_field_descriptor
]);
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_field_spec_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_static_private_field_spec_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_access.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js [app-client] (ecmascript)");
;
;
;
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, classConstructor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(descriptor, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_field_spec_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_static_private_field_spec_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_access.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js [app-client] (ecmascript)");
;
;
;
function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, classConstructor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(descriptor, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_static_private_method_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_check_private_static_access.js [app-client] (ecmascript)");
;
function _class_static_private_method_get(receiver, classConstructor, method) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_check_private_static_access$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, classConstructor);
    return method;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_get_prototype_of
]);
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_super_prop_base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_super_prop_base
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
;
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(object);
        if (object === null) break;
    }
    return object;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_super_prop_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_super_prop_base.js [app-client] (ecmascript)");
;
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else {
        _get = function get(target, property, receiver) {
            var base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_super_prop_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(receiver || target);
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/custom-media-element/dist/custom-media-element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "CustomAudioElement",
    ()=>CustomAudioElement,
    "CustomMediaMixin",
    ()=>CustomMediaMixin,
    "CustomVideoElement",
    ()=>CustomVideoElement,
    "Events",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_field_spec_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_field_spec_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_field_spec_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_field_spec_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const Events = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "waitingforkey",
    "resize",
    "enterpictureinpicture",
    "leavepictureinpicture",
    "webkitbeginfullscreen",
    "webkitendfullscreen",
    "webkitpresentationmodechanged"
];
const Attributes = [
    "autopictureinpicture",
    "disablepictureinpicture",
    "disableremoteplayback",
    "autoplay",
    "controls",
    "controlslist",
    "crossorigin",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "preload",
    "src"
];
function getAudioTemplateHTML(attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        display: inline-flex;\n        line-height: 0;\n        flex-direction: column;\n        justify-content: end;\n      }\n\n      audio {\n        width: 100%;\n      }\n    </style>\n    <slot name="media">\n      <audio'.concat(serializeAttributes(attrs), "></audio>\n    </slot>\n    <slot></slot>\n  ");
}
function getVideoTemplateHTML(attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        display: inline-block;\n        line-height: 0;\n      }\n\n      video {\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        object-fit: var(--media-object-fit, contain);\n        object-position: var(--media-object-position, 50% 50%);\n      }\n\n      video::-webkit-media-text-track-container {\n        transform: var(--media-webkit-text-track-transform);\n        transition: var(--media-webkit-text-track-transition);\n      }\n    </style>\n    <slot name="media">\n      <video'.concat(serializeAttributes(attrs), "></video>\n    </slot>\n    <slot></slot>\n  ");
}
function CustomMediaMixin(superclass, param) {
    let { tag, is } = param;
    var _globalThis_document_createElement, _globalThis_document;
    var // Private fields
    _isInit, _nativeEl, _childMap, _childObserver, _init, _syncMediaChildren, _syncMediaChildAttribute, _enableDefaultTrack, _upgradeProperty, _forwardAttribute, _CustomMedia, _isDefined;
    const nativeElTest = (_globalThis_document = globalThis.document) === null || _globalThis_document === void 0 ? void 0 : (_globalThis_document_createElement = _globalThis_document.createElement) === null || _globalThis_document_createElement === void 0 ? void 0 : _globalThis_document_createElement.call(_globalThis_document, tag, {
        is
    });
    const nativeElProps = nativeElTest ? getNativeElProps(nativeElTest) : [];
    return _isInit = /*#__PURE__*/ new WeakMap(), _nativeEl = /*#__PURE__*/ new WeakMap(), _childMap = /*#__PURE__*/ new WeakMap(), _childObserver = /*#__PURE__*/ new WeakMap(), _init = /*#__PURE__*/ new WeakSet(), _syncMediaChildren = /*#__PURE__*/ new WeakSet(), _syncMediaChildAttribute = /*#__PURE__*/ new WeakSet(), _enableDefaultTrack = /*#__PURE__*/ new WeakSet(), _upgradeProperty = /*#__PURE__*/ new WeakSet(), _forwardAttribute = /*#__PURE__*/ new WeakSet(), _CustomMedia = class CustomMedia extends superclass {
        static get observedAttributes() {
            var _nativeElTest_constructor;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CustomMedia, _CustomMedia, define).call(_CustomMedia);
            var _nativeElTest_constructor_observedAttributes;
            const natAttrs = (_nativeElTest_constructor_observedAttributes = nativeElTest === null || nativeElTest === void 0 ? void 0 : (_nativeElTest_constructor = nativeElTest.constructor) === null || _nativeElTest_constructor === void 0 ? void 0 : _nativeElTest_constructor.observedAttributes) !== null && _nativeElTest_constructor_observedAttributes !== void 0 ? _nativeElTest_constructor_observedAttributes : [];
            return [
                ...natAttrs,
                ...Attributes
            ];
        }
        // If the custom element is defined before the custom element's HTML is parsed
        // no attributes will be available in the constructor (construction process).
        // Wait until initializing in the attributeChangedCallback or
        // connectedCallback or accessing any properties.
        get nativeEl() {
            var _this_shadowRoot;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
            var _class_private_field_get, _ref, _ref1, _ref2;
            return (_ref2 = (_ref1 = (_ref = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nativeEl)) !== null && _class_private_field_get !== void 0 ? _class_private_field_get : this.querySelector(":scope > [slot=media]")) !== null && _ref !== void 0 ? _ref : this.querySelector(tag)) !== null && _ref1 !== void 0 ? _ref1 : (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector(tag)) !== null && _ref2 !== void 0 ? _ref2 : null;
        }
        set nativeEl(val) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nativeEl, val);
        }
        get defaultMuted() {
            return this.hasAttribute("muted");
        }
        set defaultMuted(val) {
            this.toggleAttribute("muted", val);
        }
        get src() {
            return this.getAttribute("src");
        }
        set src(val) {
            this.setAttribute("src", "".concat(val));
        }
        get preload() {
            var _this_nativeEl;
            var _this_getAttribute;
            return (_this_getAttribute = this.getAttribute("preload")) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : (_this_nativeEl = this.nativeEl) === null || _this_nativeEl === void 0 ? void 0 : _this_nativeEl.preload;
        }
        set preload(val) {
            this.setAttribute("preload", "".concat(val));
        }
        init() {
            if (!this.shadowRoot) {
                this.attachShadow({
                    mode: "open"
                });
                const attrs = namedNodeMapToObject(this.attributes);
                if (is) attrs.is = is;
                if (tag) attrs.part = tag;
                this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
            }
            this.nativeEl.muted = this.hasAttribute("muted");
            for (const prop of nativeElProps){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _upgradeProperty, upgradeProperty).call(this, prop);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childObserver, new MutationObserver((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _syncMediaChildAttribute, syncMediaChildAttribute).bind(this)));
            this.shadowRoot.addEventListener("slotchange", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _syncMediaChildren, syncMediaChildren).call(this));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _syncMediaChildren, syncMediaChildren).call(this);
            for (const type of this.constructor.Events){
                this.shadowRoot.addEventListener(type, this, true);
            }
        }
        handleEvent(event) {
            if (event.target === this.nativeEl) {
                this.dispatchEvent(new CustomEvent(event.type, {
                    detail: event.detail
                }));
            }
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _forwardAttribute, forwardAttribute).call(this, attrName, oldValue, newValue);
        }
        connectedCallback() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
        }
        constructor(...args){
            super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _syncMediaChildren), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _syncMediaChildAttribute), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enableDefaultTrack), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _upgradeProperty), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _forwardAttribute), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit, {
                writable: true,
                value: false
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nativeEl, {
                writable: true,
                value: null
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap, {
                writable: true,
                value: /* @__PURE__ */ new Map()
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childObserver, {
                writable: true,
                value: void 0
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "get", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "set", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "call", void 0);
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_CustomMedia, "getTemplateHTML", tag.endsWith("audio") ? getAudioTemplateHTML : getVideoTemplateHTML), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_CustomMedia, "shadowRootOptions", {
        mode: "open"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_CustomMedia, "Events", Events), _isDefined = {
        writable: true,
        value: false
    }, _CustomMedia;
    //TURBOPACK unreachable
    ;
    function define() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_field_spec_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _CustomMedia, _isDefined)) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_field_spec_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _CustomMedia, _isDefined, true);
        const propsToAttrs = new Set(this.observedAttributes);
        propsToAttrs.delete("muted");
        for (const prop of nativeElProps){
            if (prop in this.prototype) continue;
            if (typeof nativeElTest[prop] === "function") {
                this.prototype[prop] = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
                    const fn = ()=>{
                        var _this_nativeEl;
                        if (this.call) return this.call(prop, ...args);
                        const nativeFn = (_this_nativeEl = this.nativeEl) === null || _this_nativeEl === void 0 ? void 0 : _this_nativeEl[prop];
                        return nativeFn === null || nativeFn === void 0 ? void 0 : nativeFn.apply(this.nativeEl, args);
                    };
                    return fn();
                };
            } else {
                const config = {
                    get () {
                        var _this_get, _this, _this_nativeEl;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
                        const attr = prop.toLowerCase();
                        if (propsToAttrs.has(attr)) {
                            const val = this.getAttribute(attr);
                            return val === null ? false : val === "" ? true : val;
                        }
                        var _this_get1;
                        return (_this_get1 = (_this_get = (_this = this).get) === null || _this_get === void 0 ? void 0 : _this_get.call(_this, prop)) !== null && _this_get1 !== void 0 ? _this_get1 : (_this_nativeEl = this.nativeEl) === null || _this_nativeEl === void 0 ? void 0 : _this_nativeEl[prop];
                    }
                };
                if (prop !== prop.toUpperCase()) {
                    config.set = function(val) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
                        const attr = prop.toLowerCase();
                        if (propsToAttrs.has(attr)) {
                            if (val === true || val === false || val == null) {
                                this.toggleAttribute(attr, Boolean(val));
                            } else {
                                this.setAttribute(attr, val);
                            }
                            return;
                        }
                        if (this.set) {
                            this.set(prop, val);
                            return;
                        }
                        if (this.nativeEl) {
                            this.nativeEl[prop] = val;
                        }
                    };
                }
                Object.defineProperty(this.prototype, prop, config);
            }
        }
    }
    function init() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit)) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit, true);
        this.init();
    }
    function syncMediaChildren() {
        var _this_shadowRoot;
        const removeNativeChildren = new Map((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap));
        const defaultSlot = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector("slot:not([name])");
        const mediaChildren = defaultSlot === null || defaultSlot === void 0 ? void 0 : defaultSlot.assignedElements({
            flatten: true
        }).filter((el)=>[
                "track",
                "source"
            ].includes(el.localName));
        mediaChildren.forEach((el)=>{
            var _this_nativeEl;
            removeNativeChildren.delete(el);
            let clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap).get(el);
            if (!clone) {
                var _class_private_field_get;
                clone = el.cloneNode();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap).set(el, clone);
                (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childObserver)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.observe(el, {
                    attributes: true
                });
            }
            (_this_nativeEl = this.nativeEl) === null || _this_nativeEl === void 0 ? void 0 : _this_nativeEl.append(clone);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enableDefaultTrack, enableDefaultTrack).call(this, clone);
        });
        removeNativeChildren.forEach((clone, el)=>{
            clone.remove();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap).delete(el);
        });
    }
    function syncMediaChildAttribute(mutations) {
        for (const mutation of mutations){
            if (mutation.type === "attributes") {
                const { target, attributeName } = mutation;
                const clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _childMap).get(target);
                if (clone && attributeName) {
                    var _target_getAttribute;
                    clone.setAttribute(attributeName, (_target_getAttribute = target.getAttribute(attributeName)) !== null && _target_getAttribute !== void 0 ? _target_getAttribute : "");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enableDefaultTrack, enableDefaultTrack).call(this, clone);
                }
            }
        }
    }
    function enableDefaultTrack(trackEl) {
        if (trackEl && trackEl.localName === "track" && trackEl.default && (trackEl.kind === "chapters" || trackEl.kind === "metadata") && trackEl.track.mode === "disabled") {
            trackEl.track.mode = "hidden";
        }
    }
    function upgradeProperty(prop) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    function forwardAttribute(attrName, _oldValue, newValue) {
        var _this_nativeEl;
        if ([
            "id",
            "class"
        ].includes(attrName)) return;
        if (!_CustomMedia.observedAttributes.includes(attrName) && this.constructor.observedAttributes.includes(attrName)) {
            return;
        }
        if (newValue === null) {
            var _this_nativeEl1;
            (_this_nativeEl1 = this.nativeEl) === null || _this_nativeEl1 === void 0 ? void 0 : _this_nativeEl1.removeAttribute(attrName);
        } else if (((_this_nativeEl = this.nativeEl) === null || _this_nativeEl === void 0 ? void 0 : _this_nativeEl.getAttribute(attrName)) !== newValue) {
            var _this_nativeEl2;
            (_this_nativeEl2 = this.nativeEl) === null || _this_nativeEl2 === void 0 ? void 0 : _this_nativeEl2.setAttribute(attrName, newValue);
        }
    }
}
function getNativeElProps(nativeElTest) {
    const nativeElProps = [];
    for(let proto = Object.getPrototypeOf(nativeElTest); proto && proto !== HTMLElement.prototype; proto = Object.getPrototypeOf(proto)){
        const props = Object.getOwnPropertyNames(proto);
        nativeElProps.push(...props);
    }
    return nativeElProps;
}
function serializeAttributes(attrs) {
    let html = "";
    for(const key in attrs){
        if (!Attributes.includes(key)) continue;
        const value = attrs[key];
        if (value === "") html += " ".concat(key);
        else html += " ".concat(key, '="').concat(value, '"');
    }
    return html;
}
function namedNodeMapToObject(namedNodeMap) {
    const obj = {};
    for (const attr of namedNodeMap){
        obj[attr.name] = attr.value;
    }
    return obj;
}
var _globalThis_HTMLElement;
const CustomVideoElement = CustomMediaMixin((_globalThis_HTMLElement = globalThis.HTMLElement) !== null && _globalThis_HTMLElement !== void 0 ? _globalThis_HTMLElement : class {
}, {
    tag: "video"
});
var _globalThis_HTMLElement1;
const CustomAudioElement = CustomMediaMixin((_globalThis_HTMLElement1 = globalThis.HTMLElement) !== null && _globalThis_HTMLElement1 !== void 0 ? _globalThis_HTMLElement1 : class {
}, {
    tag: "audio"
});
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/base.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>e,
    "MuxVideoBaseElement",
    ()=>K,
    "playerSoftwareName",
    ()=>x,
    "playerSoftwareVersion",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/custom-media-element/dist/custom-media-element.js [app-client] (ecmascript)");
var C = (s)=>{
    throw TypeError(s);
};
var S = (s, a, t)=>a.has(s) || C("Cannot " + t);
var n = (s, a, t)=>(S(s, a, "read from private field"), t ? t.call(s) : a.get(s)), u = (s, a, t)=>a.has(s) ? C("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(s) : a.set(s, t), o = (s, a, t, i)=>(S(s, a, "write to private field"), i ? i.call(s, t) : a.set(s, t), t), M = (s, a, t)=>(S(s, a, "access private method"), t);
;
var Y = ()=>{
    try {
        return "0.26.1";
    } catch (e) {}
    return "UNKNOWN";
}, B = Y(), P = ()=>B;
;
var k = '\n<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>';
var e = {
    BEACON_COLLECTION_DOMAIN: "beacon-collection-domain",
    CUSTOM_DOMAIN: "custom-domain",
    DEBUG: "debug",
    DISABLE_TRACKING: "disable-tracking",
    DISABLE_COOKIES: "disable-cookies",
    DRM_TOKEN: "drm-token",
    PLAYBACK_TOKEN: "playback-token",
    ENV_KEY: "env-key",
    MAX_RESOLUTION: "max-resolution",
    MIN_RESOLUTION: "min-resolution",
    RENDITION_ORDER: "rendition-order",
    PROGRAM_START_TIME: "program-start-time",
    PROGRAM_END_TIME: "program-end-time",
    ASSET_START_TIME: "asset-start-time",
    ASSET_END_TIME: "asset-end-time",
    METADATA_URL: "metadata-url",
    PLAYBACK_ID: "playback-id",
    PLAYER_SOFTWARE_NAME: "player-software-name",
    PLAYER_SOFTWARE_VERSION: "player-software-version",
    PLAYER_INIT_TIME: "player-init-time",
    PREFER_CMCD: "prefer-cmcd",
    PREFER_PLAYBACK: "prefer-playback",
    START_TIME: "start-time",
    STREAM_TYPE: "stream-type",
    TARGET_LIVE_WINDOW: "target-live-window",
    LIVE_EDGE_OFFSET: "live-edge-offset",
    TYPE: "type",
    LOGO: "logo"
}, at = Object.values(e), v = P(), x = "mux-video", l, f, c, A, b, T, p, _, O, g, m, y, K = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"] {
    static get NAME() {
        return x;
    }
    static get VERSION() {
        return v;
    }
    static get observedAttributes() {
        var t;
        return [
            ...at,
            ...(t = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes) != null ? t : []
        ];
    }
    static getLogoHTML(t) {
        return !t || t === "false" ? "" : t === "default" ? k : '<img part="logo" src="'.concat(t, '" />');
    }
    static getTemplateHTML() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var i;
        return "\n      ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].getTemplateHTML(t), '\n      <style>\n        :host {\n          position: relative;\n        }\n        slot[name="logo"] {\n          display: flex;\n          justify-content: end;\n          position: absolute;\n          top: 1rem;\n          right: 1rem;\n          opacity: 0;\n          transition: opacity 0.25s ease-in-out;\n          z-index: 1;\n        }\n        slot[name="logo"]:has([part="logo"]) {\n          opacity: 1;\n        }\n        slot[name="logo"] [part="logo"] {\n          width: 5rem;\n          pointer-events: none;\n          user-select: none;\n        }\n      </style>\n      <slot name="logo">\n        ').concat(this.getLogoHTML((i = t[e.LOGO]) != null ? i : ""), "\n      </slot>\n    ");
    }
    get preferCmcd() {
        var t;
        return (t = this.getAttribute(e.PREFER_CMCD)) != null ? t : void 0;
    }
    set preferCmcd(t) {
        t !== this.preferCmcd && (t ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].includes(t) ? this.setAttribute(e.PREFER_CMCD, t) : console.warn("Invalid value for preferCmcd. Must be one of ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].join())) : this.removeAttribute(e.PREFER_CMCD));
    }
    get playerInitTime() {
        return this.hasAttribute(e.PLAYER_INIT_TIME) ? +this.getAttribute(e.PLAYER_INIT_TIME) : n(this, c);
    }
    set playerInitTime(t) {
        t != this.playerInitTime && (t == null ? this.removeAttribute(e.PLAYER_INIT_TIME) : this.setAttribute(e.PLAYER_INIT_TIME, "".concat(+t)));
    }
    get playerSoftwareName() {
        var t;
        return (t = n(this, _)) != null ? t : x;
    }
    set playerSoftwareName(t) {
        o(this, _, t);
    }
    get playerSoftwareVersion() {
        var t;
        return (t = n(this, p)) != null ? t : v;
    }
    set playerSoftwareVersion(t) {
        o(this, p, t);
    }
    get _hls() {
        var t;
        return (t = n(this, l)) == null ? void 0 : t.engine;
    }
    get mux() {
        var t;
        return (t = this.nativeEl) == null ? void 0 : t.mux;
    }
    get error() {
        var t;
        return (t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getError"])(this.nativeEl)) != null ? t : null;
    }
    get errorTranslator() {
        return n(this, O);
    }
    set errorTranslator(t) {
        o(this, O, t);
    }
    get src() {
        return this.getAttribute("src");
    }
    set src(t) {
        t !== this.src && (t == null ? this.removeAttribute("src") : this.setAttribute("src", t));
    }
    get type() {
        var t;
        return (t = this.getAttribute(e.TYPE)) != null ? t : void 0;
    }
    set type(t) {
        t !== this.type && (t ? this.setAttribute(e.TYPE, t) : this.removeAttribute(e.TYPE));
    }
    get preload() {
        let t = this.getAttribute("preload");
        return t === "" ? "auto" : [
            "none",
            "metadata",
            "auto"
        ].includes(t) ? t : super.preload;
    }
    set preload(t) {
        t != this.getAttribute("preload") && ([
            "",
            "none",
            "metadata",
            "auto"
        ].includes(t) ? this.setAttribute("preload", t) : this.removeAttribute("preload"));
    }
    get debug() {
        return this.getAttribute(e.DEBUG) != null;
    }
    set debug(t) {
        t !== this.debug && (t ? this.setAttribute(e.DEBUG, "") : this.removeAttribute(e.DEBUG));
    }
    get disableTracking() {
        return this.hasAttribute(e.DISABLE_TRACKING);
    }
    set disableTracking(t) {
        t !== this.disableTracking && this.toggleAttribute(e.DISABLE_TRACKING, !!t);
    }
    get disableCookies() {
        return this.hasAttribute(e.DISABLE_COOKIES);
    }
    set disableCookies(t) {
        t !== this.disableCookies && (t ? this.setAttribute(e.DISABLE_COOKIES, "") : this.removeAttribute(e.DISABLE_COOKIES));
    }
    get startTime() {
        let t = this.getAttribute(e.START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set startTime(t) {
        t !== this.startTime && (t == null ? this.removeAttribute(e.START_TIME) : this.setAttribute(e.START_TIME, "".concat(t)));
    }
    get playbackId() {
        var t;
        return this.hasAttribute(e.PLAYBACK_ID) ? this.getAttribute(e.PLAYBACK_ID) : (t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdFromSrc"])(this.src)) != null ? t : void 0;
    }
    set playbackId(t) {
        t !== this.playbackId && (t ? this.setAttribute(e.PLAYBACK_ID, t) : this.removeAttribute(e.PLAYBACK_ID));
    }
    get maxResolution() {
        var t;
        return (t = this.getAttribute(e.MAX_RESOLUTION)) != null ? t : void 0;
    }
    set maxResolution(t) {
        t !== this.maxResolution && (t ? this.setAttribute(e.MAX_RESOLUTION, t) : this.removeAttribute(e.MAX_RESOLUTION));
    }
    get minResolution() {
        var t;
        return (t = this.getAttribute(e.MIN_RESOLUTION)) != null ? t : void 0;
    }
    set minResolution(t) {
        t !== this.minResolution && (t ? this.setAttribute(e.MIN_RESOLUTION, t) : this.removeAttribute(e.MIN_RESOLUTION));
    }
    get renditionOrder() {
        var t;
        return (t = this.getAttribute(e.RENDITION_ORDER)) != null ? t : void 0;
    }
    set renditionOrder(t) {
        t !== this.renditionOrder && (t ? this.setAttribute(e.RENDITION_ORDER, t) : this.removeAttribute(e.RENDITION_ORDER));
    }
    get programStartTime() {
        let t = this.getAttribute(e.PROGRAM_START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programStartTime(t) {
        t == null ? this.removeAttribute(e.PROGRAM_START_TIME) : this.setAttribute(e.PROGRAM_START_TIME, "".concat(t));
    }
    get programEndTime() {
        let t = this.getAttribute(e.PROGRAM_END_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programEndTime(t) {
        t == null ? this.removeAttribute(e.PROGRAM_END_TIME) : this.setAttribute(e.PROGRAM_END_TIME, "".concat(t));
    }
    get assetStartTime() {
        let t = this.getAttribute(e.ASSET_START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetStartTime(t) {
        t == null ? this.removeAttribute(e.ASSET_START_TIME) : this.setAttribute(e.ASSET_START_TIME, "".concat(t));
    }
    get assetEndTime() {
        let t = this.getAttribute(e.ASSET_END_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetEndTime(t) {
        t == null ? this.removeAttribute(e.ASSET_END_TIME) : this.setAttribute(e.ASSET_END_TIME, "".concat(t));
    }
    get customDomain() {
        var t;
        return (t = this.getAttribute(e.CUSTOM_DOMAIN)) != null ? t : void 0;
    }
    set customDomain(t) {
        t !== this.customDomain && (t ? this.setAttribute(e.CUSTOM_DOMAIN, t) : this.removeAttribute(e.CUSTOM_DOMAIN));
    }
    get drmToken() {
        var t;
        return (t = this.getAttribute(e.DRM_TOKEN)) != null ? t : void 0;
    }
    set drmToken(t) {
        t !== this.drmToken && (t ? this.setAttribute(e.DRM_TOKEN, t) : this.removeAttribute(e.DRM_TOKEN));
    }
    get playbackToken() {
        var t, i, r, d;
        if (this.hasAttribute(e.PLAYBACK_TOKEN)) return (t = this.getAttribute(e.PLAYBACK_TOKEN)) != null ? t : void 0;
        if (this.hasAttribute(e.PLAYBACK_ID)) {
            let [, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdParts"])((i = this.playbackId) != null ? i : "");
            return (r = new URLSearchParams(E).get("token")) != null ? r : void 0;
        }
        if (this.src) return (d = new URLSearchParams(this.src).get("token")) != null ? d : void 0;
    }
    set playbackToken(t) {
        t !== this.playbackToken && (t ? this.setAttribute(e.PLAYBACK_TOKEN, t) : this.removeAttribute(e.PLAYBACK_TOKEN));
    }
    get tokens() {
        let t = this.getAttribute(e.PLAYBACK_TOKEN), i = this.getAttribute(e.DRM_TOKEN);
        return {
            ...n(this, b),
            ...t != null ? {
                playback: t
            } : {},
            ...i != null ? {
                drm: i
            } : {}
        };
    }
    set tokens(t) {
        o(this, b, t != null ? t : {});
    }
    get ended() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEnded"])(this.nativeEl, this._hls);
    }
    get envKey() {
        var t;
        return (t = this.getAttribute(e.ENV_KEY)) != null ? t : void 0;
    }
    set envKey(t) {
        t !== this.envKey && (t ? this.setAttribute(e.ENV_KEY, t) : this.removeAttribute(e.ENV_KEY));
    }
    get beaconCollectionDomain() {
        var t;
        return (t = this.getAttribute(e.BEACON_COLLECTION_DOMAIN)) != null ? t : void 0;
    }
    set beaconCollectionDomain(t) {
        t !== this.beaconCollectionDomain && (t ? this.setAttribute(e.BEACON_COLLECTION_DOMAIN, t) : this.removeAttribute(e.BEACON_COLLECTION_DOMAIN));
    }
    get streamType() {
        var t;
        return (t = this.getAttribute(e.STREAM_TYPE)) != null ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStreamType"])(this.nativeEl);
    }
    set streamType(t) {
        t !== this.streamType && (t ? this.setAttribute(e.STREAM_TYPE, t) : this.removeAttribute(e.STREAM_TYPE));
    }
    get targetLiveWindow() {
        return this.hasAttribute(e.TARGET_LIVE_WINDOW) ? +this.getAttribute(e.TARGET_LIVE_WINDOW) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTargetLiveWindow"])(this.nativeEl);
    }
    set targetLiveWindow(t) {
        t != this.targetLiveWindow && (t == null ? this.removeAttribute(e.TARGET_LIVE_WINDOW) : this.setAttribute(e.TARGET_LIVE_WINDOW, "".concat(+t)));
    }
    get liveEdgeStart() {
        var t, i;
        if (this.hasAttribute(e.LIVE_EDGE_OFFSET)) {
            let { liveEdgeOffset: r } = this, d = (t = this.nativeEl.seekable.end(0)) != null ? t : 0, E = (i = this.nativeEl.seekable.start(0)) != null ? i : 0;
            return Math.max(E, d - r);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLiveEdgeStart"])(this.nativeEl);
    }
    get liveEdgeOffset() {
        if (this.hasAttribute(e.LIVE_EDGE_OFFSET)) return +this.getAttribute(e.LIVE_EDGE_OFFSET);
    }
    set liveEdgeOffset(t) {
        t != this.liveEdgeOffset && (t == null ? this.removeAttribute(e.LIVE_EDGE_OFFSET) : this.setAttribute(e.LIVE_EDGE_OFFSET, "".concat(+t)));
    }
    get seekable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSeekable"])(this.nativeEl);
    }
    async addCuePoints(t) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCuePoints"])(this.nativeEl, t);
    }
    get activeCuePoint() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveCuePoint"])(this.nativeEl);
    }
    get cuePoints() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCuePoints"])(this.nativeEl);
    }
    async addChapters(t) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addChapters"])(this.nativeEl, t);
    }
    get activeChapter() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveChapter"])(this.nativeEl);
    }
    get chapters() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getChapters"])(this.nativeEl);
    }
    getStartDate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStartDate"])(this.nativeEl, this._hls);
    }
    get currentPdt() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentPdt"])(this.nativeEl, this._hls);
    }
    get preferPlayback() {
        let t = this.getAttribute(e.PREFER_PLAYBACK);
        if (t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE) return t;
    }
    set preferPlayback(t) {
        t !== this.preferPlayback && (t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE ? this.setAttribute(e.PREFER_PLAYBACK, t) : this.removeAttribute(e.PREFER_PLAYBACK));
    }
    get metadata() {
        return {
            ...this.getAttributeNames().filter((i)=>i.startsWith("metadata-") && ![
                    e.METADATA_URL
                ].includes(i)).reduce((i, r)=>{
                let d = this.getAttribute(r);
                return d != null && (i[r.replace(/^metadata-/, "").replace(/-/g, "_")] = d), i;
            }, {}),
            ...n(this, A)
        };
    }
    set metadata(t) {
        o(this, A, t != null ? t : {}), this.mux && this.mux.emit("hb", n(this, A));
    }
    get _hlsConfig() {
        return n(this, T);
    }
    set _hlsConfig(t) {
        o(this, T, t);
    }
    get logo() {
        var t;
        return (t = this.getAttribute(e.LOGO)) != null ? t : n(this, g);
    }
    set logo(t) {
        t ? this.setAttribute(e.LOGO, t) : this.removeAttribute(e.LOGO);
    }
    load() {
        o(this, l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initialize"])(this, this.nativeEl, n(this, l)));
    }
    unload() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["teardown"])(this.nativeEl, n(this, l), this), o(this, l, void 0);
    }
    attributeChangedCallback(t, i, r) {
        var E, L;
        switch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes.includes(t) && ![
            "src",
            "autoplay",
            "preload"
        ].includes(t) && super.attributeChangedCallback(t, i, r), t){
            case e.PLAYER_SOFTWARE_NAME:
                this.playerSoftwareName = r != null ? r : void 0;
                break;
            case e.PLAYER_SOFTWARE_VERSION:
                this.playerSoftwareVersion = r != null ? r : void 0;
                break;
            case "src":
                {
                    let h = !!i, N = !!r;
                    !h && N ? M(this, m, y).call(this) : h && !N ? this.unload() : h && N && (this.unload(), M(this, m, y).call(this));
                    break;
                }
            case "autoplay":
                if (r === i) break;
                (E = n(this, l)) == null || E.setAutoplay(this.autoplay);
                break;
            case "preload":
                if (r === i) break;
                (L = n(this, l)) == null || L.setPreload(r);
                break;
            case e.PLAYBACK_ID:
                this.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toMuxVideoURL"])(this);
                break;
            case e.DEBUG:
                {
                    let h = this.debug;
                    this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this._hls && (this._hls.config.debug = h);
                    break;
                }
            case e.METADATA_URL:
                r && fetch(r).then((h)=>h.json()).then((h)=>this.metadata = h).catch(()=>console.error("Unable to load or parse metadata JSON from metadata-url ".concat(r, "!")));
                break;
            case e.STREAM_TYPE:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("streamtypechange", {
                    composed: !0,
                    bubbles: !0
                }));
                break;
            case e.TARGET_LIVE_WINDOW:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("targetlivewindowchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: this.targetLiveWindow
                }));
                break;
            case e.LOGO:
                (r == null || r !== i) && this.updateLogo();
                break;
        }
    }
    updateLogo() {
        if (!this.shadowRoot) return;
        let t = this.shadowRoot.querySelector('slot[name="logo"]');
        if (!t) return;
        let i = this.constructor.getLogoHTML(n(this, g) || this.logo);
        t.innerHTML = i;
    }
    connectedCallback() {
        var t;
        (t = super.connectedCallback) == null || t.call(this), this.nativeEl && this.src && !n(this, l) && M(this, m, y).call(this);
    }
    disconnectedCallback() {
        this.unload();
    }
    handleEvent(t) {
        t.target === this.nativeEl && this.dispatchEvent(new CustomEvent(t.type, {
            composed: !0,
            detail: t.detail
        }));
    }
    constructor(){
        super();
        u(this, m);
        u(this, l);
        u(this, f);
        u(this, c);
        u(this, A, {});
        u(this, b, {});
        u(this, T);
        u(this, p);
        u(this, _);
        u(this, O);
        u(this, g, "");
        o(this, c, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"])()), this.nativeEl.addEventListener("muxmetadata", (t)=>{
            var d;
            let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMetadata"])(this.nativeEl), r = (d = this.metadata) != null ? d : {};
            this.metadata = {
                ...i,
                ...r
            }, (i == null ? void 0 : i["com.mux.video.branding"]) === "mux-free-plan" && (o(this, g, "default"), this.updateLogo());
        });
    }
};
l = new WeakMap, f = new WeakMap, c = new WeakMap, A = new WeakMap, b = new WeakMap, T = new WeakMap, p = new WeakMap, _ = new WeakMap, O = new WeakMap, g = new WeakMap, m = new WeakSet, y = async function() {
    n(this, f) || (await o(this, f, Promise.resolve()), o(this, f, null), this.load());
};
;
 //# sourceMappingURL=base.mjs.map
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/base.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-mixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)");
var f = (e)=>{
    throw TypeError(e);
};
var g = (e, o, t)=>o.has(e) || f("Cannot " + t);
var u = (e, o, t)=>(g(e, o, "read from private field"), t ? t.call(e) : o.get(e)), m = (e, o, t)=>o.has(e) ? f("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), d = (e, o, t, l)=>(g(e, o, "write to private field"), l ? l.call(e, t) : o.set(e, t), t);
var s = class {
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent(o) {
        return !0;
    }
};
if (typeof DocumentFragment == "undefined") {
    class e extends s {
    }
    globalThis.DocumentFragment = e;
}
var n = class extends s {
}, p = class extends s {
}, x = {
    get (e) {},
    define (e, o, t) {},
    getName (e) {
        return null;
    },
    upgrade (e) {},
    whenDefined (e) {
        return Promise.resolve(n);
    }
}, a, h = class {
    get detail() {
        return u(this, a);
    }
    initCustomEvent() {}
    constructor(o, t = {}){
        m(this, a);
        d(this, a, t == null ? void 0 : t.detail);
    }
};
a = new WeakMap;
function C(e, o) {
    return new n;
}
var y = {
    document: {
        createElement: C
    },
    DocumentFragment,
    customElements: x,
    CustomEvent: h,
    EventTarget: s,
    HTMLElement: n,
    HTMLVideoElement: p
}, b = typeof window == "undefined" || typeof globalThis.customElements == "undefined", c = b ? y : globalThis, k = b ? y.document : globalThis.document;
;
;
;
;
var r, i = class extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CastableMediaMixin"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTracksMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MuxVideoBaseElement"])) {
    get autoplay() {
        let t = this.getAttribute("autoplay");
        return t === null ? !1 : t === "" ? !0 : t;
    }
    set autoplay(t) {
        let l = this.autoplay;
        t !== l && (t ? this.setAttribute("autoplay", typeof t == "string" ? t : "") : this.removeAttribute("autoplay"));
    }
    get muxCastCustomData() {
        return {
            mux: {
                playbackId: this.playbackId,
                minResolution: this.minResolution,
                maxResolution: this.maxResolution,
                renditionOrder: this.renditionOrder,
                customDomain: this.customDomain,
                tokens: {
                    drm: this.drmToken
                },
                envKey: this.envKey,
                metadata: this.metadata,
                disableCookies: this.disableCookies,
                disableTracking: this.disableTracking,
                beaconCollectionDomain: this.beaconCollectionDomain,
                startTime: this.startTime,
                preferCmcd: this.preferCmcd
            }
        };
    }
    get castCustomData() {
        var t;
        return (t = u(this, r)) != null ? t : this.muxCastCustomData;
    }
    set castCustomData(t) {
        d(this, r, t);
    }
    constructor(){
        super(...arguments);
        m(this, r);
    }
};
r = new WeakMap;
c.customElements.get("mux-video") || (c.customElements.define("mux-video", i), c.MuxVideoElement = i);
var F = i;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
var N = new Set([
    "style",
    "children",
    "ref",
    "key",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "dangerouslySetInnerHTML"
]), S = {
    className: "class",
    htmlFor: "for"
};
function O(t) {
    return t.toLowerCase();
}
function M(t) {
    if (typeof t == "boolean") return t ? "" : void 0;
    if (typeof t != "function" && !(typeof t == "object" && t !== null)) return t;
}
function k(param) {
    let { react: t, tagName: d, elementClass: r, events: a, displayName: f, toAttributeName: _ = O, toAttributeValue: I = M } = param;
    let m = Number.parseInt(t.version) >= 19, g = t.forwardRef((w, l)=>{
        var h, E, v, L, P;
        let i = t.useRef(null), y = t.useRef(new Map), b = {}, T = {}, u = {}, p = {};
        for (let [o, e] of Object.entries(w)){
            if (N.has(o)) {
                u[o] = e;
                continue;
            }
            let n = _((h = S[o]) != null ? h : o);
            if (o in r.prototype && !(o in ((v = (E = globalThis.HTMLElement) == null ? void 0 : E.prototype) != null ? v : {})) && !((L = r.observedAttributes) != null && L.some((s)=>s === n))) {
                p[o] = e;
                continue;
            }
            if (o.startsWith("on")) {
                b[o] = e;
                continue;
            }
            let c = I(e);
            if (n && c != null && (T[n] = String(c), m || (u[n] = c)), n && m) {
                let s = M(e);
                c !== s ? u[n] = c : u[n] = e;
            }
        }
        if (typeof window != "undefined") {
            for(let o in b){
                let e = b[o], n = o.endsWith("Capture"), c = ((P = a == null ? void 0 : a[o]) != null ? P : o.slice(2).toLowerCase()).slice(0, n ? -7 : void 0);
                t.useLayoutEffect({
                    "k.g.useLayoutEffect": ()=>{
                        let s = i == null ? void 0 : i.current;
                        if (!(!s || typeof e != "function")) return s.addEventListener(c, e, n), ({
                            "k.g.useLayoutEffect": ()=>{
                                s.removeEventListener(c, e, n);
                            }
                        })["k.g.useLayoutEffect"];
                    }
                }["k.g.useLayoutEffect"], [
                    i == null ? void 0 : i.current,
                    e
                ]);
            }
            t.useLayoutEffect({
                "k.g.useLayoutEffect": ()=>{
                    if (i.current === null) return;
                    let o = new Map;
                    for(let e in p)A(i.current, e, p[e]), y.current.delete(e), o.set(e, p[e]);
                    for (let [e, n] of y.current)A(i.current, e, void 0);
                    y.current = o;
                }
            }["k.g.useLayoutEffect"]);
        }
        if (typeof window == "undefined" && r != null && r.getTemplateHTML && r != null && r.shadowRootOptions) {
            let { mode: o, delegatesFocus: e } = r.shadowRootOptions, n = t.createElement("template", {
                shadowrootmode: o,
                shadowrootdelegatesfocus: e,
                dangerouslySetInnerHTML: {
                    __html: r.getTemplateHTML(T, w)
                }
            });
            u.children = [
                n,
                u.children
            ];
        }
        return t.createElement(d, {
            ...u,
            ref: t.useCallback({
                "k.g.useCallback": (o)=>{
                    i.current = o, typeof l == "function" ? l(o) : l !== null && (l.current = o);
                }
            }["k.g.useCallback"], [
                l
            ])
        });
    });
    return g.displayName = f != null ? f : r.name, g;
}
function A(t, d, r) {
    var a, f;
    t[d] = r, r == null && d in ((f = (a = globalThis.HTMLElement) == null ? void 0 : a.prototype) != null ? f : {}) && t.removeAttribute(d);
}
var $ = k({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tagName: "mux-video",
    elementClass: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    toAttributeName: x
}), H = {
    autoPlay: "autoplay",
    controlsList: "controlslist",
    crossOrigin: "crossorigin",
    playsInline: "playsinline",
    disablePictureInPicture: "disablepictureinpicture",
    disableRemotePlayback: "disableremoteplayback"
};
function x(t) {
    return H[t] ? H[t] : t.replace(/([A-Z])/g, "-$1").toLowerCase();
}
;
 /*! Bundled license information:

ce-la-react/dist/ce-la-react.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Modified version of `@lit/react` for vanilla custom elements with support for SSR.
   *)
*/ }),
"[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global WeakRef */ __turbopack_context__.s([
    "InvalidStateError",
    ()=>InvalidStateError,
    "IterableWeakSet",
    ()=>IterableWeakSet,
    "NotFoundError",
    ()=>NotFoundError,
    "NotSupportedError",
    ()=>NotSupportedError,
    "castContext",
    ()=>castContext,
    "currentMedia",
    ()=>currentMedia,
    "currentSession",
    ()=>currentSession,
    "editTracksInfo",
    ()=>editTracksInfo,
    "getDefaultCastOptions",
    ()=>getDefaultCastOptions,
    "getMediaStatus",
    ()=>getMediaStatus,
    "getPlaylistSegmentFormat",
    ()=>getPlaylistSegmentFormat,
    "isHls",
    ()=>isHls,
    "loadCastFramework",
    ()=>loadCastFramework,
    "onCastApiAvailable",
    ()=>onCastApiAvailable,
    "privateProps",
    ()=>privateProps,
    "requiresCastFramework",
    ()=>requiresCastFramework,
    "setCastOptions",
    ()=>setCastOptions
]);
const privateProps = new WeakMap();
class InvalidStateError extends Error {
}
class NotSupportedError extends Error {
}
class NotFoundError extends Error {
}
const HLS_RESPONSE_HEADERS = [
    'application/x-mpegURL',
    'application/vnd.apple.mpegurl',
    'audio/mpegurl'
];
const IterableWeakSet = globalThis.WeakRef ? class extends Set {
    add(el) {
        super.add(new WeakRef(el));
    }
    forEach(fn) {
        super.forEach((ref)=>{
            const value = ref.deref();
            if (value) fn(value);
        });
    }
} : Set;
function onCastApiAvailable(callback) {
    var _globalThis_chrome_cast, _globalThis_chrome, _globalThis_cast;
    if (!((_globalThis_chrome = globalThis.chrome) === null || _globalThis_chrome === void 0 ? void 0 : (_globalThis_chrome_cast = _globalThis_chrome.cast) === null || _globalThis_chrome_cast === void 0 ? void 0 : _globalThis_chrome_cast.isAvailable)) {
        globalThis.__onGCastApiAvailable = ()=>{
            // The globalThis.__onGCastApiAvailable callback alone is not reliable for
            // the added cast.framework. It's loaded in a separate JS file.
            // https://www.gstatic.com/eureka/clank/101/cast_sender.js
            // https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js
            customElements.whenDefined('google-cast-button').then(callback);
        };
    } else if (!((_globalThis_cast = globalThis.cast) === null || _globalThis_cast === void 0 ? void 0 : _globalThis_cast.framework)) {
        customElements.whenDefined('google-cast-button').then(callback);
    } else {
        callback();
    }
}
function requiresCastFramework() {
    // todo: exclude for Android>=56 which supports the Remote Playback API natively.
    return globalThis.chrome;
}
function loadCastFramework() {
    var _globalThis_chrome;
    const sdkUrl = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
    if (((_globalThis_chrome = globalThis.chrome) === null || _globalThis_chrome === void 0 ? void 0 : _globalThis_chrome.cast) || document.querySelector('script[src="'.concat(sdkUrl, '"]'))) return;
    const script = document.createElement('script');
    script.src = sdkUrl;
    document.head.append(script);
}
function castContext() {
    var _globalThis_cast_framework, _globalThis_cast;
    return (_globalThis_cast = globalThis.cast) === null || _globalThis_cast === void 0 ? void 0 : (_globalThis_cast_framework = _globalThis_cast.framework) === null || _globalThis_cast_framework === void 0 ? void 0 : _globalThis_cast_framework.CastContext.getInstance();
}
function currentSession() {
    var _castContext;
    return (_castContext = castContext()) === null || _castContext === void 0 ? void 0 : _castContext.getCurrentSession();
}
function currentMedia() {
    var _currentSession;
    return (_currentSession = currentSession()) === null || _currentSession === void 0 ? void 0 : _currentSession.getSessionObj().media[0];
}
function editTracksInfo(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().editTracksInfo(request, resolve, reject);
    });
}
function getMediaStatus(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().getStatus(request, resolve, reject);
    });
}
function setCastOptions(options) {
    return castContext().setOptions({
        ...getDefaultCastOptions(),
        ...options
    });
}
function getDefaultCastOptions() {
    return {
        // Set the receiver application ID to your own (created in the
        // Google Cast Developer Console), or optionally
        // use the chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
        receiverApplicationId: 'CC1AD845',
        // Auto join policy can be one of the following three:
        // ORIGIN_SCOPED - Auto connect from same appId and page origin
        // TAB_AND_ORIGIN_SCOPED - Auto connect from same appId, page origin, and tab
        // PAGE_SCOPED - No auto connect
        autoJoinPolicy: 'origin_scoped',
        // The following flag enables Cast Connect(requires Chrome 87 or higher)
        // https://developers.googleblog.com/2020/08/introducing-cast-connect-android-tv.html
        androidReceiverCompatible: false,
        language: 'en-US',
        resumeSavedSession: true
    };
}
//Get the segment format given the end of the URL (.m4s, .ts, etc)
function getFormat(segment) {
    if (!segment) return undefined;
    const regex = /\.([a-zA-Z0-9]+)(?:\?.*)?$/;
    const match = segment.match(regex);
    return match ? match[1] : null;
}
function parsePlaylistUrls(playlistContent) {
    const lines = playlistContent.split('\n');
    const urls = [];
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        // Locate available video playlists and get the next line which is the URI (https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-17#section-4.4.6.2)
        if (line.startsWith('#EXT-X-STREAM-INF')) {
            const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
            if (nextLine && !nextLine.startsWith('#')) {
                urls.push(nextLine);
            }
        }
    }
    return urls;
}
function parseSegment(playlistContent) {
    const lines = playlistContent.split('\n');
    const url = lines.find((line)=>!line.trim().startsWith('#') && line.trim() !== '');
    return url;
}
async function isHls(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD'
        });
        const contentType = response.headers.get('Content-Type');
        return HLS_RESPONSE_HEADERS.some((header)=>contentType === header);
    } catch (err) {
        console.error('Error while trying to get the Content-Type of the manifest', err);
        return false;
    }
}
async function getPlaylistSegmentFormat(url) {
    try {
        const mainManifestContent = await (await fetch(url)).text();
        let availableChunksContent = mainManifestContent;
        const playlists = parsePlaylistUrls(mainManifestContent);
        if (playlists.length > 0) {
            const chosenPlaylistUrl = new URL(playlists[0], url).toString();
            availableChunksContent = await (await fetch(chosenPlaylistUrl)).text();
        }
        const segment = parseSegment(availableChunksContent);
        const format = getFormat(segment);
        return format;
    } catch (err) {
        console.error('Error while trying to parse the manifest playlist', err);
        return undefined;
    }
}
}),
"[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-remote-playback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global chrome, cast */ __turbopack_context__.s([
    "RemotePlayback",
    ()=>RemotePlayback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
const remoteInstances = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IterableWeakSet"]();
const castElementRef = new WeakSet();
let cf;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCastApiAvailable"])(()=>{
    var _globalThis_chrome_cast, _globalThis_chrome;
    if (!((_globalThis_chrome = globalThis.chrome) === null || _globalThis_chrome === void 0 ? void 0 : (_globalThis_chrome_cast = _globalThis_chrome.cast) === null || _globalThis_chrome_cast === void 0 ? void 0 : _globalThis_chrome_cast.isAvailable)) {
        var _globalThis_chrome_cast1, _globalThis_chrome1;
        // Useful to see in verbose logs if this shows undefined or false.
        console.debug('chrome.cast.isAvailable', (_globalThis_chrome1 = globalThis.chrome) === null || _globalThis_chrome1 === void 0 ? void 0 : (_globalThis_chrome_cast1 = _globalThis_chrome1.cast) === null || _globalThis_chrome_cast1 === void 0 ? void 0 : _globalThis_chrome_cast1.isAvailable);
        return;
    }
    if (!cf) {
        cf = cast.framework;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.CAST_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>{
                var _privateProps_get_onCastStateChanged, _privateProps_get;
                return (_privateProps_get_onCastStateChanged = (_privateProps_get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r)).onCastStateChanged) === null || _privateProps_get_onCastStateChanged === void 0 ? void 0 : _privateProps_get_onCastStateChanged.call(_privateProps_get, e);
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.SESSION_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>{
                var _privateProps_get_onSessionStateChanged, _privateProps_get;
                return (_privateProps_get_onSessionStateChanged = (_privateProps_get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r)).onSessionStateChanged) === null || _privateProps_get_onSessionStateChanged === void 0 ? void 0 : _privateProps_get_onSessionStateChanged.call(_privateProps_get, e);
            });
        });
        remoteInstances.forEach((r)=>{
            var _privateProps_get_init, _privateProps_get;
            return (_privateProps_get_init = (_privateProps_get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r)).init) === null || _privateProps_get_init === void 0 ? void 0 : _privateProps_get_init.call(_privateProps_get);
        });
    }
});
let remotePlaybackCallbackIdCount = 0;
var _media = /*#__PURE__*/ new WeakMap(), _isInit = /*#__PURE__*/ new WeakMap(), _remotePlayer = /*#__PURE__*/ new WeakMap(), _remoteListeners = /*#__PURE__*/ new WeakMap(), _state = /*#__PURE__*/ new WeakMap(), _available = /*#__PURE__*/ new WeakMap(), _callbacks = /*#__PURE__*/ new WeakMap(), _callbackIds = /*#__PURE__*/ new WeakMap(), _castPlayer = /*#__PURE__*/ new WeakMap(), _disconnect = /*#__PURE__*/ new WeakSet(), _hasDevicesAvailable = /*#__PURE__*/ new WeakSet(), _onCastStateChanged = /*#__PURE__*/ new WeakSet(), _onSessionStateChanged = /*#__PURE__*/ new WeakSet(), _init = /*#__PURE__*/ new WeakSet(), _onRemoteMediaLoaded = /*#__PURE__*/ new WeakSet(), _updateRemoteTextTrack = /*#__PURE__*/ new WeakSet();
class RemotePlayback extends EventTarget {
    /**
   * https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   * @return {'disconnected'|'connecting'|'connected'}
   */ get state() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _state);
    }
    async watchAvailability(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbackIds).set(callback, ++remotePlaybackCallbackIdCount);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).add(callback);
        // https://w3c.github.io/remote-playback/#getting-the-remote-playback-devices-availability-information
        queueMicrotask(()=>callback((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasDevicesAvailable, hasDevicesAvailable).call(this)));
        return remotePlaybackCallbackIdCount;
    }
    async cancelWatchAvailability(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (callback) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).delete(callback);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).clear();
        }
    }
    async prompt() {
        var _globalThis_chrome_cast, _globalThis_chrome, _privateProps_get_loadOnPrompt, _privateProps_get;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (!((_globalThis_chrome = globalThis.chrome) === null || _globalThis_chrome === void 0 ? void 0 : (_globalThis_chrome_cast = _globalThis_chrome.cast) === null || _globalThis_chrome_cast === void 0 ? void 0 : _globalThis_chrome_cast.isAvailable)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotSupportedError"]('The RemotePlayback API is disabled on this platform.');
        }
        const willDisconnect = castElementRef.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media));
        castElementRef.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCastOptions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).castOptions);
        Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners)).forEach((param)=>{
            let [event, listener] = param;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).controller.addEventListener(event, listener);
        });
        try {
            // Open browser cast menu.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().requestSession();
        } catch (err) {
            // If there will be no disconnect, reset some state here.
            if (!willDisconnect) {
                castElementRef.delete((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media));
            }
            // Don't throw an error if disconnecting or cancelling.
            if (err === 'cancel') {
                return;
            }
            throw new Error(err);
        }
        (_privateProps_get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media))) === null || _privateProps_get === void 0 ? void 0 : (_privateProps_get_loadOnPrompt = _privateProps_get.loadOnPrompt) === null || _privateProps_get_loadOnPrompt === void 0 ? void 0 : _privateProps_get_loadOnPrompt.call(_privateProps_get);
    }
    constructor(media){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer, {
            get: get_castPlayer,
            set: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disconnect), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasDevicesAvailable), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onCastStateChanged), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onSessionStateChanged), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onRemoteMediaLoaded), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRemoteTextTrack), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _state, {
            writable: true,
            value: 'disconnected'
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _available, {
            writable: true,
            value: false
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks, {
            writable: true,
            value: new Set()
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbackIds, {
            writable: true,
            value: new WeakMap()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media, media);
        remoteInstances.add(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
            init: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this),
            onCastStateChanged: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onCastStateChanged, onCastStateChanged).call(this),
            onSessionStateChanged: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onSessionStateChanged, onSessionStateChanged).call(this),
            getCastPlayer: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _init, init).call(this);
    }
}
function get_castPlayer() {
    if (castElementRef.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media))) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer);
    return undefined;
}
function disconnect() {
    if (!castElementRef.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media))) return;
    Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners)).forEach((param)=>{
        let [event, listener] = param;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).controller.removeEventListener(event, listener);
    });
    castElementRef.delete((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media));
    // isMuted is not in savedPlayerState. should we sync this back to local?
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).muted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).isMuted;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).savedPlayerState.currentTime;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).savedPlayerState.isPaused === false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).play();
    }
}
function hasDevicesAvailable() {
    var _castContext;
    // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
    // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
    const castState = (_castContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])()) === null || _castContext === void 0 ? void 0 : _castContext.getCastState();
    return castState && castState !== 'NO_DEVICES_AVAILABLE';
}
function onCastStateChanged() {
    // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
    // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
    const castState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().getCastState();
    if (castElementRef.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media))) {
        if (castState === 'CONNECTING') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _state, 'connecting');
            this.dispatchEvent(new Event('connecting'));
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _available) && (castState === null || castState === void 0 ? void 0 : castState.includes('CONNECT'))) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _available, true);
        for (let callback of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks))callback(true);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _available) && (!castState || castState === 'NO_DEVICES_AVAILABLE')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _available, false);
        for (let callback of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks))callback(false);
    }
}
async function onSessionStateChanged() {
    // Session states: NO_SESSION, SESSION_STARTING, SESSION_STARTED, SESSION_START_FAILED,
    //                 SESSION_ENDING, SESSION_ENDED, SESSION_RESUMED
    // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.SessionState
    const { SESSION_RESUMED } = cf.SessionState;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().getSessionState() === SESSION_RESUMED) {
        var _currentMedia;
        /**
       * Figure out if this was the video that started the resumed session.
       * @TODO make this more specific than just checking against the video src!! (WL)
       *
       * If this video element can get the same unique id on each browser refresh
       * it would be possible to pass this unique id w/ `LoadRequest.customData`
       * and verify against currentMedia().customData below.
       */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).castSrc === ((_currentMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentMedia"])()) === null || _currentMedia === void 0 ? void 0 : _currentMedia.media.contentId)) {
            castElementRef.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media));
            Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners)).forEach((param)=>{
                let [event, listener] = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).controller.addEventListener(event, listener);
            });
            /**
         * There is cast framework resume session bug when you refresh the page a few
         * times the this.#remotePlayer.currentTime will not be in sync with the receiver :(
         * The below status request syncs it back up.
         */ try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaStatus"])(new chrome.cast.media.GetStatusRequest());
            } catch (error) {
                console.error(error);
            }
            // Dispatch the play, playing events manually to sync remote playing state.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners)[cf.RemotePlayerEventType.IS_PAUSED_CHANGED]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners)[cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
        }
    }
}
function init() {
    if (!cf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit)) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isInit, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCastOptions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).castOptions);
    /**
     * @TODO add listeners for addtrack, removetrack (WL)
     * This only has an impact on <track> with a `src` because these have to be
     * loaded manually in the load() method. This will require a new load() call
     * for each added/removed track w/ src.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).textTracks.addEventListener('change', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRemoteTextTrack, updateRemoteTextTrack).call(this));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onCastStateChanged, onCastStateChanged).call(this);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer, new cf.RemotePlayer());
    new cf.RemotePlayerController((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remoteListeners, {
        [cf.RemotePlayerEventType.IS_CONNECTED_CHANGED]: (param)=>{
            let { value } = param;
            if (value === true) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _state, 'connected');
                this.dispatchEvent(new Event('connect'));
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disconnect, disconnect).call(this);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _state, 'disconnected');
                this.dispatchEvent(new Event('disconnect'));
            }
        },
        [cf.RemotePlayerEventType.DURATION_CHANGED]: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event('durationchange'));
        },
        [cf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event('volumechange'));
        },
        [cf.RemotePlayerEventType.IS_MUTED_CHANGED]: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event('volumechange'));
        },
        [cf.RemotePlayerEventType.CURRENT_TIME_CHANGED]: ()=>{
            var _class_private_field_get;
            if (!((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.isMediaLoaded)) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event('timeupdate'));
        },
        [cf.RemotePlayerEventType.VIDEO_INFO_CHANGED]: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event('resize'));
        },
        [cf.RemotePlayerEventType.IS_PAUSED_CHANGED]: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event(this.paused ? 'pause' : 'play'));
        },
        [cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]: ()=>{
            var _class_private_field_get, _class_private_field_get1;
            // Player states: IDLE, PLAYING, PAUSED, BUFFERING
            // https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.media#.PlayerState
            // pause event is handled above.
            if (((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.playerState) === chrome.cast.media.PlayerState.PAUSED) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).dispatchEvent(new Event({
                [chrome.cast.media.PlayerState.PLAYING]: 'playing',
                [chrome.cast.media.PlayerState.BUFFERING]: 'waiting',
                [chrome.cast.media.PlayerState.IDLE]: 'emptied'
            }[(_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get1 === void 0 ? void 0 : _class_private_field_get1.playerState]));
        },
        [cf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async ()=>{
            var _class_private_field_get;
            if (!((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.isMediaLoaded)) return;
            // mediaInfo is not immediately available due to a bug? wait one tick
            await Promise.resolve();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onRemoteMediaLoaded, onRemoteMediaLoaded).call(this);
        }
    });
}
function onRemoteMediaLoaded() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRemoteTextTrack, updateRemoteTextTrack).call(this);
}
async function updateRemoteTextTrack() {
    var _class_private_field_get_mediaInfo, _currentSession_getSessionObj_media_, _currentSession;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return;
    var _class_private_field_get_mediaInfo_tracks;
    // Get the tracks w/ trackId's that have been loaded; manually or via a playlist like a M3U8 or MPD.
    const remoteTracks = (_class_private_field_get_mediaInfo_tracks = (_class_private_field_get_mediaInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remotePlayer).mediaInfo) === null || _class_private_field_get_mediaInfo === void 0 ? void 0 : _class_private_field_get_mediaInfo.tracks) !== null && _class_private_field_get_mediaInfo_tracks !== void 0 ? _class_private_field_get_mediaInfo_tracks : [];
    const remoteSubtitles = remoteTracks.filter((param)=>{
        let { type } = param;
        return type === chrome.cast.media.TrackType.TEXT;
    });
    const localSubtitles = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _media).textTracks
    ].filter((param)=>{
        let { kind } = param;
        return kind === 'subtitles' || kind === 'captions';
    });
    // Create a new array from the local subs w/ the trackId's from the remote subs.
    const subtitles = remoteSubtitles.map((param)=>{
        let { language, name, trackId } = param;
        var _localSubtitles_find;
        // Find the corresponding local text track and assign the trackId.
        const { mode } = (_localSubtitles_find = localSubtitles.find((local)=>local.language === language && local.label === name)) !== null && _localSubtitles_find !== void 0 ? _localSubtitles_find : {};
        if (mode) return {
            mode,
            trackId
        };
        return false;
    }).filter(Boolean);
    const hiddenSubtitles = subtitles.filter((param)=>{
        let { mode } = param;
        return mode !== 'showing';
    });
    const hiddenTrackIds = hiddenSubtitles.map((param)=>{
        let { trackId } = param;
        return trackId;
    });
    const showingSubtitle = subtitles.find((param)=>{
        let { mode } = param;
        return mode === 'showing';
    });
    var _currentSession_getSessionObj_media__activeTrackIds;
    // Note this could also include audio or video tracks, diff against local state.
    const activeTrackIds = (_currentSession_getSessionObj_media__activeTrackIds = (_currentSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentSession"])()) === null || _currentSession === void 0 ? void 0 : (_currentSession_getSessionObj_media_ = _currentSession.getSessionObj().media[0]) === null || _currentSession_getSessionObj_media_ === void 0 ? void 0 : _currentSession_getSessionObj_media_.activeTrackIds) !== null && _currentSession_getSessionObj_media__activeTrackIds !== void 0 ? _currentSession_getSessionObj_media__activeTrackIds : [];
    let requestTrackIds = activeTrackIds;
    if (activeTrackIds.length) {
        // Filter out all local hidden subtitle trackId's.
        requestTrackIds = requestTrackIds.filter((id)=>!hiddenTrackIds.includes(id));
    }
    if (showingSubtitle === null || showingSubtitle === void 0 ? void 0 : showingSubtitle.trackId) {
        requestTrackIds = [
            ...requestTrackIds,
            showingSubtitle.trackId
        ];
    }
    // Remove duplicate ids.
    requestTrackIds = [
        ...new Set(requestTrackIds)
    ];
    const arrayEquals = (a, b)=>a.length === b.length && a.every((a)=>b.includes(a));
    if (!arrayEquals(activeTrackIds, requestTrackIds)) {
        try {
            const request = new chrome.cast.media.EditTracksInfoRequest(requestTrackIds);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editTracksInfo"])(request);
        } catch (error) {
            console.error(error);
        }
    }
}
}),
"[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-mixin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global chrome */ __turbopack_context__.s([
    "CastableMediaMixin",
    ()=>CastableMediaMixin,
    "CastableVideoMixin",
    ()=>CastableVideoMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-remote-playback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const CastableMediaMixin = (superclass)=>{
    var _localState = /*#__PURE__*/ new WeakMap(), _castOptions = /*#__PURE__*/ new WeakMap(), _castCustomData = /*#__PURE__*/ new WeakMap(), _remote = /*#__PURE__*/ new WeakMap(), _castPlayer = /*#__PURE__*/ new WeakMap(), _loadOnPrompt = /*#__PURE__*/ new WeakSet();
    class CastableMedia extends superclass {
        get remote() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remote)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remote);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requiresCastFramework"])()) {
                // No need to load the Cast framework if it's disabled.
                if (!this.disableRemotePlayback) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCastFramework"])();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
                    loadOnPrompt: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _loadOnPrompt, loadOnPrompt).call(this)
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remote, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemotePlayback"](this));
            }
            return super.remote;
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            super.attributeChangedCallback(attrName, oldValue, newValue);
            if (attrName === 'cast-receiver' && newValue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castOptions).receiverApplicationId = newValue;
                return;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return;
            switch(attrName){
                case 'cast-stream-type':
                case 'cast-src':
                    this.load();
                    break;
            }
        }
        async load() {
            var _currentSession;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return super.load();
            const mediaInfo = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
            mediaInfo.customData = this.castCustomData;
            // Manually add text tracks with a `src` attribute.
            // M3U8's load text tracks in the receiver, handle these in the media loaded event.
            const subtitles = [
                ...this.querySelectorAll('track')
            ].filter((param)=>{
                let { kind, src } = param;
                return src && (kind === 'subtitles' || kind === 'captions');
            });
            const activeTrackIds = [];
            let textTrackIdCount = 0;
            if (subtitles.length) {
                mediaInfo.tracks = subtitles.map((trackEl)=>{
                    const trackId = ++textTrackIdCount;
                    // only activate 1 subtitle text track.
                    if (activeTrackIds.length === 0 && trackEl.track.mode === 'showing') {
                        activeTrackIds.push(trackId);
                    }
                    const track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
                    track.trackContentId = trackEl.src;
                    track.trackContentType = 'text/vtt';
                    track.subtype = trackEl.kind === 'captions' ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES;
                    track.name = trackEl.label;
                    track.language = trackEl.srclang;
                    return track;
                });
            }
            if (this.castStreamType === 'live') {
                mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
            } else {
                mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
            }
            mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
            mediaInfo.metadata.title = this.title;
            mediaInfo.metadata.images = [
                {
                    url: this.poster
                }
            ];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHls"])(this.castSrc)) {
                const segmentFormat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlaylistSegmentFormat"])(this.castSrc);
                const isFragmentedMP4 = (segmentFormat === null || segmentFormat === void 0 ? void 0 : segmentFormat.includes('m4s')) || (segmentFormat === null || segmentFormat === void 0 ? void 0 : segmentFormat.includes('mp4'));
                if (isFragmentedMP4) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4;
                } else if (segmentFormat === null || segmentFormat === void 0 ? void 0 : segmentFormat.includes('ts')) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.TS;
                }
            }
            const request = new chrome.cast.media.LoadRequest(mediaInfo);
            var _super_currentTime;
            request.currentTime = (_super_currentTime = super.currentTime) !== null && _super_currentTime !== void 0 ? _super_currentTime : 0;
            request.autoplay = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _localState).paused;
            request.activeTrackIds = activeTrackIds;
            await ((_currentSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentSession"])()) === null || _currentSession === void 0 ? void 0 : _currentSession.loadMedia(request));
            this.dispatchEvent(new Event('volumechange'));
        }
        play() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).isPaused) {
                    var _class_private_field_get_controller;
                    (_class_private_field_get_controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).controller) === null || _class_private_field_get_controller === void 0 ? void 0 : _class_private_field_get_controller.playOrPause();
                }
                return;
            }
            return super.play();
        }
        pause() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).isPaused) {
                    var _class_private_field_get_controller;
                    (_class_private_field_get_controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).controller) === null || _class_private_field_get_controller === void 0 ? void 0 : _class_private_field_get_controller.playOrPause();
                }
                return;
            }
            super.pause();
        }
        /**
     * @see https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastOptions
     * @readonly
     *
     * @typedef {Object} CastOptions
     * @property {string} [receiverApplicationId='CC1AD845'] - The app id of the cast receiver.
     * @property {string} [autoJoinPolicy='origin_scoped'] - The auto join policy.
     * @property {string} [language='en-US'] - The language to use for the cast receiver.
     * @property {boolean} [androidReceiverCompatible=false] - Whether to use the Cast Connect.
     * @property {boolean} [resumeSavedSession=true] - Whether to resume the last session.
     *
     * @return {CastOptions}
     */ get castOptions() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castOptions);
        }
        get castReceiver() {
            var _this_getAttribute;
            return (_this_getAttribute = this.getAttribute('cast-receiver')) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : undefined;
        }
        set castReceiver(val) {
            if (this.castReceiver == val) return;
            this.setAttribute('cast-receiver', "".concat(val));
        }
        // Allow the cast source url to be different than <video src>, could be a blob.
        get castSrc() {
            var _this_querySelector;
            var _this_getAttribute, _ref;
            // Try the first <source src> for usage with even more native markup.
            return (_ref = (_this_getAttribute = this.getAttribute('cast-src')) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : (_this_querySelector = this.querySelector('source')) === null || _this_querySelector === void 0 ? void 0 : _this_querySelector.src) !== null && _ref !== void 0 ? _ref : this.currentSrc;
        }
        set castSrc(val) {
            if (this.castSrc == val) return;
            this.setAttribute('cast-src', "".concat(val));
        }
        get castContentType() {
            var _this_getAttribute;
            return (_this_getAttribute = this.getAttribute('cast-content-type')) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : undefined;
        }
        set castContentType(val) {
            this.setAttribute('cast-content-type', "".concat(val));
        }
        get castStreamType() {
            var _this_getAttribute, _ref;
            // NOTE: Per https://github.com/video-dev/media-ui-extensions/issues/3 `streamType` may yield `"unknown"`
            return (_ref = (_this_getAttribute = this.getAttribute('cast-stream-type')) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : this.streamType) !== null && _ref !== void 0 ? _ref : undefined;
        }
        set castStreamType(val) {
            this.setAttribute('cast-stream-type', "".concat(val));
        }
        get castCustomData() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castCustomData);
        }
        set castCustomData(val) {
            const valType = typeof val;
            if (![
                'object',
                'undefined'
            ].includes(valType)) {
                console.error("castCustomData must be nullish or an object but value was of type ".concat(valType));
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castCustomData, val);
        }
        get readyState() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).playerState){
                    case chrome.cast.media.PlayerState.IDLE:
                        return 0;
                    case chrome.cast.media.PlayerState.BUFFERING:
                        return 2;
                    default:
                        return 3;
                }
            }
            return super.readyState;
        }
        get paused() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).isPaused;
            return super.paused;
        }
        get muted() {
            var _class_private_field_get;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.isMuted;
            return super.muted;
        }
        set muted(val) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                if (val && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).isMuted || !val && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).isMuted) {
                    var _class_private_field_get_controller;
                    (_class_private_field_get_controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).controller) === null || _class_private_field_get_controller === void 0 ? void 0 : _class_private_field_get_controller.muteOrUnmute();
                }
                return;
            }
            super.muted = val;
        }
        get volume() {
            var _class_private_field_get;
            var _class_private_field_get_volumeLevel;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) return (_class_private_field_get_volumeLevel = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.volumeLevel) !== null && _class_private_field_get_volumeLevel !== void 0 ? _class_private_field_get_volumeLevel : 1;
            return super.volume;
        }
        set volume(val) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                var _class_private_field_get_controller;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).volumeLevel = +val;
                (_class_private_field_get_controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).controller) === null || _class_private_field_get_controller === void 0 ? void 0 : _class_private_field_get_controller.setVolumeLevel();
                return;
            }
            super.volume = val;
        }
        get duration() {
            var _class_private_field_get;
            // castPlayer duration returns `0` when no media is loaded.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer) && ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.isMediaLoaded)) {
                var _class_private_field_get1;
                var _class_private_field_get_duration;
                return (_class_private_field_get_duration = (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get1 === void 0 ? void 0 : _class_private_field_get1.duration) !== null && _class_private_field_get_duration !== void 0 ? _class_private_field_get_duration : NaN;
            }
            return super.duration;
        }
        get currentTime() {
            var _class_private_field_get;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer) && ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.isMediaLoaded)) {
                var _class_private_field_get1;
                var _class_private_field_get_currentTime;
                return (_class_private_field_get_currentTime = (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) === null || _class_private_field_get1 === void 0 ? void 0 : _class_private_field_get1.currentTime) !== null && _class_private_field_get_currentTime !== void 0 ? _class_private_field_get_currentTime : 0;
            }
            return super.currentTime;
        }
        set currentTime(val) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer)) {
                var _class_private_field_get_controller;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).currentTime = val;
                (_class_private_field_get_controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer).controller) === null || _class_private_field_get_controller === void 0 ? void 0 : _class_private_field_get_controller.seek();
                return;
            }
            super.currentTime = val;
        }
        constructor(...args){
            super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castPlayer, {
                get: get_castPlayer,
                set: void 0
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _loadOnPrompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _localState, {
                writable: true,
                value: {
                    paused: false
                }
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castOptions, {
                writable: true,
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultCastOptions"])()
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _castCustomData, {
                writable: true,
                value: void 0
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _remote, {
                writable: true,
                value: void 0
            });
        }
    }
    var _superclass_observedAttributes;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CastableMedia, "observedAttributes", [
        ...(_superclass_observedAttributes = superclass.observedAttributes) !== null && _superclass_observedAttributes !== void 0 ? _superclass_observedAttributes : [],
        'cast-src',
        'cast-content-type',
        'cast-stream-type',
        'cast-receiver'
    ]);
    function get_castPlayer() {
        var _privateProps_get_getCastPlayer, _privateProps_get;
        return (_privateProps_get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(this.remote)) === null || _privateProps_get === void 0 ? void 0 : (_privateProps_get_getCastPlayer = _privateProps_get.getCastPlayer) === null || _privateProps_get_getCastPlayer === void 0 ? void 0 : _privateProps_get_getCastPlayer.call(_privateProps_get);
    }
    async function loadOnPrompt() {
        // Pause locally when the session is created.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _localState).paused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CastableMedia.prototype), "paused", this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CastableMedia.prototype), "pause", this).call(this);
        // Sync over the muted state but not volume, 100% is different on TV's :P
        this.muted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CastableMedia.prototype), "muted", this);
        try {
            await this.load();
        } catch (err) {
            console.error(err);
        }
    }
    return CastableMedia;
};
const CastableVideoMixin = CastableMediaMixin;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackEvent",
    ()=>TrackEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class TrackEvent extends Event {
    constructor(type, init){
        super(type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "track", void 0);
        this.track = init.track;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrivate",
    ()=>getPrivate,
    "setPrivate",
    ()=>setPrivate
]);
const privateProps = /* @__PURE__ */ new WeakMap();
function getPrivate(instance) {
    var _privateProps_get;
    return (_privateProps_get = privateProps.get(instance)) !== null && _privateProps_get !== void 0 ? _privateProps_get : setPrivate(instance, {});
}
function setPrivate(instance, props) {
    let saved = privateProps.get(instance);
    if (!saved) privateProps.set(instance, saved = {});
    return Object.assign(saved, props);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrackList",
    ()=>VideoTrackList,
    "addVideoTrack",
    ()=>addVideoTrack,
    "removeVideoTrack",
    ()=>removeVideoTrack,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function addVideoTrack(media, track) {
    const trackList = media.videoTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in VideoTrackList.prototype)) {
        Object.defineProperty(VideoTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeVideoTrack(track) {
    var _getPrivate_media;
    const trackList = (_getPrivate_media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media) === null || _getPrivate_media === void 0 ? void 0 : _getPrivate_media.videoTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function selectedChanged(selected) {
    var _getPrivate_media_videoTracks;
    const trackList = (_getPrivate_media_videoTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(selected).media.videoTracks) !== null && _getPrivate_media_videoTracks !== void 0 ? _getPrivate_media_videoTracks : [];
    let hasUnselected = false;
    for (const track of trackList){
        if (track === selected) continue;
        track.selected = false;
        hasUnselected = true;
    }
    if (hasUnselected) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
        queueMicrotask(()=>{
            delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
            trackList.dispatchEvent(new Event("change"));
        });
    }
}
var _addTrackCallback = /*#__PURE__*/ new WeakMap(), _removeTrackCallback = /*#__PURE__*/ new WeakMap(), _changeCallback = /*#__PURE__*/ new WeakMap(), _tracks = /*#__PURE__*/ new WeakMap();
class VideoTrackList extends EventTarget {
    [Symbol.iterator]() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks).values();
    }
    get length() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks).size;
    }
    getTrackById(id) {
        var _find;
        return (_find = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks)
        ].find((track)=>track.id === id)) !== null && _find !== void 0 ? _find : null;
    }
    get selectedIndex() {
        return [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks)
        ].findIndex((track)=>track.selected);
    }
    get onaddtrack() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback);
    }
    set onaddtrack(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback)) {
            this.removeEventListener("addtrack", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, callback);
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback);
    }
    set onremovetrack(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback)) {
            this.removeEventListener("removetrack", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, callback);
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback);
    }
    set onchange(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback)) {
            this.removeEventListener("change", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, callback);
            this.addEventListener("change", callback);
        }
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks, {
            get: get_tracks,
            set: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
}
function get_tracks() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenditionEvent",
    ()=>RenditionEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class RenditionEvent extends Event {
    constructor(type, init){
        super(type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rendition", void 0);
        this.rendition = init.rendition;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRenditionList",
    ()=>VideoRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.videoRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in VideoRenditionList.prototype)) {
        Object.defineProperty(VideoRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.selected) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.videoTracks
    ].filter((track)=>track.selected).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
var _addRenditionCallback = /*#__PURE__*/ new WeakMap(), _removeRenditionCallback = /*#__PURE__*/ new WeakMap(), _changeCallback = /*#__PURE__*/ new WeakMap();
class VideoRenditionList extends EventTarget {
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        var _getCurrentRenditions_find;
        return (_getCurrentRenditions_find = getCurrentRenditions(this).find((rendition)=>"".concat(rendition.id) === "".concat(id))) !== null && _getCurrentRenditions_find !== void 0 ? _getCurrentRenditions_find : null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback);
    }
    set onaddrendition(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback)) {
            this.removeEventListener("addrendition", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, callback);
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback);
    }
    set onremoverendition(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback)) {
            this.removeEventListener("removerendition", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, callback);
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback);
    }
    set onchange(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback)) {
            this.removeEventListener("change", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, callback);
            this.addEventListener("change", callback);
        }
    }
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, {
            writable: true,
            value: void 0
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRendition",
    ()=>VideoRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
;
;
;
;
;
var _selected = /*#__PURE__*/ new WeakMap();
class VideoRendition {
    get selected() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected);
    }
    set selected(val) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected) === val) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, val);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "src", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "width", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "height", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "bitrate", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "frameRate", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "codec", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, {
            writable: true,
            value: false
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrack",
    ()=>VideoTrack,
    "VideoTrackKind",
    ()=>VideoTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const VideoTrackKind = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
};
var _selected = /*#__PURE__*/ new WeakMap();
class VideoTrack {
    addRendition(src, width, height, codec, bitrate, frameRate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoRendition"]();
        rendition.src = src;
        rendition.width = width;
        rendition.height = height;
        rendition.frameRate = frameRate;
        rendition.bitrate = bitrate;
        rendition.codec = codec;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get selected() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected);
    }
    set selected(val) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected) === val) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, val);
        if (val !== true) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "kind", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "label", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "language", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "sourceBuffer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, {
            writable: true,
            value: false
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRenditionList",
    ()=>AudioRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in AudioRenditionList.prototype)) {
        Object.defineProperty(AudioRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.enabled) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.audioTracks
    ].filter((track)=>track.enabled).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
var _addRenditionCallback = /*#__PURE__*/ new WeakMap(), _removeRenditionCallback = /*#__PURE__*/ new WeakMap(), _changeCallback = /*#__PURE__*/ new WeakMap();
class AudioRenditionList extends EventTarget {
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        var _getCurrentRenditions_find;
        return (_getCurrentRenditions_find = getCurrentRenditions(this).find((rendition)=>"".concat(rendition.id) === "".concat(id))) !== null && _getCurrentRenditions_find !== void 0 ? _getCurrentRenditions_find : null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback);
    }
    set onaddrendition(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback)) {
            this.removeEventListener("addrendition", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, callback);
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback);
    }
    set onremoverendition(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback)) {
            this.removeEventListener("removerendition", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, callback);
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback);
    }
    set onchange(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback)) {
            this.removeEventListener("change", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, callback);
            this.addEventListener("change", callback);
        }
    }
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRenditionCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeRenditionCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, {
            writable: true,
            value: void 0
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRendition",
    ()=>AudioRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
;
;
;
;
;
var _selected = /*#__PURE__*/ new WeakMap();
class AudioRendition {
    get selected() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected);
    }
    set selected(val) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected) === val) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, val);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "src", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "bitrate", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "codec", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selected, {
            writable: true,
            value: false
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrackList",
    ()=>AudioTrackList,
    "addAudioTrack",
    ()=>addAudioTrack,
    "enabledChanged",
    ()=>enabledChanged,
    "removeAudioTrack",
    ()=>removeAudioTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function addAudioTrack(media, track) {
    const trackList = media.audioTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in AudioTrackList.prototype)) {
        Object.defineProperty(AudioTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeAudioTrack(track) {
    var _getPrivate_media;
    const trackList = (_getPrivate_media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media) === null || _getPrivate_media === void 0 ? void 0 : _getPrivate_media.audioTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function enabledChanged(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioTracks;
    if (!trackList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
        trackList.dispatchEvent(new Event("change"));
    });
}
var _addTrackCallback = /*#__PURE__*/ new WeakMap(), _removeTrackCallback = /*#__PURE__*/ new WeakMap(), _changeCallback = /*#__PURE__*/ new WeakMap(), _tracks = /*#__PURE__*/ new WeakMap();
class AudioTrackList extends EventTarget {
    [Symbol.iterator]() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks).values();
    }
    get length() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks).size;
    }
    getTrackById(id) {
        var _find;
        return (_find = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks)
        ].find((track)=>track.id === id)) !== null && _find !== void 0 ? _find : null;
    }
    get onaddtrack() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback);
    }
    set onaddtrack(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback)) {
            this.removeEventListener("addtrack", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, callback);
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback);
    }
    set onremovetrack(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback)) {
            this.removeEventListener("removetrack", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, callback);
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback);
    }
    set onchange(callback) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback)) {
            this.removeEventListener("change", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, void 0);
        }
        if (typeof callback == "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, callback);
            this.addEventListener("change", callback);
        }
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tracks, {
            get: get_tracks,
            set: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addTrackCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _removeTrackCallback, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _changeCallback, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
}
function get_tracks() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrack",
    ()=>AudioTrack,
    "AudioTrackKind",
    ()=>AudioTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const AudioTrackKind = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
};
var _enabled = /*#__PURE__*/ new WeakMap();
class AudioTrack {
    addRendition(src, codec, bitrate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioRendition"]();
        rendition.src = src;
        rendition.codec = codec;
        rendition.bitrate = bitrate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get enabled() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enabled);
    }
    set enabled(val) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enabled) === val) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enabled, val);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enabledChanged"])(this);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "kind", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "label", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "language", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "sourceBuffer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _enabled, {
            writable: true,
            value: false
        });
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTracksMixin",
    ()=>MediaTracksMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const nativeVideoTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "video");
const nativeAudioTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "audio");
function MediaTracksMixin(MediaElementClass) {
    if (!(MediaElementClass === null || MediaElementClass === void 0 ? void 0 : MediaElementClass.prototype)) return MediaElementClass;
    const videoTracksFn = getBaseMediaTracksFn(MediaElementClass, "video");
    if (!videoTracksFn || "".concat(videoTracksFn).includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "videoTracks", {
            get () {
                return getVideoTracks(this);
            }
        });
    }
    const audioTracksFn = getBaseMediaTracksFn(MediaElementClass, "audio");
    if (!audioTracksFn || "".concat(audioTracksFn).includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "audioTracks", {
            get () {
                return getAudioTracks(this);
            }
        });
    }
    if (!("addVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addVideoTrack = function(kind) {
            let label = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", language = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(this, track);
            return track;
        };
    }
    if (!("removeVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeVideoTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"];
    }
    if (!("addAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addAudioTrack = function(kind) {
            let label = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", language = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(this, track);
            return track;
        };
    }
    if (!("removeAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeAudioTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"];
    }
    if (!("videoRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "videoRenditions", {
            get () {
                return initVideoRenditions(this);
            }
        });
    }
    const initVideoRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions = renditions;
        }
        return renditions;
    };
    if (!("audioRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "audioRenditions", {
            get () {
                return initAudioRenditions(this);
            }
        });
    }
    const initAudioRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions = renditions;
        }
        return renditions;
    };
    return MediaElementClass;
}
function getBaseMediaTracksFn(MediaElementClass, type) {
    if (MediaElementClass === null || MediaElementClass === void 0 ? void 0 : MediaElementClass.prototype) {
        var _Object_getOwnPropertyDescriptor;
        return (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(MediaElementClass.prototype, "".concat(type, "Tracks"))) === null || _Object_getOwnPropertyDescriptor === void 0 ? void 0 : _Object_getOwnPropertyDescriptor.get;
    }
}
function getVideoTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks = tracks;
        if (nativeVideoTracksFn) {
            var _media_nativeEl;
            const nativeTracks = nativeVideoTracksFn.call((_media_nativeEl = media.nativeEl) !== null && _media_nativeEl !== void 0 ? _media_nativeEl : media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"])(event.track);
            });
        }
    }
    return tracks;
}
function getAudioTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks = tracks;
        if (nativeAudioTracksFn) {
            var _media_nativeEl;
            const nativeTracks = nativeAudioTracksFn.call((_media_nativeEl = media.nativeEl) !== null && _media_nativeEl !== void 0 ? _media_nativeEl : media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"])(event.track);
            });
        }
    }
    return tracks;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
]);

//# sourceMappingURL=a9971_568f7985._.js.map