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
 * The GetSimilarRecipes200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner
 * @version 1.1
 */
var GetSimilarRecipes200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetSimilarRecipes200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner
   * @param id {Number} 
   * @param title {String} 
   * @param imageType {String} 
   * @param readyInMinutes {Number} 
   * @param servings {Number} 
   * @param sourceUrl {String} 
   */
  function GetSimilarRecipes200ResponseInner(id, title, imageType, readyInMinutes, servings, sourceUrl) {
    _classCallCheck(this, GetSimilarRecipes200ResponseInner);
    GetSimilarRecipes200ResponseInner.initialize(this, id, title, imageType, readyInMinutes, servings, sourceUrl);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetSimilarRecipes200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, imageType, readyInMinutes, servings, sourceUrl) {
      obj['id'] = id;
      obj['title'] = title;
      obj['imageType'] = imageType;
      obj['readyInMinutes'] = readyInMinutes;
      obj['servings'] = servings;
      obj['sourceUrl'] = sourceUrl;
    }

    /**
     * Constructs a <code>GetSimilarRecipes200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner} The populated <code>GetSimilarRecipes200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetSimilarRecipes200ResponseInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('readyInMinutes')) {
          obj['readyInMinutes'] = _ApiClient["default"].convertToType(data['readyInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('sourceUrl')) {
          obj['sourceUrl'] = _ApiClient["default"].convertToType(data['sourceUrl'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetSimilarRecipes200ResponseInner;
}();
/**
 * @member {Number} id
 */
GetSimilarRecipes200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetSimilarRecipes200ResponseInner.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
GetSimilarRecipes200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetSimilarRecipes200ResponseInner.prototype['readyInMinutes'] = undefined;

/**
 * @member {Number} servings
 */
GetSimilarRecipes200ResponseInner.prototype['servings'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetSimilarRecipes200ResponseInner.prototype['sourceUrl'] = undefined;
var _default = GetSimilarRecipes200ResponseInner;
exports["default"] = _default;