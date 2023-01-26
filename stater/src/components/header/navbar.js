import React, { useState } from 'react';



import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

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
              <MDBNavbarLink active aria-current='page' href={"/"}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Distribuciones
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href={"/Binomial"}><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Bin &nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Binomial </MDBDropdownItem>
                  <MDBDropdownItem link href={"/Hipergeometric"}><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Hgeo</span>&nbsp;&nbsp; Hipergeometrica </MDBDropdownItem>
                  <MDBDropdownItem link href={"/Poisson"}><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Po &nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Poisson </MDBDropdownItem>
                  <MDBDropdownItem link href={"/"}><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ Exp &nbsp;&nbsp;</span>&nbsp;&nbsp; Exponencial </MDBDropdownItem>
                  <MDBDropdownItem link href={"/"}><i class="fas fa-dice"></i><span class="badge badge-success rounded-pill d-inline">~ N &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Normal </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}