/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/frontend.js":
/*!**********************************!*\
  !*** ./resources/js/frontend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Vendor
__webpack_require__(/*! ./frontend/core/bootstrap_bundle.js */ "./resources/js/frontend/core/bootstrap_bundle.js");

__webpack_require__(/*! ./frontend/core/modernizr.js */ "./resources/js/frontend/core/modernizr.js");

__webpack_require__(/*! ./frontend/plugins/jquery_appear.js */ "./resources/js/frontend/plugins/jquery_appear.js");

__webpack_require__(/*! ./frontend/plugins/jquery_easing.js */ "./resources/js/frontend/plugins/jquery_easing.js");

__webpack_require__(/*! ./frontend/common.js */ "./resources/js/frontend/common.js");

__webpack_require__(/*! ./frontend/plugins/jquery_validate/core.js */ "./resources/js/frontend/plugins/jquery_validate/core.js");

__webpack_require__(/*! ./frontend/plugins/jquery_validate/localization/messages_ro.js */ "./resources/js/frontend/plugins/jquery_validate/localization/messages_ro.js"); // Theme


__webpack_require__(/*! ./frontend/custom.js */ "./resources/js/frontend/custom.js");

__webpack_require__(/*! ./frontend/theme/theme_init.js */ "./resources/js/frontend/theme/theme_init.js");

/***/ }),

/***/ "./resources/js/frontend/common.js":
/*!*****************************************!*\
  !*** ./resources/js/frontend/common.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized2(self); }

function _assertThisInitialized2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.7.0
*/
// Theme
window.theme = {}; // Theme Common Functions

window.theme.fn = {
  getOptions: function getOptions(opts) {
    if (_typeof(opts) == 'object') {
      return opts;
    } else if (typeof opts == 'string') {
      try {
        return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
      } catch (e) {
        return {};
      }
    } else {
      return {};
    }
  },
  execPluginFunction: function execPluginFunction(functionName, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();

    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    return context[func].apply(context, args);
  },
  intObs: function intObs(selector, functionName, intObsOptions, alwaysObserve) {
    var $el = document.querySelectorAll(selector);
    var intersectionObserverOptions = {
      rootMargin: '0px 0px 200px 0px'
    };

    if (Object.keys(intObsOptions).length) {
      intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        if (entry.intersectionRatio > 0) {
          if (typeof functionName === 'string') {
            var func = Function('return ' + functionName)();
          } else {
            var callback = functionName;
            callback.call($(entry.target));
          } // Unobserve


          if (!alwaysObserve) {
            observer.unobserve(entry.target);
          }
        }
      }
    }, intersectionObserverOptions);
    $($el).each(function () {
      observer.observe($(this)[0]);
    });
  },
  intObsInit: function intObsInit(selector, functionName) {
    var $el = document.querySelectorAll(selector);
    var intersectionObserverOptions = {
      rootMargin: '200px'
    };
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        if (entry.intersectionRatio > 0) {
          var $this = $(entry.target),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          theme.fn.execPluginFunction(functionName, $this, opts); // Unobserve

          observer.unobserve(entry.target);
        }
      }
    }, intersectionObserverOptions);
    $($el).each(function () {
      observer.observe($(this)[0]);
    });
  },
  dynIntObsInit: function dynIntObsInit(selector, functionName, pluginDefaults) {
    var $el = document.querySelectorAll(selector);
    $($el).each(function () {
      var $this = $(this),
          opts;
      var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
      if (pluginOptions) opts = pluginOptions;
      var mergedPluginDefaults = theme.fn.mergeOptions(pluginDefaults, opts);
      var intersectionObserverOptions = {
        rootMargin: theme.fn.getRootMargin(functionName, mergedPluginDefaults),
        threshold: 0
      };

      if (!mergedPluginDefaults.forceInit) {
        var observer = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];

            if (entry.intersectionRatio > 0) {
              theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults); // Unobserve

              observer.unobserve(entry.target);
            }
          }
        }, intersectionObserverOptions);
        observer.observe($this[0]);
      } else {
        theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults);
      }
    });
  },
  getRootMargin: function getRootMargin(plugin, pluginDefaults) {
    switch (plugin) {
      case 'themePluginCounter':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginAnimate':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginIcon':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginRandomImages':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      default:
        return '0px 0px 200px 0px';
        break;
    }
  },
  mergeOptions: function mergeOptions(obj1, obj2) {
    var obj3 = {};

    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }

    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }

    return obj3;
  },
  execOnceTroughEvent: function execOnceTroughEvent($el, event, callback) {
    var self = this,
        dataName = self.formatDataName(event);
    $($el).on(event, function () {
      if (!$(this).data(dataName)) {
        // Exec Callback Function
        callback.call($(this)); // Add data name

        $(this).data(dataName, true); // Unbind event

        $(this).off(event);
      }
    });
    return this;
  },
  execOnceTroughWindowEvent: function execOnceTroughWindowEvent($el, event, callback) {
    var self = this,
        dataName = self.formatDataName(event);
    $($el).on(event, function () {
      if (!$(this).data(dataName)) {
        // Exec Callback Function
        callback(); // Add data name

        $(this).data(dataName, true); // Unbind event

        $(this).off(event);
      }
    });
    return this;
  },
  formatDataName: function formatDataName(name) {
    name = name.replace('.', '');
    return name;
  },
  isElementInView: function isElementInView($el) {
    var rect = $el[0].getBoundingClientRect();
    return rect.top <= window.innerHeight / 3;
  },
  getScripts: function getScripts(arr, path) {
    var _arr = $.map(arr, function (scr) {
      return $.getScript((path || "") + scr);
    });

    _arr.push($.Deferred(function (deferred) {
      $(deferred.resolve);
    }));

    return $.when.apply($, _arr);
  }
}; // Local Environment Warning

try {
  $(document).ready(function () {
    if ("file://" === location.origin) {
      if ($('[data-icon]').length || $('iframe').length) {
        $('.modalLocalEnvironment').remove();
        $('body').append('<div class="modal fade" id="modalLocalEnvironment" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalToggleLabel">Local Environment Warning</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">SVG Objects, Icons, YouTube and Vimeo Videos might not show correctly on local environment. For better result, please preview on a server.</div><div class="modal-footer"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button></div></div></div></div>');
        var modalLocalEnvironment = document.getElementById('modalLocalEnvironment');
        var modalLocalEnvironment = bootstrap.Modal.getOrCreateInstance(modalLocalEnvironment);
        modalLocalEnvironment.show();
      }
    }
  });
} catch (e) {}
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */


!function () {
  "use strict";

  if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
    get: function get() {
      return this.intersectionRatio > 0;
    }
  });else {
    var t = function (t) {
      for (var e = window.document, o = i(e); o;) {
        o = i(e = o.ownerDocument);
      }

      return e;
    }(),
        e = [],
        o = null,
        n = null;

    s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function () {
      return o || (o = function o(t, _o) {
        n = t && _o ? l(t, _o) : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, e.forEach(function (t) {
          t._checkForIntersections();
        });
      }), o;
    }, s._resetCrossOriginUpdater = function () {
      o = null, n = null;
    }, s.prototype.observe = function (t) {
      if (!this._observationTargets.some(function (e) {
        return e.element == t;
      })) {
        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
        this._registerInstance(), this._observationTargets.push({
          element: t,
          entry: null
        }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections();
      }
    }, s.prototype.unobserve = function (t) {
      this._observationTargets = this._observationTargets.filter(function (e) {
        return e.element != t;
      }), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance();
    }, s.prototype.disconnect = function () {
      this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
    }, s.prototype.takeRecords = function () {
      var t = this._queuedEntries.slice();

      return this._queuedEntries = [], t;
    }, s.prototype._initThresholds = function (t) {
      var e = t || [0];
      return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, o) {
        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
        return t !== o[e - 1];
      });
    }, s.prototype._parseRootMargin = function (t) {
      var e = (t || "0px").split(/\s+/).map(function (t) {
        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
        return {
          value: parseFloat(e[1]),
          unit: e[2]
        };
      });
      return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e;
    }, s.prototype._monitorIntersections = function (e) {
      var o = e.defaultView;

      if (o && -1 == this._monitoringDocuments.indexOf(e)) {
        var n = this._checkForIntersections,
            r = null,
            s = null;
        this.POLL_INTERVAL ? r = o.setInterval(n, this.POLL_INTERVAL) : (h(o, "resize", n, !0), h(e, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in o && (s = new o.MutationObserver(n)).observe(e, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push(function () {
          var t = e.defaultView;
          t && (r && t.clearInterval(r), c(t, "resize", n, !0)), c(e, "scroll", n, !0), s && s.disconnect();
        });
        var u = this.root && (this.root.ownerDocument || this.root) || t;

        if (e != u) {
          var a = i(e);
          a && this._monitorIntersections(a.ownerDocument);
        }
      }
    }, s.prototype._unmonitorIntersections = function (e) {
      var o = this._monitoringDocuments.indexOf(e);

      if (-1 != o) {
        var n = this.root && (this.root.ownerDocument || this.root) || t;

        if (!this._observationTargets.some(function (t) {
          var o = t.element.ownerDocument;
          if (o == e) return !0;

          for (; o && o != n;) {
            var r = i(o);
            if ((o = r && r.ownerDocument) == e) return !0;
          }

          return !1;
        })) {
          var r = this._monitoringUnsubscribes[o];

          if (this._monitoringDocuments.splice(o, 1), this._monitoringUnsubscribes.splice(o, 1), r(), e != n) {
            var s = i(e);
            s && this._unmonitorIntersections(s.ownerDocument);
          }
        }
      }
    }, s.prototype._unmonitorAllIntersections = function () {
      var t = this._monitoringUnsubscribes.slice(0);

      this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;

      for (var e = 0; e < t.length; e++) {
        t[e]();
      }
    }, s.prototype._checkForIntersections = function () {
      if (this.root || !o || n) {
        var t = this._rootIsInDom(),
            e = t ? this._getRootRect() : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };

        this._observationTargets.forEach(function (n) {
          var i = n.element,
              s = u(i),
              h = this._rootContainsTarget(i),
              c = n.entry,
              a = t && h && this._computeTargetAndRootIntersection(i, s, e),
              l = null;

          this._rootContainsTarget(i) ? o && !this.root || (l = e) : l = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          };
          var f = n.entry = new r({
            time: window.performance && performance.now && performance.now(),
            target: i,
            boundingClientRect: s,
            rootBounds: l,
            intersectionRect: a
          });
          c ? t && h ? this._hasCrossedThreshold(c, f) && this._queuedEntries.push(f) : c && c.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
      }
    }, s.prototype._computeTargetAndRootIntersection = function (e, i, r) {
      if ("none" != window.getComputedStyle(e).display) {
        for (var s, h, c, a, f, d, g, m, v = i, _ = p(e), b = !1; !b && _;) {
          var w = null,
              y = 1 == _.nodeType ? window.getComputedStyle(_) : {};
          if ("none" == y.display) return null;
          if (_ == this.root || 9 == _.nodeType) {
            if (b = !0, _ == this.root || _ == t) o && !this.root ? !n || 0 == n.width && 0 == n.height ? (_ = null, w = null, v = null) : w = n : w = r;else {
              var I = p(_),
                  E = I && u(I),
                  T = I && this._computeTargetAndRootIntersection(I, E, r);

              E && T ? (_ = I, w = l(E, T)) : (_ = null, v = null);
            }
          } else {
            var R = _.ownerDocument;
            _ != R.body && _ != R.documentElement && "visible" != y.overflow && (w = u(_));
          }
          if (w && (s = w, h = v, c = void 0, a = void 0, f = void 0, d = void 0, g = void 0, m = void 0, c = Math.max(s.top, h.top), a = Math.min(s.bottom, h.bottom), f = Math.max(s.left, h.left), d = Math.min(s.right, h.right), m = a - c, v = (g = d - f) >= 0 && m >= 0 && {
            top: c,
            bottom: a,
            left: f,
            right: d,
            width: g,
            height: m
          } || null), !v) break;
          _ = _ && p(_);
        }

        return v;
      }
    }, s.prototype._getRootRect = function () {
      var e;
      if (this.root && !d(this.root)) e = u(this.root);else {
        var o = d(this.root) ? this.root : t,
            n = o.documentElement,
            i = o.body;
        e = {
          top: 0,
          left: 0,
          right: n.clientWidth || i.clientWidth,
          width: n.clientWidth || i.clientWidth,
          bottom: n.clientHeight || i.clientHeight,
          height: n.clientHeight || i.clientHeight
        };
      }
      return this._expandRectByRootMargin(e);
    }, s.prototype._expandRectByRootMargin = function (t) {
      var e = this._rootMarginValues.map(function (e, o) {
        return "px" == e.unit ? e.value : e.value * (o % 2 ? t.width : t.height) / 100;
      }),
          o = {
        top: t.top - e[0],
        right: t.right + e[1],
        bottom: t.bottom + e[2],
        left: t.left - e[3]
      };

      return o.width = o.right - o.left, o.height = o.bottom - o.top, o;
    }, s.prototype._hasCrossedThreshold = function (t, e) {
      var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
      if (o !== n) for (var i = 0; i < this.thresholds.length; i++) {
        var r = this.thresholds[i];
        if (r == o || r == n || r < o != r < n) return !0;
      }
    }, s.prototype._rootIsInDom = function () {
      return !this.root || f(t, this.root);
    }, s.prototype._rootContainsTarget = function (e) {
      var o = this.root && (this.root.ownerDocument || this.root) || t;
      return f(o, e) && (!this.root || o == e.ownerDocument);
    }, s.prototype._registerInstance = function () {
      e.indexOf(this) < 0 && e.push(this);
    }, s.prototype._unregisterInstance = function () {
      var t = e.indexOf(this);
      -1 != t && e.splice(t, 1);
    }, window.IntersectionObserver = s, window.IntersectionObserverEntry = r;
  }

  function i(t) {
    try {
      return t.defaultView && t.defaultView.frameElement || null;
    } catch (t) {
      return null;
    }
  }

  function r(t) {
    this.time = t.time, this.target = t.target, this.rootBounds = a(t.rootBounds), this.boundingClientRect = a(t.boundingClientRect), this.intersectionRect = a(t.intersectionRect || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    }), this.isIntersecting = !!t.intersectionRect;
    var e = this.boundingClientRect,
        o = e.width * e.height,
        n = this.intersectionRect,
        i = n.width * n.height;
    this.intersectionRatio = o ? Number((i / o).toFixed(4)) : this.isIntersecting ? 1 : 0;
  }

  function s(t, e) {
    var o,
        n,
        i,
        r = e || {};
    if ("function" != typeof t) throw new Error("callback must be a function");
    if (r.root && 1 != r.root.nodeType && 9 != r.root.nodeType) throw new Error("root must be a Document or Element");
    this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function () {
      i || (i = setTimeout(function () {
        o(), i = null;
      }, n));
    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
      return t.value + t.unit;
    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
  }

  function h(t, e, o, n) {
    "function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o);
  }

  function c(t, e, o, n) {
    "function" == typeof t.removeEventListener ? t.removeEventListener(e, o, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, o);
  }

  function u(t) {
    var e;

    try {
      e = t.getBoundingClientRect();
    } catch (t) {}

    return e ? (e.width && e.height || (e = {
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      width: e.right - e.left,
      height: e.bottom - e.top
    }), e) : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }

  function a(t) {
    return !t || "x" in t ? t : {
      top: t.top,
      y: t.top,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      right: t.right,
      width: t.width,
      height: t.height
    };
  }

  function l(t, e) {
    var o = e.top - t.top,
        n = e.left - t.left;
    return {
      top: o,
      left: n,
      height: e.height,
      width: e.width,
      bottom: o + e.height,
      right: n + e.width
    };
  }

  function f(t, e) {
    for (var o = e; o;) {
      if (o == t) return !0;
      o = p(o);
    }

    return !1;
  }

  function p(e) {
    var o = e.parentNode;
    return 9 == e.nodeType && e != t ? i(e) : (o && o.assignedSlot && (o = o.assignedSlot.parentNode), o && 11 == o.nodeType && o.host ? o.host : o);
  }

  function d(t) {
    return t && 9 === t.nodeType;
  }
}();

(function ($) {
  $.extend({
    browserSelector: function browserSelector() {
      // jQuery.browser.mobile (http://detectmobilebrowser.com/)
      (function (a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      })(navigator.userAgent || navigator.vendor || window.opera); // Touch


      var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

      var u = navigator.userAgent,
          ua = u.toLowerCase(),
          is = function is(t) {
        return ua.indexOf(t) > -1;
      },
          g = 'gecko',
          w = 'webkit',
          s = 'safari',
          o = 'opera',
          h = document.documentElement,
          b = [!/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua) ? 'ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1]) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '') : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : is('x11') || is('linux') ? 'linux' : '', 'js'];

      c = b.join(' ');

      if ($.browser.mobile) {
        c += ' mobile';
      }

      if (hasTouch) {
        c += ' touch';
      }

      h.className += ' ' + c; // Edge Detect

      var isEdge = /Edge/.test(navigator.userAgent);

      if (isEdge) {
        $('html').removeClass('chrome').addClass('edge');
      } // IE11 Detect


      var isIE11 = !window.ActiveXObject && "ActiveXObject" in window;

      if (isIE11) {
        $('html').removeClass('gecko').addClass('ie ie11');
        return;
      } // Dark and Boxed Compatibility


      if ($('body').hasClass('dark')) {
        $('html').addClass('dark');
      }

      if ($('body').hasClass('boxed')) {
        $('html').addClass('boxed');
      }
    }
  });
  $.browserSelector();
  /*
  Global Variable For Screen Size
  */

  theme.globalWindowWidth = $(window).width();
  var globalWindowWidth = $(window).width();

  window.onresize = function () {
    theme.globalWindowWidth = $(window).width();
  };
  /*
  Browser Workarounds
  */


  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    // iPad/Iphone/iPod Hover Workaround
    $(document).ready(function ($) {
      $('.thumb-info').attr('onclick', 'return true');
    });
  }
  /*
  Tabs
  */


  if ($('a[data-bs-toggle="tab"]').length) {
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      var $tabPane = $($(e.target).attr('href')); // Carousel Refresh

      if ($tabPane.length) {
        $tabPane.find('.owl-carousel').trigger('refresh.owl.carousel');
      } // Change Active Class


      $(this).parents('.nav-tabs').find('.active').removeClass('active');
      $(this).addClass('active').parent().addClass('active');
    });

    if (window.location.hash) {
      $(window).on('load', function () {
        if (window.location.hash !== '*' && $(window.location.hash).get(0)) {
          new bootstrap.Tab($('a.nav-link[href="' + window.location.hash + '"]:not([data-hash])')[0]).show();
        }
      });
    }
  }
  /*
  On Load Scroll
  */


  if (!$('html').hasClass('disable-onload-scroll') && window.location.hash && !['#*'].includes(window.location.hash)) {
    window.scrollTo(0, 0);
    $(window).on('load', function () {
      setTimeout(function () {
        var target = window.location.hash,
            offset = $(window).width() < 768 ? 180 : 90;

        if (!$(target).length) {
          return;
        }

        if ($("a[href$='" + window.location.hash + "']").is('[data-hash-offset]')) {
          offset = parseInt($("a[href$='" + window.location.hash + "']").first().attr('data-hash-offset'));
        } else if ($("html").is('[data-hash-offset]')) {
          offset = parseInt($("html").attr('data-hash-offset'));
        }

        if (isNaN(offset)) {
          offset = 0;
        }

        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, 600, 'easeOutQuad', function () {
          $('body').removeClass('scrolling');
        });
      }, 1);
    });
  }
  /*
  * Text Rotator
  */


  $.fn.extend({
    textRotator: function textRotator(options) {
      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 100,
        child: null
      };
      var options = $.extend(defaults, options);
      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        });

        if (!o.child) {
          var next = $(obj).children(':first');
        } else {
          var next = o.child;
        }

        $(next).fadeIn(o.fadeSpeed, function () {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
            var next = $(this).next();

            if (next.length == 0) {
              next = $(obj).children(':first');
            }

            $(obj).textRotator({
              child: next,
              fadeSpeed: o.fadeSpeed,
              pauseSpeed: o.pauseSpeed
            });
          });
        });
      });
    }
  });
  /*
  * Notice Top bar
  */

  var $noticeTopBar = {
    $wrapper: $('.notice-top-bar'),
    $closeBtn: $('.notice-top-bar-close'),
    $header: $('#header'),
    $body: $('.body'),
    init: function init() {
      var self = this;

      if (!$.cookie('portoNoticeTopBarClose')) {
        self.build().events();
      } else {
        self.$wrapper.parent().prepend('<!-- Notice Top Bar removed by cookie -->');
        self.$wrapper.remove();
      }

      return this;
    },
    build: function build() {
      var self = this;
      $(window).on('load', function () {
        setTimeout(function () {
          self.$body.css({
            'margin-top': self.$wrapper.outerHeight(),
            'transition': 'ease margin 300ms'
          });
          $('#noticeTopBarContent').textRotator({
            fadeSpeed: 500,
            pauseSpeed: 5000
          });

          if (['absolute', 'fixed'].includes(self.$header.css('position'))) {
            self.$header.css({
              'top': self.$wrapper.outerHeight(),
              'transition': 'ease top 300ms'
            });
          }

          $(window).trigger('notice.top.bar.opened');
        }, 1000);
      });
      return this;
    },
    events: function events() {
      var self = this;
      self.$closeBtn.on('click', function (e) {
        e.preventDefault();
        self.$body.animate({
          'margin-top': 0
        }, 300, function () {
          self.$wrapper.remove();
          self.saveCookie();
        });

        if (['absolute', 'fixed'].includes(self.$header.css('position'))) {
          self.$header.animate({
            top: 0
          }, 300);
        } // When header has shrink effect


        if (self.$header.hasClass('header-effect-shrink')) {
          self.$header.find('.header-body').animate({
            top: 0
          }, 300);
        }

        $(window).trigger('notice.top.bar.closed');
      });
      return this;
    },
    checkCookie: function checkCookie() {
      var self = this;

      if ($.cookie('portoNoticeTopBarClose')) {
        return true;
      } else {
        return false;
      }

      return this;
    },
    saveCookie: function saveCookie() {
      var self = this;
      $.cookie('portoNoticeTopBarClose', true);
      return this;
    }
  };

  if ($('.notice-top-bar').length) {
    $noticeTopBar.init();
  }
  /*
  * Image Hotspots
  */


  if ($('.image-hotspot').length) {
    $('.image-hotspot').append('<span class="ring"></span>').append('<span class="circle"></span>');
  }
  /*
  * Reading Progress
  */


  if ($('.progress-reading').length) {
    var updateScrollProgress = function updateScrollProgress() {
      var pixels = $(document).scrollTop();
      pageHeight = $(document).height() - $(window).height();
      progress = 100 * pixels / pageHeight;
      $('.progress-reading .progress-bar').width(parseInt(progress) + "%");
    };

    $(document).on('scroll ready', function () {
      updateScrollProgress();
    });
    $(document).ready(function () {
      $(window).afterResize(function () {
        updateScrollProgress();
      });
    });
  }
  /*
  * Page Transition
  */


  if ($('body[data-plugin-page-transition]').length) {
    var link_click = false;
    $(document).on('click', 'a', function (e) {
      link_click = $(this);
    });
    $(window).on("beforeunload", function (e) {
      if (_typeof(link_click) === 'object') {
        var href = link_click.attr('href');

        if (href.indexOf('mailto:') != 0 && href.indexOf('tel:') != 0 && !link_click.data('rm-from-transition')) {
          $('body').addClass('page-transition-active');
        }
      }
    });
    $(window).on("pageshow", function (e) {
      if (e.persisted || e.originalEvent.persisted) {
        if ($('html').hasClass('safari')) {
          window.location.reload();
        }

        $('body').removeClass('page-transition-active');
      }
    });
  }
  /*
  * Thumb Info Floating Caption
  */


  $('.thumb-info-floating-caption').each(function () {
    $(this).addClass('thumb-info-floating-element-wrapper').append('<span class="thumb-info-floating-element thumb-info-floating-caption-title d-none">' + $(this).data('title') + '</span>');

    if ($(this).data('type')) {
      $('.thumb-info-floating-caption-title', $(this)).append('<div class="thumb-info-floating-caption-type">' + $(this).data('type') + '</div>').css({
        'padding-bottom': 22
      });
    }

    if ($(this).hasClass('thumb-info-floating-caption-clean')) {
      $('.thumb-info-floating-element', $(this)).addClass('bg-transparent');
    }
  });
  /*
  * Thumb Info Floating Element
  */

  if ($('.thumb-info-floating-element-wrapper').length) {
    $('.thumb-info-floating-element-wrapper').on('mouseenter', function (e) {
      if (!$(this).data('offset')) {
        $(this).data('offset', 0);
      }

      var offset = parseInt($(this).data('offset'));
      $('.thumb-info-floating-element-clone').remove();
      $('.thumb-info-floating-element', $(this)).clone().addClass('thumb-info-floating-element-clone p-fixed p-events-none').attr('style', 'transform: scale(0.1);').removeClass('d-none').appendTo('body');
      $('.thumb-info-floating-element-clone').css({
        left: e.clientX + offset,
        top: e.clientY + offset
      }).fadeIn(300);
      gsap.to('.thumb-info-floating-element-clone', 0.5, {
        css: {
          scaleX: 1,
          scaleY: 1
        }
      });
      $(document).off('mousemove').on('mousemove', function (e) {
        gsap.to('.thumb-info-floating-element-clone', 0.5, {
          css: {
            left: e.clientX + offset,
            top: e.clientY + offset
          }
        });
      });
    }).on('mouseout', function () {
      gsap.to('.thumb-info-floating-element-clone', 0.5, {
        css: {
          scaleX: 0.5,
          scaleY: 0.5,
          opacity: 0
        }
      });
    });
  }
  /*
  * Thumb Info Direction Aware
  */


  $(window).on('load', function () {
    $('.thumb-info-wrapper-direction-aware').each(function () {
      $(this).hoverdir({
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false,
        hoverElem: '.thumb-info-wrapper-overlay'
      });
    });
  });
  /*
  * Thumb Info Container Full
  */

  $('.thumb-info-container-full-img').each(function () {
    var $container = $(this);
    $('[data-full-width-img-src]', $container).each(function () {
      var uniqueId = 'img' + Math.floor(Math.random() * 10000);
      $(this).attr('data-rel', uniqueId);
      $container.append('<div style="background-image: url(' + $(this).attr('data-full-width-img-src') + ');" id="' + uniqueId + '" class="thumb-info-container-full-img-large opacity-0"></div>');
    });
    $('.thumb-info', $container).on('mouseenter', function (e) {
      $('.thumb-info-container-full-img-large').removeClass('active');
      $('#' + $(this).attr('data-rel')).addClass('active');
    });
  });
  /*
  * Toggle Text Click
  */

  $('[data-toggle-text-click]').on('click', function () {
    $(this).text(function (i, text) {
      return text === $(this).attr('data-toggle-text-click') ? $(this).attr('data-toggle-text-click-alt') : $(this).attr('data-toggle-text-click');
    });
  });
  /*
  * Shape Divider Aspect Ratio
  */

  if ($('.shape-divider').length) {
    aspectRatioSVG();
    $(window).on('resize', function () {
      aspectRatioSVG();
    });
  }
  /*
  * Shape Divider Animated
  */


  if ($('.shape-divider-horizontal-animation').length) {
    theme.fn.intObs('.shape-divider-horizontal-animation', function () {
      for (var i = 0; i <= 1; i++) {
        var svgClone = $(this).find('svg:nth-child(1)').clone();
        $(this).append(svgClone);
      }

      $(this).addClass('start');
    }, {});
  }
  /*
  * Toggle Class
  */


  $('[data-porto-toggle-class]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass($(this).data('porto-toggle-class'));
  });
  /*
  * Dynamic Height
  */

  var $window = $(window);
  $window.on('resize dynamic.height.resize', function () {
    $('[data-dynamic-height]').each(function () {
      var $this = $(this),
          values = JSON.parse($this.data('dynamic-height').replace(/'/g, '"').replace(';', '')); // XS

      if ($window.width() < 576) {
        $this.height(values[4]);
      } // SM


      if ($window.width() > 575 && $window.width() < 768) {
        $this.height(values[3]);
      } // MD


      if ($window.width() > 767 && $window.width() < 992) {
        $this.height(values[2]);
      } // LG


      if ($window.width() > 991 && $window.width() < 1200) {
        $this.height(values[1]);
      } // XS


      if ($window.width() > 1199) {
        $this.height(values[0]);
      }
    });
  }); // Mobile First Load

  if ($window.width() < 992) {
    $window.trigger('dynamic.height.resize');
  }
  /* Video - Trigger Play */


  if ($('[data-trigger-play-video]').length) {
    theme.fn.execOnceTroughEvent('[data-trigger-play-video]', 'mouseover.trigger.play.video', function () {
      var $video = $($(this).data('trigger-play-video'));
      $(this).on('click', function (e) {
        e.preventDefault();

        if ($(this).data('trigger-play-video-remove') == 'yes') {
          $(this).animate({
            opacity: 0
          }, 300, function () {
            $video[0].play();
            $(this).remove();
          });
        } else {
          setTimeout(function () {
            $video[0].play();
          }, 300);
        }
      });
    });
  }
  /* Video - Custom Auto Play */


  if ($('video[data-auto-play]').length) {
    $(window).on('load', function () {
      $('video[data-auto-play]').each(function () {
        var $video = $(this);
        setTimeout(function () {
          if ($('#' + $video.attr('id')).length) {
            if ($('[data-trigger-play-video="#' + $video.attr('id') + '"]').data('trigger-play-video-remove') == 'yes') {
              $('[data-trigger-play-video="#' + $video.attr('id') + '"]').animate({
                opacity: 0
              }, 300, function () {
                $video[0].play();
                $('[data-trigger-play-video="#' + $video.attr('id') + '"]').remove();
              });
            } else {
              setTimeout(function () {
                $video[0].play();
              }, 300);
            }
          }
        }, 100);
      });
    });
  }
  /*
  * Remove min height after the load of page
  */


  if ($('[data-remove-min-height]').length) {
    $(window).on('load', function () {
      $('[data-remove-min-height]').each(function () {
        $(this).css({
          'min-height': 0
        });
      });
    });
  }
  /*
  * Style Switcher Open Loader Button
  */


  if ($('.style-switcher-open-loader').length) {
    $('.style-switcher-open-loader').on('click', function (e) {
      e.preventDefault();
      var $this = $(this); // Add Spinner to icon

      $this.addClass('style-switcher-open-loader-loading');
      var basePath = $(this).data('base-path'),
          skinSrc = $(this).data('skin-src');
      var script1 = document.createElement("script");
      script1.src = basePath + "master/style-switcher/style.switcher.localstorage.js";
      var script2 = document.createElement("script");
      script2.src = basePath + "master/style-switcher/style.switcher.js";
      script2.id = "styleSwitcherScript";
      script2.setAttribute('data-base-path', basePath);
      script2.setAttribute('data-skin-src', skinSrc);

      script2.onload = function () {
        setTimeout(function () {
          // Trigger a click to open the style switcher sidebar
          function checkIfReady() {
            if (!$('.style-switcher-open').length) {
              window.setTimeout(checkIfReady, 100);
            } else {
              $('.style-switcher-open').trigger('click');
            }
          }

          checkIfReady();
        }, 500);
      };

      document.body.appendChild(script1);
      document.body.appendChild(script2);
    });
  }
})(jQuery);
/*
* Scroll and Focus
*/


function scrollAndFocus($this, scrollTarget, focusTarget, scrollOffset, scrollAgain) {
  (function ($) {
    $('body').addClass('scrolling'); // if it's inside a header menu

    if ($($this).closest('#mainNav').length) {
      $($this).parents('.collapse.show').collapse('hide');
    }

    $('html, body').animate({
      scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
    }, 300, function () {
      $('body').removeClass('scrolling');
      setTimeout(function () {
        $(focusTarget).focus();
      }, 500);

      if (scrollAgain) {
        $('html, body').animate({
          scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
        });
      }
    });
  })(jQuery);
}
/*
* Shape Divider - SVG Aspect Ratio
*/


function aspectRatioSVG() {
  if ($(window).width() < 1950) {
    $('.shape-divider svg[preserveAspectRatio]').each(function () {
      if (!$(this).parent().hasClass('shape-divider-horizontal-animation')) {
        $(this).attr('preserveAspectRatio', 'xMinYMin');
      } else {
        $(this).attr('preserveAspectRatio', 'none');
      }
    });
  } else {
    $('.shape-divider svg[preserveAspectRatio]').each(function () {
      $(this).attr('preserveAspectRatio', 'none');
    });
  }
}
/*
* Lazy Load Background Images (with lazySizes plugin)
*/


document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg-src');

  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});

(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
          $this = $(this),
          $marqueeWrapper,
          containerWidth,
          animationCss,
          verticalDir,
          elWidth,
          loopCount = 3,
          playState = "animation-play-state",
          css3AnimationIsSupported = false,
          _prefixedEvent = function _prefixedEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      },
          _objToString = function _objToString(obj) {
        var tabjson = [];

        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            tabjson.push(p + ":" + obj[p]);
          }
        }

        tabjson.push();
        return "{" + tabjson.join(",") + "}";
      },
          _startAnimationWithDelay = function _startAnimationWithDelay() {
        $this.timer = setTimeout(animate, o.delayBeforeStart);
      },
          methods = {
        pause: function pause() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "paused");
          } else {
            if ($.fn.pause) {
              $marqueeWrapper.pause();
            }
          }

          $this.data("runningStatus", "paused");
          $this.trigger("paused");
        },
        resume: function resume() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "running");
          } else {
            if ($.fn.resume) {
              $marqueeWrapper.resume();
            }
          }

          $this.data("runningStatus", "resumed");
          $this.trigger("resumed");
        },
        toggle: function toggle() {
          methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout($this.timer);
          $this.find("*").addBack().off();
          $this.html($this.find(".js-marquee:first").html());
        }
      };

      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
          }

          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true;
          }

          methods[options]();
        }

        return;
      }

      var dataAttributes = {},
          attr;
      $.each(o, function (key) {
        attr = $this.attr("data-" + key);

        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true;
              break;

            case "false":
              attr = false;
              break;
          }

          o[key] = attr;
        }
      });

      if (o.speed) {
        o.duration = parseInt($this.width(), 10) / o.speed * 1e3;
      }

      verticalDir = o.direction === "up" || o.direction === "down";
      o.gap = o.duplicated ? parseInt(o.gap) : 0;
      $this.wrapInner('<div class="js-marquee"></div>');
      var $el = $this.find(".js-marquee").css({
        "margin-right": o.gap,
        "float": "left"
      });

      if (o.duplicated) {
        $el.clone(true).appendTo($this);
      }

      $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      $marqueeWrapper = $this.find(".js-marquee-wrapper");

      if (verticalDir) {
        var containerHeight = $this.height();
        $marqueeWrapper.removeAttr("style");
        $this.height(containerHeight);
        $this.find(".js-marquee").css({
          "float": "none",
          "margin-bottom": o.gap,
          "margin-right": 0
        });

        if (o.duplicated) {
          $this.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
        }

        var elHeight = $this.find(".js-marquee:first").height() + o.gap;

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
          o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration;
        } else {
          o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap;
        containerWidth = $this.width();

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
          o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration;
        } else {
          o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
        }
      }

      if (o.duplicated) {
        o.duration = o.duration / 2;
      }

      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
            animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
            domPrefixes = "Webkit Moz O ms Khtml".split(" "),
            animationString = "animation",
            animationCss3Str = "",
            keyframeString = "";

        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " ";
          css3AnimationIsSupported = true;
        }

        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
              animationString = prefix + animationString;
              playState = prefix + playState;
              keyframeString = "@" + prefix + "keyframes " + animationName + " ";
              css3AnimationIsSupported = true;
              break;
            }
          }
        }

        if (css3AnimationIsSupported) {
          animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
          $this.data("css3AnimationIsSupported", true);
        }
      }

      var _rePositionVertically = function _rePositionVertically() {
        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")");
      },
          _rePositionHorizontally = function _rePositionHorizontally() {
        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")");
      };

      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)");
          } else {
            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")");
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)");
          } else {
            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")");
          }
        }

        if (!o.startVisible) {
          loopCount = 1;
        }
      } else if (o.startVisible) {
        loopCount = 2;
      } else {
        if (verticalDir) {
          _rePositionVertically();
        } else {
          _rePositionHorizontally();
        }
      }

      var animate = function animate() {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration;

            if (verticalDir) {
              o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2;
            } else {
              o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2;
            }

            if (animationCss3Str) {
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
            }

            loopCount++;
          } else if (loopCount === 2) {
            o.duration = o._originalDuration;

            if (animationCss3Str) {
              animationName = animationName + "0";
              keyframeString = $.trim(keyframeString) + "0 ";
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
            }

            loopCount++;
          }
        }

        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")");
            }

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionVertically();
            }
          } else {
            _rePositionVertically();

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
            };
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")");
            }

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionHorizontally();
            }
          } else {
            _rePositionHorizontally();

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
            };
          }
        }

        $this.trigger("beforeStarting");

        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str);
          var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
              $styles = $marqueeWrapper.find("style");

          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss);
          } else {
            $("head").append("<style>" + keyframeCss + "</style>");
          }

          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished");
          });

          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate();
            $this.trigger("finished");
          });
        } else {
          $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () {
            $this.trigger("finished");

            if (o.pauseOnCycle) {
              _startAnimationWithDelay();
            } else {
              animate();
            }
          });
        }

        $this.data("runningStatus", "resumed");
      };

      $this.on("pause", methods.pause);
      $this.on("resume", methods.resume);

      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause);
        $this.on("mouseleave", methods.resume);
      }

      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate();
      } else {
        _startAnimationWithDelay();
      }
    });
  };

  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false
  };
});

(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var CountTo = function CountTo(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,
    // the number the element should start at
    to: 0,
    // the number the element should end at
    speed: 1000,
    // how long it should take to count between the target numbers
    refreshInterval: 100,
    // how often the element should be updated
    decimals: 0,
    // the number of decimal places to show
    formatter: formatter,
    // handler for formatting the value before rendering
    onUpdate: null,
    // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating

  };

  CountTo.prototype.init = function () {
    this.value = this.options.from;
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from: this.$element.data('from'),
      to: this.$element.data('to'),
      speed: this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals: this.$element.data('decimals')
    };
    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof options[key] === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;
    this.render();

    if (typeof this.options.onUpdate == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof this.options.onComplete == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('countTo');
      var init = !data || _typeof(option) === 'object';
      var options = _typeof(option) === 'object' ? option : {};
      var method = typeof option === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
});

(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *       the user visible viewport of a web browser.
   *       only accounts for vertical position, not horizontal.
   */
  $.fn.visible = function (partial, hidden, direction, container) {
    if (this.length < 1) return;
    var $t = this.length > 1 ? this.eq(0) : this,
        isContained = typeof container !== 'undefined' && container !== null,
        $w = isContained ? $(container) : $(window),
        wPosition = isContained ? $w.position() : 0,
        t = $t.get(0),
        vpWidth = $w.outerWidth(),
        vpHeight = $w.outerHeight(),
        direction = direction ? direction : 'both',
        clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

    if (typeof t.getBoundingClientRect === 'function') {
      // Use this native browser method, if available.
      var rec = t.getBoundingClientRect(),
          tViz = isContained ? rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top : rec.top >= 0 && rec.top < vpHeight,
          bViz = isContained ? rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top : rec.bottom > 0 && rec.bottom <= vpHeight,
          lViz = isContained ? rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left : rec.left >= 0 && rec.left < vpWidth,
          rViz = isContained ? rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left : rec.right > 0 && rec.right <= vpWidth,
          vVisible = partial ? tViz || bViz : tViz && bViz,
          hVisible = partial ? lViz || rViz : lViz && rViz;
      if (direction === 'both') return clientSize && vVisible && hVisible;else if (direction === 'vertical') return clientSize && vVisible;else if (direction === 'horizontal') return clientSize && hVisible;
    } else {
      var viewTop = isContained ? 0 : wPosition,
          viewBottom = viewTop + vpHeight,
          viewLeft = $w.scrollLeft(),
          viewRight = viewLeft + vpWidth,
          position = $t.position(),
          _top = position.top,
          _bottom = _top + $t.height(),
          _left = position.left,
          _right = _left + $t.width(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom,
          compareLeft = partial === true ? _right : _left,
          compareRight = partial === true ? _left : _right;

      if (direction === 'both') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop && compareRight <= viewRight && compareLeft >= viewLeft;else if (direction === 'vertical') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop;else if (direction === 'horizontal') return !!clientSize && compareRight <= viewRight && compareLeft >= viewLeft;
    }
  };
})(jQuery);
/**
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/


;

(function (factory) {
  // eslint-disable-line no-extra-semi
  'use strict';

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  /*
  *  internal
  */
  var _previousResizeWidth = -1,
      _updateTimeout = -1;
  /*
  *  _parse
  *  value parse utility function
  */


  var _parse = function _parse(value) {
    // parse value and convert NaN to 0
    return parseFloat(value) || 0;
  };
  /*
  *  _rows
  *  utility function returns array of jQuery selections representing each row
  *  (as displayed after float wrapping applied by browser)
  */


  var _rows = function _rows(elements) {
    var tolerance = 1,
        $elements = $(elements),
        lastTop = null,
        rows = []; // group elements by their top position

    $elements.each(function () {
      var $that = $(this),
          top = $that.offset().top - _parse($that.css('margin-top')),
          lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

      if (lastRow === null) {
        // first item on the row, so just push it
        rows.push($that);
      } else {
        // if the row top is the same, add to the row group
        if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
          rows[rows.length - 1] = lastRow.add($that);
        } else {
          // otherwise start a new row group
          rows.push($that);
        }
      } // keep track of the last row top


      lastTop = top;
    });
    return rows;
  };
  /*
  *  _parseOptions
  *  handle plugin options
  */


  var _parseOptions = function _parseOptions(options) {
    var opts = {
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    };

    if (_typeof(options) === 'object') {
      return $.extend(opts, options);
    }

    if (typeof options === 'boolean') {
      opts.byRow = options;
    } else if (options === 'remove') {
      opts.remove = true;
    }

    return opts;
  };
  /*
  *  matchHeight
  *  plugin definition
  */


  var matchHeight = $.fn.matchHeight = function (options) {
    var opts = _parseOptions(options); // handle remove


    if (opts.remove) {
      var that = this; // remove fixed height from all selected elements

      this.css(opts.property, ''); // remove selected elements from all groups

      $.each(matchHeight._groups, function (key, group) {
        group.elements = group.elements.not(that);
      }); // TODO: cleanup empty groups

      return this;
    }

    if (this.length <= 1 && !opts.target) {
      return this;
    } // keep track of this group so we can re-apply later on load and resize events


    matchHeight._groups.push({
      elements: this,
      options: opts
    }); // match each element's height to the tallest element in the selection


    matchHeight._apply(this, opts);

    return this;
  };
  /*
  *  plugin global options
  */


  matchHeight.version = '0.7.2';
  matchHeight._groups = [];
  matchHeight._throttle = 80;
  matchHeight._maintainScroll = false;
  matchHeight._beforeUpdate = null;
  matchHeight._afterUpdate = null;
  matchHeight._rows = _rows;
  matchHeight._parse = _parse;
  matchHeight._parseOptions = _parseOptions;
  /*
  *  matchHeight._apply
  *  apply matchHeight to given elements
  */

  matchHeight._apply = function (elements, options) {
    var opts = _parseOptions(options),
        $elements = $(elements),
        rows = [$elements]; // take note of scroll position


    var scrollTop = $(window).scrollTop(),
        htmlHeight = $('html').outerHeight(true); // get hidden parents

    var $hiddenParents = $elements.parents().filter(':hidden'); // cache the original inline style

    $hiddenParents.each(function () {
      var $that = $(this);
      $that.data('style-cache', $that.attr('style'));
    }); // temporarily must force hidden parents visible

    $hiddenParents.css('display', 'block'); // get rows if using byRow, otherwise assume one row

    if (opts.byRow && !opts.target) {
      // must first force an arbitrary equal height so floating elements break evenly
      $elements.each(function () {
        var $that = $(this),
            display = $that.css('display'); // temporarily force a usable display value

        if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
          display = 'block';
        } // cache the original inline style


        $that.data('style-cache', $that.attr('style'));
        $that.css({
          'display': display,
          'padding-top': '0',
          'padding-bottom': '0',
          'margin-top': '0',
          'margin-bottom': '0',
          'border-top-width': '0',
          'border-bottom-width': '0',
          'height': '100px',
          'overflow': 'hidden'
        });
      }); // get the array of rows (based on element top position)

      rows = _rows($elements); // revert original inline styles

      $elements.each(function () {
        var $that = $(this);
        $that.attr('style', $that.data('style-cache') || '');
      });
    }

    $.each(rows, function (key, row) {
      var $row = $(row),
          targetHeight = 0;

      if (!opts.target) {
        // skip apply to rows with only one item
        if (opts.byRow && $row.length <= 1) {
          $row.css(opts.property, '');
          return;
        } // iterate the row and find the max height


        $row.each(function () {
          var $that = $(this),
              style = $that.attr('style'),
              display = $that.css('display'); // temporarily force a usable display value

          if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
            display = 'block';
          } // ensure we get the correct actual height (and not a previously set height value)


          var css = {
            'display': display
          };
          css[opts.property] = '';
          $that.css(css); // find the max height (including padding, but not margin)

          if ($that.outerHeight(false) > targetHeight) {
            targetHeight = $that.outerHeight(false);
          } // revert styles


          if (style) {
            $that.attr('style', style);
          } else {
            $that.css('display', '');
          }
        });
      } else {
        // if target set, use the height of the target element
        targetHeight = opts.target.outerHeight(false);
      } // iterate the row and apply the height to all elements


      $row.each(function () {
        var $that = $(this),
            verticalPadding = 0; // don't apply to a target

        if (opts.target && $that.is(opts.target)) {
          return;
        } // handle padding and border correctly (required when not using border-box)


        if ($that.css('box-sizing') !== 'border-box') {
          verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
          verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
        } // set the height (accounting for padding and border)


        $that.css(opts.property, targetHeight - verticalPadding + 'px');
      });
    }); // revert hidden parents

    $hiddenParents.each(function () {
      var $that = $(this);
      $that.attr('style', $that.data('style-cache') || null);
    }); // restore scroll position if enabled

    if (matchHeight._maintainScroll) {
      $(window).scrollTop(scrollTop / htmlHeight * $('html').outerHeight(true));
    }

    return this;
  };
  /*
  *  matchHeight._applyDataApi
  *  applies matchHeight to all elements with a data-match-height attribute
  */


  matchHeight._applyDataApi = function () {
    var groups = {}; // generate groups by their groupId set by elements using data-match-height

    $('[data-match-height], [data-mh]').each(function () {
      var $this = $(this),
          groupId = $this.attr('data-mh') || $this.attr('data-match-height');

      if (groupId in groups) {
        groups[groupId] = groups[groupId].add($this);
      } else {
        groups[groupId] = $this;
      }
    }); // apply matchHeight to each group

    $.each(groups, function () {
      this.matchHeight(true);
    });
  };
  /*
  *  matchHeight._update
  *  updates matchHeight on all current groups with their correct options
  */


  var _update = function _update(event) {
    if (matchHeight._beforeUpdate) {
      matchHeight._beforeUpdate(event, matchHeight._groups);
    }

    $.each(matchHeight._groups, function () {
      matchHeight._apply(this.elements, this.options);
    });

    if (matchHeight._afterUpdate) {
      matchHeight._afterUpdate(event, matchHeight._groups);
    }
  };

  matchHeight._update = function (throttle, event) {
    // prevent update if fired from a resize event
    // where the viewport width hasn't actually changed
    // fixes an event looping bug in IE8
    if (event && event.type === 'resize') {
      var windowWidth = $(window).width();

      if (windowWidth === _previousResizeWidth) {
        return;
      }

      _previousResizeWidth = windowWidth;
    } // throttle updates


    if (!throttle) {
      _update(event);
    } else if (_updateTimeout === -1) {
      _updateTimeout = setTimeout(function () {
        _update(event);

        _updateTimeout = -1;
      }, matchHeight._throttle);
    }
  };
  /*
  *  bind events
  */
  // apply on DOM ready event


  $(matchHeight._applyDataApi); // use on or bind where supported

  var on = $.fn.on ? 'on' : 'bind'; // update heights on load and resize events

  $(window)[on]('load', function (event) {
    matchHeight._update(false, event);
  }); // throttled update heights on resize events

  $(window)[on]('resize orientationchange', function (event) {
    matchHeight._update(true, event);
  });
});
/*! waitForImages jQuery Plugin - v2.4.0 - 2018-02-13
* https://github.com/alexanderdickson/waitForImages
* Copyright (c) 2018 Alex Dickson; Licensed MIT */


;

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Namespace all events.
  var eventNamespace = 'waitForImages'; // Is srcset supported by this browser?

  var hasSrcset = function (img) {
    return img.srcset && img.sizes;
  }(new Image()); // CSS properties which contain references to images.


  $.waitForImages = {
    hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
    hasImageAttributes: ['srcset']
  }; // Custom selector to find all `img` elements with a valid `src` attribute.

  $.expr.pseudos['has-src'] = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    return $(obj).is('img[src][src!=""]');
  }; // Custom selector to find images which are not already cached by the
  // browser.


  $.expr.pseudos.uncached = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    if (!$(obj).is(':has-src')) {
      return false;
    }

    return !obj.complete;
  };

  $.fn.waitForImages = function () {
    var allImgsLength = 0;
    var allImgsLoaded = 0;
    var deferred = $.Deferred();
    var originalCollection = this;
    var allImgs = []; // CSS properties which may contain an image.

    var hasImgProperties = $.waitForImages.hasImageProperties || []; // Element attributes which may contain an image.

    var hasImageAttributes = $.waitForImages.hasImageAttributes || []; // To match `url()` references.
    // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri

    var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
    var finishedCallback;
    var eachCallback;
    var waitForAll; // Handle options object (if passed).

    if ($.isPlainObject(arguments[0])) {
      waitForAll = arguments[0].waitForAll;
      eachCallback = arguments[0].each;
      finishedCallback = arguments[0].finished;
    } else {
      // Handle if using deferred object and only one param was passed in.
      if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
        waitForAll = arguments[0];
      } else {
        finishedCallback = arguments[0];
        eachCallback = arguments[1];
        waitForAll = arguments[2];
      }
    } // Handle missing callbacks.


    finishedCallback = finishedCallback || $.noop;
    eachCallback = eachCallback || $.noop; // Convert waitForAll to Boolean.

    waitForAll = !!waitForAll; // Ensure callbacks are functions.

    if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
      throw new TypeError('An invalid callback was supplied.');
    }

    this.each(function () {
      // Build a list of all imgs, dependent on what images will
      // be considered.
      var obj = $(this);

      if (waitForAll) {
        // Get all elements (including the original), as any one of
        // them could have a background image.
        obj.find('*').addBack().each(function () {
          var element = $(this); // If an `img` element, add it. But keep iterating in
          // case it has a background image too.

          if (element.is('img:has-src') && !element.is('[srcset]')) {
            allImgs.push({
              src: element.attr('src'),
              element: element[0]
            });
          }

          $.each(hasImgProperties, function (i, property) {
            var propertyValue = element.css(property);
            var match; // If it doesn't contain this property, skip.

            if (!propertyValue) {
              return true;
            } // Get all url() of this element.


            while (match = matchUrl.exec(propertyValue)) {
              allImgs.push({
                src: match[2],
                element: element[0]
              });
            }
          });
          $.each(hasImageAttributes, function (i, attribute) {
            var attributeValue = element.attr(attribute);
            var attributeValues; // If it doesn't contain this property, skip.

            if (!attributeValue) {
              return true;
            }

            allImgs.push({
              src: element.attr('src'),
              srcset: element.attr('srcset'),
              element: element[0]
            });
          });
        });
      } else {
        // For images only, the task is simpler.
        obj.find('img:has-src').each(function () {
          allImgs.push({
            src: this.src,
            element: this
          });
        });
      }
    });
    allImgsLength = allImgs.length;
    allImgsLoaded = 0; // If no images found, don't bother.

    if (allImgsLength === 0) {
      finishedCallback.call(originalCollection);
      deferred.resolveWith(originalCollection);
    } // Now that we've found all imgs in all elements in this,
    // load them and attach callbacks.


    $.each(allImgs, function (i, img) {
      var image = new Image();
      var events = 'load.' + eventNamespace + ' error.' + eventNamespace; // Handle the image loading and error with the same callback.

      $(image).one(events, function me(event) {
        // If an error occurred with loading the image, set the
        // third argument accordingly.
        var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
        allImgsLoaded++;
        eachCallback.apply(img.element, eachArguments);
        deferred.notifyWith(img.element, eachArguments); // Unbind the event listeners. I use this in addition to
        // `one` as one of those events won't be called (either
        // 'load' or 'error' will be called).

        $(this).off(events, me);

        if (allImgsLoaded == allImgsLength) {
          finishedCallback.call(originalCollection[0]);
          deferred.resolveWith(originalCollection[0]);
          return false;
        }
      });

      if (hasSrcset && img.srcset) {
        image.srcset = img.srcset;
        image.sizes = img.sizes;
      }

      image.src = img.src;
    });
    return deferred.promise();
  };
});
/* jQuery-FontSpy.js v3.0.0
 * https://github.com/patrickmarabeas/jQuery-FontSpy.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 02/11/2015
 */


(function (w, $) {
  fontSpy = function fontSpy(fontName, conf) {
    var $html = $('html'),
        $body = $('body'),
        fontFamilyName = fontName; // Throw error if fontName is not a string or not is left as an empty string

    if (typeof fontFamilyName !== 'string' || fontFamilyName === '') {
      throw 'A valid fontName is required. fontName must be a string and must not be an empty string.';
    }

    var defaults = {
      font: fontFamilyName,
      fontClass: fontFamilyName.toLowerCase().replace(/\s/g, ''),
      success: function success() {},
      failure: function failure() {},
      testFont: 'Courier New',
      testString: 'QW@HhsXJ',
      glyphs: '',
      delay: 50,
      timeOut: 1000,
      callback: $.noop
    };
    var config = $.extend(defaults, conf);
    var $tester = $('<span>' + config.testString + config.glyphs + '</span>').css('position', 'absolute').css('top', '-9999px').css('left', '-9999px').css('visibility', 'hidden').css('fontFamily', config.testFont).css('fontSize', '250px');
    $body.append($tester);
    var fallbackFontWidth = $tester.outerWidth();
    $tester.css('fontFamily', config.font + ',' + config.testFont);

    var failure = function failure() {
      $html.addClass("no-" + config.fontClass);

      if (config && config.failure) {
        config.failure();
      }

      config.callback(new Error('FontSpy timeout'));
      $tester.remove();
    };

    var success = function success() {
      config.callback();
      $html.addClass(config.fontClass);

      if (config && config.success) {
        config.success();
      }

      $tester.remove();
    };

    var retry = function retry() {
      setTimeout(checkFont, config.delay);
      config.timeOut = config.timeOut - config.delay;
    };

    var checkFont = function checkFont() {
      var loadedFontWidth = $tester.outerWidth();

      if (fallbackFontWidth !== loadedFontWidth) {
        success();
      } else if (config.timeOut < 0) {
        failure();
      } else {
        retry();
      }
    };

    checkFont();
  };
})(this, jQuery);

!function (o, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (o) {
  function e(o, e, t, r) {
    if (void 0 === t && (t = function t() {}), void 0 === r && (r = {}), !o) throw new Error("Target element to observe should be a valid DOM Node");
    var n = Object.assign({}, {
      viewport: null,
      modTop: "0px",
      modRight: "0px",
      modBottom: "0px",
      modLeft: "0px",
      threshold: [0]
    }, r),
        i = n.viewport,
        f = n.modTop,
        s = n.modLeft,
        u = n.modBottom,
        a = n.modRight,
        d = n.threshold;
    if (!Array.isArray(d) && "number" != typeof d) throw new Error("threshold should be a number or an array of numbers");
    var p = Array.isArray(d) ? d.map(function (o) {
      return Math.floor(o % 101) / 100;
    }) : [Math.floor(d ? d % 101 : 0) / 100],
        c = Math.min.apply(Math, p),
        m = {
      root: i instanceof Node ? i : null,
      rootMargin: f + " " + a + " " + u + " " + s,
      threshold: p
    },
        h = new IntersectionObserver(function (r, n) {
      var i = r.filter(function (e) {
        return e.target === o;
      })[0],
          f = function f() {
        return n.unobserve(o);
      };

      i && (i.isInViewport = i.isIntersecting && i.intersectionRatio >= c, i.isInViewport ? e(i, f, o) : t(i, f, o));
    }, m);
    return h.observe(o), function () {
      return h.unobserve(o);
    };
  }

  o.observeElementInViewport = e, o.isInViewport = function (o, t) {
    return void 0 === t && (t = {}), new Promise(function (r, n) {
      try {
        e(o, function (o, e) {
          e(), r(!0);
        }, function (o, e) {
          e(), r(!1);
        }, t);
      } catch (o) {
        n(o);
      }
    });
  };
});
/*
Plugin Name: 	jQuery.pin
https://github.com/webpop/jquery.pin
Licensed under the terms of the MIT license.
*/

(function ($) {
  "use strict";

  $.fn.pin = function (options) {
    var scrollY = 0,
        elements = [],
        disabled = false,
        $window = $(window);
    options = options || {};

    var recalculateLimits = function recalculateLimits() {
      for (var i = 0, len = elements.length; i < len; i++) {
        var $this = elements[i];

        if (options.minWidth && $window.outerWidth() <= options.minWidth) {
          if ($this.parent().is(".pin-wrapper")) {
            $this.unwrap();
          }

          $this.css({
            width: "",
            left: "",
            top: "",
            position: ""
          });

          if (options.activeClass) {
            $this.removeClass(options.activeClass);
          }

          disabled = true;
          continue;
        } else {
          disabled = false;
        }

        var $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
        var offset = $this.offset();
        var containerOffset = $container.offset();
        var parentOffset = $this.parent().offset();

        if (!$this.parent().is(".pin-wrapper")) {
          $this.wrap("<div class='pin-wrapper'>");
        }

        var pad = $.extend({
          top: 0,
          bottom: 0
        }, options.padding || {});
        $this.data("pin", {
          pad: pad,
          from: (options.containerSelector ? containerOffset.top : offset.top) - pad.top,
          to: containerOffset.top + $container.height() - $this.outerHeight() - pad.bottom,
          end: containerOffset.top + $container.height(),
          parentTop: parentOffset.top
        });
        $this.css({
          width: $this.outerWidth()
        });
        $this.parent().css("height", $this.outerHeight());
      }
    };

    var onScroll = function onScroll() {
      if (disabled) {
        return;
      }

      scrollY = $window.scrollTop();
      var elmts = [];

      for (var i = 0, len = elements.length; i < len; i++) {
        var $this = $(elements[i]),
            data = $this.data("pin");

        if (!data) {
          // Removed element
          continue;
        }

        elmts.push($this);
        var from = data.from - data.pad.bottom,
            to = data.to - data.pad.top;

        if (from + $this.outerHeight() > data.end) {
          $this.css('position', '');
          continue;
        }

        if (from < scrollY && to > scrollY) {
          !($this.css("position") == "fixed") && $this.css({
            left: $this.offset().left,
            top: data.pad.top
          }).css("position", "fixed");

          if (options.activeClass) {
            $this.addClass(options.activeClass);
          }
        } else if (scrollY >= to) {
          $this.css({
            left: "",
            top: to - data.parentTop + data.pad.top
          }).css("position", "absolute");

          if (options.activeClass) {
            $this.addClass(options.activeClass);
          }
        } else {
          $this.css({
            position: "",
            top: "",
            left: ""
          });

          if (options.activeClass) {
            $this.removeClass(options.activeClass);
          }
        }
      }

      elements = elmts;
    };

    var update = function update() {
      recalculateLimits();
      onScroll();
    };

    this.each(function () {
      var $this = $(this),
          data = $(this).data('pin') || {};

      if (data && data.update) {
        return;
      }

      elements.push($this);
      $("img", this).one("load", recalculateLimits);
      data.update = update;
      $(this).data('pin', data);
    });
    $window.scroll(onScroll);
    $window.resize(function () {
      recalculateLimits();
    });
    recalculateLimits();
    $window.on('load', update);
    return this;
  };
})(jQuery);

(function ($) {
  "use strict"; // Define default settings

  var defaults = {
    action: function action() {},
    runOnLoad: false,
    duration: 500
  }; // Define global variables

  var settings = defaults,
      running = false,
      start;
  var methods = {}; // Initial plugin configuration

  methods.init = function () {
    // Allocate passed arguments to settings based on type
    for (var i = 0; i <= arguments.length; i++) {
      var arg = arguments[i];

      switch (_typeof(arg)) {
        case "function":
          settings.action = arg;
          break;

        case "boolean":
          settings.runOnLoad = arg;
          break;

        case "number":
          settings.duration = arg;
          break;
      }
    } // Process each matching jQuery object


    return this.each(function () {
      if (settings.runOnLoad) {
        settings.action();
      }

      $(this).resize(function () {
        methods.timedAction.call(this);
      });
    });
  };

  methods.timedAction = function (code, millisec) {
    var doAction = function doAction() {
      var remaining = settings.duration;

      if (running) {
        var elapse = new Date() - start;
        remaining = settings.duration - elapse;

        if (remaining <= 0) {
          // Clear timeout and reset running variable
          clearTimeout(running);
          running = false; // Perform user defined function

          settings.action();
          return;
        }
      }

      wait(remaining);
    };

    var wait = function wait(time) {
      running = setTimeout(doAction, time);
    }; // Define new action starting time


    start = new Date(); // Define runtime settings if function is run directly

    if (typeof millisec === 'number') {
      settings.duration = millisec;
    }

    if (typeof code === 'function') {
      settings.action = code;
    } // Only run timed loop if not already running


    if (!running) {
      doAction();
    }
  };

  $.fn.afterResize = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      return methods.init.apply(this, arguments);
    }
  };
})(jQuery);
/*
Plugin Name: 	Animated Headlines
Written by: 	Codyhouse - (https://codyhouse.co/demo/animated-headlines/index.html)
*/


jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 2500,
      //loading bar effect
  barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000,
      //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //letters effect
  lettersDelay = 50,
      //type effect
  typeLettersDelay = 150,
      selectionDuration = 500,
      typeAnimationDelay = selectionDuration + 800,
      //clip effect
  revealDuration = 600,
      revealAnimationDelay = 1500;
  initHeadline();

  function initHeadline() {
    //initialise headline animation
    animateHeadline('.word-rotator', '.word-rotator.letters');
  }

  function animateHeadline($selector) {
    var duration = animationDelay;
    theme.fn.intObs($selector, function () {
      // Single Letters - Insert <i> element for each letter of a changing word
      if ($(this).hasClass('letters')) {
        $(this).find('b').each(function () {
          var word = $(this),
              letters = word.text().split(''),
              selected = word.hasClass('is-visible');

          for (i in letters) {
            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = selected ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
          }

          var newLetters = letters.join('');
          word.html(newLetters).css('opacity', 1);
        });
      } // Animate the Headline


      var headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function () {
          headline.find('.word-rotator-words').addClass('is-loading');
        }, barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.word-rotator-words'),
            newWidth = spanWrapper.outerWidth() + 10;
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        //assign to .word-rotator-words the width of its longest word
        var words = headline.find('.word-rotator-words b'),
            width = 0;
        words.each(function () {
          var wordWidth = $(this).outerWidth();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.word-rotator-words').css('width', width);
      }

      ; // Trigger animation

      setTimeout(function () {
        hideWord(headline.find('.is-visible').eq(0));
      }, duration);
    }, {});
  }

  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents('.word-rotator').hasClass('type')) {
      var parentSpan = $word.parent('.word-rotator-words');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(function () {
        parentSpan.removeClass('selected');
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function () {
        showWord(nextWord, typeLettersDelay);
      }, typeAnimationDelay);
    } else if ($word.parents('.word-rotator').hasClass('letters')) {
      var bool = $word.children('i').length >= nextWord.children('i').length ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents('.word-rotator').hasClass('clip')) {
      $word.parents('.word-rotator-words').stop(true, true).animate({
        width: '2px'
      }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
    } else if ($word.parents('.word-rotator').hasClass('loading-bar')) {
      $word.parents('.word-rotator-words').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, barAnimationDelay);
      setTimeout(function () {
        $word.parents('.word-rotator-words').addClass('is-loading');
      }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.word-rotator').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');
    } else if ($word.parents('.word-rotator').hasClass('clip')) {
      if (document.hasFocus()) {
        $word.parents('.word-rotator-words').stop(true, true).animate({
          'width': $word.outerWidth() + 10
        }, revealDuration, function () {
          setTimeout(function () {
            hideWord($word);
          }, revealAnimationDelay);
        });
      } else {
        $word.parents('.word-rotator-words').stop(true, true).animate({
          width: $word.outerWidth() + 10
        });
        setTimeout(function () {
          hideWord($word);
        }, revealAnimationDelay);
      }
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function () {
        hideWord(takeNext($word));
      }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else {
      if ($word.parents('.word-rotator').hasClass('type')) {
        setTimeout(function () {
          $word.parents('.word-rotator-words').addClass('waiting');
        }, 200);
      }

      if (!$bool) {
        setTimeout(function () {
          hideWord($word);
        }, animationDelay);
      }

      if (!$word.closest('.word-rotator').hasClass('type')) {
        $word.closest('.word-rotator-words').stop(true, true).animate({
          width: $word.outerWidth()
        });
      }
    }
  }

  function takeNext($word) {
    return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return !$word.is(':first-child') ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');

    if (!$newWord.closest('.word-rotator').hasClass('clip')) {
      var space = 0,
          delay = $newWord.outerWidth() > $oldWord.outerWidth() ? 0 : 600;

      if ($newWord.closest('.word-rotator').hasClass('loading-bar') || $newWord.closest('.word-rotator').hasClass('slide')) {
        space = 3;
        delay = 0;
      }

      setTimeout(function () {
        $newWord.closest('.word-rotator-words').stop(true, true).animate({
          width: $newWord.outerWidth() + space
        });
      }, delay);
    }
  }
});
/*
jQuery Hover3d
=================================================
Version: 1.1.0
Author: Rian Ariona
Website: http://ariona.net
Docs: http://ariona.github.io/hover3d
Repo: http://github.com/ariona/hover3d
Issues: http://github.com/ariona/hover3d/issues
*/

(function ($) {
  $.fn.hover3d = function (options) {
    var settings = $.extend({
      selector: null,
      perspective: 1000,
      sensitivity: 20,
      invert: false,
      shine: false,
      hoverInClass: "hover-in",
      hoverOutClass: "hover-out",
      hoverClass: "hover-3d"
    }, options);
    return this.each(function () {
      var $this = $(this),
          $card = $this.find(settings.selector);
      currentX = 0;
      currentY = 0;

      if (settings.shine) {
        $card.append('<div class="shine"></div>');
      }

      var $shine = $(this).find(".shine"); // Set perspective and transformStyle value
      // for element and 3d object

      $this.css({
        perspective: settings.perspective + "px",
        transformStyle: "preserve-3d"
      });
      $card.css({
        perspective: settings.perspective + "px",
        transformStyle: "preserve-3d"
      });
      $shine.css({
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transform: 'translateZ(1px)',
        "z-index": 9
      }); // Mouse Enter function, this will add hover-in
      // Class so when mouse over it will add transition
      // based on hover-in class

      function enter(event) {
        $card.addClass(settings.hoverInClass + " " + settings.hoverClass);
        currentX = currentY = 0;
        setTimeout(function () {
          $card.removeClass(settings.hoverInClass);
        }, 1000);
      } // Mouse movement Parallax effect


      function move(event) {
        var w = $card.innerWidth(),
            h = $card.innerHeight(),
            currentX = Math.round(event.pageX - $card.offset().left),
            currentY = Math.round(event.pageY - $card.offset().top),
            ax = settings.invert ? (w / 2 - currentX) / settings.sensitivity : -(w / 2 - currentX) / settings.sensitivity,
            ay = settings.invert ? -(h / 2 - currentY) / settings.sensitivity : (h / 2 - currentY) / settings.sensitivity,
            dx = currentX - w / 2,
            dy = currentY - h / 2,
            theta = Math.atan2(dy, dx),
            angle = theta * 180 / Math.PI - 90;

        if (angle < 0) {
          angle = angle + 360;
        }

        $card.css({
          perspective: settings.perspective + "px",
          transformStyle: "preserve-3d",
          transform: "rotateY(" + ax + "deg) rotateX(" + ay + "deg)"
        });
        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
      } // Mouse leave function, will set the transform
      // property to 0, and add transition class
      // for exit animation


      function leave() {
        $card.addClass(settings.hoverOutClass + " " + settings.hoverClass);
        $card.css({
          perspective: settings.perspective + "px",
          transformStyle: "preserve-3d",
          transform: "rotateX(0) rotateY(0)"
        });
        setTimeout(function () {
          $card.removeClass(settings.hoverOutClass + " " + settings.hoverClass);
          currentX = currentY = 0;
        }, 1000);
      } // Mouseenter event binding


      $this.on("mouseenter", function () {
        return enter();
      }); // Mousemove event binding

      $this.on("mousemove", function (event) {
        return move(event);
      }); // Mouseleave event binding

      $this.on("mouseleave", function () {
        return leave();
      });
    });
  };
})(jQuery);
/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */


;

(function ($, window, undefined) {
  'use strict';

  $.HoverDir = function (options, element) {
    this.$el = $(element);

    this._init(options);
  }; // the options


  $.HoverDir.defaults = {
    speed: 300,
    easing: 'ease',
    hoverDelay: 0,
    inverse: false,
    hoverElem: '.thumb-info-wrapper-overlay'
  };
  $.HoverDir.prototype = {
    _init: function _init(options) {
      // options
      this.options = $.extend(true, {}, $.HoverDir.defaults, options); // transition properties

      this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing; // support for CSS transitions

      this.support = Modernizr.csstransitions; // load the events

      this._loadEvents();
    },
    _loadEvents: function _loadEvents() {
      var self = this;
      this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function (event) {
        var $el = $(this),
            $hoverElem = $el.find(self.options.hoverElem),
            direction = self._getDir($el, {
          x: event.pageX,
          y: event.pageY
        }),
            styleCSS = self._getStyle(direction);

        if (event.type === 'mouseenter') {
          $hoverElem.hide().css(styleCSS.from);
          clearTimeout(self.tmhover);
          self.tmhover = setTimeout(function () {
            $hoverElem.show(0, function () {
              var $el = $(this);

              if (self.support) {
                $el.css('transition', self.transitionProp);
              }

              self._applyAnimation($el, styleCSS.to, self.options.speed);
            });
          }, self.options.hoverDelay);
        } else {
          if (self.support) {
            $hoverElem.css('transition', self.transitionProp);
          }

          clearTimeout(self.tmhover);

          self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);
        }
      });
    },
    // credits : http://stackoverflow.com/a/3647634
    _getDir: function _getDir($el, coordinates) {
      // the width and height of the current div
      var w = $el.width(),
          h = $el.height(),
          // calculate the x and y to get an angle to the center of the div from that x and y.
      // gets the x value relative to the center of the DIV and "normalize" it
      x = (coordinates.x - $el.offset().left - w / 2) * (w > h ? h / w : 1),
          y = (coordinates.y - $el.offset().top - h / 2) * (h > w ? w / h : 1),
          // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
      // first calculate the angle of the point,
      // add 180 deg to get rid of the negative values
      // divide by 90 to get the quadrant
      // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
      direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
      return direction;
    },
    _getStyle: function _getStyle(direction) {
      var fromStyle,
          toStyle,
          slideFromTop = {
        left: '0px',
        top: '-100%'
      },
          slideFromBottom = {
        left: '0px',
        top: '100%'
      },
          slideFromLeft = {
        left: '-100%',
        top: '0px'
      },
          slideFromRight = {
        left: '100%',
        top: '0px'
      },
          slideTop = {
        top: '0px'
      },
          slideLeft = {
        left: '0px'
      };

      switch (direction) {
        case 0:
          // from top
          fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
          toStyle = slideTop;
          break;

        case 1:
          // from right
          fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
          toStyle = slideLeft;
          break;

        case 2:
          // from bottom
          fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
          toStyle = slideTop;
          break;

        case 3:
          // from left
          fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
          toStyle = slideLeft;
          break;
      }

      ;
      return {
        from: fromStyle,
        to: toStyle
      };
    },
    // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
    _applyAnimation: function _applyAnimation(el, styleCSS, speed) {
      $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
      el.stop().applyStyle(styleCSS, $.extend(true, [], {
        duration: speed + 'ms'
      }));
    }
  };

  var logError = function logError(message) {
    if (window.console) {
      window.console.error(message);
    }
  };

  $.fn.hoverdir = function (options) {
    var instance = $.data(this, 'hoverdir');

    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        if (!instance) {
          logError("cannot call methods on hoverdir prior to initialization; " + "attempted to call method '" + options + "'");
          return;
        }

        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for hoverdir instance");
          return;
        }

        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));
        }
      });
    }

    return instance;
  };
})(jQuery, window);
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */


!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(t) {
    return "string" == typeof t;
  }

  function p(t) {
    return "function" == typeof t;
  }

  function q(t) {
    return "number" == typeof t;
  }

  function r(t) {
    return void 0 === t;
  }

  function s(t) {
    return "object" == _typeof(t);
  }

  function t(t) {
    return !1 !== t;
  }

  function u() {
    return "undefined" != typeof window;
  }

  function v(t) {
    return p(t) || o(t);
  }

  function M(t) {
    return (h = mt(t, ot)) && he;
  }

  function N(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function O(t, e) {
    return !e && console.warn(t);
  }

  function P(t, e) {
    return t && (ot[t] = e) && h && (h[t] = e) || ot;
  }

  function Q() {
    return 0;
  }

  function $(t) {
    var e,
        r,
        i = t[0];

    if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = pt.length; r-- && !pt[r].targetTest(i);) {
        ;
      }

      e = pt[r];
    }

    for (r = t.length; r--;) {
      t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);
    }

    return t;
  }

  function _(t) {
    return t._gsap || $(xt(t))[0]._gsap;
  }

  function aa(t, e, i) {
    return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i;
  }

  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function da(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }

  function ea(t, e) {
    var r = e.charAt(0),
        i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }

  function fa(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
      ;
    }

    return i < r;
  }

  function ga() {
    var t,
        e,
        r = ht.length,
        i = ht.slice(0);

    for (lt = {}, t = ht.length = 0; t < r; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  }

  function ha(t, e, r, i) {
    ht.length && ga(), t.render(e, r, i), ht.length && ga();
  }

  function ia(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t;
  }

  function ja(t) {
    return t;
  }

  function ka(t, e) {
    for (var r in e) {
      r in t || (t[r] = e[r]);
    }

    return t;
  }

  function na(t, e) {
    for (var r in e) {
      "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? na(t[r] || (t[r] = {}), e[r]) : e[r]);
    }

    return t;
  }

  function oa(t, e) {
    var r,
        i = {};

    for (r in t) {
      r in e || (i[r] = t[r]);
    }

    return i;
  }

  function pa(e) {
    var r = e.parent || I,
        i = e.keyframes ? function _setKeyframeDefaults(i) {
      return function (t, e) {
        for (var r in e) {
          r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        }
      };
    }(J(e.keyframes)) : ka;
    if (t(e.inherit)) for (; r;) {
      i(e, r.vars.defaults), r = r.parent || r._dp;
    }
    return e;
  }

  function ra(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
        s = t[i];
    if (n) for (a = e[n]; s && s[n] > a;) {
      s = s._prev;
    }
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
  }

  function sa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function ta(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ua(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) {
      r._dirty = 1, r = r.parent;
    }
    return t;
  }

  function xa(t) {
    return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function za(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function Aa(t) {
    return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
  }

  function Ba(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Aa(t), r._dirty || ua(r, t)), t;
  }

  function Ca(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = za(t.rawTime(), e), (!e._dur || bt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), ua(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) {
        0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      }
      t._zTime = -V;
    }
  }

  function Da(t, e, r, i) {
    return e.parent && ta(e), e._start = da((q(r) ? r : r || t !== I ? Tt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ra(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ca(t, e), t;
  }

  function Ea(t, e) {
    return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }

  function Fa(t, e, r, i) {
    return Xt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Dt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Ka(t, e, r, i) {
    var n = t._repeat,
        a = da(e) || 0,
        s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ba(t, t._tTime = t._tDur * s) : t.parent && Aa(t), r || ua(t.parent, t), t;
  }

  function La(t) {
    return t instanceof Ut ? ua(t) : Ka(t, t._dur);
  }

  function Oa(e, r, i) {
    var n,
        a,
        s = q(r[1]),
        o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        u = r[o];

    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) {
        n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
      }

      u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }

    return new $t(r[0], u, r[1 + o]);
  }

  function Pa(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Ra(t, e) {
    return o(t) && (e = st.exec(t)) ? e[1] : "";
  }

  function Ua(t, e) {
    return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i;
  }

  function Ya(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Za(t) {
    if (p(t)) return t;
    var c = s(t) ? t : {
      each: t
    },
        m = Bt(c.ease),
        g = c.from || 0,
        v = parseFloat(c.base) || 0,
        y = {},
        e = 0 < g && g < 1,
        T = isNaN(g) || e,
        b = c.axis,
        w = g,
        x = g;
    return o(g) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[g] || 0 : !e && T && (w = g[0], x = g[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || c).length,
          _ = y[d];

      if (!_) {
        if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, Y])[1])) {
          for (h = -Y; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {
            ;
          }

          f--;
        }

        for (_ = y[d] = [], i = T ? Math.min(f, d) * w - .5 : g % f, n = f === Y ? 0 : T ? d * x / f - .5 : g / f | 0, l = Y, u = h = 0; u < d; u++) {
          a = u % f - i, s = n - (u / f | 0), _[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
        }

        "random" === g && Ya(_), _.max = h - l, _.min = l, _.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), _.b = d < 0 ? v - d : v, _.u = Ra(c.amount || c.each) || 0, m = m && d < 0 ? Ft(m) : m;
      }

      return d = (_[t] - _.min) / _.max || 0, da(_.b + (m ? m(d) : d) * _.v) + _.u;
    };
  }

  function $a(r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - e % 1) / i + (q(t) ? 0 : Ra(t));
    };
  }

  function _a(u, t) {
    var h,
        l,
        e = J(u);
    return !e && s(u) && (h = e = u.radius || Y, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = $a(u.increment)), Pa(t, e ? p(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = Y, s = 0, o = u.length; o--;) {
        (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      }

      return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Ra(t);
    } : $a(u));
  }

  function ab(t, e, r, i) {
    return Pa(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }

  function eb(e, r, t) {
    return Pa(t, function (t) {
      return e[~~r(t)];
    });
  }

  function hb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
      i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ab(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    }

    return s + t.substr(a, t.length - a);
  }

  function kb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = Y;

    for (i in s) {
      (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    }

    return a;
  }

  function mb(t) {
    return ta(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ot(t, "onInterrupt"), t;
  }

  function rb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0;
  }

  function sb(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        _ = t ? q(t) ? [t >> 16, t >> 8 & Pt, t & Pt] : 0 : Mt.black;

    if (!_) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) _ = Mt[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(_ = parseInt(t.substr(1, 6), 16)) >> 16, _ >> 8 & Pt, _ & Pt, parseInt(t.substr(7), 16) / 255];
        _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Pt, t & Pt];
      } else if ("hsl" === t.substr(0, 3)) {
        if (_ = d = t.match(tt), e) {
          if (~t.indexOf("=")) return _ = t.match(et), r && _.length < 4 && (_[3] = 1), _;
        } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = rb(s + 1 / 3, i, n), _[1] = rb(s, i, n), _[2] = rb(s - 1 / 3, i, n);
      } else _ = t.match(tt) || Mt.transparent;
      _ = _.map(Number);
    }

    return e && !d && (i = _[0] / Pt, n = _[1] / Pt, a = _[2] / Pt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _;
  }

  function tb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(Ct).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function ub(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(Ct),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = sb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = tb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Ct, "1").split(rt)).length - 1; l < s; l++) {
      o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    }
    if (!n) for (s = (n = t.split(Ct)).length - 1; l < s; l++) {
      o += n[l] + u[l];
    }
    return o + n[s];
  }

  function xb(t) {
    var e,
        r = t.join(" ");
    if (Ct.lastIndex = 0, Ct.test(r)) return e = At.test(r), t[1] = ub(t[1], e), t[0] = ub(t[0], e, tb(t[1])), !0;
  }

  function Gb(t) {
    var e = (t + "").split("("),
        r = zt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
        r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim();
      }

      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(ia)) : zt._CE && Rt.test(t) ? zt._CE("", t) : r;
  }

  function Ib(t, e) {
    for (var r, i = t._first; i;) {
      i instanceof Ut ? Ib(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ib(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
  }

  function Kb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ba(t, function (t) {
      for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) {
        zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e];
      }
    }), a;
  }

  function Lb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Mb(r, t, e) {
    function em(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Z((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / X * (Math.asin(1 / i) || 0),
        s = "out" === r ? em : "in" === r ? function (t) {
      return 1 - em(1 - t);
    } : Lb(em);
    return n = X / n, s.config = function (t, e) {
      return Mb(r, t, e);
    }, s;
  }

  function Nb(e, r) {
    function mm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? mm : "in" === e ? function (t) {
      return 1 - mm(1 - t);
    } : Lb(mm);
    return t.config = function (t) {
      return Nb(e, t);
    }, t;
  }

  var B,
      I,
      i,
      n,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      y,
      T,
      b,
      w,
      x,
      k,
      C,
      A,
      D,
      S,
      z,
      R,
      E,
      F,
      U = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      L = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      Y = 1e8,
      V = 1 / Y,
      X = 2 * Math.PI,
      j = X / 4,
      K = 0,
      G = Math.sqrt,
      W = Math.cos,
      Z = Math.sin,
      H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      J = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[^,'"\[\]\s]+/gi,
      st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ot = {},
      ut = {},
      ht = [],
      lt = {},
      ft = {},
      dt = {},
      _t = 30,
      pt = [],
      ct = "",
      mt = function _merge(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  },
      gt = function _animationCycle(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r;
  },
      vt = function _isFromOrFromStart(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
      yt = {
    _start: 0,
    endTime: Q,
    totalDuration: Q
  },
      Tt = function _parsePosition(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        u = t._recent || yt,
        h = t.duration() >= Y ? u.endTime(!1) : t._dur;
    return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (J(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e;
  },
      bt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      wt = [].slice,
      xt = function toArray(t, e, r) {
    return !o(t) || r || !n && St() ? J(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return o(t) && !e || Ua(t, 1) ? r.push.apply(r, xt(t)) : r.push(t);
      }) || r;
    }(t, r) : Ua(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0);
  },
      kt = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Pa(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      Ot = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && ga(), i ? s.apply(n, i) : s.call(n);
  },
      Pt = 255,
      Mt = {
    aqua: [0, Pt, Pt],
    lime: [0, Pt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Pt],
    navy: [0, 0, 128],
    white: [Pt, Pt, Pt],
    olive: [128, 128, 0],
    yellow: [Pt, Pt, 0],
    orange: [Pt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Pt, 0, 0],
    pink: [Pt, 192, 203],
    cyan: [0, Pt, Pt],
    transparent: [Pt, Pt, Pt, 0]
  },
      Ct = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in Mt) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      At = /hsl[a]?\(/,
      Dt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, T = {
    time: 0,
    frame: 0,
    tick: function tick() {
      Vk(!0);
    },
    deltaRatio: function deltaRatio(t) {
      return b / (1e3 / (t || 60));
    },
    wake: function wake() {
      l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = he, (i.gsapVersions || (i.gsapVersions = [])).push(he.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && T.sleep(), g = y || function (t) {
        return setTimeout(t, z - 1e3 * T.time + 1 | 0);
      }, c = 1, Vk(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      k = t || 1e8, C = Math.min(e, k, 0);
    },
    fps: function fps(t) {
      S = 1e3 / (t || 240), z = 1e3 * T.time + S;
    },
    add: function add(n, t, e) {
      var a = t ? function (t, e, r, i) {
        n(t, e, r, i), T.remove(a);
      } : n;
      return T.remove(n), R[e ? "unshift" : "push"](a), St(), a;
    },
    remove: function remove(t, e) {
      ~(e = R.indexOf(t)) && R.splice(e, 1) && e <= w && w--;
    },
    _listeners: R = []
  }),
      St = function _wake() {
    return !c && Dt.wake();
  },
      zt = {},
      Rt = /^[\d.\-M][\d.\-,\s]/,
      Et = /["']/g,
      Ft = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Bt = function _parseEase(t, e) {
    return t && (p(t) ? t : zt[t] || Gb(t)) || e;
  };

  function Vk(t) {
    var e,
        r,
        i,
        n,
        a = x() - D,
        s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(Vk)), r) for (w = 0; w < R.length; w++) {
      R[w](i, b, n, t);
    }
  }

  function Dm(t) {
    return t < F ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Kb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Kb("Elastic", Mb("in"), Mb("out"), Mb()), E = 7.5625, F = 1 / 2.75, Kb("Bounce", function (t) {
    return 1 - Dm(1 - t);
  }, Dm), Kb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Kb("Circ", function (t) {
    return -(G(1 - t * t) - 1);
  }), Kb("Sine", function (t) {
    return 1 === t ? 1 : 1 - W(t * j);
  }), Kb("Back", Nb("in"), Nb("out"), Nb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * bt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return ct += t + "," + t + "Params,";
  });

  var It,
      Lt = function GSCache(t, e) {
    this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Ht;
  },
      Nt = ((It = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, It.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, It.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ka(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, It.totalTime = function totalTime(t, e) {
    if (St(), !arguments.length) return this._tTime;
    var r = this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (Ba(this, t), !r._dp || r.parent || Ca(r, this); r && r.parent;) {
        r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      }

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Da(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ha(this, t, e)), this;
  }, It.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
  }, It.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, It.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, It.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
  }, It.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -V ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? za(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(bt(-this._delay, this._tDur, e), !0), Aa(this), function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }

      return t;
    }(this);
  }, It.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (St(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, It.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || Da(e, this, t - this._delay), this;
    }

    return this._start;
  }, It.endTime = function endTime(e) {
    return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, It.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? za(e.rawTime(t), this) : this._tTime : this._tTime;
  }, It.globalTime = function globalTime(t) {
    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) {
      r = e._start + r / (e._ts || 1), e = e._dp;
    }

    return r;
  }, It.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, La(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, It.repeatDelay = function repeatDelay(t) {
    if (arguments.length) {
      var e = this._time;
      return this._rDelay = t, La(this), e ? this.time(e) : this;
    }

    return this._rDelay;
  }, It.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, It.seek = function seek(e, r) {
    return this.totalTime(Tt(this, e), t(r));
  }, It.restart = function restart(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, t(r));
  }, It.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, It.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, It.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, It.resume = function resume() {
    return this.paused(!1);
  }, It.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0;
  }, It.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, It.isActive = function isActive() {
    var t,
        e = this.parent || this._dp,
        r = this._start;
    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V));
  }, It.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, It.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function Un() {
        var t = i.then;
        i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = p(t) ? t : ja;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Un() : i._prom = Un;
    });
  }, It.kill = function kill() {
    mb(this);
  }, Animation);

  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ka(this, +t.duration, 1, 1), this.data = t.data, c || Dt.wake();
  }

  ka(Nt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -V,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Ut = function (n) {
    function Timeline(e, r) {
      var i;
      return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Da(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ea(_assertThisInitialized(i), e.scrollTrigger), i;
    }

    _inheritsLoose(Timeline, n);

    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Oa(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Oa(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Oa(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, pa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, Tt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Da(this, $t.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, Tt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
      return i.runBackwards = 1, pa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
    }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
      return n.startAt = i, pa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
    }, e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : da(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (_ = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);

          if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), _ && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
            var T = _ && 1 & d,
                b = T === (_ && 1 & s);
            if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (p ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ot(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), c && c !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Ib(this, p);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, da(c), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, c = 0), !c && i && !e && (Ot(this, "onStart"), this._tTime !== v)) return this;
        if (c <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -V);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -V : V);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(c <= i ? 0 : -V)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, Aa(this), this.render(t, e, r);
        this._onUpdate && !e && Ot(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ta(this, 1), e || t < 0 && !c || !v && !c && m || (Ot(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, e.add = function add(t, e) {
      var r = this;

      if (q(e) || (e = Tt(this, e, t)), !(t instanceof Nt)) {
        if (J(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (o(t)) return this.addLabel(t, e);
        if (!p(t)) return this;
        t = $t.delayedCall(0, t);
      }

      return this !== t ? Da(this, t, e) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Y);

      for (var n = [], a = this._first; a;) {
        a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      }

      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
        if (e[r].vars.id === t) return e[r];
      }
    }, e.remove = function remove(t) {
      return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (sa(this, t), t === this._recent && (this._recent = this._last), ua(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(Dt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = Tt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = $t.delayedCall(0, e || Q, r);
      return i.data = "isPause", this._hasPause = 1, Da(this, i, Tt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;

      for (t = Tt(this, t); e;) {
        e._start === t && "isPause" === e.data && ta(e), e = e._next;
      }
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
        Yt !== i[n] && i[n].kill(t, e);
      }

      return this;
    }, e.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) {
        a instanceof $t ? fa(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      }

      return i;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
          i = this,
          n = Tt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = $t.to(i, ka({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: n,
        overwrite: "auto",
        duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
        onStart: function onStart() {
          if (i.pause(), !r) {
            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
            h._dur !== t && Ka(h, t, 0, 1).render(h._time, !0, !0), r = 1;
          }

          s && s.apply(h, o || []);
        }
      }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ka({
        startAt: {
          time: Tt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), kb(this, Tt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), kb(this, Tt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) {
        n._start >= r && (n._start += t, n._end += t), n = n._next;
      }

      if (e) for (i in a) {
        a[i] >= r && (a[i] += t);
      }
      return ua(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) {
        t.invalidate(), t = t._next;
      }

      return n.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) {
        e = r._next, this.remove(r), r = e;
      }

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ua(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = Y;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));

      if (a._dirty) {
        for (i = a.parent; s;) {
          e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Da(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        }

        Ka(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }

      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (I._ts && (ha(I, za(t, I)), f = Dt.frame), Dt.frame >= _t) {
        _t += U.autoSleep || 120;
        var e = I._first;

        if ((!e || !e._ts) && U.autoSleep && Dt._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || Dt.sleep();
        }
      }
    }, Timeline;
  }(Nt);

  ka(Ut.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Ub(t, e, r, i, n, a) {
    var u, h, l, f;
    if (ft[t] && !1 !== (u = new ft[t]()).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
      if (p(t) && (t = Qt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || J(t) || H(t)) return o(t) ? Qt(t, n, e, r, i) : t;
      var a,
          u = {};

      for (a in t) {
        u[a] = Qt(t[a], n, e, r, i);
      }

      return u;
    }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new oe(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d)) for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) {
      l[u._props[f]] = h;
    }
    return u;
  }

  function $b(t, r, e, i) {
    var n,
        a,
        s = r.ease || i || "power1.inOut";
    if (J(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) {
      a = e[n] || (e[n] = []), "ease" === n || a.push({
        t: parseFloat(t),
        v: r[n],
        e: s
      });
    }
  }

  var Yt,
      qt,
      Vt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
    p(i) && (i = i(n || 0, t, a));

    var l,
        f = t[e],
        d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
        _ = p(f) ? h ? Zt : Wt : Gt;

    if (o(i) && (~i.indexOf("random(") && (i = hb(i)), "=" === i.charAt(1) && (!(l = ea(d, i) + (Ra(d) || 0)) && 0 !== l || (i = l))), d !== i || qt) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c = new oe(this._pt, t, e, 0, 1, ee, null, n),
          m = 0,
          g = 0;

      for (c.b = r, c.e = i, r += "", (_ = ~(i += "").indexOf("random(")) && (i = hb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) {
        l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
          _next: c._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? ea(d, l) - d : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
      }

      return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (nt.test(i) || _) && (c.e = 0), this._pt = c;
    }.call(this, t, e, d, i, _, u || U.stringFilter, h)) : (l = new oe(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? te : Jt, 0, _), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l);
  },
      Xt = function _initTween(e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        T = g.immediateRender,
        b = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        k = g.callbackScope,
        O = g.runBackwards,
        P = g.yoyoEase,
        M = g.keyframes,
        C = g.autoRevert,
        A = e._dur,
        D = e._startAt,
        S = e._targets,
        z = e.parent,
        R = z && "nested" === z.data ? z.parent._targets : S,
        E = "auto" === e._overwrite && !B,
        F = e.timeline;

    if (!F || M && v || (v = "none"), e._ease = Bt(v, L.ease), e._yEase = P ? Ft(Bt(!0 === P ? v : P, L.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !F && !!g.runBackwards, !F || M && !g.stagger) {
      if (c = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = oa(g, ut), D && (ta(D.render(-1, !0)), D._lazy = 0), y) {
        if (ta(e._startAt = $t.set(S, ka({
          data: "isStart",
          overwrite: !1,
          parent: z,
          immediateRender: !0,
          lazy: t(b),
          startAt: null,
          delay: 0,
          onUpdate: w,
          onUpdateParams: x,
          callbackScope: k,
          stagger: 0
        }, y))), r < 0 && !T && !C && e._startAt.render(-1, !0), T) {
          if (0 < r && !C && (e._startAt = 0), A && r <= 0) return void (r && (e._zTime = r));
        } else !1 === C && (e._startAt = 0);
      } else if (O && A) if (D) C || (e._startAt = 0);else if (r && (T = !1), a = ka({
        overwrite: !1,
        data: "isFromStart",
        lazy: T && t(b),
        immediateRender: T,
        stagger: 0,
        parent: z
      }, i), c && (a[l.prop] = c), ta(e._startAt = $t.set(S, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, T) {
        if (!r) return;
      } else _initTween(e._startAt, V);

      for (e._pt = e._ptCache = 0, b = A && t(b) || b && !A, n = 0; n < S.length; n++) {
        if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && ga(), p = R === S ? n : R.indexOf(o), l && !1 !== (f = new l()).init(o, c || i, e, p, R) && (e._pt = s = new oe(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = s;
        }), f.priority && (u = 1)), !l || c) for (a in i) {
          ft[a] && (f = Ub(a, i, e, p, o, R)) ? f.priority && (u = 1) : d[a] = s = Vt.call(e, o, a, "get", i[a], p, R, 0, g.stringFilter);
        }
        e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Yt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Yt = 0), e._pt && b && (lt[h.id] = 1);
      }

      u && se(e), e._onInit && e._onInit(e);
    }

    e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, M && r <= 0 && F.render(Y, !0, !0);
  },
      Qt = function _parseFuncOrString(t, e, r, i, n) {
    return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? hb(t) : t;
  },
      jt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Kt = {};

  ba(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Kt[t] = 1;
  });

  var $t = function (R) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);

      var o,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c = (a = R.call(this, n ? r : pa(r)) || this).vars,
          m = c.duration,
          g = c.delay,
          y = c.immediateRender,
          T = c.stagger,
          b = c.overwrite,
          w = c.keyframes,
          x = c.defaults,
          k = c.scrollTrigger,
          P = c.yoyoEase,
          M = r.parent || I,
          C = (J(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);

      if (a._targets = C.length ? $(C) : O("GSAP target " + e + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, w || T || v(m) || v(g)) {
        if (r = a.vars, (o = a.timeline = new Ut({
          data: "nested",
          defaults: x || {}
        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, T || v(m) || v(g)) {
          if (l = C.length, _ = T && Za(T), s(T)) for (f in T) {
            ~jt.indexOf(f) && ((p = p || {})[f] = T[f]);
          }

          for (u = 0; u < l; u++) {
            (h = oa(r, Kt)).stagger = 0, P && (h.yoyoEase = P), p && mt(h, p), d = C[u], h.duration = +Qt(m, _assertThisInitialized(a), u, d, C), h.delay = (+Qt(g, _assertThisInitialized(a), u, d, C) || 0) - a._delay, !T && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, _ ? _(u, d, C) : 0), o._ease = zt.none;
          }

          o.duration() ? m = g = 0 : a.timeline = 0;
        } else if (w) {
          pa(ka(o.vars.defaults, {
            ease: "none"
          })), o._ease = Bt(w.ease || r.ease || "none");
          var A,
              D,
              S,
              z = 0;
          if (J(w)) w.forEach(function (t) {
            return o.to(C, t, ">");
          });else {
            for (f in h = {}, w) {
              "ease" === f || "easeEach" === f || $b(f, w[f], h, w.easeEach);
            }

            for (f in h) {
              for (A = h[f].sort(function (t, e) {
                return t.t - e.t;
              }), u = z = 0; u < A.length; u++) {
                (S = {
                  ease: (D = A[u]).e,
                  duration: (D.t - (u ? A[u - 1].t : 0)) / 100 * m
                })[f] = D.v, o.to(C, S, z), z += S.duration;
              }
            }

            o.duration() < m && o.to({}, {
              duration: m - o.duration()
            });
          }
        }

        m || a.duration(m = o.duration());
      } else a.timeline = 0;

      return !0 !== b || B || (Yt = _assertThisInitialized(a), I.killTweensOf(C), Yt = 0), Da(M, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(M._time) && t(y) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -V, a.render(Math.max(0, -g))), k && Ea(_assertThisInitialized(a), k), a;
    }

    _inheritsLoose(Tween, R);

    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          _ = this._tDur,
          p = this._dur,
          c = _ - V < t && 0 <= t ? _ : t < V ? 0 : t;

      if (p) {
        if (c !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (i = c, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (i = da(c % s), c === _ ? (a = this._repeat, i = p) : ((a = ~~(c / s)) && a === c / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this._tTime = c, this;
            a !== o && (l && this._yEase && Ib(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Fa(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
            if (d !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }

          if (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Ot(this, "onStart"), this._tTime !== c)) return this;

          for (n = this._pt; n;) {
            n.r(h, n.d), n = n._next;
          }

          l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Ot(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ot(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || ta(this, 1), e || t < 0 && !d || !c && !d || (Ot(this, c === _ ? "onComplete" : "onReverseComplete", !0), !this._prom || c < _ && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s,
            o = t.ratio,
            u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
          var e = t.parent;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
        }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
            h = t._rDelay,
            l = 0;

        if (h && t._repeat && (l = bt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === V || !e && t._zTime) {
          if (!t._initted && Fa(t, e, i, r)) return;

          for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) {
            n.r(u, n.d), n = n._next;
          }

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Ot(t, "onUpdate"), l && t._repeat && !r && t.parent && Ot(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ta(t, 1), r || (Ot(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), R.prototype.invalidate.call(this);
    }, e.resetTo = function resetTo(t, e, r, i) {
      c || Dt.wake(), this._ts || this.play();
      var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Xt(this, a), n = this._ease(a / this._dur), function _updatePropTweens(t, e, r, i, n, a, s) {
        var o,
            u,
            h,
            l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!l) for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
          if ((o = u[h][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e;) {
            o = o._next;
          }
          if (!o) return qt = 1, t.vars[e] = "+=0", Xt(t, s), qt = 0, 1;
          l.push(o);
        }

        for (h = l.length; h--;) {
          (o = l[h]).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, o.e && (o.e = ca(r) + Ra(o.e)), o.b && (o.b = o.s + Ra(o.b));
        }
      }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ba(this, 0), this.parent || ra(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? mb(this) : this;

      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || mb(this), this.parent && r !== this.timeline.totalDuration() && Ka(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }

      var i,
          n,
          a,
          s,
          u,
          h,
          l,
          f = this._targets,
          d = t ? xt(t) : f,
          p = this._ptLookup,
          c = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
          ;
        }

        return r < 0;
      }(f, d)) return "all" === e && (this._pt = 0), mb(this);

      for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? _(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = mt({}, e), o) {
          if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
            r[a[n]] = r[i];
          }
        }

        return r;
      }(f, e)), l = f.length; l--;) {
        if (~d.indexOf(f[l])) for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s) {
          (h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || sa(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
        }
      }

      return this._initted && !this._pt && c && mb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Oa(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Oa(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return I.killTweensOf(t, e, r);
    }, Tween;
  }(Nt);

  ka($t.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
    $t[r] = function () {
      var t = new Ut(),
          e = wt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function gc(t, e, r) {
    return t.setAttribute(e, r);
  }

  function oc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Gt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      Wt = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      Zt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Ht = function _getSetter(t, e) {
    return p(t[e]) ? Wt : r(t[e]) && t.setAttribute ? gc : Gt;
  },
      Jt = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
      te = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      ee = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) {
        i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      re = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) {
      r.r(t, r.d), r = r._next;
    }
  },
      ie = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) {
      n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }
  },
      ne = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) {
      r = i._next, i.p === t && !i.op || i.op === t ? sa(this, i, "_pt") : i.dep || (e = 1), i = r;
    }

    return !e;
  },
      se = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) {
        r = r._next;
      }

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      oe = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = oc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Jt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  ba(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Ut, I = new Ut({
    sortChildren: !1,
    defaults: L,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), U.stringFilter = xb;
  var ue = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
        e[r] = arguments[r];
      }

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t["default"] || t).name,
              r = p(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: Q,
            render: re,
            add: Vt,
            kill: ne,
            modifier: ie,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Ht,
            aliases: {},
            register: 0
          };

          if (St(), t !== i) {
            if (ft[e]) return;
            ka(i, ka(oa(t, n), a)), mt(i.prototype, mt(n, oa(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          P(e, i), t.register && t.register(he, i, oe);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Ut(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = xt(i)[0]);

      var n = _(i || {}).get,
          a = e ? ja : ia;

      return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function (t, e, r) {
        return a((ft[t] && ft[t].get || n)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = xt(r)).length) {
        var n = r.map(function (t) {
          return he.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) {
            n[e](t);
          }
        };
      }

      r = r[0] || {};

      var s = ft[e],
          o = _(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && re(1, d);
      } : o.set(r, u);

      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    quickTo: function quickTo(t, i, e) {
      function iw(t, e, r) {
        return n.resetTo(i, t, e, r);
      }

      var r,
          n = he.to(t, mt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return iw.tween = n, iw;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Bt(t.ease, L.ease)), na(L, t || {});
    },
    config: function config(t) {
      return na(U, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
          n = t.effect,
          e = t.plugins,
          a = t.defaults,
          r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.");
      }), dt[i] = function (t, e, r) {
        return n(xt(t), ka(e || {}, a), r);
      }, r && (Ut.prototype[i] = function (t, e, r) {
        return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      zt[t] = Bt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Bt(t, e) : zt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
          n,
          a = new Ut(e);

      for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) {
        n = i._next, !r && !i._dur && i instanceof $t && i.vars.onComplete === i._targets[0] || Da(a, i, i._start - i._delay), i = n;
      }

      return Da(I, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return J(e) ? eb(e, wrap(0, e.length), t) : Pa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return J(e) ? eb(e, wrapYoyo(0, e.length - 1), t) : Pa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Za,
      random: ab,
      snap: _a,
      normalize: function normalize(t, e, r) {
        return kt(t, e, 0, 1, r);
      },
      getUnit: Ra,
      clamp: function clamp(e, r, t) {
        return Pa(t, function (t) {
          return bt(e, r, t);
        });
      },
      splitColor: sb,
      toArray: xt,
      selector: function selector(r) {
        return r = xt(r)[0] || O("Invalid scope") || {}, function (t) {
          var e = r.current || r.nativeElement || r;
          return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r);
        };
      },
      mapRange: kt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ra(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!n) {
          var a,
              s,
              u,
              h,
              l,
              f = o(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (J(e) && !J(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) {
              u.push(interpolate(e[s - 1], e[s]));
            }

            h--, n = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = mt(J(e) ? [] : {}, e));

          if (!u) {
            for (a in r) {
              Vt.call(d, e, a, "get", r[a]);
            }

            n = function func(t) {
              return re(t, d) || (f ? e.p : e);
            };
          }
        }

        return Pa(t, n);
      },
      shuffle: Ya
    },
    install: M,
    effects: dt,
    ticker: Dt,
    updateRoot: Ut.updateRoot,
    plugins: ft,
    globalTimeline: I,
    core: {
      PropTween: oe,
      globals: P,
      Tween: $t,
      Timeline: Ut,
      Animation: Nt,
      getCache: _,
      _removeLinkedListItem: sa,
      suppressOverwrites: function suppressOverwrites(t) {
        return B = t;
      }
    }
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return ue[t] = $t[t];
  }), Dt.add(Ut.updateRoot), d = ue.to({}, {
    duration: 0
  });

  function sc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
      r = r._next;
    }

    return r;
  }

  function uc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (o(i) && (e = {}, ba(i, function (t) {
            return e[t] = 1;
          }), i = e), n) {
            for (r in e = {}, i) {
              e[r] = n(i[r]);
            }

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) {
              for (i = a.length; i--;) {
                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = sc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
              }
            }
          }(t, i);
        };
      }
    };
  }

  var he = ue.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;

      for (a in e) {
        (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) {
        this.add(t, r, t[r] || 0, e[r]);
      }
    }
  }, uc("roundProps", $a), uc("modifiers"), uc("snap", _a)) || ue;
  $t.version = Ut.version = he.version = "3.10.4", l = 1, u() && St();

  function dd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function ed(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function fd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function gd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function hd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function id(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function jd(t, e, r) {
    return t.style[e] = r;
  }

  function kd(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function ld(t, e, r) {
    return t._gsap[e] = r;
  }

  function md(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function nd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function od(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function sd(t, e) {
    var r = fe.createElementNS ? fe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fe.createElement(t);
    return r.style ? r : fe.createElement(t);
  }

  function td(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Ne, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && td(t, je(e) || e, 1) || "";
  }

  function wd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (le = window, fe = le.document, de = fe.documentElement, pe = sd("div") || {
      style: {}
    }, sd("div"), Ve = je(Ve), Xe = Ve + "Origin", pe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", me = !!je("perspective"), _e = 1);
  }

  function xd(t) {
    var e,
        r = sd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (de.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = xd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), de.removeChild(r), this.style.cssText = a, e;
  }

  function yd(t, e) {
    for (var r = e.length; r--;) {
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
  }

  function zd(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = xd.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === xd || (r = xd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +yd(e, ["x", "cx", "x1"]) || 0,
      y: +yd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function Ad(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !zd(t));
  }

  function Bd(t, e) {
    if (e) {
      var r = t.style;
      e in Fe && e !== Xe && (e = Ve), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ne, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function Cd(t, e, r, i, n, a) {
    var s = new oe(t._pt, e, r, 0, 1, a ? id : hd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function Ed(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = pe.style,
        f = Ue.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        c = "px" === i,
        m = "%" === i;
    return i === h || !u || Ke[i] || Ke[h] ? u : ("px" === h || c || (u = Ed(t, e, r, "px")), o = t.getCTM && Ad(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== fe && a.appendChild || (a = fe.body), (s = a._gsap) && m && s.width && f && s.time === Dt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = td(t, "position")), a === t && (l.position = "static"), a.appendChild(pe), n = pe[p], a.removeChild(pe), l.position = "absolute", f && m && ((s = _(a)).time = Dt.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)));
  }

  function Fd(t, e, r, i) {
    var n;
    return _e || wd(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = He(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(td(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || td(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ed(t, e, n, r) + r : n;
  }

  function Gd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = je(e, t, 1),
          a = n && td(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = td(t, "borderTopColor"));
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        _,
        p,
        c,
        m,
        g = new oe(this._pt, t.style, e, 0, 1, ee),
        v = 0,
        y = 0;

    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = td(t, e) || i, t.style[e] = r), xb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) {
        d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ea(h, d) + m), _ = parseFloat(d), c = d.substr((_ + "").length), v = rt.lastIndex - c.length, c || (c = c || U.units[e] || m, v === i.length && (i += c, g.e += c)), m !== c && (h = Ed(t, e, f, c) || 0), g._pt = {
          _next: g._pt,
          p: p || 1 === y ? p : ",",
          s: h,
          c: _ - h,
          m: l && l < 4 || "zIndex" === e ? Math.round : 0
        });
      }

      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? id : hd;

    return nt.test(i) && (g.e = 0), this._pt = g;
  }

  function Id(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = $e[r] || r, e[1] = $e[i] || i, e.join(" ");
  }

  function Jd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
        r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Xe : Ve), Bd(a, r);
      }
      i && (Bd(a, Ve), u && (u.svg && a.removeAttribute("transform"), He(a, 1), u.uncache = 1));
    }
  }

  function Nd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Od(t) {
    var e = td(t, Ve);
    return Nd(e) ? We : e.substr(7).match(et).map(ca);
  }

  function Pd(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || _(t),
        o = t.style,
        u = Od(t);

    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === de || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, de.appendChild(t)), u = Od(t), n ? o.display = n : Bd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : de.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Qd(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Pd(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        _ = h.xOffset || 0,
        p = h.yOffset || 0,
        c = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        T = l[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0;

    r ? l !== We && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = zd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = _ + (y * c + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Xe] = "0px 0px", a && (Cd(a, h, "xOrigin", f, w), Cd(a, h, "yOrigin", d, x), Cd(a, h, "xOffset", _, h.xOffset), Cd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Td(t, e, r) {
    var i = Ra(e);
    return ca(parseFloat(e) + parseFloat(Ed(t, "x", r + "px", i))) + i;
  }

  function $d(t, e, r, i, n) {
    var a,
        s,
        u = 360,
        h = o(n),
        l = parseFloat(n) * (h && ~n.indexOf("rad") ? Be : 1) - i,
        f = i + l + "deg";
    return h && ("short" === (a = n.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === a && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === a && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = s = new oe(t._pt, e, r, i, l, ed), s.e = f, s.u = "deg", t._props.push(r), s;
  }

  function _d(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  }

  function ae(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = _d({}, r._gsap),
        f = r.style;

    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Ve] = e, i = He(r, 1), Bd(r, Ve), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ve], f[Ve] = e, i = He(r, 1), f[Ve] = a), Fe) {
      (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ra(a) !== (h = Ra(s)) ? Ed(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new oe(t._pt, i, n, o, u - o, dd), t._pt.u = h || 0, t._props.push(n));
    }

    _d(i, l);
  }

  var le,
      fe,
      de,
      _e,
      pe,
      ce,
      me,
      ge = zt.Power0,
      ve = zt.Power1,
      ye = zt.Power2,
      Te = zt.Power3,
      be = zt.Power4,
      we = zt.Linear,
      xe = zt.Quad,
      ke = zt.Cubic,
      Oe = zt.Quart,
      Pe = zt.Quint,
      Me = zt.Strong,
      Ce = zt.Elastic,
      Ae = zt.Back,
      De = zt.SteppedEase,
      Se = zt.Bounce,
      ze = zt.Sine,
      Re = zt.Expo,
      Ee = zt.Circ,
      Fe = {},
      Be = 180 / Math.PI,
      Ie = Math.PI / 180,
      Le = Math.atan2,
      Ne = /([A-Z])/g,
      Ue = /(left|right|width|margin|padding|x)/i,
      Ye = /[\s,\(]\S/,
      qe = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Ve = "transform",
      Xe = Ve + "Origin",
      Qe = "O,Moz,ms,Ms,Webkit".split(","),
      je = function _checkPropPrefix(t, e, r) {
    var i = (e || pe).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Qe[n] + t in i);) {
      ;
    }

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Qe[n] : "") + t;
  },
      Ke = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      $e = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Ge = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new oe(t._pt, e, r, 0, 0, Jd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      We = [1, 0, 0, 1, 0, 0],
      Ze = {},
      He = function _parseTransform(t, e) {
    var r = t._gsap || new Lt(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        _,
        p,
        c,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        P,
        M,
        C,
        A,
        D,
        S,
        z,
        R,
        E,
        F = t.style,
        B = r.scaleX < 0,
        I = "deg",
        L = td(t, Xe) || "0";

    return i = n = a = u = h = l = f = d = _ = 0, s = o = 1, r.svg = !(!t.getCTM || !Ad(t)), m = Pd(t, r.svg), r.svg && (P = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Qd(t, P || L, !!P || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, c = r.yOrigin || 0, m !== We && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Le(b, T) * Be : 0, (f = w || x ? Le(w, x) * Be + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * T + c * w), n -= c - (p * b + c * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = Le(E, S)) * Be, g && (P = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), M = O * v + D * y, C = E * v + S * y, A = k * -y + A * v, D = O * -y + D * v, S = E * -y + S * v, R = z * -y + R * v, k = P, O = M, E = C), l = (g = Le(-w, S)) * Be, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = P = T * v - A * y, b = M = b * v - D * y, w = C = w * v - S * y), u = (g = Le(b, T)) * Be, g && (P = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), M = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = P, k = M), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(T * T + b * b + w * w)), o = ca(Math.sqrt(O * O + E * E)), g = Le(k, O), f = 2e-4 < Math.abs(g) ? g * Be : 0, _ = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (P = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Nd(td(t, Ve)), P && t.setAttribute("transform", P))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = _ + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[Xe] = Je(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? ar : me ? nr : tr, r.uncache = 0, r;
  },
      Je = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      tr = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nr(t, e);
  },
      er = "0deg",
      rr = "0px",
      ir = ") ",
      nr = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        _ = r.scaleX,
        p = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== er || h !== er)) {
      var b,
          w = parseFloat(h) * Ie,
          x = Math.sin(w),
          k = Math.cos(w);
      w = parseFloat(l) * Ie, b = Math.cos(w), a = Td(g, a, x * b * -v), s = Td(g, s, -Math.sin(w) * -v), o = Td(g, o, k * b * -v + v);
    }

    c !== rr && (y += "perspective(" + c + ir), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === rr && s === rr && o === rr || (y += o !== rr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + ir), u !== er && (y += "rotate(" + u + ir), h !== er && (y += "rotateY(" + h + ir), l !== er && (y += "rotateX(" + l + ir), f === er && d === er || (y += "skew(" + f + ", " + d + ir), 1 === _ && 1 === p || (y += "scale(" + _ + ", " + p + ir), g.style[Ve] = y || "translate(0, 0)";
  },
      ar = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        _ = o.skewX,
        p = o.skewY,
        c = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
    d = parseFloat(d), _ = parseFloat(_), (p = parseFloat(p)) && (_ += p = parseFloat(p), d += p), d || _ ? (d *= Ie, _ *= Ie, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - _) * -m, a = Math.cos(d - _) * m, _ && (p *= Ie, s = Math.tan(_ - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Ed(g, "x", l, "px"), k = Ed(g, "y", f, "px")), (v || y || T || b) && (x = ca(x + v - (v * r + y * n) + T), k = ca(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), k = ca(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ve] = s);
  };

  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Ge[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return Fd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var sr,
      or,
      ur,
      hr = {
    name: "css",
    register: wd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c,
          m,
          g,
          v,
          y,
          T,
          b = this._props,
          w = t.style,
          x = r.vars.startAt;

      for (d in _e || wd(), e) {
        if ("autoRound" !== d && (s = e[d], !ft[d] || !Ub(d, e, r, i, t, n))) if (l = _typeof(s), f = Ge[d], "function" === l && (l = _typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = hb(s)), f) f(this, t, d, s, r) && (T = 1);else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Ct.lastIndex = 0, Ct.test(a) || (_ = Ra(a), p = Ra(s)), p ? _ !== p && (a = Ed(t, d, a, p) + p) : _ && (s += _), this.add(w, "setProperty", a, s, i, n, 0, 0, d), b.push(d);else if ("undefined" !== l) {
          if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = hb(a)), Ra(a + "") || (a += U.units[d] || Ra(Fd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Fd(t, d))) : a = Fd(t, d), h = parseFloat(a), (c = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), u = parseFloat(s), d in qe && ("autoAlpha" === d && (1 === h && "hidden" === Fd(t, "visibility") && u && (h = 0), Cd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = qe[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe) {
            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new oe(this._pt, w, Ve, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new oe(this._pt, v, "scaleY", v.scaleY, (c ? ea(v.scaleY, c + u) : u) - v.scaleY || 0), b.push("scaleY", d), d += "X";else {
              if ("transformOrigin" === d) {
                s = Id(s), v.svg ? Qd(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Cd(this, v, "zOrigin", v.zOrigin, p), Cd(this, w, d, Je(a), Je(s)));
                continue;
              }

              if ("svgOrigin" === d) {
                Qd(t, s, 1, y, 0, this);
                continue;
              }

              if (d in Ze) {
                $d(this, v, d, h, c ? ea(h, c + s) : s);
                continue;
              }

              if ("smoothOrigin" === d) {
                Cd(this, v, "smooth", v.smooth, s);
                continue;
              }

              if ("force3D" === d) {
                v[d] = s;
                continue;
              }

              if ("transform" === d) {
                ae(this, s, t);
                continue;
              }
            }
          } else d in w || (d = je(d) || d);
          if (m || (u || 0 === u) && (h || 0 === h) && !Ye.test(s) && d in w) u = u || 0, (_ = (a + "").substr((h + "").length)) !== (p = Ra(s) || (d in U.units ? U.units[d] : _)) && (h = Ed(t, d, a, p)), this._pt = new oe(this._pt, m ? v : w, d, h, (c ? ea(h, c + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? dd : gd), this._pt.u = p || 0, _ !== p && "%" !== p && (this._pt.b = a, this._pt.r = fd);else if (d in w) Gd.call(this, t, d, a, c ? c + s : s);else {
            if (!(d in t)) {
              N(d, s);
              continue;
            }

            this.add(t, d, a || t[d], c ? c + s : s, i, n);
          }
          b.push(d);
        }
      }

      T && se(this);
    },
    get: Fd,
    aliases: qe,
    getSetter: function getSetter(t, e, i) {
      var n = qe[e];
      return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Xe && (t._gsap.x || Fd(t, "x")) ? i && ce === i ? "scale" === e ? md : ld : (ce = i || {}) && ("scale" === e ? nd : od) : t.style && !r(t.style[e]) ? jd : ~e.indexOf("-") ? kd : Ht(t, e);
    },
    core: {
      _removeProperty: Bd,
      _getMatrix: Pd
    }
  };
  he.utils.checkPrefix = je, ur = ba((sr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (or = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Fe[t] = 1;
  }), ba(or, function (t) {
    U.units[t] = "deg", Ze[t] = 1;
  }), qe[ur[13]] = sr + "," + or, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    qe[e[1]] = ur[e[0]];
  }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    U.units[t] = "px";
  }), he.registerPlugin(hr);
  var lr = he.registerPlugin(hr) || he,
      fr = lr.core.Tween;
  e.Back = Ae, e.Bounce = Se, e.CSSPlugin = hr, e.Circ = Ee, e.Cubic = ke, e.Elastic = Ce, e.Expo = Re, e.Linear = we, e.Power0 = ge, e.Power1 = ve, e.Power2 = ye, e.Power3 = Te, e.Power4 = be, e.Quad = xe, e.Quart = Oe, e.Quint = Pe, e.Sine = ze, e.SteppedEase = De, e.Strong = Me, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = $t, e.TweenMax = fr, e["default"] = lr, e.gsap = lr;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
/*
* Title Border
*/

if ($('[data-title-border]').length) {
  var $pageHeaderTitleBorder = $('<span class="page-header-title-border"></span>'),
      $pageHeaderTitle = $('[data-title-border]'),
      $window = $(window);
  $pageHeaderTitle.before($pageHeaderTitleBorder);

  var setPageHeaderTitleBorderWidth = function setPageHeaderTitleBorderWidth() {
    $pageHeaderTitleBorder.width($pageHeaderTitle.width());
  };

  $window.afterResize(function () {
    setPageHeaderTitleBorderWidth();
  });
  setPageHeaderTitleBorderWidth();
  $pageHeaderTitleBorder.addClass('visible');
}
/*
* Footer Reveal
*/


(function ($) {
  var $footerReveal = {
    $wrapper: $('.footer-reveal'),
    init: function init() {
      var self = this;
      self.build();
      self.events();
    },
    build: function build() {
      var self = this,
          footer_height = self.$wrapper.outerHeight(true),
          window_height = $(window).height() - $('.header-body').height();

      if (footer_height > window_height) {
        $('#footer').removeClass('footer-reveal');
        $('body').css('margin-bottom', 0);
      } else {
        $('#footer').addClass('footer-reveal');
        $('body').css('margin-bottom', footer_height);
      }
    },
    events: function events() {
      var self = this,
          $window = $(window);
      $window.on('load', function () {
        $window.afterResize(function () {
          self.build();
        });
      });
    }
  };

  if ($('.footer-reveal').length) {
    $footerReveal.init();
  }
})(jQuery);
/* Re-Init Plugin */


if ($('[data-reinit-plugin]').length) {
  $('[data-reinit-plugin]').on('click', function (e) {
    e.preventDefault();
    var pluginInstance = $(this).data('reinit-plugin'),
        pluginFunction = $(this).data('reinit-plugin-function'),
        pluginElement = $(this).data('reinit-plugin-element'),
        pluginOptions = theme.fn.getOptions($(this).data('reinit-plugin-options'));
    $(pluginElement).data(pluginInstance).destroy();
    setTimeout(function () {
      theme.fn.execPluginFunction(pluginFunction, $(pluginElement), pluginOptions);
    }, 1000);
  });
}
/* Simple Copy To Clipboard */


if ($('[data-copy-to-clipboard]').length) {
  theme.fn.intObs('[data-copy-to-clipboard]', function () {
    var $this = $(this);
    $this.wrap('<div class="copy-to-clipboard-wrapper position-relative"></div>');
    var $copyButton = $('<a href="#" class="btn btn-primary btn-px-2 py-1 text-0 position-absolute top-8 right-8">COPY</a>');
    $this.parent().prepend($copyButton);
    $copyButton.on('click', function (e) {
      e.preventDefault();
      var $btn = $(this),
          $temp = $('<textarea class="d-block opacity-0" style="height: 0;">');
      $btn.parent().append($temp);
      $temp.val($this.text());
      $temp[0].select();
      $temp[0].setSelectionRange(0, 99999);
      document.execCommand("copy");
      $btn.addClass('copied');
      setTimeout(function () {
        $btn.removeClass('copied');
      }, 1000);
      $temp.remove();
    });
  }, {
    rootMargin: '0px 0px 0px 0px'
  });
} // Animate


(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animate';

  var PluginAnimate = function PluginAnimate($el, opts) {
    return this.initialize($el, opts);
  };

  PluginAnimate.defaults = {
    accX: 0,
    accY: -80,
    delay: 100,
    duration: '750ms',
    minWindowWidth: 767,
    forceAnimation: false,
    flagClassOnly: false
  };
  PluginAnimate.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Flag Class Only
      // - Useful for simple animations like hightlight
      // - Less process and memory

      if (self.options.flagClassOnly) {
        var delay = self.options.wrapper.attr('data-appear-animation-delay') ? self.options.wrapper.attr('data-appear-animation-delay') : self.options.delay;
        self.options.wrapper.css({
          'animation-delay': delay + 'ms',
          'transition-delay': delay + 'ms'
        });
        self.options.wrapper.addClass(self.options.wrapper.attr('data-appear-animation'));
        return this;
      }

      if ($('body').hasClass('loading-overlay-showing')) {
        $(window).on('loading.overlay.ready', function () {
          self.animate();
        });
      } else {
        self.animate();
      }

      return this;
    },
    animate: function animate() {
      var self = this,
          $el = this.options.wrapper,
          delay = 0,
          duration = this.options.duration,
          elTopDistance = $el.offset().top,
          windowTopDistance = $(window).scrollTop(); // If has appear animation elements inside a SVG.
      // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG

      if ($el.data('appear-animation-svg')) {
        $el.find('[data-appear-animation]').each(function () {
          var $this = $(this),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginAnimate(opts);
        });
        return this;
      } // No animation at the first load of page. This is good for performance


      if (self.options.firstLoadNoAnim) {
        $el.removeClass('appear-animation'); // Inside Carousel

        if ($el.closest('.owl-carousel').get(0)) {
          setTimeout(function () {
            $el.closest('.owl-carousel').on('change.owl.carousel', function () {
              self.options.firstLoadNoAnim = false;
              $el.removeData('__animate');
              $el.themePluginAnimate(self.options);
            });
          }, 500);
        }

        return this;
      }

      $el.addClass('appear-animation animated');

      if (!$('html').hasClass('no-csstransitions') && $(window).width() > self.options.minWindowWidth && elTopDistance >= windowTopDistance || self.options.forceAnimation == true) {
        delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
        duration = $el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration;

        if (duration != '750ms') {
          $el.css('animation-duration', duration);
        }

        $el.css('animation-delay', delay + 'ms');
        $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
        $el.trigger('animation:show');
      } else {
        $el.addClass('appear-animation-visible');
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginAnimate: PluginAnimate
  }); // jquery plugin

  $.fn.themePluginAnimate = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimate($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Animated Letters

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animatedLetters';

  var PluginAnimatedLetters = function PluginAnimatedLetters($el, opts) {
    return this.initialize($el, opts);
  };

  PluginAnimatedLetters.defaults = {
    animationName: 'fadeIn',
    animationSpeed: 50,
    startDelay: 500,
    minWindowWidth: 768,
    letterClass: ''
  };
  PluginAnimatedLetters.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      var self = this;
      this.$el = $el;
      this.initialText = $el.text();
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimatedLetters.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          letters = self.$el.text().split('');

      if ($(window).width() < self.options.minWindowWidth) {
        return this;
      }

      if (self.options.firstLoadNoAnim) {
        self.$el.css({
          visibility: 'visible'
        }); // Inside Carousel

        if (self.$el.closest('.owl-carousel').get(0)) {
          setTimeout(function () {
            self.$el.closest('.owl-carousel').on('change.owl.carousel', function () {
              self.options.firstLoadNoAnim = false;
              self.build();
            });
          }, 500);
        }

        return this;
      } // Add class to show


      self.$el.addClass('initialized'); // Set Min Height to avoid flicking issues

      self.setMinHeight();
      self.$el.text('');

      if (self.options.animationName == 'typeWriter') {
        self.$el.append('<span class="letters-wrapper"></span><span class="typeWriter"></pre>');
        var index = 0;
        setTimeout(function () {
          var timeout = function timeout() {
            var st = setTimeout(function () {
              var letter = letters[index];
              self.$el.find('.letters-wrapper').append('<span class="letter ' + (self.options.letterClass ? self.options.letterClass + ' ' : '') + '">' + letter + '</span>');
              index++;
              timeout();
            }, self.options.animationSpeed);

            if (index >= letters.length) {
              clearTimeout(st);
            }
          };

          timeout();
        }, self.options.startDelay);
      } else {
        setTimeout(function () {
          for (var i = 0; i < letters.length; i++) {
            var letter = letters[i];
            self.$el.append('<span class="letter ' + (self.options.letterClass ? self.options.letterClass + ' ' : '') + self.options.animationName + ' animated" style="animation-delay: ' + i * self.options.animationSpeed + 'ms;">' + letter + '</span>');
          }
        }, self.options.startDelay);
      }

      return this;
    },
    setMinHeight: function setMinHeight() {
      var self = this; // if it's inside carousel

      if (self.$el.closest('.owl-carousel').get(0)) {
        self.$el.closest('.owl-carousel').addClass('d-block');
        self.$el.css('min-height', self.$el.height());
        self.$el.closest('.owl-carousel').removeClass('d-block');
      } else {
        self.$el.css('min-height', self.$el.height());
      }

      return this;
    },
    destroy: function destroy() {
      var self = this;
      self.$el.html(self.initialText).css('min-height', '');
      return this;
    },
    events: function events() {
      var self = this; // Destroy

      self.$el.on('animated.letters.destroy', function () {
        self.destroy();
      }); // Initialize

      self.$el.on('animated.letters.initialize', function () {
        self.build();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginAnimatedLetters: PluginAnimatedLetters
  }); // jquery plugin

  $.fn.themePluginAnimatedLetters = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimatedLetters($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Before / After

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__beforeafter';

  var PluginBeforeAfter = function PluginBeforeAfter($el, opts) {
    return this.initialize($el, opts);
  };

  PluginBeforeAfter.defaults = {
    default_offset_pct: 0.5,
    orientation: 'horizontal',
    before_label: 'Before',
    after_label: 'After',
    no_overlay: false,
    move_slider_on_hover: false,
    move_with_handle_only: true,
    click_to_move: false
  };
  PluginBeforeAfter.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginBeforeAfter.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.twentytwenty)) {
        return this;
      }

      var self = this;
      self.options.wrapper.twentytwenty(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginBeforeAfter: PluginBeforeAfter
  }); // jquery plugin

  $.fn.themePluginBeforeAfter = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginBeforeAfter($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Carousel Light

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__carouselLight';

  var PluginCarouselLight = function PluginCarouselLight($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCarouselLight.defaults = {
    autoplay: true,
    autoplayTimeout: 7000,
    disableAutoPlayOnClick: true
  };
  PluginCarouselLight.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.clickFlag = true;
      this.setData().setOptions(opts).build().owlNav().owlDots().autoPlay().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarouselLight.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;
      self.$el.css('opacity', 1).find('.owl-item:first-child').addClass('active');
      self.$el.trigger('initialized.owl.carousel'); // Carousel Navigate By ID and item index

      self.carouselNavigate();
      return this;
    },
    changeSlide: function changeSlide($nextSlide) {
      var self = this,
          $prevSlide = self.$el.find('.owl-item.active');
      self.$el.find('.owl-item.active').addClass('removing');
      $prevSlide.removeClass('fadeIn').addClass('fadeOut animated');
      setTimeout(function () {
        setTimeout(function () {
          $prevSlide.removeClass('active');
        }, 400);
        $nextSlide.addClass('active').removeClass('fadeOut').addClass('fadeIn animated');
      }, 200); // Dots

      self.$el.find('.owl-dot').removeClass('active').eq($nextSlide.index()).addClass('active');
      self.$el.trigger({
        type: 'change.owl.carousel',
        nextSlideIndex: $nextSlide.index(),
        prevSlideIndex: $prevSlide.index()
      });
      setTimeout(function () {
        self.$el.trigger({
          type: 'changed.owl.carousel',
          nextSlideIndex: $nextSlide.index(),
          prevSlideIndex: $prevSlide.index()
        });
      }, 500);
    },
    owlNav: function owlNav() {
      var self = this,
          $owlNext = self.$el.find('.owl-next'),
          $owlPrev = self.$el.find('.owl-prev');
      $owlPrev.on('click', function (e) {
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        self.owlPrev();
      });
      $owlNext.on('click', function (e) {
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        self.owlNext();
      });
      return this;
    },
    owlDots: function owlDots() {
      var self = this,
          $owlDot = self.$el.find('.owl-dot');
      $owlDot.on('click', function (e) {
        $this = $(this);
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        var dotIndex = $(this).index(); // Do nothing if respective dot slide is active/showing

        if ($this.hasClass('active')) {
          return false;
        }

        self.changeSlide(self.$el.find('.owl-item').eq(dotIndex));
      });
      return this;
    },
    owlPrev: function owlPrev() {
      var self = this;

      if (self.$el.find('.owl-item.active').prev().get(0)) {
        self.changeSlide(self.$el.find('.owl-item.active').prev());
      } else {
        self.changeSlide(self.$el.find('.owl-item:last-child'));
      }
    },
    owlNext: function owlNext() {
      var self = this;

      if (self.$el.find('.owl-item.active').next().get(0)) {
        self.changeSlide(self.$el.find('.owl-item.active').next());
      } else {
        self.changeSlide(self.$el.find('.owl-item').eq(0));
      }
    },
    avoidMultipleClicks: function avoidMultipleClicks() {
      var self = this;

      if (!self.clickFlag) {
        return true;
      }

      if (self.clickFlag) {
        self.clickFlag = false;
        setTimeout(function () {
          self.clickFlag = true;
        }, 1000);
      }

      return false;
    },
    autoPlay: function autoPlay() {
      var self = this,
          $el = this.options.wrapper;

      if (self.options.autoplay) {
        self.autoPlayInterval = window.setInterval(function () {
          self.owlNext();
        }, self.options.autoplayTimeout);
      }

      return this;
    },
    carouselNavigate: function carouselNavigate() {
      var self = this,
          $el = this.options.wrapper,
          $carousel = $el;

      if ($('[data-carousel-navigate]').get(0)) {
        $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').each(function () {
          var $this = $(this),
              hasCarousel = $($this.data('carousel-navigate-id')).get(0),
              toIndex = $this.data('carousel-navigate-to');

          if (hasCarousel) {
            $this.on('click', function () {
              if (self.options.disableAutoPlayOnClick) {
                window.clearInterval(self.autoPlayInterval);
              }

              self.changeSlide(self.$el.find('.owl-item').eq(parseInt(toIndex) - 1));
            });
          }
        });
        $el.on('change.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').removeClass('active');
        });
        $el.on('changed.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"][data-carousel-navigate-to="' + (e.nextSlideIndex + 1) + '"]').addClass('active');
        });
      }

      return this;
    },
    events: function events() {
      var self = this;
      self.$el.on('change.owl.carousel', function (event) {
        // Hide elements inside carousel
        self.$el.find('[data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').addClass('invisible'); // Animated Letters

        self.$el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy'); // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect

        self.$el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');
      });
      self.$el.on('changed.owl.carousel', function (event) {
        setTimeout(function () {
          // Appear Animation
          if (self.$el.find('.owl-item.cloned [data-appear-animation]').get(0)) {
            self.$el.find('.owl-item.cloned [data-appear-animation]').each(function () {
              var $this = $(this),
                  opts;
              var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
              if (pluginOptions) opts = pluginOptions;
              $this.themePluginAnimate(opts);
            });
          } // Show elements inside carousel


          self.$el.find('.owl-item.active [data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').removeClass('invisible'); // Animated Letters

          self.$el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize'); // Background Video

          self.$el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');
        }, 500);
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCarouselLight: PluginCarouselLight
  }); // jquery plugin

  $.fn.themePluginCarouselLight = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarouselLight($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Carousel

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__carousel';

  var PluginCarousel = function PluginCarousel($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCarousel.defaults = {
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      479: {
        items: 1
      },
      768: {
        items: 2
      },
      979: {
        items: 3
      },
      1199: {
        items: 4
      }
    },
    navText: [],
    refresh: false
  };
  PluginCarousel.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el; // If has data-icon inside, initialize only after icons get rendered
      // Prevent flicking issues

      if ($el.find('[data-icon]').get(0)) {
        var self = this;
        $(window).on('icon.rendered', function () {
          if ($el.data(instanceName)) {
            return this;
          }

          setTimeout(function () {
            self.setData().setOptions(opts).build();
          }, 1000);
        });
        return this;
      }

      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.owlCarousel)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper; // Add Theme Class

      $el.addClass('owl-theme'); // Add Loading

      $el.addClass('owl-loading'); // Force RTL according to HTML dir attribute

      if ($('html').attr('dir') == 'rtl') {
        this.options = $.extend(true, {}, this.options, {
          rtl: true
        });
      }

      if (this.options.items == 1) {
        this.options.responsive = {};
      }

      if (this.options.items > 4) {
        this.options = $.extend(true, {}, this.options, {
          responsive: {
            1199: {
              items: this.options.items
            }
          }
        });
      } // Auto Height Fixes


      if (this.options.autoHeight) {
        var itemsHeight = [];
        $el.find('.owl-item').each(function () {
          if ($(this).hasClass('active')) {
            itemsHeight.push($(this).height());
          }
        });
        $(window).afterResize(function () {
          $el.find('.owl-stage-outer').height(Math.max.apply(null, itemsHeight));
        });
        $(window).on('load', function () {
          $el.find('.owl-stage-outer').height(Math.max.apply(null, itemsHeight));
        });
      } // Initialize OwlCarousel


      $el.owlCarousel(this.options).addClass('owl-carousel-init animated fadeIn'); // Remove "animated fadeIn" class to prevent conflicts

      setTimeout(function () {
        $el.removeClass('animated fadeIn');
      }, 1000); // Owl Carousel Wrapper

      if ($el.closest('.owl-carousel-wrapper').get(0)) {
        setTimeout(function () {
          $el.closest('.owl-carousel-wrapper').css({
            height: ''
          });
        }, 500);
      } // Owl Carousel Loader


      if ($el.prev().hasClass('owl-carousel-loader')) {
        $el.prev().remove();
      } // Nav Offset


      self.navigationOffsets(); // Nav Outside

      if ($el.hasClass('nav-outside')) {
        $(window).on('owl.carousel.nav.outside', function () {
          if ($(window).width() < 992) {
            self.options.stagePadding = 40;
            $el.addClass('stage-margin');
          } else {
            self.options.stagePadding = 0;
            $el.removeClass('stage-margin');
          }

          $el.owlCarousel('destroy').owlCarousel(self.options); // Nav Offset

          self.navigationOffsets();
        }); // Window Resize

        $(window).on('load', function () {
          $(window).afterResize(function () {
            $(window).trigger('owl.carousel.nav.outside');
          });
        }); // First Load

        $(window).trigger('owl.carousel.nav.outside');
      } // Nav style 5 (SVG Arrows)


      if ($el.hasClass('nav-svg-arrows-1')) {
        var svg_arrow = '' + '<svg version="1.1" viewBox="0 0 15.698 8.706" width="17" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<polygon stroke="#212121" stroke-width="0.1" fill="#212121" points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/>' + '</svg>';
        $el.find('.owl-next, .owl-prev').append(svg_arrow);
      } // Sync


      if ($el.attr('data-sync')) {
        $el.on('change.owl.carousel', function (event) {
          if (event.namespace && event.property.name === 'position') {
            var target = event.relatedTarget.relative(event.property.value, true);
            $($el.data('sync')).owlCarousel('to', target, 300, true);
          }
        });
      } // Carousel Center Active Item


      if ($el.hasClass('carousel-center-active-item')) {
        var itemsActive = $el.find('.owl-item.active'),
            indexCenter = Math.floor(($el.find('.owl-item.active').length - 1) / 2),
            itemCenter = itemsActive.eq(indexCenter);
        itemCenter.addClass('current');
        $el.on('change.owl.carousel', function (event) {
          $el.find('.owl-item').removeClass('current');
          setTimeout(function () {
            var itemsActive = $el.find('.owl-item.active'),
                indexCenter = Math.floor(($el.find('.owl-item.active').length - 1) / 2),
                itemCenter = itemsActive.eq(indexCenter);
            itemCenter.addClass('current');
          }, 100);
        }); // Refresh

        $el.trigger('refresh.owl.carousel');
      } // AnimateIn / AnimateOut Fix


      if (self.options.animateIn || self.options.animateOut) {
        $el.on('change.owl.carousel', function (event) {
          // Hide elements inside carousel
          $el.find('[data-appear-animation], [data-plugin-animated-letters]').addClass('d-none'); // Animated Letters

          $el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy'); // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect

          $el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');
        });
        $el.on('changed.owl.carousel', function (event) {
          setTimeout(function () {
            // Appear Animation
            $el.find('[data-appear-animation]').each(function () {
              var $this = $(this),
                  opts;
              var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
              if (pluginOptions) opts = pluginOptions;
              $this.themePluginAnimate(opts);
            }); // Show elements inside carousel

            $el.find('.owl-item.active [data-appear-animation], [data-plugin-animated-letters]').removeClass('d-none'); // Animated Letters

            $el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize'); // Background Video

            $el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');
          }, 10);
        });
      } // data-icon inside carousel


      if ($el.find('[data-icon]').length) {
        $el.on('change.owl.carousel drag.owl.carousel', function () {
          $el.find('.owl-item.cloned [data-icon]').each(function () {
            var $this = $(this),
                opts;
            var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
            if (pluginOptions) opts = pluginOptions;
            $this.themePluginIcon(opts);
          });
        });
      } // Render Background Videos inside carousel. Just a trigger on window is sufficient to render


      if ($el.find('[data-plugin-video-background]').get(0)) {
        $(window).resize();
      } // Remove Loading


      $el.removeClass('owl-loading'); // Remove Height

      $el.css('height', 'auto'); // Carousel Navigate By ID and item index

      self.carouselNavigate(); // Refresh Carousel

      if (self.options.refresh) {
        $el.owlCarousel('refresh');
      }

      return this;
    },
    navigationOffsets: function navigationOffsets() {
      var self = this,
          $el = this.options.wrapper,
          navHasTransform = $el.find('.owl-nav').css('transform') == 'none' ? false : true,
          dotsHasTransform = $el.find('.owl-dots').css('transform') == 'none' ? false : true; // ************* NAV *****************
      // Nav Offset - Horizontal

      if (self.options.navHorizontalOffset && !self.options.navVerticalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(' + self.options.navHorizontalOffset + ', 0, 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            left: self.options.navHorizontalOffset
          });
        }
      } // Nav Offset - Vertical


      if (self.options.navVerticalOffset && !self.options.navHorizontalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(0, ' + self.options.navVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            top: 'calc( 50% - ' + self.options.navVerticalOffset + ' )'
          });
        }
      } // Nav Offset - Horizontal & Vertical


      if (self.options.navVerticalOffset && self.options.navHorizontalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(' + self.options.navHorizontalOffset + ', ' + self.options.navVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            top: 'calc( 50% - ' + self.options.navVerticalOffset + ' )',
            left: self.options.navHorizontalOffset
          });
        }
      } // ********** DOTS *********************
      // Dots Offset - Horizontal


      if (self.options.dotsHorizontalOffset && !self.options.dotsVerticalOffset) {
        $el.find('.owl-dots').css({
          transform: 'translate3d(' + self.options.dotsHorizontalOffset + ', 0, 0)'
        });
      } // Dots Offset - Vertical


      if (self.options.dotsVerticalOffset && !self.options.dotsHorizontalOffset) {
        if (!dotsHasTransform) {
          $el.find('.owl-dots').css({
            transform: 'translate3d(0, ' + self.options.dotsVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-dots').css({
            top: 'calc( 50% - ' + self.options.dotsVerticalOffset + ' )'
          });
        }
      } // Dots Offset - Horizontal & Vertical


      if (self.options.dotsVerticalOffset && self.options.dotsHorizontalOffset) {
        $el.find('.owl-dots').css({
          transform: 'translate3d(' + self.options.dotsHorizontalOffset + ', ' + self.options.dotsVerticalOffset + ', 0)'
        });
      }

      return this;
    },
    carouselNavigate: function carouselNavigate() {
      var self = this,
          $el = this.options.wrapper,
          $carousel = $el.data('owl.carousel');

      if ($('[data-carousel-navigate]').get(0)) {
        $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').each(function () {
          var $this = $(this),
              hasCarousel = $($this.data('carousel-navigate-id')).get(0),
              toIndex = $this.data('carousel-navigate-to');

          if (hasCarousel) {
            $this.on('click', function () {
              $carousel.to(parseInt(toIndex) - 1);
            });
          }
        });
        $el.on('change.owl.carousel', function () {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').removeClass('active');
        });
        $el.on('changed.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"][data-carousel-navigate-to="' + (e.item.index + 1) + '"]').addClass('active');
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCarousel: PluginCarousel
  }); // jquery plugin

  $.fn.themePluginCarousel = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarousel($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Chart Circular

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__chartCircular';

  var PluginChartCircular = function PluginChartCircular($el, opts) {
    return this.initialize($el, opts);
  };

  PluginChartCircular.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    barColor: '#0088CC',
    trackColor: '#f2f2f2',
    scaleColor: false,
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 13,
    size: 175,
    rotate: 0,
    animate: {
      duration: 2500,
      enabled: true
    }
  };
  PluginChartCircular.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.easyPieChart)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper,
          value = $el.attr('data-percent') ? $el.attr('data-percent') : 0,
          percentEl = $el.find('.percent');
      $.extend(true, self.options, {
        onStep: function onStep(from, to, currentValue) {
          percentEl.html(parseInt(currentValue));
        }
      });
      $el.attr('data-percent', 0);
      $el.easyPieChart(self.options);
      setTimeout(function () {
        $el.data('easyPieChart').update(value);
        $el.attr('data-percent', value);
      }, self.options.delay);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginChartCircular: PluginChartCircular
  }); // jquery plugin

  $.fn.themePluginChartCircular = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginChartCircular($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Countdown

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__countdown';

  var PluginCountdown = function PluginCountdown($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCountdown.defaults = {
    date: '2030/06/10 12:00:00',
    textDay: 'DAYS',
    textHour: 'HRS',
    textMin: 'MIN',
    textSec: 'SEC',
    uppercase: true,
    numberClass: '',
    wrapperClass: '',
    insertHTMLbefore: '',
    insertHTMLafter: ''
  };
  PluginCountdown.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCountdown.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.countTo)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper,
          numberClass = self.options.numberClass ? ' ' + self.options.numberClass : '',
          wrapperClass = self.options.wrapperClass ? ' ' + self.options.wrapperClass : '';

      if (self.options.uppercase) {
        $el.countdown(self.options.date).on('update.countdown', function (event) {
          var $this = $(this).html(event.strftime(self.options.insertHTMLbefore + '<span class="days' + wrapperClass + '"><span class="' + numberClass + '">%D</span> ' + self.options.textDay + '</span> ' + '<span class="hours' + wrapperClass + '"><span class="' + numberClass + '">%H</span> ' + self.options.textHour + '</span> ' + '<span class="minutes' + wrapperClass + '"><span class="' + numberClass + '">%M</span> ' + self.options.textMin + '</span> ' + '<span class="seconds' + wrapperClass + '"><span class="' + numberClass + '">%S</span> ' + self.options.textSec + '</span> ' + self.options.insertHTMLafter));
        });
      } else {
        $el.countdown(self.options.date).on('update.countdown', function (event) {
          var $this = $(this).html(event.strftime(self.options.insertHTMLbefore + '<span class="days' + wrapperClass + '"><span class="' + numberClass + '">%D</span> ' + self.options.textDay + '</span> ' + '<span class="hours' + wrapperClass + '"><span class="' + numberClass + '">%H</span> ' + self.options.textHour + '</span> ' + '<span class="minutes' + wrapperClass + '"><span class="' + numberClass + '">%M</span> ' + self.options.textMin + '</span> ' + '<span class="seconds' + wrapperClass + '"><span class="' + numberClass + '">%S</span> ' + self.options.textSec + '</span> ' + self.options.insertHTMLafter));
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCountdown: PluginCountdown
  }); // jquery plugin

  $.fn.themePluginCountdown = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCountdown($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Counter

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__counter';

  var PluginCounter = function PluginCounter($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCounter.defaults = {
    accX: 0,
    accY: 0,
    appendWrapper: false,
    prependWrapper: false,
    speed: 3000,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null
  };
  PluginCounter.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.countTo)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper;
      $.extend(self.options, {
        onComplete: function onComplete() {
          if ($el.data('append')) {
            if (self.options.appendWrapper) {
              var appendWrapper = $(self.options.appendWrapper);
              appendWrapper.append($el.data('append'));
              $el.html($el.html() + appendWrapper[0].outerHTML);
            } else {
              $el.html($el.html() + $el.data('append'));
            }
          }

          if ($el.data('prepend')) {
            if (self.options.prependWrapper) {
              var prependWrapper = $(self.options.prependWrapper);
              prependWrapper.append($el.data('prepend'));
              $el.html($el.html() + prependWrapper[0].outerHTML);
            } else {
              $el.html($el.data('prepend') + $el.html());
            }
          }
        }
      });
      $el.countTo(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCounter: PluginCounter
  }); // jquery plugin

  $.fn.themePluginCounter = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCounter($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // CursorEffect

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__cursorEffect';

  var PluginCursorEffect = function PluginCursorEffect($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCursorEffect.defaults = {};
  PluginCursorEffect.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCursorEffect.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Global Variables for cursor position

      self.clientX = -100;
      self.clientY = -100; // Hide Mouse Cursor

      if (self.options.hideMouseCursor) {
        self.$el.addClass('hide-mouse-cursor');
      } // Creates the cursor wrapper node


      var cursorOuter = document.createElement('DIV');
      cursorOuter.className = 'cursor-outer'; // Creates the cursor inner node

      var cursorInner = document.createElement('DIV');
      cursorInner.className = 'cursor-inner'; // Custom Cursor Outer Color

      if (self.options.cursorOuterColor) {
        cursorOuter.style = 'border-color: ' + self.options.cursorOuterColor + ';';
      } // Custom Cursor Inner Color


      if (self.options.cursorInnerColor) {
        cursorInner.style = 'background-color: ' + self.options.cursorInnerColor + ';';
      } // Size


      if (self.options.size) {
        switch (self.options.size) {
          case 'small':
            self.$el.addClass('cursor-effect-size-small');
            break;

          case 'big':
            self.$el.addClass('cursor-effect-size-big');
            break;
        }
      } // Style


      if (self.options.style) {
        self.$el.addClass(self.options.style);
      } // Prepend cursor wrapper node to the body


      document.body.prepend(cursorOuter); // Prepend cursor inner node to the body

      document.body.prepend(cursorInner); // Loop for render

      var render = function render() {
        cursorOuter.style.transform = 'translate(' + self.clientX + 'px, ' + self.clientY + 'px)';
        cursorInner.style.transform = 'translate(' + self.clientX + 'px, ' + self.clientY + 'px)';
        self.loopInside = requestAnimationFrame(render);
      };

      self.loop = requestAnimationFrame(render);
      return this;
    },
    events: function events() {
      var self = this,
          $cursorOuter = $('.cursor-outer'),
          $cursorInner = $('.cursor-inner');
      var initialCursorOuterBox = $cursorOuter[0].getBoundingClientRect(),
          initialCursorOuterRadius = $cursorOuter.css('border-radius'); // Update Cursor Position

      document.addEventListener('mousemove', function (e) {
        if (!self.isStuck) {
          self.clientX = e.clientX - 20;
          self.clientY = e.clientY - 20;
        }

        $cursorOuter.removeClass('opacity-0');
      });
      self.isStuck = false;
      $('[data-cursor-effect-hover]').on('mouseenter', function (e) {
        // Identify Event With Hover Class
        $cursorOuter.addClass('cursor-outer-hover');
        $cursorInner.addClass('cursor-inner-hover'); // Hover Color

        var hoverColor = $(this).data('cursor-effect-hover-color');
        $cursorOuter.addClass('cursor-color-' + hoverColor);
        $cursorInner.addClass('cursor-color-' + hoverColor); // Effect Types

        switch ($(this).data('cursor-effect-hover')) {
          case 'fit':
            var thisBox = $(this)[0].getBoundingClientRect();
            self.clientX = thisBox.x;
            self.clientY = thisBox.y;
            $cursorOuter.css({
              width: thisBox.width,
              height: thisBox.height,
              'border-radius': $(this).css('border-radius')
            }).addClass('cursor-outer-fit');
            $cursorInner.addClass('opacity-0');
            self.isStuck = true;
            break;

          case 'plus':
            $cursorInner.addClass('cursor-inner-plus');
            break;
        }
      });
      $('[data-cursor-effect-hover]').on('mouseleave', function () {
        // Identify Event With Hover Class
        $cursorOuter.removeClass('cursor-outer-hover');
        $cursorInner.removeClass('cursor-inner-hover'); // Remove Color Class

        var hoverColor = $(this).data('cursor-effect-hover-color');
        $cursorOuter.removeClass('cursor-color-' + hoverColor);
        $cursorInner.removeClass('cursor-color-' + hoverColor); // Effect Types

        switch ($(this).data('cursor-effect-hover')) {
          case 'fit':
            $cursorOuter.css({
              width: initialCursorOuterBox.width,
              height: initialCursorOuterBox.height,
              'border-radius': initialCursorOuterRadius
            }).removeClass('cursor-outer-fit');
            $cursorInner.removeClass('opacity-0');
            self.isStuck = false;
            break;

          case 'plus':
            $cursorInner.removeClass('cursor-inner-plus');
            break;
        }
      });
      $(window).on('scroll', function () {
        if ($cursorOuter.hasClass('cursor-outer-fit')) {
          $cursorOuter.addClass('opacity-0').removeClass('cursor-outer-fit');
        }
      });
      return this;
    },
    destroy: function destroy() {
      var self = this;
      self.$el.removeClass('hide-mouse-cursor cursor-effect-size-small cursor-effect-size-big cursor-effect-style-square');
      cancelAnimationFrame(self.loop);
      cancelAnimationFrame(self.loopInside);
      document.querySelector('.cursor-outer').remove();
      document.querySelector('.cursor-inner').remove();
      self.$el.removeData(instanceName, self);
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCursorEffect: PluginCursorEffect
  }); // jquery plugin

  $.fn.themePluginCursorEffect = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCursorEffect($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Float Element

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var instanceName = '__floatElement';

  var PluginFloatElement = function PluginFloatElement($el, opts) {
    return this.initialize($el, opts);
  };

  PluginFloatElement.defaults = {
    startPos: 'top',
    speed: 3,
    horizontal: false,
    isInsideSVG: false,
    transition: false,
    transitionDelay: 0,
    transitionDuration: 500
  };
  PluginFloatElement.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginFloatElement.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          $window = $(window),
          minus; // If has floating elements inside a SVG.
      // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG

      if ($el.data('plugin-float-element-svg')) {
        $el.find('[data-plugin-float-element]').each(function () {
          var $this = $(this),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginFloatElement(opts);
        });
        return this;
      }

      if (self.options.style) {
        $el.attr('style', self.options.style);
      }

      if ($window.width() > 767) {
        // Set Start Position
        if (self.options.startPos == 'none') {
          minus = '';
        } else if (self.options.startPos == 'top') {
          $el.css({
            top: 0
          });
          minus = '';
        } else {
          $el.css({
            bottom: 0
          });
          minus = '-';
        } // Set Transition


        if (self.options.transition) {
          $el.css({
            transition: 'ease-out transform ' + self.options.transitionDuration + 'ms ' + self.options.transitionDelay + 'ms'
          });
        } // First Load


        self.movement(minus); // Scroll

        $window.on('scroll', function () {
          self.movement(minus);
        });
      }

      return this;
    },
    movement: function movement(minus) {
      var self = this,
          $el = this.options.wrapper,
          $window = $(window),
          scrollTop = $window.scrollTop(),
          elementOffset = $el.offset().top,
          currentElementOffset = elementOffset - scrollTop,
          factor = self.options.isInsideSVG ? 2 : 100;
      var scrollPercent = factor * currentElementOffset / $window.height();

      if ($el.visible(true)) {
        if (!self.options.horizontal) {
          $el.css({
            transform: 'translate3d(0, ' + minus + scrollPercent / self.options.speed + '%, 0)'
          });
        } else {
          $el.css({
            transform: 'translate3d(' + minus + scrollPercent / self.options.speed + '%, ' + minus + scrollPercent / self.options.speed + '%, 0)'
          });
        }
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginFloatElement: PluginFloatElement
  }); // jquery plugin

  $.fn.themePluginFloatElement = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginFloatElement($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // GDPR

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__gdpr';

  var PluginGDPR = function PluginGDPR($el, opts) {
    return this.initialize($el, opts);
  };

  PluginGDPR.defaults = {
    cookieBarShowDelay: 3000
  };
  PluginGDPR.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginGDPR.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Show

      if (!$.cookie('porto-privacy-bar')) {
        setTimeout(function () {
          self.options.wrapper.addClass('show');
        }, self.options.cookieBarShowDelay);
      } // If already has preferences cookie, check inputs according preferences cookie data


      if ($.cookie('porto-gdpr-preferences')) {
        var preferencesArr = $.cookie('porto-gdpr-preferences').split(',');

        for (var i = 0; i < preferencesArr.length; i++) {
          if ($('input[value="' + preferencesArr[i] + '"]').get(0)) {
            if ($('input[value="' + preferencesArr[i] + '"]').is(':checkbox')) {
              $('input[value="' + preferencesArr[i] + '"]').prop('checked', true);
            }
          }
        }
      }

      return this;
    },
    events: function events() {
      var self = this; // Agree Trigger

      self.options.wrapper.find('.gdpr-agree-trigger').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-form').find('.gdpr-input').each(function () {
          if ($(this).is(':checkbox') || $(this).is(':hidden')) {
            $(this).prop('checked', true);
          }
        });
        $('.gdpr-preferences-form').trigger('submit').removeClass('show');
        self.removeCookieBar();
      }); // Preferences Trigger

      self.options.wrapper.find('.gdpr-preferences-trigger').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').addClass('show');
      }); // Close Popup Button

      $('.gdpr-close-popup').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').removeClass('show');
      }); // Close Popup When Click Outside of popup area

      $('.gdpr-preferences-popup').on('click', function (e) {
        if (!$(e.target).closest('.gdpr-preferences-popup-content').get(0)) {
          $('.gdpr-preferences-popup').removeClass('show');
        }
      }); // Preference Form

      $('.gdpr-preferences-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this); // Save Preferences Button

        $this.find('button[type="submit"]').text('SAVING...'); // Form Data

        var formData = [];
        $this.find('.gdpr-input').each(function () {
          if ($(this).is(':checkbox') && $(this).is(':checked') || $(this).is(':hidden')) {
            formData.push($(this).val());
          }
        });
        $.cookie('porto-privacy-bar', true);
        setTimeout(function () {
          $this.find('button[type="submit"]').text('SAVED!').removeClass('btn-primary').addClass('btn-success');
          setTimeout(function () {
            $('.gdpr-preferences-popup').removeClass('show');
            self.removeCookieBar();
            $this.find('button[type="submit"]').text('SAVE PREFERENCES').removeClass('btn-success').addClass('btn-primary');

            if ($.cookie('porto-gdpr-preferences')) {
              $.cookie('porto-gdpr-preferences', formData);
              location.reload();
            } else {
              $.cookie('porto-gdpr-preferences', formData);

              if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {
                $(function () {
                  $('[data-plugin-gdpr-wrapper]:not(.manual)').each(function () {
                    var $this = $(this),
                        opts;
                    $this.removeData('__gdprwrapper');
                    var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions) opts = pluginOptions;
                    $this.themePluginGDPRWrapper(opts);
                  });
                });
              }
            }
          }, 500);
        }, 1000);
      }); // Remove/Reset Cookies

      $('.gdpr-reset-cookies').on('click', function (e) {
        e.preventDefault();
        self.clearCookies();
        location.reload();
      }); // Open Preferences

      $('.gdpr-open-preferences').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').toggleClass('show');
      });
      return this;
    },
    removeCookieBar: function removeCookieBar() {
      var self = this;
      self.options.wrapper.addClass('removing').on('transitionend', function () {
        setTimeout(function () {
          self.options.wrapper.removeClass('show removing');
        }, 500);
      });
      return this;
    },
    clearCookies: function clearCookies() {
      var self = this;
      $.removeCookie('porto-privacy-bar');
      $.removeCookie('porto-gdpr-preferences');
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginGDPR: PluginGDPR
  }); // jquery plugin

  $.fn.themePluginGDPR = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginGDPR($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // GDPR Wrapper

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__gdprwrapper';

  var PluginGDPRWrapper = function PluginGDPRWrapper($el, opts) {
    return this.initialize($el, opts);
  };

  PluginGDPRWrapper.defaults = {};
  PluginGDPRWrapper.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginGDPRWrapper.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;

      if ($.cookie('porto-gdpr-preferences') && $.cookie('porto-gdpr-preferences').indexOf(self.options.checkCookie) != -1) {
        $.ajax({
          url: self.options.ajaxURL,
          cache: false,
          complete: function complete(data) {
            setTimeout(function () {
              self.options.wrapper.html(data.responseText).addClass('show');
            }, 1000);
          }
        });
      } else {
        self.options.wrapper.addClass('show');
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginGDPRWrapper: PluginGDPRWrapper
  }); // jquery plugin

  $.fn.themePluginGDPRWrapper = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginGDPRWrapper($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Hover Effect

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__hoverEffect';

  var PluginHoverEffect = function PluginHoverEffect($el, opts) {
    return this.initialize($el, opts);
  };

  PluginHoverEffect.defaults = {
    effect: 'magnetic',
    magneticMx: 0.15,
    magneticMy: 0.3,
    magneticDeg: 12,
    selector: '.thumb-info, .hover-effect-3d-wrapper',
    sensitivity: 20
  };
  PluginHoverEffect.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginHoverEffect.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;

      if (self.$el.hasClass('hover-effect-3d')) {
        self.options.effect = '3d';
      } // Magnetic


      if (self.options.effect == 'magnetic') {
        self.magnetic();
      } // 3d


      if (self.options.effect == '3d') {
        self.hover3d();
      }

      return this;
    },
    magnetic: function magnetic() {
      var self = this;
      self.$el.mousemove(function (e) {
        var pos = this.getBoundingClientRect();
        var mx = e.clientX - pos.left - pos.width / 2;
        var my = e.clientY - pos.top - pos.height / 2;
        this.style.transform = 'translate(' + mx * self.options.magneticMx + 'px, ' + my * self.options.magneticMx + 'px)';
      });
      self.$el.mouseleave(function (e) {
        this.style.transform = 'translate3d(0px, 0px, 0px)';
      });
      return this;
    },
    hover3d: function hover3d() {
      var self = this;

      if ($.isFunction($.fn['hover3d'])) {
        self.$el.hover3d({
          selector: self.options.selector,
          sensitivity: self.options.sensitivity
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginHoverEffect: PluginHoverEffect
  }); // jquery plugin

  $.fn.themePluginHoverEffect = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginHoverEffect($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Icon

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var instanceName = '__icon';

  var PluginIcon = function PluginIcon($el, opts) {
    return this.initialize($el, opts);
  };

  PluginIcon.defaults = {
    color: '#2388ED',
    animated: false,
    delay: 300,
    onlySVG: false,
    removeClassAfterInit: false,
    fadeIn: true,
    accY: 0
  };
  PluginIcon.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginIcon.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          color = self.options.color,
          elTopDistance = $el.offset().top,
          windowTopDistance = $(window).scrollTop(),
          duration = self.options.animated && !self.options.strokeBased ? 200 : 100; // Check origin

      if (window.location.protocol === 'file:') {
        $el.css({
          opacity: 1,
          width: $el.attr('width')
        });

        if (self.options.extraClass) {
          $el.addClass(self.options.extraClass);
        }

        if (self.options.extraClass.indexOf('-color-light') > 0) {
          $el.css({
            filter: 'invert(1)'
          });
        }

        $(window).trigger('icon.rendered');
        return;
      } // Duration


      if (self.options.duration) {
        duration = self.options.duration;
      } // SVG Content


      var SVGContent = $.get({
        url: $el.attr('src'),
        success: function success(data, status, xhr) {
          var iconWrapper = self.options.fadeIn ? $('<div class="animated-icon animated fadeIn">' + xhr.responseText + '</div>') : $('<div class="animated-icon animated">' + xhr.responseText + '</div>'),
              uniqid = 'icon_' + Math.floor(Math.random() * 26) + Date.now(); // Add ID

          iconWrapper.find('svg').attr('id', uniqid); // Identify with filename

          iconWrapper.find('svg').attr('data-filename', $el.attr('src').split(/(\\|\/)/g).pop());

          if ($el.attr('width')) {
            iconWrapper.find('svg').attr('width', $el.attr('width')).attr('height', $el.attr('width'));
          }

          if ($el.attr('height')) {
            iconWrapper.find('svg').attr('height', $el.attr('height'));
          }

          if (self.options.svgViewBox) {
            iconWrapper.find('svg').attr('viewBox', self.options.svgViewBox);
          }

          $el.replaceWith(iconWrapper);

          if (self.options.extraClass) {
            iconWrapper.addClass(self.options.extraClass);
          }

          if (self.options.removeClassAfterInit) {
            iconWrapper.removeClass(self.options.removeClassAfterInit);
          }

          if (self.options.onlySVG) {
            $(window).trigger('icon.rendered');
            return this;
          }

          $el = iconWrapper;
          var icon = new Vivus(uniqid, {
            start: 'manual',
            type: 'sync',
            selfDestroy: true,
            duration: duration,
            onReady: function onReady(obj) {
              var styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
                  animateStyle = ''; // SVG Fill Based

              if (self.options.animated && !self.options.strokeBased || !self.options.animated && color && !self.options.strokeBased) {
                animateStyle = 'stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;'; // Set Style on SVG inside object

                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { fill: ' + color + '; stroke: ' + color + '; ' + animateStyle + (self.options.svgStyle ? self.options.svgStyle : "") + ' } .finished path { fill-opacity: 1; }';
                obj.el.appendChild(styleElement);
              } // SVG Stroke Based


              if (self.options.animated && self.options.strokeBased || !self.options.animated && color && self.options.strokeBased) {
                // Set Style on SVG inside object
                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { stroke: ' + color + '; ' + (self.options.svgStyle ? self.options.svgStyle : "") + '}';
                obj.el.appendChild(styleElement);
              }

              $.event.trigger('theme.plugin.icon.svg.ready');
            }
          }); // Isn't animated

          if (!self.options.animated) {
            setTimeout(function () {
              icon.finish();
            }, 10);
            $el.css({
              opacity: 1
            });
          } // Animated


          if (self.options.animated && $(window).width() > 767) {
            // First Load
            if ($el.visible(true)) {
              self.startIconAnimation(icon, $el);
            } else if (elTopDistance < windowTopDistance) {
              self.startIconAnimation(icon, $el);
            } // On Scroll


            $(window).on('scroll', function () {
              if ($el.visible(true)) {
                self.startIconAnimation(icon, $el);
              }
            });
          } else {
            $el.css({
              opacity: 1
            });
            icon.finish();
            $(window).on('theme.plugin.icon.svg.ready', function () {
              setTimeout(function () {
                icon.el.setAttribute('class', 'finished');
                icon.finish();
              }, 300);
            });
          }

          $(window).trigger('icon.rendered');
        }
      });
      return this;
    },
    startIconAnimation: function startIconAnimation(icon, $el) {
      var self = this; // Animate for better performance

      $({
        to: 0
      }).animate({
        to: 1
      }, self.options.strokeBased ? self.options.delay : self.options.delay + 300, function () {
        $el.css({
          opacity: 1
        });
      });
      $({
        to: 0
      }).animate({
        to: 1
      }, self.options.delay, function () {
        icon.play(1);
        setTimeout(function () {
          icon.el.setAttribute('class', 'finished');
        }, icon.duration * 5);
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginIcon: PluginIcon
  }); // jquery plugin

  $.fn.themePluginIcon = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginIcon($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // In Viewport Style

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__inviewportstyle';

  var PluginInViewportStyle = function PluginInViewportStyle($el, opts) {
    return this.initialize($el, opts);
  };

  PluginInViewportStyle.defaults = {
    viewport: window,
    threshold: [0],
    modTop: '-200px',
    modBottom: '-200px',
    style: {
      'transition': 'all 1s ease-in-out'
    },
    styleIn: '',
    styleOut: '',
    classIn: '',
    classOut: ''
  };
  PluginInViewportStyle.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginInViewportStyle.defaults, opts, {});
      return this;
    },
    build: function build() {
      var self = this,
          el = self.$el.get(0);
      self.$el.css(self.options.style);

      if (typeof window.IntersectionObserver === 'function') {
        var un = observeElementInViewport.observeElementInViewport(el, function () {
          self.$el.css(self.options.styleIn);
          self.$el.addClass(self.options.classIn).removeClass(self.options.classOut);
        }, function () {
          self.$el.css(self.options.styleOut);
          self.$el.addClass(self.options.classOut).removeClass(self.options.classIn);
        }, {
          viewport: self.options.viewport,
          threshold: self.options.threshold,
          modTop: self.options.modTop,
          modBottom: self.options.modBottom
        });
      }

      ;
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginInViewportStyle: PluginInViewportStyle
  }); // jquery plugin

  $.fn.themePluginInViewportStyle = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginInViewportStyle($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Lightbox

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__lightbox';

  var PluginLightbox = function PluginLightbox($el, opts) {
    return this.initialize($el, opts);
  };

  PluginLightbox.defaults = {
    tClose: 'Close (Esc)',
    // Alt text on close button
    tLoading: 'Loading...',
    // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
      tPrev: 'Previous (Left arrow key)',
      // Alt text on left arrow
      tNext: 'Next (Right arrow key)',
      // Alt text on right arrow
      tCounter: '%curr% of %total%' // Markup for "1 of 7" counter

    },
    image: {
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded

    },
    ajax: {
      tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed

    },
    callbacks: {
      open: function open() {
        $('html').addClass('lightbox-opened');
      },
      close: function close() {
        $('html').removeClass('lightbox-opened');
      }
    }
  };
  PluginLightbox.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.magnificPopup)) {
        return this;
      }

      this.options.wrapper.magnificPopup(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginLightbox: PluginLightbox
  }); // jquery plugin

  $.fn.themePluginLightbox = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginLightbox($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Loading Overlay

(function (theme, $) {
  'use strict';

  theme = theme || {}; // Default

  var loadingOverlayDefaultTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>', '</div>'].join(''); // Percentage

  var loadingOverlayPercentageTemplate = ['<div class="loading-overlay loading-overlay-percentage">', '<div class="page-loader-progress-wrapper"><span class="page-loader-progress">0</span><span class="page-loader-progress-symbol">%</span></div>', '</div>'].join(''); // Cubes

  var loadingOverlayCubesTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>', '</div>'].join(''); // Cube Progress

  var loadingOverlayCubeProgressTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><span class="cssload-cube-progress"><span class="cssload-cube-progress-inner"></span></span></div>', '</div>'].join(''); // Float Rings

  var loadingOverlayFloatRingsTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-float-rings-loader"><div class="cssload-float-rings-inner cssload-one"></div><div class="cssload-float-rings-inner cssload-two"></div><div class="cssload-float-rings-inner cssload-three"></div></div></div>', '</div>'].join(''); // Floating Bars

  var loadingOverlayFloatBarsTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-float-bars-container"><ul class="cssload-float-bars-flex-container"><li><span class="cssload-float-bars-loading"></span></li></div></div></div>', '</div>'].join(''); // Speeding Wheel

  var loadingOverlaySpeedingWheelTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-speeding-wheel-container"><div class="cssload-speeding-wheel"></div></div></div>', '</div>'].join(''); // Zenith

  var loadingOverlayZenithTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-zenith-container"><div class="cssload-zenith"></div></div></div>', '</div>'].join(''); // Spinning Square

  var loadingOverlaySpinningSquareTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-spinning-square-loading"></div></div>', '</div>'].join(''); // Pulse

  var loadingOverlayPulseTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="wrapper-pulse"><div class="cssload-pulse-loader"></div></div></div>', '</div>'].join('');

  var LoadingOverlay = function LoadingOverlay($wrapper, options, noInheritOptions) {
    return this.initialize($wrapper, options, noInheritOptions);
  };

  LoadingOverlay.prototype = {
    options: {
      css: {},
      hideDelay: 500,
      progressMinTimeout: 0,
      effect: 'default'
    },
    initialize: function initialize($wrapper, options, noInheritOptions) {
      this.$wrapper = $wrapper;
      this.setVars().setOptions(options, noInheritOptions).build().events().dynamicShowHideEvents();
      this.$wrapper.data('loadingOverlay', this);
    },
    setVars: function setVars() {
      this.$overlay = this.$wrapper.find('.loading-overlay');
      this.pageStatus = null;
      this.progress = null;
      this.animationInterval = 33;
      return this;
    },
    setOptions: function setOptions(options, noInheritOptions) {
      if (!this.$overlay.get(0)) {
        this.matchProperties();
      }

      if (noInheritOptions) {
        this.options = $.extend(true, {}, this.options, options);
      } else {
        this.options = $.extend(true, {}, this.options, options, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
      }

      this.loaderClass = this.getLoaderClass(this.options.css.backgroundColor);
      return this;
    },
    build: function build() {
      var _self = this;

      if (!this.$overlay.closest(document.documentElement).get(0)) {
        if (!this.$cachedOverlay) {
          switch (_self.options.effect) {
            case 'percentageProgress1':
              this.$overlay = $(loadingOverlayPercentageTemplate).clone();
              break;

            case 'percentageProgress2':
              this.$overlay = $(loadingOverlayPercentageTemplate).clone();
              this.$overlay.addClass('loading-overlay-percentage-effect-2').prepend('<div class="loading-overlay-background-layer"></div>');
              break;

            case 'cubes':
              this.$overlay = $(loadingOverlayCubesTemplate).clone();
              break;

            case 'cubeProgress':
              this.$overlay = $(loadingOverlayCubeProgressTemplate).clone();
              break;

            case 'floatRings':
              this.$overlay = $(loadingOverlayFloatRingsTemplate).clone();
              break;

            case 'floatBars':
              this.$overlay = $(loadingOverlayFloatBarsTemplate).clone();
              break;

            case 'speedingWheel':
              this.$overlay = $(loadingOverlaySpeedingWheelTemplate).clone();
              break;

            case 'zenith':
              this.$overlay = $(loadingOverlayZenithTemplate).clone();
              break;

            case 'spinningSquare':
              this.$overlay = $(loadingOverlaySpinningSquareTemplate).clone();
              break;

            case 'pulse':
              this.$overlay = $(loadingOverlayPulseTemplate).clone();
              break;

            case 'default':
            default:
              this.$overlay = $(loadingOverlayDefaultTemplate).clone();
              break;
          }

          if (this.options.css) {
            this.$overlay.css(this.options.css);
            this.$overlay.find('.loader').addClass(this.loaderClass);
          }
        } else {
          this.$overlay = this.$cachedOverlay.clone();
        }

        this.$wrapper.prepend(this.$overlay);
      }

      if (!this.$cachedOverlay) {
        this.$cachedOverlay = this.$overlay.clone();
      }

      if (['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect)) {
        _self.updateProgress();

        if (_self.options.isDynamicHideShow) {
          setTimeout(function () {
            _self.progress = 'complete';
            $('.page-loader-progress').text(100);

            if (['percentageProgress2'].includes(_self.options.effect)) {
              $('.loading-overlay-background-layer').css({
                width: '100%'
              });
            }
          }, 2800);
        }
      }

      return this;
    },
    events: function events() {
      var _self = this;

      if (this.options.startShowing) {
        _self.show();
      }

      if (this.$wrapper.is('body') || this.options.hideOnWindowLoad) {
        $(window).on('load error', function () {
          setTimeout(function () {
            _self.hide();
          }, _self.options.progressMinTimeout);
        });
      }

      if (this.options.listenOn) {
        $(this.options.listenOn).on('loading-overlay:show beforeSend.ic', function (e) {
          e.stopPropagation();

          _self.show();
        }).on('loading-overlay:hide complete.ic', function (e) {
          e.stopPropagation();

          _self.hide();
        });
      }

      this.$wrapper.on('loading-overlay:show beforeSend.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.show();

          return true;
        }

        return false;
      }).on('loading-overlay:hide complete.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.hide();

          return true;
        }

        return false;
      });

      if (['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect)) {
        $(window).on('load', function () {
          setTimeout(function () {
            _self.pageStatus = "complete";
            $('.page-loader-progress').text(100);

            if (['percentageProgress2'].includes(_self.options.effect)) {
              $('.loading-overlay-background-layer').css({
                width: '100%'
              });
            }
          }, _self.options.progressMinTimeout);
        });
      }

      return this;
    },
    show: function show() {
      this.build();
      this.position = this.$wrapper.css('position').toLowerCase();

      if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
        this.$wrapper.css({
          position: 'relative'
        });
      }

      this.$wrapper.addClass('loading-overlay-showing');
    },
    hide: function hide() {
      var _self = this;

      setTimeout(function () {
        _self.$wrapper.removeClass('loading-overlay-showing');

        if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
          _self.$wrapper.css({
            position: ''
          });
        }

        $(window).trigger('loading.overlay.ready');
      }, _self.options.hideDelay);
    },
    updateProgress: function updateProgress() {
      var _self = this;

      var render = function render() {
        if (_self.pageStatus == "complete") {
          $('.page-loader-progress').text(100);
          setTimeout(function () {
            $('.page-loader-progress').addClass('d-none');
          }, 700);
        } else {
          if (_self.progress == null) {
            _self.progress = 1;
          }

          _self.progress = _self.progress + 1;

          if (_self.progress >= 0 && _self.progress <= 30) {
            _self.animationInterval += 1;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 30 && _self.progress <= 60) {
            _self.animationInterval += 2;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 60 && _self.progress <= 80) {
            _self.animationInterval += 40;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 80 && _self.progress <= 90) {
            _self.animationInterval += 80;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 90 && _self.progress <= 95) {
            _self.animationInterval += 150;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 95 && _self.progress <= 99) {
            _self.animationInterval += 400;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress >= 100) {
            $('.page-loader-progress').text(99);
          }

          if (['percentageProgress2'].includes(_self.options.effect)) {
            $('.loading-overlay-background-layer').css({
              width: _self.progress + '%'
            });
          }

          self.loopInside = setTimeout(render, _self.animationInterval);
        }
      };

      render();
      return this;
    },
    matchProperties: function matchProperties() {
      var i, l, properties;
      properties = ['backgroundColor', 'borderRadius'];
      l = properties.length;

      for (i = 0; i < l; i++) {
        var obj = {};
        obj[properties[i]] = this.$wrapper.css(properties[i]);
        $.extend(this.options.css, obj);
      }
    },
    getLoaderClass: function getLoaderClass(backgroundColor) {
      if (!backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit') {
        return 'black';
      }

      var hexColor, r, g, b, yiq;

      var colorToHex = function colorToHex(color) {
        var hex, rgb;

        if (color.indexOf('#') > -1) {
          hex = color.replace('#', '');
        } else {
          rgb = color.match(/\d+/g);
          hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
        }

        if (hex.length === 3) {
          hex = hex + hex;
        }

        return hex;
      };

      hexColor = colorToHex(backgroundColor);
      r = parseInt(hexColor.substr(0, 2), 16);
      g = parseInt(hexColor.substr(2, 2), 16);
      b = parseInt(hexColor.substr(4, 2), 16);
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
    },
    dynamicShowHide: function dynamicShowHide(effect) {
      var _self = this; // Remove Loading Overlay Data


      $('body').removeData('loadingOverlay'); // Remove Html Of Loading Overlay

      $('.loading-overlay').remove();

      if (effect == '') {
        return this;
      } // Initialize New Loading Overlay (second parameter is to NO inherit data-plugin-options)


      $('body').loadingOverlay({
        effect: effect ? effect : 'pulse',
        isDynamicHideShow: true
      }, true); // Show Loading Overlay Loader

      $('body').data('loadingOverlay').show(); // Hide Loading Overlay Loader

      setTimeout(function () {
        $('body').data('loadingOverlay').hide();
      }, 3000);
      return this;
    },
    dynamicShowHideEvents: function dynamicShowHideEvents() {
      var _self = this; // Button


      $(document).off('click.loading-overlay-button').on('click.loading-overlay-button', '.loading-overlay-button', function (e) {
        e.preventDefault();

        _self.dynamicShowHide($(this).data('effect'));
      }); // Select

      $(document).off('change.loading-overlay-select').on('change.loading-overlay-select', '.loading-overlay-select', function () {
        _self.dynamicShowHide($(this).val());
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    LoadingOverlay: LoadingOverlay
  }); // expose as a jquery plugin

  $.fn.loadingOverlay = function (opts, noInheritOptions) {
    return this.each(function () {
      var $this = $(this);
      var loadingOverlay = $this.data('loadingOverlay');

      if (loadingOverlay) {
        return loadingOverlay;
      } else {
        var options = opts || $this.data('loading-overlay-options') || {};
        return new LoadingOverlay($this, options, noInheritOptions);
      }
    });
  }; // auto init


  $('[data-loading-overlay]').loadingOverlay();
}).apply(this, [window.theme, jQuery]); // Masonry

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__masonry';

  var PluginMasonry = function PluginMasonry($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMasonry.defaults = {};
  PluginMasonry.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.isotope)) {
        return this;
      }

      var self = this,
          $window = $(window);
      self.$loader = false;

      if (self.options.wrapper.parents('.masonry-loader').get(0)) {
        self.$loader = self.options.wrapper.parents('.masonry-loader');
        self.createLoader();
      }

      self.options.wrapper.one('layoutComplete', function (event, laidOutItems) {
        self.removeLoader();
      });
      self.options.wrapper.waitForImages(function () {
        self.options.wrapper.isotope(self.options);
      }); // IE10/11 fix

      if ($('html').hasClass('ie10') || $('html').hasClass('ie11')) {
        var padding = parseInt(self.options.wrapper.children().css('padding-left')) + parseInt(self.options.wrapper.children().css('padding-right'));
      }

      $(window).on('resize', function () {
        setTimeout(function () {
          self.options.wrapper.isotope('layout');
        }, 300);
      });
      setTimeout(function () {
        self.removeLoader();
      }, 3000);
      return this;
    },
    createLoader: function createLoader() {
      var self = this;
      var loaderTemplate = ['<div class="bounce-loader">', '<div class="bounce1"></div>', '<div class="bounce2"></div>', '<div class="bounce3"></div>', '</div>'].join('');
      self.$loader.append(loaderTemplate);
      return this;
    },
    removeLoader: function removeLoader() {
      var self = this;

      if (self.$loader) {
        self.$loader.removeClass('masonry-loader-showing');
        setTimeout(function () {
          self.$loader.addClass('masonry-loader-loaded');
        }, 300);
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMasonry: PluginMasonry
  }); // jquery plugin

  $.fn.themePluginMasonry = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMasonry($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Match Height

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__matchHeight';

  var PluginMatchHeight = function PluginMatchHeight($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMatchHeight.defaults = {
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  };
  PluginMatchHeight.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.matchHeight)) {
        return this;
      }

      var self = this;
      self.options.wrapper.matchHeight(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMatchHeight: PluginMatchHeight
  }); // jquery plugin

  $.fn.themePluginMatchHeight = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMatchHeight($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Parallax

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__parallax';

  var PluginParallax = function PluginParallax($el, opts) {
    return this.initialize($el, opts);
  };

  PluginParallax.defaults = {
    speed: 1.5,
    horizontalPosition: '50%',
    offset: 0,
    parallaxDirection: 'top',
    parallaxHeight: '180%',
    parallaxScale: false,
    parallaxScaleInvert: false,
    scrollableParallax: false,
    scrollableParallaxMinWidth: 991,
    startOffset: 7,
    transitionDuration: '200ms',
    cssProperty: 'width',
    cssValueStart: 40,
    cssValueEnd: 100,
    cssValueUnit: 'vw',
    mouseParallax: false
  };
  PluginParallax.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginParallax.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $window = $(window),
          offset,
          yPos,
          bgpos,
          background,
          rotateY; // Mouse Parallax

      if (self.options.mouseParallax) {
        $window.mousemove(function (e) {
          $('.parallax-mouse-object', self.options.wrapper).each(function () {
            var moving_value = $(this).attr('data-value');
            var x = e.clientX * moving_value / 250;
            var y = e.clientY * moving_value / 250;
            $(this).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
          });
        });
        return this;
      } // Scrollable


      if (self.options.scrollableParallax && $(window).width() > self.options.scrollableParallaxMinWidth) {
        var $scrollableWrapper = self.options.wrapper.find('.scrollable-parallax-wrapper');

        if ($scrollableWrapper.get(0)) {
          var progress = $(window).scrollTop() > self.options.wrapper.offset().top + $(window).outerHeight() ? self.options.cssValueEnd : self.options.cssValueStart,
              cssValueUnit = self.options.cssValueUnit ? self.options.cssValueUnit : '';
          $scrollableWrapper.css({
            'background-image': 'url(' + self.options.wrapper.data('image-src') + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-attachment': 'fixed',
            'transition': 'ease ' + self.options.cssProperty + ' ' + self.options.transitionDuration,
            'width': progress + '%'
          });
          $(window).on('scroll', function (e) {
            if (self.options.wrapper.visible(true)) {
              var $window = $(window),
                  scrollTop = $window.scrollTop(),
                  elementOffset = self.options.wrapper.offset().top,
                  currentElementOffset = elementOffset - scrollTop;
              var scrollPercent = Math.abs(+(currentElementOffset - $window.height()) / (self.options.startOffset ? self.options.startOffset : 7)); // Increment progress value according scroll position

              if (scrollPercent <= self.options.cssValueEnd && progress <= self.options.cssValueEnd) {
                progress = self.options.cssValueStart + scrollPercent;
              } // Adjust CSS end value


              if (progress > self.options.cssValueEnd) {
                progress = self.options.cssValueEnd;
              } // Adjust CSS start value


              if (progress < self.options.cssValueStart) {
                progress = self.options.cssValueStart;
              }

              var styles = {};
              styles[self.options.cssProperty] = progress + cssValueUnit;
              $scrollableWrapper.css(styles);
            }
          });
        }

        return;
      } // Create Parallax Element


      if (self.options.fadeIn) {
        background = $('<div class="parallax-background fadeIn animated"></div>');
      } else {
        background = $('<div class="parallax-background"></div>');
      } // Set Style for Parallax Element


      background.css({
        'background-image': 'url(' + self.options.wrapper.data('image-src') + ')',
        'background-size': 'cover',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': self.options.parallaxHeight
      });

      if (self.options.parallaxScale) {
        background.css({
          'transition': 'transform 500ms ease-out'
        });
      } // Add Parallax Element on DOM


      self.options.wrapper.prepend(background); // Set Overlfow Hidden and Position Relative to Parallax Wrapper

      self.options.wrapper.css({
        'position': 'relative',
        'overflow': 'hidden'
      }); // Parallax Effect on Scroll & Resize

      var parallaxEffectOnScrolResize = function parallaxEffectOnScrolResize() {
        $window.on('scroll resize', function () {
          offset = self.options.wrapper.offset();
          yPos = -($window.scrollTop() - (offset.top - 100)) / (self.options.speed + 2);
          plxPos = yPos < 0 ? Math.abs(yPos) : -Math.abs(yPos);
          rotateY = $('html[dir="rtl"]').get(0) ? ' rotateY(180deg)' : ''; // RTL

          if (!self.options.parallaxScale) {
            if (self.options.parallaxDirection == 'bottom') {
              self.options.offset = 250;
            }

            var y = plxPos - 50 + self.options.offset;

            if (self.options.parallaxDirection == 'bottom') {
              y = y < 0 ? Math.abs(y) : -Math.abs(y);
            }

            background.css({
              'transform': 'translate3d(0, ' + y + 'px, 0)' + rotateY,
              'background-position-x': self.options.horizontalPosition
            });
          } else {
            var scrollTop = $window.scrollTop(),
                elementOffset = self.options.wrapper.offset().top,
                currentElementOffset = elementOffset - scrollTop,
                scrollPercent = Math.abs(+(currentElementOffset - $window.height()) / (self.options.startOffset ? self.options.startOffset : 7));
            scrollPercent = parseInt(scrollPercent >= 100 ? 100 : scrollPercent);
            var currentScale = scrollPercent / 100 * 50;

            if (!self.options.parallaxScaleInvert) {
              background.css({
                'transform': 'scale(1.' + String(currentScale).padStart(2, '0') + ', 1.' + String(currentScale).padStart(2, '0') + ')'
              });
            } else {
              background.css({
                'transform': 'scale(1.' + String(50 - currentScale).padStart(2, '0') + ', 1.' + String(50 - currentScale).padStart(2, '0') + ')'
              });
            }
          }
        });
        $window.trigger('scroll');
      };

      if (!$.browser.mobile) {
        parallaxEffectOnScrolResize();
      } else {
        if (self.options.enableOnMobile == true) {
          parallaxEffectOnScrolResize();
        } else {
          self.options.wrapper.addClass('parallax-disabled');
        }
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginParallax: PluginParallax
  }); // jquery plugin

  $.fn.themePluginParallax = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginParallax($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Progress Bar

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__progressBar';

  var PluginProgressBar = function PluginProgressBar($el, opts) {
    return this.initialize($el, opts);
  };

  PluginProgressBar.defaults = {
    accX: 0,
    accY: -50,
    delay: 1
  };
  PluginProgressBar.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          delay = 1;
      delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
      $el.addClass($el.attr('data-appear-animation'));
      setTimeout(function () {
        $el.animate({
          width: $el.attr('data-appear-progress-animation')
        }, 1500, 'easeOutQuad', function () {
          $el.find('.progress-bar-tooltip').animate({
            opacity: 1
          }, 500, 'easeOutQuad');
        });
      }, delay);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginProgressBar: PluginProgressBar
  }); // jquery plugin

  $.fn.themePluginProgressBar = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginProgressBar($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Random Images

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__randomimages';

  var PluginRandomImages = function PluginRandomImages($el, opts) {
    return this.initialize($el, opts);
  };

  PluginRandomImages.defaults = {
    minWindowWidth: 0,
    random: true,
    imagesListURL: null,
    lightboxImagesListURL: null,
    delay: null,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    stopAtImageIndex: false,
    // The value shoudl be the index value of array with images as string. Eg: '2'
    stopAfterFewSeconds: false,
    // The value should be in mili-seconds. Eg: 10000 = 10 seconds
    stopAfterXTimes: false,
    accY: 0
  };
  PluginRandomImages.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.st = '';
      this.times = 0;
      this.perImageIndex = 0;

      if ($el.is('img') && typeof opts.imagesListURL == 'undefined') {
        return false;
      }

      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginRandomImages.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Control the screens size we want to have the plugin working

      if ($(window).width() < self.options.minWindowWidth) {
        return false;
      } // Check if is single image or wrapper with images inside


      if (self.$el.is('img')) {
        // Check it's inside a lightbox
        self.isInsideLightbox = self.$el.closest('.lightbox').length ? true : false; // Push the initial image to lightbox list/array

        if (self.isInsideLightbox && self.options.lightboxImagesListURL) {
          self.options.lightboxImagesListURL.push(self.$el.closest('.lightbox').attr('href'));
        } // Push the current image src to the array


        self.options.imagesListURL.push(self.$el.attr('src')); // Start with lastIndex as the first image loaded on the page

        self.lastIndex = self.options.imagesListURL.length - 1; // Identify the last random image element (if has more than one on the page)

        if (self.options.random == false) {
          $('.plugin-random-images').each(function (i) {
            if (i == $('.plugin-random-images').length - 1) {
              $(this).addClass('the-last');
            }
          });
        } // Start the recursive timeout


        setTimeout(function () {
          self.recursiveTimeout(self.perImageTag, self.options.delay == null ? 3000 : self.options.delay);
        }, self.options.delay == null ? 300 : self.options.delay / 3);
      } else {
        // Start the recursive timeout
        setTimeout(self.recursiveTimeout(self.perWrapper, self.options.delay ? self.options.delay : getPerWrapperHighDelay(), false), 300);
      } // Stop After Few Seconds


      if (self.options.stopAfterFewSeconds) {
        setTimeout(function () {
          clearTimeout(self.st);
        }, self.options.stopAfterFewSeconds);
      }

      return this;
    },
    perImageTag: function perImageTag() {
      var self = this; // Generate a random index to make the images rotate randomly

      var index = self.options.random ? Math.floor(Math.random() * self.options.imagesListURL.length) : self.lastIndex; // Avoid repeat the same image

      if (self.lastIndex !== '' && self.lastIndex == index) {
        if (self.options.random) {
          while (index == self.lastIndex) {
            index = Math.floor(Math.random() * self.options.imagesListURL.length);
          }
        } else {
          index = index - 1;

          if (index == -1) {
            index = self.options.imagesListURL.length - 1;
          }
        }
      } // Turn the image ready for animations


      self.$el.addClass('animated'); // Remove the entrance animation class and add the out animation class

      self.$el.removeClass(self.options.animateIn).addClass(self.options.animateOut); // Change the image src and add the class for entrance animation

      setTimeout(function () {
        self.$el.attr('src', self.options.imagesListURL[index]).removeClass(self.options.animateOut).addClass(self.options.animateIn);

        if (self.isInsideLightbox && self.options.lightboxImagesListURL) {
          self.$el.closest('.lightbox').attr('href', self.options.lightboxImagesListURL[index]);
        }
      }, 1000); // Save the last index for future checks

      self.lastIndex = index; // Increment the times var

      self.times++; // Save the index for stopAtImageIndex option

      self.perImageIndex = index;
      return this;
    },
    // Iterate the imaes loop and get the higher value
    getPerWrapperHighDelay: function getPerWrapperHighDelay() {
      var self = this,
          $wrapper = self.$el,
          delay = 0;
      $wrapper.find('img').each(function () {
        var $image = $(this);

        if ($image.data('rimage-delay') && parseInt($image.data('rimage-delay')) > delay) {
          delay = parseInt($image.data('rimage-delay'));
        }
      });
      return delay;
    },
    perWrapper: function perWrapper() {
      var self = this,
          $wrapper = self.$el; // Turns the imageLlistURL into an array

      self.options.imagesListURL = []; // Find all images inside the element wrapper and push their sources to image list array

      $wrapper.find('img').each(function () {
        var $image = $(this);
        self.options.imagesListURL.push($image.attr('src'));
      }); // Shuffle the images list array (random effect)

      self.options.imagesListURL = self.shuffle(self.options.imagesListURL); // Iterate over each image and make some checks like delay for each image, animations, etc...

      $wrapper.find('img').each(function (index) {
        var $image = $(this),
            animateIn = $image.data('rimage-animate-in') ? $image.data('rimage-animate-in') : self.options.animateIn,
            animateOut = $image.data('rimage-animate-out') ? $image.data('rimage-animate-out') : self.options.animateOut,
            delay = $image.data('rimage-delay') ? $image.data('rimage-delay') : 2000;
        $image.addClass('animated');
        setTimeout(function () {
          $image.removeClass(animateIn).addClass(animateOut);
        }, delay / 2);
        setTimeout(function () {
          $image.attr('src', self.options.imagesListURL[index]).removeClass(animateOut).addClass(animateIn);
        }, delay);
      }); // Increment the times variable

      self.times++;
      return this;
    },
    recursiveTimeout: function recursiveTimeout(callback, delay) {
      var self = this;

      var timeout = function timeout() {
        if (callback !== null) {
          callback.call(self);
        } // Recursive


        self.st = setTimeout(timeout, delay == null ? 1000 : delay);

        if (self.options.random == false) {
          if (self.$el.hasClass('the-last')) {
            $('.plugin-random-images').trigger('rimages.start');
          } else {
            clearTimeout(self.st);
          }
        } // Stop At Image Index


        if (self.options.stopAtImageIndex && parseInt(self.options.stopAtImageIndex) == self.perImageIndex) {
          clearTimeout(self.st);
        } // Stop After X Timers


        if (self.options.stopAfterXTimes == self.times) {
          clearTimeout(self.st);
        }
      };

      timeout();
      self.$el.on('rimages.start', function () {
        clearTimeout(self.st);
        self.st = setTimeout(timeout, delay == null ? 1000 : delay);
      });
    },
    shuffle: function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginRandomImages: PluginRandomImages
  }); // jquery plugin

  $.fn.themePluginRandomImages = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginRandomImages($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Read More

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__readmore';

  var PluginReadMore = function PluginReadMore($el, opts) {
    return this.initialize($el, opts);
  };

  PluginReadMore.defaults = {
    buttonOpenLabel: 'Read More <i class="fas fa-chevron-down text-2 ms-1"></i>',
    buttonCloseLabel: 'Read Less <i class="fas fa-chevron-up text-2 ms-1"></i>',
    enableToggle: true,
    maxHeight: 110,
    overlayColor: '#FFF',
    overlayHeight: 100,
    startOpened: false,
    align: 'left'
  };
  PluginReadMore.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build().events();

      if (self.options.startOpened) {
        self.options.wrapper.find('.readmore-button-wrapper > a').trigger('click');
      }

      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginReadMore.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;
      self.options.wrapper.addClass('position-relative'); // Overlay

      self.options.wrapper.append('<div class="readmore-overlay"></div>'); // Check if is Safari

      var backgroundCssValue = 'linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, ' + self.options.overlayColor + ' 100%)';

      if ($('html').hasClass('safari')) {
        backgroundCssValue = '-webkit-linear-gradient(top, rgba(2, 0, 36, 0) 0%, ' + self.options.overlayColor + ' 100%)';
      }

      self.options.wrapper.find('.readmore-overlay').css({
        background: backgroundCssValue,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: self.options.overlayHeight,
        'z-index': 1
      }); // Read More Button

      self.options.wrapper.find('.readmore-button-wrapper').removeClass('d-none').css({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        'z-index': 2
      }); // Button Label

      self.options.wrapper.find('.readmore-button-wrapper > a').html(self.options.buttonOpenLabel);
      self.options.wrapper.css({
        'height': self.options.maxHeight,
        'overflow-y': 'hidden'
      }); // Alignment

      switch (self.options.align) {
        case 'center':
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-center');
          break;

        case 'right':
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-right');
          break;

        case 'left':
        default:
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-left');
          break;
      }

      return this;
    },
    events: function events() {
      var self = this; // Read More

      self.readMore = function () {
        self.options.wrapper.find('.readmore-button-wrapper > a:not(.readless)').on('click', function (e) {
          e.preventDefault();
          var $this = $(this);
          setTimeout(function () {
            self.options.wrapper.animate({
              'height': self.options.wrapper[0].scrollHeight
            }, function () {
              if (!self.options.enableToggle) {
                $this.fadeOut();
              }

              $this.html(self.options.buttonCloseLabel).addClass('readless').off('click');
              self.readLess();
              self.options.wrapper.find('.readmore-overlay').fadeOut();
              self.options.wrapper.css({
                'max-height': 'none',
                'overflow': 'visible'
              });
              self.options.wrapper.find('.readmore-button-wrapper').animate({
                bottom: -20
              });
            });
          }, 200);
        });
      }; // Read Less


      self.readLess = function () {
        self.options.wrapper.find('.readmore-button-wrapper > a.readless').on('click', function (e) {
          e.preventDefault();
          var $this = $(this); // Button

          self.options.wrapper.find('.readmore-button-wrapper').animate({
            bottom: 0
          }); // Overlay

          self.options.wrapper.find('.readmore-overlay').fadeIn();
          setTimeout(function () {
            self.options.wrapper.height(self.options.wrapper[0].scrollHeight).animate({
              'height': self.options.maxHeight
            }, function () {
              $this.html(self.options.buttonOpenLabel).removeClass('readless').off('click');
              self.readMore();
              self.options.wrapper.css({
                'overflow': 'hidden'
              });
            });
          }, 200);
        });
      }; // First Load


      self.readMore();
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginReadMore: PluginReadMore
  }); // jquery plugin

  $.fn.themePluginReadMore = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginReadMore($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Revolution Slider

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__revolution';

  var PluginRevolutionSlider = function PluginRevolutionSlider($el, opts) {
    return this.initialize($el, opts);
  };

  PluginRevolutionSlider.defaults = {
    sliderType: 'standard',
    sliderLayout: 'fullwidth',
    delay: 9000,
    gridwidth: 1170,
    gridheight: 500,
    spinner: 'spinner3',
    disableProgressBar: 'on',
    parallax: {
      type: 'off',
      bgparallax: 'off'
    },
    navigation: {
      keyboardNavigation: 'off',
      keyboard_direction: 'horizontal',
      mouseScrollNavigation: 'off',
      onHoverStop: 'off',
      touch: {
        touchenabled: 'on',
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: 'horizontal',
        drag_block_vertical: false
      },
      arrows: {
        enable: true,
        hide_onmobile: false,
        hide_under: 0,
        hide_onleave: true,
        hide_delay: 200,
        hide_delay_mobile: 1200,
        left: {
          h_align: 'left',
          v_align: 'center',
          h_offset: 30,
          v_offset: 0
        },
        right: {
          h_align: 'right',
          v_align: 'center',
          h_offset: 30,
          v_offset: 0
        }
      }
    },

    /* ADDONS */
    addOnTypewriter: {
      enable: false
    },
    addOnWhiteboard: {
      enable: false
    },
    whiteboard: {
      movehand: {
        src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/hand_point_right.png',
        width: 400,
        height: 1000,
        handtype: 'right',
        transform: {
          transformX: 50,
          transformY: 50
        },
        jittering: {
          distance: '80',
          distance_horizontal: '100',
          repeat: '5',
          offset: '10',
          offset_horizontal: '0'
        },
        rotation: {
          angle: '10',
          repeat: '3'
        }
      },
      writehand: {
        src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/write_right_angle.png',
        width: 572,
        height: 691,
        handtype: 'right',
        transform: {
          transformX: 50,
          transformY: 50
        },
        jittering: {
          distance: '80',
          distance_horizontal: '100',
          repeat: '5',
          offset: '10',
          offset_horizontal: '0'
        },
        rotation: {
          angle: '10',
          repeat: '3'
        }
      }
    },
    addOnParticles: {
      enable: false
    },
    particles: {
      startSlide: "first",
      endSlide: "last",
      zIndex: "1",
      particles: {
        number: {
          value: 80
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff",
            opacity: 1
          },
          image: {
            src: ""
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          min: 0.25,
          anim: {
            enable: false,
            speed: 3,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 2,
          random: false,
          min: 30,
          anim: {
            enable: false,
            speed: 40,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: true,
          min_speed: 6,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "repulse"
          }
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            opacity: 0.4
          },
          repulse: {
            distance: 200
          }
        }
      }
    },
    addOnCountdown: {
      enable: false,
      targetdate: new Date().getTime() + 864000000,
      // http://www.freeformatter.com/epoch-timestamp-to-date-converter.html
      slidechanges: [{
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        slide: 2
      }]
    },
    addOnSlicey: {
      enable: false
    },
    addOnFilmstrip: {
      enable: false
    },
    addOnBeforeAfter: {
      enable: false,
      options: {
        cursor: "move",
        carousel: false,
        arrowStyles: {
          leftIcon: "fa-icon-caret-left",
          rightIcon: "fa-icon-caret-right",
          topIcon: "fa-icon-caret-up",
          bottomIcon: "fa-icon-caret-down",
          size: "35",
          color: "#ffffff",
          spacing: "10",
          bgColor: "transparent",
          padding: "0",
          borderRadius: "0"
        },
        dividerStyles: {
          width: "1",
          color: "rgba(255, 255, 255, 0.5)"
        }
      }
    },
    addOnPanorama: {
      enable: false
    },
    addOnRevealer: {
      enable: false
    },
    revealer: {
      direction: "open_horizontal",
      color: "#ffffff",
      duration: "1500",
      delay: "0",
      easing: "Power2.easeInOut",
      overlay_enabled: true,
      overlay_color: "#000000",
      overlay_duration: "1500",
      overlay_delay: "0",
      overlay_easing: "Power2.easeInOut",
      spinner: "1",
      spinnerColor: "#006dd2",
      spinnerHtml: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>"
    },
    addOnDuotone: {
      enable: false
    },
    addOnBubblemorph: {
      enable: false
    },
    addOnDistortion: {
      enable: false
    }
  };
  PluginRevolutionSlider.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.revolution)) {
        return this;
      } // Single Slider Class


      if (this.options.wrapper.find('> ul > li').length == 1) {
        this.options.wrapper.addClass('slider-single-slide'); // Remove Bullets
        // this.options.navigation.bullets.enable = false;

        $.extend(this.options.navigation, {
          bullets: {
            enable: false
          }
        });
      } // Full Screen Class


      if (this.options.sliderLayout == 'fullscreen') {
        this.options.wrapper.closest('.slider-container').addClass('fullscreen-slider');
      } // Initialize Revolution Slider


      this.options.wrapper.revolution(this.options); // Addon Init - Typewriter

      if (this.options.addOnTypewriter.enable) {
        RsTypewriterAddOn($, this.options.wrapper);
      } // Addon Init - Whiteboard


      if (this.options.addOnWhiteboard.enable) {
        this.options.wrapper.rsWhiteBoard();
      } // Addon Init - Particles


      if (this.options.addOnParticles.enable) {
        RsParticlesAddOn(this.options.wrapper);
      } // Addon Init - Countdown


      if (this.options.addOnCountdown.enable) {
        tp_countdown(this.options.wrapper, this.options.addOnCountdown.targetdate, this.options.addOnCountdown.slidechanges);
      } // Addon Init - Slicey


      if (this.options.addOnSlicey.enable) {
        this.options.wrapper.revSliderSlicey();
      } // Addon Init - Filmstrip


      if (this.options.addOnFilmstrip.enable) {
        RsFilmstripAddOn($, this.options.wrapper, '../vendor/rs-plugin/revolution-addons/filmstrip/', false);
      } // Addon Init - Before After


      if (this.options.addOnBeforeAfter.enable) {
        RevSliderBeforeAfter($, this.options.wrapper, this.options.addOnBeforeAfter.options);
      } // Addon Init - Panorama


      if (this.options.addOnPanorama.enable) {
        RsAddonPanorama($, this.options.wrapper);
      } // Addon Init - Revealer


      if (this.options.addOnRevealer.enable) {
        RsRevealerAddOn($, this.options.wrapper, this.options.revealer.spinnerHtml);
      } // Addon Init - Duotone


      if (this.options.addOnDuotone.enable) {
        RsAddonDuotone($, this.options.wrapper, true, "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "1000");
      } // Addon Init - Bubblemorph


      if (this.options.addOnBubblemorph.enable) {
        BubbleMorphAddOn($, this.options.wrapper, false);
      } // Addon Init - Distortion


      if (this.options.addOnDistortion.enable) {
        RsLiquideffectAddOn($, this.options.wrapper);
      }

      return this;
    },
    events: function events() {
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginRevolutionSlider: PluginRevolutionSlider
  }); // jquery plugin

  $.fn.themePluginRevolutionSlider = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginRevolutionSlider($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Scroll Spy

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollSpy';

  var PluginScrollSpy = function PluginScrollSpy($el, opts) {
    return this.initialize($el, opts);
  };

  PluginScrollSpy.defaults = {
    target: '#header',
    debugMode: false
  };
  PluginScrollSpy.prototype = {
    initialize: function initialize($el, opts) {
      if (document.querySelector(opts.target) == null) {
        return false;
      }

      this.$el = $el;
      this.setData().setOptions(opts);

      if (this.options.debugMode) {
        this.debugMode();
      }

      this.build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollSpy.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          target = document.querySelector(self.options.target) != null ? document.querySelector(self.options.target) : false,
          navItems = target == '#header' || target == '.wrapper-spy' ? target.querySelectorAll('.header-nav .nav > li a') : target.querySelectorAll('.nav > li a'); // Get all section ID's

      var sectionIDs = Object.keys(navItems).map(function (key, index) {
        return navItems[key].hash;
      }); // Remove empty values from sectionIDs array

      sectionIDs = sectionIDs.filter(function (value) {
        return value != '';
      }); // Store in a global variable

      self.sectionIDs = sectionIDs;

      for (var i = 0; i < sectionIDs.length; i++) {
        // Default Root Margin
        var rootMargin = '-20% 0px -79.9% 0px'; // Spy Offset

        if ($(sectionIDs[i]).data('spy-offset')) {
          var rootMarginOffset = $(sectionIDs[i]).data('spy-offset'),
              isNegativeOffset = parseInt(rootMarginOffset) < 0 ? true : false; // Mount a new rootMargin based on offset value

          rootMargin = rootMargin.split(' ').map(function (element, index) {
            if (element.indexOf('%') > 0) {
              var valueToInt = parseInt(element.replace('%', '')),
                  newValue = 0;

              switch (index) {
                case 0:
                  if (isNegativeOffset) {
                    newValue = valueToInt - rootMarginOffset;
                  } else {
                    newValue = Math.abs(valueToInt) + rootMarginOffset;
                  }

                  break;

                case 2:
                  if (isNegativeOffset) {
                    newValue = valueToInt + rootMarginOffset;
                  } else {
                    newValue = Math.abs(valueToInt) - rootMarginOffset;
                  }

                  break;
              }

              if (isNegativeOffset) {
                newValue = newValue + '%';
              } else {
                newValue = '-' + newValue + '%';
              }

              return newValue;
            } else {
              return element;
            }
          }).join(' ');
        }

        var selector = sectionIDs[i],
            callback = function callback() {
          var $section = $(this);

          if (target == '#header' || target == '.wrapper-spy') {
            $('#header .header-nav .nav > li a').removeClass('active');
            $('#header .header-nav .nav > li a[href="#' + $section[0].id + '"]').addClass('active');
          } else {
            $(target).find('.nav > li a').removeClass('active');
            $(target).find('.nav > li a[href="#' + $section[0].id + '"]').addClass('active');
          }
        };

        this.scrollSpyIntObs(selector, callback, {
          rootMargin: rootMargin,
          threshold: 0
        }, true, i, true);
      }

      return this;
    },
    scrollSpyIntObs: function scrollSpyIntObs(selector, functionName, intObsOptions, alwaysObserve, index, firstLoad) {
      var self = this;
      var $el = document.querySelectorAll(selector);
      var intersectionObserverOptions = {
        rootMargin: '0px 0px 200px 0px'
      };

      if (Object.keys(intObsOptions).length) {
        intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
      }

      var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];

          if (entry.intersectionRatio > 0) {
            if (typeof functionName === 'string') {
              var func = Function('return ' + functionName)();
            } else {
              var callback = functionName;
              callback.call($(entry.target));
            } // Unobserve


            if (!alwaysObserve) {
              observer.unobserve(entry.target);
            }
          } else {
            if (firstLoad == false) {
              if (index == self.sectionIDs.length - 1) {
                $('#header .header-nav .nav > li a').removeClass('active');
                $('#header .header-nav .nav > li a[href="#' + entry.target.id + '"]').parent().prev().find('a').addClass('active');
              }
            }

            firstLoad = false;
          }
        }
      }, intersectionObserverOptions);
      $($el).each(function () {
        observer.observe($(this)[0]);
      });
      return this;
    },
    debugMode: function debugMode() {
      function wrapCallback(cb) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return wrapper.apply(void 0, [cb].concat(args));
        };
      }

      function addFlashingRect(bounds) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var entry = arguments.length > 2 ? arguments[2] : undefined;
        var width = bounds.width,
            left = bounds.left,
            height = bounds.height,
            top = bounds.top;
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = width + "px";
        div.style.left = left + "px";
        div.style.top = top + "px";
        div.style.height = height + "px";
        div.style.pointerEvents = "none";
        div.style.transition = "opacity 2s ease-in";
        div.style.zIndex = 9999999999;
        Object.assign(div.style, style);
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            div.style.opacity = 0;
          });
        });
        div.addEventListener("transitionend", function () {
          document.body.removeChild(div);
        });
        document.body.appendChild(div);

        if (entry) {
          var newdiv = document.createElement("div");
          newdiv.style.backgroundColor = '#000';
          newdiv.style.color = '#FFF';
          newdiv.style.paddingTop = '10px';
          newdiv.style.paddingRight = '10px';
          newdiv.style.paddingLeft = '10px';
          newdiv.style.paddingBottom = '10px';
          newdiv.innerHTML = entry.target.id;
          div.appendChild(newdiv);
        }

        return div;
      }

      var iodOptions = {
        rootColor: "#9428AB",
        enterColor: "#B35C00",
        exitColor: "#035570",
        interColor: "#9CAF00BB"
      };

      function showEntry(entry) {
        addFlashingRect(entry.rootBounds, {
          border: "".concat(Math.min(10, entry.rootBounds.height / 2), "px solid ").concat(iodOptions.rootColor),
          overflow: "hidden",
          boxSizing: "border-box"
        }, entry);
      }

      function wrapper(cb, entries, observer) {
        entries.forEach(showEntry);
        return cb(entries, observer);
      }

      if (typeof window != "undefined") {
        window.IntersectionObserver = /*#__PURE__*/function (_IntersectionObserver) {
          _inherits(_class, _IntersectionObserver);

          var _super = _createSuper(_class);

          function _class(cb, o) {
            _classCallCheck(this, _class);

            return _super.call(this, wrapCallback(cb), o);
          }

          return _class;
        }( /*#__PURE__*/_wrapNativeSuper(IntersectionObserver));
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginScrollSpy: PluginScrollSpy
  }); // jquery plugin

  $.fn.themePluginScrollSpy = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollSpy($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Scroll to Top

(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginScrollToTop: {
      defaults: {
        wrapper: $('body'),
        offset: 150,
        buttonClass: 'scroll-to-top',
        iconClass: 'fas fa-chevron-up',
        delay: 1000,
        visibleMobile: false,
        label: false,
        easing: 'easeOutBack'
      },
      initialize: function initialize(opts) {
        initialized = true; // Don't initialize if the page has Section Scroll

        if ($('body[data-plugin-section-scroll]').get(0)) {
          return;
        }

        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this,
            $el; // Base HTML Markup

        $el = $('<a />').addClass(self.options.buttonClass).attr({
          'href': '#'
        }).append($('<i />').addClass(self.options.iconClass)); // Visible Mobile

        if (!self.options.visibleMobile) {
          $el.addClass('hidden-mobile');
        } // Label


        if (self.options.label) {
          $el.append($('<span />').html(self.options.label));
        }

        this.options.wrapper.append($el);
        this.$el = $el;
        return this;
      },
      events: function events() {
        var self = this,
            _isScrolling = false; // Click Element Action

        self.$el.on('click', function (e) {
          e.preventDefault();
          $('html').animate({
            scrollTop: 0
          }, self.options.delay, self.options.easing);
          return false;
        }); // Show/Hide Button on Window Scroll event.

        $(window).scroll(function () {
          if (!_isScrolling) {
            _isScrolling = true;

            if ($(window).scrollTop() > self.options.offset) {
              self.$el.stop(true, true).addClass('visible');
              _isScrolling = false;
            } else {
              self.$el.stop(true, true).removeClass('visible');
              _isScrolling = false;
            }
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Scrollable

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollable';

  var PluginScrollable = function PluginScrollable($el, opts) {
    return this.initialize($el, opts);
  };

  PluginScrollable.updateModals = function () {
    PluginScrollable.updateBootstrapModal();
  };

  PluginScrollable.updateBootstrapModal = function () {
    var updateBoostrapModal;
    updateBoostrapModal = typeof $.fn.modal !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

    if (!updateBoostrapModal) {
      return false;
    }

    var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;

    $.fn.modal.Constructor.prototype.enforceFocus = function () {
      originalFocus.apply(this);
      var $scrollable = this.$element.find('.scrollable');

      if ($scrollable) {
        if ($.isFunction($.fn['themePluginScrollable'])) {
          $scrollable.themePluginScrollable();
        }

        if ($.isFunction($.fn['nanoScroller'])) {
          $scrollable.nanoScroller();
        }
      }
    };
  };

  PluginScrollable.defaults = {
    contentClass: 'scrollable-content',
    paneClass: 'scrollable-pane',
    sliderClass: 'scrollable-slider',
    alwaysVisible: true,
    preventPageScrolling: true
  };
  PluginScrollable.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.nanoScroller(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginScrollable: PluginScrollable
  }); // jquery plugin

  $.fn.themePluginScrollable = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollable($this, opts);
      }
    });
  };

  $(function () {
    PluginScrollable.updateModals();
  });
}).apply(this, [window.theme, jQuery]); // Section Scroll

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sectionScroll';

  var PluginSectionScroll = function PluginSectionScroll($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSectionScroll.defaults = {
    targetClass: '.section',
    dotsNav: true,
    changeHeaderLogo: true,
    headerLogoDark: 'img/logo-default-slim.png',
    headerLogoLight: 'img/logo-default-slim-dark.png'
  };
  PluginSectionScroll.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSectionScroll.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper; // Check type of header and change the target for header (by change header color purpose)

      if ($('html').hasClass('side-header-overlay-full-screen')) {
        self.$header = $('.sticky-wrapper');
      } else {
        self.$header = $('#header');
      } // Turn the section full height or not depeding on the content size


      self.updateSectionsHeight(); // Wrap all sections in a section wrapper

      $(this.options.targetClass).wrap('<div class="section-wrapper"></div>'); // Set the section wrapper height

      $('.section-wrapper').each(function () {
        $(this).height($(this).find('.section-scroll').outerHeight());
      }); // Add active class to the first section on page load

      $('.section-wrapper').first().addClass('active');
      var flag = false,
          scrollableFlag = false,
          touchDirection = '',
          touchstartY = 0,
          touchendY = 0;
      $(window).on('touchstart', function (event) {
        touchstartY = event.changedTouches[0].screenY;
      });
      var wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';

      if ($(window).width() < 992 && $('html').hasClass('touch')) {
        wheelEvent = 'onwheel' in document ? 'wheel touchend' : document.onmousewheel !== undefined ? 'mousewheel touchend' : 'DOMMouseScroll touchend';
      }

      if ($(window).width() < 992) {
        $('html').removeClass('overflow-hidden');
        $(window).on('scroll', function () {
          var index = 0;
          $('.section-scroll').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 50) {
              var $currentSection2 = $('.section-wrapper').eq(index).find('.section-scroll');
              $('.section-scroll-dots-navigation > ul > li').removeClass('active');
              $('.section-scroll-dots-navigation > ul > li').eq(index).addClass('active');
              $(window).trigger({
                type: 'section.scroll.mobile.change.header.color',
                currentSection: $currentSection2
              });
            }

            index++;
          });
        });
        $(window).on('section.scroll.mobile.change.header.color', function (e) {
          if (typeof e.currentSection == 'undefined') {
            return;
          }

          var $currentSection = e.currentSection,
              headerColor = $currentSection.data('section-scroll-header-color');
          $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
          $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
          $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor); // Change Logo

          if (self.options.changeHeaderLogo && headerColor != undefined) {
            if (headerColor == 'light') {
              $('#header .header-logo img').attr('src', self.options.headerLogoLight);
            } else if (headerColor == 'dark') {
              $('#header .header-logo img').attr('src', self.options.headerLogoDark);
            }
          }

          self.$header.css({
            opacity: 1
          });
        });
      }

      $(window).on(wheelEvent, function (e) {
        if ($(window).width() < 992) {
          return;
        }

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          if ($(e.target).closest('.section-scroll-dots-navigation').get(0) || $(e.target).closest('.header-body').get(0) || $(e.target).closest('.owl-carousel').get(0)) {
            return;
          }
        } // Side Header Overlay Full Screen


        if ($('html.side-header-overlay-full-screen.side-header-hide').get(0)) {
          return;
        }

        var wheelDirection = e.originalEvent.wheelDelta == undefined ? e.originalEvent.deltaY > 0 : e.originalEvent.wheelDelta < 0;

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          touchendY = event.changedTouches[0].screenY;

          if (touchendY <= touchstartY) {
            touchDirection = 'up';
          }

          if (touchendY >= touchstartY) {
            touchDirection = 'down';
          }

          if (touchendY == touchstartY) {
            return;
          }
        }

        var $currentSection = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll'),
            $nextSection = self.getNextSection(wheelDirection, touchDirection),
            nextSectionOffsetTop; // If is the last section, then change the offsetTop value

        if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
          nextSectionOffsetTop = $(document).height();
        } else {
          nextSectionOffsetTop = $nextSection.offset().top;
        }

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          setTimeout(function () {
            if ($('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').hasClass('section-scroll-scrollable')) {
              $('html').removeClass('overflow-hidden');
            } else {
              $('html').addClass('overflow-hidden');
            }
          }, 1200);
        } // For non full height sections


        if ($currentSection.hasClass('section-scroll-scrollable')) {
          if (!flag && !scrollableFlag) {
            // Scroll Direction
            if (wheelDirection || touchDirection == 'up') {
              if ($(window).scrollTop() + $(window).height() >= nextSectionOffsetTop) {
                flag = true;
                setTimeout(function () {
                  $(window).trigger('section.scroll.change.header.color');
                  setTimeout(function () {
                    flag = false;
                  }, 500);
                }, 1000);

                if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
                  return false;
                } // Move to the next section


                self.moveTo($currentSection.offset().top + $currentSection.outerHeight()); // Change Section Active Class

                self.changeSectionActiveState($nextSection);
                self.$header.css({
                  opacity: 0,
                  transition: 'ease opacity 500ms'
                });
              }

              if (!$('html').hasClass('touch')) {
                for (var i = 1; i < 100; i++) {
                  $('body, html').scrollTop($(window).scrollTop() + 1);

                  if ($(window).scrollTop() + $(window).height() >= nextSectionOffsetTop) {
                    scrollableFlag = true;
                    setTimeout(function () {
                      $(window).trigger('section.scroll.change.header.color');
                      scrollableFlag = false;
                    }, 500);
                    break;
                  }
                }
              }
            } else {
              if ($(window).scrollTop() <= $currentSection.offset().top) {
                flag = true;
                setTimeout(function () {
                  $(window).trigger('section.scroll.change.header.color');
                  setTimeout(function () {
                    flag = false;
                  }, 500);
                }, 1000);

                if (self.getCurrentIndex() == 0) {
                  return false;
                } // Move to the next section


                self.moveTo($currentSection.offset().top - $(window).height()); // Change Section Active Class

                self.changeSectionActiveState($nextSection);
                self.$header.css({
                  opacity: 0,
                  transition: 'ease opacity 500ms'
                });
              }

              if (!$('html').hasClass('touch')) {
                for (var i = 1; i < 100; i++) {
                  $('body, html').scrollTop($(window).scrollTop() - 1);

                  if ($(window).scrollTop() <= $currentSection.offset().top) {
                    scrollableFlag = true;
                    setTimeout(function () {
                      $(window).trigger('section.scroll.change.header.color');
                      scrollableFlag = false;
                    }, 500);
                    break;
                  }
                }
              }
            } // Change Dots Active Class


            self.changeDotsActiveState();
            return;
          }
        } // For full height sections


        if (!flag && !scrollableFlag) {
          if (wheelDirection || touchDirection == 'up') {
            if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
              return false;
            } // Change Section Active Class


            self.changeSectionActiveState($nextSection);
            setTimeout(function () {
              // Move to the next section
              self.moveTo($nextSection.offset().top);
            }, 150);
          } else {
            if (self.getCurrentIndex() == 0) {
              return false;
            } // Change Section Active Class


            self.changeSectionActiveState($nextSection);

            if ($nextSection.height() > $(window).height()) {
              // Move to the next section
              self.moveTo($currentSection.offset().top - $(window).height());
            } else {
              setTimeout(function () {
                // Move to the next section
                self.moveTo($nextSection.offset().top);
              }, 150);
            }
          } // Change Dots Active Class


          self.changeDotsActiveState();
          self.$header.css({
            opacity: 0,
            transition: 'ease opacity 500ms'
          }); // Style next section

          $nextSection.css({
            position: 'relative',
            opacity: 1,
            'z-index': 1,
            transform: 'translate3d(0,0,0) scale(1)'
          }); // Style previous section

          $currentSection.css({
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            opacity: 0,
            'z-index': 0,
            transform: 'translate3d(0,0,-10px) scale(0.7)',
            transition: 'ease transform 600ms, ease opacity 600ms'
          });
          setTimeout(function () {
            $currentSection.css({
              position: 'relative',
              opacity: 1,
              transform: 'translate3d(0,0,-10px) scale(1)'
            });
            $(window).trigger('section.scroll.change.header.color');
            setTimeout(function () {
              flag = false;
            }, 500);
          }, 1000);
          flag = true;
        }

        return;
      }); // Dots Navigation

      if (this.options.dotsNav) {
        self.dotsNavigation();
      } // First Load


      setTimeout(function () {
        if ($(window.location.hash).get(0)) {
          self.moveTo($(window.location.hash).parent().offset().top);
          self.changeSectionActiveState($(window.location.hash)); // Change Dots Active Class

          self.changeDotsActiveState();
          self.updateHash(true);
        } else {
          var hash = window.location.hash,
              index = hash.replace('#', '');

          if (!hash) {
            index = 1;
          }

          self.moveTo($('.section-wrapper').eq(index - 1).offset().top);
          self.changeSectionActiveState($('.section-wrapper').eq(index - 1).find('.section-scroll')); // Change Dots Active Class

          self.changeDotsActiveState();
          self.updateHash(true);
        }

        $(window).trigger('section.scroll.ready');
        $(window).trigger('section.scroll.change.header.color');
      }, 500);
      return this;
    },
    updateSectionsHeight: function updateSectionsHeight() {
      var self = this;
      $('.section-scroll').css({
        height: ''
      });
      $('.section-scroll').each(function () {
        if ($(this).outerHeight() < $(window).height() + 3) {
          $(this).css({
            height: '100vh'
          });
        } else {
          $(this).addClass('section-scroll-scrollable');
        }
      }); // Set the section wrapper height

      $('.section-wrapper').each(function () {
        $(this).height($(this).find('.section-scroll').outerHeight());
      });
      return this;
    },
    updateHash: function updateHash(first_load) {
      var self = this;

      if (!window.location.hash) {
        window.location.hash = 1;
      } else {
        if (!first_load) {
          var $section = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll'),
              section_id = $section.attr('id') ? $section.attr('id') : $section.parent().index() + 1;
          window.location.hash = section_id;
        }
      }

      return this;
    },
    getCurrentIndex: function getCurrentIndex() {
      var self = this,
          currentIndex = 0;
      currentIndex = $('.section-wrapper.active').index();
      return currentIndex;
    },
    moveTo: function moveTo($scrollTopValue, first_load) {
      var self = this;
      $('body, html').animate({
        scrollTop: $scrollTopValue
      }, 1000, 'easeOutQuint');
      setTimeout(function () {
        self.updateHash();
      }, 500);
      return this;
    },
    getNextSection: function getNextSection(wheelDirection, touchDirection) {
      var self = this,
          $nextSection = ''; // Scroll Direction

      if (wheelDirection || touchDirection == 'up') {
        $nextSection = $('.section-wrapper').eq(self.getCurrentIndex() + 1).find('.section-scroll');
      } else {
        $nextSection = $('.section-wrapper').eq(self.getCurrentIndex() - 1).find('.section-scroll');
      }

      return $nextSection;
    },
    changeSectionActiveState: function changeSectionActiveState($nextSection) {
      var self = this;
      $('.section-wrapper').removeClass('active');
      $nextSection.parent().addClass('active');
      return this;
    },
    changeDotsActiveState: function changeDotsActiveState() {
      var self = this;
      $('.section-scroll-dots-navigation > ul > li').removeClass('active');
      $('.section-scroll-dots-navigation > ul > li').eq(self.getCurrentIndex()).addClass('active');
      return this;
    },
    dotsNavigation: function dotsNavigation() {
      var self = this;
      var dotsNav = $('<div class="section-scroll-dots-navigation"><ul class="list list-unstyled"></ul></div>'),
          currentSectionIndex = self.getCurrentIndex();

      if (self.options.dotsClass) {
        dotsNav.addClass(self.options.dotsClass);
      }

      for (var i = 0; i < $('.section-scroll').length; i++) {
        var title = $('.section-wrapper').eq(i).find('.section-scroll').data('section-scroll-title');
        dotsNav.find('> ul').append('<li' + (currentSectionIndex == i ? ' class="active"' : '') + '><a href="#' + i + '" data-nav-id="' + i + '"><span>' + title + '</span></a></li>');
      }

      $('.body').append(dotsNav);
      dotsNav.find('a[data-nav-id]').on('click touchstart', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.section-scroll').css({
          opacity: 0,
          transition: 'ease opacity 300ms'
        });
        self.$header.css({
          opacity: 0,
          transition: 'ease opacity 500ms'
        });
        setTimeout(function () {
          self.moveTo($('.section-wrapper').eq($this.data('nav-id')).offset().top);
          $('.section-wrapper').removeClass('active');
          $('.section-wrapper').eq($this.data('nav-id')).addClass('active');
          $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').css({
            opacity: 1
          });
          setTimeout(function () {
            $('.section-scroll').css({
              opacity: 1
            });
            $(window).trigger('section.scroll.change.header.color');
          }, 500);

          if ($(window).width() > 991) {
            self.changeDotsActiveState();
          }
        }, 500);
      });
      return this;
    },
    events: function events() {
      var self = this;
      $(window).on('section.scroll.ready', function () {
        $(window).scrollTop(0);
      });
      $(window).on('section.scroll.change.header.color', function () {
        var headerColor = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').data('section-scroll-header-color');
        $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
        $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
        $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor); // Change Logo

        if (self.options.changeHeaderLogo && headerColor != undefined) {
          if (headerColor == 'light') {
            $('#header .header-logo img').attr('src', self.options.headerLogoLight);
          } else if (headerColor == 'dark') {
            $('#header .header-logo img').attr('src', self.options.headerLogoDark);
          }
        }

        self.$header.css({
          opacity: 1
        });
      });
      $(document).ready(function () {
        $(window).afterResize(function () {
          self.updateSectionsHeight();

          if ($(window).width() < 992) {
            $('html').removeClass('overflow-hidden');
          }
        });
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSectionScroll: PluginSectionScroll
  }); // jquery plugin

  $.fn.themePluginSectionScroll = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSectionScroll($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Sort

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sort';

  var PluginSort = function PluginSort($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSort.defaults = {
    useHash: true,
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
    filter: '*',
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    },
    stagger: 30,
    isOriginLeft: $('html').attr('dir') == 'rtl' ? false : true
  };
  PluginSort.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSort.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.isotope)) {
        return this;
      }

      var self = this,
          $source = this.options.wrapper,
          $destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]'),
          $window = $(window);

      if ($destination.get(0)) {
        self.$source = $source;
        self.$destination = $destination;
        self.$loader = false;
        self.setParagraphHeight($destination);

        if (self.$destination.parents('.sort-destination-loader').get(0)) {
          self.$loader = self.$destination.parents('.sort-destination-loader');
          self.createLoader();
        }

        $destination.attr('data-filter', '*');
        $destination.one('layoutComplete', function (event, laidOutItems) {
          self.removeLoader(); // If has data-plugin-sticky on the page we need recalculate sticky position

          if ($('[data-plugin-sticky]').length) {
            setTimeout(function () {
              $('[data-plugin-sticky]').each(function () {
                $(this).data('__sticky').build();
                $(window).trigger('resize');
              });
            }, 500);
          }
        }); // IE10/11 fix

        if ($('html').hasClass('ie10') || $('html').hasClass('ie11')) {
          var padding = parseInt(self.options.wrapper.children().css('padding-left')) + parseInt(self.options.wrapper.children().css('padding-right'));
        }

        $destination.waitForImages(function () {
          $destination.isotope(self.options);
          self.events();
        });
        setTimeout(function () {
          self.removeLoader();
        }, 3000);
      }

      return this;
    },
    events: function events() {
      var self = this,
          filter = null,
          $window = $(window);
      self.$source.find('a').click(function (e) {
        e.preventDefault();
        filter = $(this).parent().data('option-value');
        self.setFilter(filter);

        if (e.originalEvent) {
          self.$source.trigger('filtered');
        }

        return this;
      });
      self.$destination.trigger('filtered');
      self.$source.trigger('filtered');

      if (self.options.useHash) {
        self.hashEvents();
      }

      $window.on('resize sort.resize', function () {
        setTimeout(function () {
          self.$destination.isotope('layout');
        }, 300);
      });
      setTimeout(function () {
        $window.trigger('sort.resize');
      }, 300);
      return this;
    },
    setFilter: function setFilter(filter) {
      var self = this,
          page = false,
          currentFilter = filter;
      self.$source.find('.active').removeClass('active');
      self.$source.find('li[data-option-value="' + filter + '"], li[data-option-value="' + filter + '"] > a').addClass('active');
      self.options.filter = currentFilter;

      if (self.$destination.attr('data-current-page')) {
        currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
      }

      self.$destination.attr('data-filter', filter).isotope({
        filter: currentFilter
      }).one('arrangeComplete', function (event, filteredItems) {
        if (self.options.useHash) {
          if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
            window.location.hash = self.options.filter.replace('.', '');
          }
        }

        $(window).trigger('scroll');
      }).trigger('filtered');
      return this;
    },
    hashEvents: function hashEvents() {
      var self = this,
          hash = null,
          hashFilter = null,
          initHashFilter = '.' + location.hash.replace('#', ''); // Check if has scroll to section trough URL hash and prevent the sort plugin from show nothing

      if ($(location.hash).length) {
        initHashFilter = '.';
      }

      if (initHashFilter != '.' && initHashFilter != '.*') {
        self.setFilter(initHashFilter);
      }

      $(window).on('hashchange', function (e) {
        hashFilter = '.' + location.hash.replace('#', '');
        hash = hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter;
        self.setFilter(hash);
      });
      return this;
    },
    setParagraphHeight: function setParagraphHeight() {
      var self = this,
          minParagraphHeight = 0,
          paragraphs = $('span.thumb-info-caption p', self.$destination);
      paragraphs.each(function () {
        if ($(this).height() > minParagraphHeight) {
          minParagraphHeight = $(this).height() + 10;
        }
      });
      paragraphs.height(minParagraphHeight);
      return this;
    },
    createLoader: function createLoader() {
      var self = this;
      var loaderTemplate = ['<div class="bounce-loader">', '<div class="bounce1"></div>', '<div class="bounce2"></div>', '<div class="bounce3"></div>', '</div>'].join('');
      self.$loader.append(loaderTemplate);
      return this;
    },
    removeLoader: function removeLoader() {
      var self = this;

      if (self.$loader) {
        self.$loader.removeClass('sort-destination-loader-showing');
        setTimeout(function () {
          self.$loader.addClass('sort-destination-loader-loaded');
        }, 300);
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSort: PluginSort
  }); // jquery plugin

  $.fn.themePluginSort = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSort($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Star Rating

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__starrating';

  var PluginStarRating = function PluginStarRating($el, opts) {
    return this.initialize($el, opts);
  };

  PluginStarRating.defaults = {
    theme: 'krajee-fas',
    color: 'primary',
    showClear: false,
    showCaption: false
  };
  PluginStarRating.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginStarRating.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.rating)) {
        return this;
      }

      var self = this;
      self.options.wrapper.rating(self.options);
      self.options.wrapper.parents('.rating-container').addClass('rating-' + self.options.color);

      if (self.options.extraClass) {
        self.options.wrapper.parents('.rating-container').addClass(self.options.extraClass);
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginStarRating: PluginStarRating
  }); // jquery plugin

  $.fn.themePluginStarRating = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginStarRating($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Sticky

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sticky';

  var PluginSticky = function PluginSticky($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSticky.defaults = {
    minWidth: 991,
    activeClass: 'sticky-active'
  };
  PluginSticky.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.pin)) {
        return this;
      }

      var self = this,
          $window = $(window);
      self.options.wrapper.pin(self.options);

      if (self.options.wrapper.hasClass('sticky-wrapper-transparent')) {
        self.options.wrapper.parent().addClass('position-absolute w-100');
      }

      $window.afterResize(function () {
        self.options.wrapper.removeAttr('style').removeData('pin');
        self.options.wrapper.pin(self.options);
        $window.trigger('scroll');
      }); // Change Logo Src

      if (self.options.wrapper.find('img').attr('data-change-src')) {
        var $logo = self.options.wrapper.find('img'),
            logoSrc = $logo.attr('src'),
            logoNewSrc = $logo.attr('data-change-src');

        self.changeLogoSrc = function (activate) {
          if (activate) {
            $logo.attr('src', logoNewSrc);
          } else {
            $logo.attr('src', logoSrc);
          }
        };
      }

      return this;
    },
    events: function events() {
      var self = this,
          $window = $(window),
          $logo = self.options.wrapper.find('img'),
          sticky_activate_flag = true,
          sticky_deactivate_flag = false,
          class_to_check = self.options.wrapper.hasClass('sticky-wrapper-effect-1') ? 'sticky-effect-active' : 'sticky-active';
      $window.on('scroll sticky.effect.active', function () {
        if (self.options.wrapper.hasClass(class_to_check)) {
          if (sticky_activate_flag) {
            if ($logo.attr('data-change-src')) {
              self.changeLogoSrc(true);
            }

            sticky_activate_flag = false;
            sticky_deactivate_flag = true;
          }
        } else {
          if (sticky_deactivate_flag) {
            if ($logo.attr('data-change-src')) {
              self.changeLogoSrc(false);
            }

            sticky_deactivate_flag = false;
            sticky_activate_flag = true;
          }
        }
      });
      var is_backing = false;

      if (self.options.stickyStartEffectAt) {
        // First Load
        if (self.options.stickyStartEffectAt < $window.scrollTop()) {
          self.options.wrapper.addClass('sticky-effect-active');
          $window.trigger('sticky.effect.active');
        }

        $window.on('scroll', function () {
          if (self.options.stickyStartEffectAt < $window.scrollTop()) {
            self.options.wrapper.addClass('sticky-effect-active');
            is_backing = true;
            $window.trigger('sticky.effect.active');
          } else {
            if (is_backing) {
              self.options.wrapper.find('.sticky-body').addClass('position-fixed');
              is_backing = false;
            }

            if ($window.scrollTop() == 0) {
              self.options.wrapper.find('.sticky-body').removeClass('position-fixed');
            }

            self.options.wrapper.removeClass('sticky-effect-active');
          }
        });
      } // Refresh Sticky Plugin if click in a data-toggle="collapse"


      if ($('[data-bs-toggle="collapse"]').get(0)) {
        $('[data-bs-toggle="collapse"]').on('click', function () {
          setTimeout(function () {
            self.build();
            $(window).trigger('scroll');
          }, 1000);
        });
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSticky: PluginSticky
  }); // jquery plugin

  $.fn.themePluginSticky = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSticky($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Toggle

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__toggle';

  var PluginToggle = function PluginToggle($el, opts) {
    return this.initialize($el, opts);
  };

  PluginToggle.defaults = {
    duration: 350,
    isAccordion: false
  };
  PluginToggle.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $wrapper = this.options.wrapper,
          $items = $wrapper.find('> .toggle'),
          $el = null;
      $items.each(function () {
        $el = $(this);

        if ($el.hasClass('active')) {
          $el.find('> p').addClass('preview-active');
          $el.find('> .toggle-content').slideDown(self.options.duration);
        }

        self.events($el);
      });

      if (self.options.isAccordion) {
        self.options.duration = self.options.duration / 2;
      }

      return this;
    },
    events: function events($el) {
      var self = this,
          previewParCurrentHeight = 0,
          previewParAnimateHeight = 0,
          toggleContent = null;
      $el.find('> label, > .toggle-title').click(function (e) {
        var $this = $(this),
            parentSection = $this.parent(),
            parentWrapper = $this.parents('.toggle'),
            previewPar = null,
            closeElement = null;

        if (self.options.isAccordion && typeof e.originalEvent != 'undefined') {
          closeElement = parentWrapper.find('.toggle.active > label, .toggle.active > .toggle-title');

          if (closeElement[0] == $this[0]) {
            return;
          }
        }

        parentSection.toggleClass('active'); // Preview Paragraph

        if (parentSection.find('> p').get(0)) {
          previewPar = parentSection.find('> p');
          previewParCurrentHeight = previewPar.css('height');
          previewPar.css('height', 'auto');
          previewParAnimateHeight = previewPar.css('height');
          previewPar.css('height', previewParCurrentHeight);
        } // Content


        toggleContent = parentSection.find('> .toggle-content');

        if (parentSection.hasClass('active')) {
          $(previewPar).animate({
            height: previewParAnimateHeight
          }, self.options.duration, function () {
            $(this).addClass('preview-active');
          });
          toggleContent.slideDown(self.options.duration, function () {
            if (closeElement) {
              closeElement.trigger('click');
            }
          });
        } else {
          $(previewPar).animate({
            height: 0
          }, self.options.duration, function () {
            $(this).removeClass('preview-active');
          });
          toggleContent.slideUp(self.options.duration);
        }
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginToggle: PluginToggle
  }); // jquery plugin

  $.fn.themePluginToggle = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginToggle($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Tweets

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__tweets';

  var PluginTweets = function PluginTweets($el, opts) {
    return this.initialize($el, opts);
  };

  PluginTweets.defaults = {
    username: null,
    count: 2,
    URL: 'php/twitter-feed.php',
    iconColor: false
  };
  PluginTweets.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (this.options.username == null || this.options.username == '') {
        return this;
      }

      var self = this,
          $wrapper = this.options.wrapper;
      $.ajax({
        type: 'GET',
        data: {
          twitter_screen_name: self.options.username,
          tweets_to_display: self.options.count,
          icon_color: self.options.iconColor
        },
        url: self.options.URL
      }).done(function (html) {
        $wrapper.html(html).find('a').attr('target', '_blank');
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginTweets: PluginTweets
  }); // jquery plugin

  $.fn.themePluginTweets = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTweets($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Validation

(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginValidation: {
      defaults: {
        formClass: 'needs-validation',
        validator: {
          highlight: function highlight(element) {
            $(element).addClass('is-invalid').removeClass('is-valid').parent().removeClass('has-success').addClass('has-danger');
          },
          success: function success(label, element) {
            $(element).removeClass('is-invalid').addClass('is-valid').parent().removeClass('has-danger').addClass('has-success').find('label.error').remove();
          },
          errorPlacement: function errorPlacement(error, element) {
            if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
              error.appendTo(element.parent().parent());
            } else {
              error.insertAfter(element);
            }
          }
        }
      },
      initialize: function initialize(opts) {
        initialized = true;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this;

        if (!$.isFunction($.validator)) {
          return this;
        }

        self.setMessageGroups();
        $.validator.setDefaults(self.options.validator);
        $('.' + self.options.formClass).validate();
        return this;
      },
      setMessageGroups: function setMessageGroups() {
        $('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function () {
          var message = $(this).data('msg-required');
          $(this).find('input').attr('data-msg-required', message);
        });
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Video Background

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__videobackground';

  var PluginVideoBackground = function PluginVideoBackground($el, opts) {
    return this.initialize($el, opts);
  };

  PluginVideoBackground.defaults = {
    overlay: false,
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    className: 'vide-video-wrapper'
  };
  PluginVideoBackground.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
        path: this.$el.data('video-path'),
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;

      if (!$.isFunction($.fn.vide) || !this.options.path) {
        return this;
      }

      if (this.options.overlay) {
        var overlayClass = this.options.overlayClass;
        this.options.wrapper.prepend($('<div />').addClass(overlayClass));
      }

      this.options.wrapper.vide(this.options.path, this.options).first().css('z-index', 0); // Change Poster

      self.changePoster(); // Initialize Vide inside a carousel

      if (self.options.wrapper.closest('.owl-carousel').get(0)) {
        self.options.wrapper.closest('.owl-carousel').on('initialized.owl.carousel', function () {
          $('.owl-item.cloned').find('[data-plugin-video-background] .vide-video-wrapper').remove();
          $('.owl-item.cloned').find('[data-plugin-video-background]').vide(self.options.path, self.options).first().css('z-index', 0);
          self.changePoster(self.options.wrapper.closest('.owl-carousel'));
        });
      } // Play Video Button


      var $playButton = self.options.wrapper.find('.video-background-play');

      if ($playButton.get(0)) {
        var $playWrapper = self.options.wrapper.find('.video-background-play-wrapper');
        self.options.wrapper.find('.video-background-play').on('click', function (e) {
          e.preventDefault();

          if ($playWrapper.get(0)) {
            $playWrapper.animate({
              opacity: 0
            }, 300, function () {
              $playWrapper.parent().height($playWrapper.outerHeight());
              $playWrapper.remove();
            });
          } else {
            $playButton.animate({
              opacity: 0
            }, 300, function () {
              $playButton.remove();
            });
          }

          setTimeout(function () {
            self.options.wrapper.find('video')[0].play();
          }, 500);
        });
      }

      $(window).trigger('vide.video.inserted.on.dom');
      return this;
    },
    changePoster: function changePoster($carousel) {
      var self = this; // If it's inside carousel

      if ($carousel && self.options.changePoster) {
        $carousel.find('.owl-item [data-plugin-video-background] .vide-video-wrapper').css({
          'background-image': 'url(' + self.options.changePoster + ')'
        });
        return this;
      }

      if (self.options.changePoster) {
        self.options.wrapper.find('.vide-video-wrapper').css({
          'background-image': 'url(' + self.options.changePoster + ')'
        });
      }

      return this;
    },
    events: function events() {
      var self = this; // Initialize

      self.options.wrapper.on('video.background.initialize', function () {
        self.build();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginVideoBackground: PluginVideoBackground
  }); // jquery plugin

  $.fn.themePluginVideoBackground = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginVideoBackground($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Account

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Account: {
      defaults: {
        wrapper: $('#headerAccount')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      events: function events() {
        var self = this;
        $(window).on('load', function () {
          $(document).ready(function () {
            setTimeout(function () {
              self.$wrapper.find('input').on('focus', function () {
                self.$wrapper.addClass('open');
                $(document).mouseup(function (e) {
                  if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
                    self.$wrapper.removeClass('open');
                  }
                });
              });
            }, 1500);
          });
        });
        $('#headerSignUp').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
          self.$wrapper.find('.signup-form input:first').focus();
        });
        $('#headerSignIn').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
          self.$wrapper.find('.signin-form input:first').focus();
        });
        $('#headerRecover').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
          self.$wrapper.find('.recover-form input:first').focus();
        });
        $('#headerRecoverCancel').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
          self.$wrapper.find('.signin-form input:first').focus();
        });
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Nav

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Nav: {
      defaults: {
        wrapper: $('#mainNav'),
        scrollDelay: 600,
        scrollAnimation: 'easeOutQuad'
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        var self = this,
            $html = $('html'),
            $header = $('#header'),
            $headerNavMain = $('#header .header-nav-main'),
            thumbInfoPreview; // Preview Thumbs

        if (self.$wrapper.find('a[data-thumb-preview]').length) {
          self.$wrapper.find('a[data-thumb-preview]').each(function () {
            thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview').append($('<span />').addClass('thumb-info-wrapper').append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')));
            $(this).append(thumbInfoPreview);
          });
        } // Side Header / Side Header Hamburguer Sidebar (Reverse Dropdown)


        if ($html.hasClass('side-header') || $html.hasClass('side-header-hamburguer-sidebar')) {
          // Side Header Right / Side Header Hamburguer Sidebar Right
          if ($html.hasClass('side-header-right') || $html.hasClass('side-header-hamburguer-sidebar-right')) {
            if (!$html.hasClass('side-header-right-no-reverse')) {
              $header.find('.dropdown-submenu').addClass('dropdown-reverse');
            }
          }
        } else {
          // Reverse
          var checkReverseFlag = false;

          self.checkReverse = function () {
            if (!checkReverseFlag) {
              self.$wrapper.find('.dropdown, .dropdown-submenu').removeClass('dropdown-reverse');
              self.$wrapper.find('.dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)').each(function () {
                if (!$(this).find('.dropdown-menu').visible(false, true, 'horizontal')) {
                  $(this).addClass('dropdown-reverse');
                }
              });
              checkReverseFlag = true;
            }
          };

          $(window).on('resize', function () {
            checkReverseFlag = false;
          });
          $header.on('mouseover', function () {
            self.checkReverse();
          });
        } // Clone Items


        if ($headerNavMain.hasClass('header-nav-main-clone-items')) {
          $headerNavMain.find('nav > ul > li > a').each(function () {
            var parent = $(this).parent(),
                clone = $(this).clone(),
                clone2 = $(this).clone(),
                wrapper = $('<span class="wrapper-items-cloned"></span>'); // Config Classes

            $(this).addClass('item-original');
            clone2.addClass('item-two'); // Insert on DOM

            parent.prepend(wrapper);
            wrapper.append(clone).append(clone2);
          });
        } // Floating


        if ($('#header.header-floating-icons').length && $(window).width() > 991) {
          var menuFloatingAnim = {
            $menuFloating: $('#header.header-floating-icons .header-container > .header-row'),
            build: function build() {
              var self = this;
              self.init();
            },
            init: function init() {
              var self = this,
                  divisor = 0;
              $(window).scroll(function () {
                var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()),
                    st = $(this).scrollTop();
                divisor = $(document).height() / $(window).height();
                self.$menuFloating.find('.header-column > .header-row').css({
                  transform: 'translateY( calc(' + scrollPercent + 'vh - ' + st / divisor + 'px) )'
                });
              });
            }
          };
          menuFloatingAnim.build();
        } // Slide


        if ($('.header-nav-links-vertical-slide').length) {
          var slideNavigation = {
            $mainNav: $('#mainNav'),
            $mainNavItem: $('#mainNav li'),
            build: function build() {
              var self = this;
              self.menuNav();
            },
            menuNav: function menuNav() {
              var self = this;
              self.$mainNavItem.on('click', function (e) {
                var currentMenuItem = $(this),
                    currentMenu = $(this).parent(),
                    nextMenu = $(this).find('ul').first(),
                    prevMenu = $(this).closest('.next-menu'),
                    isSubMenu = currentMenuItem.hasClass('dropdown') || currentMenuItem.hasClass('dropdown-submenu'),
                    isBack = currentMenuItem.hasClass('back-button'),
                    nextMenuHeightDiff = nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() - nextMenu.outerHeight(),
                    prevMenuHeightDiff = prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() - prevMenu.outerHeight();

                if (isSubMenu) {
                  currentMenu.addClass('next-menu');
                  nextMenu.addClass('visible');
                  currentMenu.css({
                    overflow: 'visible',
                    'overflow-y': 'visible'
                  });

                  if (nextMenuHeightDiff > 0) {
                    nextMenu.css({
                      overflow: 'hidden',
                      'overflow-y': 'scroll'
                    });
                  }

                  for (i = 0; i < nextMenu.find('> li').length; i++) {
                    if (nextMenu.outerHeight() < $('.header-row-side-header').outerHeight() - 100) {
                      nextMenu.css({
                        height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
                      });
                    }
                  }

                  nextMenu.css({
                    'padding-top': nextMenuHeightDiff + 'px'
                  });
                }

                if (isBack) {
                  currentMenu.parent().parent().removeClass('next-menu');
                  currentMenu.removeClass('visible');

                  if (prevMenuHeightDiff > 0) {
                    prevMenu.css({
                      overflow: 'hidden',
                      'overflow-y': 'scroll'
                    });
                  }
                }

                e.stopPropagation();
              });
            }
          };
          $(window).trigger('resize');

          if ($(window).width() > 991) {
            slideNavigation.build();
          }

          $(document).ready(function () {
            $(window).afterResize(function () {
              if ($(window).width() > 991) {
                slideNavigation.build();
              }
            });
          });
        } // Header Nav Main Mobile Dark


        if ($('.header-nav-main-mobile-dark').length) {
          $('#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)').addClass('header-no-border-bottom');
        } // Keyboard Navigation / Accessibility


        if ($(window).width() > 991) {
          var focusFlag = false;
          $header.find('.header-nav-main nav > ul > li > a').on('focus', function () {
            if ($(window).width() > 991) {
              if (!focusFlag) {
                focusFlag = true;
                $(this).trigger('blur');
                self.focusMenuWithChildren();
              }
            }
          });
        }

        return this;
      },
      focusMenuWithChildren: function focusMenuWithChildren() {
        // Get all the link elements within the primary menu.
        var links,
            i,
            len,
            menu = document.querySelector('html:not(.side-header):not(.side-header-hamburguer-sidebar):not(.side-header-overlay-full-screen) .header-nav-main > nav');

        if (!menu) {
          return false;
        }

        links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

        for (i = 0, len = links.length; i < len; i++) {
          links[i].addEventListener('focus', toggleFocus, true);
          links[i].addEventListener('blur', toggleFocus, true);
        } //Sets or removes the .focus class on an element.


        function toggleFocus() {
          var self = this; // Move up through the ancestors of the current link until we hit .primary-menu.

          while (-1 === self.className.indexOf('header-nav-main')) {
            // On li elements toggle the class .focus.
            if ('li' === self.tagName.toLowerCase()) {
              if (-1 !== self.className.indexOf('accessibility-open')) {
                self.className = self.className.replace(' accessibility-open', '');
              } else {
                self.className += ' accessibility-open';
              }
            }

            self = self.parentElement;
          }
        }
      },
      events: function events() {
        var self = this,
            $html = $('html'),
            $header = $('#header'),
            $window = $(window),
            headerBodyHeight = $('.header-body').outerHeight();

        if ($header.hasClass('header')) {
          $header = $('.header');
        }

        $header.find('a[href="#"]').on('click', function (e) {
          e.preventDefault();
        }); // Mobile Arrows

        if ($html.hasClass('side-header-hamburguer-sidebar')) {
          $header.find('.dropdown-toggle, .dropdown-submenu > a').append('<i class="fas fa-chevron-down fa-chevron-right"></i>');
        } else {
          $header.find('.dropdown-toggle, .dropdown-submenu > a').append('<i class="fas fa-chevron-down"></i>');
        }

        $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on('click', function (e) {
          e.preventDefault();

          if ($window.width() < 992) {
            $(this).closest('li').toggleClass('open'); // Adjust Header Body Height

            var height = $header.hasClass('header-effect-shrink') && $html.hasClass('sticky-header-active') ? theme.StickyHeader.options.stickyHeaderContainerHeight : headerBodyHeight;
            $('.header-body').animate({
              height: $('.header-nav-main nav').outerHeight(true) + height + 10
            }, 0);
          }
        });
        $header.find('li a.active').addClass('current-page-active'); // Add Open Class

        $header.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on('click', function (e) {
          if (!$('html').hasClass('side-header-hamburguer-sidebar') && $window.width() > 991) {
            e.preventDefault();
            e.stopPropagation();
          }

          if ($window.width() > 991) {
            e.preventDefault();
            e.stopPropagation();
            $header.find('li a.active').removeClass('active');

            if ($(this).prop('tagName') == 'I') {
              $(this).parent().addClass('active');
            } else {
              $(this).addClass('active');
            }

            if (!$(this).closest('li').hasClass('open')) {
              var $li = $(this).closest('li'),
                  isSub = false;

              if ($(this).prop('tagName') == 'I') {
                $('#header .dropdown.open').removeClass('open');
                $('#header .dropdown-menu .dropdown-submenu.open').removeClass('open');
              }

              if ($(this).parent().hasClass('dropdown-submenu')) {
                isSub = true;
              }

              $(this).closest('.dropdown-menu').find('.dropdown-submenu.open').removeClass('open');
              $(this).parent('.dropdown').parent().find('.dropdown.open').removeClass('open');

              if (!isSub) {
                $(this).parent().find('.dropdown-submenu.open').removeClass('open');
              }

              $li.addClass('open');
              $(document).off('click.nav-click-to-open').on('click.nav-click-to-open', function (e) {
                if (!$li.is(e.target) && $li.has(e.target).length === 0) {
                  $li.removeClass('open');
                  $li.parents('.open').removeClass('open');
                  $header.find('li a.active').removeClass('active');
                  $header.find('li a.current-page-active').addClass('active');
                }
              });
            } else {
              $(this).closest('li').removeClass('open');
              $header.find('li a.active').removeClass('active');
              $header.find('li a.current-page-active').addClass('active');
            }

            $window.trigger({
              type: 'resize',
              from: 'header-nav-click-to-open'
            });
          }
        }); // Collapse Nav

        $header.find('[data-collapse-nav]').on('click', function (e) {
          $(this).parents('.collapse').removeClass('show');
        }); // Top Features

        $header.find('.header-nav-features-toggle').on('click', function (e) {
          e.preventDefault();
          var $toggleParent = $(this).parent();

          if (!$(this).siblings('.header-nav-features-dropdown').hasClass('show')) {
            var $dropdown = $(this).siblings('.header-nav-features-dropdown');
            $('.header-nav-features-dropdown.show').removeClass('show');
            $dropdown.addClass('show');
            $(document).off('click.header-nav-features-toggle').on('click.header-nav-features-toggle', function (e) {
              if (!$toggleParent.is(e.target) && $toggleParent.has(e.target).length === 0) {
                $('.header-nav-features-dropdown.show').removeClass('show');
              }
            });

            if ($(this).attr('data-focus')) {
              $('#' + $(this).attr('data-focus')).focus();
            }
          } else {
            $(this).siblings('.header-nav-features-dropdown').removeClass('show');
          }
        }); // Hamburguer Menu

        var $hamburguerMenuBtn = $('.hamburguer-btn:not(.side-panel-toggle)'),
            $hamburguerSideHeader = $('#header.side-header, #header.side-header-overlay-full-screen');
        $hamburguerMenuBtn.on('click', function () {
          if ($(this).attr('data-set-active') != 'false') {
            $(this).toggleClass('active');
          }

          $hamburguerSideHeader.toggleClass('side-header-hide');
          $html.toggleClass('side-header-hide');
          $window.trigger('resize');
        });
        $('.hamburguer-close:not(.side-panel-toggle)').on('click', function () {
          $('.hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)').trigger('click');
        }); // Set Header Body Height when open mobile menu

        $('.header-nav-main nav').on('show.bs.collapse', function () {
          $(this).removeClass('closed'); // Add Mobile Menu Opened Class

          $('html').addClass('mobile-menu-opened');
          $('.header-body').animate({
            height: $('.header-body').outerHeight() + $('.header-nav-main nav').outerHeight(true) + 10
          }); // Header Below Slider / Header Bottom Slider - Scroll to menu position

          if ($('#header').is('.header-bottom-slider, .header-below-slider') && !$('html').hasClass('sticky-header-active')) {
            self.scrollToTarget($('#header'), 0);
          }
        }); // Set Header Body Height when collapse mobile menu

        $('.header-nav-main nav').on('hide.bs.collapse', function () {
          $(this).addClass('closed'); // Remove Mobile Menu Opened Class

          $('html').removeClass('mobile-menu-opened');
          $('.header-body').animate({
            height: $('.header-body').outerHeight() - $('.header-nav-main nav').outerHeight(true)
          }, function () {
            $(this).height('auto');
          });
        }); // Header Effect Shrink - Adjust header body height on mobile

        $window.on('stickyHeader.activate', function () {
          if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
            if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
              $('.header-body').animate({
                height: $('.header-nav-main nav').outerHeight(true) + theme.StickyHeader.options.stickyHeaderContainerHeight + ($('.header-nav-bar').length ? $('.header-nav-bar').outerHeight() : 0)
              });
            }
          }
        });
        $window.on('stickyHeader.deactivate', function () {
          if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
            if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
              $('.header-body').animate({
                height: headerBodyHeight + $('.header-nav-main nav').outerHeight(true) + 10
              });
            }
          }
        }); // Remove Open Class on Resize

        $window.on('resize.removeOpen', function (e) {
          if (e.from == 'header-nav-click-to-open') {
            return;
          }

          setTimeout(function () {
            if ($window.width() > 991) {
              $header.find('.dropdown.open').removeClass('open');
            }
          }, 100);
        }); // Side Header - Change value of initial header body height

        $(document).ready(function () {
          if ($window.width() > 991) {
            var flag = false;
            $window.on('resize', function (e) {
              if (e.from == 'header-nav-click-to-open') {
                return;
              }

              $header.find('.dropdown.open').removeClass('open');

              if ($window.width() < 992 && flag == false) {
                headerBodyHeight = $('.header-body').outerHeight();
                flag = true;
                setTimeout(function () {
                  flag = false;
                }, 500);
              }
            });
          }
        }); // Side Header - Set header height on mobile

        if ($html.hasClass('side-header')) {
          if ($window.width() < 992) {
            $header.css({
              height: $('.header-body .header-container').outerHeight() + (parseInt($('.header-body').css('border-top-width')) + parseInt($('.header-body').css('border-bottom-width')))
            });
          }

          $(document).ready(function () {
            $window.afterResize(function () {
              if ($window.width() < 992) {
                $header.css({
                  height: $('.header-body .header-container').outerHeight() + (parseInt($('.header-body').css('border-top-width')) + parseInt($('.header-body').css('border-bottom-width')))
                });
              } else {
                $header.css({
                  height: ''
                });
              }
            });
          });
        } // Anchors Position


        if ($('[data-hash]').length) {
          $('[data-hash]').on('mouseover', function () {
            var $this = $(this);

            if (!$this.data('__dataHashBinded')) {
              var target = $this.attr('href'),
                  offset = $this.is("[data-hash-offset]") ? $this.data('hash-offset') : 0,
                  delay = $this.is("[data-hash-delay]") ? $this.data('hash-delay') : 0,
                  force = $this.is("[data-hash-force]") ? true : false,
                  windowWidth = $(window).width(); // Hash Offset SM

              if ($this.is("[data-hash-offset-sm]") && windowWidth > 576) {
                offset = $this.data('hash-offset-sm');
              } // Hash Offset MD


              if ($this.is("[data-hash-offset-md]") && windowWidth > 768) {
                offset = $this.data('hash-offset-md');
              } // Hash Offset LG


              if ($this.is("[data-hash-offset-lg]") && windowWidth > 992) {
                offset = $this.data('hash-offset-lg');
              } // Hash Offset XL


              if ($this.is("[data-hash-offset-xl]") && windowWidth > 1200) {
                offset = $this.data('hash-offset-xl');
              } // Hash Offset XXL


              if ($this.is("[data-hash-offset-xxl]") && windowWidth > 1400) {
                offset = $this.data('hash-offset-xxl');
              }

              if (!$(target).length) {
                target = target.split('#');
                target = '#' + target[1];
              }

              if (target.indexOf('#') != -1 && $(target).length) {
                $this.on('click', function (e) {
                  e.preventDefault();

                  if (!$(e.target).is('i') || force) {
                    setTimeout(function () {
                      // Close Collapse if open
                      $this.parents('.collapse.show').collapse('hide'); // Close Side Header

                      $hamburguerSideHeader.addClass('side-header-hide');
                      $html.addClass('side-header-hide');
                      $window.trigger('resize');
                      self.scrollToTarget(target, offset); // Data Hash Trigger Click

                      if ($this.data('hash-trigger-click')) {
                        var $clickTarget = $($this.data('hash-trigger-click')),
                            clickDelay = $this.data('hash-trigger-click-delay') ? $this.data('hash-trigger-click-delay') : 0;

                        if ($clickTarget.length) {
                          setTimeout(function () {
                            // If is a "Tabs" plugin link
                            if ($clickTarget.closest('.nav-tabs').length) {
                              new bootstrap.Tab($clickTarget[0]).show();
                            } else {
                              $clickTarget.trigger('click');
                            }
                          }, clickDelay);
                        }
                      }
                    }, delay);
                  }

                  return;
                });
              }

              $(this).data('__dataHashBinded', true);
            }
          });
        } // Floating


        if ($('#header.header-floating-icons').length) {
          $('#header.header-floating-icons [data-hash]').off().each(function () {
            var target = $(this).attr('href'),
                offset = $(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0;

            if ($(target).length) {
              $(this).on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                  scrollTop: $(target).offset().top - offset
                }, 600, 'easeOutQuad', function () {});
                return;
              });
            }
          });
        } // Side Panel Toggle


        if ($('.side-panel-toggle').length) {
          var init_html_class = $('html').attr('class');
          $('.side-panel-toggle').on('click', function (e) {
            var extra_class = $(this).data('extra-class'),
                delay = extra_class ? 100 : 0,
                isActive = $(this).data('is-active') ? $(this).data('is-active') : false;
            e.preventDefault();

            if (isActive) {
              $('html').removeClass('side-panel-open');
              $(this).data('is-active', false);
              return false;
            }

            if (extra_class) {
              $('.side-panel-wrapper').css('transition', 'none');
              $('html').removeClass().addClass(init_html_class).addClass(extra_class);
            }

            setTimeout(function () {
              $('.side-panel-wrapper').css('transition', '');
              $('html').toggleClass('side-panel-open');
            }, delay);
            $(this).data('is-active', true);
          });
          $(document).on('click', function (e) {
            if (!$(e.target).closest('.side-panel-wrapper').length && !$(e.target).hasClass('side-panel-toggle')) {
              $('.hamburguer-btn.side-panel-toggle:not(.side-panel-close)').removeClass('active');
              $('html').removeClass('side-panel-open');
              $('.side-panel-toggle').data('is-active', false);
            }
          });
        }

        return this;
      },
      scrollToTarget: function scrollToTarget(target, offset) {
        var self = this,
            targetPosition = $(target).offset().top;
        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, self.options.scrollDelay, self.options.scrollAnimation, function () {
          $('body').removeClass('scrolling'); // If by some reason the scroll finishes in a wrong position, this code will run the scrollToTarget() again until get the correct position
          // We need do it just one time to prevent infinite recursive loop at scrollToTarget() function

          if ($(target).offset().top != targetPosition) {
            $('html, body').animate({
              scrollTop: $(target).offset().top - offset
            }, 1, self.options.scrollAnimation, function () {});
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Newsletter

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Newsletter: {
      defaults: {
        wrapper: $('#newsletterForm')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if (!$.isFunction($.fn.validate)) {
          return this;
        }

        var self = this,
            $email = self.$wrapper.find('#newsletterEmail'),
            $success = $('#newsletterSuccess'),
            $error = $('#newsletterError');
        self.$wrapper.validate({
          submitHandler: function submitHandler(form) {
            $.ajax({
              type: 'POST',
              url: self.$wrapper.attr('action'),
              data: {
                'email': $email.val()
              },
              dataType: 'json',
              success: function success(data) {
                if (data.response == 'success') {
                  $success.removeClass('d-none');
                  $error.addClass('d-none');
                  $email.val('').blur().closest('.control-group').removeClass('success').removeClass('error');
                } else {
                  $error.html(data.message);
                  $error.removeClass('d-none');
                  $success.addClass('d-none');
                  $email.blur().closest('.control-group').removeClass('success').addClass('error');
                }
              }
            });
          },
          rules: {
            newsletterEmail: {
              required: true,
              email: true
            }
          },
          errorPlacement: function errorPlacement(error, element) {}
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Search

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Search: {
      defaults: {
        wrapper: $('#searchForm')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if (!$.isFunction($.fn.validate)) {
          return this;
        }

        this.$wrapper.validate({
          errorPlacement: function errorPlacement(error, element) {}
        }); // Search Reveal

        theme.fn.execOnceTroughEvent('#header', 'mouseover.search.reveal', function () {
          $('.header-nav-features-search-reveal').each(function () {
            var $el = $(this),
                $header = $('#header'),
                $html = $('html');
            $el.find('.header-nav-features-search-show-icon').on('click', function () {
              $el.addClass('show');
              $header.addClass('search-show');
              $html.addClass('search-show');
              $('#headerSearch').focus();
            });
            $el.find('.header-nav-features-search-hide-icon').on('click', function () {
              $el.removeClass('show');
              $header.removeClass('search-show');
              $html.removeClass('search-show');
            });
          });
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Sticky Header

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    StickyHeader: {
      defaults: {
        wrapper: $('#header'),
        headerBody: $('#header .header-body'),
        stickyEnabled: true,
        stickyEnableOnBoxed: true,
        stickyEnableOnMobile: false,
        stickyStartAt: 0,
        stickyStartAtElement: false,
        stickySetTop: 0,
        stickyEffect: '',
        stickyHeaderContainerHeight: false,
        stickyChangeLogo: false,
        stickyChangeLogoWrapper: true,
        stickyForce: false,
        stickyScrollUp: false,
        stickyScrollValue: 0
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;

        if (this.$wrapper.hasClass('header')) {
          this.$wrapper = $('.header[data-plugin-options]');
        }

        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if ($(window).width() < 992 && this.options.stickyEnableOnMobile == false) {
          $('html').addClass('sticky-header-mobile-disabled');
          return this;
        }

        if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
          return this;
        }

        var self = this;

        if (self.options.wrapper.hasClass('header')) {
          self.options.wrapper = $('.header');
          self.options.headerBody = $('.header .header-body');
        }

        var $html = $('html'),
            $window = $(window),
            sideHeader = $html.hasClass('side-header'),
            initialHeaderTopHeight = self.options.wrapper.find('.header-top').outerHeight(),
            initialHeaderContainerHeight = self.options.wrapper.find('.header-container').outerHeight(),
            minHeight; // HTML Classes

        $html.addClass('sticky-header-enabled');

        if (parseInt(self.options.stickySetTop) < 0) {
          $html.addClass('sticky-header-negative');
        }

        if (self.options.stickyScrollUp) {
          $html.addClass('sticky-header-scroll-direction');
        } // Notice Top Bar First Load


        if ($('.notice-top-bar').get(0)) {
          if (parseInt(self.options.stickySetTop) == 1 || self.options.stickyEffect == 'shrink') {
            $('.body').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
              setTimeout(function () {
                if (!$html.hasClass('sticky-header-active')) {
                  self.options.headerBody.animate({
                    top: $('.notice-top-bar').outerHeight()
                  }, 300, function () {
                    if ($html.hasClass('sticky-header-active')) {
                      self.options.headerBody.css('top', 0);
                    }
                  });
                }
              }, 0);
            });
          }
        } // Set Start At


        if (self.options.stickyStartAtElement) {
          var $stickyStartAtElement = $(self.options.stickyStartAtElement);
          $(window).on('scroll resize sticky.header.resize', function () {
            self.options.stickyStartAt = $stickyStartAtElement.offset().top;
          });
          $(window).trigger('sticky.header.resize');
        } // Define Min Height value


        if (self.options.wrapper.find('.header-top').get(0)) {
          minHeight = initialHeaderTopHeight + initialHeaderContainerHeight;
        } else {
          minHeight = initialHeaderContainerHeight;
        } // Set Wrapper Min-Height


        if (!sideHeader) {
          if (!$('.header-logo-sticky-change').get(0)) {
            self.options.wrapper.css('height', self.options.headerBody.outerHeight());
          } else {
            $window.on('stickyChangeLogo.loaded', function () {
              self.options.wrapper.css('height', self.options.headerBody.outerHeight());
            });
          }

          if (self.options.stickyEffect == 'shrink') {
            // Prevent wrong visualization of header when reload on middle of page
            $(document).ready(function () {
              if ($window.scrollTop() >= self.options.stickyStartAt) {
                self.options.wrapper.find('.header-container').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                  self.options.headerBody.css('position', 'fixed');
                });
              } else {
                if (!$html.hasClass('boxed')) {
                  self.options.headerBody.css('position', 'fixed');
                }
              }
            });
            self.options.wrapper.find('.header-container').css('height', initialHeaderContainerHeight);
            self.options.wrapper.find('.header-top').css('height', initialHeaderTopHeight);
          }
        } // Sticky Header Container Height


        if (self.options.stickyHeaderContainerHeight) {
          self.options.wrapper.find('.header-container').css('height', self.options.wrapper.find('.header-container').outerHeight());
        } // Boxed


        if ($html.hasClass('boxed') && self.options.stickyEffect == 'shrink') {
          self.boxedLayout();
        } // Check Sticky Header / Flags prevent multiple runs at same time


        var activate_flag = true,
            deactivate_flag = false,
            initialStickyStartAt = self.options.stickyStartAt;

        self.checkStickyHeader = function () {
          // Notice Top Bar
          var $noticeTopBar = $('.notice-top-bar');

          if ($noticeTopBar.get(0)) {
            self.options.stickyStartAt = $noticeTopBar.data('sticky-start-at') ? $noticeTopBar.data('sticky-start-at') : $('.notice-top-bar').outerHeight();
          } else {
            if ($html.hasClass('boxed')) {
              self.options.stickyStartAt = initialStickyStartAt + 25;
            } else {
              self.options.stickyStartAt = initialStickyStartAt;
            }
          }

          if ($window.width() > 991 && $html.hasClass('side-header')) {
            $html.removeClass('sticky-header-active');
            activate_flag = true;
            return;
          }

          if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
            if (activate_flag) {
              self.activateStickyHeader();
              activate_flag = false;
              deactivate_flag = true;
            }
          } else {
            if (deactivate_flag) {
              self.deactivateStickyHeader();
              deactivate_flag = false;
              activate_flag = true;
            }
          } // Scroll Up


          if (self.options.stickyScrollUp) {
            // Get the new Value
            self.options.stickyScrollNewValue = window.pageYOffset; //Subtract the two and conclude

            if (self.options.stickyScrollValue - self.options.stickyScrollNewValue < 0) {
              $html.removeClass('sticky-header-scroll-up').addClass('sticky-header-scroll-down');
            } else if (self.options.stickyScrollValue - self.options.stickyScrollNewValue > 0) {
              $html.removeClass('sticky-header-scroll-down').addClass('sticky-header-scroll-up');
            } // Update the old value


            self.options.stickyScrollValue = self.options.stickyScrollNewValue;
          }
        }; // Activate Sticky Header


        self.activateStickyHeader = function () {
          if ($window.width() < 992) {
            if (self.options.stickyEnableOnMobile == false) {
              self.deactivateStickyHeader();
              self.options.headerBody.css({
                position: 'relative'
              });
              return false;
            }
          } else {
            if (sideHeader) {
              self.deactivateStickyHeader();
              return;
            }
          }

          $html.addClass('sticky-header-active'); // Sticky Effect - Reveal

          if (self.options.stickyEffect == 'reveal') {
            self.options.headerBody.css('top', '-' + self.options.stickyStartAt + 'px');
            self.options.headerBody.animate({
              top: self.options.stickySetTop
            }, 400, function () {});
          } // Sticky Effect - Shrink


          if (self.options.stickyEffect == 'shrink') {
            // If Header Top
            if (self.options.wrapper.find('.header-top').get(0)) {
              self.options.wrapper.find('.header-top').css({
                height: 0,
                'min-height': 0,
                overflow: 'hidden'
              });
            } // Header Container


            if (self.options.stickyHeaderContainerHeight) {
              self.options.wrapper.find('.header-container').css({
                height: self.options.stickyHeaderContainerHeight,
                'min-height': 0
              });
            } else {
              self.options.wrapper.find('.header-container').css({
                height: initialHeaderContainerHeight / 3 * 2,
                // two third of container height
                'min-height': 0
              });
              var y = initialHeaderContainerHeight - initialHeaderContainerHeight / 3 * 2;
              $('.main').css({
                transform: 'translate3d(0, -' + y + 'px, 0)',
                transition: 'ease transform 300ms'
              }).addClass('has-sticky-header-transform');

              if ($html.hasClass('boxed')) {
                self.options.headerBody.css('position', 'fixed');
              }
            }
          }

          self.options.headerBody.css('top', self.options.stickySetTop);

          if (self.options.stickyChangeLogo) {
            self.changeLogo(true);
          } // Set Elements Style


          if ($('[data-sticky-header-style]').length) {
            $('[data-sticky-header-style]').each(function () {
              var $el = $(this),
                  css = theme.fn.getOptions($el.data('sticky-header-style-active')),
                  opts = theme.fn.getOptions($el.data('sticky-header-style'));

              if ($window.width() > opts.minResolution) {
                $el.css(css);
              }
            });
          }

          $.event.trigger({
            type: 'stickyHeader.activate'
          });
        }; // Deactivate Sticky Header


        self.deactivateStickyHeader = function () {
          $html.removeClass('sticky-header-active');

          if ($(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
            return false;
          } // Sticky Effect - Shrink


          if (self.options.stickyEffect == 'shrink') {
            // Boxed Layout
            if ($html.hasClass('boxed')) {
              // Set Header Body Position Absolute
              self.options.headerBody.css('position', 'absolute');

              if ($window.scrollTop() > $('.body').offset().top) {
                // Set Header Body Position Fixed
                self.options.headerBody.css('position', 'fixed');
              }
            } else {
              // Set Header Body Position Fixed
              self.options.headerBody.css('position', 'fixed');
            } // If Header Top


            if (self.options.wrapper.find('.header-top').get(0)) {
              self.options.wrapper.find('.header-top').css({
                height: initialHeaderTopHeight,
                overflow: 'visible'
              }); // Fix [data-icon] issue when first load is on middle of the page

              if (self.options.wrapper.find('.header-top [data-icon]').length) {
                theme.fn.intObsInit('.header-top [data-icon]:not(.svg-inline--fa)', 'themePluginIcon');
              }
            } // Header Container


            self.options.wrapper.find('.header-container').css({
              height: initialHeaderContainerHeight
            });
          }

          self.options.headerBody.css('top', 0);

          if (self.options.stickyChangeLogo) {
            self.changeLogo(false);
          } // Set Elements Style


          if ($('[data-sticky-header-style]').length) {
            $('[data-sticky-header-style]').each(function () {
              var $el = $(this),
                  css = theme.fn.getOptions($el.data('sticky-header-style-deactive')),
                  opts = theme.fn.getOptions($el.data('sticky-header-style'));

              if ($window.width() > opts.minResolution) {
                $el.css(css);
              }
            });
          }

          $.event.trigger({
            type: 'stickyHeader.deactivate'
          });
        }; // Always Sticky


        if (parseInt(self.options.stickyStartAt) <= 0) {
          self.activateStickyHeader();
        } // Set Logo


        if (self.options.stickyChangeLogo) {
          var $logoWrapper = self.options.wrapper.find('.header-logo'),
              $logo = $logoWrapper.find('img'),
              logoWidth = $logo.attr('width'),
              logoHeight = $logo.attr('height'),
              logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
              logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
              logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');

          if (self.options.stickyChangeLogoWrapper) {
            $logoWrapper.css({
              'width': $logo.outerWidth(true),
              'height': $logo.outerHeight(true)
            });
          }

          self.changeLogo = function (activate) {
            if (activate) {
              $logo.css({
                'top': logoSmallTop,
                'width': logoSmallWidth,
                'height': logoSmallHeight
              });
            } else {
              $logo.css({
                'top': 0,
                'width': logoWidth,
                'height': logoHeight
              });
            }
          };

          $.event.trigger({
            type: 'stickyChangeLogo.loaded'
          });
        } // Side Header


        var headerBodyHeight,
            flag = false;

        self.checkSideHeader = function () {
          if ($window.width() < 992 && flag == false) {
            headerBodyHeight = self.options.headerBody.height();
            flag = true;
          }

          if (self.options.stickyStartAt == 0 && sideHeader) {
            self.options.wrapper.css('min-height', 0);
          }

          if (self.options.stickyStartAt > 0 && sideHeader && $window.width() < 992) {
            self.options.wrapper.css('min-height', headerBodyHeight);
          }
        };

        return this;
      },
      events: function events() {
        var self = this;

        if ($(window).width() < 992 && this.options.stickyEnableOnMobile == false) {
          return this;
        }

        if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
          return this;
        }

        if (!self.options.alwaysStickyEnabled) {
          $(window).on('scroll resize', function () {
            if ($(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
              self.options.headerBody.css({
                position: ''
              });

              if (self.options.stickyEffect == 'shrink') {
                self.options.wrapper.find('.header-top').css({
                  height: ''
                });
              }

              self.deactivateStickyHeader();
            } else {
              self.checkStickyHeader();
            }
          });
        } else {
          self.activateStickyHeader();
        }

        $(window).on('load resize', function () {
          self.checkSideHeader();
        });
        $(window).on('layout.boxed', function () {
          self.boxedLayout();
        });
        return this;
      },
      boxedLayout: function boxedLayout() {
        var self = this,
            $window = $(window);

        if ($('html').hasClass('boxed') && self.options.stickyEffect == 'shrink') {
          if (parseInt(self.options.stickyStartAt) == 0 && $window.width() > 991) {
            self.options.stickyStartAt = 30;
          } // Set Header Body Position Absolute


          self.options.headerBody.css({
            position: 'absolute',
            top: 0
          }); // Set position absolute because top margin from boxed layout

          $window.on('scroll', function () {
            if ($window.scrollTop() > $('.body').offset().top) {
              self.options.headerBody.css({
                'position': 'fixed',
                'top': 0
              });
            } else {
              self.options.headerBody.css({
                'position': 'absolute',
                'top': 0
              });
            }
          });
        }

        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]);

/***/ }),

/***/ "./resources/js/frontend/core/bootstrap_bundle.js":
/*!********************************************************!*\
  !*** ./resources/js/frontend/core/bootstrap_bundle.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = "transitionend",
      e = function e(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      i = function i(t) {
    var i = e(t);
    return i && document.querySelector(i) ? i : null;
  },
      n = function n(t) {
    var i = e(t);
    return i ? document.querySelector(i) : null;
  },
      s = function s(e) {
    e.dispatchEvent(new Event(t));
  },
      o = function o(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      r = function r(t) {
    return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      a = function a(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          r = e[n],
          a = r && o(r) ? "element" : null == (l = r) ? "".concat(l) : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
    });
  },
      l = function l(t) {
    return !(!o(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      c = function c(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
  },
      d = function d() {},
      u = function u(t) {
    t.offsetHeight;
  },
      f = function f() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      p = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      g = function g(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i3 = t.NAME,
            _n2 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function () {
      p.forEach(function (t) {
        return t();
      });
    }), p.push(e)) : e();
  },
      _ = function _(t) {
    "function" == typeof t && t();
  },
      b = function b(e, i) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!n) return void _(e);

    var o = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(i) + 5;

    var r = !1;

    var a = function a(_ref) {
      var n = _ref.target;
      n === i && (r = !0, i.removeEventListener(t, a), _(e));
    };

    i.addEventListener(t, a), setTimeout(function () {
      r || s(i);
    }, o);
  },
      v = function v(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      y = /[^.]*(?=\..*)\.|.*/,
      w = /\..*/,
      E = /::\d+$/,
      A = {};

  var T = 1;
  var O = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = /^(mouseenter|mouseleave)/i,
      k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function L(t, e) {
    return e && "".concat(e, "::").concat(T++) || t.uidEvent || T++;
  }

  function x(t) {
    var e = L(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }

  function D(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o = n.length; _s < _o; _s++) {
      var _o2 = t[n[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function S(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), C.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t2(n) : i = _t2(i);
    }

    var _S = S(e, i, n),
        _S2 = _slicedToArray(_S, 3),
        o = _S2[0],
        r = _S2[1],
        a = _S2[2],
        l = x(t),
        c = l[a] || (l[a] = {}),
        h = D(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = L(r, e.replace(y, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && j.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && j.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function I(t, e, i, n, s) {
    var o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function P(t) {
    return t = t.replace(w, ""), O[t] || t;
  }

  var j = {
    on: function on(t, e, i, n) {
      N(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      N(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _S3 = S(e, i, n),
          _S4 = _slicedToArray(_S3, 3),
          s = _S4[0],
          o = _S4[1],
          r = _S4[2],
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void I(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n3 = s[o];
              I(t, e, i, _n3.originalHandler, _n3.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(E, "");

        if (!a || e.includes(n)) {
          var _e3 = h[i];
          I(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      M = new Map(),
      H = {
    set: function set(t, e, i) {
      M.has(t) || M.set(t, new Map());
      var n = M.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return M.has(t) && M.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!M.has(t)) return;
      var i = M.get(t);
      i["delete"](e), 0 === i.size && M["delete"](t);
    }
  };

  var B = /*#__PURE__*/function () {
    function B(t) {
      _classCallCheck(this, B);

      (t = r(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(B, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        b(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return H.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.1.3";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return B;
  }();

  var R = function R(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        s = t.NAME;
    j.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
      var o = n(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(o)[e]();
    });
  };

  var W = /*#__PURE__*/function (_B) {
    _inherits(W, _B);

    var _super = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super.apply(this, arguments);
    }

    _createClass(W, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return W;
  }(B);

  R(W, "close"), g(W);
  var $ = '[data-bs-toggle="button"]';

  var z = /*#__PURE__*/function (_B2) {
    _inherits(z, _B2);

    var _super2 = _createSuper(z);

    function z() {
      _classCallCheck(this, z);

      return _super2.apply(this, arguments);
    }

    _createClass(z, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = z.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return z;
  }(B);

  function q(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function F(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  j.on(document, "click.bs.button.data-api", $, function (t) {
    t.preventDefault();
    var e = t.target.closest($);
    z.getOrCreateInstance(e).toggle();
  }), g(z);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(F(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(F(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return q(t.getAttribute("data-bs-".concat(F(e))));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      V = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(", ");
      return this.find(e, t).filter(function (t) {
        return !c(t) && l(t);
      });
    }
  },
      K = "carousel",
      X = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Y = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      Q = "next",
      G = "prev",
      Z = "left",
      J = "right",
      tt = {
    ArrowLeft: J,
    ArrowRight: Z
  },
      et = "slid.bs.carousel",
      it = "active",
      nt = ".active.carousel-item";

  var st = /*#__PURE__*/function (_B3) {
    _inherits(st, _B3);

    var _super3 = _createSuper(st);

    function st(t, e) {
      var _this3;

      _classCallCheck(this, st);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = V.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(st, [{
      key: "next",
      value: function next() {
        this._slide(Q);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && l(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(G);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = V.findOne(nt, this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void j.one(this._element, et, function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? Q : G;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, X), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(K, t, Y), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && j.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), j.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t3) {
          return _this6._pointerEvent && ("pen" === _t3.pointerType || "touch" === _t3.pointerType);
        },
            e = function e(_e4) {
          t(_e4) ? _this6.touchStartX = _e4.clientX : _this6._pointerEvent || (_this6.touchStartX = _e4.touches[0].clientX);
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(e) {
          t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        V.find(".carousel-item img", this._element).forEach(function (t) {
          j.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), j.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), j.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), j.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = tt[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === Q;
        return v(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            n = this._getItemIndex(V.findOne(nt, this._element));

        return j.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e5 = V.findOne(".active", this._indicatorsElement);

          _e5.classList.remove(it), _e5.removeAttribute("aria-current");

          var _i4 = V.find("[data-bs-target]", this._indicatorsElement);

          for (var _e6 = 0; _e6 < _i4.length; _e6++) {
            if (Number.parseInt(_i4[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i4[_e6].classList.add(it), _i4[_e6].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || V.findOne(nt, this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var i = this._directionToOrder(t),
            n = V.findOne(nt, this._element),
            s = this._getItemIndex(n),
            o = e || this._getItemByOrder(i, n),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === Q,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            d = this._orderToDirection(i);

        if (o && o.classList.contains(it)) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, d).defaultPrevented) return;
        if (!n || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        var f = function f() {
          j.trigger(_this7._element, et, {
            relatedTarget: o,
            direction: d,
            from: s,
            to: r
          });
        };

        if (this._element.classList.contains("slide")) {
          o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);

          var _t4 = function _t4() {
            o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t4, n, !0);
        } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();

        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = st.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          st.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = n(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, U.getDataAttributes(e)), U.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return X;
      }
    }, {
      key: "NAME",
      get: function get() {
        return K;
      }
    }]);

    return st;
  }(B);

  j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", function () {
    var t = V.find('[data-bs-ride="carousel"]');

    for (var _e7 = 0, _i5 = t.length; _e7 < _i5; _e7++) {
      st.carouselInterface(t[_e7], st.getInstance(t[_e7]));
    }
  }), g(st);
  var ot = "collapse",
      rt = {
    toggle: !0,
    parent: null
  },
      at = {
    toggle: "boolean",
    parent: "(null|element)"
  },
      lt = "show",
      ct = "collapse",
      ht = "collapsing",
      dt = "collapsed",
      ut = ":scope .collapse .collapse",
      ft = '[data-bs-toggle="collapse"]';

  var pt = /*#__PURE__*/function (_B4) {
    _inherits(pt, _B4);

    var _super4 = _createSuper(pt);

    function pt(t, e) {
      var _this8;

      _classCallCheck(this, pt);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = [];
      var n = V.find(ft);

      for (var _t5 = 0, _e8 = n.length; _t5 < _e8; _t5++) {
        var _e9 = n[_t5],
            _s2 = i(_e9),
            _o3 = V.find(_s2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _s2 && _o3.length && (_this8._selector = _s2, _this8._triggerArray.push(_e9));
      }

      _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(pt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t,
            e = [];

        if (this._config.parent) {
          var _t6 = V.find(ut, this._config.parent);

          e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
            return !_t6.includes(e);
          });
        }

        var i = V.findOne(this._selector);

        if (e.length) {
          var _n4 = e.find(function (t) {
            return i !== t;
          });

          if (t = _n4 ? pt.getInstance(_n4) : null, t && t._isTransitioning) return;
        }

        if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e.forEach(function (e) {
          i !== e && pt.getOrCreateInstance(e, {
            toggle: !1
          }).hide(), t || H.set(e, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var s = "scroll".concat(n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._isTransitioning = !1, _this9._element.classList.remove(ht), _this9._element.classList.add(ct, lt), _this9._element.style[n] = "", j.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = "".concat(this._element[s], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
        var e = this._triggerArray.length;

        for (var _t7 = 0; _t7 < e; _t7++) {
          var _e10 = this._triggerArray[_t7],
              _i6 = n(_e10);

          _i6 && !this._isShown(_i6) && this._addAriaAndCollapsedClass([_e10], !1);
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this10._isTransitioning = !1, _this10._element.classList.remove(ht), _this10._element.classList.add(ct), j.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(lt);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, rt), U.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = r(t.parent), a(ot, t, at), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) return;
        var t = V.find(ut, this._config.parent);
        V.find(ft, this._config.parent).filter(function (e) {
          return !t.includes(e);
        }).forEach(function (t) {
          var e = n(t);
          e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        t.length && t.forEach(function (t) {
          e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = {};
          "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
          var i = pt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ot;
      }
    }]);

    return pt;
  }(B);

  j.on(document, "click.bs.collapse.data-api", ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = i(this);
    V.find(e).forEach(function (t) {
      pt.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), g(pt);
  var mt = "top",
      gt = "bottom",
      _t = "right",
      bt = "left",
      vt = "auto",
      yt = [mt, gt, _t, bt],
      wt = "start",
      Et = "end",
      At = "clippingParents",
      Tt = "viewport",
      Ot = "popper",
      Ct = "reference",
      kt = yt.reduce(function (t, e) {
    return t.concat([e + "-" + wt, e + "-" + Et]);
  }, []),
      Lt = [].concat(yt, [vt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + wt, e + "-" + Et]);
  }, []),
      xt = "beforeRead",
      Dt = "read",
      St = "afterRead",
      Nt = "beforeMain",
      It = "main",
      Pt = "afterMain",
      jt = "beforeWrite",
      Mt = "write",
      Ht = "afterWrite",
      Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];

  function Rt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function Wt(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function $t(t) {
    return t instanceof Wt(t).Element || t instanceof Element;
  }

  function zt(t) {
    return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
  }

  function qt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var Ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function Ut(t) {
    return t.split("-")[0];
  }

  function Vt(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1
    };
  }

  function Kt(t) {
    var e = Vt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Xt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && qt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Yt(t) {
    return Wt(t).getComputedStyle(t);
  }

  function Qt(t) {
    return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
  }

  function Gt(t) {
    return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Zt(t) {
    return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
  }

  function Jt(t) {
    return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
  }

  function te(t) {
    for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;) {
      i = Jt(i);
    }

    return i && ("html" === Rt(i) || "body" === Rt(i) && "static" === Yt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;

      for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
        var n = Yt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function ee(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var ie = Math.max,
      ne = Math.min,
      se = Math.round;

  function oe(t, e, i) {
    return ie(t, ne(e, i));
  }

  function re(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function ae(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var le = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = Ut(i.placement),
          l = ee(a),
          c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return re("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : ae(t, yt));
        }(s.padding, i),
            d = Kt(o),
            u = "y" === l ? mt : bt,
            f = "y" === l ? gt : _t,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = te(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = oe(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function ce(t) {
    return t.split("-")[1];
  }

  var he = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function de(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = !0 === h ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: se(se(e * n) / n) || 0,
        y: se(se(i * n) / n) || 0
      };
    }(r) : "function" == typeof h ? h(r) : r,
        u = d.x,
        f = void 0 === u ? 0 : u,
        p = d.y,
        m = void 0 === p ? 0 : p,
        g = r.hasOwnProperty("x"),
        _ = r.hasOwnProperty("y"),
        b = bt,
        v = mt,
        y = window;

    if (c) {
      var w = te(i),
          E = "clientHeight",
          A = "clientWidth";
      w === Wt(i) && "static" !== Yt(w = Gt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n.width, f *= l ? 1 : -1);
    }

    var T,
        O = Object.assign({
      position: a
    }, c && he);
    return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e));
  }

  var ue = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: Ut(e.placement),
        variation: ce(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var fe = {
    passive: !0
  };
  var pe = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = Wt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, fe);
      }), a && l.addEventListener("resize", i.update, fe), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, fe);
        }), a && l.removeEventListener("resize", i.update, fe);
      };
    },
    data: {}
  };
  var me = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return me[t];
    });
  }

  var _e = {
    start: "end",
    end: "start"
  };

  function be(t) {
    return t.replace(/start|end/g, function (t) {
      return _e[t];
    });
  }

  function ve(t) {
    var e = Wt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function ye(t) {
    return Vt(Gt(t)).left + ve(t).scrollLeft;
  }

  function we(t) {
    var e = Yt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
  }

  function Ae(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = Wt(n),
        r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(Ae(Zt(r)));
  }

  function Te(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Oe(t, e) {
    return e === Tt ? Te(function (t) {
      var e = Wt(t),
          i = Gt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + ye(t),
        y: a
      };
    }(t)) : zt(e) ? function (t) {
      var e = Vt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Te(function (t) {
      var e,
          i = Gt(t),
          n = ve(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + ye(t),
          l = -n.scrollTop;
      return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Gt(t)));
  }

  function Ce(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? Ut(s) : null,
        r = s ? ce(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case mt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case gt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case _t:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case bt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? ee(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case Et:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function ke(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? At : o,
        a = i.rootBoundary,
        l = void 0 === a ? Tt : a,
        c = i.elementContext,
        h = void 0 === c ? Ot : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = re("number" != typeof p ? p : ae(p, yt)),
        g = h === Ot ? Ct : Ot,
        _ = t.rects.popper,
        b = t.elements[u ? g : h],
        v = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Ae(Zt(t)),
            i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 && zt(t) ? te(t) : t;
        return $t(i) ? e.filter(function (t) {
          return $t(t) && Xt(t, i) && "body" !== Rt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Oe(t, i);
        return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
      }, Oe(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
        y = Vt(t.elements.reference),
        w = Ce({
      reference: y,
      element: _,
      strategy: "absolute",
      placement: s
    }),
        E = Te(Object.assign({}, _, w)),
        A = h === Ot ? E : y,
        T = {
      top: v.top - A.top + m.top,
      bottom: A.bottom - v.bottom + m.bottom,
      left: v.left - A.left + m.left,
      right: A.right - v.right + m.right
    },
        O = t.modifiersData.offset;

    if (h === Ot && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
            i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }

    return T;
  }

  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? Lt : l,
        h = ce(n),
        d = h ? a ? kt : kt.filter(function (t) {
      return ce(t) === h;
    }) : yt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ke(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[Ut(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var xe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function (t) {
          if (Ut(t) === vt) return [];
          var e = ge(t);
          return [be(t), e, be(e)];
        }(g) : [ge(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(Ut(i) === vt ? Le(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = Ut(C),
              L = ce(C) === wt,
              x = [mt, gt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = ke(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              N = x ? L ? _t : bt : L ? gt : mt;
          y[D] > w[D] && (N = ge(N));
          var I = ge(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, P);
        }

        if (A) for (var j = function j(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function De(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function Se(t) {
    return [mt, _t, gt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var Ne = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, {
        elementContext: "reference"
      }),
          a = ke(e, {
        altBoundary: !0
      }),
          l = De(r, n),
          c = De(a, s, o),
          h = Se(l),
          d = Se(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      Ie = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = Lt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = Ut(t),
              s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      Pe = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Ce({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      je = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = Ut(e.placement),
          b = ce(e.placement),
          v = !b,
          y = ee(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? mt : bt,
              L = "y" === y ? gt : _t,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = b === wt ? A[x] : T[x],
              j = b === wt ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? Kt(M) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              R = B[k],
              W = B[L],
              $ = oe(0, A[x], H[x]),
              z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
              q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
              F = e.elements.arrow && te(e.elements.arrow),
              U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - U,
              X = E[y] + q - V;

          if (o) {
            var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? mt : bt,
                G = "x" === y ? gt : _t,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function Me(t, e, i) {
    void 0 === i && (i = !1);
    var n = zt(e);
    zt(e) && function (t) {
      var e = t.getBoundingClientRect();
      e.width, t.offsetWidth, e.height, t.offsetHeight;
    }(e);
    var s,
        o,
        r = Gt(e),
        a = Vt(t),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (n || !n && !i) && (("body" !== Rt(e) || we(r)) && (l = (s = e) !== Wt(s) && zt(s) ? {
      scrollLeft: (o = s).scrollLeft,
      scrollTop: o.scrollTop
    } : ve(s)), zt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ye(r))), {
      x: a.left + l.scrollLeft - c.x,
      y: a.top + l.scrollTop - c.y,
      width: a.width,
      height: a.height
    };
  }

  function He(t) {
    var e = new Map(),
        i = new Set(),
        n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }

  var Be = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function Re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function We(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Be, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: $t(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
            popper: Ae(e)
          };

          var r,
              c,
              u = function (t) {
            var e = He(t);
            return Bt.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (Re(e, i)) {
              a.rects = {
                reference: Me(e, te(i), "fixed" === a.options.strategy),
                popper: Kt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!Re(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var $e = We(),
      ze = We({
    defaultModifiers: [pe, Pe, ue, Ft]
  }),
      qe = We({
    defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne]
  });
  var Fe = Object.freeze({
    __proto__: null,
    popperGenerator: We,
    detectOverflow: ke,
    createPopperBase: $e,
    createPopper: qe,
    createPopperLite: ze,
    top: mt,
    bottom: gt,
    right: _t,
    left: bt,
    auto: vt,
    basePlacements: yt,
    start: wt,
    end: Et,
    clippingParents: At,
    viewport: Tt,
    popper: Ot,
    reference: Ct,
    variationPlacements: kt,
    placements: Lt,
    beforeRead: xt,
    read: Dt,
    afterRead: St,
    beforeMain: Nt,
    main: It,
    afterMain: Pt,
    beforeWrite: jt,
    write: Mt,
    afterWrite: Ht,
    modifierPhases: Bt,
    applyStyles: Ft,
    arrow: le,
    computeStyles: ue,
    eventListeners: pe,
    flip: xe,
    hide: Ne,
    offset: Ie,
    popperOffsets: Pe,
    preventOverflow: je
  }),
      Ue = "dropdown",
      Ve = "Escape",
      Ke = "Space",
      Xe = "ArrowUp",
      Ye = "ArrowDown",
      Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
      Ge = "click.bs.dropdown.data-api",
      Ze = "keydown.bs.dropdown.data-api",
      Je = "show",
      ti = '[data-bs-toggle="dropdown"]',
      ei = ".dropdown-menu",
      ii = m() ? "top-end" : "top-start",
      ni = m() ? "top-start" : "top-end",
      si = m() ? "bottom-end" : "bottom-start",
      oi = m() ? "bottom-start" : "bottom-end",
      ri = m() ? "left-start" : "right-start",
      ai = m() ? "right-start" : "left-start",
      li = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      ci = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var hi = /*#__PURE__*/function (_B5) {
    _inherits(hi, _B5);

    var _super5 = _createSuper(hi);

    function hi(t, e) {
      var _this12;

      _classCallCheck(this, hi);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    }

    _createClass(hi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _ref4;

        if (c(this._element) || this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };
        if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
        var e = hi.getParentFromElement(this._element);
        this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.on(t, "mouseover", d);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (c(this._element) || !this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(hi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.off(t, "mouseover", d);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), U.getDataAttributes(this._element)), t), a(Ue, t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Ue.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var e = this._element;
        "parent" === this._config.reference ? e = t : o(this._config.reference) ? e = r(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

        var i = this._getPopperConfig(),
            n = i.modifiers.find(function (t) {
          return "applyStyles" === t.name && !1 === t.enabled;
        });

        this._popper = qe(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static");
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Je);
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return V.next(this._element, ei)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ri;
        if (t.classList.contains("dropstart")) return ai;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
        i.length && v(i, e, t === Ye, !i.includes(e)).focus();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = hi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = V.find(ti);

        for (var _i7 = 0, _n5 = e.length; _i7 < _n5; _i7++) {
          var _n6 = hi.getInstance(e[_i7]);

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._isShown()) continue;
          var _s3 = {
            relatedTarget: _n6._element
          };

          if (t) {
            var _e11 = t.composedPath(),
                _i8 = _e11.includes(_n6._menu);

            if (_e11.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i8 || "outside" === _n6._config.autoClose && _i8) continue;
            if (_n6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_s3.clickEvent = t);
          }

          _n6._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return n(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
        var e = this.classList.contains(Je);
        if (!e && t.key === Ve) return;
        if (t.preventDefault(), t.stopPropagation(), c(this)) return;
        var i = this.matches(ti) ? this : V.prev(this, ti)[0],
            n = hi.getOrCreateInstance(i);
        if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void (e && t.key !== Ke || hi.clearMenus());
        n.hide();
      }
    }, {
      key: "Default",
      get: function get() {
        return li;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ci;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ue;
      }
    }]);

    return hi;
  }(B);

  j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, function (t) {
    t.preventDefault(), hi.getOrCreateInstance(this).toggle();
  }), g(hi);
  var di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      ui = ".sticky-top";

  var fi = /*#__PURE__*/function () {
    function fi() {
      _classCallCheck(this, fi);

      this._element = document.body;
    }

    _createClass(fi, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(di, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(ui, "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this14 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this14._element && window.innerWidth > t.clientWidth + n) return;

          _this14._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = "".concat(i(Number.parseFloat(s)), "px");
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && U.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = U.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        o(t) ? e(t) : V.find(t, this._element).forEach(e);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return fi;
  }();

  var pi = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      mi = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  },
      gi = "show",
      _i = "mousedown.bs.backdrop";

  var bi = /*#__PURE__*/function () {
    function bi(t) {
      _classCallCheck(this, bi);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(bi, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(function () {
          _(t);
        })) : _(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(function () {
          _this15.dispose(), _(t);
        })) : _(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t8 = document.createElement("div");

          _t8.className = this._config.className, this._config.isAnimated && _t8.classList.add("fade"), this._element = _t8;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, pi), "object" == _typeof(t) ? t : {})).rootElement = r(t.rootElement), a("backdrop", t, mi), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, function () {
          _(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        b(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return bi;
  }();

  var vi = {
    trapElement: null,
    autofocus: !0
  },
      yi = {
    trapElement: "element",
    autofocus: "boolean"
  },
      wi = ".bs.focustrap",
      Ei = "backward";

  var Ai = /*#__PURE__*/function () {
    function Ai(t) {
      _classCallCheck(this, Ai);

      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    _createClass(Ai, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            t = _this$_config.trapElement,
            e = _this$_config.autofocus;
        this._isActive || (e && t.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", function (t) {
          return _this17._handleFocusin(t);
        }), j.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this17._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, j.off(document, wi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = t.target,
            i = this._config.trapElement;
        if (e === document || e === i || i.contains(e)) return;
        var n = V.focusableChildren(i);
        0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, vi), "object" == _typeof(t) ? t : {}), a("focustrap", t, yi), t;
      }
    }]);

    return Ai;
  }();

  var Ti = "modal",
      Oi = "Escape",
      Ci = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      ki = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  },
      Li = "hidden.bs.modal",
      xi = "show.bs.modal",
      Di = "resize.bs.modal",
      Si = "click.dismiss.bs.modal",
      Ni = "keydown.dismiss.bs.modal",
      Ii = "mousedown.dismiss.bs.modal",
      Pi = "modal-open",
      ji = "show",
      Mi = "modal-static";

  var Hi = /*#__PURE__*/function (_B6) {
    _inherits(Hi, _B6);

    var _super6 = _createSuper(Hi);

    function Hi(t, e) {
      var _this18;

      _classCallCheck(this, Hi);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = V.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new fi();
      return _this18;
    }

    _createClass(Hi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        this._isShown || this._isTransitioning || j.trigger(this._element, xi, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, function () {
          j.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) return;
        if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return j.off(t, ".bs.modal");
        }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Hi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new bi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ai({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ci), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(Ti, t, ki), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            i = V.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add(ji), this._queueCallback(function () {
          _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, j.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? j.on(this._element, Ni, function (t) {
          _this22._config.keyboard && t.key === Oi ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || t.key !== Oi || _this22._triggerBackdropTransition();
        }) : j.off(this._element, Ni);
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? j.on(window, Di, function () {
          return _this23._adjustDialog();
        }) : j.off(window, Di);
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Pi), _this24._resetAdjustments(), _this24._scrollBar.reset(), j.trigger(_this24._element, Li);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        j.on(this._element, Si, function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(function () {
          t.remove(Mi), n || _this26._queueCallback(function () {
            i.overflowY = "";
          }, _this26._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = "".concat(e, "px")), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = "".concat(e, "px"));
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Hi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ci;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ti;
      }
    }]);

    return Hi;
  }(B);

  j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, xi, function (t) {
      t.defaultPrevented || j.one(e, Li, function () {
        l(_this27) && _this27.focus();
      });
    });
    var i = V.findOne(".modal.show");
    i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
  }), R(Hi), g(Hi);
  var Bi = "offcanvas",
      Ri = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Wi = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  },
      $i = "show",
      zi = ".offcanvas.show",
      qi = "hidden.bs.offcanvas";

  var Fi = /*#__PURE__*/function (_B7) {
    _inherits(Fi, _B7);

    var _super7 = _createSuper(Fi);

    function Fi(t, e) {
      var _this28;

      _classCallCheck(this, Fi);

      _this28 = _super7.call(this, t), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Fi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new fi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(function () {
          _this29._config.scroll || _this29._focustrap.activate(), j.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new fi().reset(), j.trigger(_this30._element, qi);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Fi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ri), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(Bi, t, Wi), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new bi({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ai({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        j.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Fi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return Bi;
      }
    }, {
      key: "Default",
      get: function get() {
        return Ri;
      }
    }]);

    return Fi;
  }(B);

  j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
    j.one(e, qi, function () {
      l(_this33) && _this33.focus();
    });
    var i = V.findOne(zi);
    i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
  }), j.on(window, "load.bs.offcanvas.data-api", function () {
    return V.find(zi).forEach(function (t) {
      return Fi.getOrCreateInstance(t).show();
    });
  }), R(Fi), g(Fi);

  var Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Xi = function Xi(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t9 = 0, _e12 = n.length; _t9 < _e12; _t9++) {
      if (n[_t9].test(i)) return !0;
    }

    return !1;
  };

  function Yi(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t10, _i9) {
      var _ref8;

      var i = s[_t10],
          n = i.nodeName.toLowerCase();

      if (!Object.keys(e).includes(n)) {
        i.remove();
        return "continue";
      }

      var o = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          r = [].concat(e["*"] || [], e[n] || []);

      o.forEach(function (t) {
        Xi(t, r) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t10 = 0, _i9 = s.length; _t10 < _i9; _t10++) {
      var _ret = _loop(_t10, _i9);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Qi = "tooltip",
      Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Zi = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Ji = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      tn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      en = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      nn = "fade",
      sn = "show",
      on = "show",
      rn = "out",
      an = ".tooltip-inner",
      ln = ".modal",
      cn = "hide.bs.modal",
      hn = "hover",
      dn = "focus";

  var un = /*#__PURE__*/function (_B8) {
    _inherits(un, _B8);

    var _super8 = _createSuper(un);

    function un(t, e) {
      var _this34;

      _classCallCheck(this, un);

      if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _super8.call(this, t), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(un, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);

          _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(un.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _n$classList,
            _ref9,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = j.trigger(this._element, this.constructor.Event.SHOW),
            e = h(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

        var n = this.getTipElement(),
            s = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME);

        n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);

        var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            r = this._getAttachment(o);

        this._addAttachmentClass(r);

        var a = this._config.container;
        H.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);

        var l = this._resolvePossibleFunction(this._config.customClass);

        l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          j.on(t, "mouseover", d);
        });
        var c = this.tip.classList.contains(nn);

        this._queueCallback(function () {
          var t = _this35._hoverState;
          _this35._hoverState = null, j.trigger(_this35._element, _this35.constructor.Event.SHOWN), t === rn && _this35._leave(null, _this35);
        }, this.tip, c);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this36 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove(sn), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.off(t, "mouseover", d);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains(nn);
        this._queueCallback(function () {
          _this36._isWithActiveTrigger() || (_this36._hoverState !== on && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), j.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        t.innerHTML = this._config.template;
        var e = t.children[0];
        return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), an);
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(t, e, i) {
        var n = V.findOne(i, t);
        e || !n ? this.setElementContent(n, e) : n.remove();
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return o(e) ? (e = r(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(t);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ji[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) j.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = t === hn ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i10 = t === hn ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            j.on(_this39._element, _e14, _this39._config.selector, function (t) {
              return _this39._enter(t);
            }), j.on(_this39._element, _i10, _this39._config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === on && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === rn && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t11 in this._activeTrigger) {
          if (this._activeTrigger[_t11]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Gi.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e15 in this._config) {
          this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
        }

        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
            i = t.getAttribute("class").match(e);
        null !== i && i.length > 0 && i.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-tooltip";
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = un.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return tn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Qi;
      }
    }, {
      key: "Event",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zi;
      }
    }]);

    return un;
  }(B);

  g(un);

  var fn = _objectSpread(_objectSpread({}, un.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      pn = _objectSpread(_objectSpread({}, un.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      mn = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var gn = /*#__PURE__*/function (_un) {
    _inherits(gn, _un);

    var _super9 = _createSuper(gn);

    function gn() {
      _classCallCheck(this, gn);

      return _super9.apply(this, arguments);
    }

    _createClass(gn, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-popover";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = gn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return fn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return mn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return pn;
      }
    }]);

    return gn;
  }(un);

  g(gn);
  var _n = "scrollspy",
      bn = {
    offset: 10,
    method: "auto",
    target: ""
  },
      vn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      yn = "active",
      wn = ".nav-link, .list-group-item, .dropdown-item",
      En = "position";

  var An = /*#__PURE__*/function (_B9) {
    _inherits(An, _B9);

    var _super10 = _createSuper(An);

    function An(t, e) {
      var _this40;

      _classCallCheck(this, An);

      _this40 = _super10.call(this, t), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, j.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(An, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : En,
            e = "auto" === this._config.method ? t : this._config.method,
            n = e === En ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map(function (t) {
          var s = i(t),
              o = s ? V.findOne(s) : null;

          if (o) {
            var _t12 = o.getBoundingClientRect();

            if (_t12.width || _t12.height) return [U[e](o).top + n, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        j.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(An.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, bn), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target = r(t.target) || document.documentElement, a(_n, t, vn), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t13 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t13 && this._activate(_t13);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e16 = this._offsets.length; _e16--;) {
            this._activeTarget !== this._targets[_e16] && t >= this._offsets[_e16] && (void 0 === this._offsets[_e16 + 1] || t < this._offsets[_e16 + 1]) && this._activate(this._targets[_e16]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = wn.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = V.findOne(e.join(","), this._config.target);
        i.classList.add(yn), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V.parents(i, ".nav, .list-group").forEach(function (t) {
          V.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add(yn);
          }), V.prev(t, ".nav-item").forEach(function (t) {
            V.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add(yn);
            });
          });
        }), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        V.find(wn, this._config.target).filter(function (t) {
          return t.classList.contains(yn);
        }).forEach(function (t) {
          return t.classList.remove(yn);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = An.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return bn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return _n;
      }
    }]);

    return An;
  }(B);

  j.on(window, "load.bs.scrollspy.data-api", function () {
    V.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new An(t);
    });
  }), g(An);
  var Tn = "active",
      On = "fade",
      Cn = "show",
      kn = ".active",
      Ln = ":scope > li > .active";

  var xn = /*#__PURE__*/function (_B10) {
    _inherits(xn, _B10);

    var _super11 = _createSuper(xn);

    function xn() {
      _classCallCheck(this, xn);

      return _super11.apply(this, arguments);
    }

    _createClass(xn, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
        var t;

        var e = n(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var _e17 = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;

          t = V.find(_e17, i), t = t[t.length - 1];
        }

        var s = t ? j.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (j.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, i);

        var o = function o() {
          j.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), j.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, kn) : V.find(Ln, e))[0],
            s = i && n && n.classList.contains(On),
            o = function o() {
          return _this43._transitionComplete(t, n, i);
        };

        n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove(Tn);

          var _t14 = V.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t14 && _t14.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add(Tn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains(On) && t.classList.add(Cn);
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e18 = t.closest(".dropdown");

          _e18 && V.find(".dropdown-toggle", _e18).forEach(function (t) {
            return t.classList.add(Tn);
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xn.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return xn;
  }(B);

  j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || xn.getOrCreateInstance(this).show();
  }), g(xn);
  var Dn = "toast",
      Sn = "hide",
      Nn = "show",
      In = "showing",
      Pn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      jn = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Mn = /*#__PURE__*/function (_B11) {
    _inherits(Mn, _B11);

    var _super12 = _createSuper(Mn);

    function Mn(t, e) {
      var _this44;

      _classCallCheck(this, Mn);

      _this44 = _super12.call(this, t), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
      return _this44;
    }

    _createClass(Mn, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(function () {
          _this45._element.classList.remove(In), j.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(function () {
          _this46._element.classList.add(Sn), _this46._element.classList.remove(In), _this46._element.classList.remove(Nn), j.trigger(_this46._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), _get(_getPrototypeOf(Mn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, jn), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), a(Dn, t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        j.on(this._element, "mouseover.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), j.on(this._element, "mouseout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        }), j.on(this._element, "focusin.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), j.on(this._element, "focusout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Mn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pn;
      }
    }, {
      key: "Default",
      get: function get() {
        return jn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Dn;
      }
    }]);

    return Mn;
  }(B);

  return R(Mn), g(Mn), {
    Alert: W,
    Button: z,
    Carousel: st,
    Collapse: pt,
    Dropdown: hi,
    Modal: Hi,
    Offcanvas: Fi,
    Popover: gn,
    ScrollSpy: An,
    Tab: xn,
    Toast: Mn,
    Tooltip: un
  };
});

/***/ }),

/***/ "./resources/js/frontend/core/modernizr.js":
/*!*************************************************!*\
  !*** ./resources/js/frontend/core/modernizr.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-boxshadow-csstransforms3d-csstransitions-history-svg-video-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function o() {
    var e, t, n, o, a, i, s;

    for (var l in C) {
      if (C.hasOwnProperty(l)) {
        if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) {
          i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), S.push((o ? "" : "no-") + s.join("-"));
        }
      }
    }
  }

  function a(e) {
    var t = E.className,
        n = Modernizr._config.classPrefix || "";

    if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? E.className.baseVal = t : E.className = t);
  }

  function i(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function s() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function l() {
    var e = t.body;
    return e || (e = s(w ? "svg" : "body"), e.fake = !0), e;
  }

  function c(e, n, r, o) {
    var a,
        i,
        c,
        u,
        f = "modernizr",
        d = s("div"),
        p = l();
    if (parseInt(r, 10)) for (; r--;) {
      c = s("div"), c.id = o ? o[r] : f + (r + 1), d.appendChild(c);
    }
    return a = s("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = u, E.offsetHeight) : d.parentNode.removeChild(d), !!i;
  }

  function u(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function d(e, t, n) {
    var o;

    for (var a in e) {
      if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? f(o, n || t) : o);
    }

    return !1;
  }

  function p(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(t, n, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var a = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (a) {
        var i = a.error ? "error" : "log";
        a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];

    return o;
  }

  function h(t, r) {
    var o = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(p(t[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var a = []; o--;) {
        a.push("(" + p(t[o]) + ":" + r + ")");
      }

      return a = a.join(" or "), c("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == m(e, null, "position");
      });
    }

    return n;
  }

  function v(e, t, o, a) {
    function l() {
      f && (delete F.style, delete F.modElem);
    }

    if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
      var c = h(e, o);
      if (!r(c, "undefined")) return c;
    }

    for (var f, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !F.style && g.length;) {
      f = !0, F.modElem = s(g.shift()), F.style = F.modElem.style;
    }

    for (p = e.length, d = 0; p > d; d++) {
      if (m = e[d], v = F.style[m], u(m, "-") && (m = i(m)), F.style[m] !== n) {
        if (a || r(o, "undefined")) return l(), "pfx" == t ? m : !0;

        try {
          F.style[m] = o;
        } catch (y) {}

        if (F.style[m] != v) return l(), "pfx" == t ? m : !0;
      }
    }

    return l(), !1;
  }

  function g(e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + z.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined") ? v(s, t, o, a) : (s = (e + " " + _.join(i + " ") + i).split(" "), d(s, t, n));
  }

  function y(e, t, r) {
    return g(e, n, n, t, r);
  }

  var S = [],
      C = [],
      x = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      C.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      C.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = x, Modernizr = new Modernizr(), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
  }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  x._prefixes = b;
  var E = t.documentElement,
      w = "svg" === E.nodeName.toLowerCase();
  w || !function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
    }

    function r() {
      var e = S.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }

    function o(e, t) {
      var n = S.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), S.elements = n + " " + e, c(t);
    }

    function a(e) {
      var t = y[e[v]];
      return t || (t = {}, g++, e[v] = g, y[g] = t), t;
    }

    function i(e, n, r) {
      if (n || (n = t), f) return n.createElement(e);
      r || (r = a(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o);
    }

    function s(e, n) {
      if (e || (e = t), f) return e.createDocumentFragment();
      n = n || a(e);

      for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) {
        o.createElement(s[i]);
      }

      return o;
    }

    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return S.shivMethods ? i(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ");return n}")(S, t.frag);
    }

    function c(e) {
      e || (e = t);
      var r = a(e);
      return !S.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e;
    }

    var u,
        f,
        d = "3.7.3",
        p = e.html5 || {},
        m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        v = "_html5shiv",
        g = 0,
        y = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, f = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
        }();
      } catch (n) {
        u = !0, f = !0;
      }
    }();
    var S = {
      elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: d,
      shivCSS: p.shivCSS !== !1,
      supportsUnknownElements: f,
      shivMethods: p.shivMethods !== !1,
      type: "default",
      shivDocument: c,
      createElement: i,
      createDocumentFragment: s,
      addElements: o
    };
    e.html5 = S, c(t), "object" == ( false ? 0 : _typeof(module)) && module.exports && (module.exports = S);
  }("undefined" != typeof e ? e : this, t);

  var T = "Moz O ms Webkit",
      _ = x._config.usePrefixes ? T.toLowerCase().split(" ") : [];

  x._domPrefixes = _, Modernizr.addTest("video", function () {
    var e = s("video"),
        t = !1;

    try {
      t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
    } catch (n) {}

    return t;
  });
  var P = "CSS" in e && "supports" in e.CSS,
      N = ("supportsCSS" in e);
  Modernizr.addTest("supports", P || N);

  var k = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1;
    } : function (t) {
      var n = !1;
      return c("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();

  x.mq = k;
  var z = (x.testStyles = c, x._config.usePrefixes ? T.split(" ") : []);
  x._cssomPrefixes = z;

  var j = function j(t) {
    var r,
        o = b.length,
        a = e.CSSRule;
    if ("undefined" == typeof a) return n;
    if (!t) return !1;
    if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;

    for (var i = 0; o > i; i++) {
      var s = b[i],
          l = s.toUpperCase() + "_" + r;
      if (l in a) return "@-" + s.toLowerCase() + "-" + t;
    }

    return !1;
  };

  x.atRule = j;
  var M = {
    elem: s("modernizr")
  };

  Modernizr._q.push(function () {
    delete M.elem;
  });

  var F = {
    style: M.elem.style
  };
  Modernizr._q.unshift(function () {
    delete F.style;
  }), x.testAllProps = g;

  x.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? g(e, t, n) : g(e, "pfx"));
  };

  x.testAllProps = y, Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)), Modernizr.addTest("csstransforms3d", function () {
    return !!y("perspective", "1px", !0);
  }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("backgroundcliptext", function () {
    return y("backgroundClip", "text");
  }), o(), a(S), delete x.addTest, delete x.addAsyncTest;

  for (var O = 0; O < Modernizr._q.length; O++) {
    Modernizr._q[O]();
  }

  e.Modernizr = Modernizr;
}(window, document);

/***/ }),

/***/ "./resources/js/frontend/custom.js":
/*!*****************************************!*\
  !*** ./resources/js/frontend/custom.js ***!
  \*****************************************/
/***/ (() => {

$(document).ready(function () {
  var token = $('meta[name="csrf-token"]').attr('content');
  /* *** jQuery validate *** */

  /*  Create appointment form */

  $('.create-appointment-form').validate({
    rules: {
      name: 'required',
      phone: {
        required: true,
        digits: true
      },
      email: {
        required: true,
        email: true
      },
      from_hour: {
        required: true,
        digits: true
      },
      from_minute: {
        required: true,
        digits: true
      }
    }
  });
  /* *** Submit an appointment form, via ajax *** */
  // $(".create-appointment-form").submit(function (e) {
  // 	e.preventDefault(); // avoid to execute the actual submit of the form.
  // 	var form = $(this);
  // 	var url = form.attr('action');
  // 	$.ajax({
  // 		type: "POST",
  // 		url: url,
  // 		data: form.serialize(),
  // 		success: function (data) {
  // 			$('.create-appointment-form').prepend(
  // 				'<div class="alert alert-success">' +
  // 					'Programarea a fost trimisă cu succes.' +
  // 				'</div>'
  // 			);
  // 		},
  // 		error: function (data) {
  // 			$('.create-appointment-form').prepend(
  // 				'<div class="alert alert-danger">' +
  // 					'A intervenit o eroare la trimiterea programării. Te rugăm asigură-te că ai completat câmpurile obligatorii.' +
  // 				'</div>'
  // 			);
  // 		}
  // 	});
  // });
});

/***/ }),

/***/ "./resources/js/frontend/plugins/jquery_appear.js":
/*!********************************************************!*\
  !*** ./resources/js/frontend/plugins/jquery_appear.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (n) {
  n.fn.appear = function (r, e) {
    var d = n.extend({
      data: void 0,
      one: !0,
      accX: 0,
      accY: 0
    }, e);
    return this.each(function () {
      var s,
          a,
          e,
          u = n(this);
      u.appeared = !1, r ? (s = n(window), a = function a() {
        var e, a, r, n, p, t, c, i, o, f;
        u.is(":visible") ? (e = s.scrollLeft(), a = s.scrollTop(), r = (f = u.offset()).left, n = f.top, p = d.accX, t = d.accY, c = u.height(), i = s.height(), o = u.width(), f = s.width(), a <= n + c + t && n <= a + i + t && e <= r + o + p && r <= e + f + p ? u.appeared || u.trigger("appear", d.data) : u.appeared = !1) : u.appeared = !1;
      }, e = function e() {
        var e;
        u.appeared = !0, d.one && (s.unbind("scroll", a), 0 <= (e = n.inArray(a, n.fn.appear.checks)) && n.fn.appear.checks.splice(e, 1)), r.apply(this, arguments);
      }, d.one ? u.one("appear", d.data, e) : u.bind("appear", d.data, e), s.scroll(a), n.fn.appear.checks.push(a), a()) : u.trigger("appear", d.data);
    });
  }, n.extend(n.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function checkAll() {
      var e = n.fn.appear.checks.length;
      if (0 < e) for (; e--;) {
        n.fn.appear.checks[e]();
      }
    },
    run: function run() {
      n.fn.appear.timeout && clearTimeout(n.fn.appear.timeout), n.fn.appear.timeout = setTimeout(n.fn.appear.checkAll, 20);
    }
  }), n.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (e, a) {
    var r = n.fn[a];
    r && (n.fn[a] = function () {
      var e = r.apply(this, arguments);
      return n.fn.appear.run(), e;
    });
  });
});

/***/ }),

/***/ "./resources/js/frontend/plugins/jquery_easing.js":
/*!********************************************************!*\
  !*** ./resources/js/frontend/plugins/jquery_easing.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      return factory($);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function swing(x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function easeInQuad(x) {
      return x * x;
    },
    easeOutQuad: function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function easeInOutQuad(x) {
      return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function easeInCubic(x) {
      return x * x * x;
    },
    easeOutCubic: function easeOutCubic(x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function easeInOutCubic(x) {
      return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function easeInQuart(x) {
      return x * x * x * x;
    },
    easeOutQuart: function easeOutQuart(x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function easeInOutQuart(x) {
      return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function easeInQuint(x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function easeOutQuint(x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function easeInOutQuint(x) {
      return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function easeInSine(x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function easeOutSine(x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function easeInOutSine(x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function easeInExpo(x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function easeInOutExpo(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function easeInCirc(x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function easeOutCirc(x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function easeInOutCirc(x) {
      return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function easeInElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function easeOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1;
    },
    easeInOutElastic: function easeInOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function easeInBack(x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function easeOutBack(x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function easeInOutBack(x) {
      return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function easeInBounce(x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function easeInOutBounce(x) {
      return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});

/***/ }),

/***/ "./resources/js/frontend/plugins/jquery_validate/core.js":
/*!***************************************************************!*\
  !*** ./resources/js/frontend/plugins/jquery_validate/core.js ***!
  \***************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$.extend($.fn, {
  // https://jqueryvalidation.org/validate/
  validate: function validate(options) {
    // If nothing is selected, return nothing; can't chain anyway
    if (!this.length) {
      if (options && options.debug && window.console) {
        console.warn("Nothing selected, can't validate, returning nothing.");
      }

      return;
    } // Check if a validator for this form was already created


    var validator = $.data(this[0], "validator");

    if (validator) {
      return validator;
    } // Add novalidate tag if HTML5.


    this.attr("novalidate", "novalidate");
    validator = new $.validator(options, this[0]);
    $.data(this[0], "validator", validator);

    if (validator.settings.onsubmit) {
      this.on("click.validate", ":submit", function (event) {
        // Track the used submit button to properly handle scripted
        // submits later.
        validator.submitButton = event.currentTarget; // Allow suppressing validation by adding a cancel class to the submit button

        if ($(this).hasClass("cancel")) {
          validator.cancelSubmit = true;
        } // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button


        if ($(this).attr("formnovalidate") !== undefined) {
          validator.cancelSubmit = true;
        }
      }); // Validate the form on submit

      this.on("submit.validate", function (event) {
        if (validator.settings.debug) {
          // Prevent form submit to be able to see console output
          event.preventDefault();
        }

        function handle() {
          var hidden, result; // Insert a hidden input as a replacement for the missing submit button
          // The hidden input is inserted in two cases:
          //   - A user defined a `submitHandler`
          //   - There was a pending request due to `remote` method and `stopRequest()`
          //     was called to submit the form in case it's valid

          if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
            hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
          }

          if (validator.settings.submitHandler && !validator.settings.debug) {
            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);

            if (hidden) {
              // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
              hidden.remove();
            }

            if (result !== undefined) {
              return result;
            }

            return false;
          }

          return true;
        } // Prevent submit for invalid forms or custom submit handlers


        if (validator.cancelSubmit) {
          validator.cancelSubmit = false;
          return handle();
        }

        if (validator.form()) {
          if (validator.pendingRequest) {
            validator.formSubmitted = true;
            return false;
          }

          return handle();
        } else {
          validator.focusInvalid();
          return false;
        }
      });
    }

    return validator;
  },
  // https://jqueryvalidation.org/valid/
  valid: function valid() {
    var valid, validator, errorList;

    if ($(this[0]).is("form")) {
      valid = this.validate().form();
    } else {
      errorList = [];
      valid = true;
      validator = $(this[0].form).validate();
      this.each(function () {
        valid = validator.element(this) && valid;

        if (!valid) {
          errorList = errorList.concat(validator.errorList);
        }
      });
      validator.errorList = errorList;
    }

    return valid;
  },
  // https://jqueryvalidation.org/rules/
  rules: function rules(command, argument) {
    var element = this[0],
        isContentEditable = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false",
        settings,
        staticRules,
        existingRules,
        data,
        param,
        filtered; // If nothing is selected, return empty object; can't chain anyway

    if (element == null) {
      return;
    }

    if (!element.form && isContentEditable) {
      element.form = this.closest("form")[0];
      element.name = this.attr("name");
    }

    if (element.form == null) {
      return;
    }

    if (command) {
      settings = $.data(element.form, "validator").settings;
      staticRules = settings.rules;
      existingRules = $.validator.staticRules(element);

      switch (command) {
        case "add":
          $.extend(existingRules, $.validator.normalizeRule(argument)); // Remove messages from rules, but allow them to be set separately

          delete existingRules.messages;
          staticRules[element.name] = existingRules;

          if (argument.messages) {
            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
          }

          break;

        case "remove":
          if (!argument) {
            delete staticRules[element.name];
            return existingRules;
          }

          filtered = {};
          $.each(argument.split(/\s/), function (index, method) {
            filtered[method] = existingRules[method];
            delete existingRules[method];
          });
          return filtered;
      }
    }

    data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element); // Make sure required is at front

    if (data.required) {
      param = data.required;
      delete data.required;
      data = $.extend({
        required: param
      }, data);
    } // Make sure remote is at back


    if (data.remote) {
      param = data.remote;
      delete data.remote;
      data = $.extend(data, {
        remote: param
      });
    }

    return data;
  }
}); // JQuery trim is deprecated, provide a trim method based on String.prototype.trim

var trim = function trim(str) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}; // Custom selectors


$.extend($.expr.pseudos || $.expr[":"], {
  // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
  // https://jqueryvalidation.org/blank-selector/
  blank: function blank(a) {
    return !trim("" + $(a).val());
  },
  // https://jqueryvalidation.org/filled-selector/
  filled: function filled(a) {
    var val = $(a).val();
    return val !== null && !!trim("" + val);
  },
  // https://jqueryvalidation.org/unchecked-selector/
  unchecked: function unchecked(a) {
    return !$(a).prop("checked");
  }
}); // Constructor for validator

$.validator = function (options, form) {
  this.settings = $.extend(true, {}, $.validator.defaults, options);
  this.currentForm = form;
  this.init();
}; // https://jqueryvalidation.org/jQuery.validator.format/


$.validator.format = function (source, params) {
  if (arguments.length === 1) {
    return function () {
      var args = $.makeArray(arguments);
      args.unshift(source);
      return $.validator.format.apply(this, args);
    };
  }

  if (params === undefined) {
    return source;
  }

  if (arguments.length > 2 && params.constructor !== Array) {
    params = $.makeArray(arguments).slice(1);
  }

  if (params.constructor !== Array) {
    params = [params];
  }

  $.each(params, function (i, n) {
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
      return n;
    });
  });
  return source;
};

$.extend($.validator, {
  defaults: {
    messages: {},
    groups: {},
    rules: {},
    errorClass: "error",
    pendingClass: "pending",
    validClass: "valid",
    errorElement: "label",
    focusCleanup: false,
    focusInvalid: true,
    errorContainer: $([]),
    errorLabelContainer: $([]),
    onsubmit: true,
    ignore: ":hidden",
    ignoreTitle: false,
    onfocusin: function onfocusin(element) {
      this.lastActive = element; // Hide error label and remove error class on focus if enabled

      if (this.settings.focusCleanup) {
        if (this.settings.unhighlight) {
          this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
        }

        this.hideThese(this.errorsFor(element));
      }
    },
    onfocusout: function onfocusout(element) {
      if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
        this.element(element);
      }
    },
    onkeyup: function onkeyup(element, event) {
      // Avoid revalidate the field when pressing one of the following keys
      // Shift       => 16
      // Ctrl        => 17
      // Alt         => 18
      // Caps lock   => 20
      // End         => 35
      // Home        => 36
      // Left arrow  => 37
      // Up arrow    => 38
      // Right arrow => 39
      // Down arrow  => 40
      // Insert      => 45
      // Num lock    => 144
      // AltGr key   => 225
      var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];

      if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
        return;
      } else if (element.name in this.submitted || element.name in this.invalid) {
        this.element(element);
      }
    },
    onclick: function onclick(element) {
      // Click on selects, radiobuttons and checkboxes
      if (element.name in this.submitted) {
        this.element(element); // Or option elements, check parent select in that case
      } else if (element.parentNode.name in this.submitted) {
        this.element(element.parentNode);
      }
    },
    highlight: function highlight(element, errorClass, validClass) {
      if (element.type === "radio") {
        this.findByName(element.name).addClass(errorClass).removeClass(validClass);
      } else {
        $(element).addClass(errorClass).removeClass(validClass);
      }
    },
    unhighlight: function unhighlight(element, errorClass, validClass) {
      if (element.type === "radio") {
        this.findByName(element.name).removeClass(errorClass).addClass(validClass);
      } else {
        $(element).removeClass(errorClass).addClass(validClass);
      }
    }
  },
  // https://jqueryvalidation.org/jQuery.validator.setDefaults/
  setDefaults: function setDefaults(settings) {
    $.extend($.validator.defaults, settings);
  },
  messages: {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    equalTo: "Please enter the same value again.",
    maxlength: $.validator.format("Please enter no more than {0} characters."),
    minlength: $.validator.format("Please enter at least {0} characters."),
    rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
    range: $.validator.format("Please enter a value between {0} and {1}."),
    max: $.validator.format("Please enter a value less than or equal to {0}."),
    min: $.validator.format("Please enter a value greater than or equal to {0}."),
    step: $.validator.format("Please enter a multiple of {0}.")
  },
  autoCreateRanges: false,
  prototype: {
    init: function init() {
      this.labelContainer = $(this.settings.errorLabelContainer);
      this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
      this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
      this.submitted = {};
      this.valueCache = {};
      this.pendingRequest = 0;
      this.pending = {};
      this.invalid = {};
      this.reset();
      var currentForm = this.currentForm,
          groups = this.groups = {},
          rules;
      $.each(this.settings.groups, function (key, value) {
        if (typeof value === "string") {
          value = value.split(/\s/);
        }

        $.each(value, function (index, name) {
          groups[name] = key;
        });
      });
      rules = this.settings.rules;
      $.each(rules, function (key, value) {
        rules[key] = $.validator.normalizeRule(value);
      });

      function delegate(event) {
        var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false"; // Set form expando on contenteditable

        if (!this.form && isContentEditable) {
          this.form = $(this).closest("form")[0];
          this.name = $(this).attr("name");
        } // Ignore the element if it belongs to another form. This will happen mainly
        // when setting the `form` attribute of an input to the id of another form.


        if (currentForm !== this.form) {
          return;
        }

        var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;

        if (settings[eventType] && !$(this).is(settings.ignore)) {
          settings[eventType].call(validator, this, event);
        }
      }

      $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate) // Support: Chrome, oldIE
      // "select" is provided as event.target when clicking a option
      .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

      if (this.settings.invalidHandler) {
        $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }
    },
    // https://jqueryvalidation.org/Validator.form/
    form: function form() {
      this.checkForm();
      $.extend(this.submitted, this.errorMap);
      this.invalid = $.extend({}, this.errorMap);

      if (!this.valid()) {
        $(this.currentForm).triggerHandler("invalid-form", [this]);
      }

      this.showErrors();
      return this.valid();
    },
    checkForm: function checkForm() {
      this.prepareForm();

      for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
        this.check(elements[i]);
      }

      return this.valid();
    },
    // https://jqueryvalidation.org/Validator.element/
    element: function element(_element) {
      var cleanElement = this.clean(_element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs,
          group;

      if (checkElement === undefined) {
        delete this.invalid[cleanElement.name];
      } else {
        this.prepareElement(checkElement);
        this.currentElements = $(checkElement); // If this element is grouped, then validate all group elements already
        // containing a value

        group = this.groups[checkElement.name];

        if (group) {
          $.each(this.groups, function (name, testgroup) {
            if (testgroup === group && name !== checkElement.name) {
              cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));

              if (cleanElement && cleanElement.name in v.invalid) {
                v.currentElements.push(cleanElement);
                result = v.check(cleanElement) && result;
              }
            }
          });
        }

        rs = this.check(checkElement) !== false;
        result = result && rs;

        if (rs) {
          this.invalid[checkElement.name] = false;
        } else {
          this.invalid[checkElement.name] = true;
        }

        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }

        this.showErrors(); // Add aria-invalid status for screen readers

        $(_element).attr("aria-invalid", !rs);
      }

      return result;
    },
    // https://jqueryvalidation.org/Validator.showErrors/
    showErrors: function showErrors(errors) {
      if (errors) {
        var validator = this; // Add items to error list and map

        $.extend(this.errorMap, errors);
        this.errorList = $.map(this.errorMap, function (message, name) {
          return {
            message: message,
            element: validator.findByName(name)[0]
          };
        }); // Remove items from success list

        this.successList = $.grep(this.successList, function (element) {
          return !(element.name in errors);
        });
      }

      if (this.settings.showErrors) {
        this.settings.showErrors.call(this, this.errorMap, this.errorList);
      } else {
        this.defaultShowErrors();
      }
    },
    // https://jqueryvalidation.org/Validator.resetForm/
    resetForm: function resetForm() {
      if ($.fn.resetForm) {
        $(this.currentForm).resetForm();
      }

      this.invalid = {};
      this.submitted = {};
      this.prepareForm();
      this.hideErrors();
      var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
      this.resetElements(elements);
    },
    resetElements: function resetElements(elements) {
      var i;

      if (this.settings.unhighlight) {
        for (i = 0; elements[i]; i++) {
          this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
          this.findByName(elements[i].name).removeClass(this.settings.validClass);
        }
      } else {
        elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }
    },
    numberOfInvalids: function numberOfInvalids() {
      return this.objectLength(this.invalid);
    },
    objectLength: function objectLength(obj) {
      /* jshint unused: false */
      var count = 0,
          i;

      for (i in obj) {
        // This check allows counting elements with empty error
        // message as invalid elements
        if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
          count++;
        }
      }

      return count;
    },
    hideErrors: function hideErrors() {
      this.hideThese(this.toHide);
    },
    hideThese: function hideThese(errors) {
      errors.not(this.containers).text("");
      this.addWrapper(errors).hide();
    },
    valid: function valid() {
      return this.size() === 0;
    },
    size: function size() {
      return this.errorList.length;
    },
    focusInvalid: function focusInvalid() {
      if (this.settings.focusInvalid) {
        try {
          $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus") // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
          .trigger("focusin");
        } catch (e) {// Ignore IE throwing errors when focusing hidden elements
        }
      }
    },
    findLastActive: function findLastActive() {
      var lastActive = this.lastActive;
      return lastActive && $.grep(this.errorList, function (n) {
        return n.element.name === lastActive.name;
      }).length === 1 && lastActive;
    },
    elements: function elements() {
      var validator = this,
          rulesCache = {}; // Select all valid inputs inside the form (no submit or reset buttons)

      return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
        var name = this.name || $(this).attr("name"); // For contenteditable

        var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false";

        if (!name && validator.settings.debug && window.console) {
          console.error("%o has no name assigned", this);
        } // Set form expando on contenteditable


        if (isContentEditable) {
          this.form = $(this).closest("form")[0];
          this.name = name;
        } // Ignore elements that belong to other/nested forms


        if (this.form !== validator.currentForm) {
          return false;
        } // Select only the first element for each name, and only those with rules specified


        if (name in rulesCache || !validator.objectLength($(this).rules())) {
          return false;
        }

        rulesCache[name] = true;
        return true;
      });
    },
    clean: function clean(selector) {
      return $(selector)[0];
    },
    errors: function errors() {
      var errorClass = this.settings.errorClass.split(" ").join(".");
      return $(this.settings.errorElement + "." + errorClass, this.errorContext);
    },
    resetInternals: function resetInternals() {
      this.successList = [];
      this.errorList = [];
      this.errorMap = {};
      this.toShow = $([]);
      this.toHide = $([]);
    },
    reset: function reset() {
      this.resetInternals();
      this.currentElements = $([]);
    },
    prepareForm: function prepareForm() {
      this.reset();
      this.toHide = this.errors().add(this.containers);
    },
    prepareElement: function prepareElement(element) {
      this.reset();
      this.toHide = this.errorsFor(element);
    },
    elementValue: function elementValue(element) {
      var $element = $(element),
          type = element.type,
          isContentEditable = typeof $element.attr("contenteditable") !== "undefined" && $element.attr("contenteditable") !== "false",
          val,
          idx;

      if (type === "radio" || type === "checkbox") {
        return this.findByName(element.name).filter(":checked").val();
      } else if (type === "number" && typeof element.validity !== "undefined") {
        return element.validity.badInput ? "NaN" : $element.val();
      }

      if (isContentEditable) {
        val = $element.text();
      } else {
        val = $element.val();
      }

      if (type === "file") {
        // Modern browser (chrome & safari)
        if (val.substr(0, 12) === "C:\\fakepath\\") {
          return val.substr(12);
        } // Legacy browsers
        // Unix-based path


        idx = val.lastIndexOf("/");

        if (idx >= 0) {
          return val.substr(idx + 1);
        } // Windows-based path


        idx = val.lastIndexOf("\\");

        if (idx >= 0) {
          return val.substr(idx + 1);
        } // Just the file name


        return val;
      }

      if (typeof val === "string") {
        return val.replace(/\r/g, "");
      }

      return val;
    },
    check: function check(element) {
      element = this.validationTargetFor(this.clean(element));
      var rules = $(element).rules(),
          rulesCount = $.map(rules, function (n, i) {
        return i;
      }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result,
          method,
          rule,
          normalizer; // Prioritize the local normalizer defined for this element over the global one
      // if the former exists, otherwise user the global one in case it exists.

      if (typeof rules.normalizer === "function") {
        normalizer = rules.normalizer;
      } else if (typeof this.settings.normalizer === "function") {
        normalizer = this.settings.normalizer;
      } // If normalizer is defined, then call it to retreive the changed value instead
      // of using the real one.
      // Note that `this` in the normalizer is `element`.


      if (normalizer) {
        val = normalizer.call(element, val); // Delete the normalizer from rules to avoid treating it as a pre-defined method.

        delete rules.normalizer;
      }

      for (method in rules) {
        rule = {
          method: method,
          parameters: rules[method]
        };

        try {
          result = $.validator.methods[method].call(this, val, element, rule.parameters); // If a method indicates that the field is optional and therefore valid,
          // don't mark it as valid when there are no other rules

          if (result === "dependency-mismatch" && rulesCount === 1) {
            dependencyMismatch = true;
            continue;
          }

          dependencyMismatch = false;

          if (result === "pending") {
            this.toHide = this.toHide.not(this.errorsFor(element));
            return;
          }

          if (!result) {
            this.formatAndAdd(element, rule);
            return false;
          }
        } catch (e) {
          if (this.settings.debug && window.console) {
            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
          }

          if (e instanceof TypeError) {
            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
          }

          throw e;
        }
      }

      if (dependencyMismatch) {
        return;
      }

      if (this.objectLength(rules)) {
        this.successList.push(element);
      }

      return true;
    },
    // Return the custom message for the given element and validation method
    // specified in the element's HTML5 data attribute
    // return the generic message if present and no method specific message is present
    customDataMessage: function customDataMessage(element, method) {
      return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
    },
    // Return the custom message for the given element name and validation method
    customMessage: function customMessage(name, method) {
      var m = this.settings.messages[name];
      return m && (m.constructor === String ? m : m[method]);
    },
    // Return the first defined argument, allowing empty strings
    findDefined: function findDefined() {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) {
          return arguments[i];
        }
      }

      return undefined;
    },
    // The second parameter 'rule' used to be a string, and extended to an object literal
    // of the following form:
    // rule = {
    //     method: "method name",
    //     parameters: "the given method parameters"
    // }
    //
    // The old behavior still supported, kept to maintain backward compatibility with
    // old code, and will be removed in the next major release.
    defaultMessage: function defaultMessage(element, rule) {
      if (typeof rule === "string") {
        rule = {
          method: rule
        };
      }

      var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), // 'title' is never undefined, so handle empty string as undefined
      !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
          theregex = /\$?\{(\d+)\}/g;

      if (typeof message === "function") {
        message = message.call(this, rule.parameters, element);
      } else if (theregex.test(message)) {
        message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
      }

      return message;
    },
    formatAndAdd: function formatAndAdd(element, rule) {
      var message = this.defaultMessage(element, rule);
      this.errorList.push({
        message: message,
        element: element,
        method: rule.method
      });
      this.errorMap[element.name] = message;
      this.submitted[element.name] = message;
    },
    addWrapper: function addWrapper(toToggle) {
      if (this.settings.wrapper) {
        toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
      }

      return toToggle;
    },
    defaultShowErrors: function defaultShowErrors() {
      var i, elements, error;

      for (i = 0; this.errorList[i]; i++) {
        error = this.errorList[i];

        if (this.settings.highlight) {
          this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
        }

        this.showLabel(error.element, error.message);
      }

      if (this.errorList.length) {
        this.toShow = this.toShow.add(this.containers);
      }

      if (this.settings.success) {
        for (i = 0; this.successList[i]; i++) {
          this.showLabel(this.successList[i]);
        }
      }

      if (this.settings.unhighlight) {
        for (i = 0, elements = this.validElements(); elements[i]; i++) {
          this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
        }
      }

      this.toHide = this.toHide.not(this.toShow);
      this.hideErrors();
      this.addWrapper(this.toShow).show();
    },
    validElements: function validElements() {
      return this.currentElements.not(this.invalidElements());
    },
    invalidElements: function invalidElements() {
      return $(this.errorList).map(function () {
        return this.element;
      });
    },
    showLabel: function showLabel(element, message) {
      var place,
          group,
          errorID,
          v,
          error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");

      if (error.length) {
        // Refresh error/success class
        error.removeClass(this.settings.validClass).addClass(this.settings.errorClass); // Replace message on existing label

        error.html(message);
      } else {
        // Create error element
        error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""); // Maintain reference to the element to be placed into the DOM

        place = error;

        if (this.settings.wrapper) {
          // Make sure the element is visible, even in IE
          // actually showing the wrapped element is handled elsewhere
          place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
        }

        if (this.labelContainer.length) {
          this.labelContainer.append(place);
        } else if (this.settings.errorPlacement) {
          this.settings.errorPlacement.call(this, place, $(element));
        } else {
          place.insertAfter(element);
        } // Link error back to the element


        if (error.is("label")) {
          // If the error is a label, then associate using 'for'
          error.attr("for", elementID); // If the element is not a child of an associated label, then it's necessary
          // to explicitly apply aria-describedby
        } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
          errorID = error.attr("id"); // Respect existing non-error aria-describedby

          if (!describedBy) {
            describedBy = errorID;
          } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
            // Add to end of list if not already present
            describedBy += " " + errorID;
          }

          $(element).attr("aria-describedby", describedBy); // If this element is grouped, then assign to all elements in the same group

          group = this.groups[element.name];

          if (group) {
            v = this;
            $.each(v.groups, function (name, testgroup) {
              if (testgroup === group) {
                $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
              }
            });
          }
        }
      }

      if (!message && this.settings.success) {
        error.text("");

        if (typeof this.settings.success === "string") {
          error.addClass(this.settings.success);
        } else {
          this.settings.success(error, element);
        }
      }

      this.toShow = this.toShow.add(error);
    },
    errorsFor: function errorsFor(element) {
      var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *"; // 'aria-describedby' should directly reference the error element

      if (describer) {
        selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
      }

      return this.errors().filter(selector);
    },
    // See https://api.jquery.com/category/selectors/, for CSS
    // meta-characters that should be escaped in order to be used with JQuery
    // as a literal part of a name/id or any selector.
    escapeCssMeta: function escapeCssMeta(string) {
      if (string === undefined) return "";
      return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
    },
    idOrName: function idOrName(element) {
      return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
    },
    validationTargetFor: function validationTargetFor(element) {
      // If radio/checkbox, validate first element in group instead
      if (this.checkable(element)) {
        element = this.findByName(element.name);
      } // Always apply ignore filter


      return $(element).not(this.settings.ignore)[0];
    },
    checkable: function checkable(element) {
      return /radio|checkbox/i.test(element.type);
    },
    findByName: function findByName(name) {
      return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
    },
    getLength: function getLength(value, element) {
      switch (element.nodeName.toLowerCase()) {
        case "select":
          return $("option:selected", element).length;

        case "input":
          if (this.checkable(element)) {
            return this.findByName(element.name).filter(":checked").length;
          }

      }

      return value.length;
    },
    depend: function depend(param, element) {
      return this.dependTypes[_typeof(param)] ? this.dependTypes[_typeof(param)](param, element) : true;
    },
    dependTypes: {
      "boolean": function boolean(param) {
        return param;
      },
      "string": function string(param, element) {
        return !!$(param, element.form).length;
      },
      "function": function _function(param, element) {
        return param(element);
      }
    },
    optional: function optional(element) {
      var val = this.elementValue(element);
      return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
    },
    startRequest: function startRequest(element) {
      if (!this.pending[element.name]) {
        this.pendingRequest++;
        $(element).addClass(this.settings.pendingClass);
        this.pending[element.name] = true;
      }
    },
    stopRequest: function stopRequest(element, valid) {
      this.pendingRequest--; // Sometimes synchronization fails, make sure pendingRequest is never < 0

      if (this.pendingRequest < 0) {
        this.pendingRequest = 0;
      }

      delete this.pending[element.name];
      $(element).removeClass(this.settings.pendingClass);

      if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
        $(this.currentForm).submit(); // Remove the hidden input that was used as a replacement for the
        // missing submit button. The hidden input is added by `handle()`
        // to ensure that the value of the used submit button is passed on
        // for scripted submits triggered by this method

        if (this.submitButton) {
          $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
        }

        this.formSubmitted = false;
      } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
        $(this.currentForm).triggerHandler("invalid-form", [this]);
        this.formSubmitted = false;
      }
    },
    previousValue: function previousValue(element, method) {
      method = typeof method === "string" && method || "remote";
      return $.data(element, "previousValue") || $.data(element, "previousValue", {
        old: null,
        valid: true,
        message: this.defaultMessage(element, {
          method: method
        })
      });
    },
    // Cleans up all forms and elements, removes validator-specific events
    destroy: function destroy() {
      this.resetForm();
      $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
    }
  },
  classRuleSettings: {
    required: {
      required: true
    },
    email: {
      email: true
    },
    url: {
      url: true
    },
    date: {
      date: true
    },
    dateISO: {
      dateISO: true
    },
    number: {
      number: true
    },
    digits: {
      digits: true
    },
    creditcard: {
      creditcard: true
    }
  },
  addClassRules: function addClassRules(className, rules) {
    if (className.constructor === String) {
      this.classRuleSettings[className] = rules;
    } else {
      $.extend(this.classRuleSettings, className);
    }
  },
  classRules: function classRules(element) {
    var rules = {},
        classes = $(element).attr("class");

    if (classes) {
      $.each(classes.split(" "), function () {
        if (this in $.validator.classRuleSettings) {
          $.extend(rules, $.validator.classRuleSettings[this]);
        }
      });
    }

    return rules;
  },
  normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {
    // Convert the value to a number for number inputs, and for text for backwards compability
    // allows type="date" and others to be compared as strings
    if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
      value = Number(value); // Support Opera Mini, which returns NaN for undefined minlength

      if (isNaN(value)) {
        value = undefined;
      }
    }

    if (value || value === 0) {
      rules[method] = value;
    } else if (type === method && type !== "range") {
      // Exception: the jquery validate 'range' method
      // does not test for the html5 'range' type
      rules[method] = true;
    }
  },
  attributeRules: function attributeRules(element) {
    var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;

    for (method in $.validator.methods) {
      // Support for <input required> in both html5 and older browsers
      if (method === "required") {
        value = element.getAttribute(method); // Some browsers return an empty string for the required attribute
        // and non-HTML5 browsers might have required="" markup

        if (value === "") {
          value = true;
        } // Force non-HTML5 browsers to return bool


        value = !!value;
      } else {
        value = $element.attr(method);
      }

      this.normalizeAttributeRule(rules, type, method, value);
    } // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs


    if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
      delete rules.maxlength;
    }

    return rules;
  },
  dataRules: function dataRules(element) {
    var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;

    for (method in $.validator.methods) {
      value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()); // Cast empty attributes like `data-rule-required` to `true`

      if (value === "") {
        value = true;
      }

      this.normalizeAttributeRule(rules, type, method, value);
    }

    return rules;
  },
  staticRules: function staticRules(element) {
    var rules = {},
        validator = $.data(element.form, "validator");

    if (validator.settings.rules) {
      rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
    }

    return rules;
  },
  normalizeRules: function normalizeRules(rules, element) {
    // Handle dependency check
    $.each(rules, function (prop, val) {
      // Ignore rule when param is explicitly false, eg. required:false
      if (val === false) {
        delete rules[prop];
        return;
      }

      if (val.param || val.depends) {
        var keepRule = true;

        switch (_typeof(val.depends)) {
          case "string":
            keepRule = !!$(val.depends, element.form).length;
            break;

          case "function":
            keepRule = val.depends.call(element, element);
            break;
        }

        if (keepRule) {
          rules[prop] = val.param !== undefined ? val.param : true;
        } else {
          $.data(element.form, "validator").resetElements($(element));
          delete rules[prop];
        }
      }
    }); // Evaluate parameters

    $.each(rules, function (rule, parameter) {
      rules[rule] = typeof parameter === "function" && rule !== "normalizer" ? parameter(element) : parameter;
    }); // Clean number parameters

    $.each(["minlength", "maxlength"], function () {
      if (rules[this]) {
        rules[this] = Number(rules[this]);
      }
    });
    $.each(["rangelength", "range"], function () {
      var parts;

      if (rules[this]) {
        if (Array.isArray(rules[this])) {
          rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
        } else if (typeof rules[this] === "string") {
          parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
          rules[this] = [Number(parts[0]), Number(parts[1])];
        }
      }
    });

    if ($.validator.autoCreateRanges) {
      // Auto-create ranges
      if (rules.min != null && rules.max != null) {
        rules.range = [rules.min, rules.max];
        delete rules.min;
        delete rules.max;
      }

      if (rules.minlength != null && rules.maxlength != null) {
        rules.rangelength = [rules.minlength, rules.maxlength];
        delete rules.minlength;
        delete rules.maxlength;
      }
    }

    return rules;
  },
  // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
  normalizeRule: function normalizeRule(data) {
    if (typeof data === "string") {
      var transformed = {};
      $.each(data.split(/\s/), function () {
        transformed[this] = true;
      });
      data = transformed;
    }

    return data;
  },
  // https://jqueryvalidation.org/jQuery.validator.addMethod/
  addMethod: function addMethod(name, method, message) {
    $.validator.methods[name] = method;
    $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];

    if (method.length < 3) {
      $.validator.addClassRules(name, $.validator.normalizeRule(name));
    }
  },
  // https://jqueryvalidation.org/jQuery.validator.methods/
  methods: {
    // https://jqueryvalidation.org/required-method/
    required: function required(value, element, param) {
      // Check if dependency is met
      if (!this.depend(param, element)) {
        return "dependency-mismatch";
      }

      if (element.nodeName.toLowerCase() === "select") {
        // Could be an array for select-multiple or a string, both are fine this way
        var val = $(element).val();
        return val && val.length > 0;
      }

      if (this.checkable(element)) {
        return this.getLength(value, element) > 0;
      }

      return value !== undefined && value !== null && value.length > 0;
    },
    // https://jqueryvalidation.org/email-method/
    email: function email(value, element) {
      // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
      // Retrieved 2014-01-14
      // If you have a problem with this implementation, report a bug against the above spec
      // Or use custom methods to implement your own email validation
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    },
    // https://jqueryvalidation.org/url-method/
    url: function url(value, element) {
      // Copyright (c) 2010-2013 Diego Perini, MIT licensed
      // https://gist.github.com/dperini/729294
      // see also https://mathiasbynens.be/demo/url-regex
      // modified to allow protocol-relative URLs
      return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },
    // https://jqueryvalidation.org/date-method/
    date: function () {
      var called = false;
      return function (value, element) {
        if (!called) {
          called = true;

          if (this.settings.debug && window.console) {
            console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.");
          }
        }

        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      };
    }(),
    // https://jqueryvalidation.org/dateISO-method/
    dateISO: function dateISO(value, element) {
      return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    },
    // https://jqueryvalidation.org/number-method/
    number: function number(value, element) {
      return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },
    // https://jqueryvalidation.org/digits-method/
    digits: function digits(value, element) {
      return this.optional(element) || /^\d+$/.test(value);
    },
    // https://jqueryvalidation.org/minlength-method/
    minlength: function minlength(value, element, param) {
      var length = Array.isArray(value) ? value.length : this.getLength(value, element);
      return this.optional(element) || length >= param;
    },
    // https://jqueryvalidation.org/maxlength-method/
    maxlength: function maxlength(value, element, param) {
      var length = Array.isArray(value) ? value.length : this.getLength(value, element);
      return this.optional(element) || length <= param;
    },
    // https://jqueryvalidation.org/rangelength-method/
    rangelength: function rangelength(value, element, param) {
      var length = Array.isArray(value) ? value.length : this.getLength(value, element);
      return this.optional(element) || length >= param[0] && length <= param[1];
    },
    // https://jqueryvalidation.org/min-method/
    min: function min(value, element, param) {
      return this.optional(element) || value >= param;
    },
    // https://jqueryvalidation.org/max-method/
    max: function max(value, element, param) {
      return this.optional(element) || value <= param;
    },
    // https://jqueryvalidation.org/range-method/
    range: function range(value, element, param) {
      return this.optional(element) || value >= param[0] && value <= param[1];
    },
    // https://jqueryvalidation.org/step-method/
    step: function step(value, element, param) {
      var type = $(element).attr("type"),
          errorMessage = "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function decimalPlaces(num) {
        var match = ("" + num).match(/(?:\.(\d+))?$/);

        if (!match) {
          return 0;
        } // Number of digits right of decimal point.


        return match[1] ? match[1].length : 0;
      },
          toInt = function toInt(num) {
        return Math.round(num * Math.pow(10, decimals));
      },
          valid = true,
          decimals; // Works only for text, number and range input types
      // TODO find a way to support input types date, datetime, datetime-local, month, time and week


      if (notSupported) {
        throw new Error(errorMessage);
      }

      decimals = decimalPlaces(param); // Value can't have too many decimals

      if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
        valid = false;
      }

      return this.optional(element) || valid;
    },
    // https://jqueryvalidation.org/equalTo-method/
    equalTo: function equalTo(value, element, param) {
      // Bind to the blur event of the target in order to revalidate whenever the target field is updated
      var target = $(param);

      if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
        target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          $(element).valid();
        });
      }

      return value === target.val();
    },
    // https://jqueryvalidation.org/remote-method/
    remote: function remote(value, element, param, method) {
      if (this.optional(element)) {
        return "dependency-mismatch";
      }

      method = typeof method === "string" && method || "remote";
      var previous = this.previousValue(element, method),
          validator,
          data,
          optionDataString;

      if (!this.settings.messages[element.name]) {
        this.settings.messages[element.name] = {};
      }

      previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
      this.settings.messages[element.name][method] = previous.message;
      param = typeof param === "string" && {
        url: param
      } || param;
      optionDataString = $.param($.extend({
        data: value
      }, param.data));

      if (previous.old === optionDataString) {
        return previous.valid;
      }

      previous.old = optionDataString;
      validator = this;
      this.startRequest(element);
      data = {};
      data[element.name] = value;
      $.ajax($.extend(true, {
        mode: "abort",
        port: "validate" + element.name,
        dataType: "json",
        data: data,
        context: validator.currentForm,
        success: function success(response) {
          var valid = response === true || response === "true",
              errors,
              message,
              submitted;
          validator.settings.messages[element.name][method] = previous.originalMessage;

          if (valid) {
            submitted = validator.formSubmitted;
            validator.resetInternals();
            validator.toHide = validator.errorsFor(element);
            validator.formSubmitted = submitted;
            validator.successList.push(element);
            validator.invalid[element.name] = false;
            validator.showErrors();
          } else {
            errors = {};
            message = response || validator.defaultMessage(element, {
              method: method,
              parameters: value
            });
            errors[element.name] = previous.message = message;
            validator.invalid[element.name] = true;
            validator.showErrors(errors);
          }

          previous.valid = valid;
          validator.stopRequest(element, valid);
        }
      }, param));
      return "pending";
    }
  }
});

/***/ }),

/***/ "./resources/js/frontend/plugins/jquery_validate/localization/messages_ro.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/frontend/plugins/jquery_validate/localization/messages_ro.js ***!
  \***********************************************************************************/
/***/ (() => {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RO (Romanian, limba română)
 */
$.extend($.validator.messages, {
  required: "Acest câmp este obligatoriu.",
  remote: "Te rugăm să completezi acest câmp.",
  email: "Te rugăm să introduci o adresă de email validă",
  url: "Te rugăm sa introduci o adresă URL validă.",
  date: "Te rugăm să introduci o dată corectă.",
  dateISO: "Te rugăm să introduci o dată (ISO) corectă.",
  number: "Te rugăm să introduci un număr întreg valid.",
  digits: "Te rugăm să introduci doar cifre.",
  creditcard: "Te rugăm să introduci un numar de carte de credit valid.",
  equalTo: "Te rugăm să reintroduci valoarea.",
  extension: "Te rugăm să introduci o valoare cu o extensie validă.",
  maxlength: $.validator.format("Te rugăm să nu introduci mai mult de {0} caractere."),
  minlength: $.validator.format("Te rugăm să introduci cel puțin {0} caractere."),
  rangelength: $.validator.format("Te rugăm să introduci o valoare între {0} și {1} caractere."),
  range: $.validator.format("Te rugăm să introduci o valoare între {0} și {1}."),
  max: $.validator.format("Te rugăm să introduci o valoare egal sau mai mică decât {0}."),
  min: $.validator.format("Te rugăm să introduci o valoare egal sau mai mare decât {0}.")
});

/***/ }),

/***/ "./resources/js/frontend/theme/theme_init.js":
/*!***************************************************!*\
  !*** ./resources/js/frontend/theme/theme_init.js ***!
  \***************************************************/
/***/ (function() {

// Commom Plugins
(function ($) {
  'use strict'; // Scroll to Top Button.

  if (typeof theme.PluginScrollToTop !== 'undefined') {
    theme.PluginScrollToTop.initialize();
  } // Tooltips


  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  }); // Popovers

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  }); // Validations

  if ($.isFunction($.validator) && typeof theme.PluginValidation !== 'undefined') {
    theme.PluginValidation.initialize();
  } // Marquee


  $('.marquee').marquee({
    duration: 5000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
  }); // Animate

  if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
    theme.fn.dynIntObsInit('[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults);
  } // Animated Letters


  if ($.isFunction($.fn['themePluginAnimatedLetters']) && ($('[data-plugin-animated-letters]').length || $('.animated-letters').length)) {
    theme.fn.intObsInit('[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedLetters');
  } // Before / After


  if ($.isFunction($.fn['themePluginBeforeAfter']) && $('[data-plugin-before-after]').length) {
    theme.fn.intObsInit('[data-plugin-before-after]:not(.manual)', 'themePluginBeforeAfter');
  } // Carousel Light


  if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
    theme.fn.intObsInit('.owl-carousel-light', 'themePluginCarouselLight');
  } // Carousel


  if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
    theme.fn.intObsInit('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel');
  } // Chart.Circular


  if ($.isFunction($.fn['themePluginChartCircular']) && ($('[data-plugin-chart-circular]').length || $('.circular-bar-chart').length)) {
    theme.fn.dynIntObsInit('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)', 'themePluginChartCircular', theme.PluginChartCircular.defaults);
  } // Countdown


  if ($.isFunction($.fn['themePluginCountdown']) && ($('[data-plugin-countdown]').length || $('.countdown').length)) {
    theme.fn.intObsInit('[data-plugin-countdown]:not(.manual), .countdown', 'themePluginCountdown');
  } // Counter


  if ($.isFunction($.fn['themePluginCounter']) && ($('[data-plugin-counter]').length || $('.counters [data-to]').length)) {
    theme.fn.dynIntObsInit('[data-plugin-counter]:not(.manual), .counters [data-to]', 'themePluginCounter', theme.PluginCounter.defaults);
  } // Cursor Effect


  if ($.isFunction($.fn['themePluginCursorEffect']) && $('[data-plugin-cursor-effect]').length) {
    theme.fn.intObsInit('[data-plugin-cursor-effect]:not(.manual)', 'themePluginCursorEffect');
  } // Float Element


  if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
    theme.fn.intObsInit('[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement');
  } // GDPR


  if ($.isFunction($.fn['themePluginGDPR']) && $('[data-plugin-gdpr]').length) {
    $(function () {
      $('[data-plugin-gdpr]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginGDPR(opts);
      });
    });
  } // GDPR Wrapper


  if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {
    $(function () {
      $('[data-plugin-gdpr-wrapper]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginGDPRWrapper(opts);
      });
    });
  } // Hover Effect


  if ($.isFunction($.fn['themePluginHoverEffect']) && $('[data-plugin-hover-effect], .hover-effect-3d').length) {
    theme.fn.intObsInit('[data-plugin-hover-effect]:not(.manual), .hover-effect-3d:not(.manual)', 'themePluginHoverEffect');
  } // Animated Icon


  if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
    theme.fn.dynIntObsInit('[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults);
  } // In Viewport Style


  if ($.isFunction($.fn['themePluginInViewportStyle']) && $('[data-inviewport-style]').length) {
    $(function () {
      $('[data-inviewport-style]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginInViewportStyle(opts);
      });
    });
  } // Lightbox


  if ($.isFunction($.fn['themePluginLightbox']) && ($('[data-plugin-lightbox]').length || $('.lightbox').length)) {
    theme.fn.execOnceTroughEvent('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)', 'mouseover.trigger.lightbox', function () {
      var $this = $(this),
          opts;
      var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginLightbox(opts);
    });
  } // Masonry


  if ($.isFunction($.fn['themePluginMasonry']) && $('[data-plugin-masonry]').length) {
    $(function () {
      $('[data-plugin-masonry]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMasonry(opts);
      });
    });
  } // Match Height


  if ($.isFunction($.fn['themePluginMatchHeight']) && $('[data-plugin-match-height]').length) {
    $(function () {
      $('[data-plugin-match-height]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMatchHeight(opts);
      });
    });
  } // Parallax


  if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
    theme.fn.intObsInit('[data-plugin-parallax]:not(.manual)', 'themePluginParallax');
  } // Progress Bar


  if ($.isFunction($.fn['themePluginProgressBar']) && ($('[data-plugin-progress-bar]') || $('[data-appear-progress-animation]').length)) {
    theme.fn.dynIntObsInit('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]', 'themePluginProgressBar', theme.PluginProgressBar.defaults);
  } // Random Images


  if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
    theme.fn.dynIntObsInit('.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults);
  } // Read More


  if ($.isFunction($.fn['themePluginReadMore']) && $('[data-plugin-readmore]').length) {
    theme.fn.intObsInit('[data-plugin-readmore]:not(.manual)', 'themePluginReadMore');
  } // Revolution Slider


  if ($.isFunction($.fn['themePluginRevolutionSlider']) && ($('[data-plugin-revolution-slider]').length || $('.slider-container .slider').length)) {
    $(function () {
      $('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginRevolutionSlider(opts);
      });
    });
  } // Scroll Spy


  if ($.isFunction($.fn['themePluginScrollSpy']) && $('[data-plugin-scroll-spy]').length) {
    $(function () {
      $('[data-plugin-scroll-spy]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginScrollSpy(opts);
      });
    });
  } // Scrollable


  if ($.isFunction($.fn['nanoScroller']) && $('[data-plugin-scrollable]').length) {
    theme.fn.intObsInit('[data-plugin-scrollable]', 'themePluginScrollable');
  } // Section Scroll


  if ($.isFunction($.fn['themePluginSectionScroll']) && $('[data-plugin-section-scroll]').length) {
    $(function () {
      $('[data-plugin-section-scroll]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSectionScroll(opts);
      });
    });
  } // Sort


  if ($.isFunction($.fn['themePluginSort']) && ($('[data-plugin-sort]').length || $('.sort-source').length)) {
    theme.fn.intObsInit('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort');
  } // Star Rating


  if ($.isFunction($.fn['themePluginStarRating']) && $('[data-plugin-star-rating]').length) {
    theme.fn.intObsInit('[data-plugin-star-rating]:not(.manual)', 'themePluginStarRating');
  } // Sticky


  if ($.isFunction($.fn['themePluginSticky']) && $('[data-plugin-sticky]').length) {
    theme.fn.execOnceTroughWindowEvent(window, 'scroll.trigger.sticky', function () {
      $('[data-plugin-sticky]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSticky(opts);
      });
    });
  } // Toggle


  if ($.isFunction($.fn['themePluginToggle']) && $('[data-plugin-toggle]').length) {
    theme.fn.intObsInit('[data-plugin-toggle]:not(.manual)', 'themePluginToggle');
  } // Tweets


  if ($.isFunction($.fn['themePluginTweets']) && $('[data-plugin-tweets]').length) {
    $(function () {
      $('[data-plugin-tweets]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTweets(opts);
      });
    });
  } // Video Background


  if ($.isFunction($.fn['themePluginVideoBackground']) && $('[data-plugin-video-background]').length) {
    theme.fn.intObsInit('[data-plugin-video-background]:not(.manual)', 'themePluginVideoBackground');
  } // -- Commom Partials
  // Sticky Header


  if (typeof theme.StickyHeader !== 'undefined') {
    theme.StickyHeader.initialize();
  } // Nav Menu


  if (typeof theme.Nav !== 'undefined') {
    theme.Nav.initialize();
  } // Search


  if (typeof theme.Search !== 'undefined' && ($('#searchForm').length || $('.header-nav-features-search-reveal').length)) {
    theme.Search.initialize();
  } // Newsletter


  if (typeof theme.Newsletter !== 'undefined' && $('#newsletterForm').length) {
    theme.fn.intObs('#newsletterForm', 'theme.Newsletter.initialize();', {});
  } // Account


  if (typeof theme.Account !== 'undefined' && ($('#headerAccount').length || $('#headerSignUp').length || $('#headerSignIn').length || $('#headerRecover').length || $('#headerRecoverCancel').length)) {
    theme.Account.initialize();
  }
}).apply(this, [jQuery]);

/***/ }),

/***/ "./resources/js/global.js":
/*!********************************!*\
  !*** ./resources/js/global.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Some plugins like isotope throw errors while compiling in webpack. So we;ll load it in the <head> along with the other modules that deppend on it.

/* jQuery must be declared globally */
//global.$ = global.jQuery = require('./global/core/jquery.js');
__webpack_require__(/*! ./global/core/jquery_ui.js */ "./resources/js/global/core/jquery_ui.js");

__webpack_require__(/*! ./global/custom.js */ "./resources/js/global/custom.js");

/***/ }),

/***/ "./resources/js/global/core/jquery_ui.js":
/*!***********************************************!*\
  !*** ./resources/js/global/core/jquery_ui.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery UI - v1.12.1 - 2018-04-21
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, keycode.js, scroll-parent.js, unique-id.js, widgets/draggable.js, widgets/sortable.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (t) {
  function e(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent();
    }

    return 0;
  }

  function i() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  function s(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function () {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", i, n);
  }

  function n() {
    t.datepicker._isDisabledDatepicker(h.inline ? h.dpDiv.parent()[0] : h.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
  }

  function o(e, i) {
    t.extend(e, i);

    for (var s in i) {
      null == i[s] && (e[s] = i[s]);
    }

    return e;
  }

  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var a = 0,
      r = Array.prototype.slice;
  t.cleanData = function (e) {
    return function (i) {
      var s, n, o;

      for (o = 0; null != (n = i[o]); o++) {
        try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      }

      e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
    e = e.split(".")[1];
    var h = l + "-" + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
      return !!t.data(e, h);
    }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: []
    }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }

        function n(t) {
          return i.prototype[e].apply(this, t);
        }

        return function () {
          var e,
              i = this._super,
              o = this._superApply;
          return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e
    }, r, {
      constructor: o,
      namespace: l,
      widgetName: e,
      widgetFullName: h
    }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var i, s, n = r.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
      for (i in n[o]) {
        s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
      }
    }

    return e;
  }, t.widget.bridge = function (e, i) {
    var s = i.prototype.widgetFullName || e;

    t.fn[e] = function (n) {
      var o = "string" == typeof n,
          a = r.call(arguments, 1),
          l = this;
      return o ? this.length || "instance" !== n ? this.each(function () {
        var i,
            o = t.data(this, s);
        return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : l = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
        var e = t.data(this, s);
        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
      })), l;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(t) {
          t.target === i && this.destroy();
        }
      }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function destroy() {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(e, i) {
      var s,
          n,
          o,
          a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
          n[s[o]] = n[s[o]] || {}, n = n[s[o]];
        }

        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
        n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = i;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function _setOptions(t) {
      var e;

      for (e in t) {
        this._setOption(e, t[e]);
      }

      return this;
    },
    _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function _setOptionClasses(e) {
      var i, s, n;

      for (i in e) {
        n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(e) {
      function i(i, o) {
        var a, r;

        for (r = 0; i.length > r; r++) {
          a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(e) {
      var i = this;
      t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function _on(e, i, s) {
      var n,
          o = this;
      "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }

        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        var l = s.match(/^([\w:-]*)\s*(.*)$/),
            h = l[1] + o.eventNamespace,
            c = l[2];
        c ? n.on(h, c, r) : i.on(h, r);
      });
    },
    _off: function _off(e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    },
    _delay: function _delay(t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function mouseenter(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function focusin(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(e, i, s) {
      var n,
          o,
          a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
        n in i || (i[n] = o[n]);
      }
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = {
        effect: n
      });
      var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
    }

    function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }

    function s(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : t.isWindow(i) ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: e.scrollTop(),
          left: e.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: e.outerWidth(),
        height: e.outerHeight(),
        offset: e.offset()
      };
    }

    var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        l = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
    t.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;
        var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      },
      getScrollInfo: function getScrollInfo(e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {
          width: o ? t.position.scrollbarWidth() : 0,
          height: n ? t.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: o ? t(e).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: i.outerWidth(),
          height: i.outerHeight()
        };
      }
    }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);
      n = t.extend({}, n);

      var u,
          p,
          f,
          g,
          m,
          _,
          v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};

      return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
        var s,
            r,
            l = t(this),
            h = l.outerWidth(),
            c = l.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = h + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            T = e(k.my, l.outerWidth(), l.outerHeight());

        "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += T[0], D.top += T[1], s = {
          marginLeft: d,
          marginTop: _
        }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
            targetWidth: p,
            targetHeight: f,
            elemWidth: h,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: x,
            collisionHeight: C,
            offset: [u[0] + T[0], u[1] + T[1]],
            my: n.my,
            at: n.at,
            within: b,
            elem: l
          });
        }), n.using && (r = function r(t) {
          var e = g.left - D.left,
              i = e + p - h,
              s = g.top - D.top,
              r = s + f - c,
              u = {
            target: {
              element: v,
              left: g.left,
              top: g.top,
              width: p,
              height: f
            },
            element: {
              element: l,
              left: D.left,
              top: D.top,
              width: h,
              height: c
            },
            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
          };
          h > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
        }), l.offset(t.extend(D, {
          using: r
        }));
      });
    }, t.ui.position = {
      fit: {
        left: function left(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              l = n - r,
              h = r + e.collisionWidth - a - n;
          e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left);
        },
        top: function top(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              l = n - r,
              h = r + e.collisionHeight - a - n;
          e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top);
        }
      },
      flip: {
        left: function left(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              l = n.isWindow ? n.scrollLeft : n.offset.left,
              h = t.left - e.collisionPosition.marginLeft,
              c = h - l,
              u = h + e.collisionWidth - r - l,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
          0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > a(s)) && (t.left += d + p + f));
        },
        top: function top(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              l = n.isWindow ? n.scrollTop : n.offset.top,
              h = t.top - e.collisionPosition.marginTop,
              c = h - l,
              u = h + e.collisionHeight - r - l,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
          0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || u > a(i)) && (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function left() {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  }(), t.ui.position, t.extend(t.expr[":"], {
    data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, s) {
      return !!t.data(e, s[3]);
    }
  }), t.fn.extend({
    disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    }
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.fn.scrollParent = function (e) {
    var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
      var e = t(this);
      return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
    }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.fn.extend({
    uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }
  }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var l = !1;
  t(document).on("mouseup", function () {
    l = !1;
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(e) {
      if (!l) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
            s = 1 === e.which,
            n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), l = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }

      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, l = !1, e.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), t.ui.plugin = {
    add: function add(e, i, s) {
      var n,
          o = t.ui[e].prototype;

      for (n in s) {
        o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
      }
    },
    call: function call(t, e, i, s) {
      var n,
          o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) {
        t.options[o[n][0]] && o[n][1].apply(t.element, i);
      }
    }
  }, t.ui.safeActiveElement = function (t) {
    var e;

    try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }

    return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.ui.safeBlur = function (e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
  }, t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
    },
    _mouseCapture: function _mouseCapture(e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    },
    _blockFrames: function _blockFrames(e) {
      this.iframeBlocks = this.document.find(e).map(function () {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function _blurActiveElement(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i);
    },
    _mouseStart: function _mouseStart(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === t(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    },
    _refreshOffsets: function _refreshOffsets(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();

        if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
        this.position = s.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    },
    _mouseStop: function _mouseStop(e) {
      var i = this,
          s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", e) !== !1 && i._clear();
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
    },
    _mouseUp: function _mouseUp(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this;
    },
    _getHandle: function _getHandle(e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    },
    _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _isRootNode: function _isRootNode(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      var e = this.offsetParent.offset(),
          i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);

      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    },
    _convertPositionTo: function _convertPositionTo(t, e) {
      e || (e = this.position);

      var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);

      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      };
    },
    _generatePosition: function _generatePosition(t, e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          l = t.pageX,
          h = t.pageY;

      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _trigger: function _trigger(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.sortables = [], t(s.options.connectToSortable).each(function () {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
      });
    },
    stop: function stop(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
        var t = this;
        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n));
      });
    },
    drag: function drag(e, i, s) {
      t.each(s.sortables, function () {
        var n = !1,
            o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n;
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), t.ui.plugin.add("draggable", "cursor", {
    start: function start(e, i, s) {
      var n = t("body"),
          o = s.options;
      n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._cursor && t("body").css("cursor", n._cursor);
    }
  }), t.ui.plugin.add("draggable", "opacity", {
    start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css("opacity", n._opacity);
    }
  }), t.ui.plugin.add("draggable", "scroll", {
    start: function start(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function drag(e, i, s) {
      var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
      a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
    }
  }), t.ui.plugin.add("draggable", "snap", {
    start: function start(e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var e = t(this),
            i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left
        });
      });
    },
    drag: function drag(e, i, s) {
      var n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;

      for (d = s.snapElements.length - 1; d >= 0; d--) {
        l = s.snapElements[d].left - s.margins.left, h = l + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, l - g > _ || m > h + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
          snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(l - _), r = g >= Math.abs(h - m), n && (i.position.top = s._convertPositionTo("relative", {
          top: c - s.helperProportions.height,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u,
          left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l - s.helperProportions.width
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h
        }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(l - m), r = g >= Math.abs(h - _), n && (i.position.top = s._convertPositionTo("relative", {
          top: c,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u - s.helperProportions.height,
          left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h - s.helperProportions.width
        }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
          snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = n || o || a || r || p);
      }
    }
  }), t.ui.plugin.add("draggable", "stack", {
    start: function start(e, i, s) {
      var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
      });
      a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
        t(this).css("zIndex", n + e);
      }), this.css("zIndex", n + a.length));
    }
  }), t.ui.plugin.add("draggable", "zIndex", {
    start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css("zIndex", n._zIndex);
    }
  }), t.ui.draggable, t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(t, e, i) {
      return t >= e && e + i > t;
    },
    _isFloating: function _isFloating(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    },
    _create: function _create() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    },
    _setHandleClassName: function _setHandleClassName() {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      for (var t = this.items.length - 1; t >= 0; t--) {
        this.items[t].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(e, i) {
      var s = null,
          n = !1,
          o = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
        this === e.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    },
    _mouseStart: function _mouseStart(e, i, s) {
      var n,
          o,
          a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, t.extend(this.offset, {
        click: {
          left: e.pageX - this.offset.left,
          top: e.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
        this.containers[n]._trigger("activate", e, this._uiHash(this));
      }
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0;
    },
    _mouseDrag: function _mouseDrag(e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;

      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger("change", e, this._uiHash());
          break;
        }
      }

      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
          o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(e);
          });
        } else this._clear(e, i);

        return !1;
      }
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();

        for (var e = this.containers.length - 1; e >= 0; e--) {
          this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + "="), s.join("&");
    },
    toArray: function toArray(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, i.each(function () {
        s.push(t(e.item || this).attr(e.attribute || "id") || "");
      }), s;
    },
    _intersectsWith: function _intersectsWith(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          l = r + t.height,
          h = this.offset.click.top,
          c = this.offset.click.left,
          u = "x" === this.options.axis || s + h > r && l > s + h,
          d = "y" === this.options.axis || e + c > o && a > e + c,
          p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function _intersectsWithPointer(t) {
      var e,
          i,
          s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;

      return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
    },
    _intersectsWithSides: function _intersectsWithSides(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();

      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left");
    },
    refresh: function refresh(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(e) {
      function i() {
        r.push(this);
      }

      var s,
          n,
          o,
          a,
          r = [],
          l = [],
          h = this._connectWith();

      if (h && e) for (s = h.length - 1; s >= 0; s--) {
        for (o = t(h[s], this.document[0]), n = o.length - 1; n >= 0; n--) {
          a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
        }
      }

      for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) {
        l[s][0].each(i);
      }

      return t(r);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++) {
          if (e[i] === t.item[0]) return !1;
        }

        return !0;
      });
    },
    _refreshItems: function _refreshItems(e) {
      this.items = [], this.containers = [this];

      var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c = this.items,
          u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
        item: this.currentItem
      }) : t(this.options.items, this.element), this]],
          d = this._connectWith();

      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) {
        for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
          o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
            item: this.currentItem
          }) : t(o.options.items, o.element), o]), this.containers.push(o));
        }
      }

      for (i = u.length - 1; i >= 0; i--) {
        for (a = u[i][1], r = u[i][0], s = 0, h = r.length; h > s; s++) {
          l = t(r[s]), l.data(this.widgetName + "-item", a), c.push({
            item: l,
            instance: a,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;

      for (i = this.items.length - 1; i >= 0; i--) {
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) {
        o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(e) {
      e = e || this;
      var i,
          s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function element() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
              n = t("<" + s + ">", e.document[0]);
          return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        },
        update: function update(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(e, i) {
      var s = this;
      e.children().each(function () {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
      });
    },
    _contactContainers: function _contactContainers(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d = null,
          p = null;

      for (i = this.containers.length - 1; i >= 0; i--) {
        if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
          d = this.containers[i], p = i;
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      }

      if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) {
          t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], h = !1, e[u] - l > this.items[s][r] / 2 && (h = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
        }

        if (!o && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function _convertPositionTo(e, i) {
      i || (i = this.position);
      var s = "absolute" === e ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function _generatePosition(e) {
      var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          l = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function _rearrange(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;

      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function _clear(t, e) {
      function i(t, e, i) {
        return function (s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }

      this.reverting = !1;
      var s,
          n = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) {
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        }

        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();

      for (this.fromOutside && !e && n.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (n.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), n.push(function (t) {
        return function (e) {
          t._trigger("receive", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (t) {
        return function (e) {
          t._trigger("update", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
        e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      }

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) {
          n[s].call(this, t);
        }

        this._trigger("stop", t, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function _uiHash(e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      };
    }
  }), t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
          t.preventDefault();
        },
        "click .ui-menu-item": function clickUiMenuItem(e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
                s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function blur(e) {
          this._delay(function () {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function click(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function _destroy() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    },
    _keydown: function _keydown(e) {
      var i,
          s,
          n,
          o,
          a = !0;

      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;

        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;

        case t.ui.keyCode.HOME:
          this._move("first", "first", e);

          break;

        case t.ui.keyCode.END:
          this._move("last", "last", e);

          break;

        case t.ui.keyCode.UP:
          this.previous(e);
          break;

        case t.ui.keyCode.DOWN:
          this.next(e);
          break;

        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;

        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;

        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);

          break;

        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;

        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      a && e.preventDefault();
    },
    _activate: function _activate(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    },
    refresh: function refresh() {
      var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          l = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = l.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");

        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }

      this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    focus: function focus(t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      });
    },
    _scrollIntoView: function _scrollIntoView(e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
    },
    blur: function blur(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function _startOpening(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function _open(e) {
      var i = t.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function collapseAll(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
      }, this.delay);
    },
    _close: function _close(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(e) {
      return !t(e.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function collapse(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function expand(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function next(t) {
      this._move("next", "first", t);
    },
    previous: function previous(t) {
      this._move("prev", "last", t);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function _move(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function nextPage(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
    },
    previousPage: function previousPage(e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
    },
    _filterMenuItems: function _filterMenuItems(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function _create() {
      var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;

          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;

            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;

            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;

            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;

            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;

            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;

            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;

            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function keypress(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;

          if (!i) {
            var n = t.ui.keyCode;

            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);

                break;

              case n.PAGE_DOWN:
                this._move("nextPage", s);

                break;

              case n.UP:
                this._keyEvent("previous", s);

                break;

              case n.DOWN:
                this._keyEvent("next", s);

            }
          }
        },
        input: function input(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
        },
        focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function blur(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function mousedown(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        },
        menufocus: function menufocus(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            t(e.target).trigger(e.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
        },
        menuselect: function menuselect(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
              n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
            this.previous = n, this.selectedItem = s;
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function _isEventTargetInWidget(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    },
    _closeOnClickOutside: function _closeOnClickOutside(t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function _appendTo() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _initSource: function _initSource() {
      var e,
          i,
          s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
        s(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function success(t) {
            n(t);
          },
          error: function error() {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function _searchTimeout(t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;

        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    },
    search: function search(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
    },
    _search: function _search(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response());
    },
    _response: function _response() {
      var e = ++this.requestIndex;
      return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function __response(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function close(t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function _close(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    },
    _change: function _change(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        });
      });
    },
    _suggest: function _suggest(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function _resizeMenu() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(e, i) {
      var s = this;
      t.each(i, function (t, i) {
        s._renderItemData(e, i);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function _renderItem(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    },
    _move: function _move(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function _isContentEditable(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function escapeRegex(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function (t) {
        return s.test(t.label || t.value || t);
      });
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    }
  }), t.ui.autocomplete, t.extend(t.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var h;
  t.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },
    setDefaults: function setDefaults(t) {
      return o(this._defaults, t || {}), this;
    },
    _attachDatepicker: function _attachDatepicker(e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    },
    _newInst: function _newInst(e, i) {
      var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function _connectDatepicker(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function _attachments(e, i) {
      var s,
          n,
          o,
          a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");

      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: o,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
        src: o,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
      }));
    },
    _autoSize: function _autoSize(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");

        a.match(/[DM]/) && (e = function e(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) {
            t[n].length > i && (i = t[n].length, s = n);
          }

          return s;
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function _inlineDatepicker(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function _dialogDatepicker(e, i, s, n, a) {
      var r,
          l,
          h,
          c,
          u,
          d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
    },
    _destroyDatepicker: function _destroyDatepicker(e) {
      var i,
          s = t(e),
          n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), h === n && (h = null));
    },
    _enableDatepicker: function _enableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    },
    _disableDatepicker: function _disableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    },
    _isDisabledDatepicker: function _isDisabledDatepicker(t) {
      if (!t) return !1;

      for (var e = 0; this._disabledInputs.length > e; e++) {
        if (this._disabledInputs[e] === t) return !0;
      }

      return !1;
    },
    _getInst: function _getInst(e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function _optionDatepicker(e, i, s) {
      var n,
          a,
          r,
          l,
          h = this._getInst(e);

      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h)), void 0);
    },
    _changeDatepicker: function _changeDatepicker(t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function _refreshDatepicker(t) {
      var e = this._getInst(t);

      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function _setDateDatepicker(t, e) {
      var i = this._getInst(t);

      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function _getDateDatepicker(t, e) {
      var i = this._getInst(t);

      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function _doKeyDown(e) {
      var i,
          s,
          n,
          o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");

      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;

        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;

        case 27:
          t.datepicker._hideDatepicker();

          break;

        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        default:
          a = !1;
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function _doKeyPress(e) {
      var i,
          s,
          n = t.datepicker._getInst(e.target);

      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    },
    _doKeyUp: function _doKeyUp(e) {
      var i,
          s = t.datepicker._getInst(e.target);

      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
      } catch (n) {}
      return !0;
    },
    _showDatepicker: function _showDatepicker(i) {
      if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
        var s, n, a, r, l, h, c;
        s = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), a = n ? n.apply(i, [i, s]) : {}, a !== !1 && (o(s.settings, a), s.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function () {
          return r |= "fixed" === t(this).css("position"), !r;
        }), l = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), l = t.datepicker._checkOffset(s, l, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: l.left + "px",
          top: l.top + "px"
        }), s.inline || (h = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
      }
    },
    _updateDatepicker: function _updateDatepicker(e) {
      this.maxRows = 4, h = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);

      var i,
          s = this._getNumberOfMonths(e),
          o = s[1],
          a = 17,
          r = e.dpDiv.find("." + this._dayOverClass + " a");

      r.length > 0 && n.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function _shouldFocusInput(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    },
    _checkOffset: function _checkOffset(e, i, s) {
      var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
          h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i;
    },
    _findPos: function _findPos(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
        e = e[n ? "previousSibling" : "nextSibling"];
      }

      return i = t(e).offset(), [i.left, i.top];
    },
    _hideDatepicker: function _hideDatepicker(e) {
      var i,
          s,
          n,
          o,
          a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
        t.datepicker._tidyDialog(a);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function _tidyDialog(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function _checkExternalClick(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
            s = t.datepicker._getInst(i[0]);

        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function _adjustDate(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
    },
    _gotoToday: function _gotoToday(e) {
      var i,
          s = t(e),
          n = this._getInst(s[0]);

      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    },
    _selectMonthYear: function _selectMonthYear(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
    },
    _selectDay: function _selectDay(e, i, s, n) {
      var o,
          a = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function _clearDate(e) {
      var i = t(e);

      this._selectDate(i, "");
    },
    _selectDate: function _selectDate(e, i) {
      var s,
          n = t(e),
          o = this._getInst(n[0]);

      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
    },
    _updateAlternate: function _updateAlternate(e) {
      var i,
          s,
          n,
          o = this._get(e, "altField");

      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
    },
    noWeekends: function noWeekends(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    },
    iso8601Week: function iso8601Week(t) {
      var e,
          i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    },
    parseDate: function parseDate(e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == _typeof(i) ? "" + i : i + "", "" === i) return null;

      var n,
          o,
          a,
          r,
          l = 0,
          h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c = "string" != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10),
          u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          g = -1,
          m = -1,
          _ = -1,
          v = -1,
          b = !1,
          y = function y(t) {
        var i = e.length > n + 1 && e.charAt(n + 1) === t;
        return i && n++, i;
      },
          w = function w(t) {
        var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(l).match(o);
        if (!a) throw "Missing number at position " + l;
        return l += a[0].length, parseInt(a[0], 10);
      },
          k = function k(e, s, n) {
        var o = -1,
            a = t.map(y(e) ? n : s, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });
        if (t.each(a, function (t, e) {
          var s = e[1];
          return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0;
        }), -1 !== o) return o + 1;
        throw "Unknown name at position " + l;
      },
          x = function x() {
        if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
        l++;
      };

      for (n = 0; e.length > n; n++) {
        if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;else switch (e.charAt(n)) {
          case "d":
            _ = w("d");
            break;

          case "D":
            k("D", u, d);
            break;

          case "o":
            v = w("o");
            break;

          case "m":
            m = w("m");
            break;

          case "M":
            m = k("M", p, f);
            break;

          case "y":
            g = w("y");
            break;

          case "@":
            r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;

          case "!":
            r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;

          case "'":
            y("'") ? x() : b = !0;
            break;

          default:
            x();
        }
      }

      if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v;;) {
        if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
        m++, _ -= o;
      }
      if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function formatDate(t, e, i) {
      if (!e) return "";

      var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          l = function l(e) {
        var i = t.length > s + 1 && t.charAt(s + 1) === e;
        return i && s++, i;
      },
          h = function h(t, e, i) {
        var s = "" + e;
        if (l(t)) for (; i > s.length;) {
          s = "0" + s;
        }
        return s;
      },
          c = function c(t, e, i, s) {
        return l(t) ? s[e] : i[e];
      },
          u = "",
          d = !1;

      if (e) for (s = 0; t.length > s; s++) {
        if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;else switch (t.charAt(s)) {
          case "d":
            u += h("d", e.getDate(), 2);
            break;

          case "D":
            u += c("D", e.getDay(), n, o);
            break;

          case "o":
            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;

          case "m":
            u += h("m", e.getMonth() + 1, 2);
            break;

          case "M":
            u += c("M", e.getMonth(), a, r);
            break;

          case "y":
            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
            break;

          case "@":
            u += e.getTime();
            break;

          case "!":
            u += 1e4 * e.getTime() + this._ticksTo1970;
            break;

          case "'":
            l("'") ? u += "'" : d = !0;
            break;

          default:
            u += t.charAt(s);
        }
      }
      return u;
    },
    _possibleChars: function _possibleChars(t) {
      var e,
          i = "",
          s = !1,
          n = function n(i) {
        var s = t.length > e + 1 && t.charAt(e + 1) === i;
        return s && e++, s;
      };

      for (e = 0; t.length > e; e++) {
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;

          case "D":
          case "M":
            return null;

          case "'":
            n("'") ? i += "'" : s = !0;
            break;

          default:
            i += t.charAt(e);
        }
      }

      return i;
    },
    _get: function _get(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function _setDateFromField(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);

        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }

        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function _getDefaultDate(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    },
    _determineDate: function _determineDate(e, i, s) {
      var n = function n(t) {
        var e = new Date();
        return e.setDate(e.getDate() + t), e;
      },
          o = function o(i) {
        try {
          return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
        } catch (s) {}

        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
          switch (h[2] || "d") {
            case "d":
            case "D":
              r += parseInt(h[1], 10);
              break;

            case "w":
            case "W":
              r += 7 * parseInt(h[1], 10);
              break;

            case "m":
            case "M":
              a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
              break;

            case "y":
            case "Y":
              o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
          }

          h = l.exec(i);
        }

        return new Date(o, a, r);
      },
          a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());

      return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
    },
    _daylightSavingAdjust: function _daylightSavingAdjust(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function _setDate(t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));

      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function _getDate(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function _attachHandlers(e) {
      var i = this._get(e, "stepMonths"),
          s = "#" + e.id.replace(/\\\\/g, "\\");

      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function prev() {
            t.datepicker._adjustDate(s, -i, "M");
          },
          next: function next() {
            t.datepicker._adjustDate(s, +i, "M");
          },
          hide: function hide() {
            t.datepicker._hideDatepicker();
          },
          today: function today() {
            t.datepicker._gotoToday(s);
          },
          selectDay: function selectDay() {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function selectMonth() {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function selectYear() {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function _generateHTML(t) {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          k,
          x,
          C,
          D,
          T,
          I,
          M,
          P,
          S,
          N,
          H,
          A,
          z,
          O,
          E,
          W,
          F,
          L,
          R = new Date(),
          Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          B = this._get(t, "isRTL"),
          j = this._get(t, "showButtonPanel"),
          q = this._get(t, "hideIfNoPrevNext"),
          K = this._get(t, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"),
          X = this._get(t, "stepMonths"),
          $ = 1 !== U[0] || 1 !== U[1],
          G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          J = this._getMinMaxDate(t, "min"),
          Q = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - V,
          te = t.drawYear;

      if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
        Z--, 0 > Z && (Z = 11, te--);
      }

      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", I = "", $) {
            if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
              case 0:
                I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                break;

              case U[1] - 1:
                I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                break;

              default:
                I += " ui-datepicker-group-middle", T = "";
            }
            I += "'>";
          }

          for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? B ? o : s : "") + (/all|right/.test(T) && 0 === k ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, J, Q, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
            P = (w + c) % 7, M += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[P] + "'>" + p[P] + "</span></th>";
          }

          for (I += M + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, H = Math.ceil((N + S) / 7), A = $ ? this.maxRows > H ? this.maxRows : H : H, this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) {
            for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) {
              W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            }

            I += E + "</tr>";
          }

          Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += I;
        }

        y += x;
      }

      return y += h, t._keyEvent = !1, y;
    },
    _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
      var l,
          h,
          c,
          u,
          d,
          p,
          f,
          g,
          m = this._get(t, "changeMonth"),
          _ = this._get(t, "changeYear"),
          v = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          y = "";

      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
        for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) {
          (!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        }

        y += "</select>";
      }
      if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(e) ? d : e;
        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) {
          t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        }

        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
      }
      return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
    },
    _adjustInstDate: function _adjustInstDate(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));

      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
    },
    _restrictMinMax: function _restrictMinMax(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = i && i > e ? i : e;

      return s && n > s ? s : n;
    },
    _notifyChange: function _notifyChange(t) {
      var e = this._get(t, "onChangeMonthYear");

      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function _getNumberOfMonths(t) {
      var e = this._get(t, "numberOfMonths");

      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function _getMinMaxDate(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function _getDaysInMonth(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));

      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    },
    _isInRange: function _isInRange(t, e) {
      var i,
          s,
          n = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          l = this._get(t, "yearRange");

      return l && (i = l.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
    },
    _getFormatConfig: function _getFormatConfig(t) {
      var e = this._get(t, "shortYearCutoff");

      return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      };
    },
    _formatDate: function _formatDate(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == _typeof(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
    }
  }), t.fn.datepicker = function (e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
  }, t.datepicker = new i(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker;
});

/***/ }),

/***/ "./resources/js/global/custom.js":
/*!***************************************!*\
  !*** ./resources/js/global/custom.js ***!
  \***************************************/
/***/ (() => {

$(document).ready(function () {});

/***/ }),

/***/ "./resources/js/web.js":
/*!*****************************!*\
  !*** ./resources/js/web.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./global.js */ "./resources/js/global.js");

__webpack_require__(/*! ./frontend.js */ "./resources/js/frontend.js");

/***/ }),

/***/ "./resources/css/web.css":
/*!*******************************!*\
  !*** ./resources/css/web.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/web": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/web.js"],
/******/ 			["./resources/css/web.css"],
/******/ 			["./resources/css/app.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;