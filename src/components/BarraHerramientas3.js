//BarraHerramientas3.js
//<Link to='/ModalModulos'></Link> 
import React, { Fragment, useState,useContext } from "react";

import cincocuatroseis from '../assets/cincocuatroseis.GIF';
import './BarraHerramientas3.css'
import { Link, Redirect } from "react-router-dom";
import ModalModulos from "./ModalModulos";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas3 = ({t1}) => {
   const {isModalModulosOpen,setIsModalModulosOpen,setT1ModalModulos} = useContext(ModalContext);
    console.log('BarraHerramientas3 0 t1:',t1);
    console.log('BarraHerramientas3 1 isModalModulosOpen:',isModalModulosOpen);
    console.log('BarraHerramientas3 2 setIsModalModulosOpen:',setIsModalModulosOpen);
   
    console.log('BarraHerramientas3 3 setT1ModalModulos:',setT1ModalModulos);
    const onClose=()=>{
       setIsModalModulosOpen(!isModalModulosOpen);
       setT1ModalModulos('Add Modulo');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalModulosOpen && <ModalModulos onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={cincocuatroseis} alt="xxxxxx" />
          <span className="com__function_bar__text">Add Mod</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas3;

