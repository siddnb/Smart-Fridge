"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetMealPlanWeek200ResponseDaysInnerItemsInnerValue = _interopRequireDefault(require("./GetMealPlanWeek200ResponseDaysInnerItemsInnerValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetMealPlanWeek200ResponseDaysInnerItemsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInner
 * @version 1.1
 */
var GetMealPlanWeek200ResponseDaysInnerItemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetMealPlanWeek200ResponseDaysInnerItemsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInner
   * @param id {Number} 
   * @param slot {Number} 
   * @param position {Number} 
   * @param type {String} 
   */
  function GetMealPlanWeek200ResponseDaysInnerItemsInner(id, slot, position, type) {
    _classCallCheck(this, GetMealPlanWeek200ResponseDaysInnerItemsInner);
    GetMealPlanWeek200ResponseDaysInnerItemsInner.initialize(this, id, slot, position, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetMealPlanWeek200ResponseDaysInnerItemsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, slot, position, type) {
      obj['id'] = id;
      obj['slot'] = slot;
      obj['position'] = position;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>GetMealPlanWeek200ResponseDaysInnerItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInner} The populated <code>GetMealPlanWeek200ResponseDaysInnerItemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetMealPlanWeek200ResponseDaysInnerItemsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('slot')) {
          obj['slot'] = _ApiClient["default"].convertToType(data['slot'], 'Number');
        }
        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _GetMealPlanWeek200ResponseDaysInnerItemsInnerValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return GetMealPlanWeek200ResponseDaysInnerItemsInner;
}();
/**
 * @member {Number} id
 */
GetMealPlanWeek200ResponseDaysInnerItemsInner.prototype['id'] = undefined;

/**
 * @member {Number} slot
 */
GetMealPlanWeek200ResponseDaysInnerItemsInner.prototype['slot'] = undefined;

/**
 * @member {Number} position
 */
GetMealPlanWeek200ResponseDaysInnerItemsInner.prototype['position'] = undefined;

/**
 * @member {String} type
 */
GetMealPlanWeek200ResponseDaysInnerItemsInner.prototype['type'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200ResponseDaysInnerItemsInnerValue} value
 */
GetMealPlanWeek200ResponseDaysInnerItemsInner.prototype['value'] = undefined;
var _default = GetMealPlanWeek200ResponseDaysInnerItemsInner;
exports["default"] = _default;