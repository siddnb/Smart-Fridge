"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric = _interopRequireDefault(require("./GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount
 * @version 1.1
 */
var GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount
   * @param metric {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric} 
   * @param us {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric} 
   */
  function GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount(metric, us) {
    _classCallCheck(this, GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount);
    GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount.initialize(this, metric, us);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount, null, [{
    key: "initialize",
    value: function initialize(obj, metric, us) {
      obj['metric'] = metric;
      obj['us'] = us;
    }

    /**
     * Constructs a <code>GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount} The populated <code>GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount();
        if (data.hasOwnProperty('metric')) {
          obj['metric'] = _GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric["default"].constructFromObject(data['metric']);
        }
        if (data.hasOwnProperty('us')) {
          obj['us'] = _GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric["default"].constructFromObject(data['us']);
        }
      }
      return obj;
    }
  }]);
  return GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric} metric
 */
GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount.prototype['metric'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric} us
 */
GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount.prototype['us'] = undefined;
var _default = GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount;
exports["default"] = _default;