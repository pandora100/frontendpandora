//ModalModulos.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalModulos.css'
import InputModulo from "./InputModulo.js";
import InputModuloDel from "./InputModuloDel.js";
import ListModulos from "./ListModulos.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalModulos ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalModulos} = useContext(ModalContext); 
console.log('ModalModulos 00 children:',children);
console.log('ModalModulos 1 onClose:',onClose); 
console.log('ModalModulos 32 {t1ModalModulos}:',{t1ModalModulos});
console.log('ModalModulos 33 t1ModalModulos:',t1ModalModulos); 
let t1ModalModulosdecision=t1ModalModulos;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Lista de Modulos</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>
        <br/>
      
       <div className='formulario'> 
       {t1ModalModulosdecision ==='Add Modulo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalModulosdecision ==='Del Modulo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalModulosdecision ==='Add Modulo' ? <InputModulo onClose={onClose}/> : <InputModuloDel onClose={onClose}/>}  
       
      </div>
     {t1ModalModulosdecision ==='Add Modulo' ? <h3 className='titulo'>Añadir Modulo</h3> : <h3 className='titulo'>Eliminar Modulo</h3>}  
      <ListModulos/> 
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalModulos onClose={onClose}>
    {children}
    </ModalModulos>,
    document.getElementById('root')
  )
 
}
