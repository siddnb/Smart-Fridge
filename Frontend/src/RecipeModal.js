import React, { useState, useRef } from 'react';
import ReactDom from "react-dom";
import { CompletedRecipe } from './Service';

import './RecipeModal.css'

const RecipeModal = ({ onClose, recipe }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    await CompletedRecipe(recipe.name);
    onClose();
  };

  const doneCooking = async (event) => {
    event.preventDefault();
    await CompletedRecipe(recipe);
    onClose();
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  let inglist3 = recipe.ingredientList.split(",");
  //console.log(inglist3);
  let inglist4=[];
  for(let i=0;i<inglist3.length;i+=4){
    let measurement=inglist3[i+2];
    if(measurement===""){
      measurement="pcs";
    }
    inglist4.push(inglist3[i+1]+" "+measurement+" "+inglist3[i]);
    inglist4.push(<br />);
  }

  let instlist=recipe.instructions.split("\n");
  console.log(instlist);
  let instlist2=[];
  for(let i=0;i<instlist.length-1;i++){
    if(instlist[i].substring(0,1)===","){
      instlist[i]=instlist[i].substring(1);
    }
    instlist[i]=instlist[i].substring(0,instlist[i].length-1);
    
    instlist2.push(i+1+". "+instlist[i]);
    instlist2.push(<br />);
  }


  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="recipe-modal">
        <div className="recipe-modal-content">
          <h2 className="recipe-modal-title">{recipe.name}</h2>
          <img className="recipe-modal-image" src={recipe.image} alt={recipe.name} />
          <h4>Ingredient List</h4>
          <p>{inglist4}</p>
          <div className="cooking-instructions">
            <h4>Cooking Instructions</h4>
            <div className="instructions-scroll">
              <p>{instlist2}</p>
            </div>
          </div>
          <form classname="theform" onSubmit={handleSubmit}>
            <div className="recipe-modal-buttons">
              <button type="button" onClick={onClose} className="close-btn">Close</button>
              <button type="button" onClick={doneCooking} className="done-cooking-btn">Done Cooking</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RecipeModal;
