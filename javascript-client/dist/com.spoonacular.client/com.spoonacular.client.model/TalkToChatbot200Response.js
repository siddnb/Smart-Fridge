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
 * The TalkToChatbot200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response
 * @version 1.1
 */
var TalkToChatbot200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TalkToChatbot200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response
   * @param answerText {String} 
   * @param media {Array.<Object>} 
   */
  function TalkToChatbot200Response(answerText, media) {
    _classCallCheck(this, TalkToChatbot200Response);
    TalkToChatbot200Response.initialize(this, answerText, media);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TalkToChatbot200Response, null, [{
    key: "initialize",
    value: function initialize(obj, answerText, media) {
      obj['answerText'] = answerText;
      obj['media'] = media;
    }

    /**
     * Constructs a <code>TalkToChatbot200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response} The populated <code>TalkToChatbot200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TalkToChatbot200Response();
        if (data.hasOwnProperty('answerText')) {
          obj['answerText'] = _ApiClient["default"].convertToType(data['answerText'], 'String');
        }
        if (data.hasOwnProperty('media')) {
          obj['media'] = _ApiClient["default"].convertToType(data['media'], [Object]);
        }
      }
      return obj;
    }
  }]);
  return TalkToChatbot200Response;
}();
/**
 * @member {String} answerText
 */
TalkToChatbot200Response.prototype['answerText'] = undefined;

/**
 * @member {Array.<Object>} media
 */
TalkToChatbot200Response.prototype['media'] = undefined;
var _default = TalkToChatbot200Response;
exports["default"] = _default;