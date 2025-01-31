"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GuessNutritionByDishName200ResponseCalories = _interopRequireDefault(require("./GuessNutritionByDishName200ResponseCalories"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GuessNutritionByDishName200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response
 * @version 1.1
 */
var GuessNutritionByDishName200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GuessNutritionByDishName200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response
   * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param recipesUsed {Number} 
   */
  function GuessNutritionByDishName200Response(calories, carbs, fat, protein, recipesUsed) {
    _classCallCheck(this, GuessNutritionByDishName200Response);
    GuessNutritionByDishName200Response.initialize(this, calories, carbs, fat, protein, recipesUsed);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GuessNutritionByDishName200Response, null, [{
    key: "initialize",
    value: function initialize(obj, calories, carbs, fat, protein, recipesUsed) {
      obj['calories'] = calories;
      obj['carbs'] = carbs;
      obj['fat'] = fat;
      obj['protein'] = protein;
      obj['recipesUsed'] = recipesUsed;
    }

    /**
     * Constructs a <code>GuessNutritionByDishName200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response} The populated <code>GuessNutritionByDishName200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GuessNutritionByDishName200Response();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['calories']);
        }
        if (data.hasOwnProperty('carbs')) {
          obj['carbs'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['carbs']);
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['fat']);
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['protein']);
        }
        if (data.hasOwnProperty('recipesUsed')) {
          obj['recipesUsed'] = _ApiClient["default"].convertToType(data['recipesUsed'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GuessNutritionByDishName200Response;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} calories
 */
GuessNutritionByDishName200Response.prototype['calories'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} carbs
 */
GuessNutritionByDishName200Response.prototype['carbs'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} fat
 */
GuessNutritionByDishName200Response.prototype['fat'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} protein
 */
GuessNutritionByDishName200Response.prototype['protein'] = undefined;

/**
 * @member {Number} recipesUsed
 */
GuessNutritionByDishName200Response.prototype['recipesUsed'] = undefined;
var _default = GuessNutritionByDishName200Response;
exports["default"] = _default;