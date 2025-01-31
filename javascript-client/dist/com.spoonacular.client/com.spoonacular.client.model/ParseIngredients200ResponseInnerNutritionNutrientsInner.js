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
 * The ParseIngredients200ResponseInnerNutritionNutrientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner
 * @version 1.1
 */
var ParseIngredients200ResponseInnerNutritionNutrientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParseIngredients200ResponseInnerNutritionNutrientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner
   * @param name {String} 
   * @param amount {Number} 
   * @param unit {String} 
   * @param percentOfDailyNeeds {Number} 
   */
  function ParseIngredients200ResponseInnerNutritionNutrientsInner(name, amount, unit, percentOfDailyNeeds) {
    _classCallCheck(this, ParseIngredients200ResponseInnerNutritionNutrientsInner);
    ParseIngredients200ResponseInnerNutritionNutrientsInner.initialize(this, name, amount, unit, percentOfDailyNeeds);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ParseIngredients200ResponseInnerNutritionNutrientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, name, amount, unit, percentOfDailyNeeds) {
      obj['name'] = name;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['percentOfDailyNeeds'] = percentOfDailyNeeds;
    }

    /**
     * Constructs a <code>ParseIngredients200ResponseInnerNutritionNutrientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner} The populated <code>ParseIngredients200ResponseInnerNutritionNutrientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParseIngredients200ResponseInnerNutritionNutrientsInner();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('percentOfDailyNeeds')) {
          obj['percentOfDailyNeeds'] = _ApiClient["default"].convertToType(data['percentOfDailyNeeds'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ParseIngredients200ResponseInnerNutritionNutrientsInner;
}();
/**
 * @member {String} name
 */
ParseIngredients200ResponseInnerNutritionNutrientsInner.prototype['name'] = undefined;

/**
 * @member {Number} amount
 */
ParseIngredients200ResponseInnerNutritionNutrientsInner.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
ParseIngredients200ResponseInnerNutritionNutrientsInner.prototype['unit'] = undefined;

/**
 * @member {Number} percentOfDailyNeeds
 */
ParseIngredients200ResponseInnerNutritionNutrientsInner.prototype['percentOfDailyNeeds'] = undefined;
var _default = ParseIngredients200ResponseInnerNutritionNutrientsInner;
exports["default"] = _default;