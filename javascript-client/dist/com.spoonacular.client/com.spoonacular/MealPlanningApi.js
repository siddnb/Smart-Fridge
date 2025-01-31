"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddMealPlanTemplate200Response = _interopRequireDefault(require("../com.spoonacular.client.model/AddMealPlanTemplate200Response"));
var _AddToMealPlanRequest = _interopRequireDefault(require("../com.spoonacular.client.model/AddToMealPlanRequest"));
var _AddToMealPlanRequest2 = _interopRequireDefault(require("../com.spoonacular.client.model/AddToMealPlanRequest1"));
var _AddToShoppingListRequest = _interopRequireDefault(require("../com.spoonacular.client.model/AddToShoppingListRequest"));
var _ClearMealPlanDayRequest = _interopRequireDefault(require("../com.spoonacular.client.model/ClearMealPlanDayRequest"));
var _ConnectUser200Response = _interopRequireDefault(require("../com.spoonacular.client.model/ConnectUser200Response"));
var _ConnectUserRequest = _interopRequireDefault(require("../com.spoonacular.client.model/ConnectUserRequest"));
var _DeleteFromMealPlanRequest = _interopRequireDefault(require("../com.spoonacular.client.model/DeleteFromMealPlanRequest"));
var _GenerateMealPlan200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GenerateMealPlan200Response"));
var _GenerateShoppingList200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GenerateShoppingList200Response"));
var _GenerateShoppingListRequest = _interopRequireDefault(require("../com.spoonacular.client.model/GenerateShoppingListRequest"));
var _GetMealPlanTemplate200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetMealPlanTemplate200Response"));
var _GetMealPlanTemplates200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetMealPlanTemplates200Response"));
var _GetMealPlanWeek200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetMealPlanWeek200Response"));
var _GetShoppingList200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetShoppingList200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* MealPlanning service.
* @module com.spoonacular.client/com.spoonacular/MealPlanningApi
* @version 1.1
*/
var MealPlanningApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MealPlanningApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MealPlanningApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MealPlanningApi(apiClient) {
    _classCallCheck(this, MealPlanningApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addMealPlanTemplate operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Meal Plan Template
   * Add a meal plan template for a user.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest} addToMealPlanRequest 
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/AddMealPlanTemplate200Response}
   */
  _createClass(MealPlanningApi, [{
    key: "addMealPlanTemplate",
    value: function addMealPlanTemplate(username, hash, addToMealPlanRequest, callback) {
      var postBody = addToMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addMealPlanTemplate");
      }
      // verify the required parameter 'addToMealPlanRequest' is set
      if (addToMealPlanRequest === undefined || addToMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'addToMealPlanRequest' when calling addMealPlanTemplate");
      }
      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = _AddMealPlanTemplate200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addToMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add to Meal Plan
     * Add an item to the user's meal plan.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest} addToMealPlanRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "addToMealPlan",
    value: function addToMealPlan(username, hash, addToMealPlanRequest, callback) {
      var postBody = addToMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addToMealPlan");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addToMealPlan");
      }
      // verify the required parameter 'addToMealPlanRequest' is set
      if (addToMealPlanRequest === undefined || addToMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'addToMealPlanRequest' when calling addToMealPlan");
      }
      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addToShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GenerateShoppingList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add to Shopping List
     * Add an item to the current shopping list of a user.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/AddToMealPlanRequest} addToMealPlanRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GenerateShoppingList200Response}
     */
  }, {
    key: "addToShoppingList",
    value: function addToShoppingList(username, hash, addToMealPlanRequest, callback) {
      var postBody = addToMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addToShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addToShoppingList");
      }
      // verify the required parameter 'addToMealPlanRequest' is set
      if (addToMealPlanRequest === undefined || addToMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'addToMealPlanRequest' when calling addToShoppingList");
      }
      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = _GenerateShoppingList200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the clearMealPlanDay operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear Meal Plan Day
     * Delete all planned items from the user's meal plan for a specific day.
     * @param {String} username The username.
     * @param {String} date The date in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClearMealPlanDayRequest} clearMealPlanDayRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "clearMealPlanDay",
    value: function clearMealPlanDay(username, date, hash, clearMealPlanDayRequest, callback) {
      var postBody = clearMealPlanDayRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling clearMealPlanDay");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling clearMealPlanDay");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling clearMealPlanDay");
      }
      // verify the required parameter 'clearMealPlanDayRequest' is set
      if (clearMealPlanDayRequest === undefined || clearMealPlanDayRequest === null) {
        throw new Error("Missing the required parameter 'clearMealPlanDayRequest' when calling clearMealPlanDay");
      }
      var pathParams = {
        'username': username,
        'date': date
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/day/{date}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the connectUser operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ConnectUser200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Connect User
     * In order to call user-specific endpoints, you need to connect your app's users to spoonacular users.
     * @param {Object.<String, Object>} body 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/ConnectUser200Response}
     */
  }, {
    key: "connectUser",
    value: function connectUser(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling connectUser");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = _ConnectUser200Response["default"];
      return this.apiClient.callApi('/users/connect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFromMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete from Meal Plan
     * Delete an item from the user's meal plan.
     * @param {String} username The username.
     * @param {Number} id The shopping list item id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest} deleteFromMealPlanRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "deleteFromMealPlan",
    value: function deleteFromMealPlan(username, id, hash, deleteFromMealPlanRequest, callback) {
      var postBody = deleteFromMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'deleteFromMealPlanRequest' is set
      if (deleteFromMealPlanRequest === undefined || deleteFromMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'deleteFromMealPlanRequest' when calling deleteFromMealPlan");
      }
      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/items/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFromShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete from Shopping List
     * Delete an item from the current shopping list of the user.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest} deleteFromMealPlanRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "deleteFromShoppingList",
    value: function deleteFromShoppingList(username, id, hash, deleteFromMealPlanRequest, callback) {
      var postBody = deleteFromMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'deleteFromMealPlanRequest' is set
      if (deleteFromMealPlanRequest === undefined || deleteFromMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'deleteFromMealPlanRequest' when calling deleteFromShoppingList");
      }
      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/items/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteMealPlanTemplate operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Meal Plan Template
     * Delete a meal plan template for a user.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/DeleteFromMealPlanRequest} deleteFromMealPlanRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "deleteMealPlanTemplate",
    value: function deleteMealPlanTemplate(username, id, hash, deleteFromMealPlanRequest, callback) {
      var postBody = deleteFromMealPlanRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'deleteFromMealPlanRequest' is set
      if (deleteFromMealPlanRequest === undefined || deleteFromMealPlanRequest === null) {
        throw new Error("Missing the required parameter 'deleteFromMealPlanRequest' when calling deleteMealPlanTemplate");
      }
      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/templates/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the generateMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Meal Plan
     * Generate a meal plan with three meals per day (breakfast, lunch, and dinner).
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeFrame Either for one \"day\" or an entire \"week\".
     * @param {Number} opts.targetCalories What is the caloric target for one day? The meal plan generator will try to get as close as possible to that goal.
     * @param {String} opts.diet Enter a diet that the meal plan has to adhere to. See a full list of supported diets.
     * @param {String} opts.exclude A comma-separated list of allergens or ingredients that must be excluded.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GenerateMealPlan200Response}
     */
  }, {
    key: "generateMealPlan",
    value: function generateMealPlan(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'timeFrame': opts['timeFrame'],
        'targetCalories': opts['targetCalories'],
        'diet': opts['diet'],
        'exclude': opts['exclude']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GenerateMealPlan200Response["default"];
      return this.apiClient.callApi('/mealplanner/generate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the generateShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GenerateShoppingList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Shopping List
     * Generate the shopping list for a user from the meal planner in a given time frame.
     * @param {String} username The username.
     * @param {String} startDate The start date in the format yyyy-mm-dd.
     * @param {String} endDate The end date in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GenerateShoppingListRequest} generateShoppingListRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GenerateShoppingList200Response}
     */
  }, {
    key: "generateShoppingList",
    value: function generateShoppingList(username, startDate, endDate, hash, generateShoppingListRequest, callback) {
      var postBody = generateShoppingListRequest;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling generateShoppingList");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling generateShoppingList");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling generateShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling generateShoppingList");
      }
      // verify the required parameter 'generateShoppingListRequest' is set
      if (generateShoppingListRequest === undefined || generateShoppingListRequest === null) {
        throw new Error("Missing the required parameter 'generateShoppingListRequest' when calling generateShoppingList");
      }
      var pathParams = {
        'username': username,
        'start-date': startDate,
        'end-date': endDate
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = _GenerateShoppingList200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/{start-date}/{end-date}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanTemplate operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Template
     * Get information about a meal plan template.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplate200Response}
     */
  }, {
    key: "getMealPlanTemplate",
    value: function getMealPlanTemplate(username, id, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanTemplate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanTemplate");
      }
      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMealPlanTemplate200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/templates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanTemplates operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplates200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Templates
     * Get meal plan templates from user or public ones.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanTemplates200Response}
     */
  }, {
    key: "getMealPlanTemplates",
    value: function getMealPlanTemplates(username, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanTemplates");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanTemplates");
      }
      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMealPlanTemplates200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanWeek operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Week
     * Retrieve a meal planned week for the given user. The username must be a spoonacular user and the hash must the the user's hash that can be found in his/her account.
     * @param {String} username The username.
     * @param {String} startDate The start date of the meal planned week in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetMealPlanWeek200Response}
     */
  }, {
    key: "getMealPlanWeek",
    value: function getMealPlanWeek(username, startDate, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanWeek");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getMealPlanWeek");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanWeek");
      }
      var pathParams = {
        'username': username,
        'start-date': startDate
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMealPlanWeek200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/week/{start-date}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Shopping List
     * Get the current shopping list for the given user.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetShoppingList200Response}
     */
  }, {
    key: "getShoppingList",
    value: function getShoppingList(username, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getShoppingList");
      }
      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetShoppingList200Response["default"];
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return MealPlanningApi;
}();
exports["default"] = MealPlanningApi;