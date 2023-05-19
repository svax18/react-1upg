import React from "react";
import "../Style/Product.css";
import { useState } from "react";
import Logo from "../images/Table.jpeg";
import Applience from "../images/Colorfull.png";
import Chair from "../images/Chairs.jpeg";

const Product = () => {
  const [name, setName] = useState("Place item in shopping cart");
  const [nameTwo, setNameTwo] = useState("Place item in shopping cart");
  const [nameThree, setNameThree] = useState("Place item in shopping cart");

  const handleClick = () => {
    setName("Purchased");
  };

  const handleClickTwo = () => {
    setNameTwo("Purchased");
  };
  const handleClickThree = () => {
    setNameThree("Purchased");
  };
  return (
    <div className="column">
      <div className="productOne">
        <img src={Logo} />
        <p>{name}</p>
        <button onClick={handleClick}>Buy</button>
      </div>
      <div className="productTwo">
        <img src={Chair} />
        <p>{nameTwo}</p>
        <button onClick={handleClickTwo}>Buy</button>
      </div>
      <div className="productThree">
        <img src={Chair} />
        <p>{nameThree}</p>
        <button onClick={handleClickThree}>Buy</button>
      </div>
    </div>
  );
};

export default Product;
