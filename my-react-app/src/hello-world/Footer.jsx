import React from "react";
import { FooterStyle } from "./footer-style.js";

const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy; 2025 Sri Eshwar. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank">Facebook</a> | 
        <a href="https://www.twitter.com" target="_blank">Twitter</a> | 
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
      </div>
    </FooterStyle>
  );
};

export default Footer;
