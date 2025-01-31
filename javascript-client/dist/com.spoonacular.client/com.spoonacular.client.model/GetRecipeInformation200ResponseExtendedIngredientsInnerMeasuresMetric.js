"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric
 * @version 1.1
 */
var GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric
   * @param amount {Number} 
   * @param unitLong {String} 
   * @param unitShort {String} 
   */
  function GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric(amount, unitLong, unitShort) {
    _classCallCheck(this, GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric);
    GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.initialize(this, amount, unitLong, unitShort);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unitLong, unitShort) {
      obj['amount'] = amount;
      obj['unitLong'] = unitLong;
      obj['unitShort'] = unitShort;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric} The populated <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('unitLong')) {
          obj['unitLong'] = _ApiClient["default"].convertToType(data['unitLong'], 'String');
        }
        if (data.hasOwnProperty('unitShort')) {
          obj['unitShort'] = _ApiClient["default"].convertToType(data['unitShort'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric;
}();
/**
 * @member {Number} amount
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['amount'] = undefined;

/**
 * @member {String} unitLong
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['unitLong'] = undefined;

/**
 * @member {String} unitShort
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['unitShort'] = undefined;
var _default = GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric;
exports["default"] = _default;