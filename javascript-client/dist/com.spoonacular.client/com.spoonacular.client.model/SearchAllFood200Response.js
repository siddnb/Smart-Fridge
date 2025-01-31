"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchAllFood200ResponseSearchResultsInner = _interopRequireDefault(require("./SearchAllFood200ResponseSearchResultsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchAllFood200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response
 * @version 1.1
 */
var SearchAllFood200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchAllFood200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response
   * @param query {String} 
   * @param totalResults {Number} 
   * @param limit {Number} 
   * @param offset {Number} 
   * @param searchResults {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner>} 
   */
  function SearchAllFood200Response(query, totalResults, limit, offset, searchResults) {
    _classCallCheck(this, SearchAllFood200Response);
    SearchAllFood200Response.initialize(this, query, totalResults, limit, offset, searchResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchAllFood200Response, null, [{
    key: "initialize",
    value: function initialize(obj, query, totalResults, limit, offset, searchResults) {
      obj['query'] = query;
      obj['totalResults'] = totalResults;
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['searchResults'] = searchResults;
    }

    /**
     * Constructs a <code>SearchAllFood200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response} The populated <code>SearchAllFood200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchAllFood200Response();
        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('searchResults')) {
          obj['searchResults'] = _ApiClient["default"].convertToType(data['searchResults'], [_SearchAllFood200ResponseSearchResultsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return SearchAllFood200Response;
}();
/**
 * @member {String} query
 */
SearchAllFood200Response.prototype['query'] = undefined;

/**
 * @member {Number} totalResults
 */
SearchAllFood200Response.prototype['totalResults'] = undefined;

/**
 * @member {Number} limit
 */
SearchAllFood200Response.prototype['limit'] = undefined;

/**
 * @member {Number} offset
 */
SearchAllFood200Response.prototype['offset'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner>} searchResults
 */
SearchAllFood200Response.prototype['searchResults'] = undefined;
var _default = SearchAllFood200Response;
exports["default"] = _default;