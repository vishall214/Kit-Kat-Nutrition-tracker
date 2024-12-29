import React from 'react'
import { Link } from "react-router-dom";

const references = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">Kit-Kat Nutrition</div>
      <Link to="/">
            <button className="button">Go back to Home</button>
            </Link>
      </nav>
<br></br>
      <h2>APIs</h2>
      <dl>
        <dt>Recipes</dt>
        <dd>Spoonacular API : https://spoonacular.com/food-api</dd>
        <br></br>
        <dt>Meal Planner</dt>
        <dd>Spoonacular API : https://spoonacular.com/food-api</dd>
      </dl>

      <br></br>

      <h2>Other resources</h2>

      <dl>
        <dt>Calucation of daily calorie intake</dt>
        <dd>www.healthline.com</dd>
        <br></br>
        <dt>API integration tutorial</dt>
        <dd>Snipcart.com</dd>
      </dl>
    </div>
  )
}

export default references
