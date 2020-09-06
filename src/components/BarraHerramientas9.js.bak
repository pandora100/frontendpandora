//BarraHerramientas9.js
//<Link to='/ModalConfigs'></Link> 
import React, { Fragment, useState,useContext } from "react";
import cincosiete from '../assets/windowsIcons/cincosiete.png';
import './BarraHerramientas9.css'
import { Link, Redirect } from "react-router-dom";
import ModalConfigs from "./ModalConfigs";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas9 = ({t1}) => {
   const {isModalConfigsOpen,setIsModalConfigsOpen,setT1ModalConfigs} = useContext(ModalContext);
    console.log('BarraHerramientas9 0 t1:',t1);
    console.log('BarraHerramientas9 1 isModalConfigsOpen:',isModalConfigsOpen);
    console.log('BarraHerramientas9 2 setIsModalConfigsOpen:',setIsModalConfigsOpen);
   
    console.log('BarraHerramientas9 3 setT1ModalConfigs:',setT1ModalConfigs);
    const onClose=()=>{
       setIsModalConfigsOpen(!isModalConfigsOpen);
       setT1ModalConfigs('Config');                   
                      
                     };
                          
  return (
    <React.Fragment>
     <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
    {isModalConfigsOpen && <ModalConfigs onClose={onClose}/>}
        
          <img onClick={onClose} className="com__function_bar__icon" src={cincosiete} alt="xxxxxx" />
          <span className="com__function_bar__text">{t1}</span>
          
         </div>
        </section>
    </React.Fragment>
  );
};

export default BarraHerramientas9;

