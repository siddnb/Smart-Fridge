"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetIngredientInformation200ResponseNutrition = _interopRequireDefault(require("./GetIngredientInformation200ResponseNutrition"));
var _ParseIngredients200ResponseInnerEstimatedCost = _interopRequireDefault(require("./ParseIngredients200ResponseInnerEstimatedCost"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetIngredientInformation200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response
 * @version 1.1
 */
var GetIngredientInformation200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetIngredientInformation200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response
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
   * @param shoppingListUnits {Array.<String>} 
   * @param aisle {String} 
   * @param image {String} 
   * @param meta {Array.<Object>} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition} 
   * @param categoryPath {Array.<String>} 
   */
  function GetIngredientInformation200Response(id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) {
    _classCallCheck(this, GetIngredientInformation200Response);
    GetIngredientInformation200Response.initialize(this, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetIngredientInformation200Response, null, [{
    key: "initialize",
    value: function initialize(obj, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) {
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
      obj['shoppingListUnits'] = shoppingListUnits;
      obj['aisle'] = aisle;
      obj['image'] = image;
      obj['meta'] = meta;
      obj['nutrition'] = nutrition;
      obj['categoryPath'] = categoryPath;
    }

    /**
     * Constructs a <code>GetIngredientInformation200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response} The populated <code>GetIngredientInformation200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetIngredientInformation200Response();
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
        if (data.hasOwnProperty('shoppingListUnits')) {
          obj['shoppingListUnits'] = _ApiClient["default"].convertToType(data['shoppingListUnits'], ['String']);
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], [Object]);
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _GetIngredientInformation200ResponseNutrition["default"].constructFromObject(data['nutrition']);
        }
        if (data.hasOwnProperty('categoryPath')) {
          obj['categoryPath'] = _ApiClient["default"].convertToType(data['categoryPath'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return GetIngredientInformation200Response;
}();
/**
 * @member {Number} id
 */
GetIngredientInformation200Response.prototype['id'] = undefined;

/**
 * @member {String} original
 */
GetIngredientInformation200Response.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
GetIngredientInformation200Response.prototype['originalName'] = undefined;

/**
 * @member {String} name
 */
GetIngredientInformation200Response.prototype['name'] = undefined;

/**
 * @member {String} nameClean
 */
GetIngredientInformation200Response.prototype['nameClean'] = undefined;

/**
 * @member {Number} amount
 */
GetIngredientInformation200Response.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
GetIngredientInformation200Response.prototype['unit'] = undefined;

/**
 * @member {String} unitShort
 */
GetIngredientInformation200Response.prototype['unitShort'] = undefined;

/**
 * @member {String} unitLong
 */
GetIngredientInformation200Response.prototype['unitLong'] = undefined;

/**
 * @member {Array.<String>} possibleUnits
 */
GetIngredientInformation200Response.prototype['possibleUnits'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ParseIngredients200ResponseInnerEstimatedCost} estimatedCost
 */
GetIngredientInformation200Response.prototype['estimatedCost'] = undefined;

/**
 * @member {String} consistency
 */
GetIngredientInformation200Response.prototype['consistency'] = undefined;

/**
 * @member {Array.<String>} shoppingListUnits
 */
GetIngredientInformation200Response.prototype['shoppingListUnits'] = undefined;

/**
 * @member {String} aisle
 */
GetIngredientInformation200Response.prototype['aisle'] = undefined;

/**
 * @member {String} image
 */
GetIngredientInformation200Response.prototype['image'] = undefined;

/**
 * @member {Array.<Object>} meta
 */
GetIngredientInformation200Response.prototype['meta'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200ResponseNutrition} nutrition
 */
GetIngredientInformation200Response.prototype['nutrition'] = undefined;

/**
 * @member {Array.<String>} categoryPath
 */
GetIngredientInformation200Response.prototype['categoryPath'] = undefined;
var _default = GetIngredientInformation200Response;
exports["default"] = _default;