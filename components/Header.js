import { RichText } from "prismic-reactjs";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
import Logo from "../public/logo.svg";

const Header = ({ header }) => {
  //Scroll position hook, hideNav true = opaque background, false = transparent
  const [hideNav, setHideNav] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (prevPos.y < currPos.y) {
      setHideNav(false);
    }
    if (prevPos.y > currPos.y) {
      setHideNav(true);
    }
  });

  //Style Variables
  const scrollingStyle = {
    top: -100,
  };
  const normalStyle = {
    top: 0,
  };

  //Animation hook
  const animation = useSpring(hideNav ? scrollingStyle : normalStyle);

  return <NavBar header={header} animation={animation} hideNav={hideNav} />;
};

const NavBar = ({ header, animation }) => (
  <animated.div
    className={"fixed-top bg-blu w-100 navbar-dark p-0 m-0"}
    style={animation}
  >
    <Navbar
      className="navbar basic-navbar-nav navbar-expand-lg p-lg-0 m-lg-0 "
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="p-3 py-lg-0">
          <Link replace={true} href="/">
            <a className="text-white">
              <Logo className="logo" />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="btn-disable-focus mr-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks navList={header.nav_item} />
          <div className="d-flex flex-column align-items-center flex-lg-row">
            <Button
              variant="outline-light"
              className="mb-3 mt-3 mt-lg-0 mb-lg-0 ml-lg-2 w-50"
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
        <Link href={`/${navItem.link.type}`} key={index}>
          <a className="text-white p-4 text-center text-lg-left">
            {RichText.asText(navItem.label)}
          </a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
