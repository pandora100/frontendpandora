//pandoraHeader1.js
import React, { Fragment, useState } from "react";
import windows from '../assets/windows.GIF';
import './BarraPrincipal1.css'
const BarraPrincipal1 = ({titulo}) => {
   
  return (
    <Fragment>
     <section className="com__toolbar">
        <div className="com__options">
        {titulo}
        </div>
        <img className="com__windows-logo" src={windows} alt="windows" />
      </section>
    </Fragment>
  );
};

export default BarraPrincipal1;