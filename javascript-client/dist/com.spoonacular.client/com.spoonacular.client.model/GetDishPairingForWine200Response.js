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
 * The GetDishPairingForWine200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response
 * @version 1.1
 */
var GetDishPairingForWine200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetDishPairingForWine200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response
   * @param pairings {Array.<String>} 
   * @param text {String} 
   */
  function GetDishPairingForWine200Response(pairings, text) {
    _classCallCheck(this, GetDishPairingForWine200Response);
    GetDishPairingForWine200Response.initialize(this, pairings, text);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetDishPairingForWine200Response, null, [{
    key: "initialize",
    value: function initialize(obj, pairings, text) {
      obj['pairings'] = pairings;
      obj['text'] = text;
    }

    /**
     * Constructs a <code>GetDishPairingForWine200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response} The populated <code>GetDishPairingForWine200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDishPairingForWine200Response();
        if (data.hasOwnProperty('pairings')) {
          obj['pairings'] = _ApiClient["default"].convertToType(data['pairings'], ['String']);
        }
        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetDishPairingForWine200Response;
}();
/**
 * @member {Array.<String>} pairings
 */
GetDishPairingForWine200Response.prototype['pairings'] = undefined;

/**
 * @member {String} text
 */
GetDishPairingForWine200Response.prototype['text'] = undefined;
var _default = GetDishPairingForWine200Response;
exports["default"] = _default;