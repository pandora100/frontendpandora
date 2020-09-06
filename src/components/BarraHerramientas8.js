//BarraHerramientas8.js
//<Link to='/ModalHistoricos'></Link> 
import React, { Fragment, useState,useContext } from "react";
import seissiete from '../assets/seissiete.GIF';
import './BarraHerramientas8.css'
import { Link, Redirect } from "react-router-dom";
import ModalHistoricos from "./ModalHistoricos";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas8 = ({t1}) => {
   const {isModalHistoricosOpen,setIsModalHistoricosOpen,setT1ModalHistoricos} = useContext(ModalContext);
    console.log('BarraHerramientas8 0 t1:',t1);
    console.log('BarraHerramientas8 1 isModalHistoricosOpen:',isModalHistoricosOpen);
    console.log('BarraHerramientas8 2 setIsModalHistoricosOpen:',setIsModalHistoricosOpen);
   
    console.log('BarraHerramientas8 3 setT1ModalHistoricos:',setT1ModalHistoricos);
    const onClose=()=>{
       setIsModalHistoricosOpen(!isModalHistoricosOpen);
       setT1ModalHistoricos('Historico');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalHistoricosOpen && <ModalHistoricos onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={seissiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas8;

