//Sidebar1.js
import React, { Fragment, useState,useContext } from "react";
import back from '../assets/windowsIcons/back.png';
import './Sidebar1.css'
import pullup from '../assets/windowsIcons/pullup.png';
import viewInfo from '../assets/windowsIcons/view-info.png';
import folderSmall from '../assets/windowsIcons/folderSmall.png';
import logogit from '../assets/logogit.png';
import ModalNewAlarmas from "./ModalNewAlarmas";
import ModalDelAlarmas from "./ModalDelAlarmas";
import ModalCorrActivas from "./ModalCorrActivas";
import {ModalContext} from "../context/ModalesContext.js";
import {RemoteContext} from "../context/RemotosContext.js";
import { Redirect} from "react-router-dom";
const Sidebar1 = ({t1}) => {

   const {tecnologias,correlaciones} = useContext(RemoteContext); 
    console.log('!!!!!!!!!!!!!Sidebar1 00 RemoteContext:',RemoteContext);
 console.log('!!!!!!!!!!!!!Sidebar1 01 {tecnologias}:',{tecnologias});
 console.log('!!!!!!!!!!!!!Sidebar1 02 tecnologias:',tecnologias);
 console.log('!!!!!!!!!!!!!Sidebar1 03 {correlaciones}:',{correlaciones});
 console.log('!!!!!!!!!!!!!Sidebar1 04 correlaciones:',correlaciones);
 const {isModalDelAlarmasOpen,setIsModalDelAlarmasOpen,t1ModalDelAlarmas,setT1ModalDelAlarmas,isModalNewAlarmasOpen,setIsModalNewAlarmasOpen,t1ModalNewAlarmas,setT1ModalNewAlarmas,isModalcorrActivasOpen,setIsModalcorrActivasOpen,t1ModalcorrActivas,setT1ModalcorrActivas} = useContext(ModalContext); 
 // console.log('!!!!!!!!!!!!!!!!!!!!!Sidebar1 1001 t1ModalNewAlarmas:',t1ModalNewAlarmas);
 // console.log('!!!!!!!!!!!!!!!!!!!!!Sidebar1 1002 isModalNewAlarmasOpen:',isModalNewAlarmasOpen);

 const data=tecnologias.map(tecno=>{
  const nombre=tecno.nombre;
  return nombre;

 });
 console.log('!!!!!!!!!!!!!Sidebar1 03 data:',data);
 const datacorr=correlaciones.map(corr=>{
  const nombrecorr=corr.nombre_correlacion;
  const nombrecorrtecno=corr.nombre_grupo;
  return [nombrecorrtecno,nombrecorr];

 });
 console.log('!!!!!!!!!!!!!!!Sidebar1 004 datacorr:',datacorr);
/*
     {data.map((tecno,index)=>{
                  <div key={index} style={{"color" : "red"}}>{tecno}</div>
                 })} 
  console.log('!!!!!!!!!!!!!Sidebar1 03 data:',data);
 */

 const onClose=()=>{

       setIsModalNewAlarmasOpen(!isModalNewAlarmasOpen);
       setT1ModalNewAlarmas('Add NewAlarma');                   
                      
                     };
const onCloseDel=()=>{

       setIsModalDelAlarmasOpen(!isModalDelAlarmasOpen);
       setT1ModalDelAlarmas('Del Alarma');                   
                      
                     };


const onCloseEdit=()=>{

       
       setIsModalcorrActivasOpen(!isModalcorrActivasOpen);
       setT1ModalcorrActivas('Edit Corr');                   
                      
                     };  

  return (
    <Fragment>
   <div className="com__content__left">
               <div className="com__content__left__header">
                      <div className="com__content__left__card">
                           <div className="com__content__left__card__header">
                           <div className="com__content__left__card__header__text"> 
                              COMANDOS

                          </div>

                          <img
                            src={pullup}
                            alt=""
                            className="com__content__left__card__header__img"
                          />
                        </div>
                        </div>
                        <div className="com__content__left__card__content">
                        <div className="com__content__left__card__row">
                        <div className="com__content__left__card__row__div" style={{"color" : "yellow","backgroundColor" : "blue"}}>
                        <img 
                          onClick={onClose}
                          src={logogit}
                          alt=""
                          className="com__content__left__card__header__img"
                        />Insertar Alarma
                        {isModalNewAlarmasOpen && <ModalNewAlarmas onClose={onClose}/>} 
                        </div>
                        
                        
                        <div className="com__content__left__card__row__div" style={{"color" : "yellow","backgroundColor" : "blue"}}>
                        <img 
                          onClick={onCloseDel}
                          src={logogit}
                          alt=""
                          className="com__content__left__card__header__img"
                        />Eliminar Alarma
                        {isModalDelAlarmasOpen && <ModalDelAlarmas onCloseDel={onCloseDel}/>} 
                        </div>


                       

                        
                        </div>
                        </div>
                        

              </div>
           

             <div className="com__content__left__header">

              {data.map((tecno,index)=>{
              console.log("tecnow:",tecno);
              return <div>
              <div className="com__content__left__card">
              <div className="com__content__left__card__header">
               <div key={index} className="com__content__left__card__header__text">
                  {tecno}
                </div>
                <img
                  src={pullup}
                  alt=""
                  className="com__content__left__card__header__img"
                />
                
              </div>
                           {datacorr.map((corr,index2)=>{
                           console.log("filter corr:",corr);
                           console.log("filter corr:",corr[0]);
                           if (corr[0]===tecno){
                           return <div>
                           <div key={index2} className="com__content__left__card__content">
                                    <div className="com__content__left__card__row">
                                    <img
                                      onClick={onCloseEdit}
                                      className="com__content__left__card__img"
                                      src={folderSmall}
                                      alt="control"
                                    />{corr[1]}
                                     {isModalcorrActivasOpen && <ModalCorrActivas onCloseEdit={onCloseEdit}/>} 
                                    </div>
                                    </div>
                                    
                                    </div>
                                    }})}
              </div>
              </div>
              })}

              </div>
              </div> 
               
           
    </Fragment>
  );
};

export default Sidebar1;