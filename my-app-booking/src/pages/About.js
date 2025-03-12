import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h3>About Us</h3>
      <p>We are a team of travel enthusiasts dedicated to making your vacation unforgettable. Our site offers a wide selection of hotels, apartments, and other accommodation options worldwide. We partner with trusted providers to ensure you get the best prices and quality service.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to make travel planning simple and enjoyable. We strive to provide you with all the necessary information to choose the perfect place to stay, as well as provide support at every stage of your journey.</p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Wide Selection: Thousands of accommodation options to suit every taste and budget.</li>
        <li>Competitive Prices: We constantly search for the best deals for our customers.</li>
        <li>Reliability: We work only with verified partners.</li>
        <li>Support: Our team is always ready to help you with any questions.</li>
      </ul>
      <p>Thank you for choosing us!</p>
    </div>
  );
}

export default About;