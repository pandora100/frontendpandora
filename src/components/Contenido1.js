//Contenido1.js
import React, { Fragment, useState, useContext,useEffect,useRef } from "react";
import back from '../assets/back.GIF';
import './Contenido1.css'
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import {RemoteContext} from "../context/RemotosContext.js";
import { Link, Redirect } from "react-router-dom";
import {ModalContext} from "../context/ModalesContext.js";
import ModalEditAlarmas from "./ModalEditAlarmas";


const Contenido1 = ({t1,onClose}) => {
  console.log('!!!!!!!!!!!!!Contenido1 01 RemoteContext:',RemoteContext);
   const {gifs} = useContext(RemoteContext); 
   const { isModalEditAlarmasOpen,setIsModalEditAlarmasOpen,t1ModalEditAlarmas,setT1ModalEditAlarmas} = useContext(ModalContext); 
   let [fila,setFila] = useState(1);  
   console.log('!!!!!!!!!!!!!Contenido1145 fila :',fila);
   const referencia = useRef(); 
   console.log('!!!!!!!!!!!!!Contenido1 11 gifs:',gifs);
   console.log('!!!!!!!!!!!!!Contenido1 22 gifs.msg:',gifs.msg);
   // referencia.download("xlsx", "data.xlsx", {
   //   sheetName: "Export to Excel"
   //     }); 
    
   if (gifs.msg ==="Token is not valid"){
   console.log('!!!!!!!!!!!!!Contenido1 33 jwt malformed...');
   useEffect(() => {
  return <Redirect to="/login" className="irALogin">Login</Redirect>
   
  }, []);



  return <div><h1 style={{"color" : "yellow","fontSize" : "30px","textAlign" : "center"}} >{"     "}Por razones de seguridad refresque la pagina </h1></div>

   }
   else{
    console.log('Contenido1144 jwt valido.'); 
    

    const onCloseEdit=(e,row)=>{
      
     console.log("Contenido1146 rowClick row.getData():", row.getData()); 
      let tmprow=row.getData();
      console.log("Contenido1147 rowClick tmprow:", tmprow);
       console.log("Contenido1148 rowClick tmprow.id_evento:", tmprow.id_evento);   
     
      setFila(tmprow.id_evento);
      onClose();
      
      console.log('!!!!!!!!!!!!!Contenido1149 rowClick fila:',fila);
                     
                      
                     };  
    
    const onClose=()=>{
      setIsModalEditAlarmasOpen(!isModalEditAlarmasOpen);
      setT1ModalEditAlarmas('Edit Alarm');                   
                      
                     };  
   
 
       
    
     const columns = [
            { title: "id", field: "id_evento", width: 50 },
            { title: "agente", field: "nombreag", width: 175 },
            { title: "grupo", field: "nombregr", width: 125},
            { title: "criticity", field: "criticity",width: 100,cellHozAlign: "center", formatter: "star" },
            { title: "evento", field: "nombremo", width: 175 },
            { title: "est", field: "estado",width: 50,align:"center", formatter: "tickCross" },
            { title: "timestamp", field: "timestamp",cellHozAlign: "leftr" },
            {title: "utimestamp", field: "utimestamp", width: 100  },
            
            
        ];

        var data = gifs;
      const options = {
      
      tooltips:true,
      autoResize:false,
      movableRows: true,
      resizableRows:true,
      resizableColumns:true,
     height:"385px",
     pagination:"local", //enable local pagination.
     paginationSize:25 // this option can take any positive integer value (default = 10)
};

  

  return (
    <React.Fragment>
    
    <div className="com__content__right__card">
                 <div className="com__content__right__card__header">
                   
                   <div className="miTabla10">
                    <ReactTabulator
                    data={gifs}
                    columns={columns}
                    tooltips={true}
                    layout={"fitData"}
                    options={options}
                    ref={referencia}
                    rowClick={onCloseEdit}
  


                />
            </div > 

                  </div>
                   {isModalEditAlarmasOpen && <ModalEditAlarmas onClose={onClose} fila={fila}/>} 
             <div className="com__content__right__card__content">
             </div>
    </div>   
    </React.Fragment>
  );
};
};

export default Contenido1;