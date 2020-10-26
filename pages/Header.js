import { RichText } from "prismic-reactjs";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ header }) => {
  console.log(header);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">{RichText.asText(header.brand_text)}</Navbar.Brand>
      <NavLinks navList={header.nav_item} />
    </Navbar>
  );
};

const NavLinks = ({ navList }) => {
  console.log("navlinks data check");
  console.log(navList);
  return (
    <Nav className="mr-auto">
      {navList.map((navItem, index) => (
        <Nav.Link href="#" key={index}>
          {RichText.asText(navItem.label)}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Header;
