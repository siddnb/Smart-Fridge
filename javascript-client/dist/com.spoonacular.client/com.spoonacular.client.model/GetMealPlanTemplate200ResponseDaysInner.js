"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetMealPlanTemplate200ResponseDaysInnerItemsInner = _interopRequireDefault(require("./GetMealPlanTemplate200ResponseDaysInnerItemsInner"));
var _GetMealPlanWeek200ResponseDaysInnerNutritionSummary = _interopRequireDefault(require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetMealPlanTemplate200ResponseDaysInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200ResponseDaysInner
 * @version 1.1
 */
var GetMealPlanTemplate200ResponseDaysInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetMealPlanTemplate200ResponseDaysInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200ResponseDaysInner
   * @param day {String} 
   */
  function GetMealPlanTemplate200ResponseDaysInner(day) {
    _classCallCheck(this, GetMealPlanTemplate200ResponseDaysInner);
    GetMealPlanTemplate200ResponseDaysInner.initialize(this, day);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetMealPlanTemplate200ResponseDaysInner, null, [{
    key: "initialize",
    value: function initialize(obj, day) {
      obj['day'] = day;
    }

    /**
     * Constructs a <code>GetMealPlanTemplate200ResponseDaysInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200ResponseDaysInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200ResponseDaysInner} The populated <code>GetMealPlanTemplate200ResponseDaysInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetMealPlanTemplate200ResponseDaysInner();
        if (data.hasOwnProperty('nutritionSummary')) {
          obj['nutritionSummary'] = _GetMealPlanWeek200ResponseDaysInnerNutritionSummary["default"].constructFromObject(data['nutritionSummary']);
        }
        if (data.hasOwnProperty('nutritionSummaryBreakfast')) {
          obj['nutritionSummaryBreakfast'] = _GetMealPlanWeek200ResponseDaysInnerNutritionSummary["default"].constructFromObject(data['nutritionSummaryBreakfast']);
        }
        if (data.hasOwnProperty('nutritionSummaryLunch')) {
          obj['nutritionSummaryLunch'] = _GetMealPlanWeek200ResponseDaysInnerNutritionSummary["default"].constructFromObject(data['nutritionSummaryLunch']);
        }
        if (data.hasOwnProperty('nutritionSummaryDinner')) {
          obj['nutritionSummaryDinner'] = _GetMealPlanWeek200ResponseDaysInnerNutritionSummary["default"].constructFromObject(data['nutritionSummaryDinner']);
        }
        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient["default"].convertToType(data['day'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_GetMealPlanTemplate200ResponseDaysInnerItemsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetMealPlanTemplate200ResponseDaysInner;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummary
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['nutritionSummary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryBreakfast
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['nutritionSummaryBreakfast'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryLunch
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['nutritionSummaryLunch'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryDinner
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['nutritionSummaryDinner'] = undefined;

/**
 * @member {String} day
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['day'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200ResponseDaysInnerItemsInner>} items
 */
GetMealPlanTemplate200ResponseDaysInner.prototype['items'] = undefined;
var _default = GetMealPlanTemplate200ResponseDaysInner;
exports["default"] = _default;