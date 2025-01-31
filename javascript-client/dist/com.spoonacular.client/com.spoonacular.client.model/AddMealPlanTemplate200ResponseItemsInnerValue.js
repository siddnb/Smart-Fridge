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
 * The AddMealPlanTemplate200ResponseItemsInnerValue model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInnerValue
 * @version 1.1
 */
var AddMealPlanTemplate200ResponseItemsInnerValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddMealPlanTemplate200ResponseItemsInnerValue</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInnerValue
   */
  function AddMealPlanTemplate200ResponseItemsInnerValue() {
    _classCallCheck(this, AddMealPlanTemplate200ResponseItemsInnerValue);
    AddMealPlanTemplate200ResponseItemsInnerValue.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddMealPlanTemplate200ResponseItemsInnerValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AddMealPlanTemplate200ResponseItemsInnerValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInnerValue} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200ResponseItemsInnerValue} The populated <code>AddMealPlanTemplate200ResponseItemsInnerValue</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddMealPlanTemplate200ResponseItemsInnerValue();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
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
  return AddMealPlanTemplate200ResponseItemsInnerValue;
}();
/**
 * @member {Number} id
 */
AddMealPlanTemplate200ResponseItemsInnerValue.prototype['id'] = undefined;

/**
 * @member {Number} servings
 */
AddMealPlanTemplate200ResponseItemsInnerValue.prototype['servings'] = undefined;

/**
 * @member {String} title
 */
AddMealPlanTemplate200ResponseItemsInnerValue.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
AddMealPlanTemplate200ResponseItemsInnerValue.prototype['imageType'] = undefined;
var _default = AddMealPlanTemplate200ResponseItemsInnerValue;
exports["default"] = _default;