import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Cliente del API </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-user">Crear</NavDropdown.Item>
                  <NavDropdown.Item href="/fetch-user-data">Usuarios</NavDropdown.Item>
                  <NavDropdown.Item href="/remove-user">Borrar</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login-user">Prueba de Login</NavDropdown.Item>
                </NavDropdown>      
                <NavDropdown title="Ordenes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-order">Crear</NavDropdown.Item>
                  <NavDropdown.Item href="/fetch-order-data">Ordenes</NavDropdown.Item>
                  <NavDropdown.Item href="/remove-order">Borrar</NavDropdown.Item>
                </NavDropdown>                                          
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
