; /*FB_PKG_DELIM*/

__d("PercentVisible", [], (function(a, b, c, d, e, f) {
    a = -1;
    b = 0;
    c = 50;
    d = 100;
    f.NO_VISIBLE = a;
    f.VISIBLE_0_PCT = b;
    f.VISIBLE_50_PCT = c;
    f.VISIBLE_100_PCT = d
}), 66);
__d("CometMetricsChannel2ViewabilityFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1960868");
    c = b("FalcoLoggerInternal").create("comet_metrics_channel2_viewability", a);
    e.exports = c
}), null);
__d("getCentralImpressionScrollSpeed", ["Event"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0,
        h = Date.now(),
        i = null,
        j = null;

    function a(a) {
        b("Event").listen(window, "scroll", function() {
            j && clearTimeout(j), j = setTimeout(function() {
                return a()
            }, 100)
        }, b("Event").Priority.NORMAL, {
            passive: !0
        })
    }

    function k() {
        var a = window.scrollY,
            b = Date.now();
        if (i != null && b !== h) {
            var c = a - i;
            g = c / (b - h) * 1e3
        }
        i = a;
        h = b
    }
    a(function() {
        g = 0, i = null
    });
    b("Event").listen(window, "scroll", function() {
        return k()
    }, b("Event").Priority.NORMAL, {
        passive: !0
    });
    e.exports = function() {
        return g
    }
}), null);
__d("getCentralImpressionTimeAfterRefresh", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    window.addEventListener("load", function() {
        g = Date.now()
    }, {
        passive: !0
    });

    function a() {
        return g != null ? Date.now() - g : 0
    }
    f["default"] = a
}), 66);
__d("ghlTestUBT", ["cr:1543261", "cr:334"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1543261") && b("cr:1543261")(), g["default"] = b("cr:334")
}), 98);
__d("GHLBox", ["FBLogger", "GhlTennisKnobsConfig", "Promise", "WebStorage", "gkx", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("json-bigint").__setRef("GHLBox"),
        i = atob("YXJlc19sYXN0X3NpZ25hbF9mbHVzaA=="),
        j = atob("YmR6X3BsYXliYWNrX3N0YXRl"),
        k = 36,
        l = c("gkx")("3499"),
        m = c("GhlTennisKnobsConfig").ghlbox_log_validity_in_mins * 60 * 1e3,
        n = c("GhlTennisKnobsConfig").ghlbox_initialize_in_mins * 60 * 1e3;
    a = 3;
    d = function() {
        return new(b("Promise"))(function(a) {
            h.onReady(function(b) {
                var c = o(b, !0);
                b = o(b);
                if (c === 0 && b === 0) return a(!1);
                if (c !== b) {
                    p(Date.now());
                    return a(!0)
                }
                return Date.now() - b <= m ? a(!0) : a(!1)
            })
        })
    };
    var o = function(a, b) {
        b === void 0 && (b = !1);
        var d = c("WebStorage").getLocalStorageForRead();
        if (!d || !l) return 0;
        var e;
        if (!b) {
            b = (b = d.getItem(i)) != null ? b : "";
            e = Number.parseInt(b, 10)
        } else {
            b = (d = (a = a.parse(d.getItem(j))) == null ? void 0 : a.session_key) != null ? d : "";
            e = Number.parseInt(b, k)
        }
        return !Number.isFinite(e) ? 0 : e
    };
    e = function() {
        var a = c("WebStorage").getLocalStorage();
        if (!a || !l) return;
        if (a.getItem(i) !== null) return;
        if (a.getItem(j) !== null) return;
        p(Date.now() - n)
    };
    var p = function(a) {
        h.onReady(function(b) {
            var d = c("WebStorage").getLocalStorage();
            if (d && l) {
                var e = a.toString();
                try {
                    d.setItem(i, e)
                } catch (a) {
                    c("FBLogger")("GHLBox").warn("Exception while writing to local storage exception: %s, tss: %s, tss.length: (%d)", a, e, e.length)
                }
                e = {
                    session_key: a.toString(k),
                    buffer_length: 60
                };
                d.setItem(j, b.stringify(e))
            }
        })
    };
    f = p;
    d = d;
    e = e;
    g.MinimumHiddenAdsToUpdateLocalStorage = a;
    g.s = f;
    g.r = d;
    g.i = e
}), 98);