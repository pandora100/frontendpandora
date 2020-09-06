//BarraHerramientas1.js
//<Link to='/ModalAgentes'></Link> 
import React, { Fragment, useState,useContext } from "react";
import unocuatrosiete from '../assets/windowsIcons/unocuatrosiete.png';
import './BarraHerramientasDel2.css'
import { Link, Redirect } from "react-router-dom";
import ModalAgentes from "./ModalAgentes";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel2 = ({t1}) => {
   const {isModalAgentesOpen,setIsModalAgentesOpen,setT1ModalAgentes} = useContext(ModalContext);
   console.log('BarraHerramientasDel2 0 t1:',t1);
    console.log('BarraHerramientasDel2 1 isModalAgentesOpen:',isModalAgentesOpen);
    console.log('BarraHerramientasDel2 2 setIsModalAgentesOpen:',setIsModalAgentesOpen);
    console.log('BarraHerramientassDel 3 setT1ModalAgentes:',setT1ModalAgentes);
    const onClose=()=>{
          setIsModalAgentesOpen(!isModalAgentesOpen);
          setT1ModalAgentes('Del Agente'); 
                        };
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalAgentesOpen && <ModalAgentes onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={unocuatrosiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientasDel2;

