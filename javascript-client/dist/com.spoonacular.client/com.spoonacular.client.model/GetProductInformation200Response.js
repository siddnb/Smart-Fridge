"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetProductInformation200ResponseIngredientsInner = _interopRequireDefault(require("./GetProductInformation200ResponseIngredientsInner"));
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
 * The GetProductInformation200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response
 * @version 1.1
 */
var GetProductInformation200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetProductInformation200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response
   * @param id {Number} 
   * @param title {String} 
   * @param breadcrumbs {Array.<String>} 
   * @param imageType {String} 
   * @param badges {Array.<String>} 
   * @param importantBadges {Array.<String>} 
   * @param ingredientCount {Number} 
   * @param ingredientList {String} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner>} 
   * @param likes {Number} 
   * @param aisle {String} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} 
   * @param price {Number} 
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} 
   * @param spoonacularScore {Number} 
   */
  function GetProductInformation200Response(id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore) {
    _classCallCheck(this, GetProductInformation200Response);
    GetProductInformation200Response.initialize(this, id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetProductInformation200Response, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore) {
      obj['id'] = id;
      obj['title'] = title;
      obj['breadcrumbs'] = breadcrumbs;
      obj['imageType'] = imageType;
      obj['badges'] = badges;
      obj['importantBadges'] = importantBadges;
      obj['ingredientCount'] = ingredientCount;
      obj['ingredientList'] = ingredientList;
      obj['ingredients'] = ingredients;
      obj['likes'] = likes;
      obj['aisle'] = aisle;
      obj['nutrition'] = nutrition;
      obj['price'] = price;
      obj['servings'] = servings;
      obj['spoonacularScore'] = spoonacularScore;
    }

    /**
     * Constructs a <code>GetProductInformation200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response} The populated <code>GetProductInformation200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetProductInformation200Response();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('breadcrumbs')) {
          obj['breadcrumbs'] = _ApiClient["default"].convertToType(data['breadcrumbs'], ['String']);
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('badges')) {
          obj['badges'] = _ApiClient["default"].convertToType(data['badges'], ['String']);
        }
        if (data.hasOwnProperty('importantBadges')) {
          obj['importantBadges'] = _ApiClient["default"].convertToType(data['importantBadges'], ['String']);
        }
        if (data.hasOwnProperty('ingredientCount')) {
          obj['ingredientCount'] = _ApiClient["default"].convertToType(data['ingredientCount'], 'Number');
        }
        if (data.hasOwnProperty('generatedText')) {
          obj['generatedText'] = _ApiClient["default"].convertToType(data['generatedText'], Object);
        }
        if (data.hasOwnProperty('ingredientList')) {
          obj['ingredientList'] = _ApiClient["default"].convertToType(data['ingredientList'], 'String');
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient["default"].convertToType(data['ingredients'], [_GetProductInformation200ResponseIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient["default"].convertToType(data['likes'], 'Number');
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _SearchGroceryProductsByUPC200ResponseNutrition["default"].constructFromObject(data['nutrition']);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _SearchGroceryProductsByUPC200ResponseServings["default"].constructFromObject(data['servings']);
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient["default"].convertToType(data['spoonacularScore'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetProductInformation200Response;
}();
/**
 * @member {Number} id
 */
GetProductInformation200Response.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetProductInformation200Response.prototype['title'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
GetProductInformation200Response.prototype['breadcrumbs'] = undefined;

/**
 * @member {String} imageType
 */
GetProductInformation200Response.prototype['imageType'] = undefined;

/**
 * @member {Array.<String>} badges
 */
GetProductInformation200Response.prototype['badges'] = undefined;

/**
 * @member {Array.<String>} importantBadges
 */
GetProductInformation200Response.prototype['importantBadges'] = undefined;

/**
 * @member {Number} ingredientCount
 */
GetProductInformation200Response.prototype['ingredientCount'] = undefined;

/**
 * @member {Object} generatedText
 */
GetProductInformation200Response.prototype['generatedText'] = undefined;

/**
 * @member {String} ingredientList
 */
GetProductInformation200Response.prototype['ingredientList'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner>} ingredients
 */
GetProductInformation200Response.prototype['ingredients'] = undefined;

/**
 * @member {Number} likes
 */
GetProductInformation200Response.prototype['likes'] = undefined;

/**
 * @member {String} aisle
 */
GetProductInformation200Response.prototype['aisle'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseNutrition} nutrition
 */
GetProductInformation200Response.prototype['nutrition'] = undefined;

/**
 * @member {Number} price
 */
GetProductInformation200Response.prototype['price'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} servings
 */
GetProductInformation200Response.prototype['servings'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetProductInformation200Response.prototype['spoonacularScore'] = undefined;
var _default = GetProductInformation200Response;
exports["default"] = _default;