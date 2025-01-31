var defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "7d029bd5f6744733a8578d51893b56c5"

// Demo of spoonacular
let apiInstance = new SpoonacularApi.RecipesApi();
let opts = {
  'ingredients': "carrots,tomatoes", // String | A comma-separated list of ingredients that the recipes should contain.
  'number': 1, // Number | The maximum number of items to return (between 1 and 100). Defaults to 10.
  'limitLicense': true, // Boolean | Whether the recipes should have an open license that allows display with proper attribution.
  'ranking': 2, // Number | Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
  'ignorePantry': true // Boolean | Whether to ignore typical pantry items, such as water, salt, flour, etc.
};
apiInstance.searchRecipesByIngredients(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    let temp = JSON.stringify(data);
    console.log('API called successfully. Returned data: ' + temp);
  }
});

// let apiInstance = new SpoonacularApi.DefaultApi();
// let id = 645555; // Number | The recipe id.
// let opts = {
//   'mask': "ellipseMask", // String | The mask to put over the recipe image (\"ellipseMask\", \"diamondMask\", \"starMask\", \"heartMask\", \"potMask\", \"fishMask\").
//   'backgroundImage': "background1", // String | The background image (\"none\",\"background1\", or \"background2\").
//   'backgroundColor': "ffffff", // String | The background color for the recipe card as a hex-string.
//   'fontColor': "333333" // String | The font color for the recipe card as a hex-string.
// };
// apiInstance.createRecipeCardGet(id, opts, (error, data, response) => {
//   if (error) {
//     console.error(error);
//   } else {
//     let temp = JSON.stringify(data);
//     console.log('API called successfully. Returned data: ' + temp);
//   }
// });

