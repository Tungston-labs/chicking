import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink as RouterLink } from "react-router-dom";
import {
  BrandLink,
  FindLocationButton,
  Header,
  MobileMenuButton,
  MobileMenuContainer,
  MobileMenuItem,
  NavInner,
  NavLink,
  NavLinks,
} from "./Navbar.style.js";

import { navItems } from "../HomeSections/data/homeSectionsData.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <Header>
      <NavInner>
 <BrandLink
          as={RouterLink}
          to="/"
        >
          <img
            src="/images/logo.svg"
            alt="Chicking"
            width="155"
            height="52"
          />
        </BrandLink>

         <NavLinks>
          {navItems.map((item) => (
  <NavLink
    as={RouterLink}
    key={item.path}
    to={item.path}
    $active={activeItem === item.name}
    onClick={() => handleNavItemClick(item.name)}
  >
    {item.name}
  </NavLink>
))}
        </NavLinks>

        <FindLocationButton href="#">
          Find Location
          <CiLocationArrow1 aria-hidden="true" />
        </FindLocationButton>

        <MobileMenuButton
          aria-label="Open navigation"
          type="button"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>

        {isMenuOpen && (
          <MobileMenuContainer>
           {navItems.map((item) => (
  <MobileMenuItem
    as={RouterLink}
    key={item.path}
    to={item.path}
    $active={activeItem === item.name}
    onClick={() => handleNavItemClick(item.name)}
  >
    {item.name}
  </MobileMenuItem>
))}
          </MobileMenuContainer>
        )}
      </NavInner>
    </Header>
  );
};

export default Navbar;
