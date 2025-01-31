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
 * The SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner
 * @version 1.1
 */
var SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner
   * @param aisle {String} 
   * @param amount {Number} 
   * @param id {Number} 
   * @param image {String} 
   * @param name {String} 
   * @param original {String} 
   * @param originalName {String} 
   * @param unit {String} 
   * @param unitLong {String} 
   * @param unitShort {String} 
   */
  function SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner(aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort) {
    _classCallCheck(this, SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner);
    SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.initialize(this, aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort) {
      obj['aisle'] = aisle;
      obj['amount'] = amount;
      obj['id'] = id;
      obj['image'] = image;
      obj['name'] = name;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['unit'] = unit;
      obj['unitLong'] = unitLong;
      obj['unitShort'] = unitShort;
    }

    /**
     * Constructs a <code>SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner} The populated <code>SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner();
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient["default"].convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('unitLong')) {
          obj['unitLong'] = _ApiClient["default"].convertToType(data['unitLong'], 'String');
        }
        if (data.hasOwnProperty('unitShort')) {
          obj['unitShort'] = _ApiClient["default"].convertToType(data['unitShort'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner;
}();
/**
 * @member {String} aisle
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['aisle'] = undefined;

/**
 * @member {Number} amount
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['amount'] = undefined;

/**
 * @member {Number} id
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['image'] = undefined;

/**
 * @member {Array.<String>} meta
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['meta'] = undefined;

/**
 * @member {String} name
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['name'] = undefined;

/**
 * @member {String} original
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['originalName'] = undefined;

/**
 * @member {String} unit
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['unit'] = undefined;

/**
 * @member {String} unitLong
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['unitLong'] = undefined;

/**
 * @member {String} unitShort
 */
SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.prototype['unitShort'] = undefined;
var _default = SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner;
exports["default"] = _default;