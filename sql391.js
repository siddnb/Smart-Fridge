var mysql = require('mysql');
const fs = require("fs");
const { get } = require('express/lib/response');


var con = mysql.createConnection({
  host: "104.197.56.208",
  user: "root",
  password: "qwertyuiop",
  database: "pantry"
});


function sql391(){
  con.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      throw error;
    }
    console.log('Connection established sucessfully');
  });
}

// const inputfile='banana.jpg';
// const data = readImageFile(inputfile); // `data`'s type is Buffer
// let newBuffer = Buffer.from(data.toString('binary'), 'binary');
// con.connect((error) => {
//     if(error){
//       console.log('Error connecting to the MySQL Database');
//       throw error;
//     }
//     console.log('Connection established sucessfully');
//      //var sql = "INSERT INTO ingredients (ingredientName, quantity, ingredientID, ingredientsImage,units) VALUES ('Computer', 500,25, NULL,'grams')";
//    //var sql="ALTER TABLE recipe DROP units";
//     //var sql=addingredient("Computer", 500,30, null,'grams');
//     //var sql=getallingredients();
//     //var sql=addRecipe("Pasta", 2,"butter, pasta", 30, null,'add butter to pasta');
//     var sql=getallrecipes();
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

  // function readImageFile(file) {
  //   // read binary data from a file:
  //   const bitmap = fs.readFileSync(file);
  //   const buf = new Buffer(bitmap);
  //   return buf;
  // }

  sql391.prototype.addingredient = function(ingname, quant, ingID, ingImage, ingunit) {
    var sql = "INSERT INTO ingredients (ingredientName, quantity, ingredientID, ingredientsImage,units) VALUES ('"+ingname+"', "+quant+", "+ingID+", '"+ingImage+"', '"+ingunit+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
  }

  sql391.prototype.removeingredient = function(ingname) {
    var sql = "DELETE FROM ingredients WHERE ingredientName = '"+ingname+"'";
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
  }

  //sql391.prototype.removeingredient("kale");

  sql391.prototype.updateingredient = function(ingname, quant, ingunit) {
    var sql = "UPDATE ingredients SET quantity = '"+quant+"', units = '"+ingunit+"' WHERE ingredientName= '"+ingname+"'";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
}

  sql391.prototype.updateingredientnotunit = function(ingID, quant) {
      var sql = "UPDATE ingredients SET quantity = '"+quant+"' WHERE ingredientID = "+ingID;
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
  }

  // var sql=addingredient("Computer", 500,32, null,'grams');

  sql391.prototype.getallingredients = function() {
    return new Promise(
      (resolve, reject) => {
        con.query("SELECT * FROM ingredients", (err, rows) => {
          if (err) {
            reject(err);
          }
  
          resolve(rows.map(row => row));
        })
      }
    );
    }

  //var getter=getallingredients();

  sql391.prototype.addRecipe = function(recname, numIng, ingList, recID, recImage, instructions) {
    var sql = "INSERT INTO recipe (recipeName, numIngredients, ingredientList, recipeID, recipeImage, instructions) VALUES ('"+recname+"', "+numIng+", '"+ingList+"', "+recID+", '"+recImage+"', '"+instructions+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
  }

  sql391.prototype.getrecipe = function(recname,) {
    var sql = "SELECT * FROM recipe WHERE recipeName = '"+recname+"'";
    return new Promise(
      (resolve, reject) => {
        con.query(sql, function (err, result) {
          if (err) reject(err);
          resolve(result);
        });
      })
      con.query(sql, function (err, result) {
        if (err) throw err;
        resolve(rows.map(row => row));
      });
  }

  //var sql=addRecipe("Pasta", 2,"butter, pasta", 32, null,'add butter to pasta');

  sql391.prototype.getallrecipes = function() {
    return new Promise(
      (resolve, reject) => {
        con.query("SELECT * FROM recipe", (err, rows) => {
          if (err) {
            reject(err);
          }
  
          resolve(rows.map(row => row));
        })
      }
    );
  }

  sql391.prototype.deleterecipe = function() {
    return new Promise(
      (resolve, reject) => {
        con.query("DELETE FROM recipe", (err, rows) => {
          if (err) {
            reject(err);
          }
        })
      }
    );
  }

  // sql391.prototype.getallingredients=function(){
  //   var stuff='';
  //   getinfo(function(result){
  //     stuff=result;
  //   });
  //   console.log(stuff);
  //   return stuff;
  // }

  module.exports=sql391;