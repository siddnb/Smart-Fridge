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
 * The GetIngredientInformation200ResponseNutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition
 * @version 1.1
 */
var GetIngredientInformation200ResponseNutrition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetIngredientInformation200ResponseNutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} 
   * @param properties {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} 
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} 
   * @param weightPerServing {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} 
   */
  function GetIngredientInformation200ResponseNutrition(nutrients, properties, caloricBreakdown, weightPerServing) {
    _classCallCheck(this, GetIngredientInformation200ResponseNutrition);
    GetIngredientInformation200ResponseNutrition.initialize(this, nutrients, properties, caloricBreakdown, weightPerServing);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetIngredientInformation200ResponseNutrition, null, [{
    key: "initialize",
    value: function initialize(obj, nutrients, properties, caloricBreakdown, weightPerServing) {
      obj['nutrients'] = nutrients;
      obj['properties'] = properties;
      obj['caloricBreakdown'] = caloricBreakdown;
      obj['weightPerServing'] = weightPerServing;
    }

    /**
     * Constructs a <code>GetIngredientInformation200ResponseNutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition} The populated <code>GetIngredientInformation200ResponseNutrition</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetIngredientInformation200ResponseNutrition();
        if (data.hasOwnProperty('nutrients')) {
          obj['nutrients'] = _ApiClient["default"].convertToType(data['nutrients'], [_ParseIngredients200ResponseInnerNutritionNutrientsInner["default"]]);
        }
        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ParseIngredients200ResponseInnerNutritionPropertiesInner["default"]]);
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
  return GetIngredientInformation200ResponseNutrition;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} nutrients
 */
GetIngredientInformation200ResponseNutrition.prototype['nutrients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionPropertiesInner>} properties
 */
GetIngredientInformation200ResponseNutrition.prototype['properties'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} caloricBreakdown
 */
GetIngredientInformation200ResponseNutrition.prototype['caloricBreakdown'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionWeightPerServing} weightPerServing
 */
GetIngredientInformation200ResponseNutrition.prototype['weightPerServing'] = undefined;
var _default = GetIngredientInformation200ResponseNutrition;
exports["default"] = _default;