"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ParseIngredients200ResponseInnerNutritionCaloricBreakdown = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionCaloricBreakdown"));
var _ParseIngredients200ResponseInnerNutritionNutrientsInner = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionNutrientsInner"));
var _ParseIngredients200ResponseInnerNutritionPropertiesInner = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionPropertiesInner"));
var _ParseIngredients200ResponseInnerNutritionWeightPerServing = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionWeightPerServing"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ParseIngredients200ResponseInnerNutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition
 * @version 1.1
 */
var ParseIngredients200ResponseInnerNutrition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParseIngredients200ResponseInnerNutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} 
   * @param properties {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} 
   * @param flavonoids {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} 
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} 
   * @param weightPerServing {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} 
   */
  function ParseIngredients200ResponseInnerNutrition(nutrients, properties, flavonoids, caloricBreakdown, weightPerServing) {
    _classCallCheck(this, ParseIngredients200ResponseInnerNutrition);
    ParseIngredients200ResponseInnerNutrition.initialize(this, nutrients, properties, flavonoids, caloricBreakdown, weightPerServing);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ParseIngredients200ResponseInnerNutrition, null, [{
    key: "initialize",
    value: function initialize(obj, nutrients, properties, flavonoids, caloricBreakdown, weightPerServing) {
      obj['nutrients'] = nutrients;
      obj['properties'] = properties;
      obj['flavonoids'] = flavonoids;
      obj['caloricBreakdown'] = caloricBreakdown;
      obj['weightPerServing'] = weightPerServing;
    }

    /**
     * Constructs a <code>ParseIngredients200ResponseInnerNutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition} The populated <code>ParseIngredients200ResponseInnerNutrition</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParseIngredients200ResponseInnerNutrition();
        if (data.hasOwnProperty('nutrients')) {
          obj['nutrients'] = _ApiClient["default"].convertToType(data['nutrients'], [_ParseIngredients200ResponseInnerNutritionNutrientsInner["default"]]);
        }
        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ParseIngredients200ResponseInnerNutritionPropertiesInner["default"]]);
        }
        if (data.hasOwnProperty('flavonoids')) {
          obj['flavonoids'] = _ApiClient["default"].convertToType(data['flavonoids'], [_ParseIngredients200ResponseInnerNutritionPropertiesInner["default"]]);
        }
        if (data.hasOwnProperty('caloricBreakdown')) {
          obj['caloricBreakdown'] = _ParseIngredients200ResponseInnerNutritionCaloricBreakdown["default"].constructFromObject(data['caloricBreakdown']);
        }
        if (data.hasOwnProperty('weightPerServing')) {
          obj['weightPerServing'] = _ParseIngredients200ResponseInnerNutritionWeightPerServing["default"].constructFromObject(data['weightPerServing']);
        }
      }
      return obj;
    }
  }]);
  return ParseIngredients200ResponseInnerNutrition;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} nutrients
 */
ParseIngredients200ResponseInnerNutrition.prototype['nutrients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} properties
 */
ParseIngredients200ResponseInnerNutrition.prototype['properties'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} flavonoids
 */
ParseIngredients200ResponseInnerNutrition.prototype['flavonoids'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} caloricBreakdown
 */
ParseIngredients200ResponseInnerNutrition.prototype['caloricBreakdown'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} weightPerServing
 */
ParseIngredients200ResponseInnerNutrition.prototype['weightPerServing'] = undefined;
var _default = ParseIngredients200ResponseInnerNutrition;
exports["default"] = _default;