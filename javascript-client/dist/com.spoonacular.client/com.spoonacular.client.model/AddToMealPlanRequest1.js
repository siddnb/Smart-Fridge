"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddToMealPlanRequest1Value = _interopRequireDefault(require("./AddToMealPlanRequest1Value"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddToMealPlanRequest1 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1
 * @version 1.1
 */
var AddToMealPlanRequest1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddToMealPlanRequest1</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1
   * @param date {Number} 
   * @param slot {Number} 
   * @param position {Number} 
   * @param type {String} 
   * @param value {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1Value} 
   */
  function AddToMealPlanRequest1(date, slot, position, type, value) {
    _classCallCheck(this, AddToMealPlanRequest1);
    AddToMealPlanRequest1.initialize(this, date, slot, position, type, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddToMealPlanRequest1, null, [{
    key: "initialize",
    value: function initialize(obj, date, slot, position, type, value) {
      obj['date'] = date;
      obj['slot'] = slot;
      obj['position'] = position;
      obj['type'] = type;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>AddToMealPlanRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1} The populated <code>AddToMealPlanRequest1</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddToMealPlanRequest1();
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Number');
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
          obj['value'] = _AddToMealPlanRequest1Value["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return AddToMealPlanRequest1;
}();
/**
 * @member {Number} date
 */
AddToMealPlanRequest1.prototype['date'] = undefined;

/**
 * @member {Number} slot
 */
AddToMealPlanRequest1.prototype['slot'] = undefined;

/**
 * @member {Number} position
 */
AddToMealPlanRequest1.prototype['position'] = undefined;

/**
 * @member {String} type
 */
AddToMealPlanRequest1.prototype['type'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest1Value} value
 */
AddToMealPlanRequest1.prototype['value'] = undefined;
var _default = AddToMealPlanRequest1;
exports["default"] = _default;