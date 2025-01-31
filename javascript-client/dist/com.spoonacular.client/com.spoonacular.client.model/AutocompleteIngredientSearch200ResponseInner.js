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
 * The AutocompleteIngredientSearch200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner
 * @version 1.1
 */
var AutocompleteIngredientSearch200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutocompleteIngredientSearch200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner
   * @param name {String} 
   * @param image {String} 
   */
  function AutocompleteIngredientSearch200ResponseInner(name, image) {
    _classCallCheck(this, AutocompleteIngredientSearch200ResponseInner);
    AutocompleteIngredientSearch200ResponseInner.initialize(this, name, image);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AutocompleteIngredientSearch200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, name, image) {
      obj['name'] = name;
      obj['image'] = image;
    }

    /**
     * Constructs a <code>AutocompleteIngredientSearch200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner} The populated <code>AutocompleteIngredientSearch200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutocompleteIngredientSearch200ResponseInner();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('possibleUnits')) {
          obj['possibleUnits'] = _ApiClient["default"].convertToType(data['possibleUnits'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return AutocompleteIngredientSearch200ResponseInner;
}();
/**
 * @member {String} name
 */
AutocompleteIngredientSearch200ResponseInner.prototype['name'] = undefined;

/**
 * @member {String} image
 */
AutocompleteIngredientSearch200ResponseInner.prototype['image'] = undefined;

/**
 * @member {Number} id
 */
AutocompleteIngredientSearch200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} aisle
 */
AutocompleteIngredientSearch200ResponseInner.prototype['aisle'] = undefined;

/**
 * @member {Array.<String>} possibleUnits
 */
AutocompleteIngredientSearch200ResponseInner.prototype['possibleUnits'] = undefined;
var _default = AutocompleteIngredientSearch200ResponseInner;
exports["default"] = _default;