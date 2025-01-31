"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetDishPairingForWine200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetDishPairingForWine200Response"));
var _GetWineDescription200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetWineDescription200Response"));
var _GetWinePairing200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetWinePairing200Response"));
var _GetWineRecommendation200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetWineRecommendation200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Wine service.
* @module com.spoonacular.client/com.spoonacular/WineApi
* @version 1.1
*/
var WineApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WineApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/WineApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function WineApi(apiClient) {
    _classCallCheck(this, WineApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getDishPairingForWine operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Dish Pairing for Wine
   * Find a dish that goes well with a given wine.
   * @param {String} wine The type of wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response}
   */
  _createClass(WineApi, [{
    key: "getDishPairingForWine",
    value: function getDishPairingForWine(wine, callback) {
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getDishPairingForWine");
      }
      var pathParams = {};
      var queryParams = {
        'wine': wine
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDishPairingForWine200Response["default"];
      return this.apiClient.callApi('/food/wine/dishes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWineDescription operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetWineDescription200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Description
     * Get a simple description of a certain wine, e.g. \"malbec\", \"riesling\", or \"merlot\".
     * @param {String} wine The name of the wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetWineDescription200Response}
     */
  }, {
    key: "getWineDescription",
    value: function getWineDescription(wine, callback) {
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getWineDescription");
      }
      var pathParams = {};
      var queryParams = {
        'wine': wine
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetWineDescription200Response["default"];
      return this.apiClient.callApi('/food/wine/description', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWinePairing operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Pairing
     * Find a wine that goes well with a food. Food can be a dish name (\"steak\"), an ingredient name (\"salmon\"), or a cuisine (\"italian\").
     * @param {String} food The food to get a pairing for. This can be a dish (\"steak\"), an ingredient (\"salmon\"), or a cuisine (\"italian\").
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetWinePairing200Response}
     */
  }, {
    key: "getWinePairing",
    value: function getWinePairing(food, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'food' is set
      if (food === undefined || food === null) {
        throw new Error("Missing the required parameter 'food' when calling getWinePairing");
      }
      var pathParams = {};
      var queryParams = {
        'food': food,
        'maxPrice': opts['maxPrice']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetWinePairing200Response["default"];
      return this.apiClient.callApi('/food/wine/pairing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWineRecommendation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetWineRecommendation200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Recommendation
     * Get a specific wine recommendation (concrete product) for a given wine type, e.g. \"merlot\".
     * @param {String} wine The type of wine to get a specific product recommendation for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
     * @param {Number} opts.minRating The minimum rating of the recommended wine between 0 and 1. For example, 0.8 equals 4 out of 5 stars.
     * @param {Number} opts.number The number of wine recommendations expected (between 1 and 100). (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetWineRecommendation200Response}
     */
  }, {
    key: "getWineRecommendation",
    value: function getWineRecommendation(wine, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getWineRecommendation");
      }
      var pathParams = {};
      var queryParams = {
        'wine': wine,
        'maxPrice': opts['maxPrice'],
        'minRating': opts['minRating'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetWineRecommendation200Response["default"];
      return this.apiClient.callApi('/food/wine/recommendation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return WineApi;
}();
exports["default"] = WineApi;