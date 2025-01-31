"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchGroceryProductsByUPC200ResponseNutrition = _interopRequireDefault(require("./SearchGroceryProductsByUPC200ResponseNutrition"));
var _SearchGroceryProductsByUPC200ResponseServings = _interopRequireDefault(require("./SearchGroceryProductsByUPC200ResponseServings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetMenuItemInformation200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response
 * @version 1.1
 */
var GetMenuItemInformation200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetMenuItemInformation200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response
   * @param id {Number} 
   * @param title {String} 
   * @param restaurantChain {String} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} 
   * @param badges {Array.<String>} 
   * @param breadcrumbs {Array.<String>} 
   * @param imageType {String} 
   * @param likes {Number} 
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} 
   */
  function GetMenuItemInformation200Response(id, title, restaurantChain, nutrition, badges, breadcrumbs, imageType, likes, servings) {
    _classCallCheck(this, GetMenuItemInformation200Response);
    GetMenuItemInformation200Response.initialize(this, id, title, restaurantChain, nutrition, badges, breadcrumbs, imageType, likes, servings);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetMenuItemInformation200Response, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, restaurantChain, nutrition, badges, breadcrumbs, imageType, likes, servings) {
      obj['id'] = id;
      obj['title'] = title;
      obj['restaurantChain'] = restaurantChain;
      obj['nutrition'] = nutrition;
      obj['badges'] = badges;
      obj['breadcrumbs'] = breadcrumbs;
      obj['imageType'] = imageType;
      obj['likes'] = likes;
      obj['servings'] = servings;
    }

    /**
     * Constructs a <code>GetMenuItemInformation200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response} The populated <code>GetMenuItemInformation200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetMenuItemInformation200Response();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('restaurantChain')) {
          obj['restaurantChain'] = _ApiClient["default"].convertToType(data['restaurantChain'], 'String');
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _SearchGroceryProductsByUPC200ResponseNutrition["default"].constructFromObject(data['nutrition']);
        }
        if (data.hasOwnProperty('badges')) {
          obj['badges'] = _ApiClient["default"].convertToType(data['badges'], ['String']);
        }
        if (data.hasOwnProperty('breadcrumbs')) {
          obj['breadcrumbs'] = _ApiClient["default"].convertToType(data['breadcrumbs'], ['String']);
        }
        if (data.hasOwnProperty('generatedText')) {
          obj['generatedText'] = _ApiClient["default"].convertToType(data['generatedText'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient["default"].convertToType(data['likes'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _SearchGroceryProductsByUPC200ResponseServings["default"].constructFromObject(data['servings']);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient["default"].convertToType(data['spoonacularScore'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetMenuItemInformation200Response;
}();
/**
 * @member {Number} id
 */
GetMenuItemInformation200Response.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetMenuItemInformation200Response.prototype['title'] = undefined;

/**
 * @member {String} restaurantChain
 */
GetMenuItemInformation200Response.prototype['restaurantChain'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} nutrition
 */
GetMenuItemInformation200Response.prototype['nutrition'] = undefined;

/**
 * @member {Array.<String>} badges
 */
GetMenuItemInformation200Response.prototype['badges'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
GetMenuItemInformation200Response.prototype['breadcrumbs'] = undefined;

/**
 * @member {String} generatedText
 */
GetMenuItemInformation200Response.prototype['generatedText'] = undefined;

/**
 * @member {String} imageType
 */
GetMenuItemInformation200Response.prototype['imageType'] = undefined;

/**
 * @member {Number} likes
 */
GetMenuItemInformation200Response.prototype['likes'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} servings
 */
GetMenuItemInformation200Response.prototype['servings'] = undefined;

/**
 * @member {Number} price
 */
GetMenuItemInformation200Response.prototype['price'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetMenuItemInformation200Response.prototype['spoonacularScore'] = undefined;
var _default = GetMenuItemInformation200Response;
exports["default"] = _default;