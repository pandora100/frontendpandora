//BarraHerramientasDel4.js
//<Link to='/ModalCorrelaciones'></Link> 
import React, { Fragment, useState,useContext } from "react";
import unocuatrosiete from '../assets/unocuatrosiete.GIF';
import './BarraHerramientasDel2.css'
import { Link, Redirect } from "react-router-dom";
import ModalCorrelaciones from "./ModalCorrelaciones";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel2 = ({t1}) => {
   const {isModalCorrelacionesOpen,setIsModalCorrelacionesOpen,setT1ModalCorrelaciones} = useContext(ModalContext);
   console.log('BarraHerramientasDel2 0 t1:',t1);
    console.log('BarraHerramientasDel2 1 isModalCorrelacionesOpen:',isModalCorrelacionesOpen);
    console.log('BarraHerramientasDel2 2 setIsModalCorrelacionesOpen:',setIsModalCorrelacionesOpen);
    console.log('BarraHerramientassDel 3 setT1ModalCorrelaciones:',setT1ModalCorrelaciones);
    const onClose=()=>{
          setIsModalCorrelacionesOpen(!isModalCorrelacionesOpen);
          setT1ModalCorrelaciones('Del Corr'); 
                        };
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalCorrelacionesOpen && <ModalCorrelaciones onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={unocuatrosiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientasDel2;

