const express = require('express');
const cors = require('cors');
const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");
const sql391 = require('./sql391.js');
const fs = require("fs");
const SpoonacularApi = require('./javascript-client/dist/com.spoonacular.client');
const fetch=require('node-fetch');
const bodyParser = require('body-parser')
const {convert} = require('./pixelToPic.js');
const { WebSocketServer } = require('ws')




apiKey="67a5396660df4868a1f36b4011f25c24"
///////apiKey="99c4596a24844308ae645bee22a676d2"
//apiKey="c9fefe6894b847a980540960bb936c9d"
//apiKey="817018ab5c2c462cbb7fdf8850f97da2a"
////apiKey="697ed0e771ea4cde9919079e826a5c9c"
//apiKey="7417dd715f66430280c8b67261e045a8"

var defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
//apiKey="a42cceca10444f9a95a81fa234c3d766"


//apiKey = "7d029bd5f6744733a8578d51893b56c5"
//apiKey="0fceec329d654956a4251d405c772bce"
//apiKey="16e45bef6fde4b53b74090c4daa06697"
//apiKey="9af7b0716aed43a2b93fc53dfe707c28"
//apiKey="e265615a73c94baab6c593b6f88c52e5"
//apiKey="e5dea30fe1d34972b97390508ef08542"
// Demo of spoonacular

// Set up server
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()) 						// to parse application/json
app.use(express.urlencoded({ extended: true })) // to parse application/x-www-form-urlencoded

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

var db = new sql391();

var imgBuffer = "";
var imgCounter = 0;
var reqCount = 0;

const sockserver = new WebSocketServer({ port: 443 })
sockserver.on('connection', ws => {
console.log('New client connected!')
ws.send('connection established')
ws.on('close', () => console.log('Client has disconnected!'))
ws.on('message', data => {
    data=data.toString()
    if(!data.endsWith("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")){
        imgBuffer+=data;
        console.log(data);
        reqCount++;
        ws.send("Image bytes buffered");
        return
    }

    console.log(data);

    imgBuffer+=data;

    //MIGHT NEED TO APPEND THIS LAST PART TO THE IMAGE BUFFER AS WELL

    convert(imgBuffer,"newImg"+imgCounter+".png");

    const stub = ClarifaiStub.grpc();

    const imageBytes = fs.readFileSync("newImg"+imgCounter+".png");

    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Key d97dc8ba72744eb6b31cabbd6e2eba60");

    stub.PostModelOutputs(
        {
            model_id: "food-item-recognition",
            inputs: [{data: {image: {base64: imageBytes}}}]
        },
        metadata,
        (err, response) => {
            if (err) {
                console.log("Error: " + err);
                return;
            }

            if (response.status.code !== 10000) {
                console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
                return;
            }

            var ingToAdd = {
                ingredient: response.outputs[0].data.concepts[0].name,
                quantity: -1,
                id: "",
                image: null,
                measurement: "pc"
            }
            
            console.log("the ingredient is: " + ingToAdd.ingredient )
            addIng(ingToAdd);

            return
        }
    );

    imgCounter++;
    imgBuffer = "";

    ws.send("Image converted");
    return

})
ws.onerror = function () {
console.log('websocket error')
}
})

// Serves the requests at the '/ingredients' endpoint
app.route('/api/ingredients')
.get(async (req, res) => {
    // Returns a JSON object for each ingredient, with their corresponding Quantity and images
    let data = await (db.getallingredients());
    res.send(data);
})
.post(bodyParser.text(),async (req, res) => {

    if(req.body.charAt(0)!="z"){
        imgBuffer+=req.body;
        console.log(reqCount);
        reqCount++;
        return res.status(200).send("Image bytes buffered");
    }

    convert(imgBuffer,"newImg"+imgCounter+".png");

    const stub = ClarifaiStub.grpc();

    const imageBytes = fs.readFileSync("newImg"+imgCounter+".png");

    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Key d97dc8ba72744eb6b31cabbd6e2eba60");

    stub.PostModelOutputs(
        {
            model_id: "food-item-recognition",
            inputs: [{data: {image: {base64: imageBytes}}}]
        },
        metadata,
        async (err, response) => {
            if (err) {
                console.log("Error: " + err);
                return;
            }

            if (response.status.code !== 10000) {
                console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
                return;
            }

            var ingToAdd = {
                ingredient: response.outputs[0].data.concepts[0].name,
                quantity: -1,
                id: "",
                image: null,
                measurement: "pc"
            }
            
            console.log("the ingredient is: " + ingToAdd.ingredient )
            await addIng(ingToAdd);

            return ;
        }
    );

    imgCounter++;
    imgBuffer = "";

    
    return res.status(200).send("Image converted");
})

