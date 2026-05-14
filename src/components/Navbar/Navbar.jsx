import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link as RouterLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Header>
      <NavInner>
        <BrandLink as={RouterLink} to="/" aria-label="Chicking home">
          <img
            src="/images/logo.svg"
            alt="Chicking"
            width="155"
            height="52"
          />
        </BrandLink>

        <NavLinks aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              as={RouterLink}
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
              onClick={handleNavItemClick}
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
          aria-expanded={isMenuOpen}
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
                $active={location.pathname === item.path}
                onClick={handleNavItemClick}
              >
                {item.name}
              </MobileMenuItem>
            ))}
            <MobileMenuItem href="#" $isFindLocation>
              Find Location
              <CiLocationArrow1 aria-hidden="true" />
            </MobileMenuItem>
          </MobileMenuContainer>
        )}
      </NavInner>
    </Header>
  );
};

export default Navbar;
