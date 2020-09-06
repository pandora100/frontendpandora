//Header.js
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import './Header.css'
const Header = () => {
  
  return (
    <Fragment>
    
     <div className='gf-header-container'>
    
      <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
        </Link>

   
    </div>
    </Fragment>
  );
};

export default Header;