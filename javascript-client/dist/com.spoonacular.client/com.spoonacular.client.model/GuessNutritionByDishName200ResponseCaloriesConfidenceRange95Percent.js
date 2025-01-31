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
 * The GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent
 * @version 1.1
 */
var GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent
   * @param max {Number} 
   * @param min {Number} 
   */
  function GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent(max, min) {
    _classCallCheck(this, GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent);
    GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent.initialize(this, max, min);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent, null, [{
    key: "initialize",
    value: function initialize(obj, max, min) {
      obj['max'] = max;
      obj['min'] = min;
    }

    /**
     * Constructs a <code>GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent} The populated <code>GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent();
        if (data.hasOwnProperty('max')) {
          obj['max'] = _ApiClient["default"].convertToType(data['max'], 'Number');
        }
        if (data.hasOwnProperty('min')) {
          obj['min'] = _ApiClient["default"].convertToType(data['min'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent;
}();
/**
 * @member {Number} max
 */
GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent.prototype['max'] = undefined;

/**
 * @member {Number} min
 */
GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent.prototype['min'] = undefined;
var _default = GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent;
exports["default"] = _default;