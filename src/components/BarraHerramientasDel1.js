//BarraHerramientas1.js
//<Link to='/ModalTecnologias'></Link> 
import React, { Fragment, useState,useContext } from "react";
import unocuatrosiete from '../assets/unocuatrosiete.GIF';
import './BarraHerramientasDel1.css'
import { Link, Redirect } from "react-router-dom";
import ModalTecnologias from "./ModalTecnologias";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel1 = ({t1}) => {
   const {isModalTecnologiasOpen,setIsModalTecnologiasOpen,setT1ModalTecnologias} = useContext(ModalContext);
   console.log('BarraHerramientasDel1 0 t1:',t1);
    console.log('BarraHerramientasDel1 1 isModalTecnologiasOpen:',isModalTecnologiasOpen);
    console.log('BarraHerramientasDel1 2 setIsModalTecnologiasOpen:',setIsModalTecnologiasOpen);
    console.log('BarraHerramientassDel 3 setT1ModalTecnologias:',setT1ModalTecnologias);
    const onClose=()=>{
          setIsModalTecnologiasOpen(!isModalTecnologiasOpen);
          setT1ModalTecnologias('Del Grupo'); 
                        };
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalTecnologiasOpen && <ModalTecnologias onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={unocuatrosiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientasDel1;

