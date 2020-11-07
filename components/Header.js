import { RichText } from "prismic-reactjs";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
import Logo from '../public/logo.svg'

const Header = ({ header }) => {
  //Scroll position hook, scrollingNav true = opaque background, false = transparent
  const [scrollingNav, setscrollingNav] = useState(false);
  useScrollPosition(({ currPos }) => {
    const scrollY = Math.abs(currPos.y);
    if (scrollY > 68 && !scrollingNav) setscrollingNav(true);
    if (scrollY < 69 && scrollingNav) setscrollingNav(false);
  });

  //Style Variables
  const toggleId = "basic-navbar-nav";
  const scrollingStyle = {
    backgroundColor: "rgba(101,157,189, 1)",
  };
  const normalStyle = {
    backgroundColor: "rgba(0, 0, 0, 0)",
  };
  //Animation hook
  const animation = useSpring(scrollingNav ? scrollingStyle : normalStyle);

  return (
    <NavBar
      header={header}
      toggleId={toggleId}
      animation={animation}
      scrollingNav={scrollingNav}
    />
  );
};

const NavBar = ({ header, scrollingNav, toggleId, animation }) => (
  <animated.div
    className={
      "fixed-top w-100 navbar-dark p-0 m-0" + (scrollingNav ? " shadow-lg" : "")
    }
    style={animation}
  >
    <Navbar
      className="navbar basic-navbar-nav navbar-expand-lg p-lg-0 m-lg-0"
      style={animation}
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="p-0 py-lg-2">
          <Link href="/">
            <a className="text-white"><Logo className="logo"/></a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={toggleId} />
        <Navbar.Collapse id={toggleId}>
          <NavLinks navList={header.nav_item} />
          <div className="d-flex flex-column align-items-center flex-lg-row">
            <Button
              variant="outline-light"
              className="mb-3 mb-lg-0 ml-lg-2 w-50"
            >
              <span className="px-2">Volunteer</span>
            </Button>
            <Button variant="light" className="mb-3 mb-lg-0 ml-lg-2 w-50">
              <span className="px-2">Donate</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </animated.div>
);

const NavLinks = ({ navList }) => {
  return (
    <Nav className="ml-auto">
      {navList.map((navItem, index) => (
        <Link href={navItem.link.type} key={index}>
          <a className="text-white p-3 text-center text-lg-left">
            {RichText.asText(navItem.label)}
          </a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
