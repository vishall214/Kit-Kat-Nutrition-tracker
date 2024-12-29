import React, { useState } from "react";
import "./CalorieCounting.css";

function CalorieCountingPage() {
  
  const [minCalories, setMinCalories] = useState(50);
  const [maxCalories, setMaxCalories] = useState(800);
  const [minProtein, setMinProtein] = useState(10);
  const [maxProtein, setMaxProtein] = useState(100);
  const [minCarbs, setMinCarbs] = useState(10);
  const [maxCarbs, setMaxCarbs] = useState(100);
  const [minFat, setMinFat] = useState(1);
  const [maxFat, setMaxFat] = useState(100);

  // State to store recipes data
  const [recipes, setRecipes] = useState([]);

  
  const fetchRecipes = async (event) => {
    event.preventDefault();

    const apiKey = "1c40f63152f747bd97806b17bbd369b7"; 
    const url = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&minProtein=${minProtein}&maxProtein=${maxProtein}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minFat=${minFat}&maxFat=${maxFat}&number=5&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div className="App">
      <div className="calorie-counter">
      <div className="calorie-count-container">
      <h1>Recipe Finder</h1>

      
      <form onSubmit={fetchRecipes}>
        <div>
          <label>Min Calories:</label>
          <input
          className="input"
            type="number"
            value={minCalories}
            onChange={(e) => setMinCalories(e.target.value)}
          />
        </div>
        <div>
          <label>Max Calories:</label>
          <input
           className="input"
            type="number"
            value={maxCalories}
            onChange={(e) => setMaxCalories(e.target.value)}
          />
        </div>
        <div>
          <label>Min Protein (g):</label>
          <input
           className="input"
            type="number"
            value={minProtein}
            onChange={(e) => setMinProtein(e.target.value)}
          />
        </div>
        <div>
          <label>Max Protein (g):</label>
          <input
           className="input"
            type="number"
            value={maxProtein}
            onChange={(e) => setMaxProtein(e.target.value)}
          />
        </div>
        <div>
          <label>Min Carbs (g):</label>
          <input
           className="input"
            type="number"
            value={minCarbs}
            onChange={(e) => setMinCarbs(e.target.value)}
          />
        </div>
        <div>
          <label>Max Carbs (g):</label>
          <input
           className="input"
            type="number"
            value={maxCarbs}
            onChange={(e) => setMaxCarbs(e.target.value)}
          />
        </div>
        <div>
          <label>Min Fat (g):</label>
          <input
           className="input"
            type="number"
            value={minFat}
            onChange={(e) => setMinFat(e.target.value)}
          />
        </div>
        <div>
          <label>Max Fat (g):</label>
          <input
           className="input"
            type="number"
            value={maxFat}
            onChange={(e) => setMaxFat(e.target.value)}
          />
        </div>
        <button type="submit" className="calorie-count-button">Find Recipes</button>
      </form>
</div>

      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <p>Calories: {recipe.calories}</p>
              <p>Protein: {recipe.protein}</p>
              <p>Carbs: {recipe.carbs}</p>
              <p>Fat: {recipe.fat}</p>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default CalorieCountingPage;
