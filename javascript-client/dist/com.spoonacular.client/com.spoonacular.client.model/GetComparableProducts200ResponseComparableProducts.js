"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetComparableProducts200ResponseComparableProductsProteinInner = _interopRequireDefault(require("./GetComparableProducts200ResponseComparableProductsProteinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetComparableProducts200ResponseComparableProducts model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts
 * @version 1.1
 */
var GetComparableProducts200ResponseComparableProducts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetComparableProducts200ResponseComparableProducts</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts
   * @param calories {Array.<Object>} 
   * @param likes {Array.<Object>} 
   * @param price {Array.<Object>} 
   * @param protein {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner>} 
   * @param spoonacularScore {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner>} 
   * @param sugar {Array.<Object>} 
   */
  function GetComparableProducts200ResponseComparableProducts(calories, likes, price, protein, spoonacularScore, sugar) {
    _classCallCheck(this, GetComparableProducts200ResponseComparableProducts);
    GetComparableProducts200ResponseComparableProducts.initialize(this, calories, likes, price, protein, spoonacularScore, sugar);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetComparableProducts200ResponseComparableProducts, null, [{
    key: "initialize",
    value: function initialize(obj, calories, likes, price, protein, spoonacularScore, sugar) {
      obj['calories'] = calories;
      obj['likes'] = likes;
      obj['price'] = price;
      obj['protein'] = protein;
      obj['spoonacularScore'] = spoonacularScore;
      obj['sugar'] = sugar;
    }

    /**
     * Constructs a <code>GetComparableProducts200ResponseComparableProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProducts} The populated <code>GetComparableProducts200ResponseComparableProducts</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetComparableProducts200ResponseComparableProducts();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient["default"].convertToType(data['calories'], [Object]);
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient["default"].convertToType(data['likes'], [Object]);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], [Object]);
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient["default"].convertToType(data['protein'], [_GetComparableProducts200ResponseComparableProductsProteinInner["default"]]);
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient["default"].convertToType(data['spoonacularScore'], [_GetComparableProducts200ResponseComparableProductsProteinInner["default"]]);
        }
        if (data.hasOwnProperty('sugar')) {
          obj['sugar'] = _ApiClient["default"].convertToType(data['sugar'], [Object]);
        }
      }
      return obj;
    }
  }]);
  return GetComparableProducts200ResponseComparableProducts;
}();
/**
 * @member {Array.<Object>} calories
 */
GetComparableProducts200ResponseComparableProducts.prototype['calories'] = undefined;

/**
 * @member {Array.<Object>} likes
 */
GetComparableProducts200ResponseComparableProducts.prototype['likes'] = undefined;

/**
 * @member {Array.<Object>} price
 */
GetComparableProducts200ResponseComparableProducts.prototype['price'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner>} protein
 */
GetComparableProducts200ResponseComparableProducts.prototype['protein'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner>} spoonacularScore
 */
GetComparableProducts200ResponseComparableProducts.prototype['spoonacularScore'] = undefined;

/**
 * @member {Array.<Object>} sugar
 */
GetComparableProducts200ResponseComparableProducts.prototype['sugar'] = undefined;
var _default = GetComparableProducts200ResponseComparableProducts;
exports["default"] = _default;