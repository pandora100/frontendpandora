//ModalNewAlarmas.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalNewAlarmas.css'
import InputDependencia from "./InputDependencia.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalNewAlarmas ({ children,onClose}) {

 const {t1ModalNewAlarmas} = useContext(ModalContext); 
console.log('ModalNewAlarmas 0 children:',children);
console.log('ModalNewAlarmas 1 onClose:',onClose); 
console.log('ModalNewAlarmas 32 {t1ModalNewAlarmas}:',{t1ModalNewAlarmas});
console.log('ModalNewAlarmas 33 t1ModalNewAlarmas:',t1ModalNewAlarmas); 
let t1ModalNewAlarmasdecision=t1ModalNewAlarmas;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Insertar Nueva Alarma</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>

       <h3 className='titulo'>Añadir Alarma</h3>
       
       <div className='formulario'> 
       <InputDependencia onClose={onClose}/>
       
      </div>
       
      
      
      
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalNewAlarmas onClose={onClose}>
    {children}
    </ModalNewAlarmas>,
    document.getElementById('root')
  )
 
}
