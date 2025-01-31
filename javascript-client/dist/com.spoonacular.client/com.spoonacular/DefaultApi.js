"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AnalyzeRecipeRequest = _interopRequireDefault(require("../com.spoonacular.client.model/AnalyzeRecipeRequest"));
var _AnalyzeRecipeRequest2 = _interopRequireDefault(require("../com.spoonacular.client.model/AnalyzeRecipeRequest1"));
var _SearchRestaurants200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchRestaurants200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Default service.
* @module com.spoonacular.client/com.spoonacular/DefaultApi
* @version 1.1
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/DefaultApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the analyzeRecipe operation.
   * @callback module:com.spoonacular.client/com.spoonacular/DefaultApi~analyzeRecipeCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Analyze Recipe
   * This endpoint allows you to send raw recipe information, such as title, servings, and ingredients, to then see what we compute (badges, diets, nutrition, and more). This is useful if you have your own recipe data and want to enrich it with our semantic analysis.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/AnalyzeRecipeRequest} analyzeRecipeRequest Example request body.
   * @param {Object} opts Optional parameters
   * @param {String} opts.language The input language, either \"en\" or \"de\".
   * @param {Boolean} opts.includeNutrition Whether nutrition data should be added to correctly parsed ingredients.
   * @param {Boolean} opts.includeTaste Whether taste data should be added to correctly parsed ingredients.
   * @param {module:com.spoonacular.client/com.spoonacular/DefaultApi~analyzeRecipeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  _createClass(DefaultApi, [{
    key: "analyzeRecipe",
    value: function analyzeRecipe(analyzeRecipeRequest, opts, callback) {
      opts = opts || {};
      var postBody = analyzeRecipeRequest;
      // verify the required parameter 'analyzeRecipeRequest' is set
      if (analyzeRecipeRequest === undefined || analyzeRecipeRequest === null) {
        throw new Error("Missing the required parameter 'analyzeRecipeRequest' when calling analyzeRecipe");
      }
      var pathParams = {};
      var queryParams = {
        'language': opts['language'],
        'includeNutrition': opts['includeNutrition'],
        'includeTaste': opts['includeTaste']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/analyze', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createRecipeCardGet operation.
     * @callback module:com.spoonacular.client/com.spoonacular/DefaultApi~createRecipeCardGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Recipe Card
     * Generate a recipe card for a recipe.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.mask The mask to put over the recipe image (\"ellipseMask\", \"diamondMask\", \"starMask\", \"heartMask\", \"potMask\", \"fishMask\").
     * @param {String} opts.backgroundImage The background image (\"none\",\"background1\", or \"background2\").
     * @param {String} opts.backgroundColor The background color for the recipe card as a hex-string.
     * @param {String} opts.fontColor The font color for the recipe card as a hex-string.
     * @param {module:com.spoonacular.client/com.spoonacular/DefaultApi~createRecipeCardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "createRecipeCardGet",
    value: function createRecipeCardGet(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createRecipeCardGet");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'mask': opts['mask'],
        'backgroundImage': opts['backgroundImage'],
        'backgroundColor': opts['backgroundColor'],
        'fontColor': opts['fontColor']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/card', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchRestaurants operation.
     * @callback module:com.spoonacular.client/com.spoonacular/DefaultApi~searchRestaurantsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Restaurants
     * Search through thousands of restaurants (in North America) by location, cuisine, budget, and more.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The search query.
     * @param {Number} opts.lat The latitude of the user's location.
     * @param {Number} opts.lng The longitude of the user's location.\".
     * @param {Number} opts.distance The distance around the location in miles.
     * @param {Number} opts.budget The user's budget for a meal in USD.
     * @param {String} opts.cuisine The cuisine of the restaurant.
     * @param {Number} opts.minRating The minimum rating of the restaurant between 0 and 5.
     * @param {Boolean} opts.isOpen Whether the restaurant must be open at the time of search.
     * @param {String} opts.sort How to sort the results, one of the following 'cheapest', 'fastest', 'rating', 'distance' or the default 'relevance'.
     * @param {Number} opts.page The page number of results.
     * @param {module:com.spoonacular.client/com.spoonacular/DefaultApi~searchRestaurantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200Response}
     */
  }, {
    key: "searchRestaurants",
    value: function searchRestaurants(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'lat': opts['lat'],
        'lng': opts['lng'],
        'distance': opts['distance'],
        'budget': opts['budget'],
        'cuisine': opts['cuisine'],
        'min-rating': opts['minRating'],
        'is-open': opts['isOpen'],
        'sort': opts['sort'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchRestaurants200Response["default"];
      return this.apiClient.callApi('/food/restaurants/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return DefaultApi;
}();
exports["default"] = DefaultApi;