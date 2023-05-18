import React from "react";
import "../Style/Product.css";
import { useState } from "react";
import Logo from "../images/nr1.jpg";
import Applience from "../images/HouseApplience.jpg";

const Product = () => {
  const [name, setName] = useState("Place item in shopping cart");

  const handleClick = () => {
    setName("Purchased");
  };

  const handleClickTwo = () => {
    setName("tester");
  };
  return (
    <div className="column">
      <div className="productOne">
        <img src={Logo} />
        <p>{name}</p>
        <button onClick={handleClick}>Buy</button>
      </div>
      <div className="productTwo">
        <img src={Applience} />
        <p>{name}</p>
        <button onClick={handleClickTwo}>Sell</button>
      </div>
    </div>
  );
};

export default Product;
