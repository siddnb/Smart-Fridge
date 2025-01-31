"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchFoodVideos200ResponseVideosInner = _interopRequireDefault(require("./SearchFoodVideos200ResponseVideosInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchFoodVideos200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response
 * @version 1.1
 */
var SearchFoodVideos200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchFoodVideos200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response
   * @param videos {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner>} 
   * @param totalResults {Number} 
   */
  function SearchFoodVideos200Response(videos, totalResults) {
    _classCallCheck(this, SearchFoodVideos200Response);
    SearchFoodVideos200Response.initialize(this, videos, totalResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchFoodVideos200Response, null, [{
    key: "initialize",
    value: function initialize(obj, videos, totalResults) {
      obj['videos'] = videos;
      obj['totalResults'] = totalResults;
    }

    /**
     * Constructs a <code>SearchFoodVideos200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response} The populated <code>SearchFoodVideos200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchFoodVideos200Response();
        if (data.hasOwnProperty('videos')) {
          obj['videos'] = _ApiClient["default"].convertToType(data['videos'], [_SearchFoodVideos200ResponseVideosInner["default"]]);
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchFoodVideos200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200ResponseVideosInner>} videos
 */
SearchFoodVideos200Response.prototype['videos'] = undefined;

/**
 * @member {Number} totalResults
 */
SearchFoodVideos200Response.prototype['totalResults'] = undefined;
var _default = SearchFoodVideos200Response;
exports["default"] = _default;