"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetComparableProducts200ResponseComparableProducts = _interopRequireDefault(require("./GetComparableProducts200ResponseComparableProducts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetComparableProducts200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response
 * @version 1.1
 */
var GetComparableProducts200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetComparableProducts200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response
   * @param comparableProducts {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts} 
   */
  function GetComparableProducts200Response(comparableProducts) {
    _classCallCheck(this, GetComparableProducts200Response);
    GetComparableProducts200Response.initialize(this, comparableProducts);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetComparableProducts200Response, null, [{
    key: "initialize",
    value: function initialize(obj, comparableProducts) {
      obj['comparableProducts'] = comparableProducts;
    }

    /**
     * Constructs a <code>GetComparableProducts200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response} The populated <code>GetComparableProducts200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetComparableProducts200Response();
        if (data.hasOwnProperty('comparableProducts')) {
          obj['comparableProducts'] = _GetComparableProducts200ResponseComparableProducts["default"].constructFromObject(data['comparableProducts']);
        }
      }
      return obj;
    }
  }]);
  return GetComparableProducts200Response;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts} comparableProducts
 */
GetComparableProducts200Response.prototype['comparableProducts'] = undefined;
var _default = GetComparableProducts200Response;
exports["default"] = _default;