"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner = _interopRequireDefault(require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner
 * @version 1.1
 */
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner
   * @param number {Number} 
   * @param step {String} 
   */
  function AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner(number, step) {
    _classCallCheck(this, AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner);
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.initialize(this, number, step);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner, null, [{
    key: "initialize",
    value: function initialize(obj, number, step) {
      obj['number'] = number;
      obj['step'] = step;
    }

    /**
     * Constructs a <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner} The populated <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner();
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('step')) {
          obj['step'] = _ApiClient["default"].convertToType(data['step'], 'String');
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient["default"].convertToType(data['ingredients'], [_AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('equipment')) {
          obj['equipment'] = _ApiClient["default"].convertToType(data['equipment'], [_AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
}();
/**
 * @member {Number} number
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['number'] = undefined;

/**
 * @member {String} step
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['step'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>} ingredients
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['ingredients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>} equipment
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['equipment'] = undefined;
var _default = AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
exports["default"] = _default;