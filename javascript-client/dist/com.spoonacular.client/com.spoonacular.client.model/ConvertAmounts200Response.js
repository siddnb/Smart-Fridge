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
 * The ConvertAmounts200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ConvertAmounts200Response
 * @version 1.1
 */
var ConvertAmounts200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConvertAmounts200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ConvertAmounts200Response
   * @param sourceAmount {Number} 
   * @param sourceUnit {String} 
   * @param targetAmount {Number} 
   * @param targetUnit {String} 
   * @param answer {String} 
   */
  function ConvertAmounts200Response(sourceAmount, sourceUnit, targetAmount, targetUnit, answer) {
    _classCallCheck(this, ConvertAmounts200Response);
    ConvertAmounts200Response.initialize(this, sourceAmount, sourceUnit, targetAmount, targetUnit, answer);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConvertAmounts200Response, null, [{
    key: "initialize",
    value: function initialize(obj, sourceAmount, sourceUnit, targetAmount, targetUnit, answer) {
      obj['sourceAmount'] = sourceAmount;
      obj['sourceUnit'] = sourceUnit;
      obj['targetAmount'] = targetAmount;
      obj['targetUnit'] = targetUnit;
      obj['answer'] = answer;
    }

    /**
     * Constructs a <code>ConvertAmounts200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ConvertAmounts200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ConvertAmounts200Response} The populated <code>ConvertAmounts200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConvertAmounts200Response();
        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], 'Number');
        }
        if (data.hasOwnProperty('sourceUnit')) {
          obj['sourceUnit'] = _ApiClient["default"].convertToType(data['sourceUnit'], 'String');
        }
        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient["default"].convertToType(data['targetAmount'], 'Number');
        }
        if (data.hasOwnProperty('targetUnit')) {
          obj['targetUnit'] = _ApiClient["default"].convertToType(data['targetUnit'], 'String');
        }
        if (data.hasOwnProperty('answer')) {
          obj['answer'] = _ApiClient["default"].convertToType(data['answer'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ConvertAmounts200Response;
}();
/**
 * @member {Number} sourceAmount
 */
ConvertAmounts200Response.prototype['sourceAmount'] = undefined;

/**
 * @member {String} sourceUnit
 */
ConvertAmounts200Response.prototype['sourceUnit'] = undefined;

/**
 * @member {Number} targetAmount
 */
ConvertAmounts200Response.prototype['targetAmount'] = undefined;

/**
 * @member {String} targetUnit
 */
ConvertAmounts200Response.prototype['targetUnit'] = undefined;

/**
 * @member {String} answer
 */
ConvertAmounts200Response.prototype['answer'] = undefined;
var _default = ConvertAmounts200Response;
exports["default"] = _default;