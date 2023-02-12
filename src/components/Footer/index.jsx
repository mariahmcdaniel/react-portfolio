import React from "react";
import "./style.css"


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      Find me on: 
      <a href="https://github.com/mariahmcdaniel"><img
          id='git'
          src='/git.png'
          alt='my github' /></a>
      <a href="https://www.linkedin.com/in/mariah-mcdaniel-607895251/"><img
          id='linkedin'
          src='/linked.pn'
          alt='my linkedin' /></a>
      <a href="https://instagram.com/mar____iah?igshid=YmMyMTA2M2Y="><img
          id='insta'
          src='/insta.png'
          alt='my instagram' /></a>
      {`Copyright © Mariah McDaniel ${year}`}
    </footer>
  );
};

export default Footer;