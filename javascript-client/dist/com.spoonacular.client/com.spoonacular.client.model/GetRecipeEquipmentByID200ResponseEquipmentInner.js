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
 * The GetRecipeEquipmentByID200ResponseEquipmentInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeEquipmentByID200ResponseEquipmentInner
 * @version 1.1
 */
var GetRecipeEquipmentByID200ResponseEquipmentInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeEquipmentByID200ResponseEquipmentInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeEquipmentByID200ResponseEquipmentInner
   * @param image {String} 
   * @param name {String} 
   */
  function GetRecipeEquipmentByID200ResponseEquipmentInner(image, name) {
    _classCallCheck(this, GetRecipeEquipmentByID200ResponseEquipmentInner);
    GetRecipeEquipmentByID200ResponseEquipmentInner.initialize(this, image, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeEquipmentByID200ResponseEquipmentInner, null, [{
    key: "initialize",
    value: function initialize(obj, image, name) {
      obj['image'] = image;
      obj['name'] = name;
    }

    /**
     * Constructs a <code>GetRecipeEquipmentByID200ResponseEquipmentInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeEquipmentByID200ResponseEquipmentInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeEquipmentByID200ResponseEquipmentInner} The populated <code>GetRecipeEquipmentByID200ResponseEquipmentInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeEquipmentByID200ResponseEquipmentInner();
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetRecipeEquipmentByID200ResponseEquipmentInner;
}();
/**
 * @member {String} image
 */
GetRecipeEquipmentByID200ResponseEquipmentInner.prototype['image'] = undefined;

/**
 * @member {String} name
 */
GetRecipeEquipmentByID200ResponseEquipmentInner.prototype['name'] = undefined;
var _default = GetRecipeEquipmentByID200ResponseEquipmentInner;
exports["default"] = _default;