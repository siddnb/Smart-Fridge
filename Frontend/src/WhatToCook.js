import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WhatToCook.css';
import NewIngredientModal from './NewIngredientModal'
import AddIngredientModal from './AddIngredientModal'
import IngredientModal from './IngredientModal'
import RecipeModal from './RecipeModal'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { GetIngredients, GetStoredRecipes } from './Service';

let currIngredient = { };
let currRecipe = {};

const WhatToCook = () => {
  const [showAddIngredientModal, setShowAddIngredientModal] = useState(false);
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [showNewIngredientModal, setShowNewIngredientModal] = useState(false);

  const [ingredients, updateStoredIngredients] = useState();
  const [recipes, updateStoredRecipes] = useState();


  useEffect(() => {
    const getData = async () => {
      const ingredientsResp = await GetIngredients();
      updateStoredIngredients(ingredientsResp);
      const recipesResp = await GetStoredRecipes();
      updateStoredRecipes(recipesResp);
      checkForNewIngredient(ingredientsResp);
    }
    getData();
  }, []);


  const handleAddIngredient = () => {
    setShowAddIngredientModal(true);
  };

  const handleIngredientClick = () => {
    setShowIngredientModal(true);
  };

  const handleNewIngredient = () => {
    setShowNewIngredientModal(true);
  }

  const handleRecipeClick = () => {
    setShowRecipeModal(true);
  };

  const checkForNewIngredient = (ingredientList) => {
    if (ingredientList) {
      for (let i = 0; i < ingredientList.length; i++) {
        if (ingredientList[i].quantity == -1) {
          currIngredient = {
            name: ingredientList[i].ingredientName,
            image: ingredientList[i].ingredientsImage,
            quantity: ingredientList[i].quantity,
            measurement: ingredientList[i].units
          };
          handleNewIngredient();
        }
      }
    }
  }

  return ingredients && recipes && (
    <div className="WhatToCook">
      <div className="Ingredients">
        <div className="TitleAndButton">
          <h2 className="Title">Ingredients</h2>
          <AddCircleIcon className="AddButton" onClick={handleAddIngredient}>
            Add
          </AddCircleIcon>
        </div>

        <div className="IngredientList">
          {
          ingredients.map((ingredient) => (
            <div className="Ingredient" key={ingredient.ingredientName} onClick={() => {
              let quan = ingredient.quantity;
              let measure = ingredient.units;
              if (ingredient.units == "large") {
                measure = "pc";
              } else if (ingredient.units == "cups" || ingredient.units == "cup") {
                measure= "mL";
                quan = 250*ingredient.quantity;
              } else if (ingredient.units == "Bottles") {
                measure ="mL";
                quan = 330*ingredient.quantity;
              } else if (ingredient.units == "pcs" || ingredient.units == "serving" || ingredient.units == "c" || ingredient.units == "stick" || ingredient.units == "Handful") {
                measure = "pc";
              } else if (ingredient.units == "teaspoon" || ingredient.units == "tsp") {
                measure = "mL";
                quan = 5*ingredient.quantity;
              } else if (ingredient.units == "Tbs" || ingredient.units == "Tbsp" || ingredient.units == "tablespoon" || ingredient.units == "Tbsps") {
                measure = "mL";
                quan = 15*ingredient.quantity;
              } else if (ingredient.units == "oz" || ingredient.units == "ounce" || ingredient.units == "Ounces" || ingredient.units == "Oz") {
                measure = "grams";
                quan = 28.4*ingredient.quantity;
              }

              currIngredient = {
                name: ingredient.ingredientName,
                image: ingredient.ingredientsImage,
                quantity: quan,
                measurement: measure
              };
              handleIngredientClick();
            }}>
              <div className="Name">{ingredient.ingredientName}</div>
              <img className="Image" src={ingredient.ingredientsImage} alt={ingredient.ingredientName} />
              <div className="Quantity">{ingredient.quantity} </div>
              <div className="Measurement">{ingredient.units}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="Recipes">
        <div className="TitleAndButton">
          <h2 className="Title">Recipes</h2>
        </div>
        <div className="RecipeList">
          {recipes.map((recipe) => (
            <div className="Recipe" key={recipe.recipeName} onClick={() => {
              console.log(recipe);
              currRecipe = {
                name: recipe.recipeName,
                image: recipe.recipeImage,
                ingredientList: recipe.ingredientList,
                instructions: recipe.instructions
              };
              handleRecipeClick();
            }}>
              <div className="Name">{recipe.recipeName}</div> 
              <img className="Image" src={recipe.recipeImage} alt={recipe.recipeName} />
            </div>
          ))}
        </div>
      </div>
      {showAddIngredientModal && <AddIngredientModal onClose={async () => {
        setShowAddIngredientModal(false);
        const ingredientsResp = await GetIngredients();
        updateStoredIngredients(ingredientsResp);
        const recipesResp = await GetStoredRecipes();
        updateStoredRecipes(recipesResp);
      }} />}
      {showIngredientModal && <IngredientModal onClose={async () => {
        setShowIngredientModal(false);
        const ingredientsResp = await GetIngredients();
        updateStoredIngredients(ingredientsResp);
        const recipesResp = await GetStoredRecipes();
        updateStoredRecipes(recipesResp);
      }} ingredient={currIngredient}  />}
      {showRecipeModal && <RecipeModal onClose={async () => {
        setShowRecipeModal(false);
        const ingredientsResp = await GetIngredients();
        updateStoredIngredients(ingredientsResp);
        const recipesResp = await GetStoredRecipes();
        updateStoredRecipes(recipesResp);
      }} recipe={currRecipe} />}
      {showNewIngredientModal && <NewIngredientModal onClose={async () => {
        setShowNewIngredientModal(false);
        const ingredientsResp = await GetIngredients();
        updateStoredIngredients(ingredientsResp);
        const recipesResp = await GetStoredRecipes();
        updateStoredRecipes(recipesResp);
        checkForNewIngredient(ingredientsResp);
      }} ingredient={currIngredient} />}


    </div>
  );
};


export default WhatToCook;
