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
 * The SearchCustomFoods200ResponseCustomFoodsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner
 * @version 1.1
 */
var SearchCustomFoods200ResponseCustomFoodsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchCustomFoods200ResponseCustomFoodsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner
   * @param id {Number} 
   * @param title {String} 
   * @param servings {Number} 
   * @param imageUrl {String} 
   * @param price {Number} 
   */
  function SearchCustomFoods200ResponseCustomFoodsInner(id, title, servings, imageUrl, price) {
    _classCallCheck(this, SearchCustomFoods200ResponseCustomFoodsInner);
    SearchCustomFoods200ResponseCustomFoodsInner.initialize(this, id, title, servings, imageUrl, price);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchCustomFoods200ResponseCustomFoodsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, servings, imageUrl, price) {
      obj['id'] = id;
      obj['title'] = title;
      obj['servings'] = servings;
      obj['imageUrl'] = imageUrl;
      obj['price'] = price;
    }

    /**
     * Constructs a <code>SearchCustomFoods200ResponseCustomFoodsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner} The populated <code>SearchCustomFoods200ResponseCustomFoodsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchCustomFoods200ResponseCustomFoodsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchCustomFoods200ResponseCustomFoodsInner;
}();
/**
 * @member {Number} id
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['title'] = undefined;

/**
 * @member {Number} servings
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['servings'] = undefined;

/**
 * @member {String} imageUrl
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['imageUrl'] = undefined;

/**
 * @member {Number} price
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['price'] = undefined;
var _default = SearchCustomFoods200ResponseCustomFoodsInner;
exports["default"] = _default;