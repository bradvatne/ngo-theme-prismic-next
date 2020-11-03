import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Fade from "react-bootstrap/Fade";

const Header = ({ header }) => {
  const [stickyNav, setStickyNav] = useState({
    render: false,
    animate: false,
  });
  useScrollPosition(({ currPos }) => {
    const scrollY = Math.abs(currPos.y);
    if (scrollY > 300 && !stickyNav.render)
      setStickyNav({
        render: true,
        animate: false,
      });
    if (scrollY > 800 && !stickyNav.render)
      setStickyNav({
        render: true,
        animate: true,
      });
    if (scrollY < 299 && stickyNav.render)
      setStickyNav({
        render: false,
        animate: false,
      });
  });

  const stickyClass = "fixed-top w-100 bg-primary";
  const normalClass = "position-absolute w-100 bg-transparent";
  const toggleId = "basic-navbar-nav";

  //render = render the component
  //animate = trigger fade in animation, making the compononent visible

  if (!stickyNav.render && !stickyNav.animate)
    return <NavBar header={header} navType={normalClass} />;
  if (stickyNav.render)
    return (
      <Fade in={stickyNav.animate}>
        <NavBar header={header} navType={stickyClass} />
      </Fade>
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
