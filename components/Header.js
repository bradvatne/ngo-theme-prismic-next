import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Header = ({ header }) => {
  const [stickyNav, setStickyNav] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      const scrollY = Math.abs(currPos.y);
      if (scrollY > 900 && !stickyNav) setStickyNav(true);
      if (scrollY < 100 && stickyNav) setStickyNav(false);
    },
    [stickyNav]
  );

  return (
    <Navbar
      expand="md"
      className={
        stickyNav
          ? "fixed-top w-100 bg-primary"
          : "position-absolute w-100 bg-transparent"
      }
    >
      <Navbar.Brand>
        <Link href="/">
          <a className="text-white">{RichText.asText(header.brand_text)}</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinks navList={header.nav_item} />
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavLinks = ({ navList }) => {
  return (
    <Nav className="ml-auto">
      {navList.map((navItem, index) => (
        <Link href={navItem.link.type} key={index}>
          <a className="text-white p-3">{RichText.asText(navItem.label)}</a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
