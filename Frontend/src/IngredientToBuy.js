import React, { useState, useRef } from 'react';
import ReactDom from "react-dom";
import { CompletedRecipe, GetRecipesAndMissingIngredients, AddIngredient } from './Service';

import './IngredientToBuy.css'

const IngredientToBuy = ({ onClose, recipe }) => {
  //console.log(recipe);
  const [quantity, setQuantity] = useState(recipe.quantity);
  const [measurement, setMeasurement] = useState(recipe.measurement);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await AddIngredient(recipe.name, quantity, measurement);
    //await CompletedRecipe(recipe);
    await GetRecipesAndMissingIngredients();
    onClose();
  };

  const addToPantry = async (event) => {
    event.preventDefault();
    await AddIngredient(recipe.name, recipe.quantity, recipe.measurement);
    onClose();
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };
  let reclist = recipe.recipeName;
  //console.log(inglist3[0]);
  let reclist2=[];
  for(let i=0;i<reclist.length;i++){
    reclist2.push(reclist[i]);
    reclist2.push(<br />);
  }


  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="ingtobuy-modal">
        <div className="ingtobuy-modal-content">
          {console.log(recipe.name)}
          <h2 className="ingtobuy-modal-title">{recipe.name}</h2>
          <img className="ingtobuy-modal-image" src={recipe.image} alt={recipe.name} />
          <form classname="theform" onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="quantity">Quantity: {quantity} {measurement}<br /><br /></label>
              <label htmlFor="recipes">Recipes: <br />{reclist2}</label>

            </div>
            <div className="ingtobuy-modal-buttons">
              <button type="button" onClick={onClose} className="close-btn">Close</button>
              <button type="submit" onClick={addToPantry} className='adding'>Add to Pantry</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default IngredientToBuy;