// Serves the requests at the '/ingredients/:ingredient' endpoint
app.route('/api/ingredients/:ingredient')
.delete(async (req, res) => {
    // Deletes an ingredient
    // 1. Delete ingredient from db
    let response = await (db.removeingredient(req.params.ingredient));
    let oldIngredients = (await db.getallingredients()).map(({ ingredientName }) => ingredientName);

    let ings = "";

    for(let i of oldIngredients){
        ings +=i+","
    }
    
    var temp;
    let recipeArr = [];
    var getRecipes =async () => {
    
        const response=await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=' + apiKey+ '&ingredients='+ings+'&number=10&limitLicense=true&ranking=2&ignorePantry=true');
        const data=await response.json();
        return data.filter((item) => {
            return item.missedIngredientCount == 0;
        });
    }
    var getInfo=async () => {
        let jsonData=await getRecipes();
        return jsonData;
    };

    temp=await getInfo().then((data) => {
        return data;
    });
    let instructionstemp=null;
    //console.log(temp);
    for(let i of temp){

        var getInstructions=async () => {
            //console.log(apiKeyScheme.apiKey);
            const response=await fetch('https://api.spoonacular.com/recipes/'+i.id+'/analyzedInstructions?apiKey=' + apiKey+ '&stepBreakdown=true');
            const data=await response.json();
            return data;
        }

        var getInstructionsInfo=async () => {
            let jsonData=await getInstructions();
            return jsonData;
        };

        instructionstemp=await getInstructionsInfo().then((data) => {
            return data;
        });
        let instructions=[];
        if(instructionstemp[0]!==undefined){
            console.log(instructionstemp[0].steps);
            instructions = instructionstemp[0].steps.map(({step,newline})=> [step.replaceAll("'",""),"\n"]);
        }
        recipeArr.push({
            recipeName: i.title.replaceAll("'",""),
            numIngredients: i.usedIngredientCount,
            ingredientList: i.usedIngredients.map(({ name,amount,unit}) => [name, amount,unit]),
            recipeID: i.id,
            recipeImage: i.image.replaceAll("'",""),
            instructions: instructions
        });


    }
    db.deleterecipe();
    for(let i of recipeArr){
        //console.log(i);
        db.addRecipe(i.recipeName, i.numIngredients, i.ingredientList, i.recipeID, i.recipeImage, i.instructions);
    }
    // 2. Call getAllIngredients
    // 3. Call Spoonacular API to get updated recipe list
    // 4. Update recipe DB with new stored recipes

    res.send("Successfully deleted ");
})
.post( async (req, res) => {
    // Uploads an ingredient label with an associated image to the backend;
    let newIngredient = req.body;

    await addIng(newIngredient);

    console.log("added ingredient")

    res.send(newIngredient.ingredient);
}) 
.patch(async (req, res) => {
    // Updates the quantity of an ingredient
    let ingredient = req.body;
    await (db.updateingredient(ingredient.ingredient, ingredient.quantity, ingredient.measurement));

    res.send("Successfully updated ");
})

