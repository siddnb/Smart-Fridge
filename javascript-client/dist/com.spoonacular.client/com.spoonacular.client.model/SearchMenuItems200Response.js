"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchMenuItems200ResponseMenuItemsInner = _interopRequireDefault(require("./SearchMenuItems200ResponseMenuItemsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchMenuItems200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response
 * @version 1.1
 */
var SearchMenuItems200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchMenuItems200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response
   * @param menuItems {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner>} 
   * @param totalMenuItems {Number} 
   * @param type {String} 
   * @param offset {Number} 
   * @param number {Number} 
   */
  function SearchMenuItems200Response(menuItems, totalMenuItems, type, offset, number) {
    _classCallCheck(this, SearchMenuItems200Response);
    SearchMenuItems200Response.initialize(this, menuItems, totalMenuItems, type, offset, number);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchMenuItems200Response, null, [{
    key: "initialize",
    value: function initialize(obj, menuItems, totalMenuItems, type, offset, number) {
      obj['menuItems'] = menuItems;
      obj['totalMenuItems'] = totalMenuItems;
      obj['type'] = type;
      obj['offset'] = offset;
      obj['number'] = number;
    }

    /**
     * Constructs a <code>SearchMenuItems200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response} The populated <code>SearchMenuItems200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchMenuItems200Response();
        if (data.hasOwnProperty('menuItems')) {
          obj['menuItems'] = _ApiClient["default"].convertToType(data['menuItems'], [_SearchMenuItems200ResponseMenuItemsInner["default"]]);
        }
        if (data.hasOwnProperty('totalMenuItems')) {
          obj['totalMenuItems'] = _ApiClient["default"].convertToType(data['totalMenuItems'], 'Number');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchMenuItems200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200ResponseMenuItemsInner>} menuItems
 */
SearchMenuItems200Response.prototype['menuItems'] = undefined;

/**
 * @member {Number} totalMenuItems
 */
SearchMenuItems200Response.prototype['totalMenuItems'] = undefined;

/**
 * @member {String} type
 */
SearchMenuItems200Response.prototype['type'] = undefined;

/**
 * @member {Number} offset
 */
SearchMenuItems200Response.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
SearchMenuItems200Response.prototype['number'] = undefined;
var _default = SearchMenuItems200Response;
exports["default"] = _default;