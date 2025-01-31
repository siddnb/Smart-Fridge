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
 * The DetectFoodInText200ResponseAnnotationsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200ResponseAnnotationsInner
 * @version 1.1
 */
var DetectFoodInText200ResponseAnnotationsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DetectFoodInText200ResponseAnnotationsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200ResponseAnnotationsInner
   * @param annotation {String} 
   * @param image {String} 
   * @param tag {String} 
   */
  function DetectFoodInText200ResponseAnnotationsInner(annotation, image, tag) {
    _classCallCheck(this, DetectFoodInText200ResponseAnnotationsInner);
    DetectFoodInText200ResponseAnnotationsInner.initialize(this, annotation, image, tag);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DetectFoodInText200ResponseAnnotationsInner, null, [{
    key: "initialize",
    value: function initialize(obj, annotation, image, tag) {
      obj['annotation'] = annotation;
      obj['image'] = image;
      obj['tag'] = tag;
    }

    /**
     * Constructs a <code>DetectFoodInText200ResponseAnnotationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200ResponseAnnotationsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200ResponseAnnotationsInner} The populated <code>DetectFoodInText200ResponseAnnotationsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetectFoodInText200ResponseAnnotationsInner();
        if (data.hasOwnProperty('annotation')) {
          obj['annotation'] = _ApiClient["default"].convertToType(data['annotation'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DetectFoodInText200ResponseAnnotationsInner;
}();
/**
 * @member {String} annotation
 */
DetectFoodInText200ResponseAnnotationsInner.prototype['annotation'] = undefined;

/**
 * @member {String} image
 */
DetectFoodInText200ResponseAnnotationsInner.prototype['image'] = undefined;

/**
 * @member {String} tag
 */
DetectFoodInText200ResponseAnnotationsInner.prototype['tag'] = undefined;
var _default = DetectFoodInText200ResponseAnnotationsInner;
exports["default"] = _default;