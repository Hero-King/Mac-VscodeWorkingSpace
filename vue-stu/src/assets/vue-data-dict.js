/*!
 * vue-data-dict v1.2.0
 * © 2020-2022 Moxun<mxnstrive@gmail.com>
 * Released under the Apache-2.0 License.
 */
this.VueDataDict = (function(t) { var e = {}; function r(n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {}}; return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = t, r.c = e, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, r.t = function(t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var o in t)r.d(n, o, function(e) { return t[e] }.bind(null, o)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, 'a', e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = '', r(r.s = 0) }([function(t, e, r) { 'use strict'; function n(t) { for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n]; return r.forEach(function(e) { o(t, e) }), t } function o(t, e) { for (var r in e)t[r] !== null && void 0 !== t[r] || (t[r] = e[r]), Object.prototype.toString.call(t[r]) === '[object Object]' ? n(t[r], e[r]) : t[r] = e[r]; return t }r.r(e); var i = { recursive: n }; var a = { metas: { '*': { request: function(t) { return console.log('load dict '.concat(t.type)), Promise.resolve([]) }, responseConverter: function(t, e) { var r = Object.prototype.toString.call(t.content) === '[object Array]' ? t.content : [t]; if (void 0 === r) return console.warn('no dict data of "'.concat(e.type, '" found in the response')), []; return r.map(function(t) { return d(t, e) }) }, labelField: 'label', valueField: 'value' }}, DEFAULT_LABEL_FIELDS: ['label', 'name', 'title'], DEFAULT_VALUE_FIELDS: ['value', 'id', 'uid', 'key'] }; var u = a; function c(t) { return c = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(t) { return typeof t } : function(t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t }, c(t) } function l(t, e) { for (var r = 0; r < e.length; r++) { var n = e[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = (function(t, e) { if (c(t) !== 'object' || t === null) return t; var r = t[Symbol.toPrimitive]; if (void 0 !== r) { var n = r.call(t, e || 'default'); if (c(n) !== 'object') return n; throw new TypeError('@@toPrimitive must return a primitive value.') } return (e === 'string' ? String : Number)(t) }(o, 'string')), c(i) === 'symbol' ? i : String(i)), n) } var o, i } function f(t, e, r) { return e && l(t.prototype, e), r && l(t, r), Object.defineProperty(t, 'prototype', { writable: !1 }), t } var s = f(function t(e, r, n) { !(function(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, t)), this.label = e, this.value = r, this.raw = n }); function y(t) { return (function(t) { if (Array.isArray(t)) return p(t) }(t)) || (function(t) { if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t) }(t)) || (function(t, e) { if (!t) return; if (typeof t === 'string') return p(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); r === 'Object' && t.constructor && (r = t.constructor.name); if (r === 'Map' || r === 'Set') return Array.from(t); if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(t, e) }(t)) || (function() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }()) } function p(t, e) { (e == null || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)n[r] = t[r]; return n } var d = function(t, e) { var r = v.apply(void 0, [t, e.labelField].concat(y(u.DEFAULT_LABEL_FIELDS))); var n = v.apply(void 0, [t, e.valueField].concat(y(u.DEFAULT_VALUE_FIELDS))); return new s(t[r], t[n], t) }; function v(t) { for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n]; return r.find(function(e) { return Object.prototype.hasOwnProperty.call(t, e) }) } var b = { Vue: null }; function m(t) { return m = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(t) { return typeof t } : function(t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t }, m(t) } function h(t, e) { for (var r = 0; r < e.length; r++) { var n = e[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = (function(t, e) { if (m(t) !== 'object' || t === null) return t; var r = t[Symbol.toPrimitive]; if (void 0 !== r) { var n = r.call(t, e || 'default'); if (m(n) !== 'object') return n; throw new TypeError('@@toPrimitive must return a primitive value.') } return (e === 'string' ? String : Number)(t) }(o, 'string')), m(i) === 'symbol' ? i : String(i)), n) } var o, i } function S(t, e, r) { return e && h(t.prototype, e), r && h(t, r), Object.defineProperty(t, 'prototype', { writable: !1 }), t } var g = S(function t(e) { !(function(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, t)), this.type = e.type, this.request = e.request, this.responseConverter = e.responseConverter, this.labelField = e.labelField, this.valueField = e.valueField, this.lazy = !0 === e.lazy }); function w(t) { return (function(t) { if (Array.isArray(t)) return j(t) }(t)) || (function(t) { if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t) }(t)) || (function(t, e) { if (!t) return; if (typeof t === 'string') return j(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); r === 'Object' && t.constructor && (r = t.constructor.name); if (r === 'Map' || r === 'Set') return Array.from(t); if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(t, e) }(t)) || (function() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }()) } function j(t, e) { (e == null || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)n[r] = t[r]; return n } function A(t) { return A = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(t) { return typeof t } : function(t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t }, A(t) } function E(t, e) { for (var r = 0; r < e.length; r++) { var n = e[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = (function(t, e) { if (A(t) !== 'object' || t === null) return t; var r = t[Symbol.toPrimitive]; if (void 0 !== r) { var n = r.call(t, e || 'default'); if (A(n) !== 'object') return n; throw new TypeError('@@toPrimitive must return a primitive value.') } return (e === 'string' ? String : Number)(t) }(o, 'string')), A(i) === 'symbol' ? i : String(i)), n) } var o, i }g.parse = function(t) { var e = i.recursive({}, u.metas['*']); return typeof t === 'string' ? (e.type = t, i.recursive(e, u.metas[t])) : m(t) === 'object' && i.recursive(e, u.metas[t.type], t), new g(e) }; var P = { types: [] }; var O = (function() { function t() { !(function(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, t)), this.label = {}, this.dict = {} } var e, r, n; return e = t, (r = [{ key: 'init', value: function(t) { var e = this; t instanceof Array && (t = { types: t }); var r = i.recursive({}, P, t); this._dictMetas = []; var n = []; return r.types.forEach(function(t) { n.push(e.register(t)) }), Promise.all(n) } }, { key: 'register', value: function(t) { var e = g.parse(t); this._dictMetas.push(e); var r = e.type; if (b.Vue.set(this.label, r, {}), b.Vue.set(this.dict, r, []), !e.lazy) return _(this, e) } }, { key: 'wait', value: function(t) { var e = this; var r = this.dict[t]; if (!r) return Promise.reject('no such dict: ' + t); var n = r.loader; return n ? n.then(function() { return e.dict[t] }) : Promise.resolve(this.dict[t]) } }, { key: 'reload', value: function(t) { var e = this._dictMetas.find(function(e) { return e.type === t }); return void 0 === e ? Promise.reject('the dict meta of '.concat(t, ' was not found')) : _(this, e) } }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), t }()); function _(t, e) { var r = e.request(e); r instanceof Promise || (r = Promise.resolve(r)); var n = r.then(function(r) { var n; var o = e.type; var i = e.responseConverter(r, e); i instanceof Array ? i.filter(function(t) { return t instanceof s }).length !== i.length && (console.error('the type of elements in dicts must be DictData'), i = []) : (console.error('the return of responseConverter must be Array.<DictData>'), i = []), (n = t.dict[o]).splice.apply(n, [0, Number.MAX_SAFE_INTEGER].concat(w(i))); var a = b.Vue; var u = t.label[o]; var c = {}; for (var l in u)c[l] = 0; for (var f in i.forEach(function(t) { a.set(u, t.value, t.label), delete c[t.value] }), c)a.delete(u, f); return i }); return t.dict[e.type].loader = n, n.finally(function() { delete t.dict[e.type].loader }) }e.default = { name: 'vue-data-dict', DictConverter: d, install: function(t, e) { var r; b.Vue = t, r = e, i.recursive(a, r), t.mixin({ data: function() { return void 0 === this.$options.dicts || this.$options.dicts === null ? {} : { dict: new O() } }, created: function() { var t = this; this.dict instanceof O && (this.dict.owner = this, e.onCreated && e.onCreated(this.dict), this.dict.init(this.$options.dicts).then(function() { e.onReady && e.onReady(t.dict), t.$nextTick(function() { t.$emit('dictReady', t.dict), t.$options.methods && t.$options.methods.onDictReady instanceof Function && t.$options.methods.onDictReady.call(t, t.dict) }) })) } }) } } }])).default
