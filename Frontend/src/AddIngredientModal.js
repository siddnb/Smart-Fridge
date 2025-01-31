import React, { useState, useRef } from 'react';
import ReactDom from "react-dom";
import { AddIngredient } from './Service';

import './AddIngredientModal.css'

const AddIngredientModal = ({ onClose }) => {
  const [ingredientName, setIngredientName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [measurement, setMeasurement] = useState('grams');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (quantity <= 0) {
    //   return;
    // }
    await AddIngredient(ingredientName, quantity, measurement);
    onClose();

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
          <h2 className="modal-title">Add Ingredient</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ingredient">Ingredient: </label>
              <input
                type="text"
                id="ingredient"
                value={ingredientName}
                onChange={(event) => setIngredientName(event.target.value)}
              />
            </div>
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
              <button type="submit" className='submit-btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default AddIngredientModal;
