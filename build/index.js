(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-simple-bar-chart"] = factory(require("react"));
	else
		root["react-simple-bar-chart"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LABEL_STYLES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getBarStyles;
exports.getBarWidth = getBarWidth;
exports.isVertical = isVertical;

var _utils = __webpack_require__(1);

var STYLES = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  transition: 'height .3s ease, width .3s ease'
};

var LABEL_STYLES = exports.LABEL_STYLES = {
  position: 'absolute',
  bottom: -25,
  height: 20,
  textAlign: 'center',
  fontSize: 12,
  fontFamily: 'Roboto, Arial',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

function getBarStyles(_ref, barWidth, item) {
  var orientation = _ref.orientation,
      color = _ref.color;

  if (isVertical(orientation)) {
    return _extends({}, STYLES, {
      height: item.percent + '%',
      width: barWidth,
      background: getBarColor(item, color)
    });
  }
  return _extends({}, STYLES, {
    height: barWidth,
    width: item.percent + '%',
    background: getBarColor(item, color)
  });
}

function getBarWidth(_ref2, _ref3) {
  var margin = _ref2.margin,
      singleBarWidth = _ref2.singleBarWidth,
      orientation = _ref2.orientation;
  var width = _ref3.width,
      height = _ref3.height,
      data = _ref3.data;

  var allBarsWidth = (isVertical(orientation) ? width : height) - data.length * margin;
  var defaultBarWidth = allBarsWidth / data.length;
  return (0, _utils.Optional)(singleBarWidth).or(defaultBarWidth);
}

function isVertical(orientation) {
  return orientation === 'vertical';
}

function getBarColor(item, color) {
  return (0, _utils.isObject)(item) ? item.color || color : color;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STYLES, 'STYLES', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');

  __REACT_HOT_LOADER__.register(LABEL_STYLES, 'LABEL_STYLES', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');

  __REACT_HOT_LOADER__.register(getBarStyles, 'getBarStyles', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');

  __REACT_HOT_LOADER__.register(getBarWidth, 'getBarWidth', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');

  __REACT_HOT_LOADER__.register(isVertical, 'isVertical', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');

  __REACT_HOT_LOADER__.register(getBarColor, 'getBarColor', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barStyles.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.isDefined = isDefined;
exports.Optional = Optional;
function isObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
}

function isDefined(object) {
  return typeof object !== 'undefined' && object !== null;
}

function Optional(value) {
  return {
    or: function or(orValue) {
      return isDefined(value) ? value : orValue;
    },
    isPresent: function isPresent() {
      return isDefined(value);
    },
    get: function get() {
      return value;
    }
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isObject, 'isObject', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/utils.js');

  __REACT_HOT_LOADER__.register(isDefined, 'isDefined', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/utils.js');

  __REACT_HOT_LOADER__.register(Optional, 'Optional', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/utils.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _Axis = __webpack_require__(4);

var _Axis2 = _interopRequireDefault(_Axis);

var _utils = __webpack_require__(1);

var _barContainerStyles = __webpack_require__(6);

var _barContainerStyles2 = _interopRequireDefault(_barContainerStyles);

var _barStyles = __webpack_require__(0);

var _barStyles2 = _interopRequireDefault(_barStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBarChart = function (_Component) {
  _inherits(SimpleBarChart, _Component);

  function SimpleBarChart(props) {
    _classCallCheck(this, SimpleBarChart);

    var _this = _possibleConstructorReturn(this, (SimpleBarChart.__proto__ || Object.getPrototypeOf(SimpleBarChart)).call(this, props));

    _this.state = { min: 0, max: 0, data: [] };
    _this.calculateChartSize = _this.calculateChartSize.bind(_this);
    return _this;
  }

  _createClass(SimpleBarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildData(this.props.data);
      this.calculateChartSize();
      window.addEventListener('resize', this.calculateChartSize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.buildData(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calculateChartSize);
    }
  }, {
    key: 'buildData',
    value: function buildData() {
      var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var result = this.buildObjectsList(newData);
      var max = this.getMax(result);
      var min = this.getMin(result);
      var data = this.calculatePercents(result, max);
      this.setState({
        min: min, max: max, data: data
      });
    }
  }, {
    key: 'buildObjectsList',
    value: function buildObjectsList(data) {
      return data.map(function (item) {
        return (0, _utils.isObject)(item) ? item : { value: item };
      });
    }
  }, {
    key: 'getMax',
    value: function getMax(data) {
      return data.reduce(function (max, item) {
        return item.value > max ? item.value : max;
      }, 0);
    }
  }, {
    key: 'getMin',
    value: function getMin(data) {
      return data.reduce(function (min, item) {
        return item.value < min ? item.value : min;
      }, 0);
    }
  }, {
    key: 'calculatePercents',
    value: function calculatePercents(data, max) {
      return data.map(function (item) {
        return _extends({ percent: parseInt(100 * item.value / max) }, item);
      });
    }
  }, {
    key: 'calculateChartSize',
    value: function calculateChartSize() {
      var _props = this.props,
          width = _props.width,
          height = _props.height;

      var size = this.chart.getBoundingClientRect();
      this.setState({
        width: (0, _utils.Optional)(width).or(size.width),
        height: (0, _utils.Optional)(height).or(size.height)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          _props2$className = _props2.className,
          className = _props2$className === undefined ? '' : _props2$className,
          enableAxis = _props2.enableAxis;
      var _state = this.state,
          data = _state.data,
          min = _state.min,
          max = _state.max,
          width = _state.width,
          height = _state.height;

      var chartStyles = {
        width: width, height: height,
        position: 'relative'
      };

      return React.createElement(
        'div',
        { className: 'simple-bar-chart ' + className, style: chartStyles,
          ref: function ref(chart) {
            return _this2.chart = chart;
          } },
        enableAxis ? React.createElement(_Axis2.default, _extends({}, this.props, this.state)) : null,
        data.map(function (item, index) {
          return _this2.renderBar(item, index);
        })
      );
    }
  }, {
    key: 'renderBar',
    value: function renderBar(item, index) {
      var barWidth = (0, _barStyles.getBarWidth)(this.props, this.state);
      var barContainerStyles = (0, _barContainerStyles2.default)(this.props, barWidth, index);
      var barStyles = (0, _barStyles2.default)(this.props, barWidth, item);
      var _props3 = this.props,
          margin = _props3.margin,
          labelColor = _props3.labelColor;

      var labelStyles = _extends({}, _barStyles.LABEL_STYLES, {
        width: 'calc(100% + ' + margin + 'px)',
        left: -1 * parseInt(margin / 2),
        color: labelColor
      });

      return React.createElement(
        'div',
        { className: 'sbc-bar-container',
          style: barContainerStyles,
          key: index },
        React.createElement(
          'div',
          { className: 'sbc-bar', style: barStyles, title: item.label },
          (0, _utils.isDefined)(item.label) ? React.createElement(
            'span',
            { style: labelStyles, title: item.label },
            item.label
          ) : null
        )
      );
    }
  }]);

  return SimpleBarChart;
}(_react.Component);

SimpleBarChart.defaultProps = {
  data: [],
  color: '#7FB2E5',
  margin: 5,
  orientation: 'vertical',
  xAxisAmount: 4,
  axisColor: '#DFDFDF',
  axisValueColor: '#787878',
  enableAxis: true,
  labelColor: '#787878'
};

var _default = SimpleBarChart;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SimpleBarChart, 'SimpleBarChart', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/SimpleBarChart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/SimpleBarChart.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _axisStyle = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Axis = function (_Component) {
  _inherits(Axis, _Component);

  function Axis() {
    _classCallCheck(this, Axis);

    return _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));
  }

  _createClass(Axis, [{
    key: 'getAxis',
    value: function getAxis() {
      var _props = this.props,
          xAxisAmount = _props.xAxisAmount,
          width = _props.width,
          axisColor = _props.axisColor;

      var sum = this.sumDataValues();
      var axisInterval = parseInt(sum / xAxisAmount);
      var axis = [];
      for (var x = 1; x <= xAxisAmount; x += 1) {
        axis.push({
          value: axisInterval * x,
          styles: _extends({}, _axisStyle.AXIS_STYLES, {
            bottom: parseInt(axisInterval * x * 100 / sum) + '%',
            width: width,
            background: axisColor
          })
        });
      }
      return axisInterval > 0 ? axis : [];
    }
  }, {
    key: 'sumDataValues',
    value: function sumDataValues() {
      return this.props.data.reduce(function (sum, item) {
        return sum += item.value;
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          axisInterval = _props2.axisInterval,
          axisValueColor = _props2.axisValueColor;

      var axis = this.getAxis();
      var valueStyles = _extends({}, _axisStyle.VALUE_STYLES, {
        color: axisValueColor
      });
      return React.createElement(
        'div',
        null,
        axis.map(function (axis, index) {
          return React.createElement(
            'div',
            { className: 'sbc-bar-axis',
              style: axis.styles,
              key: index },
            React.createElement(
              'span',
              { style: valueStyles },
              axis.value
            )
          );
        })
      );
    }
  }]);

  return Axis;
}(_react.Component);

exports.default = Axis;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Axis, 'Axis', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/components/Axis.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var VALUE_STYLES = exports.VALUE_STYLES = {
  position: 'absolute',
  display: 'block',
  width: 30,
  top: -8,
  left: -35,
  textAlign: 'right',
  fontFamily: 'Roboto, Arial',
  fontSize: 10
};

var AXIS_STYLES = exports.AXIS_STYLES = {
  position: 'absolute',
  left: 0,
  height: 1
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VALUE_STYLES, 'VALUE_STYLES', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/axisStyle.js');

  __REACT_HOT_LOADER__.register(AXIS_STYLES, 'AXIS_STYLES', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/axisStyle.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getBarContainerStyles;

var _barStyles = __webpack_require__(0);

var STYLES = {
  position: 'absolute',
  transition: 'width .3s ease, height .3s ease'
};

function getBarContainerStyles(props, barWidth, index) {
  var margin = props.margin,
      orientation = props.orientation;

  var chartLeftMargin = margin / 2;

  if ((0, _barStyles.isVertical)(orientation)) {
    return _extends({}, STYLES, {
      height: '100%',
      bottom: 0,
      left: index === 0 ? chartLeftMargin : (barWidth + margin) * index + chartLeftMargin
    });
  }
  return _extends({}, STYLES, {
    width: '100%',
    top: (barWidth + margin) * index,
    left: 0
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STYLES, 'STYLES', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barContainerStyles.js');

  __REACT_HOT_LOADER__.register(getBarContainerStyles, 'getBarContainerStyles', 'c:/projekty/react-simple-bar-chart/app/simple-bar-chart/styles/barContainerStyles.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map