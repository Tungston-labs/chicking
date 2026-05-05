"use client";

import Image from "next/image";
import {
  BrandLink,
  FindLocationButton,
  Header,
  MobileMenuButton,
  NavInner,
  NavLink,
  NavLinks,
} from "./Navbar.style";

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
  return (
   
    <Header>
      <NavInner>
        <BrandLink href="/" aria-label="Chicking home">
          <Image
            src="/images/logo.svg"
            alt="Chicking"
            width={155}
            height={52}
            priority
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

        <MobileMenuButton aria-label="Open navigation" type="button">
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </NavInner>
    </Header>
  );
};

export default Navbar;
