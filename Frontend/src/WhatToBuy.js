import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WhatToBuy.css';
import AddIngredientModal from './AddIngredientModal'
import IngredientModal from './IngredientModal'
import IngredientToBuy from './IngredientToBuy'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { GetIngredients, GetRecipesAndMissingIngredients, GetStoredRecipes } from './Service';

let currIngredient = { };
let currRecipe = {};

const WhatToBuy = () => {
  const [showIngredientToBuyModal, setShowIngredientToBuyModal] = useState(false);
  const [recipes, updateStoredRecipes] = useState();
  const [showIngredientModal, setShowIngredientModal] = useState(false);

  const [ingredients, updateStoredIngredients] = useState();

  useEffect(() => {
    const getData = async () => {
      const ingredientsResp = await GetRecipesAndMissingIngredients();
      updateStoredIngredients(ingredientsResp);
    }
    getData();
  }, []);

  // const handleIngredientClick = () => {
  //   setShowIngredientModal(true);
  // };

  const handleRecipeClick = () => {
    setShowIngredientToBuyModal(true);
  };
//   return recipes && (
//     <div className="WhatToBuy">
//       <div className="RecipesToBuy">
//         <div className="WTBRecipeList">
//           {recipes.map((recipe) => (
//             <div className="WTBRecipe" key={recipe.recipeName} onClick={() => {
//               currRecipe = {
//                 name: recipe.recipeName,
//                 image: recipe.recipeImage,
//                 ingredientList: recipe.ingredientList,
//                 instructions: recipe.instructions
//               };
//               handleRecipeClick();
//               console.log("recipe: ", recipe);
//             }}>
//               <div className="Name">{recipe.recipeName}</div> 
//               <img className="Image" src={recipe.recipeImage} alt={recipe.recipeName} />
//             </div>
//           ))}
//         </div>
//       </div>
//       {showIncompleteRecipeModal && <IncompleteRecipeModal onClose={() => setShowIncompleteRecipeModal(false)} recipe={currRecipe} />}


//     </div>
//   );

return ingredients && (
  <div className="WhatToBuy">
    <div className="RecipesToBuy">
      <div className="WTBRecipeList">
        {ingredients.map((ingredient) => (
          <div className="WTBRecipe" key={ingredient[0]} onClick={() => {
            console.log(ingredient);
            currRecipe = {
              name: ingredient[0],
              image: ingredient[1],
              quantity: ingredient[2],
              measurement: ingredient[3],
              recipeName: ingredient[4]
            };
             handleRecipeClick();
          }}>
            <div className="Name">{ingredient[0]}</div>
            <img className="Image" src={ingredient[1]} alt={ingredient[0]} />
            <div className="Quantity">{ingredient[2]} </div>
            <div className="Measurement">{ingredient[3]}</div>
          </div>
        ))}
      </div>
    </div>
    {showIngredientToBuyModal && <IngredientToBuy onClose={async () => {
      setShowIngredientToBuyModal(false);
      const ingredientsResp = await GetRecipesAndMissingIngredients();
      updateStoredIngredients(ingredientsResp);
    }} recipe={currRecipe} />}
    </div>
)};




export default WhatToBuy;
