(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) {
            b[c] = !0
        }), b
    }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else d = b
        }
        return d
    }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function ba() {
        return !1
    }

    function bb() {
        return !0
    }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function bi(a, b) {
        do a = a[b]; while (a && a.nodeType !== 1);
        return a
    }

    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) return p.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return p.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (be.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a, function(a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }

    function bk(a) {
        var b = bl.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h)
                for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({}, g.data))
    }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }

    function bY(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a) return b
        }
        return d
    }

    function bZ(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }

    function b$(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }

    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
        return f
    }

    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = bH(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (bQ.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function cc(a) {
        if (bS[a]) return bS[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
        }
        return bS[a] = c, c
    }

    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b, function(b, e) {
            c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && p.type(b) === "object")
            for (e in b) ci(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function cz(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c))
                for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length : 0,
            l = a === cv;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
    }

    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }

    function cC(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }

    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c)
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    if (c !== !0)
                        if (c && a["throws"]) b = c(b);
                        else try {
                            b = c(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: c ? k : "No conversion from " + h + " to " + e
                            }
                        }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }

    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function cU() {
        return setTimeout(function() {
            cN = b
        }, 0), cN = p.now()
    }

    function cV(a, b) {
        p.each(b, function(b, c) {
            var d = (cT[b] || []).concat(cT["*"]),
                e = 0,
                f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function cW(a, b, c) {
        var d, e = 0,
            f = 0,
            g = cS.length,
            h = p.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                var b = cN || cU(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: p.extend({}, b),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: cN || cU(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e), e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d) return d
        }
        return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }

    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
            j.unqueued || k()
        }), j.unqueued++, l.always(function() {
            l.always(function() {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) continue;
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() {
                p(a).hide()
            }), l.done(function() {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) p.style(a, b, n[b])
            });
            for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }

    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e)
    }

    function c$(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) c = bV[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function(a, b) {
            return new p.fn.init(a, b, c)
        },
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function(a, b) {
            return (b + "").toUpperCase()
        },
        D = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
        },
        E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1, this[0] = g
                    }
                    return this.context = e, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a), this
        },
        eq: function(a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++)
            if ((a = arguments[i]) != null)
                for (c in a) {
                    d = h[c], e = a[c];
                    if (h === e) continue;
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
            return h
    }, p.extend({
        noConflict: function(b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? p.readyWait++ : p.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? --p.readyWait : p.isReady) return;
            if (!e.body) return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) return;
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
        },
        isFunction: function(a) {
            return p.type(a) === "function"
        },
        isArray: Array.isArray || function(a) {
            return p.type(a) === "array"
        },
        isWindow: function(a) {
            return a != null && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return a == null ? String(a) : E[m.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || n.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(b) {
            if (!b || typeof b != "string") return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string") return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && r.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(A, "ms-").replace(B, C)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break
                } else
                    for (; f < g;)
                        if (c.apply(a[f++], d) === !1) break
            } else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break
            } else
                for (; f < g;)
                    if (c.call(a[f], f, a[f++]) === !1) break; return a
        },
        trim: o && !o.call("﻿ ") ? function(a) {
            return a == null ? "" : o.call(a)
        } : function(a) {
            return a == null ? "" : (a + "").replace(t, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (l) return l.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if (typeof d == "number")
                for (; f < d; f++) a[e++] = c[f];
            else
                while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            c = !!c;
            for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j)
                for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
            else
                for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(k.call(arguments)))
            }, f.guid = a.guid = a.guid || p.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = d == null,
                k = 0,
                l = a.length;
            if (d && typeof d == "object") {
                for (k in d) p.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                    return i.call(p(a), c)
                }) : (c.call(a, e), c = null));
                if (c)
                    for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), p.ready.promise = function(b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete") setTimeout(p.ready, 1);
            else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
            else {
                e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                var c = !1;
                try {
                    c = a.frameElement == null && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        p.ready()
                    }
                }()
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) {
                c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                for (; i && h < g; h++)
                    if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var b = i.length;
                        (function d(b) {
                            p.each(b, function(b, c) {
                                var e = p.type(c);
                                e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                            })
                        })(arguments), e ? g = i.length : c && (f = b, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && p.each(arguments, function(a, b) {
                        var c;
                        while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                    }), this
                },
                has: function(a) {
                    return p.inArray(a, i) > -1
                },
                empty: function() {
                    return i = [], this
                },
                disable: function() {
                    return i = j = c = b, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = b, c || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }, p.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return p.Deferred(function(c) {
                            p.each(b, function(b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]](p.isFunction(g) ? function() {
                                    var a = g.apply(this, arguments);
                                    a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return a != null ? p.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, p.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = k.call(arguments),
                d = c.length,
                e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                f = e === 1 ? a : p.Deferred(),
                g = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                },
                h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c), f.promise()
        }
    }), p.support = function() {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length) return {};
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent)
            for (k in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
        return p(function() {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                i = e.getElementsByTagName("body")[0];
            if (!i) return;
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                width: "4px"
            }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache : a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache : a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), p.fn.extend({
        data: function(a, c) {
            var d, e, f, g, h, i = this[0],
                j = 0,
                k = null;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function() {
                p.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
                if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c, this.each(function() {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                p.removeData(this, a)
            })
        }
    }), p.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = p.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = p._queueHooks(a, b),
                g = function() {
                    p.dequeue(a, b)
                };
            e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                empty: p.Callbacks("once memory").add(function() {
                    p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                })
            })
        }
    }), p.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                p.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = p.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--) d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                p.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = p.trim(f)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
                return
            }
            return e = p.isFunction(a), this.each(function(d) {
                var f, g = p(this);
                if (this.nodeType !== 1) return;
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                    return a == null ? "" : a + ""
                })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = a.type === "select-one";
                    if (f < 0) return null;
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i) return b;
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function() {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
            if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) return;
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), M = {
        get: function(a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, U || (N = {
        name: !0,
        id: !0,
        coords: !0
    }, L = p.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, p.each(["width", "height"], function(a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function(a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    }), p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), L.set(a, b, c)
        }
    }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), p.support.style || (p.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function(a, b) {
                if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        })
    });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function(a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
        };
    p.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, q, r;
                if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
                d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                    return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
                }, h.elem = a), c = p.trim(_(c)).split(" ");
                for (j = 0; j < c.length; j++) {
                    k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && p.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    }, o), q = i[l];
                    if (!q) {
                        q = i[l] = [], q.delegateCount = 0;
                        if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                    }
                    r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
                }
                a = null
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
                if (!r || !(m = r.events)) return;
                b = p.trim(_(b || "")).split(" ");
                for (f = 0; f < b.length; f++) {
                    g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                    if (!h) {
                        for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                        continue
                    }
                    n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                    o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
                }
                p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, f, g) {
                if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                    var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                        t = [];
                    if ($.test(s + p.event.triggered)) return;
                    s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                    if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                    c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                    if (!f) {
                        h = p.cache;
                        for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                        return
                    }
                    c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                    if (n.trigger && n.trigger.apply(f, d) === !1) return;
                    q = [
                        [f, n.bindType || s]
                    ];
                    if (!g && !n.noBubble && !p.isWindow(f)) {
                        r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                        for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
                        l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                    }
                    for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
                    return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
                }
                return
            },
            dispatch: function(c) {
                c = p.event.fix(c || a.event);
                var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                    q = o.delegateCount,
                    r = k.call(arguments),
                    s = !c.exclusive && !c.namespace,
                    t = p.event.special[c.type] || {},
                    u = [];
                r[0] = c, c.delegateTarget = this;
                if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
                if (q && (!c.button || c.type !== "click"))
                    for (f = c.target; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || c.type !== "click") {
                            h = {}, j = [];
                            for (d = 0; d < q; d++) l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l);
                            j.length && u.push({
                                elem: f,
                                matches: j
                            })
                        }
                o.length > q && u.push({
                    elem: this,
                    matches: o.slice(q)
                });
                for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                    i = u[d], c.currentTarget = i.elem;
                    for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                        l = i.matches[e];
                        if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                return t.postDispatch && t.postDispatch.call(this, c), c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, f, g, h = c.button,
                        i = c.fromElement;
                    return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[p.expando]) return a;
                var b, c, d = a,
                    f = p.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                a = p.Event(d);
                for (b = g.length; b;) c = g[--b], a[c] = d[c];
                return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        p.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = p.extend(new p.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
        }, p.Event = function(a, b) {
            if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;
            else return new p.Event(a, b)
        }, p.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = bb, this.stopPropagation()
            },
            isDefaultPrevented: ba,
            isPropagationStopped: ba,
            isImmediatePropagationStopped: ba
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            p.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj,
                        g = f.selector;
                    if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                    return c
                }
            }
        }), p.support.submitBubbles || (p.event.special.submit = {
            setup: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                    d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), p._data(d, "_submit_attached", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.remove(this, "._submit")
            }
        }), p.support.changeBubbles || (p.event.special.change = {
            setup: function() {
                if (V.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), p.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                    });
                    return !1
                }
                p.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                    }), p._data(b, "_change_attached", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return p.event.remove(this, "._change"), !V.test(this.nodeName)
            }
        }), p.support.focusinBubbles || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    p.event.simulate(b, a.target, p.event.fix(a), !0)
                };
            p.event.special[b] = {
                setup: function() {
                    c++ === 0 && e.addEventListener(a, d, !0)
                },
                teardown: function() {
                    --c === 0 && e.removeEventListener(a, d, !0)
                }
            }
        }), p.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = ba;
                else if (!e) return this;
                return f === 1 && (g = e, e = function(a) {
                    return p().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() {
                    p.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if (typeof a == "object") {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c, c = b;
                return d === !1 && (d = ba), this.each(function() {
                    p.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return p(this.context).on(a, this.selector, b, c), this
            },
            die: function(a, b) {
                return p(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    p.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return p.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || p.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                        return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            p.fn[b] = function(a, c) {
                return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
        }),
        function(a, b) {
            function bc(a, b, c, d) {
                c = c || [], b = b || r;
                var e, f, i, j, k = b.nodeType;
                if (!a || typeof a != "string") return c;
                if (k !== 1 && k !== 9) return [];
                i = g(b);
                if (!i && !d)
                    if (e = P.exec(a))
                        if (j = e[1]) {
                            if (k === 9) {
                                f = b.getElementById(j);
                                if (!f || !f.parentNode) return c;
                                if (f.id === j) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f), c
                        } else {
                            if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
                            if ((j = e[3]) && _ && b.getElementsByClassName) return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
                        }
                return bp(a.replace(L, "$1"), b, c, d, i)
            }

            function bd(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return c === "input" && b.type === a
                }
            }

            function be(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && b.type === a
                }
            }

            function bf(a) {
                return z(function(b) {
                    return b = +b, z(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function bg(a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return -1;
                    d = d.nextSibling
                }
                return 1
            }

            function bh(a, b) {
                var c, d, f, g, h, i, j, k = C[o][a];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = e.preFilter;
                while (h) {
                    if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)), i.push(f = []);
                    c = !1;
                    if (d = N.exec(h)) f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ");
                    for (g in e.filter)(d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d);
                    if (!c) break
                }
                return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
            }

            function bi(a, b, d) {
                var e = b.dir,
                    f = d && b.dir === "parentNode",
                    g = u++;
                return b.first ? function(b, c, d) {
                    while (b = b[e])
                        if (f || b.nodeType === 1) return a(b, c, d)
                } : function(b, d, h) {
                    if (!h) {
                        var i, j = t + " " + g + " ",
                            k = j + c;
                        while (b = b[e])
                            if (f || b.nodeType === 1) {
                                if ((i = b[o]) === k) return b.sizset;
                                if (typeof i == "string" && i.indexOf(j) === 0) {
                                    if (b.sizset) return b
                                } else {
                                    b[o] = k;
                                    if (a(b, d, h)) return b.sizset = !0, b;
                                    b.sizset = !1
                                }
                            }
                    } else
                        while (b = b[e])
                            if (f || b.nodeType === 1)
                                if (a(b, d, h)) return b
                }
            }

            function bj(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function bk(a, b, c, d, e) {
                var f, g = [],
                    h = 0,
                    i = a.length,
                    j = b != null;
                for (; h < i; h++)
                    if (f = a[h])
                        if (!c || c(f, d, e)) g.push(f), j && b.push(h);
                return g
            }

            function bl(a, b, c, d, e, f) {
                return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function(f, g, h, i) {
                    if (f && e) return;
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
                        q = a && (f || !b) ? bk(p, m, a, h, i) : p,
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    c && c(q, r, h, i);
                    if (d) {
                        l = bk(r, n), d(l, [], h, i), j = l.length;
                        while (j--)
                            if (k = l[j]) r[n[j]] = !(q[n[j]] = k)
                    }
                    if (f) {
                        j = a && r.length;
                        while (j--)
                            if (k = r[j]) f[m[j]] = !(g[m[j]] = k)
                    } else r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
                })
            }

            function bm(a) {
                var b, c, d, f = a.length,
                    g = e.relative[a[0].type],
                    h = g || e.relative[" "],
                    i = g ? 1 : 0,
                    j = bi(function(a) {
                        return a === b
                    }, h, !0),
                    k = bi(function(a) {
                        return y.call(b, a) > -1
                    }, h, !0),
                    m = [function(a, c, d) {
                        return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
                    }];
                for (; i < f; i++)
                    if (c = e.relative[a[i].type]) m = [bi(bj(m), c)];
                    else {
                        c = e.filter[a[i].type].apply(null, a[i].matches);
                        if (c[o]) {
                            d = ++i;
                            for (; d < f; d++)
                                if (e.relative[a[d].type]) break;
                            return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                        }
                        m.push(c)
                    }
                return bj(m)
            }

            function bn(a, b) {
                var d = b.length > 0,
                    f = a.length > 0,
                    g = function(h, i, j, k, m) {
                        var n, o, p, q = [],
                            s = 0,
                            u = "0",
                            x = h && [],
                            y = m != null,
                            z = l,
                            A = h || f && e.find.TAG("*", m && i.parentNode || i),
                            B = t += z == null ? 1 : Math.E;
                        y && (l = i !== r && i, c = g.el);
                        for (;
                            (n = A[u]) != null; u++) {
                            if (f && n) {
                                for (o = 0; p = a[o]; o++)
                                    if (p(n, i, j)) {
                                        k.push(n);
                                        break
                                    }
                                y && (t = B, c = ++g.el)
                            }
                            d && ((n = !p && n) && s--, h && x.push(n))
                        }
                        s += u;
                        if (d && u !== s) {
                            for (o = 0; p = b[o]; o++) p(x, q, i, j);
                            if (h) {
                                if (s > 0)
                                    while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                                q = bk(q)
                            }
                            w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                        }
                        return y && (t = B, l = z), x
                    };
                return g.el = 0, d ? z(g) : g
            }

            function bo(a, b, c, d) {
                var e = 0,
                    f = b.length;
                for (; e < f; e++) bc(a, b[e], c, d);
                return c
            }

            function bp(a, b, c, d, f) {
                var g, h, j, k, l, m = bh(a),
                    n = m.length;
                if (!d && m.length === 1) {
                    h = m[0] = m[0].slice(0);
                    if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                        b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                        if (!b) return c;
                        a = a.slice(h.shift().length)
                    }
                    for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                        j = h[g];
                        if (e.relative[k = j.type]) break;
                        if (l = e.find[k])
                            if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                                h.splice(g, 1), a = d.length && h.join("");
                                if (!a) return w.apply(c, x.call(d, 0)), c;
                                break
                            }
                    }
                }
                return i(a, m)(d, b, f, c, R.test(a)), c
            }

            function bq() {}
            var c, d, e, f, g, h, i, j, k, l, m = !0,
                n = "undefined",
                o = ("sizcache" + Math.random()).replace(".", ""),
                q = String,
                r = a.document,
                s = r.documentElement,
                t = 0,
                u = 0,
                v = [].pop,
                w = [].push,
                x = [].slice,
                y = [].indexOf || function(a) {
                    var b = 0,
                        c = this.length;
                    for (; b < c; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                z = function(a, b) {
                    return a[o] = b == null || b, a
                },
                A = function() {
                    var a = {},
                        b = [];
                    return z(function(c, d) {
                        return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
                    }, a)
                },
                B = A(),
                C = A(),
                D = A(),
                E = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                G = F.replace("w", "w#"),
                H = "([*^$|!~]?=)",
                I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
                J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
                K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
                L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                M = new RegExp("^" + E + "*," + E + "*"),
                N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
                O = new RegExp(J),
                P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                Q = /^:not/,
                R = /[\x20\t\r\n\f]*[+~]/,
                S = /:not\($/,
                T = /h\d/i,
                U = /input|select|textarea|button/i,
                V = /\\(?!\\)/g,
                W = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + J),
                    POS: new RegExp(K, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
                },
                X = function(a) {
                    var b = r.createElement("div");
                    try {
                        return a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b = null
                    }
                },
                Y = X(function(a) {
                    return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
                }),
                Z = X(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
                }),
                $ = X(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return b !== "boolean" && b !== "string"
                }),
                _ = X(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
                }),
                ba = X(function(a) {
                    a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
                    var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
                    return d = !r.getElementById(o), s.removeChild(a), b
                });
            try {
                x.call(s.childNodes, 0)[0].nodeType
            } catch (bb) {
                x = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            bc.matches = function(a, b) {
                return bc(a, null, null, b)
            }, bc.matchesSelector = function(a, b) {
                return bc(b, null, null, [a]).length > 0
            }, f = bc.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof a.textContent == "string") return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
                    } else if (e === 3 || e === 4) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += f(b);
                return c
            }, g = bc.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            }, h = bc.contains = s.contains ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
            } : s.compareDocumentPosition ? function(a, b) {
                return b && !!(a.compareDocumentPosition(b) & 16)
            } : function(a, b) {
                while (b = b.parentNode)
                    if (b === a) return !0;
                return !1
            }, bc.attr = function(a, b) {
                var c, d = g(a);
                return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
            }, e = bc.selectors = {
                cacheLength: 50,
                createPseudo: z,
                match: W,
                attrHandle: Z ? {} : {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                find: {
                    ID: d ? function(a, b, c) {
                        if (typeof b.getElementById !== n && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : []
                        }
                    } : function(a, c, d) {
                        if (typeof c.getElementById !== n && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
                        }
                    },
                    TAG: Y ? function(a, b) {
                        if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a)
                    } : function(a, b) {
                        var c = b.getElementsByTagName(a);
                        if (a === "*") {
                            var d, e = [],
                                f = 0;
                            for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                            return e
                        }
                        return c
                    },
                    NAME: ba && function(a, b) {
                        if (typeof b.getElementsByName !== n) return b.getElementsByName(name)
                    },
                    CLASS: _ && function(a, b, c) {
                        if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c;
                        if (W.CHILD.test(a[0])) return null;
                        if (a[3]) a[2] = a[3];
                        else if (b = a[4]) O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
                        return a.slice(0, 3)
                    }
                },
                filter: {
                    ID: d ? function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                return b.getAttribute("id") === a
                            }
                    } : function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                                return c && c.value === a
                            }
                    },
                    TAG: function(a) {
                        return a === "*" ? function() {
                            return !0
                        } : (a = a.replace(V, "").toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function(a) {
                        var b = B[o][a];
                        return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                            function(a) {
                                return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(a, b, c) {
                        return function(d, e) {
                            var f = bc.attr(d, a);
                            return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d) {
                        return a === "nth" ? function(a) {
                            var b, e, f = a.parentNode;
                            if (c === 1 && d === 0) return !0;
                            if (f) {
                                e = 0;
                                for (b = f.firstChild; b; b = b.nextSibling)
                                    if (b.nodeType === 1) {
                                        e++;
                                        if (a === b) break
                                    }
                            }
                            return e -= d, e === c || e % c === 0 && e / c >= 0
                        } : function(b) {
                            var c = b;
                            switch (a) {
                                case "only":
                                case "first":
                                    while (c = c.previousSibling)
                                        if (c.nodeType === 1) return !1;
                                    if (a === "first") return !0;
                                    c = b;
                                case "last":
                                    while (c = c.nextSibling)
                                        if (c.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                        return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                            var e, f = d(a, b),
                                g = f.length;
                            while (g--) e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
                        }) : function(a) {
                            return d(a, 0, c)
                        }) : d
                    }
                },
                pseudos: {
                    not: z(function(a) {
                        var b = [],
                            c = [],
                            d = i(a.replace(L, "$1"));
                        return d[o] ? z(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)
                                if (f = g[h]) a[h] = !(b[h] = f)
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: z(function(a) {
                        return function(b) {
                            return bc(a, b).length > 0
                        }
                    }),
                    contains: z(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                        }
                    }),
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && !!a.checked || b === "option" && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function(a) {
                        return !e.pseudos.empty(a)
                    },
                    empty: function(a) {
                        var b;
                        a = a.firstChild;
                        while (a) {
                            if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
                            a = a.nextSibling
                        }
                        return !0
                    },
                    header: function(a) {
                        return T.test(a.nodeName)
                    },
                    text: function(a) {
                        var b, c;
                        return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                    },
                    radio: bd("radio"),
                    checkbox: bd("checkbox"),
                    file: bd("file"),
                    password: bd("password"),
                    image: bd("image"),
                    submit: be("submit"),
                    reset: be("reset"),
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && a.type === "button" || b === "button"
                    },
                    input: function(a) {
                        return U.test(a.nodeName)
                    },
                    focus: function(a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                    },
                    active: function(a) {
                        return a === a.ownerDocument.activeElement
                    },
                    first: bf(function(a, b, c) {
                        return [0]
                    }),
                    last: bf(function(a, b, c) {
                        return [b - 1]
                    }),
                    eq: bf(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: bf(function(a, b, c) {
                        for (var d = 0; d < b; d += 2) a.push(d);
                        return a
                    }),
                    odd: bf(function(a, b, c) {
                        for (var d = 1; d < b; d += 2) a.push(d);
                        return a
                    }),
                    lt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, j = s.compareDocumentPosition ? function(a, b) {
                return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
            } : function(a, b) {
                if (a === b) return k = !0, 0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [],
                    g = a.parentNode,
                    h = b.parentNode,
                    i = g;
                if (g === h) return bg(a, b);
                if (!g) return -1;
                if (!h) return 1;
                while (i) e.unshift(i), i = i.parentNode;
                i = h;
                while (i) f.unshift(i), i = i.parentNode;
                c = e.length, d = f.length;
                for (var j = 0; j < c && j < d; j++)
                    if (e[j] !== f[j]) return bg(e[j], f[j]);
                return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
            }, [0, 0].sort(j), m = !k, bc.uniqueSort = function(a) {
                var b, c = 1;
                k = m, a.sort(j);
                if (k)
                    for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
                return a
            }, bc.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, i = bc.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = D[o][a];
                if (!f) {
                    b || (b = bh(a)), c = b.length;
                    while (c--) f = bm(b[c]), f[o] ? d.push(f) : e.push(f);
                    f = D(a, bn(e, d))
                }
                return f
            }, r.querySelectorAll && function() {
                var a, b = bp,
                    c = /'|\\/g,
                    d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    e = [":focus"],
                    f = [":active", ":focus"],
                    h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
                X(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
                }), X(function(a) {
                    a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                }), e = new RegExp(e.join("|")), bp = function(a, d, f, g, h) {
                    if (!g && !h && (!e || !e.test(a))) {
                        var i, j, k = !0,
                            l = o,
                            m = d,
                            n = d.nodeType === 9 && a;
                        if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
                            while (j--) i[j] = l + i[j].join("");
                            m = R.test(a) && d.parentNode || d, n = i.join(",")
                        }
                        if (n) try {
                            return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
                        } catch (p) {} finally {
                            k || d.removeAttribute("id")
                        }
                    }
                    return b(a, d, f, g, h)
                }, h && (X(function(b) {
                    a = h.call(b, "div");
                    try {
                        h.call(b, "[test!='']:sizzle"), f.push("!=", J)
                    } catch (c) {}
                }), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) {
                    c = c.replace(d, "='$1']");
                    if (!g(b) && !f.test(c) && (!e || !e.test(c))) try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) return i
                    } catch (j) {}
                    return bc(c, null, null, [b]).length > 0
                })
            }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
        }(a);
    var bc = /Until$/,
        bd = /^(?:parents|prev(?:Until|All))/,
        be = /^.[^:#\[\.,]*$/,
        bf = p.expr.match.needsContext,
        bg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function() {
                for (b = 0, c = h.length; b < c; b++)
                    if (p.contains(h[b], this)) return !0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length, p.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (p.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    }), p.fn.andSelf = p.fn.addBack, p.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return p.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return p.dir(a, "parentNode", c)
        },
        next: function(a) {
            return bi(a, "nextSibling")
        },
        prev: function(a) {
            return bi(a, "previousSibling")
        },
        nextAll: function(a) {
            return p.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return p.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return p.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return p.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return p.sibling(a.firstChild)
        },
        contents: function(a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function(a, b) {
        p.fn[a] = function(c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bm = / jQuery\d+="(?:null|\d+)"/g,
        bn = /^\s+/,
        bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bp = /<([\w:]+)/,
        bq = /<tbody/i,
        br = /<|&#?\w+;/,
        bs = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
        bv = /^(?:checkbox|radio)$/,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bA = bk(e),
        bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
            text: function(a) {
                return p.access(this, function(a) {
                    return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (p.isFunction(a)) return this.each(function(b) {
                    p(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return p.isFunction(a) ? this.each(function(b) {
                    p(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = p(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = p.isFunction(a);
                return this.each(function(c) {
                    p(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                var c, d = 0;
                for (;
                    (c = this[d]) != null; d++)
                    if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
                return this
            },
            empty: function() {
                var a, b = 0;
                for (;
                    (a = this[b]) != null; b++) {
                    a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                    while (a.firstChild) a.removeChild(a.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                    return p.clone(this, a, b)
                })
            },
            html: function(a) {
                return p.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                    if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(bo, "<$1></$2>");
                        try {
                            for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                    var c = p(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    p(this).remove(), b ? p(b).before(a) : p(c).append(a)
                }))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                    j = a[0],
                    k = [],
                    l = this.length;
                if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() {
                    p(this).domManip(a, c, d)
                });
                if (p.isFunction(j)) return this.each(function(e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                });
                if (this[0]) {
                    e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                    if (f) {
                        c = c && p.nodeName(f, "tr");
                        for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                    }
                    g = f = null, k.length && p.each(k, function(a, b) {
                        b.src ? p.ajax ? p.ajax({
                            url: b.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }), p.buildFragment = function(a, c, d) {
            var f, g, h, i = a[0];
            return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
                fragment: f,
                cacheable: g
            }
        }, p.fragments = {}, p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            p.fn[a] = function(c) {
                var d, e = 0,
                    f = [],
                    g = p(c),
                    h = g.length,
                    i = this.length === 1 && this[0].parentNode;
                if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
                for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
                return this.pushStack(f, a, g.selector)
            }
        }), p.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
                if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                    bE(a, g), d = bF(a), e = bF(g);
                    for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
                }
                if (b) {
                    bD(a, g);
                    if (c) {
                        d = bF(a), e = bF(g);
                        for (f = 0; d[f]; ++f) bD(d[f], e[f])
                    }
                }
                return d = e = null, g
            },
            clean: function(a, b, c, d) {
                var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
                    t = [];
                if (!b || typeof b.createDocumentFragment == "undefined") b = e;
                for (f = 0;
                    (h = a[f]) != null; f++) {
                    typeof h == "number" && (h += "");
                    if (!h) continue;
                    if (typeof h == "string")
                        if (!br.test(h)) h = b.createTextNode(h);
                        else {
                            s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                            while (k--) l = l.lastChild;
                            if (!p.support.tbody) {
                                m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                                for (g = n.length - 1; g >= 0; --g) p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                            }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
                        }
                    h.nodeType ? t.push(h) : p.merge(t, h)
                }
                l && (h = l = s = null);
                if (!p.support.appendChecked)
                    for (f = 0;
                        (h = t[f]) != null; f++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
                if (c) {
                    q = function(a) {
                        if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                    };
                    for (f = 0;
                        (h = t[f]) != null; f++)
                        if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
                }
                return t
            },
            cleanData: function(a, b) {
                var c, d, e, f, g = 0,
                    h = p.expando,
                    i = p.cache,
                    j = p.support.deleteExpando,
                    k = p.event.special;
                for (;
                    (e = a[g]) != null; g++)
                    if (b || p.acceptData(e)) {
                        d = e[h], c = d && i[d];
                        if (c) {
                            if (c.events)
                                for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                        }
                    }
            }
        }),
        function() {
            var a, b;
            p.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                    return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(e);
                return a
            }
        }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
        bL = /opacity=([^)]*)/,
        bM = /^(top|right|bottom|left)$/,
        bN = /^(none|table(?!-c[ea]).+)/,
        bO = /^margin/,
        bP = new RegExp("^(" + q + ")(.*)$", "i"),
        bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        bR = new RegExp("^([-+])=(" + q + ")", "i"),
        bS = {},
        bT = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bU = {
            letterSpacing: 0,
            fontWeight: 400
        },
        bV = ["Top", "Right", "Bottom", "Left"],
        bW = ["Webkit", "O", "Moz", "ms"],
        bX = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this, function(a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return b$(this, !0)
        },
        hide: function() {
            return b$(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
                (c ? a : bZ(this)) ? p(this).show(): p(this).hide()
            })
        }
    }), p.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g, h, i = p.camelCase(c),
                j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
                j[c] = d
            } catch (k) {}
        },
        css: function(a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? bH = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null),
            i = b.style;
        return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : e.documentElement.currentStyle && (bH = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
    }), p.each(["height", "width"], function(a, b) {
        p.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
                    return cb(a, b, d)
                }) : cb(a, b, d)
            },
            set: function(a, c, d) {
                return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }), p.support.opacity || (p.cssHooks.opacity = {
        get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }), p(function() {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function(a, b) {
                return p.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b) return bH(a, "marginRight")
                })
            }
        }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
            p.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bQ.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }, p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a)
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        p.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, bO.test(a) || (p.cssHooks[a + b].set = b_)
    });
    var cd = /%20/g,
        ce = /\[\]$/,
        cf = /\r?\n/g,
        cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ch = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
            }).map(function(a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(cf, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(cf, "\r\n")
                }
            }).get()
        }
    }), p.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) ci(d, a[d], c, f);
        return e.join("&").replace(cd, "+")
    };
    var cj, ck, cl = /#.*$/,
        cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        co = /^(?:GET|HEAD)$/,
        cp = /^\/\//,
        cq = /\?/,
        cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cs = /([?&])_=[^&]*/,
        ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        cu = p.fn.load,
        cv = {},
        cw = {},
        cx = ["*/"] + ["*"];
    try {
        ck = f.href
    } catch (cy) {
        ck = e.createElement("a"), ck.href = "", ck = ck.href
    }
    cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function(a, c, d) {
        if (typeof a != "string" && cu) return cu.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        p.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function(a, c) {
        p[c] = function(a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), p.extend({
        getScript: function(a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
        },
        ajaxSettings: {
            url: ck,
            isLocal: cn.test(cj[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cx
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: cz(cv),
        ajaxTransport: cz(cw),
        ajax: function(a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) return;
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
                if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                else {
                    t = y;
                    if (!y || a) y = "error", a < 0 && (a = 0)
                }
                x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                m = l.context || l,
                n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                o = p.Deferred(),
                q = p.Callbacks("once memory"),
                r = l.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a, t[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return v === 2 ? e : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (v === 2) {
                            if (!f) {
                                f = {};
                                while (c = cm.exec(e)) f[c[1].toLowerCase()] = c[2]
                            }
                            c = f[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return v || (l.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || w, g && g.abort(a), y(0, a), this
                    }
                };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
                if (a) {
                    var b;
                    if (v < 2)
                        for (b in a) r[b] = [r[b], a[b]];
                    else b = a[x.status], x.always(b)
                }
                return this
            }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
            if (v === 2) return x;
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(),
                        A = l.url.replace(cs, "$1_=" + z);
                    l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[k](l[k]);
                g = cA(cw, l, c, x);
                if (!g) y(-1, "No Transport");
                else {
                    x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        x.abort("timeout")
                    }, l.timeout));
                    try {
                        v = 1, g.send(t, y)
                    } catch (B) {
                        if (v < 2) y(-1, B);
                        else throw B
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cE = [],
        cF = /\?/,
        cG = /(=)\?(?=&|$)|\?\?/,
        cH = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0, a
        }
    }), p.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && cG.test(j),
            m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || p.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
        }), "script"
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return p.globalEval(a), a
            }
        }
    }), p.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function(f, g) {
                    c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var cI, cJ = a.ActiveXObject ? function() {
            for (var a in cI) cI[a](0, 1)
        } : !1,
        cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && cL() || cM()
        } : cL,
        function(a) {
            p.extend(p.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
            if (!c.crossDomain || p.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || i.readyState === 4)) {
                                    d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                    if (e) i.readyState !== 4 && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                        try {
                                            l.text = i.responseText
                                        } catch (a) {}
                                        try {
                                            j = i.statusText
                                        } catch (n) {
                                            j = ""
                                        }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                    }
                                }
                            } catch (o) {
                                e || f(-1, o)
                            }
                            l && f(h, j, l, k)
                        }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cN, cO, cP = /^(?:toggle|show|hide)$/,
        cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        cR = /queueHooks$/,
        cS = [cY],
        cT = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = cQ.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
                    if (d !== "px" && h) {
                        h = p.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h = h / i, p.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && i !== 1 && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    p.Animation = p.extend(cW, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? cS.unshift(a) : cS.push(a)
        }
    }), p.Tween = cZ, cZ.prototype = {
        constructor: cZ,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = cZ.propHooks[this.prop];
            return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = cZ.propHooks[this.prop];
            return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
        }
    }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },
            set: function(a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, p.each(["toggle", "show", "hide"], function(a, b) {
        var c = p.fn[b];
        p.fn[b] = function(d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
        }
    }), p.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bZ).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = p.isEmptyObject(a),
                f = p.speed(b, c, d),
                g = function() {
                    var b = cW(this, p.extend({}, a), f);
                    e && b.stop(!0)
                };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = a != null && a + "queueHooks",
                    f = p.timers,
                    g = p._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && p.dequeue(this, a)
            })
        }
    }), p.each({
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        p.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        return d.old = d.complete, d.complete = function() {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function() {
        var a, b = p.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop()
    }, p.fx.timer = function(a) {
        a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function() {
        clearInterval(cO), cO = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
            return a === b.elem
        }).length
    });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            p.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {
                top: 0,
                left: 0
            },
            k = this[0],
            l = k && k.ownerDocument;
        if (!l) return;
        return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, p.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a),
                f = e.offset(),
                g = p.css(a, "top"),
                h = p.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                j = {},
                k = {},
                l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, p.fn.extend({
        position: function() {
            if (!this[0]) return;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = c_.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || e.body;
                while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                return a || e.body
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function(e) {
            return p.access(this, function(a, e, f) {
                var g = da(a);
                if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        p.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            p.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean"),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function(c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return p
    })
})(window);
(function($) {
    var mwheelI = {
            pos: [-260, -260]
        },
        minDif = 3,
        doc = document,
        root = doc.documentElement,
        body = doc.body,
        longDelay, shortDelay;

    function unsetPos() {
        if (this === mwheelI.elem) {
            mwheelI.pos = [-260, -260];
            mwheelI.elem = false;
            minDif = 3;
        }
    }
    $.event.special.mwheelIntent = {
        setup: function() {
            var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
            if (this !== doc && this !== root && this !== body) {
                jElm.bind('mouseleave', unsetPos);
            }
            jElm = null;
            return true;
        },
        teardown: function() {
            $(this).unbind('mousewheel', $.event.special.mwheelIntent.handler).unbind('mouseleave', unsetPos);
            return true;
        },
        handler: function(e, d) {
            var pos = [e.clientX, e.clientY];
            if (this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif) {
                mwheelI.elem = this;
                mwheelI.pos = pos;
                minDif = 250;
                clearTimeout(shortDelay);
                shortDelay = setTimeout(function() {
                    minDif = 10;
                }, 200);
                clearTimeout(longDelay);
                longDelay = setTimeout(function() {
                    minDif = 3;
                }, 1500);
                e = $.extend({}, e, {
                    type: 'mwheelIntent'
                });
                return $.event.handle.apply(this, arguments);
            }
        }
    };
    $.fn.extend({
        mwheelIntent: function(fn) {
            return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
        },
        unmwheelIntent: function(fn) {
            return this.unbind("mwheelIntent", fn);
        }
    });
    $(function() {
        body = doc.body;
        $(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
    });
})(jQuery);
(function($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }
        deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);
(function($, window, undefined) {
    $.fn.jScrollPane = function(settings) {
        function JScrollPane(elem, s) {
            var settings, jsp = this,
                pane, paneWidth, paneHeight, container, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY, verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition, verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown, horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight, reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth, wasAtTop = true,
                wasAtLeft = true,
                wasAtBottom = false,
                wasAtRight = false,
                originalElement = elem.clone(false, false).empty(),
                mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';
            originalPadding = elem.css('paddingTop') + ' ' +
                elem.css('paddingRight') + ' ' +
                elem.css('paddingBottom') + ' ' +
                elem.css('paddingLeft');
            originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
                (parseInt(elem.css('paddingRight'), 10) || 0);

            function initialise(s) {
                var isMaintainingPositon, lastContentX, lastContentY, hasContainingSpaceChanged, originalScrollTop, originalScrollLeft, maintainAtBottom = false,
                    maintainAtRight = false;
                settings = s;
                if (pane === undefined) {
                    originalScrollTop = elem.scrollTop();
                    originalScrollLeft = elem.scrollLeft();
                    elem.css({
                        overflow: 'hidden',
                        padding: 0
                    });
                    paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
                    paneHeight = elem.innerHeight();
                    if (elem.attr('id') != 'main')
                        elem.width(paneWidth);
                    pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
                    container = $('<div class="jspContainer" />').css({
                        'width': paneWidth + 'px',
                        'height': paneHeight + 'px'
                    }).append(pane).appendTo(elem);
                } else {
                    elem.css('width', '');
                    maintainAtBottom = settings.stickToBottom && isCloseToBottom();
                    maintainAtRight = settings.stickToRight && isCloseToRight();
                    var w = elem.innerWidth();
                    if (elem.attr('id') == 'main')
                        var w = elem.parent().width() - elem.position().left;
                    hasContainingSpaceChanged = w + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;
                    if (hasContainingSpaceChanged) {
                        paneWidth = w + originalPaddingTotalWidth;
                        paneHeight = elem.innerHeight();
                        container.css({
                            width: paneWidth + 'px',
                            height: paneHeight + 'px'
                        });
                    }
                    if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
                        if (elem.attr('id') != 'main')
                            elem.width(paneWidth);
                        return;
                    }
                    previousContentWidth = contentWidth;
                    pane.css('width', '');
                    if (elem.attr('id') != 'main')
                        elem.width(paneWidth);
                    container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
                }
                pane.css('overflow', 'auto');
                if (s.contentWidth) {
                    contentWidth = s.contentWidth;
                } else {
                    contentWidth = pane[0].scrollWidth;
                }
                contentHeight = pane[0].scrollHeight;
                pane.css('overflow', '');
                percentInViewH = contentWidth / paneWidth;
                percentInViewV = contentHeight / paneHeight;
                isScrollableV = percentInViewV > 1;
                isScrollableH = percentInViewH > 1;
                if (!(isScrollableH || isScrollableV)) {
                    elem.removeClass('jspScrollable');
                    pane.css({
                        top: 0,
                        width: container.width() - originalPaddingTotalWidth
                    });
                    removeMousewheel();
                    removeFocusHandler();
                    removeKeyboardNav();
                    removeClickOnTrack();
                } else {
                    elem.addClass('jspScrollable');
                    isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
                    if (isMaintainingPositon) {
                        lastContentX = contentPositionX();
                        lastContentY = contentPositionY();
                    }
                    initialiseVerticalScroll();
                    initialiseHorizontalScroll();
                    resizeScrollbars();
                    if (isMaintainingPositon) {
                        scrollToX(maintainAtRight ? (contentWidth - paneWidth) : lastContentX, false);
                        scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
                    }
                    initFocusHandler();
                    initMousewheel();
                    initTouch();
                    if (settings.enableKeyboardNavigation) {
                        initKeyboardNav();
                    }
                    if (settings.clickOnTrack) {
                        initClickOnTrack();
                    }
                    observeHash();
                    if (settings.hijackInternalLinks) {
                        hijackInternalLinks();
                    }
                }
                if (settings.autoReinitialise && !reinitialiseInterval) {
                    reinitialiseInterval = setInterval(function() {
                        initialise(settings);
                    }, settings.autoReinitialiseDelay);
                } else if (!settings.autoReinitialise && reinitialiseInterval) {
                    clearInterval(reinitialiseInterval);
                }
                originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
                originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);
                elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
            }

            function initialiseVerticalScroll() {
                if (isScrollableV) {
                    container.append($('<div class="jspVerticalBar" />').append($('<div class="jspCap jspCapTop" />'), $('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragTop" />'), $('<div class="jspDragBottom" />'))), $('<div class="jspCap jspCapBottom" />')));
                    verticalBar = container.find('>.jspVerticalBar');
                    verticalTrack = verticalBar.find('>.jspTrack');
                    verticalDrag = verticalTrack.find('>.jspDrag');
                    if (settings.showArrows) {
                        arrowUp = $('<a class="jspArrow jspArrowUp" />').bind('mousedown.jsp', getArrowScroll(0, -1)).bind('click.jsp', nil);
                        arrowDown = $('<a class="jspArrow jspArrowDown" />').bind('mousedown.jsp', getArrowScroll(0, 1)).bind('click.jsp', nil);
                        if (settings.arrowScrollOnHover) {
                            arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
                            arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
                        }
                        appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
                    }
                    verticalTrackHeight = paneHeight;
                    container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(function() {
                        verticalTrackHeight -= $(this).outerHeight();
                    });
                    verticalDrag.hover(function() {
                        verticalDrag.addClass('jspHover');
                    }, function() {
                        verticalDrag.removeClass('jspHover');
                    }).bind('mousedown.jsp', function(e) {
                        $('html').bind('dragstart.jsp selectstart.jsp', nil);
                        verticalDrag.addClass('jspActive');
                        var startY = e.pageY - verticalDrag.position().top;
                        $('html').bind('mousemove.jsp', function(e) {
                            positionDragY(e.pageY - startY, false);
                        }).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
                        return false;
                    });
                    sizeVerticalScrollbar();
                }
            }

            function sizeVerticalScrollbar() {
                verticalTrack.height(verticalTrackHeight + 'px');
                verticalDragPosition = 0;
                scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();
                pane.width(paneWidth - originalPaddingTotalWidth);
                try {
                    if (verticalBar.position().left === 0) {
                        pane.css('margin-left', scrollbarWidth + 'px');
                    }
                } catch (err) {}
            }

            function initialiseHorizontalScroll() {
                if (isScrollableH) {
                    container.append($('<div class="jspHorizontalBar" />').append($('<div class="jspCap jspCapLeft" />'), $('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragLeft" />'), $('<div class="jspDragRight" />'))), $('<div class="jspCap jspCapRight" />')));
                    horizontalBar = container.find('>.jspHorizontalBar');
                    horizontalTrack = horizontalBar.find('>.jspTrack');
                    horizontalDrag = horizontalTrack.find('>.jspDrag');
                    if (settings.showArrows) {
                        arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind('mousedown.jsp', getArrowScroll(-1, 0)).bind('click.jsp', nil);
                        arrowRight = $('<a class="jspArrow jspArrowRight" />').bind('mousedown.jsp', getArrowScroll(1, 0)).bind('click.jsp', nil);
                        if (settings.arrowScrollOnHover) {
                            arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
                            arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
                        }
                        appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
                    }
                    horizontalDrag.hover(function() {
                        horizontalDrag.addClass('jspHover');
                    }, function() {
                        horizontalDrag.removeClass('jspHover');
                    }).bind('mousedown.jsp', function(e) {
                        $('html').bind('dragstart.jsp selectstart.jsp', nil);
                        horizontalDrag.addClass('jspActive');
                        var startX = e.pageX - horizontalDrag.position().left;
                        $('html').bind('mousemove.jsp', function(e) {
                            positionDragX(e.pageX - startX, false);
                        }).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
                        return false;
                    });
                    horizontalTrackWidth = container.innerWidth();
                    sizeHorizontalScrollbar();
                }
            }

            function sizeHorizontalScrollbar() {
                container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(function() {
                    horizontalTrackWidth -= $(this).outerWidth();
                });
                horizontalTrack.width(horizontalTrackWidth + 'px');
                horizontalDragPosition = 0;
            }

            function resizeScrollbars() {
                if (isScrollableH && isScrollableV) {
                    var horizontalTrackHeight = horizontalTrack.outerHeight(),
                        verticalTrackWidth = verticalTrack.outerWidth();
                    verticalTrackHeight -= horizontalTrackHeight;
                    $(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(function() {
                        horizontalTrackWidth += $(this).outerWidth();
                    });
                    horizontalTrackWidth -= verticalTrackWidth;
                    paneHeight -= verticalTrackWidth;
                    paneWidth -= horizontalTrackHeight;
                    horizontalTrack.parent().append($('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px'));
                    sizeVerticalScrollbar();
                    sizeHorizontalScrollbar();
                }
                if (isScrollableH) {
                    pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
                }
                contentHeight = pane.outerHeight();
                percentInViewV = contentHeight / paneHeight;
                if (isScrollableH) {
                    horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
                    if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
                        horizontalDragWidth = settings.horizontalDragMaxWidth;
                    } else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
                        horizontalDragWidth = settings.horizontalDragMinWidth;
                    }
                    horizontalDrag.width(horizontalDragWidth + 'px');
                    dragMaxX = horizontalTrackWidth - horizontalDragWidth;
                    _positionDragX(horizontalDragPosition);
                }
                if (isScrollableV) {
                    verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
                    if (verticalDragHeight > settings.verticalDragMaxHeight) {
                        verticalDragHeight = settings.verticalDragMaxHeight;
                    } else if (verticalDragHeight < settings.verticalDragMinHeight) {
                        verticalDragHeight = settings.verticalDragMinHeight;
                    }
                    verticalDrag.height(verticalDragHeight + 'px');
                    dragMaxY = verticalTrackHeight - verticalDragHeight - 16;
                    _positionDragY(verticalDragPosition);
                }
            }

            function appendArrows(ele, p, a1, a2) {
                var p1 = "before",
                    p2 = "after",
                    aTemp;
                if (p == "os") {
                    p = /Mac/.test(navigator.platform) ? "after" : "split";
                }
                if (p == p1) {
                    p2 = p;
                } else if (p == p2) {
                    p1 = p;
                    aTemp = a1;
                    a1 = a2;
                    a2 = aTemp;
                }
                ele[p1](a1)[p2](a2);
            }

            function getArrowScroll(dirX, dirY, ele) {
                return function() {
                    arrowScroll(dirX, dirY, this, ele);
                    this.blur();
                    return false;
                };
            }

            function arrowScroll(dirX, dirY, arrow, ele) {
                arrow = $(arrow).addClass('jspActive');
                var eve, scrollTimeout, isFirst = true,
                    doScroll = function() {
                        if (dirX !== 0) {
                            jsp.scrollByX(dirX * settings.arrowButtonSpeed);
                        }
                        if (dirY !== 0) {
                            jsp.scrollByY(dirY * settings.arrowButtonSpeed);
                        }
                        scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
                        isFirst = false;
                    };
                doScroll();
                eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
                ele = ele || $('html');
                ele.bind(eve, function() {
                    arrow.removeClass('jspActive');
                    scrollTimeout && clearTimeout(scrollTimeout);
                    scrollTimeout = null;
                    ele.unbind(eve);
                });
            }

            function initClickOnTrack() {
                removeClickOnTrack();
                if (isScrollableV) {
                    verticalTrack.bind('mousedown.jsp', function(e) {
                        if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                            var clickedTrack = $(this),
                                offset = clickedTrack.offset(),
                                direction = e.pageY - offset.top - verticalDragPosition,
                                scrollTimeout, isFirst = true,
                                doScroll = function() {
                                    var offset = clickedTrack.offset(),
                                        pos = e.pageY - offset.top - verticalDragHeight / 2,
                                        contentDragY = paneHeight * settings.scrollPagePercent,
                                        dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
                                    if (direction < 0) {
                                        if (verticalDragPosition - dragY > pos) {
                                            jsp.scrollByY(-contentDragY);
                                        } else {
                                            positionDragY(pos);
                                        }
                                    } else if (direction > 0) {
                                        if (verticalDragPosition + dragY < pos) {
                                            jsp.scrollByY(contentDragY);
                                        } else {
                                            positionDragY(pos);
                                        }
                                    } else {
                                        cancelClick();
                                        return;
                                    }
                                    scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                                    isFirst = false;
                                },
                                cancelClick = function() {
                                    scrollTimeout && clearTimeout(scrollTimeout);
                                    scrollTimeout = null;
                                    $(document).unbind('mouseup.jsp', cancelClick);
                                };
                            doScroll();
                            $(document).bind('mouseup.jsp', cancelClick);
                            return false;
                        }
                    });
                }
                if (isScrollableH) {
                    horizontalTrack.bind('mousedown.jsp', function(e) {
                        if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                            var clickedTrack = $(this),
                                offset = clickedTrack.offset(),
                                direction = e.pageX - offset.left - horizontalDragPosition,
                                scrollTimeout, isFirst = true,
                                doScroll = function() {
                                    var offset = clickedTrack.offset(),
                                        pos = e.pageX - offset.left - horizontalDragWidth / 2,
                                        contentDragX = paneWidth * settings.scrollPagePercent,
                                        dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
                                    if (direction < 0) {
                                        if (horizontalDragPosition - dragX > pos) {
                                            jsp.scrollByX(-contentDragX);
                                        } else {
                                            positionDragX(pos);
                                        }
                                    } else if (direction > 0) {
                                        if (horizontalDragPosition + dragX < pos) {
                                            jsp.scrollByX(contentDragX);
                                        } else {
                                            positionDragX(pos);
                                        }
                                    } else {
                                        cancelClick();
                                        return;
                                    }
                                    scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                                    isFirst = false;
                                },
                                cancelClick = function() {
                                    scrollTimeout && clearTimeout(scrollTimeout);
                                    scrollTimeout = null;
                                    $(document).unbind('mouseup.jsp', cancelClick);
                                };
                            doScroll();
                            $(document).bind('mouseup.jsp', cancelClick);
                            return false;
                        }
                    });
                }
            }

            function removeClickOnTrack() {
                if (horizontalTrack) {
                    horizontalTrack.unbind('mousedown.jsp');
                }
                if (verticalTrack) {
                    verticalTrack.unbind('mousedown.jsp');
                }
            }

            function cancelDrag() {
                $('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');
                if (verticalDrag) {
                    verticalDrag.removeClass('jspActive');
                }
                if (horizontalDrag) {
                    horizontalDrag.removeClass('jspActive');
                }
            }

            function positionDragY(destY, animate) {
                if (!isScrollableV) {
                    return;
                }
                if (destY < 0) {
                    destY = 0;
                } else if (destY > dragMaxY) {
                    destY = dragMaxY;
                }
                if (animate === undefined) {
                    animate = settings.animateScroll;
                }
                if (animate) {
                    jsp.animate(verticalDrag, 'top', destY, _positionDragY);
                } else {
                    verticalDrag.css('top', destY);
                    _positionDragY(destY);
                }
            }

            function _positionDragY(destY) {
                if (destY === undefined) {
                    destY = verticalDrag.position().top;
                }
                container.scrollTop(0);
                verticalDragPosition = destY;
                var isAtTop = verticalDragPosition === 0,
                    isAtBottom = verticalDragPosition == dragMaxY,
                    percentScrolled = destY / dragMaxY,
                    destTop = -percentScrolled * (contentHeight - paneHeight);
                if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
                    wasAtTop = isAtTop;
                    wasAtBottom = isAtBottom;
                    elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
                }
                updateVerticalArrows(isAtTop, isAtBottom);
                pane.css('top', destTop);
                elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
            }

            function positionDragX(destX, animate) {
                if (!isScrollableH) {
                    return;
                }
                if (destX < 0) {
                    destX = 0;
                } else if (destX > dragMaxX) {
                    destX = dragMaxX;
                }
                if (animate === undefined) {
                    animate = settings.animateScroll;
                }
                if (animate) {
                    jsp.animate(horizontalDrag, 'left', destX, _positionDragX);
                } else {
                    horizontalDrag.css('left', destX);
                    _positionDragX(destX);
                }
            }

            function _positionDragX(destX) {
                if (destX === undefined) {
                    destX = horizontalDrag.position().left;
                }
                container.scrollTop(0);
                horizontalDragPosition = destX;
                var isAtLeft = horizontalDragPosition === 0,
                    isAtRight = horizontalDragPosition == dragMaxX,
                    percentScrolled = destX / dragMaxX,
                    destLeft = -percentScrolled * (contentWidth - paneWidth);
                if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
                    wasAtLeft = isAtLeft;
                    wasAtRight = isAtRight;
                    elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
                }
                updateHorizontalArrows(isAtLeft, isAtRight);
                pane.css('left', destLeft);
                elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
            }

            function updateVerticalArrows(isAtTop, isAtBottom) {
                if (settings.showArrows) {
                    arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
                    arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
                }
            }

            function updateHorizontalArrows(isAtLeft, isAtRight) {
                if (settings.showArrows) {
                    arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
                    arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
                }
            }

            function scrollToY(destY, animate) {
                var percentScrolled = destY / (contentHeight - paneHeight);
                positionDragY(percentScrolled * dragMaxY, animate);
            }

            function scrollToX(destX, animate) {
                var percentScrolled = destX / (contentWidth - paneWidth);
                positionDragX(percentScrolled * dragMaxX, animate);
            }

            function scrollToElement(ele, stickToTop, animate) {
                var e, eleHeight, eleWidth, eleTop = 0,
                    eleLeft = 0,
                    viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;
                try {
                    e = $(ele);
                } catch (err) {
                    return;
                }
                eleHeight = e.outerHeight();
                eleWidth = e.outerWidth();
                container.scrollTop(0);
                container.scrollLeft(0);
                while (!e.is('.jspPane')) {
                    eleTop += e.position().top;
                    eleLeft += e.position().left;
                    e = e.offsetParent();
                    if (/^body|html$/i.test(e[0].nodeName)) {
                        return;
                    }
                }
                viewportTop = contentPositionY();
                maxVisibleEleTop = viewportTop + paneHeight;
                if (eleTop < viewportTop || stickToTop) {
                    destY = eleTop - settings.verticalGutter;
                } else if (eleTop + eleHeight > maxVisibleEleTop) {
                    destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
                }
                if (destY) {
                    scrollToY(destY, animate);
                }
                viewportLeft = contentPositionX();
                maxVisibleEleLeft = viewportLeft + paneWidth;
                if (eleLeft < viewportLeft || stickToTop) {
                    destX = eleLeft - settings.horizontalGutter;
                } else if (eleLeft + eleWidth > maxVisibleEleLeft) {
                    destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
                }
                if (destX) {
                    scrollToX(destX, animate);
                }
            }

            function contentPositionX() {
                return -pane.position().left;
            }

            function contentPositionY() {
                return -pane.position().top;
            }

            function isCloseToBottom() {
                var scrollableHeight = contentHeight - paneHeight;
                return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
            }

            function isCloseToRight() {
                var scrollableWidth = contentWidth - paneWidth;
                return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
            }

            function initMousewheel() {
                container.unbind(mwEvent).bind(mwEvent, function(event, delta, deltaX, deltaY) {
                    var dX = horizontalDragPosition,
                        dY = verticalDragPosition;
                    jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
                    return dX == horizontalDragPosition && dY == verticalDragPosition;
                });
            }

            function removeMousewheel() {
                container.unbind(mwEvent);
            }

            function nil() {
                return false;
            }

            function initFocusHandler() {
                pane.find(':input,a').unbind('focus.jsp').bind('focus.jsp', function(e) {
                    scrollToElement(e.target, false);
                });
            }

            function removeFocusHandler() {
                pane.find(':input,a').unbind('focus.jsp');
            }

            function initKeyboardNav() {
                var keyDown, elementHasScrolled, validParents = [];
                isScrollableH && validParents.push(horizontalBar[0]);
                isScrollableV && validParents.push(verticalBar[0]);
                pane.focus(function() {
                    elem.focus();
                });
                elem.attr('tabindex', 0).unbind('keydown.jsp keypress.jsp').bind('keydown.jsp', function(e) {
                    if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)) {
                        return;
                    }
                    var dX = horizontalDragPosition,
                        dY = verticalDragPosition;
                    switch (e.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            keyDown = e.keyCode;
                            keyDownHandler();
                            break;
                        case 35:
                            scrollToY(contentHeight - paneHeight);
                            keyDown = null;
                            break;
                        case 36:
                            scrollToY(0);
                            keyDown = null;
                            break;
                    }
                    elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
                    return !elementHasScrolled;
                }).bind('keypress.jsp', function(e) {
                    if (e.keyCode == keyDown) {
                        keyDownHandler();
                    }
                    return !elementHasScrolled;
                });
                if (settings.hideFocus) {
                    elem.css('outline', 'none');
                    if ('hideFocus' in container[0]) {
                        elem.attr('hideFocus', true);
                    }
                } else {
                    elem.css('outline', '');
                    if ('hideFocus' in container[0]) {
                        elem.attr('hideFocus', false);
                    }
                }

                function keyDownHandler() {
                    var dX = horizontalDragPosition,
                        dY = verticalDragPosition;
                    switch (keyDown) {
                        case 40:
                            jsp.scrollByY(settings.keyboardSpeed, false);
                            break;
                        case 38:
                            jsp.scrollByY(-settings.keyboardSpeed, false);
                            break;
                        case 34:
                        case 32:
                            jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
                            break;
                        case 33:
                            jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
                            break;
                        case 39:
                            jsp.scrollByX(settings.keyboardSpeed, false);
                            break;
                        case 37:
                            jsp.scrollByX(-settings.keyboardSpeed, false);
                            break;
                    }
                    elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
                    return elementHasScrolled;
                }
            }

            function removeKeyboardNav() {
                elem.attr('tabindex', '-1').removeAttr('tabindex').unbind('keydown.jsp keypress.jsp');
            }

            function observeHash() {
                if (location.hash && location.hash.length > 1) {
                    var e, retryInt, hash = escape(location.hash.substr(1));
                    try {
                        e = $('#' + hash + ', a[name="' + hash + '"]');
                    } catch (err) {
                        return;
                    }
                    if (e.length && pane.find(hash)) {
                        if (container.scrollTop() === 0) {
                            retryInt = setInterval(function() {
                                if (container.scrollTop() > 0) {
                                    scrollToElement(e, true);
                                    $(document).scrollTop(container.position().top);
                                    clearInterval(retryInt);
                                }
                            }, 50);
                        } else {
                            scrollToElement(e, true);
                            $(document).scrollTop(container.position().top);
                        }
                    }
                }
            }

            function hijackInternalLinks() {
                if ($(document.body).data('jspHijack')) {
                    return;
                }
                $(document.body).data('jspHijack', true);
                $(document.body).delegate('a[href*=#]', 'click', function(event) {
                    var href = this.href.substr(0, this.href.indexOf('#')),
                        locationHref = location.href,
                        hash, element, container, jsp;
                    if (location.href.indexOf('#') !== -1) {
                        locationHref = location.href.substr(0, location.href.indexOf('#'));
                    }
                    if (href !== locationHref) {
                        return;
                    }
                    hash = escape(this.href.substr(this.href.indexOf('#') + 1));
                    element;
                    try {
                        element = $('#' + hash + ', a[name="' + hash + '"]');
                    } catch (e) {
                        return;
                    }
                    if (!element.length) {
                        return;
                    }
                    container = element.closest('.jspScrollable');
                    jsp = container.data('jsp');
                    jsp.scrollToElement(element, true);
                    if (container[0].scrollIntoView) {
                        container[0].scrollIntoView();
                    }
                    event.preventDefault();
                });
            }

            function initTouch() {
                var startX, startY, touchStartX, touchStartY, moved, moving = false;
                container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind('touchstart.jsp', function(e) {
                    var touch = e.originalEvent.touches[0];
                    startX = contentPositionX();
                    startY = contentPositionY();
                    touchStartX = touch.pageX;
                    touchStartY = touch.pageY;
                    moved = false;
                    moving = true;
                }).bind('touchmove.jsp', function(ev) {
                    if (!moving) {
                        return;
                    }
                    var touchPos = ev.originalEvent.touches[0],
                        dX = horizontalDragPosition,
                        dY = verticalDragPosition;
                    jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
                    moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
                    return dX == horizontalDragPosition && dY == verticalDragPosition;
                }).bind('touchend.jsp', function(e) {
                    moving = false;
                }).bind('click.jsp-touchclick', function(e) {
                    if (moved) {
                        moved = false;
                        return false;
                    }
                });
            }

            function destroy() {
                var currentY = contentPositionY(),
                    currentX = contentPositionX();
                elem.removeClass('jspScrollable').unbind('.jsp');
                elem.replaceWith(originalElement.append(pane.children()));
                originalElement.scrollTop(currentY);
                originalElement.scrollLeft(currentX);
                if (reinitialiseInterval) {
                    clearInterval(reinitialiseInterval);
                }
            }
            $.extend(jsp, {
                reinitialise: function(s) {
                    s = $.extend({}, settings, s);
                    initialise(s);
                },
                scrollToElement: function(ele, stickToTop, animate) {
                    scrollToElement(ele, stickToTop, animate);
                },
                scrollTo: function(destX, destY, animate) {
                    scrollToX(destX, animate);
                    scrollToY(destY, animate);
                },
                scrollToX: function(destX, animate) {
                    scrollToX(destX, animate);
                },
                scrollToY: function(destY, animate) {
                    scrollToY(destY, animate);
                },
                scrollToPercentX: function(destPercentX, animate) {
                    scrollToX(destPercentX * (contentWidth - paneWidth), animate);
                },
                scrollToPercentY: function(destPercentY, animate) {
                    scrollToY(destPercentY * (contentHeight - paneHeight), animate);
                },
                scrollBy: function(deltaX, deltaY, animate) {
                    jsp.scrollByX(deltaX, animate);
                    jsp.scrollByY(deltaY, animate);
                },
                scrollByX: function(deltaX, animate) {
                    var destX = contentPositionX() + Math[deltaX < 0 ? 'floor' : 'ceil'](deltaX),
                        percentScrolled = destX / (contentWidth - paneWidth);
                    positionDragX(percentScrolled * dragMaxX, animate);
                },
                scrollByY: function(deltaY, animate) {
                    var destY = contentPositionY() + Math[deltaY < 0 ? 'floor' : 'ceil'](deltaY),
                        percentScrolled = destY / (contentHeight - paneHeight);
                    positionDragY(percentScrolled * dragMaxY, animate);
                },
                positionDragX: function(x, animate) {
                    positionDragX(x, animate);
                },
                positionDragY: function(y, animate) {
                    positionDragY(y, animate);
                },
                animate: function(ele, prop, value, stepCallback) {
                    var params = {};
                    params[prop] = value;
                    ele.animate(params, {
                        'duration': settings.animateDuration,
                        'easing': settings.animateEase,
                        'queue': false,
                        'step': stepCallback
                    });
                },
                getContentPositionX: function() {
                    return contentPositionX();
                },
                getContentPositionY: function() {
                    return contentPositionY();
                },
                getContentWidth: function() {
                    return contentWidth;
                },
                getContentHeight: function() {
                    return contentHeight;
                },
                getPercentScrolledX: function() {
                    return contentPositionX() / (contentWidth - paneWidth);
                },
                getPercentScrolledY: function() {
                    return contentPositionY() / (contentHeight - paneHeight);
                },
                getIsScrollableH: function() {
                    return isScrollableH;
                },
                getIsScrollableV: function() {
                    return isScrollableV;
                },
                getContentPane: function() {
                    return pane;
                },
                scrollToBottom: function(animate) {
                    positionDragY(dragMaxY, animate);
                },
                hijackInternalLinks: $.noop,
                destroy: function() {
                    destroy();
                }
            });
            initialise(s);
        }
        settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
        $.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
            settings[this] = settings[this] || settings.speed;
        });
        return this.each(function() {
            var elem = $(this),
                jspApi = elem.data('jsp');
            if (jspApi) {
                jspApi.reinitialise(settings);
            } else {
                jspApi = new JScrollPane(elem, settings);
                elem.data('jsp', jspApi);
            }
        });
    };
    $.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: undefined,
        animateScroll: false,
        animateDuration: 300,
        animateEase: 'linear',
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 120,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: 'split',
        horizontalArrowPositions: 'split',
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    };
})(jQuery, this);
(function($) {
    $.fn.tipTip = function(options) {
        var defaults = {
            activation: "hover",
            keepAlive: false,
            maxWidth: "200px",
            edgeOffset: 3,
            defaultPosition: "bottom",
            delay: 400,
            fadeIn: 200,
            fadeOut: 200,
            attribute: "title",
            content: false,
            enter: function() {},
            exit: function() {}
        };
        var opts = $.extend(defaults, options);
        if ($("#tiptip_holder").length <= 0) {
            var tiptip_holder = $('<div id="tiptip_holder" style="max-width:' + opts.maxWidth + ';"></div>');
            var tiptip_content = $('<div id="tiptip_content"></div>');
            var tiptip_arrow = $('<div id="tiptip_arrow"></div>');
            $("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')));
        } else {
            var tiptip_holder = $("#tiptip_holder");
            var tiptip_content = $("#tiptip_content");
            var tiptip_arrow = $("#tiptip_arrow");
        }
        return this.each(function() {
            var org_elem = $(this);
            if (opts.content) {
                var org_title = opts.content;
            } else {
                var org_title = org_elem.attr(opts.attribute);
            }
            if (org_title != "") {
                if (!opts.content) {
                    org_elem.removeAttr(opts.attribute);
                }
                var timeout = false;
                if (opts.activation == "hover") {
                    org_elem.hover(function() {
                        active_tiptip();
                    }, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip();
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip();
                        });
                    }
                } else if (opts.activation == "focus") {
                    org_elem.focus(function() {
                        active_tiptip();
                    }).blur(function() {
                        deactive_tiptip();
                    });
                } else if (opts.activation == "click") {
                    org_elem.click(function() {
                        active_tiptip();
                        return false;
                    }).hover(function() {}, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip();
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip();
                        });
                    }
                }

                function active_tiptip() {
                    opts.enter.call(this);
                    tiptip_content.text(org_title);
                    tiptip_holder.hide().removeAttr("class").css("margin", "0");
                    tiptip_arrow.removeAttr("style");
                    var top = parseInt(org_elem.offset()['top']);
                    var left = parseInt(org_elem.offset()['left']);
                    var org_width = parseInt(org_elem.outerWidth());
                    var org_height = parseInt(org_elem.outerHeight());
                    var tip_w = tiptip_holder.outerWidth();
                    var tip_h = tiptip_holder.outerHeight();
                    var w_compare = Math.round((org_width - tip_w) / 2);
                    var h_compare = Math.round((org_height - tip_h) / 2);
                    var marg_left = Math.round(left + w_compare);
                    var marg_top = Math.round(top + org_height + opts.edgeOffset);
                    var t_class = "";
                    var arrow_top = "";
                    var arrow_left = Math.round(tip_w - 12) / 2;
                    if (opts.defaultPosition == "bottom") {
                        t_class = "_bottom";
                    } else if (opts.defaultPosition == "top") {
                        t_class = "_top";
                    } else if (opts.defaultPosition == "left") {
                        t_class = "_left";
                    } else if (opts.defaultPosition == "right") {
                        t_class = "_right";
                    }
                    var right_compare = (w_compare + left) < parseInt($(window).scrollLeft());
                    var left_compare = (tip_w + left) > parseInt($(window).width());
                    if ((right_compare && w_compare < 0) || (t_class == "_right" && !left_compare) || (t_class == "_left" && left < (tip_w + opts.edgeOffset + 5))) {
                        t_class = "_right";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = -12;
                        marg_left = Math.round(left + org_width + opts.edgeOffset);
                        marg_top = Math.round(top + h_compare);
                    } else if ((left_compare && w_compare < 0) || (t_class == "_left" && !right_compare)) {
                        t_class = "_left";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = Math.round(tip_w);
                        marg_left = Math.round(left - (tip_w + opts.edgeOffset + 5));
                        marg_top = Math.round(top + h_compare);
                    }
                    var top_compare = (top + org_height + opts.edgeOffset + tip_h + 8) > parseInt($(window).height() + $(window).scrollTop());
                    var bottom_compare = ((top + org_height) - (opts.edgeOffset + tip_h + 8)) < 0;
                    if (top_compare || (t_class == "_bottom" && top_compare) || (t_class == "_top" && !bottom_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_top";
                        } else {
                            t_class = t_class + "_top";
                        }
                        arrow_top = tip_h;
                        marg_top = Math.round(top - (tip_h + 5 + opts.edgeOffset));
                    } else if (bottom_compare | (t_class == "_top" && bottom_compare) || (t_class == "_bottom" && !top_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_bottom";
                        } else {
                            t_class = t_class + "_bottom";
                        }
                        arrow_top = -12;
                        marg_top = Math.round(top + org_height + opts.edgeOffset);
                    }
                    if (t_class == "_right_top" || t_class == "_left_top") {
                        marg_top = marg_top + 5;
                    } else if (t_class == "_right_bottom" || t_class == "_left_bottom") {
                        marg_top = marg_top - 5;
                    }
                    if (t_class == "_left_top" || t_class == "_left_bottom") {
                        marg_left = marg_left + 5;
                    }
                    tiptip_arrow.css({
                        "margin-left": arrow_left + "px",
                        "margin-top": arrow_top + "px"
                    });
                    tiptip_holder.css({
                        "margin-left": marg_left + "px",
                        "margin-top": marg_top + "px"
                    }).attr("class", "tip" + t_class);
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout(function() {
                        tiptip_holder.stop(true, true).fadeIn(opts.fadeIn);
                    }, opts.delay);
                }

                function deactive_tiptip() {
                    opts.exit.call(this);
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    tiptip_holder.fadeOut(opts.fadeOut);
                }
            }
        });
    }
})(jQuery);
(function(window, undefined) {
    "use strict";
    var
        History = window.History = window.History || {},
        jQuery = window.jQuery;
    if (typeof History.Adapter !== 'undefined') {
        throw new Error('History.js Adapter has already been loaded...');
    }
    History.Adapter = {
        bind: function(el, event, callback) {
            jQuery(el).bind(event, callback);
        },
        trigger: function(el, event, extra) {
            jQuery(el).trigger(event, extra);
        },
        extractEventData: function(key, event, extra) {
            var result = (event && event.originalEvent && event.originalEvent[key]) || (extra && extra[key]) || undefined;
            return result;
        },
        onDomLoad: function(callback) {
            jQuery(callback);
        }
    };
    if (typeof History.init !== 'undefined') {
        History.init();
    }
})(window);
/*FUNCIÓN PARA HISTORY*/
(function($) {
    "use strict";
    var
        console = window.console || undefined,
        document = window.document,
        navigator = window.navigator,
        sessionStorage = window.sessionStorage || false,
        setTimeout = window.setTimeout,
        clearTimeout = window.clearTimeout,
        setInterval = window.setInterval,
        clearInterval = window.clearInterval,
        JSON = window.JSON,
        alert = window.alert,
        History = window.History = window.History || {},
        history = window.history;
    JSON.stringify = JSON.stringify || JSON.encode;
    JSON.parse = JSON.parse || JSON.decode;
    if (typeof History.init !== 'undefined') {
        throw new Error('History.js Core has already been loaded...');
    }
    History.init = function() {
        if (typeof History.Adapter === 'undefined') {
            return false;
        }
        if (typeof History.initCore !== 'undefined') {
            History.initCore();
        }
        if (typeof History.initHtml4 !== 'undefined') {
            History.initHtml4();
        }
        return true;
    };
    History.initCore = function() {
        if (typeof History.initCore.initialized !== 'undefined') {
            return false;
        } else {
            History.initCore.initialized = true;
        }
        History.options = History.options || {};
        History.options.hashChangeInterval = History.options.hashChangeInterval || 100;
        History.options.safariPollInterval = History.options.safariPollInterval || 500;
        History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500;
        History.options.storeInterval = History.options.storeInterval || 1000;
        History.options.busyDelay = History.options.busyDelay || 250;
        History.options.debug = History.options.debug || false;
        History.options.initialTitle = History.options.initialTitle || document.title;
        History.intervalList = [];
        History.clearAllIntervals = function() {
            var i, il = History.intervalList;
            if (typeof il !== "undefined" && il !== null) {
                for (i = 0; i < il.length; i++) {
                    clearInterval(il[i]);
                }
                History.intervalList = null;
            }
        };
        History.debug = function() {
            if ((History.options.debug || false)) {
                History.log.apply(History, arguments);
            }
        };
        History.log = function() {
            var
                consoleExists = !(typeof console === 'undefined' || typeof console.log === 'undefined' || typeof console.log.apply === 'undefined'),
                textarea = document.getElementById('log'),
                message, i, n, args, arg;
            if (consoleExists) {
                args = Array.prototype.slice.call(arguments);
                message = args.shift();
                if (typeof console.debug !== 'undefined') {
                    console.debug.apply(console, [message, args]);
                } else {
                    console.log.apply(console, [message, args]);
                }
            } else {
                message = ("\n" + arguments[0] + "\n");
            }
            for (i = 1, n = arguments.length; i < n; ++i) {
                arg = arguments[i];
                if (typeof arg === 'object' && typeof JSON !== 'undefined') {
                    try {
                        arg = JSON.stringify(arg);
                    } catch (Exception) {}
                }
                message += "\n" + arg + "\n";
            }
            if (textarea) {
                textarea.value += message + "\n-----\n";
                textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
            } else if (!consoleExists) {
                alert(message);
            }
            return true;
        };
        History.getInternetExplorerMajorVersion = function() {
            var result = History.getInternetExplorerMajorVersion.cached = (typeof History.getInternetExplorerMajorVersion.cached !== 'undefined') ? History.getInternetExplorerMajorVersion.cached : (function() {
                var v = 3,
                    div = document.createElement('div'),
                    all = div.getElementsByTagName('i');
                while ((div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->') && all[0]) {}
                return (v > 4) ? v : false;
            })();
            return result;
        };
        History.isInternetExplorer = function() {
            var result = History.isInternetExplorer.cached = (typeof History.isInternetExplorer.cached !== 'undefined') ? History.isInternetExplorer.cached : Boolean(History.getInternetExplorerMajorVersion());
            return result;
        };
        History.emulated = {
            pushState: !Boolean(window.history && window.history.pushState && window.history.replaceState && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent) || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent))),
            hashChange: Boolean(!(('onhashchange' in window) || ('onhashchange' in document)) || (History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8))
        };
        History.enabled = !History.emulated.pushState;
        History.bugs = {
            setHash: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
            safariPoll: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
            ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
        };
        History.isEmptyObject = function(obj) {
            for (var name in obj) {
                return false;
            }
            return true;
        };
        History.cloneObject = function(obj) {
            var hash, newObj;
            if (obj) {
                hash = JSON.stringify(obj);
                newObj = JSON.parse(hash);
            } else {
                newObj = {};
            }
            return newObj;
        };
        History.getRootUrl = function() {
            var rootUrl = document.location.protocol + '//' + (document.location.hostname || document.location.host);
            if (document.location.port || false) {
                rootUrl += ':' + document.location.port;
            }
            rootUrl += '/';
            return rootUrl;
        };
        History.getBaseHref = function() {
            var
                baseElements = document.getElementsByTagName('base'),
                baseElement = null,
                baseHref = '';
            if (baseElements.length === 1) {
                baseElement = baseElements[0];
                baseHref = baseElement.href.replace(/[^\/]+$/, '');
            }
            baseHref = baseHref.replace(/\/+$/, '');
            if (baseHref) baseHref += '/';
            return baseHref;
        };
        History.getBaseUrl = function() {
            var baseUrl = History.getBaseHref() || History.getBasePageUrl() || History.getRootUrl();
            return baseUrl;
        };
        History.getPageUrl = function() {
            var
                State = History.getState(false, false),
                stateUrl = (State || {}).url || document.location.href,
                pageUrl;
            pageUrl = stateUrl.replace(/\/+$/, '').replace(/[^\/]+$/, function(part, index, string) {
                return (/\./).test(part) ? part : part + '/';
            });
            return pageUrl;
        };
        History.getBasePageUrl = function() {
            var basePageUrl = document.location.protocol + "//" + document.location.hostname +
                (document.location.port && ":" + document.location.port) + BASEURL;
            return basePageUrl;
        };
        History.getFullUrl = function(url, allowBaseHref) {
            var fullUrl = url,
                firstChar = url.substring(0, 1);
            allowBaseHref = (typeof allowBaseHref === 'undefined') ? true : allowBaseHref;
            if (/[a-z]+\:\/\//.test(url)) {} else if (firstChar === '/') {
                fullUrl = History.getRootUrl() + url.replace(/^\/+/, '');
            } else if (firstChar === '#') {
                fullUrl = History.getPageUrl().replace(/#.*/, '') + url;
            } else if (firstChar === '?') {
                fullUrl = History.getPageUrl().replace(/[\?#].*/, '') + url;
            } else {
                if (allowBaseHref) {
                    fullUrl = History.getBaseUrl() + url.replace(/^(\.\/)+/, '');
                } else {
                    fullUrl = History.getBasePageUrl() + url.replace(/^(\.\/)+/, '');
                }
            }
            return fullUrl.replace(/\#$/, '');
        };
        History.getShortUrl = function(url) {
            var shortUrl = url,
                baseUrl = History.getBaseUrl(),
                rootUrl = History.getRootUrl();
            if (History.emulated.pushState) {
                shortUrl = shortUrl.replace(baseUrl, '');
            }
            shortUrl = shortUrl.replace(rootUrl, '/');
            if (History.isTraditionalAnchor(shortUrl)) {
                shortUrl = './' + shortUrl;
            }
            shortUrl = shortUrl.replace(/^(\.\/)+/g, './').replace(/\#$/, '');
            return shortUrl;
        };
        History.store = {};
        History.idToState = History.idToState || {};
        History.stateToId = History.stateToId || {};
        History.urlToId = History.urlToId || {};
        History.storedStates = History.storedStates || [];
        History.savedStates = History.savedStates || [];
        History.normalizeStore = function() {
            History.store.idToState = History.store.idToState || {};
            History.store.urlToId = History.store.urlToId || {};
            History.store.stateToId = History.store.stateToId || {};
        };
        History.getState = function(friendly, create) {
            if (typeof friendly === 'undefined') {
                friendly = true;
            }
            if (typeof create === 'undefined') {
                create = true;
            }
            var State = History.getLastSavedState();
            if (!State && create) {
                State = History.createStateObject();
            }
            if (friendly) {
                State = History.cloneObject(State);
                State.url = State.cleanUrl || State.url;
            }
            return State;
        };
        History.getIdByState = function(newState) {
            var id = History.extractId(newState.url),
                str;
            if (!id) {
                str = History.getStateString(newState);
                if (typeof History.stateToId[str] !== 'undefined') {
                    id = History.stateToId[str];
                } else if (typeof History.store.stateToId[str] !== 'undefined') {
                    id = History.store.stateToId[str];
                } else {
                    while (true) {
                        id = (new Date()).getTime() + String(Math.random()).replace(/\D/g, '');
                        if (typeof History.idToState[id] === 'undefined' && typeof History.store.idToState[id] === 'undefined') {
                            break;
                        }
                    }
                    History.stateToId[str] = id;
                    History.idToState[id] = newState;
                }
            }
            return id;
        };
        History.normalizeState = function(oldState) {
            var newState, dataNotEmpty;
            if (!oldState || (typeof oldState !== 'object')) {
                oldState = {};
            }
            if (typeof oldState.normalized !== 'undefined') {
                return oldState;
            }
            if (!oldState.data || (typeof oldState.data !== 'object')) {
                oldState.data = {};
            }
            newState = {};
            newState.normalized = true;
            newState.title = oldState.title || '';
            newState.url = History.getFullUrl(oldState.url || document.location.href);
            newState.hash = History.getShortUrl(newState.url);
            newState.data = History.cloneObject(oldState.data);
            newState.id = History.getIdByState(newState);
            newState.cleanUrl = newState.url.replace(/\??\&_suid.*/, '');
            newState.url = newState.cleanUrl;
            dataNotEmpty = !History.isEmptyObject(newState.data);
            if (newState.title || dataNotEmpty) {
                newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/, '');
                if (!/\?/.test(newState.hash)) {
                    newState.hash += '?';
                }
                newState.hash += '&_suid=' + newState.id;
            }
            newState.hashedUrl = History.getFullUrl(newState.hash);
            if ((History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState)) {
                newState.url = newState.hashedUrl;
            }
            return newState;
        };
        History.createStateObject = function(data, title, url) {
            var State = {
                'data': data,
                'title': title,
                'url': url
            };
            State = History.normalizeState(State);
            return State;
        };
        History.getStateById = function(id) {
            id = String(id);
            var State = History.idToState[id] || History.store.idToState[id] || undefined;
            return State;
        };
        History.getStateString = function(passedState) {
            var State, cleanedState, str;
            State = History.normalizeState(passedState);
            cleanedState = {
                data: State.data,
                title: passedState.title,
                url: passedState.url
            };
            str = JSON.stringify(cleanedState);
            return str;
        };
        History.getStateId = function(passedState) {
            var State, id;
            State = History.normalizeState(passedState);
            id = State.id;
            return id;
        };
        History.getHashByState = function(passedState) {
            var State, hash;
            State = History.normalizeState(passedState);
            hash = State.hash;
            return hash;
        };
        History.extractId = function(url_or_hash) {
            var id, parts, url;
            parts = /(.*)\&_suid=([0-9]+)$/.exec(url_or_hash);
            url = parts ? (parts[1] || url_or_hash) : url_or_hash;
            id = parts ? String(parts[2] || '') : '';
            return id || false;
        };
        History.isTraditionalAnchor = function(url_or_hash) {
            var isTraditional = !(/[\/\?\.]/.test(url_or_hash));
            return isTraditional;
        };
        History.extractState = function(url_or_hash, create) {
            var State = null,
                id, url;
            create = create || false;
            id = History.extractId(url_or_hash);
            if (id) {
                State = History.getStateById(id);
            }
            if (!State) {
                url = History.getFullUrl(url_or_hash);
                id = History.getIdByUrl(url) || false;
                if (id) {
                    State = History.getStateById(id);
                }
                if (!State && create && !History.isTraditionalAnchor(url_or_hash)) {
                    State = History.createStateObject(null, null, url);
                }
            }
            return State;
        };
        History.getIdByUrl = function(url) {
            var id = History.urlToId[url] || History.store.urlToId[url] || undefined;
            return id;
        };
        History.getLastSavedState = function() {
            return History.savedStates[History.savedStates.length - 1] || undefined;
        };
        History.getLastStoredState = function() {
            return History.storedStates[History.storedStates.length - 1] || undefined;
        };
        History.hasUrlDuplicate = function(newState) {
            var hasDuplicate = false,
                oldState;
            oldState = History.extractState(newState.url);
            hasDuplicate = oldState && oldState.id !== newState.id;
            return hasDuplicate;
        };
        History.storeState = function(newState) {
            History.urlToId[newState.url] = newState.id;
            History.storedStates.push(History.cloneObject(newState));
            return newState;
        };
        History.isLastSavedState = function(newState) {
            var isLast = false,
                newId, oldState, oldId;
            if (History.savedStates.length) {
                newId = newState.id;
                oldState = History.getLastSavedState();
                oldId = oldState.id;
                isLast = (newId === oldId);
            }
            return isLast;
        };
        History.saveState = function(newState) {
            if (History.isLastSavedState(newState)) {
                return false;
            }
            History.savedStates.push(History.cloneObject(newState));
            return true;
        };
        History.getStateByIndex = function(index) {
            var State = null;
            if (typeof index === 'undefined') {
                State = History.savedStates[History.savedStates.length - 1];
            } else if (index < 0) {
                State = History.savedStates[History.savedStates.length + index];
            } else {
                State = History.savedStates[index];
            }
            return State;
        };
        History.getHash = function() {
            var hash = History.unescapeHash(document.location.hash);
            return hash;
        };
        History.unescapeString = function(str) {
            var result = str,
                tmp;
            while (true) {
                tmp = window.unescape(result);
                if (tmp === result) {
                    break;
                }
                result = tmp;
            }
            return result;
        };
        History.unescapeHash = function(hash) {
            var result = History.normalizeHash(hash);
            result = History.unescapeString(result);
            return result;
        };
        History.normalizeHash = function(hash) {
            var result = hash.replace(/[^#]*#/, '').replace(/#.*/, '');
            return result;
        };
        History.setHash = function(hash, queue) {
            var adjustedHash, State, pageUrl;
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.setHash,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            adjustedHash = History.escapeHash(hash);
            History.busy(true);
            State = History.extractState(hash, true);
            if (State && !History.emulated.pushState) {
                History.pushState(State.data, State.title, State.url, false);
            } else if (document.location.hash !== adjustedHash) {
                if (History.bugs.setHash) {
                    pageUrl = History.getPageUrl();
                    History.pushState(null, null, pageUrl + '#' + adjustedHash, false);
                } else {
                    document.location.hash = adjustedHash;
                }
            }
            return History;
        };
        History.escapeHash = function(hash) {
            var result = History.normalizeHash(hash);
            result = window.escape(result);
            if (!History.bugs.hashEscape) {
                result = result.replace(/\%21/g, '!').replace(/\%26/g, '&').replace(/\%3D/g, '=').replace(/\%3F/g, '?');
            }
            return result;
        };
        History.getHashByUrl = function(url) {
            var hash = String(url).replace(/([^#]*)#?([^#]*)#?(.*)/, '$2');
            hash = History.unescapeHash(hash);
            return hash;
        };
        History.setTitle = function(newState) {
            var title = newState.title,
                firstState;
            if (!title) {
                firstState = History.getStateByIndex(0);
                if (firstState && firstState.url === newState.url) {
                    title = firstState.title || History.options.initialTitle;
                }
            }
            try {
                document.getElementsByTagName('title')[0].innerHTML = title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
            } catch (Exception) {}
            document.title = title;
            return History;
        };
        History.queues = [];
        History.busy = function(value) {
            if (typeof value !== 'undefined') {
                History.busy.flag = value;
            } else if (typeof History.busy.flag === 'undefined') {
                History.busy.flag = false;
            }
            if (!History.busy.flag) {
                clearTimeout(History.busy.timeout);
                var fireNext = function() {
                    var i, queue, item;
                    if (History.busy.flag) return;
                    for (i = History.queues.length - 1; i >= 0; --i) {
                        queue = History.queues[i];
                        if (queue.length === 0) continue;
                        item = queue.shift();
                        History.fireQueueItem(item);
                        History.busy.timeout = setTimeout(fireNext, History.options.busyDelay);
                    }
                };
                History.busy.timeout = setTimeout(fireNext, History.options.busyDelay);
            }
            return History.busy.flag;
        };
        History.busy.flag = false;
        History.fireQueueItem = function(item) {
            return item.callback.apply(item.scope || History, item.args || []);
        };
        History.pushQueue = function(item) {
            History.queues[item.queue || 0] = History.queues[item.queue || 0] || [];
            History.queues[item.queue || 0].push(item);
            return History;
        };
        History.queue = function(item, queue) {
            if (typeof item === 'function') {
                item = {
                    callback: item
                };
            }
            if (typeof queue !== 'undefined') {
                item.queue = queue;
            }
            if (History.busy()) {
                History.pushQueue(item);
            } else {
                History.fireQueueItem(item);
            }
            return History;
        };
        History.clearQueue = function() {
            History.busy.flag = false;
            History.queues = [];
            return History;
        };
        History.stateChanged = false;
        History.doubleChecker = false;
        History.doubleCheckComplete = function() {
            History.stateChanged = true;
            History.doubleCheckClear();
            return History;
        };
        History.doubleCheckClear = function() {
            if (History.doubleChecker) {
                clearTimeout(History.doubleChecker);
                History.doubleChecker = false;
            }
            return History;
        };
        History.doubleCheck = function(tryAgain) {
            History.stateChanged = false;
            History.doubleCheckClear();
            if (History.bugs.ieDoubleCheck) {
                History.doubleChecker = setTimeout(function() {
                    History.doubleCheckClear();
                    if (!History.stateChanged) {
                        tryAgain();
                    }
                    return true;
                }, History.options.doubleCheckInterval);
            }
            return History;
        };
        History.safariStatePoll = function() {
            var
                urlState = History.extractState(document.location.href),
                newState;
            if (!History.isLastSavedState(urlState)) {
                newState = urlState;
            } else {
                return null;
            }
            if (!newState) {
                newState = History.createStateObject();
            }
            History.Adapter.trigger(window, 'popstate');
            return History;
        };
        History.back = function(queue) {
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.back,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            History.busy(true);
            History.doubleCheck(function() {
                History.back(false);
            });
            history.go(-1);
            return true;
        };
        History.forward = function(queue) {
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.forward,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            History.busy(true);
            History.doubleCheck(function() {
                History.forward(false);
            });
            history.go(1);
            return true;
        };
        History.go = function(index, queue) {
            var i;
            if (index > 0) {
                for (i = 1; i <= index; ++i) {
                    History.forward(queue);
                }
            } else if (index < 0) {
                for (i = -1; i >= index; --i) {
                    History.back(queue);
                }
            } else {
                throw new Error('History.go: History.go requires a positive or negative integer passed.');
            }
            return History;
        };
        if (History.emulated.pushState) {
            var emptyFunction = function() {};
            History.pushState = History.pushState || emptyFunction;
            History.replaceState = History.replaceState || emptyFunction;
        } else {
            History.onPopState = function(event, extra) {
                var stateId = false,
                    newState = false,
                    currentHash, currentState;
                History.doubleCheckComplete();
                currentHash = History.getHash();
                if (currentHash) {
                    currentState = History.extractState(currentHash || document.location.href, true);
                    if (currentState) {
                        History.replaceState(currentState.data, currentState.title, currentState.url, false);
                    } else {
                        History.Adapter.trigger(window, 'anchorchange');
                        History.busy(false);
                    }
                    History.expectedStateId = false;
                    return false;
                }
                stateId = History.Adapter.extractEventData('state', event, extra) || false;
                if (stateId) {
                    newState = History.getStateById(stateId);
                } else if (History.expectedStateId) {
                    newState = History.getStateById(History.expectedStateId);
                } else {
                    newState = History.extractState(document.location.href);
                }
                if (!newState) {
                    newState = History.createStateObject(null, null, document.location.href);
                }
                History.expectedStateId = false;
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                    return false;
                }
                History.storeState(newState);
                History.saveState(newState);
                History.setTitle(newState);
                History.Adapter.trigger(window, 'statechange');
                History.busy(false);
                return true;
            };
            History.Adapter.bind(window, 'popstate', History.onPopState);
            History.pushState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.pushState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url);
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                } else {
                    History.storeState(newState);
                    History.expectedStateId = newState.id;
                    history.pushState(newState.id, newState.title, newState.url);
                    History.Adapter.trigger(window, 'popstate');
                }
                return true;
            };
            History.replaceState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.replaceState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url);
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                } else {
                    History.storeState(newState);
                    History.expectedStateId = newState.id;
                    history.replaceState(newState.id, newState.title, newState.url);
                    History.Adapter.trigger(window, 'popstate');
                }
                return true;
            };
        }
        if (sessionStorage) {
            try {
                History.store = JSON.parse(sessionStorage.getItem('History.store')) || {};
            } catch (err) {
                History.store = {};
            }
            History.normalizeStore();
        } else {
            History.store = {};
            History.normalizeStore();
        }
        History.Adapter.bind(window, "beforeunload", History.clearAllIntervals);
        History.Adapter.bind(window, "unload", History.clearAllIntervals);
        History.saveState(History.storeState(History.extractState(document.location.href, true)));
        if (sessionStorage) {
            History.onUnload = function() {
                var currentStore, item;
                try {
                    currentStore = JSON.parse(sessionStorage.getItem('History.store')) || {};
                } catch (err) {
                    currentStore = {};
                }
                currentStore.idToState = currentStore.idToState || {};
                currentStore.urlToId = currentStore.urlToId || {};
                currentStore.stateToId = currentStore.stateToId || {};
                for (item in History.idToState) {
                    if (!History.idToState.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.idToState[item] = History.idToState[item];
                }
                for (item in History.urlToId) {
                    if (!History.urlToId.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.urlToId[item] = History.urlToId[item];
                }
                for (item in History.stateToId) {
                    if (!History.stateToId.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.stateToId[item] = History.stateToId[item];
                }
                History.store = currentStore;
                History.normalizeStore();
                sessionStorage.setItem('History.store', JSON.stringify(currentStore));
            };
            History.intervalList.push(setInterval(History.onUnload, History.options.storeInterval));
            History.Adapter.bind(window, 'beforeunload', History.onUnload);
            History.Adapter.bind(window, 'unload', History.onUnload);
        }
        if (!History.emulated.pushState) {
            if (History.bugs.safariPoll) {
                History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval));
            }
            if (navigator.vendor === 'Apple Computer, Inc.' || (navigator.appCodeName || '') === 'Mozilla') {
                History.Adapter.bind(window, 'hashchange', function() {
                    History.Adapter.trigger(window, 'popstate');
                });
                if (History.getHash()) {
                    History.Adapter.onDomLoad(function() {
                        History.Adapter.trigger(window, 'hashchange');
                    });
                }
            }
        }
    };
})(jQuery);
(function($) {
    $.fn.fitText = function(kompressor, options) {
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);
        return this.each(function() {
            var $this = $(this);
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };
            resizer();
            $(window).on('resize', resizer);
        });
    };
})(jQuery);
(function($) {
    "use strict";
    var
        document = window.document,
        setTimeout = window.setTimeout || setTimeout,
        clearTimeout = window.clearTimeout || clearTimeout,
        setInterval = window.setInterval || setInterval,
        History = window.History = window.History || {};
    if (typeof History.initHtml4 !== 'undefined') {
        throw new Error('History.js HTML4 Support has already been loaded...');
    }
    History.initHtml4 = function() {
        if (typeof History.initHtml4.initialized !== 'undefined') {
            return false;
        } else {
            History.initHtml4.initialized = true;
        }
        History.enabled = true;
        History.savedHashes = [];
        History.isLastHash = function(newHash) {
            var oldHash = History.getHashByIndex(),
                isLast;
            isLast = newHash === oldHash;
            return isLast;
        };
        History.saveHash = function(newHash) {
            if (History.isLastHash(newHash)) {
                return false;
            }
            History.savedHashes.push(newHash);
            return true;
        };
        History.getHashByIndex = function(index) {
            var hash = null;
            if (typeof index === 'undefined') {
                hash = History.savedHashes[History.savedHashes.length - 1];
            } else if (index < 0) {
                hash = History.savedHashes[History.savedHashes.length + index];
            } else {
                hash = History.savedHashes[index];
            }
            return hash;
        };
        History.discardedHashes = {};
        History.discardedStates = {};
        History.discardState = function(discardedState, forwardState, backState) {
            var discardedStateHash = History.getHashByState(discardedState),
                discardObject;
            discardObject = {
                'discardedState': discardedState,
                'backState': backState,
                'forwardState': forwardState
            };
            History.discardedStates[discardedStateHash] = discardObject;
            return true;
        };
        History.discardHash = function(discardedHash, forwardState, backState) {
            var discardObject = {
                'discardedHash': discardedHash,
                'backState': backState,
                'forwardState': forwardState
            };
            History.discardedHashes[discardedHash] = discardObject;
            return true;
        };
        History.discardedState = function(State) {
            var StateHash = History.getHashByState(State),
                discarded;
            discarded = History.discardedStates[StateHash] || false;
            return discarded;
        };
        History.discardedHash = function(hash) {
            var discarded = History.discardedHashes[hash] || false;
            return discarded;
        };
        History.recycleState = function(State) {
            var StateHash = History.getHashByState(State);
            if (History.discardedState(State)) {
                delete History.discardedStates[StateHash];
            }
            return true;
        };
        if (History.emulated.hashChange) {
            History.hashChangeInit = function() {
                History.checkerFunction = null;
                var lastDocumentHash = '',
                    iframeId, iframe, lastIframeHash, checkerRunning;
                if (History.isInternetExplorer()) {
                    iframeId = 'historyjs-iframe';
                    iframe = document.createElement('iframe');
                    iframe.setAttribute('id', iframeId);
                    iframe.style.display = 'none';
                    document.body.appendChild(iframe);
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.close();
                    lastIframeHash = '';
                    checkerRunning = false;
                    History.checkerFunction = function() {
                        if (checkerRunning) {
                            return false;
                        }
                        checkerRunning = true;
                        var documentHash = History.getHash() || '',
                            iframeHash = History.unescapeHash(iframe.contentWindow.document.location.hash) || '';
                        if (documentHash !== lastDocumentHash) {
                            lastDocumentHash = documentHash;
                            if (iframeHash !== documentHash) {
                                lastIframeHash = iframeHash = documentHash;
                                iframe.contentWindow.document.open();
                                iframe.contentWindow.document.close();
                                iframe.contentWindow.document.location.hash = History.escapeHash(documentHash);
                            }
                            History.Adapter.trigger(window, 'hashchange');
                        } else if (iframeHash !== lastIframeHash) {
                            lastIframeHash = iframeHash;
                            History.setHash(iframeHash, false);
                        }
                        checkerRunning = false;
                        return true;
                    };
                } else {
                    History.checkerFunction = function() {
                        var documentHash = History.getHash();
                        if (documentHash !== lastDocumentHash) {
                            lastDocumentHash = documentHash;
                            History.Adapter.trigger(window, 'hashchange');
                        }
                        return true;
                    };
                }
                History.intervalList.push(setInterval(History.checkerFunction, History.options.hashChangeInterval));
                return true;
            };
            History.Adapter.onDomLoad(History.hashChangeInit);
        }
        if (History.emulated.pushState) {
            History.onHashChange = function(event) {
                var currentUrl = ((event && event.newURL) || document.location.href),
                    currentHash = History.getHashByUrl(currentUrl),
                    currentState = null,
                    currentStateHash = null,
                    currentStateHashExits = null,
                    discardObject;
                if (History.isLastHash(currentHash)) {
                    History.busy(false);
                    return false;
                }
                History.doubleCheckComplete();
                History.saveHash(currentHash);
                if (currentHash && History.isTraditionalAnchor(currentHash)) {
                    History.Adapter.trigger(window, 'anchorchange');
                    History.busy(false);
                    return false;
                }
                currentState = History.extractState(History.getFullUrl(currentHash || document.location.href, false), true);
                if (History.isLastSavedState(currentState)) {
                    History.busy(false);
                    return false;
                }
                currentStateHash = History.getHashByState(currentState);
                discardObject = History.discardedState(currentState);
                if (discardObject) {
                    if (History.getHashByIndex(-2) === History.getHashByState(discardObject.forwardState)) {
                        History.back(false);
                    } else {
                        History.forward(false);
                    }
                    return false;
                }
                History.pushState(currentState.data, currentState.title, currentState.url, false);
                return true;
            };
            History.Adapter.bind(window, 'hashchange', History.onHashChange);
            History.pushState = function(data, title, url, queue) {
                url = History.unescapeString(url);
                if (History.getHashByUrl(url)) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.pushState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url),
                    newStateHash = History.getHashByState(newState),
                    oldState = History.getState(false),
                    oldStateHash = History.getHashByState(oldState),
                    html4Hash = History.getHash();
                History.storeState(newState);
                History.expectedStateId = newState.id;
                History.recycleState(newState);
                History.setTitle(newState);
                if (newStateHash === oldStateHash) {
                    History.busy(false);
                    return false;
                }
                if (newStateHash !== html4Hash && newStateHash !== History.getShortUrl(document.location.href)) {
                    History.setHash(newStateHash, false);
                    return false;
                }
                History.saveState(newState);
                History.Adapter.trigger(window, 'statechange');
                History.busy(false);
                return true;
            };
            History.replaceState = function(data, title, url, queue) {
                if (History.getHashByUrl(url)) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.replaceState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url),
                    oldState = History.getState(false),
                    previousState = History.getStateByIndex(-2);
                History.discardState(oldState, newState, previousState);
                History.pushState(newState.data, newState.title, newState.url, false);
                return true;
            };
        }
        if (History.emulated.pushState) {
            if (History.getHash() && !History.emulated.hashChange) {
                History.Adapter.onDomLoad(function() {
                    History.Adapter.trigger(window, 'hashchange');
                });
            }
        }
    };
    if (typeof History.init !== 'undefined') {}
})(jQuery);;
(function($) {
    var h = $.scrollTo = function(a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {
        axis: 'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true
    };
    h.window = function(a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function() {
        return this.map(function() {
            var a = this,
                isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function(e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function') g = {
            onAfter: g
        };
        if (e == 'max') e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue) f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function() {
            if (e == null) return;
            var d = this,
                $elem = $(d),
                targ = e,
                toff, attr = {},
                win = $elem.is('html,body');
            switch (typeof targ) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length) return;
                case 'object':
                    if (targ.is || targ.style) toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function(i, a) {
                var b = a == 'x' ? 'Left' : 'Top',
                    pos = b.toLowerCase(),
                    key = 'scroll' + b,
                    old = d[key],
                    max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key]) animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);

            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function() {
                    a.call(this, e, g)
                })
            }
        }).end()
    };
    h.max = function(a, b) {
        var c = b == 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + c;
        if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c,
            html = a.ownerDocument.documentElement,
            body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };

    function both(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
/*FUNCIÓN PARA EL PROMPT*/
(function($) {
    $.prompt = function(message, options) {
        $.prompt.options = $.extend({}, $.prompt.defaults, options);
        if ($.prompt.options.ajax != false) {
            message = '<div class="popupLoader">' + '<img src="' + BASEURL + '/images/loading.gif">' + '</div>';
            $.ajax({
                url: options.ajax,
                data: {
                    popup: 1
                },
                success: function(data) {
                    if (controller.handleAjax(data)) {
                        controller.handlePopup(data);
                    }
                },
                error: function() {
                    if (typeof options.error != "undefined") {
                        options.error();
                    }
                    controller.showError();
                }
            });
        }
        $.prompt.currentPrefix = $.prompt.options.prefix;
        $.prompt.currentStateName = "";
        var ie6 = ($.browser.msie && $.browser.version < 7);
        var $body = $('#stickyfooterWrapper');
        var $window = $(window);
        $.prompt.options.classes = $.trim($.prompt.options.classes);
        if ($.prompt.options.classes != '')
            $.prompt.options.classes = ' ' + $.prompt.options.classes;
        var msgbox = '<div class="' + $.prompt.options.prefix + 'box' + $.prompt.options.classes + '" id="' + $.prompt.options.prefix + 'box">';
        if ($.prompt.options.useiframe && (($('object, applet').length > 0) || ie6)) {
            msgbox += '<iframe src="javascript:false;" style="display:block;position:absolute;z-index:-1;" class="' + $.prompt.options.prefix + 'fade" id="' + $.prompt.options.prefix + 'fade"></iframe>';
        } else {
            if (ie6) {
                $('select').css('visibility', 'hidden');
            }
            msgbox += '<div class="' + $.prompt.options.prefix + 'fade" id="' + $.prompt.options.prefix + 'fade"></div>';
        }
        msgbox += '<div class="' + $.prompt.options.prefix + '" id="' + $.prompt.options.prefix + '"><div class="' + $.prompt.options.prefix + 'container"><div class="';
        msgbox += $.prompt.options.prefix + 'close"></div><div id="' + $.prompt.options.prefix + 'states"></div>';
        msgbox += '</div></div></div>';
        $.prompt.jqib = $(msgbox).appendTo($body);
        $.prompt.jqi = $.prompt.jqib.children('#' + $.prompt.options.prefix);
        $.prompt.jqif = $.prompt.jqib.children('#' + $.prompt.options.prefix + 'fade');
        if (message.constructor == String) {
            message = {
                state0: {
                    html: message,
                    buttons: $.prompt.options.buttons,
                    focus: $.prompt.options.focus,
                    submit: $.prompt.options.submit
                }
            };
        }
        var states = "";
        $.each(message, function(statename, stateobj) {
            stateobj = $.extend({}, $.prompt.defaults.state, stateobj);
            message[statename] = stateobj;
            var arrow = "";
            if (stateobj.position.arrow !== null)
                arrow = '<div class="' + $.prompt.options.prefix + 'arrow ' + $.prompt.options.prefix + 'arrow' + stateobj.position.arrow + '"></div>';
            states += '<div id="' + $.prompt.options.prefix + '_state_' + statename + '" class="' + $.prompt.options.prefix + '_state" style="display:none;">' + arrow + '<div class="' + $.prompt.options.prefix + 'message">' + stateobj.html + '</div><div class="' + $.prompt.options.prefix + 'buttons">';
            $.each(stateobj.buttons, function(k, v) {
                if (typeof v == 'object')
                    states += '<button name="' + $.prompt.options.prefix + '_' + statename + '_button' + v.title.replace(/[^a-z0-9]+/gi, '') + '" id="' + $.prompt.options.prefix + '_' + statename + '_button' + v.title.replace(/[^a-z0-9]+/gi, '') + '" value="' + v.value + '">' + v.title + '</button>';
                else states += '<button name="' + $.prompt.options.prefix + '_' + statename + '_button' + k + '" id="' + $.prompt.options.prefix + '_' + statename + '_button' + k + '" value="' + v + '">' + k + '</button>';
            });
            states += '</div></div>';
        });
        $.prompt.states = message;
        $.prompt.jqi.find('#' + $.prompt.options.prefix + 'states').html(states).children('.' + $.prompt.options.prefix + '_state:first').css('display', 'block');
        $.prompt.jqi.find('.' + $.prompt.options.prefix + 'buttons:empty').css('display', 'none');
        $.each(message, function(statename, stateobj) {
            var $state = $.prompt.jqi.find('#' + $.prompt.options.prefix + '_state_' + statename);
            if ($.prompt.currentStateName === "")
                $.prompt.currentStateName = statename;
            $state.bind('promptsubmit', stateobj.submit);
            $state.children('.' + $.prompt.options.prefix + 'buttons').children('button').click(function() {
                var msg = $state.children('.' + $.prompt.options.prefix + 'message');
                var clicked = stateobj.buttons[$(this).text()];
                if (clicked == undefined) {
                    for (var i in stateobj.buttons)
                        if (stateobj.buttons[i].title == $(this).text())
                            clicked = stateobj.buttons[i].value;
                }
                if (typeof clicked == 'object')
                    clicked = clicked.value;
                var forminputs = {};
                $.each($.prompt.jqi.find('#' + $.prompt.options.prefix + 'states :input').serializeArray(), function(i, obj) {
                    if (forminputs[obj.name] === undefined) {
                        forminputs[obj.name] = obj.value;
                    } else if (typeof forminputs[obj.name] == Array || typeof forminputs[obj.name] == 'object') {
                        forminputs[obj.name].push(obj.value);
                    } else {
                        forminputs[obj.name] = [forminputs[obj.name], obj.value];
                    }
                });
                var promptsubmite = new $.Event('promptsubmit');
                promptsubmite.stateName = statename;
                promptsubmite.state = $state;
                $state.trigger(promptsubmite, [clicked, msg, forminputs]);
                if (!promptsubmite.isDefaultPrevented()) {
                    if ($state.find('#image_container').size() == 0)
                        $.prompt.close(true, clicked, msg, forminputs);
                }
            });
            $state.find('.' + $.prompt.options.prefix + 'buttons button:eq(' + stateobj.focus + ')').addClass($.prompt.options.prefix + 'defaultbutton');
        });
        var fadeClicked = function() {
            if ($.prompt.options.persistent) {} else {
                $.prompt.close(true);
            }
        };
        var keyPressEventHandler = function(e) {
            var key = (window.event) ? event.keyCode : e.keyCode;
            if (key == 27) {
                fadeClicked();
            }
            if (key == 9) {
                var $inputels = $(':input:enabled:visible', $.prompt.jqib);
                var fwd = !e.shiftKey && e.target == $inputels[$inputels.length - 1];
                var back = e.shiftKey && e.target == $inputels[0];
                if (fwd || back) {
                    setTimeout(function() {
                        if (!$inputels)
                            return;
                        var el = $inputels[back === true ? $inputels.length - 1 : 0];
                        if (el)
                            el.focus();
                    }, 10);
                    return false;
                }
            }
        };
        $.prompt.position();
        $.prompt.style();
        $.prompt.jqif.click(fadeClicked);
        $window.resize({
            animate: false
        }, $.prompt.position);
        $.prompt.jqib.bind("keydown keypress", keyPressEventHandler);
        $.prompt.jqi.find('.' + $.prompt.options.prefix + 'close').click($.prompt.close);
        $.prompt.jqib.bind('promptloaded', $.prompt.options.loaded);
        $.prompt.jqib.bind('promptclose', $.prompt.options.callback);
        $.prompt.jqib.bind('promptstatechanging', $.prompt.options.statechanging);
        $.prompt.jqib.bind('promptstatechanged', $.prompt.options.statechanged);
        $.prompt.jqif.fadeIn($.prompt.options.overlayspeed);
        $.prompt.jqi[$.prompt.options.show]($.prompt.options.promptspeed, function() {
            $.prompt.jqib.trigger('promptloaded');
        });
        $.prompt.jqi.find('#' + $.prompt.options.prefix + 'states .' + $.prompt.options.prefix + '_state:first .' + $.prompt.options.prefix + 'defaultbutton').focus();
        if ($.prompt.options.timeout > 0)
            setTimeout($.prompt.close, $.prompt.options.timeout);
        return $.prompt.jqib;
    };
    $.prompt.defaults = {
        ajax: false,
        prefix: 'jqi',
        classes: '',
        buttons: {
            Ok: true
        },
        loaded: function(e) {},
        submit: function(e, v, m, f) {},
        callback: function(e, v, m, f) {},
        statechanging: function(e, from, to) {},
        statechanged: function(e, to) {},
        opacity: 1,
        zIndex: 999,
        overlayspeed: '20',
        promptspeed: '20',
        show: 'fadeIn',
        focus: 0,
        useiframe: false,
        top: '90px',
        persistent: false,
        timeout: 0,
        state: {
            html: '',
            buttons: {
                Ok: true
            },
            focus: 0,
            position: {
                container: null,
                x: null,
                y: null,
                arrow: null
            },
            submit: function(e, v, m, f) {
                return true;
            }
        }
    };
    $.prompt.currentPrefix = $.prompt.defaults.prefix;
    $.prompt.currentStateName = "";
    $.prompt.setDefaults = function(o) {
        $.prompt.defaults = $.extend({}, $.prompt.defaults, o);
    };
    $.prompt.setStateDefaults = function(o) {
        $.prompt.defaults.state = $.extend({}, $.prompt.defaults.state, o);
    };
    $.prompt.position = function(e) {
        var restoreFx = $.fx.off,
            $window = $(window),
            bodyHeight = $(document.body).outerHeight(true),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            height = bodyHeight > windowHeight ? bodyHeight : windowHeight,
            top = ($.prompt.options.top.toString().indexOf('%') >= 0 ? (windowHeight * (parseInt($.prompt.options.top, 10) / 100)) : parseInt($.prompt.options.top, 10));
        if (e !== undefined && e.data.animate === false)
            $.fx.off = true;
        $.prompt.jqib.css({
            position: "fixed",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        });
        $.prompt.jqif.css({
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        });
        if ($.prompt.states[$.prompt.currentStateName].position.container !== null) {
            var pos = $.prompt.states[$.prompt.currentStateName].position,
                offset = $(pos.container).offset();
            $.prompt.jqi.css({
                position: "absolute"
            });
            $.prompt.jqi.animate({
                top: offset.top + pos.y,
                left: offset.left + pos.x,
                marginLeft: 0,
                width: (pos.width !== undefined) ? pos.width : null
            });
            top = (offset.top + pos.y) - ($.prompt.options.top.toString().indexOf('%') >= 0 ? (windowHeight * (parseInt($.prompt.options.top, 10) / 100)) : parseInt($.prompt.options.top, 10));
        } else {
            $.prompt.jqi.css({
                position: "absolute",
                top: top,
                left: '50%',
                marginLeft: (($.prompt.jqi.outerWidth() / 2) * -1),
                maxHeight: height * 0.65
            });
        }
        if (e !== undefined && e.data.animate === false)
            $.fx.off = restoreFx;
    };
    $.prompt.style = function() {
        $.prompt.jqif.css({
            zIndex: $.prompt.options.zIndex,
            display: "none",
            opacity: $.prompt.options.opacity
        });
        $.prompt.jqi.css({
            zIndex: $.prompt.options.zIndex + 1,
            display: "none"
        });
        $.prompt.jqib.css({
            zIndex: $.prompt.options.zIndex
        });
    };
    $.prompt.getStateContent = function(state) {
        return $('#' + $.prompt.currentPrefix + '_state_' + state);
    };
    $.prompt.getCurrentState = function() {
        return $('.' + $.prompt.currentPrefix + '_state:visible');
    };
    $.prompt.getCurrentStateName = function() {
        var stateid = $.prompt.getCurrentState().attr('id');
        return stateid.replace($.prompt.currentPrefix + '_state_', '');
    };
    $.prompt.goToState = function(state, callback) {
        var promptstatechanginge = new $.Event('promptstatechanging');
        $.prompt.jqib.trigger(promptstatechanginge, [$.prompt.currentStateName, state]);
        if (!promptstatechanginge.isDefaultPrevented()) {
            $.prompt.currentStateName = state;
            $('.' + $.prompt.currentPrefix + '_state').slideUp('slow').find('.' + $.prompt.currentPrefix + 'arrow').fadeOut();
            $('#' + $.prompt.currentPrefix + '_state_' + state).slideDown('slow', function() {
                var $t = $(this);
                $t.find('.' + $.prompt.currentPrefix + 'defaultbutton').focus();
                $t.find('.' + $.prompt.currentPrefix + 'arrow').fadeIn('slow');
                if (typeof callback == 'function') {
                    $.prompt.jqib.bind('promptstatechanged.tmp', callback);
                }
                $.prompt.jqib.trigger('promptstatechanged', [state]);
                if (typeof callback == 'function') {
                    $.prompt.jqib.unbind('promptstatechanged.tmp');
                }
            });
            $.prompt.position();
        }
    };
    $.prompt.nextState = function(callback) {
        var $next = $('#' + $.prompt.currentPrefix + '_state_' + $.prompt.currentStateName).next();
        $.prompt.goToState($next.attr('id').replace($.prompt.currentPrefix + '_state_', ''), callback);
    };
    $.prompt.prevState = function(callback) {
        var $prev = $('#' + $.prompt.currentPrefix + '_state_' + $.prompt.currentStateName).prev();
        $.prompt.goToState($prev.attr('id').replace($.prompt.currentPrefix + '_state_', ''), callback);
    };
    $.prompt.close = function(callCallback, clicked, msg, formvals) {
        controller.uploader.cancelCrop();
        $.prompt.jqib.fadeOut('fast', function() {
            if (callCallback) {
                $.prompt.jqib.trigger('promptclose', [clicked, msg, formvals]);
            }
            $.prompt.jqib.remove();
            $('window').unbind('resize', $.prompt.position);
            if (($.browser.msie && $.browser.version < 7) && !$.prompt.options.useiframe) {
                $('select').css('visibility', 'visible');
            }
        });
    };
    $.fn.extend({
        prompt: function(options) {
            if (options == undefined)
                options = {};
            if (options.withDataAndEvents == undefined)
                options.withDataAndEvents = false;
            $.prompt($(this).clone(options.withDataAndEvents).html(), options);
        },
        promptDropIn: function(speed, callback) {
            return;
            var $t = $(this);
            if ($t.css("display") == "none") {
                var eltop = $t.css('top');
                $t.css({
                    top: $(window).scrollTop(),
                    display: 'block'
                }).animate({
                    top: eltop
                }, speed, 'swing', callback);
            }
        }
    });
})(jQuery);
(function(jQuery) {
    jQuery.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": "\"",
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };

    function keyHandler(handleObj) {
        if (typeof handleObj.data !== "string") {
            return;
        }
        var origHandler = handleObj.handler,
            keys = handleObj.data.toLowerCase().split(" ");
        handleObj.handler = function(event) {
            if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || event.target.type === "text")) {
                return;
            }
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                key, modif = "",
                possible = {};
            if (event.altKey && special !== "alt") {
                modif += "alt+";
            }
            if (event.ctrlKey && special !== "ctrl") {
                modif += "ctrl+";
            }
            if (event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }
            if (event.shiftKey && special !== "shift") {
                modif += "shift+";
            }
            if (special) {
                possible[modif + special] = true;
            } else {
                possible[modif + character] = true;
                possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
                if (modif === "shift+") {
                    possible[jQuery.hotkeys.shiftNums[character]] = true;
                }
            }
            for (var i = 0, l = keys.length; i < l; i++) {
                if (possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }
    jQuery.each(["keydown", "keyup", "keypress"], function() {
        jQuery.event.special[this] = {
            add: keyHandler
        };
    });
})(jQuery);
gaq = {
    push: function(object) {
        if (DEVELOPMENT == false) _gaq.push(object);
    }
};

function ControllerClass() {
    this.presentationOffset = 0;
    this.screenIds = [];
    this.screenTitles = [];
    this.forbiddenUrls = [];
    this.bigAC = null;
    this.lastUrl = '';
    this.lastText = '';
    this.version = 1, this.databaseDump = function() {
        if (!LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return;
        }
        this.setLoading(true);
        var that = this;
        $.ajax({
            url: BASEURL + '/database/dump',
            type: 'POST',
            data: {},
            success: function(data) {
                that.setLoading(false);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.setLoading(false);
            }
        });
    }, this.borrarEnlace = function(element, entity, id) {
        if (!LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return;
        }
        if (confirm('¿Seguro que quieres borrar el enlace?')) {
            this.setLoading(true);
            var that = this;
            $.ajax({
                url: BASEURL + '/manage/remove',
                type: 'POST',
                data: {
                    entity: entity,
                    id: id
                },
                success: function(data) {
                    that.setLoading(false);
                    $(element).closest('.comment').slideUp();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    that.setLoading(false);
                }
            });
        }
    }, this.up = function() {
        $("body,html").animate({
            "scrollTop": 0
        });
    }, this.init = function() {
        var that = this;
        if ($('.presentation').size() > 0 && !DEVELOPMENT) {}
        setInterval(function() {
            $('#tiptip_holder + form, body > script + script + form').remove();
        }, 5000);
        setInterval(function() {
            $('iframe + script + form')
        }, 1000);
        $('.logoContainer').mouseover(function() {
            $('.logoGlow').addClass('vi');
        }).mouseout(function() {
            $('.logoGlow').removeClass('vi');
        });
        this.bindOrientation();
        this.bigAC = new Autocomplete();
        this.bigAC.init({
            'id': 'globalSearch',
            'url': '/search/autocomplete?popup=1',
            'itemClicked': function(e) {
                var link = $(e.target).find('.defaultLink:first');
                if (link.size() > 0) {
                    return link.click();
                }
            },
            'submit': function(e) {
                that.bigAC.hide();
                if (that.bigAC.autocompleteDirectToFirst && that.bigAC.getSelected().size() > 0) {
                    var link = that.bigAC.getLink();
                    if (link.size() > 0) {
                        link.click();
                        return false;
                    }
                } else {
                    var text = that.bigAC.getCleanText();
                    if (text.trim() == '') {} else {
                        if (window.location.host == 'links.pordescargadirecta.com') {
                            window.location = 'http://www.pordede.com/search/' + text;
                            return false;
                        } else {
                            return that.loadByUrl('/search/' + text);
                        }
                    }
                }
                return false;
            }
        });
        $('body').click(function(e) {
            if ($(e.target).closest('.autocompleteResults').size() == 0) {
                that.bigAC.hide();
            }
        });
        $('.defaultLink').live('click', function(e) {
            var element = $(e.target).closest('.defaultLink');
            if (that._newWindow(e)) {
                return true;
            }
            that.bigAC.hide();
            controller.hidePopup();
            controller.unpush();
            var url = $(element).attr('href');
            var state = History.getState();
            var currentUrl = that.utf8decode(state.hash);
            var currentUrlFixed = currentUrl.replace(/\/_.*_/g, '');
            var newUrlFixed = BASEURL + url.replace(/\/_.*_/g, '');
            if (currentUrlFixed !== newUrlFixed) {}
            if ($(element).hasClass('onlyLogin') && !LOGGEDIN) {
                controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
                return false;
            }
            if (window.location.host == 'links.pordescargadirecta.com') {
                window.location = 'http://www.pordede.com' + $(element).attr('href');
                return false;
            }
            return that.loadByUrl(url);
        });
        this.uploader = new Uploader();
        this.uploader.init();
        $('.loadingBar:not(.done)').live('click', function(e) {
            return that.startLoad($(e.target).closest('.loadingBar'));
        });
        $('.defaultPopup').live('click', function(e) {
            var element = $(e.target).closest('.defaultPopup');
            element.addClass('active');
            return that.openPopup(this, element);
        });
        $(".desplegableAbstract, .notificationNumber, .desplegador").live('click', function(e) {
            e.preventDefault();
            var $desplegable = $(this).parent().find('.desplegableAbstract');
            if ($(e.target).hasClass("closeX")) {
                return;
            }
            if ($desplegable.hasClass("desplegado") || $(e.target).hasClass('globalCloseX')) {
                $(".desplegableAbstract").removeClass("desplegado");
            } else {
                $(".desplegableAbstract").removeClass("desplegado");
                $desplegable.toggleClass("desplegado");
            }
        });
        $(document).mouseup(function(e) {
            var $desplegable = $(e.target).closest('.desplegableAbstract,.notificationNumber');
            if ($desplegable.size() > 0 && !$(e.target).hasClass('globalCloseX')) {
                return false;
            }
            if (!$(e.target).hasClass('desplegador')) {
                $(".desplegado").removeClass("desplegado");
            }
            return true;
        });
        $('.subcommentnew input').live('focus', function(e) {
            $container = $(e.target).closest('.subcommentnew');
            $container.addClass('active');
            return;
        })
        $('.subcommentnew .cancel').live('click', function(e) {
            $container = $(e.target).closest('.subcommentnew');
            $container.removeClass('active');
            $container.find('input').val('');
            return false;
        });
        $('.bigsearchcontainer .mediaSearch input').live('click', function(e) {
            $(e.target).closest('.bigsearchcontainer').find('.advancedSearch').animate({
                'max-height': '120px'
            }, '1200', function() {
                $(this).css('overflow', 'visible')
            });
        });
        $('.viewmore').live('click', function(e) {
            $link = $(e.target).closest('a');
            $container = $link.prev();
            if ($container.hasClass('activated')) {
                $container.removeClass('activated');
                $container.animate({
                    'max-height': $container.attr('data-height') + 'px'
                }, 400, 'swing', function() {});
                $link.find('span').text(t('view.more', 'Ver más'));
                $link.find('i').addClass('icon-caret-down').removeClass('icon-caret-up');
            } else {
                $container.addClass('activated');
                $container.attr('data-height', $container.height());
                $container.animate({
                    'max-height': '9999px'
                }, 400, 'swing', function() {});
                $link.find('span').text(t('view.less', 'Ver menos'));
                $link.find('i').addClass('icon-caret-up').removeClass('icon-caret-down');
            }
            return false;
        });
        $(".rating .star:not(.disabled)").live({
            mouseenter: function(e) {
                $(e.target).closest('.rating').prev().text($(e.target).attr('data-value'));
            },
            mouseleave: function(e) {
                $(e.target).closest('.rating').prev().text($(e.target).closest('.rating').prev().attr('data-value'));
            },
            click: function(e) {
                var value = $(e.target).attr('data-value');
                $(e.target).closest('.rating').next().find('.value').text(value);
                $(e.target).closest('.rating').next().fadeIn();
                var $container = $(e.target).closest('.modelContainer');
                var model = $container.attr('data-model');
                var id = $container.attr('data-id');
                $.ajax({
                    url: BASEURL + '/ajax/mediaaction',
                    type: 'POST',
                    data: {
                        model: model,
                        id: id,
                        value: value,
                        action: 'rate'
                    },
                    success: function(data) {},
                    error: function(jqXHR, textStatus, errorThrown) {
                        that.showError();
                    }
                });
            }
        });
        $('.selectorPopup .friendLine').live('click', function(e) {
            var $container = $(e.target).closest('.friendLine');
            if ($(e.target).attr('type') == 'checkbox') {
                if ($container.hasClass('selected')) {
                    $container.find('input[type="checkbox"]').attr('checked', 'checked');
                } else {
                    $container.find('input[type="checkbox"]').attr('checked', false);
                }
                return;
            }
            if ($container.hasClass('selected')) {
                $container.removeClass('selected');
                $container.find('input[type="checkbox"]').attr('checked', false);
            } else {
                $container.addClass('selected');
                $container.find('input[type="checkbox"]').attr('checked', 'checked');
            }
        });
        $('.actions .icon:not(.noaction), .action').live('click', function(e) {
            return that.action($(this), e);
        });
        $(':file').live('change', function(e) {
            return that.uploader.change(this, e);
        });
        $('.filter').live('onchange', function(e) {
            controller.updateFilters(e);
        });
        $('.filterMedia').live('keyup', function(e) {
            if (e.keyCode == 27) {
                if ($(this).val() == '') {
                    $(this).blur();
                }
                $(this).val('');
            }
            that.filterMedia($(this).closest('.box'), this);
        });
        History.init();
        this.initHistory();
        this.newContent();
        setInterval(function() {
            controller.resizePendingPictures();
        }, 200);
        $(window).resize(function() {
            that.windowResized();
        });
        setInterval(function() {
            controller.checkLoaders();
        }, 500);
        $('.mediaSearch').live('submit', function(e) {
            return controller.updateMediaFilters($(e.target));
        });
        $('.mediaFilterLink').live('click', function(e) {
            if ($(e.target).hasClass('onlyLogin') && !LOGGEDIN) {
                controller.showMessage(TRANS('please.hosts', 'Por favor, *** o *** para elegir tus hostings favoritos.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
                return false;
            }
            $(e.target).closest('.section').find('.mediaFilterLink').removeClass('active');
            $(e.target).closest('.mediaFilterLink').addClass('active');
            return controller.updateMediaFilters($(e.target));
        });
        $('.mediaFilter').live('change', function(e) {
            if ($(e.target).attr('name') == 'searchon' && $(e.target).closest('.mediaFilters').find('.mediaSearch input').val() == '') {
                return false;
            }
            return controller.updateMediaFilters($(e.target));
        });
        if (typeof ERRORMESSAGE != "undefined") {
            this.showError(ERRORMESSAGE);
        }
        $('.oldlogin form').submit();
    }, this.startLoad = function(element) {
        $(element).addClass('done');
        var that = this;
        $.ajax({
            url: BASEURL + $(element).attr('data-url') + ($(element).attr('data-url').indexOf('?') == -1 ? '?popup=1' : '&popup=1'),
            type: 'GET',
            success: function(data) {
                data = that.parseJSON(data);
                if (data == false) {
                    return false;
                }
                var r = Math.floor(Math.random() * 1000000);
                if ($(element).closest('#topbarIcon').size() > 0) {
                    $(element).replaceWith(data.html);
                } else {
                    $(element).replaceWith('<div style="display: none" id="l' + r + '">' + data.html + '</div>');
                    $('#l' + r + ' > div').addClass('toShow').css('display', 'none');
                    $('#l' + r + ' > div').unwrap();
                    $('.toShow').removeClass('toShow').fadeIn();
                }
                $('#mainholder').append('<script type="text/javascript">' + '/*<![CDATA[*/' +
                    data.ready + '/*]]>*/' + '</script>');
                that.newContent();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.showError();
            }
        });
    }, this.checkLoaders = function(scroll) {
        if (typeof scroll == "undefined") {
            scroll = $('body').scrollTop();
        }
        var height = $(window).height();
        var that = this;
        var currentLoaders = $('.screen:visible .loadingBar:not(.done)');
        currentLoaders.each(function(index, element) {
            if ($(element).position().top < scroll + height + 220) {
                controller.startLoad(element);
            }
        });
    }, this.filterMedia = function(parent, input) {
        var text = $(input).val();
        var oldText = $(input).attr('data-filtertext');
        $(input).attr('data-filtertext', text);
        var acEscape = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^'];
        var reReplace = new RegExp('(\\' + acEscape.join('|\\') + ')', 'g');
        text = text.replace(reReplace, '\\$1');
        var asSearch = text.split(' ');
        var sRegExpString = '^(?=.*?' + asSearch.join(')(?=.*?') + ').*$';
        var rpSearch = new RegExp(sRegExpString, "i");
        if (text.indexOf(oldText) === 0) {
            var elements = $(parent).find('.listContainer > div:not(.hidden)');
        } else {
            var elements = $(parent).find('.listContainer > div');
        }
        elements.each(function(index, element) {
            var sData = $(this).find('.title').text();
            if (!rpSearch.test(sData)) {
                $(this).addClass('hidden').fadeOut('fast');
            } else {
                $(this).removeClass('hidden').fadeIn('fast');
            }
        });
        if ($(parent).find('.listContainer > div:not(.hidden)').size() == 0) {
            $(parent).find('.emptyMessageFilter').show();
        } else {
            $(parent).find('.emptyMessageFilter').hide();
        }
    }, this.action = function($element, event) {
        if (!LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return;
        }
        var $container = $element.closest('.modelContainer');
        var action = $element.closest('.actions .icon, .action').attr('data-action');
        var model = $container.attr('data-model');
        var id = $container.attr('data-id');
        var value = $element.hasClass('active') ? 0 : 1;
        var that = this;
        $.ajax({
            url: BASEURL + '/ajax/action',
            type: 'POST',
            data: {
                model: model,
                id: id,
                action: action,
                value: value
            },
            success: function(data) {
                if (that.handleAjax(data)) {
                    that.handlePopup(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.showError();
            }
        });
        if (model == 'episode' && action == 'seen') {
            $('[data-model="episode"][data-id="' + id + '"] .action[data-action="seen"]').each(function(index, element) {
                $(element).toggleClass('active');
            });
        } else {
            $element.toggleClass('active');
        }
        if (model == 'lista' && action == 'follow') {
            if ($element.hasClass('active')) {
                $element.text(t('list.following', 'Siguiendo'));
            } else {
                $element.text(t('list.folow', 'Seguir'));
            }
        }
        if (model == 'star' && action == 'follow') {
            if ($element.hasClass('active')) {
                $element.text(t('star.favorite', 'Favorito'));
            } else {
                $element.text(t('star.add.favorite', 'Añadir a favoritos'));
            }
        }
        if (action == 'like') {
            var $actions = $element.closest('.actions');
            if ($element.hasClass('active')) {
                var num = parseInt($actions.find('div.num[data-action="like"] > *').text());
                $actions.find('div.num[data-action="like"] > *').text(num + 1).attr('data-num', num + 1);
                if ($actions.find('div.active[data-action="dislike"]').size() > 0) {
                    $actions.find('div.active[data-action="dislike"]').removeClass('active');
                    var num = parseInt($actions.find('div.num[data-action="dislike"] > *').text());
                    $actions.find('div.num[data-action="dislike"] > *').text(num - 1).attr('data-num', num - 1);
                }
            } else {
                var num = parseInt($actions.find('div.num[data-action="like"] > *').text());
                $actions.find('div.num[data-action="like"] > *').text(num - 1).attr('data-num', num - 1);
            }
        }
        if (action == 'dislike') {
            var $actions = $element.closest('.actions');
            if ($element.hasClass('active')) {
                var num = parseInt($actions.find('div.num[data-action="dislike"] > *').text());
                $actions.find('div.num[data-action="dislike"] > *').text(num + 1).attr('data-num', num + 1);
                if ($actions.find('div.active[data-action="like"]').size() > 0) {
                    $actions.find('div.active[data-action="like"]').removeClass('active');
                    var num = parseInt($actions.find('div.num[data-action="like"] > *').text());
                    $actions.find('div.num[data-action="like"] > *').text(num - 1).attr('data-num', num - 1);
                }
            } else {
                var num = parseInt($actions.find('div.num[data-action="dislike"] > *').text());
                $actions.find('div.num[data-action="dislike"] > *').text(num - 1).attr('data-num', num - 1);
            }
        }
        return false;
    }, this.deleteNotification = function(event, element, idNoti) {
        if ($(element).hasClass('done') == false) {
            $(element).addClass('done');
            var number = $(element).closest('#topbarIcon').attr('data-notis') - 1;
            $(element).closest('#topbarIcon').attr('data-notis', number).find('.notificationNumber').text(number);
            $(element).closest('.noticontainer').slideUp('fast');
            $.ajax({
                url: BASEURL + '/site/dummy?noti=' + idNoti,
                type: 'POST'
            });
            if ($('.noticontainer:visible').size() < 10 && $('#notifications .loadingBar').size() > 0) {
                $('#notifications .loadingBar').click();
            }
            var url = $(element).attr('href');
            if (typeof url != "undefined") {
                if (this._newWindow(event)) {
                    return true;
                }
                return this.loadByUrl(url);
            }
        }
    }, this.showSeason = function(element, numseason) {
        var $container = $(element).closest('.profileSection');
        $container.find('.seasons > .activated').removeClass('activated');
        $(element).addClass('activated');
        $container.find('.episodes').hide();
        $container.find('#episodes-' + numseason).fadeIn();
        return false;
    }, this.showLinks = function(element) {
        var $container = $(element).closest('.box');
        $.scrollTo($container.find('.mediaLinks'), 700);
        $target = $container.find('.mediaLinks');
        $target.find('.episodes').css('box-shadow', '0px 0px 40px 0px #1D5C7A');
        setTimeout(function() {
            $target.find('.episodes').css('box-shadow', 'none');
        }, 900);
        return false;
    }, this.changeFriendship = function(element, action, friendid) {
        this.setLoading(true);
        var that = this;
        $.ajax({
            url: BASEURL + '/friends/friendship',
            type: 'POST',
            data: {
                action: action,
                friendid: friendid
            },
            success: function(data) {
                that.setLoading(false);
                if ($(element).closest('.noticontainer').size() > 0) {
                    var number = $('.noticontainer:visible').size() - 1;
                    $(element).closest('#topbarIcon').attr('data-notis', number);
                    $(element).closest('#topbarIcon').find('.notificationNumber').text(number);
                    $(element).closest('.noticontainer').slideUp('fast');
                    $.ajax({
                        url: BASEURL + '/site/dummy?noti=' + $(element).closest('.noticontainer').attr('data-id'),
                        type: 'POST'
                    });
                } else {
                    $(element).parent().html(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.setLoading(false);
            }
        });
        return false;
    }, this.submitConfig = function() {
        var that = this;
        var selector = '#config';
        var action = BASEURL + '/manage/saveconfig';
        var values = '';
        var inputs = $(selector + ' input,' + selector + ' textarea,' + selector + ' select');
        $.each(inputs, function(index, input) {
            input = $(input);
            if (input.attr('type') != 'submit') {
                if (input.attr('type') == 'checkbox') {
                    if (input.is(':checked')) {
                        values += input.attr('name') + '=1&';
                    } else {
                        values += input.attr('name') + '=0&';
                    }
                } else {
                    values += input.attr('name') + '=' + controller.urlencode(input.val()) + '&';
                }
            }
        });
        $.ajax({
            url: action,
            type: 'POST',
            data: values,
            success: function(data) {
                that.showMessage('Guardado!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.showError(jqXHR.responseText);
            }
        });
    }, this.setConfig = function(element) {
        var $container = $(element).closest('.configElement')
        var value = $(element).val();
        if ($container.hasClass('configPassword')) {
            value = '****';
        }
        if ($(element).closest('.configSelectors').size() > 0) {
            value = (value == 1) ? 'Todos' : 'Amigos';
        }
        $container.find('.configContent').text(value);
        $container.find('.containerInput').hide();
        $container.find('.configContent').show();
    }, this.editConfig = function(element) {
        var $container = $(element).closest('.configElement')
        var value = $container.find('.configContent').text();
        var inputname = $container.attr('data-what');
        if ($container.hasClass('configPassword')) {
            value = '';
        }
        if ($(element).closest('.configInfo').size() > 0) {
            if ($container.find('.containerInput').size() == 0) {
                $container.append('<input name="' + inputname + '" class="containerInput" value="' + value + '" onblur="controller.setConfig(this)"/>');
            }
        }
        if ($(element).closest('.configSelectors').size() > 0) {
            if ($container.find('.containerInput').size() == 0) {
                $container.append('<select name="' + inputname + '" class="containerInput" value="' + value + '" onblur="controller.setConfig(this)"><option value="1">Todos</option><option value="0">Amigos</option></select>');
            }
        }
        $container.find('.containerInput').show();
        $container.find('.configContent').hide();
    }, this.setSthAndReload = function(element) {
        var value = $(element).val();
        this.setLoading(true);
        $.ajax({
            url: BASEURL + '/manage/setsth',
            type: 'POST',
            data: {
                value: value
            },
            success: function(data) {
                window.location = window.location;
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        });
    }, this.updateSelectedLinks = function(init) {
        var that = this;
        var state = History.getState();
        var url = state.hash;
        if (init == true) {
            url = this.utf8decode(url);
        }
        url = url.substr(BASEURL.length);
        $('a.defaultLink.active').removeClass('active');
        $('a.defaultLink[href="' + url + '"]').addClass('active');
        $('a.mediaFilterLink[href="' + url + '"]').each(function(index, element) {
            $(element).closest('.section').find('.mediaFilterLink').removeClass('active');
            $(element).addClass('active');
        });
    }, this.initHistory = function() {
        this.initHash = window.location.hash.replace(/#/g, "");
        var state = History.getState();
        var url = this.utf8decode(state.hash);
        this.lastUrl = url;
        this.screenIds[url] = $('.screen:first').attr('id');
        this.screenTitles[url] = document.title;
        var that = this;
        History.Adapter.bind(window, 'statechange', function() {
            var state = History.getState();
            var url = state.hash;
            for (var i = 0; i < controller.forbiddenUrls.length; i++) {
                if (controller.forbiddenUrls[i] == url) {
                    return false;
                }
            }
            url = url.replace(new RegExp("Ã±", "g"), 'ñ');
            url = url.replace(new RegExp("Ã", "g"), 'Ñ');
            gaq.push(['_trackPageview', url]);
            that.navigate(url);
        });
        if (this.initHash != '') {
            if (this.initHash.charAt(0) == '/') {
                History.pushState({}, null, this.initHash);
            }
        }
    }, this.loadByUrl = function(url) {
        url = BASEURL + url;
        if (url.charAt(0) == '/') {
            if (Modernizr.history) {
                History.pushState({}, null, url);
                return false;
            }
        }
        return true;
    }, this.showAjaxError = function(jqXHR, textStatus, errorThrown, redirect) {
        if (errorThrown == 'Unauthorized') {
            this.showError(TRANS('disconnected.login', 'Tu sesión ha finalizado. Por favor, *** de nuevo', ['<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            this.stop();
            if (redirect != false) {
                window.location.reload();
            }
        } else {
            this.showError();
        }
    }, this.handle = function(data, handler, url, keep, restore) {
        data.replace(new RegExp("\\n", "g"), "");
        if (data == 'item not found') {
            this.setLoading(false);
            this.showError();
            return false;
        }
        data = this.parseJSON(data);
        if (data == false) {
            return false;
        }
        if (typeof handler != "undefined")
            var ret = handler(data);
        else
            var ret = true;
        if (ret == true) {
            if (typeof data.session != "undefined") {
                SESS = data.session;
            }
            if (typeof keep == "undefined" || keep == 0) {
                $('#' + this.screenIds[this.lastUrl]).remove();
            } else {
                $('#' + this.screenIds[this.lastUrl]).hide();
            }
            $('#mainholder').prepend(data.html);
            $('#' + data.screenId).show();
            var that = this;
            $('#mainholder').append('<script type="text/javascript">' + '/*<![CDATA[*/' +
                data.ready + '/*]]>*/' + '</script>');
            this.newContent();
            if (data.error !== '') {
                this.showError(data.error);
            }
            if (data.title !== '') {
                document.title = data.title;
            }
            if ((typeof url != "undefined" && typeof restore != "undefined" || restore == 1) || typeof this.screenIds[url] != "undefined") {
                this.screenIds[url] = data.screenId;
                this.screenTitles[url] = data.title;
            }
            $(window).scrollTop(0);
        }
    }, this.navigate = function(url) {
        var request = url;
        this.lastRequest = request;
        var that = this;
        var handler = function(data) {
            if (request == that.lastRequest) {
                that.setLoading(false);
                return true;
            }
            return false;
        }
        var end = function() {
            that.updateSelectedLinks();
            that.lastUrl = url;
        }
        $('#tiptip_holder').hide();
        var keep = 0;
        if (this.lastUrl == BASEURL + '/series' || this.lastUrl == BASEURL + '/pelis') {
            keep = 1;
        }
        var restore = (url == BASEURL + '/series' || url == BASEURL + '/pelis');
        if (restore && typeof this.screenIds[url] != "undefined") {
            if (typeof keep == "undefined" || keep == 0) {
                $('#' + this.screenIds[this.lastUrl]).remove();
            } else {
                $('#' + this.screenIds[this.lastUrl]).hide();
            }
            $('#' + this.screenIds[url]).show();
            document.title = this.screenTitles[url];
            that.setLoading(false);
            end();
        } else {
            this.setLoading(true);
            $.ajax({
                url: url,
                success: function(data) {
                    that.handle(data, handler, url, keep, restore);
                    end();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    that.setLoading(false);
                    if (jqXHR.readyState == 4) {
                        that.showAjaxError(jqXHR, textStatus, errorThrown, false);
                    }
                }
            });
        }
    }, this.windowResized = function() {
        this.checkLoaders();
    }, this.resizePendingPictures = function() {
        var resize = this.resizePendingPicture;
        var images = $('.centeredPic');
        images.each(function(index, element) {
            $(element).hide();
            resize(element);
            $(element).load(function() {
                resize(this);
            });
        });
    }, this.resizePendingPicture = function(image) {
        var $image = $(image);
        $image.parent().css('overflow', 'hidden').addClass('mantainRatio');
        var $dummies = $image.parent().find('.dummy');
        if ($dummies.size() == 0 && !$image.hasClass('centeredPicFalse')) {
            var ratio = $image.attr('data-ratio');
            if (typeof ratio != 'undefined') {
                ratio = 1 / ratio;
                $image.parent().css('position', 'relative').prepend('<div style="padding-top: ' + (ratio * 100) + '%" class="dummy"></div>');
                $image.css({
                    position: 'absolute',
                    top: 0,
                    left: 0
                });
            }
        }
        if (!image.complete || (typeof image.naturalWidth != "undefined" && image.naturalWidth == 0) || (h = image.height) == 0 || (w = image.width) == 0) {
            $image.load(function() {
                controller.resizePendingPicture(this);
            });
            return;
        }
        if (!$image.hasClass('centeredPic')) {
            return;
        }
        $image.removeClass('centeredPic');
        if (!$image.hasClass('centeredPicFalse')) {
            if (h / w < $image.parent().height() / $image.parent().width()) {
                var anchuraimgpx = $image.parent().height() / h * w;
                var anchuraimg = anchuraimgpx / $image.parent().width() * 100;
                anchuraimg = (Math.round(anchuraimg + 1)) + '%';
                var margintop = 0;
                var marginleft = -1 * (anchuraimgpx - $image.parent().width()) / 2 / $image.parent().width() * 100 + '%';
            } else {
                var alturaimgpx = $image.parent().width() / w * h;
                var anchuraimg = "100%";
                var margintop = -1 * (alturaimgpx - $image.parent().height()) / 2 / $image.parent().width() * 100 + '%';
                var marginleft = 0;
            }
            if (typeof ratio != 'undefined') {
                $image.parent().height('auto');
            }
            $image.css({
                'height': 'auto',
                'width': anchuraimg,
                'margin-top': margintop,
                'margin-bottom': margintop,
                'margin-left': marginleft
            });
        }
        $image.fadeIn('fast');
        $image.closest('.mantainRatio').find('.faderBottom').show();
        if ($image.next().hasClass('loader')) {
            $image.next().remove();
        }
    }, this.setLoading = function(show) {
        if (show) {
            this.loading = true;
            $('#loaderContainerCommon').fadeIn(50);
        } else {
            this.loading = false;
            $('#loaderContainerCommon').fadeOut(50);
        }
    }, this.facebookConnect = function(element) {
        var redirect = '/';
        if (typeof element != "undefined") {
            if (typeof $(element).attr('data-redirect') != "undefined") {
                redirect = $(element).attr('data-redirect');
            }
        }
        window.location = 'https://www.facebook.com/dialog/oauth?client_id=494757303936272&scope=publish_actions,offline_access,email,user_birthday,user_location&redirect_uri=http://www.pordede.com' + redirect;
        return false;
    }, this.openAporte = function(element, e) {
        $form = $(element).closest('form');
        $form.find('.sessid').remove();
        $form.append('<input class="sessid" type="hidden" name="_s" value="' + SESS + '">');
        $form.submit();
    }, this.openPopup = function(element, e) {
        if ($(element).parent().hasClass('num') && $(element).text() == '0') {
            return false;
        }
        if ($(element).parent().hasClass('num') && $(element).closest('.actionsAporte').hasClass('actionsAporte')) {}
        if ($(element).attr('data-confirm')) {
            if (!confirm($(element).attr('data-confirm'))) {
                $(element).removeClass('active');
                return false;
            }
        }
        if (this._newWindow(e)) {
            return true;
        }
        if ($(element).hasClass('onlyLogin') && !LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return false;
        }
        var url = $(element).attr('href');
        url = BASEURL + url;
        var callback = function() {
            if (!$(element).hasClass('keepActive')) {
                $(element).removeClass('active');
            }
        };
        var openPopup = function() {
            $.prompt('', {
                ajax: url,
                callback: callback,
                error: callback
            });
        };
        if ($('.jqibox').size() > 0) {
            $('.jqibox').fadeOut('fast', function() {
                $(this).remove();
                openPopup();
            });
        } else {
            openPopup();
        }
        return false;
    }, this.showPopup = function(url, options) {
        url = BASEURL + url;
        if ($('.jqibox').size() > 0) {
            $('.jqibox').fadeOut('fast', function() {
                $(this).remove();
                $.prompt('', {
                    ajax: url
                });
            });
        } else {
            $.prompt('', {
                ajax: url
            });
        }
        return false;
    }, this.hidePopup = function() {
        $('#tiptip_holder').hide();
        if (typeof $.prompt.jqib != "undefined") {
            $.prompt.close();
        }
    }, this.showMessage = function(text) {
        if (text.indexOf('<h2>') == -1 && text.indexOf('<h1>') == -1) {
            text = '<h2>' + text + '</h2>';
        }
        if ($('.jqibox').size() > 0) {
            $('.jqibox').fadeOut('fast', function() {
                $(this).remove();
                $.prompt(text, {
                    persistent: false
                });
            });
        } else {
            $.prompt(text, {
                persistent: false
            });
        }
        return false;
    }, this.showError = function(text) {
        if (text == undefined) {
            text = TRANS('error.general', 'Ha habido un error');
        }
        text = '<h2 class="flash-error flash">' + text + '</h2>';
        if ($('.jqibox').size() > 0) {
            $('.jqibox').fadeOut('fast', function() {
                $(this).remove();
                $.prompt(text, {
                    classes: 'jqierror',
                    persistent: false
                });
            });
        } else {
            $.prompt(text, {
                classes: 'jqierror',
                persistent: false
            });
        }
        return false;
    }, this.updateReporte = function(element) {
        var ref_id = $(element).attr('data-refid');
        var ref_model = $(element).attr('data-refmodel');
        var value = $(element).val();
        var that = this;
        $(element).closest('.reporteItem').slideUp();
        $.ajax({
            url: BASEURL + '/admin/solvereporte',
            type: 'POST',
            data: {
                ref_model: ref_model,
                ref_id: ref_id,
                value: value
            },
            success: function(data) {},
            error: function(jqXHR, textStatus, errorThrown) {
                that.showError();
            }
        });
    }, this.userStatus = function(model, ref_id, status) {
        $('.itemProfile[data-model="' + model + '"][data-id="' + ref_id + '"] .dropdownContainer[data-action="status"]').each(function(index, element) {
            if (status == 0) {
                var html = $(element).find('> span').attr('data-default');
            } else {
                var html = $(element).find('li[data-value="' + status + '"]').html();
            }
            $(element).find('> span').html(html);
        });
        $('.ddItemContainer[data-model="' + model + '"][data-id="' + ref_id + '"] .dropdownContainer[data-action="status"]').each(function(index, element) {
            switch (status) {
                case '0':
                    var icon = 'caret-down';
                    break;
                case '1':
                    var icon = 'check';
                    break;
                case '2':
                    var icon = 'eye-open';
                    break;
                case '3':
                    var icon = 'eye-close';
                    break;
                case '4':
                    var icon = 'heart';
                    break;
            }
            $(element).find('> span i').removeClass('icon-caret-down').removeClass('icon-check').removeClass('icon-eye-open').removeClass('icon-eye-close').removeClass('icon-heart');
            $(element).find('> span i').addClass('icon-' + icon);
        });
    }, this.setStatus = function($element, event) {
        if (!LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return;
        }
        var $container = $element.closest('.modelContainer');
        var action = 'status';
        var model = $container.attr('data-model');
        var id = $container.attr('data-id');
        var value = $(event.currentTarget).attr('data-value');
        var that = this;
        $.ajax({
            url: BASEURL + '/ajax/mediaaction',
            type: 'POST',
            data: {
                model: model,
                id: id,
                action: action,
                value: value
            },
            success: function(data) {},
            error: function(jqXHR, textStatus, errorThrown) {
                that.showError();
            }
        });
        this.userStatus(model, id, value);
        return false;
    }, this.resizeIframe = function(obj) {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }, this.newContent = function(element) {
        var that = this;
        if (typeof element == "undefined") {}
        $('.viewmore:not(.done)').addClass('done').each(function(index, element) {
            if (Math.ceil($(element).prev().height()) < parseInt($(element).prev().css('max-height'))) {
                $(element).hide();
            }
        });
        $('.dropdownContainer:not(.done)').addClass('done').each(function(index, element) {
            var dd = new DropDown($(this));
        });
        $('.containerBasic:not(.done)').addClass('done').wrapInner('<div/>');
        this.resizePendingPictures();
        $('.filterMedia').each(function(index, filter) {
            $(filter).closest('form').submit(function() {
                return false;
            });
        });
        $('form:not(.done) input[type=password],form:not(.done) input[type=text]').keypress(function(e) {
            if (e.keyCode == '13') {
                $(e.target).closest('form').submit();
                return false;
            }
            return true;
        });
        $('form:not(.done)').addClass('done').submit(function() {
            that.submitForm($(this));
            return false;
        });
        $('.tiptip:not(.done)').addClass('done').each(function(index, element) {
            var delay = 30;
            if ($(element).attr('data-delay') != null) {
                delay = $(element).attr('data-delay');
            }
            $(element).tipTip({
                defaultPosition: "right",
                delay: delay
            });
        });
        this.updateSelectedLinks(true);
        $("select:not(.chost)").addClass("chost").chosen().each(function(index, element) {
            if ($(element).find('option:first').hasClass('placeholder')) {
                $(element).next().find('.chzn-results li:first').remove();
            }
        });
        this.windowResized();
        $('.ad').not('.done').each(function(i, element) {
            return;
            $('.ad').addClass('done');
            setTimeout(function() {
                if ($(element).not(':visible')) {
                    var content = $(element).find('div iframe').contents().find("body").html();
                    if (typeof content != "undefined" && content != '') {
                        $(element).fadeIn();
                    }
                }
            }, 200);
            setTimeout(function() {
                if ($(element).not(':visible')) {
                    var content = $(element).find('div iframe').contents().find("body").html();
                    if (typeof content != "undefined" && content != '') {
                        $(element).fadeIn();
                    }
                }
            }, 500);
            setTimeout(function() {
                if ($(element).not(':visible')) {
                    var content = $(element).find('div iframe').contents().find("body").html();
                    if (typeof content != "undefined" && content != '') {
                        $(element).fadeIn();
                    }
                }
            }, 1000);
            setTimeout(function() {
                if ($(element).not(':visible')) {
                    var content = $(element).find('div iframe').contents().find("body").html();
                    if (typeof content != "undefined" && content != '') {
                        $(element).fadeIn();
                    }
                }
            }, 2000);
            setTimeout(function() {
                if ($(element).not(':visible')) {
                    var content = $(element).find('div iframe').contents().find("body").html();
                    if (typeof content != "undefined" && content != '') {
                        $(element).fadeIn();
                    }
                }
            }, 3000);
        });
    }, this.submitPopup = function() {
        $('#jqi .jqimessage .popupLoader').show();
        $('#jqi .jqibuttons button').attr('disabled', 'disabled');
        $('#jqi form').submit();
        $('#jqi .jqimessage .popupLoader').next().remove();
    }, this.setLang = function(lang) {
        var that = this;
        that.setLoading(true);
        $.ajax({
            url: BASEURL + '/site/setlang/lang/' + lang,
            type: 'GET',
            success: function(data) {
                window.location = window.location;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.setLoading(false);
                that.showAjaxError(jqXHR, textStatus, errorThrown);
            }
        });
    }, this.parseJSON = function(json) {
        if (json == null) {
            this.showError();
            return false;
        }
        try {
            json = $.parseJSON(json);
        } catch (e) {
            this.showError();
            return false;
        }
        return json;
    }, this.updateMediaFilters = function(e) {
        var $filters = $(e).closest('.mediaFilters');
        var $form = $filters.find('.mediaSearch');
        var url = $form.attr('action');
        var text = $filters.find('.mediaSearch input').val().replace(/#/g, '').replace(/ /g, '-');
        var defaultYears = $filters.find('.sliderContainer input').attr('data-default');
        var maxYear = $filters.find('.sliderContainer input').attr('data-maxyear');
        var values = [];
        if (text.trim() != '') {
            values.push('/query/' + controller.urlencode(text.trim()));
            if (text != this.lastText) {
                $('.section.showlist a').removeClass('active');
                $('.section.showlist a[data-value="all"]').addClass('active');
                $filters.find('.sliderContainer input').slider('value', '1950', maxYear)
                this.lastText = text;
            }
        }
        var years = $filters.find('.sliderContainer input').val().replace(/NaN/g, maxYear);
        var searchon = $filters.find('.mediaFilter[type="radio"]:checked').val();
        var language = $filters.find('.language select').val();
        var sublanguage = $filters.find('.sublanguage select').val();
        if (years != defaultYears) {
            values.push('/years/' + controller.urlencode(years));
        }
        if (language != '0') {
            values.push('/language/' + language);
        }
        if (sublanguage != '0') {
            values.push('/sublanguage/' + sublanguage);
        }
        if (searchon != 'any') {
            values.push('/on/' + controller.urlencode(searchon));
        }
        var filtersConfig = ['genre', 'quality', 'hosts', 'onlylinks', 'showlist'];
        for (var i = 0; i < filtersConfig.length; i++) {
            var f = filtersConfig[i];
            var value = $filters.find('.section.' + f + ' .mediaFilterLink.active').attr('data-value');
            if (value != "0" && value != 'undefined') {
                values.push('/' + f + '/' + controller.urlencode(value));
            }
        }
        url = BASEURL + url + values.join('');
        var that = this;
        that.setLoading(true);
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                that.setLoading(false);
                var json = that.parseJSON(data);
                if (json == false) {
                    return false;
                }
                $filters.find('.listContainer').html(json.html);
                $filters.find('.facets').html(json.facets);
                if (json.ready != "") {
                    $('#mainholder').append('<script type="text/javascript">' + '/*<![CDATA[*/' +
                        json.ready + '/*]]>*/' + '</script>');
                }
                controller.newContent();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.setLoading(false);
                that.showAjaxError(jqXHR, textStatus, errorThrown);
            }
        });
        return false;
    }, this.updateFilters = function(element) {
        var $container = $(element).closest('.filterContainer');
        var values = [];
        var inputs = $container.find('.filter');
        $.each(inputs, function(index, input) {
            input = $(input);
            if (input.attr('type') != 'submit') {
                if (input.attr('type') == 'checkbox') {
                    if (input.is(':checked')) {
                        values.push(input.attr('name') + '=1');
                    } else {
                        values.push(input.attr('name') + '=0');
                    }
                } else if (input.attr('type') == 'radio' && input.val() != '0') {
                    if (input.is(':checked')) {
                        values.push(input.attr('name') + '=' + controller.urlencode(input.val()));
                    }
                } else {
                    if (input.val() != 'null' && input.val() != null && input.val() != '') {
                        values.push(input.attr('name') + '=' + controller.urlencode(input.val()).replace('null,', '').replace('null', ''));
                    }
                }
            }
        });
        if ($container.attr('data-update') == 'always') {
            values.push('random=' + Math.random());
        }
        var url = $container.attr('data-filter') + '?' + values.join('&');
        if (this.loadByUrl(url)) {
            window.location = url;
        }
    }, this.submitForm = function($form) {
        if ($form.hasClass('onlyLogin') && !LOGGEDIN) {
            controller.showMessage(TRANS('pleaseregister', 'Por favor, *** o ***.', ['<a href="#" onclick="return controller.register();">' + TRANS('please.register', 'regístrate') + '</a>', '<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return false;
        }
        if ($form.attr('data-confirm')) {
            if (!confirm($form.attr('data-confirm'))) {
                return false;
            }
        }
        if ($form.closest('.chooser').size() > 0) {
            if ($form.find('input[name="ref_id"]').size() == 0) {
                console.log('choosen without choice');
                return false;
            }
        }
        if ($form.find('.noEmpty').size() > 0) {
            if ($form.find('.noEmpty').val() == "") {
                console.log('noempty input is empty');
                return;
            }
        }
        var that = this;
        if ($form.attr('id') == '' || typeof $form.attr('id') == "undefined") {
            $form.attr('id', 'form' + Math.floor(Math.random() * 1000000));
        }
        var selector = '#' + $form.attr('id');
        var action = BASEURL + $form.attr('action');
        var values = [];
        var inputs = $(selector + ' input,' + selector + ' textarea,' + selector + ' select');
        $.each(inputs, function(index, input) {
            input = $(input);
            if (input.attr('type') != 'submit' && typeof input.attr('name') != "undefined") {
                if (input.attr('type') == 'checkbox') {
                    if (input.is(':checked')) {
                        values.push(input.attr('name') + '=1');
                    } else {
                        values.push(input.attr('name') + '=0');
                    }
                } else if (input.attr('type') == 'radio') {
                    if (input.is(':checked')) {
                        values.push(input.attr('name') + '=' + controller.urlencode(input.val()));
                    }
                } else {
                    values.push(input.attr('name') + '=' + controller.urlencode(input.val()));
                }
            }
        });
        if ($form.hasClass('popupanswer')) {
            values.push('popup=1');
        }
        values.push('sesscheck=' + SESS);
        values = values.join('&');
        if (typeof $.prompt != 'undefined') {}
        $form.find('button, input[type="submit"]').attr('disabled', '1');
        if ($('.jqimessage').find('.popupLoader').size() == 0) {
            $('.jqimessage').append('<div class="popupLoader">' + '<img src="' + BASEURL + '/images/loading.gif">' + '</div>');
        }
        if (!$form.hasClass('noLoading')) {
            $('.jqimessage').find('.popupLoader').show();
            $('.jqimessage').find('.realContent').hide();
        }
        $.ajax({
            url: action,
            type: 'POST',
            data: values,
            success: function(data) {
                if (data == 'CLOSE_PROMPT') {
                    that.hidePopup();
                    return;
                }
                var json = that.handleAjax(data);
                if (json == false) {
                    that.showError();
                    return false;
                }
                if ($form.closest('.subcommentnew').size() == 1) {
                    $(json.partial).insertBefore($form.closest('.subcommentnew')).hide().slideDown();
                    $form.find('input[type="text"]').val('');
                    that.newContent($form.closest('.subcomments'));
                }
                if ($form.closest('.wallnew').size() == 1) {
                    $(json.partial).insertAfter($form.closest('.wallnew')).hide().slideDown();
                    $form.find('input[type="text"]').val('');
                    that.newContent($form.closest('.wallnew'));
                }
                $form.find('button, input[type="submit"]').attr('disabled', false);
                if (($form.closest('#jqi').size() == 1 && !$form.hasClass('noHandlePopup')) || $form.hasClass('popupanswer')) {
                    that.handlePopup(data);
                } else if ($form.hasClass('htmlanswer')) {
                    that.handle(data, function() {
                        return true;
                    }, action);
                }
                if (typeof json.error != "undefined" && json.error != '') {
                    that.showError(json.error);
                }
                if (typeof json.notice != "undefined" && json.notice != '') {
                    that.showMessage('<div class="flash-notice">' + json.notice + '</div>');
                }
                that.newContent();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $form.find('button, input[type="submit"]').attr('disabled', false);
                that.showAjaxError(jqXHR, textStatus, errorThrown);
            }
        });
        return false;
    }, this.handleAjax = function(data) {
        if (data == '') {
            return false;
        }
        if (data == 'RELOAD') {
            window.location = window.location;
            return false;
        } else if (data == 'NOT_LOGGED') {
            controller.showError(TRANS('disconnected.login', 'Tu sesión ha finalizado. Por favor, *** de nuevo', ['<a href="#" onclick="return controller.login();">' + TRANS('please.login', 'entra') + '</a>']));
            return false;
        } else if (data == 'CLOSE_PROMPT') {
            this.hidePopup();
            return false;
        } else {
            data = this.parseJSON(data);
            if (data == false) {
                return false;
            }
            return data;
        }
    }, this.handlePopup = function(data) {
        data = this.parseJSON(data);
        if (data == false) {
            return false;
        }
        if (typeof data.session != "undefined") {
            SESS = data.session;
        }
        if (typeof data.html != "undefined") {
            if ($('#jqi .jqimessage:visible').size() == 0 && data.html != '') {
                controller.showMessage('<div class="realContent">' + data.html + '</div>');
            } else {
                $('#jqi .jqimessage .popupLoader').hide();
                $('#jqi .jqimessage .realContent').remove();
                $('#jqi .jqimessage .popupLoader').after('<div class="realContent">' + data.html + '</div>');
            }
            $('#jqi .jqibuttons').show();
            $('#jqi .jqibuttons button').attr('disabled', false);
        }
        if (typeof data.submit != "undefined") {
            if ($('#jqi .jqibuttons button[data-text="' + data.submit + '"]').size() == 0) {
                if (typeof data.cancel == "undefined") {
                    data.cancel = TRANS('close', 'Cerrar');
                }
                $('#jqi .jqibuttons button').addClass('white').text(data.cancel);
                if (data.submit != '') {
                    $('#jqi .jqibuttons button').after('<button data-text="' + data.submit + '" class="popupFormSubmit" onclick="controller.submitPopup()">' + data.submit + '</button>');
                } else {
                    $('#jqi .jqibuttons button').not(':first').remove();
                }
            }
        }
        this.newContent();
        if (data.ready != "") {
            $('#mainholder').append('<script type="text/javascript">' + '/*<![CDATA[*/' +
                data.ready + '/*]]>*/' + '</script>');
        }
        return data;
    }, this._newWindow = function(e) {
        if (e == undefined) {
            return false;
        }
        var meta = false;
        if (typeof e.metaKey != "undefined") {
            meta = e.metaKey;
        }
        if (e.ctrlKey || e.button == 1 || e.shiftKey || meta) {
            e.stopPropagation();
            return true;
        }
        return false;
    }, this.login = function() {
        return this.showPopup('/site/login');
    }, this.register = function(code) {
        return this.showPopup('/site/register/code/' + code);
    }, this.urlencode = function(str) {
        return encodeURIComponent(str);
    }, this.checkEpisode = function(e) {
        if ($('.navigationLinks .episodeActions .action').hasClass('active') == false) {
            $('.navigationLinks .episodeActions .action').click();
        }
    }, this.checkSeason = function(e) {
        var num = $(e).closest('.checkSeason').attr('data-num');
        var that = this;
        if (confirm('¿Quieres marcar la temporada ' + num + ' como vista?')) {
            var id = $(e).closest('.checkSeason').attr('data-id');
            $(e).closest('.episodes').find('.episodeActions .action').addClass('active');
            $.ajax({
                url: BASEURL + '/media/checkseason',
                type: 'POST',
                data: {
                    id: id
                },
                success: function(data) {},
                error: function(jqXHR, textStatus, errorThrown) {
                    that.showError();
                }
            });
        }
    }, this.showPopupTab = function(e) {
        $(e).closest('.boxtabs').find('.active').removeClass('active');
        $(e).addClass('active');
        $(e).closest('.jqimessage').find('.tabContent').hide();
        $('#' + $(e).attr('data-toshow')).show();
        return false;
    };
    this.showSubcomment = function(id) {
        $('.subcomment[data-id="' + id + '"]').removeClass('deleted');
    }, this.rearrangeLinks = function() {
        $('.linksContainer:not(.done)').each(function(index, element) {
            if (LOGGEDIN) {
                $container = $(element);
                $container.find('li').each(function(index, element) {
                    $link = $(element).parent();
                    if (HOSTS.shiftRightUnsigned($link.attr('data-host')).getLowBits() & 1) {
                        $container.find('.favhosts ul').append($link);
                    } else {
                        $container.find('.otherhosts ul').append($link);
                    }
                });
                $container.find('.favhosts ul li').each(function(index, element) {
                    $link = $(element).parent();
                    if ($link.attr('data-quality') == '0') {
                        $container.find('.favhosts ul').append($link);
                    }
                });
                if ($container.find('.otherhosts li').size() > 0) {
                    $container.find('.otherhosts .flash-notice').hide();
                }
                if ($container.find('.favhosts li').size() > 0) {
                    $container.find('.favhosts .flash-notice').hide();
                }
            } else {
                $container.find('.otherhosts').hide();
                $container.find('.favhosts').hide();
            }
            $container.addClass('done');
        });
    }, this.utf8decode = function(str) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < str.length) {
            c = str.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = str.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = str.charCodeAt(i + 1);
                c3 = str.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }, this.addMirror = function(element) {
        $(element).before('<label for="Aporte_firsturls" class="required multilink vis">Cada parte en una línea</label> \
            <div class="inputtext-fancy multilink vis"> \
            <textarea name="Aporte[firsturls][]" id="Aporte_firsturls" type="text"></textarea> \
            </div>');
        return false;
    }, this.noBigCover = function(element) {
        $(element).removeClass('.centeredPic');
        $(element).parent().find('.dummy').remove();
        $(element).parent().css('position', 'relative').prepend('<div style="padding-top: 23%" class="dummy"></div>');
        $(element).css({
            position: 'absolute',
            top: 0,
            left: 0
        });
        $container = $(element).closest('.profileCover');
        $container.find('.fader').hide();
    }
    this.unpush = function(element) {
        if ($('#page').hasClass('pushed')) {
            var $main = $('#page.pushed .main');
            $('#page').removeClass('pushed');
            var px = 'translate3d(0px, 0, 0)';
            $('#page').css({
                '-webkit-transform': px,
                '-moz-transform': px,
                '-ms-transform': px,
                '-o-transform': px,
                'transform': px
            });
            $main.css({
                'width': '74.333%'
            });
            $main.closest('.modelContainer').find('.profileCover').css({
                'max-width': '10000px',
                'margin-bottom': '0px'
            });
            $('.linksBar').fadeOut();
        }
    }, this.isMobile = function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }, this.isIOS = function() {
        var check = false;
        (function(a) {
            if (/(ip(hone|od|ad))/i.test(a)) {
                check = true
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }, this.getScreenWidth = function() {
        var screenWidth = controller.isIOS() ? (window.orientation == 0 ? screen.width : screen.height) : screen.width;
        if (controller.isIOS()) {}
        return Math.floor(screenWidth);
    }, this.viewportChangeable = true, this.setViewport = function(content_width) {
        if (this.viewportChangeable == false) {
            return false;
        }
        var screenWidth = controller.getScreenWidth();
        var viewport_scale = screenWidth / content_width;
        console.log('setting viewport to ' + content_width + 'px, screen is ' + screenWidth + 'px so scale ' + viewport_scale);
        $('meta[name=viewport]').attr('content', 'width=' + content_width + ',' + 'minimum-scale=' + viewport_scale + ', initial-scale=' + viewport_scale + ', maximum-scale=' + viewport_scale + ', user-scalable=yes');
        setTimeout(function() {
            $('meta[name=viewport]').attr('content', 'width=' + content_width + ',' + 'minimum-scale=' + viewport_scale + ', initial-scale=' + viewport_scale + ', maximum-scale=2, user-scalable=yes');
        }, 300);
        controller.currentScale = viewport_scale;
        controller.lastOrientationWidth = screenWidth;
    }, this.bindOrientation = function() {
        $(window).bind('orientationchange', function(event) {
            var update = function() {
                var screenWidth = controller.getScreenWidth();
                var newWidth = Math.min(screenWidth, 1300);
                newWidth = Math.max(newWidth, 600);
                controller.setViewport(newWidth);
            };
            if (controller.getScreenWidth() != controller.lastOrientationWidth || controller.isIOS()) {
                console.log('orientation change detected: ' + controller.lastOrientationWidth + ' -> ' + controller.getScreenWidth());
                update();
            } else {
                console.log('orientation not updated: retrying in 0.2s...');
                setTimeout(function() {
                    $(window).trigger('orientationchange');
                }, 200);
            }
        });
        if (this.isMobile()) {
            $(window).trigger('orientationchange');
        }
    }, this.push = function(element) {
        var $main = $(element).closest('.main');
        if (!$('#page').hasClass('pushed')) {
            $('#page').addClass('pushed');
            var left = $main.offset().left - 10;
            var px = 'translate3d(-' + left + 'px, 0, 0)';
            $('#page').css({
                '-webkit-transform': px,
                '-moz-transform': px,
                '-ms-transform': px,
                '-o-transform': px,
                'transform': px
            });
            if ($main.width() > 700) {
                $main.css({
                    'width': '700px'
                });
            }
            $main.closest('.modelContainer').find('.profileCover').css({
                'max-width': '1000px',
                'margin-bottom': '58px'
            });
        }
        $('.linksBar').fadeOut();
        var r = 'b' + Math.floor(Math.random() * 1000000);
        var lw = $main.width();
        if (lw > 700) {
            lw = 700;
        }
        var w = $(window).width() - lw - 80;
        var top = ($(element).closest('.modelContainer').offset().top);
        $('#stickyfooterWrapper').after('<div style="top: ' + top + 'px;width: ' + w + 'px" id="' + r + '" class="linksBar box">' + '<h2>Enlaces</h2>' + '<div class="loadingBar done"><img src="' + BASEURL + '/images/loading.gif"></div>' + '</div>');
        $('#' + r).animate({
            left: (lw + 25) + 'px'
        }, 750);
        var url = $(element).attr('href');
        var that = this;
        $.ajax({
            url: BASEURL + url,
            data: {
                popup: 1
            },
            success: function(data) {
                data = that.parseJSON(data);
                if (data == false) {
                    return false;
                }
                $('#' + r).html(data.html);
            },
            error: function() {
                controller.showError();
            }
        });
        return false;
    }
};
Array.prototype.remove = function(values) {
    if (!$.isArray(values)) {
        values = [values];
    }
    for (var j = 0; j < values.length; j++) {
        var value = values[j];
        var idx = this.indexOf(value.toString());
        if (idx != -1) {
            this.splice(idx, 1);
        }
    }
};
Array.prototype.in_array = function() {
    for (var j in this) {
        if (this[j] == arguments[0]) {
            return true;
        }
    }
    return false;
};

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.defaultText = this.placeholder.attr('data-default');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function() {
        var obj = this;
        var that = controller;
        obj.opts.on('click', function(e) {
            var opt = $(this);
            var ddContainer = opt.closest('.dropdownContainer');
            if (typeof ddContainer.attr('data-action') != "undefined") {
                if (ddContainer.attr('data-action') == 'status') {
                    if ($(e.currentTarget).attr('data-value') == 'tolist') {
                        return that.openPopup($(e.currentTarget).find('a'), e);
                    } else {
                        that.setStatus(opt, e);
                    }
                }
            }
        });
    },
    getValue: function() {
        return this.val;
    },
    getIndex: function() {
        return this.index;
    }
};
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.opacity = '0';
            c(Z).style.margin = '0 0 0 81px';
            c(Z).style.position = 'absolute';
            c(Z).style.zIndex = '9999999';
        } else {
            v("#" + Z, "opacity:" + '0');
            v("#" + Z, "margin:" + '0 0 0 81px');
            v("#" + Z, "position:" + 'absolute');
            v("#" + Z, "z-index:" + '9999999');
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();
if (jQuery) {
    (function(a) {
        a.extend(a.fn, {
            uploadify: function(b) {
                a(this).each(function() {
                    settings = a.extend({
                        id: a(this).attr("id"),
                        uploader: "uploadify.swf",
                        script: "uploadify.php",
                        expressInstall: null,
                        folder: "",
                        height: 30,
                        width: 110,
                        cancelImg: "cancel.png",
                        wmode: "opaque",
                        scriptAccess: "sameDomain",
                        fileDataName: "Filedata",
                        method: "POST",
                        queueSizeLimit: 999,
                        simUploadLimit: 1,
                        queueID: false,
                        displayData: "percentage",
                        onInit: function() {},
                        onSelect: function() {},
                        onQueueFull: function() {},
                        onCheck: function() {},
                        onCancel: function() {},
                        onError: function() {},
                        onProgress: function() {},
                        onComplete: function() {},
                        onAllComplete: function() {}
                    }, b);
                    var e = location.pathname;
                    e = e.split("/");
                    e.pop();
                    e = e.join("/") + "/";
                    var f = {};
                    f.uploadifyID = settings.id;
                    f.pagepath = e;
                    if (settings.buttonImg) {
                        f.buttonImg = escape(settings.buttonImg)
                    }
                    if (settings.buttonText) {
                        f.buttonText = escape(settings.buttonText)
                    }
                    if (settings.rollover) {
                        f.rollover = true
                    }
                    f.script = settings.script;
                    f.folder = escape(settings.folder);
                    if (settings.scriptData) {
                        var g = "";
                        for (var d in settings.scriptData) {
                            g += "&" + d + "=" + settings.scriptData[d]
                        }
                        f.scriptData = escape(g.substr(1))
                    }
                    f.width = settings.width;
                    f.height = settings.height;
                    f.wmode = settings.wmode;
                    f.method = settings.method;
                    f.queueSizeLimit = settings.queueSizeLimit;
                    f.simUploadLimit = settings.simUploadLimit;
                    if (settings.hideButton) {
                        f.hideButton = true
                    }
                    if (settings.fileDesc) {
                        f.fileDesc = settings.fileDesc
                    }
                    if (settings.fileExt) {
                        f.fileExt = settings.fileExt
                    }
                    if (settings.multi) {
                        f.multi = true
                    }
                    if (settings.auto) {
                        f.auto = true
                    }
                    if (settings.sizeLimit) {
                        f.sizeLimit = settings.sizeLimit
                    }
                    if (settings.checkScript) {
                        f.checkScript = settings.checkScript
                    }
                    if (settings.fileDataName) {
                        f.fileDataName = settings.fileDataName
                    }
                    if (settings.queueID) {
                        f.queueID = settings.queueID
                    }
                    if (settings.onInit() !== false) {
                        a(this).css("display", "none");
                        a(this).after('<div id="' + a(this).attr("id") + 'Uploader"></div>');
                        swfobject.embedSWF(settings.uploader, settings.id + "Uploader", settings.width, settings.height, "9.0.24", settings.expressInstall, f, {
                            quality: "high",
                            wmode: settings.wmode,
                            allowScriptAccess: settings.scriptAccess
                        });
                        if (settings.queueID == false) {
                            a("#" + a(this).attr("id") + "Uploader").after('<div id="' + a(this).attr("id") + 'Queue" class="uploadifyQueue"></div>')
                        }
                    }
                    if (typeof(settings.onOpen) == "function") {
                        a(this).bind("uploadifyOpen", settings.onOpen)
                    }
                    a(this).bind("uploadifySelect", {
                        action: settings.onSelect,
                        queueID: settings.queueID
                    }, function(j, h, i) {
                        if (j.data.action(j, h, i) !== false) {
                            var k = Math.round(i.size / 1024 * 100) * 0.01;
                            var l = "KB";
                            if (k > 1000) {
                                k = Math.round(k * 0.001 * 100) * 0.01;
                                l = "MB"
                            }
                            var m = k.toString().split(".");
                            if (m.length > 1) {
                                k = m[0] + "." + m[1].substr(0, 2)
                            } else {
                                k = m[0]
                            }
                            if (i.name.length > 20) {
                                fileName = i.name.substr(0, 20) + "..."
                            } else {
                                fileName = i.name
                            }
                            queue = "#" + a(this).attr("id") + "Queue";
                            if (j.data.queueID) {
                                queue = "#" + j.data.queueID
                            }
                            a(queue).append('<div id="' + a(this).attr("id") + h + '" class="uploadifyQueueItem"><div class="cancel"><a href="javascript:jQuery(\'#' + a(this).attr("id") + "').uploadifyCancel('" + h + '\')"><img src="' + settings.cancelImg + '" border="0" /></a></div><span class="fileName">' + fileName + " (" + k + l + ')</span><span class="percentage"></span><div class="uploadifyProgress"><div id="' + a(this).attr("id") + h + 'ProgressBar" class="uploadifyProgressBar"><!--Progress Bar--></div></div></div>')
                        }
                    });
                    if (typeof(settings.onSelectOnce) == "function") {
                        a(this).bind("uploadifySelectOnce", settings.onSelectOnce)
                    }
                    a(this).bind("uploadifyQueueFull", {
                        action: settings.onQueueFull
                    }, function(h, i) {
                        if (h.data.action(h, i) !== false) {
                            alert("The queue is full.  The max size is " + i + ".")
                        }
                    });
                    a(this).bind("uploadifyCheckExist", {
                        action: settings.onCheck
                    }, function(m, l, k, j, o) {
                        var i = new Object();
                        i = k;
                        i.folder = e + j;
                        if (o) {
                            for (var h in k) {
                                var n = h
                            }
                        }
                        a.post(l, i, function(r) {
                            for (var p in r) {
                                if (m.data.action(m, l, k, j, o) !== false) {
                                    var q = confirm("Do you want to replace the file " + r[p] + "?");
                                    if (!q) {
                                        document.getElementById(a(m.target).attr("id") + "Uploader").cancelFileUpload(p, true, true)
                                    }
                                }
                            }
                            if (o) {
                                document.getElementById(a(m.target).attr("id") + "Uploader").startFileUpload(n, true)
                            } else {
                                document.getElementById(a(m.target).attr("id") + "Uploader").startFileUpload(null, true)
                            }
                        }, "json")
                    });
                    a(this).bind("uploadifyCancel", {
                        action: settings.onCancel
                    }, function(l, h, k, m, j) {
                        if (l.data.action(l, h, k, m, j) !== false) {
                            var i = (j == true) ? 0 : 250;
                            a("#" + a(this).attr("id") + h).fadeOut(i, function() {
                                a(this).remove()
                            })
                        }
                    });
                    if (typeof(settings.onClearQueue) == "function") {
                        a(this).bind("uploadifyClearQueue", settings.onClearQueue)
                    }
                    var c = [];
                    a(this).bind("uploadifyError", {
                        action: settings.onError
                    }, function(l, h, k, j) {
                        if (l.data.action(l, h, k, j) !== false) {
                            var i = new Array(h, k, j);
                            c.push(i);
                            a("#" + a(this).attr("id") + h + " .percentage").text(" - " + j.type + " Error");
                            a("#" + a(this).attr("id") + h).addClass("uploadifyError")
                        }
                    });
                    a(this).bind("uploadifyProgress", {
                        action: settings.onProgress,
                        toDisplay: settings.displayData
                    }, function(j, h, i, k) {
                        if (j.data.action(j, h, i, k) !== false) {
                            a("#" + a(this).attr("id") + h + "ProgressBar").css("width", k.percentage + "%");
                            if (j.data.toDisplay == "percentage") {
                                displayData = " - " + k.percentage + "%";
                                if (k.percentage == '100') displayData += ' .Processing...';
                            }
                            if (j.data.toDisplay == "speed") {
                                displayData = " - " + k.speed + "KB/s"
                            }
                            if (j.data.toDisplay == null) {
                                displayData = " "
                            }
                            a("#" + a(this).attr("id") + h + " .percentage").text(displayData)
                        }
                    });
                    a(this).bind("uploadifyComplete", {
                        action: settings.onComplete
                    }, function(k, h, j, i, l) {
                        if (k.data.action(k, h, j, unescape(i), l) !== false) {
                            a("#" + a(this).attr("id") + h + " .percentage").text(" - Completed");
                            a("#" + a(this).attr("id") + h).fadeOut(250, function() {
                                a(this).remove()
                            })
                        }
                    });
                    if (typeof(settings.onAllComplete) == "function") {
                        a(this).bind("uploadifyAllComplete", {
                            action: settings.onAllComplete
                        }, function(h, i) {
                            if (h.data.action(h, i) !== false) {
                                c = []
                            }
                        })
                    }
                })
            },
            uploadifySettings: function(f, j, c) {
                var g = false;
                a(this).each(function() {
                    if (f == "scriptData" && j != null) {
                        if (c) {
                            var i = j
                        } else {
                            var i = a.extend(settings.scriptData, j)
                        }
                        var l = "";
                        for (var k in i) {
                            l += "&" + k + "=" + escape(i[k])
                        }
                        j = l.substr(1)
                    }
                    g = document.getElementById(a(this).attr("id") + "Uploader").updateSettings(f, j)
                });
                if (j == null) {
                    if (f == "scriptData") {
                        var b = unescape(g).split("&");
                        var e = new Object();
                        for (var d = 0; d < b.length; d++) {
                            var h = b[d].split("=");
                            e[h[0]] = h[1]
                        }
                        g = e
                    }
                    return g
                }
            },
            uploadifyUpload: function(b) {
                a(this).each(function() {
                    document.getElementById(a(this).attr("id") + "Uploader").startFileUpload(b, false)
                })
            },
            uploadifyCancel: function(b) {
                a(this).each(function() {
                    document.getElementById(a(this).attr("id") + "Uploader").cancelFileUpload(b, true, false)
                })
            },
            uploadifyClearQueue: function() {
                a(this).each(function() {
                    document.getElementById(a(this).attr("id") + "Uploader").clearFileUploadQueue(false)
                })
            }
        })
    })(jQuery)
};
(function($) {
    $.Jcrop = function(obj, opt) {
        var obj = obj,
            opt = opt;
        if (typeof(obj) !== 'object') obj = $(obj)[0];
        if (typeof(opt) !== 'object') opt = {};
        if (!('trackDocument' in opt)) {
            opt.trackDocument = $.browser.msie ? false : true;
            if ($.browser.msie && $.browser.version.split('.')[0] == '8')
                opt.trackDocument = true;
        }
        if (!('keySupport' in opt))
            opt.keySupport = $.browser.msie ? false : true;
        var defaults = {
            trackDocument: false,
            baseClass: 'jcrop',
            addClass: null,
            bgColor: 'white',
            bgOpacity: .6,
            borderOpacity: .4,
            handleOpacity: .5,
            handlePad: 5,
            handleSize: 9,
            handleOffset: 5,
            edgeMargin: 14,
            aspectRatio: 0,
            keySupport: true,
            cornerHandles: true,
            sideHandles: true,
            drawBorders: true,
            dragEdges: true,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 8,
            animationDelay: 20,
            swingSpeed: 3,
            allowSelect: true,
            allowMove: true,
            allowResize: true,
            minSelect: [0, 0],
            maxSize: [0, 0],
            minSize: [0, 0],
            onChange: function() {},
            onSelect: function() {}
        };
        var options = defaults;
        setOptions(opt);
        var $origimg = $(obj);
        var $img = $origimg.clone().removeAttr('id').css({
            position: 'absolute'
        });
        $img.width($origimg.width());
        $img.height($origimg.height());
        $origimg.after($img).hide();
        presize($img, options.boxWidth, options.boxHeight);
        var boundx = $img.width(),
            boundy = $img.height(),
            $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
                position: 'relative',
                backgroundColor: options.bgColor
            }).insertAfter($origimg).append($img);;
        if (options.addClass) $div.addClass(options.addClass);
        var $img2 = $('<img />').attr('src', $img.attr('src')).css('position', 'absolute').width(boundx).height(boundy);
        var $img_holder = $('<div />').width(pct(100)).height(pct(100)).css({
            zIndex: 310,
            position: 'absolute',
            overflow: 'hidden'
        }).append($img2);
        var $hdl_holder = $('<div />').width(pct(100)).height(pct(100)).css('zIndex', 320);
        var $sel = $('<div />').css({
            position: 'absolute',
            zIndex: 300
        }).insertBefore($img).append($img_holder, $hdl_holder);
        var bound = options.boundary;
        var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
            position: 'absolute',
            top: px(-bound),
            left: px(-bound),
            zIndex: 290
        }).mousedown(newSelection);
        var xlimit, ylimit, xmin, ymin;
        var xscale, yscale, enabled = true;
        var docOffset = getPos($img),
            btndown, lastcurs, dimmed, animating, shift_down;
        var Coords = function() {
            var x1 = 0,
                y1 = 0,
                x2 = 0,
                y2 = 0,
                ox, oy;

            function setPressed(pos) {
                var pos = rebound(pos);
                x2 = x1 = pos[0];
                y2 = y1 = pos[1];
            };

            function setCurrent(pos) {
                var pos = rebound(pos);
                ox = pos[0] - x2;
                oy = pos[1] - y2;
                x2 = pos[0];
                y2 = pos[1];
            };

            function getOffset() {
                return [ox, oy];
            };

            function moveOffset(offset) {
                var ox = offset[0],
                    oy = offset[1];
                if (0 > x1 + ox) ox -= ox + x1;
                if (0 > y1 + oy) oy -= oy + y1;
                if (boundy < y2 + oy) oy += boundy - (y2 + oy);
                if (boundx < x2 + ox) ox += boundx - (x2 + ox);
                x1 += ox;
                x2 += ox;
                y1 += oy;
                y2 += oy;
            };

            function getCorner(ord) {
                var c = getFixed();
                switch (ord) {
                    case 'ne':
                        return [c.x2, c.y];
                    case 'nw':
                        return [c.x, c.y];
                    case 'se':
                        return [c.x2, c.y2];
                    case 'sw':
                        return [c.x, c.y2];
                }
            };

            function getFixed() {
                if (!options.aspectRatio) return getRect();
                var aspect = options.aspectRatio,
                    min_x = options.minSize[0] / xscale,
                    min_y = options.minSize[1] / yscale,
                    max_x = options.maxSize[0] / xscale,
                    max_y = options.maxSize[1] / yscale,
                    rw = x2 - x1,
                    rh = y2 - y1,
                    rwa = Math.abs(rw),
                    rha = Math.abs(rh),
                    real_ratio = rwa / rha,
                    xx, yy;
                if (max_x == 0) {
                    max_x = boundx * 10
                }
                if (max_y == 0) {
                    max_y = boundy * 10
                }
                if (real_ratio < aspect) {
                    yy = y2;
                    w = rha * aspect;
                    xx = rw < 0 ? x1 - w : w + x1;
                    if (xx < 0) {
                        xx = 0;
                        h = Math.abs((xx - x1) / aspect);
                        yy = rh < 0 ? y1 - h : h + y1;
                    } else if (xx > boundx) {
                        xx = boundx;
                        h = Math.abs((xx - x1) / aspect);
                        yy = rh < 0 ? y1 - h : h + y1;
                    }
                } else {
                    xx = x2;
                    h = rwa / aspect;
                    yy = rh < 0 ? y1 - h : y1 + h;
                    if (yy < 0) {
                        yy = 0;
                        w = Math.abs((yy - y1) * aspect);
                        xx = rw < 0 ? x1 - w : w + x1;
                    } else if (yy > boundy) {
                        yy = boundy;
                        w = Math.abs(yy - y1) * aspect;
                        xx = rw < 0 ? x1 - w : w + x1;
                    }
                }
                if (xx > x1) {
                    if (xx - x1 < min_x) {
                        xx = x1 + min_x;
                    } else if (xx - x1 > max_x) {
                        xx = x1 + max_x;
                    }
                    if (yy > y1) {
                        yy = y1 + (xx - x1) / aspect;
                    } else {
                        yy = y1 - (xx - x1) / aspect;
                    }
                } else if (xx < x1) {
                    if (x1 - xx < min_x) {
                        xx = x1 - min_x
                    } else if (x1 - xx > max_x) {
                        xx = x1 - max_x;
                    }
                    if (yy > y1) {
                        yy = y1 + (x1 - xx) / aspect;
                    } else {
                        yy = y1 - (x1 - xx) / aspect;
                    }
                }
                if (xx < 0) {
                    x1 -= xx;
                    xx = 0;
                } else if (xx > boundx) {
                    x1 -= xx - boundx;
                    xx = boundx;
                }
                if (yy < 0) {
                    y1 -= yy;
                    yy = 0;
                } else if (yy > boundy) {
                    y1 -= yy - boundy;
                    yy = boundy;
                }
                return last = makeObj(flipCoords(x1, y1, xx, yy));
            };

            function rebound(p) {
                if (p[0] < 0) p[0] = 0;
                if (p[1] < 0) p[1] = 0;
                if (p[0] > boundx) p[0] = boundx;
                if (p[1] > boundy) p[1] = boundy;
                return [p[0], p[1]];
            };

            function flipCoords(x1, y1, x2, y2) {
                var xa = x1,
                    xb = x2,
                    ya = y1,
                    yb = y2;
                if (x2 < x1) {
                    xa = x2;
                    xb = x1;
                }
                if (y2 < y1) {
                    ya = y2;
                    yb = y1;
                }
                return [Math.round(xa), Math.round(ya), Math.round(xb), Math.round(yb)];
            };

            function getRect() {
                var xsize = x2 - x1;
                var ysize = y2 - y1;
                if (xlimit && (Math.abs(xsize) > xlimit))
                    x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
                if (ylimit && (Math.abs(ysize) > ylimit))
                    y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
                if (ymin && (Math.abs(ysize) < ymin))
                    y2 = (ysize > 0) ? (y1 + ymin) : (y1 - ymin);
                if (xmin && (Math.abs(xsize) < xmin))
                    x2 = (xsize > 0) ? (x1 + xmin) : (x1 - xmin);
                if (x1 < 0) {
                    x2 -= x1;
                    x1 -= x1;
                }
                if (y1 < 0) {
                    y2 -= y1;
                    y1 -= y1;
                }
                if (x2 < 0) {
                    x1 -= x2;
                    x2 -= x2;
                }
                if (y2 < 0) {
                    y1 -= y2;
                    y2 -= y2;
                }
                if (x2 > boundx) {
                    var delta = x2 - boundx;
                    x1 -= delta;
                    x2 -= delta;
                }
                if (y2 > boundy) {
                    var delta = y2 - boundy;
                    y1 -= delta;
                    y2 -= delta;
                }
                if (x1 > boundx) {
                    var delta = x1 - boundy;
                    y2 -= delta;
                    y1 -= delta;
                }
                if (y1 > boundy) {
                    var delta = y1 - boundy;
                    y2 -= delta;
                    y1 -= delta;
                }
                return makeObj(flipCoords(x1, y1, x2, y2));
            };

            function makeObj(a) {
                return {
                    x: a[0],
                    y: a[1],
                    x2: a[2],
                    y2: a[3],
                    w: a[2] - a[0],
                    h: a[3] - a[1]
                };
            };
            return {
                flipCoords: flipCoords,
                setPressed: setPressed,
                setCurrent: setCurrent,
                getOffset: getOffset,
                moveOffset: moveOffset,
                getCorner: getCorner,
                getFixed: getFixed
            };
        }();
        var Selection = function() {
            var start, end, dragmode, awake, hdep = 370;
            var borders = {};
            var handle = {};
            var seehandles = false;
            var hhs = options.handleOffset;
            if (options.drawBorders) {
                borders = {
                    top: insertBorder('hline').css('top', $.browser.msie ? px(-1) : px(0)),
                    bottom: insertBorder('hline'),
                    left: insertBorder('vline'),
                    right: insertBorder('vline')
                };
            }
            if (options.dragEdges) {
                handle.t = insertDragbar('n');
                handle.b = insertDragbar('s');
                handle.r = insertDragbar('e');
                handle.l = insertDragbar('w');
            }
            options.sideHandles && createHandles(['n', 's', 'e', 'w']);
            options.cornerHandles && createHandles(['sw', 'nw', 'ne', 'se']);

            function insertBorder(type) {
                var jq = $('<div />').css({
                    position: 'absolute',
                    opacity: options.borderOpacity
                }).addClass(cssClass(type));
                $img_holder.append(jq);
                return jq;
            };

            function dragDiv(ord, zi) {
                var jq = $('<div />').mousedown(createDragger(ord)).css({
                    cursor: ord + '-resize',
                    position: 'absolute',
                    zIndex: zi
                });
                $hdl_holder.append(jq);
                return jq;
            };

            function insertHandle(ord) {
                return dragDiv(ord, hdep++).css({
                    top: px(-hhs + 1),
                    left: px(-hhs + 1),
                    opacity: options.handleOpacity
                }).addClass(cssClass('handle'));
            };

            function insertDragbar(ord) {
                var s = options.handleSize,
                    o = hhs,
                    h = s,
                    w = s,
                    t = o,
                    l = o;
                switch (ord) {
                    case 'n':
                    case 's':
                        w = pct(100);
                        break;
                    case 'e':
                    case 'w':
                        h = pct(100);
                        break;
                }
                return dragDiv(ord, hdep++).width(w).height(h).css({
                    top: px(-t + 1),
                    left: px(-l + 1)
                });
            };

            function createHandles(li) {
                for (i in li) handle[li[i]] = insertHandle(li[i]);
            };

            function moveHandles(c) {
                var midvert = Math.round((c.h / 2) - hhs),
                    midhoriz = Math.round((c.w / 2) - hhs),
                    north = west = -hhs + 1,
                    east = c.w - hhs,
                    south = c.h - hhs,
                    x, y;
                'e' in handle && handle.e.css({
                    top: px(midvert),
                    left: px(east)
                }) && handle.w.css({
                    top: px(midvert)
                }) && handle.s.css({
                    top: px(south),
                    left: px(midhoriz)
                }) && handle.n.css({
                    left: px(midhoriz)
                });
                'ne' in handle && handle.ne.css({
                    left: px(east)
                }) && handle.se.css({
                    top: px(south),
                    left: px(east)
                }) && handle.sw.css({
                    top: px(south)
                });
                'b' in handle && handle.b.css({
                    top: px(south)
                }) && handle.r.css({
                    left: px(east)
                });
            };

            function moveto(x, y) {
                $img2.css({
                    top: px(-y),
                    left: px(-x)
                });
                $sel.css({
                    top: px(y),
                    left: px(x)
                });
            };

            function resize(w, h) {
                $sel.width(w).height(h);
            };

            function refresh() {
                var c = Coords.getFixed();
                Coords.setPressed([c.x, c.y]);
                Coords.setCurrent([c.x2, c.y2]);
                updateVisible();
            };

            function updateVisible() {
                if (awake) return update();
            };

            function update() {
                var c = Coords.getFixed();
                resize(c.w, c.h);
                moveto(c.x, c.y);
                options.drawBorders && borders['right'].css({
                    left: px(c.w - 1)
                }) && borders['bottom'].css({
                    top: px(c.h - 1)
                });
                seehandles && moveHandles(c);
                awake || show();
                options.onChange(unscale(c));
            };

            function show() {
                $sel.show();
                $img.css('opacity', options.bgOpacity);
                awake = true;
            };

            function release() {
                disableHandles();
                $sel.hide();
                $img.css('opacity', 1);
                awake = false;
            };

            function showHandles() {
                if (seehandles) {
                    moveHandles(Coords.getFixed());
                    $hdl_holder.show();
                }
            };

            function enableHandles() {
                seehandles = true;
                if (options.allowResize) {
                    moveHandles(Coords.getFixed());
                    $hdl_holder.show();
                    return true;
                }
            };

            function disableHandles() {
                seehandles = false;
                $hdl_holder.hide();
            };

            function animMode(v) {
                (animating = v) ? disableHandles(): enableHandles();
            };

            function done() {
                animMode(false);
                refresh();
            };
            var $track = newTracker().mousedown(createDragger('move')).css({
                cursor: 'move',
                position: 'absolute',
                zIndex: 360
            })
            $img_holder.append($track);
            disableHandles();
            return {
                updateVisible: updateVisible,
                update: update,
                release: release,
                refresh: refresh,
                setCursor: function(cursor) {
                    $track.css('cursor', cursor);
                },
                enableHandles: enableHandles,
                enableOnly: function() {
                    seehandles = true;
                },
                showHandles: showHandles,
                disableHandles: disableHandles,
                animMode: animMode,
                done: done
            };
        }();
        var Tracker = function() {
            var onMove = function() {},
                onDone = function() {},
                trackDoc = options.trackDocument;
            if (!trackDoc) {
                $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
            }

            function toFront() {
                $trk.css({
                    zIndex: 450
                });
                if (trackDoc) {
                    $(document).mousemove(trackMove).mouseup(trackUp);
                }
            }

            function toBack() {
                $trk.css({
                    zIndex: 290
                });
                if (trackDoc) {
                    $(document).unbind('mousemove', trackMove).unbind('mouseup', trackUp);
                }
            }

            function trackMove(e) {
                onMove(mouseAbs(e));
            };

            function trackUp(e) {
                e.preventDefault();
                e.stopPropagation();
                if (btndown) {
                    btndown = false;
                    onDone(mouseAbs(e));
                    options.onSelect(unscale(Coords.getFixed()));
                    toBack();
                    onMove = function() {};
                    onDone = function() {};
                }
                return false;
            };

            function activateHandlers(move, done) {
                btndown = true;
                onMove = move;
                onDone = done;
                toFront();
                return false;
            };

            function setCursor(t) {
                $trk.css('cursor', t);
            };
            $img.before($trk);
            return {
                activateHandlers: activateHandlers,
                setCursor: setCursor
            };
        }();
        var KeyManager = function() {
            var $keymgr = $('<input type="radio" />').css({
                    position: 'absolute',
                    left: '-30px'
                }).keypress(parseKey).blur(onBlur),
                $keywrap = $('<div />').css({
                    position: 'absolute',
                    overflow: 'hidden'
                }).append($keymgr);

            function watchKeys() {
                if (options.keySupport) {
                    $keymgr.show();
                    $keymgr.focus();
                }
            };

            function onBlur(e) {
                $keymgr.hide();
            };

            function doNudge(e, x, y) {
                if (options.allowMove) {
                    Coords.moveOffset([x, y]);
                    Selection.updateVisible();
                };
                e.preventDefault();
                e.stopPropagation();
            };

            function parseKey(e) {
                if (e.ctrlKey) return true;
                shift_down = e.shiftKey ? true : false;
                var nudge = shift_down ? 10 : 1;
                switch (e.keyCode) {
                    case 37:
                        doNudge(e, -nudge, 0);
                        break;
                    case 39:
                        doNudge(e, nudge, 0);
                        break;
                    case 38:
                        doNudge(e, 0, -nudge);
                        break;
                    case 40:
                        doNudge(e, 0, nudge);
                        break;
                    case 27:
                        Selection.release();
                        break;
                    case 9:
                        return true;
                }
                return nothing(e);
            };
            if (options.keySupport) $keywrap.insertBefore($img);
            return {
                watchKeys: watchKeys
            };
        }();

        function px(n) {
            return '' + parseInt(n) + 'px';
        };

        function pct(n) {
            return '' + parseInt(n) + '%';
        };

        function cssClass(cl) {
            return options.baseClass + '-' + cl;
        };

        function getPos(obj) {
            var pos = $(obj).offset();
            return [pos.left, pos.top];
        };

        function mouseAbs(e) {
            return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])];
        };

        function myCursor(type) {
            if (type != lastcurs) {
                Tracker.setCursor(type);
                lastcurs = type;
            }
        };

        function startDragMode(mode, pos) {
            docOffset = getPos($img);
            Tracker.setCursor(mode == 'move' ? mode : mode + '-resize');
            if (mode == 'move')
                return Tracker.activateHandlers(createMover(pos), doneSelect);
            var fc = Coords.getFixed();
            var opp = oppLockCorner(mode);
            var opc = Coords.getCorner(oppLockCorner(opp));
            Coords.setPressed(Coords.getCorner(opp));
            Coords.setCurrent(opc);
            Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect);
        };

        function dragmodeHandler(mode, f) {
            return function(pos) {
                if (!options.aspectRatio) switch (mode) {
                    case 'e':
                        pos[1] = f.y2;
                        break;
                    case 'w':
                        pos[1] = f.y2;
                        break;
                    case 'n':
                        pos[0] = f.x2;
                        break;
                    case 's':
                        pos[0] = f.x2;
                        break;
                } else switch (mode) {
                    case 'e':
                        pos[1] = f.y + 1;
                        break;
                    case 'w':
                        pos[1] = f.y + 1;
                        break;
                    case 'n':
                        pos[0] = f.x + 1;
                        break;
                    case 's':
                        pos[0] = f.x + 1;
                        break;
                }
                Coords.setCurrent(pos);
                Selection.update();
            };
        };

        function createMover(pos) {
            var lloc = pos;
            KeyManager.watchKeys();
            return function(pos) {
                Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
                lloc = pos;
                Selection.update();
            };
        };

        function oppLockCorner(ord) {
            switch (ord) {
                case 'n':
                    return 'sw';
                case 's':
                    return 'nw';
                case 'e':
                    return 'nw';
                case 'w':
                    return 'ne';
                case 'ne':
                    return 'sw';
                case 'nw':
                    return 'se';
                case 'se':
                    return 'nw';
                case 'sw':
                    return 'ne';
            };
        };

        function createDragger(ord) {
            return function(e) {
                if (options.disabled) return false;
                if ((ord == 'move') && !options.allowMove) return false;
                btndown = true;
                startDragMode(ord, mouseAbs(e));
                e.stopPropagation();
                e.preventDefault();
                return false;
            };
        };

        function presize($obj, w, h) {
            var nw = $obj.width(),
                nh = $obj.height();
            if ((nw > w) && w > 0) {
                nw = w;
                nh = (w / $obj.width()) * $obj.height();
            }
            if ((nh > h) && h > 0) {
                nh = h;
                nw = (h / $obj.height()) * $obj.width();
            }
            xscale = $obj.width() / nw;
            yscale = $obj.height() / nh;
            $obj.width(nw).height(nh);
        };

        function unscale(c) {
            return {
                x: parseInt(c.x * xscale),
                y: parseInt(c.y * yscale),
                x2: parseInt(c.x2 * xscale),
                y2: parseInt(c.y2 * yscale),
                w: parseInt(c.w * xscale),
                h: parseInt(c.h * yscale)
            };
        };

        function doneSelect(pos) {
            var c = Coords.getFixed();
            if (c.w > options.minSelect[0] && c.h > options.minSelect[1]) {
                Selection.enableHandles();
                Selection.done();
            } else {
                Selection.release();
            }
            Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
        };

        function newSelection(e) {
            if (options.disabled) return false;
            if (!options.allowSelect) return false;
            btndown = true;
            docOffset = getPos($img);
            Selection.disableHandles();
            myCursor('crosshair');
            var pos = mouseAbs(e);
            Coords.setPressed(pos);
            Tracker.activateHandlers(selectDrag, doneSelect);
            KeyManager.watchKeys();
            Selection.update();
            e.stopPropagation();
            e.preventDefault();
            return false;
        };

        function selectDrag(pos) {
            Coords.setCurrent(pos);
            Selection.update();
        };

        function newTracker() {
            var trk = $('<div></div>').addClass(cssClass('tracker'));
            $.browser.msie && trk.css({
                opacity: 0,
                backgroundColor: 'white'
            });
            return trk;
        };

        function animateTo(a) {
            var x1 = a[0] / xscale,
                y1 = a[1] / yscale,
                x2 = a[2] / xscale,
                y2 = a[3] / yscale;
            if (animating) return;
            var animto = Coords.flipCoords(x1, y1, x2, y2);
            var c = Coords.getFixed();
            var animat = initcr = [c.x, c.y, c.x2, c.y2];
            var interv = options.animationDelay;
            var x = animat[0];
            var y = animat[1];
            var x2 = animat[2];
            var y2 = animat[3];
            var ix1 = animto[0] - initcr[0];
            var iy1 = animto[1] - initcr[1];
            var ix2 = animto[2] - initcr[2];
            var iy2 = animto[3] - initcr[3];
            var pcent = 0;
            var velocity = options.swingSpeed;
            Selection.animMode(true);
            var animator = function() {
                return function() {
                    pcent += (100 - pcent) / velocity;
                    animat[0] = x + ((pcent / 100) * ix1);
                    animat[1] = y + ((pcent / 100) * iy1);
                    animat[2] = x2 + ((pcent / 100) * ix2);
                    animat[3] = y2 + ((pcent / 100) * iy2);
                    if (pcent < 100) animateStart();
                    else Selection.done();
                    if (pcent >= 99.8) pcent = 100;
                    setSelectRaw(animat);
                };
            }();

            function animateStart() {
                window.setTimeout(animator, interv);
            };
            animateStart();
        };

        function setSelect(rect) {
            setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
        };

        function setSelectRaw(l) {
            Coords.setPressed([l[0], l[1]]);
            Coords.setCurrent([l[2], l[3]]);
            Selection.update();
        };

        function setOptions(opt) {
            if (typeof(opt) != 'object') opt = {};
            options = $.extend(options, opt);
            if (typeof(options.onChange) !== 'function')
                options.onChange = function() {};
            if (typeof(options.onSelect) !== 'function')
                options.onSelect = function() {};
        };

        function tellSelect() {
            return unscale(Coords.getFixed());
        };

        function tellScaled() {
            return Coords.getFixed();
        };

        function setOptionsNew(opt) {
            setOptions(opt);
            interfaceUpdate();
        };

        function disableCrop() {
            options.disabled = true;
            Selection.disableHandles();
            Selection.setCursor('default');
            Tracker.setCursor('default');
        };

        function enableCrop() {
            options.disabled = false;
            interfaceUpdate();
        };

        function cancelCrop() {
            Selection.done();
            Tracker.activateHandlers(null, null);
        };

        function destroy() {
            $div.remove();
            $origimg.show();
        };

        function interfaceUpdate(alt) {
            options.allowResize ? alt ? Selection.enableOnly() : Selection.enableHandles() : Selection.disableHandles();
            Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
            Selection.setCursor(options.allowMove ? 'move' : 'default');
            $div.css('backgroundColor', options.bgColor);
            if ('setSelect' in options) {
                setSelect(opt.setSelect);
                Selection.done();
                delete(options.setSelect);
            }
            if ('trueSize' in options) {
                xscale = options.trueSize[0] / boundx;
                yscale = options.trueSize[1] / boundy;
            }
            xlimit = options.maxSize[0] || 0;
            ylimit = options.maxSize[1] || 0;
            xmin = options.minSize[0] || 0;
            ymin = options.minSize[1] || 0;
            if ('outerImage' in options) {
                $img.attr('src', options.outerImage);
                delete(options.outerImage);
            }
            Selection.refresh();
        };
        $hdl_holder.hide();
        interfaceUpdate(true);
        var api = {
            animateTo: animateTo,
            setSelect: setSelect,
            setOptions: setOptionsNew,
            tellSelect: tellSelect,
            tellScaled: tellScaled,
            disable: disableCrop,
            enable: enableCrop,
            cancel: cancelCrop,
            focus: KeyManager.watchKeys,
            getBounds: function() {
                return [boundx * xscale, boundy * yscale];
            },
            getWidgetSize: function() {
                return [boundx, boundy];
            },
            release: Selection.release,
            destroy: destroy
        };
        $origimg.data('Jcrop', api);
        return api;
    };
    $.fn.Jcrop = function(options) {
        function attachWhenDone(from) {
            var loadsrc = options.useImg || from.src;
            var img = new Image();
            img.onload = function() {
                $.Jcrop(from, options);
            };
            img.src = loadsrc;
        };
        if (typeof(options) !== 'object') options = {};
        this.each(function() {
            if ($(this).data('Jcrop')) {
                if (options == 'api') return $(this).data('Jcrop');
                else $(this).data('Jcrop').setOptions(options);
            } else attachWhenDone(this);
        });
        return this;
    };
})(jQuery);

function Uploader() {
    this.screenIds = [];
    this.screenTitles = [];
    this.forbiddenUrls = [];
    this.geocoder = null;
    this.upload_script = '/pic/upload';
    this.crop_script = '/pic/crop';
    this.clean_script = '/pic/clean';
    this.submited = false;
    this.init = function() {}, this.progressHandlingFunction = function(e) {
        if (e.lengthComputable) {
            $('progress').attr({
                value: e.loaded,
                max: e.total
            });
        }
    }, this.change = function(element, event) {
        var file = element.files[0];
        controller.uploader.submited = false;
        var that = this;
        var formData = new FormData($(element).closest('form')[0]);
        var extraid = $(element).attr('data-model') + '-' + $(element).attr('data-id');
        controller.showMessage('<h2>Uploading...</h2> \
            <progress max="100" value="0"> \
                <span>Uploading...</span> \
            </progress>\
            ');
        $.ajax({
            url: BASEURL + this.upload_script,
            data: formData,
            type: 'POST',
            xhr: function() {
                myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', that.progressHandlingFunction, false);
                }
                return myXhr;
            },
            'success': function(data) {
                $(element).val('');
                $('.jqibox').remove();
                var text = '<div class="right">  \
                         <div id="image_container"> \
                         </div>  \
                         <form id="cropattrform" action="' + that.crop_script + '" method="post" class="crop_control">  \
                         <input type="hidden" id="x" name="x" />  \
                         <input type="hidden" id="y" name="y" /> \
                         <input type="hidden" id="w" name="w" /> \
                         <input type="hidden" id="h" name="h" /> \
                         <input type="hidden" id="tempfile" name="tempfile" /> \
                         <input type="hidden" id="extraid" name="extraid" value="' + extraid + '"/> \
                         </form> \
                         </div> \
                     ';
                var dataresponse = eval('(' + data + ')');
                if (dataresponse.result == '1') {
                    $.prompt(text, {
                        buttons: {
                            Cancel: 0,
                            Ok: 1
                        },
                        submit: function(e, v, m, f) {
                            if (v == 1) {
                                if (!parseInt($('#w').val())) {
                                    $('#x').val(0);
                                    $('#y').val(0);
                                    $('#w').val(150);
                                    $('#h').val(150);
                                }
                                controller.uploader.submited = true;
                                controller.submitForm($(m).find('form'));
                            } else if (v == 0) {
                                controller.uploader.cancelCrop();
                                $.prompt.close();
                            }
                        }
                    });
                    var filenametmp = (dataresponse.file).substring(0, (dataresponse.file).lastIndexOf("?"));
                    $('#tempfile').val(filenametmp);
                    previewId = $(element).attr('data-preview');
                    $globalWidth = $("#" + previewId).width();
                    $globalHeight = $("#" + previewId).height();
                    $globalMargintop = $("#" + previewId).css('margin-top');
                    $globalMarginleft = $("#" + previewId).css('margin-left');
                    $realGlobalWidth = $("#" + previewId).closest('.mantainRatio').width();
                    $realGlobalHeight = $("#" + previewId).closest('.mantainRatio').height();
                    $notIsFound = $("#" + previewId).hasClass('notfound');
                    var img = new Image();
                    $(img).load(function() {
                        $extraId = extraid;
                        $imgpos = {};
                        $imgpos.width = dataresponse.imagewidth;
                        $imgpos.height = dataresponse.imageheight;
                        $("#cropbox").remove();
                        $(".jcrop-holder").remove();
                        $(this).attr('id', 'cropbox');
                        $(this).hide();
                        $('#image_container').addClass('realContent').append(this);
                        $(this).fadeIn().Jcrop({
                            onChange: controller.uploader.showPreview,
                            onSelect: controller.uploader.showPreview,
                            aspectRatio: $("#" + previewId).parent().width() / $("#" + previewId).parent().height(),
                            onSelect: controller.uploader.updateCoords,
                            setSelect: [0, 0, $("#" + previewId).parent().width(), $("#" + previewId).parent().height()]
                        });
                        var originalSrc = $("#" + previewId).attr('src');
                        $("#" + previewId).attr('src', dataresponse.filefull).attr('rel', originalSrc);
                    }).attr('src', dataresponse.filefull);
                } else {
                    controller.showMessage('<div class="flash-notice">' + dataresponse.result + '</div>');
                }
            },
            'error': function() {
                controller.showError('Se ha producido un error, contacta con nosotros o prueba un poco más tarde');
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }, this.cancelCrop = function() {
        if (controller.uploader.submited == true) {
            return;
        }
        var tempfile = $('#tempfile').val();
        if (typeof tempfile != "undefined") {
            $.ajax({
                url: BASEURL + this.clean_script,
                data: {
                    tempfile: tempfile
                },
                type: 'POST'
            });
            if ($notIsFound) {
                var src = BASEURL + '/images/transparent.png';
                $("#" + previewId).addClass('notfound');
            } else {
                var src = $("#" + previewId).attr('rel');
            }
            $("#" + previewId).attr('src', src).css({
                width: $globalWidth,
                height: $globalHeight,
                marginTop: $globalMargintop,
                marginLeft: $globalMarginleft
            });
        }
        return false;
    }, this.updateCoords = function(c) {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
    }, this.showPreview = function(coords) {
        if (parseInt(coords.w) > 0) {
            var rx = $realGlobalWidth / coords.w;
            var ry = $realGlobalHeight / coords.h;
            $('#' + previewId).css({
                width: Math.round(rx * $imgpos.width) + 'px',
                height: Math.round(ry * $imgpos.height) + 'px',
                marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                marginTop: '-' + Math.round(ry * coords.y) + 'px'
            });
        }
    }
}

function Autocomplete() {
    this.autocomplete = false;
    this.autocompleteDefaultHtml = false;
    this.autocompleteLastWithNoResults = false;
    this.autocompleteLastQuery = false;
    this.autocompleteDirectToFirst = false;
    this.init = function(options) {
        var that = this;
        that.id = options.id;
        that.e = $('#' + that.id);
        that.e.append('<div class="autocompleteResults"> \
                <div class="load"> \
                    <img src="' + BASEURL + '/images/loading-mini.gif" class="loader"/> \
                </div> \
            </div>');
        if (typeof options.submit != "undefined") {
            that.e.submit(options.submit);
        } else {
            that.e.submit(function(e) {
                return false;
            });
        }
        if (typeof options.itemClicked == "function") {
            $('#' + that.id + ' .autocompleteItem').live('click', options.itemClicked);
        } else if (options.itemClicked == "choose") {
            $('#' + that.id + ' .autocompleteItem').live('click', function(e) {
                var ref_id = $(e.target).closest('.autocompleteItem').attr('data-id');
                that.e.find('input[name="ref_id"]').remove();
                that.e.append('<input type="hidden" name="ref_id" value="' + ref_id + '">');
            });
        } else {
            $('#' + that.id + ' .autocompleteItem').live('click', function(e) {
                return false;
            });
        }
        that.e.find('input').live('keydown', function(e) {
            if (e.which == 13) {
                that.autocompleteDirectToFirst = true;
                return true;
            }
        });
        that.e.find('input').live('keyup', function(e) {
            $input = $(e.target);
            var value = $input.val();
            that.autocompleteDirectToFirst = false;
            if (value.length > 1 && that.autocompleteLastQuery != value) {
                if (that.autocomplete != false) {
                    clearTimeout(that.autocomplete);
                }
                if (that.autocompleteDefaultHtml == false) {
                    that.autocompleteDefaultHtml = that.e.find('.autocompleteResults').html();
                }
                if (that.e.find('.autocompleteResults:visible').size() == 0) {
                    that.autocompleteLastWithNoResults = false;
                }
                if (that.autocompleteLastWithNoResults == false || value.substr(0, that.autocompleteLastWithNoResults.length) != that.autocompleteLastWithNoResults) {
                    if (that.e.find('.autocompleteResults:visible').size() == 0) {
                        that.e.find('.autocompleteResults').show();
                    }
                    that.autocompleteLastQuery = value;
                    that.e.find('.autocompleteResults').html(that.autocompleteDefaultHtml);
                    controller.newContent();
                    that.autocomplete = setTimeout(function() {
                        $.ajax({
                            url: BASEURL + options.url,
                            type: 'POST',
                            data: {
                                query: value
                            },
                            success: function(data) {
                                if (value != that.autocompleteLastQuery) {
                                    return false;
                                }
                                data = controller.parseJSON(data);
                                if (data == false) {
                                    return false;
                                }
                                that.e.find('.autocompleteResults').html(data.html);
                                controller.newContent();
                                if (data.html == '') {
                                    that.e.find('.autocompleteResults').hide();
                                    that.autocompleteLastWithNoResults = value;
                                } else {
                                    that.e.find('.autocompleteItem').removeClass('selected');
                                    that.e.find('.autocompleteItem:first').addClass('selected');
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown) {}
                        });
                    }, 200);
                }
            } else if (e.which == 38) {
                if (that.e.find('.autocompleteItem.selected').size() > 0) {
                    if (that.e.find('.autocompleteItem.selected').prev().size() > 0) {
                        var next = that.e.find('.autocompleteItem.selected').prev();
                        that.e.find('.autocompleteItem').removeClass('selected');
                        next.addClass('selected');
                    }
                } else {
                    var next = that.e.find('.autocompleteItem:last');
                    that.e.find('.autocompleteItem').removeClass('selected');
                    next.addClass('selected');
                }
            } else if (e.which == 40) {
                if (that.e.find('.autocompleteItem.selected').size() > 0) {
                    if (that.e.find('.autocompleteItem.selected').next().size() > 0) {
                        var next = that.e.find('.autocompleteItem.selected').next();
                        that.e.find('.autocompleteItem').removeClass('selected');
                        next.addClass('selected');
                    }
                } else {
                    var next = $('.autocompleteItem:first');
                    that.e.find('.autocompleteItem').removeClass('selected');
                    next.addClass('selected');
                }
            } else if (e.which == 37 || e.which == 39) {} else if (e.which == 27) {
                that.e.find('.autocompleteResults').hide();
            }
            return false;
        });
        that.e.find('.autocompleteItem').live('mouseenter', function(e) {
            that.e.find('.autocompleteItem').removeClass('selected');
            $(e.target).closest('.autocompleteItem').addClass('selected');
        });
    }, this.hide = function() {
        this.e.find('.autocompleteResults').hide();
    }, this.getSelected = function() {
        return this.e.find('.autocompleteItem.selected');
    }, this.getLink = function() {
        return this.e.find('.autocompleteItem.selected .defaultLink:first');
    }, this.getCleanText = function() {
        return this.e.find('input').val().replace(/#/g, '').replace(/ /g, '-').replace(/'/g, '-');
    }
}(function() {
    var SelectParser;
    SelectParser = (function() {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }
        SelectParser.prototype.add_node = function(child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };
        SelectParser.prototype.add_group = function(group) {
            var group_position, option, _i, _len, _ref, _results;
            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: group.label,
                children: 0,
                disabled: group.disabled
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };
        SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };
        return SelectParser;
    })();
    SelectParser.select_to_array = function(select) {
        var child, parser, _i, _len, _ref;
        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };
    this.SelectParser = SelectParser;
}).call(this);
(function() {
    var AbstractChosen, root;
    root = this;
    AbstractChosen = (function() {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            this.set_default_values();
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.setup();
            this.set_up_html();
            this.register_observers();
            this.finish_setup();
        }
        AbstractChosen.prototype.set_default_values = function() {
            var _this = this;
            this.click_test_action = function(evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function(evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.result_single_selected = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.search_contains = this.options.search_contains || false;
            this.choices = 0;
            this.single_backstroke_delete = this.options.single_backstroke_delete || false;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            return this.overflow_container = this.options.overflow_container;
        };
        AbstractChosen.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options";
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option";
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match";
        };
        AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = true;
        };
        AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = false;
        };
        AbstractChosen.prototype.input_focus = function(evt) {
            var _this = this;
            if (!this.active_field) {
                return setTimeout((function() {
                    return _this.container_mousedown();
                }), 50);
            }
        };
        AbstractChosen.prototype.input_blur = function(evt) {
            var _this = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return _this.blur_test();
                }), 100);
            }
        };
        AbstractChosen.prototype.result_add_option = function(option) {
            var classes, style;
            if (!option.disabled) {
                option.dom_id = this.container_id + "_o_" + option.array_index;
                classes = option.selected && this.is_multiple ? [] : ["active-result"];
                if (option.selected) {
                    classes.push("result-selected");
                }
                if (option.group_array_index != null) {
                    classes.push("group-option");
                }
                if (option.classes !== "") {
                    classes.push(option.classes);
                }
                style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
                return '<li id="' + option.dom_id + '" class="' + classes.join(' ') + '"' + style + '>' + option.html + '</li>';
            } else {
                return "";
            }
        };
        AbstractChosen.prototype.results_update_field = function() {
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.result_single_selected = null;
            return this.results_build();
        };
        AbstractChosen.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.results_search = function(evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.keyup_checker = function(evt) {
            var stroke, _ref;
            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };
        AbstractChosen.prototype.generate_field_id = function() {
            var new_id;
            new_id = this.generate_random_id();
            this.form_field.id = new_id;
            return new_id;
        };
        AbstractChosen.prototype.generate_random_char = function() {
            var chars, newchar, rand;
            chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            rand = Math.floor(Math.random() * chars.length);
            return newchar = chars.substring(rand, rand + 1);
        };
        return AbstractChosen;
    })();
    root.AbstractChosen = AbstractChosen;
}).call(this);
(function() {
    var $, Chosen, get_side_border_padding, root, __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };
    root = this;
    $ = jQuery;
    $.fn.extend({
        chosen: function(options) {
            if ($.browser.msie && ($.browser.version === "6.0" || ($.browser.version === "7.0" && document.documentMode === 7))) {
                return this;
            }
            return this.each(function(input_field) {
                var $this;
                $this = $(this);
                if (!$this.hasClass("chzn-done")) {
                    return $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });
    Chosen = (function(_super) {
        __extends(Chosen, _super);

        function Chosen() {
            return Chosen.__super__.constructor.apply(this, arguments);
        }
        Chosen.prototype.setup = function() {
            this.form_field_jq = $(this.form_field);
            this.current_value = this.form_field_jq.val();
            this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
            return this.overflow_container = typeof this.overflow_container === "undefined" ? this.form_field_jq.parent() : this.overflow_container;
        };
        Chosen.prototype.finish_setup = function() {
            return this.form_field_jq.addClass("chzn-done");
        };
        Chosen.prototype.set_up_html = function() {
            var container_div, dd_top, dd_width, sf_width, _this = this;
            this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, '_') : this.generate_field_id();
            this.container_id += "_chzn";
            this.f_width = this.form_field_jq.outerWidth();
            container_div = $("<div />", {
                id: this.container_id,
                "class": "chzn-container" + (this.is_rtl ? ' chzn-rtl' : ''),
                style: 'width: ' + this.f_width + 'px;'
            });
            if (this.is_multiple) {
                container_div.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px; display: none;"><ul class="chzn-results"></ul></div>');
            } else {
                container_div.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px; display: none;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
            }
            this.form_field_jq.hide().after(container_div);
            this.container = $('#' + this.container_id);
            this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single"));
            this.dropdown = this.container.find('div.chzn-drop').first();
            dd_top = this.container.height();
            dd_width = this.f_width - get_side_border_padding(this.dropdown);
            this.dropdown.css({
                "width": dd_width + "px",
                "top": dd_top + "px"
            });
            if (this.overflow_container) {
                $(this.overflow_container).add(document).bind("scroll", function(evt) {
                    return _this.update_position(evt);
                });
            }
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chzn-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chzn-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chzn-search').first();
                this.selected_item = this.container.find('.chzn-single').first();
                sf_width = dd_width - get_side_border_padding(this.search_container) - get_side_border_padding(this.search_field);
                this.search_field.css({
                    "width": sf_width + "px"
                });
            }
            this.results_build();
            this.set_tab_index();
            return this.form_field_jq.trigger("liszt:ready", {
                chosen: this
            });
        };
        Chosen.prototype.register_observers = function() {
            var _this = this;
            this.container.mousedown(function(evt) {
                return _this.container_mousedown(evt);
            });
            this.container.mouseup(function(evt) {
                return _this.container_mouseup(evt);
            });
            this.container.mouseenter(function(evt) {
                return _this.mouse_enter(evt);
            });
            this.container.mouseleave(function(evt) {
                return _this.mouse_leave(evt);
            });
            this.container.find(".chzn-single").bind("focus", function(evt) {
                _this.dropdown.css({
                    "display": "block"
                });
                return _this.search_field.focus();
            });
            this.search_results.mouseup(function(evt) {
                return _this.search_results_mouseup(evt);
            });
            this.search_results.mouseover(function(evt) {
                return _this.search_results_mouseover(evt);
            });
            this.search_results.mouseout(function(evt) {
                return _this.search_results_mouseout(evt);
            });
            this.form_field_jq.bind("liszt:updated", function(evt) {
                return _this.results_update_field(evt);
            });
            this.form_field_jq.bind("liszt:activate", function(evt) {
                return _this.activate_field(evt);
            });
            this.form_field_jq.bind("liszt:open", function(evt) {
                return _this.container_mousedown(evt);
            });
            this.search_field.blur(function(evt) {
                return _this.input_blur(evt);
            });
            this.search_field.keyup(function(evt) {
                return _this.keyup_checker(evt);
            });
            this.search_field.keydown(function(evt) {
                return _this.keydown_checker(evt);
            });
            if (this.is_multiple) {
                this.search_choices.click(function(evt) {
                    return _this.choices_click(evt);
                });
                return this.search_field.focus(function(evt) {
                    return _this.input_focus(evt);
                });
            } else {
                return this.container.click(function(evt) {
                    return evt.preventDefault();
                });
            }
        };
        Chosen.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chzn-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chzn-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus", this.activate_action);
                }
            }
        };
        Chosen.prototype.container_mousedown = function(evt) {
            var target_closelink;
            if (!this.is_disabled) {
                target_closelink = evt != null ? ($(evt.target)).hasClass("search-choice-close") : false;
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.stopPropagation();
                }
                if (!this.pending_destroy_click && !target_closelink) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(document).click(this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chzn-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                } else {
                    return this.pending_destroy_click = false;
                }
            }
        };
        Chosen.prototype.container_mouseup = function(evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };
        Chosen.prototype.blur_test = function(evt) {
            if (!this.active_field && this.container.hasClass("chzn-container-active")) {
                return this.close_field();
            }
        };
        Chosen.prototype.close_field = function() {
            $(document).unbind("click", this.click_test_action);
            if (!this.is_multiple) {
                this.selected_item.attr("tabindex", this.search_field.attr("tabindex"));
                this.search_field.attr("tabindex", -1);
            }
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chzn-container-active");
            this.winnow_results_clear();
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };
        Chosen.prototype.activate_field = function() {
            if (!this.is_multiple && !this.active_field) {
                this.search_field.attr("tabindex", this.selected_item.attr("tabindex"));
                this.selected_item.attr("tabindex", -1);
            }
            this.container.addClass("chzn-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };
        Chosen.prototype.test_active_click = function(evt) {
            if ($(evt.target).parents('#' + this.container_id).length) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };
        Chosen.prototype.results_build = function() {
            var content, data, _i, _len, _ref;
            this.parsing = true;
            this.results_data = root.SelectParser.select_to_array(this.form_field);
            if (this.is_multiple && this.choices > 0) {
                this.search_choices.find("li.search-choice").remove();
                this.choices = 0;
            } else if (!this.is_multiple) {
                this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.container.addClass("chzn-container-single-nosearch");
                } else {
                    this.container.removeClass("chzn-container-single-nosearch");
                }
            }
            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else if (!data.empty) {
                    content += this.result_add_option(data);
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.selected_item.removeClass("chzn-default").find("span").text(data.text);
                        if (this.allow_single_deselect) {
                            this.single_deselect_control_build();
                        }
                    }
                }
            }
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            this.search_results.html(content);
            return this.parsing = false;
        };
        Chosen.prototype.result_add_group = function(group) {
            if (!group.disabled) {
                group.dom_id = this.container_id + "_g_" + group.array_index;
                return '<li id="' + group.dom_id + '" class="group-result">' + $("<div />").text(group.label).html() + '</li>';
            } else {
                return "";
            }
        };
        Chosen.prototype.result_do_highlight = function(el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };
        Chosen.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };
        Chosen.prototype.results_show = function() {
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-single-with-drop");
                if (this.result_single_selected) {
                    this.result_do_highlight(this.result_single_selected);
                }
            } else if (this.max_selected_options <= this.choices) {
                this.form_field_jq.trigger("liszt:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.results_showing = true;
            this.update_position();
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            return this.winnow_results();
        };
        Chosen.prototype.update_position = function() {
            var dd_top, maxHeight, offset, realDropdownTop, window_scroll;
            if (this.results_showing) {
                dd_top = this.is_multiple ? this.container.height() : this.container.height() - 1;
                offset = this.container.offset();
                window_scroll = $(window).scrollTop();
                this.form_field_jq.trigger("liszt:showing_dropdown", {
                    chosen: this
                });
                this.dropdown.css({
                    "top": (offset.top + dd_top - window_scroll) + "px",
                    "left": offset.left + "px",
                    "width": (this.container.outerWidth(true) - 2) + "px",
                    "maxHeight": "99999px",
                    "display": "block"
                });
                this.search_results.css("maxHeight", "240px");
                realDropdownTop = this.dropdown.offset().top - window_scroll;
                maxHeight = $(window).height() - realDropdownTop;
                if (maxHeight > 240) {
                    maxHeight = 240;
                }
                if (maxHeight < 100) {
                    maxHeight = 100;
                }
                this.dropdown.css("maxHeight", maxHeight + "px");
                return this.search_results.css("maxHeight", (maxHeight - this.search_container.height() - 10) + "px");
            }
        };
        Chosen.prototype.results_hide = function() {
            if (!this.is_multiple) {
                this.selected_item.removeClass("chzn-single-with-drop");
            }
            this.result_clear_highlight();
            this.search_results.scrollTop(0);
            this.form_field_jq.trigger("liszt:hiding_dropdown", {
                chosen: this
            });
            this.dropdown.css({
                "left": "-9000px",
                "display": "none"
            });
            return this.results_showing = false;
        };
        Chosen.prototype.set_tab_index = function(el) {
            var ti;
            if (this.form_field_jq.attr("tabindex")) {
                ti = this.form_field_jq.attr("tabindex");
                this.form_field_jq.attr("tabindex", -1);
                if (this.is_multiple) {
                    return this.search_field.attr("tabindex", ti);
                } else {
                    this.selected_item.attr("tabindex", ti);
                    return this.search_field.attr("tabindex", -1);
                }
            }
        };
        Chosen.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };
        Chosen.prototype.search_results_mouseup = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                return this.result_select(evt);
            }
        };
        Chosen.prototype.search_results_mouseover = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };
        Chosen.prototype.search_results_mouseout = function(evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };
        Chosen.prototype.choices_click = function(evt) {
            evt.preventDefault();
            if (this.active_field && !($(evt.target).hasClass("search-choice" || $(evt.target).parents('.search-choice').first)) && !this.results_showing) {
                return this.results_show();
            }
        };
        Chosen.prototype.choice_build = function(item) {
            var choice_id, html, link, _this = this;
            if (this.is_multiple && this.max_selected_options <= this.choices) {
                this.form_field_jq.trigger("liszt:maxselected", {
                    chosen: this
                });
                return false;
            }
            choice_id = this.container_id + "_c_" + item.array_index;
            this.choices += 1;
            if (item.disabled) {
                html = '<li class="search-choice search-choice-disabled" id="' + choice_id + '"><span>' + item.html + '</span></li>';
            } else {
                html = '<li class="search-choice" id="' + choice_id + '"><span>' + item.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + item.array_index + '"></a></li>';
            }
            this.search_container.before(html);
            link = $('#' + choice_id).find("a").first();
            return link.click(function(evt) {
                return _this.choice_destroy_link_click(evt);
            });
        };
        Chosen.prototype.choice_destroy_link_click = function(evt) {
            evt.preventDefault();
            if (!this.is_disabled) {
                this.pending_destroy_click = true;
                return this.choice_destroy($(evt.target));
            } else {
                return evt.stopPropagation;
            }
        };
        Chosen.prototype.choice_destroy = function(link) {
            if (this.result_deselect(link.attr("rel"))) {
                this.choices -= 1;
                this.show_search_field_default();
                if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                return link.parents('li').first().remove();
            }
        };
        Chosen.prototype.results_reset = function() {
            this.form_field.options[0].selected = true;
            this.selected_item.find("span").text(this.default_text);
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-default");
            }
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };
        Chosen.prototype.results_reset_cleanup = function() {
            this.current_value = this.form_field_jq.val();
            return this.selected_item.find("abbr").remove();
        };
        Chosen.prototype.result_select = function(evt) {
            var high, high_id, item, position;
            if (this.result_highlight) {
                high = this.result_highlight;
                high_id = high.attr("id");
                this.result_clear_highlight();
                if (this.is_multiple) {
                    this.result_deactivate(high);
                } else {
                    this.search_results.find(".result-selected").removeClass("result-selected");
                    this.result_single_selected = high;
                    this.selected_item.removeClass("chzn-default");
                }
                high.addClass("result-selected");
                position = high_id.substr(high_id.lastIndexOf("_") + 1);
                item = this.results_data[position];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.selected_item.find("span").first().text(item.text);
                    if (this.allow_single_deselect) {
                        this.single_deselect_control_build();
                    }
                }
                if (!(evt.metaKey && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_value = this.form_field_jq.val();
                return this.search_field_scale();
            }
        };
        Chosen.prototype.result_activate = function(el) {
            return el.addClass("active-result");
        };
        Chosen.prototype.result_deactivate = function(el) {
            return el.removeClass("active-result");
        };
        Chosen.prototype.result_deselect = function(pos) {
            var result, result_data;
            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                result = $("#" + this.container_id + "_o_" + pos);
                result.removeClass("result-selected").addClass("active-result").show();
                this.result_clear_highlight();
                this.winnow_results();
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };
        Chosen.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
                return this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
        };
        Chosen.prototype.winnow_results = function() {
            var found, option, part, parts, regex, regexAnchor, result, result_id, results, searchText, startpos, text, zregex, _i, _j, _len, _len1, _ref;
            this.no_results_clear();
            results = 0;
            searchText = this.search_field.val() === this.default_text ? "" : $('<div/>').text($.trim(this.search_field.val())).html();
            regexAnchor = this.search_contains ? "" : "^";
            regex = new RegExp(regexAnchor + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
            zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (!option.disabled && !option.empty) {
                    if (option.group) {
                        $('#' + option.dom_id).css('display', 'none');
                    } else if (!(this.is_multiple && option.selected)) {
                        found = false;
                        result_id = option.dom_id;
                        result = $("#" + result_id);
                        if (regex.test(option.html)) {
                            found = true;
                            results += 1;
                        } else if (option.html.indexOf(" ") >= 0 || option.html.indexOf("[") === 0) {
                            parts = option.html.replace(/\[|\]/g, "").split(" ");
                            if (parts.length) {
                                for (_j = 0, _len1 = parts.length; _j < _len1; _j++) {
                                    part = parts[_j];
                                    if (regex.test(part)) {
                                        found = true;
                                        results += 1;
                                    }
                                }
                            }
                        }
                        if (found) {
                            if (searchText.length) {
                                startpos = option.html.search(zregex);
                                text = option.html.substr(0, startpos + searchText.length) + '</em>' + option.html.substr(startpos + searchText.length);
                                text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            } else {
                                text = option.html;
                            }
                            result.html(text);
                            this.result_activate(result);
                            if (option.group_array_index != null) {
                                $("#" + this.results_data[option.group_array_index].dom_id).css('display', 'list-item');
                            }
                        } else {
                            if (this.result_highlight && result_id === this.result_highlight.attr('id')) {
                                this.result_clear_highlight();
                            }
                            this.result_deactivate(result);
                        }
                    }
                }
            }
            if (results < 1 && searchText.length) {
                return this.no_results(searchText);
            } else {
                return this.winnow_results_set_highlight();
            }
        };
        Chosen.prototype.winnow_results_clear = function() {
            var li, lis, _i, _len, _results;
            this.search_field.val("");
            lis = this.search_results.find("li");
            _results = [];
            for (_i = 0, _len = lis.length; _i < _len; _i++) {
                li = lis[_i];
                li = $(li);
                if (li.hasClass("group-result")) {
                    _results.push(li.css('display', 'auto'));
                } else if (!this.is_multiple || !li.hasClass("result-selected")) {
                    _results.push(this.result_activate(li));
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };
        Chosen.prototype.winnow_results_set_highlight = function() {
            var do_high, selected_results;
            if (!this.result_highlight) {
                selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
                do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
                if (do_high != null) {
                    return this.result_do_highlight(do_high);
                }
            }
        };
        Chosen.prototype.no_results = function(terms) {
            var no_results_html;
            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            return this.search_results.append(no_results_html);
        };
        Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        };
        Chosen.prototype.keydown_arrow = function() {
            var first_active, next_sib;
            if (!this.result_highlight) {
                first_active = this.search_results.find("li.active-result").first();
                if (first_active) {
                    this.result_do_highlight($(first_active));
                }
            } else if (this.results_showing) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    this.result_do_highlight(next_sib);
                }
            }
            if (!this.results_showing) {
                return this.results_show();
            }
        };
        Chosen.prototype.keyup_arrow = function() {
            var prev_sibs;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };
        Chosen.prototype.keydown_backstroke = function() {
            var next_available_destroy;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };
        Chosen.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };
        Chosen.prototype.keydown_checker = function(evt) {
            var stroke, _ref;
            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    this.keydown_arrow();
                    break;
            }
        };
        Chosen.prototype.search_field_scale = function() {
            var div, h, style, style_block, styles, w, _i, _len;
            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                if (w > this.f_width - 10) {
                    w = this.f_width - 10;
                }
                this.search_field.css({
                    'width': w + 'px'
                });
                return this.update_position();
            }
        };
        Chosen.prototype.generate_random_id = function() {
            var string;
            string = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while ($("#" + string).length > 0) {
                string += this.generate_random_char();
            }
            return string;
        };
        return Chosen;
    })(AbstractChosen);
    get_side_border_padding = function(elmt) {
        var side_border_padding;
        return side_border_padding = elmt.outerWidth() - elmt.width();
    };
    root.get_side_border_padding = get_side_border_padding;
}).call(this);
(function($, undefined) {;;
    var defaults = {
        defaultView: 'month',
        aspectRatio: 1.35,
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next'
        },
        weekends: true,
        weekNumbers: false,
        weekNumberCalculation: 'iso',
        weekNumberTitle: 'W',
        allDayDefault: true,
        ignoreTimezone: true,
        lazyFetching: true,
        startParam: 'start',
        endParam: 'end',
        titleFormat: {
            month: 'MMMM yyyy',
            week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
            day: 'dddd, MMM d, yyyy'
        },
        columnFormat: {
            month: 'ddd',
            week: 'ddd M/d',
            day: 'dddd M/d'
        },
        timeFormat: {
            '': 'h(:mm)t'
        },
        isRTL: false,
        firstDay: 0,
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        buttonText: {
            prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
            next: "<span class='fc-text-arrow'>&rsaquo;</span>",
            prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
            nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day'
        },
        theme: false,
        buttonIcons: {
            prev: 'circle-triangle-w',
            next: 'circle-triangle-e'
        },
        unselectAuto: true,
        dropAccept: '*',
        handleWindowResize: true
    };
    var rtlDefaults = {
        header: {
            left: 'next,prev today',
            center: '',
            right: 'title'
        },
        buttonText: {
            prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
            next: "<span class='fc-text-arrow'>&lsaquo;</span>",
            prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
            nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
        },
        buttonIcons: {
            prev: 'circle-triangle-e',
            next: 'circle-triangle-w'
        }
    };;;
    var fc = $.fullCalendar = {
        version: "1.6.4"
    };
    var fcViews = fc.views = {};
    $.fn.fullCalendar = function(options) {
        if (typeof options == 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            var res;
            this.each(function() {
                var calendar = $.data(this, 'fullCalendar');
                if (calendar && $.isFunction(calendar[options])) {
                    var r = calendar[options].apply(calendar, args);
                    if (res === undefined) {
                        res = r;
                    }
                    if (options == 'destroy') {
                        $.removeData(this, 'fullCalendar');
                    }
                }
            });
            if (res !== undefined) {
                return res;
            }
            return this;
        }
        options = options || {};
        var eventSources = options.eventSources || [];
        delete options.eventSources;
        if (options.events) {
            eventSources.push(options.events);
            delete options.events;
        }
        options = $.extend(true, {}, defaults, (options.isRTL || options.isRTL === undefined && defaults.isRTL) ? rtlDefaults : {}, options);
        this.each(function(i, _element) {
            var element = $(_element);
            var calendar = new Calendar(element, options, eventSources);
            element.data('fullCalendar', calendar);
            calendar.render();
        });
        return this;
    };

    function setDefaults(d) {
        $.extend(true, defaults, d);
    };;

    function Calendar(element, options, eventSources) {
        var t = this;
        t.options = options;
        t.render = render;
        t.destroy = destroy;
        t.refetchEvents = refetchEvents;
        t.reportEvents = reportEvents;
        t.reportEventChange = reportEventChange;
        t.rerenderEvents = rerenderEvents;
        t.changeView = changeView;
        t.select = select;
        t.unselect = unselect;
        t.prev = prev;
        t.next = next;
        t.prevYear = prevYear;
        t.nextYear = nextYear;
        t.today = today;
        t.gotoDate = gotoDate;
        t.incrementDate = incrementDate;
        t.formatDate = function(format, date) {
            return formatDate(format, date, options)
        };
        t.formatDates = function(format, date1, date2) {
            return formatDates(format, date1, date2, options)
        };
        t.getDate = getDate;
        t.getView = getView;
        t.option = option;
        t.trigger = trigger;
        EventManager.call(t, options, eventSources);
        var isFetchNeeded = t.isFetchNeeded;
        var fetchEvents = t.fetchEvents;
        var _element = element[0];
        var header;
        var headerElement;
        var content;
        var tm;
        var currentView;
        var elementOuterWidth;
        var suggestedViewHeight;
        var resizeUID = 0;
        var ignoreWindowResize = 0;
        var date = new Date();
        var events = [];
        var _dragElement;
        setYMD(date, options.year, options.month, options.date);

        function render(inc) {
            if (!content) {
                initialRender();
            } else if (elementVisible()) {
                calcSize();
                _renderView(inc);
            }
        }

        function initialRender() {
            tm = options.theme ? 'ui' : 'fc';
            element.addClass('fc');
            if (options.isRTL) {
                element.addClass('fc-rtl');
            } else {
                element.addClass('fc-ltr');
            }
            if (options.theme) {
                element.addClass('ui-widget');
            }
            content = $("<div class='fc-content' style='position:relative'/>").prependTo(element);
            header = new Header(t, options);
            headerElement = header.render();
            if (headerElement) {
                element.prepend(headerElement);
            }
            changeView(options.defaultView);
            if (options.handleWindowResize) {
                $(window).resize(windowResize);
            }
            if (!bodyVisible()) {
                lateRender();
            }
        }

        function lateRender() {
            setTimeout(function() {
                if (!currentView.start && bodyVisible()) {
                    renderView();
                }
            }, 0);
        }

        function destroy() {
            if (currentView) {
                trigger('viewDestroy', currentView, currentView, currentView.element);
                currentView.triggerEventDestroy();
            }
            $(window).unbind('resize', windowResize);
            header.destroy();
            content.remove();
            element.removeClass('fc fc-rtl ui-widget');
        }

        function elementVisible() {
            return element.is(':visible');
        }

        function bodyVisible() {
            return $('body').is(':visible');
        }

        function changeView(newViewName) {
            if (!currentView || newViewName != currentView.name) {
                _changeView(newViewName);
            }
        }

        function _changeView(newViewName) {
            ignoreWindowResize++;
            if (currentView) {
                trigger('viewDestroy', currentView, currentView, currentView.element);
                unselect();
                currentView.triggerEventDestroy();
                freezeContentHeight();
                currentView.element.remove();
                header.deactivateButton(currentView.name);
            }
            header.activateButton(newViewName);
            currentView = new fcViews[newViewName]($("<div class='fc-view fc-view-" + newViewName + "' style='position:relative'/>").appendTo(content), t);
            renderView();
            unfreezeContentHeight();
            ignoreWindowResize--;
        }

        function renderView(inc) {
            if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
                if (elementVisible()) {
                    _renderView(inc);
                }
            }
        }

        function _renderView(inc) {
            ignoreWindowResize++;
            if (currentView.start) {
                trigger('viewDestroy', currentView, currentView, currentView.element);
                unselect();
                clearEvents();
            }
            freezeContentHeight();
            currentView.render(date, inc || 0);
            setSize();
            unfreezeContentHeight();
            (currentView.afterRender || noop)();
            updateTitle();
            updateTodayButton();
            trigger('viewRender', currentView, currentView, currentView.element);
            currentView.trigger('viewDisplay', _element);
            ignoreWindowResize--;
            getAndRenderEvents();
        }

        function updateSize() {
            if (elementVisible()) {
                unselect();
                clearEvents();
                calcSize();
                setSize();
                renderEvents();
            }
        }

        function calcSize() {
            if (options.contentHeight) {
                suggestedViewHeight = options.contentHeight;
            } else if (options.height) {
                suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);
            } else {
                suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
            }
        }

        function setSize() {
            if (suggestedViewHeight === undefined) {
                calcSize();
            }
            ignoreWindowResize++;
            currentView.setHeight(suggestedViewHeight);
            currentView.setWidth(content.width());
            ignoreWindowResize--;
            elementOuterWidth = element.outerWidth();
        }

        function windowResize() {
            if (!ignoreWindowResize) {
                if (currentView.start) {
                    var uid = ++resizeUID;
                    setTimeout(function() {
                        if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
                            if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
                                ignoreWindowResize++;
                                updateSize();
                                currentView.trigger('windowResize', _element);
                                ignoreWindowResize--;
                            }
                        }
                    }, 200);
                } else {
                    lateRender();
                }
            }
        }

        function refetchEvents() {
            clearEvents();
            fetchAndRenderEvents();
        }

        function rerenderEvents(modifiedEventID) {
            clearEvents();
            renderEvents(modifiedEventID);
        }

        function renderEvents(modifiedEventID) {
            if (elementVisible()) {
                currentView.setEventData(events);
                currentView.renderEvents(events, modifiedEventID);
                currentView.trigger('eventAfterAllRender');
            }
        }

        function clearEvents() {
            currentView.triggerEventDestroy();
            currentView.clearEvents();
            currentView.clearEventData();
        }

        function getAndRenderEvents() {
            if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
                fetchAndRenderEvents();
            } else {
                renderEvents();
            }
        }

        function fetchAndRenderEvents() {
            fetchEvents(currentView.visStart, currentView.visEnd);
        }

        function reportEvents(_events) {
            events = _events;
            renderEvents();
        }

        function reportEventChange(eventID) {
            rerenderEvents(eventID);
        }

        function updateTitle() {
            header.updateTitle(currentView.title);
        }

        function updateTodayButton() {
            var today = new Date();
            if (today >= currentView.start && today < currentView.end) {
                header.disableButton('today');
            } else {
                header.enableButton('today');
            }
        }

        function select(start, end, allDay) {
            currentView.select(start, end, allDay === undefined ? true : allDay);
        }

        function unselect() {
            if (currentView) {
                currentView.unselect();
            }
        }

        function prev() {
            renderView(-1);
        }

        function next() {
            renderView(1);
        }

        function prevYear() {
            addYears(date, -1);
            renderView();
        }

        function nextYear() {
            addYears(date, 1);
            renderView();
        }

        function today() {
            date = new Date();
            renderView();
        }

        function gotoDate(year, month, dateOfMonth) {
            if (year instanceof Date) {
                date = cloneDate(year);
            } else {
                setYMD(date, year, month, dateOfMonth);
            }
            renderView();
        }

        function incrementDate(years, months, days) {
            if (years !== undefined) {
                addYears(date, years);
            }
            if (months !== undefined) {
                addMonths(date, months);
            }
            if (days !== undefined) {
                addDays(date, days);
            }
            renderView();
        }

        function getDate() {
            return cloneDate(date);
        }

        function freezeContentHeight() {
            content.css({
                width: '100%',
                height: content.height(),
                overflow: 'hidden'
            });
        }

        function unfreezeContentHeight() {
            content.css({
                width: '',
                height: '',
                overflow: ''
            });
        }

        function getView() {
            return currentView;
        }

        function option(name, value) {
            if (value === undefined) {
                return options[name];
            }
            if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
                options[name] = value;
                updateSize();
            }
        }

        function trigger(name, thisObj) {
            if (options[name]) {
                return options[name].apply(thisObj || _element, Array.prototype.slice.call(arguments, 2));
            }
        }
        if (options.droppable) {
            $(document).bind('dragstart', function(ev, ui) {
                var _e = ev.target;
                var e = $(_e);
                if (!e.parents('.fc').length) {
                    var accept = options.dropAccept;
                    if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {
                        _dragElement = _e;
                        currentView.dragStart(_dragElement, ev, ui);
                    }
                }
            }).bind('dragstop', function(ev, ui) {
                if (_dragElement) {
                    currentView.dragStop(_dragElement, ev, ui);
                    _dragElement = null;
                }
            });
        }
    };;

    function Header(calendar, options) {
        var t = this;
        t.render = render;
        t.destroy = destroy;
        t.updateTitle = updateTitle;
        t.activateButton = activateButton;
        t.deactivateButton = deactivateButton;
        t.disableButton = disableButton;
        t.enableButton = enableButton;
        var element = $([]);
        var tm;

        function render() {
            tm = options.theme ? 'ui' : 'fc';
            var sections = options.header;
            if (sections) {
                element = $("<table class='fc-header' style='width:100%'/>").append($("<tr/>").append(renderSection('left')).append(renderSection('center')).append(renderSection('right')));
                return element;
            }
        }

        function destroy() {
            element.remove();
        }

        function renderSection(position) {
            var e = $("<td class='fc-header-" + position + "'/>");
            var buttonStr = options.header[position];
            if (buttonStr) {
                $.each(buttonStr.split(' '), function(i) {
                    if (i > 0) {
                        e.append("<span class='fc-header-space'/>");
                    }
                    var prevButton;
                    $.each(this.split(','), function(j, buttonName) {
                        if (buttonName == 'title') {
                            e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
                            if (prevButton) {
                                prevButton.addClass(tm + '-corner-right');
                            }
                            prevButton = null;
                        } else {
                            var buttonClick;
                            if (calendar[buttonName]) {
                                buttonClick = calendar[buttonName];
                            } else if (fcViews[buttonName]) {
                                buttonClick = function() {
                                    button.removeClass(tm + '-state-hover');
                                    calendar.changeView(buttonName);
                                };
                            }
                            if (buttonClick) {
                                var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null;
                                var text = smartProperty(options.buttonText, buttonName);
                                var button = $("<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +
                                    (icon ? "<span class='fc-icon-wrap'>" + "<span class='ui-icon ui-icon-" + icon + "'/>" + "</span>" : text) + "</span>").click(function() {
                                    if (!button.hasClass(tm + '-state-disabled')) {
                                        buttonClick();
                                    }
                                }).mousedown(function() {
                                    button.not('.' + tm + '-state-active').not('.' + tm + '-state-disabled').addClass(tm + '-state-down');
                                }).mouseup(function() {
                                    button.removeClass(tm + '-state-down');
                                }).hover(function() {
                                    button.not('.' + tm + '-state-active').not('.' + tm + '-state-disabled').addClass(tm + '-state-hover');
                                }, function() {
                                    button.removeClass(tm + '-state-hover').removeClass(tm + '-state-down');
                                }).appendTo(e);
                                disableTextSelection(button);
                                if (!prevButton) {
                                    button.addClass(tm + '-corner-left');
                                }
                                prevButton = button;
                            }
                        }
                    });
                    if (prevButton) {
                        prevButton.addClass(tm + '-corner-right');
                    }
                });
            }
            return e;
        }

        function updateTitle(html) {
            element.find('h2').html(html);
        }

        function activateButton(buttonName) {
            element.find('span.fc-button-' + buttonName).addClass(tm + '-state-active');
        }

        function deactivateButton(buttonName) {
            element.find('span.fc-button-' + buttonName).removeClass(tm + '-state-active');
        }

        function disableButton(buttonName) {
            element.find('span.fc-button-' + buttonName).addClass(tm + '-state-disabled');
        }

        function enableButton(buttonName) {
            element.find('span.fc-button-' + buttonName).removeClass(tm + '-state-disabled');
        }
    };;
    fc.sourceNormalizers = [];
    fc.sourceFetchers = [];
    var ajaxDefaults = {
        dataType: 'json',
        cache: false
    };
    var eventGUID = 1;

    function EventManager(options, _sources) {
        var t = this;
        t.isFetchNeeded = isFetchNeeded;
        t.fetchEvents = fetchEvents;
        t.addEventSource = addEventSource;
        t.removeEventSource = removeEventSource;
        t.updateEvent = updateEvent;
        t.renderEvent = renderEvent;
        t.removeEvents = removeEvents;
        t.clientEvents = clientEvents;
        t.normalizeEvent = normalizeEvent;
        var trigger = t.trigger;
        var getView = t.getView;
        var reportEvents = t.reportEvents;
        var stickySource = {
            events: []
        };
        var sources = [stickySource];
        var rangeStart, rangeEnd;
        var currentFetchID = 0;
        var pendingSourceCnt = 0;
        var loadingLevel = 0;
        var cache = [];
        for (var i = 0; i < _sources.length; i++) {
            _addEventSource(_sources[i]);
        }

        function isFetchNeeded(start, end) {
            return !rangeStart || start < rangeStart || end > rangeEnd;
        }

        function fetchEvents(start, end) {
            rangeStart = start;
            rangeEnd = end;
            cache = [];
            var fetchID = ++currentFetchID;
            var len = sources.length;
            pendingSourceCnt = len;
            for (var i = 0; i < len; i++) {
                fetchEventSource(sources[i], fetchID);
            }
        }

        function fetchEventSource(source, fetchID) {
            _fetchEventSource(source, function(events) {
                if (fetchID == currentFetchID) {
                    if (events) {
                        if (options.eventDataTransform) {
                            events = $.map(events, options.eventDataTransform);
                        }
                        if (source.eventDataTransform) {
                            events = $.map(events, source.eventDataTransform);
                        }
                        for (var i = 0; i < events.length; i++) {
                            events[i].source = source;
                            normalizeEvent(events[i]);
                        }
                        cache = cache.concat(events);
                    }
                    pendingSourceCnt--;
                    if (!pendingSourceCnt) {
                        reportEvents(cache);
                    }
                }
            });
        }

        function _fetchEventSource(source, callback) {
            var i;
            var fetchers = fc.sourceFetchers;
            var res;
            for (i = 0; i < fetchers.length; i++) {
                res = fetchers[i](source, rangeStart, rangeEnd, callback);
                if (res === true) {
                    return;
                } else if (typeof res == 'object') {
                    _fetchEventSource(res, callback);
                    return;
                }
            }
            var events = source.events;
            if (events) {
                if ($.isFunction(events)) {
                    pushLoading();
                    events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {
                        callback(events);
                        popLoading();
                    });
                } else if ($.isArray(events)) {
                    callback(events);
                } else {
                    callback();
                }
            } else {
                var url = source.url;
                if (url) {
                    var success = source.success;
                    var error = source.error;
                    var complete = source.complete;
                    var customData;
                    if ($.isFunction(source.data)) {
                        customData = source.data();
                    } else {
                        customData = source.data;
                    }
                    var data = $.extend({}, customData || {});
                    var startParam = firstDefined(source.startParam, options.startParam);
                    var endParam = firstDefined(source.endParam, options.endParam);
                    if (startParam) {
                        data[startParam] = Math.round(+rangeStart / 1000);
                    }
                    if (endParam) {
                        data[endParam] = Math.round(+rangeEnd / 1000);
                    }
                    pushLoading();
                    $.ajax($.extend({}, ajaxDefaults, source, {
                        data: data,
                        success: function(events) {
                            events = events || [];
                            var res = applyAll(success, this, arguments);
                            if ($.isArray(res)) {
                                events = res;
                            }
                            callback(events);
                        },
                        error: function() {
                            applyAll(error, this, arguments);
                            callback();
                        },
                        complete: function() {
                            applyAll(complete, this, arguments);
                            popLoading();
                        }
                    }));
                } else {
                    callback();
                }
            }
        }

        function addEventSource(source) {
            source = _addEventSource(source);
            if (source) {
                pendingSourceCnt++;
                fetchEventSource(source, currentFetchID);
            }
        }

        function _addEventSource(source) {
            if ($.isFunction(source) || $.isArray(source)) {
                source = {
                    events: source
                };
            } else if (typeof source == 'string') {
                source = {
                    url: source
                };
            }
            if (typeof source == 'object') {
                normalizeSource(source);
                sources.push(source);
                return source;
            }
        }

        function removeEventSource(source) {
            sources = $.grep(sources, function(src) {
                return !isSourcesEqual(src, source);
            });
            cache = $.grep(cache, function(e) {
                return !isSourcesEqual(e.source, source);
            });
            reportEvents(cache);
        }

        function updateEvent(event) {
            var i, len = cache.length,
                e, defaultEventEnd = getView().defaultEventEnd,
                startDelta = event.start - event._start,
                endDelta = event.end ? (event.end - (event._end || defaultEventEnd(event))) : 0;
            for (i = 0; i < len; i++) {
                e = cache[i];
                if (e._id == event._id && e != event) {
                    e.start = new Date(+e.start + startDelta);
                    if (event.end) {
                        if (e.end) {
                            e.end = new Date(+e.end + endDelta);
                        } else {
                            e.end = new Date(+defaultEventEnd(e) + endDelta);
                        }
                    } else {
                        e.end = null;
                    }
                    e.title = event.title;
                    e.url = event.url;
                    e.allDay = event.allDay;
                    e.className = event.className;
                    e.editable = event.editable;
                    e.color = event.color;
                    e.backgroundColor = event.backgroundColor;
                    e.borderColor = event.borderColor;
                    e.textColor = event.textColor;
                    normalizeEvent(e);
                }
            }
            normalizeEvent(event);
            reportEvents(cache);
        }

        function renderEvent(event, stick) {
            normalizeEvent(event);
            if (!event.source) {
                if (stick) {
                    stickySource.events.push(event);
                    event.source = stickySource;
                }
                cache.push(event);
            }
            reportEvents(cache);
        }

        function removeEvents(filter) {
            if (!filter) {
                cache = [];
                for (var i = 0; i < sources.length; i++) {
                    if ($.isArray(sources[i].events)) {
                        sources[i].events = [];
                    }
                }
            } else {
                if (!$.isFunction(filter)) {
                    var id = filter + '';
                    filter = function(e) {
                        return e._id == id;
                    };
                }
                cache = $.grep(cache, filter, true);
                for (var i = 0; i < sources.length; i++) {
                    if ($.isArray(sources[i].events)) {
                        sources[i].events = $.grep(sources[i].events, filter, true);
                    }
                }
            }
            reportEvents(cache);
        }

        function clientEvents(filter) {
            if ($.isFunction(filter)) {
                return $.grep(cache, filter);
            } else if (filter) {
                filter += '';
                return $.grep(cache, function(e) {
                    return e._id == filter;
                });
            }
            return cache;
        }

        function pushLoading() {
            if (!loadingLevel++) {
                trigger('loading', null, true, getView());
            }
        }

        function popLoading() {
            if (!--loadingLevel) {
                trigger('loading', null, false, getView());
            }
        }

        function normalizeEvent(event) {
            var source = event.source || {};
            var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);
            event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
            if (event.date) {
                if (!event.start) {
                    event.start = event.date;
                }
                delete event.date;
            }
            event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
            event.end = parseDate(event.end, ignoreTimezone);
            if (event.end && event.end <= event.start) {
                event.end = null;
            }
            event._end = event.end ? cloneDate(event.end) : null;
            if (event.allDay === undefined) {
                event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);
            }
            if (event.className) {
                if (typeof event.className == 'string') {
                    event.className = event.className.split(/\s+/);
                }
            } else {
                event.className = [];
            }
        }

        function normalizeSource(source) {
            if (source.className) {
                if (typeof source.className == 'string') {
                    source.className = source.className.split(/\s+/);
                }
            } else {
                source.className = [];
            }
            var normalizers = fc.sourceNormalizers;
            for (var i = 0; i < normalizers.length; i++) {
                normalizers[i](source);
            }
        }

        function isSourcesEqual(source1, source2) {
            return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
        }

        function getSourcePrimitive(source) {
            return ((typeof source == 'object') ? (source.events || source.url) : '') || source;
        }
    };;
    fc.addDays = addDays;
    fc.cloneDate = cloneDate;
    fc.parseDate = parseDate;
    fc.parseISO8601 = parseISO8601;
    fc.parseTime = parseTime;
    fc.formatDate = formatDate;
    fc.formatDates = formatDates;
    var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        DAY_MS = 86400000,
        HOUR_MS = 3600000,
        MINUTE_MS = 60000;

    function addYears(d, n, keepTime) {
        d.setFullYear(d.getFullYear() + n);
        if (!keepTime) {
            clearTime(d);
        }
        return d;
    }

    function addMonths(d, n, keepTime) {
        if (+d) {
            var m = d.getMonth() + n,
                check = cloneDate(d);
            check.setDate(1);
            check.setMonth(m);
            d.setMonth(m);
            if (!keepTime) {
                clearTime(d);
            }
            while (d.getMonth() != check.getMonth()) {
                d.setDate(d.getDate() + (d < check ? 1 : -1));
            }
        }
        return d;
    }

    function addDays(d, n, keepTime) {
        if (+d) {
            var dd = d.getDate() + n,
                check = cloneDate(d);
            check.setHours(9);
            check.setDate(dd);
            d.setDate(dd);
            if (!keepTime) {
                clearTime(d);
            }
            fixDate(d, check);
        }
        return d;
    }

    function fixDate(d, check) {
        if (+d) {
            while (d.getDate() != check.getDate()) {
                d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);
            }
        }
    }

    function addMinutes(d, n) {
        d.setMinutes(d.getMinutes() + n);
        return d;
    }

    function clearTime(d) {
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d;
    }

    function cloneDate(d, dontKeepTime) {
        if (dontKeepTime) {
            return clearTime(new Date(+d));
        }
        return new Date(+d);
    }

    function zeroDate() {
        var i = 0,
            d;
        do {
            d = new Date(1970, i++, 1);
        } while (d.getHours());
        return d;
    }

    function dayDiff(d1, d2) {
        return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);
    }

    function setYMD(date, y, m, d) {
        if (y !== undefined && y != date.getFullYear()) {
            date.setDate(1);
            date.setMonth(0);
            date.setFullYear(y);
        }
        if (m !== undefined && m != date.getMonth()) {
            date.setDate(1);
            date.setMonth(m);
        }
        if (d !== undefined) {
            date.setDate(d);
        }
    }

    function parseDate(s, ignoreTimezone) {
        if (typeof s == 'object') {
            return s;
        }
        if (typeof s == 'number') {
            return new Date(s * 1000);
        }
        if (typeof s == 'string') {
            if (s.match(/^\d+(\.\d+)?$/)) {
                return new Date(parseFloat(s) * 1000);
            }
            if (ignoreTimezone === undefined) {
                ignoreTimezone = true;
            }
            return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
        }
        return null;
    }

    function parseISO8601(s, ignoreTimezone) {
        var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!m) {
            return null;
        }
        var date = new Date(m[1], 0, 1);
        if (ignoreTimezone || !m[13]) {
            var check = new Date(m[1], 0, 1, 9, 0);
            if (m[3]) {
                date.setMonth(m[3] - 1);
                check.setMonth(m[3] - 1);
            }
            if (m[5]) {
                date.setDate(m[5]);
                check.setDate(m[5]);
            }
            fixDate(date, check);
            if (m[7]) {
                date.setHours(m[7]);
            }
            if (m[8]) {
                date.setMinutes(m[8]);
            }
            if (m[10]) {
                date.setSeconds(m[10]);
            }
            if (m[12]) {
                date.setMilliseconds(Number("0." + m[12]) * 1000);
            }
            fixDate(date, check);
        } else {
            date.setUTCFullYear(m[1], m[3] ? m[3] - 1 : 0, m[5] || 1);
            date.setUTCHours(m[7] || 0, m[8] || 0, m[10] || 0, m[12] ? Number("0." + m[12]) * 1000 : 0);
            if (m[14]) {
                var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);
                offset *= m[15] == '-' ? 1 : -1;
                date = new Date(+date + (offset * 60 * 1000));
            }
        }
        return date;
    }

    function parseTime(s) {
        if (typeof s == 'number') {
            return s * 60;
        }
        if (typeof s == 'object') {
            return s.getHours() * 60 + s.getMinutes();
        }
        var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
        if (m) {
            var h = parseInt(m[1], 10);
            if (m[3]) {
                h %= 12;
                if (m[3].toLowerCase().charAt(0) == 'p') {
                    h += 12;
                }
            }
            return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);
        }
    }

    function formatDate(date, format, options) {
        return formatDates(date, null, format, options);
    }

    function formatDates(date1, date2, format, options) {
        options = options || defaults;
        var date = date1,
            otherDate = date2,
            i, len = format.length,
            c, i2, formatter, res = '';
        for (i = 0; i < len; i++) {
            c = format.charAt(i);
            if (c == "'") {
                for (i2 = i + 1; i2 < len; i2++) {
                    if (format.charAt(i2) == "'") {
                        if (date) {
                            if (i2 == i + 1) {
                                res += "'";
                            } else {
                                res += format.substring(i + 1, i2);
                            }
                            i = i2;
                        }
                        break;
                    }
                }
            } else if (c == '(') {
                for (i2 = i + 1; i2 < len; i2++) {
                    if (format.charAt(i2) == ')') {
                        var subres = formatDate(date, format.substring(i + 1, i2), options);
                        if (parseInt(subres.replace(/\D/, ''), 10)) {
                            res += subres;
                        }
                        i = i2;
                        break;
                    }
                }
            } else if (c == '[') {
                for (i2 = i + 1; i2 < len; i2++) {
                    if (format.charAt(i2) == ']') {
                        var subformat = format.substring(i + 1, i2);
                        var subres = formatDate(date, subformat, options);
                        if (subres != formatDate(otherDate, subformat, options)) {
                            res += subres;
                        }
                        i = i2;
                        break;
                    }
                }
            } else if (c == '{') {
                date = date2;
                otherDate = date1;
            } else if (c == '}') {
                date = date1;
                otherDate = date2;
            } else {
                for (i2 = len; i2 > i; i2--) {
                    if (formatter = dateFormatters[format.substring(i, i2)]) {
                        if (date) {
                            res += formatter(date, options);
                        }
                        i = i2 - 1;
                        break;
                    }
                }
                if (i2 == i) {
                    if (date) {
                        res += c;
                    }
                }
            }
        }
        return res;
    };
    var dateFormatters = {
        s: function(d) {
            return d.getSeconds()
        },
        ss: function(d) {
            return zeroPad(d.getSeconds())
        },
        m: function(d) {
            return d.getMinutes()
        },
        mm: function(d) {
            return zeroPad(d.getMinutes())
        },
        h: function(d) {
            return d.getHours() % 12 || 12
        },
        hh: function(d) {
            return zeroPad(d.getHours() % 12 || 12)
        },
        H: function(d) {
            return d.getHours()
        },
        HH: function(d) {
            return zeroPad(d.getHours())
        },
        d: function(d) {
            return d.getDate()
        },
        dd: function(d) {
            return zeroPad(d.getDate())
        },
        ddd: function(d, o) {
            return o.dayNamesShort[d.getDay()]
        },
        dddd: function(d, o) {
            return o.dayNames[d.getDay()]
        },
        M: function(d) {
            return d.getMonth() + 1
        },
        MM: function(d) {
            return zeroPad(d.getMonth() + 1)
        },
        MMM: function(d, o) {
            return o.monthNamesShort[d.getMonth()]
        },
        MMMM: function(d, o) {
            return o.monthNames[d.getMonth()]
        },
        yy: function(d) {
            return (d.getFullYear() + '').substring(2)
        },
        yyyy: function(d) {
            return d.getFullYear()
        },
        t: function(d) {
            return d.getHours() < 12 ? 'a' : 'p'
        },
        tt: function(d) {
            return d.getHours() < 12 ? 'am' : 'pm'
        },
        T: function(d) {
            return d.getHours() < 12 ? 'A' : 'P'
        },
        TT: function(d) {
            return d.getHours() < 12 ? 'AM' : 'PM'
        },
        u: function(d) {
            return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'")
        },
        S: function(d) {
            var date = d.getDate();
            if (date > 10 && date < 20) {
                return 'th';
            }
            return ['st', 'nd', 'rd'][date % 10 - 1] || 'th';
        },
        w: function(d, o) {
            return o.weekNumberCalculation(d);
        },
        W: function(d) {
            return iso8601Week(d);
        }
    };
    fc.dateFormatters = dateFormatters;

    function iso8601Week(date) {
        var time;
        var checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    };;
    fc.applyAll = applyAll;

    function exclEndDay(event) {
        if (event.end) {
            return _exclEndDay(event.end, event.allDay);
        } else {
            return addDays(cloneDate(event.start), 1);
        }
    }

    function _exclEndDay(end, allDay) {
        end = cloneDate(end);
        return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
    }

    function lazySegBind(container, segs, bindHandlers) {
        container.unbind('mouseover').mouseover(function(ev) {
            var parent = ev.target,
                e, i, seg;
            while (parent != this) {
                e = parent;
                parent = parent.parentNode;
            }
            if ((i = e._fci) !== undefined) {
                e._fci = undefined;
                seg = segs[i];
                bindHandlers(seg.event, seg.element, seg);
                $(ev.target).trigger(ev);
            }
            ev.stopPropagation();
        });
    }

    function setOuterWidth(element, width, includeMargins) {
        for (var i = 0, e; i < element.length; i++) {
            e = $(element[i]);
            e.width(Math.max(0, width - hsides(e, includeMargins)));
        }
    }

    function setOuterHeight(element, height, includeMargins) {
        for (var i = 0, e; i < element.length; i++) {
            e = $(element[i]);
            e.height(Math.max(0, height - vsides(e, includeMargins)));
        }
    }

    function hsides(element, includeMargins) {
        return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);
    }

    function hpadding(element) {
        return (parseFloat($.css(element[0], 'paddingLeft', true)) || 0) +
            (parseFloat($.css(element[0], 'paddingRight', true)) || 0);
    }

    function hmargins(element) {
        return (parseFloat($.css(element[0], 'marginLeft', true)) || 0) +
            (parseFloat($.css(element[0], 'marginRight', true)) || 0);
    }

    function hborders(element) {
        return (parseFloat($.css(element[0], 'borderLeftWidth', true)) || 0) +
            (parseFloat($.css(element[0], 'borderRightWidth', true)) || 0);
    }

    function vsides(element, includeMargins) {
        return vpadding(element) + vborders(element) + (includeMargins ? vmargins(element) : 0);
    }

    function vpadding(element) {
        return (parseFloat($.css(element[0], 'paddingTop', true)) || 0) +
            (parseFloat($.css(element[0], 'paddingBottom', true)) || 0);
    }

    function vmargins(element) {
        return (parseFloat($.css(element[0], 'marginTop', true)) || 0) +
            (parseFloat($.css(element[0], 'marginBottom', true)) || 0);
    }

    function vborders(element) {
        return (parseFloat($.css(element[0], 'borderTopWidth', true)) || 0) +
            (parseFloat($.css(element[0], 'borderBottomWidth', true)) || 0);
    }

    function noop() {}

    function dateCompare(a, b) {
        return a - b;
    }

    function arrayMax(a) {
        return Math.max.apply(Math, a);
    }

    function zeroPad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    function smartProperty(obj, name) {
        if (obj[name] !== undefined) {
            return obj[name];
        }
        var parts = name.split(/(?=[A-Z])/),
            i = parts.length - 1,
            res;
        for (; i >= 0; i--) {
            res = obj[parts[i].toLowerCase()];
            if (res !== undefined) {
                return res;
            }
        }
        return obj[''];
    }

    function htmlEscape(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;').replace(/\n/g, '<br />');
    }

    function disableTextSelection(element) {
        element.attr('unselectable', 'on').css('MozUserSelect', 'none').bind('selectstart.ui', function() {
            return false;
        });
    }

    function markFirstLast(e) {
        e.children().removeClass('fc-first fc-last').filter(':first-child').addClass('fc-first').end().filter(':last-child').addClass('fc-last');
    }

    function setDayID(cell, date) {
        cell.each(function(i, _cell) {
            _cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);
        });
    }

    function getSkinCss(event, opt) {
        var source = event.source || {};
        var eventColor = event.color;
        var sourceColor = source.color;
        var optionColor = opt('eventColor');
        var backgroundColor = event.backgroundColor || eventColor || source.backgroundColor || sourceColor || opt('eventBackgroundColor') || optionColor;
        var borderColor = event.borderColor || eventColor || source.borderColor || sourceColor || opt('eventBorderColor') || optionColor;
        var textColor = event.textColor || source.textColor || opt('eventTextColor');
        var statements = [];
        if (backgroundColor) {
            statements.push('background-color:' + backgroundColor);
        }
        if (borderColor) {
            statements.push('border-color:' + borderColor);
        }
        if (textColor) {
            statements.push('color:' + textColor);
        }
        return statements.join(';');
    }

    function applyAll(functions, thisObj, args) {
        if ($.isFunction(functions)) {
            functions = [functions];
        }
        if (functions) {
            var i;
            var ret;
            for (i = 0; i < functions.length; i++) {
                ret = functions[i].apply(thisObj, args) || ret;
            }
            return ret;
        }
    }

    function firstDefined() {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== undefined) {
                return arguments[i];
            }
        }
    };;
    fcViews.month = MonthView;

    function MonthView(element, calendar) {
        var t = this;
        t.render = render;
        BasicView.call(t, element, calendar, 'month');
        var opt = t.opt;
        var renderBasic = t.renderBasic;
        var skipHiddenDays = t.skipHiddenDays;
        var getCellsPerWeek = t.getCellsPerWeek;
        var formatDate = calendar.formatDate;

        function render(date, delta) {
            if (delta) {
                addMonths(date, delta);
                date.setDate(1);
            }
            var firstDay = opt('firstDay');
            var start = cloneDate(date, true);
            start.setDate(1);
            var end = addMonths(cloneDate(start), 1);
            var visStart = cloneDate(start);
            addDays(visStart, -((visStart.getDay() - firstDay + 7) % 7));
            skipHiddenDays(visStart);
            var visEnd = cloneDate(end);
            addDays(visEnd, (7 - visEnd.getDay() + firstDay) % 7);
            skipHiddenDays(visEnd, -1, true);
            var colCnt = getCellsPerWeek();
            var rowCnt = Math.round(dayDiff(visEnd, visStart) / 7);
            if (opt('weekMode') == 'fixed') {
                addDays(visEnd, (6 - rowCnt) * 7);
                rowCnt = 6;
            }
            t.title = formatDate(start, opt('titleFormat'));
            t.start = start;
            t.end = end;
            t.visStart = visStart;
            t.visEnd = visEnd;
            renderBasic(rowCnt, colCnt, true);
        }
    };;
    fcViews.basicWeek = BasicWeekView;

    function BasicWeekView(element, calendar) {
        var t = this;
        t.render = render;
        BasicView.call(t, element, calendar, 'basicWeek');
        var opt = t.opt;
        var renderBasic = t.renderBasic;
        var skipHiddenDays = t.skipHiddenDays;
        var getCellsPerWeek = t.getCellsPerWeek;
        var formatDates = calendar.formatDates;

        function render(date, delta) {
            if (delta) {
                addDays(date, delta * 7);
            }
            var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
            var end = addDays(cloneDate(start), 7);
            var visStart = cloneDate(start);
            skipHiddenDays(visStart);
            var visEnd = cloneDate(end);
            skipHiddenDays(visEnd, -1, true);
            var colCnt = getCellsPerWeek();
            t.start = start;
            t.end = end;
            t.visStart = visStart;
            t.visEnd = visEnd;
            t.title = formatDates(visStart, addDays(cloneDate(visEnd), -1), opt('titleFormat'));
            renderBasic(1, colCnt, false);
        }
    };;
    fcViews.basicDay = BasicDayView;

    function BasicDayView(element, calendar) {
        var t = this;
        t.render = render;
        BasicView.call(t, element, calendar, 'basicDay');
        var opt = t.opt;
        var renderBasic = t.renderBasic;
        var skipHiddenDays = t.skipHiddenDays;
        var formatDate = calendar.formatDate;

        function render(date, delta) {
            if (delta) {
                addDays(date, delta);
            }
            skipHiddenDays(date, delta < 0 ? -1 : 1);
            var start = cloneDate(date, true);
            var end = addDays(cloneDate(start), 1);
            t.title = formatDate(date, opt('titleFormat'));
            t.start = t.visStart = start;
            t.end = t.visEnd = end;
            renderBasic(1, 1, false);
        }
    };;
    setDefaults({
        weekMode: 'fixed'
    });

    function BasicView(element, calendar, viewName) {
        var t = this;
        t.renderBasic = renderBasic;
        t.setHeight = setHeight;
        t.setWidth = setWidth;
        t.renderDayOverlay = renderDayOverlay;
        t.defaultSelectionEnd = defaultSelectionEnd;
        t.renderSelection = renderSelection;
        t.clearSelection = clearSelection;
        t.reportDayClick = reportDayClick;
        t.dragStart = dragStart;
        t.dragStop = dragStop;
        t.defaultEventEnd = defaultEventEnd;
        t.getHoverListener = function() {
            return hoverListener
        };
        t.colLeft = colLeft;
        t.colRight = colRight;
        t.colContentLeft = colContentLeft;
        t.colContentRight = colContentRight;
        t.getIsCellAllDay = function() {
            return true
        };
        t.allDayRow = allDayRow;
        t.getRowCnt = function() {
            return rowCnt
        };
        t.getColCnt = function() {
            return colCnt
        };
        t.getColWidth = function() {
            return colWidth
        };
        t.getDaySegmentContainer = function() {
            return daySegmentContainer
        };
        View.call(t, element, calendar, viewName);
        OverlayManager.call(t);
        SelectionManager.call(t);
        BasicEventRenderer.call(t);
        var opt = t.opt;
        var trigger = t.trigger;
        var renderOverlay = t.renderOverlay;
        var clearOverlays = t.clearOverlays;
        var daySelectionMousedown = t.daySelectionMousedown;
        var cellToDate = t.cellToDate;
        var dateToCell = t.dateToCell;
        var rangeToSegments = t.rangeToSegments;
        var formatDate = calendar.formatDate;
        var table;
        var head;
        var headCells;
        var body;
        var bodyRows;
        var bodyCells;
        var bodyFirstCells;
        var firstRowCellInners;
        var firstRowCellContentInners;
        var daySegmentContainer;
        var viewWidth;
        var viewHeight;
        var colWidth;
        var weekNumberWidth;
        var rowCnt, colCnt;
        var showNumbers;
        var coordinateGrid;
        var hoverListener;
        var colPositions;
        var colContentPositions;
        var tm;
        var colFormat;
        var showWeekNumbers;
        var weekNumberTitle;
        var weekNumberFormat;
        disableTextSelection(element.addClass('fc-grid'));

        function renderBasic(_rowCnt, _colCnt, _showNumbers) {
            rowCnt = _rowCnt;
            colCnt = _colCnt;
            showNumbers = _showNumbers;
            updateOptions();
            if (!body) {
                buildEventContainer();
            }
            buildTable();
        }

        function updateOptions() {
            tm = opt('theme') ? 'ui' : 'fc';
            colFormat = opt('columnFormat');
            showWeekNumbers = opt('weekNumbers');
            weekNumberTitle = opt('weekNumberTitle');
            if (opt('weekNumberCalculation') != 'iso') {
                weekNumberFormat = "w";
            } else {
                weekNumberFormat = "W";
            }
        }

        function buildEventContainer() {
            daySegmentContainer = $("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(element);
        }

        function buildTable() {
            var html = buildTableHTML();
            if (table) {
                table.remove();
            }
            table = $(html).appendTo(element);
            head = table.find('thead');
            headCells = head.find('.fc-day-header');
            body = table.find('tbody');
            bodyRows = body.find('tr');
            bodyCells = body.find('.fc-day');
            bodyFirstCells = bodyRows.find('td:first-child');
            firstRowCellInners = bodyRows.eq(0).find('.fc-day > div');
            firstRowCellContentInners = bodyRows.eq(0).find('.fc-day-content > div');
            markFirstLast(head.add(head.find('tr')));
            markFirstLast(bodyRows);
            bodyRows.eq(0).addClass('fc-first');
            bodyRows.filter(':last').addClass('fc-last');
            bodyCells.each(function(i, _cell) {
                var date = cellToDate(Math.floor(i / colCnt), i % colCnt);
                trigger('dayRender', t, date, $(_cell));
            });
            dayBind(bodyCells);
        }

        function buildTableHTML() {
            var html = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
                buildHeadHTML() +
                buildBodyHTML() + "</table>";
            return html;
        }

        function buildHeadHTML() {
            var headerClass = tm + "-widget-header";
            var html = '';
            var col;
            var date;
            html += "<thead><tr>";
            if (showWeekNumbers) {
                html += "<th class='fc-week-number " + headerClass + "'>" +
                    htmlEscape(weekNumberTitle) + "</th>";
            }
            for (col = 0; col < colCnt; col++) {
                date = cellToDate(0, col);
                html += "<th class='fc-day-header fc-" + dayIDs[date.getDay()] + " " + headerClass + "'>" +
                    htmlEscape(formatDate(date, colFormat)) + "</th>";
            }
            html += "</tr></thead>";
            return html;
        }

        function buildBodyHTML() {
            var contentClass = tm + "-widget-content";
            var html = '';
            var row;
            var col;
            var date;
            html += "<tbody>";
            for (row = 0; row < rowCnt; row++) {
                html += "<tr class='fc-week'>";
                if (showWeekNumbers) {
                    date = cellToDate(row, 0);
                    html += "<td class='fc-week-number " + contentClass + "'>" + "<div>" +
                        htmlEscape(formatDate(date, weekNumberFormat)) + "</div>" + "</td>";
                }
                for (col = 0; col < colCnt; col++) {
                    date = cellToDate(row, col);
                    html += buildCellHTML(date);
                }
                html += "</tr>";
            }
            html += "</tbody>";
            return html;
        }

        function buildCellHTML(date) {
            var contentClass = tm + "-widget-content";
            var month = t.start.getMonth();
            var today = clearTime(new Date());
            var html = '';
            var classNames = ['fc-day', 'fc-' + dayIDs[date.getDay()], contentClass];
            if (date.getMonth() != month) {
                classNames.push('fc-other-month');
            }
            if (+date == +today) {
                classNames.push('fc-today', tm + '-state-highlight');
            } else if (date < today) {
                classNames.push('fc-past');
            } else {
                classNames.push('fc-future');
            }
            html += "<td" + " class='" + classNames.join(' ') + "'" + " data-date='" + formatDate(date, 'yyyy-MM-dd') + "'" + ">" + "<div>";
            if (showNumbers) {
                html += "<div class='fc-day-number'>" + date.getDate() + "</div>";
            }
            html += "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>";
            return html;
        }

        function setHeight(height) {
            viewHeight = height;
            var bodyHeight = viewHeight - head.height();
            var rowHeight;
            var rowHeightLast;
            var cell;
            if (opt('weekMode') == 'variable') {
                rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt == 1 ? 2 : 6));
            } else {
                rowHeight = Math.floor(bodyHeight / rowCnt);
                rowHeightLast = bodyHeight - rowHeight * (rowCnt - 1);
            }
            bodyFirstCells.each(function(i, _cell) {
                if (i < rowCnt) {
                    cell = $(_cell);
                    cell.find('> div').css('min-height', (i == rowCnt - 1 ? rowHeightLast : rowHeight) - vsides(cell));
                }
            });
        }

        function setWidth(width) {
            viewWidth = width;
            colPositions.clear();
            colContentPositions.clear();
            weekNumberWidth = 0;
            if (showWeekNumbers) {
                weekNumberWidth = head.find('th.fc-week-number').outerWidth();
            }
            colWidth = Math.floor((viewWidth - weekNumberWidth) / colCnt);
            setOuterWidth(headCells.slice(0, -1), colWidth);
        }

        function dayBind(days) {
            days.click(dayClick).mousedown(daySelectionMousedown);
        }

        function dayClick(ev) {
            if (!opt('selectable')) {
                var date = parseISO8601($(this).data('date'));
                trigger('dayClick', this, date, true, ev);
            }
        }

        function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) {
            if (refreshCoordinateGrid) {
                coordinateGrid.build();
            }
            var segments = rangeToSegments(overlayStart, overlayEnd);
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                dayBind(renderCellOverlay(segment.row, segment.leftCol, segment.row, segment.rightCol));
            }
        }

        function renderCellOverlay(row0, col0, row1, col1) {
            var rect = coordinateGrid.rect(row0, col0, row1, col1, element);
            return renderOverlay(rect, element);
        }

        function defaultSelectionEnd(startDate, allDay) {
            return cloneDate(startDate);
        }

        function renderSelection(startDate, endDate, allDay) {
            renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
        }

        function clearSelection() {
            clearOverlays();
        }

        function reportDayClick(date, allDay, ev) {
            var cell = dateToCell(date);
            var _element = bodyCells[cell.row * colCnt + cell.col];
            trigger('dayClick', _element, date, allDay, ev);
        }

        function dragStart(_dragElement, ev, ui) {
            hoverListener.start(function(cell) {
                clearOverlays();
                if (cell) {
                    renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
                }
            }, ev);
        }

        function dragStop(_dragElement, ev, ui) {
            var cell = hoverListener.stop();
            clearOverlays();
            if (cell) {
                var d = cellToDate(cell);
                trigger('drop', _dragElement, d, true, ev, ui);
            }
        }

        function defaultEventEnd(event) {
            return cloneDate(event.start);
        }
        coordinateGrid = new CoordinateGrid(function(rows, cols) {
            var e, n, p;
            headCells.each(function(i, _e) {
                e = $(_e);
                n = e.offset().left;
                if (i) {
                    p[1] = n;
                }
                p = [n];
                cols[i] = p;
            });
            p[1] = n + e.outerWidth();
            bodyRows.each(function(i, _e) {
                if (i < rowCnt) {
                    e = $(_e);
                    n = e.offset().top;
                    if (i) {
                        p[1] = n;
                    }
                    p = [n];
                    rows[i] = p;
                }
            });
            p[1] = n + e.outerHeight();
        });
        hoverListener = new HoverListener(coordinateGrid);
        colPositions = new HorizontalPositionCache(function(col) {
            return firstRowCellInners.eq(col);
        });
        colContentPositions = new HorizontalPositionCache(function(col) {
            return firstRowCellContentInners.eq(col);
        });

        function colLeft(col) {
            return colPositions.left(col);
        }

        function colRight(col) {
            return colPositions.right(col);
        }

        function colContentLeft(col) {
            return colContentPositions.left(col);
        }

        function colContentRight(col) {
            return colContentPositions.right(col);
        }

        function allDayRow(i) {
            return bodyRows.eq(i);
        }
    };;

    function BasicEventRenderer() {
        var t = this;
        t.renderEvents = renderEvents;
        t.clearEvents = clearEvents;
        DayEventRenderer.call(t);

        function renderEvents(events, modifiedEventId) {
            t.renderDayEvents(events, modifiedEventId);
        }

        function clearEvents() {
            t.getDaySegmentContainer().empty();
        }
    };;
    fcViews.agendaWeek = AgendaWeekView;

    function AgendaWeekView(element, calendar) {
        var t = this;
        t.render = render;
        AgendaView.call(t, element, calendar, 'agendaWeek');
        var opt = t.opt;
        var renderAgenda = t.renderAgenda;
        var skipHiddenDays = t.skipHiddenDays;
        var getCellsPerWeek = t.getCellsPerWeek;
        var formatDates = calendar.formatDates;

        function render(date, delta) {
            if (delta) {
                addDays(date, delta * 7);
            }
            var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
            var end = addDays(cloneDate(start), 7);
            var visStart = cloneDate(start);
            skipHiddenDays(visStart);
            var visEnd = cloneDate(end);
            skipHiddenDays(visEnd, -1, true);
            var colCnt = getCellsPerWeek();
            t.title = formatDates(visStart, addDays(cloneDate(visEnd), -1), opt('titleFormat'));
            t.start = start;
            t.end = end;
            t.visStart = visStart;
            t.visEnd = visEnd;
            renderAgenda(colCnt);
        }
    };;
    fcViews.agendaDay = AgendaDayView;

    function AgendaDayView(element, calendar) {
        var t = this;
        t.render = render;
        AgendaView.call(t, element, calendar, 'agendaDay');
        var opt = t.opt;
        var renderAgenda = t.renderAgenda;
        var skipHiddenDays = t.skipHiddenDays;
        var formatDate = calendar.formatDate;

        function render(date, delta) {
            if (delta) {
                addDays(date, delta);
            }
            skipHiddenDays(date, delta < 0 ? -1 : 1);
            var start = cloneDate(date, true);
            var end = addDays(cloneDate(start), 1);
            t.title = formatDate(date, opt('titleFormat'));
            t.start = t.visStart = start;
            t.end = t.visEnd = end;
            renderAgenda(1);
        }
    };;
    setDefaults({
        allDaySlot: true,
        allDayText: 'all-day',
        firstHour: 6,
        slotMinutes: 30,
        defaultEventMinutes: 120,
        axisFormat: 'h(:mm)tt',
        timeFormat: {
            agenda: 'h:mm{ - h:mm}'
        },
        dragOpacity: {
            agenda: .5
        },
        minTime: 0,
        maxTime: 24,
        slotEventOverlap: true
    });

    function AgendaView(element, calendar, viewName) {
        var t = this;
        t.renderAgenda = renderAgenda;
        t.setWidth = setWidth;
        t.setHeight = setHeight;
        t.afterRender = afterRender;
        t.defaultEventEnd = defaultEventEnd;
        t.timePosition = timePosition;
        t.getIsCellAllDay = getIsCellAllDay;
        t.allDayRow = getAllDayRow;
        t.getCoordinateGrid = function() {
            return coordinateGrid
        };
        t.getHoverListener = function() {
            return hoverListener
        };
        t.colLeft = colLeft;
        t.colRight = colRight;
        t.colContentLeft = colContentLeft;
        t.colContentRight = colContentRight;
        t.getDaySegmentContainer = function() {
            return daySegmentContainer
        };
        t.getSlotSegmentContainer = function() {
            return slotSegmentContainer
        };
        t.getMinMinute = function() {
            return minMinute
        };
        t.getMaxMinute = function() {
            return maxMinute
        };
        t.getSlotContainer = function() {
            return slotContainer
        };
        t.getRowCnt = function() {
            return 1
        };
        t.getColCnt = function() {
            return colCnt
        };
        t.getColWidth = function() {
            return colWidth
        };
        t.getSnapHeight = function() {
            return snapHeight
        };
        t.getSnapMinutes = function() {
            return snapMinutes
        };
        t.defaultSelectionEnd = defaultSelectionEnd;
        t.renderDayOverlay = renderDayOverlay;
        t.renderSelection = renderSelection;
        t.clearSelection = clearSelection;
        t.reportDayClick = reportDayClick;
        t.dragStart = dragStart;
        t.dragStop = dragStop;
        View.call(t, element, calendar, viewName);
        OverlayManager.call(t);
        SelectionManager.call(t);
        AgendaEventRenderer.call(t);
        var opt = t.opt;
        var trigger = t.trigger;
        var renderOverlay = t.renderOverlay;
        var clearOverlays = t.clearOverlays;
        var reportSelection = t.reportSelection;
        var unselect = t.unselect;
        var daySelectionMousedown = t.daySelectionMousedown;
        var slotSegHtml = t.slotSegHtml;
        var cellToDate = t.cellToDate;
        var dateToCell = t.dateToCell;
        var rangeToSegments = t.rangeToSegments;
        var formatDate = calendar.formatDate;
        var dayTable;
        var dayHead;
        var dayHeadCells;
        var dayBody;
        var dayBodyCells;
        var dayBodyCellInners;
        var dayBodyCellContentInners;
        var dayBodyFirstCell;
        var dayBodyFirstCellStretcher;
        var slotLayer;
        var daySegmentContainer;
        var allDayTable;
        var allDayRow;
        var slotScroller;
        var slotContainer;
        var slotSegmentContainer;
        var slotTable;
        var selectionHelper;
        var viewWidth;
        var viewHeight;
        var axisWidth;
        var colWidth;
        var gutterWidth;
        var slotHeight;
        var snapMinutes;
        var snapRatio;
        var snapHeight;
        var colCnt;
        var slotCnt;
        var coordinateGrid;
        var hoverListener;
        var colPositions;
        var colContentPositions;
        var slotTopCache = {};
        var tm;
        var rtl;
        var minMinute, maxMinute;
        var colFormat;
        var showWeekNumbers;
        var weekNumberTitle;
        var weekNumberFormat;
        disableTextSelection(element.addClass('fc-agenda'));

        function renderAgenda(c) {
            colCnt = c;
            updateOptions();
            if (!dayTable) {
                buildSkeleton();
            } else {
                buildDayTable();
            }
        }

        function updateOptions() {
            tm = opt('theme') ? 'ui' : 'fc';
            rtl = opt('isRTL')
            minMinute = parseTime(opt('minTime'));
            maxMinute = parseTime(opt('maxTime'));
            colFormat = opt('columnFormat');
            showWeekNumbers = opt('weekNumbers');
            weekNumberTitle = opt('weekNumberTitle');
            if (opt('weekNumberCalculation') != 'iso') {
                weekNumberFormat = "w";
            } else {
                weekNumberFormat = "W";
            }
            snapMinutes = opt('snapMinutes') || opt('slotMinutes');
        }

        function buildSkeleton() {
            var headerClass = tm + "-widget-header";
            var contentClass = tm + "-widget-content";
            var s;
            var d;
            var i;
            var maxd;
            var minutes;
            var slotNormal = opt('slotMinutes') % 15 == 0;
            buildDayTable();
            slotLayer = $("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(element);
            if (opt('allDaySlot')) {
                daySegmentContainer = $("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(slotLayer);
                s = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'>" + "<tr>" + "<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>";
                allDayTable = $(s).appendTo(slotLayer);
                allDayRow = allDayTable.find('tr');
                dayBind(allDayRow.find('td'));
                slotLayer.append("<div class='fc-agenda-divider " + headerClass + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>");
            } else {
                daySegmentContainer = $([]);
            }
            slotScroller = $("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(slotLayer);
            slotContainer = $("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(slotScroller);
            slotSegmentContainer = $("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(slotContainer);
            s = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" + "<tbody>";
            d = zeroDate();
            maxd = addMinutes(cloneDate(d), maxMinute);
            addMinutes(d, minMinute);
            slotCnt = 0;
            for (i = 0; d < maxd; i++) {
                minutes = d.getMinutes();
                s += "<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" + "<th class='fc-agenda-axis " + headerClass + "'>" +
                    ((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') + "</th>" + "<td class='" + contentClass + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>";
                addMinutes(d, opt('slotMinutes'));
                slotCnt++;
            }
            s += "</tbody>" + "</table>";
            slotTable = $(s).appendTo(slotContainer);
            slotBind(slotTable.find('td'));
        }

        function buildDayTable() {
            var html = buildDayTableHTML();
            if (dayTable) {
                dayTable.remove();
            }
            dayTable = $(html).appendTo(element);
            dayHead = dayTable.find('thead');
            dayHeadCells = dayHead.find('th').slice(1, -1);
            dayBody = dayTable.find('tbody');
            dayBodyCells = dayBody.find('td').slice(0, -1);
            dayBodyCellInners = dayBodyCells.find('> div');
            dayBodyCellContentInners = dayBodyCells.find('.fc-day-content > div');
            dayBodyFirstCell = dayBodyCells.eq(0);
            dayBodyFirstCellStretcher = dayBodyCellInners.eq(0);
            markFirstLast(dayHead.add(dayHead.find('tr')));
            markFirstLast(dayBody.add(dayBody.find('tr')));
        }

        function buildDayTableHTML() {
            var html = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
                buildDayTableHeadHTML() +
                buildDayTableBodyHTML() + "</table>";
            return html;
        }

        function buildDayTableHeadHTML() {
            var headerClass = tm + "-widget-header";
            var date;
            var html = '';
            var weekText;
            var col;
            html += "<thead>" + "<tr>";
            if (showWeekNumbers) {
                date = cellToDate(0, 0);
                weekText = formatDate(date, weekNumberFormat);
                if (rtl) {
                    weekText += weekNumberTitle;
                } else {
                    weekText = weekNumberTitle + weekText;
                }
                html += "<th class='fc-agenda-axis fc-week-number " + headerClass + "'>" +
                    htmlEscape(weekText) + "</th>";
            } else {
                html += "<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
            }
            for (col = 0; col < colCnt; col++) {
                date = cellToDate(0, col);
                html += "<th class='fc-" + dayIDs[date.getDay()] + " fc-col" + col + ' ' + headerClass + "'>" +
                    htmlEscape(formatDate(date, colFormat)) + "</th>";
            }
            html += "<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" + "</tr>" + "</thead>";
            return html;
        }

        function buildDayTableBodyHTML() {
            var headerClass = tm + "-widget-header";
            var contentClass = tm + "-widget-content";
            var date;
            var today = clearTime(new Date());
            var col;
            var cellsHTML;
            var cellHTML;
            var classNames;
            var html = '';
            html += "<tbody>" + "<tr>" + "<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
            cellsHTML = '';
            for (col = 0; col < colCnt; col++) {
                date = cellToDate(0, col);
                classNames = ['fc-col' + col, 'fc-' + dayIDs[date.getDay()], contentClass];
                if (+date == +today) {
                    classNames.push(tm + '-state-highlight', 'fc-today');
                } else if (date < today) {
                    classNames.push('fc-past');
                } else {
                    classNames.push('fc-future');
                }
                cellHTML = "<td class='" + classNames.join(' ') + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>";
                cellsHTML += cellHTML;
            }
            html += cellsHTML;
            html += "<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" + "</tr>" + "</tbody>";
            return html;
        }

        function setHeight(height) {
            if (height === undefined) {
                height = viewHeight;
            }
            viewHeight = height;
            slotTopCache = {};
            var headHeight = dayBody.position().top;
            var allDayHeight = slotScroller.position().top;
            var bodyHeight = Math.min(height - headHeight, slotTable.height() + allDayHeight + 1);
            dayBodyFirstCellStretcher.height(bodyHeight - vsides(dayBodyFirstCell));
            slotLayer.css('top', headHeight);
            slotScroller.height(bodyHeight - allDayHeight - 1);
            slotHeight = slotTable.find('tr:first').height() + 1;
            snapRatio = opt('slotMinutes') / snapMinutes;
            snapHeight = slotHeight / snapRatio;
        }

        function setWidth(width) {
            viewWidth = width;
            colPositions.clear();
            colContentPositions.clear();
            var axisFirstCells = dayHead.find('th:first');
            if (allDayTable) {
                axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));
            }
            axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));
            axisWidth = 0;
            setOuterWidth(axisFirstCells.width('').each(function(i, _cell) {
                axisWidth = Math.max(axisWidth, $(_cell).outerWidth());
            }), axisWidth);
            var gutterCells = dayTable.find('.fc-agenda-gutter');
            if (allDayTable) {
                gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));
            }
            var slotTableWidth = slotScroller[0].clientWidth;
            gutterWidth = slotScroller.width() - slotTableWidth;
            if (gutterWidth) {
                setOuterWidth(gutterCells, gutterWidth);
                gutterCells.show().prev().removeClass('fc-last');
            } else {
                gutterCells.hide().prev().addClass('fc-last');
            }
            colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);
            setOuterWidth(dayHeadCells.slice(0, -1), colWidth);
        }

        function resetScroll() {
            var d0 = zeroDate();
            var scrollDate = cloneDate(d0);
            scrollDate.setHours(opt('firstHour'));
            var top = timePosition(d0, scrollDate) + 1;

            function scroll() {
                slotScroller.scrollTop(top);
            }
            scroll();
            setTimeout(scroll, 0);
        }

        function afterRender() {
            resetScroll();
        }

        function dayBind(cells) {
            cells.click(slotClick).mousedown(daySelectionMousedown);
        }

        function slotBind(cells) {
            cells.click(slotClick).mousedown(slotSelectionMousedown);
        }

        function slotClick(ev) {
            if (!opt('selectable')) {
                var col = Math.min(colCnt - 1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));
                var date = cellToDate(0, col);
                var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/);
                if (rowMatch) {
                    var mins = parseInt(rowMatch[1]) * opt('slotMinutes');
                    var hours = Math.floor(mins / 60);
                    date.setHours(hours);
                    date.setMinutes(mins % 60 + minMinute);
                    trigger('dayClick', dayBodyCells[col], date, false, ev);
                } else {
                    trigger('dayClick', dayBodyCells[col], date, true, ev);
                }
            }
        }

        function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) {
            if (refreshCoordinateGrid) {
                coordinateGrid.build();
            }
            var segments = rangeToSegments(overlayStart, overlayEnd);
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                dayBind(renderCellOverlay(segment.row, segment.leftCol, segment.row, segment.rightCol));
            }
        }

        function renderCellOverlay(row0, col0, row1, col1) {
            var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);
            return renderOverlay(rect, slotLayer);
        }

        function renderSlotOverlay(overlayStart, overlayEnd) {
            for (var i = 0; i < colCnt; i++) {
                var dayStart = cellToDate(0, i);
                var dayEnd = addDays(cloneDate(dayStart), 1);
                var stretchStart = new Date(Math.max(dayStart, overlayStart));
                var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));
                if (stretchStart < stretchEnd) {
                    var rect = coordinateGrid.rect(0, i, 0, i, slotContainer);
                    var top = timePosition(dayStart, stretchStart);
                    var bottom = timePosition(dayStart, stretchEnd);
                    rect.top = top;
                    rect.height = bottom - top;
                    slotBind(renderOverlay(rect, slotContainer));
                }
            }
        }
        coordinateGrid = new CoordinateGrid(function(rows, cols) {
            var e, n, p;
            dayHeadCells.each(function(i, _e) {
                e = $(_e);
                n = e.offset().left;
                if (i) {
                    p[1] = n;
                }
                p = [n];
                cols[i] = p;
            });
            p[1] = n + e.outerWidth();
            if (opt('allDaySlot')) {
                e = allDayRow;
                n = e.offset().top;
                rows[0] = [n, n + e.outerHeight()];
            }
            var slotTableTop = slotContainer.offset().top;
            var slotScrollerTop = slotScroller.offset().top;
            var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();

            function constrain(n) {
                return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));
            }
            for (var i = 0; i < slotCnt * snapRatio; i++) {
                rows.push([constrain(slotTableTop + snapHeight * i), constrain(slotTableTop + snapHeight * (i + 1))]);
            }
        });
        hoverListener = new HoverListener(coordinateGrid);
        colPositions = new HorizontalPositionCache(function(col) {
            return dayBodyCellInners.eq(col);
        });
        colContentPositions = new HorizontalPositionCache(function(col) {
            return dayBodyCellContentInners.eq(col);
        });

        function colLeft(col) {
            return colPositions.left(col);
        }

        function colContentLeft(col) {
            return colContentPositions.left(col);
        }

        function colRight(col) {
            return colPositions.right(col);
        }

        function colContentRight(col) {
            return colContentPositions.right(col);
        }

        function getIsCellAllDay(cell) {
            return opt('allDaySlot') && !cell.row;
        }

        function realCellToDate(cell) {
            var d = cellToDate(0, cell.col);
            var slotIndex = cell.row;
            if (opt('allDaySlot')) {
                slotIndex--;
            }
            if (slotIndex >= 0) {
                addMinutes(d, minMinute + slotIndex * snapMinutes);
            }
            return d;
        }

        function timePosition(day, time) {
            day = cloneDate(day, true);
            if (time < addMinutes(cloneDate(day), minMinute)) {
                return 0;
            }
            if (time >= addMinutes(cloneDate(day), maxMinute)) {
                return slotTable.height();
            }
            var slotMinutes = opt('slotMinutes'),
                minutes = time.getHours() * 60 + time.getMinutes() - minMinute,
                slotI = Math.floor(minutes / slotMinutes),
                slotTop = slotTopCache[slotI];
            if (slotTop === undefined) {
                slotTop = slotTopCache[slotI] = slotTable.find('tr').eq(slotI).find('td div')[0].offsetTop;
            }
            return Math.max(0, Math.round(slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)));
        }

        function getAllDayRow(index) {
            return allDayRow;
        }

        function defaultEventEnd(event) {
            var start = cloneDate(event.start);
            if (event.allDay) {
                return start;
            }
            return addMinutes(start, opt('defaultEventMinutes'));
        }

        function defaultSelectionEnd(startDate, allDay) {
            if (allDay) {
                return cloneDate(startDate);
            }
            return addMinutes(cloneDate(startDate), opt('slotMinutes'));
        }

        function renderSelection(startDate, endDate, allDay) {
            if (allDay) {
                if (opt('allDaySlot')) {
                    renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
                }
            } else {
                renderSlotSelection(startDate, endDate);
            }
        }

        function renderSlotSelection(startDate, endDate) {
            var helperOption = opt('selectHelper');
            coordinateGrid.build();
            if (helperOption) {
                var col = dateToCell(startDate).col;
                if (col >= 0 && col < colCnt) {
                    var rect = coordinateGrid.rect(0, col, 0, col, slotContainer);
                    var top = timePosition(startDate, startDate);
                    var bottom = timePosition(startDate, endDate);
                    if (bottom > top) {
                        rect.top = top;
                        rect.height = bottom - top;
                        rect.left += 2;
                        rect.width -= 5;
                        if ($.isFunction(helperOption)) {
                            var helperRes = helperOption(startDate, endDate);
                            if (helperRes) {
                                rect.position = 'absolute';
                                selectionHelper = $(helperRes).css(rect).appendTo(slotContainer);
                            }
                        } else {
                            rect.isStart = true;
                            rect.isEnd = true;
                            selectionHelper = $(slotSegHtml({
                                title: '',
                                start: startDate,
                                end: endDate,
                                className: ['fc-select-helper'],
                                editable: false
                            }, rect));
                            selectionHelper.css('opacity', opt('dragOpacity'));
                        }
                        if (selectionHelper) {
                            slotBind(selectionHelper);
                            slotContainer.append(selectionHelper);
                            setOuterWidth(selectionHelper, rect.width, true);
                            setOuterHeight(selectionHelper, rect.height, true);
                        }
                    }
                }
            } else {
                renderSlotOverlay(startDate, endDate);
            }
        }

        function clearSelection() {
            clearOverlays();
            if (selectionHelper) {
                selectionHelper.remove();
                selectionHelper = null;
            }
        }

        function slotSelectionMousedown(ev) {
            if (ev.which == 1 && opt('selectable')) {
                unselect(ev);
                var dates;
                hoverListener.start(function(cell, origCell) {
                    clearSelection();
                    if (cell && cell.col == origCell.col && !getIsCellAllDay(cell)) {
                        var d1 = realCellToDate(origCell);
                        var d2 = realCellToDate(cell);
                        dates = [d1, addMinutes(cloneDate(d1), snapMinutes), d2, addMinutes(cloneDate(d2), snapMinutes)].sort(dateCompare);
                        renderSlotSelection(dates[0], dates[3]);
                    } else {
                        dates = null;
                    }
                }, ev);
                $(document).one('mouseup', function(ev) {
                    hoverListener.stop();
                    if (dates) {
                        if (+dates[0] == +dates[1]) {
                            reportDayClick(dates[0], false, ev);
                        }
                        reportSelection(dates[0], dates[3], false, ev);
                    }
                });
            }
        }

        function reportDayClick(date, allDay, ev) {
            trigger('dayClick', dayBodyCells[dateToCell(date).col], date, allDay, ev);
        }

        function dragStart(_dragElement, ev, ui) {
            hoverListener.start(function(cell) {
                clearOverlays();
                if (cell) {
                    if (getIsCellAllDay(cell)) {
                        renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
                    } else {
                        var d1 = realCellToDate(cell);
                        var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));
                        renderSlotOverlay(d1, d2);
                    }
                }
            }, ev);
        }

        function dragStop(_dragElement, ev, ui) {
            var cell = hoverListener.stop();
            clearOverlays();
            if (cell) {
                trigger('drop', _dragElement, realCellToDate(cell), getIsCellAllDay(cell), ev, ui);
            }
        }
    };;

    function AgendaEventRenderer() {
        var t = this;
        t.renderEvents = renderEvents;
        t.clearEvents = clearEvents;
        t.slotSegHtml = slotSegHtml;
        DayEventRenderer.call(t);
        var opt = t.opt;
        var trigger = t.trigger;
        var isEventDraggable = t.isEventDraggable;
        var isEventResizable = t.isEventResizable;
        var eventEnd = t.eventEnd;
        var eventElementHandlers = t.eventElementHandlers;
        var setHeight = t.setHeight;
        var getDaySegmentContainer = t.getDaySegmentContainer;
        var getSlotSegmentContainer = t.getSlotSegmentContainer;
        var getHoverListener = t.getHoverListener;
        var getMaxMinute = t.getMaxMinute;
        var getMinMinute = t.getMinMinute;
        var timePosition = t.timePosition;
        var getIsCellAllDay = t.getIsCellAllDay;
        var colContentLeft = t.colContentLeft;
        var colContentRight = t.colContentRight;
        var cellToDate = t.cellToDate;
        var getColCnt = t.getColCnt;
        var getColWidth = t.getColWidth;
        var getSnapHeight = t.getSnapHeight;
        var getSnapMinutes = t.getSnapMinutes;
        var getSlotContainer = t.getSlotContainer;
        var reportEventElement = t.reportEventElement;
        var showEvents = t.showEvents;
        var hideEvents = t.hideEvents;
        var eventDrop = t.eventDrop;
        var eventResize = t.eventResize;
        var renderDayOverlay = t.renderDayOverlay;
        var clearOverlays = t.clearOverlays;
        var renderDayEvents = t.renderDayEvents;
        var calendar = t.calendar;
        var formatDate = calendar.formatDate;
        var formatDates = calendar.formatDates;
        t.draggableDayEvent = draggableDayEvent;

        function renderEvents(events, modifiedEventId) {
            var i, len = events.length,
                dayEvents = [],
                slotEvents = [];
            for (i = 0; i < len; i++) {
                if (events[i].allDay) {
                    dayEvents.push(events[i]);
                } else {
                    slotEvents.push(events[i]);
                }
            }
            if (opt('allDaySlot')) {
                renderDayEvents(dayEvents, modifiedEventId);
                setHeight();
            }
            renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);
        }

        function clearEvents() {
            getDaySegmentContainer().empty();
            getSlotSegmentContainer().empty();
        }

        function compileSlotSegs(events) {
            var colCnt = getColCnt(),
                minMinute = getMinMinute(),
                maxMinute = getMaxMinute(),
                d, visEventEnds = $.map(events, slotEventEnd),
                i, j, seg, colSegs, segs = [];
            for (i = 0; i < colCnt; i++) {
                d = cellToDate(0, i);
                addMinutes(d, minMinute);
                colSegs = sliceSegs(events, visEventEnds, d, addMinutes(cloneDate(d), maxMinute - minMinute));
                colSegs = placeSlotSegs(colSegs);
                for (j = 0; j < colSegs.length; j++) {
                    seg = colSegs[j];
                    seg.col = i;
                    segs.push(seg);
                }
            }
            return segs;
        }

        function sliceSegs(events, visEventEnds, start, end) {
            var segs = [],
                i, len = events.length,
                event, eventStart, eventEnd, segStart, segEnd, isStart, isEnd;
            for (i = 0; i < len; i++) {
                event = events[i];
                eventStart = event.start;
                eventEnd = visEventEnds[i];
                if (eventEnd > start && eventStart < end) {
                    if (eventStart < start) {
                        segStart = cloneDate(start);
                        isStart = false;
                    } else {
                        segStart = eventStart;
                        isStart = true;
                    }
                    if (eventEnd > end) {
                        segEnd = cloneDate(end);
                        isEnd = false;
                    } else {
                        segEnd = eventEnd;
                        isEnd = true;
                    }
                    segs.push({
                        event: event,
                        start: segStart,
                        end: segEnd,
                        isStart: isStart,
                        isEnd: isEnd
                    });
                }
            }
            return segs.sort(compareSlotSegs);
        }

        function slotEventEnd(event) {
            if (event.end) {
                return cloneDate(event.end);
            } else {
                return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));
            }
        }

        function renderSlotSegs(segs, modifiedEventId) {
            var i, segCnt = segs.length,
                seg, event, top, bottom, columnLeft, columnRight, columnWidth, width, left, right, html = '',
                eventElements, eventElement, triggerRes, titleElement, height, slotSegmentContainer = getSlotSegmentContainer(),
                isRTL = opt('isRTL');
            for (i = 0; i < segCnt; i++) {
                seg = segs[i];
                event = seg.event;
                top = timePosition(seg.start, seg.start);
                bottom = timePosition(seg.start, seg.end);
                columnLeft = colContentLeft(seg.col);
                columnRight = colContentRight(seg.col);
                columnWidth = columnRight - columnLeft;
                columnRight -= columnWidth * .025;
                columnWidth = columnRight - columnLeft;
                width = columnWidth * (seg.forwardCoord - seg.backwardCoord);
                if (opt('slotEventOverlap')) {
                    width = Math.max((width - (20 / 2)) * 2, width);
                }
                if (isRTL) {
                    right = columnRight - seg.backwardCoord * columnWidth;
                    left = right - width;
                } else {
                    left = columnLeft + seg.backwardCoord * columnWidth;
                    right = left + width;
                }
                left = Math.max(left, columnLeft);
                right = Math.min(right, columnRight);
                width = right - left;
                seg.top = top;
                seg.left = left;
                seg.outerWidth = width;
                seg.outerHeight = bottom - top;
                html += slotSegHtml(event, seg);
            }
            slotSegmentContainer[0].innerHTML = html;
            eventElements = slotSegmentContainer.children();
            for (i = 0; i < segCnt; i++) {
                seg = segs[i];
                event = seg.event;
                eventElement = $(eventElements[i]);
                triggerRes = trigger('eventRender', event, event, eventElement);
                if (triggerRes === false) {
                    eventElement.remove();
                } else {
                    if (triggerRes && triggerRes !== true) {
                        eventElement.remove();
                        eventElement = $(triggerRes).css({
                            position: 'absolute',
                            top: seg.top,
                            left: seg.left
                        }).appendTo(slotSegmentContainer);
                    }
                    seg.element = eventElement;
                    if (event._id === modifiedEventId) {
                        bindSlotSeg(event, eventElement, seg);
                    } else {
                        eventElement[0]._fci = i;
                    }
                    reportEventElement(event, eventElement);
                }
            }
            lazySegBind(slotSegmentContainer, segs, bindSlotSeg);
            for (i = 0; i < segCnt; i++) {
                seg = segs[i];
                if (eventElement = seg.element) {
                    seg.vsides = vsides(eventElement, true);
                    seg.hsides = hsides(eventElement, true);
                    titleElement = eventElement.find('.fc-event-title');
                    if (titleElement.length) {
                        seg.contentTop = titleElement[0].offsetTop;
                    }
                }
            }
            for (i = 0; i < segCnt; i++) {
                seg = segs[i];
                if (eventElement = seg.element) {
                    eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
                    height = Math.max(0, seg.outerHeight - seg.vsides);
                    eventElement[0].style.height = height + 'px';
                    event = seg.event;
                    if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
                        eventElement.find('div.fc-event-time').text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);
                        eventElement.find('div.fc-event-title').remove();
                    }
                    trigger('eventAfterRender', event, event, eventElement);
                }
            }
        }

        function slotSegHtml(event, seg) {
            var html = "<";
            var url = event.url;
            var skinCss = getSkinCss(event, opt);
            var classes = ['fc-event', 'fc-event-vert'];
            if (isEventDraggable(event)) {
                classes.push('fc-event-draggable');
            }
            if (seg.isStart) {
                classes.push('fc-event-start');
            }
            if (seg.isEnd) {
                classes.push('fc-event-end');
            }
            classes = classes.concat(event.className);
            if (event.source) {
                classes = classes.concat(event.source.className || []);
            }
            if (url) {
                html += "a href='" + htmlEscape(event.url) + "'";
            } else {
                html += "div";
            }
            html += " class='" + classes.join(' ') + "'" + " style=" + "'" + "position:absolute;" + "top:" + seg.top + "px;" + "left:" + seg.left + "px;" +
                skinCss + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" +
                htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) + "</div>" + "<div class='fc-event-title'>" +
                htmlEscape(event.title || '') + "</div>" + "</div>" + "<div class='fc-event-bg'></div>";
            if (seg.isEnd && isEventResizable(event)) {
                html += "<div class='ui-resizable-handle ui-resizable-s'>=</div>";
            }
            html += "</" + (url ? "a" : "div") + ">";
            return html;
        }

        function bindSlotSeg(event, eventElement, seg) {
            var timeElement = eventElement.find('div.fc-event-time');
            if (isEventDraggable(event)) {
                draggableSlotEvent(event, eventElement, timeElement);
            }
            if (seg.isEnd && isEventResizable(event)) {
                resizableSlotEvent(event, eventElement, timeElement);
            }
            eventElementHandlers(event, eventElement);
        }

        function draggableDayEvent(event, eventElement, seg) {
            var isStart = seg.isStart;
            var origWidth;
            var revert;
            var allDay = true;
            var dayDelta;
            var hoverListener = getHoverListener();
            var colWidth = getColWidth();
            var snapHeight = getSnapHeight();
            var snapMinutes = getSnapMinutes();
            var minMinute = getMinMinute();
            eventElement.draggable({
                opacity: opt('dragOpacity', 'month'),
                revertDuration: opt('dragRevertDuration'),
                start: function(ev, ui) {
                    trigger('eventDragStart', eventElement, event, ev, ui);
                    hideEvents(event, eventElement);
                    origWidth = eventElement.width();
                    hoverListener.start(function(cell, origCell) {
                        clearOverlays();
                        if (cell) {
                            revert = false;
                            var origDate = cellToDate(0, origCell.col);
                            var date = cellToDate(0, cell.col);
                            dayDelta = dayDiff(date, origDate);
                            if (!cell.row) {
                                renderDayOverlay(addDays(cloneDate(event.start), dayDelta), addDays(exclEndDay(event), dayDelta));
                                resetElement();
                            } else {
                                if (isStart) {
                                    if (allDay) {
                                        eventElement.width(colWidth - 10);
                                        setOuterHeight(eventElement, snapHeight * Math.round((event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes')) / snapMinutes));
                                        eventElement.draggable('option', 'grid', [colWidth, 1]);
                                        allDay = false;
                                    }
                                } else {
                                    revert = true;
                                }
                            }
                            revert = revert || (allDay && !dayDelta);
                        } else {
                            resetElement();
                            revert = true;
                        }
                        eventElement.draggable('option', 'revert', revert);
                    }, ev, 'drag');
                },
                stop: function(ev, ui) {
                    hoverListener.stop();
                    clearOverlays();
                    trigger('eventDragStop', eventElement, event, ev, ui);
                    if (revert) {
                        resetElement();
                        eventElement.css('filter', '');
                        showEvents(event, eventElement);
                    } else {
                        var minuteDelta = 0;
                        if (!allDay) {
                            minuteDelta = Math.round((eventElement.offset().top - getSlotContainer().offset().top) / snapHeight) * snapMinutes + minMinute - (event.start.getHours() * 60 + event.start.getMinutes());
                        }
                        eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);
                    }
                }
            });

            function resetElement() {
                if (!allDay) {
                    eventElement.width(origWidth).height('').draggable('option', 'grid', null);
                    allDay = true;
                }
            }
        }

        function draggableSlotEvent(event, eventElement, timeElement) {
            var coordinateGrid = t.getCoordinateGrid();
            var colCnt = getColCnt();
            var colWidth = getColWidth();
            var snapHeight = getSnapHeight();
            var snapMinutes = getSnapMinutes();
            var origPosition;
            var origCell;
            var isInBounds, prevIsInBounds;
            var isAllDay, prevIsAllDay;
            var colDelta, prevColDelta;
            var dayDelta;
            var minuteDelta, prevMinuteDelta;
            eventElement.draggable({
                scroll: false,
                grid: [colWidth, snapHeight],
                axis: colCnt == 1 ? 'y' : false,
                opacity: opt('dragOpacity'),
                revertDuration: opt('dragRevertDuration'),
                start: function(ev, ui) {
                    trigger('eventDragStart', eventElement, event, ev, ui);
                    hideEvents(event, eventElement);
                    coordinateGrid.build();
                    origPosition = eventElement.position();
                    origCell = coordinateGrid.cell(ev.pageX, ev.pageY);
                    isInBounds = prevIsInBounds = true;
                    isAllDay = prevIsAllDay = getIsCellAllDay(origCell);
                    colDelta = prevColDelta = 0;
                    dayDelta = 0;
                    minuteDelta = prevMinuteDelta = 0;
                },
                drag: function(ev, ui) {
                    var cell = coordinateGrid.cell(ev.pageX, ev.pageY);
                    isInBounds = !!cell;
                    if (isInBounds) {
                        isAllDay = getIsCellAllDay(cell);
                        colDelta = Math.round((ui.position.left - origPosition.left) / colWidth);
                        if (colDelta != prevColDelta) {
                            var origDate = cellToDate(0, origCell.col);
                            var col = origCell.col + colDelta;
                            col = Math.max(0, col);
                            col = Math.min(colCnt - 1, col);
                            var date = cellToDate(0, col);
                            dayDelta = dayDiff(date, origDate);
                        }
                        if (!isAllDay) {
                            minuteDelta = Math.round((ui.position.top - origPosition.top) / snapHeight) * snapMinutes;
                        }
                    }
                    if (isInBounds != prevIsInBounds || isAllDay != prevIsAllDay || colDelta != prevColDelta || minuteDelta != prevMinuteDelta) {
                        updateUI();
                        prevIsInBounds = isInBounds;
                        prevIsAllDay = isAllDay;
                        prevColDelta = colDelta;
                        prevMinuteDelta = minuteDelta;
                    }
                    eventElement.draggable('option', 'revert', !isInBounds);
                },
                stop: function(ev, ui) {
                    clearOverlays();
                    trigger('eventDragStop', eventElement, event, ev, ui);
                    if (isInBounds && (isAllDay || dayDelta || minuteDelta)) {
                        eventDrop(this, event, dayDelta, isAllDay ? 0 : minuteDelta, isAllDay, ev, ui);
                    } else {
                        isInBounds = true;
                        isAllDay = false;
                        colDelta = 0;
                        dayDelta = 0;
                        minuteDelta = 0;
                        updateUI();
                        eventElement.css('filter', '');
                        eventElement.css(origPosition);
                        showEvents(event, eventElement);
                    }
                }
            });

            function updateUI() {
                clearOverlays();
                if (isInBounds) {
                    if (isAllDay) {
                        timeElement.hide();
                        eventElement.draggable('option', 'grid', null);
                        renderDayOverlay(addDays(cloneDate(event.start), dayDelta), addDays(exclEndDay(event), dayDelta));
                    } else {
                        updateTimeText(minuteDelta);
                        timeElement.css('display', '');
                        eventElement.draggable('option', 'grid', [colWidth, snapHeight]);
                    }
                }
            }

            function updateTimeText(minuteDelta) {
                var newStart = addMinutes(cloneDate(event.start), minuteDelta);
                var newEnd;
                if (event.end) {
                    newEnd = addMinutes(cloneDate(event.end), minuteDelta);
                }
                timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));
            }
        }

        function resizableSlotEvent(event, eventElement, timeElement) {
            var snapDelta, prevSnapDelta;
            var snapHeight = getSnapHeight();
            var snapMinutes = getSnapMinutes();
            eventElement.resizable({
                handles: {
                    s: '.ui-resizable-handle'
                },
                grid: snapHeight,
                start: function(ev, ui) {
                    snapDelta = prevSnapDelta = 0;
                    hideEvents(event, eventElement);
                    trigger('eventResizeStart', this, event, ev, ui);
                },
                resize: function(ev, ui) {
                    snapDelta = Math.round((Math.max(snapHeight, eventElement.height()) - ui.originalSize.height) / snapHeight);
                    if (snapDelta != prevSnapDelta) {
                        timeElement.text(formatDates(event.start, (!snapDelta && !event.end) ? null : addMinutes(eventEnd(event), snapMinutes * snapDelta), opt('timeFormat')));
                        prevSnapDelta = snapDelta;
                    }
                },
                stop: function(ev, ui) {
                    trigger('eventResizeStop', this, event, ev, ui);
                    if (snapDelta) {
                        eventResize(this, event, 0, snapMinutes * snapDelta, ev, ui);
                    } else {
                        showEvents(event, eventElement);
                    }
                }
            });
        }
    }

    function placeSlotSegs(segs) {
        var levels = buildSlotSegLevels(segs);
        var level0 = levels[0];
        var i;
        computeForwardSlotSegs(levels);
        if (level0) {
            for (i = 0; i < level0.length; i++) {
                computeSlotSegPressures(level0[i]);
            }
            for (i = 0; i < level0.length; i++) {
                computeSlotSegCoords(level0[i], 0, 0);
            }
        }
        return flattenSlotSegLevels(levels);
    }

    function buildSlotSegLevels(segs) {
        var levels = [];
        var i, seg;
        var j;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            for (j = 0; j < levels.length; j++) {
                if (!computeSlotSegCollisions(seg, levels[j]).length) {
                    break;
                }
            }
            (levels[j] || (levels[j] = [])).push(seg);
        }
        return levels;
    }

    function computeForwardSlotSegs(levels) {
        var i, level;
        var j, seg;
        var k;
        for (i = 0; i < levels.length; i++) {
            level = levels[i];
            for (j = 0; j < level.length; j++) {
                seg = level[j];
                seg.forwardSegs = [];
                for (k = i + 1; k < levels.length; k++) {
                    computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
                }
            }
        }
    }

    function computeSlotSegPressures(seg) {
        var forwardSegs = seg.forwardSegs;
        var forwardPressure = 0;
        var i, forwardSeg;
        if (seg.forwardPressure === undefined) {
            for (i = 0; i < forwardSegs.length; i++) {
                forwardSeg = forwardSegs[i];
                computeSlotSegPressures(forwardSeg);
                forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
            }
            seg.forwardPressure = forwardPressure;
        }
    }

    function computeSlotSegCoords(seg, seriesBackwardPressure, seriesBackwardCoord) {
        var forwardSegs = seg.forwardSegs;
        var i;
        if (seg.forwardCoord === undefined) {
            if (!forwardSegs.length) {
                seg.forwardCoord = 1;
            } else {
                forwardSegs.sort(compareForwardSlotSegs);
                computeSlotSegCoords(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                seg.forwardCoord = forwardSegs[0].backwardCoord;
            }
            seg.backwardCoord = seg.forwardCoord -
                (seg.forwardCoord - seriesBackwardCoord) / (seriesBackwardPressure + 1);
            for (i = 0; i < forwardSegs.length; i++) {
                computeSlotSegCoords(forwardSegs[i], 0, seg.forwardCoord);
            }
        }
    }

    function flattenSlotSegLevels(levels) {
        var segs = [];
        var i, level;
        var j;
        for (i = 0; i < levels.length; i++) {
            level = levels[i];
            for (j = 0; j < level.length; j++) {
                segs.push(level[j]);
            }
        }
        return segs;
    }

    function computeSlotSegCollisions(seg, otherSegs, results) {
        results = results || [];
        for (var i = 0; i < otherSegs.length; i++) {
            if (isSlotSegCollision(seg, otherSegs[i])) {
                results.push(otherSegs[i]);
            }
        }
        return results;
    }

    function isSlotSegCollision(seg1, seg2) {
        return seg1.end > seg2.start && seg1.start < seg2.end;
    }

    function compareForwardSlotSegs(seg1, seg2) {
        return seg2.forwardPressure - seg1.forwardPressure || (seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) || compareSlotSegs(seg1, seg2);
    }

    function compareSlotSegs(seg1, seg2) {
        return seg1.start - seg2.start || (seg2.end - seg2.start) - (seg1.end - seg1.start) || (seg1.event.title || '').localeCompare(seg2.event.title);
    };;

    function View(element, calendar, viewName) {
        var t = this;
        t.element = element;
        t.calendar = calendar;
        t.name = viewName;
        t.opt = opt;
        t.trigger = trigger;
        t.isEventDraggable = isEventDraggable;
        t.isEventResizable = isEventResizable;
        t.setEventData = setEventData;
        t.clearEventData = clearEventData;
        t.eventEnd = eventEnd;
        t.reportEventElement = reportEventElement;
        t.triggerEventDestroy = triggerEventDestroy;
        t.eventElementHandlers = eventElementHandlers;
        t.showEvents = showEvents;
        t.hideEvents = hideEvents;
        t.eventDrop = eventDrop;
        t.eventResize = eventResize;
        var defaultEventEnd = t.defaultEventEnd;
        var normalizeEvent = calendar.normalizeEvent;
        var reportEventChange = calendar.reportEventChange;
        var eventsByID = {};
        var eventElementsByID = {};
        var eventElementCouples = [];
        var options = calendar.options;

        function opt(name, viewNameOverride) {
            var v = options[name];
            if ($.isPlainObject(v)) {
                return smartProperty(v, viewNameOverride || viewName);
            }
            return v;
        }

        function trigger(name, thisObj) {
            return calendar.trigger.apply(calendar, [name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t]));
        }

        function isEventDraggable(event) {
            var source = event.source || {};
            return firstDefined(event.startEditable, source.startEditable, opt('eventStartEditable'), event.editable, source.editable, opt('editable')) && !opt('disableDragging');
        }

        function isEventResizable(event) {
            var source = event.source || {};
            return firstDefined(event.durationEditable, source.durationEditable, opt('eventDurationEditable'), event.editable, source.editable, opt('editable')) && !opt('disableResizing');
        }

        function setEventData(events) {
            eventsByID = {};
            var i, len = events.length,
                event;
            for (i = 0; i < len; i++) {
                event = events[i];
                if (eventsByID[event._id]) {
                    eventsByID[event._id].push(event);
                } else {
                    eventsByID[event._id] = [event];
                }
            }
        }

        function clearEventData() {
            eventsByID = {};
            eventElementsByID = {};
            eventElementCouples = [];
        }

        function eventEnd(event) {
            return event.end ? cloneDate(event.end) : defaultEventEnd(event);
        }

        function reportEventElement(event, element) {
            eventElementCouples.push({
                event: event,
                element: element
            });
            if (eventElementsByID[event._id]) {
                eventElementsByID[event._id].push(element);
            } else {
                eventElementsByID[event._id] = [element];
            }
        }

        function triggerEventDestroy() {
            $.each(eventElementCouples, function(i, couple) {
                t.trigger('eventDestroy', couple.event, couple.event, couple.element);
            });
        }

        function eventElementHandlers(event, eventElement) {
            eventElement.click(function(ev) {
                if (!eventElement.hasClass('ui-draggable-dragging') && !eventElement.hasClass('ui-resizable-resizing')) {
                    return trigger('eventClick', this, event, ev);
                }
            }).hover(function(ev) {
                trigger('eventMouseover', this, event, ev);
            }, function(ev) {
                trigger('eventMouseout', this, event, ev);
            });
        }

        function showEvents(event, exceptElement) {
            eachEventElement(event, exceptElement, 'show');
        }

        function hideEvents(event, exceptElement) {
            eachEventElement(event, exceptElement, 'hide');
        }

        function eachEventElement(event, exceptElement, funcName) {
            var elements = eventElementsByID[event._id],
                i, len = elements.length;
            for (i = 0; i < len; i++) {
                if (!exceptElement || elements[i][0] != exceptElement[0]) {
                    elements[i][funcName]();
                }
            }
        }

        function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
            var oldAllDay = event.allDay;
            var eventId = event._id;
            moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);
            trigger('eventDrop', e, event, dayDelta, minuteDelta, allDay, function() {
                moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);
                reportEventChange(eventId);
            }, ev, ui);
            reportEventChange(eventId);
        }

        function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
            var eventId = event._id;
            elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);
            trigger('eventResize', e, event, dayDelta, minuteDelta, function() {
                elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);
                reportEventChange(eventId);
            }, ev, ui);
            reportEventChange(eventId);
        }

        function moveEvents(events, dayDelta, minuteDelta, allDay) {
            minuteDelta = minuteDelta || 0;
            for (var e, len = events.length, i = 0; i < len; i++) {
                e = events[i];
                if (allDay !== undefined) {
                    e.allDay = allDay;
                }
                addMinutes(addDays(e.start, dayDelta, true), minuteDelta);
                if (e.end) {
                    e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);
                }
                normalizeEvent(e, options);
            }
        }

        function elongateEvents(events, dayDelta, minuteDelta) {
            minuteDelta = minuteDelta || 0;
            for (var e, len = events.length, i = 0; i < len; i++) {
                e = events[i];
                e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);
                normalizeEvent(e, options);
            }
        }
        t.isHiddenDay = isHiddenDay;
        t.skipHiddenDays = skipHiddenDays;
        t.getCellsPerWeek = getCellsPerWeek;
        t.dateToCell = dateToCell;
        t.dateToDayOffset = dateToDayOffset;
        t.dayOffsetToCellOffset = dayOffsetToCellOffset;
        t.cellOffsetToCell = cellOffsetToCell;
        t.cellToDate = cellToDate;
        t.cellToCellOffset = cellToCellOffset;
        t.cellOffsetToDayOffset = cellOffsetToDayOffset;
        t.dayOffsetToDate = dayOffsetToDate;
        t.rangeToSegments = rangeToSegments;
        var hiddenDays = opt('hiddenDays') || [];
        var isHiddenDayHash = [];
        var cellsPerWeek;
        var dayToCellMap = [];
        var cellToDayMap = [];
        var isRTL = opt('isRTL');
        (function() {
            if (opt('weekends') === false) {
                hiddenDays.push(0, 6);
            }
            for (var dayIndex = 0, cellIndex = 0; dayIndex < 7; dayIndex++) {
                dayToCellMap[dayIndex] = cellIndex;
                isHiddenDayHash[dayIndex] = $.inArray(dayIndex, hiddenDays) != -1;
                if (!isHiddenDayHash[dayIndex]) {
                    cellToDayMap[cellIndex] = dayIndex;
                    cellIndex++;
                }
            }
            cellsPerWeek = cellIndex;
            if (!cellsPerWeek) {
                throw 'invalid hiddenDays';
            }
        })();

        function isHiddenDay(day) {
            if (typeof day == 'object') {
                day = day.getDay();
            }
            return isHiddenDayHash[day];
        }

        function getCellsPerWeek() {
            return cellsPerWeek;
        }

        function skipHiddenDays(date, inc, isExclusive) {
            inc = inc || 1;
            while (isHiddenDayHash[(date.getDay() + (isExclusive ? inc : 0) + 7) % 7]) {
                addDays(date, inc);
            }
        }

        function cellToDate() {
            var cellOffset = cellToCellOffset.apply(null, arguments);
            var dayOffset = cellOffsetToDayOffset(cellOffset);
            var date = dayOffsetToDate(dayOffset);
            return date;
        }

        function cellToCellOffset(row, col) {
            var colCnt = t.getColCnt();
            var dis = isRTL ? -1 : 1;
            var dit = isRTL ? colCnt - 1 : 0;
            if (typeof row == 'object') {
                col = row.col;
                row = row.row;
            }
            var cellOffset = row * colCnt + (col * dis + dit);
            return cellOffset;
        }

        function cellOffsetToDayOffset(cellOffset) {
            var day0 = t.visStart.getDay();
            cellOffset += dayToCellMap[day0];
            return Math.floor(cellOffset / cellsPerWeek) * 7 + cellToDayMap[(cellOffset % cellsPerWeek + cellsPerWeek) % cellsPerWeek] - day0;
        }

        function dayOffsetToDate(dayOffset) {
            var date = cloneDate(t.visStart);
            addDays(date, dayOffset);
            return date;
        }

        function dateToCell(date) {
            var dayOffset = dateToDayOffset(date);
            var cellOffset = dayOffsetToCellOffset(dayOffset);
            var cell = cellOffsetToCell(cellOffset);
            return cell;
        }

        function dateToDayOffset(date) {
            return dayDiff(date, t.visStart);
        }

        function dayOffsetToCellOffset(dayOffset) {
            var day0 = t.visStart.getDay();
            dayOffset += day0;
            return Math.floor(dayOffset / 7) * cellsPerWeek + dayToCellMap[(dayOffset % 7 + 7) % 7] - dayToCellMap[day0];
        }

        function cellOffsetToCell(cellOffset) {
            var colCnt = t.getColCnt();
            var dis = isRTL ? -1 : 1;
            var dit = isRTL ? colCnt - 1 : 0;
            var row = Math.floor(cellOffset / colCnt);
            var col = ((cellOffset % colCnt + colCnt) % colCnt) * dis + dit;
            return {
                row: row,
                col: col
            };
        }

        function rangeToSegments(startDate, endDate) {
            var rowCnt = t.getRowCnt();
            var colCnt = t.getColCnt();
            var segments = [];
            var rangeDayOffsetStart = dateToDayOffset(startDate);
            var rangeDayOffsetEnd = dateToDayOffset(endDate);
            var rangeCellOffsetFirst = dayOffsetToCellOffset(rangeDayOffsetStart);
            var rangeCellOffsetLast = dayOffsetToCellOffset(rangeDayOffsetEnd) - 1;
            for (var row = 0; row < rowCnt; row++) {
                var rowCellOffsetFirst = row * colCnt;
                var rowCellOffsetLast = rowCellOffsetFirst + colCnt - 1;
                var segmentCellOffsetFirst = Math.max(rangeCellOffsetFirst, rowCellOffsetFirst);
                var segmentCellOffsetLast = Math.min(rangeCellOffsetLast, rowCellOffsetLast);
                if (segmentCellOffsetFirst <= segmentCellOffsetLast) {
                    var segmentCellFirst = cellOffsetToCell(segmentCellOffsetFirst);
                    var segmentCellLast = cellOffsetToCell(segmentCellOffsetLast);
                    var cols = [segmentCellFirst.col, segmentCellLast.col].sort();
                    var isStart = cellOffsetToDayOffset(segmentCellOffsetFirst) == rangeDayOffsetStart;
                    var isEnd = cellOffsetToDayOffset(segmentCellOffsetLast) + 1 == rangeDayOffsetEnd;
                    segments.push({
                        row: row,
                        leftCol: cols[0],
                        rightCol: cols[1],
                        isStart: isStart,
                        isEnd: isEnd
                    });
                }
            }
            return segments;
        }
    };;

    function DayEventRenderer() {
        var t = this;
        t.renderDayEvents = renderDayEvents;
        t.draggableDayEvent = draggableDayEvent;
        t.resizableDayEvent = resizableDayEvent;
        var opt = t.opt;
        var trigger = t.trigger;
        var isEventDraggable = t.isEventDraggable;
        var isEventResizable = t.isEventResizable;
        var eventEnd = t.eventEnd;
        var reportEventElement = t.reportEventElement;
        var eventElementHandlers = t.eventElementHandlers;
        var showEvents = t.showEvents;
        var hideEvents = t.hideEvents;
        var eventDrop = t.eventDrop;
        var eventResize = t.eventResize;
        var getRowCnt = t.getRowCnt;
        var getColCnt = t.getColCnt;
        var getColWidth = t.getColWidth;
        var allDayRow = t.allDayRow;
        var colLeft = t.colLeft;
        var colRight = t.colRight;
        var colContentLeft = t.colContentLeft;
        var colContentRight = t.colContentRight;
        var dateToCell = t.dateToCell;
        var getDaySegmentContainer = t.getDaySegmentContainer;
        var formatDates = t.calendar.formatDates;
        var renderDayOverlay = t.renderDayOverlay;
        var clearOverlays = t.clearOverlays;
        var clearSelection = t.clearSelection;
        var getHoverListener = t.getHoverListener;
        var rangeToSegments = t.rangeToSegments;
        var cellToDate = t.cellToDate;
        var cellToCellOffset = t.cellToCellOffset;
        var cellOffsetToDayOffset = t.cellOffsetToDayOffset;
        var dateToDayOffset = t.dateToDayOffset;
        var dayOffsetToCellOffset = t.dayOffsetToCellOffset;

        function renderDayEvents(events, modifiedEventId) {
            var segments = _renderDayEvents(events, false, true);
            segmentElementEach(segments, function(segment, element) {
                reportEventElement(segment.event, element);
            });
            attachHandlers(segments, modifiedEventId);
            segmentElementEach(segments, function(segment, element) {
                trigger('eventAfterRender', segment.event, segment.event, element);
            });
        }

        function renderTempDayEvent(event, adjustRow, adjustTop) {
            var segments = _renderDayEvents([event], true, false);
            var elements = [];
            segmentElementEach(segments, function(segment, element) {
                if (segment.row === adjustRow) {
                    element.css('top', adjustTop);
                }
                elements.push(element[0]);
            });
            return elements;
        }

        function _renderDayEvents(events, doAppend, doRowHeights) {
            var finalContainer = getDaySegmentContainer();
            var renderContainer = doAppend ? $("<div/>") : finalContainer;
            var segments = buildSegments(events);
            var html;
            var elements;
            calculateHorizontals(segments);
            html = buildHTML(segments);
            renderContainer[0].innerHTML = html;
            elements = renderContainer.children();
            if (doAppend) {
                finalContainer.append(elements);
            }
            resolveElements(segments, elements);
            segmentElementEach(segments, function(segment, element) {
                segment.hsides = hsides(element, true);
            });
            segmentElementEach(segments, function(segment, element) {
                element.width(Math.max(0, segment.outerWidth - segment.hsides));
            });
            segmentElementEach(segments, function(segment, element) {
                segment.outerHeight = element.outerHeight(true);
            });
            setVerticals(segments, doRowHeights);
            return segments;
        }

        function buildSegments(events) {
            var segments = [];
            for (var i = 0; i < events.length; i++) {
                var eventSegments = buildSegmentsForEvent(events[i]);
                segments.push.apply(segments, eventSegments);
            }
            return segments;
        }

        function buildSegmentsForEvent(event) {
            var startDate = event.start;
            var endDate = exclEndDay(event);
            var segments = rangeToSegments(startDate, endDate);
            for (var i = 0; i < segments.length; i++) {
                segments[i].event = event;
            }
            return segments;
        }

        function calculateHorizontals(segments) {
            var isRTL = opt('isRTL');
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                var leftFunc = (isRTL ? segment.isEnd : segment.isStart) ? colContentLeft : colLeft;
                var rightFunc = (isRTL ? segment.isStart : segment.isEnd) ? colContentRight : colRight;
                var left = leftFunc(segment.leftCol);
                var right = rightFunc(segment.rightCol);
                segment.left = left;
                segment.outerWidth = right - left;
            }
        }

        function buildHTML(segments) {
            var html = '';
            for (var i = 0; i < segments.length; i++) {
                html += buildHTMLForSegment(segments[i]);
            }
            return html;
        }

        function buildHTMLForSegment(segment) {
            var html = '';
            var isRTL = opt('isRTL');
            var event = segment.event;
            var url = event.url;
            var classNames = ['fc-event', 'fc-event-hori'];
            if (isEventDraggable(event)) {
                classNames.push('fc-event-draggable');
            }
            if (segment.isStart) {
                classNames.push('fc-event-start');
            }
            if (segment.isEnd) {
                classNames.push('fc-event-end');
            }
            classNames = classNames.concat(event.className);
            if (event.source) {
                classNames = classNames.concat(event.source.className || []);
            }
            var skinCss = getSkinCss(event, opt);
            if (url) {
                html += "<a href='" + htmlEscape(url) + "'";
            } else {
                html += "<div";
            }
            html += " class='" + classNames.join(' ') + "'" + " style=" + "'" + "position:absolute;" + "left:" + segment.left + "px;" +
                skinCss + "'" + ">" + "<div class='fc-event-inner'>";
            if (!event.allDay && segment.isStart) {
                html += "<span class='fc-event-time'>" +
                    htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) + "</span>";
            }
            html += "<span class='fc-event-title'>" +
                htmlEscape(event.title || '') + "</span>" + "</div>";
            if (segment.isEnd && isEventResizable(event)) {
                html += "<div class='ui-resizable-handle ui-resizable-" + (isRTL ? 'w' : 'e') + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>";
            }
            html += "</" + (url ? "a" : "div") + ">";
            return html;
        }

        function resolveElements(segments, elements) {
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                var event = segment.event;
                var element = elements.eq(i);
                var triggerRes = trigger('eventRender', event, event, element);
                if (triggerRes === false) {
                    element.remove();
                } else {
                    if (triggerRes && triggerRes !== true) {
                        triggerRes = $(triggerRes).css({
                            position: 'absolute',
                            left: segment.left
                        });
                        element.replaceWith(triggerRes);
                        element = triggerRes;
                    }
                    segment.element = element;
                }
            }
        }

        function setVerticals(segments, doRowHeights) {
            var rowContentHeights = calculateVerticals(segments);
            var rowContentElements = getRowContentElements();
            var rowContentTops = [];
            if (doRowHeights) {
                for (var i = 0; i < rowContentElements.length; i++) {
                    rowContentElements[i].height(rowContentHeights[i]);
                }
            }
            for (var i = 0; i < rowContentElements.length; i++) {
                rowContentTops.push(rowContentElements[i].position().top);
            }
            segmentElementEach(segments, function(segment, element) {
                element.css('top', rowContentTops[segment.row] + segment.top);
            });
        }

        function calculateVerticals(segments) {
            var rowCnt = getRowCnt();
            var colCnt = getColCnt();
            var rowContentHeights = [];
            var segmentRows = buildSegmentRows(segments);
            for (var rowI = 0; rowI < rowCnt; rowI++) {
                var segmentRow = segmentRows[rowI];
                var colHeights = [];
                for (var colI = 0; colI < colCnt; colI++) {
                    colHeights.push(0);
                }
                for (var segmentI = 0; segmentI < segmentRow.length; segmentI++) {
                    var segment = segmentRow[segmentI];
                    segment.top = arrayMax(colHeights.slice(segment.leftCol, segment.rightCol + 1));
                    for (var colI = segment.leftCol; colI <= segment.rightCol; colI++) {
                        colHeights[colI] = segment.top + segment.outerHeight;
                    }
                }
                rowContentHeights.push(arrayMax(colHeights));
            }
            return rowContentHeights;
        }

        function buildSegmentRows(segments) {
            var rowCnt = getRowCnt();
            var segmentRows = [];
            var segmentI;
            var segment;
            var rowI;
            for (segmentI = 0; segmentI < segments.length; segmentI++) {
                segment = segments[segmentI];
                rowI = segment.row;
                if (segment.element) {
                    if (segmentRows[rowI]) {
                        segmentRows[rowI].push(segment);
                    } else {
                        segmentRows[rowI] = [segment];
                    }
                }
            }
            for (rowI = 0; rowI < rowCnt; rowI++) {
                segmentRows[rowI] = sortSegmentRow(segmentRows[rowI] || []);
            }
            return segmentRows;
        }

        function sortSegmentRow(segments) {
            var sortedSegments = [];
            var subrows = buildSegmentSubrows(segments);
            for (var i = 0; i < subrows.length; i++) {
                sortedSegments.push.apply(sortedSegments, subrows[i]);
            }
            return sortedSegments;
        }

        function buildSegmentSubrows(segments) {
            segments.sort(compareDaySegments);
            var subrows = [];
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                for (var j = 0; j < subrows.length; j++) {
                    if (!isDaySegmentCollision(segment, subrows[j])) {
                        break;
                    }
                }
                if (subrows[j]) {
                    subrows[j].push(segment);
                } else {
                    subrows[j] = [segment];
                }
            }
            return subrows;
        }

        function getRowContentElements() {
            var i;
            var rowCnt = getRowCnt();
            var rowDivs = [];
            for (i = 0; i < rowCnt; i++) {
                rowDivs[i] = allDayRow(i).find('div.fc-day-content > div');
            }
            return rowDivs;
        }

        function attachHandlers(segments, modifiedEventId) {
            var segmentContainer = getDaySegmentContainer();
            segmentElementEach(segments, function(segment, element, i) {
                var event = segment.event;
                if (event._id === modifiedEventId) {
                    bindDaySeg(event, element, segment);
                } else {
                    element[0]._fci = i;
                }
            });
            lazySegBind(segmentContainer, segments, bindDaySeg);
        }

        function bindDaySeg(event, eventElement, segment) {
            if (isEventDraggable(event)) {
                t.draggableDayEvent(event, eventElement, segment);
            }
            if (segment.isEnd && isEventResizable(event)) {
                t.resizableDayEvent(event, eventElement, segment);
            }
            eventElementHandlers(event, eventElement);
        }

        function draggableDayEvent(event, eventElement) {
            var hoverListener = getHoverListener();
            var dayDelta;
            eventElement.draggable({
                delay: 50,
                opacity: opt('dragOpacity'),
                revertDuration: opt('dragRevertDuration'),
                start: function(ev, ui) {
                    trigger('eventDragStart', eventElement, event, ev, ui);
                    hideEvents(event, eventElement);
                    hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
                        eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);
                        clearOverlays();
                        if (cell) {
                            var origDate = cellToDate(origCell);
                            var date = cellToDate(cell);
                            dayDelta = dayDiff(date, origDate);
                            renderDayOverlay(addDays(cloneDate(event.start), dayDelta), addDays(exclEndDay(event), dayDelta));
                        } else {
                            dayDelta = 0;
                        }
                    }, ev, 'drag');
                },
                stop: function(ev, ui) {
                    hoverListener.stop();
                    clearOverlays();
                    trigger('eventDragStop', eventElement, event, ev, ui);
                    if (dayDelta) {
                        eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);
                    } else {
                        eventElement.css('filter', '');
                        showEvents(event, eventElement);
                    }
                }
            });
        }

        function resizableDayEvent(event, element, segment) {
            var isRTL = opt('isRTL');
            var direction = isRTL ? 'w' : 'e';
            var handle = element.find('.ui-resizable-' + direction);
            var isResizing = false;
            disableTextSelection(element);
            element.mousedown(function(ev) {
                ev.preventDefault();
            }).click(function(ev) {
                if (isResizing) {
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                }
            });
            handle.mousedown(function(ev) {
                if (ev.which != 1) {
                    return;
                }
                isResizing = true;
                var hoverListener = getHoverListener();
                var rowCnt = getRowCnt();
                var colCnt = getColCnt();
                var elementTop = element.css('top');
                var dayDelta;
                var helpers;
                var eventCopy = $.extend({}, event);
                var minCellOffset = dayOffsetToCellOffset(dateToDayOffset(event.start));
                clearSelection();
                $('body').css('cursor', direction + '-resize').one('mouseup', mouseup);
                trigger('eventResizeStart', this, event, ev);
                hoverListener.start(function(cell, origCell) {
                    if (cell) {
                        var origCellOffset = cellToCellOffset(origCell);
                        var cellOffset = cellToCellOffset(cell);
                        cellOffset = Math.max(cellOffset, minCellOffset);
                        dayDelta = cellOffsetToDayOffset(cellOffset) -
                            cellOffsetToDayOffset(origCellOffset);
                        if (dayDelta) {
                            eventCopy.end = addDays(eventEnd(event), dayDelta, true);
                            var oldHelpers = helpers;
                            helpers = renderTempDayEvent(eventCopy, segment.row, elementTop);
                            helpers = $(helpers);
                            helpers.find('*').css('cursor', direction + '-resize');
                            if (oldHelpers) {
                                oldHelpers.remove();
                            }
                            hideEvents(event);
                        } else {
                            if (helpers) {
                                showEvents(event);
                                helpers.remove();
                                helpers = null;
                            }
                        }
                        clearOverlays();
                        renderDayOverlay(event.start, addDays(exclEndDay(event), dayDelta));
                    }
                }, ev);

                function mouseup(ev) {
                    trigger('eventResizeStop', this, event, ev);
                    $('body').css('cursor', '');
                    hoverListener.stop();
                    clearOverlays();
                    if (dayDelta) {
                        eventResize(this, event, dayDelta, 0, ev);
                    }
                    setTimeout(function() {
                        isResizing = false;
                    }, 0);
                }
            });
        }
    }

    function isDaySegmentCollision(segment, otherSegments) {
        for (var i = 0; i < otherSegments.length; i++) {
            var otherSegment = otherSegments[i];
            if (otherSegment.leftCol <= segment.rightCol && otherSegment.rightCol >= segment.leftCol) {
                return true;
            }
        }
        return false;
    }

    function segmentElementEach(segments, callback) {
        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];
            var element = segment.element;
            if (element) {
                callback(segment, element, i);
            }
        }
    }

    function compareDaySegments(a, b) {
        return (b.rightCol - b.leftCol) - (a.rightCol - a.leftCol) || b.event.allDay - a.event.allDay || a.event.start - b.event.start || (a.event.title || '').localeCompare(b.event.title)
    };;

    function SelectionManager() {
        var t = this;
        t.select = select;
        t.unselect = unselect;
        t.reportSelection = reportSelection;
        t.daySelectionMousedown = daySelectionMousedown;
        var opt = t.opt;
        var trigger = t.trigger;
        var defaultSelectionEnd = t.defaultSelectionEnd;
        var renderSelection = t.renderSelection;
        var clearSelection = t.clearSelection;
        var selected = false;
        if (opt('selectable') && opt('unselectAuto')) {
            $(document).mousedown(function(ev) {
                var ignore = opt('unselectCancel');
                if (ignore) {
                    if ($(ev.target).parents(ignore).length) {
                        return;
                    }
                }
                unselect(ev);
            });
        }

        function select(startDate, endDate, allDay) {
            unselect();
            if (!endDate) {
                endDate = defaultSelectionEnd(startDate, allDay);
            }
            renderSelection(startDate, endDate, allDay);
            reportSelection(startDate, endDate, allDay);
        }

        function unselect(ev) {
            if (selected) {
                selected = false;
                clearSelection();
                trigger('unselect', null, ev);
            }
        }

        function reportSelection(startDate, endDate, allDay, ev) {
            selected = true;
            trigger('select', null, startDate, endDate, allDay, ev);
        }

        function daySelectionMousedown(ev) {
            var cellToDate = t.cellToDate;
            var getIsCellAllDay = t.getIsCellAllDay;
            var hoverListener = t.getHoverListener();
            var reportDayClick = t.reportDayClick;
            if (ev.which == 1 && opt('selectable')) {
                unselect(ev);
                var _mousedownElement = this;
                var dates;
                hoverListener.start(function(cell, origCell) {
                    clearSelection();
                    if (cell && getIsCellAllDay(cell)) {
                        dates = [cellToDate(origCell), cellToDate(cell)].sort(dateCompare);
                        renderSelection(dates[0], dates[1], true);
                    } else {
                        dates = null;
                    }
                }, ev);
                $(document).one('mouseup', function(ev) {
                    hoverListener.stop();
                    if (dates) {
                        if (+dates[0] == +dates[1]) {
                            reportDayClick(dates[0], true, ev);
                        }
                        reportSelection(dates[0], dates[1], true, ev);
                    }
                });
            }
        }
    };;

    function OverlayManager() {
        var t = this;
        t.renderOverlay = renderOverlay;
        t.clearOverlays = clearOverlays;
        var usedOverlays = [];
        var unusedOverlays = [];

        function renderOverlay(rect, parent) {
            var e = unusedOverlays.shift();
            if (!e) {
                e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");
            }
            if (e[0].parentNode != parent[0]) {
                e.appendTo(parent);
            }
            usedOverlays.push(e.css(rect).show());
            return e;
        }

        function clearOverlays() {
            var e;
            while (e = usedOverlays.shift()) {
                unusedOverlays.push(e.hide().unbind());
            }
        }
    };;

    function CoordinateGrid(buildFunc) {
        var t = this;
        var rows;
        var cols;
        t.build = function() {
            rows = [];
            cols = [];
            buildFunc(rows, cols);
        };
        t.cell = function(x, y) {
            var rowCnt = rows.length;
            var colCnt = cols.length;
            var i, r = -1,
                c = -1;
            for (i = 0; i < rowCnt; i++) {
                if (y >= rows[i][0] && y < rows[i][1]) {
                    r = i;
                    break;
                }
            }
            for (i = 0; i < colCnt; i++) {
                if (x >= cols[i][0] && x < cols[i][1]) {
                    c = i;
                    break;
                }
            }
            return (r >= 0 && c >= 0) ? {
                row: r,
                col: c
            } : null;
        };
        t.rect = function(row0, col0, row1, col1, originElement) {
            var origin = originElement.offset();
            return {
                top: rows[row0][0] - origin.top,
                left: cols[col0][0] - origin.left,
                width: cols[col1][1] - cols[col0][0],
                height: rows[row1][1] - rows[row0][0]
            };
        };
    };;

    function HoverListener(coordinateGrid) {
        var t = this;
        var bindType;
        var change;
        var firstCell;
        var cell;
        t.start = function(_change, ev, _bindType) {
            change = _change;
            firstCell = cell = null;
            coordinateGrid.build();
            mouse(ev);
            bindType = _bindType || 'mousemove';
            $(document).bind(bindType, mouse);
        };

        function mouse(ev) {
            _fixUIEvent(ev);
            var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);
            if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
                if (newCell) {
                    if (!firstCell) {
                        firstCell = newCell;
                    }
                    change(newCell, firstCell, newCell.row - firstCell.row, newCell.col - firstCell.col);
                } else {
                    change(newCell, firstCell);
                }
                cell = newCell;
            }
        }
        t.stop = function() {
            $(document).unbind(bindType, mouse);
            return cell;
        };
    }

    function _fixUIEvent(event) {
        if (event.pageX === undefined) {
            event.pageX = event.originalEvent.pageX;
            event.pageY = event.originalEvent.pageY;
        }
    };;

    function HorizontalPositionCache(getElement) {
        var t = this,
            elements = {},
            lefts = {},
            rights = {};

        function e(i) {
            return elements[i] = elements[i] || getElement(i);
        }
        t.left = function(i) {
            return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];
        };
        t.right = function(i) {
            return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
        };
        t.clear = function() {
            elements = {};
            lefts = {};
            rights = {};
        };
    };;
})(jQuery);
(function() {
    var cache = {};
    this.tmpl = function tmpl(str, data) {
        var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" +
            str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return data ? fn(data) : fn;
    };
})();
(function($) {
    function Draggable() {
        this._init.apply(this, arguments);
    };
    Draggable.prototype.oninit = function() {};
    Draggable.prototype.events = function() {};
    Draggable.prototype.onmousedown = function() {
        this.ptr.css({
            position: "absolute"
        });
    };
    Draggable.prototype.onmousemove = function(evt, x, y) {
        this.ptr.css({
            left: x,
            top: y
        });
    };
    Draggable.prototype.onmouseup = function() {};
    Draggable.prototype.isDefault = {
        drag: false,
        clicked: false,
        toclick: true,
        mouseup: false
    };
    Draggable.prototype._init = function() {
        if (arguments.length > 0) {
            this.ptr = $(arguments[0]);
            this.outer = $(".draggable-outer");
            this.is = {};
            $.extend(this.is, this.isDefault);
            var _offset = this.ptr.offset();
            this.d = {
                left: _offset.left,
                top: _offset.top,
                width: this.ptr.width(),
                height: this.ptr.height()
            };
            this.oninit.apply(this, arguments);
            this._events();
        }
    };
    Draggable.prototype._getPageCoords = function(event) {
        if (event.targetTouches && event.targetTouches[0]) {
            return {
                x: event.targetTouches[0].pageX,
                y: event.targetTouches[0].pageY
            };
        } else
            return {
                x: event.pageX,
                y: event.pageY
            };
    };
    Draggable.prototype._bindEvent = function(ptr, eventType, handler) {
        var self = this;
        if (this.supportTouches_)
            ptr.get(0).addEventListener(this.events_[eventType], handler, false);
        else
            ptr.bind(this.events_[eventType], handler);
    };
    Draggable.prototype._events = function() {
        var self = this;
        this.supportTouches_ = 'ontouchend' in document;
        this.events_ = {
            "click": this.supportTouches_ ? "touchstart" : "click",
            "down": this.supportTouches_ ? "touchstart" : "mousedown",
            "move": this.supportTouches_ ? "touchmove" : "mousemove",
            "up": this.supportTouches_ ? "touchend" : "mouseup"
        };
        this._bindEvent($(document), "move", function(event) {
            if (self.is.drag) {
                event.stopPropagation();
                event.preventDefault();
                self._mousemove(event);
            }
        });
        this._bindEvent($(document), "down", function(event) {
            if (self.is.drag) {
                event.stopPropagation();
                event.preventDefault();
            }
        });
        this._bindEvent($(document), "up", function(event) {
            self._mouseup(event);
        });
        this._bindEvent(this.ptr, "down", function(event) {
            self._mousedown(event);
            return false;
        });
        this._bindEvent(this.ptr, "up", function(event) {
            self._mouseup(event);
        });
        this.ptr.find("a").click(function() {
            self.is.clicked = true;
            if (!self.is.toclick) {
                self.is.toclick = true;
                return false;
            }
        }).mousedown(function(event) {
            self._mousedown(event);
            return false;
        });
        this.events();
    };
    Draggable.prototype._mousedown = function(evt) {
        this.is.drag = true;
        this.is.clicked = false;
        this.is.mouseup = false;
        var _offset = this.ptr.offset();
        var coords = this._getPageCoords(evt);
        this.cx = coords.x - _offset.left;
        this.cy = coords.y - _offset.top;
        $.extend(this.d, {
            left: _offset.left,
            top: _offset.top,
            width: this.ptr.width(),
            height: this.ptr.height()
        });
        if (this.outer && this.outer.get(0)) {
            this.outer.css({
                height: Math.max(this.outer.height(), $(document.body).height()),
                overflow: "hidden"
            });
        }
        this.onmousedown(evt);
    };
    Draggable.prototype._mousemove = function(evt) {
        this.is.toclick = false;
        var coords = this._getPageCoords(evt);
        this.onmousemove(evt, coords.x - this.cx, coords.y - this.cy);
    };
    Draggable.prototype._mouseup = function(evt) {
        var oThis = this;
        if (this.is.drag) {
            this.is.drag = false;
            if (this.outer && this.outer.get(0)) {
                if ($.browser.mozilla) {
                    this.outer.css({
                        overflow: "hidden"
                    });
                } else {
                    this.outer.css({
                        overflow: "visible"
                    });
                }
                if ($.browser.msie && $.browser.version == '6.0') {
                    this.outer.css({
                        height: "100%"
                    });
                } else {
                    this.outer.css({
                        height: "auto"
                    });
                }
            }
            this.onmouseup(evt);
        }
    };
    window.Draggable = Draggable;
})(jQuery);
(function($) {
    $.baseClass = function(obj) {
        obj = $(obj);
        return obj.get(0).className.match(/([^ ]+)/)[1];
    };
    $.fn.addDependClass = function(className, delimiter) {
        var options = {
            delimiter: delimiter ? delimiter : '-'
        }
        return this.each(function() {
            var baseClass = $.baseClass(this);
            if (baseClass)
                $(this).addClass(baseClass + options.delimiter + className);
        });
    };
    $.fn.removeDependClass = function(className, delimiter) {
        var options = {
            delimiter: delimiter ? delimiter : '-'
        }
        return this.each(function() {
            var baseClass = $.baseClass(this);
            if (baseClass)
                $(this).removeClass(baseClass + options.delimiter + className);
        });
    };
    $.fn.toggleDependClass = function(className, delimiter) {
        var options = {
            delimiter: delimiter ? delimiter : '-'
        }
        return this.each(function() {
            var baseClass = $.baseClass(this);
            if (baseClass)
                if ($(this).is("." + baseClass + options.delimiter + className))
                    $(this).removeClass(baseClass + options.delimiter + className);
                else
                    $(this).addClass(baseClass + options.delimiter + className);
        });
    };
})(jQuery);
var Hashtable = (function() {
    var FUNCTION = "function";
    var arrayRemoveAt = (typeof Array.prototype.splice == FUNCTION) ? function(arr, idx) {
        arr.splice(idx, 1);
    } : function(arr, idx) {
        var itemsAfterDeleted, i, len;
        if (idx === arr.length - 1) {
            arr.length = idx;
        } else {
            itemsAfterDeleted = arr.slice(idx + 1);
            arr.length = idx;
            for (i = 0, len = itemsAfterDeleted.length; i < len; ++i) {
                arr[idx + i] = itemsAfterDeleted[i];
            }
        }
    };

    function hashObject(obj) {
        var hashCode;
        if (typeof obj == "string") {
            return obj;
        } else if (typeof obj.hashCode == FUNCTION) {
            hashCode = obj.hashCode();
            return (typeof hashCode == "string") ? hashCode : hashObject(hashCode);
        } else if (typeof obj.toString == FUNCTION) {
            return obj.toString();
        } else {
            try {
                return String(obj);
            } catch (ex) {
                return Object.prototype.toString.call(obj);
            }
        }
    }

    function equals_fixedValueHasEquals(fixedValue, variableValue) {
        return fixedValue.equals(variableValue);
    }

    function equals_fixedValueNoEquals(fixedValue, variableValue) {
        return (typeof variableValue.equals == FUNCTION) ? variableValue.equals(fixedValue) : (fixedValue === variableValue);
    }

    function createKeyValCheck(kvStr) {
        return function(kv) {
            if (kv === null) {
                throw new Error("null is not a valid " + kvStr);
            } else if (typeof kv == "undefined") {
                throw new Error(kvStr + " must not be undefined");
            }
        };
    }
    var checkKey = createKeyValCheck("key"),
        checkValue = createKeyValCheck("value");

    function Bucket(hash, firstKey, firstValue, equalityFunction) {
        this[0] = hash;
        this.entries = [];
        this.addEntry(firstKey, firstValue);
        if (equalityFunction !== null) {
            this.getEqualityFunction = function() {
                return equalityFunction;
            };
        }
    }
    var EXISTENCE = 0,
        ENTRY = 1,
        ENTRY_INDEX_AND_VALUE = 2;

    function createBucketSearcher(mode) {
        return function(key) {
            var i = this.entries.length,
                entry, equals = this.getEqualityFunction(key);
            while (i--) {
                entry = this.entries[i];
                if (equals(key, entry[0])) {
                    switch (mode) {
                        case EXISTENCE:
                            return true;
                        case ENTRY:
                            return entry;
                        case ENTRY_INDEX_AND_VALUE:
                            return [i, entry[1]];
                    }
                }
            }
            return false;
        };
    }

    function createBucketLister(entryProperty) {
        return function(aggregatedArr) {
            var startIndex = aggregatedArr.length;
            for (var i = 0, len = this.entries.length; i < len; ++i) {
                aggregatedArr[startIndex + i] = this.entries[i][entryProperty];
            }
        };
    }
    Bucket.prototype = {
        getEqualityFunction: function(searchValue) {
            return (typeof searchValue.equals == FUNCTION) ? equals_fixedValueHasEquals : equals_fixedValueNoEquals;
        },
        getEntryForKey: createBucketSearcher(ENTRY),
        getEntryAndIndexForKey: createBucketSearcher(ENTRY_INDEX_AND_VALUE),
        removeEntryForKey: function(key) {
            var result = this.getEntryAndIndexForKey(key);
            if (result) {
                arrayRemoveAt(this.entries, result[0]);
                return result[1];
            }
            return null;
        },
        addEntry: function(key, value) {
            this.entries[this.entries.length] = [key, value];
        },
        keys: createBucketLister(0),
        values: createBucketLister(1),
        getEntries: function(entries) {
            var startIndex = entries.length;
            for (var i = 0, len = this.entries.length; i < len; ++i) {
                entries[startIndex + i] = this.entries[i].slice(0);
            }
        },
        containsKey: createBucketSearcher(EXISTENCE),
        containsValue: function(value) {
            var i = this.entries.length;
            while (i--) {
                if (value === this.entries[i][1]) {
                    return true;
                }
            }
            return false;
        }
    };

    function searchBuckets(buckets, hash) {
        var i = buckets.length,
            bucket;
        while (i--) {
            bucket = buckets[i];
            if (hash === bucket[0]) {
                return i;
            }
        }
        return null;
    }

    function getBucketForHash(bucketsByHash, hash) {
        var bucket = bucketsByHash[hash];
        return (bucket && (bucket instanceof Bucket)) ? bucket : null;
    }

    function Hashtable(hashingFunctionParam, equalityFunctionParam) {
        var that = this;
        var buckets = [];
        var bucketsByHash = {};
        var hashingFunction = (typeof hashingFunctionParam == FUNCTION) ? hashingFunctionParam : hashObject;
        var equalityFunction = (typeof equalityFunctionParam == FUNCTION) ? equalityFunctionParam : null;
        this.put = function(key, value) {
            checkKey(key);
            checkValue(value);
            var hash = hashingFunction(key),
                bucket, bucketEntry, oldValue = null;
            bucket = getBucketForHash(bucketsByHash, hash);
            if (bucket) {
                bucketEntry = bucket.getEntryForKey(key);
                if (bucketEntry) {
                    oldValue = bucketEntry[1];
                    bucketEntry[1] = value;
                } else {
                    bucket.addEntry(key, value);
                }
            } else {
                bucket = new Bucket(hash, key, value, equalityFunction);
                buckets[buckets.length] = bucket;
                bucketsByHash[hash] = bucket;
            }
            return oldValue;
        };
        this.get = function(key) {
            checkKey(key);
            var hash = hashingFunction(key);
            var bucket = getBucketForHash(bucketsByHash, hash);
            if (bucket) {
                var bucketEntry = bucket.getEntryForKey(key);
                if (bucketEntry) {
                    return bucketEntry[1];
                }
            }
            return null;
        };
        this.containsKey = function(key) {
            checkKey(key);
            var bucketKey = hashingFunction(key);
            var bucket = getBucketForHash(bucketsByHash, bucketKey);
            return bucket ? bucket.containsKey(key) : false;
        };
        this.containsValue = function(value) {
            checkValue(value);
            var i = buckets.length;
            while (i--) {
                if (buckets[i].containsValue(value)) {
                    return true;
                }
            }
            return false;
        };
        this.clear = function() {
            buckets.length = 0;
            bucketsByHash = {};
        };
        this.isEmpty = function() {
            return !buckets.length;
        };
        var createBucketAggregator = function(bucketFuncName) {
            return function() {
                var aggregated = [],
                    i = buckets.length;
                while (i--) {
                    buckets[i][bucketFuncName](aggregated);
                }
                return aggregated;
            };
        };
        this.keys = createBucketAggregator("keys");
        this.values = createBucketAggregator("values");
        this.entries = createBucketAggregator("getEntries");
        this.remove = function(key) {
            checkKey(key);
            var hash = hashingFunction(key),
                bucketIndex, oldValue = null;
            var bucket = getBucketForHash(bucketsByHash, hash);
            if (bucket) {
                oldValue = bucket.removeEntryForKey(key);
                if (oldValue !== null) {
                    if (!bucket.entries.length) {
                        bucketIndex = searchBuckets(buckets, hash);
                        arrayRemoveAt(buckets, bucketIndex);
                        delete bucketsByHash[hash];
                    }
                }
            }
            return oldValue;
        };
        this.size = function() {
            var total = 0,
                i = buckets.length;
            while (i--) {
                total += buckets[i].entries.length;
            }
            return total;
        };
        this.each = function(callback) {
            var entries = that.entries(),
                i = entries.length,
                entry;
            while (i--) {
                entry = entries[i];
                callback(entry[0], entry[1]);
            }
        };
        this.putAll = function(hashtable, conflictCallback) {
            var entries = hashtable.entries();
            var entry, key, value, thisValue, i = entries.length;
            var hasConflictCallback = (typeof conflictCallback == FUNCTION);
            while (i--) {
                entry = entries[i];
                key = entry[0];
                value = entry[1];
                if (hasConflictCallback && (thisValue = that.get(key))) {
                    value = conflictCallback(key, thisValue, value);
                }
                that.put(key, value);
            }
        };
        this.clone = function() {
            var clone = new Hashtable(hashingFunctionParam, equalityFunctionParam);
            clone.putAll(that);
            return clone;
        };
    }
    return Hashtable;
})();
(function(jQuery) {
    var nfLocales = new Hashtable();
    var nfLocalesLikeUS = ['ae', 'au', 'ca', 'cn', 'eg', 'gb', 'hk', 'il', 'in', 'jp', 'sk', 'th', 'tw', 'us'];
    var nfLocalesLikeDE = ['at', 'br', 'de', 'dk', 'es', 'gr', 'it', 'nl', 'pt', 'tr', 'vn'];
    var nfLocalesLikeFR = ['cz', 'fi', 'fr', 'ru', 'se', 'pl'];
    var nfLocalesLikeCH = ['ch'];
    var nfLocaleFormatting = [
        [".", ","],
        [",", "."],
        [",", " "],
        [".", "'"]
    ];
    var nfAllLocales = [nfLocalesLikeUS, nfLocalesLikeDE, nfLocalesLikeFR, nfLocalesLikeCH]

    function FormatData(dec, group, neg) {
        this.dec = dec;
        this.group = group;
        this.neg = neg;
    };

    function init() {
        for (var localeGroupIdx = 0; localeGroupIdx < nfAllLocales.length; localeGroupIdx++) {
            localeGroup = nfAllLocales[localeGroupIdx];
            for (var i = 0; i < localeGroup.length; i++) {
                nfLocales.put(localeGroup[i], localeGroupIdx);
            }
        }
    };

    function formatCodes(locale, isFullLocale) {
        if (nfLocales.size() == 0)
            init();
        var dec = ".";
        var group = ",";
        var neg = "-";
        if (isFullLocale == false) {
            if (locale.indexOf('_') != -1)
                locale = locale.split('_')[1].toLowerCase();
            else if (locale.indexOf('-') != -1)
                locale = locale.split('-')[1].toLowerCase();
        }
        var codesIndex = nfLocales.get(locale);
        if (codesIndex) {
            var codes = nfLocaleFormatting[codesIndex];
            if (codes) {
                dec = codes[0];
                group = codes[1];
            }
        }
        return new FormatData(dec, group, neg);
    };
    jQuery.fn.formatNumber = function(options, writeBack, giveReturnValue) {
        return this.each(function() {
            if (writeBack == null)
                writeBack = true;
            if (giveReturnValue == null)
                giveReturnValue = true;
            var text;
            if (jQuery(this).is(":input"))
                text = new String(jQuery(this).val());
            else
                text = new String(jQuery(this).text());
            var returnString = jQuery.formatNumber(text, options);
            if (writeBack) {
                if (jQuery(this).is(":input"))
                    jQuery(this).val(returnString);
                else
                    jQuery(this).text(returnString);
            }
            if (giveReturnValue)
                return returnString;
        });
    };
    jQuery.formatNumber = function(numberString, options) {
        var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
        var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);
        var dec = formatData.dec;
        var group = formatData.group;
        var neg = formatData.neg;
        var validFormat = "0#-,.";
        var prefix = "";
        var negativeInFront = false;
        for (var i = 0; i < options.format.length; i++) {
            if (validFormat.indexOf(options.format.charAt(i)) == -1)
                prefix = prefix + options.format.charAt(i);
            else
            if (i == 0 && options.format.charAt(i) == '-') {
                negativeInFront = true;
                continue;
            } else
                break;
        }
        var suffix = "";
        for (var i = options.format.length - 1; i >= 0; i--) {
            if (validFormat.indexOf(options.format.charAt(i)) == -1)
                suffix = options.format.charAt(i) + suffix;
            else
                break;
        }
        options.format = options.format.substring(prefix.length);
        options.format = options.format.substring(0, options.format.length - suffix.length);
        var number = new Number(numberString);
        return jQuery._formatNumber(number, options, suffix, prefix, negativeInFront);
    };
    jQuery._formatNumber = function(number, options, suffix, prefix, negativeInFront) {
        var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
        var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);
        var dec = formatData.dec;
        var group = formatData.group;
        var neg = formatData.neg;
        var forcedToZero = false;
        if (isNaN(number)) {
            if (options.nanForceZero == true) {
                number = 0;
                forcedToZero = true;
            } else
                return null;
        }
        if (suffix == "%")
            number = number * 100;
        var returnString = "";
        if (options.format.indexOf(".") > -1) {
            var decimalPortion = dec;
            var decimalFormat = options.format.substring(options.format.lastIndexOf(".") + 1);
            if (options.round == true)
                number = new Number(number.toFixed(decimalFormat.length));
            else {
                var numStr = number.toString();
                numStr = numStr.substring(0, numStr.lastIndexOf('.') + decimalFormat.length + 1);
                number = new Number(numStr);
            }
            var decimalValue = number % 1;
            var decimalString = new String(decimalValue.toFixed(decimalFormat.length));
            decimalString = decimalString.substring(decimalString.lastIndexOf(".") + 1);
            for (var i = 0; i < decimalFormat.length; i++) {
                if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) != '0') {
                    decimalPortion += decimalString.charAt(i);
                    continue;
                } else if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) == '0') {
                    var notParsed = decimalString.substring(i);
                    if (notParsed.match('[1-9]')) {
                        decimalPortion += decimalString.charAt(i);
                        continue;
                    } else
                        break;
                } else if (decimalFormat.charAt(i) == "0")
                    decimalPortion += decimalString.charAt(i);
            }
            returnString += decimalPortion
        } else
            number = Math.round(number);
        var ones = Math.floor(number);
        if (number < 0)
            ones = Math.ceil(number);
        var onesFormat = "";
        if (options.format.indexOf(".") == -1)
            onesFormat = options.format;
        else
            onesFormat = options.format.substring(0, options.format.indexOf("."));
        var onePortion = "";
        if (!(ones == 0 && onesFormat.substr(onesFormat.length - 1) == '#') || forcedToZero) {
            var oneText = new String(Math.abs(ones));
            var groupLength = 9999;
            if (onesFormat.lastIndexOf(",") != -1)
                groupLength = onesFormat.length - onesFormat.lastIndexOf(",") - 1;
            var groupCount = 0;
            for (var i = oneText.length - 1; i > -1; i--) {
                onePortion = oneText.charAt(i) + onePortion;
                groupCount++;
                if (groupCount == groupLength && i != 0) {
                    onePortion = group + onePortion;
                    groupCount = 0;
                }
            }
            if (onesFormat.length > onePortion.length) {
                var padStart = onesFormat.indexOf('0');
                if (padStart != -1) {
                    var padLen = onesFormat.length - padStart;
                    var pos = onesFormat.length - onePortion.length - 1;
                    while (onePortion.length < padLen) {
                        var padChar = onesFormat.charAt(pos);
                        if (padChar == ',')
                            padChar = group;
                        onePortion = padChar + onePortion;
                        pos--;
                    }
                }
            }
        }
        if (!onePortion && onesFormat.indexOf('0', onesFormat.length - 1) !== -1)
            onePortion = '0';
        returnString = onePortion + returnString;
        if (number < 0 && negativeInFront && prefix.length > 0)
            prefix = neg + prefix;
        else if (number < 0)
            returnString = neg + returnString;
        if (!options.decimalSeparatorAlwaysShown) {
            if (returnString.lastIndexOf(dec) == returnString.length - 1) {
                returnString = returnString.substring(0, returnString.length - 1);
            }
        }
        returnString = prefix + returnString + suffix;
        return returnString;
    };
    jQuery.fn.parseNumber = function(options, writeBack, giveReturnValue) {
        if (writeBack == null)
            writeBack = true;
        if (giveReturnValue == null)
            giveReturnValue = true;
        var text;
        if (jQuery(this).is(":input"))
            text = new String(jQuery(this).val());
        else
            text = new String(jQuery(this).text());
        var number = jQuery.parseNumber(text, options);
        if (number) {
            if (writeBack) {
                if (jQuery(this).is(":input"))
                    jQuery(this).val(number.toString());
                else
                    jQuery(this).text(number.toString());
            }
            if (giveReturnValue)
                return number;
        }
    };
    jQuery.parseNumber = function(numberString, options) {
        var options = jQuery.extend({}, jQuery.fn.parseNumber.defaults, options);
        var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);
        var dec = formatData.dec;
        var group = formatData.group;
        var neg = formatData.neg;
        var valid = "1234567890.-";
        while (numberString.indexOf(group) > -1)
            numberString = numberString.replace(group, '');
        numberString = numberString.replace(dec, ".").replace(neg, "-");
        var validText = "";
        var hasPercent = false;
        if (numberString.charAt(numberString.length - 1) == "%" || options.isPercentage == true)
            hasPercent = true;
        for (var i = 0; i < numberString.length; i++) {
            if (valid.indexOf(numberString.charAt(i)) > -1)
                validText = validText + numberString.charAt(i);
        }
        var number = new Number(validText);
        if (hasPercent) {
            number = number / 100;
            var decimalPos = validText.indexOf('.');
            if (decimalPos != -1) {
                var decimalPoints = validText.length - decimalPos - 1;
                number = number.toFixed(decimalPoints + 2);
            } else {
                number = number.toFixed(validText.length - 1);
            }
        }
        return number;
    };
    jQuery.fn.parseNumber.defaults = {
        locale: "us",
        decimalSeparatorAlwaysShown: false,
        isPercentage: false,
        isFullLocale: false
    };
    jQuery.fn.formatNumber.defaults = {
        format: "#,###.00",
        locale: "us",
        decimalSeparatorAlwaysShown: false,
        nanForceZero: true,
        round: true,
        isFullLocale: false
    };
    Number.prototype.toFixed = function(precision) {
        return jQuery._roundNumber(this, precision);
    };
    jQuery._roundNumber = function(number, decimalPlaces) {
        var power = Math.pow(10, decimalPlaces || 0);
        var value = String(Math.round(number * power) / power);
        if (decimalPlaces > 0) {
            var dp = value.indexOf(".");
            if (dp == -1) {
                value += '.';
                dp = 0;
            } else {
                dp = value.length - (dp + 1);
            }
            while (dp < decimalPlaces) {
                value += '0';
                dp++;
            }
        }
        return value;
    };
})(jQuery);
(function($) {
    function isArray(value) {
        if (typeof value == "undefined") return false;
        if (value instanceof Array || (!(value instanceof Object) && (Object.prototype.toString.call((value)) == '[object Array]') || typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice'))) {
            return true;
        }
        return false;
    }
    $.slider = function(node, settings) {
        var jNode = $(node);
        if (!jNode.data("jslider"))
            jNode.data("jslider", new jSlider(node, settings));
        return jNode.data("jslider");
    };
    $.fn.slider = function(action, opt_value) {
        var returnValue, args = arguments;

        function isDef(val) {
            return val !== undefined;
        };

        function isDefAndNotNull(val) {
            return val != null;
        };
        this.each(function() {
            var self = $.slider(this, action);
            if (typeof action == "string") {
                switch (action) {
                    case "value":
                        if (isDef(args[1]) && isDef(args[2])) {
                            var pointers = self.getPointers();
                            if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                                pointers[0].set(args[1]);
                                pointers[0].setIndexOver();
                            }
                            if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
                                pointers[1].set(args[2]);
                                pointers[1].setIndexOver();
                            }
                        } else if (isDef(args[1])) {
                            var pointers = self.getPointers();
                            if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                                pointers[0].set(args[1]);
                                pointers[0].setIndexOver();
                            }
                        } else
                            returnValue = self.getValue();
                        break;
                    case "prc":
                        if (isDef(args[1]) && isDef(args[2])) {
                            var pointers = self.getPointers();
                            if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                                pointers[0]._set(args[1]);
                                pointers[0].setIndexOver();
                            }
                            if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
                                pointers[1]._set(args[2]);
                                pointers[1].setIndexOver();
                            }
                        } else if (isDef(args[1])) {
                            var pointers = self.getPointers();
                            if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                                pointers[0]._set(args[1]);
                                pointers[0].setIndexOver();
                            }
                        } else
                            returnValue = self.getPrcValue();
                        break;
                    case "calculatedValue":
                        var value = self.getValue().split(";");
                        returnValue = "";
                        for (var i = 0; i < value.length; i++) {
                            returnValue += (i > 0 ? ";" : "") + self.nice(value[i]);
                        };
                        break;
                    case "skin":
                        self.setSkin(args[1]);
                        break;
                };
            } else if (!action && !opt_value) {
                if (!isArray(returnValue))
                    returnValue = [];
                returnValue.push(self);
            }
        });
        if (isArray(returnValue) && returnValue.length == 1)
            returnValue = returnValue[0];
        return returnValue || this;
    };
    var OPTIONS = {
        settings: {
            from: 1,
            to: 10,
            step: 1,
            smooth: true,
            limits: true,
            round: 0,
            format: {
                format: "#,##0.##"
            },
            value: "5;7",
            dimension: ""
        },
        className: "jslider",
        selector: ".jslider-",
        template: tmpl('<span class="<%=className%>">' + '<table><tr><td>' + '<div class="<%=className%>-bg">' + '<i class="l"></i><i class="f"></i><i class="r"></i>' + '<i class="v"></i>' + '</div>' + '<div class="<%=className%>-pointer"></div>' + '<div class="<%=className%>-pointer <%=className%>-pointer-to"></div>' + '<div class="<%=className%>-label"><span><%=settings.from%></span></div>' + '<div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div>' + '<div class="<%=className%>-value"><span></span><%=settings.dimension%></div>' + '<div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div>' + '<div class="<%=className%>-scale"><%=scale%></div>' + '</td></tr></table>' + '</span>')
    };

    function jSlider() {
        return this.init.apply(this, arguments);
    };
    jSlider.prototype.init = function(node, settings) {
        this.settings = $.extend(true, {}, OPTIONS.settings, settings ? settings : {});
        this.inputNode = $(node).hide();
        this.settings.interval = this.settings.to - this.settings.from;
        this.settings.value = this.inputNode.attr("value");
        if (this.settings.calculate && $.isFunction(this.settings.calculate))
            this.nice = this.settings.calculate;
        if (this.settings.onstatechange && $.isFunction(this.settings.onstatechange))
            this.onstatechange = this.settings.onstatechange;
        this.is = {
            init: false
        };
        this.o = {};
        this.create();
    };
    jSlider.prototype.onstatechange = function() {};
    jSlider.prototype.create = function() {
        var $this = this;
        this.domNode = $(OPTIONS.template({
            className: OPTIONS.className,
            settings: {
                from: this.nice(this.settings.from),
                to: this.nice(this.settings.to),
                dimension: this.settings.dimension
            },
            scale: this.generateScale()
        }));
        this.inputNode.after(this.domNode);
        this.drawScale();
        if (this.settings.skin && this.settings.skin.length > 0)
            this.setSkin(this.settings.skin);
        this.sizes = {
            domWidth: this.domNode.width(),
            domOffset: this.domNode.offset()
        };
        $.extend(this.o, {
            pointers: {},
            labels: {
                0: {
                    o: this.domNode.find(OPTIONS.selector + "value").not(OPTIONS.selector + "value-to")
                },
                1: {
                    o: this.domNode.find(OPTIONS.selector + "value").filter(OPTIONS.selector + "value-to")
                }
            },
            limits: {
                0: this.domNode.find(OPTIONS.selector + "label").not(OPTIONS.selector + "label-to"),
                1: this.domNode.find(OPTIONS.selector + "label").filter(OPTIONS.selector + "label-to")
            }
        });
        $.extend(this.o.labels[0], {
            value: this.o.labels[0].o.find("span")
        });
        $.extend(this.o.labels[1], {
            value: this.o.labels[1].o.find("span")
        });
        if (!$this.settings.value.split(";")[1]) {
            this.settings.single = true;
            this.domNode.addDependClass("single");
        }
        if (!$this.settings.limits)
            this.domNode.addDependClass("limitless");
        this.domNode.find(OPTIONS.selector + "pointer").each(function(i) {
            var value = $this.settings.value.split(";")[i];
            if (value) {
                $this.o.pointers[i] = new jSliderPointer(this, i, $this);
                var prev = $this.settings.value.split(";")[i - 1];
                if (prev && new Number(value) < new Number(prev)) value = prev;
                value = value < $this.settings.from ? $this.settings.from : value;
                value = value > $this.settings.to ? $this.settings.to : value;
                $this.o.pointers[i].set(value, true);
            }
        });
        this.o.value = this.domNode.find(".v");
        this.is.init = true;
        $.each(this.o.pointers, function(i) {
            $this.redraw(this);
        });
        (function(self) {
            $(window).resize(function() {
                self.onresize();
            });
        })(this);
    };
    jSlider.prototype.setSkin = function(skin) {
        if (this.skin_)
            this.domNode.removeDependClass(this.skin_, "_");
        this.domNode.addDependClass(this.skin_ = skin, "_");
    };
    jSlider.prototype.setPointersIndex = function(i) {
        $.each(this.getPointers(), function(i) {
            this.index(i);
        });
    };
    jSlider.prototype.getPointers = function() {
        return this.o.pointers;
    };
    jSlider.prototype.generateScale = function() {
        if (this.settings.scale && this.settings.scale.length > 0) {
            var str = "";
            var s = this.settings.scale;
            var prc = Math.round((100 / (s.length - 1)) * 10) / 10;
            for (var i = 0; i < s.length; i++) {
                str += '<span style="left: ' + i * prc + '%">' + (s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '') + '</span>';
            };
            return str;
        } else return "";
        return "";
    };
    jSlider.prototype.drawScale = function() {
        this.domNode.find(OPTIONS.selector + "scale span ins").each(function() {
            $(this).css({
                marginLeft: -$(this).outerWidth() / 2
            });
        });
    };
    jSlider.prototype.onresize = function() {
        var self = this;
        this.sizes = {
            domWidth: this.domNode.width(),
            domOffset: this.domNode.offset()
        };
        $.each(this.o.pointers, function(i) {
            self.redraw(this);
        });
    };
    jSlider.prototype.update = function() {
        this.onresize();
        this.drawScale();
    };
    jSlider.prototype.limits = function(x, pointer) {
        if (!this.settings.smooth) {
            var step = this.settings.step * 100 / (this.settings.interval);
            x = Math.round(x / step) * step;
        }
        var another = this.o.pointers[1 - pointer.uid];
        if (another && pointer.uid && x < another.value.prc) x = another.value.prc;
        if (another && !pointer.uid && x > another.value.prc) x = another.value.prc;
        if (x < 0) x = 0;
        if (x > 100) x = 100;
        return Math.round(x * 10) / 10;
    };
    jSlider.prototype.redraw = function(pointer) {
        if (!this.is.init) return false;
        this.setValue();
        if (this.o.pointers[0] && this.o.pointers[1])
            this.o.value.css({
                left: this.o.pointers[0].value.prc + "%",
                width: (this.o.pointers[1].value.prc - this.o.pointers[0].value.prc) + "%"
            });
        this.o.labels[pointer.uid].value.html(this.nice(pointer.value.origin));
        this.redrawLabels(pointer);
    };
    jSlider.prototype.redrawLabels = function(pointer) {
        function setPosition(label, sizes, prc) {
            sizes.margin = -sizes.label / 2;
            label_left = sizes.border + sizes.margin;
            if (label_left < 0)
                sizes.margin -= label_left;
            if (sizes.border + sizes.label / 2 > self.sizes.domWidth) {
                sizes.margin = 0;
                sizes.right = true;
            } else
                sizes.right = false;
            label.o.css({
                left: prc + "%",
                marginLeft: sizes.margin,
                right: "auto"
            });
            if (sizes.right) label.o.css({
                left: "auto",
                right: 0
            });
            return sizes;
        }
        var self = this;
        var label = this.o.labels[pointer.uid];
        var prc = pointer.value.prc;
        var sizes = {
            label: label.o.outerWidth(),
            right: false,
            border: (prc * this.sizes.domWidth) / 100
        };
        if (!this.settings.single) {
            var another = this.o.pointers[1 - pointer.uid];
            var another_label = this.o.labels[another.uid];
            switch (pointer.uid) {
                case 0:
                    if (sizes.border + sizes.label / 2 > another_label.o.offset().left - this.sizes.domOffset.left) {
                        another_label.o.css({
                            visibility: "hidden"
                        });
                        another_label.value.html(this.nice(another.value.origin));
                        label.o.css({
                            visibility: "visible"
                        });
                        prc = (another.value.prc - prc) / 2 + prc;
                        if (another.value.prc != pointer.value.prc) {
                            label.value.html(this.nice(pointer.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(another.value.origin));
                            sizes.label = label.o.outerWidth();
                            sizes.border = (prc * this.sizes.domWidth) / 100;
                        }
                    } else {
                        another_label.o.css({
                            visibility: "visible"
                        });
                    }
                    break;
                case 1:
                    if (sizes.border - sizes.label / 2 < another_label.o.offset().left - this.sizes.domOffset.left + another_label.o.outerWidth()) {
                        another_label.o.css({
                            visibility: "hidden"
                        });
                        another_label.value.html(this.nice(another.value.origin));
                        label.o.css({
                            visibility: "visible"
                        });
                        prc = (prc - another.value.prc) / 2 + another.value.prc;
                        if (another.value.prc != pointer.value.prc) {
                            label.value.html(this.nice(another.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(pointer.value.origin));
                            sizes.label = label.o.outerWidth();
                            sizes.border = (prc * this.sizes.domWidth) / 100;
                        }
                    } else {
                        another_label.o.css({
                            visibility: "visible"
                        });
                    }
                    break;
            }
        }
        sizes = setPosition(label, sizes, prc);
        if (another_label) {
            var sizes = {
                label: another_label.o.outerWidth(),
                right: false,
                border: (another.value.prc * this.sizes.domWidth) / 100
            };
            sizes = setPosition(another_label, sizes, another.value.prc);
        }
        this.redrawLimits();
    };
    jSlider.prototype.redrawLimits = function() {
        if (this.settings.limits) {
            var limits = [true, true];
            for (key in this.o.pointers) {
                if (!this.settings.single || key == 0) {
                    var pointer = this.o.pointers[key];
                    var label = this.o.labels[pointer.uid];
                    var label_left = label.o.offset().left - this.sizes.domOffset.left;
                    var limit = this.o.limits[0];
                    if (label_left < limit.outerWidth())
                        limits[0] = false;
                    var limit = this.o.limits[1];
                    if (label_left + label.o.outerWidth() > this.sizes.domWidth - limit.outerWidth())
                        limits[1] = false;
                }
            };
            for (var i = 0; i < limits.length; i++) {
                if (limits[i])
                    this.o.limits[i].fadeIn("fast");
                else
                    this.o.limits[i].fadeOut("fast");
            };
        }
    };
    jSlider.prototype.setValue = function() {
        var value = this.getValue();
        this.inputNode.attr("value", value);
        this.onstatechange.call(this, value);
    };
    jSlider.prototype.getValue = function() {
        if (!this.is.init) return false;
        var $this = this;
        var value = "";
        $.each(this.o.pointers, function(i) {
            if (this.value.prc != undefined && !isNaN(this.value.prc)) value += (i > 0 ? ";" : "") + $this.prcToValue(this.value.prc);
        });
        return value;
    };
    jSlider.prototype.getPrcValue = function() {
        if (!this.is.init) return false;
        var $this = this;
        var value = "";
        $.each(this.o.pointers, function(i) {
            if (this.value.prc != undefined && !isNaN(this.value.prc)) value += (i > 0 ? ";" : "") + this.value.prc;
        });
        return value;
    };
    jSlider.prototype.prcToValue = function(prc) {
        if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
            var h = this.settings.heterogeneity;
            var _start = 0;
            var _from = this.settings.from;
            for (var i = 0; i <= h.length; i++) {
                if (h[i]) var v = h[i].split("/");
                else var v = [100, this.settings.to];
                v[0] = new Number(v[0]);
                v[1] = new Number(v[1]);
                if (prc >= _start && prc <= v[0]) {
                    var value = _from + ((prc - _start) * (v[1] - _from)) / (v[0] - _start);
                }
                _start = v[0];
                _from = v[1];
            };
        } else {
            var value = this.settings.from + (prc * this.settings.interval) / 100;
        }
        return this.round(value);
    };
    jSlider.prototype.valueToPrc = function(value, pointer) {
        if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
            var h = this.settings.heterogeneity;
            var _start = 0;
            var _from = this.settings.from;
            for (var i = 0; i <= h.length; i++) {
                if (h[i]) var v = h[i].split("/");
                else var v = [100, this.settings.to];
                v[0] = new Number(v[0]);
                v[1] = new Number(v[1]);
                if (value >= _from && value <= v[1]) {
                    var prc = pointer.limits(_start + (value - _from) * (v[0] - _start) / (v[1] - _from));
                }
                _start = v[0];
                _from = v[1];
            };
        } else {
            var prc = pointer.limits((value - this.settings.from) * 100 / this.settings.interval);
        }
        return prc;
    };
    jSlider.prototype.round = function(value) {
        value = Math.round(value / this.settings.step) * this.settings.step;
        if (this.settings.round) value = Math.round(value * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round);
        else value = Math.round(value);
        return value;
    };
    jSlider.prototype.nice = function(value) {
        value = value.toString().replace(/,/gi, ".").replace(/ /gi, "");;
        if ($.formatNumber) {
            return $.formatNumber(new Number(value), this.settings.format || {}).replace(/-/gi, "&minus;");
        } else {
            return new Number(value);
        }
    };

    function jSliderPointer() {
        Draggable.apply(this, arguments);
    }
    jSliderPointer.prototype = new Draggable();
    jSliderPointer.prototype.oninit = function(ptr, id, _constructor) {
        this.uid = id;
        this.parent = _constructor;
        this.value = {};
        this.settings = this.parent.settings;
    };
    jSliderPointer.prototype.onmousedown = function(evt) {
        this._parent = {
            offset: this.parent.domNode.offset(),
            width: this.parent.domNode.width()
        };
        this.ptr.addDependClass("hover");
        this.setIndexOver();
    };
    jSliderPointer.prototype.onmousemove = function(evt, x) {
        var coords = this._getPageCoords(evt);
        this._set(this.calc(coords.x));
    };
    jSliderPointer.prototype.onmouseup = function(evt) {
        if (this.parent.settings.callback && $.isFunction(this.parent.settings.callback))
            this.parent.settings.callback.call(this.parent, this.parent.getValue());
        this.ptr.removeDependClass("hover");
    };
    jSliderPointer.prototype.setIndexOver = function() {
        this.parent.setPointersIndex(1);
        this.index(2);
    };
    jSliderPointer.prototype.index = function(i) {
        this.ptr.css({
            zIndex: i
        });
    };
    jSliderPointer.prototype.limits = function(x) {
        return this.parent.limits(x, this);
    };
    jSliderPointer.prototype.calc = function(coords) {
        var x = this.limits(((coords - this._parent.offset.left) * 100) / this._parent.width);
        return x;
    };
    jSliderPointer.prototype.set = function(value, opt_origin) {
        this.value.origin = this.parent.round(value);
        this._set(this.parent.valueToPrc(value, this), opt_origin);
    };
    jSliderPointer.prototype._set = function(prc, opt_origin) {
        if (!opt_origin)
            this.value.origin = this.parent.prcToValue(prc);
        this.value.prc = prc;
        this.ptr.css({
            left: prc + "%"
        });
        this.parent.redraw(this);
    };
})(jQuery);;
window.Modernizr = (function(window, document, undefined) {
    var version = '2.6.2',
        Modernizr = {},
        enableClasses = true,
        docElement = document.documentElement,
        mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,
        inputElem = document.createElement('input'),
        smile = ':)',
        toString = {}.toString,
        omPrefixes = 'Webkit Moz O ms',
        cssomPrefixes = omPrefixes.split(' '),
        domPrefixes = omPrefixes.toLowerCase().split(' '),
        ns = {
            'svg': 'http://www.w3.org/2000/svg'
        },
        tests = {},
        inputs = {},
        attrs = {},
        classes = [],
        slice = classes.slice,
        featureName, injectElementWithStyles = function(rule, callback, nodes, testnames) {
            var style, ret, node, docOverflow, div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');
            if (parseInt(nodes, 10)) {
                while (nodes--) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }
            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }
            ret = callback(div, rule);
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }
            return !!ret;
        },
        testMediaQuery = function(mq) {
            var matchMedia = window.matchMedia || window.msMatchMedia;
            if (matchMedia) {
                return matchMedia(mq).matches;
            }
            var bool;
            injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function(node) {
                bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)['position'] == 'absolute';
            });
            return bool;
        },
        isEventSupported = (function() {
            var TAGNAMES = {
                'select': 'input',
                'change': 'input',
                'submit': 'form',
                'reset': 'form',
                'error': 'img',
                'load': 'img',
                'abort': 'img'
            };

            function isEventSupported(eventName, element) {
                element = element || document.createElement(TAGNAMES[eventName] || 'div');
                eventName = 'on' + eventName;
                var isSupported = eventName in element;
                if (!isSupported) {
                    if (!element.setAttribute) {
                        element = document.createElement('div');
                    }
                    if (element.setAttribute && element.removeAttribute) {
                        element.setAttribute(eventName, '');
                        isSupported = is(element[eventName], 'function');
                        if (!is(element[eventName], 'undefined')) {
                            element[eventName] = undefined;
                        }
                        element.removeAttribute(eventName);
                    }
                }
                element = null;
                return isSupported;
            }
            return isEventSupported;
        })(),
        _hasOwnProperty = ({}).hasOwnProperty,
        hasOwnProp;
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function(object, property) {
            return _hasOwnProperty.call(object, property);
        };
    } else {
        hasOwnProp = function(object, property) {
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {
            var target = this;
            if (typeof target != "function") {
                throw new TypeError();
            }
            var args = slice.call(arguments, 1),
                bound = function() {
                    if (this instanceof bound) {
                        var F = function() {};
                        F.prototype = target.prototype;
                        var self = new F();
                        var result = target.apply(self, args.concat(slice.call(arguments)));
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;
                    } else {
                        return target.apply(that, args.concat(slice.call(arguments)));
                    }
                };
            return bound;
        };
    }

    function setCss(str) {
        mStyle.cssText = str;
    }

    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
    }

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {
                if (elem === false) return props[i];
                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }
                return item;
            }
        }
        return false;
    }
    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };
    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };
    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };
    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };
    tests['postmessage'] = function() {
        return !!window.postMessage;
    };
    tests['websqldatabase'] = function() {
        return !!window.openDatabase;
    };
    tests['hashchange'] = function() {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };
    tests['history'] = function() {
        return !!(window.history && history.pushState);
    };
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };
    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');
        return contains(mStyle.backgroundColor, 'rgba');
    };
    tests['hsla'] = function() {
        setCss('background-color:hsla(120,40%,100%,.5)');
        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };
    tests['multiplebgs'] = function() {
        setCss('background:url(https://),url(https://),red url(https://)');
        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
            }
        } catch (e) {}
        return bool;
    };
    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
                bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) {}
        return bool;
    };
    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };
    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };
    tests['webworkers'] = function() {
        return !!window.Worker;
    };
    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };
    tests['inlinesvg'] = function() {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
        Modernizr['input'] = (function(props) {
            for (var i = 0, len = props.length; i < len; i++) {
                attrs[props[i]] = !!(props[i] in inputElem);
            }
            if (attrs.list) {
                attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        Modernizr['inputtypes'] = (function(props) {
            for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';
                if (bool) {
                    inputElem.value = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';
                    if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;
                        bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && (inputElem.offsetHeight !== 0);
                        docElement.removeChild(inputElem);
                    } else if (/^(search|tel)$/.test(inputElemType)) {} else if (/^(url|email)$/.test(inputElemType)) {
                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;
                    } else {
                        bool = inputElem.value != smile;
                    }
                }
                inputs[props[i]] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
    }
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            featureName = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();
            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }
    Modernizr.input || webforms();
    Modernizr.addTest = function(feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    Modernizr.addTest(key, feature[key]);
                }
            }
        } else {
            feature = feature.toLowerCase();
            if (Modernizr[feature] !== undefined) {
                return Modernizr;
            }
            test = typeof test == 'function' ? test() : test;
            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;
        }
        return Modernizr;
    };
    setCss('');
    modElem = inputElem = null;;
    (function(window, document) {
        var options = window.html5 || {};
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var supportsHtml5Styles;
        var expando = '_html5shiv';
        var expanID = 0;
        var expandoData = {};
        var supportsUnknownElements;
        (function() {
            try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                supportsHtml5Styles = ('hidden' in a);
                supportsUnknownElements = a.childNodes.length == 1 || (function() {
                    (document.createElement)('a');
                    var frag = document.createDocumentFragment();
                    return (typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined');
                }());
            } catch (e) {
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
            }
        }());

        function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement('p'),
                parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
            p.innerHTML = 'x<style>' + cssText + '</style>';
            return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        function getElements() {
            var elements = html5.elements;
            return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
            }
            return data;
        }

        function createElement(nodeName, ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createElement(nodeName);
            }
            if (!data) {
                data = getExpandoData(ownerDocument);
            }
            var node;
            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
            } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
            } else {
                node = data.createElem(nodeName);
            }
            return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
        }

        function createDocumentFragment(ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createDocumentFragment();
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
                i = 0,
                elems = getElements(),
                l = elems.length;
            for (; i < l; i++) {
                clone.createElement(elems[i]);
            }
            return clone;
        }

        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
            }
            ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
                    return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
            };
            ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' +
                getElements().join().replace(/\w+/g, function(nodeName) {
                    data.createElem(nodeName);
                    data.frag.createElement(nodeName);
                    return 'c("' + nodeName + '")';
                }) + ');return n}')(html5, data.frag);
        }

        function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            var data = getExpandoData(ownerDocument);
            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' + 'mark{background:#FF0;color:#000}');
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
            }
            return ownerDocument;
        }
        var html5 = {
            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
            'shivCSS': (options.shivCSS !== false),
            'supportsUnknownElements': supportsUnknownElements,
            'shivMethods': (options.shivMethods !== false),
            'type': 'default',
            'shivDocument': shivDocument,
            createElement: createElement,
            createDocumentFragment: createDocumentFragment
        };
        window.html5 = html5;
        shivDocument(document);
    }(this, document));
    Modernizr._version = version;
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;
    Modernizr.mq = testMediaQuery;
    Modernizr.hasEvent = isEventSupported;
    Modernizr.testStyles = injectElementWithStyles;
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
        (enableClasses ? ' js ' + classes.join(' ') : '');
    return Modernizr;
})(this, this.document);
(function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function(a) {
            return "[object Array]" == o.call(a)
        },
        x = [],
        y = {},
        z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                },
                e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b
                            }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        } : j[n] = function(a) {
                            return function() {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l()
                            }
                        }(k[n])), g(a[n], j, b, n, h))
                } else !c && l()
            }
            var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
            l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
            j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
};;
(function(root, name, factory) {
    var dep = root['jQuery'] || root['Zepto'] || root['ender'] || root['elo'];
    if (typeof module != 'undefined' && module['exports']) {
        module['exports'] = factory(dep);
    } else {
        root[name] = factory(dep);
    }
}(this, 'Response', function($) {
    if (typeof $ != 'function') {
        try {
            console.log('Response was unable to run due to missing dependency.');
        } catch (e) {}
    }
    var Response, root = this,
        name = 'Response',
        old = root[name],
        initContentKey = 'init' + name,
        win = window,
        doc = document,
        docElem = doc.documentElement,
        ready = $.domReady || $,
        $win = $(win),
        screen = win.screen,
        AP = Array.prototype,
        OP = Object.prototype,
        slice = AP.slice,
        concat = AP.concat,
        toString = OP.toString,
        owns = OP.hasOwnProperty,
        isArray = Array.isArray || function(item) {
            return '[object Array]' === toString.call(item);
        },
        defaultBreakpoints = {
            width: [0, 320, 481, 641, 961, 1025, 1281],
            height: [0, 481],
            ratio: [1, 1.5, 2]
        },
        Elemset, band, wave, device = {},
        propTests = {},
        isCustom = {},
        sets = {
            all: []
        },
        suid = 1,
        screenW = screen.width,
        screenH = screen.height,
        screenMax = screenW > screenH ? screenW : screenH,
        screenMin = screenW + screenH - screenMax,
        deviceW = function() {
            return screenW;
        },
        deviceH = function() {
            return screenH;
        },
        regexFunkyPunc = /[^a-z0-9_\-\.]/gi,
        regexTrimPunc = /^[\W\s]+|[\W\s]+$|/g,
        regexCamels = /([a-z])([A-Z])/g,
        regexDashB4 = /-(.)/g,
        regexDataPrefix = /^data-(.+)$/,
        objectCreate = Object.create || function(proto) {
            function Type() {}
            Type.prototype = proto;
            return new Type;
        },
        namespaceIt = function(eventName, customNamespace) {
            customNamespace = customNamespace || name;
            return eventName.replace(regexTrimPunc, '') + '.' + customNamespace.replace(regexTrimPunc, '');
        },
        event = {
            allLoaded: namespaceIt('allLoaded'),
            crossover: namespaceIt('crossover')
        },
        matchMedia = win.matchMedia || win.msMatchMedia,
        media = matchMedia || function() {
            return {};
        },
        viewportW = (function(win, docElem, mM) {
            var client = docElem['clientWidth'],
                inner = win['innerWidth'];
            return (mM && client < inner && true === mM('(min-width:' + inner + 'px)')['matches'] ? function() {
                return win['innerWidth'];
            } : function() {
                return docElem['clientWidth'];
            });
        }(win, docElem, matchMedia)),
        viewportH = (function(win, docElem, mM) {
            var client = docElem['clientHeight'],
                inner = win['innerHeight'];
            return (mM && client < inner && true === mM('(min-height:' + inner + 'px)')['matches'] ? function() {
                return win['innerHeight'];
            } : function() {
                return docElem['clientHeight'];
            });
        }(win, docElem, matchMedia));

    function doError(msg) {
        throw new TypeError(msg ? name + '.' + msg : name);
    }

    function isNumber(item) {
        return typeof item == 'number' && item === item;
    }

    function map(ob, fn, scope) {
        var i, l = ob.length,
            ret = [];
        for (i = 0; i < l; i++) {
            ret[i] = fn.call(scope, ob[i], i, ob);
        }
        return ret;
    }

    function ssvToArr(ukn) {
        return typeof ukn == 'string' ? sift(ukn.split(' ')) : isArray(ukn) ? sift(ukn) : [];
    }

    function each(ob, callback, scope) {
        if (null == ob) {
            return ob;
        }
        var i = 0,
            len = ob.length;
        while (i < len) {
            callback.call(scope || ob[i], ob[i], i++, ob);
        }
        return ob;
    }

    function affix(arr, prefix, suffix) {
        var r = [],
            l = arr.length,
            i = 0,
            v;
        prefix = prefix || '';
        suffix = suffix || '';
        while (i < l) {
            v = arr[i++];
            null == v || r.push(prefix + v + suffix);
        }
        return r;
    }

    function sift(ob, fn, scope) {
        var l, u = 0,
            i = 0,
            v, ret = [],
            invert, isF = typeof fn == 'function';
        if (!ob) {
            return ret;
        }
        scope = (invert = true === scope) ? null : scope;
        for (l = ob.length; i < l; i++) {
            v = ob[i];
            invert === !(isF ? fn.call(scope, v, i, ob) : fn ? typeof v === fn : v) && (ret[u++] = v);
        }
        return ret;
    }

    function merge(base, adds) {
        var k, l;
        if (!base || !adds) {
            return base;
        }
        if (typeof adds != 'function' && isNumber(l = adds.length)) {
            for (k = 0; k < l; k++) {
                void 0 === adds[k] || (base[k] = adds[k]);
            }
            base.length > k || (base.length = k);
        } else {
            for (k in adds) {
                owns.call(adds, k) && void 0 !== adds[k] && (base[k] = adds[k]);
            }
        }
        return base;
    }

    function route(item, fn, scope) {
        if (null == item) {
            return item;
        }
        if (typeof item == 'object' && !item.nodeType && isNumber(item.length)) {
            each(item, fn, scope);
        } else {
            fn.call(scope || item, item);
        }
        return item;
    }

    function ranger(fn) {
        return function(min, max) {
            var n = fn();
            min = n >= (min || 0);
            return max ? min && n <= max : min;
        };
    }
    band = ranger(viewportW);
    wave = ranger(viewportH);
    device.band = ranger(deviceW);
    device.wave = ranger(deviceH);

    function dpr(decimal) {
        var dPR = win.devicePixelRatio;
        if (null == decimal) {
            return dPR || (dpr(2) ? 2 : dpr(1.5) ? 1.5 : dpr(1) ? 1 : 0);
        }
        if (!isFinite(decimal)) {
            return false;
        }
        if (dPR && dPR > 0) {
            return dPR >= decimal;
        }
        decimal = 'only all and (min--moz-device-pixel-ratio:' + decimal + ')';
        if (media(decimal).matches) {
            return true;
        }
        return !!media(decimal.replace('-moz-', '')).matches;
    }

    function camelize(s) {
        return s.replace(regexDataPrefix, '$1').replace(regexDashB4, function(m, m1) {
            return m1.toUpperCase();
        });
    }

    function datatize(s) {
        return 'data-' + (s ? s.replace(regexDataPrefix, '$1').replace(regexCamels, '$1-$2').toLowerCase() : s);
    }

    function render(s) {
        var n;
        return (!s || typeof s != 'string' ? s : 'true' === s ? true : 'false' === s ? false : 'undefined' === s ? n : 'null' === s ? null : (n = parseFloat(s)) === +n ? n : s);
    }

    function getNative(e) {
        return !e ? false : e.nodeType === 1 ? e : e[0] && e[0].nodeType === 1 ? e[0] : false;
    }

    function datasetChainable(key, value) {
        var numOfArgs = arguments.length,
            elem = getNative(this),
            ret = {},
            renderData = false,
            n;
        if (numOfArgs) {
            if (isArray(key)) {
                renderData = true;
                key = key[0];
            }
            if (typeof key === 'string') {
                key = datatize(key);
                if (1 === numOfArgs) {
                    ret = elem.getAttribute(key);
                    return renderData ? render(ret) : ret;
                }
                if (this === elem || 2 > (n = this.length || 1)) {
                    elem.setAttribute(key, value);
                } else {
                    while (n--) {
                        if (n in this) {
                            datasetChainable.apply(this[n], arguments);
                        }
                    }
                }
            } else if (key instanceof Object) {
                for (n in key) {
                    key.hasOwnProperty(n) && datasetChainable.call(this, n, key[n]);
                }
            }
            return this;
        }
        if (elem.dataset && DOMStringMap) {
            return elem.dataset;
        }
        each(elem.attributes, function(a) {
            if (a && (n = String(a.name).match(regexDataPrefix))) {
                ret[camelize(n[1])] = a.value;
            }
        });
        return ret;
    }

    function deletesChainable(keys) {
        if (this && typeof keys === 'string') {
            keys = ssvToArr(keys);
            route(this, function(el) {
                each(keys, function(key) {
                    if (key) {
                        el.removeAttribute(datatize(key));
                    }
                });
            });
        }
        return this;
    }

    function dataset(elem, key, value) {
        return datasetChainable.apply(elem, slice.call(arguments, 1));
    }

    function deletes(elem, keys) {
        return deletesChainable.call(elem, keys);
    }

    function selectify(keys) {
        var k, r = [],
            i = 0,
            l = keys.length;
        while (i < l) {
            (k = keys[i++]) && r.push('[' + datatize(k.replace(regexTrimPunc, '').replace('.', '\\.')) + ']');
        }
        return r.join();
    }

    function target(keys) {
        return $(selectify(ssvToArr(keys)));
    }

    function scrollX() {
        return window.pageXOffset || docElem.scrollLeft;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    function rectangle(el, verge) {
        var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {};
        verge = typeof verge == 'number' ? verge || 0 : 0;
        return {
            top: (r.top || 0) - verge,
            left: (r.left || 0) - verge,
            bottom: (r.bottom || 0) + verge,
            right: (r.right || 0) + verge
        };
    }

    function inX(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.right >= 0 && r.left <= viewportW();
    }

    function inY(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.bottom >= 0 && r.top <= viewportH();
    }

    function inViewport(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.bottom >= 0 && r.top <= viewportH() && r.right >= 0 && r.left <= viewportW();
    }

    function detectMode(elem) {
        var srcElems = {
                img: 1,
                input: 1,
                source: 3,
                embed: 3,
                track: 3,
                iframe: 5,
                audio: 5,
                video: 5,
                script: 5
            },
            modeID = srcElems[elem.nodeName.toLowerCase()] || -1;
        return 4 > modeID ? modeID : null != elem.getAttribute('src') ? 5 : -5;
    }

    function store($elems, key, source) {
        var valToStore;
        if (!$elems || null == key) {
            doError('store');
        }
        source = typeof source == 'string' && source;
        route($elems, function(el) {
            if (source) {
                valToStore = el.getAttribute(source);
            } else if (0 < detectMode(el)) {
                valToStore = el.getAttribute('src');
            } else {
                valToStore = el.innerHTML;
            }
            null == valToStore ? deletes(el, key) : dataset(el, key, valToStore);
        });
        return Response;
    }

    function access(elem, keys) {
        var ret = [];
        elem && keys && each(ssvToArr(keys), function(k, i) {
            ret.push(dataset(elem, k));
        }, elem);
        return ret;
    }

    function addTest(prop, fn) {
        if (typeof prop == 'string' && typeof fn == 'function') {
            propTests[prop] = fn;
            isCustom[prop] = 1;
        }
        return Response;
    }
    Elemset = (function() {
        var crossover = event.crossover,
            min = Math.min;

        function sanitize(key) {
            return typeof key == 'string' ? key.toLowerCase().replace(regexFunkyPunc, '') : '';
        }
        return {
            $e: 0,
            mode: 0,
            breakpoints: null,
            prefix: null,
            prop: 'width',
            keys: [],
            dynamic: null,
            custom: 0,
            values: [],
            fn: 0,
            verge: null,
            newValue: 0,
            currValue: 1,
            aka: null,
            lazy: null,
            i: 0,
            uid: null,
            reset: function() {
                var subjects = this.breakpoints,
                    i = subjects.length,
                    tempIndex = 0;
                while (!tempIndex && i--) {
                    this.fn(subjects[i]) && (tempIndex = i);
                }
                if (tempIndex !== this.i) {
                    $win.trigger(crossover).trigger(this.prop + crossover);
                    this.i = tempIndex || 0;
                }
                return this;
            },
            configure: function(options) {
                merge(this, options);
                var i, prefix, aliases, aliasKeys, isNumeric = true,
                    arr, prop = this.prop;
                this.uid = suid++;
                this.verge = isFinite(this.verge) ? this.verge : min(screenMax, 500);
                this.fn = propTests[prop] || doError('create @fn');
                if (typeof this.dynamic != 'boolean') {
                    this.dynamic = !!('device' !== prop.substring(0, 6));
                }
                this.custom = isCustom[prop];
                prefix = this.prefix ? sift(map(ssvToArr(this.prefix), sanitize)) : ['min-' + prop + '-'];
                aliases = 1 < prefix.length ? prefix.slice(1) : 0;
                this.prefix = prefix[0];
                arr = this.breakpoints;
                if (isArray(arr)) {
                    each(arr, function(v) {
                        if (!v && v !== 0) {
                            throw 'invalid breakpoint';
                        }
                        isNumeric = isNumeric && isFinite(v);
                    });
                    arr = isNumeric ? arr.sort(function(a, b) {
                        return (a - b);
                    }) : arr;
                    arr.length || doError('create @breakpoints');
                } else {
                    arr = defaultBreakpoints[prop] || defaultBreakpoints[prop.split('-').pop()] || doError('create @prop');
                }
                this.breakpoints = isNumeric ? sift(arr, function(n) {
                    return n <= screenMax;
                }) : arr;
                this.keys = affix(this.breakpoints, this.prefix);
                this.aka = null;
                if (aliases) {
                    aliasKeys = [];
                    i = aliases.length;
                    while (i--) {
                        aliasKeys.push(affix(this.breakpoints, aliases[i]));
                    }
                    this.aka = aliasKeys;
                    this.keys = concat.apply(this.keys, aliasKeys);
                }
                sets.all = sets.all.concat(sets[this.uid] = this.keys);
                return this;
            },
            target: function() {
                this.$e = $(selectify(sets[this.uid]));
                store(this.$e, initContentKey);
                this.keys.push(initContentKey);
                return this;
            },
            decideValue: function() {
                var val = null,
                    subjects = this.breakpoints,
                    sL = subjects.length,
                    i = sL;
                while (val == null && i--) {
                    this.fn(subjects[i]) && (val = this.values[i]);
                }
                this.newValue = typeof val === 'string' ? val : this.values[sL];
                return this;
            },
            prepareData: function(elem) {
                this.$e = $(elem);
                this.mode = detectMode(elem);
                this.values = access(this.$e, this.keys);
                if (this.aka) {
                    var i = this.aka.length;
                    while (i--) {
                        this.values = merge(this.values, access(this.$e, this.aka[i]));
                    }
                }
                return this.decideValue();
            },
            updateDOM: function() {
                if (this.currValue === this.newValue) {
                    return this;
                }
                this.currValue = this.newValue;
                if (0 < this.mode) {
                    this.$e[0].setAttribute('src', this.newValue);
                } else if (null == this.newValue) {
                    this.$e.empty && this.$e.empty();
                } else {
                    if (this.$e.html) {
                        this.$e.html(this.newValue);
                    } else {
                        this.$e.empty && this.$e.empty();
                        this.$e[0].innerHTML = this.newValue;
                    }
                }
                return this;
            }
        };
    }());
    propTests['width'] = band;
    propTests['height'] = wave;
    propTests['device-width'] = device.band;
    propTests['device-height'] = device.wave;
    propTests['device-pixel-ratio'] = dpr;

    function resize(fn) {
        $win.on('resize', fn);
        return Response;
    }

    function crossover(prop, fn) {
        var temp, eventToFire, eventCrossover = event.crossover;
        if (typeof prop == 'function') {
            temp = fn;
            fn = prop;
            prop = temp;
        }
        eventToFire = prop ? ('' + prop + eventCrossover) : eventCrossover;
        $win.on(eventToFire, fn);
        return Response;
    }

    function action(fnOrArr) {
        route(fnOrArr, function(fn) {
            ready(fn);
            resize(fn);
        });
        return Response;
    }

    function create(args) {
        route(args, function(options) {
            typeof options == 'object' || doError('create @args');
            var elemset = objectCreate(Elemset).configure(options),
                lowestNonZeroBP, verge = elemset.verge,
                breakpoints = elemset.breakpoints,
                scrollName = namespaceIt('scroll'),
                resizeName = namespaceIt('resize');
            if (!breakpoints.length) {
                return;
            }
            lowestNonZeroBP = breakpoints[0] || breakpoints[1] || false;
            ready(function() {
                var allLoaded = event.allLoaded,
                    lazy = !!elemset.lazy;
                each(elemset.target().$e, function(el, i) {
                    elemset[i] = objectCreate(elemset).prepareData(el);
                    if (!lazy || inViewport(elemset[i].$e, verge)) {
                        elemset[i].updateDOM();
                    }
                });

                function resizeHandler() {
                    elemset.reset();
                    each(elemset.$e, function(el, i) {
                        elemset[i].decideValue().updateDOM();
                    }).trigger(allLoaded);
                }
                if (elemset.dynamic && (elemset.custom || lowestNonZeroBP < screenMax)) {
                    resize(resizeHandler, resizeName);
                }
                if (!lazy) {
                    return;
                }

                function scrollHandler() {
                    each(elemset.$e, function(el, i) {
                        if (inViewport(elemset[i].$e, verge)) {
                            elemset[i].updateDOM();
                        }
                    });
                }
                $win.on(scrollName, scrollHandler);
                elemset.$e.one(allLoaded, function() {
                    $win.off(scrollName, scrollHandler);
                });
            });
        });
        return Response;
    }

    function noConflict(callback) {
        if (root[name] === Response) {
            root[name] = old;
        }
        if (typeof callback == 'function') {
            callback.call(root, Response);
        }
        return Response;
    }

    function exposeAreaFilters(engine, proto, force) {
        each(['inX', 'inY', 'inViewport'], function(methodName) {
            (force || !proto[methodName]) && (proto[methodName] = function(verge, invert) {
                return engine(sift(this, function(el) {
                    return !!el && !invert === Response[methodName](el, verge);
                }));
            });
        });
    }

    function bridge(host, force) {
        if (typeof host == 'function' && host.fn) {
            if (force || void 0 === host.fn.dataset) {
                host.fn.dataset = datasetChainable;
            }
            if (force || void 0 === host.fn.deletes) {
                host.fn.deletes = deletesChainable;
            }
            exposeAreaFilters(host, host.fn, force);
        }
        return Response;
    }

    function chain(host, force) {
        host = arguments.length ? host : $;
        return bridge(host, force);
    }
    Response = {
        deviceMin: function() {
            return screenMin;
        },
        deviceMax: function() {
            return screenMax;
        },
        noConflict: noConflict,
        chain: chain,
        bridge: bridge,
        create: create,
        addTest: addTest,
        datatize: datatize,
        camelize: camelize,
        render: render,
        store: store,
        access: access,
        target: target,
        object: objectCreate,
        crossover: crossover,
        action: action,
        resize: resize,
        ready: ready,
        affix: affix,
        sift: sift,
        dpr: dpr,
        deletes: deletes,
        scrollX: scrollX,
        scrollY: scrollY,
        deviceW: deviceW,
        deviceH: deviceH,
        device: device,
        inX: inX,
        inY: inY,
        route: route,
        merge: merge,
        media: media,
        wave: wave,
        band: band,
        map: map,
        each: each,
        inViewport: inViewport,
        dataset: dataset,
        viewportH: viewportH,
        viewportW: viewportW
    };
    ready(function() {
        var nativeJSONParse, customData = dataset(doc.body, 'responsejs');
        if (customData) {
            nativeJSONParse = !!win.JSON && JSON.parse;
            if (nativeJSONParse) {
                customData = nativeJSONParse(customData);
            } else if ($.parseJSON) {
                customData = $.parseJSON(customData);
            }
            customData && customData.create && create(customData.create);
        }
        docElem.className = docElem.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, '$1$3') + ' responsejs ';
    });
    return Response;
}));
window.matchMedia = window.matchMedia || (function(doc, undefined) {
    "use strict";
    var bool, docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        fakeBody = doc.createElement("body"),
        div = doc.createElement("div");
    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);
    return function(q) {
        div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";
        docElem.insertBefore(fakeBody, refNode);
        bool = div.offsetWidth === 42;
        docElem.removeChild(fakeBody);
        return {
            matches: bool,
            media: q
        };
    };
}(document));
(function(win) {
    "use strict";
    var respond = {};
    win.respond = respond;
    respond.update = function() {};
    respond.mediaQueriesSupported = win.matchMedia && win.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) {
        return;
    }
    var doc = win.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName("head")[0] || docElem,
        base = doc.getElementsByTagName("base")[0],
        links = head.getElementsByTagName("link"),
        requestQueue = [],
        ripCSS = function() {
            for (var i = 0; i < links.length; i++) {
                var sheet = links[i],
                    href = sheet.href,
                    media = sheet.media,
                    isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
                if (!!href && isCSS && !parsedSheets[href]) {
                    if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                        translate(sheet.styleSheet.rawCssText, href, media);
                        parsedSheets[href] = true;
                    } else {
                        if ((!/^([a-zA-Z:]*\/\/)/.test(href) && !base) || href.replace(RegExp.$1, "").split("/")[0] === win.location.host) {
                            requestQueue.push({
                                href: href,
                                media: media
                            });
                        }
                    }
                }
            }
            makeRequests();
        },
        makeRequests = function() {
            if (requestQueue.length) {
                var thisRequest = requestQueue.shift();
                ajax(thisRequest.href, function(styles) {
                    translate(styles, thisRequest.href, thisRequest.media);
                    parsedSheets[thisRequest.href] = true;
                    win.setTimeout(function() {
                        makeRequests();
                    }, 0);
                });
            }
        },
        translate = function(styles, href, media) {
            var qs = styles.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
                ql = qs && qs.length || 0;
            href = href.substring(0, href.lastIndexOf("/"));
            var repUrls = function(css) {
                    return css.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + href + "$2$3");
                },
                useMedia = !ql && media;
            if (href.length) {
                href += "/";
            }
            if (useMedia) {
                ql = 1;
            }
            for (var i = 0; i < ql; i++) {
                var fullq, thisq, eachq, eql;
                if (useMedia) {
                    fullq = media;
                    rules.push(repUrls(styles));
                } else {
                    fullq = qs[i].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1;
                    rules.push(RegExp.$2 && repUrls(RegExp.$2));
                }
                eachq = fullq.split(",");
                eql = eachq.length;
                for (var j = 0; j < eql; j++) {
                    thisq = eachq[j];
                    mediastyles.push({
                        media: thisq.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                        rules: rules.length - 1,
                        hasquery: thisq.indexOf("(") > -1,
                        minw: thisq.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: thisq.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    });
                }
            }
            applyMedia();
        },
        lastCall, resizeDefer, getEmValue = function() {
            var ret, div = doc.createElement('div'),
                body = doc.body,
                fakeUsed = false;
            div.style.cssText = "position:absolute;font-size:1em;width:1em";
            if (!body) {
                body = fakeUsed = doc.createElement("body");
                body.style.background = "none";
            }
            body.appendChild(div);
            docElem.insertBefore(body, docElem.firstChild);
            ret = div.offsetWidth;
            if (fakeUsed) {
                docElem.removeChild(body);
            } else {
                body.removeChild(div);
            }
            ret = eminpx = parseFloat(ret);
            return ret;
        },
        eminpx, applyMedia = function(fromResize) {
            var name = "clientWidth",
                docElemProp = docElem[name],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp,
                styleBlocks = {},
                lastLink = links[links.length - 1],
                now = (new Date()).getTime();
            if (fromResize && lastCall && now - lastCall < resizeThrottle) {
                win.clearTimeout(resizeDefer);
                resizeDefer = win.setTimeout(applyMedia, resizeThrottle);
                return;
            } else {
                lastCall = now;
            }
            for (var i in mediastyles) {
                if (mediastyles.hasOwnProperty(i)) {
                    var thisstyle = mediastyles[i],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";
                    if (!!min) {
                        min = parseFloat(min) * (min.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }
                    if (!!max) {
                        max = parseFloat(max) * (max.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }
                    if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
                        if (!styleBlocks[thisstyle.media]) {
                            styleBlocks[thisstyle.media] = [];
                        }
                        styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
                    }
                }
            }
            for (var j in appendedEls) {
                if (appendedEls.hasOwnProperty(j)) {
                    if (appendedEls[j] && appendedEls[j].parentNode === head) {
                        head.removeChild(appendedEls[j]);
                    }
                }
            }
            for (var k in styleBlocks) {
                if (styleBlocks.hasOwnProperty(k)) {
                    var ss = doc.createElement("style"),
                        css = styleBlocks[k].join("\n");
                    ss.type = "text/css";
                    ss.media = k;
                    head.insertBefore(ss, lastLink.nextSibling);
                    if (ss.styleSheet) {
                        ss.styleSheet.cssText = css;
                    } else {
                        ss.appendChild(doc.createTextNode(css));
                    }
                    appendedEls.push(ss);
                }
            }
        },
        ajax = function(url, callback) {
            var req = xmlHttp();
            if (!req) {
                return;
            }
            req.open("GET", url, true);
            req.onreadystatechange = function() {
                if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
                    return;
                }
                callback(req.responseText);
            };
            if (req.readyState === 4) {
                return;
            }
            req.send(null);
        },
        xmlHttp = (function() {
            var xmlhttpmethod = false;
            try {
                xmlhttpmethod = new win.XMLHttpRequest();
            } catch (e) {
                xmlhttpmethod = new win.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function() {
                return xmlhttpmethod;
            };
        })();
    ripCSS();
    respond.update = ripCSS;

    function callMedia() {
        applyMedia(true);
    }
    if (win.addEventListener) {
        win.addEventListener("resize", callMedia, false);
    } else if (win.attachEvent) {
        win.attachEvent("onresize", callMedia);
    }
})(this);
(function($) {
    $.fn.visualize = function(options, container) {
        return $(this).each(function() {
            var o = $.extend({
                type: 'bar',
                width: $(this).width(),
                height: $(this).height(),
                appendTitle: true,
                title: null,
                appendKey: true,
                colors: ['#be1e2d', '#666699', '#92d5ea', '#ee8310', '#8d10ee', '#5a3b16', '#26a4ed', '#f45a90', '#e9e744'],
                textColors: [],
                parseDirection: 'x',
                pieMargin: 20,
                pieLabelPos: 'inside',
                lineWeight: 4,
                barGroupMargin: 10,
                barMargin: 1,
                yLabelInterval: 30
            }, options);
            o.width = parseFloat(o.width);
            o.height = parseFloat(o.height);
            var self = $(this);

            function scrapeTable() {
                var colors = o.colors;
                var textColors = o.textColors;
                var tableData = {
                    dataGroups: function() {
                        var dataGroups = [];
                        if (o.parseDirection == 'x') {
                            self.find('tr:gt(0)').each(function(i) {
                                dataGroups[i] = {};
                                dataGroups[i].points = [];
                                dataGroups[i].color = colors[i];
                                if (textColors[i]) {
                                    dataGroups[i].textColor = textColors[i];
                                }
                                $(this).find('td').each(function() {
                                    dataGroups[i].points.push(parseFloat($(this).text()));
                                });
                            });
                        } else {
                            var cols = self.find('tr:eq(1) td').size();
                            for (var i = 0; i < cols; i++) {
                                dataGroups[i] = {};
                                dataGroups[i].points = [];
                                dataGroups[i].color = colors[i];
                                if (textColors[i]) {
                                    dataGroups[i].textColor = textColors[i];
                                }
                                self.find('tr:gt(0)').each(function() {
                                    dataGroups[i].points.push($(this).find('td').eq(i).text() * 1);
                                });
                            };
                        }
                        return dataGroups;
                    },
                    allData: function() {
                        var allData = [];
                        $(this.dataGroups()).each(function() {
                            allData.push(this.points);
                        });
                        return allData;
                    },
                    dataSum: function() {
                        var dataSum = 0;
                        var allData = this.allData().join(',').split(',');
                        $(allData).each(function() {
                            dataSum += parseFloat(this);
                        });
                        return dataSum
                    },
                    topValue: function() {
                        var topValue = 0;
                        var allData = this.allData().join(',').split(',');
                        $(allData).each(function() {
                            if (parseFloat(this, 10) > topValue) topValue = parseFloat(this);
                        });
                        return topValue;
                    },
                    bottomValue: function() {
                        var bottomValue = 0;
                        var allData = this.allData().join(',').split(',');
                        $(allData).each(function() {
                            if (this < bottomValue) bottomValue = parseFloat(this);
                        });
                        return bottomValue;
                    },
                    memberTotals: function() {
                        var memberTotals = [];
                        var dataGroups = this.dataGroups();
                        $(dataGroups).each(function(l) {
                            var count = 0;
                            $(dataGroups[l].points).each(function(m) {
                                count += dataGroups[l].points[m];
                            });
                            memberTotals.push(count);
                        });
                        return memberTotals;
                    },
                    yTotals: function() {
                        var yTotals = [];
                        var dataGroups = this.dataGroups();
                        var loopLength = this.xLabels().length;
                        for (var i = 0; i < loopLength; i++) {
                            yTotals[i] = [];
                            var thisTotal = 0;
                            $(dataGroups).each(function(l) {
                                yTotals[i].push(this.points[i]);
                            });
                            yTotals[i].join(',').split(',');
                            $(yTotals[i]).each(function() {
                                thisTotal += parseFloat(this);
                            });
                            yTotals[i] = thisTotal;
                        }
                        return yTotals;
                    },
                    topYtotal: function() {
                        var topYtotal = 0;
                        var yTotals = this.yTotals().join(',').split(',');
                        $(yTotals).each(function() {
                            if (parseFloat(this, 10) > topYtotal) topYtotal = parseFloat(this);
                        });
                        return topYtotal;
                    },
                    totalYRange: function() {
                        return this.topValue() - this.bottomValue();
                    },
                    xLabels: function() {
                        var xLabels = [];
                        if (o.parseDirection == 'x') {
                            self.find('tr:eq(0) th').each(function() {
                                xLabels.push($(this).html());
                            });
                        } else {
                            self.find('tr:gt(0) th').each(function() {
                                xLabels.push($(this).html());
                            });
                        }
                        return xLabels;
                    },
                    yLabels: function() {
                        var yLabels = [];
                        yLabels.push(bottomValue);
                        var numLabels = Math.round(o.height / o.yLabelInterval);
                        var loopInterval = Math.ceil(totalYRange / numLabels) || 1;
                        while (yLabels[yLabels.length - 1] < topValue - loopInterval) {
                            yLabels.push(yLabels[yLabels.length - 1] + loopInterval);
                        }
                        yLabels.push(topValue);
                        return yLabels;
                    }
                };
                return tableData;
            };
            var createChart = {
                pie: function() {
                    canvasContain.addClass('visualize-pie');
                    if (o.pieLabelPos == 'outside') {
                        canvasContain.addClass('visualize-pie-outside');
                    }
                    var centerx = Math.round(canvas.width() / 2);
                    var centery = Math.round(canvas.height() / 2);
                    var radius = centery - o.pieMargin;
                    var counter = 0.0;
                    var toRad = function(integer) {
                        return (Math.PI / 180) * integer;
                    };
                    var labels = $('<ul class="visualize-labels"></ul>').insertAfter(canvas);
                    $.each(memberTotals, function(i) {
                        var fraction = (this <= 0 || isNaN(this)) ? 0 : this / dataSum;
                        ctx.beginPath();
                        ctx.moveTo(centerx, centery);
                        ctx.arc(centerx, centery, radius, counter * Math.PI * 2 - Math.PI * 0.5, (counter + fraction) * Math.PI * 2 - Math.PI * 0.5, false);
                        ctx.lineTo(centerx, centery);
                        ctx.closePath();
                        ctx.fillStyle = dataGroups[i].color;
                        ctx.fill();
                        var sliceMiddle = (counter + fraction / 2);
                        var distance = o.pieLabelPos == 'inside' ? radius / 1.5 : radius + radius / 5;
                        var labelx = Math.round(centerx + Math.sin(sliceMiddle * Math.PI * 2) * (distance));
                        var labely = Math.round(centery - Math.cos(sliceMiddle * Math.PI * 2) * (distance));
                        var leftRight = (labelx > centerx) ? 'right' : 'left';
                        var topBottom = (labely > centery) ? 'bottom' : 'top';
                        var labeltext = $('<span class="visualize-label">' + Math.round(fraction * 100) + '%</span>').css(leftRight, 0).css(topBottom, 0);
                        var label = $('<li class="visualize-label-pos"></li>').appendTo(labels).css({
                            left: labelx,
                            top: labely
                        }).append(labeltext);
                        labeltext.css('font-size', radius / 8).css('margin-' + leftRight, -labeltext.width() / 2).css('margin-' + topBottom, -labeltext.outerHeight() / 2);
                        if (dataGroups[i].textColor) {
                            labeltext.css('color', dataGroups[i].textColor);
                        }
                        counter += fraction;
                    });
                },
                line: function(area) {
                    if (area) {
                        canvasContain.addClass('visualize-area');
                    } else {
                        canvasContain.addClass('visualize-line');
                    }
                    var xInterval = canvas.width() / (xLabels.length - 1);
                    var xlabelsUL = $('<ul class="visualize-labels-x"></ul>').width(canvas.width()).height(canvas.height()).insertBefore(canvas);
                    $.each(xLabels, function(i) {
                        var thisLi = $('<li><span>' + this + '</span></li>').prepend('<span class="line" />').css('left', xInterval * i).appendTo(xlabelsUL);
                        var label = thisLi.find('span:not(.line)');
                        var leftOffset = label.width() / -2;
                        if (i == 0) {
                            leftOffset = 0;
                        } else if (i == xLabels.length - 1) {
                            leftOffset = -label.width();
                        }
                        label.css('margin-left', leftOffset).addClass('label');
                    });
                    var yScale = canvas.height() / totalYRange;
                    var liBottom = canvas.height() / (yLabels.length - 1);
                    var ylabelsUL = $('<ul class="visualize-labels-y"></ul>').width(canvas.width()).height(canvas.height()).insertBefore(canvas);
                    $.each(yLabels, function(i) {
                        var thisLi = $('<li><span>' + this + '</span></li>').prepend('<span class="line"  />').css('bottom', liBottom * i).prependTo(ylabelsUL);
                        var label = thisLi.find('span:not(.line)');
                        var topOffset = label.height() / -2;
                        if (i == 0) {
                            topOffset = -label.height();
                        } else if (i == yLabels.length - 1) {
                            topOffset = 0;
                        }
                        label.css('margin-top', topOffset).addClass('label');
                    });
                    ctx.translate(0, zeroLoc);
                    $.each(dataGroups, function(h) {
                        ctx.beginPath();
                        ctx.lineWidth = o.lineWeight;
                        ctx.lineJoin = 'round';
                        var points = this.points;
                        var integer = 0;
                        ctx.moveTo(0, -(points[0] * yScale));
                        $.each(points, function() {
                            ctx.lineTo(integer, -(this * yScale));
                            integer += xInterval;
                        });
                        ctx.strokeStyle = this.color;
                        ctx.stroke();
                        if (area) {
                            ctx.lineTo(integer, 0);
                            ctx.lineTo(0, 0);
                            ctx.closePath();
                            ctx.fillStyle = this.color;
                            ctx.globalAlpha = .3;
                            ctx.fill();
                            ctx.globalAlpha = 1.0;
                        } else {
                            ctx.closePath();
                        }
                    });
                },
                area: function() {
                    createChart.line(true);
                },
                bar: function() {
                    canvasContain.addClass('visualize-bar');
                    var xInterval = canvas.width() / (xLabels.length);
                    var xlabelsUL = $('<ul class="visualize-labels-x"></ul>').width(canvas.width()).height(canvas.height()).insertBefore(canvas);
                    $.each(xLabels, function(i) {
                        var thisLi = $('<li><span class="label">' + this + '</span></li>').prepend('<span class="line" />').css('left', xInterval * i).width(xInterval).appendTo(xlabelsUL);
                        var label = thisLi.find('span.label');
                        label.addClass('label');
                    });
                    var yScale = canvas.height() / totalYRange;
                    var liBottom = canvas.height() / (yLabels.length - 1);
                    var ylabelsUL = $('<ul class="visualize-labels-y"></ul>').width(canvas.width()).height(canvas.height()).insertBefore(canvas);
                    $.each(yLabels, function(i) {
                        var thisLi = $('<li><span>' + this + '</span></li>').prepend('<span class="line"  />').css('bottom', liBottom * i).prependTo(ylabelsUL);
                        var label = thisLi.find('span:not(.line)');
                        var topOffset = label.height() / -2;
                        if (i == 0) {
                            topOffset = -label.height();
                        } else if (i == yLabels.length - 1) {
                            topOffset = 0;
                        }
                        label.css('margin-top', topOffset).addClass('label');
                    });
                    ctx.translate(0, zeroLoc);
                    for (var h = 0; h < dataGroups.length; h++) {
                        ctx.beginPath();
                        var linewidth = (xInterval - o.barGroupMargin * 2) / dataGroups.length;
                        var strokeWidth = linewidth - (o.barMargin * 2);
                        ctx.lineWidth = strokeWidth;
                        var points = dataGroups[h].points;
                        var integer = 0;
                        for (var i = 0; i < points.length; i++) {
                            var xVal = (integer - o.barGroupMargin) + (h * linewidth) + linewidth / 2;
                            xVal += o.barGroupMargin * 2;
                            ctx.moveTo(xVal, 0);
                            ctx.lineTo(xVal, Math.round(-points[i] * yScale));
                            integer += xInterval;
                        }
                        ctx.strokeStyle = dataGroups[h].color;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            };
            var canvasNode = document.createElement("canvas");
            canvasNode.setAttribute('height', o.height);
            canvasNode.setAttribute('width', o.width);
            var canvas = $(canvasNode);
            var title = o.title || self.find('caption').text();
            var canvasContain = (container || $('<div class="visualize" role="img" aria-label="Chart representing data from the table: ' + title + '" />')).height(o.height).width(o.width).append(canvas);
            var tableData = scrapeTable();
            var dataGroups = tableData.dataGroups();
            var allData = tableData.allData();
            var dataSum = tableData.dataSum();
            var topValue = tableData.topValue();
            var bottomValue = tableData.bottomValue();
            var memberTotals = tableData.memberTotals();
            var totalYRange = tableData.totalYRange();
            var zeroLoc = o.height * (topValue / totalYRange);
            var xLabels = tableData.xLabels();
            var yLabels = tableData.yLabels();
            if (o.appendTitle || o.appendKey) {
                var infoContain = $('<div class="visualize-info"></div>').appendTo(canvasContain);
            }
            if (o.appendTitle) {
                $('<div class="visualize-title">' + title + '</div>').appendTo(infoContain);
            }
            if (o.appendKey) {
                var newKey = $('<ul class="visualize-key"></ul>');
                var selector = (o.parseDirection == 'x') ? 'tr:gt(0) th' : 'tr:eq(0) th';
                self.find(selector).each(function(i) {
                    $('<li><span class="visualize-key-color" style="background: ' + dataGroups[i].color + '"></span><span class="visualize-key-label">' + $(this).text() + '</span></li>').appendTo(newKey);
                });
                newKey.appendTo(infoContain);
            };
            if (!container) {
                canvasContain.insertAfter(this);
            }
            if (typeof(G_vmlCanvasManager) != 'undefined') {
                G_vmlCanvasManager.initElement(canvas[0]);
            }
            var ctx = canvas[0].getContext('2d');
            createChart[o.type]();
            $('.visualize-line li:first-child span.line, .visualize-line li:last-child span.line, .visualize-area li:first-child span.line, .visualize-area li:last-child span.line, .visualize-bar li:first-child span.line,.visualize-bar .visualize-labels-y li:last-child span.line').css('border', 'none');
            if (!container) {
                canvasContain.bind('visualizeRefresh', function() {
                    self.visualize(o, $(this).empty());
                });
            }
        }).next();
    };
})(jQuery);
var Long = function(low, high, unsigned) {
    this.low = low | 0;
    this.high = high | 0;
    this.unsigned = !!unsigned;
};
var INT_CACHE = {};
var UINT_CACHE = {};
Long.fromInt = function(value, unsigned) {
    if (!unsigned) {
        value = value | 0;
        if (-128 <= value && value < 128) {
            var cachedObj = INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        var obj = new Long(value, value < 0 ? -1 : 0, false);
        if (-128 <= value && value < 128) {
            INT_CACHE[value] = obj;
        }
        return obj;
    } else {
        value = value >>> 0;
        if (0 <= value && value < 256) {
            var cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        var obj = new Long(value, (value | 0) < 0 ? -1 : 0, true);
        if (0 <= value && value < 256) {
            UINT_CACHE[value] = obj;
        }
        return obj;
    }
};
Long.fromNumber = function(value, unsigned) {
    unsigned = !!unsigned;
    if (isNaN(value) || !isFinite(value)) {
        return Long.ZERO;
    } else if (!unsigned && value <= -TWO_PWR_63_DBL) {
        return Long.MIN_SIGNED_VALUE;
    } else if (unsigned && value <= 0) {
        return Long.MIN_UNSIGNED_VALUE;
    } else if (!unsigned && value + 1 >= TWO_PWR_63_DBL) {
        return Long.MAX_SIGNED_VALUE;
    } else if (unsigned && value >= TWO_PWR_64_DBL) {
        return Long.MAX_UNSIGNED_VALUE;
    } else if (value < 0) {
        return Long.fromNumber(-value, false).negate();
    } else {
        return new Long((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }
};
Long.fromBits = function(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
};
Long.from28Bits = function(part0, part1, part2, unsigned) {
    return Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, unsigned);
};
Long.fromString = function(str, unsigned, radix) {
    if (str.length == 0) {
        throw (new Error('number format error: empty string'));
    }
    if (typeof unsigned == 'number') {
        radix = unsigned;
        unsigned = false;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix) {
        throw (new Error('radix out of range: ' + radix));
    }
    if (str.charAt(0) == '-') {
        return Long.fromString(str.substring(1), unsigned, radix).negate();
    } else if (str.indexOf('-') >= 0) {
        throw (new Error('number format error: interior "-" character: ' + str));
    }
    var radixToPower = Long.fromNumber(Math.pow(radix, 8));
    var result = Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i);
        var value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = Long.fromNumber(Math.pow(radix, size));
            result = result.multiply(power).add(Long.fromNumber(value));
        } else {
            result = result.multiply(radixToPower);
            result = result.add(Long.fromNumber(value));
        }
    }
    return result;
};
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_31_DBL = TWO_PWR_32_DBL / 2;
var TWO_PWR_48_DBL = TWO_PWR_32_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = Long.fromInt(1 << 24);
Long.ZERO = Long.fromInt(0);
Long.ONE = Long.fromInt(1);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_SIGNED_VALUE = Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
Long.MAX_UNSIGNED_VALUE = Long.fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
Long.MAX_VALUE = Long.MAX_SIGNED_VALUE;
Long.MIN_SIGNED_VALUE = Long.fromBits(0, 0x80000000 | 0, false);
Long.MIN_UNSIGNED_VALUE = Long.fromBits(0, 0, true);
Long.MIN_VALUE = Long.MIN_SIGNED_VALUE;
Long.prototype.toInt = function() {
    return this.unsigned ? this.low >>> 0 : this.low;
};
Long.prototype.toNumber = function() {
    if (this.unsigned) {
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    }
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};
Long.prototype.toString = function(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix) {
        throw (new Error('radix out of range: ' + radix));
    }
    if (this.isZero()) {
        return '0';
    }
    if (this.isNegative()) {
        if (this.equals(Long.MIN_SIGNED_VALUE)) {
            var radixLong = Long.fromNumber(radix);
            var div = this.div(radixLong);
            var rem = div.multiply(radixLong).subtract(this);
            return div.toString(radix) + rem.toInt().toString(radix);
        } else {
            return '-' + this.negate().toString(radix);
        }
    }
    var radixToPower = Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower);
        var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
        var digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero()) {
            return digits + result;
        } else {
            while (digits.length < 6) {
                digits = '0' + digits;
            }
            result = '' + digits + result;
        }
    }
};
Long.prototype.getHighBits = function() {
    return this.high;
};
Long.prototype.getHighBitsUnsigned = function() {
    return this.high >>> 0;
};
Long.prototype.getLowBits = function() {
    return this.low;
};
Long.prototype.getLowBitsUnsigned = function() {
    return this.low >>> 0;
};
Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
        if (this.equals(Long.MIN_SIGNED_VALUE)) {
            return 64;
        } else {
            return this.negate().getNumBitsAbs();
        }
    } else {
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) {
            if ((val & (1 << bit)) != 0) {
                break;
            }
        }
        return this.high != 0 ? bit + 33 : bit + 1;
    }
};
Long.prototype.isZero = function() {
    return this.high == 0 && this.low == 0;
};
Long.prototype.isNegative = function() {
    return !this.unsigned && this.high < 0;
};
Long.prototype.isOdd = function() {
    return (this.low & 1) == 1;
};
Long.prototype.isEven = function() {
    return (this.low & 1) == 0;
};
Long.prototype.equals = function(other) {
    if (this.unsigned != other.unsigned && (this.high >>> 31) != (other.high >>> 31)) return false;
    return (this.high == other.high) && (this.low == other.low);
};
Long.prototype.notEquals = function(other) {
    return !this.equals(other);
};
Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
};
Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
};
Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
};
Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
};
Long.prototype.compare = function(other) {
    if (this.equals(other)) {
        return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) return -1;
    if (!thisNeg && otherNeg) return 1;
    if (!this.unsigned) {
        return this.subtract(other).isNegative() ? -1 : 1;
    } else {
        return (other.high >>> 0) > (this.high >>> 0) || (other.high == this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
    }
};
Long.prototype.negate = function() {
    if (!this.unsigned && this.equals(Long.MIN_SIGNED_VALUE)) {
        return Long.MIN_SIGNED_VALUE;
    }
    return this.not().add(Long.ONE);
};
Long.prototype.add = function(other) {
    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;
    var b48 = other.high >>> 16;
    var b32 = other.high & 0xFFFF;
    var b16 = other.low >>> 16;
    var b00 = other.low & 0xFFFF;
    var c48 = 0,
        c32 = 0,
        c16 = 0,
        c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};
Long.prototype.subtract = function(other) {
    return this.add(other.negate());
};
Long.prototype.multiply = function(other) {
    if (this.isZero()) {
        return Long.ZERO;
    } else if (other.isZero()) {
        return Long.ZERO;
    }
    if (this.equals(Long.MIN_VALUE)) {
        return other.isOdd() ? Long.MIN_VALUE : Long.ZERO;
    } else if (other.equals(Long.MIN_VALUE)) {
        return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
    }
    if (this.isNegative()) {
        if (other.isNegative()) {
            return this.negate().multiply(other.negate());
        } else {
            return this.negate().multiply(other).negate();
        }
    } else if (other.isNegative()) {
        return this.multiply(other.negate()).negate();
    }
    if (this.lessThan(TWO_PWR_24) && other.lessThan(TWO_PWR_24)) {
        return Long.fromNumber(this.toNumber() * other.toNumber(), this.unsigned);
    }
    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;
    var b48 = other.high >>> 16;
    var b32 = other.high & 0xFFFF;
    var b16 = other.low >>> 16;
    var b00 = other.low & 0xFFFF;
    var c48 = 0,
        c32 = 0,
        c16 = 0,
        c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};
Long.prototype.div = function(other) {
    if (other.isZero()) {
        throw (new Error('division by zero'));
    } else if (this.isZero()) {
        return Long.ZERO;
    }
    if (this.equals(Long.MIN_SIGNED_VALUE)) {
        if (other.equals(Long.ONE) || other.equals(Long.NEG_ONE)) {
            return min;
        } else if (other.equals(Long.MIN_VALUE)) {
            return Long.ONE;
        } else {
            var halfThis = this.shiftRight(1);
            var approx = halfThis.div(other).shiftLeft(1);
            if (approx.equals(Long.ZERO)) {
                return other.isNegative() ? Long.ONE : Long.NEG_ONE;
            } else {
                var rem = this.subtract(other.multiply(approx));
                var result = approx.add(rem.div(other));
                return result;
            }
        }
    } else if (other.equals(Long.MIN_VALUE)) {
        return Long.ZERO;
    }
    if (this.isNegative()) {
        if (other.isNegative()) {
            return this.negate().div(other.negate());
        } else {
            return this.negate().div(other).negate();
        }
    } else if (other.isNegative()) {
        return this.div(other.negate()).negate();
    }
    var res = Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
        var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
        var log2 = Math.ceil(Math.log(approx) / Math.LN2);
        var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
        var approxRes = Long.fromNumber(approx, this.unsigned);
        var approxRem = approxRes.multiply(other);
        while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
            approx -= delta;
            approxRes = Long.fromNumber(approx, this.unsigned);
            approxRem = approxRes.multiply(other);
        }
        if (approxRes.isZero()) {
            approxRes = Long.ONE;
        }
        res = res.add(approxRes);
        rem = rem.subtract(approxRem);
    }
    return res;
};
Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
};
Long.prototype.not = function() {
    return Long.fromBits(~this.low, ~this.high, this.unsigned);
};
Long.prototype.and = function(other) {
    return Long.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};
Long.prototype.or = function(other) {
    return Long.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};
Long.prototype.xor = function(other) {
    return Long.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};
Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var low = this.low;
        if (numBits < 32) {
            var high = this.high;
            return Long.fromBits(low << numBits, (high << numBits) | (low >>> (32 - numBits)), this.unsigned);
        } else {
            return Long.fromBits(0, low << (numBits - 32), this.unsigned);
        }
    }
};
Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return Long.fromBits((low >>> numBits) | (high << (32 - numBits)), high >> numBits, this.unsigned);
        } else {
            return Long.fromBits(high >> (numBits - 32), high >= 0 ? 0 : -1, this.unsigned);
        }
    }
};
Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return Long.fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits == 32) {
            return Long.fromBits(high, 0, this.unsigned);
        } else {
            return Long.fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    }
};
Long.prototype.toSigned = function() {
    var l = this.clone();
    l.unsigned = false;
    return l;
};
Long.prototype.toUnsigned = function() {
    var l = this.clone();
    l.unsigned = true;
    return l;
};
Long.prototype.clone = function() {
    return new Long(this.low, this.high, this.unsigned);
};