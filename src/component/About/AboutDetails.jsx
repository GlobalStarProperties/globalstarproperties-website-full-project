// import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "../Utility/Button/Button";

const AboutDetails = () => {
  return (
    // <section className="about-hero">
    //   <div className="container">
    //     <h1>Beyond Finding a Place: Unearthing Your Dream Home with Expert Guidance</h1>
    //     <p>
    //       At Global Star Properties, we understand seeking a house isn't just about finding four walls and a roof. It's about discovering a space that becomes your haven, a reflection of your aspirations, and a foundation for creating lasting memories.
    //     </p>
    //     <p>
    //       That's where our unmatched expertise comes in. We are hyper-focused on the southern suburbs of Johannesburg, South Africa, dedicating our extensive local knowledge to guide you effortlessly through the journey of finding your perfect home. We go beyond simply listing properties; we unlock doors to new possibilities.
    //     </p>
    //     <ul>
    //       <li>
    //         <strong>Unparalleled local market knowledge:</strong> We are deeply rooted in the southern suburbs, understanding the intricacies of each neighborhood, the hidden gems, and the market trends.
    //       </li>
    //       <li>
    //         <strong>Personalized approach:</strong> We take the time to understand your unique needs and aspirations, ensuring your ideal home aligns perfectly with your lifestyle and future goals.
    //       </li>
    //       <li>
    //         <strong>Seamless experience:</strong> Our commitment is to provide a stress-free and efficient journey, guiding you through every step with proactive communication and expert advice.
    //       </li>
    //     </ul>
    //     <button>Contact Us</button>
    //   </div>
    // </section>

    <div className="about-us">
      <h2 className="about-us__title">Beyond Finding a Place</h2>
      <p className="about-us__description">
        At <b>Global Star Properties</b>, we understand seeking a house isn't just about finding four walls and a roof. It's
        about discovering a space that becomes your haven, a reflection of your aspirations, and a foundation for
        creating lasting memories. 
      </p>
      <p className="about-us__description">
        That's where our <b>unmatched expertise</b> comes in. We are <b>hyper-focused</b> on the southern suburbs of
        Johannesburg, South Africa, dedicating our **extensive local knowledge** to guide you effortlessly through the
        journey of finding your perfect home. 
      </p>
      <p className="about-us__description">
        We go beyond simply listing properties; we <b>unlock doors to new possibilities</b>. Whether you're a first-time
        buyer navigating the exciting world of real estate or a seasoned investor seeking the ideal location, our team
        of <b>highly specialized professionals</b> is here to serve you.
      </p>
      <h2 className="about-us__list-title">What sets us apart:</h2>
      <ul className="about-us__list">
        <li>
          <b>Unparalleled local market knowledge:</b> We are deeply rooted in the southern suburbs, understanding the
          intricacies of each neighborhood, the hidden gems, and the market trends.
        </li>
        <li>
          <b>Personalized approach:</b> We take the time to understand your unique needs and aspirations, ensuring your
          ideal home aligns perfectly with your lifestyle and future goals.
        </li>
        <li>
          <b>Seamless experience:</b> Our commitment is to provide a stress-free and efficient journey, guiding you through
          every step with proactive communication and expert advice.
        </li>
      </ul>
      <Link to={'/contact'} ><Button text={'Contact Us Today'} /></Link>
    </div>

    
    // <section className="about-us">
    //   <h2 className="about-us__title">
    //     Beyond Finding a Place: Unearthing Your Dream Home with Expert Guidance
    //   </h2>
    //   <div className="about-us__content">
    //     <p>
    //       At Global Star Properties, we understand seeking a house isn't just about finding four walls and a roof. It's about discovering a space that becomes your haven, a reflection of your aspirations, and a foundation for creating lasting memories.
    //     </p>
    //     <p>
    //       That's where our unmatched expertise comes in. We are hyper-focused on the southern suburbs of Johannesburg, South Africa, dedicating our extensive local knowledge to guide you effortlessly through the journey of finding your perfect home.
    //     </p>
    //     <p>
    //       We go beyond simply listing properties; we unlock doors to new possibilities. Whether you're a first-time buyer navigating the exciting world of real estate or a seasoned investor seeking the ideal location, our team of highly specialized professionals is here to serve you.
    //     </p>
    //     <ul className="about-us__list">
    //       <li>
    //         <strong>Unparalleled local market knowledge:</strong> We are deeply rooted in the southern suburbs, understanding the intricacies of each neighborhood, the hidden gems, and the market trends.
    //       </li>
    //       <li>
    //         <strong>Personalized approach:</strong> We take the time to understand your unique needs and aspirations, ensuring your ideal home aligns perfectly with your lifestyle and future goals.
    //       </li>
    //       <li>
    //         <strong>Seamless experience:</strong> Our commitment is to provide a stress-free and efficient journey, guiding you through every step with proactive communication and expert advice.
    //       </li>
    //     </ul>
    //     <p className="about-us__call-to-action">
    //       Ready to embark on this exciting journey? Contact us today and discover how Global Star Properties can help you find your dream home, not just a place to call home.
    //     </p>
    //   </div>
    // </section>
  );
};

export default AboutDetails;
