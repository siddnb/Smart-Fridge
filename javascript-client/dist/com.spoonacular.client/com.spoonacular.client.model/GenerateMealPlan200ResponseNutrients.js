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
 * The GenerateMealPlan200ResponseNutrients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200ResponseNutrients
 * @version 1.1
 */
var GenerateMealPlan200ResponseNutrients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateMealPlan200ResponseNutrients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200ResponseNutrients
   * @param calories {Number} 
   * @param carbohydrates {Number} 
   * @param fat {Number} 
   * @param protein {Number} 
   */
  function GenerateMealPlan200ResponseNutrients(calories, carbohydrates, fat, protein) {
    _classCallCheck(this, GenerateMealPlan200ResponseNutrients);
    GenerateMealPlan200ResponseNutrients.initialize(this, calories, carbohydrates, fat, protein);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GenerateMealPlan200ResponseNutrients, null, [{
    key: "initialize",
    value: function initialize(obj, calories, carbohydrates, fat, protein) {
      obj['calories'] = calories;
      obj['carbohydrates'] = carbohydrates;
      obj['fat'] = fat;
      obj['protein'] = protein;
    }

    /**
     * Constructs a <code>GenerateMealPlan200ResponseNutrients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200ResponseNutrients} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200ResponseNutrients} The populated <code>GenerateMealPlan200ResponseNutrients</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateMealPlan200ResponseNutrients();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient["default"].convertToType(data['calories'], 'Number');
        }
        if (data.hasOwnProperty('carbohydrates')) {
          obj['carbohydrates'] = _ApiClient["default"].convertToType(data['carbohydrates'], 'Number');
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _ApiClient["default"].convertToType(data['fat'], 'Number');
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient["default"].convertToType(data['protein'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GenerateMealPlan200ResponseNutrients;
}();
/**
 * @member {Number} calories
 */
GenerateMealPlan200ResponseNutrients.prototype['calories'] = undefined;

/**
 * @member {Number} carbohydrates
 */
GenerateMealPlan200ResponseNutrients.prototype['carbohydrates'] = undefined;

/**
 * @member {Number} fat
 */
GenerateMealPlan200ResponseNutrients.prototype['fat'] = undefined;

/**
 * @member {Number} protein
 */
GenerateMealPlan200ResponseNutrients.prototype['protein'] = undefined;
var _default = GenerateMealPlan200ResponseNutrients;
exports["default"] = _default;