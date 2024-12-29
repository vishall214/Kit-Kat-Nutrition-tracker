import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CalorieCountingPage from "./components/CalorieCountingPage";
import MealPlanPage from "./components/MealPlanPage";
import CalorieCalculator from "./components/CalorieCalculator";
import References from "./components/references";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calorie-counting" element={<CalorieCountingPage />} />
        <Route path="/meal-plan" element={<MealPlanPage />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/refer-this" element={<References />} />
      </Routes>
    </Router>
  );
}

export default App;
