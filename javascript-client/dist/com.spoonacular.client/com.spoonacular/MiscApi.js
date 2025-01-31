"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DetectFoodInText200Response = _interopRequireDefault(require("../com.spoonacular.client.model/DetectFoodInText200Response"));
var _GetARandomFoodJoke200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetARandomFoodJoke200Response"));
var _GetConversationSuggests200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetConversationSuggests200Response"));
var _GetRandomFoodTrivia200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetRandomFoodTrivia200Response"));
var _ImageAnalysisByURL200Response = _interopRequireDefault(require("../com.spoonacular.client.model/ImageAnalysisByURL200Response"));
var _ImageClassificationByURL200Response = _interopRequireDefault(require("../com.spoonacular.client.model/ImageClassificationByURL200Response"));
var _SearchAllFood200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchAllFood200Response"));
var _SearchCustomFoods200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchCustomFoods200Response"));
var _SearchFoodVideos200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchFoodVideos200Response"));
var _SearchSiteContent200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchSiteContent200Response"));
var _TalkToChatbot200Response = _interopRequireDefault(require("../com.spoonacular.client.model/TalkToChatbot200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Misc service.
* @module com.spoonacular.client/com.spoonacular/MiscApi
* @version 1.1
*/
var MiscApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MiscApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MiscApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MiscApi(apiClient) {
    _classCallCheck(this, MiscApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the detectFoodInText operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Detect Food in Text
   * Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.
   * @param {Object} opts Optional parameters
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/DetectFoodInText200Response}
   */
  _createClass(MiscApi, [{
    key: "detectFoodInText",
    value: function detectFoodInText(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DetectFoodInText200Response["default"];
      return this.apiClient.callApi('/food/detect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getARandomFoodJoke operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetARandomFoodJoke200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Food Joke
     * Get a random joke that is related to food. Caution: this is an endpoint for adults!
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetARandomFoodJoke200Response}
     */
  }, {
    key: "getARandomFoodJoke",
    value: function getARandomFoodJoke(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetARandomFoodJoke200Response["default"];
      return this.apiClient.callApi('/food/jokes/random', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationSuggests operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Conversation Suggests
     * This endpoint returns suggestions for things the user can say or ask the chatbot.
     * @param {String} query A (partial) query from the user. The endpoint will return if it matches topics it can talk about.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.number The number of suggestions to return (between 1 and 25).
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetConversationSuggests200Response}
     */
  }, {
    key: "getConversationSuggests",
    value: function getConversationSuggests(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getConversationSuggests");
      }
      var pathParams = {};
      var queryParams = {
        'query': query,
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetConversationSuggests200Response["default"];
      return this.apiClient.callApi('/food/converse/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRandomFoodTrivia operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRandomFoodTrivia200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Food Trivia
     * Returns random food trivia.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetRandomFoodTrivia200Response}
     */
  }, {
    key: "getRandomFoodTrivia",
    value: function getRandomFoodTrivia(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetRandomFoodTrivia200Response["default"];
      return this.apiClient.callApi('/food/trivia/random', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the imageAnalysisByURL operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Image Analysis by URL
     * Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.
     * @param {String} imageUrl The URL of the image to be analyzed.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200Response}
     */
  }, {
    key: "imageAnalysisByURL",
    value: function imageAnalysisByURL(imageUrl, callback) {
      var postBody = null;
      // verify the required parameter 'imageUrl' is set
      if (imageUrl === undefined || imageUrl === null) {
        throw new Error("Missing the required parameter 'imageUrl' when calling imageAnalysisByURL");
      }
      var pathParams = {};
      var queryParams = {
        'imageUrl': imageUrl
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ImageAnalysisByURL200Response["default"];
      return this.apiClient.callApi('/food/images/analyze', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the imageClassificationByURL operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ImageClassificationByURL200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Image Classification by URL
     * Classify a food image.
     * @param {String} imageUrl The URL of the image to be classified.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/ImageClassificationByURL200Response}
     */
  }, {
    key: "imageClassificationByURL",
    value: function imageClassificationByURL(imageUrl, callback) {
      var postBody = null;
      // verify the required parameter 'imageUrl' is set
      if (imageUrl === undefined || imageUrl === null) {
        throw new Error("Missing the required parameter 'imageUrl' when calling imageClassificationByURL");
      }
      var pathParams = {};
      var queryParams = {
        'imageUrl': imageUrl
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ImageClassificationByURL200Response["default"];
      return this.apiClient.callApi('/food/images/classify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchAllFood operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search All Food
     * Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.
     * @param {String} query The search query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchAllFood200Response}
     */
  }, {
    key: "searchAllFood",
    value: function searchAllFood(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchAllFood");
      }
      var pathParams = {};
      var queryParams = {
        'query': query,
        'offset': opts['offset'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchAllFood200Response["default"];
      return this.apiClient.callApi('/food/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchCustomFoods operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Custom Foods
     * Search custom foods in a user's account.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200Response}
     */
  }, {
    key: "searchCustomFoods",
    value: function searchCustomFoods(username, hash, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling searchCustomFoods");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling searchCustomFoods");
      }
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'username': username,
        'hash': hash,
        'offset': opts['offset'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchCustomFoods200Response["default"];
      return this.apiClient.callApi('/food/customFoods/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchFoodVideos operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Food Videos
     * Find recipe and other food related videos.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {String} opts.type The type of the recipes. See a full list of supported meal types.
     * @param {String} opts.cuisine The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines.
     * @param {String} opts.diet The diet for which the recipes must be suitable. See a full list of supported diets.
     * @param {String} opts.includeIngredients A comma-separated list of ingredients that the recipes should contain.
     * @param {String} opts.excludeIngredients A comma-separated list of ingredients or ingredient types that the recipes must not contain.
     * @param {Number} opts.minLength Minimum video length in seconds.
     * @param {Number} opts.maxLength Maximum video length in seconds.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchFoodVideos200Response}
     */
  }, {
    key: "searchFoodVideos",
    value: function searchFoodVideos(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'type': opts['type'],
        'cuisine': opts['cuisine'],
        'diet': opts['diet'],
        'includeIngredients': opts['includeIngredients'],
        'excludeIngredients': opts['excludeIngredients'],
        'minLength': opts['minLength'],
        'maxLength': opts['maxLength'],
        'offset': opts['offset'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchFoodVideos200Response["default"];
      return this.apiClient.callApi('/food/videos/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchSiteContent operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Site Content
     * Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.
     * @param {String} query The query to search for. You can also use partial queries such as \"spagh\" to already find spaghetti recipes, articles, grocery products, and other content.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchSiteContent200Response}
     */
  }, {
    key: "searchSiteContent",
    value: function searchSiteContent(query, callback) {
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchSiteContent");
      }
      var pathParams = {};
      var queryParams = {
        'query': query
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchSiteContent200Response["default"];
      return this.apiClient.callApi('/food/site/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the talkToChatbot operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Talk to Chatbot
     * This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the \"Get Conversation Suggests\" endpoint to show your user what he or she can say.
     * @param {String} text The request / question / answer from the user to the chatbot.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contextId An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/TalkToChatbot200Response}
     */
  }, {
    key: "talkToChatbot",
    value: function talkToChatbot(text, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling talkToChatbot");
      }
      var pathParams = {};
      var queryParams = {
        'text': text,
        'contextId': opts['contextId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TalkToChatbot200Response["default"];
      return this.apiClient.callApi('/food/converse', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return MiscApi;
}();
exports["default"] = MiscApi;