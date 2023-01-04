; /*FB_PKG_DELIM*/

__d("DOMControl", ["$", "DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return !/\S/.test(a || "")
    }

    function i(a) {
        return h(a.value)
    }

    function a(a) {
        return i(a) ? "" : a.value
    }

    function b(a) {
        return a.value
    }

    function e(a, b) {
        a.value = b || "";
        b = c("DOMControl").getInstance(a);
        b && b.resetHeight && b.resetHeight()
    }

    function f(a, b) {
        b || (b = ""), a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
    }

    function j(a) {
        a.value = "", a.style.height = ""
    }

    function k(a, b) {
        d("CSS").conditionClass(a, "enter_submit", b)
    }

    function l(a) {
        return d("CSS").hasClass(a, "enter_submit")
    }

    function m(a, b) {
        b > 0 ? a.setAttribute("maxlength", b.toString()) : a.removeAttribute("maxlength")
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m
}), 98);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = c("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
    g["default"] = a
}), 98);
__d("Form", ["DOM", "DOMQuery", "DTSG", "DTSGUtils", "DataStore", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    var g, h, i = "FileList" in window,
        j = "FormData" in window;

    function k(a) {
        var c = {};
        (g || (g = b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = (h || (h = b("URI"))).decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var l = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            l.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : l.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            l.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            l.getElements(a).forEach(function(a) {
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (i) {
                        f = a.files;
                        for (c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            if (!j) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) l.forEachValue(a, c, function(a, b, c) {
                    d.append(b, c)
                });
                else {
                    c = k(a);
                    for (a in c) c[a] == null ? d.append(a, "") : d.append(a, c[a])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            l.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                l._serializeHelper(c, b, d)
            });
            return l._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : l._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            for (var b in a) a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
            b = Object.keys(a);
            if (b.length === 0 || b.some(isNaN)) return a;
            b.sort(function(a, b) {
                return a - b
            });
            var c = 0,
                d = b.every(function(a) {
                    return +a === c++
                });
            return d ? b.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            e === void 0 && (e = !0);
            a = new(h || (h = b("URI")))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var i = window.open("about:blank", d);
                        i !== void 0 && (i.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                i = b("DTSG").getToken();
                i && (c.fb_dtsg = i, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(i)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !i && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            l.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            e === void 0 && (e = !1);
            d = d || {};
            a = k(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = l.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = l
}), null);
__d("PageHooks", ["Arbiter", "ErrorUtils", "InitialJSLoader", "PageEvents"], (function(a, b, c, d, e, f) {
    var g;
    f = {
        DOMREADY_HOOK: "domreadyhooks",
        ONLOAD_HOOK: "onloadhooks"
    };

    function h() {
        k(l.DOMREADY_HOOK), window.domready = !0, b("Arbiter").inform("uipage_onload", !0, "state")
    }

    function i() {
        k(l.ONLOAD_HOOK), window.loaded = !0
    }

    function j(a, c) {
        return (g || (g = b("ErrorUtils"))).applyWithGuard(a, null, null, function(a) {
            a.event_type = c, a.category = "runhook"
        }, "PageHooks:" + c)
    }

    function k(a) {
        var b = a == "onbeforeleavehooks" || a == "onbeforeunloadhooks";
        do {
            var c = window[a];
            if (!c) break;
            b || (window[a] = null);
            for (var d = 0; d < c.length; d++) {
                var e = j(c[d], a);
                if (b && e) return e
            }
        } while (!b && window[a])
    }

    function c() {
        window.domready || (window.domready = !0, k("onloadhooks")), window.loaded || (window.loaded = !0, k("onafterloadhooks"))
    }

    function d() {
        var a, c;
        (a = b("Arbiter")).registerCallback(h, [(c = b("PageEvents")).BIGPIPE_DOMREADY, b("InitialJSLoader").INITIAL_JS_READY]);
        a.registerCallback(i, [c.BIGPIPE_DOMREADY, c.BIGPIPE_ONLOAD, b("InitialJSLoader").INITIAL_JS_READY]);
        a.subscribe(c.NATIVE_ONBEFOREUNLOAD, function(a, b) {
            b.warn = k("onbeforeleavehooks") || k("onbeforeunloadhooks"), b.warn || (window.domready = !1, window.loaded = !1)
        }, "new");
        a.subscribe(c.NATIVE_ONUNLOAD, function(a, b) {
            k("onunloadhooks"), k("onafterunloadhooks")
        }, "new")
    }
    var l = babelHelpers["extends"]({
        _domreadyHook: h,
        _onloadHook: i,
        runHook: j,
        runHooks: k,
        keepWindowSetAsLoaded: c
    }, f);
    d();
    a.PageHooks = e.exports = l
}), null);
__d("Button", ["csx", "cx", "invariant", "CSS", "DOM", "DataStore", "Event", "Parent", "emptyFunction", "isNode"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k = "uiButtonDisabled",
        l = "uiButtonDepressed",
        m = "_42fr",
        n = "_42fs",
        o = "button:blocker",
        p = "href",
        q = "ajaxify";

    function r(a, b) {
        var e = d("DataStore").get(a, o);
        b ? e && (e.remove(), d("DataStore").remove(a, o)) : e || d("DataStore").set(a, o, c("Event").listen(a, "click", c("emptyFunction").thatReturnsFalse, c("Event").Priority.URGENT))
    }

    function s(a) {
        a = d("Parent").byClass(a, "uiButton") || d("Parent").bySelector(a, "._42ft");
        if (!a) throw new Error("invalid use case");
        return a
    }

    function t(a) {
        return c("DOM").isNodeOfType(a, "a")
    }

    function u(a) {
        return c("DOM").isNodeOfType(a, "button")
    }

    function v(a) {
        return d("CSS").matchesSelector(a, "._42ft")
    }
    var w = {
        getInputElement: function(a) {
            a = s(a);
            if (t(a)) throw new Error("invalid use case");
            if (u(a)) {
                a instanceof HTMLButtonElement || j(0, 21261);
                return a
            }
            return c("DOM").find(a, "input")
        },
        isEnabled: function(a) {
            return !(d("CSS").hasClass(s(a), k) || d("CSS").hasClass(s(a), m))
        },
        setEnabled: function(a, b) {
            a = s(a);
            var c = v(a) ? m : k;
            d("CSS").conditionClass(a, c, !b);
            if (t(a)) {
                c = a.getAttribute("href");
                var e = a.getAttribute("ajaxify"),
                    f = d("DataStore").get(a, p, "#"),
                    g = d("DataStore").get(a, q);
                b ? (c || a.setAttribute("href", f), !e && g && a.setAttribute("ajaxify", g), a.removeAttribute("tabIndex")) : (c && c !== f && d("DataStore").set(a, p, c), e && e !== g && d("DataStore").set(a, q, e), a.removeAttribute("href"), a.removeAttribute("ajaxify"), a.setAttribute("tabIndex", "-1"));
                r(a, b)
            } else {
                f = w.getInputElement(a);
                f.disabled = !b;
                r(f, b)
            }
        },
        setDepressed: function(a, b) {
            a = s(a);
            var c = v(a) ? n : l;
            d("CSS").conditionClass(a, c, b)
        },
        isDepressed: function(a) {
            a = s(a);
            var b = v(a) ? n : l;
            return d("CSS").hasClass(a, b)
        },
        setLabel: function(a, b) {
            a = s(a);
            if (v(a)) {
                var e = [];
                b && e.push(b);
                var f = c("DOM").scry(a, ".img");
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        i = h.parentNode;
                    i.classList && (i.classList.contains("_4o_3") || i.classList.contains("_-xe")) ? a.firstChild === i ? e.unshift(i) : e.push(i) : a.firstChild == h ? e.unshift(h) : e.push(h)
                }
                c("DOM").setContent(a, e)
            } else if (t(a)) {
                i = c("DOM").find(a, "span.uiButtonText");
                c("DOM").setContent(i, b)
            } else w.getInputElement(a).value = b;
            h = v(a) ? "_42fv" : "uiButtonNoText";
            d("CSS").conditionClass(a, h, !b)
        },
        getIcon: function(a) {
            a = s(a);
            return c("DOM").scry(a, ".img")[0]
        },
        setIcon: function(a, b) {
            if (b && !c("isNode")(b)) return;
            var e = w.getIcon(a);
            if (!b) {
                e && c("DOM").remove(e);
                return
            }
            d("CSS").addClass(b, "customimg");
            e != b && (e ? c("DOM").replace(e, b) : c("DOM").prependContent(s(a), b))
        }
    };
    a = w;
    g["default"] = a
}), 98);
__d("VirtualCursorStatus", ["Event", "UserAgent", "emptyFunction", "setImmediate"], (function(a, b, c, d, e, f) {
    var g = null,
        h = null;

    function i() {
        h || (h = b("Event").listen(window, "blur", function() {
            g = null, j()
        }))
    }

    function j() {
        h && (h.remove(), h = null)
    }

    function a(a) {
        g = a.keyCode, i()
    }

    function c() {
        g = null, j()
    }
    if (typeof window !== "undefined" && window.document && window.document.createElement) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", c, !0);
            else if (d.attachEvent) {
            f = d.attachEvent;
            f("onkeydown", a);
            f("onkeyup", c)
        }
    }
    var k = {
            isKeyDown: function() {
                return !!g
            },
            getKeyDownCode: function() {
                return g
            }
        },
        l = !1,
        m = !1,
        n = null,
        o = !1;

    function p(a) {
        var c = new Set(),
            d = k.isKeyDown(),
            e = a.clientX,
            f = a.clientY,
            g = a.isPrimary,
            h = a.isTrusted,
            i = a.offsetX,
            j = a.offsetY,
            n = a.pointerType,
            o = a.mozInputSource,
            p = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
            q = a.webkitForce;
        a = a.target;
        var r = a.clientWidth;
        a = a.clientHeight;
        e === 0 && f === 0 && i >= 0 && j >= 0 && m && h && o == null && c.add("Chrome");
        l && m && !d && q != null && q < p && i === 0 && j === 0 && o == null && c.add("Safari-edge");
        e === 0 && f === 0 && i < 0 && j < 0 && m && o == null && c.add("Safari-old");
        !l && !m && d && g === !1 && h && n === "" && e === 0 && f === 0 && i === 0 && j === 0 && o == null;
        !l && !m && !d && h && b("UserAgent").isBrowser("IE >= 10") && o == null && (e < 0 && f < 0 ? c.add("IE") : (i < 0 || i > r) && (j < 0 || j > a) && c.add("MSIE"));
        o === 0 && h && c.add("Firefox");
        return c
    }

    function q() {
        l = !0, b("setImmediate")(function() {
            l = !1
        })
    }

    function r() {
        m = !0, b("setImmediate")(function() {
            m = !1
        })
    }

    function s(a, c) {
        n === null && (n = p(a));
        o = n.size > 0;
        a = a.target.getAttribute("data-accessibilityid") === "virtual_cursor_trigger";
        c(o, n, a);
        b("setImmediate")(function() {
            o = !1, n = null
        })
    }
    d = {
        isVirtualCursorTriggered: function() {
            return o
        },
        add: function(a, c) {
            c === void 0 && (c = b("emptyFunction"));
            var d = function(a) {
                return s(a, c)
            };
            a.addEventListener("click", d);
            var e = b("Event").listen(a, "mousedown", q),
                f = b("Event").listen(a, "mouseup", r);
            return {
                remove: function() {
                    a.removeEventListener("click", d), e.remove(), f.remove()
                }
            }
        }
    };
    e.exports = d
}), null);
__d("XThisControllerNoLongerExistsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/dcb/tcnle/", {
        t: {
            type: "String"
        }
    })
}), null);
__d("ThisControllerNoLongerExists", ["XControllerURIBuilder", "XThisControllerNoLongerExistsController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a(a) {
            var c;
            c = b.call(this, "/dcb/tcnle/", {}) || this;
            c.$XControllerURIBuilderNoOpDead1 = a;
            return c
        }
        var d = a.prototype;
        d.__validateRequiredParamsExistence = function() {};
        d.__assertParamExists = function(a) {};
        d.__setParam = function(a, b, c) {
            return this
        };
        d.__setParamInt = function(a, b) {};
        d.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setURI(this.getURI())
        };
        d.getURI = function() {
            return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", this.$XControllerURIBuilderNoOpDead1).getURI()
        };
        d.getLookasideURI = function() {
            return this.getURI()
        };
        return a
    }(c("XControllerURIBuilder"));

    function a(a) {
        return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", a).getURI()
    }

    function b(a) {
        return new h(a)
    }
    g.__DEADURI__ = a;
    g.__DEADBUILDER__ = b
}), 98);
__d("queryThenMutateDOM", ["ErrorUtils", "Run", "TimeSlice", "emptyFunction", "gkx", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    var g, h, i, j = [],
        k = {};

    function l(a, c, d) {
        if (!a && !c) return {
            cancel: b("emptyFunction")
        };
        if (d && Object.prototype.hasOwnProperty.call(k, d)) return {
            cancel: b("emptyFunction")
        };
        else d && (k[d] = 1);
        c = b("TimeSlice").guard(c || b("emptyFunction"), "queryThenMutateDOM mutation callback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        a = b("TimeSlice").guard(a || b("emptyFunction"), "queryThenMutateDOM query callback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        var e = {
            queryFunction: a,
            mutateFunction: c,
            output: null,
            deleted: !1
        };
        j.push(e);
        n();
        h || (h = !0, b("gkx")("708253") || b("Run").onLeave(function() {
            h = !1, i = !1, k = {}, j.length = 0
        }));
        return {
            cancel: function() {
                e.deleted = !0, d && delete k[d]
            }
        }
    }
    l.prepare = function(a, b, c) {
        return function() {
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            e.unshift(this);
            var g = Function.prototype.bind.apply(a, e),
                h = b.bind(this);
            l(g, h, c)
        }
    };
    var m = b("TimeSlice").guard(function() {
        while (j.length) {
            k = {};
            var a = [];
            window.document.body.getClientRects();
            while (j.length) {
                var b = j.shift();
                b.deleted || (b.output = o(b.queryFunction), a.push(b))
            }
            while (a.length) {
                b = a.shift();
                b.deleted || o(b.mutateFunction, null, [b.output])
            }
        }
        i = !1
    }, "queryThenMutateDOM runScheduledQueriesAndMutations", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN
    });

    function n() {
        !i && j.length && (i = !0, b("requestAnimationFrame")(m))
    }

    function o(a, c, d, e, f) {
        return (g || (g = b("ErrorUtils"))).applyWithGuard(a, c, d, e, f)
    }
    e.exports = l
}), null);