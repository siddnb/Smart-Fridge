"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchRecipes200ResponseResultsInner = _interopRequireDefault(require("./SearchRecipes200ResponseResultsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchRecipes200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200Response
 * @version 1.1
 */
var SearchRecipes200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRecipes200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200Response
   * @param offset {Number} 
   * @param number {Number} 
   * @param results {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200ResponseResultsInner>} 
   * @param totalResults {Number} 
   */
  function SearchRecipes200Response(offset, number, results, totalResults) {
    _classCallCheck(this, SearchRecipes200Response);
    SearchRecipes200Response.initialize(this, offset, number, results, totalResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRecipes200Response, null, [{
    key: "initialize",
    value: function initialize(obj, offset, number, results, totalResults) {
      obj['offset'] = offset;
      obj['number'] = number;
      obj['results'] = results;
      obj['totalResults'] = totalResults;
    }

    /**
     * Constructs a <code>SearchRecipes200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200Response} The populated <code>SearchRecipes200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRecipes200Response();
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_SearchRecipes200ResponseResultsInner["default"]]);
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchRecipes200Response;
}();
/**
 * @member {Number} offset
 */
SearchRecipes200Response.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
SearchRecipes200Response.prototype['number'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipes200ResponseResultsInner>} results
 */
SearchRecipes200Response.prototype['results'] = undefined;

/**
 * @member {Number} totalResults
 */
SearchRecipes200Response.prototype['totalResults'] = undefined;
var _default = SearchRecipes200Response;
exports["default"] = _default;