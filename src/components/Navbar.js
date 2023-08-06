import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

// import Logo from '../assets/images/Logo.png';
import Logo from '../assets/images/Logo-1.png';


const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  let href, navtitle, href1, navtitle1;

  if (currentPath === '/') {
    href = '#exercises';
    navtitle = 'Exercises';
  } else if (currentPath.startsWith('/exercise/')) {
    href1 = '#similar'
    navtitle1 = 'Similar Exercises'
    href = '#videos';
    navtitle = 'Videos';
  }

  const [activeLink, setActiveLink] = useState('/');

  const handleAnchorClick = (event, targetHref) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveLink(targetHref)
  }

  const handleHomeClick = () => {
    setActiveLink('/');
  }

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">

      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px', margin: '0px 20px' }} />
      </Link>

      <Stack

        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"

      >

        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: activeLink === "/" ? '3px solid #FF2625' : 'none'  }} onClick={handleHomeClick}>Home</Link>
        <a href={href} style={{ textDecoration: 'none', color: '#3A1212',  borderBottom: activeLink === href ? '3px solid #FF2625' : 'none' }} onClick={(e) => handleAnchorClick(e, href)}>{navtitle}</a>

        {currentPath.startsWith('/exercise/') && (
          <>
            <a href="#similar" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: activeLink === '#similar' ? '3px solid #FF2625' : 'none' }} onClick={(e) => handleAnchorClick(e, '#similar')}>
              
              Similar Exercises
            
            </a>
      
          </>
        )}
      </Stack>
    </Stack>


  )
}

export default Navbar