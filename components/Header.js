import { RichText } from "prismic-reactjs";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

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
    backgroundColor: "rgba(0, 123, 255, 1)",
    paddingBottom: "15px",
    paddingTop: "15px",
  };
  const normalStyle = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingBottom: "40px",
    paddingTop: "30px",
  };
  //Animation hook
  const animation = useSpring(scrollingNav ? scrollingStyle : normalStyle);

  return (
    <NavBar
      header={header}
      navType={normalStyle}
      toggleId={toggleId}
      animation={animation}
    />
  );
};

const NavBar = ({ header, navType, toggleId, animation }) => (
  <animated.div className="fixed-top w-100 navbar-dark" style={animation}>
    <Navbar
      className="navbar basic-navbar-nav navbar-expand-md"
      style={animation}
      expand="md"
    >
      <Container>
        <Navbar.Brand className="p-0">
          <Link href="/">
            <a className="text-white">{RichText.asText(header.brand_text)}</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={toggleId} />
        <Navbar.Collapse id={toggleId}>
          <NavLinks navList={header.nav_item} />
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
          <a className="text-white pl-2">{RichText.asText(navItem.label)}</a>
        </Link>
      ))}
    </Nav>
  );
};

export default Header;
