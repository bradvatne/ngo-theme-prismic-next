import { RichText } from "prismic-reactjs";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
import Logo from "../public/logo.svg";

const Header = ({ header }) => {
  //Scroll position hook, scrollingNav true = opaque background, false = transparent
  const [scrollingNav, setScrollingNav] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (prevPos.y > currPos.y && !scrollingNav) {
      setScrollingNav(true);
      console.log("set to true: " + scrollingNav);
    }
    if (prevPos.y < currPos.y && scrollingNav) {
      setScrollingNav(false);
      console.log("set to false: " + scrollingNav);
    }
  });

  //Style Variables
  const scrollingStyle = {
    transform: "translateY(-100%)",
  };
  const normalStyle = {
    transform: "translateY(0)",
  };
  //Animation hook
  const animation = useSpring(scrollingNav ? scrollingStyle : normalStyle);

  return (
    <NavBar header={header} animation={animation} scrollingNav={scrollingNav} />
  );
};

const NavBar = ({ header, scrollingNav, animation }) => (
  <animated.div
    className={
      "fixed-top bg-blu w-100 navbar-dark p-0 m-0" +
      (scrollingNav ? " shadow-lg" : "")
    }
    style={animation}
  >
    <Navbar
      className="navbar basic-navbar-nav navbar-expand-lg p-lg-0 m-lg-0 "
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="p-0">
          <Link href="/">
            <a className="text-white">
              <Logo className="logo" />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
          <a className="text-white p-4 text-center text-lg-left">
            {RichText.asText(navItem.label)}
          </a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
