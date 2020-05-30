"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Test = require("./Test/Test");

Object.keys(_Test).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Test[key];
    }
  });
});

var _Button = require("./Button/Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});