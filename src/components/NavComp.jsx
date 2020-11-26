import React from 'react';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

export const NavComp = () => {
    return (
        <div className="App">
            <Nav activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> <br/><br/>

{/*-----------------------------Simple Navbar-------------------------- */}

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#">Product</Nav.Link>
      <Nav.Link href="#">Price</Nav.Link>
      <Nav.Link href="#">Menu</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam, excepturi, fugiat dicta quae impedit cum praesentium, magni tempore repellat nam iusto ratione! At sint exercitationem quas repellendus numquam neque.</h2>

        </div>
    );
};