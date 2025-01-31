"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetShoppingList200ResponseAislesInnerItemsInner = _interopRequireDefault(require("./GetShoppingList200ResponseAislesInnerItemsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetShoppingList200ResponseAislesInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInner
 * @version 1.1
 */
var GetShoppingList200ResponseAislesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetShoppingList200ResponseAislesInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInner
   * @param aisle {String} 
   */
  function GetShoppingList200ResponseAislesInner(aisle) {
    _classCallCheck(this, GetShoppingList200ResponseAislesInner);
    GetShoppingList200ResponseAislesInner.initialize(this, aisle);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetShoppingList200ResponseAislesInner, null, [{
    key: "initialize",
    value: function initialize(obj, aisle) {
      obj['aisle'] = aisle;
    }

    /**
     * Constructs a <code>GetShoppingList200ResponseAislesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInner} The populated <code>GetShoppingList200ResponseAislesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetShoppingList200ResponseAislesInner();
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_GetShoppingList200ResponseAislesInnerItemsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetShoppingList200ResponseAislesInner;
}();
/**
 * @member {String} aisle
 */
GetShoppingList200ResponseAislesInner.prototype['aisle'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInner>} items
 */
GetShoppingList200ResponseAislesInner.prototype['items'] = undefined;
var _default = GetShoppingList200ResponseAislesInner;
exports["default"] = _default;