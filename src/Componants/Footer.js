import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/?lang=sv">
          <TwitterIcon />
        </a>
        <a href="https://sv-se.facebook.com/">
          <FacebookIcon />
        </a>
        <a href="https://se.linkedin.com/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 svenswebbshop</p>
    </div>
  );
}

export default Footer;
