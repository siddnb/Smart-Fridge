"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent = _interopRequireDefault(require("./GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GuessNutritionByDishName200ResponseCalories model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories
 * @version 1.1
 */
var GuessNutritionByDishName200ResponseCalories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GuessNutritionByDishName200ResponseCalories</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories
   * @param confidenceRange95Percent {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent} 
   * @param standardDeviation {Number} 
   * @param unit {String} 
   * @param value {Number} 
   */
  function GuessNutritionByDishName200ResponseCalories(confidenceRange95Percent, standardDeviation, unit, value) {
    _classCallCheck(this, GuessNutritionByDishName200ResponseCalories);
    GuessNutritionByDishName200ResponseCalories.initialize(this, confidenceRange95Percent, standardDeviation, unit, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GuessNutritionByDishName200ResponseCalories, null, [{
    key: "initialize",
    value: function initialize(obj, confidenceRange95Percent, standardDeviation, unit, value) {
      obj['confidenceRange95Percent'] = confidenceRange95Percent;
      obj['standardDeviation'] = standardDeviation;
      obj['unit'] = unit;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>GuessNutritionByDishName200ResponseCalories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} The populated <code>GuessNutritionByDishName200ResponseCalories</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GuessNutritionByDishName200ResponseCalories();
        if (data.hasOwnProperty('confidenceRange95Percent')) {
          obj['confidenceRange95Percent'] = _GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent["default"].constructFromObject(data['confidenceRange95Percent']);
        }
        if (data.hasOwnProperty('standardDeviation')) {
          obj['standardDeviation'] = _ApiClient["default"].convertToType(data['standardDeviation'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GuessNutritionByDishName200ResponseCalories;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent} confidenceRange95Percent
 */
GuessNutritionByDishName200ResponseCalories.prototype['confidenceRange95Percent'] = undefined;

/**
 * @member {Number} standardDeviation
 */
GuessNutritionByDishName200ResponseCalories.prototype['standardDeviation'] = undefined;

/**
 * @member {String} unit
 */
GuessNutritionByDishName200ResponseCalories.prototype['unit'] = undefined;

/**
 * @member {Number} value
 */
GuessNutritionByDishName200ResponseCalories.prototype['value'] = undefined;
var _default = GuessNutritionByDishName200ResponseCalories;
exports["default"] = _default;