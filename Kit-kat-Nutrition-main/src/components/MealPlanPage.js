
import React, { useState } from 'react';

const MealPlanPage = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [error, setError] = useState(null);
  const [timeFrame, setTimeFrame] = useState('day');
  const [targetCalories, setTargetCalories] = useState(2000);
  const [diet, setDiet] = useState('');
  const [exclude, setExclude] = useState('');

  const API_KEY = '1c40f63152f747bd97806b17bbd369b7'; 
  const BASE_URL = 'https://api.spoonacular.com/mealplanner/generate';

  const generateMealPlan = async () => {
    try {
      const url = new URL(BASE_URL);
      url.searchParams.append('timeFrame', timeFrame);
      url.searchParams.append('targetCalories', targetCalories);
      if (diet) url.searchParams.append('diet', diet);
      if (exclude) url.searchParams.append('exclude', exclude);
      url.searchParams.append('apiKey', API_KEY);

      const response = await fetch(url.toString(), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch meal plan: ${response.statusText}`);
      }

      const data = await response.json();
      setMealPlan(data);
      setError(null);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generateMealPlan();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <form onSubmit={handleGenerate} style={{ marginBottom: '20px' }}>
      <h1>Meal Planner</h1>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Time Frame:
            <select value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} style={{ marginLeft: '10px' }}>
              <option value="day">Day</option>
              <option value="week">Week</option>
            </select>
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Target Calories:
            <input
              type="number"
              value={targetCalories}
              onChange={(e) => setTargetCalories(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Diet:
            <input
              type="text"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              placeholder="e.g., vegetarian"
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Exclude Ingredients:
            <input
              type="text"
              value={exclude}
              onChange={(e) => setExclude(e.target.value)}
              placeholder="e.g., shellfish, olives"
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Generate Meal Plan
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {mealPlan ? (
        <div>
          <h2>Generated Meal Plan</h2>
          <h3>Meals</h3>
          <ul>
            {mealPlan.meals.map((meal) => (
              <li key={meal.id}>
                <strong>{meal.title}</strong> (Ready in {meal.readyInMinutes} minutes, Servings: {meal.servings})<br />
                <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View Recipe
                </a>
              </li>
            ))}
          </ul>

          <h3>Nutrients</h3>
          <p>Calories: {mealPlan.nutrients.calories}</p>
          <p>Carbohydrates: {mealPlan.nutrients.carbohydrates}</p>
          <p>Fat: {mealPlan.nutrients.fat}</p>
          <p>Protein: {mealPlan.nutrients.protein}</p>
        </div>
      ) : (
        <p>No meal plan generated yet. Fill out the form and click the button to generate one!</p>
      )}
    </div>
  );
};

export default MealPlanPage;
