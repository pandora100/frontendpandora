//BarraHerramientas7.js
//<Link to='/ModalStopProcs'></Link> 
import React, { Fragment, useState,useContext } from "react";
import unocuatrosiete from '../assets/windowsIcons/unocuatrosiete.png';
import './BarraHerramientas7.css'
import { Link, Redirect } from "react-router-dom";
import ModalStopProcs from "./ModalStopProcs";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas7 = ({t1}) => {
   const {isModalStopProcsOpen,setIsModalStopProcsOpen,setT1ModalStopProcs} = useContext(ModalContext);
    console.log('BarraHerramientas7 0 t1:',t1);
    console.log('BarraHerramientas7 1 isModalStopProcsOpen:',isModalStopProcsOpen);
    console.log('BarraHerramientas7 2 setIsModalStopProcsOpen:',setIsModalStopProcsOpen);
   
    console.log('BarraHerramientas7 3 setT1ModalStopProcs:',setT1ModalStopProcs);
    const onClose=()=>{
       setIsModalStopProcsOpen(!isModalStopProcsOpen);
       setT1ModalStopProcs('StopProc');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalStopProcsOpen && <ModalStopProcs onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={unocuatrosiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas7;

