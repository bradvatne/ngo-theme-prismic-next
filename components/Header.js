import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";

const Header = ({ header }) => {
  const [stickyNav, setStickyNav] = useState(false);
  useScrollPosition(({ currPos }) => {
    const scrollY = Math.abs(currPos.y);
    if (scrollY > 300 && !stickyNav) setStickyNav(true);
    if (scrollY < 299 && stickyNav) setStickyNav(false);
  });

  const stickyClass = "fixed-top w-100 bg-primary";
  const normalClass = "position-absolute w-100 bg-transparent";
  const toggleId = "basic-navbar-nav";

  return (
      <NavBar
        header={header}
        navType={stickyClass}
        toggleId={toggleId}
      />
  );
};

const NavBar = ({ header, navType, toggleId }) => (
  <Navbar expand="md" className={navType}>
    <Navbar.Brand>
      <Link href="/">
        <a className="text-white">{RichText.asText(header.brand_text)}</a>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls={toggleId} />
    <Navbar.Collapse id={toggleId}>
      <NavLinks navList={header.nav_item} />
    </Navbar.Collapse>
  </Navbar>
);

const NavLinks = ({ navList }) => {
  return (
    <Nav className="ml-auto">
      {navList.map((navItem, index) => (
        <Link href={navItem.link.type} key={index}>
          <a className="text-white p-2">{RichText.asText(navItem.label)}</a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
