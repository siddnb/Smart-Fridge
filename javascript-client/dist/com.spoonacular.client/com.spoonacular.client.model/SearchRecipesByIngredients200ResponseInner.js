"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner = _interopRequireDefault(require("./SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchRecipesByIngredients200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInner
 * @version 1.1
 */
var SearchRecipesByIngredients200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRecipesByIngredients200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInner
   * @param id {Number} 
   * @param image {String} 
   * @param imageType {String} 
   * @param likes {Number} 
   * @param missedIngredientCount {Number} 
   * @param missedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>} 
   * @param title {String} 
   * @param unusedIngredients {Array.<Object>} 
   * @param usedIngredientCount {Number} 
   * @param usedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>} 
   */
  function SearchRecipesByIngredients200ResponseInner(id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients) {
    _classCallCheck(this, SearchRecipesByIngredients200ResponseInner);
    SearchRecipesByIngredients200ResponseInner.initialize(this, id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRecipesByIngredients200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients) {
      obj['id'] = id;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['likes'] = likes;
      obj['missedIngredientCount'] = missedIngredientCount;
      obj['missedIngredients'] = missedIngredients;
      obj['title'] = title;
      obj['unusedIngredients'] = unusedIngredients;
      obj['usedIngredientCount'] = usedIngredientCount;
      obj['usedIngredients'] = usedIngredients;
    }

    /**
     * Constructs a <code>SearchRecipesByIngredients200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInner} The populated <code>SearchRecipesByIngredients200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRecipesByIngredients200ResponseInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient["default"].convertToType(data['likes'], 'Number');
        }
        if (data.hasOwnProperty('missedIngredientCount')) {
          obj['missedIngredientCount'] = _ApiClient["default"].convertToType(data['missedIngredientCount'], 'Number');
        }
        if (data.hasOwnProperty('missedIngredients')) {
          obj['missedIngredients'] = _ApiClient["default"].convertToType(data['missedIngredients'], [_SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('unusedIngredients')) {
          obj['unusedIngredients'] = _ApiClient["default"].convertToType(data['unusedIngredients'], [Object]);
        }
        if (data.hasOwnProperty('usedIngredientCount')) {
          obj['usedIngredientCount'] = _ApiClient["default"].convertToType(data['usedIngredientCount'], 'Number');
        }
        if (data.hasOwnProperty('usedIngredients')) {
          obj['usedIngredients'] = _ApiClient["default"].convertToType(data['usedIngredients'], [_SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return SearchRecipesByIngredients200ResponseInner;
}();
/**
 * @member {Number} id
 */
SearchRecipesByIngredients200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
SearchRecipesByIngredients200ResponseInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
SearchRecipesByIngredients200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {Number} likes
 */
SearchRecipesByIngredients200ResponseInner.prototype['likes'] = undefined;

/**
 * @member {Number} missedIngredientCount
 */
SearchRecipesByIngredients200ResponseInner.prototype['missedIngredientCount'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>} missedIngredients
 */
SearchRecipesByIngredients200ResponseInner.prototype['missedIngredients'] = undefined;

/**
 * @member {String} title
 */
SearchRecipesByIngredients200ResponseInner.prototype['title'] = undefined;

/**
 * @member {Array.<Object>} unusedIngredients
 */
SearchRecipesByIngredients200ResponseInner.prototype['unusedIngredients'] = undefined;

/**
 * @member {Number} usedIngredientCount
 */
SearchRecipesByIngredients200ResponseInner.prototype['usedIngredientCount'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>} usedIngredients
 */
SearchRecipesByIngredients200ResponseInner.prototype['usedIngredients'] = undefined;
var _default = SearchRecipesByIngredients200ResponseInner;
exports["default"] = _default;