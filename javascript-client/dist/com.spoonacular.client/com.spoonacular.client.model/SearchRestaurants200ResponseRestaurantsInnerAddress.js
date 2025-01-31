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
 * The SearchRestaurants200ResponseRestaurantsInnerAddress model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerAddress
 * @version 1.1
 */
var SearchRestaurants200ResponseRestaurantsInnerAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRestaurants200ResponseRestaurantsInnerAddress</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerAddress
   */
  function SearchRestaurants200ResponseRestaurantsInnerAddress() {
    _classCallCheck(this, SearchRestaurants200ResponseRestaurantsInnerAddress);
    SearchRestaurants200ResponseRestaurantsInnerAddress.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRestaurants200ResponseRestaurantsInnerAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SearchRestaurants200ResponseRestaurantsInnerAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerAddress} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerAddress} The populated <code>SearchRestaurants200ResponseRestaurantsInnerAddress</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRestaurants200ResponseRestaurantsInnerAddress();
        if (data.hasOwnProperty('street_addr')) {
          obj['street_addr'] = _ApiClient["default"].convertToType(data['street_addr'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('zipcode')) {
          obj['zipcode'] = _ApiClient["default"].convertToType(data['zipcode'], 'String');
        }
        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
        if (data.hasOwnProperty('lat')) {
          obj['lat'] = _ApiClient["default"].convertToType(data['lat'], 'Number');
        }
        if (data.hasOwnProperty('lon')) {
          obj['lon'] = _ApiClient["default"].convertToType(data['lon'], 'Number');
        }
        if (data.hasOwnProperty('street_addr_2')) {
          obj['street_addr_2'] = _ApiClient["default"].convertToType(data['street_addr_2'], 'String');
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchRestaurants200ResponseRestaurantsInnerAddress;
}();
/**
 * @member {String} street_addr
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['street_addr'] = undefined;

/**
 * @member {String} city
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['city'] = undefined;

/**
 * @member {String} state
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['state'] = undefined;

/**
 * @member {String} zipcode
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['zipcode'] = undefined;

/**
 * @member {String} country
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['country'] = undefined;

/**
 * @member {Number} lat
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['lon'] = undefined;

/**
 * @member {String} street_addr_2
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['street_addr_2'] = undefined;

/**
 * @member {Number} latitude
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
SearchRestaurants200ResponseRestaurantsInnerAddress.prototype['longitude'] = undefined;
var _default = SearchRestaurants200ResponseRestaurantsInnerAddress;
exports["default"] = _default;