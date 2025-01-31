"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ParseIngredients200ResponseInnerNutritionWeightPerServing = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionWeightPerServing"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetShoppingList200ResponseAislesInnerItemsInnerMeasures model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInnerMeasures
 * @version 1.1
 */
var GetShoppingList200ResponseAislesInnerItemsInnerMeasures = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetShoppingList200ResponseAislesInnerItemsInnerMeasures</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInnerMeasures
   * @param original {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} 
   * @param metric {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} 
   * @param us {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} 
   */
  function GetShoppingList200ResponseAislesInnerItemsInnerMeasures(original, metric, us) {
    _classCallCheck(this, GetShoppingList200ResponseAislesInnerItemsInnerMeasures);
    GetShoppingList200ResponseAislesInnerItemsInnerMeasures.initialize(this, original, metric, us);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetShoppingList200ResponseAislesInnerItemsInnerMeasures, null, [{
    key: "initialize",
    value: function initialize(obj, original, metric, us) {
      obj['original'] = original;
      obj['metric'] = metric;
      obj['us'] = us;
    }

    /**
     * Constructs a <code>GetShoppingList200ResponseAislesInnerItemsInnerMeasures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInnerMeasures} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInnerMeasures} The populated <code>GetShoppingList200ResponseAislesInnerItemsInnerMeasures</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetShoppingList200ResponseAislesInnerItemsInnerMeasures();
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ParseIngredients200ResponseInnerNutritionWeightPerServing["default"].constructFromObject(data['original']);
        }
        if (data.hasOwnProperty('metric')) {
          obj['metric'] = _ParseIngredients200ResponseInnerNutritionWeightPerServing["default"].constructFromObject(data['metric']);
        }
        if (data.hasOwnProperty('us')) {
          obj['us'] = _ParseIngredients200ResponseInnerNutritionWeightPerServing["default"].constructFromObject(data['us']);
        }
      }
      return obj;
    }
  }]);
  return GetShoppingList200ResponseAislesInnerItemsInnerMeasures;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} original
 */
GetShoppingList200ResponseAislesInnerItemsInnerMeasures.prototype['original'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} metric
 */
GetShoppingList200ResponseAislesInnerItemsInnerMeasures.prototype['metric'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} us
 */
GetShoppingList200ResponseAislesInnerItemsInnerMeasures.prototype['us'] = undefined;
var _default = GetShoppingList200ResponseAislesInnerItemsInnerMeasures;
exports["default"] = _default;