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
 * The DeleteFromMealPlanRequest model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest
 * @version 1.1
 */
var DeleteFromMealPlanRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteFromMealPlanRequest</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest
   * @param username {String} The username.
   * @param id {Number} The shopping list item id.
   * @param hash {String} The private hash for the username.
   */
  function DeleteFromMealPlanRequest(username, id, hash) {
    _classCallCheck(this, DeleteFromMealPlanRequest);
    DeleteFromMealPlanRequest.initialize(this, username, id, hash);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DeleteFromMealPlanRequest, null, [{
    key: "initialize",
    value: function initialize(obj, username, id, hash) {
      obj['username'] = username;
      obj['id'] = id;
      obj['hash'] = hash;
    }

    /**
     * Constructs a <code>DeleteFromMealPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest} The populated <code>DeleteFromMealPlanRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFromMealPlanRequest();
        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DeleteFromMealPlanRequest;
}();
/**
 * The username.
 * @member {String} username
 */
DeleteFromMealPlanRequest.prototype['username'] = undefined;

/**
 * The shopping list item id.
 * @member {Number} id
 */
DeleteFromMealPlanRequest.prototype['id'] = undefined;

/**
 * The private hash for the username.
 * @member {String} hash
 */
DeleteFromMealPlanRequest.prototype['hash'] = undefined;
var _default = DeleteFromMealPlanRequest;
exports["default"] = _default;