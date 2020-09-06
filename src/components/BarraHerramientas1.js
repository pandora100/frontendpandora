//BarraHerramientas1.js
//<Link to='/ModalTecnologias'></Link> 
import React, { Fragment, useState,useContext } from "react";
import tresunocero from '../assets/tresunocero.GIF';
import './BarraHerramientas1.css'
import { Link, Redirect } from "react-router-dom";
import ModalTecnologias from "./ModalTecnologias";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas1 = ({t1}) => {
   const {isModalTecnologiasOpen,setIsModalTecnologiasOpen,setT1ModalTecnologias} = useContext(ModalContext);
    console.log('BarraHerramientas1 0 t1:',t1);
    console.log('BarraHerramientas1 1 isModalTecnologiasOpen:',isModalTecnologiasOpen);
    console.log('BarraHerramientas1 2 setIsModalTecnologiasOpen:',setIsModalTecnologiasOpen);
   
    console.log('BarraHerramientas1 3 setT1ModalTecnologias:',setT1ModalTecnologias);
    const onClose=()=>{
       setIsModalTecnologiasOpen(!isModalTecnologiasOpen);
       setT1ModalTecnologias('Add Grupo');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalTecnologiasOpen && <ModalTecnologias onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={tresunocero} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas1;

