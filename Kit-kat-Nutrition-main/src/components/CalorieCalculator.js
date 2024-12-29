import React, { useState } from "react";
import "./CalorieCalculator.css";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState(1);
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");

  const calculateCalories = () => {
    try {
      if (!age || !height || !weight || !activityLevel) {
        throw new Error("All fields are required.");
      }

      const BMR =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;

      const activityMultiplier = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9,
      }[activityLevel] || 1.2;

      const dailyCalories = Math.round(BMR * activityMultiplier);

      setCalories(dailyCalories);
      setError(""); 
    } catch (err) {
      console.error("Error calculating calorie data:", err.message);
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h1>Calorie Calculator</h1>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Activity Level (1-5): </label>
          <input
            type="number"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            min="1"
            max="5"
          />
        </div>
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Calculate
        </button>
      </form>

      {calories && (
        <div>
          <h2>Recommended Daily Calorie Intake</h2>
          <p>{calories} kcal</p>
        </div>
      )}

      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
