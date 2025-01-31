"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational = _interopRequireDefault(require("./SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchRestaurants200ResponseRestaurantsInnerLocalHours model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours
 * @version 1.1
 */
var SearchRestaurants200ResponseRestaurantsInnerLocalHours = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours
   */
  function SearchRestaurants200ResponseRestaurantsInnerLocalHours() {
    _classCallCheck(this, SearchRestaurants200ResponseRestaurantsInnerLocalHours);
    SearchRestaurants200ResponseRestaurantsInnerLocalHours.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRestaurants200ResponseRestaurantsInnerLocalHours, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours} The populated <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRestaurants200ResponseRestaurantsInnerLocalHours();
        if (data.hasOwnProperty('operational')) {
          obj['operational'] = _SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational["default"].constructFromObject(data['operational']);
        }
        if (data.hasOwnProperty('delivery')) {
          obj['delivery'] = _SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational["default"].constructFromObject(data['delivery']);
        }
        if (data.hasOwnProperty('pickup')) {
          obj['pickup'] = _SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational["default"].constructFromObject(data['pickup']);
        }
        if (data.hasOwnProperty('dine_in')) {
          obj['dine_in'] = _SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational["default"].constructFromObject(data['dine_in']);
        }
      }
      return obj;
    }
  }]);
  return SearchRestaurants200ResponseRestaurantsInnerLocalHours;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} operational
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['operational'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} delivery
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['delivery'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} pickup
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['pickup'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} dine_in
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['dine_in'] = undefined;
var _default = SearchRestaurants200ResponseRestaurantsInnerLocalHours;
exports["default"] = _default;