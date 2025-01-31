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
 * The SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational
 * @version 1.1
 */
var SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational
   */
  function SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational() {
    _classCallCheck(this, SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational);
    SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} The populated <code>SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational();
        if (data.hasOwnProperty('Monday')) {
          obj['Monday'] = _ApiClient["default"].convertToType(data['Monday'], 'String');
        }
        if (data.hasOwnProperty('Tuesday')) {
          obj['Tuesday'] = _ApiClient["default"].convertToType(data['Tuesday'], 'String');
        }
        if (data.hasOwnProperty('Wednesday')) {
          obj['Wednesday'] = _ApiClient["default"].convertToType(data['Wednesday'], 'String');
        }
        if (data.hasOwnProperty('Thursday')) {
          obj['Thursday'] = _ApiClient["default"].convertToType(data['Thursday'], 'String');
        }
        if (data.hasOwnProperty('Friday')) {
          obj['Friday'] = _ApiClient["default"].convertToType(data['Friday'], 'String');
        }
        if (data.hasOwnProperty('Saturday')) {
          obj['Saturday'] = _ApiClient["default"].convertToType(data['Saturday'], 'String');
        }
        if (data.hasOwnProperty('Sunday')) {
          obj['Sunday'] = _ApiClient["default"].convertToType(data['Sunday'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational;
}();
/**
 * @member {String} Monday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Monday'] = undefined;

/**
 * @member {String} Tuesday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Tuesday'] = undefined;

/**
 * @member {String} Wednesday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Wednesday'] = undefined;

/**
 * @member {String} Thursday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Thursday'] = undefined;

/**
 * @member {String} Friday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Friday'] = undefined;

/**
 * @member {String} Saturday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Saturday'] = undefined;

/**
 * @member {String} Sunday
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.prototype['Sunday'] = undefined;
var _default = SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational;
exports["default"] = _default;