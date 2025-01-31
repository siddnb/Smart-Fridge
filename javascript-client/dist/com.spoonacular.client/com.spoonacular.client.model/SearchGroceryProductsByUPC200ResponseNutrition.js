"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ParseIngredients200ResponseInnerNutritionCaloricBreakdown = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionCaloricBreakdown"));
var _ParseIngredients200ResponseInnerNutritionNutrientsInner = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutritionNutrientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchGroceryProductsByUPC200ResponseNutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition
 * @version 1.1
 */
var SearchGroceryProductsByUPC200ResponseNutrition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchGroceryProductsByUPC200ResponseNutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} 
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} 
   */
  function SearchGroceryProductsByUPC200ResponseNutrition(nutrients, caloricBreakdown) {
    _classCallCheck(this, SearchGroceryProductsByUPC200ResponseNutrition);
    SearchGroceryProductsByUPC200ResponseNutrition.initialize(this, nutrients, caloricBreakdown);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchGroceryProductsByUPC200ResponseNutrition, null, [{
    key: "initialize",
    value: function initialize(obj, nutrients, caloricBreakdown) {
      obj['nutrients'] = nutrients;
      obj['caloricBreakdown'] = caloricBreakdown;
    }

    /**
     * Constructs a <code>SearchGroceryProductsByUPC200ResponseNutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} The populated <code>SearchGroceryProductsByUPC200ResponseNutrition</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchGroceryProductsByUPC200ResponseNutrition();
        if (data.hasOwnProperty('nutrients')) {
          obj['nutrients'] = _ApiClient["default"].convertToType(data['nutrients'], [_ParseIngredients200ResponseInnerNutritionNutrientsInner["default"]]);
        }
        if (data.hasOwnProperty('caloricBreakdown')) {
          obj['caloricBreakdown'] = _ParseIngredients200ResponseInnerNutritionCaloricBreakdown["default"].constructFromObject(data['caloricBreakdown']);
        }
      }
      return obj;
    }
  }]);
  return SearchGroceryProductsByUPC200ResponseNutrition;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} nutrients
 */
SearchGroceryProductsByUPC200ResponseNutrition.prototype['nutrients'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} caloricBreakdown
 */
SearchGroceryProductsByUPC200ResponseNutrition.prototype['caloricBreakdown'] = undefined;
var _default = SearchGroceryProductsByUPC200ResponseNutrition;
exports["default"] = _default;