// Serves the requests at the '/recipes' endpoint
app.route('/api/recipes')
// Returns a JSON object for each stored recipe and image
.get(async (req, res) => {
    // Returns a JSON object for each ingredient, with their corresponding Quantity and images
    let data = await (db.getallrecipes());
    res.send(data);
})
.delete(async (req, res) => {

    /**
     * Get all ingredients + quantities used in recipe
     * minus ingredients from db
     *      if ingredient quant<=0, delete from db
     * Call getingredients on db
     * Get recipes from Spoonacular again
     */

    let tempExistingIngredients = (await db.getallingredients())
    .map((element) => { 
        let container = {};
        container[element.ingredientID] = [element.quantity, element.ingredientName ];
        return container;
    });

    let existingIngredients = {}

    for(let i of tempExistingIngredients){
        let key = Object.keys(i);
        key = key[0];
        existingIngredients[key] = [i[key][0],i[key][1]]
    }

    let recipe = req.body;

    let parsed = recipe.recipe.ingredientList.split(',');
    let ingredients = {};

    console.log("this is hallo")
    

    for(let i = 0; i<parsed.length; i+=4){
        let quantity = parsed[i+2]
        if(quantity == ''){
            quantity = "pc";
        }
        ingredients[parsed[i+3]] = [parsed[i+1],quantity]; // Stored in format {ingredient_id: [quantity, unit]}
    }

    //console.log(existingIngredients);
    //console.log(ingredients);

    for(let [key,value] of Object.entries(ingredients)){
        if (!existingIngredients[key]) {
            continue;
        }
        let remainder = existingIngredients[key][0]-value[0];
        if(remainder<=0){
            db.removeingredient(existingIngredients[key][1]);
        }
        else{
            db.updateingredientnotunit(key,remainder);
        }
    }

    let Ingredients = (await db.getallingredients()).map(({ ingredientName }) => ingredientName);

    let ings = "";

    for(let i of Ingredients){
        ings +=i+","
    }

    var temp;
    let recipeArr = [];
    var getRecipes =async () => {
    
        const response=await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey='+apiKey+'&ingredients='+ings+'&number=10&limitLicense=true&ranking=2&ignorePantry=true');
        const data=await response.json();
        return data.filter((item) => {
            return item.missedIngredientCount == 0;
        });
    }
    var getInfo=async () => {
        let jsonData=await getRecipes();
        return jsonData;
    };

    temp=await getInfo().then((data) => {
        return data;
    });
    let instructionstemp=null;
    for(let i of temp){

        var getInstructions=async () => {
            const response=await fetch('https://api.spoonacular.com/recipes/'+i.id+'/analyzedInstructions?apiKey='+apiKey+'&stepBreakdown=true');
            const data=await response.json();
            return data;
        }

        var getInstructionsInfo=async () => {
            let jsonData=await getInstructions();
            return jsonData;
        };

        instructionstemp=await getInstructionsInfo().then((data) => {
            return data;
        });
        let instructions=[];
        if(instructionstemp[0]!==undefined){
            instructions = instructionstemp[0].steps.map(({step,newline})=> [step.replaceAll("'",""),"\n"]);
        }
        recipeArr.push({
            recipeName: i.title.replaceAll("'",""),
            numIngredients: i.usedIngredientCount,
            ingredientList: i.usedIngredients.map(({ name,amount,unit}) => [name, amount,unit]),
            recipeID: i.id,
            recipeImage: i.image.replaceAll("'",""),
            instructions: instructions
        });


    }
    db.deleterecipe();
    for(let i of recipeArr){
        db.addRecipe(i.recipeName, i.numIngredients, i.ingredientList, i.recipeID, i.recipeImage, i.instructions);
    }

    res.send("deez nuts");

})

// TODO for 4th Demo
// Serves the requests at the '/recipes' endpoint
app.route('/api/recipesWithMissingIngredients')
// Returns a JSON object 
// Gets a list of recipes sorted by fewest number of ingredients missing, with the associated missing ingredients
.get(async (req, res) => {
let oldIngredients = (await db.getallingredients()).map(({ ingredientName }) => ingredientName);

let ings = "";

for(let i of oldIngredients){
    ings +=i+",+"
}
ings.slice(0,-2);

var temp;
let recipeArr = [];
var getRecipes =async () => {

const response=await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey='+apiKey+'&ingredients='+ings+'&number=5&limitLicense=true&ranking=2&ignorePantry=true');
const datas=await response.json();
return datas.filter((item) => {
   return item.missedIngredientCount != 0;
}
);
}
var getInfo=async () => {
    let jsonData=await getRecipes();
    return jsonData;
};

temp=await getInfo().then((datas) => {
    return datas;
});
let missingingarray=[];
for(let i of temp){
    // console.log(i.title);
    // console.log(i.missedIngredients);
    missingingarray.push({
        missedingredients: i.missedIngredients.map(({ name,image,amount,unit}) => [name, image, amount,unit]),
        recipeTitle: i.title.replaceAll("'","")
    });
   
}

let uniquearr=[];
for(let i of missingingarray){
    let bool=false;
    for(let j of uniquearr){
        console.log(j);
        if(i.missedingredients[0][0]===j.ingredientName){
            bool=true;
            j.count+=1;
            j.recipeTitle.push(i.recipeTitle.replaceAll("'",""));
            break;
        }
    }
    if(bool===false){
        if(i.missedingredients[0][3]===""){
            i.missedingredients[0][3]="pcs";
        }
        //console.log(i.recipeTitle);
        let rectitlearr=[];
        rectitlearr.push(i.recipeTitle.replaceAll("'",""));
        uniquearr.push({
            ingredientName: i.missedingredients[0][0],
            ingredientsImage: i.missedingredients[0][1],
            ingredientAmount: i.missedingredients[0][2],
            ingredientUnit: i.missedingredients[0][3],
            recipeTitle: rectitlearr,
            count: 1
        });
    }
}
let sortedCounts = uniquearr.sort(
    (c1, c2) => (c1.count < c2.count) ? 1 : (c1.count > c2.count) ? -1 : 0);

let sortedCountIngredients = sortedCounts.map(({ ingredientName, ingredientsImage, ingredientAmount, ingredientUnit, recipeTitle }) => [ingredientName,ingredientsImage, ingredientAmount,ingredientUnit, recipeTitle]);

    let data = {};
    
    res.send(sortedCountIngredients);

})

