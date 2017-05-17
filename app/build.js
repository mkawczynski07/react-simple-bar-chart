import SimpleBarChart from './simple-bar-chart/SimpleBarChart';

(function (root, factory) {
  'use strict';
  if (typeof module === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.SimpleBarChart = factory;
  }
}(this, SimpleBarChart));