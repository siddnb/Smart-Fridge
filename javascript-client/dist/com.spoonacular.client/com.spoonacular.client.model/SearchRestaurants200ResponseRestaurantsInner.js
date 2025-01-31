"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SearchRestaurants200ResponseRestaurantsInnerAddress = _interopRequireDefault(require("./SearchRestaurants200ResponseRestaurantsInnerAddress"));
var _SearchRestaurants200ResponseRestaurantsInnerLocalHours = _interopRequireDefault(require("./SearchRestaurants200ResponseRestaurantsInnerLocalHours"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SearchRestaurants200ResponseRestaurantsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInner
 * @version 1.1
 */
var SearchRestaurants200ResponseRestaurantsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRestaurants200ResponseRestaurantsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInner
   */
  function SearchRestaurants200ResponseRestaurantsInner() {
    _classCallCheck(this, SearchRestaurants200ResponseRestaurantsInner);
    SearchRestaurants200ResponseRestaurantsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRestaurants200ResponseRestaurantsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SearchRestaurants200ResponseRestaurantsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInner} The populated <code>SearchRestaurants200ResponseRestaurantsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRestaurants200ResponseRestaurantsInner();
        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient["default"].convertToType(data['_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _ApiClient["default"].convertToType(data['phone_number'], 'Number');
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _SearchRestaurants200ResponseRestaurantsInnerAddress["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('local_hours')) {
          obj['local_hours'] = _SearchRestaurants200ResponseRestaurantsInnerLocalHours["default"].constructFromObject(data['local_hours']);
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient["default"].convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('food_photos')) {
          obj['food_photos'] = _ApiClient["default"].convertToType(data['food_photos'], ['String']);
        }
        if (data.hasOwnProperty('logo_photos')) {
          obj['logo_photos'] = _ApiClient["default"].convertToType(data['logo_photos'], ['String']);
        }
        if (data.hasOwnProperty('store_photos')) {
          obj['store_photos'] = _ApiClient["default"].convertToType(data['store_photos'], [Object]);
        }
        if (data.hasOwnProperty('dollar_signs')) {
          obj['dollar_signs'] = _ApiClient["default"].convertToType(data['dollar_signs'], 'Number');
        }
        if (data.hasOwnProperty('pickup_enabled')) {
          obj['pickup_enabled'] = _ApiClient["default"].convertToType(data['pickup_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('delivery_enabled')) {
          obj['delivery_enabled'] = _ApiClient["default"].convertToType(data['delivery_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('is_open')) {
          obj['is_open'] = _ApiClient["default"].convertToType(data['is_open'], 'Boolean');
        }
        if (data.hasOwnProperty('offers_first_party_delivery')) {
          obj['offers_first_party_delivery'] = _ApiClient["default"].convertToType(data['offers_first_party_delivery'], 'Boolean');
        }
        if (data.hasOwnProperty('offers_third_party_delivery')) {
          obj['offers_third_party_delivery'] = _ApiClient["default"].convertToType(data['offers_third_party_delivery'], 'Boolean');
        }
        if (data.hasOwnProperty('miles')) {
          obj['miles'] = _ApiClient["default"].convertToType(data['miles'], 'Number');
        }
        if (data.hasOwnProperty('weighted_rating_value')) {
          obj['weighted_rating_value'] = _ApiClient["default"].convertToType(data['weighted_rating_value'], 'Number');
        }
        if (data.hasOwnProperty('aggregated_rating_count')) {
          obj['aggregated_rating_count'] = _ApiClient["default"].convertToType(data['aggregated_rating_count'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SearchRestaurants200ResponseRestaurantsInner;
}();
/**
 * @member {String} _id
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['name'] = undefined;

/**
 * @member {Number} phone_number
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['phone_number'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerAddress} address
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['address'] = undefined;

/**
 * @member {String} type
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['type'] = undefined;

/**
 * @member {String} description
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['description'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours} local_hours
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['local_hours'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['cuisines'] = undefined;

/**
 * @member {Array.<String>} food_photos
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['food_photos'] = undefined;

/**
 * @member {Array.<String>} logo_photos
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['logo_photos'] = undefined;

/**
 * @member {Array.<Object>} store_photos
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['store_photos'] = undefined;

/**
 * @member {Number} dollar_signs
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['dollar_signs'] = undefined;

/**
 * @member {Boolean} pickup_enabled
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['pickup_enabled'] = undefined;

/**
 * @member {Boolean} delivery_enabled
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['delivery_enabled'] = undefined;

/**
 * @member {Boolean} is_open
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['is_open'] = undefined;

/**
 * @member {Boolean} offers_first_party_delivery
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['offers_first_party_delivery'] = undefined;

/**
 * @member {Boolean} offers_third_party_delivery
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['offers_third_party_delivery'] = undefined;

/**
 * @member {Number} miles
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['miles'] = undefined;

/**
 * @member {Number} weighted_rating_value
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['weighted_rating_value'] = undefined;

/**
 * @member {Number} aggregated_rating_count
 */
SearchRestaurants200ResponseRestaurantsInner.prototype['aggregated_rating_count'] = undefined;
var _default = SearchRestaurants200ResponseRestaurantsInner;
exports["default"] = _default;