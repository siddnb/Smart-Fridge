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
 * The GetRecipeTasteByID200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeTasteByID200Response
 * @version 1.1
 */
var GetRecipeTasteByID200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeTasteByID200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeTasteByID200Response
   * @param sweetness {Number} 
   * @param saltiness {Number} 
   * @param sourness {Number} 
   * @param bitterness {Number} 
   * @param savoriness {Number} 
   * @param fattiness {Number} 
   * @param spiciness {Number} 
   */
  function GetRecipeTasteByID200Response(sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness) {
    _classCallCheck(this, GetRecipeTasteByID200Response);
    GetRecipeTasteByID200Response.initialize(this, sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeTasteByID200Response, null, [{
    key: "initialize",
    value: function initialize(obj, sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness) {
      obj['sweetness'] = sweetness;
      obj['saltiness'] = saltiness;
      obj['sourness'] = sourness;
      obj['bitterness'] = bitterness;
      obj['savoriness'] = savoriness;
      obj['fattiness'] = fattiness;
      obj['spiciness'] = spiciness;
    }

    /**
     * Constructs a <code>GetRecipeTasteByID200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeTasteByID200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeTasteByID200Response} The populated <code>GetRecipeTasteByID200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeTasteByID200Response();
        if (data.hasOwnProperty('sweetness')) {
          obj['sweetness'] = _ApiClient["default"].convertToType(data['sweetness'], 'Number');
        }
        if (data.hasOwnProperty('saltiness')) {
          obj['saltiness'] = _ApiClient["default"].convertToType(data['saltiness'], 'Number');
        }
        if (data.hasOwnProperty('sourness')) {
          obj['sourness'] = _ApiClient["default"].convertToType(data['sourness'], 'Number');
        }
        if (data.hasOwnProperty('bitterness')) {
          obj['bitterness'] = _ApiClient["default"].convertToType(data['bitterness'], 'Number');
        }
        if (data.hasOwnProperty('savoriness')) {
          obj['savoriness'] = _ApiClient["default"].convertToType(data['savoriness'], 'Number');
        }
        if (data.hasOwnProperty('fattiness')) {
          obj['fattiness'] = _ApiClient["default"].convertToType(data['fattiness'], 'Number');
        }
        if (data.hasOwnProperty('spiciness')) {
          obj['spiciness'] = _ApiClient["default"].convertToType(data['spiciness'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetRecipeTasteByID200Response;
}();
/**
 * @member {Number} sweetness
 */
GetRecipeTasteByID200Response.prototype['sweetness'] = undefined;

/**
 * @member {Number} saltiness
 */
GetRecipeTasteByID200Response.prototype['saltiness'] = undefined;

/**
 * @member {Number} sourness
 */
GetRecipeTasteByID200Response.prototype['sourness'] = undefined;

/**
 * @member {Number} bitterness
 */
GetRecipeTasteByID200Response.prototype['bitterness'] = undefined;

/**
 * @member {Number} savoriness
 */
GetRecipeTasteByID200Response.prototype['savoriness'] = undefined;

/**
 * @member {Number} fattiness
 */
GetRecipeTasteByID200Response.prototype['fattiness'] = undefined;

/**
 * @member {Number} spiciness
 */
GetRecipeTasteByID200Response.prototype['spiciness'] = undefined;
var _default = GetRecipeTasteByID200Response;
exports["default"] = _default;