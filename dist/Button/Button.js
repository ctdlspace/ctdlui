"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Button
 *  @param props
 *  @param props.children
 *  @param {function} [props.onClick]
 *  @return {*}
 */
function Button(props) {
  return /*#__PURE__*/_react["default"].createElement("button", props, props.children);
}