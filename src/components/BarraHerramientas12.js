//BarraHerramientas10.js

import React, { Fragment, useState,useContext } from "react";
import dosunocuatro from '../assets/dosunocuatro.GIF';
import './BarraHerramientas12.css'
import { Link, Redirect } from "react-router-dom";
import ModalDelAlarmas from "./ModalDelAlarmas";
import {ModalContext} from "../context/ModalesContext.js";

const BarraHerramientas12 = ({t1}) => {
const {isModalDelAlarmasOpen,setIsModalDelAlarmasOpen,t1ModalDelAlarmas,setT1ModalDelAlarmas} = useContext(ModalContext);   
   
    //console.log('BarraHerramientas12...');
  const onCloseDel=()=>{

       setIsModalDelAlarmasOpen(!isModalDelAlarmasOpen);
       setT1ModalDelAlarmas('Del Alarma');                   
                      
                     };

                          
  return (
    <React.Fragment>
     
        {isModalDelAlarmasOpen && <ModalDelAlarmas onCloseDel={onCloseDel}/>} 
          <img onClick={onCloseDel} onCloseDel={onCloseDel}className="com__function_bar__icon" src={dosunocuatro} alt="xxxxxx" title="Eliminar Alarma"/>
         
    </React.Fragment>
  );
};

export default BarraHerramientas12;

