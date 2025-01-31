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
 * The GetMealPlanWeek200ResponseDaysInnerItemsInnerValue model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInnerValue
 * @version 1.1
 */
var GetMealPlanWeek200ResponseDaysInnerItemsInnerValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetMealPlanWeek200ResponseDaysInnerItemsInnerValue</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInnerValue
   * @param servings {Number} 
   * @param id {Number} 
   * @param title {String} 
   * @param imageType {String} 
   */
  function GetMealPlanWeek200ResponseDaysInnerItemsInnerValue(servings, id, title, imageType) {
    _classCallCheck(this, GetMealPlanWeek200ResponseDaysInnerItemsInnerValue);
    GetMealPlanWeek200ResponseDaysInnerItemsInnerValue.initialize(this, servings, id, title, imageType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetMealPlanWeek200ResponseDaysInnerItemsInnerValue, null, [{
    key: "initialize",
    value: function initialize(obj, servings, id, title, imageType) {
      obj['servings'] = servings;
      obj['id'] = id;
      obj['title'] = title;
      obj['imageType'] = imageType;
    }

    /**
     * Constructs a <code>GetMealPlanWeek200ResponseDaysInnerItemsInnerValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInnerValue} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInnerValue} The populated <code>GetMealPlanWeek200ResponseDaysInnerItemsInnerValue</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetMealPlanWeek200ResponseDaysInnerItemsInnerValue();
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetMealPlanWeek200ResponseDaysInnerItemsInnerValue;
}();
/**
 * @member {Number} servings
 */
GetMealPlanWeek200ResponseDaysInnerItemsInnerValue.prototype['servings'] = undefined;

/**
 * @member {Number} id
 */
GetMealPlanWeek200ResponseDaysInnerItemsInnerValue.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetMealPlanWeek200ResponseDaysInnerItemsInnerValue.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
GetMealPlanWeek200ResponseDaysInnerItemsInnerValue.prototype['imageType'] = undefined;
var _default = GetMealPlanWeek200ResponseDaysInnerItemsInnerValue;
exports["default"] = _default;