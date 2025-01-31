"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipeNutritionWidgetByID200ResponseBadInner = _interopRequireDefault(require("./GetRecipeNutritionWidgetByID200ResponseBadInner"));
var _GetRecipeNutritionWidgetByID200ResponseGoodInner = _interopRequireDefault(require("./GetRecipeNutritionWidgetByID200ResponseGoodInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipeNutritionWidgetByID200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200Response
 * @version 1.1
 */
var GetRecipeNutritionWidgetByID200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeNutritionWidgetByID200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200Response
   * @param calories {String} 
   * @param carbs {String} 
   * @param fat {String} 
   * @param protein {String} 
   * @param bad {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200ResponseBadInner>} 
   * @param good {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200ResponseGoodInner>} 
   */
  function GetRecipeNutritionWidgetByID200Response(calories, carbs, fat, protein, bad, good) {
    _classCallCheck(this, GetRecipeNutritionWidgetByID200Response);
    GetRecipeNutritionWidgetByID200Response.initialize(this, calories, carbs, fat, protein, bad, good);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeNutritionWidgetByID200Response, null, [{
    key: "initialize",
    value: function initialize(obj, calories, carbs, fat, protein, bad, good) {
      obj['calories'] = calories;
      obj['carbs'] = carbs;
      obj['fat'] = fat;
      obj['protein'] = protein;
      obj['bad'] = bad;
      obj['good'] = good;
    }

    /**
     * Constructs a <code>GetRecipeNutritionWidgetByID200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200Response} The populated <code>GetRecipeNutritionWidgetByID200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeNutritionWidgetByID200Response();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient["default"].convertToType(data['calories'], 'String');
        }
        if (data.hasOwnProperty('carbs')) {
          obj['carbs'] = _ApiClient["default"].convertToType(data['carbs'], 'String');
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _ApiClient["default"].convertToType(data['fat'], 'String');
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient["default"].convertToType(data['protein'], 'String');
        }
        if (data.hasOwnProperty('bad')) {
          obj['bad'] = _ApiClient["default"].convertToType(data['bad'], [_GetRecipeNutritionWidgetByID200ResponseBadInner["default"]]);
        }
        if (data.hasOwnProperty('good')) {
          obj['good'] = _ApiClient["default"].convertToType(data['good'], [_GetRecipeNutritionWidgetByID200ResponseGoodInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetRecipeNutritionWidgetByID200Response;
}();
/**
 * @member {String} calories
 */
GetRecipeNutritionWidgetByID200Response.prototype['calories'] = undefined;

/**
 * @member {String} carbs
 */
GetRecipeNutritionWidgetByID200Response.prototype['carbs'] = undefined;

/**
 * @member {String} fat
 */
GetRecipeNutritionWidgetByID200Response.prototype['fat'] = undefined;

/**
 * @member {String} protein
 */
GetRecipeNutritionWidgetByID200Response.prototype['protein'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200ResponseBadInner>} bad
 */
GetRecipeNutritionWidgetByID200Response.prototype['bad'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeNutritionWidgetByID200ResponseGoodInner>} good
 */
GetRecipeNutritionWidgetByID200Response.prototype['good'] = undefined;
var _default = GetRecipeNutritionWidgetByID200Response;
exports["default"] = _default;