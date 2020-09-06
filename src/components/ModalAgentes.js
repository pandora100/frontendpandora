//ModalAgentes.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalAgentes.css'
import InputAgente from "./InputAgente.js";
import InputAgenteDel from "./InputAgenteDel.js";
import ListAgentes from "./ListAgentes.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalAgentes ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalAgentes} = useContext(ModalContext); 
console.log('ModalAgentes 00 children:',children);
console.log('ModalAgentes 1 onClose:',onClose); 
console.log('ModalAgentes 32 {t1ModalAgentes}:',{t1ModalAgentes});
console.log('ModalAgentes 33 t1ModalAgentes:',t1ModalAgentes); 
let t1ModalAgentesdecision=t1ModalAgentes;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Lista de Agentes</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>
        <br/>
      
       <div className='formulario'> 
       {t1ModalAgentesdecision ==='Add Agente' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalAgentesdecision ==='Del Agente' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalAgentesdecision ==='Add Agente' ? <InputAgente onClose={onClose}/> : <InputAgenteDel onClose={onClose}/>}  
       
      </div>
      {t1ModalAgentesdecision ==='Add Agente' ? <h3 className='titulo'>Añadir Agente</h3> : <h3 className='titulo'>Eliminar Agente</h3>}  
      <ListAgentes/> 
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalAgentes onClose={onClose}>
    {children}
    </ModalAgentes>,
    document.getElementById('root')
  )
 
}
