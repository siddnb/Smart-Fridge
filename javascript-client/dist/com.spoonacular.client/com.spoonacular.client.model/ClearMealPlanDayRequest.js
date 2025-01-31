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
 * The ClearMealPlanDayRequest model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ClearMealPlanDayRequest
 * @version 1.1
 */
var ClearMealPlanDayRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClearMealPlanDayRequest</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ClearMealPlanDayRequest
   * @param username {String} The username.
   * @param date {String} The date in the format yyyy-mm-dd.
   * @param hash {String} The private hash for the username.
   */
  function ClearMealPlanDayRequest(username, date, hash) {
    _classCallCheck(this, ClearMealPlanDayRequest);
    ClearMealPlanDayRequest.initialize(this, username, date, hash);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ClearMealPlanDayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, username, date, hash) {
      obj['username'] = username;
      obj['date'] = date;
      obj['hash'] = hash;
    }

    /**
     * Constructs a <code>ClearMealPlanDayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClearMealPlanDayRequest} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ClearMealPlanDayRequest} The populated <code>ClearMealPlanDayRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClearMealPlanDayRequest();
        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ClearMealPlanDayRequest;
}();
/**
 * The username.
 * @member {String} username
 */
ClearMealPlanDayRequest.prototype['username'] = undefined;

/**
 * The date in the format yyyy-mm-dd.
 * @member {String} date
 */
ClearMealPlanDayRequest.prototype['date'] = undefined;

/**
 * The private hash for the username.
 * @member {String} hash
 */
ClearMealPlanDayRequest.prototype['hash'] = undefined;
var _default = ClearMealPlanDayRequest;
exports["default"] = _default;