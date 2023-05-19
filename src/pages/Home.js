import React from "react";
import backgroundImg from "../images/Colorfull.png";
import "../Style/Home.css";
import Chair from "../images/Chairs.jpeg";
import Table from "../images/Table.jpeg";
import Applience from "../images/Colorfull.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div classname="myHeader">
        <h1>Welcome to my webbpage</h1>
        <p>
          This is a demostration webbshop. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
          exercitation.
        </p>
        <h4>
          Need help renovating? Don't worry our fake services will help you!
        </h4>
        <div className="examplePhotos">
          <img src={Table} />
          <img src={Applience} />
          <img src={Chair} />
        </div>
      </div>
    </div>
  );
}

export default Home;
