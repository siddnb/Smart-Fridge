"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutocompleteRecipeSearch200ResponseInner = _interopRequireDefault(require("./AutocompleteRecipeSearch200ResponseInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchGroceryProducts200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response
 * @version 1.1
 */
var SearchGroceryProducts200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchGroceryProducts200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteRecipeSearch200ResponseInner>} 
   * @param totalProducts {Number} 
   * @param type {String} 
   * @param offset {Number} 
   * @param number {Number} 
   */
  function SearchGroceryProducts200Response(products, totalProducts, type, offset, number) {
    _classCallCheck(this, SearchGroceryProducts200Response);
    SearchGroceryProducts200Response.initialize(this, products, totalProducts, type, offset, number);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchGroceryProducts200Response, null, [{
    key: "initialize",
    value: function initialize(obj, products, totalProducts, type, offset, number) {
      obj['products'] = products;
      obj['totalProducts'] = totalProducts;
      obj['type'] = type;
      obj['offset'] = offset;
      obj['number'] = number;
    }

    /**
     * Constructs a <code>SearchGroceryProducts200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response} The populated <code>SearchGroceryProducts200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchGroceryProducts200Response();
        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], [_AutocompleteRecipeSearch200ResponseInner["default"]]);
        }
        if (data.hasOwnProperty('totalProducts')) {
          obj['totalProducts'] = _ApiClient["default"].convertToType(data['totalProducts'], 'Number');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchGroceryProducts200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteRecipeSearch200ResponseInner>} products
 */
SearchGroceryProducts200Response.prototype['products'] = undefined;

/**
 * @member {Number} totalProducts
 */
SearchGroceryProducts200Response.prototype['totalProducts'] = undefined;

/**
 * @member {String} type
 */
SearchGroceryProducts200Response.prototype['type'] = undefined;

/**
 * @member {Number} offset
 */
SearchGroceryProducts200Response.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
SearchGroceryProducts200Response.prototype['number'] = undefined;
var _default = SearchGroceryProducts200Response;
exports["default"] = _default;