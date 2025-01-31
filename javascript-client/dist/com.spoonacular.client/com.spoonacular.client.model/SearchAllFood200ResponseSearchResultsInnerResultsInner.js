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
 * The SearchAllFood200ResponseSearchResultsInnerResultsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInnerResultsInner
 * @version 1.1
 */
var SearchAllFood200ResponseSearchResultsInnerResultsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchAllFood200ResponseSearchResultsInnerResultsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInnerResultsInner
   * @param id {String} 
   * @param name {String} 
   * @param image {String} 
   * @param link {String} 
   * @param type {String} 
   * @param relevance {Number} 
   * @param content {String} 
   */
  function SearchAllFood200ResponseSearchResultsInnerResultsInner(id, name, image, link, type, relevance, content) {
    _classCallCheck(this, SearchAllFood200ResponseSearchResultsInnerResultsInner);
    SearchAllFood200ResponseSearchResultsInnerResultsInner.initialize(this, id, name, image, link, type, relevance, content);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchAllFood200ResponseSearchResultsInnerResultsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, image, link, type, relevance, content) {
      obj['id'] = id;
      obj['name'] = name;
      obj['image'] = image;
      obj['link'] = link;
      obj['type'] = type;
      obj['relevance'] = relevance;
      obj['content'] = content;
    }

    /**
     * Constructs a <code>SearchAllFood200ResponseSearchResultsInnerResultsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInnerResultsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200ResponseSearchResultsInnerResultsInner} The populated <code>SearchAllFood200ResponseSearchResultsInnerResultsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchAllFood200ResponseSearchResultsInnerResultsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('relevance')) {
          obj['relevance'] = _ApiClient["default"].convertToType(data['relevance'], 'Number');
        }
        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchAllFood200ResponseSearchResultsInnerResultsInner;
}();
/**
 * @member {String} id
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['name'] = undefined;

/**
 * @member {String} image
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['image'] = undefined;

/**
 * @member {String} link
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['link'] = undefined;

/**
 * @member {String} type
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['type'] = undefined;

/**
 * @member {Number} relevance
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['relevance'] = undefined;

/**
 * @member {String} content
 */
SearchAllFood200ResponseSearchResultsInnerResultsInner.prototype['content'] = undefined;
var _default = SearchAllFood200ResponseSearchResultsInnerResultsInner;
exports["default"] = _default;