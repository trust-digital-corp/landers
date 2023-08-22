import React from 'react';
import homeLogo from '../assets/img/home-logo.png';
import correspondenceLogo from '../assets/img/OFFICIAL.png'

const Header = ({ data }) => {
  // Determine the logo based on the brandname
  let logoImage;
  if (data.brandname.includes('Home')) {
    logoImage = homeLogo; // Use the imported logo for 'home' brand
  } else if (data.brandname.includes('Car')) {
    logoImage = homeLogo; // Use the imported logo for 'auto' brand
  } else {
    logoImage = correspondenceLogo;
  } // Add more conditions for other brandnames

  return (
    <>
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src={logoImage} alt={data.brandname} style={{ maxHeight: '160px', color: '#FFF' }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
