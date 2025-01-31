"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ParseIngredients200ResponseInnerEstimatedCost = _interopRequireDefault(require("./ParseIngredients200ResponseInnerEstimatedCost"));
var _ParseIngredients200ResponseInnerNutrition = _interopRequireDefault(require("./ParseIngredients200ResponseInnerNutrition"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ParseIngredients200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInner
 * @version 1.1
 */
var ParseIngredients200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParseIngredients200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInner
   * @param id {Number} 
   * @param original {String} 
   * @param originalName {String} 
   * @param name {String} 
   * @param nameClean {String} 
   * @param amount {Number} 
   * @param unit {String} 
   * @param unitShort {String} 
   * @param unitLong {String} 
   * @param possibleUnits {Array.<String>} 
   * @param estimatedCost {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerEstimatedCost} 
   * @param consistency {String} 
   * @param aisle {String} 
   * @param image {String} 
   * @param meta {Array.<String>} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition} 
   */
  function ParseIngredients200ResponseInner(id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, aisle, image, meta, nutrition) {
    _classCallCheck(this, ParseIngredients200ResponseInner);
    ParseIngredients200ResponseInner.initialize(this, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, aisle, image, meta, nutrition);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ParseIngredients200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, aisle, image, meta, nutrition) {
      obj['id'] = id;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['name'] = name;
      obj['nameClean'] = nameClean;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['unitShort'] = unitShort;
      obj['unitLong'] = unitLong;
      obj['possibleUnits'] = possibleUnits;
      obj['estimatedCost'] = estimatedCost;
      obj['consistency'] = consistency;
      obj['aisle'] = aisle;
      obj['image'] = image;
      obj['meta'] = meta;
      obj['nutrition'] = nutrition;
    }

    /**
     * Constructs a <code>ParseIngredients200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInner} The populated <code>ParseIngredients200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParseIngredients200ResponseInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient["default"].convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('nameClean')) {
          obj['nameClean'] = _ApiClient["default"].convertToType(data['nameClean'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('unitShort')) {
          obj['unitShort'] = _ApiClient["default"].convertToType(data['unitShort'], 'String');
        }
        if (data.hasOwnProperty('unitLong')) {
          obj['unitLong'] = _ApiClient["default"].convertToType(data['unitLong'], 'String');
        }
        if (data.hasOwnProperty('possibleUnits')) {
          obj['possibleUnits'] = _ApiClient["default"].convertToType(data['possibleUnits'], ['String']);
        }
        if (data.hasOwnProperty('estimatedCost')) {
          obj['estimatedCost'] = _ParseIngredients200ResponseInnerEstimatedCost["default"].constructFromObject(data['estimatedCost']);
        }
        if (data.hasOwnProperty('consistency')) {
          obj['consistency'] = _ApiClient["default"].convertToType(data['consistency'], 'String');
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _ParseIngredients200ResponseInnerNutrition["default"].constructFromObject(data['nutrition']);
        }
      }
      return obj;
    }
  }]);
  return ParseIngredients200ResponseInner;
}();
/**
 * @member {Number} id
 */
ParseIngredients200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} original
 */
ParseIngredients200ResponseInner.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
ParseIngredients200ResponseInner.prototype['originalName'] = undefined;

/**
 * @member {String} name
 */
ParseIngredients200ResponseInner.prototype['name'] = undefined;

/**
 * @member {String} nameClean
 */
ParseIngredients200ResponseInner.prototype['nameClean'] = undefined;

/**
 * @member {Number} amount
 */
ParseIngredients200ResponseInner.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
ParseIngredients200ResponseInner.prototype['unit'] = undefined;

/**
 * @member {String} unitShort
 */
ParseIngredients200ResponseInner.prototype['unitShort'] = undefined;

/**
 * @member {String} unitLong
 */
ParseIngredients200ResponseInner.prototype['unitLong'] = undefined;

/**
 * @member {Array.<String>} possibleUnits
 */
ParseIngredients200ResponseInner.prototype['possibleUnits'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerEstimatedCost} estimatedCost
 */
ParseIngredients200ResponseInner.prototype['estimatedCost'] = undefined;

/**
 * @member {String} consistency
 */
ParseIngredients200ResponseInner.prototype['consistency'] = undefined;

/**
 * @member {String} aisle
 */
ParseIngredients200ResponseInner.prototype['aisle'] = undefined;

/**
 * @member {String} image
 */
ParseIngredients200ResponseInner.prototype['image'] = undefined;

/**
 * @member {Array.<String>} meta
 */
ParseIngredients200ResponseInner.prototype['meta'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerNutrition} nutrition
 */
ParseIngredients200ResponseInner.prototype['nutrition'] = undefined;
var _default = ParseIngredients200ResponseInner;
exports["default"] = _default;