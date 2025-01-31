"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchGroceryProductsByUPC200ResponseServings = _interopRequireDefault(require("./SearchGroceryProductsByUPC200ResponseServings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchMenuItems200ResponseMenuItemsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner
 * @version 1.1
 */
var SearchMenuItems200ResponseMenuItemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchMenuItems200ResponseMenuItemsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner
   * @param id {Number} 
   * @param title {String} 
   * @param restaurantChain {String} 
   * @param image {String} 
   * @param imageType {String} 
   */
  function SearchMenuItems200ResponseMenuItemsInner(id, title, restaurantChain, image, imageType) {
    _classCallCheck(this, SearchMenuItems200ResponseMenuItemsInner);
    SearchMenuItems200ResponseMenuItemsInner.initialize(this, id, title, restaurantChain, image, imageType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchMenuItems200ResponseMenuItemsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, restaurantChain, image, imageType) {
      obj['id'] = id;
      obj['title'] = title;
      obj['restaurantChain'] = restaurantChain;
      obj['image'] = image;
      obj['imageType'] = imageType;
    }

    /**
     * Constructs a <code>SearchMenuItems200ResponseMenuItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner} The populated <code>SearchMenuItems200ResponseMenuItemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchMenuItems200ResponseMenuItemsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('restaurantChain')) {
          obj['restaurantChain'] = _ApiClient["default"].convertToType(data['restaurantChain'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _SearchGroceryProductsByUPC200ResponseServings["default"].constructFromObject(data['servings']);
        }
      }
      return obj;
    }
  }]);
  return SearchMenuItems200ResponseMenuItemsInner;
}();
/**
 * @member {Number} id
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['title'] = undefined;

/**
 * @member {String} restaurantChain
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['restaurantChain'] = undefined;

/**
 * @member {String} image
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['imageType'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} servings
 */
SearchMenuItems200ResponseMenuItemsInner.prototype['servings'] = undefined;
var _default = SearchMenuItems200ResponseMenuItemsInner;
exports["default"] = _default;