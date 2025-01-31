"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent = _interopRequireDefault(require("./ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ImageAnalysisByURL200ResponseNutritionCalories model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories
 * @version 1.1
 */
var ImageAnalysisByURL200ResponseNutritionCalories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageAnalysisByURL200ResponseNutritionCalories</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories
   * @param value {Number} 
   * @param unit {String} 
   * @param confidenceRange95Percent {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent} 
   * @param standardDeviation {Number} 
   */
  function ImageAnalysisByURL200ResponseNutritionCalories(value, unit, confidenceRange95Percent, standardDeviation) {
    _classCallCheck(this, ImageAnalysisByURL200ResponseNutritionCalories);
    ImageAnalysisByURL200ResponseNutritionCalories.initialize(this, value, unit, confidenceRange95Percent, standardDeviation);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ImageAnalysisByURL200ResponseNutritionCalories, null, [{
    key: "initialize",
    value: function initialize(obj, value, unit, confidenceRange95Percent, standardDeviation) {
      obj['value'] = value;
      obj['unit'] = unit;
      obj['confidenceRange95Percent'] = confidenceRange95Percent;
      obj['standardDeviation'] = standardDeviation;
    }

    /**
     * Constructs a <code>ImageAnalysisByURL200ResponseNutritionCalories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} The populated <code>ImageAnalysisByURL200ResponseNutritionCalories</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageAnalysisByURL200ResponseNutritionCalories();
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('confidenceRange95Percent')) {
          obj['confidenceRange95Percent'] = _ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent["default"].constructFromObject(data['confidenceRange95Percent']);
        }
        if (data.hasOwnProperty('standardDeviation')) {
          obj['standardDeviation'] = _ApiClient["default"].convertToType(data['standardDeviation'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ImageAnalysisByURL200ResponseNutritionCalories;
}();
/**
 * @member {Number} value
 */
ImageAnalysisByURL200ResponseNutritionCalories.prototype['value'] = undefined;

/**
 * @member {String} unit
 */
ImageAnalysisByURL200ResponseNutritionCalories.prototype['unit'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent} confidenceRange95Percent
 */
ImageAnalysisByURL200ResponseNutritionCalories.prototype['confidenceRange95Percent'] = undefined;

/**
 * @member {Number} standardDeviation
 */
ImageAnalysisByURL200ResponseNutritionCalories.prototype['standardDeviation'] = undefined;
var _default = ImageAnalysisByURL200ResponseNutritionCalories;
exports["default"] = _default;