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
 * The GetProductInformation200ResponseIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner
 * @version 1.1
 */
var GetProductInformation200ResponseIngredientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetProductInformation200ResponseIngredientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner
   * @param name {String} 
   */
  function GetProductInformation200ResponseIngredientsInner(name) {
    _classCallCheck(this, GetProductInformation200ResponseIngredientsInner);
    GetProductInformation200ResponseIngredientsInner.initialize(this, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetProductInformation200ResponseIngredientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }

    /**
     * Constructs a <code>GetProductInformation200ResponseIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200ResponseIngredientsInner} The populated <code>GetProductInformation200ResponseIngredientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetProductInformation200ResponseIngredientsInner();
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], Object);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('safety_level')) {
          obj['safety_level'] = _ApiClient["default"].convertToType(data['safety_level'], Object);
        }
      }
      return obj;
    }
  }]);
  return GetProductInformation200ResponseIngredientsInner;
}();
/**
 * @member {Object} description
 */
GetProductInformation200ResponseIngredientsInner.prototype['description'] = undefined;

/**
 * @member {String} name
 */
GetProductInformation200ResponseIngredientsInner.prototype['name'] = undefined;

/**
 * @member {Object} safety_level
 */
GetProductInformation200ResponseIngredientsInner.prototype['safety_level'] = undefined;
var _default = GetProductInformation200ResponseIngredientsInner;
exports["default"] = _default;