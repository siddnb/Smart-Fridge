const apiCallUrl= "http://localhost:3000/api/";
 

export async function GetIngredients() {
    try {
        const response = await fetch(apiCallUrl + 'ingredients', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
        //return ingredients;
    } catch (error) {
        return error;
    }
}

export async function GetStoredRecipes() {
    try {
        const response = await fetch(apiCallUrl + 'recipes', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });        
        let recipesUnchanged = await response.json();
        return recipesUnchanged;
    } catch (error) {
        return error;
    }
}

export async function AddIngredient(ingredient, quantity, measurement) {
    try {
        const response = await fetch(apiCallUrl + 'ingredients/' + ingredient, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ingredient, quantity, measurement})
        });        
        return await response.json();
        //return 200;
    } catch (error) {
        return error;
    }
}

export async function RemoveIngredient(ingredient) {
    try {
        const response = await fetch(apiCallUrl + 'ingredients/' + ingredient, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ingredient})
        });        
        return await response.json();
    } catch (error) {
        return error;
    }
}

export async function UpdateQuantity(ingredient, quantity, measurement) {
    try {
        const response = await fetch(apiCallUrl + 'ingredients/' + ingredient, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ingredient, quantity, measurement})
        });        
        return await response.json();
    } catch (error) {
        return error;
    }
}

export async function GetRecipesAndMissingIngredients() {
    try {
        const response = await fetch(apiCallUrl + 'recipesWithMissingIngredients', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });        
        return await response.json();
    } catch (error) {
        return error;
    }
}

export async function CompletedRecipe(recipe) {
    try {
        const response = await fetch(apiCallUrl + 'recipes', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({recipe})
        });  
        //return 200;      
        return await response.json();
    } catch (error) {
        return error;
    }
}