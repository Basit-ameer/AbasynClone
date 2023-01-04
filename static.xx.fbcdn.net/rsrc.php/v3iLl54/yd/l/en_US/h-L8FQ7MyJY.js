; /*FB_PKG_DELIM*/

__d("CometHeroHoldTrigger.react", ["hero-tracing-placeholder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing-placeholder").HeroHoldTrigger
}), 98);
__d("WaitTimeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
        waitTimeAreaName: void 0,
        waitTimeAreaOwner: void 0
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("LoadingMarker.react", ["CometHeroHoldTrigger.react", "LoadingMarkerGated", "WaitTimeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a) {
        return a.children
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        return function(b) {
            var d = i(c("WaitTimeContext"));
            return h.jsxs(h.Fragment, {
                children: [h.jsx(c("CometHeroHoldTrigger.react"), {
                    hold: !0,
                    description: "LoadingMarker(" + ((d = d.waitTimeAreaName) != null ? d : "unnamed") + ")"
                }), h.jsx(a, babelHelpers["extends"]({}, b))]
            })
        }
    }
    e = b(c("LoadingMarkerGated").component || a);
    d = e;
    g["default"] = d
}), 98);
__d("ReactFbPropTypes", ["FbtResultBase", "warning"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = function(c, d, e, f, g, h, i) {
                var j = d[e];
                if (j instanceof b("FbtResultBase")) return null;
                if (c) return a.isRequired(d, e, f, g, h, i);
                else return a(d, e, f, g, h, i)
            },
            d = c.bind(null, !1);
        d.isRequired = c.bind(null, !0);
        return d
    }
    f.wrapStringTypeChecker = a
}), null);
__d("fbjs/lib/emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("emptyFunction")
}), null);
__d("fbjs/lib/invariant", ["invariant"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("invariant")
}), null);
__d("fbjs/lib/warning", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("warning")
}), null);
__d("prop-types/lib/ReactPropTypesSecret", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = a
}), null);
__d("prop-types/checkPropTypes", ["fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a, b, c, d, e) {}
    e.exports = a
}), null);
__d("prop-types/prop-types", ["fbjs/lib/emptyFunction", "fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/checkPropTypes", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    var g, h = function() {
        b("fbjs/lib/invariant")(0, 1492)
    };
    a = function() {
        return h
    };
    h.isRequired = h;
    c = {
        array: h,
        bool: h,
        func: h,
        number: h,
        object: h,
        string: h,
        symbol: h,
        any: h,
        arrayOf: a,
        element: h,
        instanceOf: a,
        node: h,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a
    };
    c.checkPropTypes = b("fbjs/lib/emptyFunction");
    c.PropTypes = c;
    e.exports = c
}), null);
__d("prop-types", ["ReactFbPropTypes", "prop-types/prop-types"], (function(a, b, c, d, e, f) {
    e.exports = b("prop-types/prop-types")
}), null);
__d("XUISpinner.react", ["cx", "fbt", "BrowserSupport", "LoadingMarker.react", "UserAgent", "joinClasses", "prop-types", "react"], (function(a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
        k = d("BrowserSupport").hasCSSAnimations() && !(c("UserAgent").isEngine("Trident < 6") || c("UserAgent").isEngine("Gecko < 39") || c("UserAgent").isBrowser("Safari < 6"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = j.createRef(), b) || babelHelpers.assertThisInitialized(c)
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props,
                b = a.showOnAsync,
                d = a.background,
                e = a.paused;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["showOnAsync", "background", "paused"]);
            d = "img _55ym" + (this.props.size == "small" ? " _55yn" : "") + (this.props.size == "large" ? " _55yq" : "") + (d == "light" ? " _55yo" : "") + (d == "dark" ? " _55yp" : "") + (b ? " _5tqs" : "") + (k ? "" : " _5d9-") + (k && e ? " _2y32" : "");
            return j.jsx(c("LoadingMarker.react"), {
                nodeRef: this.$1,
                children: j.jsx("span", babelHelpers["extends"]({}, a, {
                    className: c("joinClasses")(this.props.className, d),
                    ref: this.$1,
                    role: "progressbar",
                    "aria-valuetext": i._("Loading..."),
                    "aria-busy": "true",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }))
            })
        };
        return b
    }(j.Component);
    a.propTypes = {
        paused: c("prop-types").bool,
        showOnAsync: c("prop-types").bool,
        size: c("prop-types").oneOf(["small", "large"]),
        background: c("prop-types").oneOf(["light", "dark"])
    };
    a.defaultProps = {
        showOnAsync: !1,
        size: "small",
        background: "light"
    };
    g["default"] = a
}), 98);
__d("EventListenerImplForBlue", ["Event", "TimeSlice", "emptyFunction", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function h(a, b, d, e) {
        var f = c("TimeSlice").guard(d, "EventListener capture " + b);
        if (a.addEventListener) {
            a.addEventListener(b, f, e);
            return {
                remove: function() {
                    a.removeEventListener(b, f, e)
                }
            }
        } else return {
            remove: c("emptyFunction")
        }
    }
    a = {
        listen: function(a, b, d) {
            return c("Event").listen(a, b, d)
        },
        capture: function(a, b, c) {
            return h(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                passive: d,
                capture: !0
            })
        },
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                passive: d,
                capture: !1
            })
        },
        registerDefault: function(a, b) {
            var d, e = c("Event").listen(document.documentElement, a, f, c("Event").Priority._BUBBLE);

            function f() {
                g(), d = c("Event").listen(document, a, b), c("setImmediateAcrossTransitions")(g)
            }

            function g() {
                d && d.remove(), d = null
            }
            return {
                remove: function() {
                    g(), e && e.remove(), e = null
                }
            }
        },
        suppress: function(a) {
            c("Event").kill(a)
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("WarningFilter", ["CoreWarningGK"], (function(a, b, c, d, e, f) {
    var g = 24;
    b = a;
    c = function() {
        return {}
    };

    function a(a) {
        return {
            finalFormat: a,
            forceDialogImmediately: !1,
            monitorEvent: null,
            monitorListVersion: g,
            monitorSampleRate: 1,
            suppressCompletely: !1,
            suppressDialog_LEGACY: !0
        }
    }
    e.exports = {
        prepareWarning: b,
        getReactWarnings: c
    }
}), null);
__d("warningBlue", ["Bootloader", "SiteData", "WarningFilter", "cr:983844"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {}
    b = a;
    c = b;
    g["default"] = c
}), 98);
__d("warningBlueish", ["cr:2683"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2683")
}), 98);
__d("ProfilePhotoPresenceGreenDot.react", ["cx", "SubscriptionsHandler", "react", "requireDeferred"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = c("requireDeferred")("PresenceStatus").__setRef("ProfilePhotoPresenceGreenDot.react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                status: 0
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = b.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$1 = new(c("SubscriptionsHandler"))();
            this.$1.addSubscriptions(j.onReady(function(b) {
                var c = function() {
                    a.setState({
                        status: b.get(a.props.profileID)
                    })
                };
                a.$1.addSubscriptions(b.subscribe("change", c));
                c()
            }))
        };
        d.componentWillUnmount = function() {
            this.$1.release()
        };
        d.render = function() {
            return this.state.status === 2 ? i.jsx("div", {
                className: "_354z"
            }) : null
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("unmountComponentOnTransition", ["Arbiter", "ODS", "PageEvents", "ReactDOM", "emptyFunction", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = null;

    function j(a) {
        h.unshift(a), k()
    }

    function k() {
        if (i !== null) return;
        i = c("requestIdleCallbackAcrossTransitions")(function(a) {
            i = null;
            while (h.length > 0 && a.timeRemaining() > 0) d("ReactDOM").unmountComponentAtNode(h.pop());
            h.length > 0 && k()
        })
    }

    function l(a, b) {
        d("ODS").bumpEntityKey(2966, "core.www.react_component_register_unmount", a + "." + b)
    }

    function a(a, b) {
        function d() {
            a != null && Object.prototype.hasOwnProperty.call(a, "setState") && (a.setState = c("emptyFunction"), a.shouldComponentUpdate = c("emptyFunction").thatReturnsFalse), j(b)
        }
        var e = !1;
        e ? l("contextual_component", "not_found_fallback") : l("arbiter", "default");
        var f = c("Arbiter").subscribe(c("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS, function(a, b) {
            a = b.canvasID;
            if (a !== "content" && a !== "content_container") return;
            d();
            f.unsubscribe()
        })
    }
    g["default"] = a
}), 98);
__d("unmountConcurrentComponentOnTransition", ["Arbiter", "PageEvents"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var d = c("Arbiter").subscribe(c("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS, function(c, e) {
            c = e.canvasID;
            if (c !== "content" && c !== "content_container") return;
            a.unmount(b);
            d.unsubscribe()
        })
    }
    g["default"] = a
}), 98);
__d("ImmutableValue", ["invariant", "isNode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "_DONT_EVER_TYPE_THIS_SECRET_KEY";
    a = function() {
        function a(b) {
            b === a[h] || g(0, 5608)
        }
        a.mergeAllPropertiesInto = function(a, b) {
            var c = b.length;
            for (var d = 0; d < c; d++) Object.assign(a, b[d])
        };
        a.deepFreezeRootNode = function(c) {
            if (b("isNode")(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.recurseDeepFreeze = function(c) {
            if (b("isNode")(c) || !a.shouldRecurseFreeze(c)) return;
            Object.freeze(c);
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && a.recurseDeepFreeze(c[d]);
            Object.seal(c)
        };
        a.shouldRecurseFreeze = function(b) {
            return typeof b === "object" && !(b instanceof a) && b !== null
        };
        return a
    }();
    a._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
    f["default"] = a
}), 66);
__d("mergeHelpers", ["invariant", "FbtResultBase"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 36,
        j = function(a) {
            return typeof a !== "object" || a instanceof Date || a === null || a instanceof c("FbtResultBase")
        },
        k = {
            MAX_MERGE_DEPTH: i,
            isTerminal: j,
            normalizeMergeArg: function(a) {
                return a == null ? {} : a
            },
            checkMergeArrayArgs: function(a, b) {
                Array.isArray(a) && Array.isArray(b) || h(0, 3714, a, b)
            },
            checkMergeObjectArgs: function(a, b) {
                k.checkMergeObjectArg(a), k.checkMergeObjectArg(b)
            },
            checkMergeObjectArg: function(a) {
                !j(a) && !Array.isArray(a) || h(0, 3715, a)
            },
            checkMergeIntoObjectArg: function(a) {
                (!j(a) || typeof a === "function") && !Array.isArray(a) || h(0, 3716, a)
            },
            checkMergeLevel: function(a) {
                a < i || h(0, 3717)
            },
            checkArrayStrategy: function(a) {
                a == null || a in k.ArrayStrategies || h(0, 3718)
            },
            ArrayStrategies: {
                Clobber: "Clobber",
                Concat: "Concat",
                IndexByIndex: "IndexByIndex"
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("ImmutableObject", ["invariant", "ImmutableValue", "mergeHelpers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("mergeHelpers").checkMergeObjectArgs,
        i = b("mergeHelpers").isTerminal,
        j = "_DONT_EVER_TYPE_THIS_SECRET_KEY";

    function k(a) {
        a instanceof b("ImmutableValue") || g(0, 3884)
    }
    var l = function(c) {
        babelHelpers.inheritsLoose(a, c);

        function a() {
            var a;
            a = c.call(this, b("ImmutableValue")[j]) || this;
            b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a), arguments);
            return a
        }
        a.set = function(b, c) {
            k(b);
            typeof c === "object" && c !== void 0 && !Array.isArray(c) || g(0, 3885);
            return new a(b, c)
        };
        a.setProperty = function(b, c, d) {
            var e = {};
            e[c] = d;
            return a.set(b, e)
        };
        a.deleteProperty = function(b, c) {
            var d = {};
            for (var e in b) e !== c && Object.prototype.hasOwnProperty.call(b, e) && (d[e] = b[e]);
            return new a(d)
        };
        a.setDeep = function(a, b) {
            k(a);
            return m(a, b)
        };
        a.values = function(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };
        return a
    }(b("ImmutableValue"));

    function m(a, c) {
        h(a, c);
        var d = {},
            e = Object.keys(a);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            !Object.prototype.hasOwnProperty.call(c, g) ? d[g] = a[g] : i(a[g]) || i(c[g]) ? d[g] = c[g] : d[g] = m(a[g], c[g])
        }
        g = Object.keys(c);
        for (f = 0; f < g.length; f++) {
            e = g[f];
            if (Object.prototype.hasOwnProperty.call(a, e)) continue;
            d[e] = c[e]
        }
        return a instanceof b("ImmutableValue") ? new l(d) : c instanceof b("ImmutableValue") ? new l(d) : d
    }
    e.exports = l
}), null);
__d("keyMirrorRecursive", ["invariant", "isTruthy"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function a(b, d) {
        var e = {};
        i(b) || h(0, 580);
        for (var f in b) {
            if (!Object.prototype.hasOwnProperty.call(b, f)) continue;
            var g = b[f],
                j = c("isTruthy")(d) ? d + "." + f : f;
            i(g) ? g = a(g, j) : g = j;
            e[f] = g
        }
        return e
    };

    function i(a) {
        return a instanceof Object && !Array.isArray(a)
    }
    b = a;
    g["default"] = b
}), 98);
__d("PagePluginEvents", ["ImmutableObject", "keyMirrorRecursive"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("ImmutableObject"))(c("keyMirrorRecursive")({
        page_plugin: {
            tab: {
                configured: "",
                click: "",
                render: ""
            },
            messages: {
                send: "",
                logged_out: "",
                invalid_height: ""
            }
        }
    }));
    b = a;
    g["default"] = b
}), 98);
__d("XPagePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/page/logging/", {})
}), null);
__d("PagePluginLogger", ["AsyncRequest", "XPagePluginLoggingController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.notify = function(a, b, d) {
            var e = c("XPagePluginLoggingController").getURIBuilder().getURI();
            new(c("AsyncRequest"))().setURI(e).setMethod("POST").setData({
                event_name: a,
                page_id: this.$1,
                tab: b,
                data: Object.assign(d ? d : {}, {
                    refererURL: this.$2
                })
            }).send()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("GridItem.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.alignv,
            d = a.alignh,
            e = a.className;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["alignv", "alignh", "className"]);
        return i.jsx("td", babelHelpers["extends"]({}, a, {
            className: c("joinClasses")(e, "_51m-" + (b === "top" ? " vTop" : "") + (b === "middle" ? " vMid" : "") + (b === "bottom" ? " vBot" : "") + (d === "left" ? " hLeft" : "") + (d === "center" ? " hCent" : "") + (d === "right" ? " hRght" : ""))
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("Grid.react", ["cx", "GridItem.react", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props,
                d = a.alignh,
                e = a.alignv,
                f = a.children,
                g = a.cols,
                h = a.fixed,
                j = a.spacing,
                k = i.Children.count(f),
                l = [],
                m = [],
                n = 0;
            i.Children.forEach(f, function(a, f) {
                if (a === null || a === void 0) return;
                var o = a.type === b.GridItem;
                n += o ? Math.max(a.props.colSpan || 0, 1) : 1;
                var p = n === g ? "_51mw" : "";
                o = o ? i.cloneElement(a, {
                    key: a.key || f,
                    alignh: a.props.alignh || d,
                    alignv: a.props.alignv || e,
                    className: c("joinClasses")(a.props.className, j, p)
                }) : i.jsx(c("GridItem.react"), {
                    alignh: d,
                    alignv: e,
                    className: c("joinClasses")(j, p),
                    children: a
                }, a.key || f);
                m.push(o);
                if (n % g === 0 || f + 1 === k) {
                    if (h === !0 && n < g) {
                        for (p = n; p < g; p++) m.push(i.jsx(c("GridItem.react"), {}, f + p));
                        n = g
                    }
                    l.push(i.jsx("tr", {
                        className: "_51mx",
                        children: m
                    }, f));
                    m = [];
                    n = 0
                }
            });
            return i.jsx("table", babelHelpers["extends"]({}, this.props, {
                className: c("joinClasses")(this.props.className, "uiGrid _51mz" + (h === !0 ? " _5f0n" : "")),
                cellSpacing: "0",
                cellPadding: "0",
                children: i.jsx("tbody", {
                    children: l
                })
            }))
        };
        return b
    }(i.Component);
    a.GridItem = c("GridItem.react");
    g["default"] = a
}), 98);
__d("isKeyActivation", ["Keys"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = 0,
            d = a.charCode;
        a = a.keyCode;
        d != null && d !== 0 ? b = d : a != null && a !== 0 && (b = a);
        return [c("Keys").RETURN, c("Keys").SPACE].includes(b)
    }
    g["default"] = a
}), 98);
__d("KeyActivationToClickHOC.react", ["isKeyActivation", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b, d;
        return d = b = function(b) {
            babelHelpers.inheritsLoose(d, b);

            function d() {
                var a;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                a = b.call.apply(b, [this].concat(e)) || this;
                a.$2 = function(b) {
                    c("isKeyActivation")(b) && (b.preventDefault(), b.stopPropagation(), a.$1 && a.$1.click())
                };
                a.$3 = function(b) {
                    a.$1 = b
                };
                a.$1 = null;
                return a
            }
            var e = d.prototype;
            e.render = function() {
                return h.jsx(a, babelHelpers["extends"]({
                    keyActivationToClickEvent: this.$2,
                    keyActivationToClickRef: this.$3
                }, this.props))
            };
            return d
        }(h.Component), b.displayName = "KeyActivationToClickHOC", d
    }
    g["default"] = a
}), 98);
__d("ShimButton.react", ["KeyActivationToClickHOC.react", "emptyFunction", "killswitch", "prop-types", "react"], (function(a, b, c, d, e, f) {
    var g, h = g || b("react");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function(a) {
                c.props.keyActivationToClickRef(a), c.props.onRef(a)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props,
                c = a.children,
                d = a.form,
                e = a.inline,
                f = a.keyActivationToClickEvent;
            a.keyActivationToClickRef;
            a.onRef;
            var g = a.pressed,
                i = a.role;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "form", "inline", "keyActivationToClickEvent", "keyActivationToClickRef", "onRef", "pressed", "role"]);
            e = e ? "span" : "div";
            d === "link" && (e = "a");
            f = (d = {}, d[b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS") ? "onKeyPress" : "onKeyDown"] = f, d);
            return h.jsx(e, babelHelpers["extends"]({}, a, {
                "aria-pressed": g,
                ref: this.$1,
                role: (d = i) != null ? d : "button"
            }, f, {
                children: c
            }))
        };
        return c
    }(h.Component);
    a.defaultProps = {
        form: "none",
        inline: !1,
        keyActivationToClickEvent: b("emptyFunction"),
        keyActivationToClickRef: b("emptyFunction"),
        onClick: b("emptyFunction"),
        onRef: b("emptyFunction"),
        tabIndex: "0"
    };
    a.propTypes = {
        children: b("prop-types").any,
        form: b("prop-types").oneOf(["none", "link"]),
        inline: b("prop-types").bool,
        tabIndex: b("prop-types").oneOf(["-1", "0", -1, 0]),
        onClick: b("prop-types").func,
        onRef: b("prop-types").func
    };
    e.exports = b("KeyActivationToClickHOC.react")(a)
}), null);
__d("PluginTabItem.react", ["cx", "ShimButton.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this,
                b = this.props.tab.key;
            return i.jsx(c("ShimButton.react"), {
                className: "_eg_" + (this.props.activeTabKey === b ? " _eh2" : ""),
                onClick: function() {
                    return a.props.onSelected(b)
                },
                children: i.jsx("div", {
                    className: "_eh3",
                    children: this.props.tab.title
                })
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("PluginTabControl.react", ["cx", "Grid.react", "PluginTabItem.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this;
            return i.jsx(c("Grid.react"), {
                className: "_4v3l",
                cols: this.props.tabs.length,
                fixed: !0,
                children: this.props.tabs.map(function(b) {
                    return i.jsx(c("Grid.react").GridItem, {
                        className: "_4v3m",
                        children: i.jsx(c("PluginTabItem.react"), {
                            activeTabKey: a.props.activeTabKey,
                            tab: b,
                            onSelected: a.props.onTabSelected
                        })
                    }, b.key)
                })
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("XPluginTabAsyncRendererController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/tab/renderer/", {
        key: {
            type: "String",
            required: !0
        },
        config_json: {
            type: "String",
            required: !0
        },
        cursor: {
            type: "String"
        }
    })
}), null);
__d("PluginTabFetcher.react", ["csx", "cx", "AsyncRequest", "DOM", "DOMQuery", "Event", "ReactDOM", "XPluginTabAsyncRendererController", "XUISpinner.react", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                isFetchingComponent: !1,
                asyncContentLoaded: !1
            };
            b.hasMoreContent = !0;
            b.isLoadingContent = !1;
            return b
        }
        var e = b.prototype;
        e.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.isActive === this.props.isActive || !a.isActive) return;
            this.$1()
        };
        e.componentDidMount = function() {
            this.props.isActive && this.$1()
        };
        e.$2 = function() {
            var a = this.refs.container,
                b = a.clientHeight,
                c = a.children[0].clientHeight;
            a = a.scrollTop;
            var d = 100;
            !this.isLoadingContent && this.hasMoreContent && a + b + d > c && (this.isLoadingContent = !0, this.$3())
        };
        e.$3 = function() {
            var a = this,
                b = this.props.tab.configData;
            b = c("XPluginTabAsyncRendererController").getURIBuilder().setString("key", this.props.tab.key).setString("config_json", JSON.stringify(b)).setString("cursor", this.cursor).getURI();
            new(c("AsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b) {
                a.setState({
                    isFetchingComponent: !1,
                    asyncContentLoaded: !0
                }, function() {
                    var e = b.payload;
                    a.isLoadingContent = !1;
                    if (a.hasMoreContent) {
                        var f = d("DOMQuery").scry(a.refs.container, "._1_lk");
                        f = f[f.length - 1];
                        c("DOM").appendContent(f, e.content.markup)
                    }
                })
            }).send()
        };
        e.$4 = function() {
            var a = this;
            this.scrollListener = c("Event").listen(this.refs.container, "scroll", function() {
                a.scrollTimeout && (clearTimeout(a.scrollTimeout), a.scrollTimeout = null), a.scrollTimeout = setTimeout(function() {
                    return a.$2()
                }, 250)
            });
            var b = d("DOMQuery").find(this.refs.container, "._10b6");
            c("Event").listen(b, "noMoreContent", function() {
                a.hasMoreContent = !1, a.scrollListener.remove()
            });
            c("Event").listen(b, "setCursor", function(b) {
                a.cursor = b.getData()
            })
        };
        e.$1 = function() {
            var a = this;
            if (!this.state.asyncContentLoaded && !this.state.isFetchingComponent) {
                this.setState({
                    isFetchingComponent: !0
                });
                var b = c("XPluginTabAsyncRendererController").getURIBuilder().setString("key", this.props.tab.key).setString("config_json", JSON.stringify(this.props.tab.configData)).getURI();
                new(c("AsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b) {
                    a.setState({
                        isFetchingComponent: !1,
                        asyncContentLoaded: !0
                    }, function() {
                        var e = b.payload;
                        c("DOM").setContent(d("ReactDOM").findDOMNode(a.refs.container), e.content.markup);
                        a.props.tab.canLoadMore && (a.cursor = "", a.$4())
                    })
                }).send()
            }
        };
        e.render = function() {
            return j.jsxs("div", {
                className: this.props.isActive ? "" : "hidden_elem",
                children: [j.jsx("div", {
                    style: {
                        maxHeight: this.props.tabHeight + "px"
                    },
                    className: "_10b4" + (this.state.isFetchingComponent ? " hidden_elem" : ""),
                    ref: "container"
                }), j.jsx("div", {
                    className: "_10b5" + (this.state.isFetchingComponent ? "" : " hidden_elem"),
                    children: j.jsx(c("XUISpinner.react"), {
                        className: "_4g7o",
                        size: "large"
                    })
                })]
            })
        };
        return b
    }(j.Component);
    g["default"] = a
}), 98);
__d("PluginTabContainer.react", ["cx", "PluginTabControl.react", "PluginTabFetcher.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                activeTabKey: b.props.activeTabKey
            };
            return b
        }
        var d = b.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.props.tabs.map(function(b) {
                return a.onTabLoaded(b)
            })
        };
        d.onTabLoaded = function(a) {};
        d.onTabSelected = function(a) {
            this.setState({
                activeTabKey: a
            })
        };
        d.render = function() {
            var a = this,
                b = this.props.tabs.length;
            return b === 0 ? null : i.jsxs("div", {
                children: [b > 1 ? i.jsx(c("PluginTabControl.react"), {
                    tabs: this.props.tabs,
                    activeTabKey: this.state.activeTabKey,
                    onTabSelected: function(b) {
                        return a.onTabSelected(b)
                    }
                }) : null, i.jsx("div", {
                    className: "_2hkj",
                    children: this.props.tabs.map(function(b) {
                        return i.jsx(c("PluginTabFetcher.react"), {
                            tab: b,
                            isActive: b.key === a.state.activeTabKey,
                            tabHeight: a.props.tabHeight
                        }, b.key)
                    })
                })]
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}), 98);
__d("PagePluginTabContainer.react", ["PagePluginEvents", "PagePluginLogger", "PluginTabContainer.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            d = a.call(this, b, d) || this;
            d.$PagePluginTabContainer1 = new(c("PagePluginLogger"))(b.pageID, b.refererURI);
            return d
        }
        var d = b.prototype;
        d.onTabLoaded = function(a) {
            this.$PagePluginTabContainer1.notify(c("PagePluginEvents").page_plugin.tab.configured, a.key)
        };
        d.onTabSelected = function(b) {
            this.$PagePluginTabContainer1.notify(c("PagePluginEvents").page_plugin.tab.click, b), a.prototype.onTabSelected.call(this, b)
        };
        return b
    }(c("PluginTabContainer.react"));
    g["default"] = a
}), 98);
__d("ReactXHPContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c
}), 98);
__d("ReactRenderer", ["invariant", "$", "ReactDOM", "ReactDOMComet", "ReactXHPContext", "nullthrows", "react", "unmountComponentOnTransition", "unmountConcurrentComponentOnTransition"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || b("react"),
        j = 8;

    function k(a, c, d) {
        a = b("ReactDOM").render(a, c, d);
        b("unmountComponentOnTransition")(a, c);
        return a
    }

    function l(a, c, d) {
        c = b("ReactDOMComet").createRoot(c, d);
        d = c.render(a);
        b("unmountConcurrentComponentOnTransition")(c);
        return d
    }

    function m(a, c, d) {
        c = b("ReactDOMComet").createRoot(c, d);
        return c.render(a)
    }

    function n(a, b, c, d) {
        a = i.createElement(a, b);
        return k(a, c, d)
    }

    function o(a, b, c, d) {
        a = i.createElement(a, b);
        return p(a, c, d)
    }

    function p(a, c, d) {
        return b("ReactDOM").render(a, c, d)
    }

    function a(a, c, d, e) {
        return n(a, c, b("$")(d), e)
    }

    function c(a, c, d, e) {
        return o(a, c, b("$")(d), e)
    }

    function q(a) {
        var c = a.acrossTransitions,
            d = a.bigPipeContext,
            e = a.clobberSiblings,
            f = a.concurrentRootOptions,
            g = a.dummyElem,
            h = a.elementInitial;
        a = a.preloader;
        var j = a ? a.getContextProvider() : null;
        d = i.jsx(b("ReactXHPContext").Provider, {
            value: {
                bigPipeContext: d
            },
            children: h
        });
        j && (d = i.jsx(j, {
            value: a,
            children: d
        }));
        e ? h = b("nullthrows")(g.parentNode, "Error: container doesn't have a parent") : (h = document.createComment(" react-mount-point-unstable "), r(g, h));
        return f != null ? c ? m(d, h, f) : l(d, h, f) : c ? p(d, h) : k(d, h)
    }

    function d(a) {
        var b = a.concurrentRootOptions,
            c = a.constructor,
            d = a.props,
            e = a.dummyElem,
            f = a.acrossTransitions,
            g = a.clobberSiblings,
            h = a.preloader;
        a = a.bigPipeContext;
        return q({
            elementInitial: i.createElement(c, d),
            dummyElem: e,
            acrossTransitions: f,
            clobberSiblings: g,
            preloader: h,
            bigPipeContext: a,
            concurrentRootOptions: b
        })
    }

    function r(a, c) {
        a.tagName === "NOSCRIPT" || g(0, 3540);
        var d = b("nullthrows")(a.parentNode, "Error: container doesn't have a parent"),
            e = a.previousSibling;
        if (e && e.nodeType === j && e.nodeValue === " end-react-placeholder ") {
            do d.removeChild(e), e = b("nullthrows")(a.previousSibling, "Error: malformed placeholder"); while (!(e.nodeType === j && e.nodeValue === " begin-react-placeholder "));
            d.removeChild(e)
        }
        d.replaceChild(c, a)
    }
    e.exports = {
        renderComponent: k,
        constructAndRenderComponent: n,
        constructAndRenderComponentByID: a,
        constructAndRenderComponentAcrossTransitions: o,
        constructAndRenderComponentByIDAcrossTransitions: c,
        constructAndRenderComponentIntoComment_DO_NOT_USE: d,
        constructAndRenderElementIntoComment_DO_NOT_USE: q,
        constructAndRenderComponent_DEPRECATED: o,
        constructAndRenderComponentByID_DEPRECATED: c
    }
}), null);
__d("MaybeNativePromise", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    c = a.Promise || b("Promise");
    b("Promise").resolve();
    d = c;
    f["default"] = d
}), 66);