"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _MapIngredientsToGroceryProducts200ResponseInnerProductsInner = _interopRequireDefault(require("./MapIngredientsToGroceryProducts200ResponseInnerProductsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MapIngredientsToGroceryProducts200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner
 * @version 1.1
 */
var MapIngredientsToGroceryProducts200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MapIngredientsToGroceryProducts200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner
   * @param original {String} 
   * @param originalName {String} 
   * @param ingredientImage {String} 
   * @param meta {Array.<String>} 
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInnerProductsInner>} 
   */
  function MapIngredientsToGroceryProducts200ResponseInner(original, originalName, ingredientImage, meta, products) {
    _classCallCheck(this, MapIngredientsToGroceryProducts200ResponseInner);
    MapIngredientsToGroceryProducts200ResponseInner.initialize(this, original, originalName, ingredientImage, meta, products);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(MapIngredientsToGroceryProducts200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, original, originalName, ingredientImage, meta, products) {
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['ingredientImage'] = ingredientImage;
      obj['meta'] = meta;
      obj['products'] = products;
    }

    /**
     * Constructs a <code>MapIngredientsToGroceryProducts200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner} The populated <code>MapIngredientsToGroceryProducts200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MapIngredientsToGroceryProducts200ResponseInner();
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient["default"].convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('ingredientImage')) {
          obj['ingredientImage'] = _ApiClient["default"].convertToType(data['ingredientImage'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], [_MapIngredientsToGroceryProducts200ResponseInnerProductsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return MapIngredientsToGroceryProducts200ResponseInner;
}();
/**
 * @member {String} original
 */
MapIngredientsToGroceryProducts200ResponseInner.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
MapIngredientsToGroceryProducts200ResponseInner.prototype['originalName'] = undefined;

/**
 * @member {String} ingredientImage
 */
MapIngredientsToGroceryProducts200ResponseInner.prototype['ingredientImage'] = undefined;

/**
 * @member {Array.<String>} meta
 */
MapIngredientsToGroceryProducts200ResponseInner.prototype['meta'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInnerProductsInner>} products
 */
MapIngredientsToGroceryProducts200ResponseInner.prototype['products'] = undefined;
var _default = MapIngredientsToGroceryProducts200ResponseInner;
exports["default"] = _default;