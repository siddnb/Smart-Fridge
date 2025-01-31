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
 * The ImageAnalysisByURL200ResponseRecipesInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseRecipesInner
 * @version 1.1
 */
var ImageAnalysisByURL200ResponseRecipesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageAnalysisByURL200ResponseRecipesInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseRecipesInner
   * @param id {Number} 
   * @param title {String} 
   * @param imageType {String} 
   * @param url {String} 
   */
  function ImageAnalysisByURL200ResponseRecipesInner(id, title, imageType, url) {
    _classCallCheck(this, ImageAnalysisByURL200ResponseRecipesInner);
    ImageAnalysisByURL200ResponseRecipesInner.initialize(this, id, title, imageType, url);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ImageAnalysisByURL200ResponseRecipesInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, imageType, url) {
      obj['id'] = id;
      obj['title'] = title;
      obj['imageType'] = imageType;
      obj['url'] = url;
    }

    /**
     * Constructs a <code>ImageAnalysisByURL200ResponseRecipesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseRecipesInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseRecipesInner} The populated <code>ImageAnalysisByURL200ResponseRecipesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageAnalysisByURL200ResponseRecipesInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ImageAnalysisByURL200ResponseRecipesInner;
}();
/**
 * @member {Number} id
 */
ImageAnalysisByURL200ResponseRecipesInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
ImageAnalysisByURL200ResponseRecipesInner.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
ImageAnalysisByURL200ResponseRecipesInner.prototype['imageType'] = undefined;

/**
 * @member {String} url
 */
ImageAnalysisByURL200ResponseRecipesInner.prototype['url'] = undefined;
var _default = ImageAnalysisByURL200ResponseRecipesInner;
exports["default"] = _default;