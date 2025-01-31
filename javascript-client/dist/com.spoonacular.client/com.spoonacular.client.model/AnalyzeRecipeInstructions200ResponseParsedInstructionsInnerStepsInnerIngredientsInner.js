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
 * The AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner
 * @version 1.1
 */
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner
   * @param id {Number} 
   * @param name {String} 
   * @param localizedName {String} 
   * @param image {String} 
   */
  function AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner(id, name, localizedName, image) {
    _classCallCheck(this, AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner);
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.initialize(this, id, name, localizedName, image);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, localizedName, image) {
      obj['id'] = id;
      obj['name'] = name;
      obj['localizedName'] = localizedName;
      obj['image'] = image;
    }

    /**
     * Constructs a <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner} The populated <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('localizedName')) {
          obj['localizedName'] = _ApiClient["default"].convertToType(data['localizedName'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner;
}();
/**
 * @member {Number} id
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['name'] = undefined;

/**
 * @member {String} localizedName
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['localizedName'] = undefined;

/**
 * @member {String} image
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['image'] = undefined;
var _default = AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner;
exports["default"] = _default;