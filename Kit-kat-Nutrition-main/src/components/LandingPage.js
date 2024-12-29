import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


function LandingPage() {
  return (
    <div className="LandingPage">
      <nav className="navbar">
        <div className="logo">Kit-Kat Nutrition</div>
        
      
      </nav>

      <section className="hero">
        <h1>Welcome to Kit-Kat</h1>
        <p>Track your meals and stay healthy!

We at Kitkat nutrition, have your health at the highest priority. We provide powerful tools like calorie tracking to help you monitor your intake, personalized meal planning to suit your lifestyle, and expert nutrition advice to guide your choices.

</p><p>Whether you’re aiming to meet fitness goals, manage your diet, or simply live healthier, we’re here to support you every step of the way!</p>
        <div className="cta-buttons">
          
         
          <Link to="refer-this"><button className="button">References</button></Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://media.istockphoto.com/id/1392099197/photo/asian-woman-eating-pan-fried-salmon-in-cafe.jpg?s=612x612&w=0&k=20&c=5qwpl2Ko6p_blFb9QO_jsPEamJ6Sa5j1quaygs993kk=" alt="Track Meals" className="feature-img" />
          <div className="feature-content">
            <h3>Recommended Calorie Intake</h3>
            <p>Calculate the daily calorie intake that fits your body</p>
            <Link to="/calorie-calculator">
            <button className="button">Calculate</button>
            </Link>
          </div>
        </div>

        
        <div className="feature-card">
          <img src="https://img.freepik.com/free-photo/attractive-healthy-young-woman-with-fitness-mat-using-mobile-phone-gym_231208-14401.jpg" alt="Meal Plan" className="feature-img" />
          <div className="feature-content">
            <h3>Generate Meal Plan</h3>
            <p>Get a personalized meal plan with your dietary preferences.</p>
            <Link to="/meal-plan">
              <button className="button">Generate</button>
            </Link>
          </div>
        </div>

      
        <div className="feature-card">
          <img src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" alt="Track Meals" className="feature-img" />
          <div className="feature-content">
            <h3>Recipes that fit your needs</h3>
            <p>Find recipes that align with your priorities</p>
            <Link to="/calorie-counting">
              <button className="calorie-count-button">Get Recipes</button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Nutrition | Contact us at<br />
          +91 9985682021 || +91 9810603388
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
