"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutocompleteProductSearch200Response = _interopRequireDefault(require("../com.spoonacular.client.model/AutocompleteProductSearch200Response"));
var _ClassifyGroceryProduct200Response = _interopRequireDefault(require("../com.spoonacular.client.model/ClassifyGroceryProduct200Response"));
var _ClassifyGroceryProductBulk200ResponseInner = _interopRequireDefault(require("../com.spoonacular.client.model/ClassifyGroceryProductBulk200ResponseInner"));
var _ClassifyGroceryProductBulkRequestInner = _interopRequireDefault(require("../com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner"));
var _ClassifyGroceryProductRequest = _interopRequireDefault(require("../com.spoonacular.client.model/ClassifyGroceryProductRequest"));
var _GetComparableProducts200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetComparableProducts200Response"));
var _GetProductInformation200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetProductInformation200Response"));
var _SearchGroceryProducts200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchGroceryProducts200Response"));
var _SearchGroceryProductsByUPC200Response = _interopRequireDefault(require("../com.spoonacular.client.model/SearchGroceryProductsByUPC200Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Products service.
* @module com.spoonacular.client/com.spoonacular/ProductsApi
* @version 1.1
*/
var ProductsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProductsApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/ProductsApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function ProductsApi(apiClient) {
    _classCallCheck(this, ProductsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the autocompleteProductSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteProductSearch200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autocomplete Product Search
   * Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteProductSearch200Response}
   */
  _createClass(ProductsApi, [{
    key: "autocompleteProductSearch",
    value: function autocompleteProductSearch(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling autocompleteProductSearch");
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
      var returnType = _AutocompleteProductSearch200Response["default"];
      return this.apiClient.callApi('/food/products/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the classifyGroceryProduct operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Grocery Product
     * This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductRequest} classifyGroceryProductRequest 
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response}
     */
  }, {
    key: "classifyGroceryProduct",
    value: function classifyGroceryProduct(classifyGroceryProductRequest, opts, callback) {
      opts = opts || {};
      var postBody = classifyGroceryProductRequest;
      // verify the required parameter 'classifyGroceryProductRequest' is set
      if (classifyGroceryProductRequest === undefined || classifyGroceryProductRequest === null) {
        throw new Error("Missing the required parameter 'classifyGroceryProductRequest' when calling classifyGroceryProduct");
      }
      var pathParams = {};
      var queryParams = {
        'locale': opts['locale']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ClassifyGroceryProduct200Response["default"];
      return this.apiClient.callApi('/food/products/classify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the classifyGroceryProductBulk operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulk200ResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Grocery Product Bulk
     * Provide a set of product jsons, get back classified products.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulkRequestInner>} classifyGroceryProductBulkRequestInner 
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProductBulk200ResponseInner>}
     */
  }, {
    key: "classifyGroceryProductBulk",
    value: function classifyGroceryProductBulk(classifyGroceryProductBulkRequestInner, opts, callback) {
      opts = opts || {};
      var postBody = classifyGroceryProductBulkRequestInner;
      // verify the required parameter 'classifyGroceryProductBulkRequestInner' is set
      if (classifyGroceryProductBulkRequestInner === undefined || classifyGroceryProductBulkRequestInner === null) {
        throw new Error("Missing the required parameter 'classifyGroceryProductBulkRequestInner' when calling classifyGroceryProductBulk");
      }
      var pathParams = {};
      var queryParams = {
        'locale': opts['locale']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_ClassifyGroceryProductBulk200ResponseInner["default"]];
      return this.apiClient.callApi('/food/products/classifyBatch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getComparableProducts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Comparable Products
     * Find comparable products to the given one.
     * @param {Number} upc The UPC of the product for which you want to find comparable products.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetComparableProducts200Response}
     */
  }, {
    key: "getComparableProducts",
    value: function getComparableProducts(upc, callback) {
      var postBody = null;
      // verify the required parameter 'upc' is set
      if (upc === undefined || upc === null) {
        throw new Error("Missing the required parameter 'upc' when calling getComparableProducts");
      }
      var pathParams = {
        'upc': upc
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetComparableProducts200Response["default"];
      return this.apiClient.callApi('/food/products/upc/{upc}/comparable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getProductInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Information
     * Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetProductInformation200Response}
     */
  }, {
    key: "getProductInformation",
    value: function getProductInformation(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductInformation");
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
      var returnType = _GetProductInformation200Response["default"];
      return this.apiClient.callApi('/food/products/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition by ID Image
     * Visualize a product's nutritional information as an image.
     * @param {Number} id The id of the product.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "productNutritionByIDImage",
    value: function productNutritionByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionByIDImage");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionLabelImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition Label Image
     * Get a product's nutrition label as an image.
     * @param {Number} id The product id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "productNutritionLabelImage",
    value: function productNutritionLabelImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionLabelImage");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionLabel.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionLabelWidget operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition Label Widget
     * Get a product's nutrition label as an HTML widget.
     * @param {Number} id The product id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
  }, {
    key: "productNutritionLabelWidget",
    value: function productNutritionLabelWidget(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionLabelWidget");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionLabel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchGroceryProducts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Grocery Products
     * Search packaged food products, such as frozen pizza or Greek yogurt.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.minCalories The minimum amount of calories the product must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the product can have.
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the product must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the product can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the product must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the product can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the product must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the product can have.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addProductInformation If set to true, you get more information about the products returned.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProducts200Response}
     */
  }, {
    key: "searchGroceryProducts",
    value: function searchGroceryProducts(opts, callback) {
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
        'addProductInformation': opts['addProductInformation'],
        'offset': opts['offset'],
        'number': opts['number']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchGroceryProducts200Response["default"];
      return this.apiClient.callApi('/food/products/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchGroceryProductsByUPC operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Grocery Products by UPC
     * Get information about a packaged food using its UPC.
     * @param {Number} upc The product's UPC.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/SearchGroceryProductsByUPC200Response}
     */
  }, {
    key: "searchGroceryProductsByUPC",
    value: function searchGroceryProductsByUPC(upc, callback) {
      var postBody = null;
      // verify the required parameter 'upc' is set
      if (upc === undefined || upc === null) {
        throw new Error("Missing the required parameter 'upc' when calling searchGroceryProductsByUPC");
      }
      var pathParams = {
        'upc': upc
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchGroceryProductsByUPC200Response["default"];
      return this.apiClient.callApi('/food/products/upc/{upc}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeProductNutritionByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition by ID Widget
     * Visualize a product's nutritional information as HTML including CSS.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
  }, {
    key: "visualizeProductNutritionByID",
    value: function visualizeProductNutritionByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeProductNutritionByID");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ProductsApi;
}();
exports["default"] = ProductsApi;