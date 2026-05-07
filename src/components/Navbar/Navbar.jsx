import { useState } from "react";
import {
  BrandLink,
  FindLocationButton,
  Header,
  MobileMenuButton,
  NavInner,
  NavLink,
  NavLinks,
  MobileMenuContainer,
  MobileMenuItem,
} from "./Navbar.style.js";

const navItems = [
  "Home",
  "About Us",
  "Unique Propositions",
  "Global Presence",
  "BMI",
  "Management",
  "FAQ",
  "Blog",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Header>
      <NavInner>
        <BrandLink href="/" aria-label="Chicking home">
          <img
            src="/images/logo.svg"
            alt="Chicking"
            width="155"
            height="52"
          />
        </BrandLink>

        <NavLinks aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item} href={item === "Home" ? "/" : "#"}>
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <FindLocationButton href="#">
          Find Location
          <span aria-hidden="true">⌖</span>
        </FindLocationButton>

        <MobileMenuButton 
          aria-label="Open navigation" 
          type="button"
          onClick={toggleMenu}
          isOpen={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenuContainer>
            {navItems.map((item) => (
              <MobileMenuItem key={item} href={item === "Home" ? "/" : "#"}>
                {item}
              </MobileMenuItem>
            ))}
            <MobileMenuItem href="#" isFindLocation>
              Find Location
              <span aria-hidden="true">⌖</span>
            </MobileMenuItem>
          </MobileMenuContainer>
        )}
      </NavInner>
    </Header>
  );
};

export default Navbar;
