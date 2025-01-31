"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddMealPlanTemplate200ResponseItemsInnerValue = _interopRequireDefault(require("./AddMealPlanTemplate200ResponseItemsInnerValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddMealPlanTemplate200ResponseItemsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInner
 * @version 1.1
 */
var AddMealPlanTemplate200ResponseItemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddMealPlanTemplate200ResponseItemsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInner
   * @param day {Number} 
   * @param slot {Number} 
   * @param position {Number} 
   * @param type {String} 
   */
  function AddMealPlanTemplate200ResponseItemsInner(day, slot, position, type) {
    _classCallCheck(this, AddMealPlanTemplate200ResponseItemsInner);
    AddMealPlanTemplate200ResponseItemsInner.initialize(this, day, slot, position, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddMealPlanTemplate200ResponseItemsInner, null, [{
    key: "initialize",
    value: function initialize(obj, day, slot, position, type) {
      obj['day'] = day;
      obj['slot'] = slot;
      obj['position'] = position;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>AddMealPlanTemplate200ResponseItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInner} The populated <code>AddMealPlanTemplate200ResponseItemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddMealPlanTemplate200ResponseItemsInner();
        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient["default"].convertToType(data['day'], 'Number');
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
          obj['value'] = _AddMealPlanTemplate200ResponseItemsInnerValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return AddMealPlanTemplate200ResponseItemsInner;
}();
/**
 * @member {Number} day
 */
AddMealPlanTemplate200ResponseItemsInner.prototype['day'] = undefined;

/**
 * @member {Number} slot
 */
AddMealPlanTemplate200ResponseItemsInner.prototype['slot'] = undefined;

/**
 * @member {Number} position
 */
AddMealPlanTemplate200ResponseItemsInner.prototype['position'] = undefined;

/**
 * @member {String} type
 */
AddMealPlanTemplate200ResponseItemsInner.prototype['type'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInnerValue} value
 */
AddMealPlanTemplate200ResponseItemsInner.prototype['value'] = undefined;
var _default = AddMealPlanTemplate200ResponseItemsInner;
exports["default"] = _default;