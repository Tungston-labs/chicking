import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
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
    setIsMenuOpen((current) => !current);
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
              <MobileMenuItem key={item} href={item === "Home" ? "/" : "#"}>
                {item}
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
