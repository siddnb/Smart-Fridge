"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner = _interopRequireDefault(require("./SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchSiteContent200ResponseGroceryProductsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner
 * @version 1.1
 */
var SearchSiteContent200ResponseGroceryProductsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchSiteContent200ResponseGroceryProductsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner
   * @param image {String} 
   * @param link {String} 
   * @param name {String} 
   */
  function SearchSiteContent200ResponseGroceryProductsInner(image, link, name) {
    _classCallCheck(this, SearchSiteContent200ResponseGroceryProductsInner);
    SearchSiteContent200ResponseGroceryProductsInner.initialize(this, image, link, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchSiteContent200ResponseGroceryProductsInner, null, [{
    key: "initialize",
    value: function initialize(obj, image, link, name) {
      obj['image'] = image;
      obj['link'] = link;
      obj['name'] = name;
    }

    /**
     * Constructs a <code>SearchSiteContent200ResponseGroceryProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInner} The populated <code>SearchSiteContent200ResponseGroceryProductsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchSiteContent200ResponseGroceryProductsInner();
        if (data.hasOwnProperty('dataPoints')) {
          obj['dataPoints'] = _ApiClient["default"].convertToType(data['dataPoints'], [_SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner["default"]]);
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchSiteContent200ResponseGroceryProductsInner;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner>} dataPoints
 */
SearchSiteContent200ResponseGroceryProductsInner.prototype['dataPoints'] = undefined;

/**
 * @member {String} image
 */
SearchSiteContent200ResponseGroceryProductsInner.prototype['image'] = undefined;

/**
 * @member {String} link
 */
SearchSiteContent200ResponseGroceryProductsInner.prototype['link'] = undefined;

/**
 * @member {String} name
 */
SearchSiteContent200ResponseGroceryProductsInner.prototype['name'] = undefined;
var _default = SearchSiteContent200ResponseGroceryProductsInner;
exports["default"] = _default;