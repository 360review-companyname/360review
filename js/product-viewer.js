!(function (t) { 
    function e(r) {
        if (n[r]) return n[r].exports;
        const o = (n[r] = { exports: {} });
        return t[r].call({}, o, o.exports, e), (o.l = true), o.exports;
    }
    const n = {};
    (e.m = t),
        (e.d = (t, n, r) => Object.defineProperty(t, n, { get: r })),
        (e.n = function (t) {
            const n = t.__esModule ? () => t.default : () => t;
            return e.d(n, "a", n), n;
        }),
        e((e.s = 58));
})([
    () => true,
    () => true,
    () => true,
    function (t, e, n) {
        const o = n(0),
            u = function (t, e, n) {
                var c,
                    f,
                    a,
                    y = u.G ? o : o[e] || (o[e] = {}),
                    _ = window[e];
                    u.G && (n = e);
                for (c in n)
                    ((f = !u.F && _ && void 0 !== _[c]) && c in y) || ((a = f ? _[c] : n[c]), y[c] = a);
            };

            (u.S = 4),
            (t.exports = u);
    },
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    () => true,
    (t, e, n) => n(69),
    () => true,
    function (t, e, n) {
        const o = n.n({ default: window.Promise, __esModule: true }),
            s = n.n(n(60)),
            c = n.n({ default: n(63), __esModule: true }),
            a = n.n({}),
            h = n.n(n(64)),
            v = n.n(n(65)),
            m = n.n(n(68)),
            g = n.n(n(70)),
            x = n.n((n.n({}), n(71))),
            O = n.n(n(72)),
            S = n.n(n.n(n(73)), () => true),
            L = (function (t) {
                function e(t) {
                    var n = t.element,
                        r = t.imagePath,
                        i = t.filePrefix,
                        u = void 0 === i ? "img" : i,
                        f = t.fileExtension,
                        l = void 0 === f ? ".jpg" : f,
                        p = t.numberOfImages,
                        v = void 0 === p ? 36 : p;
                    h()(this, e);
                    var d = m()(this, (e.__proto__ || a()(e)).call(this));
                    return (
                        (d.imagePath = null),
                        (d.filePrefix = null),
                        (d.fileExtension = null),
                        (d.images = []),
                        (d.numberOfImages = 0),
                        (d.$element = null),
                        (d.$image = null),
                        (d.dragging = false),
                        (d.index = 0),
                        (d.animateInterval = null),
                        (d.pressMouseX = null),
                        (d.pressIndex = 0),
                        c()(d, {
                            imagePath: r,
                            filePrefix: u,
                            fileExtension: l,
                            numberOfImages: v,
                        }),
                        (d.$element = n),
                        (d.images = []
                            .concat(s()(Array(v).keys()))
                            .map(function (t) {
                                const e = "" + u + O()(t + 1, 2, "0") + l;
                                return x.a.join(r, e);
                            })),
                        d.$element.classList.add("product-viewer"),
                        o.a.all(d.images.map((t) => window.Promise)).then(() => d.setup()),
                        d
                    );
                }
                return (
                    g()(e, t),
                    v()(e, [
                        {
                            key: "setup",
                            value: function () {
                                (this.onPress = this.onPress.bind(this)),
                                    (this.onRelease = this.onRelease.bind(this)),
                                    (this.onMove = this.onMove.bind(this)),
                                    (this.updateIndex = this.updateIndex.bind(this)),
                                    this.$element.addEventListener(
                                        "mousedown",
                                        this.onPress,
                                        false
                                    ),
                                    document.addEventListener(
                                        "mouseup",
                                        this.onRelease,
                                        false
                                    ),
                                    document.addEventListener(
                                        "mousemove",
                                        this.onMove,
                                        false
                                    ),
                                    (this.$image = new Image()),
                                    (this.$image.src = this.images[0]),
                                    this.$image.classList.add("product-viewer__image"),
                                    this.$element.appendChild(this.$image),
                                    this.emit("loaded");
                            },
                        },
                        {
                            key: "onPress",
                            value: function (t) {
                                t.preventDefault(),
                                    (this.dragging = true),
                                    this.emit("press"),
                                    this.$element.classList.add(
                                        "product-viewer--js-press-active"
                                    ),
                                    (this.pressMouseX = this._getPageXByEvent(t)),
                                    (this.pressIndex = this.index);
                            },
                        },
                        {
                            key: "onRelease",
                            value: function () {
                                (this.dragging = false),
                                    this.emit("release", {
                                        index: this.index,
                                        image: this.images[this.index],
                                    }),
                                    (this.pressMouseX = null),
                                    this.$element.classList.remove(
                                        "product-viewer--js-press-active"
                                    );
                            },
                        },
                        {
                            key: "_getPageXByEvent",
                            value: function (t) {
                                return t.touches ? t.touches[0].pageX : t.pageX;
                            },
                        },
                        {
                            key: "updateIndex",
                            value: function (t) {
                                if (this.index === t) return false;
                                (this.index = t),
                                    (this.$image.src = this.images[t]),
                                    this.emit("index", t);
                            },
                        },
                        {
                            key: "onMove",
                            value: function (t) {
                                if (!this.dragging) return true;
                                this.animateInterval && (clearInterval(this.animateInterval), (this.animateInterval = null));
                                var e = this._getPageXByEvent(t) - (this.pressMouseX || 0),
                                    n = this.numberOfImages / this.$element.offsetWidth,
                                    r = Math.round(e * n) % this.numberOfImages;
                                r *= +1;
                                var o = (this.pressIndex + r) % this.numberOfImages;
                                (o = o < 0 ? this.numberOfImages - Math.abs(o) : o),
                                    this.updateIndex(o),
                                    this.emit("delta", {
                                        x: e,
                                        numberOfImages: this.numberOfImages,
                                        offsetIndex: r,
                                    });
                            },
                        },
                    ]),
                    e
                );
            })(n(73).EventEmitter);
        (L.easings = {
            EASE_LINEAR: S()(0, 0, 1, 1),
            EASE: S()(0.25, 0.1, 0.25, 1),
            EASE_IN: S()(0, 0, 1, 0.5),
            EASE_IN_OUT: S()(0.42, 0, 0.58, 1),
            EASE_OUT: S()(0.61, 0.26, 0.08, 1.46),
        }),
            (window.ProductViewer = L),
            (e.default = L);
    },
    function (t, e, n) {
        n(69), (t.exports = n(0).Promise);
    },
    function (t, e, n) {
        e.__esModule = true;
        const o = ((t) => t)({ default: n(62)});
        e.default = (t) => (0, o.default)(t);
    },
    () => true,
    function (t, e, n) {
        n(3)(4, "Array", { from: (t) => {} }), (t.exports = n(0).Array.from);
    },
    function (t, e, n) {
        n(3)(() => true, "Object", { assign: Object.assign }), (t.exports = n(0).Object.assign);
    },
    function (t, e) {
        (e.__esModule = true), (e.default = () => {});
    },
    function (t, e, n) {
        e.__esModule = true;
        const o = ((t) => t)({ default: n(67)});
        e.default = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    (e[n].writable = true), (0, o.default)(t, e[n].key, e[n]);
                }
            }
            return function (e, n, r) {
                return t(e.prototype, n), r, e;
            };
        })();
    },
    () => true,
    function (t, e, n) {
        const r = n(0).Object;
        t.exports = (t, e, n) => r.defineProperty(t, e, n);
    },
    function (t, e) {
        e.__esModule = true;
        e.default = (t) => t;
    },
    function (t, e, n) {
        n(3)(4, "Object", {
            create: () => {},
            defineProperty: () => {},
        });
    },
    function (t, e, n) {
        e.__esModule = true;
        const c = n(56);
        e.default = (t, e) => (t.prototype = (0, (t, e) => n(0).Object.create(t, e))(e.prototype, {}));
    },
    function (t, e) {
        e.join = function () {
            return [...arguments].join('/');
        };
    },
    function (t, e, n) {
        function r(t, e, n) {
            if (((t += ""), (e -= t.length) <= 0)) return t;
            for (var r = ""; ; ) {
                if ((1 & e && (r += n), !(e >>= 1))) break;
                n += n;
            }
            return r + t;
        }
        t.exports = r;
    },
    function (t) {
        function n() {}
        (t.exports = n), (n.EventEmitter = n), (n.prototype.emit = () => {})
    },
]);
