import React from "react";


const Footer = () => {
  const year = new Date().getFullYear();

  return( 
    <footer>
    <a href="https://github.com/mariahmcdaniel"><i class="uil uil-github"></i></a>
    <a href="https://www.linkedin.com/in/mariah-mcdaniel-607895251/"><i class="uil uil-linkedin"></i></a>
    <a href="https://instagram.com/mar____iah?igshid=YmMyMTA2M2Y="><i class="uil uil-instagram"></i></a>  
    {`Copyright © Mariah McDaniel ${year}`}
    </footer>
  );
};

export default Footer;