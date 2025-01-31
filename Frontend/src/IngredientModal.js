import React, { useState, useRef } from 'react';
import ReactDom from "react-dom";
import { UpdateQuantity, RemoveIngredient, GetRecipesAndMissingIngredients, GetStoredRecipes } from './Service';


import './IngredientModal.css'

const IngredientModal = ({ onClose, ingredient }) => {

  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [measurement, setMeasurement] = useState(ingredient.measurement);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await UpdateQuantity(ingredient.name, quantity, measurement);
    onClose();
  };

  const removeIngredient = async (event) => {
    event.preventDefault();
    await RemoveIngredient(ingredient.name);
    await onClose();
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal-content">
          <h2 className="modal-title">{ingredient.name}</h2>
          <img className="modal-image" src={ingredient.image} alt={ingredient.name} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <select
                value={measurement}
                onChange={(event) => setMeasurement(event.target.value)}
              >
                <option value="grams">grams</option>
                <option value="mL">mL</option>
                <option value="pc">pc</option>
              </select>
            </div>
            <div className="modal-buttons">
              <button type="button" onClick={onClose} className="close-btn">Close</button>
              <button type="button" onClick={removeIngredient} className="remove-ingredient-btn">Remove Ingredient</button>
              <button type="submit" className='submit-btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default IngredientModal;
