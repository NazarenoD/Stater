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
        <Link className='text-dark' to ='/'>
        <b>STATER</b>
        </Link>

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
           
              
              <Link className='nav-item active m-2 text-dark' to="/">Inicio</Link>
              
           
         
              
              <Link className='nav-item active m-2 text-dark' to="/Anova">Anova</Link>
             
    
          
              <Link className='nav-item active m-2 text-dark' to="/Regression">Regresion</Link>
          
            
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-dark' role='button'>
                  Distribuciones
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <Link className='dropdown-item' to="/Binomial"><i className="fas fa-dice"></i><span className="badge badge-success rounded-pill d-inline">~ Bin &nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Binomial </Link>
                <Link className='dropdown-item' to="/Hipergeometric"><i className="fas fa-dice"></i><span className="badge badge-success rounded-pill d-inline">~ Hgeo</span>&nbsp;&nbsp; HGeo </Link>
                <Link className='dropdown-item' to="/Poisson"><i className="fas fa-dice"></i><span className="badge badge-success rounded-pill d-inline">~ Po &nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Poisson </Link>
                <Link className='dropdown-item' to="/Normal"><i className="fas fa-dice"></i><span className="badge badge-success rounded-pill d-inline">~ N &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; Normal </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
           
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}