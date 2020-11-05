import { RichText } from "prismic-reactjs";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

const Header = ({ header }) => {
  //Style Variables
  const toggleId = "basic-navbar-nav";
  const scrollingStyle = {
    backgroundColor: "rgba(0, 123, 255, 1)",
    paddingBottom: "15px",
    paddingTop: "15px"
  };
  const normalStyle = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingBottom: "40px",
    paddingTop: "30px",
  };

  const [scrollingNav, setscrollingNav] = useState(false);
  useScrollPosition(({ currPos }) => {
    const scrollY = Math.abs(currPos.y);
    if (scrollY > 68 && !scrollingNav) setscrollingNav(true);
    if (scrollY < 69 && scrollingNav) setscrollingNav(false);
  });

  //Animation hook
  const animation = useSpring(scrollingNav ? scrollingStyle : normalStyle);

  //Scroll position hook
  //scrollingNav == false : navBar transparent background, slight offset from top
  //scrollingNav === true : navBar has opaque background, offset from top removed

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
  <animated.div
    className="navbar navbar-expand-md fixed-top w-100 navbar-dark"
    style={animation}
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
