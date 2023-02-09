import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return( 
    <footer>
    <a href="https://github.com/mariahmcdaniel">GitHub</a>
    <a href="https://www.linkedin.com/in/mariah-mcdaniel-607895251/">linkedin</a>  
    {`Copyright © Mariah McDaniel ${year}`}
    </footer>
  );
};

export default Footer;