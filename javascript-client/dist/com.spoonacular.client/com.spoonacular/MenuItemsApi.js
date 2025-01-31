"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutocompleteMenuItemSearch200Response = _interopRequireDefault(require("../com.spoonacular.client.model/AutocompleteMenuItemSearch200Response"));
var _GetMenuItemInformation200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetMenuItemInformation200Response"));
var _SearchMenuItems200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchMenuItems200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* MenuItems service.
* @module com.spoonacular.client/com.spoonacular/MenuItemsApi
* @version 1.1
*/
var MenuItemsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MenuItemsApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MenuItemsApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MenuItemsApi(apiClient) {
    _classCallCheck(this, MenuItemsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the autocompleteMenuItemSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteMenuItemSearch200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autocomplete Menu Item Search
   * Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteMenuItemSearch200Response}
   */
  _createClass(MenuItemsApi, [{
    key: "autocompleteMenuItemSearch",
    value: function autocompleteMenuItemSearch(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling autocompleteMenuItemSearch");
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
      var returnType = _AutocompleteMenuItemSearch200Response["default"];
      return this.apiClient.callApi('/food/menuItems/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMenuItemInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Menu Item Information
     * Use a menu item id to get all available information about a menu item, such as nutrition.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetMenuItemInformation200Response}
     */
  }, {
    key: "getMenuItemInformation",
    value: function getMenuItemInformation(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMenuItemInformation");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetMenuItemInformation200Response["default"];
      return this.apiClient.callApi('/food/menuItems/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition by ID Image
     * Visualize a menu item's nutritional information as HTML including CSS.
     * @param {Number} id The menu item id.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "menuItemNutritionByIDImage",
    value: function menuItemNutritionByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionByIDImage");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionLabelImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition Label Image
     * Visualize a menu item's nutritional label information as an image.
     * @param {Number} id The menu item id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "menuItemNutritionLabelImage",
    value: function menuItemNutritionLabelImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionLabelImage");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'showOptionalNutrients': opts['showOptionalNutrients'],
        'showZeroValues': opts['showZeroValues'],
        'showIngredients': opts['showIngredients']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionLabel.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionLabelWidget operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition Label Widget
     * Visualize a menu item's nutritional label information as HTML including CSS.
     * @param {Number} id The menu item id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
  }, {
    key: "menuItemNutritionLabelWidget",
    value: function menuItemNutritionLabelWidget(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionLabelWidget");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss'],
        'showOptionalNutrients': opts['showOptionalNutrients'],
        'showZeroValues': opts['showZeroValues'],
        'showIngredients': opts['showIngredients']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionLabel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchMenuItems operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Menu Items
     * Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.minCalories The minimum amount of calories the menu item must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the menu item can have.
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the menu item must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the menu item can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the menu item must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the menu item can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the menu item must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the menu item can have.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addMenuItemInformation If set to true, you get more information about the menu items returned.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchMenuItems200Response}
     */
  }, {
    key: "searchMenuItems",
    value: function searchMenuItems(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'minCalories': opts['minCalories'],
        'maxCalories': opts['maxCalories'],
        'minCarbs': opts['minCarbs'],
        'maxCarbs': opts['maxCarbs'],
        'minProtein': opts['minProtein'],
        'maxProtein': opts['maxProtein'],
        'minFat': opts['minFat'],
        'maxFat': opts['maxFat'],
        'addMenuItemInformation': opts['addMenuItemInformation'],
        'offset': opts['offset'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchMenuItems200Response["default"];
      return this.apiClient.callApi('/food/menuItems/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeMenuItemNutritionByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition by ID Widget
     * Visualize a menu item's nutritional information as HTML including CSS.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
  }, {
    key: "visualizeMenuItemNutritionByID",
    value: function visualizeMenuItemNutritionByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeMenuItemNutritionByID");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss']
      };
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return MenuItemsApi;
}();
exports["default"] = MenuItemsApi;