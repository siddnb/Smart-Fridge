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
 * The ClassifyGroceryProductBulkRequestInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner
 * @version 1.1
 */
var ClassifyGroceryProductBulkRequestInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClassifyGroceryProductBulkRequestInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner
   * @param title {String} 
   * @param upc {String} 
   * @param pluCode {String} 
   */
  function ClassifyGroceryProductBulkRequestInner(title, upc, pluCode) {
    _classCallCheck(this, ClassifyGroceryProductBulkRequestInner);
    ClassifyGroceryProductBulkRequestInner.initialize(this, title, upc, pluCode);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ClassifyGroceryProductBulkRequestInner, null, [{
    key: "initialize",
    value: function initialize(obj, title, upc, pluCode) {
      obj['title'] = title;
      obj['upc'] = upc;
      obj['plu_code'] = pluCode;
    }

    /**
     * Constructs a <code>ClassifyGroceryProductBulkRequestInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner} The populated <code>ClassifyGroceryProductBulkRequestInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClassifyGroceryProductBulkRequestInner();
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('upc')) {
          obj['upc'] = _ApiClient["default"].convertToType(data['upc'], 'String');
        }
        if (data.hasOwnProperty('plu_code')) {
          obj['plu_code'] = _ApiClient["default"].convertToType(data['plu_code'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ClassifyGroceryProductBulkRequestInner;
}();
/**
 * @member {String} title
 */
ClassifyGroceryProductBulkRequestInner.prototype['title'] = undefined;

/**
 * @member {String} upc
 */
ClassifyGroceryProductBulkRequestInner.prototype['upc'] = undefined;

/**
 * @member {String} plu_code
 */
ClassifyGroceryProductBulkRequestInner.prototype['plu_code'] = undefined;
var _default = ClassifyGroceryProductBulkRequestInner;
exports["default"] = _default;