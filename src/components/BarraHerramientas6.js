//BarraHerramientas6.js
//<Link to='/ModalStartProcs'></Link> 
import React, { Fragment, useState,useContext } from "react";
import dosnuevenueve from '../assets/dosnuevenueve.GIF';
import './BarraHerramientas6.css'
import { Link, Redirect } from "react-router-dom";
import ModalStartProcs from "./ModalStartProcs";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas6 = ({t1}) => {
   const {isModalStartProcsOpen,setIsModalStartProcsOpen,setT1ModalStartProcs} = useContext(ModalContext);
    console.log('BarraHerramientas6 0 t1:',t1);
    console.log('BarraHerramientas6 1 isModalStartProcsOpen:',isModalStartProcsOpen);
    console.log('BarraHerramientas6 2 setIsModalStartProcsOpen:',setIsModalStartProcsOpen);
   
    console.log('BarraHerramientas6 3 setT1ModalStartProcs:',setT1ModalStartProcs);
    const onClose=()=>{
       setIsModalStartProcsOpen(!isModalStartProcsOpen);
       setT1ModalStartProcs('StartProc');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalStartProcsOpen && <ModalStartProcs onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={dosnuevenueve} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas6;

