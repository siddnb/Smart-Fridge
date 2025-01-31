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
 * The GetComparableProducts200ResponseComparableProductsProteinInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner
 * @version 1.1
 */
var GetComparableProducts200ResponseComparableProductsProteinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetComparableProducts200ResponseComparableProductsProteinInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner
   * @param difference {Number} 
   * @param id {Number} 
   * @param image {String} 
   * @param title {String} 
   */
  function GetComparableProducts200ResponseComparableProductsProteinInner(difference, id, image, title) {
    _classCallCheck(this, GetComparableProducts200ResponseComparableProductsProteinInner);
    GetComparableProducts200ResponseComparableProductsProteinInner.initialize(this, difference, id, image, title);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetComparableProducts200ResponseComparableProductsProteinInner, null, [{
    key: "initialize",
    value: function initialize(obj, difference, id, image, title) {
      obj['difference'] = difference;
      obj['id'] = id;
      obj['image'] = image;
      obj['title'] = title;
    }

    /**
     * Constructs a <code>GetComparableProducts200ResponseComparableProductsProteinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200ResponseComparableProductsProteinInner} The populated <code>GetComparableProducts200ResponseComparableProductsProteinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetComparableProducts200ResponseComparableProductsProteinInner();
        if (data.hasOwnProperty('difference')) {
          obj['difference'] = _ApiClient["default"].convertToType(data['difference'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetComparableProducts200ResponseComparableProductsProteinInner;
}();
/**
 * @member {Number} difference
 */
GetComparableProducts200ResponseComparableProductsProteinInner.prototype['difference'] = undefined;

/**
 * @member {Number} id
 */
GetComparableProducts200ResponseComparableProductsProteinInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
GetComparableProducts200ResponseComparableProductsProteinInner.prototype['image'] = undefined;

/**
 * @member {String} title
 */
GetComparableProducts200ResponseComparableProductsProteinInner.prototype['title'] = undefined;
var _default = GetComparableProducts200ResponseComparableProductsProteinInner;
exports["default"] = _default;