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
 * The GetWinePairing200ResponseProductMatchesInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200ResponseProductMatchesInner
 * @version 1.1
 */
var GetWinePairing200ResponseProductMatchesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWinePairing200ResponseProductMatchesInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200ResponseProductMatchesInner
   * @param id {Number} 
   * @param title {String} 
   * @param averageRating {Number} 
   * @param imageUrl {String} 
   * @param link {String} 
   * @param price {String} 
   * @param ratingCount {Number} 
   * @param score {Number} 
   */
  function GetWinePairing200ResponseProductMatchesInner(id, title, averageRating, imageUrl, link, price, ratingCount, score) {
    _classCallCheck(this, GetWinePairing200ResponseProductMatchesInner);
    GetWinePairing200ResponseProductMatchesInner.initialize(this, id, title, averageRating, imageUrl, link, price, ratingCount, score);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWinePairing200ResponseProductMatchesInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, averageRating, imageUrl, link, price, ratingCount, score) {
      obj['id'] = id;
      obj['title'] = title;
      obj['averageRating'] = averageRating;
      obj['imageUrl'] = imageUrl;
      obj['link'] = link;
      obj['price'] = price;
      obj['ratingCount'] = ratingCount;
      obj['score'] = score;
    }

    /**
     * Constructs a <code>GetWinePairing200ResponseProductMatchesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200ResponseProductMatchesInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200ResponseProductMatchesInner} The populated <code>GetWinePairing200ResponseProductMatchesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWinePairing200ResponseProductMatchesInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('averageRating')) {
          obj['averageRating'] = _ApiClient["default"].convertToType(data['averageRating'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], Object);
        }
        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }
        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'String');
        }
        if (data.hasOwnProperty('ratingCount')) {
          obj['ratingCount'] = _ApiClient["default"].convertToType(data['ratingCount'], 'Number');
        }
        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetWinePairing200ResponseProductMatchesInner;
}();
/**
 * @member {Number} id
 */
GetWinePairing200ResponseProductMatchesInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetWinePairing200ResponseProductMatchesInner.prototype['title'] = undefined;

/**
 * @member {Number} averageRating
 */
GetWinePairing200ResponseProductMatchesInner.prototype['averageRating'] = undefined;

/**
 * @member {Object} description
 */
GetWinePairing200ResponseProductMatchesInner.prototype['description'] = undefined;

/**
 * @member {String} imageUrl
 */
GetWinePairing200ResponseProductMatchesInner.prototype['imageUrl'] = undefined;

/**
 * @member {String} link
 */
GetWinePairing200ResponseProductMatchesInner.prototype['link'] = undefined;

/**
 * @member {String} price
 */
GetWinePairing200ResponseProductMatchesInner.prototype['price'] = undefined;

/**
 * @member {Number} ratingCount
 */
GetWinePairing200ResponseProductMatchesInner.prototype['ratingCount'] = undefined;

/**
 * @member {Number} score
 */
GetWinePairing200ResponseProductMatchesInner.prototype['score'] = undefined;
var _default = GetWinePairing200ResponseProductMatchesInner;
exports["default"] = _default;