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
 * The ConnectUserRequest model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest
 * @version 1.1
 */
var ConnectUserRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConnectUserRequest</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest
   * @param username {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param email {String} 
   */
  function ConnectUserRequest(username, firstName, lastName, email) {
    _classCallCheck(this, ConnectUserRequest);
    ConnectUserRequest.initialize(this, username, firstName, lastName, email);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConnectUserRequest, null, [{
    key: "initialize",
    value: function initialize(obj, username, firstName, lastName, email) {
      obj['username'] = username;
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['email'] = email;
    }

    /**
     * Constructs a <code>ConnectUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ConnectUserRequest} The populated <code>ConnectUserRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConnectUserRequest();
        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }
        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ConnectUserRequest;
}();
/**
 * @member {String} username
 */
ConnectUserRequest.prototype['username'] = undefined;

/**
 * @member {String} firstName
 */
ConnectUserRequest.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
ConnectUserRequest.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
ConnectUserRequest.prototype['email'] = undefined;
var _default = ConnectUserRequest;
exports["default"] = _default;