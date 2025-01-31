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
 * The AnalyzeARecipeSearchQuery200ResponseIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner
 * @version 1.1
 */
var AnalyzeARecipeSearchQuery200ResponseIngredientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner
   * @param image {String} 
   * @param include {Boolean} 
   * @param name {String} 
   */
  function AnalyzeARecipeSearchQuery200ResponseIngredientsInner(image, include, name) {
    _classCallCheck(this, AnalyzeARecipeSearchQuery200ResponseIngredientsInner);
    AnalyzeARecipeSearchQuery200ResponseIngredientsInner.initialize(this, image, include, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AnalyzeARecipeSearchQuery200ResponseIngredientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, image, include, name) {
      obj['image'] = image;
      obj['include'] = include;
      obj['name'] = name;
    }

    /**
     * Constructs a <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner} The populated <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AnalyzeARecipeSearchQuery200ResponseIngredientsInner();
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('include')) {
          obj['include'] = _ApiClient["default"].convertToType(data['include'], 'Boolean');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AnalyzeARecipeSearchQuery200ResponseIngredientsInner;
}();
/**
 * @member {String} image
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['image'] = undefined;

/**
 * @member {Boolean} include
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['include'] = undefined;

/**
 * @member {String} name
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['name'] = undefined;
var _default = AnalyzeARecipeSearchQuery200ResponseIngredientsInner;
exports["default"] = _default;