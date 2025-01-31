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
 * The GetRecipeInformation200ResponseWinePairingProductMatchesInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner
 * @version 1.1
 */
var GetRecipeInformation200ResponseWinePairingProductMatchesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeInformation200ResponseWinePairingProductMatchesInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner
   * @param id {Number} 
   * @param title {String} 
   * @param description {String} 
   * @param price {String} 
   * @param imageUrl {String} 
   * @param averageRating {Number} 
   * @param ratingCount {Number} 
   * @param score {Number} 
   * @param link {String} 
   */
  function GetRecipeInformation200ResponseWinePairingProductMatchesInner(id, title, description, price, imageUrl, averageRating, ratingCount, score, link) {
    _classCallCheck(this, GetRecipeInformation200ResponseWinePairingProductMatchesInner);
    GetRecipeInformation200ResponseWinePairingProductMatchesInner.initialize(this, id, title, description, price, imageUrl, averageRating, ratingCount, score, link);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeInformation200ResponseWinePairingProductMatchesInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, description, price, imageUrl, averageRating, ratingCount, score, link) {
      obj['id'] = id;
      obj['title'] = title;
      obj['description'] = description;
      obj['price'] = price;
      obj['imageUrl'] = imageUrl;
      obj['averageRating'] = averageRating;
      obj['ratingCount'] = ratingCount;
      obj['score'] = score;
      obj['link'] = link;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseWinePairingProductMatchesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner} The populated <code>GetRecipeInformation200ResponseWinePairingProductMatchesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeInformation200ResponseWinePairingProductMatchesInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'String');
        }
        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }
        if (data.hasOwnProperty('averageRating')) {
          obj['averageRating'] = _ApiClient["default"].convertToType(data['averageRating'], 'Number');
        }
        if (data.hasOwnProperty('ratingCount')) {
          obj['ratingCount'] = _ApiClient["default"].convertToType(data['ratingCount'], 'Number');
        }
        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }
        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetRecipeInformation200ResponseWinePairingProductMatchesInner;
}();
/**
 * @member {Number} id
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['title'] = undefined;

/**
 * @member {String} description
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['description'] = undefined;

/**
 * @member {String} price
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['price'] = undefined;

/**
 * @member {String} imageUrl
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['imageUrl'] = undefined;

/**
 * @member {Number} averageRating
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['averageRating'] = undefined;

/**
 * @member {Number} ratingCount
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['ratingCount'] = undefined;

/**
 * @member {Number} score
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['score'] = undefined;

/**
 * @member {String} link
 */
GetRecipeInformation200ResponseWinePairingProductMatchesInner.prototype['link'] = undefined;
var _default = GetRecipeInformation200ResponseWinePairingProductMatchesInner;
exports["default"] = _default;