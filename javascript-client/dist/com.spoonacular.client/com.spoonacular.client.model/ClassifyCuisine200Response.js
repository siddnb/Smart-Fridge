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
 * The ClassifyCuisine200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ClassifyCuisine200Response
 * @version 1.1
 */
var ClassifyCuisine200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClassifyCuisine200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ClassifyCuisine200Response
   * @param cuisine {String} 
   * @param cuisines {Array.<String>} 
   * @param confidence {Number} 
   */
  function ClassifyCuisine200Response(cuisine, cuisines, confidence) {
    _classCallCheck(this, ClassifyCuisine200Response);
    ClassifyCuisine200Response.initialize(this, cuisine, cuisines, confidence);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ClassifyCuisine200Response, null, [{
    key: "initialize",
    value: function initialize(obj, cuisine, cuisines, confidence) {
      obj['cuisine'] = cuisine;
      obj['cuisines'] = cuisines;
      obj['confidence'] = confidence;
    }

    /**
     * Constructs a <code>ClassifyCuisine200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyCuisine200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyCuisine200Response} The populated <code>ClassifyCuisine200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClassifyCuisine200Response();
        if (data.hasOwnProperty('cuisine')) {
          obj['cuisine'] = _ApiClient["default"].convertToType(data['cuisine'], 'String');
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient["default"].convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ClassifyCuisine200Response;
}();
/**
 * @member {String} cuisine
 */
ClassifyCuisine200Response.prototype['cuisine'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
ClassifyCuisine200Response.prototype['cuisines'] = undefined;

/**
 * @member {Number} confidence
 */
ClassifyCuisine200Response.prototype['confidence'] = undefined;
var _default = ClassifyCuisine200Response;
exports["default"] = _default;