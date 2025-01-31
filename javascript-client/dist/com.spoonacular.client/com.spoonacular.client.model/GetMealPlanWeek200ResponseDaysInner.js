"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetMealPlanWeek200ResponseDaysInnerItemsInner = _interopRequireDefault(require("./GetMealPlanWeek200ResponseDaysInnerItemsInner"));
var _GetMealPlanWeek200ResponseDaysInnerNutritionSummary = _interopRequireDefault(require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetMealPlanWeek200ResponseDaysInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInner
 * @version 1.1
 */
var GetMealPlanWeek200ResponseDaysInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetMealPlanWeek200ResponseDaysInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInner
   * @param date {Number} 
   * @param day {String} 
   */
  function GetMealPlanWeek200ResponseDaysInner(date, day) {
    _classCallCheck(this, GetMealPlanWeek200ResponseDaysInner);
    GetMealPlanWeek200ResponseDaysInner.initialize(this, date, day);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetMealPlanWeek200ResponseDaysInner, null, [{
    key: "initialize",
    value: function initialize(obj, date, day) {
      obj['date'] = date;
      obj['day'] = day;
    }

    /**
     * Constructs a <code>GetMealPlanWeek200ResponseDaysInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInner} The populated <code>GetMealPlanWeek200ResponseDaysInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetMealPlanWeek200ResponseDaysInner();
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
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Number');
        }
        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient["default"].convertToType(data['day'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_GetMealPlanWeek200ResponseDaysInnerItemsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetMealPlanWeek200ResponseDaysInner;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummary
 */
GetMealPlanWeek200ResponseDaysInner.prototype['nutritionSummary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryBreakfast
 */
GetMealPlanWeek200ResponseDaysInner.prototype['nutritionSummaryBreakfast'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryLunch
 */
GetMealPlanWeek200ResponseDaysInner.prototype['nutritionSummaryLunch'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerNutritionSummary} nutritionSummaryDinner
 */
GetMealPlanWeek200ResponseDaysInner.prototype['nutritionSummaryDinner'] = undefined;

/**
 * @member {Number} date
 */
GetMealPlanWeek200ResponseDaysInner.prototype['date'] = undefined;

/**
 * @member {String} day
 */
GetMealPlanWeek200ResponseDaysInner.prototype['day'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInner>} items
 */
GetMealPlanWeek200ResponseDaysInner.prototype['items'] = undefined;
var _default = GetMealPlanWeek200ResponseDaysInner;
exports["default"] = _default;