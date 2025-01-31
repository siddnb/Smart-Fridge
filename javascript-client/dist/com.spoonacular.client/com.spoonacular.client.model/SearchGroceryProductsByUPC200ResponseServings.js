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
 * The SearchGroceryProductsByUPC200ResponseServings model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings
 * @version 1.1
 */
var SearchGroceryProductsByUPC200ResponseServings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchGroceryProductsByUPC200ResponseServings</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings
   * @param number {Number} 
   * @param size {Number} 
   * @param unit {String} 
   */
  function SearchGroceryProductsByUPC200ResponseServings(number, size, unit) {
    _classCallCheck(this, SearchGroceryProductsByUPC200ResponseServings);
    SearchGroceryProductsByUPC200ResponseServings.initialize(this, number, size, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchGroceryProductsByUPC200ResponseServings, null, [{
    key: "initialize",
    value: function initialize(obj, number, size, unit) {
      obj['number'] = number;
      obj['size'] = size;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>SearchGroceryProductsByUPC200ResponseServings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200ResponseServings} The populated <code>SearchGroceryProductsByUPC200ResponseServings</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchGroceryProductsByUPC200ResponseServings();
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchGroceryProductsByUPC200ResponseServings;
}();
/**
 * @member {Number} number
 */
SearchGroceryProductsByUPC200ResponseServings.prototype['number'] = undefined;

/**
 * @member {Number} size
 */
SearchGroceryProductsByUPC200ResponseServings.prototype['size'] = undefined;

/**
 * @member {String} unit
 */
SearchGroceryProductsByUPC200ResponseServings.prototype['unit'] = undefined;
var _default = SearchGroceryProductsByUPC200ResponseServings;
exports["default"] = _default;