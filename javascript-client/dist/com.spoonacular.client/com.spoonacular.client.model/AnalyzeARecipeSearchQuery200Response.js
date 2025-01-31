"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AnalyzeARecipeSearchQuery200ResponseDishesInner = _interopRequireDefault(require("./AnalyzeARecipeSearchQuery200ResponseDishesInner"));
var _AnalyzeARecipeSearchQuery200ResponseIngredientsInner = _interopRequireDefault(require("./AnalyzeARecipeSearchQuery200ResponseIngredientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AnalyzeARecipeSearchQuery200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200Response
 * @version 1.1
 */
var AnalyzeARecipeSearchQuery200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AnalyzeARecipeSearchQuery200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200Response
   * @param dishes {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseDishesInner>} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner>} 
   * @param cuisines {Array.<String>} 
   * @param modifiers {Array.<String>} 
   */
  function AnalyzeARecipeSearchQuery200Response(dishes, ingredients, cuisines, modifiers) {
    _classCallCheck(this, AnalyzeARecipeSearchQuery200Response);
    AnalyzeARecipeSearchQuery200Response.initialize(this, dishes, ingredients, cuisines, modifiers);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AnalyzeARecipeSearchQuery200Response, null, [{
    key: "initialize",
    value: function initialize(obj, dishes, ingredients, cuisines, modifiers) {
      obj['dishes'] = dishes;
      obj['ingredients'] = ingredients;
      obj['cuisines'] = cuisines;
      obj['modifiers'] = modifiers;
    }

    /**
     * Constructs a <code>AnalyzeARecipeSearchQuery200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200Response} The populated <code>AnalyzeARecipeSearchQuery200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AnalyzeARecipeSearchQuery200Response();
        if (data.hasOwnProperty('dishes')) {
          obj['dishes'] = _ApiClient["default"].convertToType(data['dishes'], [_AnalyzeARecipeSearchQuery200ResponseDishesInner["default"]]);
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient["default"].convertToType(data['ingredients'], [_AnalyzeARecipeSearchQuery200ResponseIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient["default"].convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('modifiers')) {
          obj['modifiers'] = _ApiClient["default"].convertToType(data['modifiers'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return AnalyzeARecipeSearchQuery200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseDishesInner>} dishes
 */
AnalyzeARecipeSearchQuery200Response.prototype['dishes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner>} ingredients
 */
AnalyzeARecipeSearchQuery200Response.prototype['ingredients'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
AnalyzeARecipeSearchQuery200Response.prototype['cuisines'] = undefined;

/**
 * @member {Array.<String>} modifiers
 */
AnalyzeARecipeSearchQuery200Response.prototype['modifiers'] = undefined;
var _default = AnalyzeARecipeSearchQuery200Response;
exports["default"] = _default;