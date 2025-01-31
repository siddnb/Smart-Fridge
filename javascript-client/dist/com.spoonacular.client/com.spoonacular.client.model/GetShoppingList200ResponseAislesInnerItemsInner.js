"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetShoppingList200ResponseAislesInnerItemsInnerMeasures = _interopRequireDefault(require("./GetShoppingList200ResponseAislesInnerItemsInnerMeasures"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetShoppingList200ResponseAislesInnerItemsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInner
 * @version 1.1
 */
var GetShoppingList200ResponseAislesInnerItemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetShoppingList200ResponseAislesInnerItemsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInner
   * @param id {Number} 
   * @param name {String} 
   * @param pantryItem {Boolean} 
   * @param aisle {String} 
   * @param cost {Number} 
   * @param ingredientId {Number} 
   */
  function GetShoppingList200ResponseAislesInnerItemsInner(id, name, pantryItem, aisle, cost, ingredientId) {
    _classCallCheck(this, GetShoppingList200ResponseAislesInnerItemsInner);
    GetShoppingList200ResponseAislesInnerItemsInner.initialize(this, id, name, pantryItem, aisle, cost, ingredientId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetShoppingList200ResponseAislesInnerItemsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, pantryItem, aisle, cost, ingredientId) {
      obj['id'] = id;
      obj['name'] = name;
      obj['pantryItem'] = pantryItem;
      obj['aisle'] = aisle;
      obj['cost'] = cost;
      obj['ingredientId'] = ingredientId;
    }

    /**
     * Constructs a <code>GetShoppingList200ResponseAislesInnerItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInner} The populated <code>GetShoppingList200ResponseAislesInnerItemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetShoppingList200ResponseAislesInnerItemsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('measures')) {
          obj['measures'] = _GetShoppingList200ResponseAislesInnerItemsInnerMeasures["default"].constructFromObject(data['measures']);
        }
        if (data.hasOwnProperty('pantryItem')) {
          obj['pantryItem'] = _ApiClient["default"].convertToType(data['pantryItem'], 'Boolean');
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }
        if (data.hasOwnProperty('ingredientId')) {
          obj['ingredientId'] = _ApiClient["default"].convertToType(data['ingredientId'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetShoppingList200ResponseAislesInnerItemsInner;
}();
/**
 * @member {Number} id
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['name'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200ResponseAislesInnerItemsInnerMeasures} measures
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['measures'] = undefined;

/**
 * @member {Boolean} pantryItem
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['pantryItem'] = undefined;

/**
 * @member {String} aisle
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['aisle'] = undefined;

/**
 * @member {Number} cost
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['cost'] = undefined;

/**
 * @member {Number} ingredientId
 */
GetShoppingList200ResponseAislesInnerItemsInner.prototype['ingredientId'] = undefined;
var _default = GetShoppingList200ResponseAislesInnerItemsInner;
exports["default"] = _default;