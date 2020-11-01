import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ header }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="position-absolute w-100 bg-transparent"
    >
      <Navbar.Brand href="#">{RichText.asText(header.brand_text)}</Navbar.Brand>
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
        <Nav.Link href="#" key={index} className="text-white">
          {RichText.asText(navItem.label)}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Header;
