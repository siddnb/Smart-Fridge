"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchAllFood200ResponseSearchResultsInnerResultsInner = _interopRequireDefault(require("./SearchAllFood200ResponseSearchResultsInnerResultsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchAllFood200ResponseSearchResultsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner
 * @version 1.1
 */
var SearchAllFood200ResponseSearchResultsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchAllFood200ResponseSearchResultsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner
   * @param name {String} 
   * @param totalResults {Number} 
   */
  function SearchAllFood200ResponseSearchResultsInner(name, totalResults) {
    _classCallCheck(this, SearchAllFood200ResponseSearchResultsInner);
    SearchAllFood200ResponseSearchResultsInner.initialize(this, name, totalResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchAllFood200ResponseSearchResultsInner, null, [{
    key: "initialize",
    value: function initialize(obj, name, totalResults) {
      obj['name'] = name;
      obj['totalResults'] = totalResults;
    }

    /**
     * Constructs a <code>SearchAllFood200ResponseSearchResultsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInner} The populated <code>SearchAllFood200ResponseSearchResultsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchAllFood200ResponseSearchResultsInner();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_SearchAllFood200ResponseSearchResultsInnerResultsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return SearchAllFood200ResponseSearchResultsInner;
}();
/**
 * @member {String} name
 */
SearchAllFood200ResponseSearchResultsInner.prototype['name'] = undefined;

/**
 * @member {Number} totalResults
 */
SearchAllFood200ResponseSearchResultsInner.prototype['totalResults'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInnerResultsInner>} results
 */
SearchAllFood200ResponseSearchResultsInner.prototype['results'] = undefined;
var _default = SearchAllFood200ResponseSearchResultsInner;
exports["default"] = _default;