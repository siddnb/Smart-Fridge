"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipeInformation200ResponseExtendedIngredientsInner = _interopRequireDefault(require("./GetRecipeInformation200ResponseExtendedIngredientsInner"));
var _GetRecipeInformation200ResponseWinePairing = _interopRequireDefault(require("./GetRecipeInformation200ResponseWinePairing"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRandomRecipes200ResponseRecipesInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRandomRecipes200ResponseRecipesInner
 * @version 1.1
 */
var GetRandomRecipes200ResponseRecipesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRandomRecipes200ResponseRecipesInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRandomRecipes200ResponseRecipesInner
   * @param id {Number} 
   * @param title {String} 
   * @param image {String} 
   * @param imageType {String} 
   * @param servings {Number} 
   * @param readyInMinutes {Number} 
   * @param license {String} 
   * @param sourceName {String} 
   * @param sourceUrl {String} 
   * @param spoonacularSourceUrl {String} 
   * @param aggregateLikes {Number} 
   * @param healthScore {Number} 
   * @param spoonacularScore {Number} 
   * @param pricePerServing {Number} 
   * @param cheap {Boolean} 
   * @param creditsText {String} 
   * @param dairyFree {Boolean} 
   * @param gaps {String} 
   * @param glutenFree {Boolean} 
   * @param instructions {String} 
   * @param ketogenic {Boolean} 
   * @param lowFodmap {Boolean} 
   * @param sustainable {Boolean} 
   * @param vegan {Boolean} 
   * @param vegetarian {Boolean} 
   * @param veryHealthy {Boolean} 
   * @param veryPopular {Boolean} 
   * @param whole30 {Boolean} 
   * @param weightWatcherSmartPoints {Number} 
   * @param summary {String} 
   */
  function GetRandomRecipes200ResponseRecipesInner(id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary) {
    _classCallCheck(this, GetRandomRecipes200ResponseRecipesInner);
    GetRandomRecipes200ResponseRecipesInner.initialize(this, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRandomRecipes200ResponseRecipesInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary) {
      obj['id'] = id;
      obj['title'] = title;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['servings'] = servings;
      obj['readyInMinutes'] = readyInMinutes;
      obj['license'] = license;
      obj['sourceName'] = sourceName;
      obj['sourceUrl'] = sourceUrl;
      obj['spoonacularSourceUrl'] = spoonacularSourceUrl;
      obj['aggregateLikes'] = aggregateLikes;
      obj['healthScore'] = healthScore;
      obj['spoonacularScore'] = spoonacularScore;
      obj['pricePerServing'] = pricePerServing;
      obj['cheap'] = cheap;
      obj['creditsText'] = creditsText;
      obj['dairyFree'] = dairyFree;
      obj['gaps'] = gaps;
      obj['glutenFree'] = glutenFree;
      obj['instructions'] = instructions;
      obj['ketogenic'] = ketogenic;
      obj['lowFodmap'] = lowFodmap;
      obj['sustainable'] = sustainable;
      obj['vegan'] = vegan;
      obj['vegetarian'] = vegetarian;
      obj['veryHealthy'] = veryHealthy;
      obj['veryPopular'] = veryPopular;
      obj['whole30'] = whole30;
      obj['weightWatcherSmartPoints'] = weightWatcherSmartPoints;
      obj['summary'] = summary;
    }

    /**
     * Constructs a <code>GetRandomRecipes200ResponseRecipesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRandomRecipes200ResponseRecipesInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRandomRecipes200ResponseRecipesInner} The populated <code>GetRandomRecipes200ResponseRecipesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRandomRecipes200ResponseRecipesInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('readyInMinutes')) {
          obj['readyInMinutes'] = _ApiClient["default"].convertToType(data['readyInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('license')) {
          obj['license'] = _ApiClient["default"].convertToType(data['license'], 'String');
        }
        if (data.hasOwnProperty('sourceName')) {
          obj['sourceName'] = _ApiClient["default"].convertToType(data['sourceName'], 'String');
        }
        if (data.hasOwnProperty('sourceUrl')) {
          obj['sourceUrl'] = _ApiClient["default"].convertToType(data['sourceUrl'], 'String');
        }
        if (data.hasOwnProperty('spoonacularSourceUrl')) {
          obj['spoonacularSourceUrl'] = _ApiClient["default"].convertToType(data['spoonacularSourceUrl'], 'String');
        }
        if (data.hasOwnProperty('aggregateLikes')) {
          obj['aggregateLikes'] = _ApiClient["default"].convertToType(data['aggregateLikes'], 'Number');
        }
        if (data.hasOwnProperty('healthScore')) {
          obj['healthScore'] = _ApiClient["default"].convertToType(data['healthScore'], 'Number');
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient["default"].convertToType(data['spoonacularScore'], 'Number');
        }
        if (data.hasOwnProperty('pricePerServing')) {
          obj['pricePerServing'] = _ApiClient["default"].convertToType(data['pricePerServing'], 'Number');
        }
        if (data.hasOwnProperty('analyzedInstructions')) {
          obj['analyzedInstructions'] = _ApiClient["default"].convertToType(data['analyzedInstructions'], [Object]);
        }
        if (data.hasOwnProperty('cheap')) {
          obj['cheap'] = _ApiClient["default"].convertToType(data['cheap'], 'Boolean');
        }
        if (data.hasOwnProperty('creditsText')) {
          obj['creditsText'] = _ApiClient["default"].convertToType(data['creditsText'], 'String');
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient["default"].convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('dairyFree')) {
          obj['dairyFree'] = _ApiClient["default"].convertToType(data['dairyFree'], 'Boolean');
        }
        if (data.hasOwnProperty('diets')) {
          obj['diets'] = _ApiClient["default"].convertToType(data['diets'], ['String']);
        }
        if (data.hasOwnProperty('gaps')) {
          obj['gaps'] = _ApiClient["default"].convertToType(data['gaps'], 'String');
        }
        if (data.hasOwnProperty('glutenFree')) {
          obj['glutenFree'] = _ApiClient["default"].convertToType(data['glutenFree'], 'Boolean');
        }
        if (data.hasOwnProperty('instructions')) {
          obj['instructions'] = _ApiClient["default"].convertToType(data['instructions'], 'String');
        }
        if (data.hasOwnProperty('ketogenic')) {
          obj['ketogenic'] = _ApiClient["default"].convertToType(data['ketogenic'], 'Boolean');
        }
        if (data.hasOwnProperty('lowFodmap')) {
          obj['lowFodmap'] = _ApiClient["default"].convertToType(data['lowFodmap'], 'Boolean');
        }
        if (data.hasOwnProperty('occasions')) {
          obj['occasions'] = _ApiClient["default"].convertToType(data['occasions'], ['String']);
        }
        if (data.hasOwnProperty('sustainable')) {
          obj['sustainable'] = _ApiClient["default"].convertToType(data['sustainable'], 'Boolean');
        }
        if (data.hasOwnProperty('vegan')) {
          obj['vegan'] = _ApiClient["default"].convertToType(data['vegan'], 'Boolean');
        }
        if (data.hasOwnProperty('vegetarian')) {
          obj['vegetarian'] = _ApiClient["default"].convertToType(data['vegetarian'], 'Boolean');
        }
        if (data.hasOwnProperty('veryHealthy')) {
          obj['veryHealthy'] = _ApiClient["default"].convertToType(data['veryHealthy'], 'Boolean');
        }
        if (data.hasOwnProperty('veryPopular')) {
          obj['veryPopular'] = _ApiClient["default"].convertToType(data['veryPopular'], 'Boolean');
        }
        if (data.hasOwnProperty('whole30')) {
          obj['whole30'] = _ApiClient["default"].convertToType(data['whole30'], 'Boolean');
        }
        if (data.hasOwnProperty('weightWatcherSmartPoints')) {
          obj['weightWatcherSmartPoints'] = _ApiClient["default"].convertToType(data['weightWatcherSmartPoints'], 'Number');
        }
        if (data.hasOwnProperty('dishTypes')) {
          obj['dishTypes'] = _ApiClient["default"].convertToType(data['dishTypes'], ['String']);
        }
        if (data.hasOwnProperty('extendedIngredients')) {
          obj['extendedIngredients'] = _ApiClient["default"].convertToType(data['extendedIngredients'], [_GetRecipeInformation200ResponseExtendedIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }
        if (data.hasOwnProperty('winePairing')) {
          obj['winePairing'] = _GetRecipeInformation200ResponseWinePairing["default"].constructFromObject(data['winePairing']);
        }
      }
      return obj;
    }
  }]);
  return GetRandomRecipes200ResponseRecipesInner;
}();
/**
 * @member {Number} id
 */
GetRandomRecipes200ResponseRecipesInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetRandomRecipes200ResponseRecipesInner.prototype['title'] = undefined;

/**
 * @member {String} image
 */
GetRandomRecipes200ResponseRecipesInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
GetRandomRecipes200ResponseRecipesInner.prototype['imageType'] = undefined;

/**
 * @member {Number} servings
 */
GetRandomRecipes200ResponseRecipesInner.prototype['servings'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetRandomRecipes200ResponseRecipesInner.prototype['readyInMinutes'] = undefined;

/**
 * @member {String} license
 */
GetRandomRecipes200ResponseRecipesInner.prototype['license'] = undefined;

/**
 * @member {String} sourceName
 */
GetRandomRecipes200ResponseRecipesInner.prototype['sourceName'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetRandomRecipes200ResponseRecipesInner.prototype['sourceUrl'] = undefined;

/**
 * @member {String} spoonacularSourceUrl
 */
GetRandomRecipes200ResponseRecipesInner.prototype['spoonacularSourceUrl'] = undefined;

/**
 * @member {Number} aggregateLikes
 */
GetRandomRecipes200ResponseRecipesInner.prototype['aggregateLikes'] = undefined;

/**
 * @member {Number} healthScore
 */
GetRandomRecipes200ResponseRecipesInner.prototype['healthScore'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetRandomRecipes200ResponseRecipesInner.prototype['spoonacularScore'] = undefined;

/**
 * @member {Number} pricePerServing
 */
GetRandomRecipes200ResponseRecipesInner.prototype['pricePerServing'] = undefined;

/**
 * @member {Array.<Object>} analyzedInstructions
 */
GetRandomRecipes200ResponseRecipesInner.prototype['analyzedInstructions'] = undefined;

/**
 * @member {Boolean} cheap
 */
GetRandomRecipes200ResponseRecipesInner.prototype['cheap'] = undefined;

/**
 * @member {String} creditsText
 */
GetRandomRecipes200ResponseRecipesInner.prototype['creditsText'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
GetRandomRecipes200ResponseRecipesInner.prototype['cuisines'] = undefined;

/**
 * @member {Boolean} dairyFree
 */
GetRandomRecipes200ResponseRecipesInner.prototype['dairyFree'] = undefined;

/**
 * @member {Array.<String>} diets
 */
GetRandomRecipes200ResponseRecipesInner.prototype['diets'] = undefined;

/**
 * @member {String} gaps
 */
GetRandomRecipes200ResponseRecipesInner.prototype['gaps'] = undefined;

/**
 * @member {Boolean} glutenFree
 */
GetRandomRecipes200ResponseRecipesInner.prototype['glutenFree'] = undefined;

/**
 * @member {String} instructions
 */
GetRandomRecipes200ResponseRecipesInner.prototype['instructions'] = undefined;

/**
 * @member {Boolean} ketogenic
 */
GetRandomRecipes200ResponseRecipesInner.prototype['ketogenic'] = undefined;

/**
 * @member {Boolean} lowFodmap
 */
GetRandomRecipes200ResponseRecipesInner.prototype['lowFodmap'] = undefined;

/**
 * @member {Array.<String>} occasions
 */
GetRandomRecipes200ResponseRecipesInner.prototype['occasions'] = undefined;

/**
 * @member {Boolean} sustainable
 */
GetRandomRecipes200ResponseRecipesInner.prototype['sustainable'] = undefined;

/**
 * @member {Boolean} vegan
 */
GetRandomRecipes200ResponseRecipesInner.prototype['vegan'] = undefined;

/**
 * @member {Boolean} vegetarian
 */
GetRandomRecipes200ResponseRecipesInner.prototype['vegetarian'] = undefined;

/**
 * @member {Boolean} veryHealthy
 */
GetRandomRecipes200ResponseRecipesInner.prototype['veryHealthy'] = undefined;

/**
 * @member {Boolean} veryPopular
 */
GetRandomRecipes200ResponseRecipesInner.prototype['veryPopular'] = undefined;

/**
 * @member {Boolean} whole30
 */
GetRandomRecipes200ResponseRecipesInner.prototype['whole30'] = undefined;

/**
 * @member {Number} weightWatcherSmartPoints
 */
GetRandomRecipes200ResponseRecipesInner.prototype['weightWatcherSmartPoints'] = undefined;

/**
 * @member {Array.<String>} dishTypes
 */
GetRandomRecipes200ResponseRecipesInner.prototype['dishTypes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner>} extendedIngredients
 */
GetRandomRecipes200ResponseRecipesInner.prototype['extendedIngredients'] = undefined;

/**
 * @member {String} summary
 */
GetRandomRecipes200ResponseRecipesInner.prototype['summary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} winePairing
 */
GetRandomRecipes200ResponseRecipesInner.prototype['winePairing'] = undefined;
var _default = GetRandomRecipes200ResponseRecipesInner;
exports["default"] = _default;