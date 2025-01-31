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
 * The SearchFoodVideos200ResponseVideosInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner
 * @version 1.1
 */
var SearchFoodVideos200ResponseVideosInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchFoodVideos200ResponseVideosInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner
   * @param title {String} 
   * @param length {Number} 
   * @param rating {Number} 
   * @param shortTitle {String} 
   * @param thumbnail {String} 
   * @param views {Number} 
   * @param youTubeId {String} 
   */
  function SearchFoodVideos200ResponseVideosInner(title, length, rating, shortTitle, thumbnail, views, youTubeId) {
    _classCallCheck(this, SearchFoodVideos200ResponseVideosInner);
    SearchFoodVideos200ResponseVideosInner.initialize(this, title, length, rating, shortTitle, thumbnail, views, youTubeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchFoodVideos200ResponseVideosInner, null, [{
    key: "initialize",
    value: function initialize(obj, title, length, rating, shortTitle, thumbnail, views, youTubeId) {
      obj['title'] = title;
      obj['length'] = length;
      obj['rating'] = rating;
      obj['shortTitle'] = shortTitle;
      obj['thumbnail'] = thumbnail;
      obj['views'] = views;
      obj['youTubeId'] = youTubeId;
    }

    /**
     * Constructs a <code>SearchFoodVideos200ResponseVideosInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner} The populated <code>SearchFoodVideos200ResponseVideosInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchFoodVideos200ResponseVideosInner();
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('length')) {
          obj['length'] = _ApiClient["default"].convertToType(data['length'], 'Number');
        }
        if (data.hasOwnProperty('rating')) {
          obj['rating'] = _ApiClient["default"].convertToType(data['rating'], 'Number');
        }
        if (data.hasOwnProperty('shortTitle')) {
          obj['shortTitle'] = _ApiClient["default"].convertToType(data['shortTitle'], 'String');
        }
        if (data.hasOwnProperty('thumbnail')) {
          obj['thumbnail'] = _ApiClient["default"].convertToType(data['thumbnail'], 'String');
        }
        if (data.hasOwnProperty('views')) {
          obj['views'] = _ApiClient["default"].convertToType(data['views'], 'Number');
        }
        if (data.hasOwnProperty('youTubeId')) {
          obj['youTubeId'] = _ApiClient["default"].convertToType(data['youTubeId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchFoodVideos200ResponseVideosInner;
}();
/**
 * @member {String} title
 */
SearchFoodVideos200ResponseVideosInner.prototype['title'] = undefined;

/**
 * @member {Number} length
 */
SearchFoodVideos200ResponseVideosInner.prototype['length'] = undefined;

/**
 * @member {Number} rating
 */
SearchFoodVideos200ResponseVideosInner.prototype['rating'] = undefined;

/**
 * @member {String} shortTitle
 */
SearchFoodVideos200ResponseVideosInner.prototype['shortTitle'] = undefined;

/**
 * @member {String} thumbnail
 */
SearchFoodVideos200ResponseVideosInner.prototype['thumbnail'] = undefined;

/**
 * @member {Number} views
 */
SearchFoodVideos200ResponseVideosInner.prototype['views'] = undefined;

/**
 * @member {String} youTubeId
 */
SearchFoodVideos200ResponseVideosInner.prototype['youTubeId'] = undefined;
var _default = SearchFoodVideos200ResponseVideosInner;
exports["default"] = _default;