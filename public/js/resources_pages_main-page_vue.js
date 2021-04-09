(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pages_main-page_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_skinview3d_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plugins/skinview3d.bundle.js */ "./resources/plugins/skinview3d.bundle.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppSkinViewer',
  data: function data() {
    return {
      skinParts: ["head", "body", "rightArm", "leftArm", "rightLeg", "leftLeg"],
      skinLayers: ["innerLayer", "outerLayer"],
      availableAnimations: {
        walk: skinview3d.WalkingAnimation,
        run: skinview3d.RunningAnimation,
        fly: skinview3d.FlyingAnimation
      },
      skinViewer: null,
      orbitControl: null,
      rotateAnimation: null,
      primaryAnimation: null,
      skinReader: null,
      skinUrl: null,
      initialSkin: null
    };
  },
  props: {
    height: Number,
    width: Number,
    bgColor: String,
    disableAll: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    reloadSkin: function reloadSkin() {
      var input = this.skinUrl;

      if (input === "") {
        this.skinViewer.loadSkin(null);
        console.log('It`s ok');
      } else {
        this.skinViewer.loadSkin(input, document.getElementById('skinModel').value).then(function () {
          return console.log('It`s ok');
        })["catch"](function (e) {
          console.log('It is not ok');
        });
      }
    },
    setInitialSkin: function setInitialSkin() {
      this.initialSkin = 'storage/Miner.png';
    },
    rotateAnimationChange: function rotateAnimationChange(isChecked) {
      if (isChecked && this.rotateAnimation === null) {
        this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
        this.rotateAnimation.speed = document.getElementById('rotateAnimationSpeed').value;
      } else if (!isChecked && this.rotateAnimation !== null) {
        this.rotateAnimation.resetAndRemove();
        this.rotateAnimation = null;
      }
    },
    skinUrlUploadClick: function skinUrlUploadClick() {
      this.$refs.skinUrlUpload.click();
    },
    primaryAnimationChange: function primaryAnimationChange(value) {
      if (this.primaryAnimation !== null) {
        this.primaryAnimation.resetAndRemove();
        this.primaryAnimation = null;
      }

      if (value) {
        this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[value]);
        this.primaryAnimation.speed = document.getElementById('primaryAnimationSpeed').value;
      }
    },
    resetAllSettings: function resetAllSettings() {
      this.skinViewer.dispose();
      this.orbitControl.dispose();
      this.initializeViewer();
      this.reloadSkin();
    },
    layersChange: function layersChange(target) {
      this.skinViewer.playerObject.skin[target.dataset.part][target.dataset.layer].visible = target.checked;
    },
    returnInitialSkin: function returnInitialSkin() {
      this.skinUrl = this.initialSkin;
      this.reloadSkin();
    },
    initializeControls: function initializeControls() {
      var _this = this;

      this.skinUrl = this.initialSkin;
      this.skinReader = new FileReader();
      this.skinReader.addEventListener('load', function () {
        _this.skinUrl = _this.skinReader.result;

        _this.reloadSkin();
      });
    },
    initializeViewer: function initializeViewer() {
      this.skinViewer = new skinview3d.FXAASkinViewer({
        canvas: document.getElementById('skinContainer'),
        alpha: false
      });
      this.skinViewer.renderer.setClearColor(this.bgColor);
      this.orbitControl = skinview3d.createOrbitControls(this.skinViewer);
      this.rotateAnimation = null;
      this.primaryAnimation = null;
      this.skinViewer.width = document.getElementById('canvasWidth').value;
      this.skinViewer.height = document.getElementById('canvasHeight').value;
      this.skinViewer.animations.speed = document.getElementById('globalAnimationSpeed').value;

      if (document.getElementById("rotateAnimation").checked) {
        this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
        this.rotateAnimation.speed = document.getElementById('rotateAnimationSpeed').value;
      }

      var primaryAnimationName = document.querySelector('#primaryAnimation input:checked').value;

      if (primaryAnimationName !== "") {
        this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[primaryAnimationName]);
        this.primaryAnimation.speed = document.getElementById('primaryAnimationSpeed').value;
      }

      this.orbitControl.enablePan = document.getElementById('controlPan').checked;
      this.orbitControl.enableZoom = document.getElementById('controlZoom').checked;
      this.orbitControl.enableRotate = document.getElementById('controlRotate').checked;

      var _iterator = _createForOfIteratorHelper(this.skinParts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          var _iterator2 = _createForOfIteratorHelper(this.skinLayers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var layer = _step2.value;
              this.skinViewer.playerObject.skin[part][layer].visible = document.querySelector("#layersTable input[type=\"checkbox\"][data-part=\"".concat(part, "\"][data-layer=\"").concat(layer, "\"]")).checked;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    saveSkin: function saveSkin() {
      var file = this.$refs.skinUrlUpload.files[0];
      var name = 'Miner';

      if (file) {
        var formData = new FormData();
        formData.append('fileToUpload', file);
        formData.append('name', name);
        axios.post('upload/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (e) {
          console.log(e.data);
        });
      } else {
        console.log('Error');
      }
    },
    skinUploadChange: function skinUploadChange(target) {
      var file = target.files[0];

      if (file !== undefined) {
        this.skinReader.readAsDataURL(file);
      }
    }
  },
  mounted: function mounted() {
    this.setInitialSkin();
    this.initializeControls();
    this.initializeViewer();
    this.reloadSkin();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppSkinViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppSkinViewer */ "./resources/components/AppSkinViewer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'mainPage',
  components: {
    AppSkinViewer: _components_AppSkinViewer__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    submit: function submit() {
      axios.post('register', {
        email: this.email,
        password: this.password
      });
    }
  }
});

/***/ }),

/***/ "./resources/plugins/skinview3d.bundle.js":
/*!************************************************!*\
  !*** ./resources/plugins/skinview3d.bundle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e145) { throw _e145; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e146) { didErr = true; err = _e146; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve skinview3d / MIT License / https://github.com/bs-community/skinview3d */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != "object" ? t(exports) : "function" == typeof define && __webpack_require__.amdO ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).skinview3d = {});
}(undefined, function (e) {
  "use strict";

  var t = 0,
      n = 1,
      i = 2,
      r = 0,
      a = 1,
      o = 2,
      s = 3,
      l = 100,
      c = 1e3,
      d = 1001,
      h = 1002,
      u = 1003,
      f = 1006,
      p = 1008,
      m = 1009,
      g = 1012,
      x = 1014,
      _ = 1015,
      v = 1016,
      y = 1020,
      M = 1022,
      b = 1023,
      w = 1026,
      A = 1027,
      S = 3e3,
      T = 7680,
      L = "300 es";

  function E() {}

  Object.assign(E.prototype, {
    addEventListener: function addEventListener(e, t) {
      void 0 === this._listeners && (this._listeners = {});
      var n = this._listeners;
      void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
    },
    hasEventListener: function hasEventListener(e, t) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[e] && -1 !== n[e].indexOf(t);
    },
    removeEventListener: function removeEventListener(e, t) {
      if (void 0 === this._listeners) return;
      var n = this._listeners[e];

      if (void 0 !== n) {
        var _e2 = n.indexOf(t);

        -1 !== _e2 && n.splice(_e2, 1);
      }
    },
    dispatchEvent: function dispatchEvent(e) {
      if (void 0 === this._listeners) return;
      var t = this._listeners[e.type];

      if (void 0 !== t) {
        e.target = this;

        var _n2 = t.slice(0);

        for (var _t2 = 0, _i2 = _n2.length; _t2 < _i2; _t2++) {
          _n2[_t2].call(this, e);
        }
      }
    }
  });
  var P = [];

  for (var _e3 = 0; _e3 < 256; _e3++) {
    P[_e3] = (_e3 < 16 ? "0" : "") + _e3.toString(16);
  }

  var F = 1234567;
  var N = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function generateUUID() {
      var e = 4294967295 * Math.random() | 0,
          t = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0,
          i = 4294967295 * Math.random() | 0;
      return (P[255 & e] + P[e >> 8 & 255] + P[e >> 16 & 255] + P[e >> 24 & 255] + "-" + P[255 & t] + P[t >> 8 & 255] + "-" + P[t >> 16 & 15 | 64] + P[t >> 24 & 255] + "-" + P[63 & n | 128] + P[n >> 8 & 255] + "-" + P[n >> 16 & 255] + P[n >> 24 & 255] + P[255 & i] + P[i >> 8 & 255] + P[i >> 16 & 255] + P[i >> 24 & 255]).toUpperCase();
    },
    clamp: function clamp(e, t, n) {
      return Math.max(t, Math.min(n, e));
    },
    euclideanModulo: function euclideanModulo(e, t) {
      return (e % t + t) % t;
    },
    mapLinear: function mapLinear(e, t, n, i, r) {
      return i + (e - t) * (r - i) / (n - t);
    },
    lerp: function lerp(e, t, n) {
      return (1 - n) * e + n * t;
    },
    damp: function damp(e, t, n, i) {
      return N.lerp(e, t, 1 - Math.exp(-n * i));
    },
    pingpong: function pingpong(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return t - Math.abs(N.euclideanModulo(e, 2 * t) - t);
    },
    smoothstep: function smoothstep(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
    },
    smootherstep: function smootherstep(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
    },
    randInt: function randInt(e, t) {
      return e + Math.floor(Math.random() * (t - e + 1));
    },
    randFloat: function randFloat(e, t) {
      return e + Math.random() * (t - e);
    },
    randFloatSpread: function randFloatSpread(e) {
      return e * (.5 - Math.random());
    },
    seededRandom: function seededRandom(e) {
      return void 0 !== e && (F = e % 2147483647), F = 16807 * F % 2147483647, (F - 1) / 2147483646;
    },
    degToRad: function degToRad(e) {
      return e * N.DEG2RAD;
    },
    radToDeg: function radToDeg(e) {
      return e * N.RAD2DEG;
    },
    isPowerOfTwo: function isPowerOfTwo(e) {
      return 0 == (e & e - 1) && 0 !== e;
    },
    ceilPowerOfTwo: function ceilPowerOfTwo(e) {
      return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
    },
    floorPowerOfTwo: function floorPowerOfTwo(e) {
      return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
    },
    setQuaternionFromProperEuler: function setQuaternionFromProperEuler(e, t, n, i, r) {
      var a = Math.cos,
          o = Math.sin,
          s = a(n / 2),
          l = o(n / 2),
          c = a((t + i) / 2),
          d = o((t + i) / 2),
          h = a((t - i) / 2),
          u = o((t - i) / 2),
          f = a((i - t) / 2),
          p = o((i - t) / 2);

      switch (r) {
        case "XYX":
          e.set(s * d, l * h, l * u, s * c);
          break;

        case "YZY":
          e.set(l * u, s * d, l * h, s * c);
          break;

        case "ZXZ":
          e.set(l * h, l * u, s * d, s * c);
          break;

        case "XZX":
          e.set(s * d, l * p, l * f, s * c);
          break;

        case "YXY":
          e.set(l * f, s * d, l * p, s * c);
          break;

        case "ZYZ":
          e.set(l * p, l * f, s * d, s * c);
          break;

        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
      }
    }
  };

  var C = /*#__PURE__*/function () {
    function C() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, C);

      Object.defineProperty(this, "isVector2", {
        value: !0
      }), this.x = e, this.y = t;
    }

    _createClass(C, [{
      key: "width",
      get: function get() {
        return this.x;
      },
      set: function set(e) {
        this.x = e;
      }
    }, {
      key: "height",
      get: function get() {
        return this.y;
      },
      set: function set(e) {
        this.y = e;
      }
    }, {
      key: "set",
      value: function set(e, t) {
        return this.x = e, this.y = t, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(e) {
        return this.x = e, this.y = e, this;
      }
    }, {
      key: "setX",
      value: function setX(e) {
        return this.x = e, this;
      }
    }, {
      key: "setY",
      value: function setY(e) {
        return this.y = e, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;

          case 1:
            this.y = t;
            break;

          default:
            throw new Error("index is out of range: " + e);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(e) {
        switch (e) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          default:
            throw new Error("index is out of range: " + e);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.x = e.x, this.y = e.y, this;
      }
    }, {
      key: "add",
      value: function add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(e) {
        return this.x += e, this.y += e, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this;
      }
    }, {
      key: "sub",
      value: function sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(e) {
        return this.x -= e, this.y -= e, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this;
      }
    }, {
      key: "multiply",
      value: function multiply(e) {
        return this.x *= e.x, this.y *= e.y, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        return this.x *= e, this.y *= e, this;
      }
    }, {
      key: "divide",
      value: function divide(e) {
        return this.x /= e.x, this.y /= e.y, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(e) {
        return this.multiplyScalar(1 / e);
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(e) {
        var t = this.x,
            n = this.y,
            i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
      }
    }, {
      key: "min",
      value: function min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
      }
    }, {
      key: "max",
      value: function max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
      }
    }, {
      key: "clamp",
      value: function clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this;
      }
    }, {
      key: "dot",
      value: function dot(e) {
        return this.x * e.x + this.y * e.y;
      }
    }, {
      key: "cross",
      value: function cross(e) {
        return this.x * e.y - this.y * e.x;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "angle",
      value: function angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(e) {
        var t = this.x - e.x,
            n = this.y - e.y;
        return t * t + n * n;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
      }
    }, {
      key: "setLength",
      value: function setLength(e) {
        return this.normalize().multiplyScalar(e);
      }
    }, {
      key: "lerp",
      value: function lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.x === this.x && e.y === this.y;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = e[t], this.y = e[t + 1], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this.x, e[t + 1] = this.y, e;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
      }
    }, {
      key: "rotateAround",
      value: function rotateAround(e, t) {
        var n = Math.cos(t),
            i = Math.sin(t),
            r = this.x - e.x,
            a = this.y - e.y;
        return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this;
      }
    }]);

    return C;
  }();

  var R = /*#__PURE__*/function () {
    function R() {
      _classCallCheck(this, R);

      Object.defineProperty(this, "isMatrix3", {
        value: !0
      }), this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(R, [{
      key: "set",
      value: function set(e, t, n, i, r, a, o, s, l) {
        var c = this.elements;
        return c[0] = e, c[1] = i, c[2] = o, c[3] = t, c[4] = r, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().fromArray(this.elements);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        var t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
      }
    }, {
      key: "setFromMatrix4",
      value: function setFromMatrix4(e) {
        var t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
      }
    }, {
      key: "multiply",
      value: function multiply(e) {
        return this.multiplyMatrices(this, e);
      }
    }, {
      key: "premultiply",
      value: function premultiply(e) {
        return this.multiplyMatrices(e, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(e, t) {
        var n = e.elements,
            i = t.elements,
            r = this.elements,
            a = n[0],
            o = n[3],
            s = n[6],
            l = n[1],
            c = n[4],
            d = n[7],
            h = n[2],
            u = n[5],
            f = n[8],
            p = i[0],
            m = i[3],
            g = i[6],
            x = i[1],
            _ = i[4],
            v = i[7],
            y = i[2],
            M = i[5],
            b = i[8];
        return r[0] = a * p + o * x + s * y, r[3] = a * m + o * _ + s * M, r[6] = a * g + o * v + s * b, r[1] = l * p + c * x + d * y, r[4] = l * m + c * _ + d * M, r[7] = l * g + c * v + d * b, r[2] = h * p + u * x + f * y, r[5] = h * m + u * _ + f * M, r[8] = h * g + u * v + f * b, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            l = e[7],
            c = e[8];
        return t * a * c - t * o * l - n * r * c + n * o * s + i * r * l - i * a * s;
      }
    }, {
      key: "invert",
      value: function invert() {
        var e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            l = e[7],
            c = e[8],
            d = c * a - o * l,
            h = o * s - c * r,
            u = l * r - a * s,
            f = t * d + n * h + i * u;
        if (0 === f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var p = 1 / f;
        return e[0] = d * p, e[1] = (i * l - c * n) * p, e[2] = (o * n - i * a) * p, e[3] = h * p, e[4] = (c * t - i * s) * p, e[5] = (i * r - o * t) * p, e[6] = u * p, e[7] = (n * s - l * t) * p, e[8] = (a * t - n * r) * p, this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var e;
        var t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
      }
    }, {
      key: "getNormalMatrix",
      value: function getNormalMatrix(e) {
        return this.setFromMatrix4(e).copy(this).invert().transpose();
      }
    }, {
      key: "transposeIntoArray",
      value: function transposeIntoArray(e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
      }
    }, {
      key: "setUvTransform",
      value: function setUvTransform(e, t, n, i, r, a, o) {
        var s = Math.cos(r),
            l = Math.sin(r);
        return this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -i * l, i * s, -i * (-l * a + s * o) + o + t, 0, 0, 1), this;
      }
    }, {
      key: "scale",
      value: function scale(e, t) {
        var n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
      }
    }, {
      key: "rotate",
      value: function rotate(e) {
        var t = Math.cos(e),
            n = Math.sin(e),
            i = this.elements,
            r = i[0],
            a = i[3],
            o = i[6],
            s = i[1],
            l = i[4],
            c = i[7];
        return i[0] = t * r + n * s, i[3] = t * a + n * l, i[6] = t * o + n * c, i[1] = -n * r + t * s, i[4] = -n * a + t * l, i[7] = -n * o + t * c, this;
      }
    }, {
      key: "translate",
      value: function translate(e, t) {
        var n = this.elements;
        return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        var t = this.elements,
            n = e.elements;

        for (var _e4 = 0; _e4 < 9; _e4++) {
          if (t[_e4] !== n[_e4]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n3 = 0; _n3 < 9; _n3++) {
          this.elements[_n3] = e[_n3 + t];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
      }
    }]);

    return R;
  }();

  var I;

  var D = function D(e) {
    if (/^data:/i.test(e.src)) return e.src;
    if ("undefined" == typeof HTMLCanvasElement) return e.src;
    var t;
    if (e instanceof HTMLCanvasElement) t = e;else {
      void 0 === I && (I = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), I.width = e.width, I.height = e.height;

      var _n4 = I.getContext("2d");

      e instanceof ImageData ? _n4.putImageData(e, 0, 0) : _n4.drawImage(e, 0, 0, e.width, e.height), t = I;
    }
    return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png");
  };

  var U = 0;

  function O() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : O.DEFAULT_IMAGE;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : O.DEFAULT_MAPPING;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1001;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1001;
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1006;
    var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1008;
    var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1023;
    var s = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1009;
    var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
    var c = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 3e3;
    Object.defineProperty(this, "id", {
      value: U++
    }), this.uuid = N.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = s, this.offset = new C(0, 0), this.repeat = new C(1, 1), this.center = new C(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new R(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null;
  }

  function z(e) {
    return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? D(e) : e.data ? {
      data: Array.prototype.slice.call(e.data),
      width: e.width,
      height: e.height,
      type: e.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }

  O.DEFAULT_IMAGE = void 0, O.DEFAULT_MAPPING = 300, O.prototype = Object.assign(Object.create(E.prototype), {
    constructor: O,
    isTexture: !0,
    updateMatrix: function updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(e) {
      return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this;
    },
    toJSON: function toJSON(e) {
      var t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
      var n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };

      if (void 0 !== this.image) {
        var _i3 = this.image;

        if (void 0 === _i3.uuid && (_i3.uuid = N.generateUUID()), !t && void 0 === e.images[_i3.uuid]) {
          var _t3;

          if (Array.isArray(_i3)) {
            _t3 = [];

            for (var _e5 = 0, _n5 = _i3.length; _e5 < _n5; _e5++) {
              _i3[_e5].isDataTexture ? _t3.push(z(_i3[_e5].image)) : _t3.push(z(_i3[_e5]));
            }
          } else _t3 = z(_i3);

          e.images[_i3.uuid] = {
            uuid: _i3.uuid,
            url: _t3
          };
        }

        n.image = _i3.uuid;
      }

      return t || (e.textures[this.uuid] = n), n;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    },
    transformUv: function transformUv(e) {
      if (300 !== this.mapping) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case c:
          e.x = e.x - Math.floor(e.x);
          break;

        case d:
          e.x = e.x < 0 ? 0 : 1;
          break;

        case h:
          1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case c:
          e.y = e.y - Math.floor(e.y);
          break;

        case d:
          e.y = e.y < 0 ? 0 : 1;
          break;

        case h:
          1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
      }
      return this.flipY && (e.y = 1 - e.y), e;
    }
  }), Object.defineProperty(O.prototype, "needsUpdate", {
    set: function set(e) {
      !0 === e && this.version++;
    }
  });

  var G = /*#__PURE__*/function () {
    function G() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, G);

      Object.defineProperty(this, "isVector4", {
        value: !0
      }), this.x = e, this.y = t, this.z = n, this.w = i;
    }

    _createClass(G, [{
      key: "width",
      get: function get() {
        return this.z;
      },
      set: function set(e) {
        this.z = e;
      }
    }, {
      key: "height",
      get: function get() {
        return this.w;
      },
      set: function set(e) {
        this.w = e;
      }
    }, {
      key: "set",
      value: function set(e, t, n, i) {
        return this.x = e, this.y = t, this.z = n, this.w = i, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this.w = e, this;
      }
    }, {
      key: "setX",
      value: function setX(e) {
        return this.x = e, this;
      }
    }, {
      key: "setY",
      value: function setY(e) {
        return this.y = e, this;
      }
    }, {
      key: "setZ",
      value: function setZ(e) {
        return this.z = e, this;
      }
    }, {
      key: "setW",
      value: function setW(e) {
        return this.w = e, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;

          case 1:
            this.y = t;
            break;

          case 2:
            this.z = t;
            break;

          case 3:
            this.w = t;
            break;

          default:
            throw new Error("index is out of range: " + e);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(e) {
        switch (e) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          case 3:
            return this.w;

          default:
            throw new Error("index is out of range: " + e);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this;
      }
    }, {
      key: "add",
      value: function add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
      }
    }, {
      key: "sub",
      value: function sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
      }
    }, {
      key: "multiply",
      value: function multiply(e) {
        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e) {
        var t = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(e) {
        return this.multiplyScalar(1 / e);
      }
    }, {
      key: "setAxisAngleFromQuaternion",
      value: function setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
      }
    }, {
      key: "setAxisAngleFromRotationMatrix",
      value: function setAxisAngleFromRotationMatrix(e) {
        var t, n, i, r;
        var a = .01,
            o = .1,
            s = e.elements,
            l = s[0],
            c = s[4],
            d = s[8],
            h = s[1],
            u = s[5],
            f = s[9],
            p = s[2],
            m = s[6],
            g = s[10];

        if (Math.abs(c - h) < a && Math.abs(d - p) < a && Math.abs(f - m) < a) {
          if (Math.abs(c + h) < o && Math.abs(d + p) < o && Math.abs(f + m) < o && Math.abs(l + u + g - 3) < o) return this.set(1, 0, 0, 0), this;
          t = Math.PI;

          var _e6 = (l + 1) / 2,
              _s = (u + 1) / 2,
              _x = (g + 1) / 2,
              _2 = (c + h) / 4,
              _v = (d + p) / 4,
              _y = (f + m) / 4;

          return _e6 > _s && _e6 > _x ? _e6 < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(_e6), i = _2 / n, r = _v / n) : _s > _x ? _s < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_s), n = _2 / i, r = _y / i) : _x < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_x), n = _v / r, i = _y / r), this.set(n, i, r, t), this;
        }

        var x = Math.sqrt((m - f) * (m - f) + (d - p) * (d - p) + (h - c) * (h - c));
        return Math.abs(x) < .001 && (x = 1), this.x = (m - f) / x, this.y = (d - p) / x, this.z = (h - c) / x, this.w = Math.acos((l + u + g - 1) / 2), this;
      }
    }, {
      key: "min",
      value: function min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
      }
    }, {
      key: "max",
      value: function max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
      }
    }, {
      key: "clamp",
      value: function clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
      }
    }, {
      key: "dot",
      value: function dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(e) {
        return this.normalize().multiplyScalar(e);
      }
    }, {
      key: "lerp",
      value: function lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
      }
    }]);

    return G;
  }();

  var B = /*#__PURE__*/function (_E) {
    _inherits(B, _E);

    var _super = _createSuper(B);

    function B(e, t, n) {
      var _this;

      _classCallCheck(this, B);

      _this = _super.call(this), Object.defineProperty(_assertThisInitialized(_this), "isWebGLRenderTarget", {
        value: !0
      }), _this.width = e, _this.height = t, _this.scissor = new G(0, 0, e, t), _this.scissorTest = !1, _this.viewport = new G(0, 0, e, t), n = n || {}, _this.texture = new O(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), _this.texture.image = {}, _this.texture.image.width = e, _this.texture.image.height = t, _this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, _this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : f, _this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, _this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, _this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
      return _this;
    }

    _createClass(B, [{
      key: "setSize",
      value: function setSize(e, t) {
        this.width === e && this.height === t || (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }]);

    return B;
  }(E);

  var H = /*#__PURE__*/function () {
    function H() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, H);

      Object.defineProperty(this, "isQuaternion", {
        value: !0
      }), this._x = e, this._y = t, this._z = n, this._w = i;
    }

    _createClass(H, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(e) {
        this._x = e, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(e) {
        this._y = e, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(e) {
        this._z = e, this._onChangeCallback();
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(e) {
        this._w = e, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromEuler",
      value: function setFromEuler(e, t) {
        if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        var n = e._x,
            i = e._y,
            r = e._z,
            a = e._order,
            o = Math.cos,
            s = Math.sin,
            l = o(n / 2),
            c = o(i / 2),
            d = o(r / 2),
            h = s(n / 2),
            u = s(i / 2),
            f = s(r / 2);

        switch (a) {
          case "XYZ":
            this._x = h * c * d + l * u * f, this._y = l * u * d - h * c * f, this._z = l * c * f + h * u * d, this._w = l * c * d - h * u * f;
            break;

          case "YXZ":
            this._x = h * c * d + l * u * f, this._y = l * u * d - h * c * f, this._z = l * c * f - h * u * d, this._w = l * c * d + h * u * f;
            break;

          case "ZXY":
            this._x = h * c * d - l * u * f, this._y = l * u * d + h * c * f, this._z = l * c * f + h * u * d, this._w = l * c * d - h * u * f;
            break;

          case "ZYX":
            this._x = h * c * d - l * u * f, this._y = l * u * d + h * c * f, this._z = l * c * f - h * u * d, this._w = l * c * d + h * u * f;
            break;

          case "YZX":
            this._x = h * c * d + l * u * f, this._y = l * u * d + h * c * f, this._z = l * c * f - h * u * d, this._w = l * c * d - h * u * f;
            break;

          case "XZY":
            this._x = h * c * d - l * u * f, this._y = l * u * d - h * c * f, this._z = l * c * f + h * u * d, this._w = l * c * d + h * u * f;
            break;

          default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
        }

        return !1 !== t && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromAxisAngle",
      value: function setFromAxisAngle(e, t) {
        var n = t / 2,
            i = Math.sin(n);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(e) {
        var t = e.elements,
            n = t[0],
            i = t[4],
            r = t[8],
            a = t[1],
            o = t[5],
            s = t[9],
            l = t[2],
            c = t[6],
            d = t[10],
            h = n + o + d;

        if (h > 0) {
          var _e7 = .5 / Math.sqrt(h + 1);

          this._w = .25 / _e7, this._x = (c - s) * _e7, this._y = (r - l) * _e7, this._z = (a - i) * _e7;
        } else if (n > o && n > d) {
          var _e8 = 2 * Math.sqrt(1 + n - o - d);

          this._w = (c - s) / _e8, this._x = .25 * _e8, this._y = (i + a) / _e8, this._z = (r + l) / _e8;
        } else if (o > d) {
          var _e9 = 2 * Math.sqrt(1 + o - n - d);

          this._w = (r - l) / _e9, this._x = (i + a) / _e9, this._y = .25 * _e9, this._z = (s + c) / _e9;
        } else {
          var _e10 = 2 * Math.sqrt(1 + d - n - o);

          this._w = (a - i) / _e10, this._x = (r + l) / _e10, this._y = (s + c) / _e10, this._z = .25 * _e10;
        }

        return this._onChangeCallback(), this;
      }
    }, {
      key: "setFromUnitVectors",
      value: function setFromUnitVectors(e, t) {
        var n = e.dot(t) + 1;
        return n < 1e-6 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
      }
    }, {
      key: "angleTo",
      value: function angleTo(e) {
        return 2 * Math.acos(Math.abs(N.clamp(this.dot(e), -1, 1)));
      }
    }, {
      key: "rotateTowards",
      value: function rotateTowards(e, t) {
        var n = this.angleTo(e);
        if (0 === n) return this;
        var i = Math.min(1, t / n);
        return this.slerp(e, i), this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(0, 0, 0, 1);
      }
    }, {
      key: "invert",
      value: function invert() {
        return this.conjugate();
      }
    }, {
      key: "conjugate",
      value: function conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
      }
    }, {
      key: "dot",
      value: function dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var e = this.length();
        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
      }
    }, {
      key: "multiply",
      value: function multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
      }
    }, {
      key: "premultiply",
      value: function premultiply(e) {
        return this.multiplyQuaternions(e, this);
      }
    }, {
      key: "multiplyQuaternions",
      value: function multiplyQuaternions(e, t) {
        var n = e._x,
            i = e._y,
            r = e._z,
            a = e._w,
            o = t._x,
            s = t._y,
            l = t._z,
            c = t._w;
        return this._x = n * c + a * o + i * l - r * s, this._y = i * c + a * s + r * o - n * l, this._z = r * c + a * l + n * s - i * o, this._w = a * c - n * o - i * s - r * l, this._onChangeCallback(), this;
      }
    }, {
      key: "slerp",
      value: function slerp(e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        var n = this._x,
            i = this._y,
            r = this._z,
            a = this._w;
        var o = a * e._w + n * e._x + i * e._y + r * e._z;
        if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
        var s = 1 - o * o;

        if (s <= Number.EPSILON) {
          var _e11 = 1 - t;

          return this._w = _e11 * a + t * this._w, this._x = _e11 * n + t * this._x, this._y = _e11 * i + t * this._y, this._z = _e11 * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
        }

        var l = Math.sqrt(s),
            c = Math.atan2(l, o),
            d = Math.sin((1 - t) * c) / l,
            h = Math.sin(t * c) / l;
        return this._w = a * d + this._w * h, this._x = n * d + this._x * h, this._y = i * d + this._y * h, this._z = r * d + this._z * h, this._onChangeCallback(), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(e, t) {
        return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
      }
    }, {
      key: "_onChange",
      value: function _onChange(e) {
        return this._onChangeCallback = e, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }], [{
      key: "slerp",
      value: function slerp(e, t, n, i) {
        return n.copy(e).slerp(t, i);
      }
    }, {
      key: "slerpFlat",
      value: function slerpFlat(e, t, n, i, r, a, o) {
        var s = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            d = n[i + 3];
        var h = r[a + 0],
            u = r[a + 1],
            f = r[a + 2],
            p = r[a + 3];

        if (d !== p || s !== h || l !== u || c !== f) {
          var _e12 = 1 - o;

          var _t4 = s * h + l * u + c * f + d * p,
              _n6 = _t4 >= 0 ? 1 : -1,
              _i4 = 1 - _t4 * _t4;

          if (_i4 > Number.EPSILON) {
            var _r3 = Math.sqrt(_i4),
                _a = Math.atan2(_r3, _t4 * _n6);

            _e12 = Math.sin(_e12 * _a) / _r3, o = Math.sin(o * _a) / _r3;
          }

          var _r2 = o * _n6;

          if (s = s * _e12 + h * _r2, l = l * _e12 + u * _r2, c = c * _e12 + f * _r2, d = d * _e12 + p * _r2, _e12 === 1 - o) {
            var _e13 = 1 / Math.sqrt(s * s + l * l + c * c + d * d);

            s *= _e13, l *= _e13, c *= _e13, d *= _e13;
          }
        }

        e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = d;
      }
    }, {
      key: "multiplyQuaternionsFlat",
      value: function multiplyQuaternionsFlat(e, t, n, i, r, a) {
        var o = n[i],
            s = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            d = r[a],
            h = r[a + 1],
            u = r[a + 2],
            f = r[a + 3];
        return e[t] = o * f + c * d + s * u - l * h, e[t + 1] = s * f + c * h + l * d - o * u, e[t + 2] = l * f + c * u + o * h - s * d, e[t + 3] = c * f - o * d - s * h - l * u, e;
      }
    }]);

    return H;
  }();

  var k = /*#__PURE__*/function () {
    function k() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, k);

      Object.defineProperty(this, "isVector3", {
        value: !0
      }), this.x = e, this.y = t, this.z = n;
    }

    _createClass(k, [{
      key: "set",
      value: function set(e, t, n) {
        return void 0 === n && (n = this.z), this.x = e, this.y = t, this.z = n, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this;
      }
    }, {
      key: "setX",
      value: function setX(e) {
        return this.x = e, this;
      }
    }, {
      key: "setY",
      value: function setY(e) {
        return this.y = e, this;
      }
    }, {
      key: "setZ",
      value: function setZ(e) {
        return this.z = e, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;

          case 1:
            this.y = t;
            break;

          case 2:
            this.z = t;
            break;

          default:
            throw new Error("index is out of range: " + e);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(e) {
        switch (e) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          default:
            throw new Error("index is out of range: " + e);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this;
      }
    }, {
      key: "add",
      value: function add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
      }
    }, {
      key: "sub",
      value: function sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this;
      }
    }, {
      key: "multiplyVectors",
      value: function multiplyVectors(e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
      }
    }, {
      key: "applyEuler",
      value: function applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(V.setFromEuler(e));
      }
    }, {
      key: "applyAxisAngle",
      value: function applyAxisAngle(e, t) {
        return this.applyQuaternion(V.setFromAxisAngle(e, t));
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(e) {
        var t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
      }
    }, {
      key: "applyNormalMatrix",
      value: function applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize();
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e) {
        var t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements,
            a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(e) {
        var t = this.x,
            n = this.y,
            i = this.z,
            r = e.x,
            a = e.y,
            o = e.z,
            s = e.w,
            l = s * t + a * i - o * n,
            c = s * n + o * t - r * i,
            d = s * i + r * n - a * t,
            h = -r * t - a * n - o * i;
        return this.x = l * s + h * -r + c * -o - d * -a, this.y = c * s + h * -a + d * -r - l * -o, this.z = d * s + h * -o + l * -a - c * -r, this;
      }
    }, {
      key: "project",
      value: function project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
      }
    }, {
      key: "unproject",
      value: function unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(e) {
        var t = this.x,
            n = this.y,
            i = this.z,
            r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
      }
    }, {
      key: "divide",
      value: function divide(e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(e) {
        return this.multiplyScalar(1 / e);
      }
    }, {
      key: "min",
      value: function min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
      }
    }, {
      key: "max",
      value: function max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
      }
    }, {
      key: "clamp",
      value: function clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
      }
    }, {
      key: "dot",
      value: function dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(e) {
        return this.normalize().multiplyScalar(e);
      }
    }, {
      key: "lerp",
      value: function lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
      }
    }, {
      key: "cross",
      value: function cross(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
      }
    }, {
      key: "crossVectors",
      value: function crossVectors(e, t) {
        var n = e.x,
            i = e.y,
            r = e.z,
            a = t.x,
            o = t.y,
            s = t.z;
        return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this;
      }
    }, {
      key: "projectOnVector",
      value: function projectOnVector(e) {
        var t = e.lengthSq();
        if (0 === t) return this.set(0, 0, 0);
        var n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n);
      }
    }, {
      key: "projectOnPlane",
      value: function projectOnPlane(e) {
        return W.copy(this).projectOnVector(e), this.sub(W);
      }
    }, {
      key: "reflect",
      value: function reflect(e) {
        return this.sub(W.copy(e).multiplyScalar(2 * this.dot(e)));
      }
    }, {
      key: "angleTo",
      value: function angleTo(e) {
        var t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (0 === t) return Math.PI / 2;
        var n = this.dot(e) / t;
        return Math.acos(N.clamp(n, -1, 1));
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(e) {
        var t = this.x - e.x,
            n = this.y - e.y,
            i = this.z - e.z;
        return t * t + n * n + i * i;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
      }
    }, {
      key: "setFromSpherical",
      value: function setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
      }
    }, {
      key: "setFromSphericalCoords",
      value: function setFromSphericalCoords(e, t, n) {
        var i = Math.sin(t) * e;
        return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
      }
    }, {
      key: "setFromCylindrical",
      value: function setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
      }
    }, {
      key: "setFromCylindricalCoords",
      value: function setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
      }
    }, {
      key: "setFromMatrixPosition",
      value: function setFromMatrixPosition(e) {
        var t = e.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this;
      }
    }, {
      key: "setFromMatrixScale",
      value: function setFromMatrixScale(e) {
        var t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t, this.y = n, this.z = i, this;
      }
    }, {
      key: "setFromMatrixColumn",
      value: function setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, 4 * t);
      }
    }, {
      key: "setFromMatrix3Column",
      value: function setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, 3 * t);
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
      }
    }]);

    return k;
  }();

  var W = new k(),
      V = new H();

  var X = /*#__PURE__*/function () {
    function X(e, t) {
      _classCallCheck(this, X);

      Object.defineProperty(this, "isBox3", {
        value: !0
      }), this.min = void 0 !== e ? e : new k(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new k(-1 / 0, -1 / 0, -1 / 0);
    }

    _createClass(X, [{
      key: "set",
      value: function set(e, t) {
        return this.min.copy(e), this.max.copy(t), this;
      }
    }, {
      key: "setFromArray",
      value: function setFromArray(e) {
        var t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            o = -1 / 0;

        for (var _s2 = 0, _l = e.length; _s2 < _l; _s2 += 3) {
          var _l2 = e[_s2],
              _c = e[_s2 + 1],
              _d = e[_s2 + 2];
          _l2 < t && (t = _l2), _c < n && (n = _c), _d < i && (i = _d), _l2 > r && (r = _l2), _c > a && (a = _c), _d > o && (o = _d);
        }

        return this.min.set(t, n, i), this.max.set(r, a, o), this;
      }
    }, {
      key: "setFromBufferAttribute",
      value: function setFromBufferAttribute(e) {
        var t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            o = -1 / 0;

        for (var _s3 = 0, _l3 = e.count; _s3 < _l3; _s3++) {
          var _l4 = e.getX(_s3),
              _c2 = e.getY(_s3),
              _d2 = e.getZ(_s3);

          _l4 < t && (t = _l4), _c2 < n && (n = _c2), _d2 < i && (i = _d2), _l4 > r && (r = _l4), _c2 > a && (a = _c2), _d2 > o && (o = _d2);
        }

        return this.min.set(t, n, i), this.max.set(r, a, o), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(e) {
        this.makeEmpty();

        for (var _t5 = 0, _n7 = e.length; _t5 < _n7; _t5++) {
          this.expandByPoint(e[_t5]);
        }

        return this;
      }
    }, {
      key: "setFromCenterAndSize",
      value: function setFromCenterAndSize(e, t) {
        var n = Q.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
      }
    }, {
      key: "setFromObject",
      value: function setFromObject(e) {
        return this.makeEmpty(), this.expandByObject(e);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
      }
    }, {
      key: "getCenter",
      value: function getCenter(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new k()), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
      }
    }, {
      key: "getSize",
      value: function getSize(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new k()), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this;
      }
    }, {
      key: "expandByVector",
      value: function expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this;
      }
    }, {
      key: "expandByScalar",
      value: function expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this;
      }
    }, {
      key: "expandByObject",
      value: function expandByObject(e) {
        e.updateWorldMatrix(!1, !1);
        var t = e.geometry;
        void 0 !== t && (null === t.boundingBox && t.computeBoundingBox(), q.copy(t.boundingBox), q.applyMatrix4(e.matrixWorld), this.union(q));
        var n = e.children;

        for (var _e14 = 0, _t6 = n.length; _e14 < _t6; _e14++) {
          this.expandByObject(n[_e14]);
        }

        return this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
      }
    }, {
      key: "containsBox",
      value: function containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
      }
    }, {
      key: "getParameter",
      value: function getParameter(e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new k()), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(e) {
        return this.clampPoint(e.center, Q), Q.distanceToSquared(e.center) <= e.radius * e.radius;
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(e) {
        var t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
      }
    }, {
      key: "intersectsTriangle",
      value: function intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(ne), ie.subVectors(this.max, ne), Z.subVectors(e.a, ne), J.subVectors(e.b, ne), K.subVectors(e.c, ne), $.subVectors(J, Z), ee.subVectors(K, J), te.subVectors(Z, K);
        var t = [0, -$.z, $.y, 0, -ee.z, ee.y, 0, -te.z, te.y, $.z, 0, -$.x, ee.z, 0, -ee.x, te.z, 0, -te.x, -$.y, $.x, 0, -ee.y, ee.x, 0, -te.y, te.x, 0];
        return !!Y(t, Z, J, K, ie) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Y(t, Z, J, K, ie) && (re.crossVectors($, ee), t = [re.x, re.y, re.z], Y(t, Z, J, K, ie)));
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new k()), t.copy(e).clamp(this.min, this.max);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(e) {
        return Q.copy(e).clamp(this.min, this.max).sub(e).length();
      }
    }, {
      key: "getBoundingSphere",
      value: function getBoundingSphere(e) {
        return void 0 === e && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = .5 * this.getSize(Q).length(), e;
      }
    }, {
      key: "intersect",
      value: function intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
      }
    }, {
      key: "union",
      value: function union(e) {
        return this.min.min(e.min), this.max.max(e.max), this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e) {
        return this.isEmpty() || (j[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), j[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), j[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), j[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), j[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), j[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), j[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), j[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(j)), this;
      }
    }, {
      key: "translate",
      value: function translate(e) {
        return this.min.add(e), this.max.add(e), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
      }
    }]);

    return X;
  }();

  function Y(e, t, n, i, r) {
    for (var _a2 = 0, _o = e.length - 3; _a2 <= _o; _a2 += 3) {
      ae.fromArray(e, _a2);

      var _o2 = r.x * Math.abs(ae.x) + r.y * Math.abs(ae.y) + r.z * Math.abs(ae.z),
          _s4 = t.dot(ae),
          _l5 = n.dot(ae),
          _c3 = i.dot(ae);

      if (Math.max(-Math.max(_s4, _l5, _c3), Math.min(_s4, _l5, _c3)) > _o2) return !1;
    }

    return !0;
  }

  var j = [new k(), new k(), new k(), new k(), new k(), new k(), new k(), new k()],
      Q = new k(),
      q = new X(),
      Z = new k(),
      J = new k(),
      K = new k(),
      $ = new k(),
      ee = new k(),
      te = new k(),
      ne = new k(),
      ie = new k(),
      re = new k(),
      ae = new k(),
      oe = new X();

  var se = /*#__PURE__*/function () {
    function se(e, t) {
      _classCallCheck(this, se);

      this.center = void 0 !== e ? e : new k(), this.radius = void 0 !== t ? t : -1;
    }

    _createClass(se, [{
      key: "set",
      value: function set(e, t) {
        return this.center.copy(e), this.radius = t, this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(e, t) {
        var n = this.center;
        void 0 !== t ? n.copy(t) : oe.setFromPoints(e).getCenter(n);
        var i = 0;

        for (var _t7 = 0, _r4 = e.length; _t7 < _r4; _t7++) {
          i = Math.max(i, n.distanceToSquared(e[_t7]));
        }

        return this.radius = Math.sqrt(i), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.center.copy(e.center), this.radius = e.radius, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.radius < 0;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius;
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        return e.intersectsSphere(this);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(e, t) {
        var n = this.center.distanceToSquared(e);
        return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new k()), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
      }
    }, {
      key: "getBoundingBox",
      value: function getBoundingBox(e) {
        return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new X()), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
      }
    }, {
      key: "translate",
      value: function translate(e) {
        return this.center.add(e), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius;
      }
    }]);

    return se;
  }();

  var le = new k(),
      ce = new k(),
      de = new k(),
      he = new k(),
      ue = new k(),
      fe = new k(),
      pe = new k();

  var me = /*#__PURE__*/function () {
    function me() {
      _classCallCheck(this, me);

      Object.defineProperty(this, "isMatrix4", {
        value: !0
      }), this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(me, [{
      key: "set",
      value: function set(e, t, n, i, r, a, o, s, l, c, d, h, u, f, p, m) {
        var g = this.elements;
        return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = l, g[6] = c, g[10] = d, g[14] = h, g[3] = u, g[7] = f, g[11] = p, g[15] = m, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new me().fromArray(this.elements);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        var t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
      }
    }, {
      key: "copyPosition",
      value: function copyPosition(e) {
        var t = this.elements,
            n = e.elements;
        return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
      }
    }, {
      key: "setFromMatrix3",
      value: function setFromMatrix3(e) {
        var t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
      }
    }, {
      key: "makeBasis",
      value: function makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractRotation",
      value: function extractRotation(e) {
        var t = this.elements,
            n = e.elements,
            i = 1 / ge.setFromMatrixColumn(e, 0).length(),
            r = 1 / ge.setFromMatrixColumn(e, 1).length(),
            a = 1 / ge.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
      }
    }, {
      key: "makeRotationFromEuler",
      value: function makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements,
            n = e.x,
            i = e.y,
            r = e.z,
            a = Math.cos(n),
            o = Math.sin(n),
            s = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            d = Math.sin(r);

        if ("XYZ" === e.order) {
          var _e15 = a * c,
              _n8 = a * d,
              _i5 = o * c,
              _r5 = o * d;

          t[0] = s * c, t[4] = -s * d, t[8] = l, t[1] = _n8 + _i5 * l, t[5] = _e15 - _r5 * l, t[9] = -o * s, t[2] = _r5 - _e15 * l, t[6] = _i5 + _n8 * l, t[10] = a * s;
        } else if ("YXZ" === e.order) {
          var _e16 = s * c,
              _n9 = s * d,
              _i6 = l * c,
              _r6 = l * d;

          t[0] = _e16 + _r6 * o, t[4] = _i6 * o - _n9, t[8] = a * l, t[1] = a * d, t[5] = a * c, t[9] = -o, t[2] = _n9 * o - _i6, t[6] = _r6 + _e16 * o, t[10] = a * s;
        } else if ("ZXY" === e.order) {
          var _e17 = s * c,
              _n10 = s * d,
              _i7 = l * c,
              _r7 = l * d;

          t[0] = _e17 - _r7 * o, t[4] = -a * d, t[8] = _i7 + _n10 * o, t[1] = _n10 + _i7 * o, t[5] = a * c, t[9] = _r7 - _e17 * o, t[2] = -a * l, t[6] = o, t[10] = a * s;
        } else if ("ZYX" === e.order) {
          var _e18 = a * c,
              _n11 = a * d,
              _i8 = o * c,
              _r8 = o * d;

          t[0] = s * c, t[4] = _i8 * l - _n11, t[8] = _e18 * l + _r8, t[1] = s * d, t[5] = _r8 * l + _e18, t[9] = _n11 * l - _i8, t[2] = -l, t[6] = o * s, t[10] = a * s;
        } else if ("YZX" === e.order) {
          var _e19 = a * s,
              _n12 = a * l,
              _i9 = o * s,
              _r9 = o * l;

          t[0] = s * c, t[4] = _r9 - _e19 * d, t[8] = _i9 * d + _n12, t[1] = d, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = _n12 * d + _i9, t[10] = _e19 - _r9 * d;
        } else if ("XZY" === e.order) {
          var _e20 = a * s,
              _n13 = a * l,
              _i10 = o * s,
              _r10 = o * l;

          t[0] = s * c, t[4] = -d, t[8] = l * c, t[1] = _e20 * d + _r10, t[5] = a * c, t[9] = _n13 * d - _i10, t[2] = _i10 * d - _n13, t[6] = o * c, t[10] = _r10 * d + _e20;
        }

        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
      }
    }, {
      key: "makeRotationFromQuaternion",
      value: function makeRotationFromQuaternion(e) {
        return this.compose(_e, e, ve);
      }
    }, {
      key: "lookAt",
      value: function lookAt(e, t, n) {
        var i = this.elements;
        return be.subVectors(e, t), 0 === be.lengthSq() && (be.z = 1), be.normalize(), ye.crossVectors(n, be), 0 === ye.lengthSq() && (1 === Math.abs(n.z) ? be.x += 1e-4 : be.z += 1e-4, be.normalize(), ye.crossVectors(n, be)), ye.normalize(), Me.crossVectors(be, ye), i[0] = ye.x, i[4] = Me.x, i[8] = be.x, i[1] = ye.y, i[5] = Me.y, i[9] = be.y, i[2] = ye.z, i[6] = Me.z, i[10] = be.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
      }
    }, {
      key: "premultiply",
      value: function premultiply(e) {
        return this.multiplyMatrices(e, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(e, t) {
        var n = e.elements,
            i = t.elements,
            r = this.elements,
            a = n[0],
            o = n[4],
            s = n[8],
            l = n[12],
            c = n[1],
            d = n[5],
            h = n[9],
            u = n[13],
            f = n[2],
            p = n[6],
            m = n[10],
            g = n[14],
            x = n[3],
            _ = n[7],
            v = n[11],
            y = n[15],
            M = i[0],
            b = i[4],
            w = i[8],
            A = i[12],
            S = i[1],
            T = i[5],
            L = i[9],
            E = i[13],
            P = i[2],
            F = i[6],
            N = i[10],
            C = i[14],
            R = i[3],
            I = i[7],
            D = i[11],
            U = i[15];
        return r[0] = a * M + o * S + s * P + l * R, r[4] = a * b + o * T + s * F + l * I, r[8] = a * w + o * L + s * N + l * D, r[12] = a * A + o * E + s * C + l * U, r[1] = c * M + d * S + h * P + u * R, r[5] = c * b + d * T + h * F + u * I, r[9] = c * w + d * L + h * N + u * D, r[13] = c * A + d * E + h * C + u * U, r[2] = f * M + p * S + m * P + g * R, r[6] = f * b + p * T + m * F + g * I, r[10] = f * w + p * L + m * N + g * D, r[14] = f * A + p * E + m * C + g * U, r[3] = x * M + _ * S + v * P + y * R, r[7] = x * b + _ * T + v * F + y * I, r[11] = x * w + _ * L + v * N + y * D, r[15] = x * A + _ * E + v * C + y * U, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            r = e[12],
            a = e[1],
            o = e[5],
            s = e[9],
            l = e[13],
            c = e[2],
            d = e[6],
            h = e[10],
            u = e[14];
        return e[3] * (+r * s * d - i * l * d - r * o * h + n * l * h + i * o * u - n * s * u) + e[7] * (+t * s * u - t * l * h + r * a * h - i * a * u + i * l * c - r * s * c) + e[11] * (+t * l * d - t * o * u - r * a * d + n * a * u + r * o * c - n * l * c) + e[15] * (-i * o * c - t * s * d + t * o * h + i * a * d - n * a * h + n * s * c);
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var e = this.elements;
        var t;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(e, t, n) {
        var i = this.elements;
        return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            l = e[7],
            c = e[8],
            d = e[9],
            h = e[10],
            u = e[11],
            f = e[12],
            p = e[13],
            m = e[14],
            g = e[15],
            x = d * m * l - p * h * l + p * s * u - o * m * u - d * s * g + o * h * g,
            _ = f * h * l - c * m * l - f * s * u + a * m * u + c * s * g - a * h * g,
            v = c * p * l - f * d * l + f * o * u - a * p * u - c * o * g + a * d * g,
            y = f * d * s - c * p * s - f * o * h + a * p * h + c * o * m - a * d * m,
            M = t * x + n * _ + i * v + r * y;

        if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var b = 1 / M;
        return e[0] = x * b, e[1] = (p * h * r - d * m * r - p * i * u + n * m * u + d * i * g - n * h * g) * b, e[2] = (o * m * r - p * s * r + p * i * l - n * m * l - o * i * g + n * s * g) * b, e[3] = (d * s * r - o * h * r - d * i * l + n * h * l + o * i * u - n * s * u) * b, e[4] = _ * b, e[5] = (c * m * r - f * h * r + f * i * u - t * m * u - c * i * g + t * h * g) * b, e[6] = (f * s * r - a * m * r - f * i * l + t * m * l + a * i * g - t * s * g) * b, e[7] = (a * h * r - c * s * r + c * i * l - t * h * l - a * i * u + t * s * u) * b, e[8] = v * b, e[9] = (f * d * r - c * p * r - f * n * u + t * p * u + c * n * g - t * d * g) * b, e[10] = (a * p * r - f * o * r + f * n * l - t * p * l - a * n * g + t * o * g) * b, e[11] = (c * o * r - a * d * r - c * n * l + t * d * l + a * n * u - t * o * u) * b, e[12] = y * b, e[13] = (c * p * i - f * d * i + f * n * h - t * p * h - c * n * m + t * d * m) * b, e[14] = (f * o * i - a * p * i - f * n * s + t * p * s + a * n * m - t * o * m) * b, e[15] = (a * d * i - c * o * i + c * n * s - t * d * s - a * n * h + t * o * h) * b, this;
      }
    }, {
      key: "scale",
      value: function scale(e) {
        var t = this.elements,
            n = e.x,
            i = e.y,
            r = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
      }
    }, {
      key: "getMaxScaleOnAxis",
      value: function getMaxScaleOnAxis() {
        var e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i));
      }
    }, {
      key: "makeTranslation",
      value: function makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationX",
      value: function makeRotationX(e) {
        var t = Math.cos(e),
            n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationY",
      value: function makeRotationY(e) {
        var t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationZ",
      value: function makeRotationZ(e) {
        var t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationAxis",
      value: function makeRotationAxis(e, t) {
        var n = Math.cos(t),
            i = Math.sin(t),
            r = 1 - n,
            a = e.x,
            o = e.y,
            s = e.z,
            l = r * a,
            c = r * o;
        return this.set(l * a + n, l * o - i * s, l * s + i * o, 0, l * o + i * s, c * o + n, c * s - i * a, 0, l * s - i * o, c * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeScale",
      value: function makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeShear",
      value: function makeShear(e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "compose",
      value: function compose(e, t, n) {
        var i = this.elements,
            r = t._x,
            a = t._y,
            o = t._z,
            s = t._w,
            l = r + r,
            c = a + a,
            d = o + o,
            h = r * l,
            u = r * c,
            f = r * d,
            p = a * c,
            m = a * d,
            g = o * d,
            x = s * l,
            _ = s * c,
            v = s * d,
            y = n.x,
            M = n.y,
            b = n.z;

        return i[0] = (1 - (p + g)) * y, i[1] = (u + v) * y, i[2] = (f - _) * y, i[3] = 0, i[4] = (u - v) * M, i[5] = (1 - (h + g)) * M, i[6] = (m + x) * M, i[7] = 0, i[8] = (f + _) * b, i[9] = (m - x) * b, i[10] = (1 - (h + p)) * b, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
      }
    }, {
      key: "decompose",
      value: function decompose(e, t, n) {
        var i = this.elements;
        var r = ge.set(i[0], i[1], i[2]).length();
        var a = ge.set(i[4], i[5], i[6]).length(),
            o = ge.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], xe.copy(this);
        var s = 1 / r,
            l = 1 / a,
            c = 1 / o;
        return xe.elements[0] *= s, xe.elements[1] *= s, xe.elements[2] *= s, xe.elements[4] *= l, xe.elements[5] *= l, xe.elements[6] *= l, xe.elements[8] *= c, xe.elements[9] *= c, xe.elements[10] *= c, t.setFromRotationMatrix(xe), n.x = r, n.y = a, n.z = o, this;
      }
    }, {
      key: "makePerspective",
      value: function makePerspective(e, t, n, i, r, a) {
        void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        var o = this.elements,
            s = 2 * r / (t - e),
            l = 2 * r / (n - i),
            c = (t + e) / (t - e),
            d = (n + i) / (n - i),
            h = -(a + r) / (a - r),
            u = -2 * a * r / (a - r);
        return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = d, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = u, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
      }
    }, {
      key: "makeOrthographic",
      value: function makeOrthographic(e, t, n, i, r, a) {
        var o = this.elements,
            s = 1 / (t - e),
            l = 1 / (n - i),
            c = 1 / (a - r),
            d = (t + e) * s,
            h = (n + i) * l,
            u = (a + r) * c;
        return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -d, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -u, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        var t = this.elements,
            n = e.elements;

        for (var _e21 = 0; _e21 < 16; _e21++) {
          if (t[_e21] !== n[_e21]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n14 = 0; _n14 < 16; _n14++) {
          this.elements[_n14] = e[_n14 + t];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
      }
    }]);

    return me;
  }();

  var ge = new k(),
      xe = new me(),
      _e = new k(0, 0, 0),
      ve = new k(1, 1, 1),
      ye = new k(),
      Me = new k(),
      be = new k();

  var we = /*#__PURE__*/function () {
    function we() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : we.DefaultOrder;

      _classCallCheck(this, we);

      Object.defineProperty(this, "isEuler", {
        value: !0
      }), this._x = e, this._y = t, this._z = n, this._order = i;
    }

    _createClass(we, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(e) {
        this._x = e, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(e) {
        this._y = e, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(e) {
        this._z = e, this._onChangeCallback();
      }
    }, {
      key: "order",
      get: function get() {
        return this._order;
      },
      set: function set(e) {
        this._order = e, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(e, t, n) {
        var i = N.clamp,
            r = e.elements,
            a = r[0],
            o = r[4],
            s = r[8],
            l = r[1],
            c = r[5],
            d = r[9],
            h = r[2],
            u = r[6],
            f = r[10];

        switch (t = t || this._order) {
          case "XYZ":
            this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-d, f), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(u, c), this._z = 0);
            break;

          case "YXZ":
            this._x = Math.asin(-i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(s, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0);
            break;

          case "ZXY":
            this._x = Math.asin(i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a));
            break;

          case "ZYX":
            this._y = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c));
            break;

          case "YZX":
            this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, f));
            break;

          case "XZY":
            this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-d, f), this._y = 0);
            break;

          default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
        }

        return this._order = t, !1 !== n && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromQuaternion",
      value: function setFromQuaternion(e, t, n) {
        return Ae.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ae, t, n);
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order);
      }
    }, {
      key: "reorder",
      value: function reorder(e) {
        return Se.setFromEuler(this), this.setFromQuaternion(Se, e);
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
      }
    }, {
      key: "toVector3",
      value: function toVector3(e) {
        return e ? e.set(this._x, this._y, this._z) : new k(this._x, this._y, this._z);
      }
    }, {
      key: "_onChange",
      value: function _onChange(e) {
        return this._onChangeCallback = e, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }]);

    return we;
  }();

  we.DefaultOrder = "XYZ", we.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
  var Ae = new me(),
      Se = new H();

  var Te = /*#__PURE__*/function () {
    function Te() {
      _classCallCheck(this, Te);

      this.mask = 1;
    }

    _createClass(Te, [{
      key: "set",
      value: function set(e) {
        this.mask = 1 << e | 0;
      }
    }, {
      key: "enable",
      value: function enable(e) {
        this.mask |= 1 << e | 0;
      }
    }, {
      key: "enableAll",
      value: function enableAll() {
        this.mask = -1;
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        this.mask ^= 1 << e | 0;
      }
    }, {
      key: "disable",
      value: function disable(e) {
        this.mask &= ~(1 << e | 0);
      }
    }, {
      key: "disableAll",
      value: function disableAll() {
        this.mask = 0;
      }
    }, {
      key: "test",
      value: function test(e) {
        return 0 != (this.mask & e.mask);
      }
    }]);

    return Te;
  }();

  var Le = 0;
  var Ee = new k(),
      Pe = new H(),
      Fe = new me(),
      Ne = new k(),
      Ce = new k(),
      Re = new k(),
      Ie = new H(),
      De = new k(1, 0, 0),
      Ue = new k(0, 1, 0),
      Oe = new k(0, 0, 1),
      ze = {
    type: "added"
  },
      Ge = {
    type: "removed"
  };

  function Be() {
    Object.defineProperty(this, "id", {
      value: Le++
    }), this.uuid = N.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Be.DefaultUp.clone();
    var e = new k(),
        t = new we(),
        n = new H(),
        i = new k(1, 1, 1);
    t._onChange(function () {
      n.setFromEuler(t, !1);
    }), n._onChange(function () {
      t.setFromQuaternion(n, void 0, !1);
    }), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new me()
      },
      normalMatrix: {
        value: new R()
      }
    }), this.matrix = new me(), this.matrixWorld = new me(), this.matrixAutoUpdate = Be.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Te(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }

  Be.DefaultUp = new k(0, 1, 0), Be.DefaultMatrixAutoUpdate = !0, Be.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Be,
    isObject3D: !0,
    onBeforeRender: function onBeforeRender() {},
    onAfterRender: function onAfterRender() {},
    applyMatrix4: function applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    },
    setRotationFromAxisAngle: function setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    },
    setRotationFromEuler: function setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    },
    setRotationFromMatrix: function setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    },
    setRotationFromQuaternion: function setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    },
    rotateOnAxis: function rotateOnAxis(e, t) {
      return Pe.setFromAxisAngle(e, t), this.quaternion.multiply(Pe), this;
    },
    rotateOnWorldAxis: function rotateOnWorldAxis(e, t) {
      return Pe.setFromAxisAngle(e, t), this.quaternion.premultiply(Pe), this;
    },
    rotateX: function rotateX(e) {
      return this.rotateOnAxis(De, e);
    },
    rotateY: function rotateY(e) {
      return this.rotateOnAxis(Ue, e);
    },
    rotateZ: function rotateZ(e) {
      return this.rotateOnAxis(Oe, e);
    },
    translateOnAxis: function translateOnAxis(e, t) {
      return Ee.copy(e).applyQuaternion(this.quaternion), this.position.add(Ee.multiplyScalar(t)), this;
    },
    translateX: function translateX(e) {
      return this.translateOnAxis(De, e);
    },
    translateY: function translateY(e) {
      return this.translateOnAxis(Ue, e);
    },
    translateZ: function translateZ(e) {
      return this.translateOnAxis(Oe, e);
    },
    localToWorld: function localToWorld(e) {
      return e.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function worldToLocal(e) {
      return e.applyMatrix4(Fe.copy(this.matrixWorld).invert());
    },
    lookAt: function lookAt(e, t, n) {
      e.isVector3 ? Ne.copy(e) : Ne.set(e, t, n);
      var i = this.parent;
      this.updateWorldMatrix(!0, !1), Ce.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Fe.lookAt(Ce, Ne, this.up) : Fe.lookAt(Ne, Ce, this.up), this.quaternion.setFromRotationMatrix(Fe), i && (Fe.extractRotation(i.matrixWorld), Pe.setFromRotationMatrix(Fe), this.quaternion.premultiply(Pe.invert()));
    },
    add: function add(e) {
      if (arguments.length > 1) {
        for (var _e22 = 0; _e22 < arguments.length; _e22++) {
          this.add(arguments[_e22]);
        }

        return this;
      }

      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ze)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    },
    remove: function remove(e) {
      if (arguments.length > 1) {
        for (var _e23 = 0; _e23 < arguments.length; _e23++) {
          this.remove(arguments[_e23]);
        }

        return this;
      }

      var t = this.children.indexOf(e);
      return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ge)), this;
    },
    clear: function clear() {
      for (var _e24 = 0; _e24 < this.children.length; _e24++) {
        var _t8 = this.children[_e24];
        _t8.parent = null, _t8.dispatchEvent(Ge);
      }

      return this.children.length = 0, this;
    },
    attach: function attach(e) {
      return this.updateWorldMatrix(!0, !1), Fe.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), Fe.multiply(e.parent.matrixWorld)), e.applyMatrix4(Fe), e.updateWorldMatrix(!1, !1), this.add(e), this;
    },
    getObjectById: function getObjectById(e) {
      return this.getObjectByProperty("id", e);
    },
    getObjectByName: function getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    },
    getObjectByProperty: function getObjectByProperty(e, t) {
      if (this[e] === t) return this;

      for (var _n15 = 0, _i11 = this.children.length; _n15 < _i11; _n15++) {
        var _i12 = this.children[_n15].getObjectByProperty(e, t);

        if (void 0 !== _i12) return _i12;
      }
    },
    getWorldPosition: function getWorldPosition(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new k()), this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function getWorldQuaternion(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new H()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ce, e, Re), e;
    },
    getWorldScale: function getWorldScale(e) {
      return void 0 === e && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new k()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ce, Ie, e), e;
    },
    getWorldDirection: function getWorldDirection(e) {
      void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new k()), this.updateWorldMatrix(!0, !1);
      var t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    },
    raycast: function raycast() {},
    traverse: function traverse(e) {
      e(this);
      var t = this.children;

      for (var _n16 = 0, _i13 = t.length; _n16 < _i13; _n16++) {
        t[_n16].traverse(e);
      }
    },
    traverseVisible: function traverseVisible(e) {
      if (!1 === this.visible) return;
      e(this);
      var t = this.children;

      for (var _n17 = 0, _i14 = t.length; _n17 < _i14; _n17++) {
        t[_n17].traverseVisible(e);
      }
    },
    traverseAncestors: function traverseAncestors(e) {
      var t = this.parent;
      null !== t && (e(t), t.traverseAncestors(e));
    },
    updateMatrix: function updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
      var t = this.children;

      for (var _n18 = 0, _i15 = t.length; _n18 < _i15; _n18++) {
        t[_n18].updateMatrixWorld(e);
      }
    },
    updateWorldMatrix: function updateWorldMatrix(e, t) {
      var n = this.parent;

      if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) {
        var _e25 = this.children;

        for (var _t9 = 0, _n19 = _e25.length; _t9 < _n19; _t9++) {
          _e25[_t9].updateWorldMatrix(!1, !0);
        }
      }
    },
    toJSON: function toJSON(e) {
      var t = void 0 === e || "string" == typeof e,
          n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var i = {};

      function r(t, n) {
        return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
      }

      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(e.geometries, this.geometry);
        var _t10 = this.geometry.parameters;

        if (void 0 !== _t10 && void 0 !== _t10.shapes) {
          var _n20 = _t10.shapes;
          if (Array.isArray(_n20)) for (var _t11 = 0, _i16 = _n20.length; _t11 < _i16; _t11++) {
            var _i17 = _n20[_t11];
            r(e.shapes, _i17);
          } else r(e.shapes, _n20);
        }
      }

      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        var _t12 = [];

        for (var _n21 = 0, _i18 = this.material.length; _n21 < _i18; _n21++) {
          _t12.push(r(e.materials, this.material[_n21]));
        }

        i.material = _t12;
      } else i.material = r(e.materials, this.material);

      if (this.children.length > 0) {
        i.children = [];

        for (var _t13 = 0; _t13 < this.children.length; _t13++) {
          i.children.push(this.children[_t13].toJSON(e).object);
        }
      }

      if (this.animations.length > 0) {
        i.animations = [];

        for (var _t14 = 0; _t14 < this.animations.length; _t14++) {
          var _n22 = this.animations[_t14];
          i.animations.push(r(e.animations, _n22));
        }
      }

      if (t) {
        var _t15 = a(e.geometries),
            _i19 = a(e.materials),
            _r11 = a(e.textures),
            _o3 = a(e.images),
            _s5 = a(e.shapes),
            _l6 = a(e.skeletons),
            _c4 = a(e.animations);

        _t15.length > 0 && (n.geometries = _t15), _i19.length > 0 && (n.materials = _i19), _r11.length > 0 && (n.textures = _r11), _o3.length > 0 && (n.images = _o3), _s5.length > 0 && (n.shapes = _s5), _l6.length > 0 && (n.skeletons = _l6), _c4.length > 0 && (n.animations = _c4);
      }

      return n.object = i, n;

      function a(e) {
        var t = [];

        for (var _n23 in e) {
          var _i20 = e[_n23];
          delete _i20.metadata, t.push(_i20);
        }

        return t;
      }
    },
    clone: function clone(e) {
      return new this.constructor().copy(this, e);
    },
    copy: function copy(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t) for (var _t16 = 0; _t16 < e.children.length; _t16++) {
        var _n24 = e.children[_t16];
        this.add(_n24.clone());
      }
      return this;
    }
  });
  var He = new k(),
      ke = new k(),
      We = new R();

  var Ve = /*#__PURE__*/function () {
    function Ve(e, t) {
      _classCallCheck(this, Ve);

      Object.defineProperty(this, "isPlane", {
        value: !0
      }), this.normal = void 0 !== e ? e : new k(1, 0, 0), this.constant = void 0 !== t ? t : 0;
    }

    _createClass(Ve, [{
      key: "set",
      value: function set(e, t) {
        return this.normal.copy(e), this.constant = t, this;
      }
    }, {
      key: "setComponents",
      value: function setComponents(e, t, n, i) {
        return this.normal.set(e, t, n), this.constant = i, this;
      }
    }, {
      key: "setFromNormalAndCoplanarPoint",
      value: function setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
      }
    }, {
      key: "setFromCoplanarPoints",
      value: function setFromCoplanarPoints(e, t, n) {
        var i = He.subVectors(n, t).cross(ke.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.constant *= -1, this.normal.negate(), this;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(e) {
        return this.normal.dot(e) + this.constant;
      }
    }, {
      key: "distanceToSphere",
      value: function distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius;
      }
    }, {
      key: "projectPoint",
      value: function projectPoint(e, t) {
        return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new k()), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
      }
    }, {
      key: "intersectLine",
      value: function intersectLine(e, t) {
        void 0 === t && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new k());
        var n = e.delta(He),
            i = this.normal.dot(n);
        if (0 === i) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : void 0;
        var r = -(e.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? void 0 : t.copy(n).multiplyScalar(r).add(e.start);
      }
    }, {
      key: "intersectsLine",
      value: function intersectsLine(e) {
        var t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        return e.intersectsPlane(this);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(e) {
        return e.intersectsPlane(this);
      }
    }, {
      key: "coplanarPoint",
      value: function coplanarPoint(e) {
        return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new k()), e.copy(this.normal).multiplyScalar(-this.constant);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e, t) {
        var n = t || We.getNormalMatrix(e),
            i = this.coplanarPoint(He).applyMatrix4(e),
            r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this;
      }
    }, {
      key: "translate",
      value: function translate(e) {
        return this.constant -= e.dot(this.normal), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant;
      }
    }]);

    return Ve;
  }();

  var Xe = new k(),
      Ye = new k(),
      je = new k(),
      Qe = new k(),
      qe = new k(),
      Ze = new k(),
      Je = new k(),
      Ke = new k(),
      $e = new k(),
      et = new k();

  var tt = /*#__PURE__*/function () {
    function tt(e, t, n) {
      _classCallCheck(this, tt);

      this.a = void 0 !== e ? e : new k(), this.b = void 0 !== t ? t : new k(), this.c = void 0 !== n ? n : new k();
    }

    _createClass(tt, [{
      key: "set",
      value: function set(e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
      }
    }, {
      key: "setFromPointsAndIndices",
      value: function setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        return Xe.subVectors(this.c, this.b), Ye.subVectors(this.a, this.b), .5 * Xe.cross(Ye).length();
      }
    }, {
      key: "getMidpoint",
      value: function getMidpoint(e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new k()), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
      }
    }, {
      key: "getNormal",
      value: function getNormal(e) {
        return tt.getNormal(this.a, this.b, this.c, e);
      }
    }, {
      key: "getPlane",
      value: function getPlane(e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Ve()), e.setFromCoplanarPoints(this.a, this.b, this.c);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(e, t) {
        return tt.getBarycoord(e, this.a, this.b, this.c, t);
      }
    }, {
      key: "getUV",
      value: function getUV(e, t, n, i, r) {
        return tt.getUV(e, this.a, this.b, this.c, t, n, i, r);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(e) {
        return tt.containsPoint(e, this.a, this.b, this.c);
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(e) {
        return tt.isFrontFacing(this.a, this.b, this.c, e);
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        return e.intersectsTriangle(this);
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(e, t) {
        void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new k());
        var n = this.a,
            i = this.b,
            r = this.c;
        var a, o;
        qe.subVectors(i, n), Ze.subVectors(r, n), Ke.subVectors(e, n);
        var s = qe.dot(Ke),
            l = Ze.dot(Ke);
        if (s <= 0 && l <= 0) return t.copy(n);
        $e.subVectors(e, i);
        var c = qe.dot($e),
            d = Ze.dot($e);
        if (c >= 0 && d <= c) return t.copy(i);
        var h = s * d - c * l;
        if (h <= 0 && s >= 0 && c <= 0) return a = s / (s - c), t.copy(n).addScaledVector(qe, a);
        et.subVectors(e, r);
        var u = qe.dot(et),
            f = Ze.dot(et);
        if (f >= 0 && u <= f) return t.copy(r);
        var p = u * l - s * f;
        if (p <= 0 && l >= 0 && f <= 0) return o = l / (l - f), t.copy(n).addScaledVector(Ze, o);
        var m = c * f - u * d;
        if (m <= 0 && d - c >= 0 && u - f >= 0) return Je.subVectors(r, i), o = (d - c) / (d - c + (u - f)), t.copy(i).addScaledVector(Je, o);
        var g = 1 / (m + p + h);
        return a = p * g, o = h * g, t.copy(n).addScaledVector(qe, a).addScaledVector(Ze, o);
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
      }
    }], [{
      key: "getNormal",
      value: function getNormal(e, t, n, i) {
        void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new k()), i.subVectors(n, t), Xe.subVectors(e, t), i.cross(Xe);
        var r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(e, t, n, i, r) {
        Xe.subVectors(i, t), Ye.subVectors(n, t), je.subVectors(e, t);
        var a = Xe.dot(Xe),
            o = Xe.dot(Ye),
            s = Xe.dot(je),
            l = Ye.dot(Ye),
            c = Ye.dot(je),
            d = a * l - o * o;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new k()), 0 === d) return r.set(-2, -1, -1);
        var h = 1 / d,
            u = (l * s - o * c) * h,
            f = (a * c - o * s) * h;
        return r.set(1 - u - f, f, u);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, Qe), Qe.x >= 0 && Qe.y >= 0 && Qe.x + Qe.y <= 1;
      }
    }, {
      key: "getUV",
      value: function getUV(e, t, n, i, r, a, o, s) {
        return this.getBarycoord(e, t, n, i, Qe), s.set(0, 0), s.addScaledVector(r, Qe.x), s.addScaledVector(a, Qe.y), s.addScaledVector(o, Qe.z), s;
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(e, t, n, i) {
        return Xe.subVectors(n, t), Ye.subVectors(e, t), Xe.cross(Ye).dot(i) < 0;
      }
    }]);

    return tt;
  }();

  var nt = 0;

  function it() {
    Object.defineProperty(this, "id", {
      value: nt++
    }), this.uuid = N.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = l, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = T, this.stencilZFail = T, this.stencilZPass = T, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
  }

  it.prototype = Object.assign(Object.create(E.prototype), {
    constructor: it,
    isMaterial: !0,
    onBeforeCompile: function onBeforeCompile() {},
    customProgramCacheKey: function customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    },
    setValues: function setValues(e) {
      if (void 0 !== e) for (var _t17 in e) {
        var _n25 = e[_t17];

        if (void 0 === _n25) {
          console.warn("THREE.Material: '" + _t17 + "' parameter is undefined.");
          continue;
        }

        if ("shading" === _t17) {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === _n25;
          continue;
        }

        var _i21 = this[_t17];
        void 0 !== _i21 ? _i21 && _i21.isColor ? _i21.set(_n25) : _i21 && _i21.isVector3 && _n25 && _n25.isVector3 ? _i21.copy(_n25) : this[_t17] = _n25 : console.warn("THREE." + this.type + ": '" + _t17 + "' is not a property of this material.");
      }
    },
    toJSON: function toJSON(e) {
      var t = void 0 === e || "string" == typeof e;
      t && (e = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function i(e) {
        var t = [];

        for (var _n26 in e) {
          var _i22 = e[_n26];
          delete _i22.metadata, t.push(_i22);
        }

        return t;
      }

      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
        var _t18 = i(e.textures),
            _r12 = i(e.images);

        _t18.length > 0 && (n.textures = _t18), _r12.length > 0 && (n.images = _r12);
      }

      return n;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(e) {
      this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      var t = e.clippingPlanes;
      var n = null;

      if (null !== t) {
        var _e26 = t.length;
        n = new Array(_e26);

        for (var _i23 = 0; _i23 !== _e26; ++_i23) {
          n[_i23] = t[_i23].clone();
        }
      }

      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), Object.defineProperty(it.prototype, "needsUpdate", {
    set: function set(e) {
      !0 === e && this.version++;
    }
  });
  var rt = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      at = {
    h: 0,
    s: 0,
    l: 0
  },
      ot = {
    h: 0,
    s: 0,
    l: 0
  };

  function st(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e;
  }

  function lt(e) {
    return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4);
  }

  function ct(e) {
    return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055;
  }

  var dt = /*#__PURE__*/function () {
    function dt(e, t, n) {
      _classCallCheck(this, dt);

      return Object.defineProperty(this, "isColor", {
        value: !0
      }), void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n);
    }

    _createClass(dt, [{
      key: "set",
      value: function set(e) {
        return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(e) {
        return this.r = e, this.g = e, this.b = e, this;
      }
    }, {
      key: "setHex",
      value: function setHex(e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this;
      }
    }, {
      key: "setRGB",
      value: function setRGB(e, t, n) {
        return this.r = e, this.g = t, this.b = n, this;
      }
    }, {
      key: "setHSL",
      value: function setHSL(e, t, n) {
        if (e = N.euclideanModulo(e, 1), t = N.clamp(t, 0, 1), n = N.clamp(n, 0, 1), 0 === t) this.r = this.g = this.b = n;else {
          var _i24 = n <= .5 ? n * (1 + t) : n + t - n * t,
              _r13 = 2 * n - _i24;

          this.r = st(_r13, _i24, e + 1 / 3), this.g = st(_r13, _i24, e), this.b = st(_r13, _i24, e - 1 / 3);
        }
        return this;
      }
    }, {
      key: "setStyle",
      value: function setStyle(e) {
        function t(t) {
          void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
        }

        var n;

        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
          var _e27;

          var _i25 = n[1],
              _r14 = n[2];

          switch (_i25) {
            case "rgb":
            case "rgba":
              if (_e27 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) return this.r = Math.min(255, parseInt(_e27[1], 10)) / 255, this.g = Math.min(255, parseInt(_e27[2], 10)) / 255, this.b = Math.min(255, parseInt(_e27[3], 10)) / 255, t(_e27[4]), this;
              if (_e27 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) return this.r = Math.min(100, parseInt(_e27[1], 10)) / 100, this.g = Math.min(100, parseInt(_e27[2], 10)) / 100, this.b = Math.min(100, parseInt(_e27[3], 10)) / 100, t(_e27[4]), this;
              break;

            case "hsl":
            case "hsla":
              if (_e27 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r14)) {
                var _n27 = parseFloat(_e27[1]) / 360,
                    _i26 = parseInt(_e27[2], 10) / 100,
                    _r15 = parseInt(_e27[3], 10) / 100;

                return t(_e27[4]), this.setHSL(_n27, _i26, _r15);
              }

          }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
          var _e28 = n[1],
              _t19 = _e28.length;
          if (3 === _t19) return this.r = parseInt(_e28.charAt(0) + _e28.charAt(0), 16) / 255, this.g = parseInt(_e28.charAt(1) + _e28.charAt(1), 16) / 255, this.b = parseInt(_e28.charAt(2) + _e28.charAt(2), 16) / 255, this;
          if (6 === _t19) return this.r = parseInt(_e28.charAt(0) + _e28.charAt(1), 16) / 255, this.g = parseInt(_e28.charAt(2) + _e28.charAt(3), 16) / 255, this.b = parseInt(_e28.charAt(4) + _e28.charAt(5), 16) / 255, this;
        }

        return e && e.length > 0 ? this.setColorName(e) : this;
      }
    }, {
      key: "setColorName",
      value: function setColorName(e) {
        var t = rt[e];
        return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.r, this.g, this.b);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this;
      }
    }, {
      key: "copyGammaToLinear",
      value: function copyGammaToLinear(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this;
      }
    }, {
      key: "copyLinearToGamma",
      value: function copyLinearToGamma(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this;
      }
    }, {
      key: "convertGammaToLinear",
      value: function convertGammaToLinear(e) {
        return this.copyGammaToLinear(this, e), this;
      }
    }, {
      key: "convertLinearToGamma",
      value: function convertLinearToGamma(e) {
        return this.copyLinearToGamma(this, e), this;
      }
    }, {
      key: "copySRGBToLinear",
      value: function copySRGBToLinear(e) {
        return this.r = lt(e.r), this.g = lt(e.g), this.b = lt(e.b), this;
      }
    }, {
      key: "copyLinearToSRGB",
      value: function copyLinearToSRGB(e) {
        return this.r = ct(e.r), this.g = ct(e.g), this.b = ct(e.b), this;
      }
    }, {
      key: "convertSRGBToLinear",
      value: function convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
      }
    }, {
      key: "convertLinearToSRGB",
      value: function convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
      }
    }, {
      key: "getHex",
      value: function getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
      }
    }, {
      key: "getHexString",
      value: function getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      }
    }, {
      key: "getHSL",
      value: function getHSL(e) {
        void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
          h: 0,
          s: 0,
          l: 0
        });
        var t = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(t, n, i),
            a = Math.min(t, n, i);
        var o, s;
        var l = (a + r) / 2;
        if (a === r) o = 0, s = 0;else {
          var _e29 = r - a;

          switch (s = l <= .5 ? _e29 / (r + a) : _e29 / (2 - r - a), r) {
            case t:
              o = (n - i) / _e29 + (n < i ? 6 : 0);
              break;

            case n:
              o = (i - t) / _e29 + 2;
              break;

            case i:
              o = (t - n) / _e29 + 4;
          }

          o /= 6;
        }
        return e.h = o, e.s = s, e.l = l, e;
      }
    }, {
      key: "getStyle",
      value: function getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
      }
    }, {
      key: "offsetHSL",
      value: function offsetHSL(e, t, n) {
        return this.getHSL(at), at.h += e, at.s += t, at.l += n, this.setHSL(at.h, at.s, at.l), this;
      }
    }, {
      key: "add",
      value: function add(e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this;
      }
    }, {
      key: "addColors",
      value: function addColors(e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(e) {
        return this.r += e, this.g += e, this.b += e, this;
      }
    }, {
      key: "sub",
      value: function sub(e) {
        return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
      }
    }, {
      key: "multiply",
      value: function multiply(e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(e) {
        return this.r *= e, this.g *= e, this.b *= e, this;
      }
    }, {
      key: "lerp",
      value: function lerp(e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
      }
    }, {
      key: "lerpColors",
      value: function lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
      }
    }, {
      key: "lerpHSL",
      value: function lerpHSL(e, t) {
        this.getHSL(at), e.getHSL(ot);
        var n = N.lerp(at.h, ot.h, t),
            i = N.lerp(at.s, ot.s, t),
            r = N.lerp(at.l, ot.l, t);
        return this.setHSL(n, i, r), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b;
      }
    }, {
      key: "fromArray",
      value: function fromArray(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(e, t) {
        return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), !0 === e.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.getHex();
      }
    }]);

    return dt;
  }();

  function ht(e) {
    it.call(this), this.type = "MeshBasicMaterial", this.color = new dt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e);
  }

  dt.NAMES = rt, dt.prototype.r = 1, dt.prototype.g = 1, dt.prototype.b = 1, ht.prototype = Object.create(it.prototype), ht.prototype.constructor = ht, ht.prototype.isMeshBasicMaterial = !0, ht.prototype.copy = function (e) {
    return it.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this;
  };
  var ut = new k(),
      ft = new C();

  function pt(e, t, n) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0;
  }

  function mt(e, t, n) {
    pt.call(this, new Int8Array(e), t, n);
  }

  function gt(e, t, n) {
    pt.call(this, new Uint8Array(e), t, n);
  }

  function xt(e, t, n) {
    pt.call(this, new Uint8ClampedArray(e), t, n);
  }

  function _t(e, t, n) {
    pt.call(this, new Int16Array(e), t, n);
  }

  function vt(e, t, n) {
    pt.call(this, new Uint16Array(e), t, n);
  }

  function yt(e, t, n) {
    pt.call(this, new Int32Array(e), t, n);
  }

  function Mt(e, t, n) {
    pt.call(this, new Uint32Array(e), t, n);
  }

  function bt(e, t, n) {
    pt.call(this, new Uint16Array(e), t, n);
  }

  function wt(e, t, n) {
    pt.call(this, new Float32Array(e), t, n);
  }

  function At(e, t, n) {
    pt.call(this, new Float64Array(e), t, n);
  }

  function St(e) {
    if (0 === e.length) return -1 / 0;
    var t = e[0];

    for (var _n28 = 1, _i27 = e.length; _n28 < _i27; ++_n28) {
      e[_n28] > t && (t = e[_n28]);
    }

    return t;
  }

  Object.defineProperty(pt.prototype, "needsUpdate", {
    set: function set(e) {
      !0 === e && this.version++;
    }
  }), Object.assign(pt.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(e) {
      return this.usage = e, this;
    },
    copy: function copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
    },
    copyAt: function copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;

      for (var _i28 = 0, _r16 = this.itemSize; _i28 < _r16; _i28++) {
        this.array[e + _i28] = t.array[n + _i28];
      }

      return this;
    },
    copyArray: function copyArray(e) {
      return this.array.set(e), this;
    },
    copyColorsArray: function copyColorsArray(e) {
      var t = this.array;
      var n = 0;

      for (var _i29 = 0, _r17 = e.length; _i29 < _r17; _i29++) {
        var _r18 = e[_i29];
        void 0 === _r18 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", _i29), _r18 = new dt()), t[n++] = _r18.r, t[n++] = _r18.g, t[n++] = _r18.b;
      }

      return this;
    },
    copyVector2sArray: function copyVector2sArray(e) {
      var t = this.array;
      var n = 0;

      for (var _i30 = 0, _r19 = e.length; _i30 < _r19; _i30++) {
        var _r20 = e[_i30];
        void 0 === _r20 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", _i30), _r20 = new C()), t[n++] = _r20.x, t[n++] = _r20.y;
      }

      return this;
    },
    copyVector3sArray: function copyVector3sArray(e) {
      var t = this.array;
      var n = 0;

      for (var _i31 = 0, _r21 = e.length; _i31 < _r21; _i31++) {
        var _r22 = e[_i31];
        void 0 === _r22 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", _i31), _r22 = new k()), t[n++] = _r22.x, t[n++] = _r22.y, t[n++] = _r22.z;
      }

      return this;
    },
    copyVector4sArray: function copyVector4sArray(e) {
      var t = this.array;
      var n = 0;

      for (var _i32 = 0, _r23 = e.length; _i32 < _r23; _i32++) {
        var _r24 = e[_i32];
        void 0 === _r24 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", _i32), _r24 = new G()), t[n++] = _r24.x, t[n++] = _r24.y, t[n++] = _r24.z, t[n++] = _r24.w;
      }

      return this;
    },
    applyMatrix3: function applyMatrix3(e) {
      if (2 === this.itemSize) for (var _t20 = 0, _n29 = this.count; _t20 < _n29; _t20++) {
        ft.fromBufferAttribute(this, _t20), ft.applyMatrix3(e), this.setXY(_t20, ft.x, ft.y);
      } else if (3 === this.itemSize) for (var _t21 = 0, _n30 = this.count; _t21 < _n30; _t21++) {
        ut.fromBufferAttribute(this, _t21), ut.applyMatrix3(e), this.setXYZ(_t21, ut.x, ut.y, ut.z);
      }
      return this;
    },
    applyMatrix4: function applyMatrix4(e) {
      for (var _t22 = 0, _n31 = this.count; _t22 < _n31; _t22++) {
        ut.x = this.getX(_t22), ut.y = this.getY(_t22), ut.z = this.getZ(_t22), ut.applyMatrix4(e), this.setXYZ(_t22, ut.x, ut.y, ut.z);
      }

      return this;
    },
    applyNormalMatrix: function applyNormalMatrix(e) {
      for (var _t23 = 0, _n32 = this.count; _t23 < _n32; _t23++) {
        ut.x = this.getX(_t23), ut.y = this.getY(_t23), ut.z = this.getZ(_t23), ut.applyNormalMatrix(e), this.setXYZ(_t23, ut.x, ut.y, ut.z);
      }

      return this;
    },
    transformDirection: function transformDirection(e) {
      for (var _t24 = 0, _n33 = this.count; _t24 < _n33; _t24++) {
        ut.x = this.getX(_t24), ut.y = this.getY(_t24), ut.z = this.getZ(_t24), ut.transformDirection(e), this.setXYZ(_t24, ut.x, ut.y, ut.z);
      }

      return this;
    },
    set: function set(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.array.set(e, t), this;
    },
    getX: function getX(e) {
      return this.array[e * this.itemSize];
    },
    setX: function setX(e, t) {
      return this.array[e * this.itemSize] = t, this;
    },
    getY: function getY(e) {
      return this.array[e * this.itemSize + 1];
    },
    setY: function setY(e, t) {
      return this.array[e * this.itemSize + 1] = t, this;
    },
    getZ: function getZ(e) {
      return this.array[e * this.itemSize + 2];
    },
    setZ: function setZ(e, t) {
      return this.array[e * this.itemSize + 2] = t, this;
    },
    getW: function getW(e) {
      return this.array[e * this.itemSize + 3];
    },
    setW: function setW(e, t) {
      return this.array[e * this.itemSize + 3] = t, this;
    },
    setXY: function setXY(e, t, n) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
    },
    setXYZ: function setXYZ(e, t, n, i) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    },
    setXYZW: function setXYZW(e, t, n, i, r) {
      return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
    },
    onUpload: function onUpload(e) {
      return this.onUploadCallback = e, this;
    },
    clone: function clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function toJSON() {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
    }
  }), mt.prototype = Object.create(pt.prototype), mt.prototype.constructor = mt, gt.prototype = Object.create(pt.prototype), gt.prototype.constructor = gt, xt.prototype = Object.create(pt.prototype), xt.prototype.constructor = xt, _t.prototype = Object.create(pt.prototype), _t.prototype.constructor = _t, vt.prototype = Object.create(pt.prototype), vt.prototype.constructor = vt, yt.prototype = Object.create(pt.prototype), yt.prototype.constructor = yt, Mt.prototype = Object.create(pt.prototype), Mt.prototype.constructor = Mt, bt.prototype = Object.create(pt.prototype), bt.prototype.constructor = bt, bt.prototype.isFloat16BufferAttribute = !0, wt.prototype = Object.create(pt.prototype), wt.prototype.constructor = wt, At.prototype = Object.create(pt.prototype), At.prototype.constructor = At;
  var Tt = 0;
  var Lt = new me(),
      Et = new Be(),
      Pt = new k(),
      Ft = new X(),
      Nt = new X(),
      Ct = new k();

  function Rt() {
    Object.defineProperty(this, "id", {
      value: Tt++
    }), this.uuid = N.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {};
  }

  Rt.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Rt,
    isBufferGeometry: !0,
    getIndex: function getIndex() {
      return this.index;
    },
    setIndex: function setIndex(e) {
      return Array.isArray(e) ? this.index = new (St(e) > 65535 ? Mt : vt)(e, 1) : this.index = e, this;
    },
    getAttribute: function getAttribute(e) {
      return this.attributes[e];
    },
    setAttribute: function setAttribute(e, t) {
      return this.attributes[e] = t, this;
    },
    deleteAttribute: function deleteAttribute(e) {
      return delete this.attributes[e], this;
    },
    hasAttribute: function hasAttribute(e) {
      return void 0 !== this.attributes[e];
    },
    addGroup: function addGroup(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      });
    },
    clearGroups: function clearGroups() {
      this.groups = [];
    },
    setDrawRange: function setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t;
    },
    applyMatrix4: function applyMatrix4(e) {
      var t = this.attributes.position;
      void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
      var n = this.attributes.normal;

      if (void 0 !== n) {
        var _t25 = new R().getNormalMatrix(e);

        n.applyNormalMatrix(_t25), n.needsUpdate = !0;
      }

      var i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(e), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    },
    rotateX: function rotateX(e) {
      return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
    },
    rotateY: function rotateY(e) {
      return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
    },
    rotateZ: function rotateZ(e) {
      return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
    },
    translate: function translate(e, t, n) {
      return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
    },
    scale: function scale(e, t, n) {
      return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
    },
    lookAt: function lookAt(e) {
      return Et.lookAt(e), Et.updateMatrix(), this.applyMatrix4(Et.matrix), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Pt).negate(), this.translate(Pt.x, Pt.y, Pt.z), this;
    },
    setFromPoints: function setFromPoints(e) {
      var t = [];

      for (var _n34 = 0, _i33 = e.length; _n34 < _i33; _n34++) {
        var _i34 = e[_n34];
        t.push(_i34.x, _i34.y, _i34.z || 0);
      }

      return this.setAttribute("position", new wt(t, 3)), this;
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new X());
      var e = this.attributes.position,
          t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0));

      if (void 0 !== e) {
        if (this.boundingBox.setFromBufferAttribute(e), t) for (var _e30 = 0, _n35 = t.length; _e30 < _n35; _e30++) {
          var _n36 = t[_e30];
          Ft.setFromBufferAttribute(_n36), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, Ft.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, Ft.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint(Ft.min), this.boundingBox.expandByPoint(Ft.max));
        }
      } else this.boundingBox.makeEmpty();

      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new se());
      var e = this.attributes.position,
          t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new k(), 1 / 0);

      if (e) {
        var _n37 = this.boundingSphere.center;
        if (Ft.setFromBufferAttribute(e), t) for (var _e31 = 0, _n38 = t.length; _e31 < _n38; _e31++) {
          var _n39 = t[_e31];
          Nt.setFromBufferAttribute(_n39), this.morphTargetsRelative ? (Ct.addVectors(Ft.min, Nt.min), Ft.expandByPoint(Ct), Ct.addVectors(Ft.max, Nt.max), Ft.expandByPoint(Ct)) : (Ft.expandByPoint(Nt.min), Ft.expandByPoint(Nt.max));
        }
        Ft.getCenter(_n37);
        var _i35 = 0;

        for (var _t26 = 0, _r25 = e.count; _t26 < _r25; _t26++) {
          Ct.fromBufferAttribute(e, _t26), _i35 = Math.max(_i35, _n37.distanceToSquared(Ct));
        }

        if (t) for (var _r26 = 0, _a3 = t.length; _r26 < _a3; _r26++) {
          var _a4 = t[_r26],
              _o4 = this.morphTargetsRelative;

          for (var _t27 = 0, _r27 = _a4.count; _t27 < _r27; _t27++) {
            Ct.fromBufferAttribute(_a4, _t27), _o4 && (Pt.fromBufferAttribute(e, _t27), Ct.add(Pt)), _i35 = Math.max(_i35, _n37.distanceToSquared(Ct));
          }
        }
        this.boundingSphere.radius = Math.sqrt(_i35), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeFaceNormals: function computeFaceNormals() {},
    computeTangents: function computeTangents() {
      var e = this.index,
          t = this.attributes;
      if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      var n = e.array,
          i = t.position.array,
          r = t.normal.array,
          a = t.uv.array,
          o = i.length / 3;
      void 0 === t.tangent && this.setAttribute("tangent", new pt(new Float32Array(4 * o), 4));
      var s = t.tangent.array,
          l = [],
          c = [];

      for (var _e32 = 0; _e32 < o; _e32++) {
        l[_e32] = new k(), c[_e32] = new k();
      }

      var d = new k(),
          h = new k(),
          u = new k(),
          f = new C(),
          p = new C(),
          m = new C(),
          g = new k(),
          x = new k();

      function _(e, t, n) {
        d.fromArray(i, 3 * e), h.fromArray(i, 3 * t), u.fromArray(i, 3 * n), f.fromArray(a, 2 * e), p.fromArray(a, 2 * t), m.fromArray(a, 2 * n), h.sub(d), u.sub(d), p.sub(f), m.sub(f);
        var r = 1 / (p.x * m.y - m.x * p.y);
        isFinite(r) && (g.copy(h).multiplyScalar(m.y).addScaledVector(u, -p.y).multiplyScalar(r), x.copy(u).multiplyScalar(p.x).addScaledVector(h, -m.x).multiplyScalar(r), l[e].add(g), l[t].add(g), l[n].add(g), c[e].add(x), c[t].add(x), c[n].add(x));
      }

      var v = this.groups;
      0 === v.length && (v = [{
        start: 0,
        count: n.length
      }]);

      for (var _e33 = 0, _t28 = v.length; _e33 < _t28; ++_e33) {
        var _t29 = v[_e33],
            _i36 = _t29.start;

        for (var _e34 = _i36, _r28 = _i36 + _t29.count; _e34 < _r28; _e34 += 3) {
          _(n[_e34 + 0], n[_e34 + 1], n[_e34 + 2]);
        }
      }

      var y = new k(),
          M = new k(),
          b = new k(),
          w = new k();

      function A(e) {
        b.fromArray(r, 3 * e), w.copy(b);
        var t = l[e];
        y.copy(t), y.sub(b.multiplyScalar(b.dot(t))).normalize(), M.crossVectors(w, t);
        var n = M.dot(c[e]) < 0 ? -1 : 1;
        s[4 * e] = y.x, s[4 * e + 1] = y.y, s[4 * e + 2] = y.z, s[4 * e + 3] = n;
      }

      for (var _e35 = 0, _t30 = v.length; _e35 < _t30; ++_e35) {
        var _t31 = v[_e35],
            _i37 = _t31.start;

        for (var _e36 = _i37, _r29 = _i37 + _t31.count; _e36 < _r29; _e36 += 3) {
          A(n[_e36 + 0]), A(n[_e36 + 1]), A(n[_e36 + 2]);
        }
      }
    },
    computeVertexNormals: function computeVertexNormals() {
      var e = this.index,
          t = this.getAttribute("position");

      if (void 0 !== t) {
        var _n40 = this.getAttribute("normal");

        if (void 0 === _n40) _n40 = new pt(new Float32Array(3 * t.count), 3), this.setAttribute("normal", _n40);else for (var _e37 = 0, _t32 = _n40.count; _e37 < _t32; _e37++) {
          _n40.setXYZ(_e37, 0, 0, 0);
        }

        var _i38 = new k(),
            _r30 = new k(),
            _a5 = new k(),
            _o5 = new k(),
            _s6 = new k(),
            _l7 = new k(),
            _c5 = new k(),
            _d3 = new k();

        if (e) for (var _h = 0, _u = e.count; _h < _u; _h += 3) {
          var _u2 = e.getX(_h + 0),
              _f = e.getX(_h + 1),
              _p = e.getX(_h + 2);

          _i38.fromBufferAttribute(t, _u2), _r30.fromBufferAttribute(t, _f), _a5.fromBufferAttribute(t, _p), _c5.subVectors(_a5, _r30), _d3.subVectors(_i38, _r30), _c5.cross(_d3), _o5.fromBufferAttribute(_n40, _u2), _s6.fromBufferAttribute(_n40, _f), _l7.fromBufferAttribute(_n40, _p), _o5.add(_c5), _s6.add(_c5), _l7.add(_c5), _n40.setXYZ(_u2, _o5.x, _o5.y, _o5.z), _n40.setXYZ(_f, _s6.x, _s6.y, _s6.z), _n40.setXYZ(_p, _l7.x, _l7.y, _l7.z);
        } else for (var _e38 = 0, _o6 = t.count; _e38 < _o6; _e38 += 3) {
          _i38.fromBufferAttribute(t, _e38 + 0), _r30.fromBufferAttribute(t, _e38 + 1), _a5.fromBufferAttribute(t, _e38 + 2), _c5.subVectors(_a5, _r30), _d3.subVectors(_i38, _r30), _c5.cross(_d3), _n40.setXYZ(_e38 + 0, _c5.x, _c5.y, _c5.z), _n40.setXYZ(_e38 + 1, _c5.x, _c5.y, _c5.z), _n40.setXYZ(_e38 + 2, _c5.x, _c5.y, _c5.z);
        }
        this.normalizeNormals(), _n40.needsUpdate = !0;
      }
    },
    merge: function merge(e, t) {
      if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
      var n = this.attributes;

      for (var _i39 in n) {
        if (void 0 === e.attributes[_i39]) continue;

        var _r31 = n[_i39].array,
            _a6 = e.attributes[_i39],
            _o7 = _a6.array,
            _s7 = _a6.itemSize * t,
            _l8 = Math.min(_o7.length, _r31.length - _s7);

        for (var _e39 = 0, _t33 = _s7; _e39 < _l8; _e39++, _t33++) {
          _r31[_t33] = _o7[_e39];
        }
      }

      return this;
    },
    normalizeNormals: function normalizeNormals() {
      var e = this.attributes.normal;

      for (var _t34 = 0, _n41 = e.count; _t34 < _n41; _t34++) {
        Ct.fromBufferAttribute(e, _t34), Ct.normalize(), e.setXYZ(_t34, Ct.x, Ct.y, Ct.z);
      }
    },
    toNonIndexed: function toNonIndexed() {
      function e(e, t) {
        var n = e.array,
            i = e.itemSize,
            r = e.normalized,
            a = new n.constructor(t.length * i);
        var o = 0,
            s = 0;

        for (var _e40 = 0, _r32 = t.length; _e40 < _r32; _e40++) {
          o = t[_e40] * i;

          for (var _e41 = 0; _e41 < i; _e41++) {
            a[s++] = n[o++];
          }
        }

        return new pt(a, i, r);
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      var t = new Rt(),
          n = this.index.array,
          i = this.attributes;

      for (var _r33 in i) {
        var _a7 = e(i[_r33], n);

        t.setAttribute(_r33, _a7);
      }

      var r = this.morphAttributes;

      for (var _i40 in r) {
        var _a8 = [],
            _o8 = r[_i40];

        for (var _t35 = 0, _i41 = _o8.length; _t35 < _i41; _t35++) {
          var _i42 = e(_o8[_t35], n);

          _a8.push(_i42);
        }

        t.morphAttributes[_i40] = _a8;
      }

      t.morphTargetsRelative = this.morphTargetsRelative;
      var a = this.groups;

      for (var _e42 = 0, _n42 = a.length; _e42 < _n42; _e42++) {
        var _n43 = a[_e42];
        t.addGroup(_n43.start, _n43.count, _n43.materialIndex);
      }

      return t;
    },
    toJSON: function toJSON() {
      var e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };

      if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
        var _t36 = this.parameters;

        for (var _n44 in _t36) {
          void 0 !== _t36[_n44] && (e[_n44] = _t36[_n44]);
        }

        return e;
      }

      e.data = {
        attributes: {}
      };
      var t = this.index;
      null !== t && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      var n = this.attributes;

      for (var _t37 in n) {
        var _i43 = n[_t37],
            _r34 = _i43.toJSON(e.data);

        "" !== _i43.name && (_r34.name = _i43.name), e.data.attributes[_t37] = _r34;
      }

      var i = {};
      var r = !1;

      for (var _t38 in this.morphAttributes) {
        var _n45 = this.morphAttributes[_t38],
            _a9 = [];

        for (var _t39 = 0, _i44 = _n45.length; _t39 < _i44; _t39++) {
          var _i45 = _n45[_t39],
              _r35 = _i45.toJSON(e.data);

          "" !== _i45.name && (_r35.name = _i45.name), _a9.push(_r35);
        }

        _a9.length > 0 && (i[_t38] = _a9, r = !0);
      }

      r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
      var a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      var o = this.boundingSphere;
      return null !== o && (e.data.boundingSphere = {
        center: o.center.toArray(),
        radius: o.radius
      }), e;
    },
    clone: function clone() {
      return new Rt().copy(this);
    },
    copy: function copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      var t = {};
      this.name = e.name;
      var n = e.index;
      null !== n && this.setIndex(n.clone(t));
      var i = e.attributes;

      for (var _e43 in i) {
        var _n46 = i[_e43];
        this.setAttribute(_e43, _n46.clone(t));
      }

      var r = e.morphAttributes;

      for (var _e44 in r) {
        var _n47 = [],
            _i46 = r[_e44];

        for (var _e45 = 0, _r36 = _i46.length; _e45 < _r36; _e45++) {
          _n47.push(_i46[_e45].clone(t));
        }

        this.morphAttributes[_e44] = _n47;
      }

      this.morphTargetsRelative = e.morphTargetsRelative;
      var a = e.groups;

      for (var _e46 = 0, _t40 = a.length; _e46 < _t40; _e46++) {
        var _t41 = a[_e46];
        this.addGroup(_t41.start, _t41.count, _t41.materialIndex);
      }

      var o = e.boundingBox;
      null !== o && (this.boundingBox = o.clone());
      var s = e.boundingSphere;
      return null !== s && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var It = new me(),
      Dt = new ( /*#__PURE__*/function () {
    function _class(e, t) {
      _classCallCheck(this, _class);

      this.origin = void 0 !== e ? e : new k(), this.direction = void 0 !== t ? t : new k(0, 0, -1);
    }

    _createClass(_class, [{
      key: "set",
      value: function set(e, t) {
        return this.origin.copy(e), this.direction.copy(t), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
      }
    }, {
      key: "at",
      value: function at(e, t) {
        return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new k()), t.copy(this.direction).multiplyScalar(e).add(this.origin);
      }
    }, {
      key: "lookAt",
      value: function lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this;
      }
    }, {
      key: "recast",
      value: function recast(e) {
        return this.origin.copy(this.at(e, le)), this;
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(e, t) {
        void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new k()), t.subVectors(e, this.origin);
        var n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e));
      }
    }, {
      key: "distanceSqToPoint",
      value: function distanceSqToPoint(e) {
        var t = le.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (le.copy(this.direction).multiplyScalar(t).add(this.origin), le.distanceToSquared(e));
      }
    }, {
      key: "distanceSqToSegment",
      value: function distanceSqToSegment(e, t, n, i) {
        ce.copy(e).add(t).multiplyScalar(.5), de.copy(t).sub(e).normalize(), he.copy(this.origin).sub(ce);
        var r = .5 * e.distanceTo(t),
            a = -this.direction.dot(de),
            o = he.dot(this.direction),
            s = -he.dot(de),
            l = he.lengthSq(),
            c = Math.abs(1 - a * a);
        var d, h, u, f;
        if (c > 0) {
          if (d = a * s - o, h = a * o - s, f = r * c, d >= 0) {
            if (h >= -f) {
              if (h <= f) {
                var _e47 = 1 / c;

                d *= _e47, h *= _e47, u = d * (d + a * h + 2 * o) + h * (a * d + h + 2 * s) + l;
              } else h = r, d = Math.max(0, -(a * h + o)), u = -d * d + h * (h + 2 * s) + l;
            } else h = -r, d = Math.max(0, -(a * h + o)), u = -d * d + h * (h + 2 * s) + l;
          } else h <= -f ? (d = Math.max(0, -(-a * r + o)), h = d > 0 ? -r : Math.min(Math.max(-r, -s), r), u = -d * d + h * (h + 2 * s) + l) : h <= f ? (d = 0, h = Math.min(Math.max(-r, -s), r), u = h * (h + 2 * s) + l) : (d = Math.max(0, -(a * r + o)), h = d > 0 ? r : Math.min(Math.max(-r, -s), r), u = -d * d + h * (h + 2 * s) + l);
        } else h = a > 0 ? -r : r, d = Math.max(0, -(a * h + o)), u = -d * d + h * (h + 2 * s) + l;
        return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(de).multiplyScalar(h).add(ce), u;
      }
    }, {
      key: "intersectSphere",
      value: function intersectSphere(e, t) {
        le.subVectors(e.center, this.origin);
        var n = le.dot(this.direction),
            i = le.dot(le) - n * n,
            r = e.radius * e.radius;
        if (i > r) return null;
        var a = Math.sqrt(r - i),
            o = n - a,
            s = n + a;
        return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
      }
    }, {
      key: "distanceToPlane",
      value: function distanceToPlane(e) {
        var t = e.normal.dot(this.direction);
        if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        var n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null;
      }
    }, {
      key: "intersectPlane",
      value: function intersectPlane(e, t) {
        var n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(e) {
        var t = e.distanceToPoint(this.origin);
        if (0 === t) return !0;
        return e.normal.dot(this.direction) * t < 0;
      }
    }, {
      key: "intersectBox",
      value: function intersectBox(e, t) {
        var n, i, r, a, o, s;
        var l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            d = 1 / this.direction.z,
            h = this.origin;
        return l >= 0 ? (n = (e.min.x - h.x) * l, i = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, i = (e.min.x - h.x) * l), c >= 0 ? (r = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (r = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), d >= 0 ? (o = (e.min.z - h.z) * d, s = (e.max.z - h.z) * d) : (o = (e.max.z - h.z) * d, s = (e.min.z - h.z) * d), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, t)));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        return null !== this.intersectBox(e, le);
      }
    }, {
      key: "intersectTriangle",
      value: function intersectTriangle(e, t, n, i, r) {
        ue.subVectors(t, e), fe.subVectors(n, e), pe.crossVectors(ue, fe);
        var a,
            o = this.direction.dot(pe);

        if (o > 0) {
          if (i) return null;
          a = 1;
        } else {
          if (!(o < 0)) return null;
          a = -1, o = -o;
        }

        he.subVectors(this.origin, e);
        var s = a * this.direction.dot(fe.crossVectors(he, fe));
        if (s < 0) return null;
        var l = a * this.direction.dot(ue.cross(he));
        if (l < 0) return null;
        if (s + l > o) return null;
        var c = -a * he.dot(pe);
        return c < 0 ? null : this.at(c / o, r);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
      }
    }, {
      key: "equals",
      value: function equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction);
      }
    }]);

    return _class;
  }())(),
      Ut = new se(),
      Ot = new k(),
      zt = new k(),
      Gt = new k(),
      Bt = new k(),
      Ht = new k(),
      kt = new k(),
      Wt = new k(),
      Vt = new k(),
      Xt = new k(),
      Yt = new C(),
      jt = new C(),
      Qt = new C(),
      qt = new k(),
      Zt = new k();

  function Jt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ht();
    Be.call(this), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }

  function Kt(e, t, n, i, r, a, o, s, l, c, d, h) {
    Ot.fromBufferAttribute(r, c), zt.fromBufferAttribute(r, d), Gt.fromBufferAttribute(r, h);
    var u = e.morphTargetInfluences;

    if (t.morphTargets && a && u) {
      Wt.set(0, 0, 0), Vt.set(0, 0, 0), Xt.set(0, 0, 0);

      for (var _e48 = 0, _t42 = a.length; _e48 < _t42; _e48++) {
        var _t43 = u[_e48],
            _n48 = a[_e48];
        0 !== _t43 && (Bt.fromBufferAttribute(_n48, c), Ht.fromBufferAttribute(_n48, d), kt.fromBufferAttribute(_n48, h), o ? (Wt.addScaledVector(Bt, _t43), Vt.addScaledVector(Ht, _t43), Xt.addScaledVector(kt, _t43)) : (Wt.addScaledVector(Bt.sub(Ot), _t43), Vt.addScaledVector(Ht.sub(zt), _t43), Xt.addScaledVector(kt.sub(Gt), _t43)));
      }

      Ot.add(Wt), zt.add(Vt), Gt.add(Xt);
    }

    e.isSkinnedMesh && (e.boneTransform(c, Ot), e.boneTransform(d, zt), e.boneTransform(h, Gt));

    var f = function (e, t, n, i, r, a, o, s) {
      var l;
      if (l = 1 === t.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== t.side, s), null === l) return null;
      Zt.copy(s), Zt.applyMatrix4(e.matrixWorld);
      var c = n.ray.origin.distanceTo(Zt);
      return c < n.near || c > n.far ? null : {
        distance: c,
        point: Zt.clone(),
        object: e
      };
    }(e, t, n, i, Ot, zt, Gt, qt);

    if (f) {
      s && (Yt.fromBufferAttribute(s, c), jt.fromBufferAttribute(s, d), Qt.fromBufferAttribute(s, h), f.uv = tt.getUV(qt, Ot, zt, Gt, Yt, jt, Qt, new C())), l && (Yt.fromBufferAttribute(l, c), jt.fromBufferAttribute(l, d), Qt.fromBufferAttribute(l, h), f.uv2 = tt.getUV(qt, Ot, zt, Gt, Yt, jt, Qt, new C()));
      var _e49 = {
        a: c,
        b: c,
        c: h,
        normal: new k(),
        materialIndex: 0
      };
      tt.getNormal(Ot, zt, Gt, _e49.normal), f.face = _e49;
    }

    return f;
  }

  Jt.prototype = Object.assign(Object.create(Be.prototype), {
    constructor: Jt,
    isMesh: !0,
    copy: function copy(e) {
      return Be.prototype.copy.call(this, e), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
    },
    updateMorphTargets: function updateMorphTargets() {
      var e = this.geometry;

      if (e.isBufferGeometry) {
        var _t44 = e.morphAttributes,
            _n49 = Object.keys(_t44);

        if (_n49.length > 0) {
          var _e50 = _t44[_n49[0]];

          if (void 0 !== _e50) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var _t45 = 0, _n50 = _e50.length; _t45 < _n50; _t45++) {
              var _n51 = _e50[_t45].name || String(_t45);

              this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n51] = _t45;
            }
          }
        }
      } else {
        var _t46 = e.morphTargets;
        void 0 !== _t46 && _t46.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    },
    raycast: function raycast(e, t) {
      var n = this.geometry,
          i = this.material,
          r = this.matrixWorld;
      if (void 0 === i) return;
      if (null === n.boundingSphere && n.computeBoundingSphere(), Ut.copy(n.boundingSphere), Ut.applyMatrix4(r), !1 === e.ray.intersectsSphere(Ut)) return;
      if (It.copy(r).invert(), Dt.copy(e.ray).applyMatrix4(It), null !== n.boundingBox && !1 === Dt.intersectsBox(n.boundingBox)) return;
      var a;

      if (n.isBufferGeometry) {
        var _r37 = n.index,
            _o9 = n.attributes.position,
            _s8 = n.morphAttributes.position,
            _l9 = n.morphTargetsRelative,
            _c6 = n.attributes.uv,
            _d4 = n.attributes.uv2,
            _h2 = n.groups,
            _u3 = n.drawRange;
        if (null !== _r37) {
          if (Array.isArray(i)) for (var _n52 = 0, _f2 = _h2.length; _n52 < _f2; _n52++) {
            var _f3 = _h2[_n52],
                _p2 = i[_f3.materialIndex];

            for (var _n53 = Math.max(_f3.start, _u3.start), _i47 = Math.min(_f3.start + _f3.count, _u3.start + _u3.count); _n53 < _i47; _n53 += 3) {
              var _i48 = _r37.getX(_n53),
                  _h3 = _r37.getX(_n53 + 1),
                  _u4 = _r37.getX(_n53 + 2);

              a = Kt(this, _p2, e, Dt, _o9, _s8, _l9, _c6, _d4, _i48, _h3, _u4), a && (a.faceIndex = Math.floor(_n53 / 3), a.face.materialIndex = _f3.materialIndex, t.push(a));
            }
          } else {
            for (var _n54 = Math.max(0, _u3.start), _h4 = Math.min(_r37.count, _u3.start + _u3.count); _n54 < _h4; _n54 += 3) {
              var _h5 = _r37.getX(_n54),
                  _u5 = _r37.getX(_n54 + 1),
                  _f4 = _r37.getX(_n54 + 2);

              a = Kt(this, i, e, Dt, _o9, _s8, _l9, _c6, _d4, _h5, _u5, _f4), a && (a.faceIndex = Math.floor(_n54 / 3), t.push(a));
            }
          }
        } else if (void 0 !== _o9) if (Array.isArray(i)) for (var _n55 = 0, _r38 = _h2.length; _n55 < _r38; _n55++) {
          var _r39 = _h2[_n55],
              _f5 = i[_r39.materialIndex];

          for (var _n56 = Math.max(_r39.start, _u3.start), _i49 = Math.min(_r39.start + _r39.count, _u3.start + _u3.count); _n56 < _i49; _n56 += 3) {
            a = Kt(this, _f5, e, Dt, _o9, _s8, _l9, _c6, _d4, _n56, _n56 + 1, _n56 + 2), a && (a.faceIndex = Math.floor(_n56 / 3), a.face.materialIndex = _r39.materialIndex, t.push(a));
          }
        } else {
          for (var _n57 = Math.max(0, _u3.start), _r40 = Math.min(_o9.count, _u3.start + _u3.count); _n57 < _r40; _n57 += 3) {
            a = Kt(this, i, e, Dt, _o9, _s8, _l9, _c6, _d4, _n57, _n57 + 1, _n57 + 2), a && (a.faceIndex = Math.floor(_n57 / 3), t.push(a));
          }
        }
      } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  });

  var $t = /*#__PURE__*/function (_Rt) {
    _inherits($t, _Rt);

    var _super2 = _createSuper($t);

    function $t() {
      var _this2;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

      _classCallCheck(this, $t);

      _this2 = _super2.call(this), _this2.type = "BoxGeometry", _this2.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      };

      var o = _assertThisInitialized(_this2);

      i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
      var s = [],
          l = [],
          c = [],
          d = [];
      var h = 0,
          u = 0;

      function f(e, t, n, i, r, a, f, p, m, g, x) {
        var _ = a / m,
            v = f / g,
            y = a / 2,
            M = f / 2,
            b = p / 2,
            w = m + 1,
            A = g + 1;

        var S = 0,
            T = 0;
        var L = new k();

        for (var _a10 = 0; _a10 < A; _a10++) {
          var _o10 = _a10 * v - M;

          for (var _s9 = 0; _s9 < w; _s9++) {
            var _h6 = _s9 * _ - y;

            L[e] = _h6 * i, L[t] = _o10 * r, L[n] = b, l.push(L.x, L.y, L.z), L[e] = 0, L[t] = 0, L[n] = p > 0 ? 1 : -1, c.push(L.x, L.y, L.z), d.push(_s9 / m), d.push(1 - _a10 / g), S += 1;
          }
        }

        for (var _e51 = 0; _e51 < g; _e51++) {
          for (var _t47 = 0; _t47 < m; _t47++) {
            var _n58 = h + _t47 + w * _e51,
                _i50 = h + _t47 + w * (_e51 + 1),
                _r41 = h + (_t47 + 1) + w * (_e51 + 1),
                _a11 = h + (_t47 + 1) + w * _e51;

            s.push(_n58, _i50, _a11), s.push(_i50, _r41, _a11), T += 6;
          }
        }

        o.addGroup(u, T, x), u += T, h += S;
      }

      f("z", "y", "x", -1, -1, n, t, e, a, r, 0), f("z", "y", "x", 1, -1, n, t, -e, a, r, 1), f("x", "z", "y", 1, 1, e, n, t, i, a, 2), f("x", "z", "y", 1, -1, e, n, -t, i, a, 3), f("x", "y", "z", 1, -1, e, t, n, i, r, 4), f("x", "y", "z", -1, -1, e, t, -n, i, r, 5), _this2.setIndex(s), _this2.setAttribute("position", new wt(l, 3)), _this2.setAttribute("normal", new wt(c, 3)), _this2.setAttribute("uv", new wt(d, 2));
      return _this2;
    }

    return $t;
  }(Rt);

  function en(e) {
    var t = {};

    for (var _n59 in e) {
      t[_n59] = {};

      for (var _i51 in e[_n59]) {
        var _r42 = e[_n59][_i51];
        _r42 && (_r42.isColor || _r42.isMatrix3 || _r42.isMatrix4 || _r42.isVector2 || _r42.isVector3 || _r42.isVector4 || _r42.isTexture) ? t[_n59][_i51] = _r42.clone() : Array.isArray(_r42) ? t[_n59][_i51] = _r42.slice() : t[_n59][_i51] = _r42;
      }
    }

    return t;
  }

  function tn(e) {
    var t = {};

    for (var _n60 = 0; _n60 < e.length; _n60++) {
      var _i52 = en(e[_n60]);

      for (var _e52 in _i52) {
        t[_e52] = _i52[_e52];
      }
    }

    return t;
  }

  var nn = {
    clone: en,
    merge: tn
  };

  function rn(e) {
    it.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", this.fragmentShader = "void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
  }

  function an() {
    Be.call(this), this.type = "Camera", this.matrixWorldInverse = new me(), this.projectionMatrix = new me(), this.projectionMatrixInverse = new me();
  }

  function on() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2e3;
    an.call(this), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }

  rn.prototype = Object.create(it.prototype), rn.prototype.constructor = rn, rn.prototype.isShaderMaterial = !0, rn.prototype.copy = function (e) {
    return it.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = en(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }, rn.prototype.toJSON = function (e) {
    var t = it.prototype.toJSON.call(this, e);
    t.glslVersion = this.glslVersion, t.uniforms = {};

    for (var _n61 in this.uniforms) {
      var _i53 = this.uniforms[_n61].value;
      _i53 && _i53.isTexture ? t.uniforms[_n61] = {
        type: "t",
        value: _i53.toJSON(e).uuid
      } : _i53 && _i53.isColor ? t.uniforms[_n61] = {
        type: "c",
        value: _i53.getHex()
      } : _i53 && _i53.isVector2 ? t.uniforms[_n61] = {
        type: "v2",
        value: _i53.toArray()
      } : _i53 && _i53.isVector3 ? t.uniforms[_n61] = {
        type: "v3",
        value: _i53.toArray()
      } : _i53 && _i53.isVector4 ? t.uniforms[_n61] = {
        type: "v4",
        value: _i53.toArray()
      } : _i53 && _i53.isMatrix3 ? t.uniforms[_n61] = {
        type: "m3",
        value: _i53.toArray()
      } : _i53 && _i53.isMatrix4 ? t.uniforms[_n61] = {
        type: "m4",
        value: _i53.toArray()
      } : t.uniforms[_n61] = {
        value: _i53
      };
    }

    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    var n = {};

    for (var _e53 in this.extensions) {
      !0 === this.extensions[_e53] && (n[_e53] = !0);
    }

    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }, an.prototype = Object.assign(Object.create(Be.prototype), {
    constructor: an,
    isCamera: !0,
    copy: function copy(e, t) {
      return Be.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
    },
    getWorldDirection: function getWorldDirection(e) {
      void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new k()), this.updateWorldMatrix(!0, !1);
      var t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize();
    },
    updateMatrixWorld: function updateMatrixWorld(e) {
      Be.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    updateWorldMatrix: function updateWorldMatrix(e, t) {
      Be.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    }
  }), on.prototype = Object.assign(Object.create(an.prototype), {
    constructor: on,
    isPerspectiveCamera: !0,
    copy: function copy(e, t) {
      return an.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    },
    setFocalLength: function setFocalLength(e) {
      var t = .5 * this.getFilmHeight() / e;
      this.fov = 2 * N.RAD2DEG * Math.atan(t), this.updateProjectionMatrix();
    },
    getFocalLength: function getFocalLength() {
      var e = Math.tan(.5 * N.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / e;
    },
    getEffectiveFOV: function getEffectiveFOV() {
      return 2 * N.RAD2DEG * Math.atan(Math.tan(.5 * N.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function setViewOffset(e, t, n, i, r, a) {
      this.aspect = e / t, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var e = this.near;
      var t = e * Math.tan(.5 * N.DEG2RAD * this.fov) / this.zoom,
          n = 2 * t,
          i = this.aspect * n,
          r = -.5 * i;
      var a = this.view;

      if (null !== this.view && this.view.enabled) {
        var _e54 = a.fullWidth,
            _o11 = a.fullHeight;
        r += a.offsetX * i / _e54, t -= a.offsetY * n / _o11, i *= a.width / _e54, n *= a.height / _o11;
      }

      var o = this.filmOffset;
      0 !== o && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    },
    toJSON: function toJSON(e) {
      var t = Be.prototype.toJSON.call(this, e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
  });
  var sn = 90;

  function ln(e, t, n) {
    if (Be.call(this), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
    this.renderTarget = n;
    var i = new on(sn, 1, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new k(1, 0, 0)), this.add(i);
    var r = new on(sn, 1, e, t);
    r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new k(-1, 0, 0)), this.add(r);
    var a = new on(sn, 1, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new k(0, 1, 0)), this.add(a);
    var o = new on(sn, 1, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new k(0, -1, 0)), this.add(o);
    var s = new on(sn, 1, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new k(0, 0, 1)), this.add(s);
    var l = new on(sn, 1, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new k(0, 0, -1)), this.add(l), this.update = function (e, t) {
      null === this.parent && this.updateMatrixWorld();
      var c = e.xr.enabled,
          d = e.getRenderTarget();
      e.xr.enabled = !1;
      var h = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, s), n.texture.generateMipmaps = h, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(d), e.xr.enabled = c;
    };
  }

  function cn(e, t, n, i, r, a, o, s, l, c) {
    e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, o = void 0 !== o ? o : M, O.call(this, e, t, n, i, r, a, o, s, l, c), this.flipY = !1, this._needsFlipEnvMap = !0;
  }

  ln.prototype = Object.create(Be.prototype), ln.prototype.constructor = ln, cn.prototype = Object.create(O.prototype), cn.prototype.constructor = cn, cn.prototype.isCubeTexture = !0, Object.defineProperty(cn.prototype, "images", {
    get: function get() {
      return this.image;
    },
    set: function set(e) {
      this.image = e;
    }
  });

  var dn = /*#__PURE__*/function (_B) {
    _inherits(dn, _B);

    var _super3 = _createSuper(dn);

    function dn(e, t, n) {
      var _this3;

      _classCallCheck(this, dn);

      Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), _this3 = _super3.call(this, e, e, t), Object.defineProperty(_assertThisInitialized(_this3), "isWebGLCubeRenderTarget", {
        value: !0
      }), t = t || {}, _this3.texture = new cn(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), _this3.texture._needsFlipEnvMap = !1;
      return _this3;
    }

    _createClass(dn, [{
      key: "fromEquirectangularTexture",
      value: function fromEquirectangularTexture(e, t) {
        this.texture.type = t.type, this.texture.format = b, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
        var n = {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: "varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
          fragmentShader: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}"
        },
            i = new $t(5, 5, 5),
            r = new rn({
          name: "CubemapFromEquirect",
          uniforms: en(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: 1,
          blending: 0
        });
        r.uniforms.tEquirect.value = t;
        var a = new Jt(i, r),
            o = t.minFilter;
        t.minFilter === p && (t.minFilter = f);
        return new ln(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
      }
    }, {
      key: "clear",
      value: function clear(e, t, n, i) {
        var r = e.getRenderTarget();

        for (var _r43 = 0; _r43 < 6; _r43++) {
          e.setRenderTarget(this, _r43), e.clear(t, n, i);
        }

        e.setRenderTarget(r);
      }
    }]);

    return dn;
  }(B);

  function hn(e, t, n, i, r, a, o, s, l, c, d, h) {
    O.call(this, null, a, o, s, l, c, i, r, d, h), this.image = {
      data: e || null,
      width: t || 1,
      height: n || 1
    }, this.magFilter = void 0 !== l ? l : u, this.minFilter = void 0 !== c ? c : u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }

  hn.prototype = Object.create(O.prototype), hn.prototype.constructor = hn, hn.prototype.isDataTexture = !0;
  var un = new se(),
      fn = new k();

  var pn = /*#__PURE__*/function () {
    function pn(e, t, n, i, r, a) {
      _classCallCheck(this, pn);

      this.planes = [void 0 !== e ? e : new Ve(), void 0 !== t ? t : new Ve(), void 0 !== n ? n : new Ve(), void 0 !== i ? i : new Ve(), void 0 !== r ? r : new Ve(), void 0 !== a ? a : new Ve()];
    }

    _createClass(pn, [{
      key: "set",
      value: function set(e, t, n, i, r, a) {
        var o = this.planes;
        return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        var t = this.planes;

        for (var _n62 = 0; _n62 < 6; _n62++) {
          t[_n62].copy(e.planes[_n62]);
        }

        return this;
      }
    }, {
      key: "setFromProjectionMatrix",
      value: function setFromProjectionMatrix(e) {
        var t = this.planes,
            n = e.elements,
            i = n[0],
            r = n[1],
            a = n[2],
            o = n[3],
            s = n[4],
            l = n[5],
            c = n[6],
            d = n[7],
            h = n[8],
            u = n[9],
            f = n[10],
            p = n[11],
            m = n[12],
            g = n[13],
            x = n[14],
            _ = n[15];
        return t[0].setComponents(o - i, d - s, p - h, _ - m).normalize(), t[1].setComponents(o + i, d + s, p + h, _ + m).normalize(), t[2].setComponents(o + r, d + l, p + u, _ + g).normalize(), t[3].setComponents(o - r, d - l, p - u, _ - g).normalize(), t[4].setComponents(o - a, d - c, p - f, _ - x).normalize(), t[5].setComponents(o + a, d + c, p + f, _ + x).normalize(), this;
      }
    }, {
      key: "intersectsObject",
      value: function intersectsObject(e) {
        var t = e.geometry;
        return null === t.boundingSphere && t.computeBoundingSphere(), un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(un);
      }
    }, {
      key: "intersectsSprite",
      value: function intersectsSprite(e) {
        return un.center.set(0, 0, 0), un.radius = .7071067811865476, un.applyMatrix4(e.matrixWorld), this.intersectsSphere(un);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(e) {
        var t = this.planes,
            n = e.center,
            i = -e.radius;

        for (var _e55 = 0; _e55 < 6; _e55++) {
          if (t[_e55].distanceToPoint(n) < i) return !1;
        }

        return !0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(e) {
        var t = this.planes;

        for (var _n63 = 0; _n63 < 6; _n63++) {
          var _i54 = t[_n63];
          if (fn.x = _i54.normal.x > 0 ? e.max.x : e.min.x, fn.y = _i54.normal.y > 0 ? e.max.y : e.min.y, fn.z = _i54.normal.z > 0 ? e.max.z : e.min.z, _i54.distanceToPoint(fn) < 0) return !1;
        }

        return !0;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(e) {
        var t = this.planes;

        for (var _n64 = 0; _n64 < 6; _n64++) {
          if (t[_n64].distanceToPoint(e) < 0) return !1;
        }

        return !0;
      }
    }]);

    return pn;
  }();

  function mn() {
    var e = null,
        t = !1,
        n = null,
        i = null;

    function r(t, a) {
      n(t, a), i = e.requestAnimationFrame(r);
    }

    return {
      start: function start() {
        !0 !== t && null !== n && (i = e.requestAnimationFrame(r), t = !0);
      },
      stop: function stop() {
        e.cancelAnimationFrame(i), t = !1;
      },
      setAnimationLoop: function setAnimationLoop(e) {
        n = e;
      },
      setContext: function setContext(t) {
        e = t;
      }
    };
  }

  function gn(e, t) {
    var n = t.isWebGL2,
        i = new WeakMap();
    return {
      get: function get(e) {
        return e.isInterleavedBufferAttribute && (e = e.data), i.get(e);
      },
      remove: function remove(t) {
        t.isInterleavedBufferAttribute && (t = t.data);
        var n = i.get(t);
        n && (e.deleteBuffer(n.buffer), i["delete"](t));
      },
      update: function update(t, r) {
        if (t.isGLBufferAttribute) {
          var _e56 = i.get(t);

          return void ((!_e56 || _e56.version < t.version) && i.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version
          }));
        }

        t.isInterleavedBufferAttribute && (t = t.data);
        var a = i.get(t);
        void 0 === a ? i.set(t, function (t, i) {
          var r = t.array,
              a = t.usage,
              o = e.createBuffer();
          e.bindBuffer(i, o), e.bufferData(i, r, a), t.onUploadCallback();
          var s = 5126;
          return r instanceof Float32Array ? s = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? t.isFloat16BufferAttribute ? n ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : r instanceof Int16Array ? s = 5122 : r instanceof Uint32Array ? s = 5125 : r instanceof Int32Array ? s = 5124 : r instanceof Int8Array ? s = 5120 : r instanceof Uint8Array && (s = 5121), {
            buffer: o,
            type: s,
            bytesPerElement: r.BYTES_PER_ELEMENT,
            version: t.version
          };
        }(t, r)) : a.version < t.version && (!function (t, i, r) {
          var a = i.array,
              o = i.updateRange;
          e.bindBuffer(r, t), -1 === o.count ? e.bufferSubData(r, 0, a) : (n ? e.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : e.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1);
        }(a.buffer, t, r), a.version = t.version);
      }
    };
  }

  var xn = /*#__PURE__*/function (_Rt2) {
    _inherits(xn, _Rt2);

    var _super4 = _createSuper(xn);

    function xn() {
      var _this4;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, xn);

      _this4 = _super4.call(this), _this4.type = "PlaneGeometry", _this4.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
      var r = e / 2,
          a = t / 2,
          o = Math.floor(n),
          s = Math.floor(i),
          l = o + 1,
          c = s + 1,
          d = e / o,
          h = t / s,
          u = [],
          f = [],
          p = [],
          m = [];

      for (var _e57 = 0; _e57 < c; _e57++) {
        var _t48 = _e57 * h - a;

        for (var _n65 = 0; _n65 < l; _n65++) {
          var _i55 = _n65 * d - r;

          f.push(_i55, -_t48, 0), p.push(0, 0, 1), m.push(_n65 / o), m.push(1 - _e57 / s);
        }
      }

      for (var _e58 = 0; _e58 < s; _e58++) {
        for (var _t49 = 0; _t49 < o; _t49++) {
          var _n66 = _t49 + l * _e58,
              _i56 = _t49 + l * (_e58 + 1),
              _r44 = _t49 + 1 + l * (_e58 + 1),
              _a12 = _t49 + 1 + l * _e58;

          u.push(_n66, _i56, _a12), u.push(_i56, _r44, _a12);
        }
      }

      _this4.setIndex(u), _this4.setAttribute("position", new wt(f, 3)), _this4.setAttribute("normal", new wt(p, 3)), _this4.setAttribute("uv", new wt(m, 2));
      return _this4;
    }

    return xn;
  }(Rt);

  var _n = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\nif(diffuseColor.a<ALPHATEST)discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\nfloat ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(USE_ENVMAP)&&defined(STANDARD)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.specularRoughness);\n#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\nuniform sampler2D aoMap;uniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed=vec3(position);",
    beginnormal_vertex: "vec3 objectNormal=vec3(normal);\n#ifdef USE_TANGENT\nvec3 objectTangent=vec3(tangent.xyz);\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF(const in float dotNV,const in float roughness){const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;return vec2(-1.04,1.04)*a004+r.zw;}float punctualLightIntensityToIrradianceFactor(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){\n#if defined(PHYSICALLY_CORRECT_LIGHTS)\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;\n#else\nif(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;\n#endif\n}vec3 BRDF_Diffuse_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 specularColor,const in float dotLH){float fresnel=exp2((-5.55473*dotLH-6.98316)*dotLH);return(1.0-specularColor)*fresnel+specularColor;}vec3 F_Schlick_RoughnessDependent(const in vec3 F0,const in float dotNV,const in float roughness){float fresnel=exp2((-5.55473*dotNV-6.98316)*dotNV);vec3 Fr=max(vec3(1.0-roughness),F0)-F0;return Fr*fresnel+F0;}float G_GGX_Smith(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gl=dotNL+sqrt(a2+(1.0-a2)*pow2(dotNL));float gv=dotNV+sqrt(a2+(1.0-a2)*pow2(dotNV));return 1.0/(gl*gv);}float G_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_Specular_GGX(const in IncidentLight incidentLight,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(incidentLight.direction+viewDir);float dotNL=saturate(dot(normal,incidentLight.direction));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotLH=saturate(dot(incidentLight.direction,halfDir));vec3 F=F_Schlick(specularColor,dotLH);float G=G_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(G*D);}vec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}vec3 BRDF_Specular_GGX_Environment(const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float roughness){float dotNV=saturate(dot(normal,viewDir));vec2 brdf=integrateSpecularBRDF(dotNV,roughness);return specularColor*brdf.x+brdf.y;}void BRDF_Specular_Multiscattering_Environment(const in GeometricContext geometry,const in vec3 specularColor,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){float dotNV=saturate(dot(geometry.normal,geometry.viewDir));vec3 F=F_Schlick_RoughnessDependent(specularColor,dotNV,roughness);vec2 brdf=integrateSpecularBRDF(dotNV,roughness);vec3 FssEss=F*brdf.x+brdf.y;float Ess=brdf.x+brdf.y;float Ems=1.0-Ess;vec3 Favg=specularColor+(1.0-specularColor)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_Specular_BlinnPhong(const in IncidentLight incidentLight,const in GeometricContext geometry,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(incidentLight.direction+geometry.viewDir);float dotNH=saturate(dot(geometry.normal,halfDir));float dotLH=saturate(dot(incidentLight.direction,halfDir));vec3 F=F_Schlick(specularColor,dotLH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}float GGXRoughnessToBlinnExponent(const in float ggxRoughness){return(2.0/pow2(ggxRoughness+0.0001)-2.0);}float BlinnExponentToGGXRoughness(const in float blinnExponent){return sqrt(2.0/(blinnExponent+2.0));}\n#if defined(USE_SHEEN)\nfloat D_Charlie(float roughness,float NoH){float invAlpha=1.0/roughness;float cos2h=NoH*NoH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float NoV,float NoL){return saturate(1.0/(4.0*(NoL+NoV-NoL*NoV)));}vec3 BRDF_Specular_Sheen(const in float roughness,const in vec3 L,const in GeometricContext geometry,vec3 specularColor){vec3 N=geometry.normal;vec3 V=geometry.viewDir;vec3 H=normalize(V+L);float dotNH=saturate(dot(N,H));return specularColor*D_Charlie(roughness,dotNH)*V_Neubelt(dot(N,V),dot(N,L));}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy){vec3 vSigmaX=vec3(dFdx(surf_pos.x),dFdx(surf_pos.y),dFdx(surf_pos.z));vec3 vSigmaY=vec3(dFdy(surf_pos.x),dFdy(surf_pos.y),dFdy(surf_pos.z));vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1);fDet*=(float(gl_FrontFacing)*2.0-1.0);vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES>0\nvec4 plane;\n#pragma unroll_loop_start\nfor(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}\n#pragma unroll_loop_end\n#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES\nbool clipped=true;\n#pragma unroll_loop_start\nfor(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}\n#pragma unroll_loop_end\nif(clipped)discard;\n#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES>0\nvClipPosition=-mvPosition.xyz;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ndiffuseColor.rgb*=vColor;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvColor=vec3(1.0);\n#endif\n#ifdef USE_COLOR\nvColor.xyz*=color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\nvColor.xyz*=instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\n#define whiteComplement(a)(1.0-saturate(a))\nfloat pow2(const in float x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float average(const in vec3 color){return dot(color,vec3(0.3333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}\n#ifdef HIGH_PRECISION\nfloat precisionSafeLength(vec3 v){return length(v);}\n#else\nfloat max3(vec3 v){return max(max(v.x,v.y),v.z);}float precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}\n#endif\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;\n#ifdef CLEARCOAT\nvec3 clearcoatNormal;\n#endif\n};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}vec3 projectOnPlane(in vec3 point,in vec3 pointOnPlane,in vec3 planeNormal){float distance=dot(planeNormal,point-pointOnPlane);return-distance*planeNormal+point;}float sideOfPlane(in vec3 point,in vec3 pointOnPlane,in vec3 planeNormal){return sign(dot(point-pointOnPlane,planeNormal));}vec3 linePlaneIntersect(in vec3 pointOnLine,in vec3 lineDirection,in vec3 pointOnPlane,in vec3 planeNormal){return lineDirection*(dot(planeNormal,pointOnPlane-pointOnLine)/dot(planeNormal,lineDirection))+pointOnLine;}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float linearToRelativeLuminance(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);float texelSize=1.0/(3.0*cubeUV_maxTileSize);vec2 uv=getUV(direction,face)*(faceSize-1.0);vec2 f=fract(uv);uv+=0.5-f;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;if(mipInt<cubeUV_maxMipLevel){uv.y+=2.0*cubeUV_maxTileSize;}uv.y+=filterInt*2.0*cubeUV_minTileSize;uv.x+=3.0*max(0.0,cubeUV_maxTileSize-2.0*faceSize);uv*=texelSize;vec3 tl=envMapTexelToLinear(texture2D(envMap,uv)).rgb;uv.x+=texelSize;vec3 tr=envMapTexelToLinear(texture2D(envMap,uv)).rgb;uv.y+=texelSize;vec3 br=envMapTexelToLinear(texture2D(envMap,uv)).rgb;uv.x-=texelSize;vec3 bl=envMapTexelToLinear(texture2D(envMap,uv)).rgb;vec3 tm=mix(tl,tr,f.x);vec3 bm=mix(bl,br,f.x);return mix(tm,bm,f.y);}\n#define r0 1.0\n#define v0 0.339\n#define m0-2.0\n#define r1 0.8\n#define v1 0.276\n#define m1-1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness){float mip=0.0;if(roughness>=r1){mip=(r0-roughness)*(m1-m0)/(r0-r1)+m0;}else if(roughness>=r4){mip=(r1-roughness)*(m4-m1)/(r1-r4)+m1;}else if(roughness>=r5){mip=(r4-roughness)*(m5-m4)/(r4-r5)+m4;}else if(roughness>=r6){mip=(r5-roughness)*(m6-m5)/(r5-r6)+m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),m0,cubeUV_maxMipLevel);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal=objectNormal;\n#ifdef USE_INSTANCING\nmat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;\n#endif\ntransformedNormal=normalMatrix*transformedNormal;\n#ifdef FLIP_SIDED\ntransformedNormal=-transformedNormal;\n#endif\n#ifdef USE_TANGENT\nvec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;\n#ifdef FLIP_SIDED\ntransformedTangent=-transformedTangent;\n#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\nuniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\ntransformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\nvec4 emissiveColor=texture2D(emissiveMap,vUv);emissiveColor.rgb=emissiveMapTexelToLinear(emissiveColor).rgb;totalEmissiveRadiance*=emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\nuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor=linearToOutputTexel(gl_FragColor);",
    encodings_pars_fragment: "vec4 LinearToLinear(in vec4 value){return value;}vec4 GammaToLinear(in vec4 value,in float gammaFactor){return vec4(pow(value.rgb,vec3(gammaFactor)),value.a);}vec4 LinearToGamma(in vec4 value,in float gammaFactor){return vec4(pow(value.rgb,vec3(1.0/gammaFactor)),value.a);}vec4 sRGBToLinear(in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}vec4 RGBEToLinear(in vec4 value){return vec4(value.rgb*exp2(value.a*255.0-128.0),1.0);}vec4 LinearToRGBE(in vec4 value){float maxComponent=max(max(value.r,value.g),value.b);float fExp=clamp(ceil(log2(maxComponent)),-128.0,127.0);return vec4(value.rgb/exp2(fExp),(fExp+128.0)/255.0);}vec4 RGBMToLinear(in vec4 value,in float maxRange){return vec4(value.rgb*value.a*maxRange,1.0);}vec4 LinearToRGBM(in vec4 value,in float maxRange){float maxRGB=max(value.r,max(value.g,value.b));float M=clamp(maxRGB/maxRange,0.0,1.0);M=ceil(M*255.0)/255.0;return vec4(value.rgb/(M*maxRange),M);}vec4 RGBDToLinear(in vec4 value,in float maxRange){return vec4(value.rgb*((maxRange/255.0)/value.a),1.0);}vec4 LinearToRGBD(in vec4 value,in float maxRange){float maxRGB=max(value.r,max(value.g,value.b));float D=max(maxRange/maxRGB,1.0);D=clamp(floor(D)/255.0,0.0,1.0);return vec4(value.rgb*(D*(255.0/maxRange)),D);}const mat3 cLogLuvM=mat3(0.2209,0.3390,0.4184,0.1138,0.6780,0.7319,0.0102,0.1130,0.2969);vec4 LinearToLogLuv(in vec4 value){vec3 Xp_Y_XYZp=cLogLuvM*value.rgb;Xp_Y_XYZp=max(Xp_Y_XYZp,vec3(1e-6,1e-6,1e-6));vec4 vResult;vResult.xy=Xp_Y_XYZp.xy/Xp_Y_XYZp.z;float Le=2.0*log2(Xp_Y_XYZp.y)+127.0;vResult.w=fract(Le);vResult.z=(Le-(floor(vResult.w*255.0))/255.0)/255.0;return vResult;}const mat3 cLogLuvInverseM=mat3(6.0014,-2.7008,-1.7996,-1.3320,3.1029,-5.7721,0.3008,-1.0882,5.6268);vec4 LogLuvToLinear(in vec4 value){float Le=value.z*255.0+value.w;vec3 Xp_Y_XYZp;Xp_Y_XYZp.y=exp2((Le-127.0)/2.0);Xp_Y_XYZp.z=Xp_Y_XYZp.y/value.y;Xp_Y_XYZp.x=value.x*Xp_Y_XYZp.z;vec3 vRGB=cLogLuvInverseM*Xp_Y_XYZp.rgb;return vec4(max(vRGB,0.0),1.0);}",
    envmap_fragment: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(cameraToFrag,worldNormal);\n#else\nvec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);\n#endif\n#else\nvec3 reflectVec=vReflect;\n#endif\n#ifdef ENVMAP_TYPE_CUBE\nvec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 envColor=textureCubeUV(envMap,reflectVec,0.0);\n#else\nvec4 envColor=vec4(0.0);\n#endif\n#ifndef ENVMAP_TYPE_CUBE_UV\nenvColor=envMapTexelToLinear(envColor);\n#endif\n#ifdef ENVMAP_BLENDING_MULTIPLY\noutgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_MIX)\noutgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_ADD)\noutgoingLight+=envColor.xyz*specularStrength*reflectivity;\n#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\nuniform float envMapIntensity;uniform float flipEnvMap;uniform int maxMipLevel;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#else\nuniform sampler2D envMap;\n#endif\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;uniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;\n#else\nvarying vec3 vReflect;uniform float refractionRatio;\n#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined(USE_ENVMAP)\n#ifdef ENVMAP_MODE_REFRACTION\nuniform float refractionRatio;\n#endif\nvec3 getLightProbeIndirectIrradiance(const in GeometricContext geometry,const in int maxMIPLevel){vec3 worldNormal=inverseTransformDirection(geometry.normal,viewMatrix);\n#ifdef ENVMAP_TYPE_CUBE\nvec3 queryVec=vec3(flipEnvMap*worldNormal.x,worldNormal.yz);\n#ifdef TEXTURE_LOD_EXT\nvec4 envMapColor=textureCubeLodEXT(envMap,queryVec,float(maxMIPLevel));\n#else\nvec4 envMapColor=textureCube(envMap,queryVec,float(maxMIPLevel));\n#endif\nenvMapColor.rgb=envMapTexelToLinear(envMapColor).rgb;\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);\n#else\nvec4 envMapColor=vec4(0.0);\n#endif\nreturn PI*envMapColor.rgb*envMapIntensity;}float getSpecularMIPLevel(const in float roughness,const in int maxMIPLevel){float maxMIPLevelScalar=float(maxMIPLevel);float sigma=PI*roughness*roughness/(1.0+roughness);float desiredMIPLevel=maxMIPLevelScalar+log2(sigma);return clamp(desiredMIPLevel,0.0,maxMIPLevelScalar);}vec3 getLightProbeIndirectRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness,const in int maxMIPLevel){\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));\n#else\nvec3 reflectVec=refract(-viewDir,normal,refractionRatio);\n#endif\nreflectVec=inverseTransformDirection(reflectVec,viewMatrix);float specularMIPLevel=getSpecularMIPLevel(roughness,maxMIPLevel);\n#ifdef ENVMAP_TYPE_CUBE\nvec3 queryReflectVec=vec3(flipEnvMap*reflectVec.x,reflectVec.yz);\n#ifdef TEXTURE_LOD_EXT\nvec4 envMapColor=textureCubeLodEXT(envMap,queryReflectVec,specularMIPLevel);\n#else\nvec4 envMapColor=textureCube(envMap,queryReflectVec,specularMIPLevel);\n#endif\nenvMapColor.rgb=envMapTexelToLinear(envMapColor).rgb;\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);\n#endif\nreturn envMapColor.rgb*envMapIntensity;}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvWorldPosition=worldPosition.xyz;\n#else\nvec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvReflect=reflect(cameraToVertex,worldNormal);\n#else\nvReflect=refract(cameraToVertex,worldNormal,refractionRatio);\n#endif\n#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\nfogDepth=-mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\nvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n#ifdef FOG_EXP2\nfloat fogFactor=1.0-exp(-fogDensity*fogDensity*fogDepth*fogDepth);\n#else\nfloat fogFactor=smoothstep(fogNear,fogFar,fogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;varying float fogDepth;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;uniform float fogFar;\n#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\nuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);\n#ifdef USE_GRADIENTMAP\nreturn texture2D(gradientMap,coord).rgb;\n#else\nreturn(coord.x<0.7)?vec3(0.7):vec3(1.0);\n#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=PI*lightMapTexelToLinear(lightMapTexel).rgb*lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nuniform sampler2D lightMap;uniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse=vec3(1.0);GeometricContext geometry;geometry.position=mvPosition.xyz;geometry.normal=normalize(transformedNormal);geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(-mvPosition.xyz);GeometricContext backGeometry;backGeometry.position=geometry.position;backGeometry.normal=-geometry.normal;backGeometry.viewDir=geometry.viewDir;vLightFront=vec3(0.0);vIndirectFront=vec3(0.0);\n#ifdef DOUBLE_SIDED\nvLightBack=vec3(0.0);vIndirectBack=vec3(0.0);\n#endif\nIncidentLight directLight;float dotNL;vec3 directLightColor_Diffuse;vIndirectFront+=getAmbientLightIrradiance(ambientLightColor);vIndirectFront+=getLightProbeIrradiance(lightProbe,geometry);\n#ifdef DOUBLE_SIDED\nvIndirectBack+=getAmbientLightIrradiance(ambientLightColor);vIndirectBack+=getLightProbeIrradiance(lightProbe,backGeometry);\n#endif\n#if NUM_POINT_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){getPointDirectLightIrradiance(pointLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=PI*directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){getSpotDirectLightIrradiance(spotLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=PI*directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){getDirectionalDirectLightIrradiance(directionalLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=PI*directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;\n#ifdef DOUBLE_SIDED\nvLightBack+=saturate(-dotNL)*directLightColor_Diffuse;\n#endif\n}\n#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){vIndirectFront+=getHemisphereLightIrradiance(hemisphereLights[i],geometry);\n#ifdef DOUBLE_SIDED\nvIndirectBack+=getHemisphereLightIrradiance(hemisphereLights[i],backGeometry);\n#endif\n}\n#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in GeometricContext geometry){vec3 worldNormal=inverseTransformDirection(geometry.normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreturn irradiance;}\n#if NUM_DIR_LIGHTS>0\nstruct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalDirectLightIrradiance(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight directLight){directLight.color=directionalLight.color;directLight.direction=directionalLight.direction;directLight.visible=true;}\n#endif\n#if NUM_POINT_LIGHTS>0\nstruct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointDirectLightIrradiance(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight directLight){vec3 lVector=pointLight.position-geometry.position;directLight.direction=normalize(lVector);float lightDistance=length(lVector);directLight.color=pointLight.color;directLight.color*=punctualLightIntensityToIrradianceFactor(lightDistance,pointLight.distance,pointLight.decay);directLight.visible=(directLight.color!=vec3(0.0));}\n#endif\n#if NUM_SPOT_LIGHTS>0\nstruct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotDirectLightIrradiance(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight directLight){vec3 lVector=spotLight.position-geometry.position;directLight.direction=normalize(lVector);float lightDistance=length(lVector);float angleCos=dot(directLight.direction,spotLight.direction);if(angleCos>spotLight.coneCos){float spotEffect=smoothstep(spotLight.coneCos,spotLight.penumbraCos,angleCos);directLight.color=spotLight.color;directLight.color*=spotEffect*punctualLightIntensityToIrradianceFactor(lightDistance,spotLight.distance,spotLight.decay);directLight.visible=true;}else{directLight.color=vec3(0.0);directLight.visible=false;}}\n#endif\n#if NUM_RECT_AREA_LIGHTS>0\nstruct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];\n#endif\n#if NUM_HEMI_LIGHTS>0\nstruct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in GeometricContext geometry){float dotNL=dot(geometry.normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreturn irradiance;}\n#endif",
    lights_toon_fragment: "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\nstruct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Toon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD(material)(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_Specular_BlinnPhong(directLight,geometry,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD(material)(0)",
    lights_physical_fragment: "PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.specularRoughness=max(roughnessFactor,0.0525);material.specularRoughness+=geometryRoughness;material.specularRoughness=min(material.specularRoughness,1.0);\n#ifdef REFLECTIVITY\nmaterial.specularColor=mix(vec3(MAXIMUM_SPECULAR_COEFFICIENT*pow2(reflectivity)),diffuseColor.rgb,metalnessFactor);\n#else\nmaterial.specularColor=mix(vec3(DEFAULT_SPECULAR_COEFFICIENT),diffuseColor.rgb,metalnessFactor);\n#endif\n#ifdef CLEARCOAT\nmaterial.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;\n#ifdef USE_CLEARCOATMAP\nmaterial.clearcoat*=texture2D(clearcoatMap,vUv).x;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nmaterial.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;\n#endif\nmaterial.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);\n#endif\n#ifdef USE_SHEEN\nmaterial.sheenColor=sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial{vec3 diffuseColor;float specularRoughness;vec3 specularColor;\n#ifdef CLEARCOAT\nfloat clearcoat;float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox(const in float roughness,const in float dotNL){return DEFAULT_SPECULAR_COEFFICIENT+(1.0-DEFAULT_SPECULAR_COEFFICIENT)*(pow(1.0-dotNL,5.0)*pow(1.0-roughness,2.0));}\n#if NUM_RECT_AREA_LIGHTS>0\nvoid RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.specularRoughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}\n#endif\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\n#ifdef CLEARCOAT\nfloat ccDotNL=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=ccDotNL*directLight.color;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nccIrradiance*=PI;\n#endif\nfloat clearcoatDHR=material.clearcoat*clearcoatDHRApprox(material.clearcoatRoughness,ccDotNL);reflectedLight.directSpecular+=ccIrradiance*material.clearcoat*BRDF_Specular_GGX(directLight,geometry.viewDir,geometry.clearcoatNormal,vec3(DEFAULT_SPECULAR_COEFFICIENT),material.clearcoatRoughness);\n#else\nfloat clearcoatDHR=0.0;\n#endif\n#ifdef USE_SHEEN\nreflectedLight.directSpecular+=(1.0-clearcoatDHR)*irradiance*BRDF_Specular_Sheen(material.specularRoughness,directLight.direction,geometry,material.sheenColor);\n#else\nreflectedLight.directSpecular+=(1.0-clearcoatDHR)*irradiance*BRDF_Specular_GGX(directLight,geometry.viewDir,geometry.normal,material.specularColor,material.specularRoughness);\n#endif\nreflectedLight.directDiffuse+=(1.0-clearcoatDHR)*irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){\n#ifdef CLEARCOAT\nfloat ccDotNV=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));reflectedLight.indirectSpecular+=clearcoatRadiance*material.clearcoat*BRDF_Specular_GGX_Environment(geometry.viewDir,geometry.clearcoatNormal,vec3(DEFAULT_SPECULAR_COEFFICIENT),material.clearcoatRoughness);float ccDotNL=ccDotNV;float clearcoatDHR=material.clearcoat*clearcoatDHRApprox(material.clearcoatRoughness,ccDotNL);\n#else\nfloat clearcoatDHR=0.0;\n#endif\nfloat clearcoatInv=1.0-clearcoatDHR;vec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;BRDF_Specular_Multiscattering_Environment(geometry,material.specularColor,material.specularRoughness,singleScattering,multiScattering);vec3 diffuse=material.diffuseColor*(1.0-(singleScattering+multiScattering));reflectedLight.indirectSpecular+=clearcoatInv*radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}\n#define RE_Direct RE_Direct_Physical\n#define RE_Direct_RectArea RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}",
    lights_fragment_begin: "GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);\n#ifdef CLEARCOAT\ngeometry.clearcoatNormal=clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)\nPointLight pointLight;\n#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointDirectLightIrradiance(pointLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)\npointLightShadow=pointLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)\nSpotLight spotLight;\n#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotDirectLightIrradiance(spotLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nspotLightShadow=spotLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)\nDirectionalLight directionalLight;\n#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalDirectLightIrradiance(directionalLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)\ndirectionalLightShadow=directionalLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)\nRectAreaLight rectAreaLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if defined(RE_IndirectDiffuse)\nvec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry);\n#if (NUM_HEMI_LIGHTS>0)\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry);}\n#pragma unroll_loop_end\n#endif\n#endif\n#if defined(RE_IndirectSpecular)\nvec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);\n#endif",
    lights_fragment_maps: "#if defined(RE_IndirectDiffuse)\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexelToLinear(lightMapTexel).rgb*lightMapIntensity;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nlightMapIrradiance*=PI;\n#endif\nirradiance+=lightMapIrradiance;\n#endif\n#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)\niblIrradiance+=getLightProbeIndirectIrradiance(geometry,maxMipLevel);\n#endif\n#endif\n#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)\nradiance+=getLightProbeIndirectRadiance(geometry.viewDir,geometry.normal,material.specularRoughness,maxMipLevel);\n#ifdef CLEARCOAT\nclearcoatRadiance+=getLightProbeIndirectRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness,maxMipLevel);\n#endif\n#endif",
    lights_fragment_end: "#if defined(RE_IndirectDiffuse)\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n#if defined(RE_IndirectSpecular)\nRE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);\n#endif",
    logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\ngl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\nuniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvarying float vFragDepth;varying float vIsPerspective;\n#else\nuniform float logDepthBufFC;\n#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));\n#else\nif(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}\n#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\nvec4 texelColor=texture2D(map,vUv);texelColor=mapTexelToLinear(texelColor);diffuseColor*=texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nvec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;\n#endif\n#ifdef USE_MAP\nvec4 mapTexel=texture2D(map,uv);diffuseColor*=mapTexelToLinear(mapTexel);\n#endif\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,uv).g;\n#endif",
    map_particle_pars_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor=metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\nuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nobjectNormal*=morphTargetBaseInfluence;objectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetBaseInfluence;\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[8];\n#else\nuniform float morphTargetInfluences[4];\n#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\ntransformed*=morphTargetBaseInfluence;transformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];\n#ifndef USE_MORPHNORMALS\ntransformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];\n#endif\n#endif",
    normal_fragment_begin: "#ifdef FLAT_SHADED\nvec3 fdx=vec3(dFdx(vViewPosition.x),dFdx(vViewPosition.y),dFdx(vViewPosition.z));vec3 fdy=vec3(dFdy(vViewPosition.x),dFdy(vViewPosition.y),dFdy(vViewPosition.z));vec3 normal=normalize(cross(fdx,fdy));\n#else\nvec3 normal=normalize(vNormal);\n#ifdef DOUBLE_SIDED\nnormal=normal*(float(gl_FrontFacing)*2.0-1.0);\n#endif\n#ifdef USE_TANGENT\nvec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);\n#ifdef DOUBLE_SIDED\ntangent=tangent*(float(gl_FrontFacing)*2.0-1.0);bitangent=bitangent*(float(gl_FrontFacing)*2.0-1.0);\n#endif\n#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)\nmat3 vTBN=mat3(tangent,bitangent,normal);\n#endif\n#endif\n#endif\nvec3 geometryNormal=normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\nnormal=texture2D(normalMap,vUv).xyz*2.0-1.0;\n#ifdef FLIP_SIDED\nnormal=-normal;\n#endif\n#ifdef DOUBLE_SIDED\nnormal=normal*(float(gl_FrontFacing)*2.0-1.0);\n#endif\nnormal=normalize(normalMatrix*normal);\n#elif defined(TANGENTSPACE_NORMALMAP)\nvec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;\n#ifdef USE_TANGENT\nnormal=normalize(vTBN*mapN);\n#else\nnormal=perturbNormal2Arb(-vViewPosition,normal,mapN);\n#endif\n#elif defined(USE_BUMPMAP)\nnormal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd());\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat3 normalMatrix;\n#endif\n#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))\nvec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN){vec3 q0=vec3(dFdx(eye_pos.x),dFdx(eye_pos.y),dFdx(eye_pos.z));vec3 q1=vec3(dFdy(eye_pos.x),dFdy(eye_pos.y),dFdy(eye_pos.z));vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);float scale=sign(st1.t*st0.s-st0.t*st1.s);vec3 S=normalize((q0*st1.t-q1*st0.t)*scale);vec3 T=normalize((-q0*st1.s+q1*st0.s)*scale);vec3 N=normalize(surf_norm);mat3 tsn=mat3(S,T,N);mapN.xy*=(float(gl_FrontFacing)*2.0-1.0);return normalize(tsn*mapN);}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\nvec3 clearcoatNormal=geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\nvec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;\n#ifdef USE_TANGENT\nclearcoatNormal=normalize(vTBN*clearcoatMapN);\n#else\nclearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN);\n#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\nuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\nuniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\ngl_FragColor.rgb*=gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nmvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;",
    dithering_fragment: "#ifdef DITHERING\ngl_FragColor.rgb=dithering(gl_FragColor.rgb);\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}\n#endif",
    roughnessmap_fragment: "float roughnessFactor=roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\nuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\nfloat texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bvec4 inFrustumVec=bvec4(shadowCoord.x>=0.0,shadowCoord.x<=1.0,shadowCoord.y>=0.0,shadowCoord.y<=1.0);bool inFrustum=all(inFrustumVec);bvec2 frustumTestVec=bvec2(inFrustum,shadowCoord.z<=1.0);bool frustumTest=all(frustumTestVec);if(frustumTest){\n#if defined(SHADOWMAP_TYPE_PCF)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);\n#elif defined(SHADOWMAP_TYPE_PCF_SOFT)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);\n#elif defined(SHADOWMAP_TYPE_VSM)\nshadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);\n#else\nshadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);\n#endif\n}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);\n#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)\nvec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);\n#else\nreturn texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);\n#endif\n}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform mat4 spotShadowMatrix[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0||NUM_SPOT_LIGHT_SHADOWS>0||NUM_POINT_LIGHT_SHADOWS>0\nvec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;\n#endif\n#if NUM_DIR_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*spotLightShadows[i].shadowNormalBias,0);vSpotShadowCoord[i]=spotShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask(){float shadow=1.0;\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}\n#pragma unroll_loop_end\n#endif\n#endif\nreturn shadow;}",
    skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;\n#ifdef BONE_TEXTURE\nuniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}\n#else\nuniform mat4 boneMatrices[MAX_BONES];mat4 getBoneMatrix(const in float i){mat4 bone=boneMatrices[int(i)];return bone;}\n#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\nvec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;\n#ifdef USE_TANGENT\nobjectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;\n#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;\n#else\nspecularStrength=1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined(TONE_MAPPING)\ngl_FragColor.rgb=toneMapping(gl_FragColor.rgb);\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\nuniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}",
    transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\ntotalTransmission*=texture2D(transmissionMap,vUv).r;\n#endif",
    transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\nuniform sampler2D transmissionMap;\n#endif",
    uv_pars_fragment: "#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))\nvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n#ifdef UVS_VERTEX_ONLY\nvec2 vUv;\n#else\nvarying vec2 vUv;\n#endif\nuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\nvUv=(uvTransform*vec3(uv,1)).xy;\n#endif",
    uv2_pars_fragment: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nattribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvUv2=(uv2Transform*vec3(uv2,1)).xy;\n#endif",
    worldpos_vertex: "#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)\nvec4 worldPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nworldPosition=instanceMatrix*worldPosition;\n#endif\nworldPosition=modelMatrix*worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;varying vec2 vUv;void main(){vec4 texColor=texture2D(t2D,vUv);gl_FragColor=mapTexelToLinear(texColor);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;varying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main(){vec3 vReflect=vWorldDirection;\n#include <envmap_fragment>\ngl_FragColor=envColor;gl_FragColor.a*=opacity;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
    depth_frag: "#if DEPTH_PACKING==3200\nuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#if DEPTH_PACKING==3200\ndiffuseColor.a=opacity;\n#endif\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\nfloat fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;\n#if DEPTH_PACKING==3200\ngl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);\n#elif DEPTH_PACKING==3201\ngl_FragColor=packDepthToRGBA(fragCoordZ);\n#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\nfloat dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\nvWorldPosition=worldPosition.xyz;}",
    equirect_frag: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);vec4 texColor=texture2D(tEquirect,sampleUV);gl_FragColor=mapTexelToLinear(texColor);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nif(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <color_fragment>\noutgoingLight=diffuseColor.rgb;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;attribute float lineDistance;varying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){vLineDistance=scale*lineDistance;\n#include <color_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;uniform float opacity;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\nReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexelToLinear(lightMapTexel).rgb*lightMapIntensity;\n#else\nreflectedLight.indirectDiffuse+=vec3(1.0);\n#endif\n#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;\n#include <envmap_fragment>\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <skinbase_vertex>\n#ifdef USE_ENVMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n#include <envmap_vertex>\n#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;varying vec3 vLightFront;varying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <emissivemap_fragment>\n#ifdef DOUBLE_SIDED\nreflectedLight.indirectDiffuse+=(gl_FrontFacing)?vIndirectFront:vIndirectBack;\n#else\nreflectedLight.indirectDiffuse+=vIndirectFront;\n#endif\n#include <lightmap_fragment>\nreflectedLight.indirectDiffuse*=BRDF_Diffuse_Lambert(diffuseColor.rgb);\n#ifdef DOUBLE_SIDED\nreflectedLight.directDiffuse=(gl_FrontFacing)?vLightFront:vLightBack;\n#else\nreflectedLight.directDiffuse=vLightFront;\n#endif\nreflectedLight.directDiffuse*=BRDF_Diffuse_Lambert(diffuseColor.rgb)*getShadowMask();\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <envmap_fragment>\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;varying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <lights_lambert_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\nvec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;\n#ifdef USE_MATCAP\nvec4 matcapColor=texture2D(matcap,uv);matcapColor=matcapTexelToLinear(matcapColor);\n#else\nvec4 matcapColor=vec4(1.0);\n#endif\nvec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\nvViewPosition=-mvPosition.xyz;}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_toon_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_phong_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#include <envmap_fragment>\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#ifdef TRANSMISSION\nfloat totalTransmission=transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <transmissionmap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#ifdef TRANSMISSION\ndiffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\n#include <logdepthbuf_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\ngl_FragColor=vec4(packNormalToRGB(normal),opacity);}",
    normal_vert: "#define NORMAL\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvViewPosition=-mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;uniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main(){\n#include <begin_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;uniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\nvec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));\n#ifndef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;\n#endif\nvec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}"
  },
      vn = {
    common: {
      diffuse: {
        value: new dt(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new R()
      },
      uv2Transform: {
        value: new R()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new C(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new dt(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new dt(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new R()
      }
    },
    sprite: {
      diffuse: {
        value: new dt(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new C(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new R()
      }
    }
  },
      yn = {
    basic: {
      uniforms: tn([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.fog]),
      vertexShader: _n.meshbasic_vert,
      fragmentShader: _n.meshbasic_frag
    },
    lambert: {
      uniforms: tn([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.fog, vn.lights, {
        emissive: {
          value: new dt(0)
        }
      }]),
      vertexShader: _n.meshlambert_vert,
      fragmentShader: _n.meshlambert_frag
    },
    phong: {
      uniforms: tn([vn.common, vn.specularmap, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.fog, vn.lights, {
        emissive: {
          value: new dt(0)
        },
        specular: {
          value: new dt(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: _n.meshphong_vert,
      fragmentShader: _n.meshphong_frag
    },
    standard: {
      uniforms: tn([vn.common, vn.envmap, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.roughnessmap, vn.metalnessmap, vn.fog, vn.lights, {
        emissive: {
          value: new dt(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: _n.meshphysical_vert,
      fragmentShader: _n.meshphysical_frag
    },
    toon: {
      uniforms: tn([vn.common, vn.aomap, vn.lightmap, vn.emissivemap, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.gradientmap, vn.fog, vn.lights, {
        emissive: {
          value: new dt(0)
        }
      }]),
      vertexShader: _n.meshtoon_vert,
      fragmentShader: _n.meshtoon_frag
    },
    matcap: {
      uniforms: tn([vn.common, vn.bumpmap, vn.normalmap, vn.displacementmap, vn.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: _n.meshmatcap_vert,
      fragmentShader: _n.meshmatcap_frag
    },
    points: {
      uniforms: tn([vn.points, vn.fog]),
      vertexShader: _n.points_vert,
      fragmentShader: _n.points_frag
    },
    dashed: {
      uniforms: tn([vn.common, vn.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: _n.linedashed_vert,
      fragmentShader: _n.linedashed_frag
    },
    depth: {
      uniforms: tn([vn.common, vn.displacementmap]),
      vertexShader: _n.depth_vert,
      fragmentShader: _n.depth_frag
    },
    normal: {
      uniforms: tn([vn.common, vn.bumpmap, vn.normalmap, vn.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: _n.normal_vert,
      fragmentShader: _n.normal_frag
    },
    sprite: {
      uniforms: tn([vn.sprite, vn.fog]),
      vertexShader: _n.sprite_vert,
      fragmentShader: _n.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new R()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: _n.background_vert,
      fragmentShader: _n.background_frag
    },
    cube: {
      uniforms: tn([vn.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: _n.cube_vert,
      fragmentShader: _n.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: _n.equirect_vert,
      fragmentShader: _n.equirect_frag
    },
    distanceRGBA: {
      uniforms: tn([vn.common, vn.displacementmap, {
        referencePosition: {
          value: new k()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: _n.distanceRGBA_vert,
      fragmentShader: _n.distanceRGBA_frag
    },
    shadow: {
      uniforms: tn([vn.lights, vn.fog, {
        color: {
          value: new dt(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: _n.shadow_vert,
      fragmentShader: _n.shadow_frag
    }
  };

  function Mn(e, t, n, i, r) {
    var a = new dt(0);
    var o,
        s,
        l = 0,
        c = null,
        d = 0,
        h = null;

    function u(e, t) {
      n.buffers.color.setClear(e.r, e.g, e.b, t, r);
    }

    return {
      getClearColor: function getClearColor() {
        return a;
      },
      setClearColor: function setClearColor(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        a.set(e), l = t, u(a, l);
      },
      getClearAlpha: function getClearAlpha() {
        return l;
      },
      setClearAlpha: function setClearAlpha(e) {
        l = e, u(a, l);
      },
      render: function render(n, r, f, p) {
        var m = !0 === r.isScene ? r.background : null;
        m && m.isTexture && (m = t.get(m));
        var g = e.xr,
            x = g.getSession && g.getSession();
        x && "additive" === x.environmentBlendMode && (m = null), null === m ? u(a, l) : m && m.isColor && (u(m, 1), p = !0), (e.autoClear || p) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping) ? (void 0 === s && (s = new Jt(new $t(1, 1, 1), new rn({
          name: "BackgroundCubeMaterial",
          uniforms: en(yn.cube.uniforms),
          vertexShader: yn.cube.vertexShader,
          fragmentShader: yn.cube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), s.geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function (e, t, n) {
          this.matrixWorld.copyPosition(n.matrixWorld);
        }, Object.defineProperty(s.material, "envMap", {
          get: function get() {
            return this.uniforms.envMap.value;
          }
        }), i.update(s)), m.isWebGLCubeRenderTarget && (m = m.texture), s.material.uniforms.envMap.value = m, s.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, c === m && d === m.version && h === e.toneMapping || (s.material.needsUpdate = !0, c = m, d = m.version, h = e.toneMapping), n.unshift(s, s.geometry, s.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new Jt(new xn(2, 2), new rn({
          name: "BackgroundMaterial",
          uniforms: en(yn.background.uniforms),
          vertexShader: yn.background.vertexShader,
          fragmentShader: yn.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
          get: function get() {
            return this.uniforms.t2D.value;
          }
        }), i.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), c === m && d === m.version && h === e.toneMapping || (o.material.needsUpdate = !0, c = m, d = m.version, h = e.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null));
      }
    };
  }

  function bn(e, t, n, i) {
    var r = e.getParameter(34921),
        a = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
        o = i.isWebGL2 || null !== a,
        s = {},
        l = u(null);
    var c = l;

    function d(t) {
      return i.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
    }

    function h(t) {
      return i.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
    }

    function u(e) {
      var t = [],
          n = [],
          i = [];

      for (var _e59 = 0; _e59 < r; _e59++) {
        t[_e59] = 0, n[_e59] = 0, i[_e59] = 0;
      }

      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: t,
        enabledAttributes: n,
        attributeDivisors: i,
        object: e,
        attributes: {},
        index: null
      };
    }

    function f() {
      var e = c.newAttributes;

      for (var _t50 = 0, _n67 = e.length; _t50 < _n67; _t50++) {
        e[_t50] = 0;
      }
    }

    function p(e) {
      m(e, 0);
    }

    function m(n, r) {
      var a = c.newAttributes,
          o = c.enabledAttributes,
          s = c.attributeDivisors;

      if (a[n] = 1, 0 === o[n] && (e.enableVertexAttribArray(n), o[n] = 1), s[n] !== r) {
        (i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), s[n] = r;
      }
    }

    function g() {
      var t = c.newAttributes,
          n = c.enabledAttributes;

      for (var _i57 = 0, _r45 = n.length; _i57 < _r45; _i57++) {
        n[_i57] !== t[_i57] && (e.disableVertexAttribArray(_i57), n[_i57] = 0);
      }
    }

    function x(t, n, r, a, o, s) {
      !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, n, r, a, o, s) : e.vertexAttribIPointer(t, n, r, o, s);
    }

    function _() {
      v(), c !== l && (c = l, d(c.object));
    }

    function v() {
      l.geometry = null, l.program = null, l.wireframe = !1;
    }

    return {
      setup: function setup(r, l, h, _, v) {
        var y = !1;

        if (o) {
          var _t51 = function (t, n, r) {
            var o = !0 === r.wireframe;
            var l = s[t.id];
            void 0 === l && (l = {}, s[t.id] = l);
            var c = l[n.id];
            void 0 === c && (c = {}, l[n.id] = c);
            var d = c[o];
            void 0 === d && (d = u(i.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), c[o] = d);
            return d;
          }(_, h, l);

          c !== _t51 && (c = _t51, d(c.object)), y = function (e, t) {
            var n = c.attributes,
                i = e.attributes;
            var r = 0;

            for (var _e60 in i) {
              var _t52 = n[_e60],
                  _a13 = i[_e60];
              if (void 0 === _t52) return !0;
              if (_t52.attribute !== _a13) return !0;
              if (_t52.data !== _a13.data) return !0;
              r++;
            }

            return c.attributesNum !== r || c.index !== t;
          }(_, v), y && function (e, t) {
            var n = {},
                i = e.attributes;
            var r = 0;

            for (var _e61 in i) {
              var _t53 = i[_e61],
                  _a14 = {};
              _a14.attribute = _t53, _t53.data && (_a14.data = _t53.data), n[_e61] = _a14, r++;
            }

            c.attributes = n, c.attributesNum = r, c.index = t;
          }(_, v);
        } else {
          var _e62 = !0 === l.wireframe;

          c.geometry === _.id && c.program === h.id && c.wireframe === _e62 || (c.geometry = _.id, c.program = h.id, c.wireframe = _e62, y = !0);
        }

        !0 === r.isInstancedMesh && (y = !0), null !== v && n.update(v, 34963), y && (!function (r, a, o, s) {
          if (!1 === i.isWebGL2 && (r.isInstancedMesh || s.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) return;
          f();
          var l = s.attributes,
              c = o.getAttributes(),
              d = a.defaultAttributeValues;

          for (var _t54 in c) {
            var _i58 = c[_t54];

            if (_i58 >= 0) {
              var _a15 = l[_t54];

              if (void 0 !== _a15) {
                var _t55 = _a15.normalized,
                    _r46 = _a15.itemSize,
                    _o12 = n.get(_a15);

                if (void 0 === _o12) continue;
                var _l10 = _o12.buffer,
                    _c7 = _o12.type,
                    _d5 = _o12.bytesPerElement;

                if (_a15.isInterleavedBufferAttribute) {
                  var _n68 = _a15.data,
                      _o13 = _n68.stride,
                      _h7 = _a15.offset;
                  _n68 && _n68.isInstancedInterleavedBuffer ? (m(_i58, _n68.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = _n68.meshPerAttribute * _n68.count)) : p(_i58), e.bindBuffer(34962, _l10), x(_i58, _r46, _c7, _t55, _o13 * _d5, _h7 * _d5);
                } else _a15.isInstancedBufferAttribute ? (m(_i58, _a15.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = _a15.meshPerAttribute * _a15.count)) : p(_i58), e.bindBuffer(34962, _l10), x(_i58, _r46, _c7, _t55, 0, 0);
              } else if ("instanceMatrix" === _t54) {
                var _t56 = n.get(r.instanceMatrix);

                if (void 0 === _t56) continue;
                var _a16 = _t56.buffer,
                    _o14 = _t56.type;
                m(_i58 + 0, 1), m(_i58 + 1, 1), m(_i58 + 2, 1), m(_i58 + 3, 1), e.bindBuffer(34962, _a16), e.vertexAttribPointer(_i58 + 0, 4, _o14, !1, 64, 0), e.vertexAttribPointer(_i58 + 1, 4, _o14, !1, 64, 16), e.vertexAttribPointer(_i58 + 2, 4, _o14, !1, 64, 32), e.vertexAttribPointer(_i58 + 3, 4, _o14, !1, 64, 48);
              } else if ("instanceColor" === _t54) {
                var _t57 = n.get(r.instanceColor);

                if (void 0 === _t57) continue;
                var _a17 = _t57.buffer,
                    _o15 = _t57.type;
                m(_i58, 1), e.bindBuffer(34962, _a17), e.vertexAttribPointer(_i58, 3, _o15, !1, 12, 0);
              } else if (void 0 !== d) {
                var _n69 = d[_t54];
                if (void 0 !== _n69) switch (_n69.length) {
                  case 2:
                    e.vertexAttrib2fv(_i58, _n69);
                    break;

                  case 3:
                    e.vertexAttrib3fv(_i58, _n69);
                    break;

                  case 4:
                    e.vertexAttrib4fv(_i58, _n69);
                    break;

                  default:
                    e.vertexAttrib1fv(_i58, _n69);
                }
              }
            }
          }

          g();
        }(r, l, h, _), null !== v && e.bindBuffer(34963, n.get(v).buffer));
      },
      reset: _,
      resetDefaultState: v,
      dispose: function dispose() {
        _();

        for (var _e63 in s) {
          var _t58 = s[_e63];

          for (var _e64 in _t58) {
            var _n70 = _t58[_e64];

            for (var _e65 in _n70) {
              h(_n70[_e65].object), delete _n70[_e65];
            }

            delete _t58[_e64];
          }

          delete s[_e63];
        }
      },
      releaseStatesOfGeometry: function releaseStatesOfGeometry(e) {
        if (void 0 === s[e.id]) return;
        var t = s[e.id];

        for (var _e66 in t) {
          var _n71 = t[_e66];

          for (var _e67 in _n71) {
            h(_n71[_e67].object), delete _n71[_e67];
          }

          delete t[_e66];
        }

        delete s[e.id];
      },
      releaseStatesOfProgram: function releaseStatesOfProgram(e) {
        for (var _t59 in s) {
          var _n72 = s[_t59];
          if (void 0 === _n72[e.id]) continue;
          var _i59 = _n72[e.id];

          for (var _e68 in _i59) {
            h(_i59[_e68].object), delete _i59[_e68];
          }

          delete _n72[e.id];
        }
      },
      initAttributes: f,
      enableAttribute: p,
      disableUnusedAttributes: g
    };
  }

  function wn(e, t, n, i) {
    var r = i.isWebGL2;
    var a;
    this.setMode = function (e) {
      a = e;
    }, this.render = function (t, i) {
      e.drawArrays(a, t, i), n.update(i, a, 1);
    }, this.renderInstances = function (i, o, s) {
      if (0 === s) return;
      var l, c;
      if (r) l = e, c = "drawArraysInstanced";else if (l = t.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[c](a, i, o, s), n.update(o, a, s);
    };
  }

  function An(e, t, n) {
    var i;

    function r(t) {
      if ("highp" === t) {
        if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        t = "mediump";
      }

      return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }

    var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
    var o = void 0 !== n.precision ? n.precision : "highp";
    var s = r(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);

    var l = !0 === n.logarithmicDepthBuffer,
        c = e.getParameter(34930),
        d = e.getParameter(35660),
        h = e.getParameter(3379),
        u = e.getParameter(34076),
        f = e.getParameter(34921),
        p = e.getParameter(36347),
        m = e.getParameter(36348),
        g = e.getParameter(36349),
        x = d > 0,
        _ = a || !!t.get("OES_texture_float");

    return {
      isWebGL2: a,
      getMaxAnisotropy: function getMaxAnisotropy() {
        if (void 0 !== i) return i;
        var n = t.get("EXT_texture_filter_anisotropic");
        return i = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, i;
      },
      getMaxPrecision: r,
      precision: o,
      logarithmicDepthBuffer: l,
      maxTextures: c,
      maxVertexTextures: d,
      maxTextureSize: h,
      maxCubemapSize: u,
      maxAttributes: f,
      maxVertexUniforms: p,
      maxVaryings: m,
      maxFragmentUniforms: g,
      vertexTextures: x,
      floatFragmentTextures: _,
      floatVertexTextures: x && _,
      maxSamples: a ? e.getParameter(36183) : 0
    };
  }

  function Sn(e) {
    var t = this;
    var n = null,
        i = 0,
        r = !1,
        a = !1;
    var o = new Ve(),
        s = new R(),
        l = {
      value: null,
      needsUpdate: !1
    };

    function c() {
      l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
    }

    function d(e, n, i, r) {
      var a = null !== e ? e.length : 0;
      var c = null;

      if (0 !== a) {
        if (c = l.value, !0 !== r || null === c) {
          var _t60 = i + 4 * a,
              _r47 = n.matrixWorldInverse;

          s.getNormalMatrix(_r47), (null === c || c.length < _t60) && (c = new Float32Array(_t60));

          for (var _t61 = 0, _n73 = i; _t61 !== a; ++_t61, _n73 += 4) {
            o.copy(e[_t61]).applyMatrix4(_r47, s), o.normal.toArray(c, _n73), c[_n73 + 3] = o.constant;
          }
        }

        l.value = c, l.needsUpdate = !0;
      }

      return t.numPlanes = a, t.numIntersection = 0, c;
    }

    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (e, t, a) {
      var o = 0 !== e.length || t || 0 !== i || r;
      return r = t, n = d(e, a, 0), i = e.length, o;
    }, this.beginShadows = function () {
      a = !0, d(null);
    }, this.endShadows = function () {
      a = !1, c();
    }, this.setState = function (t, o, s) {
      var h = t.clippingPlanes,
          u = t.clipIntersection,
          f = t.clipShadows,
          p = e.get(t);
      if (!r || null === h || 0 === h.length || a && !f) a ? d(null) : c();else {
        var _e69 = a ? 0 : i,
            _t62 = 4 * _e69;

        var _r48 = p.clippingState || null;

        l.value = _r48, _r48 = d(h, o, _t62, s);

        for (var _e70 = 0; _e70 !== _t62; ++_e70) {
          _r48[_e70] = n[_e70];
        }

        p.clippingState = _r48, this.numIntersection = u ? this.numPlanes : 0, this.numPlanes += _e69;
      }
    };
  }

  function Tn(e) {
    var t = new WeakMap();

    function n(e, t) {
      return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302), e;
    }

    function i(e) {
      var n = e.target;
      n.removeEventListener("dispose", i);
      var r = t.get(n);
      void 0 !== r && (t["delete"](n), r.dispose());
    }

    return {
      get: function get(r) {
        if (r && r.isTexture) {
          var _a18 = r.mapping;

          if (303 === _a18 || 304 === _a18) {
            if (t.has(r)) {
              return n(t.get(r).texture, r.mapping);
            }

            {
              var _a19 = r.image;

              if (_a19 && _a19.height > 0) {
                var _o16 = e.getRenderList(),
                    _s10 = e.getRenderTarget(),
                    _l11 = new dn(_a19.height / 2);

                return _l11.fromEquirectangularTexture(e, r), t.set(r, _l11), e.setRenderTarget(_s10), e.setRenderList(_o16), r.addEventListener("dispose", i), n(_l11.texture, r.mapping);
              }

              return null;
            }
          }
        }

        return r;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Ln(e) {
    var t = {};

    function n(n) {
      if (void 0 !== t[n]) return t[n];
      var i;

      switch (n) {
        case "WEBGL_depth_texture":
          i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;

        case "EXT_texture_filter_anisotropic":
          i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;

        case "WEBGL_compressed_texture_s3tc":
          i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;

        case "WEBGL_compressed_texture_pvrtc":
          i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;

        default:
          i = e.getExtension(n);
      }

      return t[n] = i, i;
    }

    return {
      has: function has(e) {
        return null !== n(e);
      },
      init: function init(e) {
        e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float");
      },
      get: function get(e) {
        var t = n(e);
        return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t;
      }
    };
  }

  function En(e, t, n, i) {
    var r = {},
        a = new WeakMap();

    function o(e) {
      var s = e.target;
      null !== s.index && t.remove(s.index);

      for (var _e71 in s.attributes) {
        t.remove(s.attributes[_e71]);
      }

      s.removeEventListener("dispose", o), delete r[s.id];
      var l = a.get(s);
      l && (t.remove(l), a["delete"](s)), i.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--;
    }

    function s(e) {
      var n = [],
          i = e.index,
          r = e.attributes.position;
      var o = 0;

      if (null !== i) {
        var _e72 = i.array;
        o = i.version;

        for (var _t63 = 0, _i60 = _e72.length; _t63 < _i60; _t63 += 3) {
          var _i61 = _e72[_t63 + 0],
              _r49 = _e72[_t63 + 1],
              _a20 = _e72[_t63 + 2];
          n.push(_i61, _r49, _r49, _a20, _a20, _i61);
        }
      } else {
        var _e73 = r.array;
        o = r.version;

        for (var _t64 = 0, _i62 = _e73.length / 3 - 1; _t64 < _i62; _t64 += 3) {
          var _e74 = _t64 + 0,
              _i63 = _t64 + 1,
              _r50 = _t64 + 2;

          n.push(_e74, _i63, _i63, _r50, _r50, _e74);
        }
      }

      var s = new (St(n) > 65535 ? Mt : vt)(n, 1);
      s.version = o;
      var l = a.get(e);
      l && t.remove(l), a.set(e, s);
    }

    return {
      get: function get(e, t) {
        return !0 === r[t.id] || (t.addEventListener("dispose", o), r[t.id] = !0, n.memory.geometries++), t;
      },
      update: function update(e) {
        var n = e.attributes;

        for (var _e75 in n) {
          t.update(n[_e75], 34962);
        }

        var i = e.morphAttributes;

        for (var _e76 in i) {
          var _n74 = i[_e76];

          for (var _e77 = 0, _i64 = _n74.length; _e77 < _i64; _e77++) {
            t.update(_n74[_e77], 34962);
          }
        }
      },
      getWireframeAttribute: function getWireframeAttribute(e) {
        var t = a.get(e);

        if (t) {
          var _n75 = e.index;
          null !== _n75 && t.version < _n75.version && s(e);
        } else s(e);

        return a.get(e);
      }
    };
  }

  function Pn(e, t, n, i) {
    var r = i.isWebGL2;
    var a, o, s;
    this.setMode = function (e) {
      a = e;
    }, this.setIndex = function (e) {
      o = e.type, s = e.bytesPerElement;
    }, this.render = function (t, i) {
      e.drawElements(a, i, o, t * s), n.update(i, a, 1);
    }, this.renderInstances = function (i, l, c) {
      if (0 === c) return;
      var d, h;
      if (r) d = e, h = "drawElementsInstanced";else if (d = t.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", null === d) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      d[h](a, l, o, i * s, c), n.update(l, a, c);
    };
  }

  function Fn(e) {
    var t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function reset() {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
      },
      update: function update(e, n, i) {
        switch (t.calls++, n) {
          case 4:
            t.triangles += i * (e / 3);
            break;

          case 1:
            t.lines += i * (e / 2);
            break;

          case 3:
            t.lines += i * (e - 1);
            break;

          case 2:
            t.lines += i * e;
            break;

          case 0:
            t.points += i * e;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }

  function Nn(e, t) {
    return e[0] - t[0];
  }

  function Cn(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1]);
  }

  function Rn(e) {
    var t = {},
        n = new Float32Array(8),
        i = [];

    for (var _e78 = 0; _e78 < 8; _e78++) {
      i[_e78] = [_e78, 0];
    }

    return {
      update: function update(r, a, o, s) {
        var l = r.morphTargetInfluences,
            c = void 0 === l ? 0 : l.length;
        var d = t[a.id];

        if (void 0 === d) {
          d = [];

          for (var _e79 = 0; _e79 < c; _e79++) {
            d[_e79] = [_e79, 0];
          }

          t[a.id] = d;
        }

        for (var _e80 = 0; _e80 < c; _e80++) {
          var _t65 = d[_e80];
          _t65[0] = _e80, _t65[1] = l[_e80];
        }

        d.sort(Cn);

        for (var _e81 = 0; _e81 < 8; _e81++) {
          _e81 < c && d[_e81][1] ? (i[_e81][0] = d[_e81][0], i[_e81][1] = d[_e81][1]) : (i[_e81][0] = Number.MAX_SAFE_INTEGER, i[_e81][1] = 0);
        }

        i.sort(Nn);
        var h = o.morphTargets && a.morphAttributes.position,
            u = o.morphNormals && a.morphAttributes.normal;
        var f = 0;

        for (var _e82 = 0; _e82 < 8; _e82++) {
          var _t66 = i[_e82],
              _r51 = _t66[0],
              _o17 = _t66[1];
          _r51 !== Number.MAX_SAFE_INTEGER && _o17 ? (h && a.getAttribute("morphTarget" + _e82) !== h[_r51] && a.setAttribute("morphTarget" + _e82, h[_r51]), u && a.getAttribute("morphNormal" + _e82) !== u[_r51] && a.setAttribute("morphNormal" + _e82, u[_r51]), n[_e82] = _o17, f += _o17) : (h && !0 === a.hasAttribute("morphTarget" + _e82) && a.deleteAttribute("morphTarget" + _e82), u && !0 === a.hasAttribute("morphNormal" + _e82) && a.deleteAttribute("morphNormal" + _e82), n[_e82] = 0);
        }

        var p = a.morphTargetsRelative ? 1 : 1 - f;
        s.getUniforms().setValue(e, "morphTargetBaseInfluence", p), s.getUniforms().setValue(e, "morphTargetInfluences", n);
      }
    };
  }

  function In(e, t, n, i) {
    var r = new WeakMap();

    function a(e) {
      var t = e.target;
      t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null !== t.instanceColor && n.remove(t.instanceColor);
    }

    return {
      update: function update(e) {
        var o = i.render.frame,
            s = e.geometry,
            l = t.get(e, s);
        return r.get(l) !== o && (t.update(l), r.set(l, o)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), n.update(e.instanceMatrix, 34962), null !== e.instanceColor && n.update(e.instanceColor, 34962)), l;
      },
      dispose: function dispose() {
        r = new WeakMap();
      }
    };
  }

  function Dn() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    O.call(this, null), this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = u, this.minFilter = u, this.wrapR = d, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  function Un() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    O.call(this, null), this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = u, this.minFilter = u, this.wrapR = d, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  yn.physical = {
    uniforms: tn([yn.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new C(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new dt(0)
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      }
    }]),
    vertexShader: _n.meshphysical_vert,
    fragmentShader: _n.meshphysical_frag
  }, Dn.prototype = Object.create(O.prototype), Dn.prototype.constructor = Dn, Dn.prototype.isDataTexture2DArray = !0, Un.prototype = Object.create(O.prototype), Un.prototype.constructor = Un, Un.prototype.isDataTexture3D = !0;
  var On = new O(),
      zn = new Dn(),
      Gn = new Un(),
      Bn = new cn(),
      Hn = [],
      kn = [],
      Wn = new Float32Array(16),
      Vn = new Float32Array(9),
      Xn = new Float32Array(4);

  function Yn(e, t, n) {
    var i = e[0];
    if (i <= 0 || i > 0) return e;
    var r = t * n;
    var a = Hn[r];

    if (void 0 === a && (a = new Float32Array(r), Hn[r] = a), 0 !== t) {
      i.toArray(a, 0);

      for (var _i65 = 1, _r52 = 0; _i65 !== t; ++_i65) {
        _r52 += n, e[_i65].toArray(a, _r52);
      }
    }

    return a;
  }

  function jn(e, t) {
    if (e.length !== t.length) return !1;

    for (var _n76 = 0, _i66 = e.length; _n76 < _i66; _n76++) {
      if (e[_n76] !== t[_n76]) return !1;
    }

    return !0;
  }

  function Qn(e, t) {
    for (var _n77 = 0, _i67 = t.length; _n77 < _i67; _n77++) {
      e[_n77] = t[_n77];
    }
  }

  function qn(e, t) {
    var n = kn[t];
    void 0 === n && (n = new Int32Array(t), kn[t] = n);

    for (var _i68 = 0; _i68 !== t; ++_i68) {
      n[_i68] = e.allocateTextureUnit();
    }

    return n;
  }

  function Zn(e, t) {
    var n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
  }

  function Jn(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);else {
      if (jn(n, t)) return;
      e.uniform2fv(this.addr, t), Qn(n, t);
    }
  }

  function Kn(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);else {
      if (jn(n, t)) return;
      e.uniform3fv(this.addr, t), Qn(n, t);
    }
  }

  function $n(e, t) {
    var n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);else {
      if (jn(n, t)) return;
      e.uniform4fv(this.addr, t), Qn(n, t);
    }
  }

  function ei(e, t) {
    var n = this.cache,
        i = t.elements;

    if (void 0 === i) {
      if (jn(n, t)) return;
      e.uniformMatrix2fv(this.addr, !1, t), Qn(n, t);
    } else {
      if (jn(n, i)) return;
      Xn.set(i), e.uniformMatrix2fv(this.addr, !1, Xn), Qn(n, i);
    }
  }

  function ti(e, t) {
    var n = this.cache,
        i = t.elements;

    if (void 0 === i) {
      if (jn(n, t)) return;
      e.uniformMatrix3fv(this.addr, !1, t), Qn(n, t);
    } else {
      if (jn(n, i)) return;
      Vn.set(i), e.uniformMatrix3fv(this.addr, !1, Vn), Qn(n, i);
    }
  }

  function ni(e, t) {
    var n = this.cache,
        i = t.elements;

    if (void 0 === i) {
      if (jn(n, t)) return;
      e.uniformMatrix4fv(this.addr, !1, t), Qn(n, t);
    } else {
      if (jn(n, i)) return;
      Wn.set(i), e.uniformMatrix4fv(this.addr, !1, Wn), Qn(n, i);
    }
  }

  function ii(e, t, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(t || On, r);
  }

  function ri(e, t, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || zn, r);
  }

  function ai(e, t, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || Gn, r);
  }

  function oi(e, t, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(t || Bn, r);
  }

  function si(e, t) {
    var n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
  }

  function li(e, t) {
    var n = this.cache;
    jn(n, t) || (e.uniform2iv(this.addr, t), Qn(n, t));
  }

  function ci(e, t) {
    var n = this.cache;
    jn(n, t) || (e.uniform3iv(this.addr, t), Qn(n, t));
  }

  function di(e, t) {
    var n = this.cache;
    jn(n, t) || (e.uniform4iv(this.addr, t), Qn(n, t));
  }

  function hi(e, t) {
    var n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
  }

  function ui(e, t) {
    e.uniform1fv(this.addr, t);
  }

  function fi(e, t) {
    e.uniform1iv(this.addr, t);
  }

  function pi(e, t) {
    e.uniform2iv(this.addr, t);
  }

  function mi(e, t) {
    e.uniform3iv(this.addr, t);
  }

  function gi(e, t) {
    e.uniform4iv(this.addr, t);
  }

  function xi(e, t) {
    var n = Yn(t, this.size, 2);
    e.uniform2fv(this.addr, n);
  }

  function _i(e, t) {
    var n = Yn(t, this.size, 3);
    e.uniform3fv(this.addr, n);
  }

  function vi(e, t) {
    var n = Yn(t, this.size, 4);
    e.uniform4fv(this.addr, n);
  }

  function yi(e, t) {
    var n = Yn(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n);
  }

  function Mi(e, t) {
    var n = Yn(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n);
  }

  function bi(e, t) {
    var n = Yn(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n);
  }

  function wi(e, t, n) {
    var i = t.length,
        r = qn(n, i);
    e.uniform1iv(this.addr, r);

    for (var _e83 = 0; _e83 !== i; ++_e83) {
      n.safeSetTexture2D(t[_e83] || On, r[_e83]);
    }
  }

  function Ai(e, t, n) {
    var i = t.length,
        r = qn(n, i);
    e.uniform1iv(this.addr, r);

    for (var _e84 = 0; _e84 !== i; ++_e84) {
      n.safeSetTextureCube(t[_e84] || Bn, r[_e84]);
    }
  }

  function Si(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = function (e) {
      switch (e) {
        case 5126:
          return Zn;

        case 35664:
          return Jn;

        case 35665:
          return Kn;

        case 35666:
          return $n;

        case 35674:
          return ei;

        case 35675:
          return ti;

        case 35676:
          return ni;

        case 5124:
        case 35670:
          return si;

        case 35667:
        case 35671:
          return li;

        case 35668:
        case 35672:
          return ci;

        case 35669:
        case 35673:
          return di;

        case 5125:
          return hi;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return ii;

        case 35679:
        case 36299:
        case 36307:
          return ai;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return oi;

        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return ri;
      }
    }(t.type);
  }

  function Ti(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function (e) {
      switch (e) {
        case 5126:
          return ui;

        case 35664:
          return xi;

        case 35665:
          return _i;

        case 35666:
          return vi;

        case 35674:
          return yi;

        case 35675:
          return Mi;

        case 35676:
          return bi;

        case 5124:
        case 35670:
          return fi;

        case 35667:
        case 35671:
          return pi;

        case 35668:
        case 35672:
          return mi;

        case 35669:
        case 35673:
          return gi;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return wi;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Ai;
      }
    }(t.type);
  }

  function Li(e) {
    this.id = e, this.seq = [], this.map = {};
  }

  Ti.prototype.updateCache = function (e) {
    var t = this.cache;
    e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), Qn(t, e);
  }, Li.prototype.setValue = function (e, t, n) {
    var i = this.seq;

    for (var _r53 = 0, _a21 = i.length; _r53 !== _a21; ++_r53) {
      var _a22 = i[_r53];

      _a22.setValue(e, t[_a22.id], n);
    }
  };
  var Ei = /(\w+)(\])?(\[|\.)?/g;

  function Pi(e, t) {
    e.seq.push(t), e.map[t.id] = t;
  }

  function Fi(e, t, n) {
    var i = e.name,
        r = i.length;

    for (Ei.lastIndex = 0;;) {
      var _a23 = Ei.exec(i),
          _o18 = Ei.lastIndex;

      var _s11 = _a23[1];

      var _l12 = "]" === _a23[2],
          _c8 = _a23[3];

      if (_l12 && (_s11 |= 0), void 0 === _c8 || "[" === _c8 && _o18 + 2 === r) {
        Pi(n, void 0 === _c8 ? new Si(_s11, e, t) : new Ti(_s11, e, t));
        break;
      }

      {
        var _e85 = n.map[_s11];
        void 0 === _e85 && (_e85 = new Li(_s11), Pi(n, _e85)), n = _e85;
      }
    }
  }

  function Ni(e, t) {
    this.seq = [], this.map = {};
    var n = e.getProgramParameter(t, 35718);

    for (var _i69 = 0; _i69 < n; ++_i69) {
      var _n78 = e.getActiveUniform(t, _i69);

      Fi(_n78, e.getUniformLocation(t, _n78.name), this);
    }
  }

  function Ci(e, t, n) {
    var i = e.createShader(t);
    return e.shaderSource(i, n), e.compileShader(i), i;
  }

  Ni.prototype.setValue = function (e, t, n, i) {
    var r = this.map[t];
    void 0 !== r && r.setValue(e, n, i);
  }, Ni.prototype.setOptional = function (e, t, n) {
    var i = t[n];
    void 0 !== i && this.setValue(e, n, i);
  }, Ni.upload = function (e, t, n, i) {
    for (var _r54 = 0, _a24 = t.length; _r54 !== _a24; ++_r54) {
      var _a25 = t[_r54],
          _o19 = n[_a25.id];
      !1 !== _o19.needsUpdate && _a25.setValue(e, _o19.value, i);
    }
  }, Ni.seqWithValue = function (e, t) {
    var n = [];

    for (var _i70 = 0, _r55 = e.length; _i70 !== _r55; ++_i70) {
      var _r56 = e[_i70];
      _r56.id in t && n.push(_r56);
    }

    return n;
  };
  var Ri = 0;

  function Ii(e) {
    switch (e) {
      case S:
        return ["Linear", "( value )"];

      case 3001:
        return ["sRGB", "( value )"];

      case 3002:
        return ["RGBE", "( value )"];

      case 3004:
        return ["RGBM", "( value, 7.0 )"];

      case 3005:
        return ["RGBM", "( value, 16.0 )"];

      case 3006:
        return ["RGBD", "( value, 256.0 )"];

      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"];
    }
  }

  function Di(e, t, n) {
    var i = e.getShaderParameter(t, 35713),
        r = e.getShaderInfoLog(t).trim();
    if (i && "" === r) return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (e) {
      var t = e.split("\n");

      for (var _e86 = 0; _e86 < t.length; _e86++) {
        t[_e86] = _e86 + 1 + ": " + t[_e86];
      }

      return t.join("\n");
    }(e.getShaderSource(t));
  }

  function Ui(e, t) {
    var n = Ii(t);
    return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }

  function Oi(e, t) {
    var n = Ii(t);
    return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
  }

  function zi(e, t) {
    var n;

    switch (t) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear";
    }

    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }

  function Gi(e) {
    return "" !== e;
  }

  function Bi(e, t) {
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }

  function Hi(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
  }

  var ki = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Wi(e) {
    return e.replace(ki, Vi);
  }

  function Vi(e, t) {
    var n = _n[t];
    if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
    return Wi(n);
  }

  var Xi = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      Yi = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function ji(e) {
    return e.replace(Yi, qi).replace(Xi, Qi);
  }

  function Qi(e, t, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), qi(e, t, n, i);
  }

  function qi(e, t, n, i) {
    var r = "";

    for (var _e87 = parseInt(t); _e87 < parseInt(n); _e87++) {
      r += i.replace(/\[\s*i\s*\]/g, "[ " + _e87 + " ]").replace(/UNROLLED_LOOP_INDEX/g, _e87);
    }

    return r;
  }

  function Zi(e) {
    var t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
    return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t;
  }

  function Ji(e, t, n, i) {
    var r = e.getContext(),
        a = n.defines;
    var o = n.vertexShader,
        s = n.fragmentShader;

    var l = function (e) {
      var t = "SHADOWMAP_TYPE_BASIC";
      return 1 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"), t;
    }(n),
        c = function (e) {
      var t = "ENVMAP_TYPE_CUBE";
      if (e.envMap) switch (e.envMapMode) {
        case 301:
        case 302:
          t = "ENVMAP_TYPE_CUBE";
          break;

        case 306:
        case 307:
          t = "ENVMAP_TYPE_CUBE_UV";
      }
      return t;
    }(n),
        d = function (e) {
      var t = "ENVMAP_MODE_REFLECTION";
      if (e.envMap) switch (e.envMapMode) {
        case 302:
        case 307:
          t = "ENVMAP_MODE_REFRACTION";
      }
      return t;
    }(n),
        h = function (e) {
      var t = "ENVMAP_BLENDING_NONE";
      if (e.envMap) switch (e.combine) {
        case 0:
          t = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case 1:
          t = "ENVMAP_BLENDING_MIX";
          break;

        case 2:
          t = "ENVMAP_BLENDING_ADD";
      }
      return t;
    }(n),
        u = e.gammaFactor > 0 ? e.gammaFactor : 1,
        f = n.isWebGL2 ? "" : function (e) {
      return [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Gi).join("\n");
    }(n),
        p = function (e) {
      var t = [];

      for (var _n79 in e) {
        var _i71 = e[_n79];
        !1 !== _i71 && t.push("#define " + _n79 + " " + _i71);
      }

      return t.join("\n");
    }(a),
        m = r.createProgram();

    var g,
        x,
        _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";

    n.isRawShaderMaterial ? (g = [p].filter(Gi).join("\n"), g.length > 0 && (g += "\n"), x = [f, p].filter(Gi).join("\n"), x.length > 0 && (x += "\n")) : (g = [Zi(n), "#define SHADER_NAME " + n.shaderName, p, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + u, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Gi).join("\n"), x = [f, Zi(n), "#define SHADER_NAME " + n.shaderName, p, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + u, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? _n.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? zi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", _n.encodings_pars_fragment, n.map ? Ui("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Ui("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Ui("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Ui("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Ui("lightMapTexelToLinear", n.lightMapEncoding) : "", Oi("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Gi).join("\n")), o = Wi(o), o = Bi(o, n), o = Hi(o, n), s = Wi(s), s = Bi(s, n), s = Hi(s, n), o = ji(o), s = ji(s), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (_ = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, x = ["#define varying in", n.glslVersion === L ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === L ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + x);
    var v = _ + x + s,
        y = Ci(r, 35633, _ + g + o),
        M = Ci(r, 35632, v);

    if (r.attachShader(m, y), r.attachShader(m, M), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), e.debug.checkShaderErrors) {
      var _e88 = r.getProgramInfoLog(m).trim(),
          _t67 = r.getShaderInfoLog(y).trim(),
          _n80 = r.getShaderInfoLog(M).trim();

      var _i72 = !0,
          _a26 = !0;

      if (!1 === r.getProgramParameter(m, 35714)) {
        _i72 = !1;

        var _t68 = Di(r, y, "vertex"),
            _n81 = Di(r, M, "fragment");

        console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", _e88, _t68, _n81);
      } else "" !== _e88 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", _e88) : "" !== _t67 && "" !== _n80 || (_a26 = !1);

      _a26 && (this.diagnostics = {
        runnable: _i72,
        programLog: _e88,
        vertexShader: {
          log: _t67,
          prefix: g
        },
        fragmentShader: {
          log: _n80,
          prefix: x
        }
      });
    }

    var b, w;
    return r.deleteShader(y), r.deleteShader(M), this.getUniforms = function () {
      return void 0 === b && (b = new Ni(r, m)), b;
    }, this.getAttributes = function () {
      return void 0 === w && (w = function (e, t) {
        var n = {},
            i = e.getProgramParameter(t, 35721);

        for (var _r57 = 0; _r57 < i; _r57++) {
          var _i73 = e.getActiveAttrib(t, _r57).name;
          n[_i73] = e.getAttribLocation(t, _i73);
        }

        return n;
      }(r, m)), w;
    }, this.destroy = function () {
      i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0;
    }, this.name = n.shaderName, this.id = Ri++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = y, this.fragmentShader = M, this;
  }

  function Ki(e, t, n, i, r, a) {
    var o = [],
        s = i.isWebGL2,
        l = i.logarithmicDepthBuffer,
        c = i.floatVertexTextures,
        d = i.maxVertexUniforms,
        h = i.vertexTextures;
    var u = i.precision;
    var f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        p = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

    function m(e) {
      var t;
      return e && e.isTexture ? t = e.encoding : e && e.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), t = e.texture.encoding) : t = S, t;
    }

    return {
      getParameters: function getParameters(r, o, p, g, x) {
        var _ = g.fog,
            v = r.isMeshStandardMaterial ? g.environment : null,
            y = t.get(r.envMap || v),
            M = f[r.type],
            b = x.isSkinnedMesh ? function (e) {
          var t = e.skeleton.bones;
          if (c) return 1024;
          {
            var _e89 = d,
                _n82 = Math.floor((_e89 - 20) / 4),
                _i74 = Math.min(_n82, t.length);

            return _i74 < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + _i74 + "."), 0) : _i74;
          }
        }(x) : 0;
        var w, A;

        if (null !== r.precision && (u = i.getMaxPrecision(r.precision), u !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", u, "instead.")), M) {
          var _e90 = yn[M];
          w = _e90.vertexShader, A = _e90.fragmentShader;
        } else w = r.vertexShader, A = r.fragmentShader;

        var S = e.getRenderTarget();
        return {
          isWebGL2: s,
          shaderID: M,
          shaderName: r.type,
          vertexShader: w,
          fragmentShader: A,
          defines: r.defines,
          isRawShaderMaterial: !0 === r.isRawShaderMaterial,
          glslVersion: r.glslVersion,
          precision: u,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: h,
          outputEncoding: null !== S ? m(S.texture) : e.outputEncoding,
          map: !!r.map,
          mapEncoding: m(r.map),
          matcap: !!r.matcap,
          matcapEncoding: m(r.matcap),
          envMap: !!y,
          envMapMode: y && y.mapping,
          envMapEncoding: m(y),
          envMapCubeUV: !!y && (306 === y.mapping || 307 === y.mapping),
          lightMap: !!r.lightMap,
          lightMapEncoding: m(r.lightMap),
          aoMap: !!r.aoMap,
          emissiveMap: !!r.emissiveMap,
          emissiveMapEncoding: m(r.emissiveMap),
          bumpMap: !!r.bumpMap,
          normalMap: !!r.normalMap,
          objectSpaceNormalMap: 1 === r.normalMapType,
          tangentSpaceNormalMap: 0 === r.normalMapType,
          clearcoatMap: !!r.clearcoatMap,
          clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
          clearcoatNormalMap: !!r.clearcoatNormalMap,
          displacementMap: !!r.displacementMap,
          roughnessMap: !!r.roughnessMap,
          metalnessMap: !!r.metalnessMap,
          specularMap: !!r.specularMap,
          alphaMap: !!r.alphaMap,
          gradientMap: !!r.gradientMap,
          sheen: !!r.sheen,
          transmissionMap: !!r.transmissionMap,
          combine: r.combine,
          vertexTangents: r.normalMap && r.vertexTangents,
          vertexColors: r.vertexColors,
          vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
          uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
          fog: !!_,
          useFog: r.fog,
          fogExp2: _ && _.isFogExp2,
          flatShading: r.flatShading,
          sizeAttenuation: r.sizeAttenuation,
          logarithmicDepthBuffer: l,
          skinning: r.skinning && b > 0,
          maxBones: b,
          useVertexTexture: c,
          morphTargets: r.morphTargets,
          morphNormals: r.morphNormals,
          maxMorphTargets: e.maxMorphTargets,
          maxMorphNormals: e.maxMorphNormals,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numClippingPlanes: a.numPlanes,
          numClipIntersection: a.numIntersection,
          dithering: r.dithering,
          shadowMapEnabled: e.shadowMap.enabled && p.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: r.toneMapped ? e.toneMapping : 0,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: r.premultipliedAlpha,
          alphaTest: r.alphaTest,
          doubleSided: 2 === r.side,
          flipSided: 1 === r.side,
          depthPacking: void 0 !== r.depthPacking && r.depthPacking,
          index0AttributeName: r.index0AttributeName,
          extensionDerivatives: r.extensions && r.extensions.derivatives,
          extensionFragDepth: r.extensions && r.extensions.fragDepth,
          extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
          extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: s || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: s || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: s || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: r.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function getProgramCacheKey(t) {
        var n = [];
        if (t.shaderID ? n.push(t.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)), void 0 !== t.defines) for (var _e91 in t.defines) {
          n.push(_e91), n.push(t.defines[_e91]);
        }

        if (!1 === t.isRawShaderMaterial) {
          for (var _e92 = 0; _e92 < p.length; _e92++) {
            n.push(t[p[_e92]]);
          }

          n.push(e.outputEncoding), n.push(e.gammaFactor);
        }

        return n.push(t.customProgramCacheKey), n.join();
      },
      getUniforms: function getUniforms(e) {
        var t = f[e.type];
        var n;

        if (t) {
          var _e93 = yn[t];
          n = nn.clone(_e93.uniforms);
        } else n = e.uniforms;

        return n;
      },
      acquireProgram: function acquireProgram(t, n) {
        var i;

        for (var _e94 = 0, _t69 = o.length; _e94 < _t69; _e94++) {
          var _t70 = o[_e94];

          if (_t70.cacheKey === n) {
            i = _t70, ++i.usedTimes;
            break;
          }
        }

        return void 0 === i && (i = new Ji(e, n, t, r), o.push(i)), i;
      },
      releaseProgram: function releaseProgram(e) {
        if (0 == --e.usedTimes) {
          var _t71 = o.indexOf(e);

          o[_t71] = o[o.length - 1], o.pop(), e.destroy();
        }
      },
      programs: o
    };
  }

  function $i() {
    var e = new WeakMap();
    return {
      get: function get(t) {
        var n = e.get(t);
        return void 0 === n && (n = {}, e.set(t, n)), n;
      },
      remove: function remove(t) {
        e["delete"](t);
      },
      update: function update(t, n, i) {
        e.get(t)[n] = i;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function er(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id;
  }

  function tr(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
  }

  function nr(e) {
    var t = [];
    var n = 0;
    var i = [],
        r = [],
        a = {
      id: -1
    };

    function o(i, r, o, s, l, c) {
      var d = t[n];
      var h = e.get(o);
      return void 0 === d ? (d = {
        id: i.id,
        object: i,
        geometry: r,
        material: o,
        program: h.program || a,
        groupOrder: s,
        renderOrder: i.renderOrder,
        z: l,
        group: c
      }, t[n] = d) : (d.id = i.id, d.object = i, d.geometry = r, d.material = o, d.program = h.program || a, d.groupOrder = s, d.renderOrder = i.renderOrder, d.z = l, d.group = c), n++, d;
    }

    return {
      opaque: i,
      transparent: r,
      init: function init() {
        n = 0, i.length = 0, r.length = 0;
      },
      push: function push(e, t, n, a, s, l) {
        var c = o(e, t, n, a, s, l);
        (!0 === n.transparent ? r : i).push(c);
      },
      unshift: function unshift(e, t, n, a, s, l) {
        var c = o(e, t, n, a, s, l);
        (!0 === n.transparent ? r : i).unshift(c);
      },
      finish: function finish() {
        for (var _e95 = n, _i75 = t.length; _e95 < _i75; _e95++) {
          var _n83 = t[_e95];
          if (null === _n83.id) break;
          _n83.id = null, _n83.object = null, _n83.geometry = null, _n83.material = null, _n83.program = null, _n83.group = null;
        }
      },
      sort: function sort(e, t) {
        i.length > 1 && i.sort(e || er), r.length > 1 && r.sort(t || tr);
      }
    };
  }

  function ir(e) {
    var t = new WeakMap();
    return {
      get: function get(n, i) {
        var r = t.get(n);
        var a;
        return void 0 === r ? (a = new nr(e), t.set(n, new WeakMap()), t.get(n).set(i, a)) : (a = r.get(i), void 0 === a && (a = new nr(e), r.set(i, a))), a;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function rr() {
    var e = {};
    return {
      get: function get(t) {
        if (void 0 !== e[t.id]) return e[t.id];
        var n;

        switch (t.type) {
          case "DirectionalLight":
            n = {
              direction: new k(),
              color: new dt()
            };
            break;

          case "SpotLight":
            n = {
              position: new k(),
              direction: new k(),
              color: new dt(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;

          case "PointLight":
            n = {
              position: new k(),
              color: new dt(),
              distance: 0,
              decay: 0
            };
            break;

          case "HemisphereLight":
            n = {
              direction: new k(),
              skyColor: new dt(),
              groundColor: new dt()
            };
            break;

          case "RectAreaLight":
            n = {
              color: new dt(),
              position: new k(),
              halfWidth: new k(),
              halfHeight: new k()
            };
        }

        return e[t.id] = n, n;
      }
    };
  }

  var ar = 0;

  function or(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
  }

  function sr(e, t) {
    var n = new rr(),
        i = function () {
      var e = {};
      return {
        get: function get(t) {
          if (void 0 !== e[t.id]) return e[t.id];
          var n;

          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new C()
              };
              break;

            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new C(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }

          return e[t.id] = n, n;
        }
      };
    }(),
        r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    };

    for (var _e96 = 0; _e96 < 9; _e96++) {
      r.probe.push(new k());
    }

    var a = new k(),
        o = new me(),
        s = new me();
    return {
      setup: function setup(a) {
        var o = 0,
            s = 0,
            l = 0;

        for (var _e97 = 0; _e97 < 9; _e97++) {
          r.probe[_e97].set(0, 0, 0);
        }

        var c = 0,
            d = 0,
            h = 0,
            u = 0,
            f = 0,
            p = 0,
            m = 0,
            g = 0;
        a.sort(or);

        for (var _e98 = 0, _t72 = a.length; _e98 < _t72; _e98++) {
          var _t73 = a[_e98],
              _x2 = _t73.color,
              _3 = _t73.intensity,
              _v2 = _t73.distance,
              _y2 = _t73.shadow && _t73.shadow.map ? _t73.shadow.map.texture : null;

          if (_t73.isAmbientLight) o += _x2.r * _3, s += _x2.g * _3, l += _x2.b * _3;else if (_t73.isLightProbe) for (var _e99 = 0; _e99 < 9; _e99++) {
            r.probe[_e99].addScaledVector(_t73.sh.coefficients[_e99], _3);
          } else if (_t73.isDirectionalLight) {
            var _e100 = n.get(_t73);

            if (_e100.color.copy(_t73.color).multiplyScalar(_t73.intensity), _t73.castShadow) {
              var _e101 = _t73.shadow,
                  _n84 = i.get(_t73);

              _n84.shadowBias = _e101.bias, _n84.shadowNormalBias = _e101.normalBias, _n84.shadowRadius = _e101.radius, _n84.shadowMapSize = _e101.mapSize, r.directionalShadow[c] = _n84, r.directionalShadowMap[c] = _y2, r.directionalShadowMatrix[c] = _t73.shadow.matrix, p++;
            }

            r.directional[c] = _e100, c++;
          } else if (_t73.isSpotLight) {
            var _e102 = n.get(_t73);

            if (_e102.position.setFromMatrixPosition(_t73.matrixWorld), _e102.color.copy(_x2).multiplyScalar(_3), _e102.distance = _v2, _e102.coneCos = Math.cos(_t73.angle), _e102.penumbraCos = Math.cos(_t73.angle * (1 - _t73.penumbra)), _e102.decay = _t73.decay, _t73.castShadow) {
              var _e103 = _t73.shadow,
                  _n85 = i.get(_t73);

              _n85.shadowBias = _e103.bias, _n85.shadowNormalBias = _e103.normalBias, _n85.shadowRadius = _e103.radius, _n85.shadowMapSize = _e103.mapSize, r.spotShadow[h] = _n85, r.spotShadowMap[h] = _y2, r.spotShadowMatrix[h] = _t73.shadow.matrix, g++;
            }

            r.spot[h] = _e102, h++;
          } else if (_t73.isRectAreaLight) {
            var _e104 = n.get(_t73);

            _e104.color.copy(_x2).multiplyScalar(_3), _e104.halfWidth.set(.5 * _t73.width, 0, 0), _e104.halfHeight.set(0, .5 * _t73.height, 0), r.rectArea[u] = _e104, u++;
          } else if (_t73.isPointLight) {
            var _e105 = n.get(_t73);

            if (_e105.color.copy(_t73.color).multiplyScalar(_t73.intensity), _e105.distance = _t73.distance, _e105.decay = _t73.decay, _t73.castShadow) {
              var _e106 = _t73.shadow,
                  _n86 = i.get(_t73);

              _n86.shadowBias = _e106.bias, _n86.shadowNormalBias = _e106.normalBias, _n86.shadowRadius = _e106.radius, _n86.shadowMapSize = _e106.mapSize, _n86.shadowCameraNear = _e106.camera.near, _n86.shadowCameraFar = _e106.camera.far, r.pointShadow[d] = _n86, r.pointShadowMap[d] = _y2, r.pointShadowMatrix[d] = _t73.shadow.matrix, m++;
            }

            r.point[d] = _e105, d++;
          } else if (_t73.isHemisphereLight) {
            var _e107 = n.get(_t73);

            _e107.skyColor.copy(_t73.color).multiplyScalar(_3), _e107.groundColor.copy(_t73.groundColor).multiplyScalar(_3), r.hemi[f] = _e107, f++;
          }
        }

        u > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = vn.LTC_FLOAT_1, r.rectAreaLTC2 = vn.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = vn.LTC_HALF_1, r.rectAreaLTC2 = vn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = s, r.ambient[2] = l;
        var x = r.hash;
        x.directionalLength === c && x.pointLength === d && x.spotLength === h && x.rectAreaLength === u && x.hemiLength === f && x.numDirectionalShadows === p && x.numPointShadows === m && x.numSpotShadows === g || (r.directional.length = c, r.spot.length = h, r.rectArea.length = u, r.point.length = d, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, x.directionalLength = c, x.pointLength = d, x.spotLength = h, x.rectAreaLength = u, x.hemiLength = f, x.numDirectionalShadows = p, x.numPointShadows = m, x.numSpotShadows = g, r.version = ar++);
      },
      setupView: function setupView(e, t) {
        var n = 0,
            i = 0,
            l = 0,
            c = 0,
            d = 0;
        var h = t.matrixWorldInverse;

        for (var _t74 = 0, _u6 = e.length; _t74 < _u6; _t74++) {
          var _u7 = e[_t74];

          if (_u7.isDirectionalLight) {
            var _e108 = r.directional[n];
            _e108.direction.setFromMatrixPosition(_u7.matrixWorld), a.setFromMatrixPosition(_u7.target.matrixWorld), _e108.direction.sub(a), _e108.direction.transformDirection(h), n++;
          } else if (_u7.isSpotLight) {
            var _e109 = r.spot[l];
            _e109.position.setFromMatrixPosition(_u7.matrixWorld), _e109.position.applyMatrix4(h), _e109.direction.setFromMatrixPosition(_u7.matrixWorld), a.setFromMatrixPosition(_u7.target.matrixWorld), _e109.direction.sub(a), _e109.direction.transformDirection(h), l++;
          } else if (_u7.isRectAreaLight) {
            var _e110 = r.rectArea[c];
            _e110.position.setFromMatrixPosition(_u7.matrixWorld), _e110.position.applyMatrix4(h), s.identity(), o.copy(_u7.matrixWorld), o.premultiply(h), s.extractRotation(o), _e110.halfWidth.set(.5 * _u7.width, 0, 0), _e110.halfHeight.set(0, .5 * _u7.height, 0), _e110.halfWidth.applyMatrix4(s), _e110.halfHeight.applyMatrix4(s), c++;
          } else if (_u7.isPointLight) {
            var _e111 = r.point[i];
            _e111.position.setFromMatrixPosition(_u7.matrixWorld), _e111.position.applyMatrix4(h), i++;
          } else if (_u7.isHemisphereLight) {
            var _e112 = r.hemi[d];
            _e112.direction.setFromMatrixPosition(_u7.matrixWorld), _e112.direction.transformDirection(h), _e112.direction.normalize(), d++;
          }
        }
      },
      state: r
    };
  }

  function lr(e, t) {
    var n = new sr(e, t),
        i = [],
        r = [];
    return {
      init: function init() {
        i.length = 0, r.length = 0;
      },
      state: {
        lightsArray: i,
        shadowsArray: r,
        lights: n
      },
      setupLights: function setupLights() {
        n.setup(i);
      },
      setupLightsView: function setupLightsView(e) {
        n.setupView(i, e);
      },
      pushLight: function pushLight(e) {
        i.push(e);
      },
      pushShadow: function pushShadow(e) {
        r.push(e);
      }
    };
  }

  function cr(e, t) {
    var n = new WeakMap();
    return {
      get: function get(i) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var a;
        return !1 === n.has(i) ? (a = new lr(e, t), n.set(i, []), n.get(i).push(a)) : r >= n.get(i).length ? (a = new lr(e, t), n.get(i).push(a)) : a = n.get(i)[r], a;
      },
      dispose: function dispose() {
        n = new WeakMap();
      }
    };
  }

  function dr(e) {
    it.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
  }

  function hr(e) {
    it.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new k(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
  }

  dr.prototype = Object.create(it.prototype), dr.prototype.constructor = dr, dr.prototype.isMeshDepthMaterial = !0, dr.prototype.copy = function (e) {
    return it.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }, hr.prototype = Object.create(it.prototype), hr.prototype.constructor = hr, hr.prototype.isMeshDistanceMaterial = !0, hr.prototype.copy = function (e) {
    return it.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  };

  function ur(e, t, n) {
    var i = new pn();
    var r = new C(),
        a = new C(),
        o = new G(),
        s = [],
        l = [],
        c = {},
        d = {
      0: 1,
      1: 0,
      2: 2
    },
        h = new rn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new C()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main(){gl_Position=vec4(position,1.0);}",
      fragmentShader: "uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;\n#include <packing>\nvoid main(){float mean=0.0;float squared_mean=0.0;float depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy)/resolution));for(float i=-1.0;i<1.0;i+=SAMPLE_RATE){\n#ifdef HORIZONTAL_PASS\nvec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(i,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;\n#else\nfloat depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,i)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;\n#endif\n}mean=mean*HALF_SAMPLE_RATE;squared_mean=squared_mean*HALF_SAMPLE_RATE;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}"
    }),
        p = h.clone();
    p.defines.HORIZONTAL_PASS = 1;
    var m = new Rt();
    m.setAttribute("position", new pt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var g = new Jt(m, h),
        x = this;

    function _(n, i) {
      var r = t.update(g);
      h.uniforms.shadow_pass.value = n.map.texture, h.uniforms.resolution.value = n.mapSize, h.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(i, null, r, h, g, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(i, null, r, p, g, null);
    }

    function v(e, t, n) {
      var i = e << 0 | t << 1 | n << 2;
      var r = s[i];
      return void 0 === r && (r = new dr({
        depthPacking: 3201,
        morphTargets: e,
        skinning: t
      }), s[i] = r), r;
    }

    function y(e, t, n) {
      var i = e << 0 | t << 1 | n << 2;
      var r = l[i];
      return void 0 === r && (r = new hr({
        morphTargets: e,
        skinning: t
      }), l[i] = r), r;
    }

    function M(t, n, i, r, a, o, s) {
      var l = null,
          h = v,
          u = t.customDepthMaterial;

      if (!0 === r.isPointLight && (h = y, u = t.customDistanceMaterial), void 0 === u) {
        var _e113 = !1;

        !0 === i.morphTargets && (_e113 = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);

        var _r58 = !1;

        !0 === t.isSkinnedMesh && (!0 === i.skinning ? _r58 = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t));
        l = h(_e113, _r58, !0 === t.isInstancedMesh);
      } else l = u;

      if (e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var _e114 = l.uuid,
            _t75 = i.uuid;
        var _n87 = c[_e114];
        void 0 === _n87 && (_n87 = {}, c[_e114] = _n87);
        var _r59 = _n87[_t75];
        void 0 === _r59 && (_r59 = l.clone(), _n87[_t75] = _r59), l = _r59;
      }

      return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === s ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : d[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = a, l.farDistance = o), l;
    }

    function w(n, r, a, o, s) {
      if (!1 === n.visible) return;

      if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);

        var _i76 = t.update(n),
            _r60 = n.material;

        if (Array.isArray(_r60)) {
          var _t76 = _i76.groups;

          for (var _l13 = 0, _c9 = _t76.length; _l13 < _c9; _l13++) {
            var _c10 = _t76[_l13],
                _d6 = _r60[_c10.materialIndex];

            if (_d6 && _d6.visible) {
              var _t77 = M(n, _i76, _d6, o, a.near, a.far, s);

              e.renderBufferDirect(a, null, _i76, _t77, n, _c10);
            }
          }
        } else if (_r60.visible) {
          var _t78 = M(n, _i76, _r60, o, a.near, a.far, s);

          e.renderBufferDirect(a, null, _i76, _t78, n, null);
        }
      }

      var l = n.children;

      for (var _e115 = 0, _t79 = l.length; _e115 < _t79; _e115++) {
        w(l[_e115], r, a, o, s);
      }
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (t, s, l) {
      if (!1 === x.enabled) return;
      if (!1 === x.autoUpdate && !1 === x.needsUpdate) return;
      if (0 === t.length) return;
      var c = e.getRenderTarget(),
          d = e.getActiveCubeFace(),
          h = e.getActiveMipmapLevel(),
          p = e.state;
      p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);

      for (var _c11 = 0, _d7 = t.length; _c11 < _d7; _c11++) {
        var _d8 = t[_c11],
            _h8 = _d8.shadow;

        if (void 0 === _h8) {
          console.warn("THREE.WebGLShadowMap:", _d8, "has no shadow.");
          continue;
        }

        if (!1 === _h8.autoUpdate && !1 === _h8.needsUpdate) continue;
        r.copy(_h8.mapSize);

        var _m = _h8.getFrameExtents();

        if (r.multiply(_m), a.copy(_h8.mapSize), (r.x > n || r.y > n) && (r.x > n && (a.x = Math.floor(n / _m.x), r.x = a.x * _m.x, _h8.mapSize.x = a.x), r.y > n && (a.y = Math.floor(n / _m.y), r.y = a.y * _m.y, _h8.mapSize.y = a.y)), null === _h8.map && !_h8.isPointLightShadow && 3 === this.type) {
          var _e116 = {
            minFilter: f,
            magFilter: f,
            format: b
          };
          _h8.map = new B(r.x, r.y, _e116), _h8.map.texture.name = _d8.name + ".shadowMap", _h8.mapPass = new B(r.x, r.y, _e116), _h8.camera.updateProjectionMatrix();
        }

        if (null === _h8.map) {
          var _e117 = {
            minFilter: u,
            magFilter: u,
            format: b
          };
          _h8.map = new B(r.x, r.y, _e117), _h8.map.texture.name = _d8.name + ".shadowMap", _h8.camera.updateProjectionMatrix();
        }

        e.setRenderTarget(_h8.map), e.clear();

        var _g = _h8.getViewportCount();

        for (var _e118 = 0; _e118 < _g; _e118++) {
          var _t80 = _h8.getViewport(_e118);

          o.set(a.x * _t80.x, a.y * _t80.y, a.x * _t80.z, a.y * _t80.w), p.viewport(o), _h8.updateMatrices(_d8, _e118), i = _h8.getFrustum(), w(s, l, _h8.camera, _d8, this.type);
        }

        _h8.isPointLightShadow || 3 !== this.type || _(_h8, l), _h8.needsUpdate = !1;
      }

      x.needsUpdate = !1, e.setRenderTarget(c, d, h);
    };
  }

  function fr(e, t, n) {
    var _U;

    var i = n.isWebGL2;
    var r = new function () {
      var t = !1;
      var n = new G();
      var i = null;
      var r = new G(0, 0, 0, 0);
      return {
        setMask: function setMask(n) {
          i === n || t || (e.colorMask(n, n, n, n), i = n);
        },
        setLocked: function setLocked(e) {
          t = e;
        },
        setClear: function setClear(t, i, a, o, s) {
          !0 === s && (t *= o, i *= o, a *= o), n.set(t, i, a, o), !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n));
        },
        reset: function reset() {
          t = !1, i = null, r.set(-1, 0, 0, 0);
        }
      };
    }(),
        a = new function () {
      var t = !1,
          n = null,
          i = null,
          r = null;
      return {
        setTest: function setTest(e) {
          e ? I(2929) : D(2929);
        },
        setMask: function setMask(i) {
          n === i || t || (e.depthMask(i), n = i);
        },
        setFunc: function setFunc(t) {
          if (i !== t) {
            if (t) switch (t) {
              case 0:
                e.depthFunc(512);
                break;

              case 1:
                e.depthFunc(519);
                break;

              case 2:
                e.depthFunc(513);
                break;

              case 3:
                e.depthFunc(515);
                break;

              case 4:
                e.depthFunc(514);
                break;

              case 5:
                e.depthFunc(518);
                break;

              case 6:
                e.depthFunc(516);
                break;

              case 7:
                e.depthFunc(517);
                break;

              default:
                e.depthFunc(515);
            } else e.depthFunc(515);
            i = t;
          }
        },
        setLocked: function setLocked(e) {
          t = e;
        },
        setClear: function setClear(t) {
          r !== t && (e.clearDepth(t), r = t);
        },
        reset: function reset() {
          t = !1, n = null, i = null, r = null;
        }
      };
    }(),
        o = new function () {
      var t = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          o = null,
          s = null,
          l = null,
          c = null;
      return {
        setTest: function setTest(e) {
          t || (e ? I(2960) : D(2960));
        },
        setMask: function setMask(i) {
          n === i || t || (e.stencilMask(i), n = i);
        },
        setFunc: function setFunc(t, n, o) {
          i === t && r === n && a === o || (e.stencilFunc(t, n, o), i = t, r = n, a = o);
        },
        setOp: function setOp(t, n, i) {
          o === t && s === n && l === i || (e.stencilOp(t, n, i), o = t, s = n, l = i);
        },
        setLocked: function setLocked(e) {
          t = e;
        },
        setClear: function setClear(t) {
          c !== t && (e.clearStencil(t), c = t);
        },
        reset: function reset() {
          t = !1, n = null, i = null, r = null, a = null, o = null, s = null, l = null, c = null;
        }
      };
    }();

    var s = {},
        c = null,
        d = null,
        h = null,
        u = null,
        f = null,
        p = null,
        m = null,
        g = null,
        x = null,
        _ = !1,
        v = null,
        y = null,
        M = null,
        b = null,
        w = null;

    var A = e.getParameter(35661);
    var S = !1,
        T = 0;
    var L = e.getParameter(7938);
    -1 !== L.indexOf("WebGL") ? (T = parseFloat(/^WebGL (\d)/.exec(L)[1]), S = T >= 1) : -1 !== L.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL ES (\d)/.exec(L)[1]), S = T >= 2);
    var E = null,
        P = {};
    var F = new G(),
        N = new G();

    function C(t, n, i) {
      var r = new Uint8Array(4),
          a = e.createTexture();
      e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);

      for (var _t81 = 0; _t81 < i; _t81++) {
        e.texImage2D(n + _t81, 0, 6408, 1, 1, 0, 6408, 5121, r);
      }

      return a;
    }

    var R = {};

    function I(t) {
      !0 !== s[t] && (e.enable(t), s[t] = !0);
    }

    function D(t) {
      !1 !== s[t] && (e.disable(t), s[t] = !1);
    }

    R[3553] = C(3553, 3553, 1), R[34067] = C(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), I(2929), a.setFunc(3), B(!1), H(1), I(2884), z(0);
    var U = (_U = {}, _defineProperty(_U, l, 32774), _defineProperty(_U, 101, 32778), _defineProperty(_U, 102, 32779), _U);
    if (i) U[103] = 32775, U[104] = 32776;else {
      var _e119 = t.get("EXT_blend_minmax");

      null !== _e119 && (U[103] = _e119.MIN_EXT, U[104] = _e119.MAX_EXT);
    }
    var O = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };

    function z(t, n, i, r, a, o, s, c) {
      if (0 !== t) {
        if (d || (I(3042), d = !0), 5 === t) a = a || n, o = o || i, s = s || r, n === u && a === m || (e.blendEquationSeparate(U[n], U[a]), u = n, m = a), i === f && r === p && o === g && s === x || (e.blendFuncSeparate(O[i], O[r], O[o], O[s]), f = i, p = r, g = o, x = s), h = t, _ = null;else if (t !== h || c !== _) {
          if (u === l && m === l || (e.blendEquation(32774), u = l, m = l), c) switch (t) {
            case 1:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              e.blendFunc(1, 1);
              break;

            case 3:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          } else switch (t) {
            case 1:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              e.blendFunc(770, 1);
              break;

            case 3:
              e.blendFunc(0, 769);
              break;

            case 4:
              e.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
          f = null, p = null, g = null, x = null, h = t, _ = c;
        }
      } else d && (D(3042), d = !1);
    }

    function B(t) {
      v !== t && (t ? e.frontFace(2304) : e.frontFace(2305), v = t);
    }

    function H(t) {
      0 !== t ? (I(2884), t !== y && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : D(2884), y = t;
    }

    function k(t, n, i) {
      t ? (I(32823), b === n && w === i || (e.polygonOffset(n, i), b = n, w = i)) : D(32823);
    }

    function W(t) {
      void 0 === t && (t = 33984 + A - 1), E !== t && (e.activeTexture(t), E = t);
    }

    return {
      buffers: {
        color: r,
        depth: a,
        stencil: o
      },
      enable: I,
      disable: D,
      useProgram: function useProgram(t) {
        return c !== t && (e.useProgram(t), c = t, !0);
      },
      setBlending: z,
      setMaterial: function setMaterial(e, t) {
        2 === e.side ? D(2884) : I(2884);
        var n = 1 === e.side;
        t && (n = !n), B(n), 1 === e.blending && !1 === e.transparent ? z(0) : z(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), r.setMask(e.colorWrite);
        var i = e.stencilWrite;
        o.setTest(i), i && (o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), k(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits);
      },
      setFlipSided: B,
      setCullFace: H,
      setLineWidth: function setLineWidth(t) {
        t !== M && (S && e.lineWidth(t), M = t);
      },
      setPolygonOffset: k,
      setScissorTest: function setScissorTest(e) {
        e ? I(3089) : D(3089);
      },
      activeTexture: W,
      bindTexture: function bindTexture(t, n) {
        null === E && W();
        var i = P[E];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, P[E] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || R[t]), i.type = t, i.texture = n);
      },
      unbindTexture: function unbindTexture() {
        var t = P[E];
        void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
      },
      compressedTexImage2D: function compressedTexImage2D() {
        try {
          e.compressedTexImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage2D: function texImage2D() {
        try {
          e.texImage2D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      texImage3D: function texImage3D() {
        try {
          e.texImage3D.apply(e, arguments);
        } catch (e) {
          console.error("THREE.WebGLState:", e);
        }
      },
      scissor: function scissor(t) {
        !1 === F.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), F.copy(t));
      },
      viewport: function viewport(t) {
        !1 === N.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), N.copy(t));
      },
      reset: function reset() {
        s = {}, E = null, P = {}, c = null, d = null, h = null, u = null, f = null, p = null, m = null, g = null, x = null, _ = !1, v = null, y = null, M = null, b = null, w = null, r.reset(), a.reset(), o.reset();
      }
    };
  }

  function pr(e, t, n, i, r, a, o) {
    var _W, _V;

    var s = r.isWebGL2,
        l = r.maxTextures,
        m = r.maxCubemapSize,
        S = r.maxTextureSize,
        T = r.maxSamples,
        L = new WeakMap();
    var E,
        P = !1;

    try {
      P = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e) {}

    function F(e, t) {
      return P ? new OffscreenCanvas(e, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function C(e, t, n, i) {
      var r = 1;

      if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)), r < 1 || !0 === t) {
        if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
          var _i77 = t ? N.floorPowerOfTwo : Math.floor,
              _a27 = _i77(r * e.width),
              _o20 = _i77(r * e.height);

          void 0 === E && (E = F(_a27, _o20));

          var _s12 = n ? F(_a27, _o20) : E;

          _s12.width = _a27, _s12.height = _o20;
          return _s12.getContext("2d").drawImage(e, 0, 0, _a27, _o20), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + _a27 + "x" + _o20 + ")."), _s12;
        }

        return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e;
      }

      return e;
    }

    function R(e) {
      return N.isPowerOfTwo(e.width) && N.isPowerOfTwo(e.height);
    }

    function I(e, t) {
      return e.generateMipmaps && t && e.minFilter !== u && e.minFilter !== f;
    }

    function D(t, n, r, a) {
      e.generateMipmap(t);
      i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E;
    }

    function U(n, i, r) {
      if (!1 === s) return i;

      if (null !== n) {
        if (void 0 !== e[n]) return e[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }

      var a = i;
      return 6403 === i && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === i && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === i && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || t.get("EXT_color_buffer_float"), a;
    }

    function O(e) {
      return e === u || 1004 === e || 1005 === e ? 9728 : 9729;
    }

    function z(t) {
      var n = t.target;
      n.removeEventListener("dispose", z), function (t) {
        var n = i.get(t);
        if (void 0 === n.__webglInit) return;
        e.deleteTexture(n.__webglTexture), i.remove(t);
      }(n), n.isVideoTexture && L["delete"](n), o.memory.textures--;
    }

    function G(t) {
      var n = t.target;
      n.removeEventListener("dispose", G), function (t) {
        var n = i.get(t),
            r = i.get(t.texture);
        if (!t) return;
        void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture);
        t.depthTexture && t.depthTexture.dispose();
        if (t.isWebGLCubeRenderTarget) for (var _t82 = 0; _t82 < 6; _t82++) {
          e.deleteFramebuffer(n.__webglFramebuffer[_t82]), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[_t82]);
        } else e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && e.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        i.remove(t.texture), i.remove(t);
      }(n), o.memory.textures--;
    }

    var B = 0;

    function H(e, t) {
      var r = i.get(e);

      if (e.isVideoTexture && function (e) {
        var t = o.render.frame;
        L.get(e) !== t && (L.set(e, t), e.update());
      }(e), e.version > 0 && r.__version !== e.version) {
        var _n88 = e.image;
        if (void 0 === _n88) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== _n88.complete) return void j(r, e, t);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }

      n.activeTexture(33984 + t), n.bindTexture(3553, r.__webglTexture);
    }

    function k(t, r) {
      var o = i.get(t);
      t.version > 0 && o.__version !== t.version ? function (t, i, r) {
        if (6 !== i.image.length) return;
        Y(t, i), n.activeTexture(33984 + r), n.bindTexture(34067, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment);
        var o = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
            l = i.image[0] && i.image[0].isDataTexture,
            c = [];

        for (var _e120 = 0; _e120 < 6; _e120++) {
          c[_e120] = o || l ? l ? i.image[_e120].image : i.image[_e120] : C(i.image[_e120], !1, !0, m);
        }

        var d = c[0],
            h = R(d) || s,
            u = a.convert(i.format),
            f = a.convert(i.type),
            p = U(i.internalFormat, u, f);
        var g;

        if (X(34067, i, h), o) {
          for (var _e121 = 0; _e121 < 6; _e121++) {
            g = c[_e121].mipmaps;

            for (var _t83 = 0; _t83 < g.length; _t83++) {
              var _r61 = g[_t83];
              i.format !== b && i.format !== M ? null !== u ? n.compressedTexImage2D(34069 + _e121, _t83, p, _r61.width, _r61.height, 0, _r61.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + _e121, _t83, p, _r61.width, _r61.height, 0, u, f, _r61.data);
            }
          }

          t.__maxMipLevel = g.length - 1;
        } else {
          g = i.mipmaps;

          for (var _e122 = 0; _e122 < 6; _e122++) {
            if (l) {
              n.texImage2D(34069 + _e122, 0, p, c[_e122].width, c[_e122].height, 0, u, f, c[_e122].data);

              for (var _t84 = 0; _t84 < g.length; _t84++) {
                var _i78 = g[_t84].image[_e122].image;
                n.texImage2D(34069 + _e122, _t84 + 1, p, _i78.width, _i78.height, 0, u, f, _i78.data);
              }
            } else {
              n.texImage2D(34069 + _e122, 0, p, u, f, c[_e122]);

              for (var _t85 = 0; _t85 < g.length; _t85++) {
                var _i79 = g[_t85];
                n.texImage2D(34069 + _e122, _t85 + 1, p, u, f, _i79.image[_e122]);
              }
            }
          }

          t.__maxMipLevel = g.length;
        }

        I(i, h) && D(34067, i, d.width, d.height);
        t.__version = i.version, i.onUpdate && i.onUpdate(i);
      }(o, t, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture));
    }

    var W = (_W = {}, _defineProperty(_W, c, 10497), _defineProperty(_W, d, 33071), _defineProperty(_W, h, 33648), _W),
        V = (_V = {}, _defineProperty(_V, u, 9728), _defineProperty(_V, 1004, 9984), _defineProperty(_V, 1005, 9986), _defineProperty(_V, f, 9729), _defineProperty(_V, 1007, 9985), _defineProperty(_V, p, 9987), _V);

    function X(n, a, o) {
      o ? (e.texParameteri(n, 10242, W[a.wrapS]), e.texParameteri(n, 10243, W[a.wrapT]), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, W[a.wrapR]), e.texParameteri(n, 10240, V[a.magFilter]), e.texParameteri(n, 10241, V[a.minFilter])) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071), a.wrapS === d && a.wrapT === d || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, O(a.magFilter)), e.texParameteri(n, 10241, O(a.minFilter)), a.minFilter !== u && a.minFilter !== f && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
      var l = t.get("EXT_texture_filter_anisotropic");

      if (l) {
        if (a.type === _ && null === t.get("OES_texture_float_linear")) return;
        if (a.type === v && null === (s || t.get("OES_texture_half_float_linear"))) return;
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, l.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy);
      }
    }

    function Y(t, n) {
      void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", z), t.__webglTexture = e.createTexture(), o.memory.textures++);
    }

    function j(t, i, r) {
      var o = 3553;
      i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), Y(t, i), n.activeTexture(33984 + r), n.bindTexture(o, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment);

      var l = function (e) {
        return !s && (e.wrapS !== d || e.wrapT !== d || e.minFilter !== u && e.minFilter !== f);
      }(i) && !1 === R(i.image),
          c = C(i.image, l, !1, S),
          h = R(c) || s,
          p = a.convert(i.format);

      var m,
          v = a.convert(i.type),
          T = U(i.internalFormat, p, v);
      X(o, i, h);
      var L = i.mipmaps;
      if (i.isDepthTexture) T = 6402, s ? T = i.type === _ ? 36012 : i.type === x ? 33190 : i.type === y ? 35056 : 33189 : i.type === _ && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === w && 6402 === T && i.type !== g && i.type !== x && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = g, v = a.convert(i.type)), i.format === A && 6402 === T && (T = 34041, i.type !== y && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = y, v = a.convert(i.type))), n.texImage2D(3553, 0, T, c.width, c.height, 0, p, v, null);else if (i.isDataTexture) {
        if (L.length > 0 && h) {
          for (var _e123 = 0, _t86 = L.length; _e123 < _t86; _e123++) {
            m = L[_e123], n.texImage2D(3553, _e123, T, m.width, m.height, 0, p, v, m.data);
          }

          i.generateMipmaps = !1, t.__maxMipLevel = L.length - 1;
        } else n.texImage2D(3553, 0, T, c.width, c.height, 0, p, v, c.data), t.__maxMipLevel = 0;
      } else if (i.isCompressedTexture) {
        for (var _e124 = 0, _t87 = L.length; _e124 < _t87; _e124++) {
          m = L[_e124], i.format !== b && i.format !== M ? null !== p ? n.compressedTexImage2D(3553, _e124, T, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, _e124, T, m.width, m.height, 0, p, v, m.data);
        }

        t.__maxMipLevel = L.length - 1;
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, T, c.width, c.height, c.depth, 0, p, v, c.data), t.__maxMipLevel = 0;else if (i.isDataTexture3D) n.texImage3D(32879, 0, T, c.width, c.height, c.depth, 0, p, v, c.data), t.__maxMipLevel = 0;else if (L.length > 0 && h) {
        for (var _e125 = 0, _t88 = L.length; _e125 < _t88; _e125++) {
          m = L[_e125], n.texImage2D(3553, _e125, T, p, v, m);
        }

        i.generateMipmaps = !1, t.__maxMipLevel = L.length - 1;
      } else n.texImage2D(3553, 0, T, p, v, c), t.__maxMipLevel = 0;
      I(i, h) && D(o, i, c.width, c.height), t.__version = i.version, i.onUpdate && i.onUpdate(i);
    }

    function Q(t, r, o, s) {
      var l = a.convert(r.texture.format),
          c = a.convert(r.texture.type),
          d = U(r.texture.internalFormat, l, c);
      n.texImage2D(s, 0, d, r.width, r.height, 0, l, c, null), e.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, s, i.get(r.texture).__webglTexture, 0), e.bindFramebuffer(36160, null);
    }

    function q(t, n, i) {
      if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
        var _r62 = 33189;

        if (i) {
          var _t89 = n.depthTexture;
          _t89 && _t89.isDepthTexture && (_t89.type === _ ? _r62 = 36012 : _t89.type === x && (_r62 = 33190));

          var _i80 = J(n);

          e.renderbufferStorageMultisample(36161, _i80, _r62, n.width, n.height);
        } else e.renderbufferStorage(36161, _r62, n.width, n.height);

        e.framebufferRenderbuffer(36160, 36096, 36161, t);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          var _t90 = J(n);

          e.renderbufferStorageMultisample(36161, _t90, 35056, n.width, n.height);
        } else e.renderbufferStorage(36161, 34041, n.width, n.height);

        e.framebufferRenderbuffer(36160, 33306, 36161, t);
      } else {
        var _t91 = a.convert(n.texture.format),
            _r63 = a.convert(n.texture.type),
            _o21 = U(n.texture.internalFormat, _t91, _r63);

        if (i) {
          var _t92 = J(n);

          e.renderbufferStorageMultisample(36161, _t92, _o21, n.width, n.height);
        } else e.renderbufferStorage(36161, _o21, n.width, n.height);
      }

      e.bindRenderbuffer(36161, null);
    }

    function Z(t) {
      var n = i.get(t),
          r = !0 === t.isWebGLCubeRenderTarget;

      if (t.depthTexture) {
        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (t, n) {
          if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (e.bindFramebuffer(36160, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), H(n.depthTexture, 0);

          var r = i.get(n.depthTexture).__webglTexture;

          if (n.depthTexture.format === w) e.framebufferTexture2D(36160, 36096, 3553, r, 0);else {
            if (n.depthTexture.format !== A) throw new Error("Unknown depthTexture format");
            e.framebufferTexture2D(36160, 33306, 3553, r, 0);
          }
        }(n.__webglFramebuffer, t);
      } else if (r) {
        n.__webglDepthbuffer = [];

        for (var _i81 = 0; _i81 < 6; _i81++) {
          e.bindFramebuffer(36160, n.__webglFramebuffer[_i81]), n.__webglDepthbuffer[_i81] = e.createRenderbuffer(), q(n.__webglDepthbuffer[_i81], t, !1);
        }
      } else e.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), q(n.__webglDepthbuffer, t, !1);

      e.bindFramebuffer(36160, null);
    }

    function J(e) {
      return s && e.isWebGLMultisampleRenderTarget ? Math.min(T, e.samples) : 0;
    }

    var K = !1,
        $ = !1;
    this.allocateTextureUnit = function () {
      var e = B;
      return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l), B += 1, e;
    }, this.resetTextureUnits = function () {
      B = 0;
    }, this.setTexture2D = H, this.setTexture2DArray = function (e, t) {
      var r = i.get(e);
      e.version > 0 && r.__version !== e.version ? j(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(35866, r.__webglTexture));
    }, this.setTexture3D = function (e, t) {
      var r = i.get(e);
      e.version > 0 && r.__version !== e.version ? j(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, r.__webglTexture));
    }, this.setTextureCube = k, this.setupRenderTarget = function (t) {
      var r = i.get(t),
          l = i.get(t.texture);
      t.addEventListener("dispose", G), l.__webglTexture = e.createTexture(), o.memory.textures++;
      var c = !0 === t.isWebGLCubeRenderTarget,
          d = !0 === t.isWebGLMultisampleRenderTarget,
          h = R(t) || s;

      if (!s || t.texture.format !== M || t.texture.type !== _ && t.texture.type !== v || (t.texture.format = b, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), c) {
        r.__webglFramebuffer = [];

        for (var _t93 = 0; _t93 < 6; _t93++) {
          r.__webglFramebuffer[_t93] = e.createFramebuffer();
        }
      } else if (r.__webglFramebuffer = e.createFramebuffer(), d) if (s) {
        r.__webglMultisampledFramebuffer = e.createFramebuffer(), r.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, r.__webglColorRenderbuffer);

        var _n89 = a.convert(t.texture.format),
            _i82 = a.convert(t.texture.type),
            _o22 = U(t.texture.internalFormat, _n89, _i82),
            _s13 = J(t);

        e.renderbufferStorageMultisample(36161, _s13, _o22, t.width, t.height), e.bindFramebuffer(36160, r.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), t.depthBuffer && (r.__webglDepthRenderbuffer = e.createRenderbuffer(), q(r.__webglDepthRenderbuffer, t, !0)), e.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");

      if (c) {
        n.bindTexture(34067, l.__webglTexture), X(34067, t.texture, h);

        for (var _e126 = 0; _e126 < 6; _e126++) {
          Q(r.__webglFramebuffer[_e126], t, 36064, 34069 + _e126);
        }

        I(t.texture, h) && D(34067, t.texture, t.width, t.height), n.bindTexture(34067, null);
      } else n.bindTexture(3553, l.__webglTexture), X(3553, t.texture, h), Q(r.__webglFramebuffer, t, 36064, 3553), I(t.texture, h) && D(3553, t.texture, t.width, t.height), n.bindTexture(3553, null);

      t.depthBuffer && Z(t);
    }, this.updateRenderTargetMipmap = function (e) {
      var t = e.texture;

      if (I(t, R(e) || s)) {
        var _r64 = e.isWebGLCubeRenderTarget ? 34067 : 3553,
            _a28 = i.get(t).__webglTexture;

        n.bindTexture(_r64, _a28), D(_r64, t, e.width, e.height), n.bindTexture(_r64, null);
      }
    }, this.updateMultisampleRenderTarget = function (t) {
      if (t.isWebGLMultisampleRenderTarget) if (s) {
        var _n90 = i.get(t);

        e.bindFramebuffer(36008, _n90.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, _n90.__webglFramebuffer);
        var _r65 = t.width,
            _a29 = t.height;
        var _o23 = 16384;
        t.depthBuffer && (_o23 |= 256), t.stencilBuffer && (_o23 |= 1024), e.blitFramebuffer(0, 0, _r65, _a29, 0, 0, _r65, _a29, _o23, 9728), e.bindFramebuffer(36160, _n90.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }, this.safeSetTexture2D = function (e, t) {
      e && e.isWebGLRenderTarget && (!1 === K && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), K = !0), e = e.texture), H(e, t);
    }, this.safeSetTextureCube = function (e, t) {
      e && e.isWebGLCubeRenderTarget && (!1 === $ && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), $ = !0), e = e.texture), k(e, t);
    };
  }

  function mr(e, t, n) {
    var i = n.isWebGL2;
    return {
      convert: function convert(e) {
        var n;
        if (e === m) return 5121;
        if (1017 === e) return 32819;
        if (1018 === e) return 32820;
        if (1019 === e) return 33635;
        if (1010 === e) return 5120;
        if (1011 === e) return 5122;
        if (e === g) return 5123;
        if (1013 === e) return 5124;
        if (e === x) return 5125;
        if (e === _) return 5126;
        if (e === v) return i ? 5131 : (n = t.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === e) return 6406;
        if (e === M) return 6407;
        if (e === b) return 6408;
        if (1024 === e) return 6409;
        if (1025 === e) return 6410;
        if (e === w) return 6402;
        if (e === A) return 34041;
        if (1028 === e) return 6403;
        if (1029 === e) return 36244;
        if (1030 === e) return 33319;
        if (1031 === e) return 33320;
        if (1032 === e) return 36248;
        if (1033 === e) return 36249;

        if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
          if (n = t.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
          if (33776 === e) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === e) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === e) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === e) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }

        if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
          if (n = t.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
          if (35840 === e) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === e) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === e) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === e) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }

        if (36196 === e) return n = t.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;

        if ((37492 === e || 37496 === e) && (n = t.get("WEBGL_compressed_texture_etc"), null !== n)) {
          if (37492 === e) return n.COMPRESSED_RGB8_ETC2;
          if (37496 === e) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }

        return 37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e || 37840 === e || 37841 === e || 37842 === e || 37843 === e || 37844 === e || 37845 === e || 37846 === e || 37847 === e || 37848 === e || 37849 === e || 37850 === e || 37851 === e || 37852 === e || 37853 === e ? (n = t.get("WEBGL_compressed_texture_astc"), null !== n ? e : null) : 36492 === e ? (n = t.get("EXT_texture_compression_bptc"), null !== n ? e : null) : e === y ? i ? 34042 : (n = t.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
      }
    };
  }

  function gr() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    on.call(this), this.cameras = e;
  }

  function xr() {
    Be.call(this), this.type = "Group";
  }

  function _r() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }

  function vr(e, t) {
    var n = this;
    var i = null,
        r = 1,
        a = null,
        o = "local-floor",
        s = null;
    var l = [],
        c = new Map(),
        d = new on();
    d.layers.enable(1), d.viewport = new G();
    var h = new on();
    h.layers.enable(2), h.viewport = new G();
    var u = [d, h],
        f = new gr();
    f.layers.enable(1), f.layers.enable(2);
    var p = null,
        m = null;

    function g(e) {
      var t = c.get(e.inputSource);
      t && t.dispatchEvent({
        type: e.type,
        data: e.inputSource
      });
    }

    function x() {
      c.forEach(function (e, t) {
        e.disconnect(t);
      }), c.clear(), p = null, m = null, e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), w.stop(), n.isPresenting = !1, n.dispatchEvent({
        type: "sessionend"
      });
    }

    function _(e) {
      var t = i.inputSources;

      for (var _e127 = 0; _e127 < l.length; _e127++) {
        c.set(t[_e127], l[_e127]);
      }

      for (var _t94 = 0; _t94 < e.removed.length; _t94++) {
        var _n91 = e.removed[_t94],
            _i83 = c.get(_n91);

        _i83 && (_i83.dispatchEvent({
          type: "disconnected",
          data: _n91
        }), c["delete"](_n91));
      }

      for (var _t95 = 0; _t95 < e.added.length; _t95++) {
        var _n92 = e.added[_t95],
            _i84 = c.get(_n92);

        _i84 && _i84.dispatchEvent({
          type: "connected",
          data: _n92
        });
      }
    }

    this.enabled = !1, this.isPresenting = !1, this.getController = function (e) {
      var t = l[e];
      return void 0 === t && (t = new _r(), l[e] = t), t.getTargetRaySpace();
    }, this.getControllerGrip = function (e) {
      var t = l[e];
      return void 0 === t && (t = new _r(), l[e] = t), t.getGripSpace();
    }, this.getHand = function (e) {
      var t = l[e];
      return void 0 === t && (t = new _r(), l[e] = t), t.getHandSpace();
    }, this.setFramebufferScaleFactor = function (e) {
      r = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function (e) {
      o = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function () {
      return a;
    }, this.getSession = function () {
      return i;
    }, this.setSession = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
        var _e128, _s14, _l14;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(i = e, null !== i)) {
                  _context.next = 16;
                  break;
                }

                i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", x), i.addEventListener("inputsourceschange", _);
                _e128 = t.getContextAttributes();
                _context.t0 = !0 !== _e128.xrCompatible;

                if (!_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return t.makeXRCompatible();

              case 7:
                _s14 = {
                  antialias: _e128.antialias,
                  alpha: _e128.alpha,
                  depth: _e128.depth,
                  stencil: _e128.stencil,
                  framebufferScaleFactor: r
                }, _l14 = new XRWebGLLayer(i, t, _s14);
                i.updateRenderState({
                  baseLayer: _l14
                });
                _context.next = 11;
                return i.requestReferenceSpace(o);

              case 11:
                a = _context.sent;
                w.setContext(i);
                w.start();
                n.isPresenting = !0;
                n.dispatchEvent({
                  type: "sessionstart"
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x3) {
        return _ref.apply(this, arguments);
      };
    }();
    var v = new k(),
        y = new k();

    function M(e, t) {
      null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }

    this.getCamera = function (e) {
      f.near = h.near = d.near = e.near, f.far = h.far = d.far = e.far, p === f.near && m === f.far || (i.updateRenderState({
        depthNear: f.near,
        depthFar: f.far
      }), p = f.near, m = f.far);
      var t = e.parent,
          n = f.cameras;
      M(f, t);

      for (var _e129 = 0; _e129 < n.length; _e129++) {
        M(n[_e129], t);
      }

      e.matrixWorld.copy(f.matrixWorld), e.matrix.copy(f.matrix), e.matrix.decompose(e.position, e.quaternion, e.scale);
      var r = e.children;

      for (var _e130 = 0, _t96 = r.length; _e130 < _t96; _e130++) {
        r[_e130].updateMatrixWorld(!0);
      }

      return 2 === n.length ? function (e, t, n) {
        v.setFromMatrixPosition(t.matrixWorld), y.setFromMatrixPosition(n.matrixWorld);
        var i = v.distanceTo(y),
            r = t.projectionMatrix.elements,
            a = n.projectionMatrix.elements,
            o = r[14] / (r[10] - 1),
            s = r[14] / (r[10] + 1),
            l = (r[9] + 1) / r[5],
            c = (r[9] - 1) / r[5],
            d = (r[8] - 1) / r[0],
            h = (a[8] + 1) / a[0],
            u = o * d,
            f = o * h,
            p = i / (-d + h),
            m = p * -d;
        t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(p), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();

        var g = o + p,
            x = s + p,
            _ = u - m,
            M = f + (i - m),
            b = l * s / x * g,
            w = c * s / x * g;

        e.projectionMatrix.makePerspective(_, M, b, w, g, x);
      }(f, d, h) : f.projectionMatrix.copy(d.projectionMatrix), f;
    };

    var b = null;
    var w = new mn();
    w.setAnimationLoop(function (t, n) {
      if (s = n.getViewerPose(a), null !== s) {
        var _t97 = s.views,
            _n93 = i.renderState.baseLayer;
        e.setFramebuffer(_n93.framebuffer);

        var _r66 = !1;

        _t97.length !== f.cameras.length && (f.cameras.length = 0, _r66 = !0);

        for (var _e131 = 0; _e131 < _t97.length; _e131++) {
          var _i85 = _t97[_e131],
              _a30 = _n93.getViewport(_i85),
              _o24 = u[_e131];

          _o24.matrix.fromArray(_i85.transform.matrix), _o24.projectionMatrix.fromArray(_i85.projectionMatrix), _o24.viewport.set(_a30.x, _a30.y, _a30.width, _a30.height), 0 === _e131 && f.matrix.copy(_o24.matrix), !0 === _r66 && f.cameras.push(_o24);
        }
      }

      var r = i.inputSources;

      for (var _e132 = 0; _e132 < l.length; _e132++) {
        var _t98 = l[_e132],
            _i86 = r[_e132];

        _t98.update(_i86, n, a);
      }

      b && b(t, n);
    }), this.setAnimationLoop = function (e) {
      b = e;
    }, this.dispose = function () {};
  }

  function yr(e) {
    function t(t, n) {
      t.opacity.value = n.opacity, n.color && t.diffuse.value.copy(n.color), n.emissive && t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (t.map.value = n.map), n.alphaMap && (t.alphaMap.value = n.alphaMap), n.specularMap && (t.specularMap.value = n.specularMap);
      var i = e.get(n).envMap;

      if (i) {
        t.envMap.value = i, t.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, t.reflectivity.value = n.reflectivity, t.refractionRatio.value = n.refractionRatio;

        var _r67 = e.get(i).__maxMipLevel;

        void 0 !== _r67 && (t.maxMipLevel.value = _r67);
      }

      var r, a;
      n.lightMap && (t.lightMap.value = n.lightMap, t.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (t.aoMap.value = n.aoMap, t.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), t.uv2Transform.value.copy(a.matrix));
    }

    function n(t, n) {
      t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap), n.emissiveMap && (t.emissiveMap.value = n.emissiveMap), n.bumpMap && (t.bumpMap.value = n.bumpMap, t.bumpScale.value = n.bumpScale, 1 === n.side && (t.bumpScale.value *= -1)), n.normalMap && (t.normalMap.value = n.normalMap, t.normalScale.value.copy(n.normalScale), 1 === n.side && t.normalScale.value.negate()), n.displacementMap && (t.displacementMap.value = n.displacementMap, t.displacementScale.value = n.displacementScale, t.displacementBias.value = n.displacementBias);
      e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity);
    }

    return {
      refreshFogUniforms: function refreshFogUniforms(e, t) {
        e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density);
      },
      refreshMaterialUniforms: function refreshMaterialUniforms(e, i, r, a) {
        i.isMeshBasicMaterial ? t(e, i) : i.isMeshLambertMaterial ? (t(e, i), function (e, t) {
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
        }(e, i)) : i.isMeshToonMaterial ? (t(e, i), function (e, t) {
          t.gradientMap && (e.gradientMap.value = t.gradientMap);
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
          t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1));
          t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate());
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        }(e, i)) : i.isMeshPhongMaterial ? (t(e, i), function (e, t) {
          e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
          t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1));
          t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate());
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        }(e, i)) : i.isMeshStandardMaterial ? (t(e, i), i.isMeshPhysicalMaterial ? function (e, t) {
          n(e, t), e.reflectivity.value = t.reflectivity, e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.sheen && e.sheen.value.copy(t.sheen);
          t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap);
          t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap);
          t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, 1 === t.side && e.clearcoatNormalScale.value.negate());
          e.transmission.value = t.transmission, t.transmissionMap && (e.transmissionMap.value = t.transmissionMap);
        }(e, i) : n(e, i)) : i.isMeshMatcapMaterial ? (t(e, i), function (e, t) {
          t.matcap && (e.matcap.value = t.matcap);
          t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1));
          t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate());
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        }(e, i)) : i.isMeshDepthMaterial ? (t(e, i), function (e, t) {
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        }(e, i)) : i.isMeshDistanceMaterial ? (t(e, i), function (e, t) {
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
          e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance;
        }(e, i)) : i.isMeshNormalMaterial ? (t(e, i), function (e, t) {
          t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1));
          t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate());
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
        }(e, i)) : i.isLineBasicMaterial ? (function (e, t) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity;
        }(e, i), i.isLineDashedMaterial && function (e, t) {
          e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
        }(e, i)) : i.isPointsMaterial ? function (e, t, n, i) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * n, e.scale.value = .5 * i, t.map && (e.map.value = t.map);
          t.alphaMap && (e.alphaMap.value = t.alphaMap);
          var r;
          t.map ? r = t.map : t.alphaMap && (r = t.alphaMap);
          void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix));
        }(e, i, r, a) : i.isSpriteMaterial ? function (e, t) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map);
          t.alphaMap && (e.alphaMap.value = t.alphaMap);
          var n;
          t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix));
        }(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color), e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      }
    };
  }

  function Mr(e) {
    var t = void 0 !== (e = e || {}).canvas ? e.canvas : function () {
      var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      return e.style.display = "block", e;
    }(),
        n = void 0 !== e.context ? e.context : null,
        i = void 0 !== e.alpha && e.alpha,
        r = void 0 === e.depth || e.depth,
        a = void 0 === e.stencil || e.stencil,
        o = void 0 !== e.antialias && e.antialias,
        s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
        l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
        c = void 0 !== e.powerPreference ? e.powerPreference : "default",
        d = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
    var h = null,
        u = null;
    var f = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = S, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var p = this;
    var g = !1,
        x = null,
        y = 0,
        M = 0,
        w = null,
        A = null,
        T = -1,
        L = null;
    var E = new G(),
        P = new G();
    var F = null,
        R = t.width,
        I = t.height,
        D = 1,
        U = null,
        O = null;
    var z = new G(0, 0, R, I),
        B = new G(0, 0, R, I);
    var H = !1;
    var W = new pn();
    var V = !1,
        X = !1;
    var Y = new me(),
        j = new k(),
        Q = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };

    function q() {
      return null === w ? D : 1;
    }

    var Z,
        J,
        K,
        $,
        ee,
        te,
        ne,
        ie,
        re,
        ae,
        oe,
        se,
        le,
        ce,
        de,
        he,
        ue,
        fe,
        pe,
        ge,
        xe,
        _e = n;

    function ve(e, n) {
      for (var _i87 = 0; _i87 < e.length; _i87++) {
        var _r68 = e[_i87],
            _a31 = t.getContext(_r68, n);

        if (null !== _a31) return _a31;
      }

      return null;
    }

    try {
      var _e133 = {
        alpha: i,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: d
      };

      if (t.addEventListener("webglcontextlost", we, !1), t.addEventListener("webglcontextrestored", Ae, !1), null === _e) {
        var _t99 = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === p.isWebGL1Renderer && _t99.shift(), _e = ve(_t99, _e133), null === _e) throw ve(_t99) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }

      void 0 === _e.getShaderPrecisionFormat && (_e.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (e) {
      throw console.error("THREE.WebGLRenderer: " + e.message), e;
    }

    function ye() {
      Z = new Ln(_e), J = new An(_e, Z, e), Z.init(J), ge = new mr(_e, Z, J), K = new fr(_e, Z, J), K.scissor(P.copy(B).multiplyScalar(D).floor()), K.viewport(E.copy(z).multiplyScalar(D).floor()), $ = new Fn(_e), ee = new $i(), te = new pr(_e, Z, K, ee, J, ge, $), ne = new Tn(p), ie = new gn(_e, J), xe = new bn(_e, Z, ie, J), re = new En(_e, ie, $, xe), ae = new In(_e, re, ie, $), ue = new Rn(_e), de = new Sn(ee), oe = new Ki(p, ne, Z, J, xe, de), se = new yr(ee), le = new ir(ee), ce = new cr(Z, J), he = new Mn(p, ne, K, ae, s), fe = new wn(_e, Z, $, J), pe = new Pn(_e, Z, $, J), $.programs = oe.programs, p.capabilities = J, p.extensions = Z, p.properties = ee, p.renderLists = le, p.state = K, p.info = $;
    }

    ye();
    var Me = new vr(p, _e);
    this.xr = Me;
    var be = new ur(p, ae, J.maxTextureSize);

    function we(e) {
      e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0;
    }

    function Ae() {
      console.log("THREE.WebGLRenderer: Context Restored."), g = !1, ye();
    }

    function Se(e) {
      var t = e.target;
      t.removeEventListener("dispose", Se), function (e) {
        Te(e), ee.remove(e);
      }(t);
    }

    function Te(e) {
      var t = ee.get(e).program;
      void 0 !== t && oe.releaseProgram(t);
    }

    this.shadowMap = be, this.getContext = function () {
      return _e;
    }, this.getContextAttributes = function () {
      return _e.getContextAttributes();
    }, this.forceContextLoss = function () {
      var e = Z.get("WEBGL_lose_context");
      e && e.loseContext();
    }, this.forceContextRestore = function () {
      var e = Z.get("WEBGL_lose_context");
      e && e.restoreContext();
    }, this.getPixelRatio = function () {
      return D;
    }, this.setPixelRatio = function (e) {
      void 0 !== e && (D = e, this.setSize(R, I, !1));
    }, this.getSize = function (e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), e = new C()), e.set(R, I);
    }, this.setSize = function (e, n, i) {
      Me.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = e, I = n, t.width = Math.floor(e * D), t.height = Math.floor(n * D), !1 !== i && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n));
    }, this.getDrawingBufferSize = function (e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), e = new C()), e.set(R * D, I * D).floor();
    }, this.setDrawingBufferSize = function (e, n, i) {
      R = e, I = n, D = i, t.width = Math.floor(e * i), t.height = Math.floor(n * i), this.setViewport(0, 0, e, n);
    }, this.getCurrentViewport = function (e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), e = new G()), e.copy(E);
    }, this.getViewport = function (e) {
      return e.copy(z);
    }, this.setViewport = function (e, t, n, i) {
      e.isVector4 ? z.set(e.x, e.y, e.z, e.w) : z.set(e, t, n, i), K.viewport(E.copy(z).multiplyScalar(D).floor());
    }, this.getScissor = function (e) {
      return e.copy(B);
    }, this.setScissor = function (e, t, n, i) {
      e.isVector4 ? B.set(e.x, e.y, e.z, e.w) : B.set(e, t, n, i), K.scissor(P.copy(B).multiplyScalar(D).floor());
    }, this.getScissorTest = function () {
      return H;
    }, this.setScissorTest = function (e) {
      K.setScissorTest(H = e);
    }, this.setOpaqueSort = function (e) {
      U = e;
    }, this.setTransparentSort = function (e) {
      O = e;
    }, this.getClearColor = function (e) {
      return void 0 === e && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), e = new dt()), e.copy(he.getClearColor());
    }, this.setClearColor = function () {
      he.setClearColor.apply(he, arguments);
    }, this.getClearAlpha = function () {
      return he.getClearAlpha();
    }, this.setClearAlpha = function () {
      he.setClearAlpha.apply(he, arguments);
    }, this.clear = function (e, t, n) {
      var i = 0;
      (void 0 === e || e) && (i |= 16384), (void 0 === t || t) && (i |= 256), (void 0 === n || n) && (i |= 1024), _e.clear(i);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      t.removeEventListener("webglcontextlost", we, !1), t.removeEventListener("webglcontextrestored", Ae, !1), le.dispose(), ce.dispose(), ee.dispose(), ne.dispose(), ae.dispose(), xe.dispose(), Me.dispose(), Ee.stop();
    }, this.renderBufferImmediate = function (e, t) {
      xe.initAttributes();
      var n = ee.get(e);
      e.hasPositions && !n.position && (n.position = _e.createBuffer()), e.hasNormals && !n.normal && (n.normal = _e.createBuffer()), e.hasUvs && !n.uv && (n.uv = _e.createBuffer()), e.hasColors && !n.color && (n.color = _e.createBuffer());
      var i = t.getAttributes();
      e.hasPositions && (_e.bindBuffer(34962, n.position), _e.bufferData(34962, e.positionArray, 35048), xe.enableAttribute(i.position), _e.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), e.hasNormals && (_e.bindBuffer(34962, n.normal), _e.bufferData(34962, e.normalArray, 35048), xe.enableAttribute(i.normal), _e.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (_e.bindBuffer(34962, n.uv), _e.bufferData(34962, e.uvArray, 35048), xe.enableAttribute(i.uv), _e.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), e.hasColors && (_e.bindBuffer(34962, n.color), _e.bufferData(34962, e.colorArray, 35048), xe.enableAttribute(i.color), _e.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), xe.disableUnusedAttributes(), _e.drawArrays(4, 0, e.count), e.count = 0;
    }, this.renderBufferDirect = function (e, t, n, i, r, a) {
      null === t && (t = Q);
      var o = r.isMesh && r.matrixWorld.determinant() < 0,
          s = Re(e, t, i, r);
      K.setMaterial(i, o);
      var l = n.index;
      var c = n.attributes.position;

      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;

      var d,
          h = 1;
      !0 === i.wireframe && (l = re.getWireframeAttribute(n), h = 2), (i.morphTargets || i.morphNormals) && ue.update(r, n, i, s), xe.setup(r, i, s, n, l);
      var u = fe;
      null !== l && (d = ie.get(l), u = pe, u.setIndex(d));

      var f = null !== l ? l.count : c.count,
          p = n.drawRange.start * h,
          m = n.drawRange.count * h,
          g = null !== a ? a.start * h : 0,
          x = null !== a ? a.count * h : 1 / 0,
          _ = Math.max(p, g),
          v = Math.min(f, p + m, g + x) - 1,
          y = Math.max(0, v - _ + 1);

      if (0 !== y) {
        if (r.isMesh) !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * q()), u.setMode(1)) : u.setMode(4);else if (r.isLine) {
          var _e134 = i.linewidth;
          void 0 === _e134 && (_e134 = 1), K.setLineWidth(_e134 * q()), r.isLineSegments ? u.setMode(1) : r.isLineLoop ? u.setMode(2) : u.setMode(3);
        } else r.isPoints ? u.setMode(0) : r.isSprite && u.setMode(4);
        if (r.isInstancedMesh) u.renderInstances(_, y, r.count);else if (n.isInstancedBufferGeometry) {
          var _e135 = Math.min(n.instanceCount, n._maxInstanceCount);

          u.renderInstances(_, y, _e135);
        } else u.render(_, y);
      }
    }, this.compile = function (e, t) {
      u = ce.get(e), u.init(), e.traverseVisible(function (e) {
        e.isLight && e.layers.test(t.layers) && (u.pushLight(e), e.castShadow && u.pushShadow(e));
      }), u.setupLights();
      var n = new WeakMap();
      e.traverse(function (t) {
        var i = t.material;
        if (i) if (Array.isArray(i)) for (var _r69 = 0; _r69 < i.length; _r69++) {
          var _a32 = i[_r69];
          !1 === n.has(_a32) && (Ce(_a32, e, t), n.set(_a32));
        } else !1 === n.has(i) && (Ce(i, e, t), n.set(i));
      });
    };
    var Le = null;
    var Ee = new mn();

    function Pe(e, t, n, i) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers)) if (e.isGroup) n = e.renderOrder;else if (e.isLOD) !0 === e.autoUpdate && e.update(t);else if (e.isLight) u.pushLight(e), e.castShadow && u.pushShadow(e);else if (e.isSprite) {
        if (!e.frustumCulled || W.intersectsSprite(e)) {
          i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Y);

          var _t100 = ae.update(e),
              _r70 = e.material;

          _r70.visible && h.push(e, _t100, _r70, n, j.z, null);
        }
      } else if (e.isImmediateRenderObject) i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Y), h.push(e, null, e.material, n, j.z, null);else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== $.render.frame && (e.skeleton.update(), e.skeleton.frame = $.render.frame), !e.frustumCulled || W.intersectsObject(e))) {
        i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Y);

        var _t101 = ae.update(e),
            _r71 = e.material;

        if (Array.isArray(_r71)) {
          var _i88 = _t101.groups;

          for (var _a33 = 0, _o25 = _i88.length; _a33 < _o25; _a33++) {
            var _o26 = _i88[_a33],
                _s15 = _r71[_o26.materialIndex];
            _s15 && _s15.visible && h.push(e, _t101, _s15, n, j.z, _o26);
          }
        } else _r71.visible && h.push(e, _t101, _r71, n, j.z, null);
      }
      var r = e.children;

      for (var _e136 = 0, _a34 = r.length; _e136 < _a34; _e136++) {
        Pe(r[_e136], t, n, i);
      }
    }

    function Fe(e, t, n) {
      var i = !0 === t.isScene ? t.overrideMaterial : null;

      for (var _r72 = 0, _a35 = e.length; _r72 < _a35; _r72++) {
        var _a36 = e[_r72],
            _o27 = _a36.object,
            _s16 = _a36.geometry,
            _l15 = null === i ? _a36.material : i,
            _c12 = _a36.group;

        if (n.isArrayCamera) {
          var _e137 = n.cameras;

          for (var _n94 = 0, _i89 = _e137.length; _n94 < _i89; _n94++) {
            var _i90 = _e137[_n94];
            _o27.layers.test(_i90.layers) && (K.viewport(E.copy(_i90.viewport)), u.setupLightsView(_i90), Ne(_o27, t, _i90, _s16, _l15, _c12));
          }
        } else Ne(_o27, t, n, _s16, _l15, _c12);
      }
    }

    function Ne(e, t, n, i, r, a) {
      if (e.onBeforeRender(p, t, n, i, r, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
        var _i91 = Re(n, t, r, e);

        K.setMaterial(r), xe.reset(), function (e, t) {
          e.render(function (e) {
            p.renderBufferImmediate(e, t);
          });
        }(e, _i91);
      } else p.renderBufferDirect(n, t, i, r, e, a);

      e.onAfterRender(p, t, n, i, r, a);
    }

    function Ce(e, t, n) {
      !0 !== t.isScene && (t = Q);
      var i = ee.get(e),
          r = u.state.lights,
          a = u.state.shadowsArray,
          o = r.state.version,
          s = oe.getParameters(e, r.state, a, t, n),
          l = oe.getProgramCacheKey(s);
      var c = i.program,
          d = !0;
      if (i.environment = e.isMeshStandardMaterial ? t.environment : null, i.fog = t.fog, i.envMap = ne.get(e.envMap || i.environment), void 0 === c) e.addEventListener("dispose", Se);else if (c.cacheKey !== l) Te(e);else if (i.lightsStateVersion !== o) d = !1;else {
        if (void 0 !== s.shaderID) return;
        d = !1;
      }
      d && (s.uniforms = oe.getUniforms(e), e.onBeforeCompile(s, p), c = oe.acquireProgram(s, l), i.program = c, i.uniforms = s.uniforms, i.outputEncoding = s.outputEncoding);
      var h = i.uniforms;
      (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = de.numPlanes, i.numIntersection = de.numIntersection, h.clippingPlanes = de.uniform), i.needsLights = function (e) {
        return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights;
      }(e), i.lightsStateVersion = o, i.needsLights && (h.ambientLightColor.value = r.state.ambient, h.lightProbe.value = r.state.probe, h.directionalLights.value = r.state.directional, h.directionalLightShadows.value = r.state.directionalShadow, h.spotLights.value = r.state.spot, h.spotLightShadows.value = r.state.spotShadow, h.rectAreaLights.value = r.state.rectArea, h.ltc_1.value = r.state.rectAreaLTC1, h.ltc_2.value = r.state.rectAreaLTC2, h.pointLights.value = r.state.point, h.pointLightShadows.value = r.state.pointShadow, h.hemisphereLights.value = r.state.hemi, h.directionalShadowMap.value = r.state.directionalShadowMap, h.directionalShadowMatrix.value = r.state.directionalShadowMatrix, h.spotShadowMap.value = r.state.spotShadowMap, h.spotShadowMatrix.value = r.state.spotShadowMatrix, h.pointShadowMap.value = r.state.pointShadowMap, h.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var f = i.program.getUniforms(),
          m = Ni.seqWithValue(f.seq, h);
      i.uniformsList = m;
    }

    function Re(e, t, n, i) {
      !0 !== t.isScene && (t = Q), te.resetTextureUnits();
      var r = t.fog,
          a = n.isMeshStandardMaterial ? t.environment : null,
          o = null === w ? p.outputEncoding : w.texture.encoding,
          s = ne.get(n.envMap || a),
          l = ee.get(n),
          c = u.state.lights;

      if (!0 === V && (!0 === X || e !== L)) {
        var _t102 = e === L && n.id === T;

        de.setState(n, e, _t102);
      }

      n.version === l.__version ? n.fog && l.fog !== r || l.environment !== a || l.needsLights && l.lightsStateVersion !== c.state.version ? Ce(n, t, i) : void 0 === l.numClippingPlanes || l.numClippingPlanes === de.numPlanes && l.numIntersection === de.numIntersection ? (l.outputEncoding !== o || l.envMap !== s) && Ce(n, t, i) : Ce(n, t, i) : (Ce(n, t, i), l.__version = n.version);
      var d = !1,
          h = !1,
          f = !1;
      var m = l.program,
          g = m.getUniforms(),
          x = l.uniforms;

      if (K.useProgram(m.program) && (d = !0, h = !0, f = !0), n.id !== T && (T = n.id, h = !0), d || L !== e) {
        if (g.setValue(_e, "projectionMatrix", e.projectionMatrix), J.logarithmicDepthBuffer && g.setValue(_e, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), L !== e && (L = e, h = !0, f = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var _t103 = g.map.cameraPosition;
          void 0 !== _t103 && _t103.setValue(_e, j.setFromMatrixPosition(e.matrixWorld));
        }

        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && g.setValue(_e, "isOrthographic", !0 === e.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && g.setValue(_e, "viewMatrix", e.matrixWorldInverse);
      }

      if (n.skinning) {
        g.setOptional(_e, i, "bindMatrix"), g.setOptional(_e, i, "bindMatrixInverse");
        var _e138 = i.skeleton;

        if (_e138) {
          var _t104 = _e138.bones;

          if (J.floatVertexTextures) {
            if (null === _e138.boneTexture) {
              var _n95 = Math.sqrt(4 * _t104.length);

              _n95 = N.ceilPowerOfTwo(_n95), _n95 = Math.max(_n95, 4);

              var _i92 = new Float32Array(_n95 * _n95 * 4);

              _i92.set(_e138.boneMatrices);

              var _r73 = new hn(_i92, _n95, _n95, b, _);

              _e138.boneMatrices = _i92, _e138.boneTexture = _r73, _e138.boneTextureSize = _n95;
            }

            g.setValue(_e, "boneTexture", _e138.boneTexture, te), g.setValue(_e, "boneTextureSize", _e138.boneTextureSize);
          } else g.setOptional(_e, _e138, "boneMatrices");
        }
      }

      var v, y;
      return (h || l.receiveShadow !== i.receiveShadow) && (l.receiveShadow = i.receiveShadow, g.setValue(_e, "receiveShadow", i.receiveShadow)), h && (g.setValue(_e, "toneMappingExposure", p.toneMappingExposure), l.needsLights && (y = f, (v = x).ambientLightColor.needsUpdate = y, v.lightProbe.needsUpdate = y, v.directionalLights.needsUpdate = y, v.directionalLightShadows.needsUpdate = y, v.pointLights.needsUpdate = y, v.pointLightShadows.needsUpdate = y, v.spotLights.needsUpdate = y, v.spotLightShadows.needsUpdate = y, v.rectAreaLights.needsUpdate = y, v.hemisphereLights.needsUpdate = y), r && n.fog && se.refreshFogUniforms(x, r), se.refreshMaterialUniforms(x, n, D, I), Ni.upload(_e, l.uniformsList, x, te)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Ni.upload(_e, l.uniformsList, x, te), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && g.setValue(_e, "center", i.center), g.setValue(_e, "modelViewMatrix", i.modelViewMatrix), g.setValue(_e, "normalMatrix", i.normalMatrix), g.setValue(_e, "modelMatrix", i.matrixWorld), m;
    }

    Ee.setAnimationLoop(function (e) {
      Me.isPresenting || Le && Le(e);
    }), "undefined" != typeof window && Ee.setContext(window), this.setAnimationLoop = function (e) {
      Le = e, Me.setAnimationLoop(e), null === e ? Ee.stop() : Ee.start();
    }, this.render = function (e, t) {
      var n, i;
      if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== t && !0 !== t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === g) return;
      xe.resetDefaultState(), T = -1, L = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), !0 === Me.enabled && !0 === Me.isPresenting && (t = Me.getCamera(t)), !0 === e.isScene && e.onBeforeRender(p, e, t, n || w), u = ce.get(e, f.length), u.init(), f.push(u), Y.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), W.setFromProjectionMatrix(Y), X = this.localClippingEnabled, V = de.init(this.clippingPlanes, X, t), h = le.get(e, t), h.init(), Pe(e, t, 0, p.sortObjects), h.finish(), !0 === p.sortObjects && h.sort(U, O), !0 === V && de.beginShadows();
      var r = u.state.shadowsArray;
      be.render(r, e, t), u.setupLights(), u.setupLightsView(t), !0 === V && de.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), he.render(h, e, t, i);
      var a = h.opaque,
          o = h.transparent;
      a.length > 0 && Fe(a, e, t), o.length > 0 && Fe(o, e, t), !0 === e.isScene && e.onAfterRender(p, e, t), null !== w && (te.updateRenderTargetMipmap(w), te.updateMultisampleRenderTarget(w)), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), f.pop(), u = f.length > 0 ? f[f.length - 1] : null, h = null;
    }, this.setFramebuffer = function (e) {
      x !== e && null === w && _e.bindFramebuffer(36160, e), x = e;
    }, this.getActiveCubeFace = function () {
      return y;
    }, this.getActiveMipmapLevel = function () {
      return M;
    }, this.getRenderList = function () {
      return h;
    }, this.setRenderList = function (e) {
      h = e;
    }, this.getRenderTarget = function () {
      return w;
    }, this.setRenderTarget = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      w = e, y = t, M = n, e && void 0 === ee.get(e).__webglFramebuffer && te.setupRenderTarget(e);
      var i = x,
          r = !1;

      if (e) {
        var _n96 = ee.get(e).__webglFramebuffer;

        e.isWebGLCubeRenderTarget ? (i = _n96[t], r = !0) : i = e.isWebGLMultisampleRenderTarget ? ee.get(e).__webglMultisampledFramebuffer : _n96, E.copy(e.viewport), P.copy(e.scissor), F = e.scissorTest;
      } else E.copy(z).multiplyScalar(D).floor(), P.copy(B).multiplyScalar(D).floor(), F = H;

      if (A !== i && (_e.bindFramebuffer(36160, i), A = i), K.viewport(E), K.scissor(P), K.setScissorTest(F), r) {
        var _i93 = ee.get(e.texture);

        _e.framebufferTexture2D(36160, 36064, 34069 + t, _i93.__webglTexture, n);
      }
    }, this.readRenderTargetPixels = function (e, t, n, i, r, a, o) {
      if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");

      var s = ee.get(e).__webglFramebuffer;

      if (e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
        var _o28 = !1;

        s !== A && (_e.bindFramebuffer(36160, s), _o28 = !0);

        try {
          var _s17 = e.texture,
              _l16 = _s17.format,
              _c13 = _s17.type;
          if (_l16 !== b && ge.convert(_l16) !== _e.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");

          var _d9 = _c13 === v && (Z.has("EXT_color_buffer_half_float") || J.isWebGL2 && Z.has("EXT_color_buffer_float"));

          if (!(_c13 === m || ge.convert(_c13) === _e.getParameter(35738) || _c13 === _ && (J.isWebGL2 || Z.has("OES_texture_float") || Z.has("WEBGL_color_buffer_float")) || _d9)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          36053 === _e.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && _e.readPixels(t, n, i, r, ge.convert(_l16), ge.convert(_c13), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        } finally {
          _o28 && _e.bindFramebuffer(36160, A);
        }
      }
    }, this.copyFramebufferToTexture = function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          a = Math.floor(t.image.height * i),
          o = ge.convert(t.format);
      te.setTexture2D(t, 0), _e.copyTexImage2D(3553, n, o, e.x, e.y, r, a, 0), K.unbindTexture();
    }, this.copyTextureToTexture = function (e, t, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var r = t.image.width,
          a = t.image.height,
          o = ge.convert(n.format),
          s = ge.convert(n.type);
      te.setTexture2D(n, 0), _e.pixelStorei(37440, n.flipY), _e.pixelStorei(37441, n.premultiplyAlpha), _e.pixelStorei(3317, n.unpackAlignment), t.isDataTexture ? _e.texSubImage2D(3553, i, e.x, e.y, r, a, o, s, t.image.data) : t.isCompressedTexture ? _e.compressedTexSubImage2D(3553, i, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : _e.texSubImage2D(3553, i, e.x, e.y, o, s, t.image), 0 === i && n.generateMipmaps && _e.generateMipmap(3553), K.unbindTexture();
    }, this.initTexture = function (e) {
      te.setTexture2D(e, 0), K.unbindTexture();
    }, this.resetState = function () {
      K.reset(), xe.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  gr.prototype = Object.assign(Object.create(on.prototype), {
    constructor: gr,
    isArrayCamera: !0
  }), xr.prototype = Object.assign(Object.create(Be.prototype), {
    constructor: xr,
    isGroup: !0
  }), Object.assign(_r.prototype, {
    constructor: _r,
    getHandSpace: function getHandSpace() {
      return null === this._hand && (this._hand = new xr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
        pinching: !1
      }), this._hand;
    },
    getTargetRaySpace: function getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new xr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
    },
    getGripSpace: function getGripSpace() {
      return null === this._grip && (this._grip = new xr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
    },
    dispatchEvent: function dispatchEvent(e) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this;
    },
    disconnect: function disconnect(e) {
      return this.dispatchEvent({
        type: "disconnected",
        data: e
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
    },
    update: function update(e, t, n) {
      var i = null,
          r = null,
          a = null;
      var o = this._targetRay,
          s = this._grip,
          l = this._hand;
      if (e && "visible-blurred" !== t.session.visibilityState) if (l && e.hand) {
        a = !0;

        var _iterator = _createForOfIteratorHelper(e.hand.values()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i95 = _step.value;

            var _e139 = t.getJointPose(_i95, n);

            if (void 0 === l.joints[_i95.jointName]) {
              var _e140 = new xr();

              _e140.matrixAutoUpdate = !1, _e140.visible = !1, l.joints[_i95.jointName] = _e140, l.add(_e140);
            }

            var _r75 = l.joints[_i95.jointName];
            null !== _e139 && (_r75.matrix.fromArray(_e139.transform.matrix), _r75.matrix.decompose(_r75.position, _r75.rotation, _r75.scale), _r75.jointRadius = _e139.radius), _r75.visible = null !== _e139;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _i94 = l.joints["index-finger-tip"],
            _r74 = l.joints["thumb-tip"],
            _o29 = _i94.position.distanceTo(_r74.position),
            _s18 = .02,
            _c14 = .005;

        l.inputState.pinching && _o29 > _s18 + _c14 ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && _o29 <= _s18 - _c14 && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else null !== o && (i = t.getPose(e.targetRaySpace, n), null !== i && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), null !== s && e.gripSpace && (r = t.getPose(e.gripSpace, n), null !== r && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale)));
      return null !== o && (o.visible = null !== i), null !== s && (s.visible = null !== r), null !== l && (l.visible = null !== a), this;
    }
  }), Object.assign(vr.prototype, E.prototype);

  var br = /*#__PURE__*/function (_Be) {
    _inherits(br, _Be);

    var _super5 = _createSuper(br);

    function br() {
      var _this5;

      _classCallCheck(this, br);

      _this5 = _super5.call(this), Object.defineProperty(_assertThisInitialized(_this5), "isScene", {
        value: !0
      }), _this5.type = "Scene", _this5.background = null, _this5.environment = null, _this5.fog = null, _this5.overrideMaterial = null, _this5.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: _assertThisInitialized(_this5)
      }));
      return _this5;
    }

    _createClass(br, [{
      key: "copy",
      value: function copy(e, t) {
        return _get(_getPrototypeOf(br.prototype), "copy", this).call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(e) {
        var t = _get(_getPrototypeOf(br.prototype), "toJSON", this).call(this, e);

        return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.environment && (t.object.environment = this.environment.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t;
      }
    }]);

    return br;
  }(Be);

  function wr() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .1;
    var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2e3;
    an.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }

  wr.prototype = Object.assign(Object.create(an.prototype), {
    constructor: wr,
    isOrthographicCamera: !0,
    copy: function copy(e, t) {
      return an.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this;
    },
    setViewOffset: function setViewOffset(e, t, n, i, r, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var e = (this.right - this.left) / (2 * this.zoom),
          t = (this.top - this.bottom) / (2 * this.zoom),
          n = (this.right + this.left) / 2,
          i = (this.top + this.bottom) / 2;
      var r = n - e,
          a = n + e,
          o = i + t,
          s = i - t;

      if (null !== this.view && this.view.enabled) {
        var _e141 = (this.right - this.left) / this.view.fullWidth / this.zoom,
            _t105 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;

        r += _e141 * this.view.offsetX, a = r + _e141 * this.view.width, o -= _t105 * this.view.offsetY, s = o - _t105 * this.view.height;
      }

      this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    },
    toJSON: function toJSON(e) {
      var t = Be.prototype.toJSON.call(this, e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t;
    }
  });

  var Ar = /*#__PURE__*/function () {
    function Ar(e) {
      _classCallCheck(this, Ar);

      this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }

    _createClass(Ar, [{
      key: "start",
      value: function start() {
        this.startTime = Sr(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
      }
    }, {
      key: "getElapsedTime",
      value: function getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
      }
    }, {
      key: "getDelta",
      value: function getDelta() {
        var e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;

        if (this.running) {
          var _t106 = Sr();

          e = (_t106 - this.oldTime) / 1e3, this.oldTime = _t106, this.elapsedTime += e;
        }

        return e;
      }
    }]);

    return Ar;
  }();

  function Sr() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }

  var Tr = /*#__PURE__*/function () {
    function Tr() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Tr);

      return this.radius = e, this.phi = t, this.theta = n, this;
    }

    _createClass(Tr, [{
      key: "set",
      value: function set(e, t, n) {
        return this.radius = e, this.phi = t, this.theta = n, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(e) {
        return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
      }
    }, {
      key: "makeSafe",
      value: function makeSafe() {
        var e = 1e-6;
        return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(N.clamp(t / this.radius, -1, 1))), this;
      }
    }]);

    return Tr;
  }();

  function Lr(e, t, n, i, r, a, o, s) {
    var l = function l(e, t, n, i) {
      return [new C(e / o, 1 - i / s), new C(n / o, 1 - i / s), new C(n / o, 1 - t / s), new C(e / o, 1 - t / s)];
    },
        c = l(t + a, n, t + i + a, n + a),
        d = l(t + i + a, n, t + 2 * i + a, n + a),
        h = l(t, n + a, t + a, n + a + r),
        u = l(t + a, n + a, t + i + a, n + a + r),
        f = l(t + i + a, n + a, t + i + 2 * a, n + r + a),
        p = l(t + i + 2 * a, n + a, t + 2 * i + 2 * a, n + r + a),
        m = e.attributes.uv;

    m.copyVector2sArray([f[3], f[2], f[0], f[1], h[3], h[2], h[0], h[1], c[3], c[2], c[0], c[1], d[0], d[1], d[3], d[2], u[3], u[2], u[0], u[1], p[3], p[2], p[0], p[1]]), m.needsUpdate = !0;
  }

  function Er(e, t, n, i, r, a) {
    Lr(e, t, n, i, r, a, 64, 64);
  }

  function Pr(e, t, n, i, r, a) {
    Lr(e, t, n, i, r, a, 64, 32);
  }

  var Fr = /*#__PURE__*/function (_xr) {
    _inherits(Fr, _xr);

    var _super6 = _createSuper(Fr);

    function Fr(e, t) {
      var _this6;

      _classCallCheck(this, Fr);

      _this6 = _super6.call(this), _this6.innerLayer = e, _this6.outerLayer = t, e.name = "inner", t.name = "outer";
      return _this6;
    }

    return Fr;
  }(xr);

  var Nr = /*#__PURE__*/function (_xr2) {
    _inherits(Nr, _xr2);

    var _super7 = _createSuper(Nr);

    function Nr(e) {
      var _this7;

      _classCallCheck(this, Nr);

      _this7 = _super7.call(this), _this7.modelListeners = [], _this7.slim = !1;
      var t = new ht({
        map: e,
        side: 0
      }),
          n = new ht({
        map: e,
        side: 2,
        transparent: !0,
        alphaTest: 1e-5
      }),
          i = t.clone();
      i.polygonOffset = !0, i.polygonOffsetFactor = 1, i.polygonOffsetUnits = 1;
      var r = n.clone();
      r.polygonOffset = !0, r.polygonOffsetFactor = 1, r.polygonOffsetUnits = 1;
      var a = new $t(8, 8, 8);
      Er(a, 0, 0, 8, 8, 8);
      var o = new Jt(a, t),
          s = new $t(9, 9, 9);
      Er(s, 32, 0, 8, 8, 8);
      var l = new Jt(s, n);
      _this7.head = new Fr(o, l), _this7.head.name = "head", _this7.head.add(o, l), _this7.head.position.y = 4, _this7.add(_this7.head);
      var c = new $t(8, 12, 4);
      Er(c, 16, 16, 8, 12, 4);
      var d = new Jt(c, t),
          h = new $t(8.5, 12.5, 4.5);
      Er(h, 16, 32, 8, 12, 4);
      var u = new Jt(h, n);
      _this7.body = new Fr(d, u), _this7.body.name = "body", _this7.body.add(d, u), _this7.body.position.y = -6, _this7.add(_this7.body);
      var f = new $t(),
          p = new Jt(f, i);

      _this7.modelListeners.push(function () {
        p.scale.x = _this7.slim ? 3 : 4, p.scale.y = 12, p.scale.z = 4, Er(f, 40, 16, _this7.slim ? 3 : 4, 12, 4);
      });

      var m = new $t(),
          g = new Jt(m, r);

      _this7.modelListeners.push(function () {
        g.scale.x = _this7.slim ? 3.5 : 4.5, g.scale.y = 12.5, g.scale.z = 4.5, Er(m, 40, 32, _this7.slim ? 3 : 4, 12, 4);
      });

      var x = new xr();
      x.add(p, g), _this7.modelListeners.push(function () {
        x.position.x = _this7.slim ? -.5 : -1;
      }), x.position.y = -4, _this7.rightArm = new Fr(p, g), _this7.rightArm.name = "rightArm", _this7.rightArm.add(x), _this7.rightArm.position.x = -5, _this7.rightArm.position.y = -2, _this7.add(_this7.rightArm);

      var _ = new $t(),
          v = new Jt(_, i);

      _this7.modelListeners.push(function () {
        v.scale.x = _this7.slim ? 3 : 4, v.scale.y = 12, v.scale.z = 4, Er(_, 32, 48, _this7.slim ? 3 : 4, 12, 4);
      });

      var y = new $t(),
          M = new Jt(y, r);

      _this7.modelListeners.push(function () {
        M.scale.x = _this7.slim ? 3.5 : 4.5, M.scale.y = 12.5, M.scale.z = 4.5, Er(y, 48, 48, _this7.slim ? 3 : 4, 12, 4);
      });

      var b = new xr();
      b.add(v, M), _this7.modelListeners.push(function () {
        b.position.x = _this7.slim ? .5 : 1;
      }), b.position.y = -4, _this7.leftArm = new Fr(v, M), _this7.leftArm.name = "leftArm", _this7.leftArm.add(b), _this7.leftArm.position.x = 5, _this7.leftArm.position.y = -2, _this7.add(_this7.leftArm);
      var w = new $t(4, 12, 4);
      Er(w, 0, 16, 4, 12, 4);
      var A = new Jt(w, i),
          S = new $t(4.5, 12.5, 4.5);
      Er(S, 0, 32, 4, 12, 4);
      var T = new Jt(S, r),
          L = new xr();
      L.add(A, T), L.position.y = -6, _this7.rightLeg = new Fr(A, T), _this7.rightLeg.name = "rightLeg", _this7.rightLeg.add(L), _this7.rightLeg.position.x = -1.9, _this7.rightLeg.position.y = -12, _this7.rightLeg.position.z = -.1, _this7.add(_this7.rightLeg);
      var E = new $t(4, 12, 4);
      Er(E, 16, 48, 4, 12, 4);
      var P = new Jt(E, i),
          F = new $t(4.5, 12.5, 4.5);
      Er(F, 0, 48, 4, 12, 4);
      var N = new Jt(F, r),
          C = new xr();
      C.add(P, N), C.position.y = -6, _this7.leftLeg = new Fr(P, N), _this7.leftLeg.name = "leftLeg", _this7.leftLeg.add(C), _this7.leftLeg.position.x = 1.9, _this7.leftLeg.position.y = -12, _this7.leftLeg.position.z = -.1, _this7.add(_this7.leftLeg), _this7.modelType = "default";
      return _this7;
    }

    _createClass(Nr, [{
      key: "modelType",
      get: function get() {
        return this.slim ? "slim" : "default";
      },
      set: function set(e) {
        this.slim = "slim" === e, this.modelListeners.forEach(function (e) {
          return e();
        });
      }
    }, {
      key: "getBodyParts",
      value: function getBodyParts() {
        return this.children.filter(function (e) {
          return e instanceof Fr;
        });
      }
    }, {
      key: "setInnerLayerVisible",
      value: function setInnerLayerVisible(e) {
        this.getBodyParts().forEach(function (t) {
          return t.innerLayer.visible = e;
        });
      }
    }, {
      key: "setOuterLayerVisible",
      value: function setOuterLayerVisible(e) {
        this.getBodyParts().forEach(function (t) {
          return t.outerLayer.visible = e;
        });
      }
    }]);

    return Nr;
  }(xr);

  var Cr = /*#__PURE__*/function (_xr3) {
    _inherits(Cr, _xr3);

    var _super8 = _createSuper(Cr);

    function Cr(e) {
      var _this8;

      _classCallCheck(this, Cr);

      _this8 = _super8.call(this);
      var t = new ht({
        map: e,
        side: 2,
        transparent: !0,
        alphaTest: 1e-5
      }),
          n = new $t(10, 16, 1);
      Pr(n, 0, 0, 10, 16, 1), _this8.cape = new Jt(n, t), _this8.cape.position.y = -8, _this8.cape.position.z = .5, _this8.add(_this8.cape);
      return _this8;
    }

    return Cr;
  }(xr);

  var Rr = /*#__PURE__*/function (_xr4) {
    _inherits(Rr, _xr4);

    var _super9 = _createSuper(Rr);

    function Rr(e) {
      var _this9;

      _classCallCheck(this, Rr);

      _this9 = _super9.call(this);
      var t = new ht({
        map: e,
        side: 2,
        transparent: !0,
        alphaTest: 1e-5
      }),
          n = new $t(12, 22, 4);
      Pr(n, 22, 0, 10, 20, 2);
      var i = new Jt(n, t);
      i.position.x = -5, i.position.y = -10, i.position.z = -1, _this9.leftWing = new xr(), _this9.leftWing.add(i), _this9.add(_this9.leftWing);
      var r = new $t(12, 22, 4);
      Pr(r, 22, 0, 10, 20, 2);
      var a = new Jt(r, t);
      a.scale.x = -1, a.position.x = 5, a.position.y = -10, a.position.z = -1, _this9.rightWing = new xr(), _this9.rightWing.add(a), _this9.add(_this9.rightWing), _this9.leftWing.position.x = 5, _this9.leftWing.rotation.x = .2617994, _this9.leftWing.rotation.y = .01, _this9.leftWing.rotation.z = .2617994, _this9.updateRightWing();
      return _this9;
    }

    _createClass(Rr, [{
      key: "updateRightWing",
      value: function updateRightWing() {
        this.rightWing.position.x = -this.leftWing.position.x, this.rightWing.position.y = this.leftWing.position.y, this.rightWing.rotation.x = this.leftWing.rotation.x, this.rightWing.rotation.y = -this.leftWing.rotation.y, this.rightWing.rotation.z = -this.leftWing.rotation.z;
      }
    }]);

    return Rr;
  }(xr);

  var Ir = /*#__PURE__*/function (_xr5) {
    _inherits(Ir, _xr5);

    var _super10 = _createSuper(Ir);

    function Ir(e, t) {
      var _this10;

      _classCallCheck(this, Ir);

      _this10 = _super10.call(this), _this10.skin = new Nr(e), _this10.skin.name = "skin", _this10.add(_this10.skin), _this10.cape = new Cr(t), _this10.cape.name = "cape", _this10.cape.position.z = -2, _this10.cape.rotation.x = 10.8 * Math.PI / 180, _this10.cape.rotation.y = Math.PI, _this10.add(_this10.cape), _this10.elytra = new Rr(t), _this10.elytra.name = "elytra", _this10.elytra.position.z = -2, _this10.elytra.visible = !1, _this10.add(_this10.elytra);
      return _this10;
    }

    _createClass(Ir, [{
      key: "backEquipment",
      get: function get() {
        return this.cape.visible ? "cape" : this.elytra.visible ? "elytra" : null;
      },
      set: function set(e) {
        this.cape.visible = "cape" === e, this.elytra.visible = "elytra" === e;
      }
    }]);

    return Ir;
  }(xr);

  function Dr(e) {
    return e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas;
  }

  function Ur(e, t, n, i, r) {
    var a = e.getImageData(t, n, i, r);

    for (var _e142 = 0; _e142 < i; _e142++) {
      for (var _t107 = 0; _t107 < r; _t107++) {
        var _n97 = 4 * (_e142 + _t107 * i);

        if (255 !== a.data[_n97 + 3]) return !0;
      }
    }

    return !1;
  }

  function Or(e) {
    return e / 64;
  }

  function zr(e, t) {
    var n = Or(t),
        i = function i(t, _i96, r, a, o, s, l) {
      return function (e, t, n, i, r, a, o, s) {
        var l = e.getImageData(t, n, i, r);
        if (s) for (var _e143 = 0; _e143 < r; _e143++) {
          for (var _t108 = 0; _t108 < i / 2; _t108++) {
            var _n98 = 4 * (_t108 + _e143 * i),
                _r76 = 4 * (i - _t108 - 1 + _e143 * i),
                _a37 = l.data[_n98],
                _o30 = l.data[_n98 + 1],
                _s19 = l.data[_n98 + 2],
                _c15 = l.data[_n98 + 3],
                _d10 = l.data[_r76],
                _h9 = l.data[_r76 + 1],
                _u8 = l.data[_r76 + 2],
                _f6 = l.data[_r76 + 3];

            l.data[_n98] = _d10, l.data[_n98 + 1] = _h9, l.data[_n98 + 2] = _u8, l.data[_n98 + 3] = _f6, l.data[_r76] = _a37, l.data[_r76 + 1] = _o30, l.data[_r76 + 2] = _s19, l.data[_r76 + 3] = _c15;
          }
        }
        e.putImageData(l, a, o);
      }(e, t * n, _i96 * n, r * n, a * n, o * n, s * n, l);
    };

    !function (e, t) {
      if (!Ur(e, 0, 0, t, t / 2)) {
        var _n99 = Or(t),
            _i97 = function _i97(t, i, r, a) {
          return e.clearRect(t * _n99, i * _n99, r * _n99, a * _n99);
        };

        _i97(40, 0, 8, 8), _i97(48, 0, 8, 8), _i97(32, 8, 8, 8), _i97(40, 8, 8, 8), _i97(48, 8, 8, 8), _i97(56, 8, 8, 8);
      }
    }(e, t), i(4, 16, 4, 4, 20, 48, !0), i(8, 16, 4, 4, 24, 48, !0), i(0, 20, 4, 12, 24, 52, !0), i(4, 20, 4, 12, 20, 52, !0), i(8, 20, 4, 12, 16, 52, !0), i(12, 20, 4, 12, 28, 52, !0), i(44, 16, 4, 4, 36, 48, !0), i(48, 16, 4, 4, 40, 48, !0), i(40, 20, 4, 12, 40, 52, !0), i(44, 20, 4, 12, 36, 52, !0), i(48, 20, 4, 12, 32, 52, !0), i(52, 20, 4, 12, 44, 52, !0);
  }

  function Gr(e, t) {
    var n = function (e) {
      if (e.width === 2 * e.height) return e.width / 64;
      if (17 * e.width == 22 * e.height) return e.width / 22;
      if (11 * e.width == 23 * e.height) return e.width / 46;
      throw new Error("Bad cape size: ".concat(e.width, "x").concat(e.height));
    }(t);

    e.width = 64 * n, e.height = 32 * n;
    var i = e.getContext("2d");
    i.clearRect(0, 0, e.width, e.height), i.drawImage(t, 0, 0, t.width, t.height);
  }

  function Br(_x4) {
    return _Br.apply(this, arguments);
  }

  function _Br() {
    _Br = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var t;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              t = document.createElement("img");
              return _context2.abrupt("return", new Promise(function (n, i) {
                t.onload = function () {
                  return n(t);
                }, t.onerror = i, t.crossOrigin = "anonymous", "string" == typeof e ? t.src = e : (void 0 !== e.crossOrigin && (t.crossOrigin = e.crossOrigin), void 0 !== e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.src = e.src);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _Br.apply(this, arguments);
  }

  function Hr(e, t, n) {
    e instanceof Function ? e(t, n) : e.play(t, n);
  }

  var kr = /*#__PURE__*/function () {
    function kr(e) {
      _classCallCheck(this, kr);

      this.speed = 1, this.paused = !1, this.progress = 0, this.lastTime = 0, this.started = !1, this.toResetAndRemove = !1, this.animation = e;
    }

    _createClass(kr, [{
      key: "play",
      value: function play(e, t) {
        if (this.toResetAndRemove) return Hr(this.animation, e, 0), void this.remove();
        var n;
        this.started ? n = t - this.lastTime : (n = 0, this.started = !0), this.lastTime = t, this.paused || (this.progress += n * this.speed), Hr(this.animation, e, this.progress);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.progress = 0;
      }
    }, {
      key: "remove",
      value: function remove() {}
    }, {
      key: "resetAndRemove",
      value: function resetAndRemove() {
        this.toResetAndRemove = !0;
      }
    }]);

    return kr;
  }();

  var Wr = /*#__PURE__*/function () {
    function Wr() {
      _classCallCheck(this, Wr);

      this.handles = new Set();
    }

    _createClass(Wr, [{
      key: "add",
      value: function add(e) {
        var _this11 = this;

        var t = new kr(e);
        return t.remove = function () {
          _this11.handles["delete"](t);
        }, this.handles.add(t), t;
      }
    }, {
      key: "play",
      value: function play(e, t) {
        this.handles.forEach(function (n) {
          return n.play(e, t);
        });
      }
    }]);

    return Wr;
  }();

  var Vr = /*#__PURE__*/function (_Wr) {
    _inherits(Vr, _Wr);

    var _super11 = _createSuper(Vr);

    function Vr() {
      var _this12;

      _classCallCheck(this, Vr);

      _this12 = _super11.apply(this, arguments), _this12.speed = 1, _this12.progress = 0, _this12.clock = new Ar(!0);
      return _this12;
    }

    _createClass(Vr, [{
      key: "animation",
      get: function get() {
        return this;
      }
    }, {
      key: "paused",
      get: function get() {
        return !this.clock.running;
      },
      set: function set(e) {
        e ? this.clock.stop() : this.clock.start();
      }
    }, {
      key: "runAnimationLoop",
      value: function runAnimationLoop(e) {
        0 !== this.handles.size && (this.progress += this.clock.getDelta() * this.speed, this.play(e, this.progress));
      }
    }, {
      key: "reset",
      value: function reset() {
        this.progress = 0;
      }
    }]);

    return Vr;
  }(Wr);

  var Xr = /*#__PURE__*/function () {
    function Xr() {
      var _this13 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Xr);

      this.animations = new Vr(), this._disposed = !1, this._renderPaused = !1, this.canvas = void 0 === e.canvas ? document.createElement("canvas") : e.canvas, this.skinCanvas = document.createElement("canvas"), this.skinTexture = new O(this.skinCanvas), this.skinTexture.magFilter = u, this.skinTexture.minFilter = u, this.capeCanvas = document.createElement("canvas"), this.capeTexture = new O(this.capeCanvas), this.capeTexture.magFilter = u, this.capeTexture.minFilter = u, this.scene = new br(), this.camera = new on(40), this.camera.position.y = -8, this.camera.position.z = 60, this.renderer = new Mr({
        canvas: this.canvas,
        alpha: !1 !== e.alpha,
        preserveDrawingBuffer: !0 === e.preserveDrawingBuffer
      }), this.renderer.setPixelRatio(window.devicePixelRatio), this.playerObject = new Ir(this.skinTexture, this.capeTexture), this.playerObject.name = "player", this.playerObject.skin.visible = !1, this.playerObject.cape.visible = !1, this.scene.add(this.playerObject), void 0 !== e.skin && this.loadSkin(e.skin), void 0 !== e.cape && this.loadCape(e.cape), void 0 !== e.width && (this.width = e.width), void 0 !== e.height && (this.height = e.height), !0 === e.renderPaused ? this._renderPaused = !0 : window.requestAnimationFrame(function () {
        return _this13.draw();
      });
    }

    _createClass(Xr, [{
      key: "loadSkin",
      value: function loadSkin(e) {
        var _this14 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "auto-detect";
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (null === e) this.resetSkin();else {
          if (!Dr(e)) return Br(e).then(function (e) {
            return _this14.loadSkin(e, t, n);
          });
          {
            !function (e, t) {
              var n = !1;

              if (t.width !== t.height) {
                if (t.width !== 2 * t.height) throw new Error("Bad skin size: ".concat(t.width, "x").concat(t.height));
                n = !0;
              }

              var i = e.getContext("2d");

              if (n) {
                var _n100 = t.width;
                e.width = _n100, e.height = _n100, i.clearRect(0, 0, _n100, _n100), i.drawImage(t, 0, 0, _n100, _n100 / 2), zr(i, _n100);
              } else e.width = t.width, e.height = t.height, i.clearRect(0, 0, t.width, t.height), i.drawImage(t, 0, 0, e.width, e.height);
            }(this.skinCanvas, e);

            var _i98 = "auto-detect" === t ? function (e) {
              var t = Or(e.width),
                  n = e.getContext("2d"),
                  i = function i(e, _i99, r, a) {
                return Ur(n, e * t, _i99 * t, r * t, a * t);
              },
                  r = function r(e, i, _r77, a) {
                return function (e, t, n, i, r) {
                  var a = e.getImageData(t, n, i, r);

                  for (var _e144 = 0; _e144 < i; _e144++) {
                    for (var _t109 = 0; _t109 < r; _t109++) {
                      var _n101 = 4 * (_e144 + _t109 * i);

                      if (0 !== a.data[_n101 + 0] || 0 !== a.data[_n101 + 1] || 0 !== a.data[_n101 + 2] || 255 !== a.data[_n101 + 3]) return !1;
                    }
                  }

                  return !0;
                }(n, e * t, i * t, _r77 * t, a * t);
              };

              return i(50, 16, 2, 4) || i(54, 20, 2, 12) || i(42, 48, 2, 4) || i(46, 52, 2, 12) || r(50, 16, 2, 4) && r(54, 20, 2, 12) && r(42, 48, 2, 4) && r(46, 52, 2, 12) ? "slim" : "default";
            }(this.skinCanvas) : t;

            this.skinTexture.needsUpdate = !0, this.playerObject.skin.modelType = _i98, !1 !== n.makeVisible && (this.playerObject.skin.visible = !0);
          }
        }
      }
    }, {
      key: "resetSkin",
      value: function resetSkin() {
        this.playerObject.skin.visible = !1;
      }
    }, {
      key: "loadCape",
      value: function loadCape(e) {
        var _this15 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (null === e) this.resetCape();else {
          if (!Dr(e)) return Br(e).then(function (e) {
            return _this15.loadCape(e, t);
          });
          Gr(this.capeCanvas, e), this.capeTexture.needsUpdate = !0, !1 !== t.makeVisible && (this.playerObject.backEquipment = void 0 === t.backEquipment ? "cape" : t.backEquipment);
        }
      }
    }, {
      key: "resetCape",
      value: function resetCape() {
        this.playerObject.backEquipment = null;
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this16 = this;

        this.disposed || this._renderPaused || (this.animations.runAnimationLoop(this.playerObject), this.render(), window.requestAnimationFrame(function () {
          return _this16.draw();
        }));
      }
    }, {
      key: "render",
      value: function render() {
        this.renderer.render(this.scene, this.camera);
      }
    }, {
      key: "setSize",
      value: function setSize(e, t) {
        this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._disposed = !0, this.renderer.dispose(), this.skinTexture.dispose(), this.capeTexture.dispose();
      }
    }, {
      key: "disposed",
      get: function get() {
        return this._disposed;
      }
    }, {
      key: "renderPaused",
      get: function get() {
        return this._renderPaused;
      },
      set: function set(e) {
        var _this17 = this;

        var t = !this.disposed && !e && this._renderPaused;
        this._renderPaused = e, t && window.requestAnimationFrame(function () {
          return _this17.draw();
        });
      }
    }, {
      key: "width",
      get: function get() {
        return this.renderer.getSize(new C()).width;
      },
      set: function set(e) {
        this.setSize(e, this.height);
      }
    }, {
      key: "height",
      get: function get() {
        return this.renderer.getSize(new C()).height;
      },
      set: function set(e) {
        this.setSize(this.width, e);
      }
    }]);

    return Xr;
  }();

  var Yr = function Yr(e, l) {
    var c, d, h, u, f, p;
    void 0 === l && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), l === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = l, this.enabled = !0, this.target = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }, this.mouseButtons = {
      LEFT: t,
      MIDDLE: n,
      RIGHT: i
    }, this.touches = {
      ONE: r,
      TWO: o
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () {
      return b.phi;
    }, this.getAzimuthalAngle = function () {
      return b.theta;
    }, this.listenToKeyEvents = function (e) {
      e.addEventListener("keydown", oe), this._domElementKeyEvents = e;
    }, this.saveState = function () {
      m.target0.copy(m.target), m.position0.copy(m.object.position), m.zoom0 = m.object.zoom;
    }, this.reset = function () {
      m.target.copy(m.target0), m.object.position.copy(m.position0), m.object.zoom = m.zoom0, m.object.updateProjectionMatrix(), m.dispatchEvent(g), m.update(), y = v.NONE;
    }, this.update = (c = new k(), d = new H().setFromUnitVectors(e.up, new k(0, 1, 0)), h = d.clone().invert(), u = new k(), f = new H(), p = 2 * Math.PI, function () {
      var e = m.object.position;
      c.copy(e).sub(m.target), c.applyQuaternion(d), b.setFromVector3(c), m.autoRotate && y === v.NONE && z(2 * Math.PI / 60 / 60 * m.autoRotateSpeed), m.enableDamping ? (b.theta += w.theta * m.dampingFactor, b.phi += w.phi * m.dampingFactor) : (b.theta += w.theta, b.phi += w.phi);
      var t = m.minAzimuthAngle,
          n = m.maxAzimuthAngle;
      return isFinite(t) && isFinite(n) && (t < -Math.PI ? t += p : t > Math.PI && (t -= p), n < -Math.PI ? n += p : n > Math.PI && (n -= p), b.theta = t <= n ? Math.max(t, Math.min(n, b.theta)) : b.theta > (t + n) / 2 ? Math.max(t, b.theta) : Math.min(n, b.theta)), b.phi = Math.max(m.minPolarAngle, Math.min(m.maxPolarAngle, b.phi)), b.makeSafe(), b.radius *= A, b.radius = Math.max(m.minDistance, Math.min(m.maxDistance, b.radius)), !0 === m.enableDamping ? m.target.addScaledVector(S, m.dampingFactor) : m.target.add(S), c.setFromSpherical(b), c.applyQuaternion(h), e.copy(m.target).add(c), m.object.lookAt(m.target), !0 === m.enableDamping ? (w.theta *= 1 - m.dampingFactor, w.phi *= 1 - m.dampingFactor, S.multiplyScalar(1 - m.dampingFactor)) : (w.set(0, 0, 0), S.set(0, 0, 0)), A = 1, !!(T || u.distanceToSquared(m.object.position) > M || 8 * (1 - f.dot(m.object.quaternion)) > M) && (m.dispatchEvent(g), u.copy(m.object.position), f.copy(m.object.quaternion), T = !1, !0);
    }), this.dispose = function () {
      m.domElement.removeEventListener("contextmenu", de), m.domElement.removeEventListener("pointerdown", ne), m.domElement.removeEventListener("wheel", ae), m.domElement.removeEventListener("touchstart", se), m.domElement.removeEventListener("touchend", ce), m.domElement.removeEventListener("touchmove", le), m.domElement.ownerDocument.removeEventListener("pointermove", ie), m.domElement.ownerDocument.removeEventListener("pointerup", re), null !== m._domElementKeyEvents && m._domElementKeyEvents.removeEventListener("keydown", oe);
    };
    var m = this,
        g = {
      type: "change"
    },
        x = {
      type: "start"
    },
        _ = {
      type: "end"
    },
        v = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    },
        y = v.NONE,
        M = 1e-6,
        b = new Tr(),
        w = new Tr(),
        A = 1,
        S = new k(),
        T = !1,
        L = new C(),
        E = new C(),
        P = new C(),
        F = new C(),
        N = new C(),
        R = new C(),
        I = new C(),
        D = new C(),
        U = new C();

    function O() {
      return Math.pow(.95, m.zoomSpeed);
    }

    function z(e) {
      w.theta -= e;
    }

    function G(e) {
      w.phi -= e;
    }

    var B,
        W = (B = new k(), function (e, t) {
      B.setFromMatrixColumn(t, 0), B.multiplyScalar(-e), S.add(B);
    }),
        V = function () {
      var e = new k();
      return function (t, n) {
        !0 === m.screenSpacePanning ? e.setFromMatrixColumn(n, 1) : (e.setFromMatrixColumn(n, 0), e.crossVectors(m.object.up, e)), e.multiplyScalar(t), S.add(e);
      };
    }(),
        X = function () {
      var e = new k();
      return function (t, n) {
        var i = m.domElement;

        if (m.object.isPerspectiveCamera) {
          var r = m.object.position;
          e.copy(r).sub(m.target);
          var a = e.length();
          a *= Math.tan(m.object.fov / 2 * Math.PI / 180), W(2 * t * a / i.clientHeight, m.object.matrix), V(2 * n * a / i.clientHeight, m.object.matrix);
        } else m.object.isOrthographicCamera ? (W(t * (m.object.right - m.object.left) / m.object.zoom / i.clientWidth, m.object.matrix), V(n * (m.object.top - m.object.bottom) / m.object.zoom / i.clientHeight, m.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), m.enablePan = !1);
      };
    }();

    function Y(e) {
      m.object.isPerspectiveCamera ? A /= e : m.object.isOrthographicCamera ? (m.object.zoom = Math.max(m.minZoom, Math.min(m.maxZoom, m.object.zoom * e)), m.object.updateProjectionMatrix(), T = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), m.enableZoom = !1);
    }

    function j(e) {
      m.object.isPerspectiveCamera ? A *= e : m.object.isOrthographicCamera ? (m.object.zoom = Math.max(m.minZoom, Math.min(m.maxZoom, m.object.zoom / e)), m.object.updateProjectionMatrix(), T = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), m.enableZoom = !1);
    }

    function Q(e) {
      L.set(e.clientX, e.clientY);
    }

    function q(e) {
      F.set(e.clientX, e.clientY);
    }

    function Z(e) {
      if (1 == e.touches.length) L.set(e.touches[0].pageX, e.touches[0].pageY);else {
        var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
            n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
        L.set(t, n);
      }
    }

    function J(e) {
      if (1 == e.touches.length) F.set(e.touches[0].pageX, e.touches[0].pageY);else {
        var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
            n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
        F.set(t, n);
      }
    }

    function K(e) {
      var t = e.touches[0].pageX - e.touches[1].pageX,
          n = e.touches[0].pageY - e.touches[1].pageY,
          i = Math.sqrt(t * t + n * n);
      I.set(0, i);
    }

    function $(e) {
      if (1 == e.touches.length) E.set(e.touches[0].pageX, e.touches[0].pageY);else {
        var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
            n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
        E.set(t, n);
      }
      P.subVectors(E, L).multiplyScalar(m.rotateSpeed);
      var i = m.domElement;
      z(2 * Math.PI * P.x / i.clientHeight), G(2 * Math.PI * P.y / i.clientHeight), L.copy(E);
    }

    function ee(e) {
      if (1 == e.touches.length) N.set(e.touches[0].pageX, e.touches[0].pageY);else {
        var t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
            n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
        N.set(t, n);
      }
      R.subVectors(N, F).multiplyScalar(m.panSpeed), X(R.x, R.y), F.copy(N);
    }

    function te(e) {
      var t = e.touches[0].pageX - e.touches[1].pageX,
          n = e.touches[0].pageY - e.touches[1].pageY,
          i = Math.sqrt(t * t + n * n);
      D.set(0, i), U.set(0, Math.pow(D.y / I.y, m.zoomSpeed)), Y(U.y), I.copy(D);
    }

    function ne(e) {
      if (!1 !== m.enabled) switch (e.pointerType) {
        case "mouse":
        case "pen":
          !function (e) {
            var r;

            switch (e.preventDefault(), m.domElement.focus ? m.domElement.focus() : window.focus(), e.button) {
              case 0:
                r = m.mouseButtons.LEFT;
                break;

              case 1:
                r = m.mouseButtons.MIDDLE;
                break;

              case 2:
                r = m.mouseButtons.RIGHT;
                break;

              default:
                r = -1;
            }

            switch (r) {
              case n:
                if (!1 === m.enableZoom) return;
                !function (e) {
                  I.set(e.clientX, e.clientY);
                }(e), y = v.DOLLY;
                break;

              case t:
                if (e.ctrlKey || e.metaKey || e.shiftKey) {
                  if (!1 === m.enablePan) return;
                  q(e), y = v.PAN;
                } else {
                  if (!1 === m.enableRotate) return;
                  Q(e), y = v.ROTATE;
                }

                break;

              case i:
                if (e.ctrlKey || e.metaKey || e.shiftKey) {
                  if (!1 === m.enableRotate) return;
                  Q(e), y = v.ROTATE;
                } else {
                  if (!1 === m.enablePan) return;
                  q(e), y = v.PAN;
                }

                break;

              default:
                y = v.NONE;
            }

            y !== v.NONE && (m.domElement.ownerDocument.addEventListener("pointermove", ie), m.domElement.ownerDocument.addEventListener("pointerup", re), m.dispatchEvent(x));
          }(e);
      }
    }

    function ie(e) {
      if (!1 !== m.enabled) switch (e.pointerType) {
        case "mouse":
        case "pen":
          !function (e) {
            if (!1 === m.enabled) return;

            switch (e.preventDefault(), y) {
              case v.ROTATE:
                if (!1 === m.enableRotate) return;
                !function (e) {
                  E.set(e.clientX, e.clientY), P.subVectors(E, L).multiplyScalar(m.rotateSpeed);
                  var t = m.domElement;
                  z(2 * Math.PI * P.x / t.clientHeight), G(2 * Math.PI * P.y / t.clientHeight), L.copy(E), m.update();
                }(e);
                break;

              case v.DOLLY:
                if (!1 === m.enableZoom) return;
                !function (e) {
                  D.set(e.clientX, e.clientY), U.subVectors(D, I), U.y > 0 ? Y(O()) : U.y < 0 && j(O()), I.copy(D), m.update();
                }(e);
                break;

              case v.PAN:
                if (!1 === m.enablePan) return;
                !function (e) {
                  N.set(e.clientX, e.clientY), R.subVectors(N, F).multiplyScalar(m.panSpeed), X(R.x, R.y), F.copy(N), m.update();
                }(e);
            }
          }(e);
      }
    }

    function re(e) {
      switch (e.pointerType) {
        case "mouse":
        case "pen":
          !function (e) {
            if (m.domElement.ownerDocument.removeEventListener("pointermove", ie), m.domElement.ownerDocument.removeEventListener("pointerup", re), !1 === m.enabled) return;
            m.dispatchEvent(_), y = v.NONE;
          }();
      }
    }

    function ae(e) {
      !1 === m.enabled || !1 === m.enableZoom || y !== v.NONE && y !== v.ROTATE || (e.preventDefault(), e.stopPropagation(), m.dispatchEvent(x), function (e) {
        e.deltaY < 0 ? j(O()) : e.deltaY > 0 && Y(O()), m.update();
      }(e), m.dispatchEvent(_));
    }

    function oe(e) {
      !1 !== m.enabled && !1 !== m.enablePan && function (e) {
        var t = !1;

        switch (e.keyCode) {
          case m.keys.UP:
            X(0, m.keyPanSpeed), t = !0;
            break;

          case m.keys.BOTTOM:
            X(0, -m.keyPanSpeed), t = !0;
            break;

          case m.keys.LEFT:
            X(m.keyPanSpeed, 0), t = !0;
            break;

          case m.keys.RIGHT:
            X(-m.keyPanSpeed, 0), t = !0;
        }

        t && (e.preventDefault(), m.update());
      }(e);
    }

    function se(e) {
      if (!1 !== m.enabled) {
        switch (e.preventDefault(), e.touches.length) {
          case 1:
            switch (m.touches.ONE) {
              case r:
                if (!1 === m.enableRotate) return;
                Z(e), y = v.TOUCH_ROTATE;
                break;

              case a:
                if (!1 === m.enablePan) return;
                J(e), y = v.TOUCH_PAN;
                break;

              default:
                y = v.NONE;
            }

            break;

          case 2:
            switch (m.touches.TWO) {
              case o:
                if (!1 === m.enableZoom && !1 === m.enablePan) return;
                !function (e) {
                  m.enableZoom && K(e), m.enablePan && J(e);
                }(e), y = v.TOUCH_DOLLY_PAN;
                break;

              case s:
                if (!1 === m.enableZoom && !1 === m.enableRotate) return;
                !function (e) {
                  m.enableZoom && K(e), m.enableRotate && Z(e);
                }(e), y = v.TOUCH_DOLLY_ROTATE;
                break;

              default:
                y = v.NONE;
            }

            break;

          default:
            y = v.NONE;
        }

        y !== v.NONE && m.dispatchEvent(x);
      }
    }

    function le(e) {
      if (!1 !== m.enabled) switch (e.preventDefault(), e.stopPropagation(), y) {
        case v.TOUCH_ROTATE:
          if (!1 === m.enableRotate) return;
          $(e), m.update();
          break;

        case v.TOUCH_PAN:
          if (!1 === m.enablePan) return;
          ee(e), m.update();
          break;

        case v.TOUCH_DOLLY_PAN:
          if (!1 === m.enableZoom && !1 === m.enablePan) return;
          !function (e) {
            m.enableZoom && te(e), m.enablePan && ee(e);
          }(e), m.update();
          break;

        case v.TOUCH_DOLLY_ROTATE:
          if (!1 === m.enableZoom && !1 === m.enableRotate) return;
          !function (e) {
            m.enableZoom && te(e), m.enableRotate && $(e);
          }(e), m.update();
          break;

        default:
          y = v.NONE;
      }
    }

    function ce(e) {
      !1 !== m.enabled && (m.dispatchEvent(_), y = v.NONE);
    }

    function de(e) {
      !1 !== m.enabled && e.preventDefault();
    }

    m.domElement.addEventListener("contextmenu", de), m.domElement.addEventListener("pointerdown", ne), m.domElement.addEventListener("wheel", ae), m.domElement.addEventListener("touchstart", se), m.domElement.addEventListener("touchend", ce), m.domElement.addEventListener("touchmove", le), this.update();
  };

  (Yr.prototype = Object.create(E.prototype)).constructor = Yr;

  var jr = function jr(e, n) {
    Yr.call(this, e, n), this.screenSpacePanning = !1, this.mouseButtons.LEFT = i, this.mouseButtons.RIGHT = t, this.touches.ONE = a, this.touches.TWO = s;
  };

  (jr.prototype = Object.create(E.prototype)).constructor = jr;
  var Qr,
      qr,
      Zr,
      Jr = {
    uniforms: {
      tDiffuse: {
        value: null
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader: "uniform float opacity;uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 texel=texture2D(tDiffuse,vUv);gl_FragColor=opacity*texel;}"
  };

  function Kr() {
    this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }

  Object.assign(Kr.prototype, {
    setSize: function setSize() {},
    render: function render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
  }), Kr.FullScreenQuad = (Qr = new wr(-1, 1, 1, -1, 0, 1), qr = new xn(2, 2), Zr = function Zr(e) {
    this._mesh = new Jt(qr, e);
  }, Object.defineProperty(Zr.prototype, "material", {
    get: function get() {
      return this._mesh.material;
    },
    set: function set(e) {
      this._mesh.material = e;
    }
  }), Object.assign(Zr.prototype, {
    dispose: function dispose() {
      this._mesh.geometry.dispose();
    },
    render: function render(e) {
      e.render(this._mesh, Qr);
    }
  }), Zr);

  var $r = function $r(e, t) {
    Kr.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof rn ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = nn.clone(e.uniforms), this.material = new rn({
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Kr.FullScreenQuad(this.material);
  };

  $r.prototype = Object.assign(Object.create(Kr.prototype), {
    constructor: $r,
    render: function render(e, t, n) {
      this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
    }
  });

  var ea = function ea(e, t) {
    Kr.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  };

  ea.prototype = Object.assign(Object.create(Kr.prototype), {
    constructor: ea,
    render: function render(e, t, n) {
      var i,
          r,
          a = e.getContext(),
          o = e.state;
      o.buffers.color.setMask(!1), o.buffers.depth.setMask(!1), o.buffers.color.setLocked(!0), o.buffers.depth.setLocked(!0), this.inverse ? (i = 0, r = 1) : (i = 1, r = 0), o.buffers.stencil.setTest(!0), o.buffers.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.buffers.stencil.setFunc(a.ALWAYS, i, 4294967295), o.buffers.stencil.setClear(r), o.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), o.buffers.color.setLocked(!1), o.buffers.depth.setLocked(!1), o.buffers.stencil.setLocked(!1), o.buffers.stencil.setFunc(a.EQUAL, 1, 4294967295), o.buffers.stencil.setOp(a.KEEP, a.KEEP, a.KEEP), o.buffers.stencil.setLocked(!0);
    }
  });

  var ta = function ta() {
    Kr.call(this), this.needsSwap = !1;
  };

  ta.prototype = Object.create(Kr.prototype), Object.assign(ta.prototype, {
    render: function render(e) {
      e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
    }
  });

  var na = function na(e, t) {
    if (this.renderer = e, void 0 === t) {
      var n = {
        minFilter: f,
        magFilter: f,
        format: b
      },
          i = e.getSize(new C());
      this._pixelRatio = e.getPixelRatio(), this._width = i.width, this._height = i.height, (t = new B(this._width * this._pixelRatio, this._height * this._pixelRatio, n)).texture.name = "EffectComposer.rt1";
    } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;

    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === Jr && console.error("THREE.EffectComposer relies on CopyShader"), void 0 === $r && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new $r(Jr), this.clock = new Ar();
  };

  Object.assign(na.prototype, {
    swapBuffers: function swapBuffers() {
      var e = this.readBuffer;
      this.readBuffer = this.writeBuffer, this.writeBuffer = e;
    },
    addPass: function addPass(e) {
      this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    },
    insertPass: function insertPass(e, t) {
      this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    },
    removePass: function removePass(e) {
      var t = this.passes.indexOf(e);
      -1 !== t && this.passes.splice(t, 1);
    },
    isLastEnabledPass: function isLastEnabledPass(e) {
      for (var t = e + 1; t < this.passes.length; t++) {
        if (this.passes[t].enabled) return !1;
      }

      return !0;
    },
    render: function render(e) {
      void 0 === e && (e = this.clock.getDelta());
      var t,
          n,
          i = this.renderer.getRenderTarget(),
          r = !1,
          a = this.passes.length;

      for (n = 0; n < a; n++) {
        if (!1 !== (t = this.passes[n]).enabled) {
          if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(n), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, r), t.needsSwap) {
            if (r) {
              var o = this.renderer.getContext(),
                  s = this.renderer.state.buffers.stencil;
              s.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), s.setFunc(o.EQUAL, 1, 4294967295);
            }

            this.swapBuffers();
          }

          void 0 !== ea && (t instanceof ea ? r = !0 : t instanceof ta && (r = !1));
        }
      }

      this.renderer.setRenderTarget(i);
    },
    reset: function reset(e) {
      if (void 0 === e) {
        var t = this.renderer.getSize(new C());
        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
      }

      this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
    },
    setSize: function setSize(e, t) {
      this._width = e, this._height = t;
      var n = this._width * this._pixelRatio,
          i = this._height * this._pixelRatio;
      this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);

      for (var r = 0; r < this.passes.length; r++) {
        this.passes[r].setSize(n, i);
      }
    },
    setPixelRatio: function setPixelRatio(e) {
      this._pixelRatio = e, this.setSize(this._width, this._height);
    }
  });

  var ia = function ia() {
    this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  };

  Object.assign(ia.prototype, {
    setSize: function setSize() {},
    render: function render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
  }), ia.FullScreenQuad = function () {
    var e = new wr(-1, 1, 1, -1, 0, 1),
        t = new xn(2, 2),
        n = function n(e) {
      this._mesh = new Jt(t, e);
    };

    return Object.defineProperty(n.prototype, "material", {
      get: function get() {
        return this._mesh.material;
      },
      set: function set(e) {
        this._mesh.material = e;
      }
    }), Object.assign(n.prototype, {
      dispose: function dispose() {
        this._mesh.geometry.dispose();
      },
      render: function render(t) {
        t.render(this._mesh, e);
      }
    }), n;
  }();

  var ra = function ra(e, t, n, i, r) {
    Kr.call(this), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new dt();
  };

  ra.prototype = Object.assign(Object.create(Kr.prototype), {
    constructor: ra,
    render: function render(e, t, n) {
      var i,
          r,
          a = e.autoClear;
      e.autoClear = !1, void 0 !== this.overrideMaterial && (r = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), i = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, i), void 0 !== this.overrideMaterial && (this.scene.overrideMaterial = r), e.autoClear = a;
    }
  });
  var aa = {
    uniforms: {
      tDiffuse: {
        value: null
      },
      resolution: {
        value: new C(1 / 1024, 1 / 512)
      }
    },
    vertexShader: "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader: "precision highp float;uniform sampler2D tDiffuse;uniform vec2 resolution;varying vec2 vUv;\n#define FXAA_PC 1\n#define FXAA_GLSL_100 1\n#define FXAA_QUALITY_PRESET 12\n#define FXAA_GREEN_AS_LUMA 1\n#ifndef FXAA_PC_CONSOLE\n#define FXAA_PC_CONSOLE 0\n#endif\n#ifndef FXAA_GLSL_120\n#define FXAA_GLSL_120 0\n#endif\n#ifndef FXAA_GLSL_130\n#define FXAA_GLSL_130 0\n#endif\n#ifndef FXAA_HLSL_3\n#define FXAA_HLSL_3 0\n#endif\n#ifndef FXAA_HLSL_4\n#define FXAA_HLSL_4 0\n#endif\n#ifndef FXAA_HLSL_5\n#define FXAA_HLSL_5 0\n#endif\n#ifndef FXAA_GREEN_AS_LUMA\n#define FXAA_GREEN_AS_LUMA 0\n#endif\n#ifndef FXAA_EARLY_EXIT\n#define FXAA_EARLY_EXIT 1\n#endif\n#ifndef FXAA_DISCARD\n#define FXAA_DISCARD 0\n#endif\n#ifndef FXAA_FAST_PIXEL_OFFSET\n#ifdef GL_EXT_gpu_shader4\n#define FXAA_FAST_PIXEL_OFFSET 1\n#endif\n#ifdef GL_NV_gpu_shader5\n#define FXAA_FAST_PIXEL_OFFSET 1\n#endif\n#ifdef GL_ARB_gpu_shader5\n#define FXAA_FAST_PIXEL_OFFSET 1\n#endif\n#ifndef FXAA_FAST_PIXEL_OFFSET\n#define FXAA_FAST_PIXEL_OFFSET 0\n#endif\n#endif\n#ifndef FXAA_GATHER4_ALPHA\n#if (FXAA_HLSL_5==1)\n#define FXAA_GATHER4_ALPHA 1\n#endif\n#ifdef GL_ARB_gpu_shader5\n#define FXAA_GATHER4_ALPHA 1\n#endif\n#ifdef GL_NV_gpu_shader5\n#define FXAA_GATHER4_ALPHA 1\n#endif\n#ifndef FXAA_GATHER4_ALPHA\n#define FXAA_GATHER4_ALPHA 0\n#endif\n#endif\n#ifndef FXAA_QUALITY_PRESET\n#define FXAA_QUALITY_PRESET 12\n#endif\n#if (FXAA_QUALITY_PRESET==10)\n#define FXAA_QUALITY_PS 3\n#define FXAA_QUALITY_P0 1.5\n#define FXAA_QUALITY_P1 3.0\n#define FXAA_QUALITY_P2 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==11)\n#define FXAA_QUALITY_PS 4\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 3.0\n#define FXAA_QUALITY_P3 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==12)\n#define FXAA_QUALITY_PS 5\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 4.0\n#define FXAA_QUALITY_P4 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==13)\n#define FXAA_QUALITY_PS 6\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 4.0\n#define FXAA_QUALITY_P5 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==14)\n#define FXAA_QUALITY_PS 7\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 4.0\n#define FXAA_QUALITY_P6 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==15)\n#define FXAA_QUALITY_PS 8\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 4.0\n#define FXAA_QUALITY_P7 12.0\n#endif\n#if (FXAA_QUALITY_PRESET==20)\n#define FXAA_QUALITY_PS 3\n#define FXAA_QUALITY_P0 1.5\n#define FXAA_QUALITY_P1 2.0\n#define FXAA_QUALITY_P2 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==21)\n#define FXAA_QUALITY_PS 4\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==22)\n#define FXAA_QUALITY_PS 5\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==23)\n#define FXAA_QUALITY_PS 6\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==24)\n#define FXAA_QUALITY_PS 7\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 3.0\n#define FXAA_QUALITY_P6 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==25)\n#define FXAA_QUALITY_PS 8\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 4.0\n#define FXAA_QUALITY_P7 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==26)\n#define FXAA_QUALITY_PS 9\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 2.0\n#define FXAA_QUALITY_P7 4.0\n#define FXAA_QUALITY_P8 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==27)\n#define FXAA_QUALITY_PS 10\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 2.0\n#define FXAA_QUALITY_P7 2.0\n#define FXAA_QUALITY_P8 4.0\n#define FXAA_QUALITY_P9 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==28)\n#define FXAA_QUALITY_PS 11\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 2.0\n#define FXAA_QUALITY_P7 2.0\n#define FXAA_QUALITY_P8 2.0\n#define FXAA_QUALITY_P9 4.0\n#define FXAA_QUALITY_P10 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==29)\n#define FXAA_QUALITY_PS 12\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.5\n#define FXAA_QUALITY_P2 2.0\n#define FXAA_QUALITY_P3 2.0\n#define FXAA_QUALITY_P4 2.0\n#define FXAA_QUALITY_P5 2.0\n#define FXAA_QUALITY_P6 2.0\n#define FXAA_QUALITY_P7 2.0\n#define FXAA_QUALITY_P8 2.0\n#define FXAA_QUALITY_P9 2.0\n#define FXAA_QUALITY_P10 4.0\n#define FXAA_QUALITY_P11 8.0\n#endif\n#if (FXAA_QUALITY_PRESET==39)\n#define FXAA_QUALITY_PS 12\n#define FXAA_QUALITY_P0 1.0\n#define FXAA_QUALITY_P1 1.0\n#define FXAA_QUALITY_P2 1.0\n#define FXAA_QUALITY_P3 1.0\n#define FXAA_QUALITY_P4 1.0\n#define FXAA_QUALITY_P5 1.5\n#define FXAA_QUALITY_P6 2.0\n#define FXAA_QUALITY_P7 2.0\n#define FXAA_QUALITY_P8 2.0\n#define FXAA_QUALITY_P9 2.0\n#define FXAA_QUALITY_P10 4.0\n#define FXAA_QUALITY_P11 8.0\n#endif\n#if (FXAA_GLSL_100==1)||(FXAA_GLSL_120==1)||(FXAA_GLSL_130==1)\n#define FxaaBool bool\n#define FxaaDiscard discard\n#define FxaaFloat float\n#define FxaaFloat2 vec2\n#define FxaaFloat3 vec3\n#define FxaaFloat4 vec4\n#define FxaaHalf float\n#define FxaaHalf2 vec2\n#define FxaaHalf3 vec3\n#define FxaaHalf4 vec4\n#define FxaaInt2 ivec2\n#define FxaaSat(x)clamp(x,0.0,1.0)\n#define FxaaTex sampler2D\n#else\n#define FxaaBool bool\n#define FxaaDiscard clip(-1)\n#define FxaaFloat float\n#define FxaaFloat2 float2\n#define FxaaFloat3 float3\n#define FxaaFloat4 float4\n#define FxaaHalf half\n#define FxaaHalf2 half2\n#define FxaaHalf3 half3\n#define FxaaHalf4 half4\n#define FxaaSat(x)saturate(x)\n#endif\n#if (FXAA_GLSL_100==1)\n#define FxaaTexTop(t,p)texture2D(t,p,0.0)\n#define FxaaTexOff(t,p,o,r)texture2D(t,p+(o*r),0.0)\n#endif\n#if (FXAA_GLSL_120==1)\n#define FxaaTexTop(t,p)texture2DLod(t,p,0.0)\n#if (FXAA_FAST_PIXEL_OFFSET==1)\n#define FxaaTexOff(t,p,o,r)texture2DLodOffset(t,p,0.0,o)\n#else\n#define FxaaTexOff(t,p,o,r)texture2DLod(t,p+(o*r),0.0)\n#endif\n#if (FXAA_GATHER4_ALPHA==1)\n#define FxaaTexAlpha4(t,p)textureGather(t,p,3)\n#define FxaaTexOffAlpha4(t,p,o)textureGatherOffset(t,p,o,3)\n#define FxaaTexGreen4(t,p)textureGather(t,p,1)\n#define FxaaTexOffGreen4(t,p,o)textureGatherOffset(t,p,o,1)\n#endif\n#endif\n#if (FXAA_GLSL_130==1)\n#define FxaaTexTop(t,p)textureLod(t,p,0.0)\n#define FxaaTexOff(t,p,o,r)textureLodOffset(t,p,0.0,o)\n#if (FXAA_GATHER4_ALPHA==1)\n#define FxaaTexAlpha4(t,p)textureGather(t,p,3)\n#define FxaaTexOffAlpha4(t,p,o)textureGatherOffset(t,p,o,3)\n#define FxaaTexGreen4(t,p)textureGather(t,p,1)\n#define FxaaTexOffGreen4(t,p,o)textureGatherOffset(t,p,o,1)\n#endif\n#endif\n#if (FXAA_HLSL_3==1)\n#define FxaaInt2 float2\n#define FxaaTex sampler2D\n#define FxaaTexTop(t,p)tex2Dlod(t,float4(p,0.0,0.0))\n#define FxaaTexOff(t,p,o,r)tex2Dlod(t,float4(p+(o*r),0,0))\n#endif\n#if (FXAA_HLSL_4==1)\n#define FxaaInt2 int2\nstruct FxaaTex{SamplerState smpl;Texture2D tex;};\n#define FxaaTexTop(t,p)t.tex.SampleLevel(t.smpl,p,0.0)\n#define FxaaTexOff(t,p,o,r)t.tex.SampleLevel(t.smpl,p,0.0,o)\n#endif\n#if (FXAA_HLSL_5==1)\n#define FxaaInt2 int2\nstruct FxaaTex{SamplerState smpl;Texture2D tex;};\n#define FxaaTexTop(t,p)t.tex.SampleLevel(t.smpl,p,0.0)\n#define FxaaTexOff(t,p,o,r)t.tex.SampleLevel(t.smpl,p,0.0,o)\n#define FxaaTexAlpha4(t,p)t.tex.GatherAlpha(t.smpl,p)\n#define FxaaTexOffAlpha4(t,p,o)t.tex.GatherAlpha(t.smpl,p,o)\n#define FxaaTexGreen4(t,p)t.tex.GatherGreen(t.smpl,p)\n#define FxaaTexOffGreen4(t,p,o)t.tex.GatherGreen(t.smpl,p,o)\n#endif\n#if (FXAA_GREEN_AS_LUMA==0)\nFxaaFloat FxaaLuma(FxaaFloat4 rgba){return rgba.w;}\n#else\nFxaaFloat FxaaLuma(FxaaFloat4 rgba){return rgba.y;}\n#endif\n#if (FXAA_PC==1)\nFxaaFloat4 FxaaPixelShader(FxaaFloat2 pos,FxaaFloat4 fxaaConsolePosPos,FxaaTex tex,FxaaTex fxaaConsole360TexExpBiasNegOne,FxaaTex fxaaConsole360TexExpBiasNegTwo,FxaaFloat2 fxaaQualityRcpFrame,FxaaFloat4 fxaaConsoleRcpFrameOpt,FxaaFloat4 fxaaConsoleRcpFrameOpt2,FxaaFloat4 fxaaConsole360RcpFrameOpt2,FxaaFloat fxaaQualitySubpix,FxaaFloat fxaaQualityEdgeThreshold,FxaaFloat fxaaQualityEdgeThresholdMin,FxaaFloat fxaaConsoleEdgeSharpness,FxaaFloat fxaaConsoleEdgeThreshold,FxaaFloat fxaaConsoleEdgeThresholdMin,FxaaFloat4 fxaaConsole360ConstDir){FxaaFloat2 posM;posM.x=pos.x;posM.y=pos.y;\n#if (FXAA_GATHER4_ALPHA==1)\n#if (FXAA_DISCARD==0)\nFxaaFloat4 rgbyM=FxaaTexTop(tex,posM);\n#if (FXAA_GREEN_AS_LUMA==0)\n#define lumaM rgbyM.w\n#else\n#define lumaM rgbyM.y\n#endif\n#endif\n#if (FXAA_GREEN_AS_LUMA==0)\nFxaaFloat4 luma4A=FxaaTexAlpha4(tex,posM);FxaaFloat4 luma4B=FxaaTexOffAlpha4(tex,posM,FxaaInt2(-1,-1));\n#else\nFxaaFloat4 luma4A=FxaaTexGreen4(tex,posM);FxaaFloat4 luma4B=FxaaTexOffGreen4(tex,posM,FxaaInt2(-1,-1));\n#endif\n#if (FXAA_DISCARD==1)\n#define lumaM luma4A.w\n#endif\n#define lumaE luma4A.z\n#define lumaS luma4A.x\n#define lumaSE luma4A.y\n#define lumaNW luma4B.w\n#define lumaN luma4B.z\n#define lumaW luma4B.x\n#else\nFxaaFloat4 rgbyM=FxaaTexTop(tex,posM);\n#if (FXAA_GREEN_AS_LUMA==0)\n#define lumaM rgbyM.w\n#else\n#define lumaM rgbyM.y\n#endif\n#if (FXAA_GLSL_100==1)\nFxaaFloat lumaS=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(0.0,1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,0.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaN=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(0.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,0.0),fxaaQualityRcpFrame.xy));\n#else\nFxaaFloat lumaS=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(0,1),fxaaQualityRcpFrame.xy));FxaaFloat lumaE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,0),fxaaQualityRcpFrame.xy));FxaaFloat lumaN=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(0,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,0),fxaaQualityRcpFrame.xy));\n#endif\n#endif\nFxaaFloat maxSM=max(lumaS,lumaM);FxaaFloat minSM=min(lumaS,lumaM);FxaaFloat maxESM=max(lumaE,maxSM);FxaaFloat minESM=min(lumaE,minSM);FxaaFloat maxWN=max(lumaN,lumaW);FxaaFloat minWN=min(lumaN,lumaW);FxaaFloat rangeMax=max(maxWN,maxESM);FxaaFloat rangeMin=min(minWN,minESM);FxaaFloat rangeMaxScaled=rangeMax*fxaaQualityEdgeThreshold;FxaaFloat range=rangeMax-rangeMin;FxaaFloat rangeMaxClamped=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);FxaaBool earlyExit=range<rangeMaxClamped;if(earlyExit)\n#if (FXAA_DISCARD==1)\nFxaaDiscard;\n#else\nreturn rgbyM;\n#endif\n#if (FXAA_GATHER4_ALPHA==0)\n#if (FXAA_GLSL_100==1)\nFxaaFloat lumaNW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaSE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,1.0),fxaaQualityRcpFrame.xy));\n#else\nFxaaFloat lumaNW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,1),fxaaQualityRcpFrame.xy));FxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,1),fxaaQualityRcpFrame.xy));\n#endif\n#else\nFxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,1),fxaaQualityRcpFrame.xy));\n#endif\nFxaaFloat lumaNS=lumaN+lumaS;FxaaFloat lumaWE=lumaW+lumaE;FxaaFloat subpixRcpRange=1.0/range;FxaaFloat subpixNSWE=lumaNS+lumaWE;FxaaFloat edgeHorz1=(-2.0*lumaM)+lumaNS;FxaaFloat edgeVert1=(-2.0*lumaM)+lumaWE;FxaaFloat lumaNESE=lumaNE+lumaSE;FxaaFloat lumaNWNE=lumaNW+lumaNE;FxaaFloat edgeHorz2=(-2.0*lumaE)+lumaNESE;FxaaFloat edgeVert2=(-2.0*lumaN)+lumaNWNE;FxaaFloat lumaNWSW=lumaNW+lumaSW;FxaaFloat lumaSWSE=lumaSW+lumaSE;FxaaFloat edgeHorz4=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);FxaaFloat edgeVert4=(abs(edgeVert1)*2.0)+abs(edgeVert2);FxaaFloat edgeHorz3=(-2.0*lumaW)+lumaNWSW;FxaaFloat edgeVert3=(-2.0*lumaS)+lumaSWSE;FxaaFloat edgeHorz=abs(edgeHorz3)+edgeHorz4;FxaaFloat edgeVert=abs(edgeVert3)+edgeVert4;FxaaFloat subpixNWSWNESE=lumaNWSW+lumaNESE;FxaaFloat lengthSign=fxaaQualityRcpFrame.x;FxaaBool horzSpan=edgeHorz>=edgeVert;FxaaFloat subpixA=subpixNSWE*2.0+subpixNWSWNESE;if(!horzSpan)lumaN=lumaW;if(!horzSpan)lumaS=lumaE;if(horzSpan)lengthSign=fxaaQualityRcpFrame.y;FxaaFloat subpixB=(subpixA*(1.0/12.0))-lumaM;FxaaFloat gradientN=lumaN-lumaM;FxaaFloat gradientS=lumaS-lumaM;FxaaFloat lumaNN=lumaN+lumaM;FxaaFloat lumaSS=lumaS+lumaM;FxaaBool pairN=abs(gradientN)>=abs(gradientS);FxaaFloat gradient=max(abs(gradientN),abs(gradientS));if(pairN)lengthSign=-lengthSign;FxaaFloat subpixC=FxaaSat(abs(subpixB)*subpixRcpRange);FxaaFloat2 posB;posB.x=posM.x;posB.y=posM.y;FxaaFloat2 offNP;offNP.x=(!horzSpan)?0.0:fxaaQualityRcpFrame.x;offNP.y=(horzSpan)?0.0:fxaaQualityRcpFrame.y;if(!horzSpan)posB.x+=lengthSign*0.5;if(horzSpan)posB.y+=lengthSign*0.5;FxaaFloat2 posN;posN.x=posB.x-offNP.x*FXAA_QUALITY_P0;posN.y=posB.y-offNP.y*FXAA_QUALITY_P0;FxaaFloat2 posP;posP.x=posB.x+offNP.x*FXAA_QUALITY_P0;posP.y=posB.y+offNP.y*FXAA_QUALITY_P0;FxaaFloat subpixD=((-2.0)*subpixC)+3.0;FxaaFloat lumaEndN=FxaaLuma(FxaaTexTop(tex,posN));FxaaFloat subpixE=subpixC*subpixC;FxaaFloat lumaEndP=FxaaLuma(FxaaTexTop(tex,posP));if(!pairN)lumaNN=lumaSS;FxaaFloat gradientScaled=gradient*1.0/4.0;FxaaFloat lumaMM=lumaM-lumaNN*0.5;FxaaFloat subpixF=subpixD*subpixE;FxaaBool lumaMLTZero=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;FxaaBool doneN=abs(lumaEndN)>=gradientScaled;FxaaBool doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P1;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P1;FxaaBool doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P1;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P1;if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P2;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P2;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P2;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P2;\n#if (FXAA_QUALITY_PS>3)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P3;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P3;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P3;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P3;\n#if (FXAA_QUALITY_PS>4)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P4;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P4;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P4;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P4;\n#if (FXAA_QUALITY_PS>5)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P5;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P5;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P5;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P5;\n#if (FXAA_QUALITY_PS>6)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P6;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P6;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P6;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P6;\n#if (FXAA_QUALITY_PS>7)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P7;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P7;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P7;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P7;\n#if (FXAA_QUALITY_PS>8)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P8;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P8;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P8;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P8;\n#if (FXAA_QUALITY_PS>9)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P9;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P9;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P9;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P9;\n#if (FXAA_QUALITY_PS>10)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P10;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P10;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P10;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P10;\n#if (FXAA_QUALITY_PS>11)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P11;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P11;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P11;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P11;\n#if (FXAA_QUALITY_PS>12)\nif(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P12;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P12;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P12;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P12;}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}\n#endif\n}FxaaFloat dstN=posM.x-posN.x;FxaaFloat dstP=posP.x-posM.x;if(!horzSpan)dstN=posM.y-posN.y;if(!horzSpan)dstP=posP.y-posM.y;FxaaBool goodSpanN=(lumaEndN<0.0)!=lumaMLTZero;FxaaFloat spanLength=(dstP+dstN);FxaaBool goodSpanP=(lumaEndP<0.0)!=lumaMLTZero;FxaaFloat spanLengthRcp=1.0/spanLength;FxaaBool directionN=dstN<dstP;FxaaFloat dst=min(dstN,dstP);FxaaBool goodSpan=directionN?goodSpanN:goodSpanP;FxaaFloat subpixG=subpixF*subpixF;FxaaFloat pixelOffset=(dst*(-spanLengthRcp))+0.5;FxaaFloat subpixH=subpixG*fxaaQualitySubpix;FxaaFloat pixelOffsetGood=goodSpan?pixelOffset:0.0;FxaaFloat pixelOffsetSubpix=max(pixelOffsetGood,subpixH);if(!horzSpan)posM.x+=pixelOffsetSubpix*lengthSign;if(horzSpan)posM.y+=pixelOffsetSubpix*lengthSign;\n#if (FXAA_DISCARD==1)\nreturn FxaaTexTop(tex,posM);\n#else\nreturn FxaaFloat4(FxaaTexTop(tex,posM).xyz,lumaM);\n#endif\n}\n#endif\nvoid main(){gl_FragColor=FxaaPixelShader(vUv,vec4(0.0),tDiffuse,tDiffuse,tDiffuse,resolution,vec4(0.0),vec4(0.0),vec4(0.0),0.75,0.166,0.0833,0.0,0.0,0.0,vec4(0.0));gl_FragColor.a=texture2D(tDiffuse,vUv).a;}"
  };
  e.BodyPart = Fr, e.CapeObject = Cr, e.CompositeAnimation = Wr, e.ElytraObject = Rr, e.FXAASkinViewer = /*#__PURE__*/function (_Xr) {
    _inherits(_class2, _Xr);

    var _super12 = _createSuper(_class2);

    function _class2(e) {
      var _this18;

      _classCallCheck(this, _class2);

      _this18 = _super12.call(this, e), _this18.composer = new na(_this18.renderer), _this18.renderPass = new ra(_this18.scene, _this18.camera), _this18.fxaaPass = new $r(aa), _this18.composer.addPass(_this18.renderPass), _this18.composer.addPass(_this18.fxaaPass), _this18.updateComposerSize();
      return _this18;
    }

    _createClass(_class2, [{
      key: "setSize",
      value: function setSize(e, t) {
        _get(_getPrototypeOf(_class2.prototype), "setSize", this).call(this, e, t), void 0 !== this.composer && this.updateComposerSize();
      }
    }, {
      key: "updateComposerSize",
      value: function updateComposerSize() {
        this.composer.setSize(this.width, this.height);
        var e = this.renderer.getPixelRatio();
        this.composer.setPixelRatio(e), this.fxaaPass.material.uniforms.resolution.value.x = 1 / (this.width * e), this.fxaaPass.material.uniforms.resolution.value.y = 1 / (this.height * e);
      }
    }, {
      key: "render",
      value: function render() {
        this.composer.render();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(_class2.prototype), "dispose", this).call(this), this.fxaaPass.fsQuad.dispose();
      }
    }]);

    return _class2;
  }(Xr), e.FlyingAnimation = function (e, t) {
    t < 0 && (t = 0);
    var n = (a = 1, (i = (t *= 20) * t / 100) <= (r = 0) ? r : i >= a ? a : i);
    var i, r, a;
    e.rotation.x = n * Math.PI / 2, e.skin.head.rotation.x = n > .5 ? Math.PI / 4 - e.rotation.x : 0;
    var o = .25 * Math.PI * n;
    e.skin.leftArm.rotation.z = o, e.skin.rightArm.rotation.z = -o;
    var s = .34906584,
        l = Math.PI / 2,
        c = Math.pow(.9, t);
    e.elytra.leftWing.rotation.x = s + -.08726644 * c, e.elytra.leftWing.rotation.z = l + c * (.2617994 - l), e.elytra.updateRightWing();
  }, e.PlayerObject = Ir, e.RootAnimation = Vr, e.RotatingAnimation = function (e, t) {
    e.rotation.y = t;
  }, e.RunningAnimation = function (e, t) {
    var n = e.skin;
    t = 15 * t + .5 * Math.PI, n.leftLeg.rotation.x = 1.3 * Math.cos(t + Math.PI), n.rightLeg.rotation.x = 1.3 * Math.cos(t), n.leftArm.rotation.x = 1.5 * Math.cos(t), n.rightArm.rotation.x = 1.5 * Math.cos(t + Math.PI);
    var i = .1 * Math.PI;
    n.leftArm.rotation.z = .1 * Math.cos(t) + i, n.rightArm.rotation.z = .1 * Math.cos(t + Math.PI) - i, e.position.y = Math.cos(2 * t), e.position.x = .15 * Math.cos(t), e.rotation.z = .01 * Math.cos(t + Math.PI);
    var r = .3 * Math.PI;
    e.cape.rotation.x = .1 * Math.sin(2 * t) + r;
  }, e.SkinObject = Nr, e.SkinViewer = Xr, e.WalkingAnimation = function (e, t) {
    var n = e.skin;
    t *= 8, n.leftLeg.rotation.x = .5 * Math.sin(t), n.rightLeg.rotation.x = .5 * Math.sin(t + Math.PI), n.leftArm.rotation.x = .5 * Math.sin(t + Math.PI), n.rightArm.rotation.x = .5 * Math.sin(t);
    var i = .02 * Math.PI;
    n.leftArm.rotation.z = .03 * Math.cos(t) + i, n.rightArm.rotation.z = .03 * Math.cos(t + Math.PI) - i, n.head.rotation.y = .2 * Math.sin(t / 4), n.head.rotation.x = .1 * Math.sin(t / 5);
    var r = .06 * Math.PI;
    e.cape.rotation.x = .06 * Math.sin(t / 1.5) + r;
  }, e.createOrbitControls = function (e) {
    var t = new Yr(e.camera, e.renderer.domElement);
    return t.enablePan = !1, t.target = new k(0, -8, 0), t.minDistance = 10, t.maxDistance = 256, t.update(), t;
  }, e.invokeAnimation = Hr, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_main_bg_mobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/main-bg--mobile.png */ "./resources/assets/img/main-bg--mobile.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_main_bg_mobile_png__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main[data-v-3aa215e0] {\n  margin: -64px 0 0 0;\n  padding: 0;\n  width: 100%;\n}\n.main-primary[data-v-3aa215e0] {\n  height: 100vh;\n}\n.main-primary--mobile[data-v-3aa215e0] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/img/1_8_texturemap_redux.png":
/*!*******************************************************!*\
  !*** ./resources/assets/img/1_8_texturemap_redux.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/1_8_texturemap_redux.png?07bed7c1f210da99bf21ad60f9fc255c");

/***/ }),

/***/ "./resources/assets/img/hacksore.png":
/*!*******************************************!*\
  !*** ./resources/assets/img/hacksore.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/hacksore.png?862c0903eccbf89af31830c54823fcc7");

/***/ }),

/***/ "./resources/assets/img/haka.png":
/*!***************************************!*\
  !*** ./resources/assets/img/haka.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/haka.png?b019607a27bc5386273b6dc2b44067a8");

/***/ }),

/***/ "./resources/assets/img/main-bg--mobile.png":
/*!**************************************************!*\
  !*** ./resources/assets/img/main-bg--mobile.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/main-bg--mobile.png?b28affe8004147499817e63414ef4058");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_3aa215e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_3aa215e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_3aa215e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/components/AppSkinViewer.vue":
/*!************************************************!*\
  !*** ./resources/components/AppSkinViewer.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true& */ "./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true&");
/* harmony import */ var _AppSkinViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSkinViewer.vue?vue&type=script&lang=js& */ "./resources/components/AppSkinViewer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppSkinViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f2453c62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/AppSkinViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/pages/main-page.vue":
/*!***************************************!*\
  !*** ./resources/pages/main-page.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.vue?vue&type=template&id=3aa215e0&scoped=true& */ "./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true&");
/* harmony import */ var _main_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.vue?vue&type=script&lang=js& */ "./resources/pages/main-page.vue?vue&type=script&lang=js&");
/* harmony import */ var _main_page_vue_vue_type_style_index_0_id_3aa215e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& */ "./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _main_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3aa215e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/pages/main-page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/components/AppSkinViewer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/components/AppSkinViewer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSkinViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSkinViewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSkinViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/pages/main-page.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/pages/main-page.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main-page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_3aa215e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=style&index=0&id=3aa215e0&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSkinViewer_vue_vue_type_template_id_f2453c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true&");


/***/ }),

/***/ "./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_3aa215e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main-page.vue?vue&type=template&id=3aa215e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/AppSkinViewer.vue?vue&type=template&id=f2453c62&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._b(
      {},
      "div",
      {
        reloadSkin: _vm.reloadSkin,
        rotateAnimationChange: _vm.rotateAnimationChange,
        primaryAnimationChange: _vm.primaryAnimationChange,
        resetAllSettings: _vm.resetAllSettings,
        layersChange: _vm.layersChange,
        saveSkin: _vm.saveSkin,
        skinViewer: _vm.skinViewer,
        availableAnimations: _vm.availableAnimations,
        orbitControl: _vm.orbitControl,
        rotateAnimation: _vm.rotateAnimation,
        primaryAnimation: _vm.primaryAnimation
      },
      false
    ),
    [
      _vm._t("skinContainer", [
        _c("canvas", { staticClass: "d-none", attrs: { id: "skinContainer" } })
      ]),
      _vm._v(" "),
      _vm._t(
        "customSize",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("label", [
              _vm._v("\n                Width:\n                "),
              _c("input", {
                attrs: { type: "number", id: "canvasWidth" },
                domProps: { value: _vm.width },
                on: {
                  change: function($event) {
                    _vm.skinViewer.width = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Height:\n                "),
              _c("input", {
                attrs: { type: "number", id: "canvasHeight" },
                domProps: { value: _vm.height },
                on: {
                  change: function($event) {
                    _vm.skinViewer.height = $event.target.value
                  }
                }
              })
            ])
          ])
        ],
        null,
        { skinViewer: _vm.skinViewer, width: _vm.width, height: _vm.height }
      ),
      _vm._v(" "),
      _vm._t(
        "globalSpeed",
        [
          _c("div", { staticClass: "d-none" }, [
            _vm._v("\n            Global Speed:\n            "),
            _c("label", [
              _c("input", {
                attrs: {
                  type: "number",
                  value: "1",
                  step: "0.1",
                  id: "globalAnimationSpeed"
                },
                on: {
                  change: function($event) {
                    _vm.skinViewer.animations.speed = $event.target.value
                  }
                }
              })
            ])
          ])
        ],
        null,
        { skinViewer: _vm.skinViewer }
      ),
      _vm._v(" "),
      _vm._t(
        "pauseButton",
        [
          _c("div", { staticClass: "d-none" }, [
            _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.skinViewer.animations.paused = !_vm.skinViewer
                      .animations.paused
                  }
                }
              },
              [_vm._v("\n                Pause / Resume\n            ")]
            )
          ])
        ],
        null,
        { skinViewer: _vm.skinViewer }
      ),
      _vm._v(" "),
      _vm._t(
        "rotateAnimation",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("label", [
              _c("input", {
                attrs: { type: "checkbox", id: "rotateAnimation" },
                on: {
                  change: function($event) {
                    return _vm.rotateAnimationChange($event.target.checked)
                  }
                }
              }),
              _vm._v("\n                Enable\n            ")
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Speed:\n                "),
              _c("input", {
                attrs: {
                  type: "number",
                  value: "1",
                  step: "0.1",
                  id: "rotateAnimationSpeed"
                },
                on: {
                  change: function($event) {
                    _vm.rotateAnimation
                      ? (_vm.rotateAnimation.speed = $event.target.value)
                      : null
                  }
                }
              })
            ])
          ])
        ],
        null,
        {
          rotateAnimation: _vm.rotateAnimation,
          rotateAnimationChange: _vm.rotateAnimationChange
        }
      ),
      _vm._v(" "),
      _vm._t(
        "primaryAnimation",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("div", { attrs: { id: "primaryAnimation" } }, [
              _c("label", [
                _c("input", {
                  attrs: {
                    name: "primaryAnimation",
                    type: "radio",
                    value: "",
                    checked: ""
                  },
                  on: {
                    change: function($event) {
                      return _vm.primaryAnimationChange($event.target.value)
                    }
                  }
                }),
                _vm._v("\n                    None\n                ")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  attrs: {
                    name: "primaryAnimation",
                    type: "radio",
                    value: "walk"
                  },
                  on: {
                    change: function($event) {
                      return _vm.primaryAnimationChange($event.target.value)
                    }
                  }
                }),
                _vm._v("\n                    Walk\n                ")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  attrs: {
                    name: "primaryAnimation",
                    type: "radio",
                    value: "run"
                  },
                  on: {
                    change: function($event) {
                      return _vm.primaryAnimationChange($event.target.value)
                    }
                  }
                }),
                _vm._v("\n                    Run\n                ")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  attrs: {
                    name: "primaryAnimation",
                    type: "radio",
                    value: "fly"
                  },
                  on: {
                    change: function($event) {
                      return _vm.primaryAnimationChange($event.target.value)
                    }
                  }
                }),
                _vm._v("\n                    Fly\n                ")
              ])
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Speed:\n                "),
              _c("input", {
                attrs: {
                  type: "number",
                  value: "1",
                  step: "0.1",
                  id: "primaryAnimationSpeed"
                },
                on: {
                  change: function($event) {
                    _vm.primaryAnimation !== null
                      ? (_vm.primaryAnimation.speed = $event.target.value)
                      : null
                  }
                }
              })
            ])
          ])
        ],
        null,
        {
          primaryAnimation: _vm.primaryAnimation,
          primaryAnimationChange: _vm.primaryAnimationChange
        }
      ),
      _vm._v(" "),
      _vm._t(
        "orbitControl",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("label", [
              _c("input", {
                attrs: { type: "checkbox", id: "controlRotate", checked: "" },
                on: {
                  change: function($event) {
                    _vm.orbitControl.enableRotate = !_vm.orbitControl
                      .enableRotate
                  }
                }
              }),
              _vm._v("\n                Enable Rotate\n            ")
            ]),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                attrs: { type: "checkbox", id: "controlZoom", checked: "" },
                on: {
                  change: function($event) {
                    _vm.orbitControl.enableZoom = !_vm.orbitControl.enableZoom
                  }
                }
              }),
              _vm._v("\n                Enable Zoom\n            ")
            ]),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                attrs: { type: "checkbox", id: "controlPan" },
                on: {
                  change: function($event) {
                    _vm.orbitControl.enablePan = !_vm.orbitControl.enablePan
                  }
                }
              }),
              _vm._v("\n                Enable Pan\n            ")
            ])
          ])
        ],
        null,
        { orbitControl: _vm.orbitControl }
      ),
      _vm._v(" "),
      _vm._t(
        "layersTable",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("table", { attrs: { id: "layersTable" } }, [
              _vm._m(0),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("th", [_vm._v("inner")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "head",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "body",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "rightArm",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "leftArm",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "rightLeg",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "innerLayer",
                        "data-part": "leftLeg",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("outer")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "head",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "body",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "rightArm",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "leftArm",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "rightLeg",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        "data-layer": "outerLayer",
                        "data-part": "leftLeg",
                        checked: ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.layersChange($event.target)
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ])
        ],
        null,
        { layersChange: _vm.layersChange }
      ),
      _vm._v(" "),
      _vm._t(
        "buttons",
        [
          _vm._t(
            "browseButton",
            [
              _c("div", { staticClass: "d-none" }, [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: { click: _vm.skinUrlUploadClick }
                  },
                  [
                    _vm._v(
                      "\n                        Открыть\n                    "
                    )
                  ]
                )
              ])
            ],
            null,
            { skinUrlUploadClick: _vm.skinUrlUploadClick }
          ),
          _vm._v(" "),
          _vm._t(
            "resetSkin",
            [
              _c("div", { staticClass: "d-none" }, [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: { click: _vm.returnInitialSkin }
                  },
                  [
                    _vm._v(
                      "\n                        Сбросить скин\n                    "
                    )
                  ]
                )
              ])
            ],
            null,
            { returnInitialSkin: _vm.returnInitialSkin }
          ),
          _vm._v(" "),
          _vm._t(
            "resetAllSettings",
            [
              _c("div", { staticClass: "d-none" }, [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: { click: _vm.resetAllSettings }
                  },
                  [
                    _vm._v(
                      "\n                        Сбросить настройки\n                    "
                    )
                  ]
                )
              ])
            ],
            null,
            { resetAllSettings: _vm.resetAllSettings }
          ),
          _vm._v(" "),
          _vm._t(
            "saveButton",
            [
              _c("div", { staticClass: "d-none" }, [
                _c("button", { on: { click: _vm.saveSkin } }, [
                  _vm._v(
                    "\n                        Сохранить\n                    "
                  )
                ])
              ])
            ],
            null,
            { saveSkin: _vm.saveSkin }
          )
        ],
        null,
        {
          skinUrlUploadClick: _vm.skinUrlUploadClick,
          saveSkin: _vm.saveSkin,
          returnInitialSkin: _vm.returnInitialSkin,
          resetAllSettings: _vm.resetAllSettings
        }
      ),
      _vm._v(" "),
      _vm._t(
        "inputs",
        [
          _c(
            "div",
            { staticClass: "d-none" },
            [
              _vm._t(
                "textInput",
                [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.skinUrl,
                          expression: "skinUrl"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "none",
                        list: "default_skins"
                      },
                      domProps: { value: _vm.skinUrl },
                      on: {
                        change: _vm.reloadSkin,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.skinUrl = $event.target.value
                        }
                      }
                    })
                  ])
                ],
                null,
                { skinUrl: _vm.skinUrl }
              ),
              _vm._v(" "),
              _vm._t(
                "loaderInput",
                [
                  _c("input", {
                    ref: "skinUrlUpload",
                    staticClass: "d-none",
                    attrs: { type: "file", accept: "image/*" },
                    on: {
                      change: function($event) {
                        return _vm.skinUploadChange($event.target)
                      }
                    }
                  })
                ],
                null,
                { skinUploadChange: _vm.skinUploadChange }
              )
            ],
            2
          )
        ],
        null,
        { skinUrl: _vm.skinUrl, skinUploadChange: _vm.skinUploadChange }
      ),
      _vm._v(" "),
      _vm._t(
        "skinLoad",
        [
          _c("div", { staticClass: "d-none" }, [
            _c("div", [
              _c("datalist", { attrs: { id: "default_skins" } }, [
                _c("option", {
                  domProps: {
                    value: __webpack_require__(/*! img/1_8_texturemap_redux.png */ "./resources/assets/img/1_8_texturemap_redux.png").default
                  }
                }),
                _vm._v(" "),
                _c("option", {
                  domProps: { value: __webpack_require__(/*! img/hacksore.png */ "./resources/assets/img/hacksore.png").default }
                }),
                _vm._v(" "),
                _c("option", {
                  domProps: { value: __webpack_require__(/*! img/haka.png */ "./resources/assets/img/haka.png").default }
                }),
                _vm._v(" "),
                _c("option", {
                  domProps: {
                    value: __webpack_require__(/*! img/1_8_texturemap_redux.png */ "./resources/assets/img/1_8_texturemap_redux.png").default
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Model:\n                "),
              _c(
                "select",
                { attrs: { id: "skinModel" }, on: { change: _vm.reloadSkin } },
                [
                  _c(
                    "option",
                    { attrs: { value: "auto-detect", selected: "" } },
                    [_vm._v("Auto detect")]
                  ),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "default" } }, [
                    _vm._v("Default")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "slim" } }, [_vm._v("Slim")])
                ]
              )
            ])
          ])
        ],
        null,
        { saveSkin: _vm.saveSkin, reloadSkin: _vm.reloadSkin }
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("head")]),
        _vm._v(" "),
        _c("th", [_vm._v("body")]),
        _vm._v(" "),
        _c("th", [_vm._v("right arm")]),
        _vm._v(" "),
        _c("th", [_vm._v("left arm")]),
        _vm._v(" "),
        _c("th", [_vm._v("right leg")]),
        _vm._v(" "),
        _c("th", [_vm._v("left leg")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/pages/main-page.vue?vue&type=template&id=3aa215e0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main d-block d-sm-none" }, [
    _c("div", { staticClass: "main-primary main-primary--mobile" }, [
      _vm._v("\n        1\n    ")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "main-inner" },
      [
        _vm._v("\n        2\n        "),
        _c(
          "v-form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("v-text-field", {
              attrs: { type: "email" },
              model: {
                value: _vm.email,
                callback: function($$v) {
                  _vm.email = $$v
                },
                expression: "email"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: { type: "password" },
              model: {
                value: _vm.password,
                callback: function($$v) {
                  _vm.password = $$v
                },
                expression: "password"
              }
            }),
            _vm._v(" "),
            _c("v-btn", { attrs: { type: "submit" } }, [_vm._v("Send")])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);