import React, { useState } from 'react';
import {Link} from 'react-router-dom';


import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='navbar fixed-top scrolling-navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>STATER</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
              <Link to="/">Inicio</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
              <Link to="/Anova">Anova</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
              <Link to="/Regression">Regresion</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-primary' role='button'>
                  Distribuciones
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link><Link to="/Binomial"><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Bin &nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Binomial </Link></MDBDropdownItem>
                  <MDBDropdownItem link ><Link to="/Hipergeometric"><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Hgeo</span>&nbsp;&nbsp; Hipergeometrica </Link></MDBDropdownItem>
                  <MDBDropdownItem link ><Link to="/Poisson"><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Po &nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Poisson </Link></MDBDropdownItem>
                  <MDBDropdownItem link ><Link to="/Normal"><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ N &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Normal </Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}