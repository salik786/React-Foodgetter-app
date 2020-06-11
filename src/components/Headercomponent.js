import React from "react";
import "./headerstyle.css";

const Header = () => {
  return (
    <div className="head">
      <div className="lower">
        <div className="image">
          <img
            className="img-fluid"
            src="assests/images/Hamburger-PNG-Pic.png"
          />
        </div>
        <div className="text">
          <marquee behavior="" direction="">
            <h1>We are Dealing in all kinds of food items</h1>
          </marquee>
          <h5>Take Your taste buds on vacation</h5>
          <button className="btn1">View Menu</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
