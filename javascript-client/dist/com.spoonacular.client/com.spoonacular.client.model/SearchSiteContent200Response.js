"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchSiteContent200ResponseArticlesInner = _interopRequireDefault(require("./SearchSiteContent200ResponseArticlesInner"));
var _SearchSiteContent200ResponseGroceryProductsInner = _interopRequireDefault(require("./SearchSiteContent200ResponseGroceryProductsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchSiteContent200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response
 * @version 1.1
 */
var SearchSiteContent200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchSiteContent200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response
   * @param articles {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseArticlesInner>} 
   * @param groceryProducts {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} 
   * @param menuItems {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} 
   * @param recipes {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} 
   */
  function SearchSiteContent200Response(articles, groceryProducts, menuItems, recipes) {
    _classCallCheck(this, SearchSiteContent200Response);
    SearchSiteContent200Response.initialize(this, articles, groceryProducts, menuItems, recipes);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchSiteContent200Response, null, [{
    key: "initialize",
    value: function initialize(obj, articles, groceryProducts, menuItems, recipes) {
      obj['Articles'] = articles;
      obj['Grocery Products'] = groceryProducts;
      obj['Menu Items'] = menuItems;
      obj['Recipes'] = recipes;
    }

    /**
     * Constructs a <code>SearchSiteContent200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response} The populated <code>SearchSiteContent200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchSiteContent200Response();
        if (data.hasOwnProperty('Articles')) {
          obj['Articles'] = _ApiClient["default"].convertToType(data['Articles'], [_SearchSiteContent200ResponseArticlesInner["default"]]);
        }
        if (data.hasOwnProperty('Grocery Products')) {
          obj['Grocery Products'] = _ApiClient["default"].convertToType(data['Grocery Products'], [_SearchSiteContent200ResponseGroceryProductsInner["default"]]);
        }
        if (data.hasOwnProperty('Menu Items')) {
          obj['Menu Items'] = _ApiClient["default"].convertToType(data['Menu Items'], [_SearchSiteContent200ResponseGroceryProductsInner["default"]]);
        }
        if (data.hasOwnProperty('Recipes')) {
          obj['Recipes'] = _ApiClient["default"].convertToType(data['Recipes'], [_SearchSiteContent200ResponseGroceryProductsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return SearchSiteContent200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseArticlesInner>} Articles
 */
SearchSiteContent200Response.prototype['Articles'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} Grocery Products
 */
SearchSiteContent200Response.prototype['Grocery Products'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} Menu Items
 */
SearchSiteContent200Response.prototype['Menu Items'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner>} Recipes
 */
SearchSiteContent200Response.prototype['Recipes'] = undefined;
var _default = SearchSiteContent200Response;
exports["default"] = _default;