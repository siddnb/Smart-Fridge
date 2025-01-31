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
 * The SearchRecipesByNutrients200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByNutrients200ResponseInner
 * @version 1.1
 */
var SearchRecipesByNutrients200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRecipesByNutrients200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByNutrients200ResponseInner
   * @param calories {Number} 
   * @param carbs {String} 
   * @param fat {String} 
   * @param id {Number} 
   * @param image {String} 
   * @param imageType {String} 
   * @param protein {String} 
   * @param title {String} 
   */
  function SearchRecipesByNutrients200ResponseInner(calories, carbs, fat, id, image, imageType, protein, title) {
    _classCallCheck(this, SearchRecipesByNutrients200ResponseInner);
    SearchRecipesByNutrients200ResponseInner.initialize(this, calories, carbs, fat, id, image, imageType, protein, title);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRecipesByNutrients200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, calories, carbs, fat, id, image, imageType, protein, title) {
      obj['calories'] = calories;
      obj['carbs'] = carbs;
      obj['fat'] = fat;
      obj['id'] = id;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['protein'] = protein;
      obj['title'] = title;
    }

    /**
     * Constructs a <code>SearchRecipesByNutrients200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByNutrients200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByNutrients200ResponseInner} The populated <code>SearchRecipesByNutrients200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRecipesByNutrients200ResponseInner();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient["default"].convertToType(data['calories'], 'Number');
        }
        if (data.hasOwnProperty('carbs')) {
          obj['carbs'] = _ApiClient["default"].convertToType(data['carbs'], 'String');
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _ApiClient["default"].convertToType(data['fat'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient["default"].convertToType(data['protein'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchRecipesByNutrients200ResponseInner;
}();
/**
 * @member {Number} calories
 */
SearchRecipesByNutrients200ResponseInner.prototype['calories'] = undefined;

/**
 * @member {String} carbs
 */
SearchRecipesByNutrients200ResponseInner.prototype['carbs'] = undefined;

/**
 * @member {String} fat
 */
SearchRecipesByNutrients200ResponseInner.prototype['fat'] = undefined;

/**
 * @member {Number} id
 */
SearchRecipesByNutrients200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
SearchRecipesByNutrients200ResponseInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
SearchRecipesByNutrients200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {String} protein
 */
SearchRecipesByNutrients200ResponseInner.prototype['protein'] = undefined;

/**
 * @member {String} title
 */
SearchRecipesByNutrients200ResponseInner.prototype['title'] = undefined;
var _default = SearchRecipesByNutrients200ResponseInner;
exports["default"] = _default;