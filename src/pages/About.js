import React from "react";
import "../Style/About.css";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function About() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `You submited an text that was called "${name}" and contained ${name.length} charcters`
    );
  };

  return (
    <div className="about">
      <h1>Our story</h1>
      <h4>
        Our company motto has always been to serve the cosumer first..Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus
        semper eget. Massa tincidunt dui ut ornare lectus sit amet est. Et
        malesuada fames ac turpis. Tellus in metus vulputate eu scelerisque
        felis. Orci dapibus ultrices in iaculis. Mus mauris vitae ultricies leo
        integer malesuada. Sagittis purus sit amet volutpat consequat mauris
        nunc. Elementum integer enim neque volutpat ac tincidunt vitae semper
        quis. Rhoncus dolor purus non enim praesent elementum facilisis.
      </h4>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{" "}
      </div>
      <h2>The company was founded on a dream of improving the world.</h2>
      <h3>{setName}</h3>

      <div className="WelcomeMessage">
        <form onSubmit={handleSubmit}>
          <label>
            Please enter a text to my form:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>

      <p>
        Write a text in the box above for an alert with some information about
        your input.
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<About />);

export default About;
