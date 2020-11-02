import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Header = ({ header }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="position-absolute w-100 bg-transparent"
    >
      <Navbar.Brand>
        <Link href="/"><a className="text-white">{RichText.asText(header.brand_text)}</a></Link>
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
