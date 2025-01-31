"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetConversationSuggests200ResponseSuggests = _interopRequireDefault(require("./GetConversationSuggests200ResponseSuggests"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetConversationSuggests200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response
 * @version 1.1
 */
var GetConversationSuggests200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetConversationSuggests200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response
   * @param suggests {module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200ResponseSuggests} 
   * @param words {Array.<Object>} 
   */
  function GetConversationSuggests200Response(suggests, words) {
    _classCallCheck(this, GetConversationSuggests200Response);
    GetConversationSuggests200Response.initialize(this, suggests, words);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetConversationSuggests200Response, null, [{
    key: "initialize",
    value: function initialize(obj, suggests, words) {
      obj['suggests'] = suggests;
      obj['words'] = words;
    }

    /**
     * Constructs a <code>GetConversationSuggests200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response} The populated <code>GetConversationSuggests200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetConversationSuggests200Response();
        if (data.hasOwnProperty('suggests')) {
          obj['suggests'] = _GetConversationSuggests200ResponseSuggests["default"].constructFromObject(data['suggests']);
        }
        if (data.hasOwnProperty('words')) {
          obj['words'] = _ApiClient["default"].convertToType(data['words'], [Object]);
        }
      }
      return obj;
    }
  }]);
  return GetConversationSuggests200Response;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200ResponseSuggests} suggests
 */
GetConversationSuggests200Response.prototype['suggests'] = undefined;

/**
 * @member {Array.<Object>} words
 */
GetConversationSuggests200Response.prototype['words'] = undefined;
var _default = GetConversationSuggests200Response;
exports["default"] = _default;