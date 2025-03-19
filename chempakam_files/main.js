! function(t, e, i, n) {
    "use strict";

    function o(t, e) {
        var n, o, s, a = [],
            r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (s = i.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (e.selector ? a = i(e.selector) : (o = n.attr("data-fancybox") || "") ? a = (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : a = [n], (r = i(a).index(n)) < 0 && (r = 0), (s = i.fancybox.open(a, e, r)).$trigger = n))
    }
    if (t.console = t.console || {
            info: function(t) {}
        }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var s = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            a = i(t),
            r = i(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            d = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            h = function() {
                var t, i = e.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in n)
                    if (void 0 !== i.style[t]) return n[t];
                return "transitionend"
            }(),
            u = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            p = function(t, e) {
                var n = i.extend(!0, {}, t, e);
                return i.each(e, function(t, e) {
                    i.isArray(e) && (n[t] = e)
                }), n
            },
            f = function(t) {
                var n, o;
                return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, o = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), o)
            },
            g = function(t, e, n) {
                var o = this;
                o.opts = p({
                    index: n
                }, i.fancybox.defaults), i.isPlainObject(e) && (o.opts = p(o.opts, e)), i.fancybox.isMobile && (o.opts = p(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
            };
        i.extend(g.prototype, {
                init: function() {
                    var n, o, s = this,
                        a = s.group[s.currIndex].opts;
                    a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), o = "", i.each(a.buttons, function(t, e) {
                        o += a.btnTpl[e] || ""
                    }), n = i(s.translate(s, a.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(a.baseClass).data("FancyBox", s).appendTo(a.parentEl), s.$refs = {
                        container: n
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                        s.$refs[t] = n.find(".fancybox-" + t)
                    }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                },
                translate: function(t, e) {
                    var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        return void 0 === i[e] ? t : i[e]
                    })
                },
                addContent: function(t) {
                    var e, n = this,
                        o = i.makeArray(t);
                    i.each(o, function(t, e) {
                        var o, s, a, r, l, c = {},
                            d = {};
                        i.isPlainObject(e) ? (c = e, d = e.opts || e) : "object" === i.type(e) && i(e).length ? (d = (o = i(e)).data() || {}, (d = i.extend(!0, {}, d, d.options)).$orig = o, c.src = n.opts.src || d.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                            type: "html",
                            src: e + ""
                        }, c.opts = i.extend(!0, {}, n.opts, d), i.isArray(d.buttons) && (c.opts.buttons = d.buttons), i.fancybox.isMobile && c.opts.mobile && (c.opts = p(c.opts, c.opts.mobile)), s = c.type || c.opts.type, r = c.src || "", !s && r && ((a = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", c = i.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === r.charAt(0) && (s = "inline")), s ? c.type = s : n.trigger("objectNeedsType", c), c.contentType || (c.contentType = i.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = n.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = i.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === n.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === i.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [n, c])), "function" === i.type(n.opts.caption) && (c.opts.caption = n.opts.caption.apply(e, [n, c])), c.opts.caption instanceof i || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = r.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), n.group.push(c)
                    }), Object.keys(n.slides).length && (n.updateControls(), (e = n.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), a.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && d(e.requestId), e.requestId = c(function() {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
                            e.$refs.stage.show(), e.update(t)
                        }, i.fancybox.isMobile ? 600 : 250))
                    }), r.on("keydown.fb", function(t) {
                        var n = (i.fancybox ? i.fancybox.getInstance() : null).current,
                            o = t.keyCode || t.which;
                        if (9 != o) return !n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
                        n.opts.trapFocus && e.focus(t)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function() {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var e = this;
                    a.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, e) {
                    var n, o, s, a, r, l, c, d, h, p = this,
                        f = p.group.length;
                    if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                        if (t = parseInt(t, 10), !(s = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= f)) return !1;
                        if (n = p.firstRun = !Object.keys(p.slides).length, r = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, a = p.createSlide(t), f > 1 && ((s || a.index < f - 1) && p.createSlide(t + 1), (s || a.index > 0) && p.createSlide(t - 1)), p.current = a, p.currIndex = a.index, p.currPos = a.pos, p.trigger("beforeShow", n), p.updateControls(), a.forcedDuration = void 0, i.isNumeric(e) ? a.forcedDuration = e : e = a.opts[n ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o = p.isMoved(a), a.$slide.addClass("fancybox-slide--current"), n) return a.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.addClass("fancybox-is-open").trigger("focus"), p.loadSlide(a), void p.preload("image");
                        l = i.fancybox.getTranslate(r.$slide), c = i.fancybox.getTranslate(p.$refs.stage), i.each(p.slides, function(t, e) {
                            i.fancybox.stop(e.$slide, !0)
                        }), r.pos !== a.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (h = l.left - (r.pos * l.width + r.pos * r.opts.gutter), i.each(p.slides, function(t, n) {
                            n.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var o = n.pos * l.width + n.pos * n.opts.gutter;
                            i.fancybox.setTranslate(n.$slide, {
                                top: 0,
                                left: o - c.left + h
                            }), n.pos !== a.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > a.pos ? "next" : "previous")), u(n.$slide), i.fancybox.animate(n.$slide, {
                                top: 0,
                                left: (n.pos - a.pos) * l.width + (n.pos - a.pos) * n.opts.gutter
                            }, e, function() {
                                n.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === p.currPos && p.complete()
                            })
                        })) : e && a.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > a.pos ? "next" : "previous")), i.fancybox.animate(r.$slide, d, e, function() {
                            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), a.isLoaded ? p.revealContent(a) : p.loadSlide(a), p.preload("image")
                    }
                },
                createSlide: function(t) {
                    var e, n, o = this;
                    return n = (n = t % o.group.length) < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = i.extend(!0, {}, o.group[n], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), o.updateSlide(o.slides[t])), o.slides[t]
                },
                scaleToActual: function(t, e, n) {
                    var o, s, a, r, l, c = this,
                        d = c.current,
                        h = d.$content,
                        u = i.fancybox.getTranslate(d.$slide).width,
                        p = i.fancybox.getTranslate(d.$slide).height,
                        f = d.width,
                        g = d.height;
                    c.isAnimating || c.isMoved() || !h || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0, i.fancybox.stop(h), t = void 0 === t ? .5 * u : t, e = void 0 === e ? .5 * p : e, (o = i.fancybox.getTranslate(h)).top -= i.fancybox.getTranslate(d.$slide).top, o.left -= i.fancybox.getTranslate(d.$slide).left, r = f / o.width, l = g / o.height, s = .5 * u - .5 * f, a = .5 * p - .5 * g, f > u && ((s = o.left * r - (t * r - t)) > 0 && (s = 0), s < u - f && (s = u - f)), g > p && ((a = o.top * l - (e * l - e)) > 0 && (a = 0), a < p - g && (a = p - g)), c.updateCursor(f, g), i.fancybox.animate(h, {
                        top: a,
                        left: s,
                        scaleX: r,
                        scaleY: l
                    }, n || 366, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, n = this,
                        o = n.current,
                        s = o.$content;
                    n.isAnimating || n.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, i.fancybox.stop(s), e = n.getFitPos(o), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / s.width(),
                        scaleY: e.height / s.height()
                    }, t || 366, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, n, o, s, a = t.$content,
                        r = t.$slide,
                        l = t.width || t.opts.width,
                        c = t.height || t.opts.height,
                        d = {};
                    return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = n), (l *= o = Math.min(1, e / l, n / c)) > e - .5 && (l = e), (c *= o) > n - .5 && (c = n), "image" === t.type ? (d.top = Math.floor(.5 * (n - c)) + parseFloat(r.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), d.width = l, d.height = c, d)
                },
                update: function(t) {
                    var e = this;
                    i.each(e.slides, function(i, n) {
                        e.updateSlide(n, t)
                    })
                },
                updateSlide: function(t, e) {
                    var n = this,
                        o = t && t.$content,
                        s = t.width || t.opts.width,
                        a = t.height || t.opts.height,
                        r = t.$slide;
                    n.adjustCaption(t), o && (s || a || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o), i.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), n.trigger("onUpdate", t, e)
                },
                centerSlide: function(t) {
                    var e = this,
                        n = e.current,
                        o = n.$slide;
                    !e.isClosing && n && (o.siblings().css({
                        transform: "",
                        opacity: ""
                    }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(o, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function() {
                        o.css({
                            transform: "",
                            opacity: ""
                        }), n.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function(t) {
                    var e, n, o = t || this.current;
                    return !!o && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
                },
                updateCursor: function(t, e) {
                    var n, o, s = this,
                        a = s.current,
                        r = s.$refs.container;
                    a && !s.isClosing && s.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(n = s.canPan(t, e)) || s.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), i("[data-fancybox-zoom]").prop("disabled", !o), n ? r.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || s.group.length > 1) && "video" !== a.contentType && r.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var t, e = this,
                        i = e.current;
                    if (i && !e.isClosing && "image" === i.type && !i.hasError) {
                        if (!i.isLoaded) return !0;
                        if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function(t, e) {
                    var n = !1,
                        o = this.current,
                        s = o.$content;
                    return void 0 !== t && void 0 !== e ? n = t < o.width && e < o.height : s && (n = (n = i.fancybox.getTranslate(s)).width < o.width && n.height < o.height), n
                },
                canPan: function(t, e) {
                    var n = this.current,
                        o = null,
                        s = !1;
                    return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (s = this.getFitPos(n), void 0 !== t && void 0 !== e ? o = {
                        width: t,
                        height: e
                    } : n.isComplete && (o = i.fancybox.getTranslate(n.$content)), o && s && (s = Math.abs(o.width - s.width) > 1.5 || Math.abs(o.height - s.height) > 1.5)), s
                },
                loadSlide: function(t) {
                    var e, n, o, s = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                s.setImage(t);
                                break;
                            case "iframe":
                                s.setIframe(t);
                                break;
                            case "html":
                                s.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                                break;
                            case "ajax":
                                s.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function(e, i) {
                                        "success" === i && s.setContent(t, e)
                                    },
                                    error: function(e, i) {
                                        e && "abort" !== i && s.setError(t)
                                    }
                                })), n.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            default:
                                s.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var n, o = this;
                    setTimeout(function() {
                        var e = t.$image;
                        o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                    }, 50), o.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function() {
                        i(this).remove(), t.$ghost = null
                    }, n.onload = function() {
                        o.afterLoad(t)
                    }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t)
                },
                checkSrcset: function(e) {
                    var i, n, o, s, a = e.opts.srcset || e.opts.image.srcset;
                    if (a) {
                        o = t.devicePixelRatio || 1, s = t.innerWidth * o, (n = a.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, i) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === i) return e.url = t;
                                n && (e.value = n, e.postfix = t[t.length - 1])
                            }), e
                        })).sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var r = 0; r < n.length; r++) {
                            var l = n[r];
                            if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) {
                                i = l;
                                break
                            }
                        }!i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
                    }
                },
                setBigImage: function(t) {
                    var n = this,
                        o = e.createElement("img"),
                        s = i(o);
                    t.$image = s.one("error", function() {
                        n.setError(t)
                    }).one("load", function() {
                        var e;
                        t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                            t.$ghost && !n.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error")
                },
                resolveImageSlideSize: function(t, e, i) {
                    var n = parseInt(t.opts.width, 10),
                        o = parseInt(t.opts.height, 10);
                    t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), o > 0 && (t.width = Math.floor(o * e / i), t.height = o)
                },
                setIframe: function(t) {
                    var e, n = this,
                        o = t.opts.iframe,
                        s = t.$slide;
                    t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (n.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                    }), s.on("refresh.fb", function() {
                        var i, n = t.$content,
                            a = o.css.width,
                            r = o.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                i = e.contents().find("body")
                            } catch (t) {}
                            i && i.length && i.children().length && (s.css("overflow", "visible"), n.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === a && (a = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), n.css("width", a || "").css("max-width", ""), void 0 === r && (r = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), n.css("height", r || ""), s.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                        }
                    })) : n.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function(t, e) {
                    var n = this;
                    n.isClosing || (n.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), function(t) {
                        return t && t.hasOwnProperty && t instanceof i
                    }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), n.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function(t) {
                    var e, i = this,
                        n = t || i.current,
                        o = n.opts.caption,
                        s = n.opts.preventCaptionOverlap,
                        a = i.$refs.caption,
                        r = !1;
                    a.toggleClass("fancybox-caption--separate", s), s && o && o.length && (n.pos !== i.currPos ? ((e = a.clone().appendTo(a.parent())).children().eq(0).empty().html(o), r = e.outerHeight(!0), e.empty().remove()) : i.$caption && (r = i.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", r || ""))
                },
                adjustLayout: function(t) {
                    var e, i, n, o, s = t || this.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = o), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
                },
                revealContent: function(t) {
                    var e, n, o, s, a = this,
                        r = t.$slide,
                        l = !1,
                        c = !1,
                        d = a.isMoved(t),
                        h = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10), !d && t.pos === a.currPos && o || (e = !1), "zoom" === e && (t.pos === a.currPos && o && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) ? l = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - c.width / c.height) > .1), s && (c.opacity = .1, l.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), u(t.$content), void i.fancybox.animate(t.$content, l, o, function() {
                        a.isAnimating = !1, a.complete()
                    })) : (a.updateSlide(t), e ? (i.fancybox.stop(r), n = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), u(r), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(r, "fancybox-slide--current", o, function() {
                        r.removeClass(n).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === a.currPos && a.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), h || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === a.currPos && a.complete())))
                },
                getThumbPos: function(t) {
                    var e, n, o, s, a, r = !1,
                        l = t.$thumb;
                    return !(!l || !f(l[0])) && (e = i.fancybox.getTranslate(l), n = parseFloat(l.css("border-top-width") || 0), o = parseFloat(l.css("border-right-width") || 0), s = parseFloat(l.css("border-bottom-width") || 0), a = parseFloat(l.css("border-left-width") || 0), r = {
                        top: e.top + n,
                        left: e.left + a,
                        width: e.width - o - a,
                        height: e.height - n - s,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && r)
                },
                complete: function() {
                    var t, e = this,
                        n = e.current,
                        o = {};
                    !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) {
                        n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                    }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function(t) {
                    var e, i, n = this;
                    n.group.length < 2 || (i = n.slides[n.currPos + 1], (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e), i && i.type === t && n.loadSlide(i))
                },
                focus: function(t, n) {
                    var o, s, a = this,
                        r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    a.isClosing || ((o = (o = !t && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(r).filter(function() {
                        return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                    })).length ? (s = o.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
                },
                activate: function() {
                    var t = this;
                    i(".fancybox-container").each(function() {
                        var e = i(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t, e) {
                    var n, o, s, a, r, l, d, h = this,
                        p = h.current,
                        f = function() {
                            h.cleanUp(t)
                        };
                    return !(h.isClosing || (h.isClosing = !0, !1 === h.trigger("beforeClose", t) ? (h.isClosing = !1, c(function() {
                        h.update()
                    }), 1) : (h.removeEvents(), s = p.$content, n = p.opts.animationEffect, o = i.isNumeric(e) ? e : n ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(p.$slide) : n = !1, p.$slide.siblings().trigger("onReset").remove(), o && h.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), h.hideLoading(p), h.hideControls(!0), h.updateCursor(), "zoom" !== n || s && o && "image" === p.type && !h.isMoved() && !p.hasError && (d = h.getThumbPos(p)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), a = i.fancybox.getTranslate(s), l = {
                        top: a.top,
                        left: a.left,
                        scaleX: a.width / d.width,
                        scaleY: a.height / d.height,
                        width: d.width,
                        height: d.height
                    }, r = p.opts.zoomOpacity, "auto" == r && (r = Math.abs(p.width / p.height - d.width / d.height) > .1), r && (d.opacity = 0), i.fancybox.setTranslate(s, l), u(s), i.fancybox.animate(s, d, o, f), 0) : (n && o ? i.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, f) : !0 === t ? setTimeout(f, o) : f(), 0))))
                },
                cleanUp: function(e) {
                    var n, o, s, a = this,
                        r = a.current.opts.$orig;
                    a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (o = t.scrollX, s = t.scrollY, r.trigger("focus"), i("html, body").scrollTop(s).scrollLeft(o))), a.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var n, o = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        a = e && e.opts ? e : s.current;
                    if (a ? o.unshift(a) : a = s, o.unshift(s), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, o)), !1 === n) return n;
                    "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : r.trigger(t + ".fb", o)
                },
                updateControls: function() {
                    var t = this,
                        n = t.current,
                        o = n.index,
                        s = t.$refs.container,
                        a = t.$refs.caption,
                        r = n.opts.caption;
                    n.$slide.trigger("refresh"), r && r.length ? (t.$caption = a, a.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(o + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= t.group.length - 1), "image" === n.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function(t) {
                    var e = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function(t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.5.7",
                defaults: s,
                getInstance: function(t) {
                    var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof g && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                },
                open: function(t, e, i) {
                    return new g(t, e, i)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function() {
                    this.close(!0), r.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var i = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(i) && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function(t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    }
                },
                setTranslate: function(t, e) {
                    var i = "",
                        n = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                },
                animate: function(t, e, n, o, s) {
                    var a, r = this;
                    i.isFunction(n) && (o = n, n = null), r.stop(t), a = r.getTranslate(t), t.on(h, function(l) {
                        (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (r.stop(t), i.isNumeric(n) && t.css("transition-duration", ""), i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: a.width * e.scaleX,
                            height: a.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== s && t.removeClass(e), i.isFunction(o) && o(l))
                    }), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                        t.trigger(h)
                    }, n + 33))
                },
                stop: function(t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(h), t.off(h).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, i.fn.fancybox = function(t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, o) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, o), this
            }, r.on("click.fb-start", "[data-fancybox]", o), r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
                i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: i(this)
                })
            }),
            function() {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                    switch (e.type) {
                        case "mousedown":
                            t = i(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            i(".fancybox-button").removeClass("fancybox-focus"), i(this).is(t) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            i(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        i = function(e, i, n) {
            if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
                e = e.replace("$" + t, i || "")
            }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
        };
    t(document).on("objectNeedsType.fb", function(n, o, s) {
        var a, r, l, c, d, h, u, p = s.src || "",
            f = !1;
        a = t.extend(!0, {}, e, s.opts.media), t.each(a, function(e, n) {
            if (l = p.match(n.matcher)) {
                if (f = n.type, u = e, h = {}, n.paramPlace && l[n.paramPlace]) {
                    "?" == (d = l[n.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var o = 0; o < d.length; ++o) {
                        var a = d[o].split("=", 2);
                        2 == a.length && (h[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, n.params, s.opts[e], h), p = "function" === t.type(n.url) ? n.url.call(this, l, c, s) : i(n.url, l, c), r = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, s) : i(n.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) {
                    return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        }), f ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), "iframe" === f && (s.opts = t.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(s, {
            type: f,
            src: p,
            origSrc: s.src,
            contentSource: u,
            contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : p && (s.type = s.opts.defaultType)
    });
    var n = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, i = this;
            this[t].loaded ? setTimeout(function() {
                i.done(t)
            }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                i[t].loaded = !0, i.done(t)
            } : e.onload = function() {
                i[t].loaded = !0, i.done(t)
            }, document.body.appendChild(e))
        },
        done: function(e) {
            var i, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                events: {
                    onStateChange: function(t) {
                        0 == t.data && i.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                i.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, i) {
            e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
        }
    })
}(jQuery),
function(t, e, i) {
    "use strict";
    var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        },
        s = function(e) {
            var i = [];
            for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
                x: e[n].pageX,
                y: e[n].pageY
            }) : e[n].clientX && i.push({
                x: e[n].clientX,
                y: e[n].clientY
            });
            return i
        },
        a = function(t, e, i) {
            return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
                if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(e) {
            var i = t.getComputedStyle(e)["overflow-y"],
                n = t.getComputedStyle(e)["overflow-x"],
                o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
            return o || s
        },
        c = function(t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"), i(e).off(".fb.touch"), t.requestId && (o(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, d.prototype.ontouchstart = function(n) {
        var o = this,
            l = i(n.target),
            d = o.instance,
            h = d.current,
            u = h.$slide,
            p = h.$content,
            f = "touchstart" == n.type;
        if (f && o.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && u.length && l.length && !r(l) && !r(l.parent()) && (l.is("img") || !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!h || d.isAnimating || h.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
            o.realPoints = o.startPoints = s(n), o.startPoints.length && (h.touch && n.stopPropagation(), o.startEvent = n, o.canTap = !0, o.$target = l, o.$content = p, o.opts = h.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = d.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u[0].clientWidth), o.canvasHeight = Math.round(u[0].clientHeight), o.contentLastPos = null, o.contentStartPos = i.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            }, o.sliderStartPos = i.fancybox.getTranslate(u), o.stagePos = i.fancybox.getTranslate(d.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, i(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (o.isScrollable = c(l) || c(l.parent()), i.fancybox.isMobile && o.isScrollable || n.preventDefault(), (1 === o.startPoints.length || h.hasError) && (o.canPan ? (i.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, i.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = a(o.startPoints[0], o.startPoints[1]))))
        }
    }, d.prototype.onscroll = function(t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, d.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = s(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function(e) {
        var s, a = this,
            r = a.instance,
            l = a.isSwiping,
            c = a.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
            top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
            left: c
        }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = n(function() {
            a.sliderLastPos && (i.each(a.instance.slides, function(t, e) {
                var n = e.pos - a.instance.currPos;
                i.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left: a.sliderLastPos.left + n * a.canvasWidth + n * e.opts.gutter
                })
            }), a.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(a.distance) > 10) {
            if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
            r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, function(t, e) {
                var n, o;
                i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), o = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === r.current.pos && (a.sliderStartPos.top = n.top - o.top, a.sliderStartPos.left = n.left - o.left), i.fancybox.setTranslate(e.$slide, {
                    top: n.top - o.top,
                    left: n.left - o.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var t = this;
        a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), t.requestId = n(function() {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, d.prototype.limitMovement = function() {
        var t, e, i, n, o, s, a = this,
            r = a.canvasWidth,
            l = a.canvasHeight,
            c = a.distanceX,
            d = a.distanceY,
            h = a.contentStartPos,
            u = h.left,
            p = h.top,
            f = h.width,
            g = h.height;
        return o = f > r ? u + c : u, s = p + d, t = Math.max(0, .5 * r - .5 * f), e = Math.max(0, .5 * l - .5 * g), i = Math.min(r - f, .5 * r - .5 * f), n = Math.min(l - g, .5 * l - .5 * g), c > 0 && o > t && (o = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && o < i && (o = i + 1 - Math.pow(i - u - c, .8) || 0), d > 0 && s > e && (s = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && s < n && (s = n + 1 - Math.pow(n - p - d, .8) || 0), {
            top: s,
            left: o
        }
    }, d.prototype.limitPosition = function(t, e, i, n) {
        var o = this.canvasWidth,
            s = this.canvasHeight;
        return i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2), n > s ? e = (e = e > 0 ? 0 : e) < s - n ? s - n : e : e = Math.max(0, s / 2 - n / 2), {
            top: e,
            left: t
        }
    }, d.prototype.onZoom = function() {
        var e = this,
            s = e.contentStartPos,
            r = s.width,
            l = s.height,
            c = s.left,
            d = s.top,
            h = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            u = Math.floor(r * h),
            p = Math.floor(l * h),
            f = (r - u) * e.percentageOfImageAtPinchPointX,
            g = (l - p) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
            b = m - e.centerPointStartX,
            x = {
                top: d + (g + (v - e.centerPointStartY)),
                left: c + (f + b),
                scaleX: h,
                scaleY: h
            };
        e.canTap = !1, e.newWidth = u, e.newHeight = p, e.contentLastPos = x, e.requestId && o(e.requestId), e.requestId = n(function() {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function(t) {
        var n = this,
            a = n.isSwiping,
            r = n.isPanning,
            l = n.isZooming,
            c = n.isScrolling;
        if (n.endPoints = s(t), n.dMs = Math.max((new Date).getTime() - n.startTime, 1), n.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", n.onscroll, !0), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.isScrolling = !1, n.instance.isDragging = !1, n.canTap) return n.onTap(t);
        n.speed = 100, n.velocityX = n.distanceX / n.dMs * .5, n.velocityY = n.distanceY / n.dMs * .5, r ? n.endPanning() : l ? n.endZooming() : n.endSwiping(a, c)
    }, d.prototype.endSwiping = function(t, e) {
        var n = this,
            o = !1,
            s = n.instance.group.length,
            a = Math.abs(n.distanceX),
            r = "x" == t && s > 1 && (n.dMs > 130 && a > 10 || a > 50);
        n.sliderLastPos = null, "y" == t && !e && Math.abs(n.distanceY) > 50 ? (i.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200), o = n.instance.close(!0, 250)) : r && n.distanceX > 0 ? o = n.instance.previous(300) : r && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var t, e, n, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 366))
    }, d.prototype.endZooming = function() {
        var t, e, n, o, s = this,
            a = s.instance.current,
            r = s.newWidth,
            l = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, o = {
            top: e = s.contentLastPos.top,
            left: t,
            width: r,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(s.$content, o), r < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : r > a.width || l > a.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, r, l), i.fancybox.animate(s.$content, n, 150)))
    }, d.prototype.onTap = function(e) {
        var n, o = this,
            a = i(e.target),
            r = o.instance,
            l = r.current,
            c = e && s(e) || o.startPoints,
            d = c[0] ? c[0].x - i(t).scrollLeft() - o.stagePos.left : 0,
            h = c[0] ? c[0].y - i(t).scrollTop() - o.stagePos.top : 0,
            u = function(t) {
                var n = l.opts[t];
                if (i.isFunction(n) && (n = n.apply(r, [l, e])), n) switch (n) {
                    case "close":
                        r.close(o.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(o.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, h) : r.group.length < 2 && r.close(o.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(d > a[0].clientWidth + a.offset().left))) {
            if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
            else if (a.is(".fancybox-slide")) n = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                n = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(d - o.tapX) > 50 || Math.abs(h - o.tapY) > 50) return this;
                u("dblclick" + n)
            } else o.tapX = d, o.tapY = h, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? o.tapped = setTimeout(function() {
                o.tapped = null, r.isAnimating || u("click" + n)
            }, 500) : u("click" + n);
            return this
        }
    }, i(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var i = function(t) {
        this.instance = t, this.init()
    };
    e.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this,
                i = t.instance,
                n = i.group[i.currIndex].opts.slideShow;
            t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
        },
        set: function(t) {
            var i = this,
                n = i.instance,
                o = n.current;
            o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? i.isActive && "video" !== o.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed), i.timer = setTimeout(function() {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, o.opts.slideShow.speed)) : (i.stop(), n.idleSecondsCounter = 0, n.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.SlideShow;
            n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set()
        },
        "afterKeydown.fb": function(i, n, o, s, a) {
            var r = n && n.SlideShow;
            !r || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (s.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var i = e && e.SlideShow;
            i && i.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var i = e.fancybox.getInstance(),
            n = i && i.SlideShow;
        n && n.isActive && (t.hidden ? n.clear() : n.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var i = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], i = {}, n = 0; n < e.length; n++) {
            var o = e[n];
            if (o && o[1] in t) {
                for (var s = 0; s < o.length; s++) i[e[0][s]] = o[s];
                return i
            }
        }
        return !1
    }();
    if (i) {
        var n = {
            request: function(e) {
                (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[i.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[i.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(i.fullscreenchange, function() {
            var t = n.isFullscreen(),
                i = e.fancybox.getInstance();
            i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(), t.preventDefault(), n.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(t, e, i, n, o) {
            e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var i = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this,
                i = t.group,
                n = 0;
            e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, s = i.length; o < s && (i[o].thumb && n++, !(n > 1)); o++);
            n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n = this,
                o = n.instance,
                s = n.opts.parentEl,
                a = [];
            n.$grid || (n.$grid = e('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), n.$grid.on("click", "a", function() {
                o.jumpTo(e(this).attr("data-index"))
            })), n.$list || (n.$list = e('<div class="' + i + '__list">').appendTo(n.$grid)), e.each(o.group, function(e, i) {
                (t = i.thumb) || "image" !== i.type || (t = i.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), n.$list[0].innerHTML = a.join(""), "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + o.group.length * n.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, i, n = this,
                o = n.$list,
                s = n.$grid;
            n.instance.current && (i = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + n.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === n.opts.axis && (i.top < 0 || i.top > o.height() - e.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + i.top
            }, t) : "x" === n.opts.axis && (i.left < s.scrollLeft() || i.left > s.scrollLeft() + (s.width() - e.outerWidth())) && o.parent().stop().animate({
                scrollLeft: i.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && ((i = new n(e)).isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, i, n, o) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, i, n = e.fancybox.getInstance(),
            o = n.current || null;
        o && ("function" === e.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])), i = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), e.fancybox.open({
            src: n.translate(n, i),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    n.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, i) {
    "use strict";

    function n() {
        var e = t.location.hash.substr(1),
            i = e.split("-"),
            n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
        return {
            hash: e,
            index: n < 1 ? 1 : n,
            gallery: i.join("-")
        }
    }

    function o(t) {
        "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function s(t) {
        var e, i;
        return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
    }
    i.escapeSelector || (i.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), i(function() {
        !1 !== i.fancybox.defaults.hash && (i(e).on({
            "onInit.fb": function(t, e) {
                var i, o;
                !1 !== e.group[e.currIndex].opts.hash && (i = n(), (o = s(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1))
            },
            "beforeShow.fb": function(i, n, o, a) {
                var r;
                o && !1 !== o.opts.hash && (r = s(n)) && (n.currentHash = r + (n.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function() {
                    "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(i, n, o) {
                o && !1 !== o.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null)
            }
        }), i(t).on("hashchange.fb", function() {
            var t = n(),
                e = null;
            i.each(i(".fancybox-container").get().reverse(), function(t, n) {
                var o = i(n).data("FancyBox");
                if (o && o.currentHash) return e = o, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t)
        }), setTimeout(function() {
            i.fancybox.getInstance() || o(n())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var i = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, n) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var n = e.current,
                    o = (new Date).getTime();
                e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - i < 250 || (i = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function(t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                s = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = o ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                a = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
                r = "",
                l = "";
            for (a /= 2; a > 0;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, a -= 1;
            this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                a = this.coordinates(this.current()) + s,
                r = a + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], o.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, o.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) {
            return t(e)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, o.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function(t) {
            t <= e && t > n && (n = Number(t))
        }), "function" == typeof(o = t.extend({}, this.options, i[n])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, o.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(e, i) {
        var o = -1,
            s = this.width(),
            a = this.coordinates();
        return this.settings.freeDrag || t.each(a, t.proxy(function(t, r) {
            return "left" === i && e > r - 30 && e < r + 30 ? o = t : "right" === i && e > r - s - 30 && e < r - s + 30 ? o = t + 1 : this.op(e, "<", r) && this.op(e, ">", a[t + 1] !== n ? a[t + 1] : r - s) && (o = "left" === i ? t + 1 : t), -1 === o
        }, this)), this.settings.loop || (this.op(e, ">", a[this.minimum()]) ? o = e = this.minimum() : this.op(e, "<", a[this.maximum()]) && (o = e = this.maximum())), o
    }, o.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, o.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(t, e) {
        var i = this._items.length,
            o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, i, n, o = this.settings,
            s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
            s = e + 1
        } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            o = i + this._items.length,
            s = function(t) {
                return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? s(i) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var i, o = 1,
            s = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * o) : i = this._coordinates[s] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            o = t - this.relative(i),
            s = (o > 0) - (o < 0),
            a = this._items.length,
            r = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > a / 2 && (o += -1 * s * a), (n = (((t = i + o) - r) % a + a) % a + r) !== t && n - o <= l && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function(t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function() {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(e, i) {
        var o = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function() {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, o.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, n, s, a) {
        var r = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, r, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(c)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, o.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                s = n.data("owl.carousel");
            s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                s.register({
                    type: o.Type.Event,
                    name: i
                }), s.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, s))
            })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings,
                        n = i.center && Math.ceil(i.items / 2) || i.items,
                        o = i.center && -1 * n || 0,
                        s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o,
                        a = this._core.clones().length,
                        r = t.proxy(function(t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (s -= i.lazyLoadEager, n++)); o++ < n;) this.load(a / 2 + this._core.relative(s)), a && t.each(this._core.clones(this._core.relative(s)), r), s++
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, o.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, s = t(n),
                a = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: a
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: a
                }, "lazy")
            }, this)).attr("src", a) : s.is("source") ? s.one("load.owl.lazy", t.proxy(function() {
                this._core.trigger("loaded", {
                    element: s,
                    url: a
                }, "lazy")
            }, this)).attr("srcset", a) : ((o = new Image).onload = t.proxy(function() {
                s.css({
                    "background-image": 'url("' + a + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: a
                }, "lazy")
            }, this), o.src = a)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function() {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function() {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function() {
                n.update()
            }, 250))
        })
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            n = this._core.settings.lazyLoad,
            o = this._core.$stage.children().toArray().slice(e, i),
            s = [],
            a = 0;
        t.each(o, function(e, i) {
            s.push(t(i).height())
        }), (a = Math.max.apply(null, s)) <= 1 && n && this._previousHeight && (a = this._previousHeight), this._previousHeight = a, this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            a = t.attr("href");
        if (!a) throw new Error("Missing video URL.");
        if ((n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[a] = {
            type: i,
            id: n,
            width: o,
            height: s
        }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
    }, o.prototype.thumbnail = function(e, i) {
        var n, o, s = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"),
            r = "src",
            l = "",
            c = this._core.settings,
            d = function(i) {
                '<div class="owl-video-play-icon"></div>',
                n = c.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + l,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }),
                e.after(n),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap(t("<div/>", {
                class: "owl-video-wrapper",
                style: s
            })), this._core.settings.lazyLoad && (r = "data-src", l = "owl-lazy"), a.length) return d(a.attr(r)), a.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, d(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t.framegrab_url, d(o)
            }
        })
    }, o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function(e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
            o = this._videos[n.attr("data-video")],
            s = o.width || "100%",
            a = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a), i.attr("width", s), "youtube" === o.type ? i.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id) : "vimeo" === o.type ? i.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1") : "vzaar" === o.type && i.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                a = this.core.settings.animateOut;
            this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(a)), s && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype._next = function(n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, o.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, o.prototype.play = function(i, n) {
        var o;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - o, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - o)
    }, o.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, o.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function() {
        var t, e, i, n, o;
        for (t in o = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            o = this._core.maximum(!0),
            s = this._core.settings,
            a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - i),
                            end: t - i + a - 1
                        }), Math.min(o, t - i) === o) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()),
            s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, o.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function(e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function(e, i, n) {
        var o;
        !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function(t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                n = this._core.$stage.children(),
                o = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function() {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    function o(e, i) {
        var o = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + r.join(s + " ") + s).split(" "), function(t, e) {
            if (a[e] !== n) return o = !i || e, !1
        }), o
    }

    function s(t) {
        return o(t, !0)
    }
    var a = t("<support>").get(0).style,
        r = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = function() {
            return !!o("transform")
        },
        d = function() {
            return !!o("perspective")
        },
        h = function() {
            return !!o("animation")
        };
    (function() {
        return !!o("transition")
    })() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = new String(s("transform")), t.support.transform3d = d())
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return !0
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        },
        onAutoChange: function() {
            return !0
        }
    };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }), this;
        var o = {},
            s = this,
            a = t(window).width(),
            r = t(window).height();
        if (!t(s).data("bxSlider")) {
            var l = function() {
                    t(s).data("bxSlider") || (o.settings = t.extend({}, e, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = s.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode && function() {
                        for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), s.data("origStyle", s.attr("style")), s.children(o.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c())
                },
                c = function() {
                    var e = o.children.eq(o.settings.startSlide);
                    s.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = s.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), s.css({
                        width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), o.usingCSS && o.settings.easing ? s.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), o.viewport.parent().css({
                        maxWidth: p()
                    }), o.children.css({
                        float: "horizontal" === o.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), o.children.css("width", f()), "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" === o.settings.mode && (o.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), o.children.eq(o.settings.startSlide).css({
                        zIndex: o.settings.slideZIndex,
                        display: "block"
                    })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && _(), o.active.last = o.settings.startSlide === m() - 1, o.settings.video && s.fitVids(), "none" === o.settings.preloadImages ? e = null : ("all" === o.settings.preloadImages || o.settings.ticker) && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && C(), o.settings.auto && o.settings.autoControls && k(), o.settings.pager && w(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), null === e ? h() : d(e, h)
                },
                d = function(e, i) {
                    var n = e.find('img:not([src=""]), iframe').length,
                        o = 0;
                    0 !== n ? e.find('img:not([src=""]), iframe').each(function() {
                        t(this).one("load error", function() {
                            ++o === n && i()
                        }).each(function() {
                            (this.complete || "" == this.src) && t(this).trigger("load")
                        })
                    }) : i()
                },
                h = function() {
                    if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
                        var e = "vertical" === o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            i = o.children.slice(0, e).clone(!0).addClass("bx-clone"),
                            n = o.children.slice(-e).clone(!0).addClass("bx-clone");
                        o.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), s.append(i).prepend(n)
                    }
                    o.loader.remove(), b(), "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(u()), s.redrawSlider(), o.settings.onSliderLoad.call(s, o.active.index), o.initialized = !0, o.settings.responsive && t(window).on("resize", Z), o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && W(), o.settings.ticker && N(), o.settings.pager && P(o.settings.startSlide), o.settings.controls && z(), o.settings.touchEnabled && !o.settings.ticker && j(), o.settings.keyboardEnabled && !o.settings.ticker && t(document).keydown(F)
                },
                u = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" === o.settings.mode || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var s = 1 === o.settings.moveSlides ? o.active.index : o.active.index * v();
                            for (n = o.children.eq(s), i = 1; i <= o.settings.maxSlides - 1; i++) n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i))
                        } else n = o.children.eq(o.active.index);
                    else n = o.children;
                    return "vertical" === o.settings.mode ? (n.each(function(i) {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), "border-box" === o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e
                },
                p = function() {
                    var t = "100%";
                    return o.settings.slideWidth > 0 && (t = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
                },
                f = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    if (0 === o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" === o.settings.mode) t = e;
                    else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
                        if (e > o.maxThreshold) return t;
                        e < o.minThreshold ? t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (t = Math.floor((e + o.settings.slideMargin) / Math.ceil((e + o.settings.slideMargin) / (t + o.settings.slideMargin)) - o.settings.slideMargin))
                    }
                    return t
                },
                g = function() {
                    var t = 1,
                        e = null;
                    return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? t = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? t = o.settings.maxSlides : (e = o.children.first().width() + o.settings.slideMargin, t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e) || 1) : "vertical" === o.settings.mode && (t = o.settings.minSlides), t
                },
                m = function() {
                    var t = 0,
                        e = 0,
                        i = 0;
                    if (o.settings.moveSlides > 0) {
                        if (!o.settings.infiniteLoop) {
                            for (; e < o.children.length;) ++t, e = i + g(), i += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
                            return i
                        }
                        t = Math.ceil(o.children.length / v())
                    } else t = Math.ceil(o.children.length / g());
                    return t
                },
                v = function() {
                    return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g()
                },
                b = function() {
                    var t, e, i;
                    o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (t = (e = o.children.last()).position(), x(-(t.left - (o.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (i = o.children.length - o.settings.minSlides, t = o.children.eq(i).position(), x(-t.top, "reset", 0)) : (t = o.children.eq(o.active.index * v()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== t && ("horizontal" === o.settings.mode ? x(-t.left, "reset", 0) : "vertical" === o.settings.mode && x(-t.top, "reset", 0)))
                },
                x = function(e, i, n, a) {
                    var r, l;
                    o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", s.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (s.css(o.animProp, l), 0 !== n ? s.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(s) && (s.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), L())
                    }) : L()) : "reset" === i ? s.css(o.animProp, l) : "ticker" === i && (s.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), s.css(o.animProp, l), 0 !== n ? s.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(s) && (s.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), x(a.resetValue, "reset", 0), O())
                    }) : (x(a.resetValue, "reset", 0), O()))) : ((r = {})[o.animProp] = e, "slide" === i ? s.animate(r, n, o.settings.easing, function() {
                        L()
                    }) : "reset" === i ? s.css(o.animProp, e) : "ticker" === i && s.animate(r, n, "linear", function() {
                        x(a.resetValue, "reset", 0), O()
                    }))
                },
                y = function() {
                    for (var e = "", i = "", n = m(), s = 0; s < n; s++) i = "", o.settings.buildPager && t.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (i = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (i = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + i + "</a></div>";
                    o.pagerEl.html(e)
                },
                w = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), y()), o.pagerEl.on("click touchend", "a", E)
                },
                C = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.on("click touchend", S), o.controls.prev.on("click touchend", $), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                k = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", T), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), I(o.settings.autoStart ? "stop" : "start")
                },
                _ = function() {
                    o.children.each(function(e) {
                        var i = t(this).find("img:first").attr("title");
                        void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                    })
                },
                S = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToNextSlide())
                },
                $ = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToPrevSlide())
                },
                T = function(t) {
                    s.startAuto(), t.preventDefault()
                },
                M = function(t) {
                    s.stopAuto(), t.preventDefault()
                },
                E = function(e) {
                    var i, n;
                    e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), void 0 !== (i = t(e.currentTarget)).attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index"))) !== o.active.index && s.goToSlide(n))
                },
                P = function(e) {
                    var i = o.children.length;
                    if ("short" === o.settings.pagerType) return o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i);
                    o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, n) {
                        t(n).find("a").eq(e).addClass("active")
                    })
                },
                L = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        0 === o.active.index ? t = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? t = o.children.eq((m() - 1) * v()).position() : o.active.index === o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" === o.settings.mode ? x(-t.left, "reset", 0) : "vertical" === o.settings.mode && x(-t.top, "reset", 0))
                    }
                    o.working = !1, o.settings.onSlideAfter.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                I = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                z = function() {
                    1 === m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                H = function() {
                    s.startAuto()
                },
                D = function() {
                    s.stopAuto()
                },
                W = function() {
                    o.settings.autoDelay > 0 ? setTimeout(s.startAuto, o.settings.autoDelay) : (s.startAuto(), t(window).focus(H).blur(D)), o.settings.autoHover && s.hover(function() {
                        o.interval && (s.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (s.startAuto(!0), o.autoPaused = null)
                    })
                },
                N = function() {
                    var e, i, n, a, r, l, c, d, h = 0;
                    "next" === o.settings.autoDirection ? s.append(o.children.clone().addClass("bx-clone")) : (s.prepend(o.children.clone().addClass("bx-clone")), e = o.children.first().position(), h = "horizontal" === o.settings.mode ? -e.left : -e.top), x(h, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (a = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function() {
                        i = s.css("-" + o.cssPrefix + "-transform"), n = parseFloat(i.split(",")[a]), x(n, "reset", 0)
                    }, function() {
                        d = 0, o.children.each(function(e) {
                            d += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), r = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = r * (d - Math.abs(parseInt(n))), O(c)
                    })) : o.viewport.hover(function() {
                        s.stop()
                    }, function() {
                        d = 0, o.children.each(function(e) {
                            d += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), r = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = r * (d - Math.abs(parseInt(s.css(l)))), O(c)
                    })), O()
                },
                O = function(t) {
                    var e, i, n = t || o.settings.speed,
                        a = {
                            left: 0,
                            top: 0
                        },
                        r = {
                            left: 0,
                            top: 0
                        };
                    "next" === o.settings.autoDirection ? a = s.find(".bx-clone").first().position() : r = o.children.first().position(), e = "horizontal" === o.settings.mode ? -a.left : -a.top, i = "horizontal" === o.settings.mode ? -r.left : -r.top, x(e, "ticker", n, {
                        resetValue: i
                    })
                },
                A = function(e) {
                    var i = t(window),
                        n = {
                            top: i.scrollTop(),
                            left: i.scrollLeft()
                        },
                        o = e.offset();
                    return n.right = n.left + i.width(), n.bottom = n.top + i.height(), o.right = o.left + e.outerWidth(), o.bottom = o.top + e.outerHeight(), !(n.right < o.left || n.left > o.right || n.bottom < o.top || n.top > o.bottom)
                },
                F = function(t) {
                    var e = document.activeElement.tagName.toLowerCase();
                    if (null == new RegExp(e, ["i"]).exec("input|textarea") && A(s)) {
                        if (39 === t.keyCode) return S(t), !1;
                        if (37 === t.keyCode) return $(t), !1
                    }
                },
                j = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.on("touchstart MSPointerDown pointerdown", R), o.viewport.on("click", ".bxslider a", function(t) {
                        o.viewport.hasClass("click-disabled") && (t.preventDefault(), o.viewport.removeClass("click-disabled"))
                    })
                },
                R = function(t) {
                    if ("touchstart" === t.type || 0 === t.button)
                        if (t.preventDefault(), o.controls.el.addClass("disabled"), o.working) o.controls.el.removeClass("disabled");
                        else {
                            o.touch.originalPos = s.position();
                            var e = t.originalEvent,
                                i = void 0 !== e.changedTouches ? e.changedTouches : [e];
                            if ("function" == typeof PointerEvent && void 0 === e.pointerId) return;
                            o.touch.start.x = i[0].pageX, o.touch.start.y = i[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = e.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.originalClickTarget = e.originalTarget || e.target, o.originalClickButton = e.button, o.originalClickButtons = e.buttons, o.originalEventType = e.type, o.hasMove = !1, o.viewport.on("touchmove MSPointerMove pointermove", B), o.viewport.on("touchend MSPointerUp pointerup", V), o.viewport.on("MSPointerCancel pointercancel", q)
                        }
                },
                q = function(t) {
                    t.preventDefault(), x(o.touch.originalPos.left, "reset", 0), o.controls.el.removeClass("disabled"), o.viewport.off("MSPointerCancel pointercancel", q), o.viewport.off("touchmove MSPointerMove pointermove", B), o.viewport.off("touchend MSPointerUp pointerup", V), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                },
                B = function(t) {
                    var e = t.originalEvent,
                        i = void 0 !== e.changedTouches ? e.changedTouches : [e],
                        n = Math.abs(i[0].pageX - o.touch.start.x),
                        s = Math.abs(i[0].pageY - o.touch.start.y),
                        a = 0,
                        r = 0;
                    o.hasMove = !0, 3 * n > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > n && o.settings.preventDefaultSwipeY && t.preventDefault(), "touchmove" !== t.type && t.preventDefault(), "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (r = i[0].pageX - o.touch.start.x, a = o.touch.originalPos.left + r) : (r = i[0].pageY - o.touch.start.y, a = o.touch.originalPos.top + r), x(a, "reset", 0))
                },
                V = function(e) {
                    e.preventDefault(), o.viewport.off("touchmove MSPointerMove pointermove", B), o.controls.el.removeClass("disabled");
                    var i = e.originalEvent,
                        n = void 0 !== i.changedTouches ? i.changedTouches : [i],
                        a = 0,
                        r = 0;
                    o.touch.end.x = n[0].pageX, o.touch.end.y = n[0].pageY, "fade" === o.settings.mode ? (r = Math.abs(o.touch.start.x - o.touch.end.x)) >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : ("horizontal" === o.settings.mode ? (r = o.touch.end.x - o.touch.start.x, a = o.touch.originalPos.left) : (r = o.touch.end.y - o.touch.start.y, a = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && r > 0 || o.active.last && r < 0) ? x(a, "reset", 200) : Math.abs(r) >= o.settings.swipeThreshold ? (r < 0 ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : x(a, "reset", 200)), o.viewport.off("touchend MSPointerUp pointerup", V), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId), !1 !== o.hasMove || 0 !== o.originalClickButton && "touchstart" !== o.originalEventType || t(o.originalClickTarget).trigger({
                        type: "click",
                        button: o.originalClickButton,
                        buttons: o.originalClickButtons
                    })
                },
                Z = function(e) {
                    if (o.initialized)
                        if (o.working) window.setTimeout(Z, 10);
                        else {
                            var i = t(window).width(),
                                n = t(window).height();
                            a === i && r === n || (a = i, r = n, s.redrawSlider(), o.settings.onSliderResize.call(s, o.active.index))
                        }
                },
                Y = function(t) {
                    var e = g();
                    o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(t, t + e).attr("aria-hidden", "false"))
                };
            return s.goToSlide = function(e, i) {
                var n, a, r, l, c = !0,
                    d = 0,
                    h = {
                        left: 0,
                        top: 0
                    },
                    p = null;
                if (o.oldIndex = o.active.index, o.active.index = function(t) {
                        return t < 0 ? o.settings.infiniteLoop ? m() - 1 : o.active.index : t >= m() ? o.settings.infiniteLoop ? 0 : o.active.index : t
                    }(e), !o.working && o.active.index !== o.oldIndex) {
                    if (o.working = !0, void 0 !== (c = o.settings.onSlideBefore.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index)) && !c) return o.active.index = o.oldIndex, void(o.working = !1);
                    "next" === i ? o.settings.onSlideNext.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : "prev" === i && (o.settings.onSlidePrev.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)), o.active.last = o.active.index >= m() - 1, (o.settings.pager || o.settings.pagerCustom) && P(o.active.index), o.settings.controls && z(), "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== u() && o.viewport.animate({
                        height: u()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex), L()
                    })) : (o.settings.adaptiveHeight && o.viewport.height() !== u() && o.viewport.animate({
                        height: u()
                    }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (h = (p = o.children.eq(o.children.length - 1)).position(), d = o.viewport.width() - p.outerWidth()) : (n = o.children.length - o.settings.minSlides, h = o.children.eq(n).position()) : o.carousel && o.active.last && "prev" === i ? (a = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (m() - 1) * v() - (o.children.length - o.settings.maxSlides), h = (p = s.children(".bx-clone").eq(a)).position()) : "next" === i && 0 === o.active.index ? (h = s.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : e >= 0 && (l = e * parseInt(v()), h = o.children.eq(l).position()), void 0 !== h && (r = "horizontal" === o.settings.mode ? -(h.left - d) : -h.top, x(r, "slide", o.settings.speed)), o.working = !1), o.settings.ariaHidden && Y(o.active.index * v())
                }
            }, s.goToNextSlide = function() {
                if ((o.settings.infiniteLoop || !o.active.last) && !0 !== o.working) {
                    var t = parseInt(o.active.index) + 1;
                    s.goToSlide(t, "next")
                }
            }, s.goToPrevSlide = function() {
                if ((o.settings.infiniteLoop || 0 !== o.active.index) && !0 !== o.working) {
                    var t = parseInt(o.active.index) - 1;
                    s.goToSlide(t, "prev")
                }
            }, s.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" === o.settings.autoDirection ? s.goToNextSlide() : s.goToPrevSlide()
                }, o.settings.pause), o.settings.onAutoChange.call(s, !0), o.settings.autoControls && !0 !== t && I("stop"))
            }, s.stopAuto = function(t) {
                o.autoPaused && (o.autoPaused = !1), o.interval && (clearInterval(o.interval), o.interval = null, o.settings.onAutoChange.call(s, !1), o.settings.autoControls && !0 !== t && I("start"))
            }, s.getCurrentSlide = function() {
                return o.active.index
            }, s.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            }, s.getSlideElement = function(t) {
                return o.children.eq(t)
            }, s.getSlideCount = function() {
                return o.children.length
            }, s.isWorking = function() {
                return o.working
            }, s.redrawSlider = function() {
                o.children.add(s.find(".bx-clone")).outerWidth(f()), o.viewport.css("height", u()), o.settings.ticker || b(), o.active.last && (o.active.index = m() - 1), o.active.index >= m() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (y(), P(o.active.index)), o.settings.ariaHidden && Y(o.active.index * v())
            }, s.destroySlider = function() {
                o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                    void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).off("resize", Z), o.settings.keyboardEnabled && t(document).off("keydown", F), t(this).removeData("bxSlider"), t(window).off("blur", D).off("focus", H))
            }, s.reloadSlider = function(e) {
                void 0 !== e && (n = e), s.destroySlider(), l(), t(s).data("bxSlider", this)
            }, l(), t(s).data("bxSlider", this), this
        }
    }
}(jQuery),
function(t) {
    t.fn.extend({
        easyResponsiveTabs: function(e) {
            var i = e = t.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    tabidentify: "",
                    activetab_bg: "white",
                    inactive_bg: "#F5F5F5",
                    active_border_color: "#c1c1c1",
                    active_content_border_color: "#c1c1c1",
                    activate: function() {}
                }, e),
                n = i.type,
                o = i.fit,
                s = i.width,
                a = window.location.hash,
                r = !(!window.history || !history.replaceState);
            t(this).bind("tabactivate", function(t, i) {
                "function" == typeof e.activate && e.activate.call(i, t)
            }), this.each(function() {
                var i, l = t(this),
                    c = l.find("ul.resp-tabs-list." + e.tabidentify),
                    d = l.attr("id");
                l.find("ul.resp-tabs-list." + e.tabidentify + " li").addClass("resp-tab-item").addClass(e.tabidentify), l.css({
                    display: "block",
                    width: s
                }), "vertical" == e.type && c.css("margin-top", "3px"), l.find(".resp-tabs-container." + e.tabidentify).css("border-color", e.active_content_border_color), l.find(".resp-tabs-container." + e.tabidentify + " > div").addClass("resp-tab-content").addClass(e.tabidentify), "vertical" == n && l.addClass("resp-vtabs").addClass(e.tabidentify), 1 == o && l.css({
                    width: "100%",
                    margin: "0px"
                }), "accordion" == n && (l.addClass("resp-easy-accordion").addClass(e.tabidentify), l.find(".resp-tabs-list").css("display", "none")), l.find(".resp-tab-content." + e.tabidentify).before("<h2 class='resp-accordion " + e.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>"), l.find(".resp-tab-content." + e.tabidentify).prev("h2").css({
                    "background-color": e.inactive_bg,
                    "border-color": e.active_border_color
                });
                var h = 0;
                l.find(".resp-accordion").each(function() {
                    i = t(this);
                    var n = l.find(".resp-tab-item:eq(" + h + ")"),
                        o = l.find(".resp-accordion:eq(" + h + ")");
                    o.append(n.html()), o.data(n.data()), i.attr("aria-controls", e.tabidentify + "_tab_item-" + h), h++
                });
                var u = 0;
                l.find(".resp-tab-item").each(function() {
                    $tabItem = t(this), $tabItem.attr("aria-controls", e.tabidentify + "_tab_item-" + u), $tabItem.attr("role", "tab"), $tabItem.css({
                        "background-color": e.inactive_bg,
                        "border-color": "none"
                    });
                    var i = 0;
                    l.find(".resp-tab-content." + e.tabidentify).each(function() {
                        t(this).attr("aria-labelledby", e.tabidentify + "_tab_item-" + i).css({
                            "border-color": e.active_border_color
                        }), i++
                    }), u++
                });
                var p = 0;
                if ("" != a) {
                    var f = a.match(new RegExp(d + "([0-9]+)"));
                    null !== f && 2 === f.length && (p = parseInt(f[1], 10) - 1) > u && (p = 0)
                }
                t(l.find(".resp-tab-item." + e.tabidentify)[p]).addClass("resp-tab-active").css({
                    "background-color": e.activetab_bg,
                    "border-color": e.active_border_color
                }), !0 === e.closed || "accordion" === e.closed && !c.is(":visible") || "tabs" === e.closed && c.is(":visible") || (t(l.find(".resp-accordion." + e.tabidentify)[p]).addClass("resp-tab-active").css({
                    "background-color": e.activetab_bg + " !important",
                    "border-color": e.active_border_color,
                    background: "none"
                }), t(l.find(".resp-tab-content." + e.tabidentify)[p]).addClass("resp-tab-content-active").addClass(e.tabidentify).attr("style", "display:block")), l.find("[role=tab]").each(function() {
                    t(this).click(function() {
                        var i = t(this),
                            n = i.attr("aria-controls");
                        if (i.hasClass("resp-accordion") && i.hasClass("resp-tab-active")) return l.find(".resp-tab-content-active." + e.tabidentify).slideUp("", function() {
                            t(this).addClass("resp-accordion-closed")
                        }), i.removeClass("resp-tab-active").css({
                            "background-color": e.inactive_bg,
                            "border-color": "none"
                        }), !1;
                        if (!i.hasClass("resp-tab-active") && i.hasClass("resp-accordion") ? (l.find(".resp-tab-active." + e.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": e.inactive_bg,
                                "border-color": "none"
                            }), l.find(".resp-tab-content-active." + e.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), l.find("[aria-controls=" + n + "]").addClass("resp-tab-active").css({
                                "background-color": e.activetab_bg,
                                "border-color": e.active_border_color
                            }), l.find(".resp-tab-content[aria-labelledby = " + n + "]." + e.tabidentify).slideDown().addClass("resp-tab-content-active")) : (console.log("here"), l.find(".resp-tab-active." + e.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": e.inactive_bg,
                                "border-color": "none"
                            }), l.find(".resp-tab-content-active." + e.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), l.find("[aria-controls=" + n + "]").addClass("resp-tab-active").css({
                                "background-color": e.activetab_bg,
                                "border-color": e.active_border_color
                            }), l.find(".resp-tab-content[aria-labelledby = " + n + "]." + e.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), i.trigger("tabactivate", i), r) {
                            var o = window.location.hash,
                                s = n.split("tab_item-"),
                                a = d + (parseInt(s[1], 10) + 1).toString();
                            if ("" != o) {
                                var c = new RegExp(d + "[0-9]+");
                                a = null != o.match(c) ? o.replace(c, a) : o + "|" + a
                            } else a = "#" + a;
                            history.replaceState(null, null, a)
                        }
                    })
                }), t(window).resize(function() {
                    l.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery),
function(t, e) {
    "use strict";
    var i = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(t) {},
        onSliderLoad: function(t) {},
        onBeforeSlide: function(t, e) {},
        onAfterSlide: function(t, e) {},
        onBeforeNextSlide: function(t, e) {},
        onBeforePrevSlide: function(t, e) {}
    };
    t.fn.lightSlider = function(e) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).lightSlider(e)
        }), this;
        var n = {},
            o = t.extend(!0, {}, i, e),
            s = {},
            a = this;
        n.$el = this, "fade" === o.mode && (o.vertical = !1);
        var r = a.children(),
            l = t(window).width(),
            c = null,
            d = 0,
            h = 0,
            u = !1,
            p = 0,
            f = "",
            g = 0,
            m = !0 === o.vertical ? "height" : "width",
            v = !0 === o.vertical ? "margin-bottom" : "margin-right",
            b = 0,
            x = 0,
            y = 0,
            w = 0,
            C = null,
            k = "ontouchstart" in document.documentElement,
            _ = {
                chbreakpoint: function() {
                    if (l = t(window).width(), o.responsive.length) {
                        var e;
                        if (!1 === o.autoWidth && (e = o.item), l < o.responsive[0].breakpoint)
                            for (var i = 0; i < o.responsive.length; i++) l < o.responsive[i].breakpoint && (o.responsive[i].breakpoint, c = o.responsive[i]);
                        if (null != c)
                            for (var n in c.settings) c.settings.hasOwnProperty(n) && ((void 0 === s[n] || null === s[n]) && (s[n] = o[n]), o[n] = c.settings[n]);
                        if (!t.isEmptyObject(s) && l > o.responsive[0].breakpoint)
                            for (var a in s) s.hasOwnProperty(a) && (o[a] = s[a]);
                        !1 === o.autoWidth && b > 0 && y > 0 && e !== o.item && (g = Math.round(b / ((y + o.slideMargin) * o.slideMove)))
                    }
                },
                calSW: function() {
                    !1 === o.autoWidth && (y = (p - (o.item * o.slideMargin - o.slideMargin)) / o.item)
                },
                calWidth: function(t) {
                    var e = !0 === t ? f.find(".lslide").length : r.length;
                    if (!1 === o.autoWidth) h = e * (y + o.slideMargin);
                    else {
                        h = 0;
                        for (var i = 0; e > i; i++) h += parseInt(r.eq(i).width()) + o.slideMargin
                    }
                    return h
                }
            };
        return (n = {
            doCss: function() {
                return !(!o.useCSS || ! function() {
                    for (var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], e = document.documentElement, i = 0; i < t.length; i++)
                        if (t[i] in e.style) return !0
                }())
            },
            keyPress: function() {
                o.keyPress && t(document).on("keyup.lightslider", function(e) {
                    t(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 37 === e.keyCode ? a.goToPrevSlide() : 39 === e.keyCode && a.goToNextSlide())
                })
            },
            controls: function() {
                o.controls && (a.after('<div class="lSAction"><a class="lSPrev">' + o.prevHtml + '</a><a class="lSNext">' + o.nextHtml + "</a></div>"), o.autoWidth ? _.calWidth(!1) < p && f.find(".lSAction").hide() : d <= o.item && f.find(".lSAction").hide(), f.find(".lSAction a").on("click", function(e) {
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "lSPrev" === t(this).attr("class") ? a.goToPrevSlide() : a.goToNextSlide(), !1
                }))
            },
            initialStyle: function() {
                var t = this;
                "fade" === o.mode && (o.autoWidth = !1, o.slideEndAnimation = !1), o.auto && (o.slideEndAnimation = !1), o.autoWidth && (o.slideMove = 1, o.item = 1), o.loop && (o.slideMove = 1, o.freeMove = !1), o.onBeforeStart.call(this, a), _.chbreakpoint(), a.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + o.addClass + '"><div class="lSSlideWrapper"></div></div>'), f = a.parent(".lSSlideWrapper"), !0 === o.rtl && f.parent().addClass("lSrtl"), o.vertical ? (f.parent().addClass("vertical"), p = o.verticalHeight, f.css("height", p + "px")) : p = a.outerWidth(), r.addClass("lslide"), !0 === o.loop && "slide" === o.mode && (_.calSW(), _.clone = function() {
                    if (_.calWidth(!0) > p) {
                        for (var e = 0, i = 0, n = 0; n < r.length && (i++, !((e += parseInt(a.find(".lslide").eq(n).width()) + o.slideMargin) >= p + o.slideMargin)); n++);
                        var s = !0 === o.autoWidth ? i : o.item;
                        if (s < a.find(".clone.left").length)
                            for (var l = 0; l < a.find(".clone.left").length - s; l++) r.eq(l).remove();
                        if (s < a.find(".clone.right").length)
                            for (var c = r.length - 1; c > r.length - 1 - a.find(".clone.right").length; c--) g--, r.eq(c).remove();
                        for (var d = a.find(".clone.right").length; s > d; d++) a.find(".lslide").eq(d).clone().removeClass("lslide").addClass("clone right").appendTo(a), g++;
                        for (var h = a.find(".lslide").length - a.find(".clone.left").length; h > a.find(".lslide").length - s; h--) a.find(".lslide").eq(h - 1).clone().removeClass("lslide").addClass("clone left").prependTo(a);
                        r = a.children()
                    } else r.hasClass("clone") && (a.find(".clone").remove(), t.move(a, 0))
                }, _.clone()), _.sSW = function() {
                    d = r.length, !0 === o.rtl && !1 === o.vertical && (v = "margin-left"), !1 === o.autoWidth && r.css(m, y + "px"), r.css(v, o.slideMargin + "px"), h = _.calWidth(!1), a.css(m, h + "px"), !0 === o.loop && "slide" === o.mode && !1 === u && (g = a.find(".clone.left").length)
                }, _.calL = function() {
                    r = a.children(), d = r.length
                }, this.doCss() && f.addClass("usingCss"), _.calL(), "slide" === o.mode ? (_.calSW(), _.sSW(), !0 === o.loop && (b = t.slideValue(), this.move(a, b)), !1 === o.vertical && this.setHeight(a, !1)) : (this.setHeight(a, !0), a.addClass("lSFade"), this.doCss() || (r.fadeOut(0), r.eq(g).fadeIn(0))), !0 === o.loop && "slide" === o.mode ? r.eq(g).addClass("active") : r.first().addClass("active")
            },
            pager: function() {
                var t = this;
                if (_.createPager = function() {
                        w = (p - (o.thumbItem * o.thumbMargin - o.thumbMargin)) / o.thumbItem;
                        var e = f.find(".lslide"),
                            i = f.find(".lslide").length,
                            n = 0,
                            s = "",
                            r = 0;
                        for (n = 0; i > n; n++) {
                            "slide" === o.mode && (o.autoWidth ? r += (parseInt(e.eq(n).width()) + o.slideMargin) * o.slideMove : r = n * (y + o.slideMargin) * o.slideMove);
                            var l = e.eq(n * o.slideMove).attr("data-thumb");
                            if (s += !0 === o.gallery ? '<li style="width:100%;' + m + ":" + w + "px;" + v + ":" + o.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : '<li><a href="#">' + (n + 1) + "</a></li>", "slide" === o.mode && r >= h - p - o.slideMargin) {
                                n += 1;
                                var c = 2;
                                o.autoWidth && (s += '<li><a href="#">' + (n + 1) + "</a></li>", c = 1), c > n ? (s = null, f.parent().addClass("noPager")) : f.parent().removeClass("noPager");
                                break
                            }
                        }
                        var d = f.parent();
                        d.find(".lSPager").html(s), !0 === o.gallery && (!0 === o.vertical && d.find(".lSPager").css("width", o.vThumbWidth + "px"), x = n * (o.thumbMargin + w) + .5, d.find(".lSPager").css({
                            property: x + "px",
                            "transition-duration": o.speed + "ms"
                        }), !0 === o.vertical && f.parent().css("padding-right", o.vThumbWidth + o.galleryMargin + "px"), d.find(".lSPager").css(m, x + "px"));
                        var u = d.find(".lSPager").find("li");
                        u.first().addClass("active"), u.on("click", function() {
                            return !0 === o.loop && "slide" === o.mode ? g += u.index(this) - d.find(".lSPager").find("li.active").index() : g = u.index(this), a.mode(!1), !0 === o.gallery && t.slideThumb(), !1
                        })
                    }, o.pager) {
                    var e = "lSpg";
                    o.gallery && (e = "lSGallery"), f.after('<ul class="lSPager ' + e + '"></ul>');
                    var i = o.vertical ? "margin-left" : "margin-top";
                    f.parent().find(".lSPager").css(i, o.galleryMargin + "px"), _.createPager()
                }
                setTimeout(function() {
                    _.init()
                }, 0)
            },
            setHeight: function(t, e) {
                var i = null,
                    n = this;
                i = o.loop ? t.children(".lslide ").first() : t.children().first();
                var s = function() {
                    var n = i.outerHeight(),
                        o = 0,
                        s = n;
                    e && (n = 0, o = 100 * s / p), t.css({
                        height: n + "px",
                        "padding-bottom": o + "%"
                    })
                };
                s(), i.find("img").length ? i.find("img")[0].complete ? (s(), C || n.auto()) : i.find("img").on("load", function() {
                    setTimeout(function() {
                        s(), C || n.auto()
                    }, 100)
                }) : C || n.auto()
            },
            active: function(t, e) {
                this.doCss() && "fade" === o.mode && f.addClass("on");
                var i, n, s = 0;
                g * o.slideMove < d ? (t.removeClass("active"), this.doCss() || "fade" !== o.mode || !1 !== e || t.fadeOut(o.speed), s = !0 === e ? g : g * o.slideMove, !0 === e && (n = (i = t.length) - 1, s + 1 >= i && (s = n)), !0 === o.loop && "slide" === o.mode && (s = !0 === e ? g - a.find(".clone.left").length : g * o.slideMove, !0 === e && (n = (i = t.length) - 1, s + 1 === i ? s = n : s + 1 > i && (s = 0))), this.doCss() || "fade" !== o.mode || !1 !== e || t.eq(s).fadeIn(o.speed), t.eq(s).addClass("active")) : (t.removeClass("active"), t.eq(t.length - 1).addClass("active"), this.doCss() || "fade" !== o.mode || !1 !== e || (t.fadeOut(o.speed), t.eq(s).fadeIn(o.speed)))
            },
            move: function(t, e) {
                !0 === o.rtl && (e = -e), this.doCss() ? t.css(!0 === o.vertical ? {
                    transform: "translate3d(0px, " + -e + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -e + "px, 0px)"
                } : {
                    transform: "translate3d(" + -e + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -e + "px, 0px, 0px)"
                }) : !0 === o.vertical ? t.css("position", "relative").animate({
                    top: -e + "px"
                }, o.speed, o.easing) : t.css("position", "relative").animate({
                    left: -e + "px"
                }, o.speed, o.easing);
                var i = f.parent().find(".lSPager").find("li");
                this.active(i, !0)
            },
            fade: function() {
                this.active(r, !1);
                var t = f.parent().find(".lSPager").find("li");
                this.active(t, !0)
            },
            slide: function() {
                var t = this;
                _.calSlide = function() {
                    h > p && (b = t.slideValue(), t.active(r, !1), b > h - p - o.slideMargin ? b = h - p - o.slideMargin : 0 > b && (b = 0), t.move(a, b), !0 === o.loop && "slide" === o.mode && (g >= d - a.find(".clone.left").length / o.slideMove && t.resetSlide(a.find(".clone.left").length), 0 === g && t.resetSlide(f.find(".lslide").length)))
                }, _.calSlide()
            },
            resetSlide: function(t) {
                var e = this;
                f.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    g = t, f.css("transition-duration", "0ms"), b = e.slideValue(), e.active(r, !1), n.move(a, b), setTimeout(function() {
                        f.css("transition-duration", o.speed + "ms"), f.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, o.speed + 100)
            },
            slideValue: function() {
                var t = 0;
                if (!1 === o.autoWidth) t = g * (y + o.slideMargin) * o.slideMove;
                else {
                    t = 0;
                    for (var e = 0; g > e; e++) t += parseInt(r.eq(e).width()) + o.slideMargin
                }
                return t
            },
            slideThumb: function() {
                var t;
                switch (o.currentPagerPosition) {
                    case "left":
                        t = 0;
                        break;
                    case "middle":
                        t = p / 2 - w / 2;
                        break;
                    case "right":
                        t = p - w
                }
                var e = g - a.find(".clone.left").length,
                    i = f.parent().find(".lSPager");
                "slide" === o.mode && !0 === o.loop && (e >= i.children().length ? e = 0 : 0 > e && (e = i.children().length));
                var n = e * (w + o.thumbMargin) - t;
                n + p > x && (n = x - p - o.thumbMargin), 0 > n && (n = 0), this.move(i, n)
            },
            auto: function() {
                o.auto && (clearInterval(C), C = setInterval(function() {
                    a.goToNextSlide()
                }, o.pause))
            },
            pauseOnHover: function() {
                var e = this;
                o.auto && o.pauseOnHover && (f.on("mouseenter", function() {
                    t(this).addClass("ls-hover"), a.pause(), o.auto = !0
                }), f.on("mouseleave", function() {
                    t(this).removeClass("ls-hover"), f.find(".lightSlider").hasClass("lsGrabbing") || e.auto()
                }))
            },
            touchMove: function(t, e) {
                if (f.css("transition-duration", "0ms"), "slide" === o.mode) {
                    var i = b - (t - e);
                    if (i >= h - p - o.slideMargin)
                        if (!1 === o.freeMove) i = h - p - o.slideMargin;
                        else {
                            var n = h - p - o.slideMargin;
                            i = n + (i - n) / 5
                        }
                    else 0 > i && (!1 === o.freeMove ? i = 0 : i /= 5);
                    this.move(a, i)
                }
            },
            touchEnd: function(t) {
                if (f.css("transition-duration", o.speed + "ms"), "slide" === o.mode) {
                    var e = !1,
                        i = !0;
                    (b -= t) > h - p - o.slideMargin ? (b = h - p - o.slideMargin, !1 === o.autoWidth && (e = !0)) : 0 > b && (b = 0);
                    var n = function(t) {
                        var i = 0;
                        if (e || t && (i = 1), o.autoWidth)
                            for (var n = 0, s = 0; s < r.length && (n += parseInt(r.eq(s).width()) + o.slideMargin, g = s + i, !(n >= b)); s++);
                        else {
                            var a = b / ((y + o.slideMargin) * o.slideMove);
                            g = parseInt(a) + i, b >= h - p - o.slideMargin && a % 1 != 0 && g++
                        }
                    };
                    t >= o.swipeThreshold ? (n(!1), i = !1) : t <= -o.swipeThreshold && (n(!0), i = !1), a.mode(i), this.slideThumb()
                } else t >= o.swipeThreshold ? a.goToPrevSlide() : t <= -o.swipeThreshold && a.goToNextSlide()
            },
            enableDrag: function() {
                var e = this;
                if (!k) {
                    var i = 0,
                        n = 0,
                        s = !1;
                    f.find(".lightSlider").addClass("lsGrab"), f.on("mousedown", function(e) {
                        return !(p > h && 0 !== h) && void("lSPrev" !== t(e.target).attr("class") && "lSNext" !== t(e.target).attr("class") && (i = !0 === o.vertical ? e.pageY : e.pageX, s = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, f.scrollLeft += 1, f.scrollLeft -= 1, f.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(C)))
                    }), t(window).on("mousemove", function(t) {
                        s && (n = !0 === o.vertical ? t.pageY : t.pageX, e.touchMove(n, i))
                    }), t(window).on("mouseup", function(a) {
                        if (s) {
                            f.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), s = !1;
                            var r = (n = !0 === o.vertical ? a.pageY : a.pageX) - i;
                            Math.abs(r) >= o.swipeThreshold && t(window).on("click.ls", function(e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), e.stopPropagation(), t(window).off("click.ls")
                            }), e.touchEnd(r)
                        }
                    })
                }
            },
            enableTouch: function() {
                var t = this;
                if (k) {
                    var e = {},
                        i = {};
                    f.on("touchstart", function(t) {
                        i = t.originalEvent.targetTouches[0], e.pageX = t.originalEvent.targetTouches[0].pageX, e.pageY = t.originalEvent.targetTouches[0].pageY, clearInterval(C)
                    }), f.on("touchmove", function(n) {
                        if (p > h && 0 !== h) return !1;
                        var s = n.originalEvent;
                        i = s.targetTouches[0];
                        var a = Math.abs(i.pageX - e.pageX),
                            r = Math.abs(i.pageY - e.pageY);
                        !0 === o.vertical ? (3 * r > a && n.preventDefault(), t.touchMove(i.pageY, e.pageY)) : (3 * a > r && n.preventDefault(), t.touchMove(i.pageX, e.pageX))
                    }), f.on("touchend", function() {
                        if (p > h && 0 !== h) return !1;
                        var n;
                        n = !0 === o.vertical ? i.pageY - e.pageY : i.pageX - e.pageX, t.touchEnd(n)
                    })
                }
            },
            build: function() {
                var e = this;
                e.initialStyle(), this.doCss() && (!0 === o.enableTouch && e.enableTouch(), !0 === o.enableDrag && e.enableDrag()), t(window).on("focus", function() {
                    e.auto()
                }), t(window).on("blur", function() {
                    clearInterval(C)
                }), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress()
            }
        }).build(), _.init = function() {
            _.chbreakpoint(), !0 === o.vertical ? (p = o.item > 1 ? o.verticalHeight : r.outerHeight(), f.css("height", p + "px")) : p = f.outerWidth(), !0 === o.loop && "slide" === o.mode && _.clone(), _.calL(), "slide" === o.mode && a.removeClass("lSSlide"), "slide" === o.mode && (_.calSW(), _.sSW()), setTimeout(function() {
                "slide" === o.mode && a.addClass("lSSlide")
            }, 1e3), o.pager && _.createPager(), !0 === o.adaptiveHeight && !1 === o.vertical && a.css("height", r.eq(g).outerHeight(!0)), !1 === o.adaptiveHeight && ("slide" === o.mode ? !1 === o.vertical ? n.setHeight(a, !1) : n.auto() : n.setHeight(a, !0)), !0 === o.gallery && n.slideThumb(), "slide" === o.mode && n.slide(), !1 === o.autoWidth ? r.length <= o.item ? f.find(".lSAction").hide() : f.find(".lSAction").show() : _.calWidth(!1) < p && 0 !== h ? f.find(".lSAction").hide() : f.find(".lSAction").show()
        }, a.goToPrevSlide = function() {
            if (g > 0) o.onBeforePrevSlide.call(this, a, g), g--, a.mode(!1), !0 === o.gallery && n.slideThumb();
            else if (!0 === o.loop) {
                if (o.onBeforePrevSlide.call(this, a, g), "fade" === o.mode) g = parseInt((d - 1) / o.slideMove);
                a.mode(!1), !0 === o.gallery && n.slideThumb()
            } else !0 === o.slideEndAnimation && (a.addClass("leftEnd"), setTimeout(function() {
                a.removeClass("leftEnd")
            }, 400))
        }, a.goToNextSlide = function() {
            var t = !0;
            "slide" === o.mode && (t = n.slideValue() < h - p - o.slideMargin);
            g * o.slideMove < d - o.slideMove && t ? (o.onBeforeNextSlide.call(this, a, g), g++, a.mode(!1), !0 === o.gallery && n.slideThumb()) : !0 === o.loop ? (o.onBeforeNextSlide.call(this, a, g), g = 0, a.mode(!1), !0 === o.gallery && n.slideThumb()) : !0 === o.slideEndAnimation && (a.addClass("rightEnd"), setTimeout(function() {
                a.removeClass("rightEnd")
            }, 400))
        }, a.mode = function(t) {
            !0 === o.adaptiveHeight && !1 === o.vertical && a.css("height", r.eq(g).outerHeight(!0)), !1 === u && ("slide" === o.mode ? n.doCss() && (a.addClass("lSSlide"), "" !== o.speed && f.css("transition-duration", o.speed + "ms"), "" !== o.cssEasing && f.css("transition-timing-function", o.cssEasing)) : n.doCss() && ("" !== o.speed && a.css("transition-duration", o.speed + "ms"), "" !== o.cssEasing && a.css("transition-timing-function", o.cssEasing))), t || o.onBeforeSlide.call(this, a, g), "slide" === o.mode ? n.slide() : n.fade(), f.hasClass("ls-hover") || n.auto(), setTimeout(function() {
                t || o.onAfterSlide.call(this, a, g)
            }, o.speed), u = !0
        }, a.play = function() {
            a.goToNextSlide(), o.auto = !0, n.auto()
        }, a.pause = function() {
            o.auto = !1, clearInterval(C)
        }, a.refresh = function() {
            _.init()
        }, a.getCurrentSlideCount = function() {
            var t = g;
            if (o.loop) {
                var e = f.find(".lslide").length,
                    i = a.find(".clone.left").length;
                t = i - 1 >= g ? e + (g - i) : g >= e + i ? g - e - i : g - i
            }
            return t + 1
        }, a.getTotalSlideCount = function() {
            return f.find(".lslide").length
        }, a.goToSlide = function(t) {
            g = o.loop ? t + a.find(".clone.left").length - 1 : t, a.mode(!1), !0 === o.gallery && n.slideThumb()
        }, a.destroy = function() {
            a.lightSlider && (a.goToPrevSlide = function() {}, a.goToNextSlide = function() {}, a.mode = function() {}, a.play = function() {}, a.pause = function() {}, a.refresh = function() {}, a.getCurrentSlideCount = function() {}, a.getTotalSlideCount = function() {}, a.goToSlide = function() {}, a.lightSlider = null, _ = {
                init: function() {}
            }, a.parent().parent().find(".lSAction, .lSPager").remove(), a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), a.children().removeAttr("style"), r.removeClass("lslide active"), a.find(".clone").remove(), r = null, C = null, u = !1, g = 0)
        }, setTimeout(function() {
            o.onSliderLoad.call(this, a)
        }, 10), t(window).on("resize orientationchange", function(t) {
            setTimeout(function() {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1, _.init()
            }, 200)
        }), this
    }
}(jQuery),
function(t) {
    var e = -1,
        i = -1,
        n = function(t) {
            return parseFloat(t) || 0
        },
        o = function(e) {
            var i = t(e),
                o = null,
                s = [];
            return i.each(function() {
                var e = t(this),
                    i = e.offset().top - n(e.css("margin-top")),
                    a = s.length > 0 ? s[s.length - 1] : null;
                null === a ? s.push(e) : Math.floor(Math.abs(o - i)) <= 1 ? s[s.length - 1] = a.add(e) : s.push(e), o = i
            }), s
        },
        s = function(e) {
            var i = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
        },
        a = t.fn.matchHeight = function(e) {
            var i = s(e);
            if (i.remove) {
                var n = this;
                return this.css(i.property, ""), t.each(a._groups, function(t, e) {
                    e.elements = e.elements.not(n)
                }), this
            }
            return this.length <= 1 && !i.target ? this : (a._groups.push({
                elements: this,
                options: i
            }), a._apply(this, i), this)
        };
    a.version = "master", a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._rows = o, a._parse = n, a._parseOptions = s, a._apply = function(e, i) {
        var r = s(i),
            l = t(e),
            c = [l],
            d = t(window).scrollTop(),
            h = t("html").outerHeight(!0),
            u = l.parents().filter(":hidden");
        return u.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), u.css("display", "block"), r.byRow && !r.target && (l.each(function() {
            var e = t(this),
                i = e.css("display");
            "inline-block" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), c = o(l), l.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(c, function(e, i) {
            var o = t(i),
                s = 0;
            if (r.target) s = r.target.outerHeight(!1);
            else {
                if (r.byRow && o.length <= 1) return void o.css(r.property, "");
                o.each(function() {
                    var e = t(this),
                        i = e.css("display");
                    "inline-block" !== i && "inline-flex" !== i && (i = "block");
                    var n = {
                        display: i
                    };
                    n[r.property] = "", e.css(n), e.outerHeight(!1) > s && (s = e.outerHeight(!1)), e.css("display", "")
                })
            }
            o.each(function() {
                var e = t(this),
                    i = 0;
                r.target && e.is(r.target) || ("border-box" !== e.css("box-sizing") && (i += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), i += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(r.property, s - i + "px"))
            })
        }), u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), a._maintainScroll && t(window).scrollTop(d / h * t("html").outerHeight(!0)), this
    }, a._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var i = t(this),
                n = i.attr("data-mh") || i.attr("data-match-height");
            e[n] = n in e ? e[n].add(i) : i
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var r = function(e) {
        a._beforeUpdate && a._beforeUpdate(e, a._groups), t.each(a._groups, function() {
            a._apply(this.elements, this.options)
        }), a._afterUpdate && a._afterUpdate(e, a._groups)
    };
    a._update = function(n, o) {
        if (o && "resize" === o.type) {
            var s = t(window).width();
            if (s === e) return;
            e = s
        }
        n ? -1 === i && (i = setTimeout(function() {
            r(o), i = -1
        }, a._throttle)) : r(o)
    }, t(a._applyDataApi), t(window).bind("load", function(t) {
        a._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        a._update(!0, t)
    })
}(jQuery), (function($) {
    jQuery.fn.exists = function() {
            return this.length > 0
        }, $(window).scroll(function() {
            $(window).scrollTop() >= 1 ? $(".header").addClass("fix-it") : $(".header").removeClass("fix-it")
        }),
        function() {
            $(".main-menu ul li").find("> ul").parent().addClass("dropdown");
            var t = $(".main-menu").html();
            $(".mobile-menu .container").html(t);
            var e = $(".header-right-menu > ul").html();
            $(".mobile-menu ul.menu-list > li:last-child()").after(e), $(".mobile-menu .menu-toggle").click(function() {
                $(this).parent().find(">ul.menu-list").stop(!0, !0).slideToggle(150), $(this).toggleClass("active")
            })
        }(), $(".main-menu > ul > li").hover(function() {
            $(this).find("> a").addClass("hoverClass"), $(this).find(">ul").stop(!0, !1).slideDown(200)
        }, function() {
            $(this).find("> a").removeClass("hoverClass"), $(this).find(">ul").stop(!0, !1).slideUp(200)
        }), $(".main-menu > ul >li>").find("> ul").parent().addClass("dropdown"), $(".main-menu > ul > li > ul > li").hover(function() {
            $(this).find("> a").addClass("hoverClass"), $(this).find(">ul").addClass("pull-ul")
        }, function() {
            $(this).find("> a").removeClass("hoverClass"), $(this).find(">ul").removeClass("pull-ul")
        }), $(window).width() > 991 && ($(".main-menu > ul > li").find(".mega-drop").parent().addClass("drp"), $(".main-menu > ul > li.drp").hover(function() {
            $(this).find("> a").addClass("active"), $(this).find(".mega-drop").addClass("active")
        }, function() {
            $(this).find("> a").removeClass("active"), $(this).find(".mega-drop").removeClass("active")
        })), $(".mobile-menu .menu-list li").find(".mega-drop").parent().addClass("drp");
    var t = $(".mega-drop"),
        e = $(".mobile-menu .menu-list li.drp > a");
    $(e).click(function() {
            if (!$(this).hasClass("open")) return t.slideUp(100), e.removeClass("open"), $(this).addClass("open"), $(this).next().slideDown(100), !1;
            $(this).removeClass("open"), $(this).next().slideUp(100)
        }),
        function() {
            var t = $(".mobile-menu ul.menu-list > li > ul"),
                e = $(".mobile-menu ul.menu-list > li.dropdown > a");
            $(e).click(function() {
                if (!$(this).hasClass("open")) return t.slideUp(150), e.removeClass("open"), $(this).addClass("open"), $(this).next().slideDown(150), !1;
                $(this).removeClass("open"), $(this).next().slideUp(150)
            });
            var i = $(".mobile-menu ul.menu-list > li > ul > li >ul"),
                n = $(".mobile-menu ul.menu-list > li > ul >li.dropdown > a");
            $(n).click(function() {
                if (!$(this).hasClass("open")) return i.slideUp(150), n.removeClass("open"), $(this).addClass("open"), $(this).next().slideDown(150), !1;
                $(this).removeClass("open"), $(this).next().slideUp(150)
            })
        }(), $(".set-as-bg").each(function() {
            var t = $(this).find("> span.make-bg img").attr("src");
            $(this).css("background-image", "url(" + t + ")")
        }), $(document).ready(function() {
            setInterval(function() {
                var t, e;
                t = Math.floor(1800 * Math.random() - 200), e = Math.floor(1800 * Math.random() - 200), $("<div>").addClass("star falling-star").insertAfter(".shooting-stars"), $(".falling-star").css("left", t), setTimeout(function() {
                    $(".falling-star").addClass("go-falling"), $(".go-falling").css("left", e)
                }, 400), setTimeout(function() {
                    $(".falling-star").remove()
                }, 1800)
            }, 2400)
        }), $(document).ready(function() {
            function t() {
                var t = ($(window).width() - $(".home-map-block > .container").width()) / 2;
                $(".append-right-bg").css({
                    width: t,
                    right: -t
                })
            }
            $(".home-map-block > .container").append('<span class="append-right-bg"></span>'), $(window).resize(function() {
                t()
            }), t()
        }), $(document).ready(function() {
            $(".owl-carousel.frictionless-carousel").owlCarousel({
                items: 1,
                loop: !0,
                navText: !1,
                loop: !0,
                nav: !1,
                dots: !0
            })
        });
    var i = $(".accordion div.data"),
        n = $(".accordion .accordion-item");

    function o() {
        var t = ($(window).width() - $(".container").width()) / 2;
        $(".touch-right").css({
            "margin-right": -t,
            "padding-right": t
        }), $(".touch-left").css({
            "margin-left": -t
        }), $(".blue-bg").css({
            right: -t
        })
    }
    $(".accordion > .accordion-item").click(function() {
        if (!$(this).hasClass("open")) return i.slideUp(150), n.removeClass("open"), $(this).addClass("open"), $(this).next().slideDown(150), !1;
        $(this).removeClass("open"), $(this).next().slideUp(150)
    }), jQuery.fn.exists = function() {
        return this.length > 0
    }, $(".commen-pop").exists() && $("[data-fancybox]").fancybox({
        afterClose: function() {
            parent.location.reload(!0)
        }
    }), $("#parentHorizontalTab").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: !0,
        tabidentify: "hor_1",
        activate: function(t) {
            var e = $(this),
                i = $("#nested-tabInfo");
            $("span", i).text(e.text()), i.show()
        }
    }), $(document).ready(function() {
        $(".owl-carousel.unform-stitching-carousel").owlCarousel({
            items: 1,
            loop: !0,
            margin: 30,
            autoplay: !0,
            navText: !1,
            nav: !0,
            dots: !1,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2,
                    margin: 15
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }), $(".accessories-next-prev.prev").click(function() {
        $(".unform-stitching-main .owl-prev").trigger("click")
    }), $(".accessories-next-prev.next").click(function() {
        $(".unform-stitching-main .owl-next").trigger("click")
    }), o(), $(window).resize(function() {
        o()
    }), $(".same").matchHeight({
        property: "height"
    }), $(".cm-height").matchHeight({
        property: "height"
    }), $(".equal-height").matchHeight({
        property: "height"
    })
})(jQuery), _N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [20], {
        RXBc: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "__N_SSG", function() {
                return Fi
            }), i.d(e, "default", function() {
                return ji
            });
            var n = i("q1tI"),
                o = i.n(n),
                s = i("vOnD"),
                a = o.a.createElement,
                r = s.default.svg.withConfig({
                    componentId: "hze0b3-0"
                })([".about-black-fill{fill:", ";transition:fill ", ";}.about-gray-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillGray
                }, function(t) {
                    return t.theme.transition.time
                });

            function l() {
                return a(r, {
                    width: "59",
                    height: "62",
                    viewBox: "0 0 59 62",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a("circle", {
                    cx: "13",
                    cy: "31",
                    r: "11",
                    fill: "#D7E4E3"
                }), a("ellipse", {
                    cx: "38.2863",
                    cy: "49.2857",
                    rx: "12.5714",
                    ry: "12.5714",
                    fill: "#D7E4E3"
                }), a("ellipse", {
                    cx: "42.8574",
                    cy: "16.1428",
                    rx: "16",
                    ry: "16",
                    className: "about-black-fill"
                }), a("path", {
                    d: "M40.3047 9.01892L47.2779 15.9921L40.3047 22.9653",
                    stroke: "black",
                    strokeWidth: "2"
                }), a("path", {
                    d: "M40.3047 9.01892L47.2779 15.9921L40.3047 22.9653",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), a("path", {
                    d: "M10.8955 26.39L15.583 31.0775L10.8955 35.7649",
                    stroke: "black",
                    strokeWidth: "2"
                }), a("path", {
                    d: "M35.1816 43.8187L40.6815 49.3185L35.1816 54.8184",
                    stroke: "black",
                    strokeWidth: "2"
                }), a("line", {
                    x1: "40",
                    y1: "49",
                    x2: "24",
                    y2: "49",
                    stroke: "black",
                    strokeWidth: "2"
                }), a("line", {
                    x1: "46.2861",
                    y1: "16",
                    x2: "21.1433",
                    y2: "16",
                    stroke: "black",
                    strokeWidth: "2"
                }), a("line", {
                    x1: "46.2861",
                    y1: "15.9999",
                    x2: "26.8576",
                    y2: "15.9999",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), a("path", {
                    d: "M14 31L-7.15256e-07 31",
                    stroke: "black",
                    strokeWidth: "2"
                }))
            }
            l.displayName = "AboutIcon1";
            var c = o.a.createElement,
                d = s.default.svg.withConfig({
                    componentId: "sc-83p2w9-0"
                })([".about-black-fill{fill:", ";transition:fill ", ";}.about-gray-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillGray
                }, function(t) {
                    return t.theme.transition.time
                });

            function h() {
                return c(d, {
                    width: "64",
                    height: "56",
                    viewBox: "0 0 64 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M49.3845 9.16391C57.5275 9.5866 64.0001 16.3231 64.0001 24.5714C64.0001 32.513 57.9999 39.0532 50.2856 39.9059V40H48.5716H32.5715H12H11.4285V39.9866C5.06646 39.6883 0 34.4358 0 28C0 21.3726 5.37258 16 12 16C12.3245 16 12.6459 16.0129 12.9639 16.0381C14.8022 6.89019 22.8822 0 32.5715 0C39.6237 0 45.8234 3.64999 49.3845 9.16391Z",
                    fill: "#D7E4E3"
                }), c("circle", {
                    cx: "32",
                    cy: "39",
                    r: "17",
                    className: "about-black-fill"
                }), c("path", {
                    d: "M31.7393 27L34.8696 30.1304L31.7393 33.2607",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), c("path", {
                    d: "M33.2197 50.7803L30.3885 47.9491L33.2197 45.1179",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), c("path", {
                    d: "M36.7368 31.3459C39.2958 32.933 41 35.7675 41 39C41 43.9706 36.9706 48 32 48H31.0526M27.2632 46.6541C24.7042 45.067 23 42.2325 23 39C23 34.0294 27.0294 30 32 30H33.4211",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }))
            }
            h.displayName = "AboutIcon2";
            var u = o.a.createElement,
                p = s.default.svg.withConfig({
                    componentId: "sc-106obd3-0"
                })([".about-black-fill{fill:", ";transition:fill ", ";}.about-white-stroke{stroke:", ";transition:stroke ", ";}.about-black-stroke{stroke:", ";transition:stroke ", ";}.about-gray-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillGray
                }, function(t) {
                    return t.theme.transition.time
                });

            function f() {
                return u("div", null, u(p, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u("circle", {
                    cx: "15",
                    cy: "49",
                    r: "15",
                    className: "about-black-fill"
                }), u("path", {
                    d: "M15 53H24",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M8 44L13 48.5L8 53",
                    className: "about-gray-stroke",
                    strokeWidth: "2"
                }), u("circle", {
                    cx: "49",
                    cy: "49",
                    r: "15",
                    fill: "#D7E4E3"
                }), u("path", {
                    d: "M49 53H58",
                    stroke: "black",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M42 44L47 48.5L42 53",
                    stroke: "black",
                    strokeWidth: "2"
                }), u("ellipse", {
                    cx: "32",
                    cy: "5.5",
                    rx: "11",
                    ry: "3.5",
                    className: "about-black-stroke",
                    strokeWidth: "2"
                }), u("ellipse", {
                    cx: "32",
                    cy: "12.5",
                    rx: "11",
                    ry: "3.5",
                    className: "about-black-stroke",
                    strokeWidth: "2"
                }), u("ellipse", {
                    cx: "32",
                    cy: "19.5",
                    rx: "11",
                    ry: "3.5",
                    className: "about-black-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M32 30C38.0751 30 43 28.433 43 26.5C43 24.567 38.0751 23 32 23",
                    className: "about-black-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M7 28L7 19C7 17.8954 7.89543 17 9 17L14 17",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M10 26L7 29L4 26",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M12 14L15 17L12 20",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M57 28L57 19C57 17.8954 56.1046 17 55 17L50 17",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M54 26L57 29L60 26",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                }), u("path", {
                    d: "M52 14L49 17L52 20",
                    className: "about-white-stroke",
                    strokeWidth: "2"
                })))
            }
            f.displayName = "AboutIcon3";
            var g = o.a.createElement,
                m = s.default.div.withConfig({
                    componentId: "sc-1hu5h1a-0"
                })(["margin:0 0 36px;@media screen and (max-width:767px){width:100%;padding:0 20px;}@media (min-width:768px){width:calc(100% / 3);}@media (min-width:768px) and (max-width:991px){padding:0 20px;}@media (min-width:991px){padding:0 48px;}"]),
                v = s.default.div.withConfig({
                    componentId: "sc-1hu5h1a-1"
                })(["@media screen and (max-width:767px){margin:0 0 25px;}@media (min-width:768px) and (max-width:991px){height:80px;}@media (min-width:992px){height:111px;}"]),
                b = s.default.h2.withConfig({
                    componentId: "sc-1hu5h1a-2"
                })(["font-size:24px;line-height:30px;letter-spacing:-0.02em;color:", ";font-weight:900;margin:0 0 24px;transition:color ", ";"], function(t) {
                    return t.theme.fontColorTitle
                }, function(t) {
                    return t.theme.transition.time
                }),
                x = s.default.p.withConfig({
                    componentId: "sc-1hu5h1a-3"
                })(["font-size:17px;line-height:1.53;color:", ";margin:0;transition:color ", ";.theme-dark &{color:", ";}"], function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray700
                });

            function y(t) {
                var e = t.aboutItems,
                    i = void 0 === e ? [] : e;
                return g(o.a.Fragment, null, i.map(function(t) {
                    return g(m, {
                        key: t.title
                    }, g(v, null, t.icon), g(b, null, t.title), g(x, null, t.txt))
                }))
            }
            var w = i("Fs3D"),
                C = o.a.createElement,
                k = s.default.section.withConfig({
                    componentId: "sc-3ht5ui-0"
                })(["@media screen and (max-width:767px){padding:30px 0;}@media (min-width:768px){padding:60px 0;}"]),
                _ = s.default.div.withConfig({
                    componentId: "sc-3ht5ui-1"
                })(["display:flex;flex-wrap:wrap;@media screen and (max-width:991px){margin:0 -20px -36px;}@media (min-width:992px){margin:0 -48px -36px;}"]);

            function S() {
                var t = [{
                    icon: C(l, null),
                    title: "Faster than an API",
                    txt: "Changes are pushed to clients in real-time. Read and write local data instantly, cache it forever."
                }, {
                    icon: C(h, null),
                    title: "Easier than JSON",
                    txt: "Develop with a local database that's as capable as cloud DBs. Cut out your API and let homebase sync state and help you manage data flows."
                }, {
                    icon: C(f, null),
                    title: "Collaborative",
                    txt: "Our system resolves conflicts automatically so you don't have to worry about realtime collaboration or offline support."
                }];
                return C(k, null, C(w.a, null, C(_, null, C(y, {
                    aboutItems: t
                }))))
            }
            S.displayName = "AboutList";
            var $ = i("R8uD"),
                T = o.a.createElement,
                M = s.default.section.withConfig({
                    componentId: "sc-1j3jgx1-0"
                })(["@media screen and (max-width:991px){padding:30px 0;}@media (min-width:768px){padding:60px 0;}"]);

            function E(t) {
                var e = t.children;
                return T(M, null, e)
            }
            E.displayName = "Section";
            var P = o.a.createElement,
                L = s.default.h2.withConfig({
                    componentId: "sc-1st17zm-0"
                })(["font-family:", ";line-height:1.2;letter-spacing:-0.01em;color:", ";font-weight:700;text-align:center;@media screen and (max-width:767px){font-size:38px;margin:0 0 40px;}@media (min-width:768px) and (max-width:991px){font-size:48px;margin:0 0 60px;}@media (min-width:992px){font-size:58px;margin:0 0 88px;}"], function(t) {
                    return t.theme.fonts.title
                }, function(t) {
                    return t.theme.fontColorTitle
                });

            function I(t) {
                var e = t.title;
                return P(L, null, e)
            }
            I.displayName = "Title";
            var z = o.a.createElement,
                H = s.default.div.withConfig({
                    componentId: "sc-1swivi8-0"
                })(["display:flex;@media screen and (max-width:991px){overflow-y:scroll;margin:-40px -24px -92px;padding:40px 24px 92px;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}}@media (min-width:992px){margin:0 -20px;}"]),
                D = s.default.div.withConfig({
                    componentId: "sc-1swivi8-1"
                })(["@media screen and (max-width:991px){margin-right:16px;&:last-child{margin-right:500px;}}@media screen and (max-width:374px){flex:0 0 90%;}@media (min-width:375px) and (max-width:991px){flex:0 0 311px;}@media (min-width:992px){width:calc(100% / 3);padding:0 20px;}"]),
                W = s.default.div.withConfig({
                    componentId: "sc-1swivi8-2"
                })(["height:100%;position:relative;padding:32px 32px 38px;border-color:", ";box-shadow:8px 26px 92px rgba(0,0,0,0.06);background-color:", ";border-radius:6px;transition:box-shadow ", ",background-color ", ";.theme-dark &{background-color:", ";color:", ";&:hover{background-color:", ";}}a{position:absolute;top:0;left:0;right:0;bottom:0;}p{font-size:17px;line-height:1.52;margin:0 0 20px;max-width:270px;&:last-child{margin:0;}}&:hover{box-shadow:8px 26px 92px rgba(0,0,0,0.11);}"], function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray800
                }, function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.colors.gray900
                }),
                N = s.default.div.withConfig({
                    componentId: "sc-1swivi8-3"
                })(["height:64px;"]),
                O = s.default.svg.withConfig({
                    componentId: "sc-1swivi8-4"
                })(["position:absolute;right:18px;bottom:18px;"]),
                A = s.default.div.withConfig({
                    componentId: "sc-1swivi8-5"
                })(["@media screen and (max-width:991px){flex:0 0 10px;}@media (min-width:992px){display:none;}"]);

            function F(t) {
                var e = t.list,
                    i = void 0 === e ? [] : e;
                return z(E, null, z(w.a, null, z(I, {
                    title: "Local-first case studies"
                }), z(H, null, i.map(function(t) {
                    return z(D, {
                        key: t.sys.id
                    }, z(W, {
                        className: !0 === t.fields.invertColor ? "invert-color" : ""
                    }, t.fields.link && z("a", {
                        href: t.fields.link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }), t.fields.icon && z(N, null, z("img", {
                        src: t.fields.icon.fields.file.url,
                        alt: ""
                    })), t.fields.description && Object($.documentToReactComponents)(t.fields.description), z(O, {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, z("path", {
                        d: "M1 1H9M9 1V9M9 1L1 9",
                        stroke: "#8C8C8C",
                        strokeWidth: "2"
                    }))))
                }), z(A, null))))
            }
            F.displayName = "CaseStudies";
            var j = o.a.createElement,
                R = s.default.div.withConfig({
                    componentId: "qrwcy4-0"
                })(["background-color:", ";border-radius:6px;box-shadow:34px 34px 80px rgba(0,0,0,0.06);overflow:hidden;pre{margin:0;}code{color:", ";}"], function(t) {
                    return t.theme.editorBg
                }, function(t) {
                    return t.theme.btnBg
                }),
                q = s.default.div.withConfig({
                    componentId: "qrwcy4-1"
                })(["height:46px;background-color:", ";display:flex;align-items:flex-end;"], function(t) {
                    return t.theme.editorTopBg
                }),
                B = s.default.div.withConfig({
                    componentId: "qrwcy4-2"
                })(["display:flex;align-items:center;margin:0 16px;height:46px;span{width:10px;height:10px;border-radius:50%;margin-right:7px;&:first-child{background-color:#ff4e48;}&:nth-child(2){background-color:#ffb615;}&:last-child{margin-right:0;background-color:#17d827;}}"]),
                V = s.default.div.withConfig({
                    componentId: "qrwcy4-3"
                })(["background-color:", ";font-size:14px;line-height:20px;color:", ";padding:10px 16px 8px;border-radius:6px 6px 0 0;min-width:124px;"], function(t) {
                    return t.theme.editorTabBg
                }, function(t) {
                    return t.theme.btnBg
                });

            function Z(t) {
                var e = t.children,
                    i = t.title,
                    n = void 0 === i ? "Todos.jsx" : i;
                return j(R, null, j(q, null, j(B, null, j("span", null), j("span", null), j("span", null)), j(V, null, n)), e)
            }
            Z.displayName = "BrowserChrome";
            var Y = i("DA+T"),
                X = o.a.createElement,
                U = s.default.div.withConfig({
                    componentId: "sc-1glquqq-0"
                })(["position:relative;"]),
                Q = s.default.div.withConfig({
                    componentId: "sc-1glquqq-1"
                })(["opacity:0;visibility:hidden;position:absolute;transition:opacity 0.5s ease-out;max-width:100%;&.is-active{opacity:1;position:relative;visibility:visible;}"]),
                G = s.default.div.withConfig({
                    componentId: "sc-1glquqq-2"
                })(["display:flex;flex-wrap:wrap;margin:0 -15px;"]),
                K = s.default.div.withConfig({
                    componentId: "sc-1glquqq-3"
                })(["padding:0 15px;@media screen and (max-width:767px){width:100%;}@media (min-width:768px){width:50%;}"]),
                J = s.default.div.withConfig({
                    componentId: "sc-1glquqq-4"
                })(["display:flex;margin:0 0 40px;"]),
                tt = s.default.div.withConfig({
                    componentId: "sc-1glquqq-5"
                })(["line-height:1.55;margin:0 0 12px;transition:color ", ";.theme-dark &{color:", ";}span{color:", ";}em{color:", ";font-style:normal;}@media screen and (max-width:767px){font-size:17px;}@media (min-width:768px){font-size:18px;br{display:none;}}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.colors.gray500
                }),
                et = s.default.img.withConfig({
                    componentId: "sc-1glquqq-6"
                })(["border-radius:50%;width:80px;height:80px;margin-right:40px;"]),
                it = s.default.div.withConfig({
                    componentId: "sc-1glquqq-7"
                })(["max-width:440px;"]),
                nt = s.default.div.withConfig({
                    componentId: "sc-1glquqq-8"
                })(["font-size:22px;line-height:1.54;transition:color ", ";max-width:440px;.theme-dark &{color:", ";}@media screen and (max-width:767px){margin:0 0 40px;}@media (min-width:768px) and (max-width:991px){margin:0 0 50px;}@media (min-width:992px){margin:0 0 64px;}p{margin:0 0 20px;&:last-child{margin:0;}}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.white
                }),
                ot = s.default.div.withConfig({
                    componentId: "sc-1glquqq-9"
                })(["position:relative;height:1px;max-width:440px;overflow:hidden;transition:background-color ", ";background-color:", ";.theme-dark &{background-color:", ";}&::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;transform:translate3d(-100%,0,0);transition:transform 5s ease-out;background-color:", ";.is-active &{transform:translate3d(0,0,0);}}@media screen and (max-width:767px){margin:0 0 40px;}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray500
                }, function(t) {
                    return t.theme.colors.whiteRgba
                }, function(t) {
                    return t.theme.fillYellow
                }),
                st = s.default.div.withConfig({
                    componentId: "sc-1glquqq-10"
                })(["position:relative;img{max-height:100%;}"]),
                at = s.default.div.withConfig({
                    componentId: "sc-1glquqq-11"
                })(["max-width:100%;", " transition:opacity 0.4s ease-out;&.is-active{opacity:1;visibility:visible;position:relative;}"], function(t) {
                    return t.isHidden && "overflow: hidden;position: absolute;visibility: hidden;opacity: 0;"
                });

            function rt(t) {
                var e = t.list,
                    i = void 0 === e ? [] : e,
                    o = Object(n.useState)(-1),
                    s = o[0],
                    a = o[1],
                    r = Object(n.useState)(!1),
                    l = r[0],
                    c = r[1];
                if (i.length > 1) {
                    var d = function() {
                        a(s === i.length - 1 ? 0 : s + 1)
                    };
                    Object(n.useEffect)(function() {
                        var t;
                        return t = -1 === s ? setInterval(d) : setInterval(d, 5e3),
                            function() {
                                clearInterval(t)
                            }
                    }), Object(n.useEffect)(function() {
                        return c(!0),
                            function() {
                                c(!1)
                            }
                    }, [])
                } else Object(n.useEffect)(function() {
                    a(0)
                }, []);
                return X(E, null, X(w.a, null, X(I, {
                    title: "Built for devs"
                }), X(U, null, i.map(function(t, e) {
                    return X(Q, {
                        key: t.sys.id,
                        className: e === s ? "is-active" : ""
                    }, X(G, null, X(K, null, X(J, null, t.fields.photo.fields.file.url && X(et, {
                        src: t.fields.photo.fields.file.url,
                        alt: ""
                    }), t.fields.name && X(it, null, X(tt, null, t.fields.name, t.fields.position && X("span", null, X("em", null, " / "), X("br", null), t.fields.position)), X(st, {
                        className: !0 === t.fields.invertColorOnBlackTheme ? "invert-color" : "",
                        style: {
                            height: t.fields.logo.fields.file.details.image.height / 2
                        }
                    }, t.fields.logo && X("img", {
                        src: t.fields.logo.fields.file.url,
                        alt: ""
                    })))), X(nt, null, t.fields.comment && Object($.documentToReactComponents)(t.fields.comment)), !0 === l && X(ot, {
                        className: "suka-line"
                    })), t.fields.code && X(K, null, X(Z, null, X(at, null, X(Y.a, null, t.fields.code))))))
                }))))
            }
            rt.displayName = "DevsList";
            var lt = o.a.createElement,
                ct = s.default.svg.withConfig({
                    componentId: "sc-199nhm8-0"
                })([".hero-black{fill:", ";padding:", ";transition:fill ", ";}.stroke-black{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.borderRadius
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                });

            function dt() {
                return lt(ct, {
                    width: "500",
                    height: "500",
                    viewBox: "0 0 500 500",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, lt("path", {
                    d: "M246 314C246 277.549 275.549 248 312 248C312.412 248 312.824 248.004 313.234 248.011C313.489 248.004 313.745 248 314 248C347.137 248 374 221.137 374 188L374 62C374 28.8629 347.137 2 314 2C280.863 2 254 28.8629 254 62V188C254 224.451 224.451 254 188 254C187.657 254 187.315 253.997 186.973 253.992C186.649 253.997 186.324 254 186 254C152.863 254 126 280.863 126 314C126 347.137 152.863 374 186 374C219.127 374 245.983 347.154 246 314.031C246 314.021 246 314.01 246 314Z",
                    className: "hero-black"
                }), lt("ellipse", {
                    rx: "60",
                    ry: "60",
                    transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 312 314)",
                    fill: "#F5FF80"
                }), lt("circle", {
                    r: "60",
                    transform: "matrix(1 0 0 -1 188 188)",
                    className: "hero-black"
                }), lt("circle", {
                    r: "60",
                    transform: "matrix(1 0 0 -1 188 62)",
                    fill: "#D7E4E3"
                }), lt("rect", {
                    width: "248",
                    height: "120",
                    rx: "60",
                    transform: "matrix(1 -5.56363e-08 -5.56363e-08 -1 124 500)",
                    fill: "#D7E4E3"
                }), lt("ellipse", {
                    rx: "59",
                    ry: "18",
                    transform: "matrix(1 0 0 -1 61 327)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), lt("ellipse", {
                    rx: "59",
                    ry: "18",
                    transform: "matrix(1 0 0 -1 61 291)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), lt("path", {
                    d: "M61 273C28.4152 273 2 264.941 2 255C2 245.059 28.4152 237 61 237",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), lt("ellipse", {
                    rx: "59",
                    ry: "18",
                    transform: "matrix(1 0 0 -1 61 363)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), lt("path", {
                    d: "M61 417C28.4152 417 1.99999 408.941 2 399C2 389.059 28.4152 381 61 381",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), lt("ellipse", {
                    rx: "60",
                    ry: "60",
                    transform: "matrix(1 0 0 -1 62 188)",
                    fill: "#F5FF80"
                }), lt("path", {
                    d: "M3.00001 61C3.00001 28.4152 29.4152 1.99999 62 1.99999C94.5848 1.99999 121 28.4152 121 61C121 93.5848 94.5848 120 62 120",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("ellipse", {
                    rx: "26",
                    ry: "26",
                    transform: "matrix(-1 -8.74228e-08 -8.74228e-08 1 62 61)",
                    fill: "#D7E4E3"
                }), lt("ellipse", {
                    cx: "439.001",
                    cy: "174",
                    rx: "59",
                    ry: "18",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("path", {
                    d: "M439.001 156C471.586 156 498.001 147.941 498.001 138C498.001 128.059 471.586 120 439.001 120",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("ellipse", {
                    cx: "439.001",
                    cy: "212.5",
                    rx: "59",
                    ry: "18.5",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("path", {
                    d: "M439.001 267C471.586 267 498.001 258.941 498.001 249C498.001 239.059 471.586 231 439.001 231",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("path", {
                    d: "M380.001 61C380.001 93.5848 406.416 120 439.001 120C471.586 120 498.001 93.5848 498.001 61C498.001 28.4152 471.586 2 439.001 2",
                    stroke: "#D7E4E3",
                    strokeWidth: "4"
                }), lt("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M440.943 469.042C439.93 451.728 425.568 438 408 438C391.984 438 379 425.016 379 409C379 392.983 391.984 380 408 380C424.016 380 437 392.984 437 409C437 410.671 437.161 412.359 437.539 413.974C440.347 429.329 453.782 440.971 469.941 441L470 441C486.016 441 499 453.983 499 470C499 486.016 486.016 499 470 499C453.984 499 441 486.016 441 470C441 469.679 440.981 469.359 440.943 469.042Z",
                    fill: "#F5FF80"
                }), lt("ellipse", {
                    cx: "408",
                    cy: "471",
                    rx: "29",
                    ry: "29",
                    transform: "rotate(-90 408 471)",
                    className: "hero-black"
                }), lt("circle", {
                    cx: "470",
                    cy: "408",
                    r: "29",
                    transform: "rotate(-90 470 408)",
                    fill: "#D7E4E3"
                }))
            }
            dt.displayName = "HeroSvg";
            var ht = i("8agM"),
                ut = o.a.createElement,
                pt = s.default.section.withConfig({
                    componentId: "sc-1kdyba5-0"
                })(["padding:30px 0;@media (min-width:768px){padding:60px 0;}"]),
                ft = s.default.div.withConfig({
                    componentId: "sc-1kdyba5-1"
                })(["display:flex;@media screen and (max-width:767px){text-align:center;flex-direction:column-reverse;}@media (min-width:768px){justify-content:space-between;}svg{@media screen and (max-width:767px){display:block;margin:0 auto 32px;height:auto;}@media (min-width:1280px){flex-shrink:0;}}"]),
                gt = s.default.div.withConfig({
                    componentId: "sc-1kdyba5-2"
                })(["@media (min-width:768px) and (max-width:991px){padding-right:30px;width:50%;flex-shrink:0;}@media (min-width:991px) and (max-width:1279px){padding-right:40px;width:60%;}@media (min-width:1280px){padding-right:139px;}h1{line-height:1.13;letter-spacing:-0.02em;background:", ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;transition:background ", ";@media screen and (max-width:767px){font-size:48px;margin:0 0 16px;}@media (min-width:768px) and (max-width:991px){font-size:54px;margin:0 0 20px;}@media (min-width:991px){font-size:72px;margin:0 0 24px;}}p{line-height:1.55;transition:color ", ";margin:0 0 20px;@media screen and (max-width:767px){font-size:17px;}@media (min-width:768px){font-size:18px;}}"], function(t) {
                    return t.theme.gradient
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.transition.time
                });

            function mt() {
                return ut(pt, null, ut(w.a, null, ut(ft, null, ut(gt, null, ut("h1", null, "The platform for local-first software"), ut("p", null, "Don’t write real-time APIs. Move your database to the browser. Homebase keeps local data in sync so you can build fast and collaborative React apps."), ut(ht.a, null)), ut(dt, null))))
            }
            mt.displayName = "Hero";
            var vt = o.a.createElement,
                bt = s.default.svg.withConfig({
                    componentId: "sc-1w8ebn8-0"
                })([".stroke-black{transition:stroke ", ";stroke:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.black
                });

            function xt() {
                return vt(bt, {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, vt("ellipse", {
                    rx: "10",
                    ry: "10",
                    transform: "matrix(-1 -8.74228e-08 -8.74228e-08 1 11 11)",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), vt("ellipse", {
                    rx: "4",
                    ry: "10",
                    transform: "matrix(-1 -8.74228e-08 -8.74228e-08 1 11 11)",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), vt("path", {
                    d: "M4 4C4 5.65685 7.13401 7 11 7C14.866 7 18 5.65685 18 4",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), vt("path", {
                    d: "M18 18C18 16.3431 14.866 15 11 15C7.13401 15 4 16.3431 4 18",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), vt("line", {
                    x1: "1",
                    y1: "11",
                    x2: "21",
                    y2: "11",
                    className: "stroke-black",
                    strokeWidth: "2"
                }))
            }
            xt.displayName = "IconPeace";
            var yt = o.a.createElement,
                wt = s.default.svg.withConfig({
                    componentId: "sc-1hb0yfr-0"
                })([".stroke-black{transition:stroke ", ";stroke:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.black
                });

            function Ct() {
                return yt(wt, {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, yt("line", {
                    x1: "12",
                    y1: "3",
                    x2: "12",
                    y2: "21",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), yt("line", {
                    x1: "21",
                    y1: "12",
                    x2: "3",
                    y2: "12",
                    className: "stroke-black",
                    strokeWidth: "2"
                }))
            }
            Ct.displayName = "IconPlus";
            var kt = o.a.createElement,
                _t = s.default.svg.withConfig({
                    componentId: "wq12ij-0"
                })([".stroke-black{transition:stroke ", ";stroke:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.black
                });

            function St() {
                return kt(_t, {
                    width: "20",
                    height: "26",
                    viewBox: "0 0 20 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, kt("path", {
                    d: "M8.03027 7.15259L11.1217 4.06118L8.03027 0.969772",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), kt("path", {
                    d: "M13.0918 19L10.0004 22.0914L13.0918 25.1828",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), kt("path", {
                    d: "M10.001 22C14.9715 22 19.001 17.9706 19.001 13C19.001 9.51707 17.0225 6.49623 14.1282 5M10.001 4C5.03041 4 1.00098 8.02944 1.00098 13C1.00098 16.9187 3.5054 20.2524 7.00098 21.4879",
                    className: "stroke-black",
                    strokeWidth: "2"
                }))
            }
            St.displayName = "IconRound";
            var $t = o.a.createElement,
                Tt = s.default.svg.withConfig({
                    componentId: "sc-9n5vfb-0"
                })([".stroke-black{transition:stroke ", ";stroke:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.black
                });

            function Mt() {
                return $t(Tt, {
                    width: "18",
                    height: "22",
                    viewBox: "0 0 18 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, $t("line", {
                    x1: "9",
                    y1: "-4.37115e-08",
                    x2: "9",
                    y2: "19",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), $t("path", {
                    d: "M4.90918 16.0911L9.06124 20.2431L13.2133 16.0911",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), $t("path", {
                    d: "M9 2C4.58172 2 1 3.11929 1 4.5C1 5.88071 4.58172 7 9 7",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), $t("ellipse", {
                    rx: "8",
                    ry: "2.5",
                    transform: "matrix(1 0 0 -1 9 9.5)",
                    className: "stroke-black",
                    strokeWidth: "2"
                }))
            }
            Mt.displayName = "IconSpiralDown";
            var Et = o.a.createElement,
                Pt = s.default.svg.withConfig({
                    componentId: "sc-1myqv65-0"
                })([".stroke-black{transition:stroke ", ";stroke:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.black
                });

            function Lt() {
                return Et(Pt, {
                    width: "18",
                    height: "22",
                    viewBox: "0 0 18 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Et("line", {
                    x1: "9",
                    y1: "22",
                    x2: "9",
                    y2: "3",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), Et("path", {
                    d: "M13.0908 6.1521L8.93876 2.00004L4.78671 6.1521",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), Et("path", {
                    d: "M9 20C13.4183 20 17 18.8807 17 17.5C17 16.1193 13.4183 15 9 15",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), Et("ellipse", {
                    rx: "8",
                    ry: "2.5",
                    transform: "matrix(-1 -8.74228e-08 -8.74228e-08 1 9 12.5)",
                    className: "stroke-black",
                    strokeWidth: "2"
                }))
            }
            Lt.displayName = "IconSpiralUp";
            var It = o.a.createElement,
                zt = s.default.div.withConfig({
                    componentId: "l9v5rt-0"
                })(["display:flex;margin:0 0 28px;&:last-child{margin:0;> div::before,> div::after{display:none;}}&:not(:first-of-type) > div{@media screen and (max-width:767px){margin:0 16px 0 0;}@media (min-width:768px) and (max-width:991px){margin:0 40px 0 -24px;}@media (min-width:992px){margin:0 92px 0 -24px;}}&:first-of-type > div{@media screen and (max-width:767px){margin:0 16px 0 0;}@media (min-width:768px) and (max-width:991px){margin:0 40px 0 -24px;}@media (min-width:992px){margin:0 92px 0 -24px;}}"]),
                Ht = s.default.div.withConfig({
                    componentId: "l9v5rt-1"
                })(["position:relative;margin-right:92px;&::before,&::after{content:'';position:absolute;width:1px;left:50%;transform:translate3d(-50%,0,0);}&::before{top:64px;transition:background-color ", ";background-color:", ";.theme-dark &{background-color:", ";}@media screen and (max-width:767px){bottom:-12px;}@media (min-width:768px){bottom:-12px;}}&::after{top:64px;background-color:", ";height:0;transition:height 0.3s ease-out;.is-active &{@media screen and (max-width:767px){height:calc(100% - 52px);}@media (min-width:768px){height:calc(100% - 52px);}}}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray400
                }, function(t) {
                    return t.theme.colors.whiteRgba
                }, function(t) {
                    return t.theme.fillYellow
                }),
                Dt = s.default.div.withConfig({
                    componentId: "l9v5rt-2"
                })(["width:48px;height:48px;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:background-color ", ";background-color:", ";.is-active &{background-color:", ";.theme-dark &{background-color:", ";}.stroke-black{stroke:", ";.theme-dark &{stroke:", ";}}}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillGrayYellow
                }, function(t) {
                    return t.theme.colors.black
                }, function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.colors.white
                }, function(t) {
                    return t.theme.colors.black
                }),
                Wt = s.default.article.withConfig({
                    componentId: "l9v5rt-3"
                })(["max-width:344px;"]),
                Nt = s.default.h2.withConfig({
                    componentId: "l9v5rt-4"
                })(["line-height:1.25;letter-spacing:-0.02em;color:", ";transition:color ", ";@media screen and (max-width:767px){font-size:22px;margin:12px 0 8px;}@media (min-width:768px){font-size:24px;margin:12px 0 24px;}"], function(t) {
                    return t.theme.fontColorTitle
                }, function(t) {
                    return t.theme.transition.time
                }),
                Ot = s.default.p.withConfig({
                    componentId: "l9v5rt-5"
                })(["font-size:15px;line-height:1.6;color:", ";margin:0;transition:color ", ";.theme-dark &{color:", ";}"], function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray700
                });

            function At() {
                var t = [{
                        icon: It(Ct, null),
                        title: "Create a DB right in React",
                        txt: "Skip API development and start building with React and Homebase. It all starts in your browser. Setup is a few lines of code. Add schema, relationships and validations incrementally."
                    }, {
                        icon: It(Mt, null),
                        title: "Reactively save data",
                        txt: "Make your app feel native. Make it faster and work offline. Our consistency mechanisms make offline transactions as easy as transacting to a central cloud database."
                    }, {
                        icon: It(Lt, null),
                        title: "Reactively query data",
                        txt: "Don't wait on the network. We'll cache everything and automatically subscribe clients to changes."
                    }, {
                        icon: It(St, null),
                        title: "Sync with Homebase",
                        txt: "Homebase keeps your local and cloud data in sync so everything just works. No API needed. We'll back it up, sync it, and even help you authenticate and authorize users."
                    }, {
                        icon: It(xt, null),
                        title: "Go to production",
                        txt: "When it's time to ship we make it easy. Homebase automatically builds dev and staging environments. In prod we've got you covered with telemetry and the first set of administration tools for local-first data. We love to sleep too."
                    }],
                    e = Object(n.useState)(!1),
                    i = e[0],
                    s = e[1],
                    a = function() {
                        document.querySelectorAll(".action-on-scroll").forEach(function(t) {
                            var e = t.offsetTop;
                            window.pageYOffset + window.outerHeight / 2 > e ? t.classList.add("is-active") : t.classList.remove("is-active")
                        }), s(!0)
                    };
                return Object(n.useEffect)(function() {
                    return window.addEventListener("scroll", a),
                        function() {
                            window.removeEventListener("scroll", a)
                        }
                }, [i]), It(o.a.Fragment, null, t.map(function(t) {
                    return It(zt, {
                        className: "action-on-scroll ".concat(!0 === i ? "is-active" : ""),
                        key: t.title
                    }, It(Ht, null, It(Dt, null, t.icon)), It(Wt, null, It(Nt, null, t.title), It(Ot, null, t.txt)))
                }))
            }
            var Ft = o.a.createElement,
                jt = s.default.h2.withConfig({
                    componentId: "sc-1t8ay7g-0"
                })(["line-height:1.17;letter-spacing:-0.01em;color:", ";@media screen and (max-width:767px){font-size:38px;margin:0 0 24px;}@media (min-width:768px) and (max-width:991px){font-size:52px;margin:0 40px 28px 0;}@media (min-width:992px){font-size:58px;margin:0 180px 32px 0;}"], function(t) {
                    return t.theme.fontColorTitle
                }),
                Rt = s.default.div.withConfig({
                    componentId: "sc-1t8ay7g-1"
                })(["@media screen and (max-width:767px){padding:0 0 32px;}@media (min-width:768px) and (max-width:991px){margin-right:60px;}@media (min-width:992px){margin-right:180px;}p{font-size:17px;line-height:26px;margin:0 0 26px;&:last-child{margin:0;}}"]);

            function qt(t) {
                var e = t.text;
                return Ft(o.a.Fragment, null, Ft(jt, null, e.title), Ft(Rt, {
                    dangerouslySetInnerHTML: {
                        __html: e.text
                    }
                }))
            }
            var Bt = o.a.createElement,
                Vt = s.default.div.withConfig({
                    componentId: "sc-26scwg-0"
                })(["display:flex;flex-wrap:wrap;"]),
                Zt = s.default.div.withConfig({
                    componentId: "sc-26scwg-1"
                })(["@media screen and (max-width:767px){width:100%;}@media (min-width:768px){width:50%;}"]),
                Yt = s.default.div.withConfig({
                    componentId: "sc-26scwg-2"
                })(["position:sticky;top:140px;"]);

            function Xt() {
                return Bt(E, null, Bt(w.a, null, Bt(Vt, null, Bt(Zt, null, Bt(Yt, null, Bt(qt, {
                    text: {
                        title: "Easy to use",
                        text: "<p>Your DB is like Git now. Share it directly with the client. Replicate, fork, and join data from multiple Homebase databases. This is possible because of the automatic conflict resolution and built-in versioning of data. As a side effect of this data portability, you can eliminate many APIs and ETLs.</p><p>Attribute-level authorization simplified. Publishing of public APIs, end-to-end encryption, easy GDPR. It all comes by default when using Homebase + Datahike.</p>"
                    }
                }))), Bt(Zt, null, Bt(At, null)))))
            }
            Xt.displayName = "HowToUse";
            var Ut = o.a.createElement,
                Qt = s.default.svg.withConfig({
                    componentId: "iqjqtc-0"
                })([".fill-black{transition:fill ", ";fill:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                });

            function Gt() {
                return Ut(Qt, {
                    width: "46",
                    height: "52",
                    viewBox: "0 0 46 52",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Ut("g", {
                    clipPath: "url(#clip0)"
                }, Ut("path", {
                    d: "M36.5199 41.9499L31.3576 25.927L44.8713 16.0271H28.1668L23.0039 0.00452962L23.0023 0.000181185H39.7093L44.8735 16.0252L44.8738 16.0249L44.8781 16.0225C47.8771 25.3191 44.7883 35.893 36.5199 41.9497V41.9499ZM9.48638 41.9499L9.48224 41.9529L22.9996 51.8556L36.5199 41.9502L23.0039 32.0474L9.48656 41.9499H9.48638ZM1.13194 16.0229C-2.02512 25.8228 1.63955 36.2069 9.48386 41.9519L9.48512 41.9468L14.6484 25.9248L1.13751 16.0267H17.8381L23.0012 0.00434843L23.0023 0H6.29428L1.13176 16.0229H1.13194Z",
                    className: "fill-black"
                })), Ut("defs", null, Ut("clipPath", {
                    id: "clip0"
                }, Ut("rect", {
                    width: "46",
                    height: "52",
                    fill: "white"
                }))))
            }
            Gt.displayName = "StripeIcon";
            var Kt = o.a.createElement,
                Jt = s.default.svg.withConfig({
                    componentId: "sc-1ciwl62-0"
                })([".fill-black{transition:fill ", ";fill:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                });

            function te() {
                return Kt(Jt, {
                    width: "50",
                    height: "56",
                    viewBox: "0 0 50 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Kt("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M29.8001 6.41347L41.352 13.0531C41.6855 12.7018 42.0682 12.4003 42.4883 12.158C44.884 10.7869 47.9399 11.6009 49.3315 13.9859C50.7088 16.3709 49.8911 19.4127 47.4952 20.798C47.0782 21.037 46.6289 21.2151 46.161 21.3268V34.6109C46.6238 34.7228 47.0682 34.8997 47.4809 35.1363C49.8911 36.5215 50.7088 39.5635 49.3172 41.9485C47.9399 44.3333 44.8698 45.1474 42.4739 43.7765C42.0097 43.5114 41.5916 43.1735 41.2356 42.7758L29.754 49.3746C29.9221 49.8814 30.0075 50.4118 30.0069 50.9455C30.0069 53.6875 27.769 55.9298 25.0001 55.9298C22.2311 55.9298 19.9932 53.7017 19.9932 50.9455C19.9932 50.4556 20.0639 49.9824 20.1958 49.5354L8.64693 42.8977C8.31707 43.242 7.93973 43.5379 7.52622 43.7765C5.11607 45.1474 2.06021 44.3333 0.682863 41.9485C-0.694285 39.5635 0.123488 36.5215 2.51919 35.1363C2.9319 34.8997 3.37633 34.7227 3.83911 34.6107V21.3268C3.37122 21.2151 2.9219 21.037 2.50493 20.798C0.109035 19.4271 -0.708739 16.3709 0.668605 13.9859C2.04595 11.6009 5.11587 10.7869 7.51177 12.158C7.92956 12.399 8.3104 12.6986 8.64263 13.0474L20.1979 6.40608C20.0617 5.94586 19.9928 5.46851 19.9932 4.98872C19.9932 2.23275 22.2311 0.00463867 25.0001 0.00463867C27.769 0.00463867 30.0069 2.23255 30.0069 4.98872C30.0069 5.48412 29.9346 5.96221 29.8001 6.41347ZM28.5965 8.45921L40.176 15.1144C39.9916 15.756 39.9388 16.428 40.0205 17.0903C40.1023 17.7527 40.317 18.3919 40.652 18.97C41.3569 20.1906 42.5051 20.9998 43.7795 21.3152V34.6158C43.7145 34.6315 43.6499 34.6488 43.5856 34.6671L28.462 8.59239C28.5077 8.54884 28.5526 8.50451 28.5965 8.4594V8.45921ZM21.5413 8.59531L6.41782 34.6696C6.35243 34.6508 6.28666 34.6333 6.22056 34.6171V21.3152C7.49497 20.9998 8.64321 20.1906 9.3481 18.97C9.68372 18.3908 9.89867 17.7502 9.98011 17.0865C10.0616 16.4228 10.0078 15.7496 9.82212 15.107L21.3983 8.45377C21.445 8.50179 21.4926 8.54903 21.5413 8.59511V8.59531ZM26.3991 9.77644L41.519 35.8449C41.1727 36.1739 40.8758 36.5509 40.6376 36.9642C40.3999 37.3751 40.2222 37.8175 40.1098 38.2782H9.89068C9.77812 37.8175 9.6003 37.3751 9.36255 36.9642C9.12349 36.5538 8.82718 36.1791 8.48247 35.8514L23.6053 9.77761C24.0587 9.90756 24.5282 9.97328 25.0001 9.97281C25.4858 9.97281 25.9551 9.90437 26.3991 9.77644ZM28.7028 47.5878L40.2071 40.9758C40.1726 40.8679 40.1418 40.7588 40.1147 40.6488H9.88423C9.86821 40.7135 9.85083 40.7777 9.83228 40.8417L21.3928 47.4861C21.8597 47.0029 22.4199 46.6187 23.0398 46.3567C23.6598 46.0947 24.3266 45.9602 25.0001 45.9615C25.6971 45.9602 26.3867 46.1043 27.0244 46.3844C27.6621 46.6645 28.2338 47.0745 28.7028 47.5878Z",
                    className: "fill-black"
                }))
            }
            te.displayName = "StripeIcon";
            var ee = o.a.createElement,
                ie = s.default.svg.withConfig({
                    componentId: "fvw567-0"
                })([".fill-black{transition:fill ", ";fill:", ";}.stroke-black{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                });

            function ne() {
                return ee(ie, {
                    width: "332",
                    height: "333",
                    viewBox: "0 0 332 333",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, ee("circle", {
                    cx: "124",
                    cy: "209",
                    r: "40",
                    transform: "rotate(-90 124 209)",
                    fill: "#F5FF80"
                }), ee("circle", {
                    cx: "208",
                    cy: "125",
                    r: "40",
                    transform: "rotate(-90 208 125)",
                    fill: "#F5FF80"
                }), ee("circle", {
                    cx: "292",
                    cy: "209",
                    r: "40",
                    transform: "rotate(-90 292 209)",
                    className: "fill-black"
                }), ee("circle", {
                    cx: "292",
                    cy: "125",
                    r: "40",
                    transform: "rotate(-90 292 125)",
                    className: "fill-black"
                }), ee("circle", {
                    cx: "208",
                    cy: "41",
                    r: "40",
                    transform: "rotate(-90 208 41)",
                    fill: "#D7E4E3"
                }), ee("circle", {
                    cx: "208",
                    cy: "293",
                    r: "40",
                    transform: "rotate(-90 208 293)",
                    fill: "#D7E4E3"
                }), ee("path", {
                    d: "M168 209C168 184.699 148.301 165 124 165C101.909 165 84 147.091 84 125L84 40C84 17.9086 101.909 -2.63437e-07 124 0C146.091 2.63437e-07 164 17.9086 164 40V125C164 149.301 183.699 169 208 169C231.57 169 250.812 150.467 251.947 127.178L268.156 110.969C278.632 100.493 295.618 100.493 306.094 110.969C316.57 121.445 316.57 138.43 306.094 148.906L289.953 165.047C266.603 166.116 248 185.385 248 209C248 231.091 230.091 249 208 249C185.909 249 168 231.091 168 209Z",
                    className: "fill-black"
                }), ee("rect", {
                    x: "164",
                    y: "333",
                    width: "162",
                    height: "80",
                    rx: "40",
                    transform: "rotate(-180 164 333)",
                    fill: "#D7E4E3"
                }), ee("line", {
                    x1: "40",
                    y1: "30",
                    x2: "40",
                    y2: "246",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("path", {
                    d: "M40 68C19.0132 68 2 72.9249 2 79C2 85.0751 19.0132 90 40 90",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("ellipse", {
                    rx: "38",
                    ry: "11",
                    transform: "matrix(1 0 0 -1 40 101)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("ellipse", {
                    rx: "38",
                    ry: "11",
                    transform: "matrix(1 0 0 -1 40 123)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("ellipse", {
                    rx: "38",
                    ry: "11",
                    transform: "matrix(1 0 0 -1 40 189)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("ellipse", {
                    rx: "38",
                    ry: "11",
                    transform: "matrix(1 0 0 -1 40 211)",
                    className: "stroke-black",
                    strokeWidth: "4"
                }), ee("path", {
                    d: "M40 222C60.9868 222 78 226.925 78 233C78 239.075 60.9868 244 40 244",
                    className: "stroke-black",
                    strokeWidth: "4"
                }))
            }
            ne.displayName = "Integrations";
            var oe = o.a.createElement,
                se = s.default.svg.withConfig({
                    componentId: "sc-10rhtde-0"
                })([".fill-black{transition:fill ", ";fill:", ";}.fill-white{transition:fill ", ";fill:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillWhite
                });

            function ae() {
                return oe(se, {
                    width: "56",
                    height: "49",
                    viewBox: "0 0 56 49",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, oe("path", {
                    d: "M45.9146 15.9478C45.3245 15.748 44.7295 15.563 44.1299 15.3929C44.2294 14.9942 44.3213 14.5938 44.4057 14.1918C45.7566 7.72113 44.8733 2.50835 41.8571 0.79238C38.9652 -0.853381 34.2354 0.862587 29.4586 4.9644C28.9879 5.36951 28.5276 5.78629 28.0783 6.21434C27.7774 5.92971 27.4711 5.65061 27.1597 5.37717C22.1535 0.990898 17.1354 -0.857255 14.1223 0.863798C11.2332 2.51416 10.3774 7.41489 11.5936 13.5471C11.7146 14.1544 11.8512 14.7586 12.0033 15.359C11.2933 15.558 10.6075 15.7701 9.95149 15.9957C4.08236 18.0148 0.333984 21.1794 0.333984 24.4618C0.333984 27.8521 4.35763 31.2525 10.4711 33.3142C10.9668 33.4806 11.4667 33.6348 11.9702 33.7766C11.8066 34.4235 11.6614 35.0747 11.5347 35.7296C10.3752 41.7553 11.2808 46.5398 14.1623 48.18C17.1386 49.8735 22.1338 48.1328 26.998 43.9373C27.3825 43.6056 27.7684 43.2539 28.1548 42.8852C28.6415 43.3486 29.1413 43.7985 29.6534 44.2344C34.365 48.235 39.0182 49.8505 41.8973 48.2059C44.8709 46.5074 45.837 41.3675 44.5824 35.1139C44.4867 34.6363 44.375 34.1485 44.2499 33.6517C44.6008 33.5495 44.945 33.444 45.2808 33.334C51.6363 31.2564 55.771 27.8973 55.771 24.4618C55.771 21.1676 51.902 17.9816 45.9146 15.9478Z",
                    className: "fill-black"
                }), oe("path", {
                    d: "M44.5361 31.116C44.2331 31.215 43.922 31.3106 43.605 31.4033C42.9033 29.2117 41.9563 26.881 40.7978 24.4734C41.9035 22.1226 42.8138 19.822 43.4958 17.6444C44.0628 17.8066 44.6134 17.9773 45.1438 18.1576C50.274 19.9 53.4031 22.4766 53.4031 24.4618C53.4031 26.5765 50.0235 29.3218 44.5363 31.116H44.5361ZM42.2593 35.5679C42.814 38.3331 42.8933 40.8332 42.5257 42.7876C42.1955 44.5438 41.5316 45.7145 40.7107 46.1835C38.9636 47.1814 35.2272 45.8842 31.1982 42.463C30.7362 42.0708 30.2708 41.6519 29.8041 41.2089C31.3662 39.523 32.9274 37.563 34.451 35.3865C37.1311 35.1519 39.663 34.7682 41.9592 34.2446C42.0721 34.6949 42.1727 35.1362 42.2593 35.5679ZM19.2337 46.0111C17.5268 46.6059 16.1674 46.6229 15.3457 46.1554C13.5969 45.1604 12.8702 41.3183 13.8616 36.1653C13.9795 35.5564 14.1145 34.9507 14.2665 34.3492C16.5371 34.8447 19.0507 35.2013 21.7372 35.4163C23.2709 37.546 24.8771 39.5036 26.4959 41.2179C26.1519 41.5463 25.7997 41.8662 25.4397 42.1775C23.2888 44.0329 21.1334 45.349 19.234 46.0111H19.2337ZM11.2372 31.1029C8.53399 30.1912 6.3016 29.0064 4.77138 27.7136C3.39647 26.5515 2.70215 25.3979 2.70215 24.4618C2.70215 22.47 5.71179 19.9293 10.7313 18.2024C11.3613 17.9866 11.9976 17.7891 12.6393 17.61C13.3332 19.8365 14.2432 22.1645 15.3413 24.5187C14.2289 26.9079 13.3059 29.2729 12.6057 31.5256C12.1461 31.3958 11.6898 31.2549 11.2372 31.1029ZM13.9178 13.0983C12.8758 7.84414 13.5677 3.8808 15.3089 2.88628C17.1637 1.82687 21.2647 3.33754 25.5871 7.12463C25.8634 7.36672 26.1409 7.6202 26.4189 7.88239C24.8084 9.58891 23.2169 11.5317 21.6965 13.6491C19.0892 13.8875 16.5933 14.2705 14.2988 14.7835C14.1575 14.225 14.0305 13.663 13.9178 13.0981V13.0983ZM37.8308 18.9248C37.2889 18.0011 36.7268 17.089 36.1451 16.1891C37.914 16.4094 39.6086 16.7024 41.1999 17.0609C40.7222 18.5718 40.1268 20.1517 39.4256 21.7714C38.9132 20.8121 38.3815 19.8631 37.8308 18.9248ZM28.0791 9.55236C29.1714 10.72 30.2654 12.0239 31.3415 13.4385C29.1586 13.3367 26.9722 13.3362 24.7893 13.437C25.8663 12.0355 26.9697 10.7335 28.0791 9.55236ZM18.2648 18.9408C17.721 19.8716 17.1993 20.8148 16.7 21.7697C16.0104 20.1556 15.4203 18.5687 14.9385 17.0362C16.5202 16.6869 18.2069 16.4015 19.9643 16.1848C19.3761 17.0902 18.8094 18.0091 18.2648 18.9408ZM20.0149 32.9055C18.1993 32.7056 16.4871 32.4347 14.9058 32.095C15.3953 30.5354 15.9983 28.9144 16.7027 27.2657C17.2041 28.2213 17.7281 29.165 18.2744 30.0963C18.8319 31.0462 19.4122 31.9829 20.0149 32.9055ZM28.1446 39.5363C27.0222 38.3411 25.9027 37.0192 24.8092 35.5974C25.8705 35.6386 26.9527 35.6594 28.0526 35.6594C29.1827 35.6594 30.2997 35.6344 31.3991 35.586C30.3196 37.0337 29.2295 38.3575 28.1446 39.5363ZM39.4481 27.1817C40.1891 28.8483 40.8137 30.4606 41.3098 31.9938C39.7023 32.3557 37.967 32.6472 36.1384 32.8637C36.7244 31.947 37.2918 31.019 37.8404 30.0801C38.398 29.1258 38.9341 28.1595 39.4481 27.1817ZM35.7888 28.9127C34.9491 30.3522 34.0621 31.7643 33.1293 33.1469C31.4845 33.2629 29.7847 33.3227 28.0526 33.3227C26.3276 33.3227 24.6494 33.2697 23.0334 33.1663C22.0764 31.7869 21.1726 30.3723 20.324 28.9255C19.4794 27.4864 18.6904 26.0161 17.9589 24.5179C18.6886 23.0193 19.4751 21.5482 20.3169 20.1079V20.1084C21.1584 18.6678 22.055 17.2592 23.0049 15.8858C24.6536 15.7628 26.344 15.6984 28.0529 15.6984C29.7693 15.6984 31.4619 15.7633 33.1101 15.8873C34.0504 17.2586 34.9413 18.6622 35.7812 20.0956C36.6259 21.5327 37.4229 22.9965 38.1711 24.4848C37.4306 25.9882 36.6361 27.4651 35.7891 28.9127H35.7888ZM40.6744 2.8168C42.5306 3.8733 43.2527 8.13344 42.0863 13.7203C42.0099 14.0842 41.9268 14.4468 41.837 14.8077C39.5372 14.2841 37.0396 13.8943 34.4247 13.6522C32.9014 11.5119 31.3231 9.56567 29.7386 7.88118C30.1538 7.48621 30.5789 7.10148 31.0134 6.72735C35.1063 3.21262 38.9314 1.82493 40.6744 2.8168Z",
                    className: "fill-white"
                }), oe("path", {
                    d: "M28.0529 19.577C30.787 19.577 33.0032 21.7641 33.0032 24.4618C33.0032 27.1597 30.787 29.3468 28.0529 29.3468C25.319 29.3468 23.1025 27.1597 23.1025 24.4618C23.1025 21.7641 25.319 19.577 28.0529 19.577Z",
                    className: "fill-black"
                }))
            }
            ae.displayName = "StripeIcon";
            var re = o.a.createElement,
                le = s.default.svg.withConfig({
                    componentId: "gp3l6n-0"
                })([".fill-black{transition:fill ", ";fill:", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                });

            function ce() {
                return re(le, {
                    width: "64",
                    height: "26",
                    viewBox: "0 0 64 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, re("path", {
                    d: "M4.49775 10.1445C4.49775 9.47077 5.06662 9.21152 6.009 9.21152C7.36 9.21152 9.06663 9.60903 10.4178 10.3174V6.25698C8.94225 5.68684 7.4845 5.46221 6.009 5.46221C2.4 5.46221 0 7.29374 0 10.352C0 15.1206 6.7555 14.3605 6.7555 16.4166C6.7555 17.2113 6.0445 17.4705 5.04887 17.4705C3.57337 17.4705 1.68887 16.883 0.1955 16.0883V20.2004C1.84888 20.8916 3.52 21.1852 5.04887 21.1852C8.74662 21.1852 11.2889 19.4057 11.2889 16.3129C11.2711 11.164 4.49775 12.0797 4.49775 10.1445ZM16.5155 2.00666L12.1777 2.90505L12.16 16.7448C12.16 19.302 14.1334 21.1852 16.7645 21.1852C18.2222 21.1852 19.2889 20.9261 19.8755 20.6151V17.1076C19.3067 17.3323 16.4977 18.127 16.4977 15.5699V9.43615H19.8755V5.75597H16.4977L16.5155 2.00666ZM25.4045 7.03449L25.12 5.75597H21.28V20.8742H25.7245V10.6284C26.7733 9.29802 28.5511 9.5399 29.1022 9.7299V5.75597C28.5334 5.54859 26.4534 5.16846 25.4045 7.03449ZM30.1866 5.75597H34.6489V20.8742H30.1866V5.75597ZM30.1866 4.44282L34.6489 3.50981V0.00238037L30.1866 0.918144V4.4427V4.44282ZM43.9289 5.46221C42.1866 5.46221 41.0666 6.25698 40.4445 6.80998L40.2132 5.73872H36.3022V25.8848L40.7466 24.9691L40.7645 20.0794C41.4045 20.5287 42.3466 21.168 43.9111 21.168C47.0934 21.168 49.9911 18.6799 49.9911 13.2028C49.9734 8.19213 47.04 5.46221 43.9289 5.46221ZM42.8623 17.3668C41.8134 17.3668 41.191 17.004 40.7645 16.5548L40.7466 10.1445C41.2089 9.64353 41.8489 9.29802 42.8623 9.29802C44.48 9.29802 45.6 11.0603 45.6 13.3237C45.6 15.639 44.4977 17.3668 42.8623 17.3668ZM64 13.3756C64 8.95239 61.7955 5.46221 57.5822 5.46221C53.351 5.46221 50.791 8.95251 50.791 13.3411C50.791 18.5417 53.8134 21.168 58.151 21.168C60.2666 21.168 61.8666 20.7014 63.0755 20.0449V16.5893C61.8667 17.1768 60.48 17.5396 58.72 17.5396C56.9955 17.5396 55.4666 16.9521 55.2711 14.9134H63.9645C63.9645 14.6886 64 13.7902 64 13.3756ZM55.2178 11.7342C55.2178 9.78178 56.4445 8.96964 57.5645 8.96964C58.6489 8.96964 59.8045 9.78178 59.8045 11.7342H55.2178Z",
                    className: "fill-black"
                }))
            }
            ce.displayName = "StripeIcon";
            var de = o.a.createElement,
                he = s.default.div.withConfig({
                    componentId: "cnto9r-0"
                })(["display:flex;flex-wrap:wrap;margin:0 -20px;@media (min-width:768px){padding:40px 0;}"]),
                ue = s.default.div.withConfig({
                    componentId: "cnto9r-1"
                })(["width:50%;padding:0 20px;&:first-child{svg{display:block;margin:0 auto;}}@media screen and (max-width:767px){width:100%;}@media (min-width:768px){width:50%;}@media (min-width:1280px){&:last-child > *{padding-left:110px;}}"]),
                pe = s.default.h2.withConfig({
                    componentId: "cnto9r-2"
                })(["font-size:28px;line-height:36px;letter-spacing:-0.02em;color:", ";@media screen and (max-width:767px){text-align:center;margin:0 0 40px;padding:48px 0 0;}@media (min-width:768px){margin:0 0 30px;}"], function(t) {
                    return t.theme.fontColorTitle
                }),
                fe = s.default.div.withConfig({
                    componentId: "cnto9r-3"
                })(["display:flex;justify-content:space-between;margin:0 -10px 32px;"]),
                ge = s.default.div.withConfig({
                    componentId: "cnto9r-4"
                })(["font-size:15px;line-height:1.6;color:", ";text-align:center;padding:0 10px;.theme-dark &{color:", ";}"], function(t) {
                    return t.theme.colors.gray300
                }, function(t) {
                    return t.theme.colors.gray700
                }),
                me = s.default.div.withConfig({
                    componentId: "cnto9r-5"
                })(["display:flex;align-items:center;height:55px;justify-content:center;margin:0 0 10px;"]),
                ve = s.default.div.withConfig({
                    componentId: "cnto9r-6"
                })(["font-size:18px;line-height:1.33;color:", ";margin:0 0 24px;"], function(t) {
                    return t.theme.fontColorTitle
                }),
                be = s.default.div.withConfig({
                    componentId: "cnto9r-7"
                })(["font-size:17px;line-height:1.52;color:", ";transition:color ", ";.theme-dark &{color:", ";}"], function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray700
                });

            function xe() {
                return de(E, null, de(w.a, null, de(he, null, de(ue, null, de(ne, null)), de(ue, null, de(pe, null, "Integrations"), de(fe, null, de(ge, null, de(me, null, de(te, null)), "GraphQL"), de(ge, null, de(me, null, de(ae, null)), "React"), de(ge, null, de(me, null, de(Gt, null)), "Auth0"), de(ge, null, de(me, null, de(ce, null)), "Stripe")), de(ve, null, de("strong", null, "SQL"), " and ", de("strong", null, "Spreadsheet")), de(be, null, "Or build your own. Datahike is open-source and you can join databases locally or in your own private cloud.")))))
            }
            xe.displayName = "Integration";
            var ye = i("7oih"),
                we = i("rePB"),
                Ce = i("ODXe"),
                ke = i("EGzX"),
                _e = i("8jkX"),
                Se = i("aqT/"),
                $e = i.n(Se),
                Te = o.a.createElement;

            function Me(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function Ee(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Me(Object(i), !0).forEach(function(e) {
                        Object(we.a)(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Me(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }
            var Pe = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-0"
                })(["display:flex;@media screen and (max-width:767px){position:relative;flex-direction:column;}"]),
                Le = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-1"
                })(["@media (min-width:768px){&:first-child{flex:0 0 298px;margin-right:86px;}&:last-child{width:calc(384 / 1160 * 100%);flex:1;}}"]),
                Ie = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-2"
                })(["cursor:pointer;&:not(:last-child){margin:0 0 40px;}&[data-active='true'],&:hover{h2{opacity:1;}}"]),
                ze = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-3"
                })(["@media screen and (max-width:767px){opacity:1;visibility:visible;position:relative;}@media (min-width:768px){display:none;}"]),
                He = s.default.h2.withConfig({
                    componentId: "sc-18n3kvm-4"
                })(["font-size:22px;line-height:1.36;letter-spacing:-0.02em;color:", ";margin:0 0 16px;transition:color ", ",opacity 0.5s ease-out;@media (min-width:768px){opacity:0.5;}"], function(t) {
                    return t.theme.fontColorTitle
                }, function(t) {
                    return t.theme.transition.time
                }),
                De = s.default.p.withConfig({
                    componentId: "sc-18n3kvm-5"
                })(["font-size:15px;line-height:1.6;margin:0 0 32px;color:", ";transition:color ", ";.theme-dracula as &{color:", ";}"], function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray700
                }),
                We = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-6"
                })(["position:relative;height:1px;overflow:hidden;background-color:", ";transition:background-color ", ";.theme-dark &{background-color:", ";}@media screen and (max-width:767px){display:none;}"], function(t) {
                    return t.theme.colors.gray500
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.whiteRgba
                }),
                Ne = Object(s.default)(ke.animated.div).withConfig({
                    componentId: "sc-18n3kvm-7"
                })(["position:absolute;top:0;left:0;right:0;height:1px;background-color:", ";"], function(t) {
                    return t.theme.fillYellow
                }),
                Oe = s.default.div.withConfig({
                    componentId: "sc-18n3kvm-8"
                })(["@media screen and (max-width:767px){display:none;}@media (min-width:768px){position:sticky;top:160px;}"]),
                Ae = (s.default.div.withConfig({
                    componentId: "sc-18n3kvm-9"
                })(["", ""], ""), s.default.div.withConfig({
                    componentId: "sc-18n3kvm-10"
                })(["max-width:100%;"])),
                Fe = [{
                    id: 1,
                    title: "Reactively query relational data locally",
                    txt: "Don't wait on the network. We'll cache everything and automatically subscribe clients to changes.",
                    code: "import { useCurrentUser, useQuery } from 'homebase-react'\n\nconst Todos = ({ project }) => {\n  const [currentUser] = useCurrentUser()\n  const [todos, errors, syncing] = useQuery({\n    $find: 'todo',\n    $where: {\n      todo: {\n        project,\n        isArchived: false,\n        assignedTo: { $not: currentUser },\n      },\n    },\n    $sort: { todo: { createdAt: 'asc' } },\n  })\n\n  if (errors) return errors.map((e, i) => <Error key={i} error={e} />)\n  return todos.map((todo) => <Todo key={todo.id} todo={todo} />)\n}"
                }, {
                    id: 2,
                    title: "Save instantly to a local DB",
                    txt: "Make your app feel native. Make it faster and work offline. Our consistency mechanisms make offline transactions as easy as transacting to a central cloud database.",
                    code: "import { useCurrentUser, useEntity, useTransact } from 'homebase-react'\n\n// Create\nconst [currentUser] = useCurrentUser()\nconst [project] = useEntity({ project: { name: 'Build the thing' }})\nconst [transact, errors, syncing] = useTransact()\nconst [ids, dbAfter, dbBefore] = transact([{\n  todo: {\n    title: 'Write more code',\n    assignedTo: currentUser,\n    project\n  }\n}])\n\n// Update\ntransact([{\n  todo: {\n    id: ids[0],\n    isCompleted: true\n  },\n}])"
                }, {
                    id: 3,
                    title: "Sync data across devices and between users",
                    txt: "Homebase keeps your local and cloud data in sync. No API needed.",
                    code: "<HomebaseProvider config={{ namespace: 'yourdomain.com' }}>\n  <YourComponents />\n</HomebaseProvider>"
                }],
                je = Fe.map(function(t) {
                    var e = t.code;
                    return function(t) {
                        var i = t.style,
                            n = t.onMouseEnter,
                            o = t.onMouseLeave;
                        return Te(ke.animated.div, {
                            style: i
                        }, Te(Ae, {
                            onMouseEnter: n,
                            onMouseLeave: o
                        }, Te(Y.a, null, e)))
                    }
                });

            function Re() {
                var t = o.a.useState({
                        i: 0,
                        paused: !0
                    }),
                    e = Object(Ce.a)(t, 2),
                    i = e[0],
                    n = e[1],
                    s = Object(_e.useTransition)(i.i, {
                        initial: {
                            opacity: 1,
                            position: "relative",
                            width: "100%"
                        },
                        from: {
                            opacity: 0,
                            position: "absolute",
                            width: "100%"
                        },
                        enter: {
                            opacity: 1,
                            position: "relative",
                            width: "100%"
                        },
                        leave: {
                            opacity: 0,
                            position: "absolute",
                            width: "100%"
                        }
                    }),
                    a = o.a.useCallback(function() {
                        n(Ee(Ee({}, i), {}, {
                            i: (i.i + 1) % Fe.length
                        }))
                    }, [i, n]),
                    r = Object(_e.useSpring)({
                        from: {
                            n: 0
                        },
                        to: {
                            n: 1e3
                        },
                        pause: i.paused,
                        config: {
                            duration: 5e3
                        },
                        loop: !0,
                        onRest: a
                    }).n,
                    l = Object(_e.useSpring)({
                        pause: i.paused,
                        config: {
                            clamp: !0,
                            duration: 10,
                            easing: function(t) {
                                return 1 - (1 - t) * (1 - t)
                            }
                        },
                        opacity: r.to([0, 1, 999, 1e3], [1, 1, 1, 0]),
                        x: r.to([0, 1, 999, 1e3], [-300, -300, 0, -300])
                    }),
                    c = l.x,
                    d = l.opacity,
                    h = o.a.useCallback(function(t) {
                        n({
                            i: 0,
                            paused: !t
                        })
                    }, [n]);
                return Te($e.a, {
                    onChange: h,
                    partialVisibility: !0
                }, Te(E, null, Te(w.a, null, Te(I, {
                    title: "Homebase platform"
                }), Te(Pe, null, Te(Le, null, Fe.map(function(t, e) {
                    return Te(Ie, {
                        key: t.title,
                        "data-active": e === i.i,
                        onClick: function() {
                            return n({
                                paused: !0,
                                i: e
                            })
                        },
                        onMouseEnter: function() {
                            return n({
                                paused: !0,
                                i: e
                            })
                        },
                        onMouseLeave: function() {
                            return n({
                                paused: !1,
                                i: e
                            })
                        }
                    }, Te(He, null, t.title), Te(De, null, t.txt), Te(We, null, i.i === e && Te(Ne, {
                        style: {
                            x: c,
                            opacity: d
                        }
                    })), Te(ze, null, Te(Z, null, Te(Ae, null, Te(Y.a, null, t.code)))))
                })), Te(Le, null, Te(Oe, null, Te(Z, null, s(function(t, e) {
                    var o = je[e];
                    return Te(o, {
                        style: t,
                        onClick: function() {
                            return n(Ee(Ee({}, i), {}, {
                                paused: !0
                            }))
                        },
                        onMouseEnter: function() {
                            return n(Ee(Ee({}, i), {}, {
                                paused: !0
                            }))
                        },
                        onMouseLeave: function() {
                            return n(Ee(Ee({}, i), {}, {
                                paused: !1
                            }))
                        }
                    })
                }))))))))
            }
            Re.displayName = "Platform";
            var qe = i("iyJt"),
                Be = o.a.createElement,
                Ve = s.default.svg.withConfig({
                    componentId: "z8t4nb-0"
                })([".fill-black{fill:", ";transition:fill ", ";}"], function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                });

            function Ze() {
                return Be(Ve, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Be("path", {
                    d: "M15 33.9998C25.4934 33.9998 34 25.4932 34 14.9998C34 6.71548 40.7157 -0.000244602 49 -0.000244141C57.2843 -0.00024368 64 6.71548 64 14.9998C64 23.284 57.2843 29.9998 49 29.9998L48.9863 29.9998C38.4992 30.0072 30 38.5109 30 48.9998C30 57.284 23.2843 63.9998 15 63.9998C6.71573 63.9998 -4.60906e-07 57.284 0 48.9998C4.60906e-07 40.7155 6.71573 33.9998 15 33.9998Z",
                    fill: "#F5FF80"
                }), Be("ellipse", {
                    cx: "15",
                    cy: "15",
                    rx: "15",
                    ry: "15",
                    className: "fill-black"
                }), Be("circle", {
                    cx: "49",
                    cy: "49",
                    r: "15",
                    fill: "#D7E4E3"
                }))
            }
            Ze.displayName = "IconManageable";
            var Ye = o.a.createElement,
                Xe = s.default.svg.withConfig({
                    componentId: "dgixvm-0"
                })([".fill-black{fill:", ";transition:fill ", ";}"], function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                });

            function Ue() {
                return Ye(Xe, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Ye("path", {
                    d: "M23.001 32C23.001 29.3175 24.4959 26.9171 26.2676 24.9029C28.5916 22.261 30.001 18.7951 30.001 15C30.001 6.71573 23.2853 4.60906e-07 15.001 0C6.71671 -4.60906e-07 0.000978915 6.71573 0.000978454 15C0.000978243 18.7951 1.41038 22.261 3.73432 24.9029C5.50608 26.9171 7.00098 29.3175 7.00098 32C7.00098 34.6825 5.50608 37.0829 3.73432 39.0971C1.41038 41.739 0.000976774 45.2049 0.000976562 49C0.000976102 57.2843 6.71671 64 15.001 64C23.2853 64 30.001 57.2843 30.001 49C30.001 45.2049 28.5916 41.739 26.2676 39.0971C24.4959 37.0829 23.001 34.6825 23.001 32Z",
                    className: "fill-black"
                }), Ye("rect", {
                    x: "34.001",
                    width: "30",
                    height: "30",
                    rx: "15",
                    fill: "#F5FF80"
                }), Ye("circle", {
                    cx: "49",
                    cy: "49",
                    r: "15",
                    fill: "#D7E4E3"
                }))
            }
            Ue.displayName = "IconPowered";
            var Qe = o.a.createElement,
                Ge = s.default.div.withConfig({
                    componentId: "sc-1g8uwk1-0"
                })(["display:flex;flex-wrap:wrap;@media screen and (max-width:767px){margin:0 -15px -32px;}@media (min-width:768px){margin:0 -15px;}"]),
                Ke = s.default.div.withConfig({
                    componentId: "sc-1g8uwk1-1"
                })(["padding:0 15px;display:flex;@media screen and (max-width:767px){width:100%;flex-direction:column;margin:0 0 32px;}@media (min-width:768px){width:50%;}"]),
                Je = s.default.div.withConfig({
                    componentId: "sc-1g8uwk1-2"
                })(["@media screen and (max-width:767px){padding-top:32px;}@media (min-width:768px){margin-left:56px;}"]),
                ti = s.default.h2.withConfig({
                    componentId: "sc-1g8uwk1-3"
                })(["font-size:24px;line-height:1.25;letter-spacing:-0.02em;color:", ";margin:0 0 24px;"], function(t) {
                    return t.theme.fontColorTitle
                }),
                ei = s.default.div.withConfig({
                    componentId: "sc-1g8uwk1-4"
                })(["font-size:17px;line-height:1.52;margin:0;max-width:320px;"]);

            function ii() {
                return Qe(E, null, Qe(w.a, null, Qe(Ge, null, Qe(Ke, null, Qe(Ue, null), Qe(Je, null, Qe("a", {
                    href: "https://github.com/replikativ/datahike",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, Qe(ti, null, "Homebase is powered by", Qe("br", null), "Datahike ", Qe(qe.a, null))), Qe(ei, null, "The first open source real-time collaborative relational database that lives in your browser."))), Qe(Ke, null, Qe(Ze, null), Qe(Je, null, Qe(ti, null, "Make your data more", Qe("br", null), "manageable"), Qe(ei, null, "The best of local caching with the best of the cloud."))))))
            }
            ii.displayName = "Powered";
            var ni = i("YFqc"),
                oi = i.n(ni),
                si = o.a.createElement,
                ai = s.default.svg.withConfig({
                    componentId: "sc-1nbhgf6-0"
                })([".fill-black{fill:", ";transition:fill ", ";}"], function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                });

            function ri() {
                return si(ai, {
                    width: "94",
                    height: "63",
                    viewBox: "0 0 94 63",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, si("path", {
                    d: "M62.0005 47.9995C62.0005 38.6107 69.6116 30.9995 79.0005 30.9995C87.2848 30.9995 94.0005 24.2838 94.0005 15.9995C94.0005 7.71524 87.2848 0.999512 79.0005 0.999512C70.7162 0.999512 64.0005 7.71524 64.0005 15.9995C64.0005 16.0776 63.9855 16.1543 63.957 16.2254C63.3287 25.042 55.9771 31.9995 47.0005 31.9995C37.6723 31.9995 30.099 24.4865 30.0014 15.1814L28.5138 13.6938C24.4213 9.60123 17.786 9.60123 13.6934 13.6938C9.60089 17.7863 9.60089 24.4216 13.6934 28.5142L16.222 31.0427C25.0407 31.6688 32.0005 39.0214 32.0005 47.9995C32.0005 56.2838 38.7162 62.9995 47.0005 62.9995C55.2847 62.9995 62.0005 56.2838 62.0005 47.9995Z",
                    className: "fill-black"
                }), si("circle", {
                    r: "15",
                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 79 48)",
                    fill: "#F5FF80"
                }), si("circle", {
                    r: "15",
                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 47 15)",
                    fill: "#F5FF80"
                }), si("circle", {
                    r: "15",
                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 15 48)",
                    fill: "#D7E4E3"
                }), si("circle", {
                    r: "15",
                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 15 16)",
                    className: "fill-black"
                }))
            }
            ri.displayName = "IconPricing";
            var li = o.a.createElement,
                ci = s.default.div.withConfig({
                    componentId: "twu9gt-0"
                })(["text-align:center;border-top:1px solid ", ";transition:border-color ", ";.theme-dark &{border-color:", ";}@media screen and (max-width:767px){margin-top:-12px;padding:48px 0 60px;}@media (min-width:768px){padding:120px 0 100px;}"], function(t) {
                    return t.theme.colors.gray500
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.whiteRgba
                }),
                di = s.default.h2.withConfig({
                    componentId: "twu9gt-1"
                })(["line-height:1.17;letter-spacing:-0.02em;color:", ";@media screen and (max-width:767px){font-size:48px;margin:0 0 16px;}@media (min-width:768px){font-size:68px;margin:0 0 32px;padding:80px 0 0;}"], function(t) {
                    return t.theme.fontColorTitle
                }),
                hi = s.default.div.withConfig({
                    componentId: "twu9gt-2"
                })(["line-height:1.5;@media screen and (max-width:767px){font-size:17px;margin:0 0 32px;br{display:none;}}@media (min-width:768px){font-size:22px;margin:0 0 48px;}"]),
                ui = s.default.a.withConfig({
                    componentId: "twu9gt-3"
                })([""]);

            function pi() {
                return li(E, null, li(w.a, null, li(ci, null, li(ri, null), li(di, null, "Pricing"), li(hi, null, "Free for small projects. Pay as you grow.", li("br", null), " The Datahike DB is free and open-source."), li(oi.a, {
                    href: "get-early-access"
                }, li(ui, {
                    className: "btn btn--md btn--primary"
                }, "Request early access")))))
            }
            pi.displayName = "Pricing";
            var fi = o.a.createElement,
                gi = s.default.svg.withConfig({
                    componentId: "sc-485w2m-0"
                })([".fill-black{transition:fill ", ";fill:", ";}.yellow-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                });

            function mi() {
                return fi(gi, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, fi("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.0454 28.0911C10.771 16.8737 20.0992 8 31.5 8C40.0357 8 47.4096 12.9741 50.8813 20.1818C58.3112 21.3274 64 27.7493 64 35.5C64 43.5544 57.8566 50.1739 50 50.9284V51H11V50.9893C4.88069 50.7275 0 45.6838 0 39.5C0 33.6414 4.38087 28.8061 10.0454 28.0911Z",
                    fill: "#D7E4E3"
                }), fi("circle", {
                    cx: "32",
                    cy: "32",
                    r: "2",
                    stroke: "black",
                    strokeWidth: "2"
                }), fi("circle", {
                    cx: "24",
                    cy: "32",
                    r: "2",
                    stroke: "black",
                    strokeWidth: "2"
                }), fi("circle", {
                    cx: "40",
                    cy: "32",
                    r: "2",
                    stroke: "black",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M22 42C20.4738 42 19.2753 41.6753 18.4044 41.0258C17.5251 40.3763 17.0855 39.4804 17.0855 38.3382L17.0855 34.9115C17.0855 34.1874 16.8408 33.6536 16.3515 33.3102C15.8621 32.9742 15.0783 32.7988 14 32.7839L14 31.2049C15.0119 31.2049 15.7792 31.037 16.3017 30.701C16.8243 30.3725 17.0855 29.8201 17.0855 29.0437L17.0855 25.6506C17.0855 24.5084 17.5127 23.62 18.367 22.9854C19.2131 22.3434 20.4241 22.0149 22 22",
                    stroke: "black",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M42 42C43.5262 42 44.7247 41.6753 45.5956 41.0258C46.4749 40.3763 46.9145 39.4804 46.9145 38.3382L46.9145 34.9115C46.9145 34.1874 47.1592 33.6536 47.6485 33.3102C48.1379 32.9742 48.9217 32.7988 50 32.7839L50 31.2049C48.9881 31.2049 48.2208 31.037 47.6983 30.701C47.1757 30.3725 46.9145 29.8201 46.9145 29.0437L46.9145 25.6506C46.9145 24.5084 46.4873 23.62 45.633 22.9854C44.7869 22.3434 43.5759 22.0149 42 22",
                    stroke: "black",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M26 17V9H8",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M32 20.5V4H39.5",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M37 11H54V3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), fi("path", {
                    d: "M32 46V54H23.5V60",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }))
            }
            mi.displayName = "IconCloud";
            var vi = o.a.createElement,
                bi = s.default.svg.withConfig({
                    componentId: "sc-1eiak9z-0"
                })([".black-fill{fill:", ";transition:fill ", ";}"], function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                });

            function xi() {
                return vi(bi, {
                    width: "65",
                    height: "48",
                    viewBox: "0 0 65 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, vi("rect", {
                    x: "3.5",
                    width: "58",
                    height: "40",
                    rx: "3",
                    fill: "#D7E4E3"
                }), vi("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M33.8158 10H46.5V13V30C46.5 31.1046 45.6046 32 44.5 32H20.5C19.3954 32 18.5 31.1046 18.5 30V15C18.5 13.8954 19.3954 13 20.5 13H31.5L33.8158 10Z",
                    fill: "white"
                }), vi("path", {
                    d: "M46.5 10H47.5V9H46.5V10ZM33.8158 10V9H33.3244L33.0242 9.38895L33.8158 10ZM31.5 13V14H31.9914L32.2916 13.6111L31.5 13ZM46.5 9H33.8158V11H46.5V9ZM47.5 13V10H45.5V13H47.5ZM45.5 13V30H47.5V13H45.5ZM45.5 30C45.5 30.5523 45.0523 31 44.5 31V33C46.1569 33 47.5 31.6569 47.5 30H45.5ZM44.5 31H20.5V33H44.5V31ZM20.5 31C19.9477 31 19.5 30.5523 19.5 30H17.5C17.5 31.6569 18.8431 33 20.5 33V31ZM19.5 30V15H17.5V30H19.5ZM19.5 15C19.5 14.4477 19.9477 14 20.5 14V12C18.8431 12 17.5 13.3431 17.5 15H19.5ZM20.5 14H31.5V12H20.5V14ZM33.0242 9.38895L30.7084 12.3889L32.2916 13.6111L34.6074 10.6111L33.0242 9.38895Z",
                    fill: "black"
                }), vi("path", {
                    d: "M29 22.5L31.5 25L38 18.5",
                    stroke: "black",
                    strokeWidth: "2"
                }), vi("circle", {
                    cx: "8.5",
                    cy: "5",
                    r: "1",
                    stroke: "black",
                    strokeWidth: "2"
                }), vi("circle", {
                    cx: "13.5",
                    cy: "5",
                    r: "1",
                    stroke: "black",
                    strokeWidth: "2"
                }), vi("circle", {
                    cx: "18.5",
                    cy: "5",
                    r: "1",
                    stroke: "black",
                    strokeWidth: "2"
                }), vi("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.5 42C1.84315 42 0.5 43.3431 0.5 45C0.5 46.6569 1.84315 48 3.5 48H61.5C63.1569 48 64.5 46.6569 64.5 45C64.5 43.3431 63.1569 42 61.5 42H38.5V44H27.5V42H3.5Z",
                    className: "black-fill"
                }))
            }
            xi.displayName = "IconDevice";
            var yi = o.a.createElement,
                wi = s.default.svg.withConfig({
                    componentId: "ouejda-0"
                })([".black-fill{fill:", ";transition:fill ", ";}.black-stroke{stroke:", ";transition:stroke ", ";}.yellow-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillWhite
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                });

            function Ci() {
                return yi(wi, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, yi("rect", {
                    x: "3",
                    y: "2",
                    width: "32",
                    height: "57",
                    rx: "5",
                    fill: "#D7E4E3"
                }), yi("line", {
                    x1: "16",
                    y1: "6",
                    x2: "22",
                    y2: "6",
                    stroke: "black",
                    strokeWidth: "2"
                }), yi("line", {
                    x1: "12",
                    y1: "55",
                    x2: "26",
                    y2: "55",
                    stroke: "black",
                    strokeWidth: "2"
                }), yi("circle", {
                    cx: "42",
                    cy: "50",
                    r: "13",
                    className: "black-fill"
                }), yi("path", {
                    d: "M42 57C45.866 57 49 53.866 49 50C49 47.769 47.9563 45.7818 46.3306 44.5M42 43C38.134 43 35 46.134 35 50C35 52.5142 36.3255 54.7188 38.3158 55.9532",
                    className: "black-stroke",
                    strokeWidth: "2"
                }), yi("path", {
                    d: "M44.5059 59.5059L41.7529 56.7529L44.5059 54",
                    className: "black-stroke",
                    strokeWidth: "2"
                }), yi("path", {
                    d: "M40.5059 40.5059L43.259 43.259L40.5059 46.0122",
                    className: "black-stroke",
                    strokeWidth: "2"
                }), yi("ellipse", {
                    cx: "51.5",
                    cy: "16",
                    rx: "7.5",
                    ry: "3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), yi("ellipse", {
                    cx: "51.5",
                    cy: "10",
                    rx: "7.5",
                    ry: "3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), yi("ellipse", {
                    cx: "51.5",
                    cy: "22",
                    rx: "7.5",
                    ry: "3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), yi("path", {
                    d: "M52 31C55.866 31 59 29.6569 59 28C59 26.3431 55.866 25 52 25",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), yi("path", {
                    d: "M9 30.0001C10.9749 26.9946 13.791 24.8816 17 24.22M29 29.5399C26.979 26.6848 24.1714 24.7159 21 24.1602",
                    stroke: "black",
                    strokeWidth: "2"
                }), yi("path", {
                    d: "M13 32.9999C13.9744 31.2567 15.3754 29.9535 17 29.3579M25 32.9999C24.0256 31.2567 22.6246 29.9535 21 29.3579",
                    stroke: "black",
                    strokeWidth: "2"
                }), yi("circle", {
                    cx: "19",
                    cy: "36",
                    r: "1",
                    stroke: "black",
                    strokeWidth: "2"
                }), yi("line", {
                    x1: "19",
                    y1: "21",
                    x2: "19",
                    y2: "33",
                    stroke: "black",
                    strokeWidth: "2"
                }))
            }
            Ci.displayName = "IconOffline";
            var ki = o.a.createElement,
                _i = s.default.svg.withConfig({
                    componentId: "sc-1vmrxqf-0"
                })([".fill-black{transition:fill ", ";fill:", ";}.yellow-stroke{stroke:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                });

            function Si() {
                return ki(_i, {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, ki("circle", {
                    cx: "15",
                    cy: "15",
                    r: "14",
                    fill: "#D7E4E3"
                }), ki("path", {
                    d: "M15 18H21",
                    stroke: "black",
                    strokeWidth: "2"
                }), ki("path", {
                    d: "M9 12L13 15L9 18",
                    stroke: "black",
                    strokeWidth: "2"
                }), ki("circle", {
                    cx: "49",
                    cy: "49",
                    r: "14",
                    fill: "#D7E4E3"
                }), ki("path", {
                    d: "M50 51H56",
                    stroke: "black",
                    strokeWidth: "2"
                }), ki("path", {
                    d: "M44 45L48 48L44 51",
                    stroke: "black",
                    strokeWidth: "2"
                }), ki("ellipse", {
                    cx: "32",
                    cy: "26",
                    rx: "10",
                    ry: "3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), ki("ellipse", {
                    cx: "32",
                    cy: "32",
                    rx: "10",
                    ry: "3",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), ki("path", {
                    d: "M32 41C37.5228 41 42 39.6569 42 38C42 36.3431 37.5228 35 32 35",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), ki("path", {
                    d: "M24 13H29C30.6569 13 32 14.3431 32 16V23",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }), ki("path", {
                    d: "M40 51L35 51C33.3431 51 32 49.6569 32 48L32 23",
                    className: "yellow-stroke",
                    strokeWidth: "2"
                }))
            }
            Si.displayName = "IconRealTime";
            var $i = o.a.createElement,
                Ti = s.default.svg.withConfig({
                    componentId: "sc-1kknojb-0"
                })([".fill-black{transition:fill ", ";fill:", ";}.stroke-black{stroke:", ";transition:stroke ", ";}.stroke-white{stroke:", ";transition:stroke ", ";}.fill-yellow{fill:", ";transition:stroke ", ";}"], function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.fillWhite
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillBlack
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.fillYellow
                }, function(t) {
                    return t.theme.transition.time
                });

            function Mi() {
                return $i(Ti, {
                    width: "65",
                    height: "64",
                    viewBox: "0 0 65 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, $i("mask", {
                    id: "path-1-inside-1",
                    fill: "white"
                }, $i("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M34.5 16.0123C34.5 16.0082 34.5 16.0041 34.5 16C34.5 8.26801 40.768 2 48.5 2C56.232 2 62.5 8.26802 62.5 16C62.5 23.732 56.232 30 48.5 30L48.4914 30C38.5542 30.0046 30.5 38.0617 30.5 48L30.5 48.0166C30.491 55.741 24.2264 62 16.5 62C8.76801 62 2.5 55.732 2.5 48C2.5 40.268 8.76801 34 16.5 34C26.437 34 34.4933 25.9478 34.5 16.0123Z"
                })), $i("path", {
                    d: "M34.5 16L32.5 16L32.5 16L34.5 16ZM34.5 16.0123L36.5 16.0137L36.5 16.0123L34.5 16.0123ZM48.5 30L48.5 28L48.4987 28L48.5 30ZM48.4914 30L48.4923 32L48.4928 32L48.4914 30ZM30.5 48L32.5 48.0011L32.5 48L30.5 48ZM30.5 48.0166L32.5 48.0189L32.5 48.0178L30.5 48.0166ZM16.5 34L16.5 32L16.5 34ZM32.5 16C32.5 16.0015 32.5 16.0031 32.5 16.0052C32.5 16.0072 32.5 16.0097 32.5 16.0123L36.5 16.0123C36.5 16.0108 36.5 16.0092 36.5 16.0071C36.5 16.0051 36.5 16.0026 36.5 16L32.5 16ZM48.5 2.55927e-06C39.6635 2.06764e-06 32.5 7.16344 32.5 16L36.5 16C36.5 9.37258 41.8726 4 48.5 4L48.5 2.55927e-06ZM64.5 16C64.5 7.16345 57.3366 3.0509e-06 48.5 2.55927e-06L48.5 4C55.1274 4 60.5 9.37258 60.5 16L64.5 16ZM48.5 32C57.3366 32 64.5 24.8366 64.5 16L60.5 16C60.5 22.6274 55.1274 28 48.5 28L48.5 32ZM48.4928 32L48.5013 32L48.4987 28L48.4901 28L48.4928 32ZM32.5 48C32.5 39.166 39.6593 32.0041 48.4923 32L48.4905 28C37.4491 28.0052 28.5 36.9575 28.5 48L32.5 48ZM32.5 48.0178L32.5 48.0011L28.5 47.9989L28.5 48.0155L32.5 48.0178ZM16.5 64C25.3302 64 32.4897 56.8468 32.5 48.0189L28.5 48.0143C28.4923 54.6351 23.1227 60 16.5 60L16.5 64ZM0.499997 48C0.499997 56.8365 7.66344 64 16.5 64L16.5 60C9.87258 60 4.5 54.6274 4.5 48L0.499997 48ZM16.5 32C7.66344 32 0.499998 39.1634 0.499997 48L4.5 48C4.5 41.3726 9.87258 36 16.5 36L16.5 32ZM32.5 16.011C32.4941 24.8425 25.3329 32 16.5 32L16.5 36C27.5411 36 36.4926 27.0531 36.5 16.0137L32.5 16.011Z",
                    className: "fill-black",
                    mask: "url(#path-1-inside-1)"
                }), $i("ellipse", {
                    cx: "16.5",
                    cy: "16",
                    rx: "14",
                    ry: "14",
                    fill: "#D7E4E3"
                }), $i("circle", {
                    cx: "48.5",
                    cy: "48",
                    r: "14",
                    className: "fill-yellow"
                }), $i("path", {
                    d: "M11.5 16L15 19.5L21.5 13",
                    stroke: "black",
                    strokeWidth: "2"
                }), $i("line", {
                    x1: "48.5",
                    y1: "42",
                    x2: "48.5",
                    y2: "49",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), $i("line", {
                    x1: "48.5",
                    y1: "51",
                    x2: "48.5",
                    y2: "53",
                    className: "stroke-black",
                    strokeWidth: "2"
                }), $i("path", {
                    d: "M52.1842 10.0468C54.1745 11.2812 55.5 13.4858 55.5 16C55.5 19.866 52.366 23 48.5 23H47.7632M44.8158 21.9532C42.8255 20.7188 41.5 18.5142 41.5 16C41.5 12.134 44.634 9 48.5 9H49.6053",
                    className: "stroke-white",
                    strokeWidth: "2"
                }), $i("path", {
                    d: "M20.1842 42.0468C22.1745 43.2812 23.5 45.4858 23.5 48C23.5 51.866 20.366 55 16.5 55H15.7632M12.8158 53.9532C10.8255 52.7188 9.5 50.5142 9.5 48C9.5 44.134 12.634 41 16.5 41H17.6053",
                    className: "stroke-white",
                    strokeWidth: "2"
                }))
            }
            Mi.displayName = "IconRealTime";
            var Ei = o.a.createElement,
                Pi = s.default.div.withConfig({
                    componentId: "sc-1uwwcr5-0"
                })(["text-align:center;padding:0 15px;@media screen and (max-width:767px){width:50%;margin:0 0 27px;}@media (min-width:768px){width:calc(100% / 3);margin:0 0 49px;}"]),
                Li = s.default.div.withConfig({
                    componentId: "sc-1uwwcr5-1"
                })(["height:60px;margin:0 0 28px;"]),
                Ii = s.default.div.withConfig({
                    componentId: "sc-1uwwcr5-2"
                })(["font-size:15px;line-height:24px;color:", ";transition:color ", ";.theme-dark &{color:", ";}"], function(t) {
                    return t.theme.colors.gray200
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.gray700
                });

            function zi() {
                var t = [{
                    icon: Ei(Ci, null),
                    title: "Offline support and cross-device sync"
                }, {
                    icon: Ei(xi, null),
                    title: "On-device caching"
                }, {
                    icon: Ei(mi, null),
                    title: "Cloud-functions"
                }, {
                    icon: Ei(Si, null),
                    title: "Real-time collaboration"
                }, {
                    icon: Ei(Mi, null),
                    title: "Versioning and blame tracking"
                }];
                return Ei(o.a.Fragment, null, t.map(function(t) {
                    return Ei(Pi, {
                        key: t.title
                    }, Ei(Li, null, t.icon), Ei(Ii, null, t.title))
                }))
            }
            var Hi = o.a.createElement,
                Di = s.default.div.withConfig({
                    componentId: "keo5m6-0"
                })(["display:flex;flex-wrap:wrap;align-items:center;margin:0 -15px;"]),
                Wi = s.default.div.withConfig({
                    componentId: "keo5m6-1"
                })(["padding:0 15px;@media screen and (max-width:767px){width:100%;}@media (min-width:768px){width:50%;}@media (min-width:992px){&:first-child{position:relative;&::after{background-color:", ";content:'';top:0;bottom:0;width:1px;position:absolute;right:96px;transition:background-color ", ";.theme-dark &{background-color:", ";}}}}"], function(t) {
                    return t.theme.colors.gray500
                }, function(t) {
                    return t.theme.transition.time
                }, function(t) {
                    return t.theme.colors.whiteRgba
                }),
                Ni = s.default.div.withConfig({
                    componentId: "keo5m6-2"
                })(["display:flex;flex-wrap:wrap;@media screen and (max-width:767px){margin:0 -15px -27px;justify-content:center;}@media (min-width:768px){margin:0 -15px -49px;}"]);

            function Oi() {
                return Hi(E, null, Hi(w.a, null, Hi(Di, null, Hi(Wi, null, Hi(qt, {
                    text: {
                        title: "Local-first data is smart data",
                        text: "<p>Because it lives in multiple places it has to encode extra metadata that enable many features you'd normally have to build from scratch.</p>"
                    }
                })), Hi(Wi, null, Hi(Ni, null, Hi(zi, null))))))
            }
            Oi.displayName = "Services";
            var Ai = o.a.createElement,
                Fi = !0;

            function ji(t) {
                var e = t.devList,
                    i = t.cases;
                return t.logos, Ai(o.a.Fragment, null, Ai(ye.a, {
                    title: "Homebase | The platform for local-first software"
                }, Ai(mt, null), Ai(S, null), Ai(rt, {
                    list: e
                }), Ai(F, {
                    list: i
                }), Ai(xe, null), Ai(Xt, null), Ai(Oi, null), Ai(Re, null), Ai(ii, null), Ai(pi, null)))
            }
        },
        "aqT/": function(t, e, i) {
            var n;
            n = function(t, e) {
                return function(t) {
                    var e = {};

                    function i(n) {
                        if (e[n]) return e[n].exports;
                        var o = e[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                    }
                    return i.m = t, i.c = e, i.d = function(t, e, n) {
                        i.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: n
                        })
                    }, i.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, i.t = function(t, e) {
                        if (1 & e && (t = i(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var n = Object.create(null);
                        if (i.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var o in t) i.d(n, o, function(e) {
                                return t[e]
                            }.bind(null, o));
                        return n
                    }, i.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return i.d(e, "a", e), e
                    }, i.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, i.p = "", i(i.s = 4)
                }([function(t, e, i) {
                    t.exports = i(5)()
                }, function(e, i) {
                    e.exports = t
                }, function(t, i) {
                    t.exports = e
                }, function(t, e) {
                    t.exports = function(t, e, i) {
                        var n = t.direction,
                            o = t.value;
                        switch (n) {
                            case "top":
                                return i.top + o < e.top && i.bottom > e.bottom && i.left < e.left && i.right > e.right;
                            case "left":
                                return i.left + o < e.left && i.bottom > e.bottom && i.top < e.top && i.right > e.right;
                            case "bottom":
                                return i.bottom - o > e.bottom && i.left < e.left && i.right > e.right && i.top < e.top;
                            case "right":
                                return i.right - o > e.right && i.left < e.left && i.top < e.top && i.bottom > e.bottom
                        }
                    }
                }, function(t, e, i) {
                    "use strict";
                    i.r(e), i.d(e, "default", function() {
                        return v
                    });
                    var n = i(1),
                        o = i.n(n),
                        s = i(2),
                        a = i.n(s),
                        r = i(0),
                        l = i.n(r),
                        c = i(3),
                        d = i.n(c);

                    function h(t) {
                        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function u(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function p(t) {
                        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }

                    function f(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }

                    function g(t, e) {
                        return (g = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function m(t, e, i) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = i, t
                    }
                    var v = function(t) {
                        function e(t) {
                            var i, n;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this, n = p(e).call(this, t), i = !n || "object" !== h(n) && "function" != typeof n ? f(this) : n, m(f(i), "getContainer", function() {
                                return i.props.containment || window
                            }), m(f(i), "addEventListener", function(t, e, n, o) {
                                var s;
                                i.debounceCheck || (i.debounceCheck = {});
                                var a = function() {
                                        s = null, i.check()
                                    },
                                    r = {
                                        target: t,
                                        fn: o > -1 ? function() {
                                            s || (s = setTimeout(a, o || 0))
                                        } : function() {
                                            clearTimeout(s), s = setTimeout(a, n || 0)
                                        },
                                        getLastTimeout: function() {
                                            return s
                                        }
                                    };
                                t.addEventListener(e, r.fn), i.debounceCheck[e] = r
                            }), m(f(i), "startWatching", function() {
                                i.debounceCheck || i.interval || (i.props.intervalCheck && (i.interval = setInterval(i.check, i.props.intervalDelay)), i.props.scrollCheck && i.addEventListener(i.getContainer(), "scroll", i.props.scrollDelay, i.props.scrollThrottle), i.props.resizeCheck && i.addEventListener(window, "resize", i.props.resizeDelay, i.props.resizeThrottle), !i.props.delayedCall && i.check())
                            }), m(f(i), "stopWatching", function() {
                                if (i.debounceCheck)
                                    for (var t in i.debounceCheck)
                                        if (i.debounceCheck.hasOwnProperty(t)) {
                                            var e = i.debounceCheck[t];
                                            clearTimeout(e.getLastTimeout()), e.target.removeEventListener(t, e.fn), i.debounceCheck[t] = null
                                        }
                                i.debounceCheck = null, i.interval && (i.interval = clearInterval(i.interval))
                            }), m(f(i), "check", function() {
                                var t, e, n = i.node;
                                if (!n) return i.state;
                                if (t = function(t) {
                                        return void 0 === t.width && (t.width = t.right - t.left), void 0 === t.height && (t.height = t.bottom - t.top), t
                                    }(i.roundRectDown(n.getBoundingClientRect())), i.props.containment) {
                                    var o = i.props.containment.getBoundingClientRect();
                                    e = {
                                        top: o.top,
                                        left: o.left,
                                        bottom: o.bottom,
                                        right: o.right
                                    }
                                } else e = {
                                    top: 0,
                                    left: 0,
                                    bottom: window.innerHeight || document.documentElement.clientHeight,
                                    right: window.innerWidth || document.documentElement.clientWidth
                                };
                                var s = i.props.offset || {};
                                "object" === h(s) && (e.top += s.top || 0, e.left += s.left || 0, e.bottom -= s.bottom || 0, e.right -= s.right || 0);
                                var a = {
                                        top: t.top >= e.top,
                                        left: t.left >= e.left,
                                        bottom: t.bottom <= e.bottom,
                                        right: t.right <= e.right
                                    },
                                    r = t.height > 0 && t.width > 0,
                                    l = r && a.top && a.left && a.bottom && a.right;
                                if (r && i.props.partialVisibility) {
                                    var c = t.top <= e.bottom && t.bottom >= e.top && t.left <= e.right && t.right >= e.left;
                                    "string" == typeof i.props.partialVisibility && (c = a[i.props.partialVisibility]), l = i.props.minTopValue ? c && t.top <= e.bottom - i.props.minTopValue : c
                                }
                                "string" == typeof s.direction && "number" == typeof s.value && (console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", s.direction, s.value), l = d()(s, t, e));
                                var u = i.state;
                                return i.state.isVisible !== l && (u = {
                                    isVisible: l,
                                    visibilityRect: a
                                }, i.setState(u), i.props.onChange && i.props.onChange(l)), u
                            }), i.state = {
                                isVisible: null,
                                visibilityRect: {}
                            }, i
                        }
                        var i, n;
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && g(t, e)
                        }(e, o.a.Component), i = e, (n = [{
                            key: "componentDidMount",
                            value: function() {
                                this.node = a.a.findDOMNode(this), this.props.active && this.startWatching()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.stopWatching()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(t) {
                                this.node = a.a.findDOMNode(this), this.props.active && !t.active ? (this.setState({
                                    isVisible: null,
                                    visibilityRect: {}
                                }), this.startWatching()) : this.props.active || this.stopWatching()
                            }
                        }, {
                            key: "roundRectDown",
                            value: function(t) {
                                return {
                                    top: Math.floor(t.top),
                                    left: Math.floor(t.left),
                                    bottom: Math.floor(t.bottom),
                                    right: Math.floor(t.right)
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this.props.children instanceof Function ? this.props.children({
                                    isVisible: this.state.isVisible,
                                    visibilityRect: this.state.visibilityRect
                                }) : o.a.Children.only(this.props.children)
                            }
                        }]) && u(i.prototype, n), e
                    }();
                    m(v, "defaultProps", {
                        active: !0,
                        partialVisibility: !1,
                        minTopValue: 0,
                        scrollCheck: !1,
                        scrollDelay: 250,
                        scrollThrottle: -1,
                        resizeCheck: !1,
                        resizeDelay: 250,
                        resizeThrottle: -1,
                        intervalCheck: !0,
                        intervalDelay: 100,
                        delayedCall: !1,
                        offset: {},
                        containment: null,
                        children: o.a.createElement("span", null)
                    }), m(v, "propTypes", {
                        onChange: l.a.func,
                        active: l.a.bool,
                        partialVisibility: l.a.oneOfType([l.a.bool, l.a.oneOf(["top", "right", "bottom", "left"])]),
                        delayedCall: l.a.bool,
                        offset: l.a.oneOfType([l.a.shape({
                            top: l.a.number,
                            left: l.a.number,
                            bottom: l.a.number,
                            right: l.a.number
                        }), l.a.shape({
                            direction: l.a.oneOf(["top", "right", "bottom", "left"]),
                            value: l.a.number
                        })]),
                        scrollCheck: l.a.bool,
                        scrollDelay: l.a.number,
                        scrollThrottle: l.a.number,
                        resizeCheck: l.a.bool,
                        resizeDelay: l.a.number,
                        resizeThrottle: l.a.number,
                        intervalCheck: l.a.bool,
                        intervalDelay: l.a.number,
                        containment: "undefined" != typeof window ? l.a.instanceOf(window.Element) : l.a.any,
                        children: l.a.oneOfType([l.a.element, l.a.func]),
                        minTopValue: l.a.number
                    })
                }, function(t, e, i) {
                    "use strict";
                    var n = i(6);

                    function o() {}

                    function s() {}
                    s.resetWarningCache = o, t.exports = function() {
                        function t(t, e, i, o, s, a) {
                            if (a !== n) {
                                var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw r.name = "Invariant Violation", r
                            }
                        }

                        function e() {
                            return t
                        }
                        t.isRequired = t;
                        var i = {
                            array: t,
                            bool: t,
                            func: t,
                            number: t,
                            object: t,
                            string: t,
                            symbol: t,
                            any: t,
                            arrayOf: e,
                            element: t,
                            elementType: t,
                            instanceOf: e,
                            node: t,
                            objectOf: e,
                            oneOf: e,
                            oneOfType: e,
                            shape: e,
                            exact: e,
                            checkPropTypes: s,
                            resetWarningCache: o
                        };
                        return i.PropTypes = i, i
                    }
                }, function(t, e, i) {
                    "use strict";
                    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                }])
            }, t.exports = n(i("q1tI"), i("i8i4"))
        },
        vlRD: function(t, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i("RXBc")
            }])
        }
    },
    [
        ["vlRD", 0, 2, 1, 3, 4, 5, 7, 6, 9, 10]
    ]
]);