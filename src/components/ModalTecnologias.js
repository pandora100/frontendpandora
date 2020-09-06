//ModalTecnologias.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalTecnologias.css'
import InputGrupo from "./InputGrupo.js";
import InputGrupoDel from "./InputGrupoDel.js";
import ListGrupos from "./ListGrupos.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalTecnologias ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalTecnologias} = useContext(ModalContext); 
console.log('ModalTecnologias 0 children:',children);
console.log('ModalTecnologias 1 onClose:',onClose); 
console.log('ModalTecnologias 32 {t1ModalTecnologias}:',{t1ModalTecnologias});
console.log('ModalTecnologias 33 t1ModalTecnologias:',t1ModalTecnologias); 
let t1ModalTecnologiasdecision=t1ModalTecnologias;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Lista de Grupos</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>
        <br/>
       <div className='formulario'> 
       {t1ModalTecnologiasdecision ==='Add Grupo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalTecnologiasdecision ==='Del Grupo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalTecnologiasdecision ==='Add Grupo' ? <InputGrupo onClose={onClose}/> : <InputGrupoDel onClose={onClose}/>}  
       
      </div>
       {t1ModalTecnologiasdecision ==='Add Grupo' ? <h3 className='titulo'>Añadir Grupo</h3> : <h3 className='titulo'>Eliminar Grupo</h3>}  
      
      
      <ListGrupos/> 
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalTecnologias onClose={onClose}>
    {children}
    </ModalTecnologias>,
    document.getElementById('root')
  )
 
}
