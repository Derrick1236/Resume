import React from 'react';
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navItem">
        <a className="navHeader" href="#">
          Basic Info
        </a>

        <div className="dropDownWrapper">
          <a className="navHeader" href="#">
            Details
          </a>
          <a className="dropDownItem" href="#">
            About
          </a>
          <a className="dropDownItem" href="">
            Education
          </a>
          <a className="dropDownItem" href="">
            Awards
          </a>
          <a className="dropDownItem" href="">
            Skills
          </a>
          <a className="dropDownItem" href="">
            Volunteer
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
