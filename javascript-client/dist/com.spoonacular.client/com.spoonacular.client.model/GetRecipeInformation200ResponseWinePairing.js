"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipeInformation200ResponseWinePairingProductMatchesInner = _interopRequireDefault(require("./GetRecipeInformation200ResponseWinePairingProductMatchesInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipeInformation200ResponseWinePairing model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing
 * @version 1.1
 */
var GetRecipeInformation200ResponseWinePairing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeInformation200ResponseWinePairing</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing
   * @param pairedWines {Array.<String>} 
   * @param pairingText {String} 
   * @param productMatches {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner>} 
   */
  function GetRecipeInformation200ResponseWinePairing(pairedWines, pairingText, productMatches) {
    _classCallCheck(this, GetRecipeInformation200ResponseWinePairing);
    GetRecipeInformation200ResponseWinePairing.initialize(this, pairedWines, pairingText, productMatches);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeInformation200ResponseWinePairing, null, [{
    key: "initialize",
    value: function initialize(obj, pairedWines, pairingText, productMatches) {
      obj['pairedWines'] = pairedWines;
      obj['pairingText'] = pairingText;
      obj['productMatches'] = productMatches;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseWinePairing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} The populated <code>GetRecipeInformation200ResponseWinePairing</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeInformation200ResponseWinePairing();
        if (data.hasOwnProperty('pairedWines')) {
          obj['pairedWines'] = _ApiClient["default"].convertToType(data['pairedWines'], ['String']);
        }
        if (data.hasOwnProperty('pairingText')) {
          obj['pairingText'] = _ApiClient["default"].convertToType(data['pairingText'], 'String');
        }
        if (data.hasOwnProperty('productMatches')) {
          obj['productMatches'] = _ApiClient["default"].convertToType(data['productMatches'], [_GetRecipeInformation200ResponseWinePairingProductMatchesInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetRecipeInformation200ResponseWinePairing;
}();
/**
 * @member {Array.<String>} pairedWines
 */
GetRecipeInformation200ResponseWinePairing.prototype['pairedWines'] = undefined;

/**
 * @member {String} pairingText
 */
GetRecipeInformation200ResponseWinePairing.prototype['pairingText'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairingProductMatchesInner>} productMatches
 */
GetRecipeInformation200ResponseWinePairing.prototype['productMatches'] = undefined;
var _default = GetRecipeInformation200ResponseWinePairing;
exports["default"] = _default;