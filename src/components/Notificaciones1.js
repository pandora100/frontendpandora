//Notificaciones1.js

import React, { Fragment, useState,useContext, useRef,useEffect } from "react";
import './Notificaciones1.css'
import pullup from '../assets/pullup.GIF';
import viewInfo from '../assets/view-info.GIF';
import folderSmall from '../assets/folderSmall.GIF';
import logogit from '../assets/logogit.PNG';
import { Redirect} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";
import "./Notificaciones1.css";
import {RemoteContext} from "../context/RemotosContext.js";
toast.configure();
const Notificaciones1 = ({t1}) => {
let content = useRef(null);  
let [localInfo, setLocalInfo] = React.useState('Reinicio');
let [list, setList] = useState([`${new Date()}`]);
let [height, setHeight] = useState(0);
//////
let {statusgifs} = React.useContext(RemoteContext);
  let {statustecnologias} = React.useContext(RemoteContext);
  let {statuscorrelaciones} = React.useContext(RemoteContext);
  let {statusagentes} = React.useContext(RemoteContext);
  let {statusmodulos} = React.useContext(RemoteContext);
  let {statusestadisticas} = React.useContext(RemoteContext); 



////
  const addGifsToList = ()=> {
    setLocalInfo([statusgifs]);
    addToList ();
};
  const addTecnologiasToList = ()=> {
    setLocalInfo([statustecnologias]);
     addToList ();
};
 const addstatusCorrelacionesToList = ()=> {
    setLocalInfo([statuscorrelaciones]);
     addToList ();
};
const addstatusAgentesToList = ()=> {
   setLocalInfo([statusagentes]);
    addToList ();
};
const addstatusModulosToList = ()=> {
    setLocalInfo([statusmodulos]);
     addToList ();
};
const addstatusEstadisticasToList = ()=> {
    setLocalInfo([statusestadisticas]);
     addToList ();
};
  const addToList = ()=> {
    setList([...list,localInfo]);
};

 const buscarInformacion =() => {
 // addTecnologiasToList();
 // addstatusCorrelacionesToList();
 // addstatusAgentesToList();
 // addstatusModulosToList();
 // addstatusEstadisticasToList();
 addGifsToList();
// addToList();
 };


    useEffect(()=> {
    //console.log("height:"+height);
    //console.log("content.current.scrollHeight:"+content.current.scrollHeight);  
    if (height >= 0 && height <=300) {
     setHeight(content.current.scrollHeight);
    }
    else {
      setList([`${new Date()} `]);

       setHeight(0);
       
    }
   }, [list]);
    useEffect(() => {
    const timer = setTimeout(() => {
    buscarInformacion();
     }, 10000);
    
    return () => clearTimeout(timer); 
   
},[buscarInformacion]);



  return (
    <React.Fragment>
   
              <div className="notif__com__content__left" style={{height:`${height}px`}} ref={content}> 
              
                        {list.map((item, index)=>{ 
                          return <div>
                         <div className="notif__com__content__left__card" >
                         <div className="notif__com__content__left__card__header">
                         <div key={new Date()} className="com__content__left__card__header__text">
                         {item}<ToastContainer limit={12}/>                          
                          
                          </div>
                          </div>
                          </div>
                          </div>
                          })}
                
            </div>
           
    </React.Fragment>
  );
};

export default Notificaciones1;