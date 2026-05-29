import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
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
  NavActions,
} from "./Navbar.style.js";

import { navItems } from "../HomeSections/data/homeSectionsData.js";

const normalizePath = (path) => (path === "/" ? "/" : path.replace(/\/+$/, ""));

const isActivePath = (currentPath, itemPath) => {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedItemPath = normalizePath(itemPath);

  if (normalizedItemPath === "/") {
    return normalizedCurrentPath === "/";
  }

  return (
    normalizedCurrentPath === normalizedItemPath ||
    normalizedCurrentPath.startsWith(`${normalizedItemPath}/`)
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleNavItemClick = () => {
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
              $active={isActivePath(activePath, item.path)}
              onClick={handleNavItemClick}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <NavActions>
          <FindLocationButton as={RouterLink} to="/franchiseform">
            Franchise With Us
            <CiLocationArrow1 aria-hidden="true" />
          </FindLocationButton>

          <MobileMenuButton
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            $open={isMenuOpen}
            type="button"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavActions>

        {isMenuOpen && (
          <MobileMenuContainer>
            {navItems.map((item) => (
              <MobileMenuItem
                as={RouterLink}
                key={item.path}
                to={item.path}
                $active={isActivePath(activePath, item.path)}
                onClick={handleNavItemClick}
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