async function addIng(newIngredient){
    let oldIngredients = (await db.getallingredients()).map(({ ingredientName }) => ingredientName);

    let ings = "";

    for(let i of oldIngredients){
        ings +=i+","
    }
    
    var temp;
    let recipeArr = [];
    var getRecipes = async () => {
        const response=await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey='+apiKey+'&ingredients='+ings+newIngredient.ingredient+'&number=10&limitLicense=true&ranking=2&ignorePantry=true');
        const data=await response.json();
        return data.filter((item) => {
            return item.missedIngredientCount == 0;
        });
    }
    var getInfo=async () => {
        let jsonData=await getRecipes();
        return jsonData;
    };

    temp=await getInfo().then((data) => {
        return data;
    });

    let instructionstemp=null;
    for(let i of temp){

        var getInstructions=async () => {
            const response=await fetch('https://api.spoonacular.com/recipes/'+i.id+'/analyzedInstructions?apiKey='+apiKey+'&stepBreakdown=true');
            const data=await response.json();
            return data;
        }

        var getInstructionsInfo=async () => {
            let jsonData=await getInstructions();
            return jsonData;
        };

        instructionstemp=await getInstructionsInfo().then((data) => {
            return data;
        });
        let instructions=[];
        if(instructionstemp[0]!==undefined){
            instructions = instructionstemp[0].steps.map(({step,newline})=> [step.replaceAll("'",""),"\n"]);
        }
        recipeArr.push({
            recipeName: i.title.replaceAll("'",""),
            numIngredients: i.usedIngredientCount,
            ingredientList: i.usedIngredients.map(({ name,amount,unit,id}) => [name, amount,unit,id]),
            recipeID: i.id,
            recipeImage: i.image.replaceAll("'",""),
            instructions: instructions
        });


    }
    db.deleterecipe();
    for(let i of recipeArr){
        db.addRecipe(i.recipeName, i.numIngredients, i.ingredientList, i.recipeID, i.recipeImage, i.instructions);
    }
    

    let tempings=[];
    var getIngredient =async () => {
    
        const response=await fetch('https://api.spoonacular.com/food/ingredients/search?apiKey='+apiKey+'&query='+newIngredient.ingredient);
        const data=await response.json();
        return data;
    }
    var getInfoIng=async () => {
        let jsonData=await getIngredient();
        return jsonData;
    };

    tempings=await getInfoIng().then((data) => {
        return data;
    });

    for(let i of tempings.results){
        if(i.name==newIngredient.ingredient){
            newIngredient.image='https://spoonacular.com/cdn/ingredients_100x100/'+i.image;
            newIngredient.id=i.id;
            break;
        }
    }
    let x = Math.floor((Math.random() * 10000 + 100));
    if(newIngredient.image==null && tempings.results.length==0){
        newIngredient.image='https://spoonacular.com/cdn/ingredients_100x100/unknown.png';
        newIngredient.id=x;
    }
    else if(newIngredient.image==null){
        newIngredient.image='https://spoonacular.com/cdn/ingredients_100x100/'+tempings.results[0].image;
        newIngredient.id=tempings.results[0].id;
    }
    try{
        db.addingredient(newIngredient.ingredient, newIngredient.quantity, newIngredient.id, newIngredient.image, newIngredient.measurement);
    }
    catch(err){
        console.log(err);
    }
    

    console.log("Added "+newIngredient.ingredient +" with ID "+newIngredient.id);
}