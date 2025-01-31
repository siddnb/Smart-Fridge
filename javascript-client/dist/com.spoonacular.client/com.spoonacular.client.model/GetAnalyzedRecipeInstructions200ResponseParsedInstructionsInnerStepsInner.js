"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner = _interopRequireDefault(require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner
 * @version 1.1
 */
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner
   * @param number {Number} 
   * @param step {String} 
   */
  function GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner(number, step) {
    _classCallCheck(this, GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner);
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.initialize(this, number, step);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner, null, [{
    key: "initialize",
    value: function initialize(obj, number, step) {
      obj['number'] = number;
      obj['step'] = step;
    }

    /**
     * Constructs a <code>GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner} The populated <code>GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner();
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('step')) {
          obj['step'] = _ApiClient["default"].convertToType(data['step'], 'String');
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient["default"].convertToType(data['ingredients'], [_GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('equipment')) {
          obj['equipment'] = _ApiClient["default"].convertToType(data['equipment'], [_GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
}();
/**
 * @member {Number} number
 */
GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['number'] = undefined;

/**
 * @member {String} step
 */
GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['step'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>} ingredients
 */
GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['ingredients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>} equipment
 */
GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.prototype['equipment'] = undefined;
var _default = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
exports["default"] = _default;